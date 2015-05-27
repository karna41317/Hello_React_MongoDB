'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _utilsObjectAssign = require('./utils/Object.assign');

var _utilsObjectAssign2 = _interopRequireDefault(_utilsObjectAssign);

var _CollapsibleNav = require('./CollapsibleNav');

var specCollapsableNav = (0, _utilsObjectAssign2['default'])({}, _CollapsibleNav.specCollapsibleNav, {
  componentDidMount: function componentDidMount() {
    (0, _utilsDeprecationWarning2['default'])('CollapsableNav', 'CollapsibleNav', 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963');
  }
});

var CollapsableNav = _react2['default'].createClass(specCollapsableNav);

exports['default'] = CollapsableNav;
module.exports = exports['default'];