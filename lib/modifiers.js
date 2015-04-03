
module.exports = function(opts) {

  var rules = {
    '.table-fixed': {
      tableLayout: 'fixed',
    },
    '.table-striped tr:nth-of-type(even)': {
      backgroundColor: opts.backgroundHighlight,
    }
  }; 

  return rules;

};

