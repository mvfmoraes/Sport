const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('core_stats');

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
    score,
    score_opposing,
    score_attempts,
    score_attempts_opposing,
    score_percentage,
    score_percentage_opposing	


}) => {
    try {
        const resposta = await table
            .insert({
                score,
                score_opposing,
                score_attempts,
                score_attempts_opposing,
                score_percentage,
                score_percentage_opposing		

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}