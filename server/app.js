import 'dotenv/config';
import { join } from 'path';
import express from 'express';


const app = express();

const publicPath = join(__dirname, '../public');

app.use(express.static(publicPath));


app.set('port', process.env.PORT || 300);

app.listen(app.get('port'), ()=> {
    console.log(`We are now live on port: ${app.get('port')}`)
})
