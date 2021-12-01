const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('baseball_action_plays');

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
    play_type,
    notation,
    notation_yaml,
    baseball_defensive_group_id,
    comment,
    runner_on_first_advance,
    runner_on_second_advance,
    runner_on_third_advance,
    outs_recorded,
    rbi,
    runs_scored,
    earned_runs_scored	

}) => {
try {
    const resposta = await table
        .insert({
    baseball_event_state_id,
    play_type,
    notation,
    notation_yaml,
    baseball_defensive_group_id,
    comment,
    runner_on_first_advance,
    runner_on_second_advance,
    runner_on_third_advance,
    outs_recorded,
    rbi,
    runs_scored,
    earned_runs_scored
        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}