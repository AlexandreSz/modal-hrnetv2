"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Modal(_ref) {
  var text = _ref.text,
    display = _ref.display,
    width = _ref.width,
    heigth = _ref.heigth,
    modalBgColor = _ref.modalBgColor,
    margin = _ref.margin,
    button = _ref.button,
    buttonText = _ref.buttonText,
    buttonWidth = _ref.buttonWidth,
    buttonHeight = _ref.buttonHeight,
    buttonBgColor = _ref.buttonBgColor,
    buttonBorder = _ref.buttonBorder,
    buttonMargin = _ref.buttonMargin,
    buttonPadding = _ref.buttonPadding;
  // useState/Effect to trigger modal display
  var _React$useState = _react.default.useState(display),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    modalDisplay = _React$useState2[0],
    setmodalDisplay = _React$useState2[1];
  var onButtonClick = function onButtonClick() {
    setmodalDisplay('none');
  };
  _react.default.useEffect(function () {
    var showModal = display ? 'block' : 'none';
    setmodalDisplay(showModal);
  }, [display]);

  // check if the prop.button exist to display it
  var btnDisplay = 'none';
  if (button) {
    btnDisplay = 'inline-block';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container",
    style: {
      display: modalDisplay
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: {
      width: width,
      heigth: heigth,
      backgroundColor: modalBgColor,
      margin: margin
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onButtonClick
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "modalBtn",
    style: {
      display: btnDisplay,
      width: buttonWidth,
      height: buttonHeight,
      backgroundColor: buttonBgColor,
      border: buttonBorder,
      margin: buttonMargin,
      padding: buttonPadding
    },
    onClick: onButtonClick
  }, ' ', buttonText, ' ')));
}
Modal.propTypes = {
  text: _propTypes.default.string,
  display: _propTypes.default.string,
  width: _propTypes.default.string,
  heigth: _propTypes.default.string,
  modalBgColor: _propTypes.default.string,
  margin: _propTypes.default.string,
  button: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  buttonWidth: _propTypes.default.string,
  buttonHeight: _propTypes.default.string,
  buttonBgColor: _propTypes.default.string,
  buttonBorder: _propTypes.default.string,
  buttonMargin: _propTypes.default.string,
  buttonPadding: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;