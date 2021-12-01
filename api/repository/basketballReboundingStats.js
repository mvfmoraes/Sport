const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('basketball_rebounding_stats');

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
    rebounds_total,
    rebounds_per_game,
    rebounds_defensive,
    rebounds_offensive,
    team_rebounds_total,
    team_rebounds_per_game,
    team_rebounds_defensive,
    team_rebounds_offensive

}) => {
    try {
        const resposta = await table
            .insert({
                rebounds_total,
                rebounds_per_game,
                rebounds_defensive,
                rebounds_offensive,
                team_rebounds_total,
                team_rebounds_per_game,
                team_rebounds_defensive,
                team_rebounds_offensive

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}
