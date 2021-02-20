"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputModule = _interopRequireDefault(require("./input.module.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextInput = function TextInput(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "second" : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? "Defaultvalue" : _ref$defaultValue,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onPressEnter = _ref.onPressEnter,
      onPressEnter = _ref$onPressEnter === void 0 ? function () {} : _ref$onPressEnter,
      id = _ref.id,
      required = _ref.required,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 32 : _ref$maxLength,
      label = _ref.label,
      name = _ref.name,
      _ref$requiredHelper = _ref.requiredHelper,
      requiredHelper = _ref$requiredHelper === void 0 ? "Поле не может быть пустым!" : _ref$requiredHelper,
      _ref$widthInput = _ref.widthInput,
      widthInput = _ref$widthInput === void 0 ? "100%" : _ref$widthInput,
      autoComplete = _ref.autoComplete;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    setValue(target.value);
  };

  (0, _react.useEffect)(function () {
    onChange(_defineProperty({}, name, value));
  }, [value, name, onChange]);

  var handlePressEnter = function handlePressEnter(e) {
    if (e.key === "Enter") {
      onPressEnter(_defineProperty({}, name, value));
    }
  };

  var variantLabelHidden = function variantLabelHidden() {
    switch (variant) {
      case "first":
        return "".concat(_inputModule.default.labelHidden);

      case "second":
        return "".concat(_inputModule.default.labelHiddenSecond);

      case "third":
        return "".concat(_inputModule.default.labelHidden);

      case "fourth":
        return "".concat(_inputModule.default.labelHidden);

      default:
        return "".concat(_inputModule.default.labelHidden);
    }
  };

  var variantInput = function variantInput() {
    switch (variant) {
      case "first":
        return "".concat(_inputModule.default.customField);

      case "second":
        return "".concat(_inputModule.default.customField, " ").concat(_inputModule.default.second);

      case "third":
        return "".concat(_inputModule.default.customField, " ").concat(_inputModule.default.third);

      case "fourth":
        return "".concat(_inputModule.default.customField, " ").concat(_inputModule.default.fourth);

      default:
        return "".concat(_inputModule.default.customField);
    }
  };

  var themeColor = function themeColor() {
    switch (color) {
      case "primary":
        return "".concat(_inputModule.default.primary);

      case "secondary":
        return "".concat(_inputModule.default.secondary);

      case "dark":
        return "".concat(_inputModule.default.dark);

      default:
        return "".concat(_inputModule.default.primary);
    }
  };

  var isLabelShown = value.length > 0 ? variantLabelHidden() : "".concat(_inputModule.default.label);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    className: "".concat(variantInput(), " ").concat(themeColor()),
    style: {
      width: widthInput
    },
    requirederror: value.length < 1 && required ? requiredHelper : "",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      autoComplete: autoComplete,
      className: "".concat(_inputModule.default.textInput, " ").concat(themeColor()),
      variant: variant,
      maxLength: maxLength,
      type: "text",
      id: id,
      name: name,
      placeholder: placeholder,
      disabled: disabled,
      onKeyDown: handlePressEnter,
      onChange: handleInputChange,
      value: value,
      required: required
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "".concat(isLabelShown, " ").concat(themeColor()),
      children: required ? "".concat(label, "*") : label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "".concat(_inputModule.default.border, " ").concat(themeColor())
    })]
  });
};

var _default = TextInput;
exports.default = _default;
TextInput.propTypes = {
  variant: _propTypes.default.oneOf(["first", "second", "third", "fourth"]),
  color: _propTypes.default.oneOf(["primary", "secondary", "dark"]),
  defaultValue: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onPressEnter: _propTypes.default.func,
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  required: _propTypes.default.bool,
  maxLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  requiredHelper: _propTypes.default.string,
  widthInput: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  autoComplete: _propTypes.default.oneOf(["off", "on"])
};

//# sourceMappingURL=input.js.map