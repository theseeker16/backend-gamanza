import Cliente from '../models/Cliente';
import Categoria from '../models/Categoria';
import Cuenta from '../models/Cuenta';
import Servicio from '../models/Servicios';

import { Request, Response } from 'express';

class ClienteController {

  public async createClient(req: Request, res: Response){
    try {
      if(Object.keys(req.body).length !== 0 ){
        let newClient = new Cliente({
          nombreCliente: "Test name",
          estadoCivil: "Test estado civil",
          direccion: "Test direccion",
          email: "Test email",
          telefono: "Test telefono",
          cuentas: req.body.cuentas,
          servicios: req.body.servicios,
          categorias: req.body.categorias
        })

        let response = await newClient.save({});

          res.status(200).send({
            message: 'Creating new client',
            response: response
          });
      }
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async deleteClient(req: Request, res: Response){
    console.log(req.params);
    try {
      if(req.params){

        let id = req.params.idClient;

        await Cliente.deleteOne({"_id":id});
        res.status(200).send({
          message: 'Client removed',
        });
      }

    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async getClientByID(req: Request, res: Response){
    console.log(req.params)
    try {
      if(Object.keys(req.params).length !== 0 ){
        let id =  req.params.idClient;

        let response = await Cliente.find({"_id": id});
        res.status(200).send({
          message: 'Retrieve client complete',
          response: response
        });
      }
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async getAllClients(req: Request, res: Response) {
    try {

      let listClients = await Cliente.find({});

      res.status(200).send({
        message: 'Retrieve all clients complete',
        clients: listClients
      });

    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async editClientPut(req: Request, res: Response) {
    try {
      // console.log(req);
      if(Object.keys(req.params).length !== 0 && Object.keys(req.body).length !== 0){

        let filter = {_id: req.params.idClient};

        let client = new Cliente({
          cuentas: req.body.cuentas,
          categorias: req.body.categorias,
          servicios: req.body.servicios});

        let listClients = await Cliente.findOneAndUpdate(filter,client);

        res.status(200).send({
          message: 'Update client complete',
          clients: listClients
        });
      }
      // return res.status(404).send({ message: "Client ID and dat not found is necessary to update" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }


  public async editClient(req: Request, res: Response) {
    try {
      // console.log(req);
      if(Object.keys(req.params).length !== 0 && Object.keys(req.body).length !== 0){

        let filter = {_id: req.params.idClient};
        let update = req.body;

        let listClients = await Cliente.findOneAndUpdate(filter,update);

        res.status(200).send({
          message: 'Update client complete',
          clients: listClients
        });
      }
      // return res.status(404).send({ message: "Client ID and dat not found is necessary to update" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

}

export default new ClienteController();