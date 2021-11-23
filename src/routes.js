const addresses = require('../api/controller/addresses');

module.exports = app => {

    app.route('/addresses').get(addresses.getAll);
    app.route('/addresses/:id').get(addresses.get);
}