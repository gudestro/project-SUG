import CargoDAL from "../dal/CargoDAL.js";
import Cargo from "../models/Cargo.js";

class CargoController {
  
    static async get(req, res, next) {
        let dal = new CargoDAL();
        let cargo = await dal.get((req.body.id || req.query.id));
        return res.json(cargo);
    }

    static async getAll(req, res, next) {
       let filtro = "";
       let dal = new CargoDAL();
       let cargos = await dal.getAll(filtro);
       return res.json(cargos);
    }

    static async add(req, res, next) {
      let cargo = new Cargo(req.body.nome);
      let dal = new CargoDAL();
      await dal.inserir(cargo);
      return res.json({msg: "Novo cargo inserido com sucesso"});
    }

    static async update(req, res, next) {
      let cargo = new Cargo(req.body.nome);
      cargo.id = req.body.id;
      let dal = new CargoDAL();
      await dal.alterar(cargo);
      return res.json({msg: "Cargo atualizado com sucesso"});
    }

    static async delete(req, res, next) {
      let dal = new CargoDAL();
      let cargo = await dal.apagar(req.body.id);
      return res.json({msg: "Cargo excluído com sucesso"});
    }
}

export default CargoController;