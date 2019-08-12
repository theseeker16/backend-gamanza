import ClienteController from '../controllers/ClienteController';
import CategoriaController from '../controllers/CategoriaController';
import CuentaController from '../controllers/CuentaController';
import ServicioController from '../controllers/ServicioController';

export class Routes {
  public routes(app):void {
    app.get('/test', (req, res) => {
			res.status(200).send({ message: 'Test api' });
    });

    // Client routes
    app.route('/createClient').post(ClienteController.createClient);
    app.route('/editClient').put(ClienteController.editClient);
    app.route('/deleteClient/:idClient').delete(ClienteController.deleteClient);
    app.route('/getClient/:idClient').get(ClienteController.getClientByID);
    app.route('/getClient').get(ClienteController.getAllClients);

    // Categoria routes
    app.route('/createCategoria').post(CategoriaController.createCategoria);

    // Cuenta routes
    app.route('/createCuenta').post(CuentaController.createCuenta);

    // Servicios routes
    app.route('/createServicios').post(ServicioController.createServicio);
  }
}