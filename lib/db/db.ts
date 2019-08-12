class DataBase {
  public port:number;
  public url: string;
  public secretToken: string;

  constructor() {
    this.port = 3000;
    this.url = "mongodb+srv://admin:admin@rioloro-xptge.mongodb.net/rio_loro?retryWrites=true";
    this.secretToken = "db_rio_loro_2019"
  }
}

export default new DataBase();