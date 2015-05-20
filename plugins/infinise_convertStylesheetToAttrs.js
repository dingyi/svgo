'use strict';

exports.type = 'full';

exports.active = true;

/**
 * Convert included stylesheet to attributes on the elements.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(data) {
  
  var stylesheet,
      styles;
  
  function findStylesheet(items) {
    items.content.forEach(function(item){
      if (item.isElem('style')) {
        stylesheet = item.content[0].text;
      } else if (item.content) {
        findStylesheet(item);
      }
    });
  }
  
  function parseStylesheet() {
    styles = [];
    stylesheet = stylesheet.trim().split('}');
    
    stylesheet.forEach(function(rule){
      if (!rule) return;
      
      var rule = rule.split('{');      
      var selector = rule[0].trim();
      var declarations = rule[1].trim().split(';');
      
      if (!declarations) return;
      declarations.pop(1);
      
      declarations.forEach(function(decl, i){
        decl = decl.trim().split(':');
        decl = {
          'property': decl[0].trim(),
          'value': decl[1].trim(),
        };
        declarations[i] = decl;
      })
      
      rule = {
        'selector': selector,
        'declarations': declarations
      };
      
      styles.push(rule);
    });
    
    return styles;
  }
    
  function selectorMatches(sel, item) {
    var match = false;
    
    if (sel[0] == '.') {
      var name = sel.substr(1);
      if (item.hasAttr('class') && item.attr('class').value == name) {
        match = true;
      }
    } else if (sel[0] == '#') {
      var name = sel.substr(1);
      if (item.hasAttr('id') && item.attr('id').value == name) {
        match = true;
      }
    } else {
      console.log('Sorry, selector type', sel, 'is not implemented yet');
    }
    
    return match;
  }
  
  function applyDeclarations(decls, item) {
    decls.forEach(function(decl){
      
      if (item.attr(decl.property)) {
        item.attr(decl.property).value = decl.value;
      } else {
        item.addAttr({
          name: decl.property,
          value: decl.value,
          prefix: '',
          local: decl.property
        });
      }
      
    });
  }

  function applyStyles(items) {
    items.content.forEach(function(item){
      
      styles.forEach(function(rule){
        if (selectorMatches(rule.selector, item)) {
          applyDeclarations(rule.declarations, item);
        }
      })
      
      if (item.content) {
        applyStyles(item);
      }
      
    });
  }
  
  
  findStylesheet(data);
  
  if (stylesheet) {
    parseStylesheet();
    applyStyles(data);
  }
  
  return data;

};
