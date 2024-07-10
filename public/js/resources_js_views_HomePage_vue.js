"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_HomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: {
        username: null,
        bonus: 0,
        isbonus: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.getBonus();
    });
  },
  watch: function watch() {
    var winBox = document.getElementsByClassName('win__box');
    if (winBox.classList.contains('active')) {
      document.body.classList.add('no-scroll');
      // winBox.style.display = 'block';
    } else {
      // winBox.style.display = 'none';
    }
  },
  methods: {
    getBonus: function getBonus() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.callApi('post', 'api/user/v1/tbonus');
            case 2:
              res = _context.sent;
              if (res.status === 200) {
                _this2.user.bonus = res.data.bonus;
                _this2.user.isbonus = res.data.isbonus;
              } else {
                if (res.status === 400) {
                  _this2.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this2.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this2.swralert();
                }
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    readBonus: function readBonus(type) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res, i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.callApi('post', '/api/user/v1/markbon');
            case 2:
              res = _context2.sent;
              if (res.status === 200) {
                if (type == 'view') {
                  _this3.user.bonus = res.data.bonus;
                  _this3.user.isbonus = res.data.isbonus;
                  _this3.$router.push({
                    name: 'InviteDetails'
                  });
                } else if (type == 'clear') {
                  _this3.user.bonus = res.data.bonus;
                  _this3.user.isbonus = res.data.isbonus;
                }
              } else {
                if (res.status === 400) {
                  _this3.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this3.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this3.swralert();
                }
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_profile_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/profile-icon.png */ "./resources/js/assets/img/profile-icon.png");
/* harmony import */ var _assets_img_login_box_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/login-box-logo.png */ "./resources/js/assets/img/login-box-logo.png");
/* harmony import */ var _assets_img_money_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/money-icon.png */ "./resources/js/assets/img/money-icon.png");
/* harmony import */ var _assets_img_withdraw_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/withdraw-bg.png */ "./resources/js/assets/img/withdraw-bg.png");
/* harmony import */ var _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/coin.png */ "./resources/js/assets/img/coin.png");
/* harmony import */ var _assets_img_down_shape_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/down-shape.png */ "./resources/js/assets/img/down-shape.png");
/* harmony import */ var _assets_img_shape1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/shape1.png */ "./resources/js/assets/img/shape1.png");
/* harmony import */ var _assets_img_download_app_banner_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/download-app-banner.png */ "./resources/js/assets/img/download-app-banner.png");
/* harmony import */ var _assets_img_task_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/task-icon.png */ "./resources/js/assets/img/task-icon.png");
/* harmony import */ var _assets_img_check_list_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/check-list.png */ "./resources/js/assets/img/check-list.png");
/* harmony import */ var _assets_img_game1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/game1.png */ "./resources/js/assets/img/game1.png");
/* harmony import */ var _assets_img_game3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/img/game3.png */ "./resources/js/assets/img/game3.png");
/* harmony import */ var _assets_img_game4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/img/game4.png */ "./resources/js/assets/img/game4.png");
/* harmony import */ var _assets_img_game2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/img/game2.png */ "./resources/js/assets/img/game2.png");
/* harmony import */ var _assets_img_winbon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/img/winbon.png */ "./resources/js/assets/img/winbon.png");
















var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9872dda6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center"
};
var _hoisted_3 = {
  "class": "top-nav"
};
var _hoisted_4 = {
  "class": "profile-toggle"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_profile_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_6 = {
  "class": "prodile-toggle-detail"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "logo"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_login_box_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })], -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "recharge-btn"
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_money_icon_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_10 = {
  "class": "withdraw-box"
};
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {}
  }, "Available Balance", -1 /* HOISTED */);
});
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<img src=\"" + _assets_img_withdraw_bg_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" class=\"widthdraw-bg\" data-v-9872dda6><img src=\"" + _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_5__["default"] + "\" class=\"coin\" data-v-9872dda6><img src=\"" + _assets_img_down_shape_png__WEBPACK_IMPORTED_MODULE_6__["default"] + "\" class=\"down-shape\" data-v-9872dda6><img src=\"" + _assets_img_shape1_png__WEBPACK_IMPORTED_MODULE_7__["default"] + "\" class=\"withdraw-shape\" data-v-9872dda6><img src=\"" + _assets_img_shape1_png__WEBPACK_IMPORTED_MODULE_7__["default"] + "\" class=\"withdraw-shape2\" data-v-9872dda6>", 5);
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_download_app_banner_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_18 = [_hoisted_17];
var _hoisted_19 = {
  "class": "flex-buttons"
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_task_icon_png__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_check_list_png__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_22 = {
  "class": "game-icon-box"
};
var _hoisted_23 = {
  "class": "row"
};
var _hoisted_24 = {
  "class": "col-6 game-img"
};
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_game1_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_26 = {
  "class": "col-6 game-img"
};
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_game3_png__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_28 = {
  "class": "col-6 game-img"
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_game4_png__WEBPACK_IMPORTED_MODULE_13__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_30 = {
  "class": "col-6 game-img"
};
var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_game2_png__WEBPACK_IMPORTED_MODULE_14__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_32 = {
  key: 0,
  "class": "win__box active"
};
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_winbon_png__WEBPACK_IMPORTED_MODULE_15__["default"],
    alt: "win"
  }, null, -1 /* HOISTED */);
});
var _hoisted_34 = {
  "class": "content"
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Bonus", -1 /* HOISTED */);
});
var _hoisted_36 = {
  "class": "btn__group"
};
var _hoisted_37 = {
  "class": "bottom-bar"
};
var _hoisted_38 = {
  "class": "bottmo-bar-link active"
};
var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-home",
    "aria-hidden": "true"
  }, null, -1 /* HOISTED */);
});
var _hoisted_40 = {
  "class": "bottmo-bar-link"
};
var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-user-plus",
    "aria-hidden": "true"
  }, null, -1 /* HOISTED */);
});
var _hoisted_42 = {
  "class": "bottmo-bar-link"
};
var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-credit-card",
    "aria-hidden": "true"
  }, null, -1 /* HOISTED */);
});
var _hoisted_44 = {
  "class": "bottmo-bar-link"
};
var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-user",
    "aria-hidden": "true"
  }, null, -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start first page "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Profile'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.username), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.userId), 1 /* TEXT */)])]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Recharge'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Recharge")];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End top nav "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start withdraw box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.balance), 1 /* TEXT */), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "withdraw-btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      _this.$router.push({
        name: 'Withdraw'
      });
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Withdraw'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Get it Now Withdraw")];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End withdraw-box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start download app banner design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "download-app-img",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.downloadApk();
    })
  }, [].concat(_hoisted_18)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End download app banner design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start flex buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Rewards'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Task Reward")];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'CheckIn'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Check In")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End flex-buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start game icon design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'FastParty'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Parity'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Circle'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'JetGame'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-6 game-img\">\n                        <router-link onclick=\"alert('Comming Soon')\"><img src=\"../assets/img/game2.png\"></router-link>\n                    </div> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End game icon design "), this.user.isbonus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Dear User you have new bonus ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.user.bonus) + ".", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.readBonus('view');
    }),
    "class": "accept__btn"
  }, "View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.readBonus('clear');
    }),
    "class": "learn__more-btn"
  }, "Clear")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start bottom bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" YUVIWIN")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Invite'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Invite")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Recharge'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Recharge")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Profile'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End bottom bar ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End first page ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* COOKIE CONSENT BOX */\n.logo img[data-v-9872dda6] {\n    top: 1px;\n    width: 14rem;\n    height: 64px;\n    position: absolute;\n    left: 30%;\n}\n.win__box[data-v-9872dda6] {\n    --clr-primary: #c1610c;\n    --clr-accent: #615f5f;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    max-width: 400px;\n    width: 100%;\n    border-radius: 15px;\n    text-align: center;\n    padding: 25px 25px 30px;\n    /* transform: translateX(0px); */\n    background-color: #ffffff;\n    z-index: 1000;\n}\n.win__box.hide[data-v-9872dda6] {\n    display: none;\n    /* transform: translateX(-500px); */\n}\n.win__box.active[data-v-9872dda6] {\n    display: flex;\n}\n.win__box>img[data-v-9872dda6] {\n    max-width: 90px;\n}\n.win__box .content[data-v-9872dda6] {\n    margin-top: 10px;\n}\n.win__box .content h2[data-v-9872dda6] {\n    font-size: 24px;\n    font-weight: 700;\n}\n.win__box .content p[data-v-9872dda6] {\n    font-size: 15px;\n    margin: 5px 0 20px;\n    color: var(--clr-accent);\n}\n.win__box .content .btn__group[data-v-9872dda6] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.win__box .content .btn__group[data-v-9872dda6] * {\n    margin: 0 10px;\n}\n.win__box .content .btn__group .accept__btn[data-v-9872dda6] {\n    padding: 10px 20px;\n    outline: none;\n    font-size: 16px;\n    font-weight: 500;\n    border-radius: 5px;\n    cursor: pointer;\n    border: 2px solid var(--clr-primary);\n    color: #ffffff;\n    background-color: var(--clr-primary);\n}\n.win__box .content .btn__group .accept__btn[data-v-9872dda6]:hover {\n    background-color: #ffffff;\n    color: var(--clr-primary);\n}\n.win__box .content .btn__group .learn__more-btn[data-v-9872dda6] {\n    text-decoration: none;\n    color: var(--clr-primary);\n}\n.win__box .content .btn__group .learn__more-btn[data-v-9872dda6]:hover {\n    text-decoration: underline;\n}\n\n/* For medium devices */\n@media screen and (max-width: 600px) {\n.win__box[data-v-9872dda6] {\n        padding: 20px 10px;\n}\n}\n\n/* For small devices */\n@media screen and (max-width: 400px) {\n.win__box[data-v-9872dda6] {}\n.win__box .content .btn__group[data-v-9872dda6] {\n        flex-direction: column;\n        gap: 15px;\n}\n}\n\n/* For extra-small devices */\n@media screen and (max-width: 320px) {\n.win__box[data-v-9872dda6] {}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/img/check-list.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/check-list.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/check-list.png?db6f6b9a791f9ca9c061a4f1704d7562");

/***/ }),

/***/ "./resources/js/assets/img/coin.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/coin.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/coin.png?13b0fefc545df8af50f85762a8536bf1");

/***/ }),

/***/ "./resources/js/assets/img/down-shape.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/down-shape.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/down-shape.png?773eaba645070a555e8bc45503f53a0a");

/***/ }),

/***/ "./resources/js/assets/img/download-app-banner.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/img/download-app-banner.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/download-app-banner.png?37edca083ae39c99787896b99731dedd");

/***/ }),

/***/ "./resources/js/assets/img/game1.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/game1.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/game1.png?f47dd5f5c7ec1c66d3d2947fa90b95e5");

/***/ }),

/***/ "./resources/js/assets/img/game2.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/game2.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/game2.png?625b6e3d796fd0324c5f711b0f6a61ac");

/***/ }),

/***/ "./resources/js/assets/img/game3.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/game3.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/game3.png?73beca47cb22343640b2b08f12989e76");

/***/ }),

/***/ "./resources/js/assets/img/game4.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/game4.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/game4.png?92fe6fecec02ecc07c0ad297810de0dc");

/***/ }),

/***/ "./resources/js/assets/img/login-box-logo.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/login-box-logo.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/login-box-logo.png?8d5b68a558a6a6e7a18f6b5b53f760c6");

/***/ }),

/***/ "./resources/js/assets/img/money-icon.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/money-icon.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/money-icon.png?738c9222d2f7fd2e1f50b20729c8b605");

/***/ }),

/***/ "./resources/js/assets/img/profile-icon.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/profile-icon.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/profile-icon.png?3f61c73de615e05fa574bb650aa25f48");

/***/ }),

/***/ "./resources/js/assets/img/shape1.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/shape1.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/shape1.png?9a8e8a86af344a6a21c47ea3d30f701e");

/***/ }),

/***/ "./resources/js/assets/img/task-icon.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/task-icon.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/task-icon.png?764a1e1229ae3c0d0c7046be917d0310");

/***/ }),

/***/ "./resources/js/assets/img/winbon.png":
/*!********************************************!*\
  !*** ./resources/js/assets/img/winbon.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/winbon.png?d2527e07c3aa9fce0c367891b4ac5120");

/***/ }),

/***/ "./resources/js/assets/img/withdraw-bg.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/withdraw-bg.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/withdraw-bg.png?e63fbc537c0b953111e2eb469a46fecf");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_9872dda6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_9872dda6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_9872dda6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/HomePage.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/HomePage.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePage_vue_vue_type_template_id_9872dda6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=9872dda6&scoped=true */ "./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js */ "./resources/js/views/HomePage.vue?vue&type=script&lang=js");
/* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_9872dda6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css */ "./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css");
/* harmony import */ var _Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomePage_vue_vue_type_template_id_9872dda6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9872dda6"],['__file',"resources/js/views/HomePage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/HomePage.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/HomePage.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_9872dda6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_9872dda6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=template&id=9872dda6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=template&id=9872dda6&scoped=true");


/***/ }),

/***/ "./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_9872dda6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/HomePage.vue?vue&type=style&index=0&id=9872dda6&scoped=true&lang=css");


/***/ })

}]);