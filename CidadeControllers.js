const Cidades = require('../models/CidadeModels.js');

module.exports = {
    async index(req, res){
        const cidade = await Cidades.findAll();
        return res.json(cidade);
    },
    async store(req, res) {
        const { cid_nomecidade, cid_estado, cid_habitantes, cid_economia, pre_codigo } = req.body;
        const cidade = await Cidades.create({ cid_nomecidade, cid_estado, cid_habitantes, cid_economia, pre_codigo });
        return res.status(200).send({
        status: 1,
        message: "Cidade cadastrada com sucesso!!!",
        cidade
    })
    },
    async update(req, res) {
        const { cid_nomecidade, cid_estado, cid_habitantes, cid_economia, pre_codigo } = req.body;
        const { codigo } = req.params;
        await Cidades.update({
            cid_nomecidade, cid_estado, cid_habitantes, cid_economia, pre_codigo
        }, { where: {
        id: codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Cidade Atualizada com sucesso!!!"
    })
    },
    async delete(req, res) {
        const { codigo } = req.params;
        await Cidades.destroy(
             { where: {
        id: codigo
         }
    });
        return res.status(200).send({
        status: 1,
        message: "Cidade Excluida com sucesso!!!"
    })
    }
}