"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SidebarItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _menuitem = _interopRequireDefault(require("./menuitem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _sidebarModule = _interopRequireDefault(require("./sidebar.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SidebarItem = function SidebarItem(_ref) {
  var item = _ref.item,
      items = _ref.items,
      theme = _ref.theme,
      icons = _ref.icons,
      rest = _objectWithoutProperties(_ref, ["item", "items", "theme", "icons"]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_menuitem.default, _extends({
    items: items,
    item: item,
    theme: theme,
    icons: icons
  }, rest)));
};

exports.SidebarItem = SidebarItem;

var Sidebar = function Sidebar(_ref2) {
  var items = _ref2.items,
      sidebarLogo = _ref2.sidebarLogo,
      _ref2$sidebarTitle = _ref2.sidebarTitle,
      sidebarTitle = _ref2$sidebarTitle === void 0 ? "Business" : _ref2$sidebarTitle,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? "primary" : _ref2$theme,
      icons = _ref2.icons;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0, _react.useState)("".concat(_sidebarModule.default.sidebar)),
      _useState4 = _slicedToArray(_useState3, 2),
      collapse = _useState4[0],
      setCollapse = _useState4[1];

  var _useState5 = (0, _react.useState)("".concat(_sidebarModule.default.sidebarSecondary)),
      _useState6 = _slicedToArray(_useState5, 2),
      secondaryCollapse = _useState6[0],
      setSecondaryCollapse = _useState6[1];

  var _useState7 = (0, _react.useState)("".concat(_sidebarModule.default.sidebarDark)),
      _useState8 = _slicedToArray(_useState7, 2),
      darkCollapse = _useState8[0],
      setDarkCollapse = _useState8[1];

  var _useState9 = (0, _react.useState)("".concat(_sidebarModule.default.sidebarCollapseWrapper)),
      _useState10 = _slicedToArray(_useState9, 2),
      buttonCollapse = _useState10[0],
      setButtonCollapse = _useState10[1];

  var collapseHandler = function collapseHandler() {
    setActiveState(setActive === "" ? "active" : "");
    setButtonCollapse(setActive === "active" ? "".concat(_sidebarModule.default.sidebarCollapseWrapper) : "".concat(_sidebarModule.default.sidebarCollapseWrapper, " ").concat(_sidebarModule.default.buttonCollapsed));

    switch (theme) {
      case "primary":
        return setCollapse(setActive === "active" ? "".concat(_sidebarModule.default.sidebar) : "".concat(_sidebarModule.default.sidebar, " ").concat(_sidebarModule.default.collapsed));

      case "secondary":
        return setSecondaryCollapse(setActive === "active" ? "".concat(_sidebarModule.default.sidebarSecondary) : "".concat(_sidebarModule.default.sidebarSecondary, " ").concat(_sidebarModule.default.collapsed));

      case "dark":
        return setDarkCollapse(setActive === "active" ? "".concat(_sidebarModule.default.sidebarDark) : "".concat(_sidebarModule.default.sidebarDark, " ").concat(_sidebarModule.default.collapsed));

      default:
        return setCollapse(setActive === "active" ? "".concat(_sidebarModule.default.sidebar) : "".concat(_sidebarModule.default.sidebar, " ").concat(_sidebarModule.default.collapsed));
    }
  };

  var sidebarTheme = function sidebarTheme() {
    switch (theme) {
      case "primary":
        return collapse;

      case "secondary":
        return secondaryCollapse;

      case "dark":
        return darkCollapse;

      default:
        return collapse;
    }
  };

  var sidebarButtonTheme = function sidebarButtonTheme() {
    switch (theme) {
      case "primary":
        return "".concat(_sidebarModule.default.sidebarCollapse);

      case "secondary":
        return "".concat(_sidebarModule.default.sidebarCollapseSecondary);

      case "dark":
        return "".concat(_sidebarModule.default.sidebarCollapseDark);

      default:
        return "".concat(_sidebarModule.default.sidebarCollapse);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: sidebarTheme()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(buttonCollapse)
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: sidebarButtonTheme(),
    onClick: collapseHandler
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_sidebarModule.default.sidebarHamburger)
  }, /*#__PURE__*/_react.default.createElement("hr", {
    className: "".concat(_sidebarModule.default.line1)
  }), /*#__PURE__*/_react.default.createElement("hr", {
    className: "".concat(_sidebarModule.default.line2)
  }), /*#__PURE__*/_react.default.createElement("hr", {
    className: "".concat(_sidebarModule.default.line3)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_sidebarModule.default.sidebarTitleWrapper)
  }, sidebarLogo ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "".concat(_sidebarModule.default.sidebarLink),
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: sidebarLogo,
    alt: "logo",
    className: "".concat(_sidebarModule.default.sidebarLogo)
  })) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "".concat(_sidebarModule.default.sidebarLink),
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "".concat(_sidebarModule.default.sidebarTitle)
  }, sidebarTitle))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_sidebarModule.default.list)
  }, items.map(function (sidebarItem, index) {
    return /*#__PURE__*/_react.default.createElement(SidebarItem, {
      theme: theme,
      key: "".concat(sidebarItem.itemName).concat(index),
      item: sidebarItem,
      items: sidebarItem.items,
      icons: icons
    });
  })));
};

var _default = (0, _reactRouterDom.withRouter)(Sidebar);

exports.default = _default;
Sidebar.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.object),
  sidebarLogo: _propTypes.default.string,
  sidebarTitle: _propTypes.default.string,
  theme: _propTypes.default.oneOf(["primary", "secondary", "dark"])
};
SidebarItem.propTypes = {
  item: _propTypes.default.shape({
    itemName: _propTypes.default.string,
    label: _propTypes.default.string,
    icon: _propTypes.default.string,
    items: _propTypes.default.arrayOf(_propTypes.default.object)
  }),
  items: _propTypes.default.arrayOf(_propTypes.default.object)
};

//# sourceMappingURL=sidebar.js.map