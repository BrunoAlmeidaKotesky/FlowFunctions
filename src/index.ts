import express from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import xmlparser from 'express-xml-bodyparser';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(xmlparser());
app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(5544, 'localhost', (err) => err ? console.log(err) : console.log("Servidor escutando em http://localhost:5544"))