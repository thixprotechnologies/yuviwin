"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_GameHistoryPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
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
  props: {
    game: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      gameName: null,
      record: '',
      type: 0
    };
  },
  created: function created() {
    if (!this.game) {
      this.$router.push({
        name: 'PageNotFound'
      });
    } else {
      this.gameName = this.game;
      if (this.gameName == 'fast-parity') {
        this.type = 1;
      } else if (this.gameName == 'parity') {
        this.type = 1;
      } else if (this.gameName == 'circle') {
        this.type = 2;
      }
      console.log('type : ', this.type);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.getUserBetOrder();
    });
  },
  methods: {
    goback: function goback() {
      if (this.gameName != null) {
        if (this.gameName == 'fast-parity') {
          this.$router.push({
            name: 'FastParty'
          });
        } else if (this.gameName == 'parity') {
          this.$router.push({
            name: 'Parity'
          });
        } else if (this.gameName == 'circle') {
          this.$router.push({
            name: 'Circle'
          });
        } else {
          this.$router.push({
            name: 'PageNotFound'
          });
        }
      } else {
        this.$router.push({
          name: 'PageNotFound'
        });
      }
    },
    getUserBetOrder: function getUserBetOrder() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append('game', _this2.gameName);
              _context.next = 4;
              return _this2.callApi('post', '/api/user/v1/game-History', data);
            case 4:
              res = _context.sent;
              if (res.status === 200) {
                if (res.data.status == true) {
                  _this2.record = res.data.record;
                } else {
                  _this2.swralert();
                }
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
            case 6:
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
      var amount;
      var f;
      if (z == "fail") {
        f = 98 / 100 * x;
        amount = "<span style='color:red;font-size:1.4rem;'> -" + f.toFixed(2) + " &#8377;</span>";
        return amount;
      } else if (z == 'success') {
        if (a == "violet") {
          if (y == "green" || y == "red") {
            f = 96 / 100 * x * .5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else {
            f = 98 / 100 * x * 8;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          }
        } else {
          if (y == "green" || y == "red") {
            f = 98 / 100 * x * 2;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else {
            f = 98 / 100 * x * 8;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          }
        }
      } else {
        return '<div class="" style="margin-left: 25%;color: var(--bg-color);font-size: 1.2rem;"><span>Wait</span></div>';
      }
    },
    betamountparity: function betamountparity(x, y, z, a) {
      var amount;
      var f;
      if (z == "fail") {
        f = 98 / 100 * x;
        amount = "<span style='color:red;font-size:1.4rem;'> -" + f.toFixed(2) + " &#8377;</span>";
        return amount;
      } else if (z == 'success') {
        if (a == "violet") {
          if (y == "green" || y == "red") {
            f = 90 / 100 * x * 0.5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else if (y == "violet") {
            f = 95 / 100 * x * 3.5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else {
            f = 95 / 100 * x * 8;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          }
        } else {
          if (y == "green" || y == "red") {
            f = 97.5 / 100 * x * 2;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else if (y == "violet") {
            f = 95 / 100 * x * 3.5;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          } else {
            f = 95 / 100 * x * 8;
            amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
            return amount;
          }
        }
      } else {
        return '<div class="" style="margin-left: 25%;color: #fff;font-size: 1.2rem;"><span>Wait</span></div>';
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
      var amount;
      var f;
      if (z == "fail") {
        f = 97.5 / 100 * x;
        amount = "<span style='color:red;font-size:1.4rem;'> -" + f.toFixed(2) + " &#8377;</span>";
        return amount;
      } else if (z == 'success') {
        if (y == "green") {
          f = 97.5 / 100 * x * 50;
          amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
          return amount;
        } else if (y == "red") {
          f = 97.5 / 100 * x * 3;
          amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
          return amount;
        } else if (y == "violet") {
          f = 97.5 / 100 * x * 5;
          amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
          return amount;
        } else if (y == "gold") {
          f = 97.5 / 100 * x * 2;
          amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
          return amount;
        }
      } else {
        return "<span style='color:#fff'>**</span>";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/telegram-icon.png */ "./resources/js/assets/img/telegram-icon.png");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4b9eaca2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
    "class": "fa-solid fa-arrow-right-from-bracket fa-rotate-180",
    style: {
      "color": "#fff"
    }
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)"
  }, "Game Order", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "bet-filter-box game-record history"
};
var _hoisted_10 = {
  "class": "avitor-game1-table game-table"
};
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Result"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Time"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Date")], -1 /* HOISTED */);
});
var _hoisted_12 = ["rowsrec"];
var _hoisted_13 = {
  key: 0,
  "class": "record"
};
var _hoisted_14 = {
  "class": "period-id"
};
var _hoisted_15 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_16 = {
  key: 1,
  "class": "cresultbox"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goback();
    })
  }, [].concat(_hoisted_5)), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.telegram();
    }),
    href: "javascript:void(0)"
  }, [].concat(_hoisted_8))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End top nav "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_hoisted_11, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.record, function (rowss) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: rowss.id,
      rowsrec: rowss
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rowss.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$data.type == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolorfast(rowss.ans)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "violet",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.isvoilet(rowss.ans))
    }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rowss.ans) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rowss.ans <= 4 ? 'S' : 'B'), 1 /* TEXT */)], 2 /* CLASS */)])])) : $data.type == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getResultClass(rowss.clo)])
    }, null, 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.timeGameRecord(rowss.time)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.dateGameRecord(rowss.time)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_12);
  }), 128 /* KEYED_FRAGMENT */))])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bet-filter-box.game-record[data-v-4b9eaca2] {\n    margin-top: 7rem;\n    background-image: none !important;\n    height: unset;\n}\n.game-record.bet-filter-box .nav-pills[data-v-4b9eaca2] {\n    height: unset;\n}\n.bet-filter-box.game-record .avitor-game1-table[data-v-4b9eaca2] {\n    /* text-align: center; */\n}\n.bet-filter-box.game-record.history .game-table tr th[data-v-4b9eaca2], .game-table tr td[data-v-4b9eaca2]{\n    color: #fff!important;\n}\n.cresultbox[data-v-4b9eaca2] {\n    display: inline-flex;\n    overflow: hidden;\n}\n.cresultbox .result[data-v-4b9eaca2] {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border-radius: 6px;\n    margin: 0 5px;\n    background: #dee2e6;\n    color: #333;\n    line-height: 30px;\n    font-size: 18px;\n}\n.cresultbox .result.gold[data-v-4b9eaca2] {\n    background-color: #f9ab13;\n    background-size: 100%;\n}\n.cresultbox .result.red[data-v-4b9eaca2] {\n    background-color: red;\n    background-size: 100%;\n}\n.cresultbox .result.violet[data-v-4b9eaca2] {\n    background-color: #9400d3;\n    background-size: 100%;\n}\n.cresultbox .result.green[data-v-4b9eaca2] {\n    background-color: green;\n    background-size: 100%;\n}\n.cresultbox .result.que[data-v-4b9eaca2] {\n    text-align: center;\n}\n\n/* parity and fast parity  */\n.record .period-id[data-v-4b9eaca2] {\n    margin: auto;\n    font-size: 1.3rem;\n    color: var(--bg-color);\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n.record .result[data-v-4b9eaca2] {\n    color: #fff;\n    text-align: center;\n    border-radius: 10%;\n    display: inline-block;\n    box-shadow: 0 0 5px rgb(0 0 0/40%);\n    height: 3rem;\n    width: 4rem;\n    position: relative;\n}\n.record .result .option[data-v-4b9eaca2] {\n    position: absolute;\n    top: 0.2rem;\n    font-size: 1.8rem;\n}\n.record .result.waiting[data-v-4b9eaca2] {\n    background: rgb(194 194 194);\n}\n.result .option.waiting[data-v-4b9eaca2] {\n    font-size: 2rem;\n    border-radius: 10%;\n    color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.result.red[data-v-4b9eaca2] {\n    background: red;\n}\n.result.violet[data-v-4b9eaca2] {\n    background: #9400d3;\n}\n.result.green[data-v-4b9eaca2] {\n    background: green;\n}\n.result .red[data-v-4b9eaca2] {\n    background-color: red;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 10%;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .violet[data-v-4b9eaca2] {\n    background-color: #9400d3;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 10%;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .green[data-v-4b9eaca2] {\n    background-color: green;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 10%;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .red.active[data-v-4b9eaca2],\n.result .green.active[data-v-4b9eaca2],\n.result .violet.active[data-v-4b9eaca2] {\n    display: none;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_style_index_0_id_4b9eaca2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_style_index_0_id_4b9eaca2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_style_index_0_id_4b9eaca2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/GameHistoryPage.vue":
/*!************************************************!*\
  !*** ./resources/js/views/GameHistoryPage.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameHistoryPage_vue_vue_type_template_id_4b9eaca2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true */ "./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true");
/* harmony import */ var _GameHistoryPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameHistoryPage.vue?vue&type=script&lang=js */ "./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js");
/* harmony import */ var _GameHistoryPage_vue_vue_type_style_index_0_id_4b9eaca2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css */ "./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css");
/* harmony import */ var _Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_GameHistoryPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GameHistoryPage_vue_vue_type_template_id_4b9eaca2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4b9eaca2"],['__file',"resources/js/views/GameHistoryPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameHistoryPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_template_id_4b9eaca2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_template_id_4b9eaca2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=template&id=4b9eaca2&scoped=true");


/***/ }),

/***/ "./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameHistoryPage_vue_vue_type_style_index_0_id_4b9eaca2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/GameHistoryPage.vue?vue&type=style&index=0&id=4b9eaca2&scoped=true&lang=css");


/***/ })

}]);