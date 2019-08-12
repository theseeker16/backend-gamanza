import Servicio from '../models/Servicios';
import { Request, Response } from 'express';

class ServicioController {

  public async createServicio(req: Request, res: Response){
    try {
      if(Object.keys(req.body).length !== 0 ){
        let newServicio = new Servicio({
          nombreServicios: req.body.nombre,
        })

        let response = await newServicio.save({});

        res.status(200).send({
          message: 'Creating new service',
          response: response
        });
      }

      return res.status(400).send({ message: "Service name not found and is required" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}
export default new ServicioController();