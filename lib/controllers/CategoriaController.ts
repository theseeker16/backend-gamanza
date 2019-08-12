import Categoria from '../models/Categoria';
import { Request, Response } from 'express';

class CategoriaController {

  public async createCategoria(req: Request, res: Response){
    console.log(req.body)
    try {

      let newCategoria = new Categoria({
        nombreCategoria: req.body.nombre,
      })

      let response = await newCategoria.save({});

      res.status(200).send({
        message: 'Creating new category',
        response: response
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}

export default new CategoriaController();