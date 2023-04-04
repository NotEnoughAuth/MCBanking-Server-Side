import express from 'express';

export default class WebServer{
    _app: express.Application;
    _ports: number[];

    constructor(...ports: number[]){
        this._app = express();
        this._ports = ports;

        this._app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this._app.get('/', this.onRoot.bind(this))
        this._app.get('/transfer', this.onTransfer.bind(this))
        this._app.get('/withdraw', this.onWithdraw.bind(this))
        this._app.get('/deposit', this.onDeposit.bind(this))
        this._app.get('/create/account', this.onCreateAct.bind(this))
        this._app.get('/create/token', this.onCreateToken.bind(this))
    }

    onRoot(req: express.Request, res: express.Response){
        
    }

    onTransfer(req: express.Request, res: express.Response){

    }

    onWithdraw(req: express.Request, res: express.Response){

    }

    onDeposit(req: express.Request, res: express.Response){

    }

    onCreateAct(req: express.Request, res: express.Response){

    }

    onCreateToken(req: express.Request, res: express.Response){
        
    }
}