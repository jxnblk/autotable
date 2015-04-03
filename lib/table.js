
module.exports = function(opts) {

  var rules = {
    table: {
      borderCollapse: opts.borderCollapse,
      borderSpacing: opts.borderSpacing,
      width: opts.fullWidth ? '100%' : false,
      textAlign: opts.textAlign,
      lineHeight: opts.lineHeight ? opts.lineHeight : 'inherit',
      fontSize: opts.fontSize ? opts.fontSize : 'inherit',
      border: opts.border ? '1px solid ' + opts.borderColor : 0,
    }
  };

  return rules;

};

