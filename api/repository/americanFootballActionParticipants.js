const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('american_football_action_participants');

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
        american_football_action_play_id,
        person_id,
        participant_role,
        score_type,
        field_line,
        yardage,
        score_credit,
        yards_gained
}) => {
    try {
        const resposta = await table
            .insert({
                american_football_action_play_id,
                person_id,
                participant_role,
                score_type,
                field_line,
                yardage,
                score_credit,
                yards_gained
            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));

        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}
