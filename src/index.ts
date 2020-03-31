import express from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import xmlparser from 'express-xml-bodyparser';
import os from 'os' ;


const app = express();
const PORT = process.env.PORT || 5544;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(xmlparser());
app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(PORT, ()=> console.log("listening on" + PORT));