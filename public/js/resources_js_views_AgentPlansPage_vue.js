"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AgentPlansPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      levelamount: ["3", "50", "300", "1500", "4000", "100000", "1000000", "10000000"],
      levelsdetails: '',
      leveldownload: ["1", "1", "5", "20", "50", "1000", "100000", "1000000"],
      dwn: 0,
      requiredDwn: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.getlevels();
      _this.getRefurl();
    });
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    getRefurl: function getRefurl() {
      var baseURL = window.location.origin;
      var loginRoute = this.$router.resolve({
        name: 'Login',
        query: {
          LTCKE: this.Users.usercode
        }
      });
      return baseURL + loginRoute.href;
    }
  }, "getRefurl", function getRefurl() {
    var baseURL = window.location.origin;
    var loginRoute = this.$router.resolve({
      name: 'Login',
      query: {
        LTCKE: this.Users.usercode
      }
    });
    return baseURL + loginRoute.href;
  }), "copytext", function copytext(id) {
    var textToCopy = document.getElementById(id).textContent.trim();
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }), "starttask", function starttask(name) {
    if (this.Users.level >= name) {
      var level = 'levelstart' + name;
      var task = 'leveltask' + name;
      if (document.getElementById(task).classList.contains('hide')) {
        if (document.getElementById(level).classList.contains('hide')) {
          document.getElementById(level).classList.remove('hide');
          document.getElementById(task).classList.add('hide');
        } else {
          document.getElementById(level).classList.add('hide');
          document.getElementById(task).classList.add('hide');
        }
      } else {
        document.getElementById(level).classList.add('hide');
        document.getElementById(task).classList.add('hide');
      }
    }
  }), "showtasks", function showtasks(name) {
    var level = 'levelstart' + name;
    var task = 'leveltask' + name;
    document.getElementById(level).classList.add('hide');
    document.getElementById(task).classList.remove('hide');
  }), "getlevelamount", function getlevelamount(level) {
    return this.levelamount[level - 1];
  }), "getinvitecount", function getinvitecount(level, sub) {
    if (level >= 5) {
      return this.leveldownload[level - 1];
    } else {
      return this.leveldownload[level - 1] / 10 * sub;
    }
  }), "getlevels", function getlevels() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, i;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this2.callApi('post', '/api/user/v1/levels-details');
          case 2:
            res = _context.sent;
            if (res.status === 200) {
              _this2.levelsdetails = res.data.levels;
              _this2.levelamount = res.data.levelsamt;
              _this2.dwn = res.data.dwncount;
              _this2.requiredDwn = res.data.requireddwn;
              _this2.progressWidth = _this2.dwn / _this2.requiredDwn * 100;
            } else {
              if (res.status === 401) {
                _this2.logout();
              } else if (res.status == 400) {
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
  }), "recivereward", function recivereward(level, sub_level) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var data, res, i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            data = new FormData();
            data.append('level', level);
            data.append('sub_level', sub_level);
            _context2.next = 5;
            return _this3.callApi('post', '/api/user/v1/levels/rewards-claim', data);
          case 5:
            res = _context2.sent;
            if (res.status === 200) {
              if (res.data.status) {
                _this3.salert(res.data.msg);
              } else {
                _this3.ealert(res.data.msg);
              }
            } else {
              if (res.status === 401) {
                _this3.logout();
              } else if (res.status == 400) {
                _this3.ialert(res.data.msg);
              } else if (res.status == 422) {
                for (i in res.data.errors) {
                  _this3.ealert(res.data.errors[i][0]);
                }
              } else {
                _this3.swralert();
              }
            }
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_daimond_grow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/daimond-grow.png */ "./resources/js/assets/img/daimond-grow.png");


var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center"
};
var _hoisted_3 = {
  "class": "top-nav-inivte"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-arrow-right-from-bracket fa-rotate-180",
  style: {
    "color": "#fff"
  }
}, null, -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0)"
}, "Agent Million Cash Growth Plan", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-home"
}, null, -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "payment-method-mainBox Growth-1st-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "payment-method-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_img_daimond_grow_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Agent Million Cash Growth Plan"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("The BET Agent Million Cash Growth Plan is divided into 8 levels, and each level has generous rewards. Complete the highest level and get a reward of "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "*1,00,00,000"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" immediately.")])])], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "grow-level-box"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 1"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Iron")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart1"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 1 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_13 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_17 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask1"
};
var _hoisted_18 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "When you share the link and someone registers through your link, that person can become your subordinate, and you can get *1 immediately.")], -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_24 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext1"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_26 = {
  href: "javascript:void(0)"
};
var _hoisted_27 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_30 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext2"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_32 = {
  href: "javascript:void(0)"
};
var _hoisted_33 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 2"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Bronze")], -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart2"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 2 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_39 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_41 = [_hoisted_40];
var _hoisted_42 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_43 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_44 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask2"
};
var _hoisted_45 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Introduce tha game play of YUVIWIN, and introduce tha method of recharging YUVIWIN.")], -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_51 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_52 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext3"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *1. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_54 = {
  href: "javascript:void(0)"
};
var _hoisted_55 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_57 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_58 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext4"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_60 = {
  href: "javascript:void(0)"
};
var _hoisted_61 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 3"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Silver")], -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart3"
};
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 3 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_67 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_69 = [_hoisted_68];
var _hoisted_70 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_71 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_72 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask3"
};
var _hoisted_73 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Expend tha scope of sending promotional content including adding more Facebook groups, watsapp groups, Instagram, YouTube comments , telegram groups. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Increase the frequency of sending content ")])], -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_79 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_80 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext5"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_82 = {
  href: "javascript:void(0)"
};
var _hoisted_83 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_85 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_86 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext6"
};
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_88 = {
  href: "javascript:void(0)"
};
var _hoisted_89 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 4"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Gold")], -1 /* HOISTED */);
var _hoisted_93 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart4"
};
var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 4 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_95 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_97 = [_hoisted_96];
var _hoisted_98 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_99 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_100 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask4"
};
var _hoisted_101 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Try to create your own watsapp groups, telegram groups, Facebook groups, Invite all your subordinates, and all social networking site friends to join tha group, and share tha game experience in tha group")], -1 /* HOISTED */);
var _hoisted_105 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_107 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_108 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext7"
};
var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_110 = {
  href: "javascript:void(0)"
};
var _hoisted_111 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_113 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_114 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext8"
};
var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_116 = {
  href: "javascript:void(0)"
};
var _hoisted_117 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 5"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Platinum")], -1 /* HOISTED */);
var _hoisted_121 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart5"
};
var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 5 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_123 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_125 = [_hoisted_124];
var _hoisted_126 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_127 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_128 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask5"
};
var _hoisted_129 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Introduce tha gameplay of YUVIWIN, and introduce the method of recharging YUVIWIN")], -1 /* HOISTED */);
var _hoisted_133 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_135 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_136 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext9"
};
var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_138 = {
  href: "javascript:void(0)"
};
var _hoisted_139 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_141 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_142 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext10"
};
var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_144 = {
  href: "javascript:void(0)"
};
var _hoisted_145 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Diamond")], -1 /* HOISTED */);
var _hoisted_149 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart6"
};
var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 6 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_151 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_153 = [_hoisted_152];
var _hoisted_154 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_155 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_156 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask6"
};
var _hoisted_157 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_161 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_163 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_164 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext11"
};
var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_166 = {
  href: "javascript:void(0)"
};
var _hoisted_167 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_170 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext12"
};
var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_172 = {
  href: "javascript:void(0)"
};
var _hoisted_173 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_176 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_180 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_182 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_183 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext13"
};
var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_185 = {
  href: "javascript:void(0)"
};
var _hoisted_186 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_188 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_189 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext14"
};
var _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_191 = {
  href: "javascript:void(0)"
};
var _hoisted_192 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_195 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_199 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_200 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_201 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_202 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext15"
};
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_204 = {
  href: "javascript:void(0)"
};
var _hoisted_205 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_207 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_208 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext16"
};
var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_210 = {
  href: "javascript:void(0)"
};
var _hoisted_211 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_214 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_218 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_220 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_221 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext17"
};
var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_223 = {
  href: "javascript:void(0)"
};
var _hoisted_224 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_225 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_226 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_227 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext18"
};
var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_229 = {
  href: "javascript:void(0)"
};
var _hoisted_230 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_231 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 7"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Master")], -1 /* HOISTED */);
var _hoisted_234 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart7"
};
var _hoisted_235 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 7 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_236 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_238 = [_hoisted_237];
var _hoisted_239 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_240 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_241 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask7"
};
var _hoisted_242 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_243 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_244 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_245 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_246 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_247 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_248 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_249 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext19"
};
var _hoisted_250 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_251 = {
  href: "javascript:void(0)"
};
var _hoisted_252 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_254 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_255 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext20"
};
var _hoisted_256 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_257 = {
  href: "javascript:void(0)"
};
var _hoisted_258 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_261 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_262 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_263 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_264 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_265 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_266 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_267 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_268 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext21"
};
var _hoisted_269 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_270 = {
  href: "javascript:void(0)"
};
var _hoisted_271 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_272 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_273 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_274 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext22"
};
var _hoisted_275 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_276 = {
  href: "javascript:void(0)"
};
var _hoisted_277 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_278 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_280 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_281 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_282 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_283 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_284 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_285 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_286 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_287 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext23"
};
var _hoisted_288 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_289 = {
  href: "javascript:void(0)"
};
var _hoisted_290 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_291 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_292 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_293 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext24"
};
var _hoisted_294 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_295 = {
  href: "javascript:void(0)"
};
var _hoisted_296 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_297 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_299 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_300 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_301 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_302 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_303 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_304 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_305 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_306 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext25"
};
var _hoisted_307 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_308 = {
  href: "javascript:void(0)"
};
var _hoisted_309 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_310 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_311 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_312 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext26"
};
var _hoisted_313 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_314 = {
  href: "javascript:void(0)"
};
var _hoisted_315 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_316 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_318 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Level 8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Crown")], -1 /* HOISTED */);
var _hoisted_319 = {
  "class": "grow-level-box-inner-task-toggle hide mt-4",
  id: "levelstart8"
};
var _hoisted_320 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Level 8 is easy to upgrade. You can start right away!", -1 /* HOISTED */);
var _hoisted_321 = {
  key: 0,
  "class": "progress w-100 my-2"
};
var _hoisted_322 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-bar w-100",
  role: "progressbar",
  "aria-valuenow": "1",
  "aria-valuemin": "0",
  "aria-valuemax": "1"
}, null, -1 /* HOISTED */);
var _hoisted_323 = [_hoisted_322];
var _hoisted_324 = {
  key: 1,
  "class": "progress w-100 my-2"
};
var _hoisted_325 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_326 = {
  "class": "grow-level-box-inner-main-toggle hide mt-4",
  id: "leveltask8"
};
var _hoisted_327 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_328 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_329 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_330 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_331 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_332 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_333 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_334 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext27"
};
var _hoisted_335 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_336 = {
  href: "javascript:void(0)"
};
var _hoisted_337 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_338 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_339 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_340 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext28"
};
var _hoisted_341 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_342 = {
  href: "javascript:void(0)"
};
var _hoisted_343 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_344 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_346 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_347 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_348 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_349 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_350 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_351 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_352 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_353 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext29"
};
var _hoisted_354 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_355 = {
  href: "javascript:void(0)"
};
var _hoisted_356 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_357 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_358 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_359 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext30"
};
var _hoisted_360 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_361 = {
  href: "javascript:void(0)"
};
var _hoisted_362 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_363 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_365 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_366 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_367 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_368 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_369 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_370 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_371 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_372 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext31"
};
var _hoisted_373 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_374 = {
  href: "javascript:void(0)"
};
var _hoisted_375 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_376 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_377 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_378 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext32"
};
var _hoisted_379 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_380 = {
  href: "javascript:void(0)"
};
var _hoisted_381 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_382 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
var _hoisted_384 = {
  "class": "grow-level-box-inner-main-toggle-content"
};
var _hoisted_385 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reward Conditions:", -1 /* HOISTED */);
var _hoisted_386 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_387 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-level-box-inner-main-toggle-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Upgrade Skills:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The task is devided into 4 stage and every time you complete a stage you can get rewarded for that stage")], -1 /* HOISTED */);
var _hoisted_388 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_389 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Lucky Bonus promotion, content and links", -1 /* HOISTED */);
var _hoisted_390 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_391 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext33"
};
var _hoisted_392 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Register to receive *10. Multiple invite and rewards for make money..", -1 /* HOISTED */);
var _hoisted_393 = {
  href: "javascript:void(0)"
};
var _hoisted_394 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus mt-4"
};
var _hoisted_395 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Platform introduction, promotion content and links", -1 /* HOISTED */);
var _hoisted_396 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex"
};
var _hoisted_397 = {
  "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1",
  id: "copytext34"
};
var _hoisted_398 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daily Check in rewards ₹ 1 - ₹ 50. Task rewards HOT GAME - Crash. Up to 90% winning rate . Register to receive ₹ 20.", -1 /* HOISTED */);
var _hoisted_399 = {
  href: "javascript:void(0)"
};
var _hoisted_400 = {
  "class": "grow-level-box-inner-main-toggle-content-share mt-4"
};
var _hoisted_401 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4>You can share them on:</h4><div class=\"grow-level-box-inner-main-toggle-content-share-links\"><a href=\"#\"><i class=\"fa-brands fa-whatsapp\"></i></a><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a><a href=\"#\"><i class=\"fa-brands fa-telegram\"></i></a></div>", 2);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push({
        name: 'Invite'
      });
    })
  }, [].concat(_hoisted_5)), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End top nav "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Growth Level box "), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End Growth Level box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start grow-level-box design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.starttask(1);
    })
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(1)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, _ctx.Users.level > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [].concat(_hoisted_15))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": "1",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 5 /* TEXT, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.showtasks(1);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 1 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(1, 10)) + " user to receive it.", 1 /* TEXT */)]), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.copytext('copytext1');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.copytext('copytext2');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.recivereward(1, 0);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.starttask(2);
    })
  }, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, _ctx.Users.level > 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [].concat(_hoisted_41))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(2, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_43)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.showtasks(2);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 2 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(2, 10)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.copytext('copytext3');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.copytext('copytext4');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.recivereward(2, 0);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.starttask(3);
    })
  }, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(3)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, _ctx.Users.level > 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_67, [].concat(_hoisted_69))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(3, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_71)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.showtasks(3);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 3 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(3, 10)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.copytext('copytext5');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.copytext('copytext6');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.recivereward(3, 0);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.starttask(4);
    })
  }, [_hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(4)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [_hoisted_94, _ctx.Users.level > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_95, [].concat(_hoisted_97))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(4, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_99)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.showtasks(4);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 4 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(4, 10)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.copytext('copytext7');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [_hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.copytext('copytext8');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $options.recivereward(4, 0);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.starttask(5);
    })
  }, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(5)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [_hoisted_122, _ctx.Users.level > 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_123, [].concat(_hoisted_125))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(5, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_127)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.showtasks(5);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 5 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(5, 10)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.copytext('copytext9');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [_hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.copytext('copytext10');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [_hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.recivereward(5, 0);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.starttask(6);
    })
  }, [_hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(6)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, _ctx.Users.level > 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_151, [].concat(_hoisted_153))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(6, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_155)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $options.showtasks(6);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 6 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [_hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(6, 1)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_160, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [_hoisted_162, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_166, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.copytext('copytext11');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [_hoisted_171, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.copytext('copytext12');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [_hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.recivereward(6, 1);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(6, 2)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_178, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_179, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [_hoisted_181, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [_hoisted_184, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_185, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $options.copytext('copytext13');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_186, [_hoisted_187, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [_hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[32] || (_cache[32] = function ($event) {
      return $options.copytext('copytext14');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [_hoisted_193, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[33] || (_cache[33] = function ($event) {
      return $options.recivereward(6, 2);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_195, [_hoisted_196, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(6, 3)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_198, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, [_hoisted_200, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [_hoisted_203, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[34] || (_cache[34] = function ($event) {
      return $options.copytext('copytext15');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [_hoisted_206, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [_hoisted_209, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_210, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[35] || (_cache[35] = function ($event) {
      return $options.copytext('copytext16');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [_hoisted_212, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[36] || (_cache[36] = function ($event) {
      return $options.recivereward(6, 3);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [_hoisted_215, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(6, 4)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_216, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_217, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_218, [_hoisted_219, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [_hoisted_222, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_223, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[37] || (_cache[37] = function ($event) {
      return $options.copytext('copytext17');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [_hoisted_225, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_227, [_hoisted_228, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_229, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[38] || (_cache[38] = function ($event) {
      return $options.copytext('copytext18');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_230, [_hoisted_231, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[39] || (_cache[39] = function ($event) {
      return $options.recivereward(6, 4);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[40] || (_cache[40] = function ($event) {
      return $options.starttask(7);
    })
  }, [_hoisted_233, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(7)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [_hoisted_235, _ctx.Users.level > 7 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_236, [].concat(_hoisted_238))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 7 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_239, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(7, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_240)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[41] || (_cache[41] = function ($event) {
      return $options.showtasks(7);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 7 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_242, [_hoisted_243, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(7, 1)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_244, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_245, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_246, [_hoisted_247, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_248, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [_hoisted_250, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_251, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[42] || (_cache[42] = function ($event) {
      return $options.copytext('copytext19');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [_hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [_hoisted_256, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_257, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[43] || (_cache[43] = function ($event) {
      return $options.copytext('copytext20');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_258, [_hoisted_259, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[44] || (_cache[44] = function ($event) {
      return $options.recivereward(7, 1);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_261, [_hoisted_262, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(7, 2)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_263, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_264, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_265, [_hoisted_266, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_267, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [_hoisted_269, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_270, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[45] || (_cache[45] = function ($event) {
      return $options.copytext('copytext21');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_271, [_hoisted_272, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [_hoisted_275, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_276, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[46] || (_cache[46] = function ($event) {
      return $options.copytext('copytext22');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_277, [_hoisted_278, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[47] || (_cache[47] = function ($event) {
      return $options.recivereward(7, 2);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_280, [_hoisted_281, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(7, 3)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_282, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_283, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_284, [_hoisted_285, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_286, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_287, [_hoisted_288, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_289, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[48] || (_cache[48] = function ($event) {
      return $options.copytext('copytext23');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_290, [_hoisted_291, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_292, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_293, [_hoisted_294, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_295, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[49] || (_cache[49] = function ($event) {
      return $options.copytext('copytext24');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_296, [_hoisted_297, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[50] || (_cache[50] = function ($event) {
      return $options.recivereward(7, 3);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_299, [_hoisted_300, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(7, 4)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_301, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_302, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_303, [_hoisted_304, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_305, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_306, [_hoisted_307, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_308, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[51] || (_cache[51] = function ($event) {
      return $options.copytext('copytext25');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_309, [_hoisted_310, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_311, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_312, [_hoisted_313, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_314, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[52] || (_cache[52] = function ($event) {
      return $options.copytext('copytext26');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_315, [_hoisted_316, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[53] || (_cache[53] = function ($event) {
      return $options.recivereward(7, 4);
    })
  }, "Received Awards")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "grow-level-box-inner mt-4",
    onClick: _cache[54] || (_cache[54] = function ($event) {
      return $options.starttask(8);
    })
  }, [_hoisted_318, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "+₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getlevelamount(8)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_319, [_hoisted_320, _ctx.Users.level > 8 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_321, [].concat(_hoisted_323))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.Users.level === 8 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_324, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.progressWidth + '%'
    }),
    role: "progressbar",
    "aria-valuenow": this.dwn,
    "aria-valuemin": "0",
    "aria-valuemax": $options.getinvitecount(8, 10)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.progressWidth) + " %", 13 /* TEXT, STYLE, PROPS */, _hoisted_325)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "task-btn",
    onClick: _cache[55] || (_cache[55] = function ($event) {
      return $options.showtasks(8);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.Users.level > 8 ? 'Completed' : 'Start task'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_326, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_327, [_hoisted_328, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(8, 1)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_329, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_330, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_331, [_hoisted_332, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_333, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_334, [_hoisted_335, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_336, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[56] || (_cache[56] = function ($event) {
      return $options.copytext('copytext27');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_337, [_hoisted_338, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_339, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_340, [_hoisted_341, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_342, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[57] || (_cache[57] = function ($event) {
      return $options.copytext('copytext28');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_343, [_hoisted_344, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[58] || (_cache[58] = function ($event) {
      return $options.recivereward(8, 1);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_346, [_hoisted_347, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(8, 2)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_348, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_349, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_350, [_hoisted_351, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_352, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_353, [_hoisted_354, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_355, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[59] || (_cache[59] = function ($event) {
      return $options.copytext('copytext29');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_356, [_hoisted_357, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_358, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_359, [_hoisted_360, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_361, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[60] || (_cache[60] = function ($event) {
      return $options.copytext('copytext30');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_362, [_hoisted_363, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[61] || (_cache[61] = function ($event) {
      return $options.recivereward(8, 2);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_365, [_hoisted_366, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(8, 3)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_367, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_368, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_369, [_hoisted_370, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_371, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_372, [_hoisted_373, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_374, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[62] || (_cache[62] = function ($event) {
      return $options.copytext('copytext31');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_375, [_hoisted_376, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_377, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_378, [_hoisted_379, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_380, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[63] || (_cache[63] = function ($event) {
      return $options.copytext('copytext32');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_381, [_hoisted_382, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[64] || (_cache[64] = function ($event) {
      return $options.recivereward(8, 3);
    })
  }, "Received Awards")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_384, [_hoisted_385, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Invite " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getinvitecount(8, 4)) + " effective user to receive it ", 1 /* TEXT */), _hoisted_386, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" *Recharges 100 or more, it is a effective user ")])]), _hoisted_387, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_388, [_hoisted_389, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_390, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_391, [_hoisted_392, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_393, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[65] || (_cache[65] = function ($event) {
      return $options.copytext('copytext33');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_394, [_hoisted_395, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_396, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_397, [_hoisted_398, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_399, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getRefurl()), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex-box-1-btn",
    onClick: _cache[66] || (_cache[66] = function ($event) {
      return $options.copytext('copytext34');
    })
  }, "Copy")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_400, [_hoisted_401, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4",
    onClick: _cache[67] || (_cache[67] = function ($event) {
      return $options.recivereward(8, 4);
    })
  }, "Received Awards")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End grow-level-box-design ")]);
}

/***/ }),

/***/ "./resources/js/assets/img/daimond-grow.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/daimond-grow.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/daimond-grow.png?cd26aacff498fda414d3b36d01b35841");

/***/ }),

/***/ "./resources/js/views/AgentPlansPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/AgentPlansPage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgentPlansPage_vue_vue_type_template_id_255ff773__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentPlansPage.vue?vue&type=template&id=255ff773 */ "./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773");
/* harmony import */ var _AgentPlansPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentPlansPage.vue?vue&type=script&lang=js */ "./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AgentPlansPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AgentPlansPage_vue_vue_type_template_id_255ff773__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/AgentPlansPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgentPlansPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgentPlansPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AgentPlansPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgentPlansPage_vue_vue_type_template_id_255ff773__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AgentPlansPage_vue_vue_type_template_id_255ff773__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AgentPlansPage.vue?vue&type=template&id=255ff773 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AgentPlansPage.vue?vue&type=template&id=255ff773");


/***/ })

}]);