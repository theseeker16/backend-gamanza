import bodyParser = require("body-parser");
import * as cors from 'cors';
var logger = require("morgan");

export class Config {
  constructor(){}

  inicializarMiddlewaresServidor(app):void {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(logger('dev'));
    app.use(cors());
  }

}
