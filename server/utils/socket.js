import socketIO from 'socket.io';
import { makeMessage } from './helper';

class SocketIO {
  constructor(server) {
    this.io = socketIO(server);
    this.sockets = [];
  }
  init() {
    this.io.on('connection', socket => {
      console.log('A new user just connected');
      this.sockets.push(socket);
      //Join chat room
      socket.broadcast.emit(
        'newMessage',
        makeMessage('Admin', 'A new user has just joined the chatroom')
      );
      socket.emit('newMessage', makeMessage('Admin', 'Welcome on board.'));
      //User types in a message
      socket.on('createMessage', ({ from, text }, cb) => {
        //To do:
        // Save to db
        cb('saved');
        this.io.emit('newMessage', makeMessage(from, text));
      });
      socket.on('disconnect', () => {
        console.log('user is disconnected');
      });
    });
  }
  static initialize(io) {
    io.init();
  }
}

export default SocketIO;
