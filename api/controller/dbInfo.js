const repository = require('../repository/dbInfo');

exports.get = async (req, res) => {
    const { version } = req.params;
    try {
        const data = await repository.getById(version);
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