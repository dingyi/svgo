'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove bounds element.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(item) {
  
  var color = '#f0f';
  
  if (item.hasAttr('fill') && item.attr('fill').value == color) return false;

};
