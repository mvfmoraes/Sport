const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('affiliations_documents');

exports.getById = async affiliation_id => {
    const resposta = await table
        .select()
        .where({ affiliation_id })
        .then(datas => Sucesso(datas.first()))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
}

exports.getAll = async () => {
    const resposta = await table
        .select()
        .then(datas => Sucesso(datas))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
}