"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _paginationBtn = _interopRequireDefault(require("./pagination-btn"));

var _paginationModule = _interopRequireDefault(require("./pagination.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var propTypes = {
  items: _propTypes.default.array.isRequired,
  onChangePage: _propTypes.default.func.isRequired,
  initialPage: _propTypes.default.number,
  pageSize: _propTypes.default.number,
  numOfPages: _propTypes.default.number,
  color: _propTypes.default.oneOf(["primary", "secondary", "dark"]),
  hideFirstButton: _propTypes.default.bool,
  hideLastButton: _propTypes.default.bool,
  hideNextButton: _propTypes.default.bool,
  hidePrevButton: _propTypes.default.bool
};

var Pagination = function Pagination(_ref) {
  var items = _ref.items,
      onChangePage = _ref.onChangePage,
      _ref$initialPage = _ref.initialPage,
      initialPage = _ref$initialPage === void 0 ? 1 : _ref$initialPage,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? 5 : _ref$pageSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "secondary" : _ref$color,
      _ref$numOfPages = _ref.numOfPages,
      numOfPages = _ref$numOfPages === void 0 ? 10 : _ref$numOfPages,
      _ref$hideLastButton = _ref.hideLastButton,
      hideLastButton = _ref$hideLastButton === void 0 ? false : _ref$hideLastButton,
      _ref$hideFirstButton = _ref.hideFirstButton,
      hideFirstButton = _ref$hideFirstButton === void 0 ? false : _ref$hideFirstButton,
      _ref$hideNextButton = _ref.hideNextButton,
      hideNextButton = _ref$hideNextButton === void 0 ? false : _ref$hideNextButton,
      _ref$hidePrevButton = _ref.hidePrevButton,
      hidePrevButton = _ref$hidePrevButton === void 0 ? false : _ref$hidePrevButton;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      pagerr = _useState2[0],
      setPager = _useState2[1];

  var setPage = function setPage(page) {
    var pager = pagerr;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = getPager(items.length, page, pageSize);
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    setPager(pager);
    onChangePage(pageOfItems);
  };

  (0, _react.useEffect)(function () {
    if (items && items.length) {
      setPage(initialPage);
    }
  }, [items, initialPage]);
  (0, _react.useCallback)(function () {
    return setPage(initialPage);
  }, []);

  var getPager = function getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;
    var totalPages = Math.ceil(totalItems / pageSize);
    var startPage, endPage;

    if (totalPages <= numOfPages) {
      startPage = 1;
      endPage = numOfPages;
    } else {
      if (currentPage <= Math.ceil(numOfPages / 2 + 1 / 2)) {
        startPage = 1;
        endPage = numOfPages;
      } else if (currentPage + (Math.round(numOfPages / 2) - 1) >= totalPages) {
        startPage = totalPages - (numOfPages - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.round(numOfPages / 2 - 1 / 2);
        endPage = currentPage + (Math.round(numOfPages / 2) - 1);
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = _toConsumableArray(Array(endPage + 1 - startPage).keys()).map(function (i) {
      return startPage + i;
    });

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  if (!pagerr.pages || pagerr.pages.length <= 1) {
    return null;
  }

  var themeColor = function themeColor() {
    switch (color) {
      case "primary":
        return "".concat(_paginationModule.default.pagination);

      case "secondary":
        return "".concat(_paginationModule.default.pagination, " ").concat(_paginationModule.default.secondary);

      case "dark":
        return "".concat(_paginationModule.default.pagination, " ").concat(_paginationModule.default.dark);

      default:
        return "".concat(_paginationModule.default.pagination);
    }
  };

  return /*#__PURE__*/_react.default.createElement("ul", {
    className: themeColor()
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: pagerr.currentPage === 1 ? "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.disabled) : "".concat(_paginationModule.default.paginationItem),
    style: hideFirstButton === true ? {
      display: "none"
    } : {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_paginationBtn.default, {
    className: "".concat(_paginationModule.default.paginationButton, " ").concat(_paginationModule.default.btnFirst),
    onClick: function onClick() {
      return setPage(1);
    }
  }, "First")), /*#__PURE__*/_react.default.createElement("li", {
    className: pagerr.currentPage === 1 ? "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.disabled) : "".concat(_paginationModule.default.paginationItem),
    style: hidePrevButton === true ? {
      display: "none"
    } : {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_paginationBtn.default, {
    className: "".concat(_paginationModule.default.paginationButton, " ").concat(_paginationModule.default.btnPrev),
    onClick: function onClick() {
      return setPage(pagerr.currentPage - 1);
    }
  }, "Prev")), pagerr.pages.map(function (page, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: pagerr.currentPage === page ? "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.active) : "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.hidden)
    }, /*#__PURE__*/_react.default.createElement(_paginationBtn.default, {
      className: "".concat(_paginationModule.default.paginationButton, " ").concat(_paginationModule.default.btnPage),
      onClick: function onClick() {
        return setPage(page);
      }
    }, page));
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: pagerr.currentPage === pagerr.totalPages ? "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.disabled) : "".concat(_paginationModule.default.paginationItem),
    style: hideNextButton === true ? {
      display: "none"
    } : {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_paginationBtn.default, {
    className: "".concat(_paginationModule.default.paginationButton, " ").concat(_paginationModule.default.btnNext),
    onClick: function onClick() {
      return setPage(pagerr.currentPage + 1);
    }
  }, "Next")), /*#__PURE__*/_react.default.createElement("li", {
    className: pagerr.currentPage === pagerr.totalPages ? "".concat(_paginationModule.default.paginationItem, " ").concat(_paginationModule.default.disabled) : "".concat(_paginationModule.default.paginationItem),
    style: hideLastButton === true ? {
      display: "none"
    } : {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_paginationBtn.default, {
    className: "".concat(_paginationModule.default.paginationButton, " ").concat(_paginationModule.default.btnLast),
    onClick: function onClick() {
      return setPage(pagerr.totalPages);
    }
  }, "Last")));
};

Pagination.propTypes = propTypes;
var _default = Pagination;
exports.default = _default;

//# sourceMappingURL=pagination.js.map