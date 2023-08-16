"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _ChatWidget = _interopRequireDefault(require("./ChatWidget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import './index.css';
// import './tailwind.css';
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_ChatWidget["default"], {
  apiKey: "your-api-key",
  position: "bottom-right",
  backgroundColor: "#1A202C",
  textColor: "#fff",
  fontFamily: "Courier, monospace"
}), document.getElementById('app'));