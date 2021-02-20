"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icons = _ref.icons,
      _ref$iconName = _ref.iconName,
      iconName = _ref$iconName === void 0 ? "" : _ref$iconName,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "#222" : _ref$fill,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? "" : _ref$viewBox,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "100%" : _ref$height,
      theme = _ref.theme;
  var params = {
    fill: fill
  };

  var processSvg = function processSvg(iconName) {
    var icon = icons.find(function (item) {
      return item.iconName === iconName;
    });
    return icon;
  };

  var svg = icons && processSvg(iconName);
  if (!svg) return null;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    style: style,
    height: height,
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox || svg.viewBox,
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    theme: theme
  }, svg.svg(params));
};

var _default = Icon;
exports.default = _default;
Icon.propTypes = {
  iconName: _propTypes.default.string,
  fill: _propTypes.default.string || _propTypes.default.object,
  viewBox: _propTypes.default.string,
  height: _propTypes.default.number || _propTypes.default.string,
  width: _propTypes.default.number || _propTypes.default.string,
  className: _propTypes.default.string || _propTypes.default.object
};

//# sourceMappingURL=icon.js.map