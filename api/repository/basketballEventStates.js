const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('basketball_event_states');

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
    event_id,
    current_state,
    sequence_number,
    period_value,
    period_time_elapsed,
    period_time_remaining,
    context	

}) => {
    try {
        const resposta = await table
            .insert({
                event_id,
                current_state,
                sequence_number,
                period_value,
                period_time_elapsed,
                period_time_remaining,
                context	

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}

