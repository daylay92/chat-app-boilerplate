const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
});
socket.on('newMessage', data => {
  console.log(data.from, data.createdAt, data.text);
});
socket.on('disconnect', () => {
  console.log('we just lost connection to the server');
});
socket.emit(
  'createMessage',
  {
    text: 'How is it going?',
    from: 'Jude Kajuda'
  },
  msg => {
    console.log(msg);
  }
);
