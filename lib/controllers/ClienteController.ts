import Cliente from '../models/Cliente';
import { Request, Response } from 'express';

class ClienteController {

  public async createClient(req: Request, res: Response){
    try {
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

    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async deleteClient(req: Request, res: Response){
    try {
      let id = { _id: req.params.idClient };

      await Cliente.deleteOne({id});
      res.status(200).send({
        message: 'Client removed',
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  public async getClientByID(req: Request, res: Response){
    try {
      let id = { _id: req.params.idClient };

      await Cliente.findById({id});
      res.status(200).send({
        message: 'Retrieve client complete',
      });
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