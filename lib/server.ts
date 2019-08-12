import app from './app';
import config  from './db/db';

app.listen(config.port, () => {
  console.log(`Api running without any issue` );
});
