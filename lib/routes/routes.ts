import ClienteController from '../controllers/ClienteController';
import CategoriaController from '../controllers/CategoriaController';
import CuentaController from '../controllers/CuentaController';
import ServicioController from '../controllers/ServicioController';
import Token from '../middlewares/token';

export class Routes {
  public routes(app):void {

    app.get('/test', (req, res) => {
			res.status(200).send({ message: 'Test api' });
    });

    // Client routes
    app.route('/createClient').post(Token.isAuth,ClienteController.createClient);
    app.route('/editClient').put(Token.isAuth,ClienteController.editClient);
    app.route('/deleteClient/:idClient').delete(Token.isAuth,ClienteController.deleteClient);
    app.route('/getClient/:idClient').get(Token.isAuth,ClienteController.getClientByID);
    app.route('/getClient').get(Token.isAuth,ClienteController.getAllClients);

    // Categoria routes
    app.route('/createCategoria').post(Token.isAuth,CategoriaController.createCategoria);

    // Cuenta routes
    app.route('/createCuenta').post(Token.isAuth,CuentaController.createCuenta);

    // Servicios routes
    app.route('/createServicios').post(Token.isAuth,ServicioController.createServicio);
  }
}
