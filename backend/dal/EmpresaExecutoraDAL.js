import pkg from 'pg';
const { Client } = pkg;
import EmpresaExecutora from '../models/EmpresaExecutora.js';

class EmpresaExecutoraDAL {
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
        var empresaExecutora = new EmpresaExecutora();

        try {
            let res = await this.Client.query(`SELECT * from empresas_executora where id=${id}`);
            empresaExecutora = res.rows[0];
            return empresaExecutora;
        }
        finally {
            this.Client.end();
        }

    }

    async getAll(filtro) {
        let query = "SELECT * from empresas_executora";

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

    async inserir(empresaExecutora) {
        await this.conectar();
        let sql = "INSERT INTO empresas_executora VALUES (default,$1, $2, $3)";
        var values = Object.values(empresaExecutora);

        try {
            let res = await this.Client.query(sql, values);
            return res.rowCount > 0;
        }
        finally {
            this.Client.end();
        }
    }

    async alterar(empresaExecutora) {

        await this.conectar();

        let sql = "UPDATE empresas_executora SET nome=$1, nome_responsavel=$2, contato_responsavel=$3 WHERE id = $4";
        var values = Object.values(empresaExecutora);

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
        let sql = "DELETE FROM empresas_executora WHERE id = " + id;

        try {
            return (await this.Client.query(sql)).rowCount;
        }
        finally {
            this.Client.end();
        }
    }
}

export default EmpresaExecutoraDAL;