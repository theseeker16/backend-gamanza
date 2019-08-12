class DataBase {
  public port:number;
  public url: string;

  constructor() {
    this.port = 3000;
    this.url = "mongodb+srv://admin:admin@cluster0-m2xpp.mongodb.net/api_test?retryWrites=true";
  }
}

export default new DataBase();