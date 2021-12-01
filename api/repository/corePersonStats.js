const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('core_person_stats');

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
    time_played_event,
    time_played_total,
    time_played_event_average,
    events_played,
    events_started,
    position_id	

}) => {
    try {
        const resposta = await table
            .insert({
                time_played_event,
                time_played_total,
                time_played_event_average,
                events_played,
                events_started,
                position_id			

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}