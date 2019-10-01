import 'dotenv/config';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import http from 'http';
import SocketIO from './utils/socket';

const app = express();

const publicPath = join(__dirname, '../public');

app.use(express.static(publicPath));
app.use(morgan('dev'));

const server = http.createServer(app);
const io = new SocketIO(server);
SocketIO.initialize(io);
app.set('port', process.env.PORT || 300);

server.listen(app.get('port'), () => {
  console.log(`We are now live on port: ${app.get('port')}`);
});
