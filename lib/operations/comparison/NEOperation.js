'use strict';

var _ = require('lodash');
var utils = require('../../utils');

/**
 * Implementation of $ne
 * @see http://docs.mongodb.org/manual/reference/operator/query/ne/
 */
module.exports = function  operation(model, update, options) {
    return !_.isEqual(utils.findValue(options.queryItem, model), update.$ne);
};