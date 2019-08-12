import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad cuenta.
 */
const CuentaSchema = new Schema({
	nombreCuenta: { type: String, required: true }
});

export default mongoose.model('Cuenta', CuentaSchema);
