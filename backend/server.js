import express from 'express';
import cors from 'cors';
import { colaboradorRouter } from './routes/colaborador.js';
import { cargoRouter } from './routes/cargo.js';
import { empresaExecutoraRouter } from './routes/empresaExecutora.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use('/colaborador', colaboradorRouter);
app.use('/cargo', cargoRouter);
app.use('/empresaExecutora', empresaExecutoraRouter);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
