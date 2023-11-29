import EmpresaExecutoraDAL from "../dal/EmpresaExecutoraDAL.js";
import EmpresaExecutora from "../models/EmpresaExecutora.js";

class EmpresaExecutoraController {

  static async get(req, res, next) {
    let dal = new EmpresaExecutoraDAL();
    let empresaExecutora = await dal.get(req.body.id || req.query.id);
    return res.json(empresaExecutora);
  }

  static async getAll(req, res, next) {
    let filtro = "";
    let dal = new EmpresaExecutoraDAL();
    let empresasExecutora = await dal.getAll(filtro);
    return res.json(empresasExecutora);
  }

  static async add(req, res, next) {
    let empresaExecutora = new EmpresaExecutora(req.body.nome, req.body.nome_responsavel, req.body.contato_responsavel);
    let dal = new EmpresaExecutoraDAL();
    await dal.inserir(empresaExecutora);
    return res.json({msg: "Nova empresa executora inserida com sucesso"});
  }

  static async update(req, res, next) {
    let empresaExecutora = new EmpresaExecutora(req.body.nome, req.body.nome_responsavel, req.body.contato_responsavel);
    empresaExecutora.id = req.body.id;
    let dal = new EmpresaExecutoraDAL();
    await dal.alterar(empresaExecutora);
    return res.json({msg: "Empresa excecutora atualizada com sucesso"});
  }

  static async delete(req, res, next) {
    let dal = new EmpresaExecutoraDAL();
    let empresaExecutora = await dal.apagar(req.body.id);
    return res.json({msg: "Empresa executora excluído com sucesso"});
  }


}

export default EmpresaExecutoraController;