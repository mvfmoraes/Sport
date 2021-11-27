const repository = require('../repository/eventsDocuments');

exports.get = async (req, res) => {
    const { event_id } = req.params;
    try {
        const data = await repository.getById(event_id);
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