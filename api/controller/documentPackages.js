const repository = require('../repository/documentPackages');

exports.get = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await repository.getById(id);
        return res.status(200).send({ status: true, data });
    } catch (e) {
        return res.status(400).send({ status: false, erros: e });
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await repository.getAll();
        return res.status(200).send({ status: true, data });
    } catch (e) {
        return res.status(400).send({ status: false, erros: e });
    }
}