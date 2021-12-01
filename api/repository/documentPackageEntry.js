const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('document_package_entry');

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
    document_package_id,
    rank,
    document_id,
    headline,
    short_headline	


}) => {
try {
    const resposta = await table
        .insert({
            document_package_id,
            rank,
            document_id,
            headline,
            short_headline

        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));
        
    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}