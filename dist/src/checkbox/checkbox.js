"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkboxModule = _interopRequireDefault(require("./checkbox.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "25px" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$labelSize = _ref.labelSize,
      labelSize = _ref$labelSize === void 0 ? "14px" : _ref$labelSize,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Checkbox label" : _ref$label,
      id = _ref.id,
      required = _ref.required,
      disabled = _ref.disabled;

  var checkMarkTheme = function checkMarkTheme() {
    switch (color) {
      case "primary":
        return "".concat(_checkboxModule.default.checkmarkPrimary);

      case "secondary":
        return "".concat(_checkboxModule.default.checkmarkSecondary);

      case "dark":
        return "".concat(_checkboxModule.default.checkmarkDark);

      default:
        return "".concat(_checkboxModule.default.checkmarkPrimary);
    }
  };

  return /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(_checkboxModule.default.customCheckbox)
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "checkbox",
    className: "".concat(_checkboxModule.default.checkboxInput),
    checked: checked,
    onChange: onChange,
    required: required,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: checkMarkTheme(),
    style: {
      width: size,
      height: size
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_checkboxModule.default.customLabel),
    style: {
      fontSize: labelSize
    }
  }, label));
};

var _default = Checkbox;
exports.default = _default;
Checkbox.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "dark"]),
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  labelSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func
};

//# sourceMappingURL=checkbox.js.map