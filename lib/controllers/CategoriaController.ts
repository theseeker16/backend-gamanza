import Categoria from '../models/Categoria';
import { Request, Response } from 'express';

class CategoriaController {

  public async createCategoria(req: Request, res: Response){
    console.log(req.body)
    try {
      if(Object.keys(req.body).length !== 0 ){
        let newCategoria = new Categoria({
          nombreCategoria: req.body.nombre,
        })

        let response = await newCategoria.save({});

        res.status(200).send({
          message: 'Creating new category',
          response: response
        });
      }

      return res.status(400).send({ message: "Category name not found and is required" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}

export default new CategoriaController();