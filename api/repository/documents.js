const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('documents');

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
    doc_id,
    publisher_id,
    date_time,
    title,
    language,
    priority,
    revision_id,
    stats_coverage,
    document_fixture_id,
    source_id,
    db_loading_date_time


}) => {
try {
    const resposta = await table
        .insert({
            doc_id,
            publisher_id,
            date_time,
            title,
            language,
            priority,
            revision_id,
            stats_coverage,
            document_fixture_id,
            source_id,
            db_loading_date_time

        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));
        
    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}