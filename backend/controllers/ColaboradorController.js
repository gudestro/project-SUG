import ColaboradorDAL from "../dal/ColaboradorDAL.js";
import Colaborador from "../models/Colaborador.js";

class ColaboradorController {

  static async get(req, res, next) {
    let dal = new ColaboradorDAL();
    let colaborador = await dal.get(req.body.id || req.query.id);
    return res.json(colaborador);
  }

  static async getAll(req, res, next) {
    let filtro = "";
    let dal = new ColaboradorDAL();
    let colaborador = await dal.getAll(filtro);
    return res.json(colaborador);
  }

  static async add(req, res, next) {
    let colaborador = new Colaborador(req.body.nome, req.body.cargo_id, req.body.cpf_cnpj, req.body.telefone, req.body.email, req.body.rua, req.body.bairro, req.body.numero, req.body.cidade, req.body.cep);
    let dal = new ColaboradorDAL();
    await dal.inserir(colaborador);
    return res.json({msg: "Novo colaborador inserido com sucesso"});
  }

  static async update(req, res, next) {
    let colaborador = new Colaborador(req.body.nome, req.body.cargo_id, req.body.cpf_cnpj, req.body.telefone, req.body.email, req.body.rua, req.body.bairro, req.body.numero, req.body.cidade, req.body.cep);
    colaborador.id = req.body.id;
    let dal = new ColaboradorDAL();
    await dal.alterar(colaborador);
    return res.json({msg: "Colaborador atualizado com sucesso"});
  }

  static async delete(req, res, next) {
    let dal = new ColaboradorDAL();
    let colaborador = await dal.apagar(req.body.id);
    return res.json({msg: "Colaborador excluído com sucesso"});
  }
}

export default ColaboradorController;