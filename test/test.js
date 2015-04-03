
var autotable = require('..');
var assert = require('assert');

describe('autotable', function() {

  var css;

  it('should not throw', function() {
    assert.doesNotThrow(function() {
      css = autotable();
      console.log(css);
    });
  });

  it('should be a string', function() {
    assert.equal(typeof css, 'string');
  });

});

