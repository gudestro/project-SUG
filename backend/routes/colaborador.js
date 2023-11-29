import express from 'express';
import Colaborador from '../controllers/ColaboradorController.js';

const colaboradorRouter = express.Router();


colaboradorRouter.get('/get', Colaborador.get)
colaboradorRouter.get('/getAll', Colaborador.getAll)
colaboradorRouter.post('/add', Colaborador.add)
colaboradorRouter.post('/update', Colaborador.update)
colaboradorRouter.delete('/delete', Colaborador.delete)

export { colaboradorRouter };