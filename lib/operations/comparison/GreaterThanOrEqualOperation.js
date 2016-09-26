'use strict';

var utils = require('../../utils');

/**
 * Implementation of $gte
 * @see http://docs.mongodb.org/manual/reference/operator/query/gte/
 */
module.exports = function operation(model, update, options) {
    return utils.findValue(options.queryItem, model) >= update.$gte;
};
