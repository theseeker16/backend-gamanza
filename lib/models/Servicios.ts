import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad Usuario.
 */
const ServicioSchema = new Schema({
  nombreServicios: { type: String, required: true },
});

export default mongoose.model('Servicio', ServicioSchema);
