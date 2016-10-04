'use strict';

var utils = require('../../utils');

/**
 * Implementation of $gt
 * @see http://docs.mongodb.org/manual/reference/operator/query/gt/
 */
module.exports = function operation(model, update, options) {
    return utils.findValue(options.queryItem, model) > update.$gt;
};
