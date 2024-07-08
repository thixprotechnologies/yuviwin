"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_GameOrderPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
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
      fastbetrecord: '',
      paritybetreocrd: '',
      circlebetrecord: '',
      jetRecords: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.getUserBetOrder();
    });
  },
  methods: {
    crashpoint: function crashpoint(point) {
      if (point == 1) {
        return '1.00x';
      } else {
        return point + 'x';
      }
    },
    getUserBetOrder: function getUserBetOrder() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.callApi('post', 'api/user/v1/all-bet-order');
            case 2:
              res = _context.sent;
              if (res.status === 200) {
                _this2.fastbetrecord = res.data.fastparity;
                _this2.paritybetreocrd = res.data.parity;
                _this2.circlebetrecord = res.data.circle;
                _this2.jetRecords = res.data.jet;
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
    },
    getcolorfast: function getcolorfast(stat) {
      if (stat == "red") {
        return 'red';
      } else if (stat == "green") {
        return 'green';
      } else if (stat == "violet") {
        return 'violet';
      } else {
        var intvalue = parseInt(stat);
        var point = intvalue % 2;
        if (point == 1) {
          return 'green';
        } else if (point == 0) {
          return 'red';
        }
        return 'nothing';
      }
    },
    getcolor: function getcolor(stat) {
      if (stat == "red") {
        return 'red';
      } else if (stat == "green") {
        return 'green';
      } else if (stat == "violet") {
        return 'violet';
      } else {
        var intvalue = parseInt(stat);
        var point = intvalue % 2;
        if (point == 1) {
          return 'green';
        } else if (point == 0) {
          return 'red';
        }
        return 'nothing';
      }
    },
    isvoilet: function isvoilet(stat) {
      var intvalue = parseInt(stat);
      if (intvalue == 5 || intvalue == 0) {
        return {
          display: 'inline-block'
        };
      } else {
        return {
          display: 'none'
        };
      }
    },
    "short": function short(stat) {
      if (stat == "red") {
        return 'R';
      } else if (stat == "green") {
        return 'G';
      } else if (stat == "violet") {
        return 'V';
      } else {
        var intvalue = parseInt(stat);
        return intvalue;
      }
    },
    getele: function getele(ele) {
      if (ele % 2 == 1) {
        if (ele == 5) {
          return '<div class="record"><div class="period-id"><div class="result green"><div class="violet"></div><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
        } else {
          return '<div class="record"><div class="period-id"><div class="result green"><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
        }
      } else if (ele % 2 == 0) {
        if (ele == 0) {
          return '<div class="record"><div class="period-id"><div class="result red"><div class="violet"></div><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
        } else {
          return '<div class="record"><div class="period-id"><div class="result red"><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
        }
      } else {
        return '<div class="" style="margin-left: 25%;color: var(--bg-color);font-size: 1.2rem;"><span>Wait</span></div>';
      }
    },
    betamountfast: function betamountfast(x, y, z, a) {
      var f;
      if (z == "fail") {
        f = 98 / 100 * x;
        return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
      } else if (z == 'success') {
        if (a == "violet") {
          if (y == "green" || y == "red") {
            f = 96 / 100 * x * .5;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          } else {
            f = 98 / 100 * x * 8;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          }
        } else {
          if (y == "green" || y == "red") {
            f = 98 / 100 * x * 2;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          } else {
            f = 98 / 100 * x * 8;
            return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
          }
        }
      } else {
        return '*';
      }
    },
    getfeefastParity: function getfeefastParity(ans, ans1, ans2) {
      if (ans1 == "violet") {
        if (ans2 == "green" || ans2 == "red") {
          return 4 / 100 * ans * 2;
        } else if (ans2 == "violet") {
          return 2 / 100 * ans * 2;
        } else {
          return 2 / 100 * ans * 2;
        }
      } else {
        if (ans2 == "green" || ans2 == "red") {
          return 2 / 100 * ans * 2;
        } else if (ans2 == "violet") {
          return 2 / 100 * ans * 2;
        } else {
          return 2 / 100 * ans * 2;
        }
      }
    },
    betamountparity: function betamountparity(x, y, z, a) {
      var f;
      if (z == "fail") {
        f = 98 / 100 * x;
        return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
      } else if (z == 'success') {
        if (a == "violet") {
          if (y == "green" || y == "red") {
            f = 90 / 100 * x * 0.5;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          } else if (y == "violet") {
            f = 95 / 100 * x * 3.5;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          } else {
            f = 95 / 100 * x * 8;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          }
        } else {
          if (y == "green" || y == "red") {
            f = 97.5 / 100 * x * 2;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          } else if (y == "violet") {
            f = 95 / 100 * x * 3.5;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          } else {
            f = 95 / 100 * x * 8;
            return '<span class="rslt green">' + f.toFixed(2) + '</span>';
          }
        }
      } else {
        return '<div class="" style="margin-left: 25%;color: #fff;font-size: 1.2rem;"><span>Wait</span></div>';
      }
    },
    getfeeParity: function getfeeParity(ans, ans1, ans2) {
      if (ans1 == "violet") {
        if (ans2 == "green" || ans2 == "red") {
          return 10 / 100 * ans * 2;
        } else if (ans2 == "violet") {
          return 5 / 100 * ans * 2;
        } else {
          return 5 / 100 * ans * 2;
        }
      } else {
        if (ans2 == "green" || ans2 == "red") {
          return 2.5 / 100 * ans * 2;
        } else if (ans2 == "violet") {
          return 5 / 100 * ans * 2;
        } else {
          return 5 / 100 * ans * 2;
        }
      }
    },
    getResultClass: function getResultClass(name) {
      return name;
    },
    getResultHtml: function getResultHtml(name) {
      if (name == 'wait') {
        return "<div class=\"cresultbox\"><div class=\"result que\"><i class=\"fa-solid fa-hourglass-start\"></i></div></div>";
      } else {
        return "<div class=\"cresultbox\"><div class=\"result ".concat(name, "\"></div></div>");
      }
    },
    betamount: function betamount(x, y, z) {
      var f;
      if (z == "fail") {
        f = 97.5 / 100 * x;
        return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
      } else if (z == 'success') {
        if (y == "green") {
          f = 97.5 / 100 * x * 50;
          return '<span class="rslt green">' + f.toFixed(2) + '</span>';
        } else if (y == "red") {
          f = 97.5 / 100 * x * 3;
          return '<span class="rslt green">' + f.toFixed(2) + '</span>';
        } else if (y == "violet") {
          f = 97.5 / 100 * x * 5;
          return '<span class="rslt green">' + f.toFixed(2) + '</span>';
        } else if (y == "gold") {
          f = 97.5 / 100 * x * 2;
          return '<span class="rslt green">' + f.toFixed(2) + '</span>';
        }
      } else {
        return '<span class="rslt"></span>';
      }
    },
    getStatus: function getStatus(y) {
      if (y == 'fail') {
        return true;
      } else if (y == 'success') {
        return true;
      } else {
        return false;
      }
    },
    getMultiplyer: function getMultiplyer(ans) {
      if (ans == 'red') {
        return '3x';
      } else if (ans == 'violet') {
        return '5x';
      } else if (ans == 'gold') {
        return '2x';
      } else if (ans == 'green') {
        return '50x';
      } else {
        return '';
      }
    },
    getfee: function getfee(ans) {
      return 2.5 / 100 * ans * 2;
    },
    getJetResult: function getJetResult(amt, mlt, status) {
      if (status == 'success') {
        return '<span class="rslt green">+' + (amt * mlt).toFixed(2) + '</span>';
      } else if (status == 'fail') {
        return '<span class="rslt red">-' + amt.toFixed(2) + '</span>';
      } else {
        return '<span class="rslt">**</span>';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/telegram-icon.png */ "./resources/js/assets/img/telegram-icon.png");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ff7e49c8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center"
};
var _hoisted_3 = {
  "class": "top-nav-inivte"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-home"
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)"
  }, "Game Order", -1 /* HOISTED */);
});
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  "class": "bet-filter-box game-record"
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav nav-pills mb-3",
    id: "pills-tab",
    role: "tablist"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link active",
    id: "pills-home-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#betFilter1",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter1",
    "aria-selected": "true"
  }, " Fast Parity ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link",
    id: "pills-profile-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#betFilter2",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter2",
    "aria-selected": "false"
  }, " Parity ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link",
    id: "pills-contact-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#betFilter4",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter4",
    "aria-selected": "false"
  }, " Circle ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link",
    id: "pills-contact-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#betFilter3",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter3",
    "aria-selected": "false"
  }, " Jet ")])], -1 /* HOISTED */);
});
var _hoisted_10 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_11 = {
  "class": "tab-pane fade show active",
  id: "betFilter1",
  role: "tabpanel",
  "aria-labelledby": "betFilter1-tab"
};
var _hoisted_12 = {
  "class": "betFilter-table-box"
};
var _hoisted_13 = ["rowsrec"];
var _hoisted_14 = {
  "class": "col-6 pb-2 hd"
};
var _hoisted_15 = {
  "class": "col-6 pb-2 hd txtend"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Select", -1 /* HOISTED */);
});
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-2 pb-2"
  }, "Point", -1 /* HOISTED */);
});
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-2 pb-2"
  }, "Result", -1 /* HOISTED */);
});
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-5 pb-2 txtend"
  }, "Amount", -1 /* HOISTED */);
});
var _hoisted_20 = {
  "class": "col-3 pb-2"
};
var _hoisted_21 = {
  "class": "record"
};
var _hoisted_22 = {
  "class": "period-id"
};
var _hoisted_23 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_24 = {
  "class": "col-2 pb-2"
};
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = ["innerHTML"];
var _hoisted_27 = {
  "class": "col-12"
};
var _hoisted_28 = {
  "class": "row bdend"
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, null, -1 /* HOISTED */);
});
var _hoisted_30 = {
  "class": "col-6 txtend"
};
var _hoisted_31 = {
  "class": "tab-pane fade",
  id: "betFilter2",
  role: "tabpanel",
  "aria-labelledby": "betFilter2-tab"
};
var _hoisted_32 = ["rowsrec"];
var _hoisted_33 = {
  "class": "col-6 pb-2 hd"
};
var _hoisted_34 = {
  "class": "col-6 pb-2 hd txtend"
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Select", -1 /* HOISTED */);
});
var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-2 pb-2"
  }, "Point", -1 /* HOISTED */);
});
var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-2 pb-2"
  }, "Result", -1 /* HOISTED */);
});
var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-5 pb-2 txtend"
  }, "Amount", -1 /* HOISTED */);
});
var _hoisted_39 = {
  "class": "col-3 pb-2"
};
var _hoisted_40 = {
  "class": "record"
};
var _hoisted_41 = {
  "class": "period-id"
};
var _hoisted_42 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_43 = {
  "class": "col-2 pb-2"
};
var _hoisted_44 = ["innerHTML"];
var _hoisted_45 = ["innerHTML"];
var _hoisted_46 = {
  "class": "col-12"
};
var _hoisted_47 = {
  "class": "row bdend"
};
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, null, -1 /* HOISTED */);
});
var _hoisted_49 = {
  "class": "col-6 txtend"
};
var _hoisted_50 = {
  "class": "tab-pane fade",
  id: "betFilter4",
  role: "tabpanel",
  "aria-labelledby": "betFilter4-tab"
};
var _hoisted_51 = ["rowsrec"];
var _hoisted_52 = {
  "class": "col-6 pb-2 hd"
};
var _hoisted_53 = {
  "class": "col-6 pb-2 hd txtend"
};
var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Select", -1 /* HOISTED */);
});
var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Point", -1 /* HOISTED */);
});
var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Result", -1 /* HOISTED */);
});
var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2 txtend"
  }, "Amount", -1 /* HOISTED */);
});
var _hoisted_58 = {
  "class": "col-3 pb-2"
};
var _hoisted_59 = ["innerHTML"];
var _hoisted_60 = {
  "class": "col-3 pb-2"
};
var _hoisted_61 = {
  "class": "col-3 pb-2"
};
var _hoisted_62 = ["innerHTML"];
var _hoisted_63 = {
  "class": "col-12"
};
var _hoisted_64 = {
  "class": "row bdend"
};
var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, null, -1 /* HOISTED */);
});
var _hoisted_66 = {
  "class": "col-6 txtend"
};
var _hoisted_67 = {
  "class": "tab-pane fade",
  id: "betFilter3",
  role: "tabpanel",
  "aria-labelledby": "betFilter3-tab"
};
var _hoisted_68 = ["rowsrec"];
var _hoisted_69 = {
  "class": "col-6 pb-2 hd"
};
var _hoisted_70 = {
  "class": "col-6 pb-2 hd txtend"
};
var _hoisted_71 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2"
  }, "Point", -1 /* HOISTED */);
});
var _hoisted_72 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2 d-flex justify-content-center align-items-center"
  }, "Status", -1 /* HOISTED */);
});
var _hoisted_73 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2 d-flex justify-content-center align-items-center"
  }, "Result", -1 /* HOISTED */);
});
var _hoisted_74 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-3 pb-2 txtend"
  }, "Amount", -1 /* HOISTED */);
});
var _hoisted_75 = {
  "class": "col-3 pb-2"
};
var _hoisted_76 = {
  "class": "col-3 pb-2 d-flex justify-content-center align-items-center"
};
var _hoisted_77 = {
  "class": "col-3 pb-2 d-flex justify-content-center align-items-center"
};
var _hoisted_78 = ["innerHTML"];
var _hoisted_79 = {
  "class": "col-12"
};
var _hoisted_80 = {
  "class": "row bdend"
};
var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, null, -1 /* HOISTED */);
});
var _hoisted_82 = {
  "class": "col-6 txtend"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1 /* STABLE */
  }), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _this.telegram();
    }),
    href: "javascript:void(0)"
  }, [].concat(_hoisted_7))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End top nav "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start invite app banner design "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.fastbetrecord, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row hbetrecords",
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */), _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolorfast(rows.ans)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "violet",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.isvoilet(rows.ans))
    }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"](rows.ans)), 1 /* TEXT */)], 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-2 pb-2",
      innerHTML: $options.getele(rows.number)
    }, null, 8 /* PROPS */, _hoisted_25), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-5 pb-2 txtend",
      innerHTML: $options.betamountfast(rows.amount, rows.ans, rows.res, rows.color2)
    }, null, 8 /* PROPS */, _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, "Fee: ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getfeefastParity(rows.amount, rows.ans, rows.color2)), 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_13);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.paritybetreocrd, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row hbetrecords",
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */), _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor(rows.ans)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "violet",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.isvoilet(rows.ans))
    }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"](rows.ans)), 1 /* TEXT */)], 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-2 pb-2",
      innerHTML: $options.getele(rows.number)
    }, null, 8 /* PROPS */, _hoisted_44), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-5 pb-2 txtend",
      innerHTML: $options.betamountparity(rows.amount, rows.ans, rows.res, rows.color2)
    }, null, 8 /* PROPS */, _hoisted_45), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, "Fee: ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getfeeParity(rows.amount, rows.ans, rows.color2)), 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_32);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.circlebetrecord, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row hbetrecords",
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */), _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rstslt", $options.getResultClass(rows.ans)]),
      innerHTML: $options.getMultiplyer(rows.ans)
    }, null, 10 /* CLASS, PROPS */, _hoisted_59)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rstview", $options.getResultClass(rows.fres)])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getMultiplyer(rows.ans)), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-3 pb-2 txtend",
      innerHTML: $options.betamount(rows.amount, rows.ans, rows.res)
    }, null, 8 /* PROPS */, _hoisted_62), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, "Fee: ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getfee(rows.amount)), 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_51);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.jetRecords, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row hbetrecords",
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */), _hoisted_71, _hoisted_72, _hoisted_73, _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.crashpoint(rows.winpoint)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-3 pb-2 txtend",
      innerHTML: $options.getJetResult(rows.amount, rows.winpoint, rows.status)
    }, null, 8 /* PROPS */, _hoisted_78), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, "Fee: ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((rows.amount * 2 / 100).toFixed(2)), 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_68);
  }), 128 /* KEYED_FRAGMENT */))])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.hbetrecords[data-v-ff7e49c8] {\n    margin-top: .5rem;\n    color: #fff;\n    border: 1px solid #f9fcff;\n    /* background: linear-gradient(#4a80f5, #af8bf6); */\n    background: var(--bs-gray-dark);\n    padding: .5rem;\n    font-size: 1.4rem;\n}\n.hbetrecords .txtend[data-v-ff7e49c8] {\n    text-align: end;\n}\n.hbetrecords .bdend[data-v-ff7e49c8] {\n    border-top: 1px solid #f9fcff;\n}\n.hbetrecords .rstview[data-v-ff7e49c8] {\n    height: 2.5rem;\n    width: 2.5rem;\n    font-size: 1.4rem;\n    border-radius: 0.5rem;\n    text-align: center;\n    display: block;\n}\n.hbetrecords .rstslt[data-v-ff7e49c8] {\n    width: 3rem;\n    height: 3rem;\n    font-size: 1.7rem;\n    border-radius: 0.5rem;\n    text-align: center;\n    display: block;\n}\n.hbetrecords .rstslt.green[data-v-ff7e49c8] {\n    background-color: green;\n}\n.hbetrecords .rstslt.green[data-v-ff7e49c8] {\n    background-color: green;\n}\n.hbetrecords .rstslt.gold[data-v-ff7e49c8] {\n    background-color: #f9ab13;\n}\n.hbetrecords .rstslt.yellow[data-v-ff7e49c8] {\n    background-color: green;\n}\n.hbetrecords .rstslt.red[data-v-ff7e49c8] {\n    background-color: red;\n}\n.hbetrecords .rstslt.violet[data-v-ff7e49c8] {\n    background-color: #9400d3;\n}\n.hbetrecords .rstview.red[data-v-ff7e49c8] {\n    background-color: red;\n}\n.hbetrecords .rstview.green[data-v-ff7e49c8] {\n    background-color: green;\n}\n.hbetrecords .rstview.yellow[data-v-ff7e49c8] {\n    background-color: red;\n}\n.hbetrecords .rstview.gold[data-v-ff7e49c8] {\n    background-color: #f9ab13;\n}\n.hbetrecords .rstview.violet[data-v-ff7e49c8] {\n    background-color: #9400d3;\n}\n.hbetrecords .hd[data-v-ff7e49c8] {\n    font-size: 1.8rem;\n}\n.hbetrecords .rslt.red[data-v-ff7e49c8] {\n    color: red;\n}\n.hbetrecords .rslt.green[data-v-ff7e49c8] {\n    color: green;\n}\n\n/* new style end  */\n.bet-filter-box.game-record[data-v-ff7e49c8] {\n    margin-top: 7rem;\n    background-image: none !important;\n    height: unset;\n}\n.game-record.bet-filter-box .nav-pills[data-v-ff7e49c8] {\n    height: unset;\n}\n\n/* .bet-filter-box.game-record .avitor-game1-table {\n    text-align: center;\n} */\n.cresultbox[data-v-ff7e49c8] {\n    display: inline-flex;\n    overflow: hidden;\n}\n.cresultbox .result[data-v-ff7e49c8] {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border-radius: 6px;\n    margin: 0 5px;\n    background: #dee2e6;\n    color: #333;\n    line-height: 30px;\n    font-size: 18px;\n}\n.cresultbox .result.gold[data-v-ff7e49c8] {\n    background-color: #f9ab13;\n    background-size: 100%;\n}\n.cresultbox .result.red[data-v-ff7e49c8] {\n    background-color: red;\n    background-size: 100%;\n}\n.cresultbox .result.violet[data-v-ff7e49c8] {\n    background-color: #9400d3;\n    background-size: 100%;\n}\n.cresultbox .result.green[data-v-ff7e49c8] {\n    background-color: green;\n    background-size: 100%;\n}\n.cresultbox .result.que[data-v-ff7e49c8] {\n    text-align: center;\n}\n\n/* parity and fast parity  */\n.record .period-id[data-v-ff7e49c8] {\n    margin: auto;\n    font-size: 1.3rem;\n    color: var(--bg-color);\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n.record .result[data-v-ff7e49c8] {\n    color: #fff;\n    text-align: center;\n    border-radius: 50%;\n    display: inline-block;\n    box-shadow: 0 0 5px rgb(0 0 0/40%);\n    height: 3rem;\n    width: 3rem;\n    position: relative;\n}\n.record .result .option[data-v-ff7e49c8] {\n    position: absolute;\n    top: 0.2rem;\n    font-size: 1.8rem;\n}\n.record .result.waiting[data-v-ff7e49c8] {\n    background: rgb(194 194 194);\n}\n.result .option.waiting[data-v-ff7e49c8] {\n    font-size: 2rem;\n    border-radius: 50%;\n    color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.result.red[data-v-ff7e49c8] {\n    background: red;\n}\n.result.violet[data-v-ff7e49c8] {\n    background: #9400d3;\n}\n.result.green[data-v-ff7e49c8] {\n    background: green;\n}\n.result .red[data-v-ff7e49c8] {\n    background-color: red;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .violet[data-v-ff7e49c8] {\n    background-color: #9400d3;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .green[data-v-ff7e49c8] {\n    background-color: green;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .red.active[data-v-ff7e49c8],\n.result .green.active[data-v-ff7e49c8],\n.result .violet.active[data-v-ff7e49c8] {\n    display: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/img/telegram-icon.png":
/*!***************************************************!*\
  !*** ./resources/js/assets/img/telegram-icon.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/telegram-icon.png?f3acebd94a33310bd2fc210a770956e4");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_style_index_0_id_ff7e49c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_style_index_0_id_ff7e49c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_style_index_0_id_ff7e49c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/GameOrderPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/GameOrderPage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameOrderPage_vue_vue_type_template_id_ff7e49c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true */ "./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true");
/* harmony import */ var _GameOrderPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameOrderPage.vue?vue&type=script&lang=js */ "./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js");
/* harmony import */ var _GameOrderPage_vue_vue_type_style_index_0_id_ff7e49c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css */ "./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css");
/* harmony import */ var C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_GameOrderPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GameOrderPage_vue_vue_type_template_id_ff7e49c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-ff7e49c8"],['__file',"resources/js/views/GameOrderPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameOrderPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_template_id_ff7e49c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_template_id_ff7e49c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=template&id=ff7e49c8&scoped=true");


/***/ }),

/***/ "./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameOrderPage_vue_vue_type_style_index_0_id_ff7e49c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameOrderPage.vue?vue&type=style&index=0&id=ff7e49c8&scoped=true&lang=css");


/***/ })

}]);