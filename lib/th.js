
module.exports = function(opts) {

  var rules = {
    th: {
      textAlign: opts.textAlign,
      fontWeight: opts.headerFontWeight,
      fontSize: opts.headerFontSize ? opts.headerFontSize : 'inherit',
      padding: opts.paddingY + ' ' + opts.paddingX,
      lineHeight: opts.lineHeight ? opts.lineHeight : 'inherit',
      borderBottom: opts.horizontalRules ? '1px solid ' + opts.borderColor : 0,
    },
    'th:first-child': {
      paddingLeft: opts.flush ? 0 : 'auto',
    },
    'th:last-child': {
      paddingLeft: opts.flush ? 0 : 'auto',
    },
  };


  return rules;

};

