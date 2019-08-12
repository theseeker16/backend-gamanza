import Servicio from '../models/Servicios';
import { Request, Response } from 'express';

class ServicioController {

  public async createServicio(req: Request, res: Response){
    try {
      let newServicio = new Servicio({
        nombreServicio: req.body.nombre,
      })

      let response = await newServicio.save({});

    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}
export default new ServicioController();