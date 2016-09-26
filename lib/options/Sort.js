'use strict';

var _ = require('lodash');
var ObjectId = require('../Types').ObjectId;

var utils = require('../utils');

module.exports = function sortItems(sort, items) {
    var item = items[0];
    if (!_.isUndefined(item) && !_.isUndefined(sort)) {
        _.forIn(sort, function (value, key) {
            if (utils.findValue(key, item)) {
                if (utils.findValue(key, item) instanceof ObjectId) {
                    sortObjectId(value, items, key);
                }
                else if (_.isNumber(utils.findValue(key, item))) {
                    sortNumeric(value, items, key);
                }
                else if(utils.findValue(key, item) instanceof Date) {
                    sortDate(value, items, key);
                }
                else {
                    sortAlpha(value, items, key);
                }
            }
        });
    }
    return items;
};

//-------------------------------------------------------------------------
//
// Private Methods
//
//-------------------------------------------------------------------------

function sortObjectId(value, items, key) {
    if (value >= 0) {
        items.sort(function (a, b) {
            return utils.findValue(key, a) ? utils.findValue(key, a).id.localeCompare(utils.findValue(key, b).id) : 1;
        });
    } else {
        items.sort(function (a, b) {
            return utils.findValue(key, b) ? utils.findValue(key, b).id.localeCompare(utils.findValue(key, a).id) : -1;
        });
    }
}

function sortDate(value, items, key){
    return sortNumeric(value, items, key);
}

function sortNumeric(value, items, key) {
    if (value >= 0) {
        items.sort(function (a, b) {
            return utils.findValue(key, a) - utils.findValue(key, b);
        });
    } else {
        items.sort(function (a, b) {
            return utils.findValue(key, b) - utils.findValue(key, a);
        });
    }
}

function sortAlpha(value, items, key) {
    if (value >= 0) {
        items.sort(function (a, b) {
            return utils.findValue(key, a) ? utils.findValue(key, a).localeCompare(utils.findValue(key, b)) : 1;
        });
    } else {
        items.sort(function (a, b) {
            return utils.findValue(key, b) ? utils.findValue(key, b).localeCompare(utils.findValue(key, a)) : -1;
        });
    }
}
