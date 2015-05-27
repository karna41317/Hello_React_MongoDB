'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsObjectAssign = require('./utils/Object.assign');

var _utilsObjectAssign2 = _interopRequireDefault(_utilsObjectAssign);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _CollapsibleMixin = require('./CollapsibleMixin');

var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

var link = 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963';

var CollapsableMixin = (0, _utilsObjectAssign2['default'])({}, _CollapsibleMixin2['default'], {
  getCollapsableClassSet: function getCollapsableClassSet(className) {
    (0, _utilsDeprecationWarning2['default'])('CollapsableMixin.getCollapsableClassSet()', 'CollapsibleMixin.getCollapsibleClassSet()', link);
    return _CollapsibleMixin2['default'].getCollapsibleClassSet.call(this, className);
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    (0, _utilsDeprecationWarning2['default'])('CollapsableMixin.getCollapsableDOMNode()', 'CollapsibleMixin.getCollapsibleDOMNode()', link);
    return this.getCollapsableDOMNode();
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    (0, _utilsDeprecationWarning2['default'])('CollapsableMixin.getCollapsableDimensionValue()', 'CollapsibleMixin.getCollapsibleDimensionValue()', link);
    return this.getCollapsableDimensionValue();
  },

  componentDidMount: function componentDidMount() {
    (0, _utilsDeprecationWarning2['default'])('CollapsableMixin', 'CollapsibleMixin', link);
  }
});

exports['default'] = CollapsableMixin;
module.exports = exports['default'];