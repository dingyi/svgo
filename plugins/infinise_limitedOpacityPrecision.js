'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Rounds <opacity> to max 2 decimal points.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(item) {

    if (
        item.hasAttr('opacity')
    ) {

        var opacity = item.attr('opacity').value;
    
        item.attr('opacity').value = Math.round(opacity * 100) / 100;

    }

};
