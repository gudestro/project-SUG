import express from 'express';
import EmpresaExecutora from '../controllers/EmpresaExecutoraController.js';

const empresaExecutoraRouter = express.Router();

empresaExecutoraRouter.get('/get', EmpresaExecutora.get)
empresaExecutoraRouter.get('/getAll', EmpresaExecutora.getAll)
empresaExecutoraRouter.post('/add', EmpresaExecutora.add)
empresaExecutoraRouter.post('/update', EmpresaExecutora.update)
empresaExecutoraRouter.delete('/delete', EmpresaExecutora.delete)

export { empresaExecutoraRouter };