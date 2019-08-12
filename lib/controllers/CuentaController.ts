import Cuenta from '../models/Cuenta';
import { Request, Response } from 'express';

class CuentaController {
  public async createCuenta(req: Request, res: Response){
    try {
      let newCuenta = new Cuenta({
        nombreCuenta: req.body.nombre,
      })

      let response = await newCuenta.save({});

      res.status(200).send({
        message: 'Creating new account',
        response: response
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}
export default new CuentaController();