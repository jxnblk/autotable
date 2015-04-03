
module.exports = function(opts) {

  var borderStyle = '1px solid ' + opts.borderColor;
  var rules = {
    td: {
      textAlign: opts.textAlign,
      fontSize: opts.fontSize ? opts.fontSize : 'inherit',
      padding: opts.paddingY + ' ' + opts.paddingX,
      lineHeight: opts.lineHeight ? opts.lineHeight : 'inherit',
      verticalAlign: opts.verticalAlign,
      borderBottom: opts.horizontalRules ? borderStyle : 0,
      borderLeft: opts.verticalRules ? borderStyle : 0,
      borderRight: opts.verticalRules ? borderStyle : 0,
    },
    'td:first-child': {
      paddingLeft: opts.flush ? 0 : 'auto',
    },
    'td:last-child': {
      paddingLeft: opts.flush ? 0 : 'auto',
    },
  };


  return rules;

};

