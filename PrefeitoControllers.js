const Prefeitos = require('../models/PrefeitoModels.js');

module.exports = {
    async index(req, res){
        const prefeito = await Prefeitos.findAll();
        return res.json(prefeito);
    },
    async store(req, res) {
        const { pre_nome, pre_apelido, pre_partido, pre_sexo } = req.body;
        const prefeito = await Prefeitos.create({ pre_nome, pre_apelido, pre_partido, pre_sexo });
        return res.status(200).send({
        status: 1,
        message: "Prefeito cadastrado com sucesso!!!",
        prefeito
    })
    },
    async update(req, res) {
        const {  pre_nome, pre_apelido, pre_partido, pre_sexo  } = req.body;
        const { codigo } = req.params;
        await Prefeitos.update({
            pre_nome, pre_apelido, pre_partido, pre_sexo 
        }, { where: {
        id: codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Prefeito atualizado com sucesso!!!"
    })
    },
    async delete(req, res) {
        const { codigo } = req.params;
        await Prefeitos.destroy(
             { where: {
        id: codigo
         }
    });
        return res.status(200).send({
        status: 1,
        message: "Prefeito excluido com sucesso!!!"
    })
    }
}