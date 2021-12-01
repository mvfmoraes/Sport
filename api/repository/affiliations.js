const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('affiliations');

exports.getById = async id => {
    const resposta = await table
        .select()
        .where({ id })
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

exports.put = async ({
    affiliation_key,
    affiliation_type,
    publisher_id
}) => {
    try {
        const resposta = await table
            .insert({
                affiliation_key,
                affiliation_type,
                publisher_id
            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));

        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}
