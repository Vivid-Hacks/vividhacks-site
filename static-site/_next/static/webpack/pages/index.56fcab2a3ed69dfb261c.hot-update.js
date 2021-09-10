webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar/index.js":
/*!************************************!*\
  !*** ./components/navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Joshua\\Documents\\coding\\vividhacks-backend\\components\\navbar\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var lineLeft = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineLeft;
var lineRight = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineRight;
var lineMiddle = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineMiddle;

var Navbar = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar(props) {
    var _this;

    Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar);

    _this = _super.call(this, props); // create a ref to store the textInput DOM element

    _this.textInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["createRef"]();
    _this.toggleMobileNavbar = _this.toggleMobileNavbar.bind(Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.addEvLisner = _this.addEvLisner.bind(Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.menu = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.linkContainer;
    _this.menuStyling = {};
    return _this;
  }

  Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, [{
    key: "toggleMobileNavbar",
    value: function toggleMobileNavbar(close) {
      if (this.menuStyling.transform !== undefined) {
        this.menuStyling = {};
        lineLeft = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineLeft;
        lineRight = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineRight;
        lineMiddle = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineMiddle;
      } else {
        lineLeft = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineLeftClose;
        lineRight = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineRightClose;
        lineMiddle = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineMiddleClose;
        this.menuStyling = {
          transform: "translateX(200px)"
        };
      }

      this.forceUpdate();
      this.addEvLisner();
    }
  }, {
    key: "addEvLisner",
    value: function addEvLisner() {
      if (this.addedEvLisnr === true) return;
      this.addedEvLisnr = true;
      var elm = this;
      window.addEventListener("click", function (thing) {
        if (thing.target.tagName === "A" || thing.target.tagName === "HR") return;
        elm.menuStyling = {};
        lineLeft = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineLeft;
        lineRight = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineRight;
        lineMiddle = _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.lineMiddle;
        elm.forceUpdate();
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        if (window.location.pathname === "/") {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "".concat(_navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.animate),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logo,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logoText,
                      children: "Vivid Hacks"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 40
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "logo.svg",
                      alt: "logo.svg",
                      style: {
                        width: "5rem"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 40
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  onClick: this.toggleMobileNavbar,
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.menuIcon,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineLeft
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineMiddle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineRight
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: this.menu,
                style: this.menuStyling,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    target: "_blank",
                    children: " DEVPOST"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    href: "/",
                    smooth: "true",
                    duration: "500",
                    children: " TEAM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "timeline",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: " TIMELINE"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "about",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: " ABOUT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "faqs",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: " FAQs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    target: "_blank",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: " REGISTER"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9
          }, this);
        } else {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logo,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logoText,
                      children: "Vivid Hacks"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 40
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "logo.svg",
                      alt: "logo.svg",
                      style: {
                        width: "5rem"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 40
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  onClick: this.toggleMobileNavbar,
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.menuIcon,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineLeft
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineMiddle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineRight
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: this.menu,
                style: this.menuStyling,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    target: "_blank",
                    children: " DEVPOST"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    href: "/#team",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: " TEAM"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 44
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    href: "/#timeline",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                      children: " TIMELINE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 48
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    href: "/#about",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                      children: " ABOUT"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    href: "/#faqs",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                      children: " FAQs"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 44
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    target: "_blank",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: " REGISTER"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this);
        }
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }, this);
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false,

/***/ "./public/logo.svg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMiXSwibmFtZXMiOlsibGluZUxlZnQiLCJzdHlsZXMiLCJsaW5lUmlnaHQiLCJsaW5lTWlkZGxlIiwiTmF2YmFyIiwicHJvcHMiLCJ0ZXh0SW5wdXQiLCJSZWFjdCIsInRvZ2dsZU1vYmlsZU5hdmJhciIsImJpbmQiLCJhZGRFdkxpc25lciIsIm1lbnUiLCJsaW5rQ29udGFpbmVyIiwibWVudVN0eWxpbmciLCJjbG9zZSIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsImxpbmVMZWZ0Q2xvc2UiLCJsaW5lUmlnaHRDbG9zZSIsImxpbmVNaWRkbGVDbG9zZSIsImZvcmNlVXBkYXRlIiwiYWRkZWRFdkxpc25yIiwiZWxtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoaW5nIiwidGFyZ2V0IiwidGFnTmFtZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhbmltYXRlIiwiY29udGFpbmVyIiwibG9nbyIsImxvZ29UZXh0Iiwid2lkdGgiLCJtZW51SWNvbiIsImxpbmsiLCJhbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUdDLDBEQUFNLENBQUNELFFBQXRCO0FBQ0EsSUFBSUUsU0FBUyxHQUFHRCwwREFBTSxDQUFDQyxTQUF2QjtBQUNBLElBQUlDLFVBQVUsR0FBR0YsMERBQU0sQ0FBQ0UsVUFBeEI7O0lBRU1DLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBQ0EsVUFBS0MsU0FBTCxnQkFBaUJDLGdEQUFBLEVBQWpCO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLHdLQUExQjtBQUNBLFVBQUtD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Ryx3QkFBSSxFQUFDLGlDQUFSO0FBQTBDLDBCQUFNLEVBQUMsUUFBakQ7QUFBMEQsNkJBQVMsRUFBRW5DLDBEQUFNLENBQUNvQyxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBbUNEO0FBQ0Y7O0FBQ0QsMEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBR0Q7Ozs7RUExSGtCOUIsZ0Q7O0FBMkhwQjtBQUVjSCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmZjYWIyYTNlZDY5ZGZiMjYxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBDcm9zc0xpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0ICogYXMgZmEgZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uYXZiYXIubW9kdWxlLmNzc1wiO1xyXG5cclxudmFyIGxpbmVMZWZ0ID0gc3R5bGVzLmxpbmVMZWZ0O1xyXG52YXIgbGluZVJpZ2h0ID0gc3R5bGVzLmxpbmVSaWdodDtcclxudmFyIGxpbmVNaWRkbGUgPSBzdHlsZXMubGluZU1pZGRsZTtcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIGNyZWF0ZSBhIHJlZiB0byBzdG9yZSB0aGUgdGV4dElucHV0IERPTSBlbGVtZW50XHJcbiAgICB0aGlzLnRleHRJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy50b2dnbGVNb2JpbGVOYXZiYXIgPSB0aGlzLnRvZ2dsZU1vYmlsZU5hdmJhci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hZGRFdkxpc25lciA9IHRoaXMuYWRkRXZMaXNuZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubWVudSA9IHN0eWxlcy5saW5rQ29udGFpbmVyO1xyXG4gICAgdGhpcy5tZW51U3R5bGluZyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTW9iaWxlTmF2YmFyKGNsb3NlKSB7XHJcbiAgICBpZiAodGhpcy5tZW51U3R5bGluZy50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm1lbnVTdHlsaW5nID0ge31cclxuICAgICAgbGluZUxlZnQgPSBzdHlsZXMubGluZUxlZnQ7XHJcbiAgICAgIGxpbmVSaWdodCA9IHN0eWxlcy5saW5lUmlnaHQ7XHJcbiAgICAgIGxpbmVNaWRkbGUgPSBzdHlsZXMubGluZU1pZGRsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpbmVMZWZ0ID0gc3R5bGVzLmxpbmVMZWZ0Q2xvc2U7XHJcbiAgICAgIGxpbmVSaWdodCA9IHN0eWxlcy5saW5lUmlnaHRDbG9zZTtcclxuICAgICAgbGluZU1pZGRsZSA9IHN0eWxlcy5saW5lTWlkZGxlQ2xvc2U7XHJcbiAgICAgIHRoaXMubWVudVN0eWxpbmcgPSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMjAwcHgpXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgdGhpcy5hZGRFdkxpc25lcigpXHJcbiAgfVxyXG5cclxuICBhZGRFdkxpc25lcigpIHtcclxuICAgIGlmICh0aGlzLmFkZGVkRXZMaXNuciA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5hZGRlZEV2TGlzbnIgPSB0cnVlO1xyXG4gICAgbGV0IGVsbSA9IHRoaXM7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0aGluZykge1xyXG4gICAgICBpZiAodGhpbmcudGFyZ2V0LnRhZ05hbWUgPT09IFwiQVwiIHx8IHRoaW5nLnRhcmdldC50YWdOYW1lID09PSBcIkhSXCIpIHJldHVybjtcclxuICAgICAgZWxtLm1lbnVTdHlsaW5nID0ge307XHJcbiAgICAgIGxpbmVMZWZ0ID0gc3R5bGVzLmxpbmVMZWZ0O1xyXG4gICAgICBsaW5lUmlnaHQgPSBzdHlsZXMubGluZVJpZ2h0O1xyXG4gICAgICBsaW5lTWlkZGxlID0gc3R5bGVzLmxpbmVNaWRkbGU7XHJcbiAgICAgIGVsbS5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFuaW1hdGV9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgPENyb3NzTGluayBocmVmPVwiL1wiPjxhPjxoMyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvVGV4dH0+Vml2aWQgSGFja3M8L2gzPjwvYT48L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi9cIj48YT48aW1nIHNyYz1cImxvZ28uc3ZnXCIgYWx0PVwibG9nby5zdmdcIiBzdHlsZT17eyB3aWR0aDogXCI1cmVtXCIgfX0gLz48L2E+PC9Dcm9zc0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vYmlsZU5hdmJhcn0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259ID5cclxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17bGluZUxlZnR9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVNaWRkbGV9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVSaWdodH0+PC9ocj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0aGlzLm1lbnV9IHN0eWxlPXt0aGlzLm1lbnVTdHlsaW5nfT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdml2aWRoYWNrcy5kZXZwb3N0LmNvbS9cIiBjbGFzc05hbWU9e3N0eWxlcy5hbGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IERFVlBPU1Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHNtb290aD1cInRydWVcIiBkdXJhdGlvbj1cIjUwMFwiPiBURUFNPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJ0aW1lbGluZVwiIHNtb290aD1cInRydWVcIiBkdXJhdGlvbj1cIjUwMFwiIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfT4gVElNRUxJTkU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cImFib3V0XCIgc21vb3RoPVwidHJ1ZVwiIGR1cmF0aW9uPVwiNTAwXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9PiBBQk9VVDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZmFxc1wiIHNtb290aD1cInRydWVcIiBkdXJhdGlvbj1cIjUwMFwiIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfT4gRkFRczwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZpdmlkaGFja3MuZGV2cG9zdC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9PiBSRUdJU1RFUjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi9cIj48YT48aDMgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1RleHR9PlZpdmlkIEhhY2tzPC9oMz48L2E+PC9Dcm9zc0xpbms+XHJcbiAgICAgICAgICAgICAgICA8Q3Jvc3NMaW5rIGhyZWY9XCIvXCI+PGE+PGltZyBzcmM9XCJsb2dvLnN2Z1wiIGFsdD1cImxvZ28uc3ZnXCIgc3R5bGU9e3sgd2lkdGg6IFwiNXJlbVwiIH19IC8+PC9hPjwvQ3Jvc3NMaW5rPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVNb2JpbGVOYXZiYXJ9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJY29ufSA+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVMZWZ0fT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtsaW5lTWlkZGxlfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtsaW5lUmlnaHR9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dGhpcy5tZW51fSBzdHlsZT17dGhpcy5tZW51U3R5bGluZ30+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZpdmlkaGFja3MuZGV2cG9zdC5jb20vXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9IHRhcmdldD1cIl9ibGFua1wiPiBERVZQT1NUPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPENyb3NzTGluayBocmVmPVwiLyN0ZWFtXCI+PGE+IFRFQU08L2E+PC9Dcm9zc0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8Q3Jvc3NMaW5rIGhyZWY9XCIvI3RpbWVsaW5lXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9PiBUSU1FTElORTwvYT48L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi8jYWJvdXRcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5hbGlua30+IEFCT1VUPC9hPjwvQ3Jvc3NMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPENyb3NzTGluayBocmVmPVwiLyNmYXFzXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9PiBGQVFzPC9hPjwvQ3Jvc3NMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdml2aWRoYWNrcy5kZXZwb3N0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e3N0eWxlcy5hbGlua30+IFJFR0lTVEVSPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==