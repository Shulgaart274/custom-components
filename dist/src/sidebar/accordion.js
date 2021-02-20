"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _icon = _interopRequireDefault(require("./icon"));

var _sidebar = require("./sidebar");

var _accordionModule = _interopRequireDefault(require("./accordion.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Accordion = function Accordion(_ref) {
  var item = _ref.item,
      items = _ref.items,
      theme = _ref.theme,
      icons = _ref.icons;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0, _react.useState)("".concat(_accordionModule.default.accordionContent)),
      _useState4 = _slicedToArray(_useState3, 2),
      setHeight = _useState4[0],
      setHeightState = _useState4[1];

  var _useState5 = (0, _react.useState)("".concat(_accordionModule.default.accordionArrow)),
      _useState6 = _slicedToArray(_useState5, 2),
      setRotate = _useState6[0],
      setRotateState = _useState6[1];

  var toggleAccordion = function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "".concat(_accordionModule.default.accordionContent) : "".concat(_accordionModule.default.accordionContent, " ").concat(_accordionModule.default.hidden));
    setRotateState(setActive === "active" ? "".concat(_accordionModule.default.accordionArrow) : "".concat(_accordionModule.default.accordionArrow, " ").concat(_accordionModule.default.rotate));
  };

  var accordionContentTheme = function accordionContentTheme() {
    switch (theme) {
      case "primary":
        return "".concat(_accordionModule.default.accordionContent);

      case "secondary":
        return "".concat(_accordionModule.default.accordionContentSecondary);

      case "dark":
        return "".concat(_accordionModule.default.accordionContentDark);

      default:
        return "".concat(_accordionModule.default.accordionContent);
    }
  };

  var accordionLinkHoverTheme = function accordionLinkHoverTheme() {
    switch (theme) {
      case "primary":
        return "".concat(_accordionModule.default.accordionLinkWrapper);

      case "secondary":
        return "".concat(_accordionModule.default.accordionLinkWrapperSecondary);

      case "dark":
        return "".concat(_accordionModule.default.accordionLinkWrapperDark);

      default:
        return "".concat(_accordionModule.default.accordionLinkWrapper);
    }
  };

  var accordionIconTheme = function accordionIconTheme() {
    switch (theme) {
      case "primary":
        return "#fff";

      case "secondary":
        return "#44bef1";

      case "dark":
        return "#f8b739";

      default:
        return "#fff";
    }
  };

  var accordionButtonTheme = function accordionButtonTheme() {
    switch (theme) {
      case "primary":
        return "".concat(_accordionModule.default.accordion);

      case "secondary":
        return "".concat(_accordionModule.default.accordionSecondary);

      case "dark":
        return "".concat(_accordionModule.default.accordionDark);

      default:
        return "".concat(_accordionModule.default.accordion);
    }
  };

  var arrow = icons.find(function (item) {
    return item.iconName === "arrow";
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_accordionModule.default.accordionSection)
  }, item.items && item.items.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: accordionButtonTheme(),
    onClick: toggleAccordion
  }, item.icon ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    icons: icons,
    iconName: item.icon,
    className: "".concat(_accordionModule.default.accordionIcon),
    width: 20,
    fill: accordionIconTheme()
  }) : null, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(_accordionModule.default.accordionText)
  }, item.label), arrow ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    icons: icons,
    iconName: arrow.iconName,
    viewBox: arrow.viewBox,
    width: 10,
    fill: "#fff",
    className: "".concat(setRotate),
    style: {
      marginLeft: "auto"
    }
  }) : null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(item.itemName),
    className: accordionContentTheme()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: accordionLinkHoverTheme()
  }, item.icon ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    icons: icons,
    iconName: item.icon,
    className: "".concat(_accordionModule.default.accordionLinkIcon),
    width: 20,
    fill: accordionIconTheme()
  }) : null, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_accordionModule.default.accordionLinkText)
  }, item.label))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(setHeight)
  }, items && items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_sidebar.SidebarItem, {
      theme: theme,
      key: "".concat(item.itemName),
      item: item,
      items: item.items,
      icons: icons
    });
  })));
};

var _default = (0, _reactRouterDom.withRouter)(Accordion);

exports.default = _default;

//# sourceMappingURL=accordion.js.map