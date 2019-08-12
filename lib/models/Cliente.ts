import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad Usuario.
 */
const ClienteSchemma = new Schema({
	nombreCliente: { type: String, required: true },
	estadoCivil: { type: String, required: true },
	direccion: { type: String, required: true },
	segundoApellido: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	telefono: { type: String, required: true },
  cuentaCliente: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' }]

});

export default mongoose.model('clientes', ClienteSchemma);
