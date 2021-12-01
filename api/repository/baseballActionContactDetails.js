const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('baseball_action_contact_details');

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
    baseball_action_pitch_id,
    location,
    strength,
    velocity,
    comment,
    trajectory_coordinates,
    trajectory_formula	

}) => {
try {
    const resposta = await table
        .insert({
            baseball_action_pitch_id,
            location,
            strength,
            velocity,
            comment,
            trajectory_coordinates,
            trajectory_formula
        })
        .then(([ id ]) => Sucesso(id))
        .catch(erro => Falha(erro));

    return Finalizar(resposta);
} catch (error) {
    console.log(error)
}
}