export class Routes {
  public routes(app):void {
    app.get('/test', (req, res) => {
			res.status(200).send({ message: 'Test api' });
    });
  }
}