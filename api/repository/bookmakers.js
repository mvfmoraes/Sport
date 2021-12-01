const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('bookmakers');

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
    bookmaker_key,
    publisher_id,
    location_id	

}) => {
    try {
        const resposta = await table
            .insert({
                bookmaker_key,
                publisher_id,
                location_id			

            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));
            
        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}