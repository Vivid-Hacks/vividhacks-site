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
              href: "mailto:vividhacks@gmail.com",
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
            lineNumber: 91,
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
              lineNumber: 93,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG9uc29ycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTcG9uc29yIiwicHJvcHMiLCJjb250YWluZXJSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm1vZGFsUmVmIiwibW9kYWxCdG4iLCJjb3ZlckJHIiwiaGFja2NsdWJJZnJhbWUiLCJoYW5kbGVTY3JvbGwiLCJiaW5kIiwib3Blbk1vZGFsIiwiZWxlbWVudCIsImN1cnJlbnQiLCJ3aW5kb3dPZmZzZXRUb3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFkiLCJlbGVtZW50Qm94T2Zmc2V0VG9wIiwib2Zmc2V0VG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJzdHlsZXMiLCJtb2RhbCIsImNvdmVyIiwiY29udGFpbmVyIiwiaGVhZGluZyIsInNwb25zb3JHcmlkIiwic3BvbnNvciIsInBhcmEiLCJidXR0b24iLCJtYXJnaW5Cb3R0b20iLCJjdXJzb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLGdCQUFvQkMsNENBQUssQ0FBQ0MsU0FBTixFQUFwQjtBQUNBLFVBQUtDLFFBQUwsZ0JBQWdCRiw0Q0FBSyxDQUFDQyxTQUFOLEVBQWhCO0FBQ0EsVUFBS0UsUUFBTCxnQkFBZ0JILDRDQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLRyxPQUFMLGdCQUFlSiw0Q0FBSyxDQUFDQyxTQUFOLEVBQWY7QUFDQSxV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QUVDLDBCQUFZLEVBQUU7QUFBaEIsYUFBekM7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUMsNkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpCRixlQTRCRTtBQUFHLHFCQUFTLEVBQUVULDBEQUFNLENBQUNPLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVCRixlQTZCRTtBQUFRLHFCQUFTLEVBQUVQLDBEQUFNLENBQUNRLE1BQTFCO0FBQWtDLGVBQUcsRUFBRSxLQUFLbkMsUUFBNUM7QUFBQSxtQ0FDRTtBQUFHLHFCQUFPLEVBQUUsS0FBS0ssU0FBakI7QUFBNEIsbUJBQUssRUFBRTtBQUFFZ0Msc0JBQU0sRUFBRTtBQUFWLGVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBbUREOzs7O0VBaEdtQnhDLDRDQUFLLENBQUN5QyxTOztBQW1HYjVDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmNjZiNmQyNzJmMzBjODc5ZWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Nwb25zZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyB1c2VPblNjcmVlbiBmcm9tIFwiLi4vSG9va3MvaXNWaXNpYmxlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNsYXNzIFNwb25zb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5tb2RhbEJ0biA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5jb3ZlckJHID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmhhY2tjbHViSWZyYW1lID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHdpbmRvd09mZnNldFRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudEJveE9mZnNldFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICBpZiAod2luZG93T2Zmc2V0VG9wID49IGVsZW1lbnRCb3hPZmZzZXRUb3ApIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xyXG4gICAgICAgIHRoaXMuaGFja2NsdWJJZnJhbWUuY3VycmVudC5zcmMgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5oYWNrY2x1YklmcmFtZS5jdXJyZW50LnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9iYW5rLmhhY2tjbHViLmNvbS9kb25hdGlvbnMvc3RhcnQvdml2aWQtaGFja3NcIjtcclxuICAgIHRoaXMubW9kYWxSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgdGhpcy5jb3ZlckJHLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGNsYXNzVGhpcyA9IHRoaXM7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoY2xhc3NUaGlzLm1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY2xhc3NUaGlzLm1vZGFsQnRuLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuO1xyXG4gICAgICAgICAgY2xhc3NUaGlzLm1vZGFsUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgY2xhc3NUaGlzLmNvdmVyQkcuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XHJcbiAgICAgICAgICByZWY9e3RoaXMubW9kYWxSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpZnJhbWUgcmVmPXt0aGlzLmhhY2tjbHViSWZyYW1lfT48L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcn1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb3ZlckJHfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlNwb25zb3JzPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BvbnNvckdyaWR9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcG9uc29yfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWNob2FyLnh5ei9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9lY2hvYXJsb2dvLnBuZ1wiPjwvaW1nPjwvYT5cclxuICAgICAgICAgICAgICA8ZGl2PjxzcGFuPkVjaG8gQVI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcG9uc29yfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9oYWNrY2x1Yi5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hhY2tjbHVibG9nby5zdmdcIiB3aWR0aD1cIjMxOFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+SGFjayBDbHViPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcG9uc29yfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc3RpY2tlcm11bGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGlja2VyLW11bGUtbG9nby5zdmdcIiB3aWR0aD1cIjI1MFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U3RpY2tlciBNdWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYX0+V2FudCB0byBiZSBvdXIgcGFydG5lcj88L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnZpdmlkaGFja3NAZ21haWwuY29tXCI+TEVBUk4gTU9SRTwvYT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYX0+T3IgPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHJlZj17dGhpcy5tb2RhbEJ0bn0+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIERvbmF0ZSB0byB1cyFcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwb25zb3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=