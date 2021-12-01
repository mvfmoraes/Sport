const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('document_packages');

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
    	
    package_key,
    package_name,
    date_time

}) => {
try {
    const resposta = await table
        .insert({
            package_key,
            package_name,
            date_time		

        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));
        
    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}