"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ChatWidget.css");
var _si = require("react-icons/si");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MyComponent = function MyComponent(_ref) {
  var apiKey = _ref.apiKey,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-right' : _ref$position,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#f0f0f0' : _ref$backgroundColor,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? '#000' : _ref$textColor,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)([{
      text: 'Hello. How are you today?',
      sender: 'bot',
      timestamp: '11:00'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'user',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'bot',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'user',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'bot',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'user',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'bot',
      timestamp: '11:01'
    }, {
      text: "Hey! I'm fine. Thanks for asking!",
      sender: 'user',
      timestamp: '11:01'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    messages = _useState4[0],
    setMessages = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    newMessage = _useState6[0],
    setNewMessage = _useState6[1];
  var handleClick = function handleClick() {
    setIsExpanded(!isExpanded);
  };
  var handleSendMessage = function handleSendMessage(e) {
    var _inputRef$current;
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([].concat(_toConsumableArray(messages), [{
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    }]));
    setNewMessage('');
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };
  var chatWindowRef = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null);
  var componentStyle = {
    backgroundColor: backgroundColor,
    fontFamily: fontFamily,
    color: textColor,
    borderRadius: '10px'
  };
  var scrollToBottom = function scrollToBottom() {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };
  (0, _react.useEffect)(function () {
    scrollToBottom();
  }, [messages, isExpanded]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-component ".concat(position, " ").concat(isExpanded ? 'expanded' : ''),
    style: componentStyle
  }, isExpanded ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick,
    style: {
      position: 'absolute',
      right: 0,
      top: 0
    }
  }, "x")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-window",
    style: {
      overflowY: 'auto',
      maxHeight: '490px'
    },
    ref: chatWindowRef
  }, messages.map(function (message, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "container ".concat(message.sender === 'user' ? 'darker' : '')
    }, /*#__PURE__*/_react["default"].createElement("p", null, message.text), /*#__PURE__*/_react["default"].createElement("span", {
      className: "time-".concat(message.sender === 'user' ? 'left' : 'right')
    }, message.timestamp));
  })), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSendMessage,
    style: {
      display: 'flex',
      marginTop: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: newMessage,
    onChange: function onChange(e) {
      return setNewMessage(e.target.value);
    },
    placeholder: "Type your message...",
    style: {
      flexGrow: 1,
      marginRight: '8px',
      borderRadius: '5px',
      padding: '5px'
    },
    ref: inputRef
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    style: {
      borderRadius: '5px',
      padding: '5px'
    }
  }, "Send"))) : /*#__PURE__*/_react["default"].createElement(_si.SiOpenai, {
    size: '30px',
    onClick: handleClick
  }));
};
var _default = MyComponent;
exports["default"] = _default;