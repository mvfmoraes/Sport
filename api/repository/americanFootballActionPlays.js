const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('american_football_action_plays');

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
    american_football_event_state_id,
    play_type,
    score_attempt_type,
    drive_result,
    points,
    comment
}) => {
try {
    const resposta = await table
        .insert({
            american_football_event_state_id,
            play_type,
            score_attempt_type,
            drive_result,
            points,
            comment
        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}