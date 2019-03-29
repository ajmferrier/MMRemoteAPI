'use strict';
module.exports = function(app) {
    var mmremote = require('../controllers/mmremoteController');

    // mmremote Routes
    app.route('/modules')
        .get(mmremote.list_all_modules)
        .post(mmremote.create_a_module);

    app.route('/modules/:moduleId')
        .get(mmremote.read_a_module)
        .put(mmremote.update_a_module)
        .delete(mmremote.delete_a_module);
};