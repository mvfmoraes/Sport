const db = require('../../config/database');
const { Sucesso, Falha, Finalizar } = require('../../helpers/results');

const table = db('addresses');

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
    location_id,
    language,
    suite,
    floor,
    building,
    street_number,
    street_prefix,
    street,
    street_suffix,
    neighborhood,
    district,
    locality,
    county,
    region,
    postal_code,
    country	
}) => {
    try {
        const resposta = await table
            .insert({
                location_id,
                language,
                suite,
                floor,
                building,
                street_number,
                street_prefix,
                street,
                street_suffix,
                neighborhood,
                district,
                locality,
                county,
                region,
                postal_code,
                country	
            })
            .then(([ id ]) => Sucesso(id))
            .catch(erro => Falha(erro));

        return Finalizar(resposta);
    } catch (error) {
        console.log(error)
    }
}
