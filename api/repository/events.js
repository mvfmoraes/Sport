const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('events');

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
        event_key,
        publisher_id,
        start_date_time,
        site_id,
        site_alignment,
        event_status,
        duration,
        attendance,
        last_update	


}) => {
try {
    const resposta = await table
        .insert({
            event_key,
            publisher_id,
            start_date_time,
            site_id,
            site_alignment,
            event_status,
            duration,
            attendance,
            last_update		

        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));
        
    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}