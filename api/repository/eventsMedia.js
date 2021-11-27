const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('events_media');

exports.getById = async event_id => {
    const resposta = await table
        .select()
        .where({ event_id })
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