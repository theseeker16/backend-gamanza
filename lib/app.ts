
import * as express from "express";
import * as mongoose from "mongoose";

import db from './db/db';
import { Config } from './middlewares/config';
import { Routes } from './routes/routes';

class App {
  public app: express.Application = express();
  public middConfig: Config = new Config();
  public routes: Routes = new Routes();

  constructor(){
    this.configServidor();
    this.connectToMongo();
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
        return console.log(`Error al conectarse a la base de datos ${err}`);
      }
      console.log('Conexión a la base de datos establecida...');
    })
  }

}

export default new App().app;