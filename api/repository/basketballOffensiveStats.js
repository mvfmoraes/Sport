const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('basketball_offensive_stats');

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
    field_goals_made,
    field_goals_attempted,
    field_goals_percentage,
    field_goals_per_game,
    field_goals_attempted_per_game,
    field_goals_percentage_adjusted,
    three_pointers_made,
    three_pointers_attempted,
    three_pointers_percentage,
    three_pointers_per_game,
    three_pointers_attempted_per_game,
    free_throws_made,
    free_throws_attempted,
    free_throws_percentage,
    free_throws_per_game,
    free_throws_attempted_per_game,
    points_scored_total,
    points_scored_per_game,
    assists_total,
    assists_per_game,
    turnovers_total,
    turnovers_per_game,
    points_scored_off_turnovers,
    points_scored_in_paint,
    points_scored_on_second_chance,
    points_scored_on_fast_break

}) => {
    try {
        const resposta = await table
            .insert({
                field_goals_made,
            field_goals_attempted,
            field_goals_percentage,
            field_goals_per_game,
            field_goals_attempted_per_game,
            field_goals_percentage_adjusted,
            three_pointers_made,
            three_pointers_attempted,
            three_pointers_percentage,
            three_pointers_per_game,
            three_pointers_attempted_per_game,
            free_throws_made,
            free_throws_attempted,
            free_throws_percentage,
            free_throws_per_game,
            free_throws_attempted_per_game,
            points_scored_total,
            points_scored_per_game,
            assists_total,
            assists_per_game,
            turnovers_total,
            turnovers_per_game,
            points_scored_off_turnovers,
            points_scored_in_paint,
            points_scored_on_second_chance,
            points_scored_on_fast_break

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}


