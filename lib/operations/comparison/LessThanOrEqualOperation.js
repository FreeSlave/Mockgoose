'use strict';

var utils = require('../../utils');

/**
 * Implementation of $lte
 * @see http://docs.mongodb.org/manual/reference/operator/query/lte/
 */
module.exports = function operation(model, update, options) {
    return utils.findValue(options.queryItem, model) <= update.$lte;
};
