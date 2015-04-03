
var _ = require('lodash');
var jss = require('jss');
var jssCamelCase = require('jss-camel-case');
var colors = require('colors.css');
var Color = require('color');

var version = require('./package.json').version;

var table = require('./lib/table');
var th = require('./lib/th');
var td = require('./lib/td');
var modifiers = require('./lib/modifiers');

var lightBlue = Color(colors.aqua).alpha(.25).hexString();

module.exports = function(options) {

  var options = options || {};
  var styles = {};
  var css;

  options = _.defaults(options, {
    border: false,
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fullWidth: true,
    textAlign: 'left',
    lineHeight: false,
    fontSize: false,
    paddingX: '16px',
    paddingY: '4px',
    flush: true,
    horizontalRules: true,
    verticalRules: false,
    verticalAlign: 'top',
    headerFontWeight: 'bold',
    headerFontSize: false,
    modifiers: true,
    borderColor: colors.silver,
    backgroundHighlight: lightBlue,
  });

  jss.use(jssCamelCase);

  styles = _.assign(styles, table(options));
  styles = _.assign(styles, th(options));
  styles = _.assign(styles, td(options));

  if (options.modifiers) {
    styles = _.assign(styles, modifiers(options));
  }

  css = [
    '/*',
    '',
    '  Autotable',
    '  v' + version,
    '',
    '*/',
    '',
    '',
  ].join('\n');

  css += jss.createStyleSheet(styles, { named: false }).toString();

  return css;

};

