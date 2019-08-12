import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Schema de Mongoose de la entidad Usuario.
 */
const CategoriaSchema = new Schema({
	nombreCategoria: { type: String, required: true }
});

export default mongoose.model('Categoria', CategoriaSchema);
