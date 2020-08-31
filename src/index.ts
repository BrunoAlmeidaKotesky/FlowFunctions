import express, {Express} from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

class MainServices {
    private app: Express;
    protected PORT = process.env.PORT || 5544;
    constructor(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(routes);
    }

    public init(){
        this.app.listen(this.PORT, ()=> console.log("Server listening on " + this.PORT));
    }
}
const app = new MainServices();
app.init();