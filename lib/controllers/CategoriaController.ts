import Categoria from '../models/Categoria';
import { Request, Response } from 'express';

class CategoriaController {
  public async createCategoria(req: Request, res: Response){
    try {
      console.log(req.body)
      let newCategoria = new Categoria({
        nombreCategoria: req.body.nombre,
      })

      let response = await newCategoria.save({});

    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}

export default new CategoriaController();