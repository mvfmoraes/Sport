const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('baseball_defensive_stats');

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
    double_plays,
    triple_plays,
    putouts,
    assists,
    errors,
    fielding_percentage,
    defensive_average,
    errors_passed_ball,
    errors_catchers_interference
}) => {
    try {
        const resposta = await table
            .insert({
                double_plays,
                triple_plays,
                putouts,
                assists,
                errors,
                fielding_percentage,
                defensive_average,
                errors_passed_ball,
                errors_catchers_interference

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}
