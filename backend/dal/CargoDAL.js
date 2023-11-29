import pkg from 'pg';
const { Client } = pkg;
import Cargo from '../models/Cargo.js';

class CargoDAL {
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
        var cargo = new Cargo();

        try {
            let res = await this.Client.query(`SELECT * from cargos where id=${id}`);
            cargo = res.rows[0];
            return cargo;
        }
        finally {
            this.Client.end();
        }

    }

    async getAll(filtro) {
        let query = "SELECT * from cargos";

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

    async inserir(cargo) {
        await this.conectar();
        let sql = "INSERT INTO cargos VALUES (default,$1)";
        var values = Object.values(cargo);

        try {
            let res = await this.Client.query(sql, values);
            return res.rowCount > 0;
        }
        finally {
            this.Client.end();
        }
    }

    async alterar(cargo) {

        await this.conectar();

        let sql = "UPDATE cargos SET nome=$1 WHERE id = $2";
        var values = Object.values(cargo);

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
        let sql = "DELETE FROM cargos WHERE id = " + id;

        try {
            return (await this.Client.query(sql)).rowCount;
        }
        finally {
            this.Client.end();
        }
    }
}

export default CargoDAL;