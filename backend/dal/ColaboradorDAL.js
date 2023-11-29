import pkg from 'pg';
const { Client } = pkg;
import Colaborador from '../models/Colaborador.js';

class ColaboradorDAL {
    #client;

    async conectar() {
        this.#client = new Client({
            user: 'postgres',
            host: 'unicode-containers-postgres-1',
            database: 'unicode',
            password: 'postgres123',
            port: 5432,
        });
        await this.Client.connect();
    }

    get Client() {
        return this.#client;
    }

    async get(id) {
        await this.conectar();
        var colaborador = new Colaborador();

        try {
            let res = await this.Client.query(`SELECT * from colaboradores where id=${id}`);
            colaborador = res.rows[0];
            return colaborador;
        }
        finally {
            this.Client.end();
        }

    }

    async getAll(filtro) {
        let query = "SELECT * from colaboradores";

        if (filtro != "")
            query = query + ` where ${filtro}`;

        await this.conectar();

        try {
            let res = await this.Client.query(query);
            return res.rows;
        }
        finally {
            this.Client.end();
        }
    }

    async inserir(colaborador) {
        await this.conectar();
        let sql = "INSERT INTO colaboradores VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
        var values = Object.values(colaborador);

        try {
            let res = await this.Client.query(sql, values);
            return res.rowCount > 0;
        }
        finally {
            this.Client.end();
        }
    }

    async alterar(colaborador) {

        await this.conectar();

        let sql = "UPDATE colaboradores SET nome=$1, cargo_id=$2, cpf_cnpj=$3, telefone=$4, email=$5, rua=$6, bairro=$7, numero=$8, cidade=$9, cep=$10 WHERE id = $11";
        var values = Object.values(colaborador);

        try {
            let res = await this.Client.query(sql, values);
            return res.rowCount;
        }
        finally {
            this.Client.end();
        }
    }

    async apagar(id) {
        await this.conectar();
        let sql = "DELETE FROM colaboradores WHERE id = " + id;

        try {
            return (await this.Client.query(sql)).rowCount;
        }
        finally {
            this.Client.end();
        }
    }
}

export default ColaboradorDAL;