import Cliente from '../models/Cliente';
import { Request, Response } from 'express';

class ClienteController {

  public async createClient(req: Request, res: Response){
    try {
      if(Object.keys(req.body).length !== 0 ){
        let newClient = new Cliente({
          nombreCliente: req.body.nombre,
          estadoCivil: req.body.estadoCivil,
          direccion: req.body.direccion,
          email: req.body.email,
          telefono: req.body.telefono,
          cuentasCliente: req.body.cuentasCliente,
          servicios: req.body.servicios,
          categorizacion: req.body.categorizacion

        })

        let response = await newClient.save({});

        res.status(200).send({
          message: 'Creating new client',
          response: response
        });
      }

      return res.status(400).send({ message: "Data client not found and is required" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async deleteClient(req: Request, res: Response){
    try {
      if(Object.keys(req.params).length !== 0 ){

        let id = { _id: req.params.idClient };

        await Cliente.deleteOne({id});
        res.status(200).send({
          message: 'Client removed',
        });
      }
      return res.status(400).send({ message: "Client ID not found is necessary to remove" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async getClientByID(req: Request, res: Response){
    console.log(req.params)
    try {
      if(Object.keys(req.params).length !== 0 ){
        let id = { _id: req.params.idClient };

        await Cliente.findById({id});
        res.status(200).send({
          message: 'Retrieve client complete',
        });
      }
      return res.status(404).send({ message: "Client ID not found is necessary to retrieve" });
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

  public async editClient(req: Request, res: Response) {
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
}

export default new ClienteController();