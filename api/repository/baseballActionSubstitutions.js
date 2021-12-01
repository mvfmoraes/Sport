const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('baseball_action_substitutions');

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
    baseball_event_state_id,
    sequence_number,
    person_type,
    person_original_id,
    person_original_position_id,
    person_original_lineup_slot,
    person_replacing_id,
    person_replacing_position_id,
    person_replacing_lineup_slot,
    substitution_reason,
    comment	

}) => {
try {
    const resposta = await table
        .insert({
            baseball_event_state_id,
            sequence_number,
            person_type,
            person_original_id,
            person_original_position_id,
            person_original_lineup_slot,
            person_replacing_id,
            person_replacing_position_id,
            person_replacing_lineup_slot,
            substitution_reason,
            comment	
        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}
