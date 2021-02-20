"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sidebarModule = _interopRequireDefault(require("./sidebar.module.scss"));

var _accordion = _interopRequireDefault(require("./accordion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
  var item = _ref.item,
      items = _ref.items,
      icons = _ref.icons,
      theme = _ref.theme;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_sidebarModule.default.menuItem)
  }, /*#__PURE__*/_react.default.createElement(_accordion.default, {
    key: item.itemName,
    theme: theme,
    item: item,
    items: items,
    icons: icons
  }));
};

var _default = MenuItem;
exports.default = _default;

//# sourceMappingURL=menuitem.js.map