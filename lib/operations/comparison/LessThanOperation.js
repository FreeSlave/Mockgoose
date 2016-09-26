'use strict';

var utils = require('../../utils');

/**
 * Implementation of $lt
 * @see http://docs.mongodb.org/manual/reference/operator/query/lt/
 */
module.exports = function operation(model, update, options) {
    return utils.findValue(options.queryItem, model) < update.$lt;
};
