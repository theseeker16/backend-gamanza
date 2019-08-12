
import * as express from "express";
import * as mongoose from "mongoose";

import db from './db/db';
import { Config } from './middlewares/config';
import { Routes } from './routes/routes';

class App {
  public app: express.Application = express();
  private middConfig: Config = new Config();
  private routes: Routes = new Routes();

  constructor(){
    this.configServidor();
    this.connectToMongo();
    this.routes.routes(this.app);
  }

  private  configServidor():void {
    this.middConfig.inicializarMiddlewaresServidor(this.app);
  }

  private connectToMongo():void {
    mongoose.set('useNewUrlParser', true);
		mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);

    // Conectandose a la BD
    mongoose.connect(db.url, (err: any) => {
      if(err) {
        return console.log(`Error in database connection ${err}`);
      }
      console.log('Connection to the established database...');
    })
  }

}

export default new App().app;