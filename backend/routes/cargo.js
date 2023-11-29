import express from 'express';
import Cargo from '../controllers/CargoController.js';

const cargoRouter = express.Router();

cargoRouter.get('/get', Cargo.get)
cargoRouter.get('/getAll', Cargo.getAll)
cargoRouter.post('/add', Cargo.add)
cargoRouter.post('/update', Cargo.update)
cargoRouter.delete('/delete', Cargo.delete)


export { cargoRouter };