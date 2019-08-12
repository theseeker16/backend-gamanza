import app from './app';
import config  from './db/db';

app.listen(config.port, () => {
  console.log(`RIO LORO API esta corriendo sin problemas...` );
});
