const mongoose = require('mongoose');
/**
 * Atributos da entidade user
 */
const userSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    sobrenome: { type: String, unique: false, required: true },
    endereco: { type: String, required: true },
    nascimento: { type: Date, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
  }, { timestamps: true })

  /**
 * Definir collection que irá ser salva no banco
 */
  const User = mongoose.model('User', userSchema);

   /**
 * Exportar o model User para ser utilizado
 */
module.exports = User;


  
  