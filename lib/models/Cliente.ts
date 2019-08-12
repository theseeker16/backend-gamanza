import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad Usuario.
 */
const ClienteSchemma = new Schema({
	nombreCliente: { type: String, required: true },
	segundoNombre: { type: String, required: false },
	primerApellido: { type: String, required: true },
	segundoApellido: { type: String, required: true },
	identificacion: { type: String, unique: true, required: true },
	telefono: { type: String, required: true },
	nacimiento: { type: String, required: true },
	correo: { type: String, unique: true, lowercase: true },
	contrasena: { type: String, required: true },
	fotoPerfilUrl: { type: String, required: false },
	roles: {type: [String], required: true},
	fechaCreacion: { type: String, default: moment().format('DD/MM/YYYY, h:mm:ss a') }
});

export default mongoose.model('clientes', ClienteSchemma);
