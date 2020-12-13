const express = require('express');
const router = express.Router();
const estabelecimentoController = require('../controllers/estabelecimentoController');
const authMiddleware = require('../middlewares/autenticacao');

/**
@route GET estabelecimento
@desc Retornar todos os estabelecimentos
@access Publico
@endpoint http://localhost:porta/estabelecimentos/
**/
router.get('/', estabelecimentoController.obterEstabelecimento);

 /**
@route GET estabelecimento/cidade
@desc Retornar os estabelecimentos filtrados por cidade
@access Publico
@endpoint http://localhost:porta/estabelecimentos/cidade
**/
router.get('/cidade', estabelecimentoController.obterEstabelecimentoPorCidade);

/**
@route GET estabelecimento/tipo
@desc Retornar os estabelecimentos filtrados por tipo
@access Publico
@endpoint http://localhost:porta/estabelecimentos/tipo
**/
router.get('/tipo', estabelecimentoController.obterEstabelecimentoPorTipo);

/**
@route GET estabelecimento/nome
@desc Retornar os estabelecimentos filtrados por nome
@access Publico
@endpoint http://localhost:porta/estabelecimentos/nome
**/
router.get('/nome', estabelecimentoController.obterEstabelecimentoPorNome);

router.use(authMiddleware);

/**
@route POST estabelecimento/cadastro
@desc Realizar o cadastro de estabelecimento
@access Privado
@endpoint http://localhost:porta/estabelecimentos/cadastro
**/
router.post('/cadastro', estabelecimentoController.cadastrarEstabelecimento);

/**
 @route PATCH estabelecimentos/id
 @desc Atualizar os campos do cadastro com exceção do tipo
 @access Privado
 @endpoint http://localhost:porta/estabelecimentos/:id
 */
 router.patch('/:id', estabelecimentoController.atualizarCadastroEstabelecimento);

/**
@route DELETE estabelecimentos/id
@desc Deletar a estabelecimento
@access Privado
@endpoint http://localhost:porta/estabelecimentos/:id
**/
router.delete('/:id', estabelecimentoController.deletarEstabelecimento);


module.exports = router;