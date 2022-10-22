(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/Components/Resume/Resume.jsx":
/*!*********************************************!*\
  !*** ./client/Components/Resume/Resume.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(/*! ../Styles/Styles */ "./client/Components/Styles/Styles.jsx");

var _Fab = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");

var _Fab2 = _interopRequireDefault(_Fab);

var _CloudDownload = __webpack_require__(/*! @material-ui/icons/CloudDownload */ "./node_modules/@material-ui/icons/CloudDownload.js");

var _CloudDownload2 = _interopRequireDefault(_CloudDownload);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Document } from "react-pdf";
var useStyles = (0, _styles.makeStyles)({
  resumeImg: {
    width: "80%",
    maxWidth: "800px",
    margin: "auto"
  },
  downloadButton: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "125px",
    position: "absolute",
    right: "10px"
  }
});
var Resume = function Resume() {
  var classes = useStyles();
  return _react2["default"].createElement(
    _Styles.ModuleContainer,
    null,
    _react2["default"].createElement("img", {
      src: "https://storage.cloud.google.com/john-lukenoff-portoflio/static/Resume.png",
      className: classes.resumeImg
    }),
    _react2["default"].createElement(
      _Fab2["default"],
      {
        classes: { root: classes.downloadButton },
        variant: "extended",
        component: function () {
          function component(p) {
            return _react2["default"].createElement("a", p);
          }

          return component;
        }(),
        href: "https://storage.cloud.google.com/john-lukenoff-portoflio/static/Resume.pdf",
        target: "_blank"
      },
      _react2["default"].createElement(_CloudDownload2["default"], { color: "primary" }),
      " Download"
    )
  );
};

exports["default"] = Resume;

/***/ }),

/***/ "./node_modules/@material-ui/icons/CloudDownload.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/CloudDownload.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
}), 'CloudDownload');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map