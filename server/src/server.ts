import express, { response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

// get:buscar ou listar dados.
//post: Criar um novo dado.
//put: atualizar dados.
//delete: excluir um dado.


app.listen(3333);