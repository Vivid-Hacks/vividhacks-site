webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sponsors/index.js":
/*!**************************************!*\
  !*** ./components/Sponsors/index.js ***!
  \**************************************/
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
/* harmony import */ var _sponser_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sponser.module.css */ "./components/Sponsors/sponser.module.css");
/* harmony import */ var _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sponser_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Hooks_isVisible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Hooks/isVisible */ "./components/Hooks/isVisible.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Joshua\\Documents\\coding\\vividhacks-backend\\components\\Sponsors\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Sponsor = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sponsor, _React$Component);

  var _super = _createSuper(Sponsor);

  function Sponsor(props) {
    var _this;

    Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sponsor);

    _this = _super.call(this, props);
    _this.containerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.modalRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.modalBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.coverBG = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.hackclubIframe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.handleScroll = _this.handleScroll.bind(Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.openModal = _this.openModal.bind(Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(C_Users_Joshua_Documents_coding_vividhacks_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sponsor, [{
    key: "handleScroll",
    value: function handleScroll() {
      var element = this.containerRef.current;

      if (element) {
        var windowOffsetTop = window.innerHeight + window.scrollY;
        var elementBoxOffsetTop = element.offsetTop;

        if (windowOffsetTop >= elementBoxOffsetTop) {
          this.containerRef.current.classList.add("fade");
          this.hackclubIframe.current.src = "";
        } else {
          this.containerRef.current.classList.remove("fade");
        }
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.hackclubIframe.current.src = "https://bank.hackclub.com/donations/start/vivid-hacks";
      this.modalRef.current.style.display = "block";
      this.coverBG.current.style.display = "block";
    }
  }, {
    key: "render",
    value: function render() {
      var classThis = this;

      if (true) {
        document.addEventListener("scroll", this.handleScroll, {
          passive: true
        });
        document.addEventListener("click", function (event) {
          if (classThis.modalRef.current.contains(event.target)) {} else {
            if (classThis.modalBtn.current.contains(event.target)) return;
            classThis.modalRef.current.style.display = "none";
            classThis.coverBG.current.style.display = "none";
          }
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: this.containerRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.modal,
          ref: this.modalRef,
          style: {
            display: "none"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
            ref: this.hackclubIframe
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cover,
          ref: this.coverBG,
          style: {
            display: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.heading,
            children: "Sponsors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.sponsorGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.sponsor,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://hackclub.org",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/hackclublogo.svg",
                  width: "318"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Hack Club"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.sponsor,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://www.stickermule.com",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/sticker-mule-logo.svg",
                  width: "250"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Sticker Mule"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.para,
            children: "Want to be our partner?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button,
            style: {
              marginBottom: 0
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://vivd.tk/prospectus",
              target: "_blank",
              children: "LEARN MORE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.para,
            children: "Or "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _sponser_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button,
            ref: this.modalBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: this.openModal,
              style: {
                cursor: "pointer"
              },
              children: "Donate to us!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this);
    }
  }]);

  return Sponsor;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

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
                      lineNumber: 66,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
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
                      lineNumber: 71,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  onClick: this.toggleMobileNavbar,
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.menuIcon,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineLeft
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineMiddle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineRight
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
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
                    children: [" ", "DEVPOST"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    href: "/",
                    smooth: "true",
                    duration: "500",
                    children: [" ", "TEAM"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "timeline",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: [" ", "TIMELINE"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "about",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: [" ", "ABOUT"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                    to: "faqs",
                    smooth: "true",
                    duration: "500",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: [" ", "FAQs"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    target: "_blank",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: [" ", "REGISTER"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
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
                      lineNumber: 158,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
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
                      lineNumber: 163,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  onClick: this.toggleMobileNavbar,
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.menuIcon,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineLeft
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineMiddle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: lineRight
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: this.menu,
                style: this.menuStyling,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://discord.gg/HGXwx5A8dU",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    target: "_blank",
                    children: "Discord"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    href: "/#team",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: " TEAM"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
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
                      lineNumber: 196,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
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
                      lineNumber: 201,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
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
                      lineNumber: 206,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://vividhacks.devpost.com/",
                    target: "_blank",
                    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.alink,
                    children: [" ", "REGISTER"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 11
          }, this);
        }
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 12
      }, this);
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG9uc29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMiXSwibmFtZXMiOlsiU3BvbnNvciIsInByb3BzIiwiY29udGFpbmVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJtb2RhbFJlZiIsIm1vZGFsQnRuIiwiY292ZXJCRyIsImhhY2tjbHViSWZyYW1lIiwiaGFuZGxlU2Nyb2xsIiwiYmluZCIsIm9wZW5Nb2RhbCIsImVsZW1lbnQiLCJjdXJyZW50Iiwid2luZG93T2Zmc2V0VG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxZIiwiZWxlbWVudEJveE9mZnNldFRvcCIsIm9mZnNldFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsInJlbW92ZSIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzVGhpcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic3R5bGVzIiwibW9kYWwiLCJjb3ZlciIsImNvbnRhaW5lciIsImhlYWRpbmciLCJzcG9uc29yR3JpZCIsInNwb25zb3IiLCJwYXJhIiwiYnV0dG9uIiwibWFyZ2luQm90dG9tIiwiY3Vyc29yIiwiQ29tcG9uZW50IiwibGluZUxlZnQiLCJsaW5lUmlnaHQiLCJsaW5lTWlkZGxlIiwiTmF2YmFyIiwidGV4dElucHV0IiwidG9nZ2xlTW9iaWxlTmF2YmFyIiwiYWRkRXZMaXNuZXIiLCJtZW51IiwibGlua0NvbnRhaW5lciIsIm1lbnVTdHlsaW5nIiwiY2xvc2UiLCJ0cmFuc2Zvcm0iLCJ1bmRlZmluZWQiLCJsaW5lTGVmdENsb3NlIiwibGluZVJpZ2h0Q2xvc2UiLCJsaW5lTWlkZGxlQ2xvc2UiLCJmb3JjZVVwZGF0ZSIsImFkZGVkRXZMaXNuciIsImVsbSIsInRoaW5nIiwidGFnTmFtZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhbmltYXRlIiwibG9nbyIsImxvZ29UZXh0Iiwid2lkdGgiLCJtZW51SWNvbiIsImxpbmsiLCJhbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsTzs7Ozs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsZ0JBQW9CQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQXBCO0FBQ0EsVUFBS0MsUUFBTCxnQkFBZ0JGLDRDQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLRSxRQUFMLGdCQUFnQkgsNENBQUssQ0FBQ0MsU0FBTixFQUFoQjtBQUNBLFVBQUtHLE9BQUwsZ0JBQWVKLDRDQUFLLENBQUNDLFNBQU4sRUFBZjtBQUNBLFVBQUtJLGNBQUwsZ0JBQXNCTCw0Q0FBSyxDQUFDQyxTQUFOLEVBQXRCO0FBRUEsVUFBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix3S0FBcEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZix3S0FBakI7QUFUaUI7QUFVbEI7Ozs7bUNBQ2M7QUFDYixVQUFNRSxPQUFPLEdBQUcsS0FBS1YsWUFBTCxDQUFrQlcsT0FBbEM7O0FBQ0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBTUUsZUFBZSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJELE1BQU0sQ0FBQ0UsT0FBcEQ7QUFFQSxZQUFNQyxtQkFBbUIsR0FBR04sT0FBTyxDQUFDTyxTQUFwQzs7QUFDQSxZQUFJTCxlQUFlLElBQUlJLG1CQUF2QixFQUE0QztBQUMxQyxlQUFLaEIsWUFBTCxDQUFrQlcsT0FBbEIsQ0FBMEJPLFNBQTFCLENBQW9DQyxHQUFwQyxDQUF3QyxNQUF4QztBQUNBLGVBQUtiLGNBQUwsQ0FBb0JLLE9BQXBCLENBQTRCUyxHQUE1QixHQUFrQyxFQUFsQztBQUNELFNBSEQsTUFHTztBQUNMLGVBQUtwQixZQUFMLENBQWtCVyxPQUFsQixDQUEwQk8sU0FBMUIsQ0FBb0NHLE1BQXBDLENBQTJDLE1BQTNDO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBQ1c7QUFDVixXQUFLZixjQUFMLENBQW9CSyxPQUFwQixDQUE0QlMsR0FBNUIsR0FDRSx1REFERjtBQUVBLFdBQUtqQixRQUFMLENBQWNRLE9BQWQsQ0FBc0JXLEtBQXRCLENBQTRCQyxPQUE1QixHQUFzQyxPQUF0QztBQUNBLFdBQUtsQixPQUFMLENBQWFNLE9BQWIsQ0FBcUJXLEtBQXJCLENBQTJCQyxPQUEzQixHQUFxQyxPQUFyQztBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBQ0EsZ0JBQWdDO0FBQzlCQyxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxLQUFLbkIsWUFBekMsRUFBdUQ7QUFBRW9CLGlCQUFPLEVBQUU7QUFBWCxTQUF2RDtBQUNBRixnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVRSxLQUFWLEVBQWlCO0FBQ2xELGNBQUlKLFNBQVMsQ0FBQ3JCLFFBQVYsQ0FBbUJRLE9BQW5CLENBQTJCa0IsUUFBM0IsQ0FBb0NELEtBQUssQ0FBQ0UsTUFBMUMsQ0FBSixFQUF1RCxDQUN0RCxDQURELE1BQ087QUFDTCxnQkFBSU4sU0FBUyxDQUFDcEIsUUFBVixDQUFtQk8sT0FBbkIsQ0FBMkJrQixRQUEzQixDQUFvQ0QsS0FBSyxDQUFDRSxNQUExQyxDQUFKLEVBQXVEO0FBQ3ZETixxQkFBUyxDQUFDckIsUUFBVixDQUFtQlEsT0FBbkIsQ0FBMkJXLEtBQTNCLENBQWlDQyxPQUFqQyxHQUEyQyxNQUEzQztBQUNBQyxxQkFBUyxDQUFDbkIsT0FBVixDQUFrQk0sT0FBbEIsQ0FBMEJXLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxNQUExQztBQUNEO0FBQ0YsU0FQRDtBQVFEOztBQUNELDBCQUNFO0FBQUssV0FBRyxFQUFFLEtBQUt2QixZQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFFK0IsMERBQU0sQ0FBQ0MsS0FEcEI7QUFFRSxhQUFHLEVBQUUsS0FBSzdCLFFBRlo7QUFHRSxlQUFLLEVBQUU7QUFBRW9CLG1CQUFPLEVBQUU7QUFBWCxXQUhUO0FBQUEsaUNBS0U7QUFBUSxlQUFHLEVBQUUsS0FBS2pCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFDRSxtQkFBUyxFQUFFeUIsMERBQU0sQ0FBQ0UsS0FEcEI7QUFFRSxhQUFHLEVBQUUsS0FBSzVCLE9BRlo7QUFHRSxlQUFLLEVBQUU7QUFBRWtCLG1CQUFPLEVBQUU7QUFBWDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFhRTtBQUFLLG1CQUFTLEVBQUVRLDBEQUFNLENBQUNHLFNBQXZCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFSCwwREFBTSxDQUFDSSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRUosMERBQU0sQ0FBQ0ssV0FBdkI7QUFBQSxvQ0FLRTtBQUFLLHVCQUFTLEVBQUVMLDBEQUFNLENBQUNNLE9BQXZCO0FBQUEsc0NBQ0U7QUFBRyxvQkFBSSxFQUFDLHNCQUFSO0FBQStCLHNCQUFNLEVBQUMsUUFBdEM7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUMsbUJBQVQ7QUFBNkIsdUJBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQWFFO0FBQUssdUJBQVMsRUFBRU4sMERBQU0sQ0FBQ00sT0FBdkI7QUFBQSxzQ0FDRTtBQUFHLG9CQUFJLEVBQUMsNkJBQVI7QUFBc0Msc0JBQU0sRUFBQyxRQUE3QztBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBQyx3QkFBVDtBQUFrQyx1QkFBSyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQXdCRTtBQUFHLHFCQUFTLEVBQUVOLDBEQUFNLENBQUNPLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCRixlQXlCRTtBQUFRLHFCQUFTLEVBQUVQLDBEQUFNLENBQUNRLE1BQTFCO0FBQWtDLGlCQUFLLEVBQUU7QUFBRUMsMEJBQVksRUFBRTtBQUFoQixhQUF6QztBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyw0QkFBUjtBQUFxQyxvQkFBTSxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkYsZUE4QkU7QUFBRyxxQkFBUyxFQUFFVCwwREFBTSxDQUFDTyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkYsZUErQkU7QUFBUSxxQkFBUyxFQUFFUCwwREFBTSxDQUFDUSxNQUExQjtBQUFrQyxlQUFHLEVBQUUsS0FBS25DLFFBQTVDO0FBQUEsbUNBQ0U7QUFBRyxxQkFBTyxFQUFFLEtBQUtLLFNBQWpCO0FBQTRCLG1CQUFLLEVBQUU7QUFBRWdDLHNCQUFNLEVBQUU7QUFBVixlQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXFERDs7OztFQWxHbUJ4Qyw0Q0FBSyxDQUFDeUMsUzs7QUFxR2I1QyxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJNkMsUUFBUSxHQUFHWiwwREFBTSxDQUFDWSxRQUF0QjtBQUNBLElBQUlDLFNBQVMsR0FBR2IsMERBQU0sQ0FBQ2EsU0FBdkI7QUFDQSxJQUFJQyxVQUFVLEdBQUdkLDBEQUFNLENBQUNjLFVBQXhCOztJQUVNQyxNOzs7OztBQUNKLGtCQUFZL0MsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFDQSxVQUFLZ0QsU0FBTCxnQkFBaUI5QyxnREFBQSxFQUFqQjtBQUNBLFVBQUsrQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QnhDLElBQXhCLHdLQUExQjtBQUNBLFVBQUt5QyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJ6QyxJQUFqQix3S0FBbkI7QUFDQSxVQUFLMEMsSUFBTCxHQUFZbkIsMERBQU0sQ0FBQ29CLGFBQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixFQUFuQjtBQVBpQjtBQVFsQjs7Ozt1Q0FFa0JDLEssRUFBTztBQUN4QixVQUFJLEtBQUtELFdBQUwsQ0FBaUJFLFNBQWpCLEtBQStCQyxTQUFuQyxFQUE4QztBQUM1QyxhQUFLSCxXQUFMLEdBQW1CLEVBQW5CO0FBQ0FULGdCQUFRLEdBQUdaLDBEQUFNLENBQUNZLFFBQWxCO0FBQ0FDLGlCQUFTLEdBQUdiLDBEQUFNLENBQUNhLFNBQW5CO0FBQ0FDLGtCQUFVLEdBQUdkLDBEQUFNLENBQUNjLFVBQXBCO0FBQ0QsT0FMRCxNQUtPO0FBQ0xGLGdCQUFRLEdBQUdaLDBEQUFNLENBQUN5QixhQUFsQjtBQUNBWixpQkFBUyxHQUFHYiwwREFBTSxDQUFDMEIsY0FBbkI7QUFDQVosa0JBQVUsR0FBR2QsMERBQU0sQ0FBQzJCLGVBQXBCO0FBQ0EsYUFBS04sV0FBTCxHQUFtQjtBQUNqQkUsbUJBQVMsRUFBRTtBQURNLFNBQW5CO0FBR0Q7O0FBQ0QsV0FBS0ssV0FBTDtBQUNBLFdBQUtWLFdBQUw7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSSxLQUFLVyxZQUFMLEtBQXNCLElBQTFCLEVBQWdDO0FBQ2hDLFdBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxVQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBaEQsWUFBTSxDQUFDYSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVb0MsS0FBVixFQUFpQjtBQUNoRCxZQUFJQSxLQUFLLENBQUNoQyxNQUFOLENBQWFpQyxPQUFiLEtBQXlCLEdBQXpCLElBQWdDRCxLQUFLLENBQUNoQyxNQUFOLENBQWFpQyxPQUFiLEtBQXlCLElBQTdELEVBQW1FO0FBQ25FRixXQUFHLENBQUNULFdBQUosR0FBa0IsRUFBbEI7QUFDQVQsZ0JBQVEsR0FBR1osMERBQU0sQ0FBQ1ksUUFBbEI7QUFDQUMsaUJBQVMsR0FBR2IsMERBQU0sQ0FBQ2EsU0FBbkI7QUFDQUMsa0JBQVUsR0FBR2QsMERBQU0sQ0FBQ2MsVUFBcEI7QUFDQWdCLFdBQUcsQ0FBQ0YsV0FBSjtBQUNELE9BUEQ7QUFRRDs7OzZCQUVRO0FBQ1AsZ0JBQWdDO0FBQzlCLFlBQUk5QyxNQUFNLENBQUNtRCxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixHQUFqQyxFQUFzQztBQUNwQyw4QkFDRTtBQUFLLHFCQUFTLFlBQUtsQywwREFBTSxDQUFDbUMsT0FBWixDQUFkO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFbkMsMERBQU0sQ0FBQ0csU0FBdkI7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVILDBEQUFNLENBQUNvQyxJQUF2QjtBQUFBLHdDQUNFLHFFQUFDLGdEQUFEO0FBQVcsc0JBQUksRUFBQyxHQUFoQjtBQUFBLHlDQUNFO0FBQUEsMkNBQ0U7QUFBSSwrQkFBUyxFQUFFcEMsMERBQU0sQ0FBQ3FDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFNRSxxRUFBQyxnREFBRDtBQUFXLHNCQUFJLEVBQUMsR0FBaEI7QUFBQSx5Q0FDRTtBQUFBLDJDQUNFO0FBQ0UseUJBQUcsRUFBQyxVQUROO0FBRUUseUJBQUcsRUFBQyxVQUZOO0FBR0UsMkJBQUssRUFBRTtBQUFFQyw2QkFBSyxFQUFFO0FBQVQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkYsZUFlRTtBQUNFLHlCQUFPLEVBQUUsS0FBS3JCLGtCQURoQjtBQUVFLDJCQUFTLEVBQUVqQiwwREFBTSxDQUFDdUMsUUFGcEI7QUFBQSwwQ0FJRTtBQUFJLDZCQUFTLEVBQUUzQjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkYsZUFLRTtBQUFJLDZCQUFTLEVBQUVFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMRixlQU1FO0FBQUksNkJBQVMsRUFBRUQ7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUF5QkU7QUFBSSx5QkFBUyxFQUFFLEtBQUtNLElBQXBCO0FBQTBCLHFCQUFLLEVBQUUsS0FBS0UsV0FBdEM7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUVyQiwwREFBTSxDQUFDd0MsSUFBdEI7QUFBQSx5Q0FDRTtBQUNFLHdCQUFJLEVBQUMsaUNBRFA7QUFFRSw2QkFBUyxFQUFFeEMsMERBQU0sQ0FBQ3lDLEtBRnBCO0FBR0UsMEJBQU0sRUFBQyxRQUhUO0FBQUEsK0JBS0csR0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBV0U7QUFBSSwyQkFBUyxFQUFFekMsMERBQU0sQ0FBQ3dDLElBQXRCO0FBQUEseUNBQ0UscUVBQUMsaURBQUQ7QUFBTSx3QkFBSSxFQUFDLEdBQVg7QUFBZSwwQkFBTSxFQUFDLE1BQXRCO0FBQTZCLDRCQUFRLEVBQUMsS0FBdEM7QUFBQSwrQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWEYsZUFpQkU7QUFBSSwyQkFBUyxFQUFFeEMsMERBQU0sQ0FBQ3dDLElBQXRCO0FBQUEseUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxzQkFBRSxFQUFDLFVBREw7QUFFRSwwQkFBTSxFQUFDLE1BRlQ7QUFHRSw0QkFBUSxFQUFDLEtBSFg7QUFJRSw2QkFBUyxFQUFFeEMsMERBQU0sQ0FBQ3lDLEtBSnBCO0FBQUEsK0JBTUcsR0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpCRixlQTRCRTtBQUFJLDJCQUFTLEVBQUV6QywwREFBTSxDQUFDd0MsSUFBdEI7QUFBQSx5Q0FDRSxxRUFBQyxpREFBRDtBQUNFLHNCQUFFLEVBQUMsT0FETDtBQUVFLDBCQUFNLEVBQUMsTUFGVDtBQUdFLDRCQUFRLEVBQUMsS0FIWDtBQUlFLDZCQUFTLEVBQUV4QywwREFBTSxDQUFDeUMsS0FKcEI7QUFBQSwrQkFNRyxHQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBNUJGLGVBdUNFO0FBQUksMkJBQVMsRUFBRXpDLDBEQUFNLENBQUN3QyxJQUF0QjtBQUFBLHlDQUNFLHFFQUFDLGlEQUFEO0FBQ0Usc0JBQUUsRUFBQyxNQURMO0FBRUUsMEJBQU0sRUFBQyxNQUZUO0FBR0UsNEJBQVEsRUFBQyxLQUhYO0FBSUUsNkJBQVMsRUFBRXhDLDBEQUFNLENBQUN5QyxLQUpwQjtBQUFBLCtCQU1HLEdBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF2Q0YsZUFrREU7QUFBSSwyQkFBUyxFQUFFekMsMERBQU0sQ0FBQ3dDLElBQXRCO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLGlDQURQO0FBRUUsMEJBQU0sRUFBQyxRQUZUO0FBR0UsNkJBQVMsRUFBRXhDLDBEQUFNLENBQUN5QyxLQUhwQjtBQUFBLCtCQUtHLEdBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBMkZELFNBNUZELE1BNEZPO0FBQ0wsOEJBQ0U7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUV6QywwREFBTSxDQUFDRyxTQUF2QjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBRUgsMERBQU0sQ0FBQ29DLElBQXZCO0FBQUEsd0NBQ0UscUVBQUMsZ0RBQUQ7QUFBVyxzQkFBSSxFQUFDLEdBQWhCO0FBQUEseUNBQ0U7QUFBQSwyQ0FDRTtBQUFJLCtCQUFTLEVBQUVwQywwREFBTSxDQUFDcUMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQU1FLHFFQUFDLGdEQUFEO0FBQVcsc0JBQUksRUFBQyxHQUFoQjtBQUFBLHlDQUNFO0FBQUEsMkNBQ0U7QUFDRSx5QkFBRyxFQUFDLFVBRE47QUFFRSx5QkFBRyxFQUFDLFVBRk47QUFHRSwyQkFBSyxFQUFFO0FBQUVDLDZCQUFLLEVBQUU7QUFBVDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORixlQWVFO0FBQ0UseUJBQU8sRUFBRSxLQUFLckIsa0JBRGhCO0FBRUUsMkJBQVMsRUFBRWpCLDBEQUFNLENBQUN1QyxRQUZwQjtBQUFBLDBDQUlFO0FBQUksNkJBQVMsRUFBRTNCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixlQUtFO0FBQUksNkJBQVMsRUFBRUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGLGVBTUU7QUFBSSw2QkFBUyxFQUFFRDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQXlCRTtBQUFJLHlCQUFTLEVBQUUsS0FBS00sSUFBcEI7QUFBMEIscUJBQUssRUFBRSxLQUFLRSxXQUF0QztBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBRXJCLDBEQUFNLENBQUN3QyxJQUF0QjtBQUFBLHlDQUNFO0FBQ0Usd0JBQUksRUFBQywrQkFEUDtBQUVFLDZCQUFTLEVBQUV4QywwREFBTSxDQUFDeUMsS0FGcEI7QUFHRSwwQkFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBVUU7QUFBSSwyQkFBUyxFQUFFekMsMERBQU0sQ0FBQ3dDLElBQXRCO0FBQUEseUNBQ0UscUVBQUMsZ0RBQUQ7QUFBVyx3QkFBSSxFQUFDLFFBQWhCO0FBQUEsMkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWRixlQWVFO0FBQUksMkJBQVMsRUFBRXhDLDBEQUFNLENBQUN3QyxJQUF0QjtBQUFBLHlDQUNFLHFFQUFDLGdEQUFEO0FBQVcsd0JBQUksRUFBQyxZQUFoQjtBQUFBLDJDQUNFO0FBQUcsK0JBQVMsRUFBRXhDLDBEQUFNLENBQUN5QyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZGLGVBb0JFO0FBQUksMkJBQVMsRUFBRXpDLDBEQUFNLENBQUN3QyxJQUF0QjtBQUFBLHlDQUNFLHFFQUFDLGdEQUFEO0FBQVcsd0JBQUksRUFBQyxTQUFoQjtBQUFBLDJDQUNFO0FBQUcsK0JBQVMsRUFBRXhDLDBEQUFNLENBQUN5QyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXBCRixlQXlCRTtBQUFJLDJCQUFTLEVBQUV6QywwREFBTSxDQUFDd0MsSUFBdEI7QUFBQSx5Q0FDRSxxRUFBQyxnREFBRDtBQUFXLHdCQUFJLEVBQUMsUUFBaEI7QUFBQSwyQ0FDRTtBQUFHLCtCQUFTLEVBQUV4QywwREFBTSxDQUFDeUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF6QkYsZUE4QkU7QUFBSSwyQkFBUyxFQUFFekMsMERBQU0sQ0FBQ3dDLElBQXRCO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLGlDQURQO0FBRUUsMEJBQU0sRUFBQyxRQUZUO0FBR0UsNkJBQVMsRUFBRXhDLDBEQUFNLENBQUN5QyxLQUhwQjtBQUFBLCtCQUtHLEdBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBdUVEO0FBQ0Y7O0FBQ0QsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0Q7Ozs7RUFwTmtCdkUsZ0Q7O0FBdU5ONkMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODhmMDg1NWIwMTA4NGMxNmZhNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3BvbnNlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCAqIGFzIHVzZU9uU2NyZWVuIGZyb20gXCIuLi9Ib29rcy9pc1Zpc2libGVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY2xhc3MgU3BvbnNvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLm1vZGFsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLm1vZGFsQnRuID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmNvdmVyQkcgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFja2NsdWJJZnJhbWUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgY29uc3Qgd2luZG93T2Zmc2V0VG9wID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50Qm94T2Zmc2V0VG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgIGlmICh3aW5kb3dPZmZzZXRUb3AgPj0gZWxlbWVudEJveE9mZnNldFRvcCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XHJcbiAgICAgICAgdGhpcy5oYWNrY2x1YklmcmFtZS5jdXJyZW50LnNyYyA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmhhY2tjbHViSWZyYW1lLmN1cnJlbnQuc3JjID1cclxuICAgICAgXCJodHRwczovL2JhbmsuaGFja2NsdWIuY29tL2RvbmF0aW9ucy9zdGFydC92aXZpZC1oYWNrc1wiO1xyXG4gICAgdGhpcy5tb2RhbFJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB0aGlzLmNvdmVyQkcuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgY2xhc3NUaGlzID0gdGhpcztcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChjbGFzc1RoaXMubW9kYWxSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjbGFzc1RoaXMubW9kYWxCdG4uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm47XHJcbiAgICAgICAgICBjbGFzc1RoaXMubW9kYWxSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICBjbGFzc1RoaXMuY292ZXJCRy5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cclxuICAgICAgICAgIHJlZj17dGhpcy5tb2RhbFJlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlmcmFtZSByZWY9e3RoaXMuaGFja2NsdWJJZnJhbWV9PjwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvdmVyQkd9XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+U3BvbnNvcnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcG9uc29yR3JpZH0+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwb25zb3J9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lY2hvYXIueHl6L1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2VjaG9hcmxvZ28ucG5nXCI+PC9pbWc+PC9hPlxyXG4gICAgICAgICAgICAgIDxkaXY+PHNwYW4+RWNobyBBUjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwb25zb3J9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hhY2tjbHViLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaGFja2NsdWJsb2dvLnN2Z1wiIHdpZHRoPVwiMzE4XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5IYWNrIENsdWI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwb25zb3J9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zdGlja2VybXVsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0aWNrZXItbXVsZS1sb2dvLnN2Z1wiIHdpZHRoPVwiMjUwXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TdGlja2VyIE11bGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5XYW50IHRvIGJlIG91ciBwYXJ0bmVyPzwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZpdmQudGsvcHJvc3BlY3R1c1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIExFQVJOIE1PUkVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5PciA8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gcmVmPXt0aGlzLm1vZGFsQnRufT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgRG9uYXRlIHRvIHVzIVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BvbnNvcjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IENyb3NzTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmYSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbnZhciBsaW5lTGVmdCA9IHN0eWxlcy5saW5lTGVmdDtcclxudmFyIGxpbmVSaWdodCA9IHN0eWxlcy5saW5lUmlnaHQ7XHJcbnZhciBsaW5lTWlkZGxlID0gc3R5bGVzLmxpbmVNaWRkbGU7XHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyBjcmVhdGUgYSByZWYgdG8gc3RvcmUgdGhlIHRleHRJbnB1dCBET00gZWxlbWVudFxyXG4gICAgdGhpcy50ZXh0SW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMudG9nZ2xlTW9iaWxlTmF2YmFyID0gdGhpcy50b2dnbGVNb2JpbGVOYXZiYXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYWRkRXZMaXNuZXIgPSB0aGlzLmFkZEV2TGlzbmVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1lbnUgPSBzdHlsZXMubGlua0NvbnRhaW5lcjtcclxuICAgIHRoaXMubWVudVN0eWxpbmcgPSB7fTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1vYmlsZU5hdmJhcihjbG9zZSkge1xyXG4gICAgaWYgKHRoaXMubWVudVN0eWxpbmcudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5tZW51U3R5bGluZyA9IHt9O1xyXG4gICAgICBsaW5lTGVmdCA9IHN0eWxlcy5saW5lTGVmdDtcclxuICAgICAgbGluZVJpZ2h0ID0gc3R5bGVzLmxpbmVSaWdodDtcclxuICAgICAgbGluZU1pZGRsZSA9IHN0eWxlcy5saW5lTWlkZGxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGluZUxlZnQgPSBzdHlsZXMubGluZUxlZnRDbG9zZTtcclxuICAgICAgbGluZVJpZ2h0ID0gc3R5bGVzLmxpbmVSaWdodENsb3NlO1xyXG4gICAgICBsaW5lTWlkZGxlID0gc3R5bGVzLmxpbmVNaWRkbGVDbG9zZTtcclxuICAgICAgdGhpcy5tZW51U3R5bGluZyA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgyMDBweClcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIHRoaXMuYWRkRXZMaXNuZXIoKTtcclxuICB9XHJcblxyXG4gIGFkZEV2TGlzbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuYWRkZWRFdkxpc25yID09PSB0cnVlKSByZXR1cm47XHJcbiAgICB0aGlzLmFkZGVkRXZMaXNuciA9IHRydWU7XHJcbiAgICBsZXQgZWxtID0gdGhpcztcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKHRoaW5nKSB7XHJcbiAgICAgIGlmICh0aGluZy50YXJnZXQudGFnTmFtZSA9PT0gXCJBXCIgfHwgdGhpbmcudGFyZ2V0LnRhZ05hbWUgPT09IFwiSFJcIikgcmV0dXJuO1xyXG4gICAgICBlbG0ubWVudVN0eWxpbmcgPSB7fTtcclxuICAgICAgbGluZUxlZnQgPSBzdHlsZXMubGluZUxlZnQ7XHJcbiAgICAgIGxpbmVSaWdodCA9IHN0eWxlcy5saW5lUmlnaHQ7XHJcbiAgICAgIGxpbmVNaWRkbGUgPSBzdHlsZXMubGluZU1pZGRsZTtcclxuICAgICAgZWxtLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYW5pbWF0ZX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICA8Q3Jvc3NMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvVGV4dH0+Vml2aWQgSGFja3M8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwibG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9Dcm9zc0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vYmlsZU5hdmJhcn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUljb259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVMZWZ0fT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtsaW5lTWlkZGxlfT48L2hyPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtsaW5lUmlnaHR9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dGhpcy5tZW51fSBzdHlsZT17dGhpcy5tZW51U3R5bGluZ30+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdml2aWRoYWNrcy5kZXZwb3N0LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgREVWUE9TVFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHNtb290aD1cInRydWVcIiBkdXJhdGlvbj1cIjUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBURUFNXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFRJTUVMSU5FXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCJhYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIEFCT1VUXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCJmYXFzXCJcclxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj1cIjUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWxpbmt9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgRkFRc1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZpdmlkaGFja3MuZGV2cG9zdC5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29UZXh0fT5WaXZpZCBIYWNrczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvQ3Jvc3NMaW5rPlxyXG4gICAgICAgICAgICAgICAgPENyb3NzTGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJsb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9iaWxlTmF2YmFyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51SWNvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17bGluZUxlZnR9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVNaWRkbGV9PjwvaHI+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e2xpbmVSaWdodH0+PC9ocj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0aGlzLm1lbnV9IHN0eWxlPXt0aGlzLm1lbnVTdHlsaW5nfT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL0hHWHd4NUE4ZFVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEaXNjb3JkXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi8jdGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiBURUFNPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi8jdGltZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hbGlua30+IFRJTUVMSU5FPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi8jYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hbGlua30+IEFCT1VUPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nyb3NzTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxDcm9zc0xpbmsgaHJlZj1cIi8jZmFxc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfT4gRkFRczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9Dcm9zc0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZpdmlkaGFja3MuZGV2cG9zdC5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsaW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=