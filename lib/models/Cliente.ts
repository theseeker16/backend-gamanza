import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad cliente.
 */
const ClienteSchemma = new Schema({
	nombreCliente: { type: String, required: true },
	estadoCivil: { type: String, required: true },
	direccion: { type: String, required: true },
	email: { type: String, required: true },
	telefono: { type: String, required: true },
  cuentas: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' },
  servicios: { type: mongoose.Schema.Types.ObjectId, ref: 'Servicio' },
  categorias: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }

});

export default mongoose.model('Cliente', ClienteSchemma);
