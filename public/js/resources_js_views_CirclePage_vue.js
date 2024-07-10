"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CirclePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
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
        username: null
      },
      nexttimestamp: null,
      resultrec: '',
      betrec: '',
      betsAll: '',
      betbox: {
        title: null,
        target: null,
        boxcolor: null,
        timeout: false,
        multiply: 1,
        factor: 10,
        amount: 10,
        page: 1,
        page1: 1,
        total: 1000,
        total1: null
      },
      userlastresult: {
        isbet: false,
        issuccess: false,
        amount: 0,
        ans: null,
        last: {}
      },
      allowedbet: false,
      wheelInterval: null,
      refreshcountdown: null,
      timerCounter: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.user.username = _this.Users.username;
      _this.fechresultrec().then(function () {
        _this.start();
      });
      _this.fatchUserResults();
      _this.countdown();
    });
    this.refreshcountdown = setInterval(this.countdown, 1000);
    this.timerCounter = setInterval(this.timer, 100);
  },
  beforeUnmount: function beforeUnmount() {
    clearInterval(this.refreshcountdown);
    clearInterval(this.timerCounter);
    if (this.wheelInterval) {
      clearInterval(this.wheelInterval);
    }
  },
  methods: {
    start: function start() {
      if (this.resultrec.length > 0) {
        this.ani = this.resultrec[this.resultrec.length - 1].ans;
        document.getElementById("circle").style.transform = "rotate(" + this.ani + "deg)";
      }
    },
    wheelroate: function wheelroate() {
      var wheel = document.getElementById("circle");
      var style = window.getComputedStyle(wheel);
      var transform = style.getPropertyValue("transform");
      var matrix = transform.split("(")[1].split(")")[0].split(",");
      var anglenew = Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI));
      anglenew = (anglenew + 30) % 360;
      wheel.style.transform = "rotate(" + anglenew + "deg)";
    },
    getBetCharges: function getBetCharges(amount) {
      return amount * 2.5 / 100;
    },
    getbetwinAmount: function getbetwinAmount(amount) {
      var f;
      if (this.betbox.target == "green") {
        f = 97.5 / 100 * amount * 50;
        return f.toFixed(2);
      } else if (this.betbox.target == "gold") {
        f = 97.5 / 100 * amount * 2;
        return f.toFixed(2);
      } else if (this.betbox.target == "red") {
        f = 97.5 / 100 * amount * 3;
        return f.toFixed(2);
      } else if (this.betbox.target == "violet") {
        f = 97.5 / 100 * amount * 5;
        return f.toFixed(2);
      }
    },
    timer: function timer() {
      var countDownDate = Date.now();
      var distance = 30000 - countDownDate % 30000;
      var seconds = Math.floor(distance / 1000);
      var milliseconds = distance % 1000;
      var sec1 = Math.floor(seconds / 10);
      var sec2 = seconds % 10;
      var milisec1 = Math.floor(milliseconds / 100);
      document.getElementById('timer3').innerHTML = "<span>" + sec1 + "</span><span>" + sec2 + "</span>:<span>0</span><span>" + milisec1 + "</span>";
    },
    countdown: function countdown() {
      var _this2 = this;
      var countDownDate = Date.now();
      var distance = 30000 - countDownDate % 30000;
      distance = Math.floor(distance / 1000);
      // var countDownDate = Date.parse(new Date) / 1e3;
      // var distance = 30 - countDownDate % 30;
      // var i = distance / 60,
      // n = distance % 60;
      // var minutes = Math.floor(i);
      // var seconds = ('0' + Math.floor(n)).slice(-2);
      // var sec1 = (seconds % 100 - seconds % 10) / 10;
      // var sec2 = seconds % 10;
      // document.getElementById('timer').innerHTML = "<span>0</span><span>" + Math.floor(minutes) + "</span>:<span>" + sec1 + "</span><span>" + sec2 + "</span>";
      // document.getElementById('timer3').innerHTML = "<span>0</span><span>" + Math.floor(minutes) + "</span>:<span>" + sec1 + "</span><span>" + sec2 + "</span>";
      var dis = distance % 2;
      if (dis == 0 && 5 < distance) {
        this.getBets();
      }
      if (30 > distance) {
        this.allowedbet = true;
        this.betbox.timeout = true;
      }
      if (5 > distance && distance >= 0) {
        if (!this.wheelInterval) {
          this.wheelInterval = setInterval(this.wheelroate, 1);
        }
        document.getElementById("betmessage").innerHTML = "Wait For Result";
      } else {
        document.getElementById("betmessage").innerHTML = "Place your bets";
        if (this.wheelInterval) {
          clearInterval(this.wheelInterval);
          this.wheelInterval = null;
        }
        this.start();
      }
      if (5 >= distance) {
        // document.getElementById("joinred").classList.add("active");
        // document.getElementById("joinviolet").classList.add("active");
        // document.getElementById("joingreen").classList.add("active");
        // document.getElementById("joingold").classList.add("active");
        this.betbox.timeout = false;
        this.allowedbet = false;
        var listItems = document.getElementById('amountlist').childNodes;
        for (var i = 0; i < listItems.length; i++) {
          listItems[i].classList.remove('active-contract');
        }
        this.betbox.amount = this.betbox.factor * this.betbox.multiply;
        document.getElementById("10").className = "contract-money-inner-box active-contract";
        this.betbox.multiply = 1;
        this.betbox.factor = 10;
        this.betbox.amount = 10;
        // this.hidebetbox();
      }
      if (30 == distance || 29 == distance || 28 == distance) {
        this.fechresultrec().then(function () {
          if (_this2.userlastresult.isbet == true) {
            document.getElementById("c_resulPopup").classList.add("show");
            setTimeout(function () {
              document.getElementById('c_resulPopup').classList.remove('show');
            }, 5000);
          }
          _this2.fatchUserResults();
          _this2.GetUser();
        });
      } else {
        document.getElementById("c_resulPopup").classList.remove("show");
      }
    },
    hidePoupbet: function hidePoupbet() {
      document.getElementById("c_resulPopup").classList.remove("show");
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
    },
    hidebetbox: function hidebetbox() {
      var offcanvas = document.getElementById('offcanvasBottom');
      offcanvas.classList.remove('show');
      offcanvas.setAttribute('aria-hidden', 'true');
      // offcanvas.style.visibility = 'hidden';
      offcanvas.removeAttribute('role');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
      if (offcanvas.parentNode.children.length > 1) {
        offcanvas.parentNode.children.item(1).remove();
      }
    },
    closebetbox: function closebetbox() {
      var listItems = document.getElementById('amountlist').childNodes;
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active-contract');
      }
      this.betbox.amount = this.betbox.factor * this.betbox.multiply;
      document.getElementById("10").className = "contract-money-inner-box active-contract";
      this.betbox.multiply = 1;
      this.betbox.factor = 10;
      this.betbox.amount = 10;
      // this.hidebetbox();
    },
    join: function join(label) {
      if (this.betbox.timeout) {
        if (label == "gold") {
          this.betbox.target = "gold";
          this.betbox.boxcolor = "gold";
          this.betbox.title = "Gold";
        } else if (label == "red") {
          this.betbox.target = "red";
          this.betbox.boxcolor = "red";
          this.betbox.title = "Red";
        } else if (label == "violet") {
          this.betbox.target = "violet";
          this.betbox.boxcolor = "violet";
          this.betbox.title = "Violet";
        } else if (label == "green") {
          this.betbox.target = "green";
          this.betbox.boxcolor = "green";
          this.betbox.title = "Green";
        }
      }
    },
    betclass: function betclass(name) {
      return name + ' ' + this.betbox.boxcolor;
    },
    selectmultiply: function selectmultiply(multi) {
      var listItems = document.getElementById('amountlist').childNodes;
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active-contract');
      }
      this.betbox.factor = multi;
      this.betbox.amount = this.betbox.factor * this.betbox.multiply;
      document.getElementById(multi).className = "contract-money-inner-box active-contract " + this.betbox.target;
    },
    plus: function plus(value) {
      this.betbox.multiply = this.betbox.multiply + value;
      this.betbox.amount = this.betbox.factor * this.betbox.multiply;
    },
    minus: function minus(value) {
      if (this.betbox.multiply > value) {
        this.betbox.multiply = this.betbox.multiply - value;
        this.betbox.amount = this.betbox.factor * this.betbox.multiply;
      }
    },
    multiply: function multiply(value) {
      if (this.balance >= this.betbox.amount * value) {
        this.betbox.amount = this.betbox.amount * value;
      }
    },
    add: function add(value) {
      this.betbox.amount = value;
    },
    maxvalue: function maxvalue() {
      this.betbox.amount = this.balance;
    },
    division: function division(value) {
      if (10 <= this.betbox.amount / value) {
        this.betbox.amount = this.betbox.amount / value;
      }
    },
    fechresultrec: function fechresultrec() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append("username", _this3.user.username);
              _context.next = 4;
              return _this3.callApi('post', 'api/user/v1/circle/results', data);
            case 4:
              res = _context.sent;
              if (res.status === 200) {
                _this3.resultrec = res.data.data;
                _this3.nexttimestamp = res.data.next;
                _this3.userlastresult = res.data.userbet;
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
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fatchUserResults: function fatchUserResults() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = new FormData();
              data.append("username", _this4.user.username);
              _context2.next = 4;
              return _this4.callApi('post', 'api/user/v1/user/circle', data);
            case 4:
              res = _context2.sent;
              if (res.status === 200) {
                _this4.betrec = res.data.data;
              } else {
                if (res.status === 401) {
                  _this4.logout();
                } else if (res.status == 400) {
                  _this4.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this4.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this4.swralert();
                }
              }
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    confirmbet: function confirmbet() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this5.balance >= _this5.betbox.amount && _this5.betbox.timeout == true)) {
                _context3.next = 12;
                break;
              }
              data = new FormData();
              data.append("username", _this5.user.username);
              data.append("period", _this5.nexttimestamp);
              data.append("amount", _this5.betbox.amount);
              data.append("ans", _this5.betbox.target);
              _context3.next = 8;
              return _this5.callApi('post', 'api/user/v1/user/bet/circle', data);
            case 8:
              res = _context3.sent;
              if (res.status === 200) {
                _this5.closebetbox();
                _this5.salert(res.data.msg);
                _this5.fatchUserResults();
                _this5.GetUser();
              } else {
                if (res.status === 401) {
                  _this5.logout();
                } else if (res.status == 400) {
                  _this5.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this5.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this5.swralert();
                }
              }
              _context3.next = 13;
              break;
            case 12:
              _this5.walert("Low Balance! Please Recharge First.");
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getBets: function getBets() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              data = new FormData();
              data.append('period', _this6.nexttimestamp);
              _context4.next = 4;
              return _this6.callApi('post', '/api/user/v1/circle/bets', data);
            case 4:
              res = _context4.sent;
              if (res.status === 200) {
                _this6.betsAll = res.data.data;
              } else {
                if (res.status === 401) {
                  _this6.logout();
                } else if (res.status == 400) {
                  _this6.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this6.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this6.swralert();
                }
              }
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    userencode: function userencode(name) {
      name = name.toString();
      if (name.length > 4) {
        var lastFourDigits = name.slice(-4);
        var maskedNumber = '*'.repeat(name.length - 4) + lastFourDigits;
        return maskedNumber;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/telegram-icon.png */ "./resources/js/assets/img/telegram-icon.png");
/* harmony import */ var _assets_img_stopWheel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/stopWheel.png */ "./resources/js/assets/img/stopWheel.png");
/* harmony import */ var _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/coin.png */ "./resources/js/assets/img/coin.png");
/* harmony import */ var _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/crown.png */ "./resources/js/assets/img/crown.png");





var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1929925e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center",
  style: {
    "min-height": "100vh!important",
    "padding-bottom": "0"
  }
};
var _hoisted_3 = {
  "class": "top-nav-inivte"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-home",
    style: {
      "color": "#fff"
    }
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:void(0)"
  }, "Circle", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "wheel-game-box"
};
var _hoisted_10 = {
  "class": "wheel-game-box-period"
};
var _hoisted_11 = {
  "class": "Period"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-calendar-o",
    "aria-hidden": "true"
  })], -1 /* HOISTED */);
});
var _hoisted_13 = {
  "class": "col-12 PERIODS-TILES",
  id: "rx20"
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-clock-rotate-left"
  }, null, -1 /* HOISTED */);
});
var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = ["rowsrec"];
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "wlrcd wlb"
  }, "?", -1 /* HOISTED */);
});
var _hoisted_18 = {
  "class": "wheel-box-design"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "stop-wheel"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_stopWheel_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })], -1 /* HOISTED */);
});
var _hoisted_20 = {
  style: {
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  }
};
var _hoisted_21 = {
  id: "circle",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 597 597",
  fill: "none",
  style: {
    "transform": "rotate(3deg)",
    "height": "300px"
  }
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<circle cx=\"298.652\" cy=\"298.25\" r=\"290.836\" fill=\"#ffd76e\" data-v-1929925e></circle><path d=\"M199.219 24.8281C188.536 28.7791 178.147 33.1691 168.196 38.2907L298.725 298.177L199.219 24.8281Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M12.2068 247.691C10.3045 258.666 8.98752 269.934 8.25586 281.348L298.579 298.322L12.2068 247.691Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M138.784 55.2656C129.419 61.4116 120.346 68.2892 111.713 75.4595L298.579 298.177L138.784 55.2656Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M231.559 15.1699C220.438 17.8039 209.609 21.0232 199.073 24.8279L298.579 298.177L231.559 15.1699Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M332.383 9.31638C321.262 8.14572 310.14 7.41406 298.58 7.41406V298.176L332.383 9.31638Z\" fill=\"#008000\" data-v-1929925e></path><path d=\"M298.578 7.41406C287.164 7.41406 275.897 8.14572 264.775 9.31638L298.578 298.176V7.41406Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M46.742 152.869C41.1814 162.527 36.0597 172.624 31.5234 183.16L298.58 298.323L46.742 152.869Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M31.5222 183.014C27.1322 193.257 23.1812 203.939 19.9619 214.768L298.579 298.177L31.5222 183.014Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M19.9626 214.768C16.7433 225.45 14.1094 236.425 12.207 247.692L298.726 298.177L19.9626 214.768Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M65.3244 124.627C58.5932 133.7 52.4472 143.065 46.7402 152.869L298.578 298.323L65.3244 124.627Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M111.713 75.459C103.079 82.7756 94.8845 90.5312 87.1289 98.7258L298.725 298.323L111.713 75.459Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M87.1287 98.7246C79.3731 106.919 72.0565 115.553 65.3252 124.625L298.579 298.322L87.1287 98.7246Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M168.051 38.291C157.954 43.4126 148.149 48.9733 138.784 55.2656L298.579 298.324L168.051 38.291Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M577.341 214.768C574.122 203.939 570.171 193.257 565.781 183.014L298.725 298.177L577.341 214.768Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M565.781 183.013C561.245 172.624 556.27 162.527 550.563 152.723L298.725 298.177L565.781 183.013Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M365.747 15.1697C354.918 12.5357 343.797 10.6334 332.383 9.31641L298.58 298.176L365.747 15.1697Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M585.097 247.692C583.195 236.425 580.561 225.45 577.341 214.768L298.725 298.177L585.097 247.692Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M588.903 315.15C589.196 309.59 589.342 303.883 589.342 298.176C589.342 292.469 589.196 286.908 588.903 281.201L298.58 298.176L588.903 315.15Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M588.901 281.348C588.316 269.934 586.999 258.813 584.95 247.691L298.432 298.176L588.901 281.348Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M550.564 152.869C544.857 143.065 538.711 133.7 531.98 124.627L298.58 298.177L550.564 152.869Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M458.52 55.2656C449.154 49.1196 439.35 43.4126 429.253 38.291L298.725 298.177L458.52 55.2656Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M429.253 38.2907C419.156 33.1691 408.913 28.7791 398.231 24.8281L298.725 298.177L429.253 38.2907Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M398.086 24.8279C387.55 21.0232 376.722 17.8039 365.6 15.1699L298.58 298.177L398.086 24.8279Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M510.177 98.7258C502.421 90.5312 494.226 82.7756 485.593 75.459L298.58 298.177L510.177 98.7258Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M486.031 75.897C477.398 68.5804 468.325 61.8491 458.96 55.7031L299.019 298.615L486.031 75.897Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M531.98 124.625C525.249 115.553 517.932 106.919 510.177 98.7246L298.58 298.176L531.98 124.625Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M264.923 9.31641C253.656 10.6334 242.534 12.5357 231.56 15.1697L298.58 298.176L264.923 9.31641Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M398.086 571.671C408.768 567.72 419.158 563.33 429.109 558.209L298.58 298.322L398.086 571.671Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M429.255 558.208C439.352 553.087 449.156 547.526 458.521 541.234L298.58 298.176L429.255 558.208Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M458.521 541.234C467.887 535.088 476.959 528.21 485.593 521.04L298.58 298.176L458.521 541.234Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M332.381 587.036C343.649 585.719 354.77 583.817 365.745 581.183L298.725 298.176L332.381 587.036Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M298.58 589.085C309.994 589.085 321.262 588.353 332.383 587.182L298.58 298.322V589.085Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M485.593 521.04C494.226 513.723 502.421 505.968 510.177 497.773L298.58 298.176L485.593 521.04Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M365.745 581.329C376.866 578.695 387.695 575.476 398.231 571.671L298.725 298.322L365.745 581.329Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M577.343 381.732C580.563 371.049 583.197 360.075 585.099 348.807L298.58 298.322L577.343 381.732Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M565.781 413.486C570.171 403.243 574.122 392.56 577.341 381.732L298.725 298.322L565.781 413.486Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M298.58 298.176L585.099 348.66C587.001 337.686 588.318 326.418 589.05 315.004L298.58 298.176Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M550.563 443.63C556.123 433.972 561.245 423.875 565.781 413.339L298.725 298.176L550.563 443.63Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M531.978 471.872C538.71 462.8 544.856 453.434 550.563 443.63L298.725 298.176L531.978 471.872Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M510.177 497.773C517.932 489.579 525.249 480.945 531.98 471.872L298.58 298.176L510.177 497.773Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M12.207 348.807C14.1094 360.075 16.7433 371.049 19.9626 381.732L298.579 298.322L12.207 348.807Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M65.3252 471.872C72.0565 480.945 79.3731 489.579 87.1287 497.773L298.725 298.176L65.3252 471.872Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M31.5234 413.486C36.0597 423.875 41.035 433.972 46.742 443.777L298.58 298.322L31.5234 413.486Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M46.7402 443.63C52.4472 453.434 58.5932 462.8 65.3244 471.872L298.578 298.176L46.7402 443.63Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M19.9619 381.732C23.1812 392.56 27.1322 403.243 31.5222 413.486L298.579 298.322L19.9619 381.732Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M8.25586 315.15C8.84119 326.564 10.1582 337.686 12.2068 348.807L298.726 298.322L8.25586 315.15Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M8.2554 281.348C7.96274 286.908 7.81641 292.615 7.81641 298.176C7.81641 303.737 7.96274 309.443 8.2554 315.15L298.579 298.176L8.2554 281.348Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M168.051 558.209C178.148 563.33 188.391 567.72 199.073 571.671L298.579 298.322L168.051 558.209Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M199.219 571.671C209.755 575.476 220.583 578.695 231.705 581.329L298.725 298.322L199.219 571.671Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M264.923 587.036C276.044 588.353 287.312 588.938 298.726 588.938V298.176L264.923 587.036Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M231.56 581.329C242.388 583.963 253.509 585.865 264.923 587.182L298.726 298.322L231.56 581.329Z\" fill=\"#ff0000\" data-v-1929925e></path><path d=\"M111.713 521.04C120.346 528.357 129.419 535.088 138.784 541.234L298.579 298.176L111.713 521.04Z\" fill=\"#9400d3\" data-v-1929925e></path><path d=\"M138.784 541.234C148.149 547.38 157.954 553.087 168.051 558.209L298.579 298.322L138.784 541.234Z\" fill=\"#ffd76e\" data-v-1929925e></path><path d=\"M87.1289 497.773C94.8845 505.968 103.079 513.723 111.713 521.04L298.579 298.322L87.1289 497.773Z\" fill=\"#ffd76e\" data-v-1929925e></path><circle cx=\"298.902\" cy=\"298.5\" r=\"294\" stroke=\"#28313F\" stroke-width=\"8\" data-v-1929925e></circle><path d=\"M298.902 522.5C175.372 522.5 74.9023 422.03 74.9023 298.5C74.9023 174.97 175.372 74.5 298.902 74.5C422.433 74.5 522.902 174.97 522.902 298.5C522.902 422.03 422.433 522.5 298.902 522.5Z\" fill=\"url(#paint0_radial_11026_44189)\" data-v-1929925e></path><circle cx=\"298.902\" cy=\"298.5\" r=\"225\" stroke=\"#28313F\" stroke-width=\"8\" data-v-1929925e></circle><defs data-v-1929925e><radialGradient id=\"paint0_radial_11026_44189\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(298.904 298.434) scale(224.038)\" data-v-1929925e><stop offset=\"0.676481\" stop-color=\"#1C1F29\" data-v-1929925e></stop><stop offset=\"0.7857\" stop-color=\"#191B22\" data-v-1929925e></stop></radialGradient></defs>", 59);
var _hoisted_81 = [_hoisted_22];
var _hoisted_82 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "wheel-inner-img-part"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img src=\"../assets/img/wheel-building.png\"> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "betmessage"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "count-down",
    id: "timer3",
    style: {
      "font-size": "4rem",
      "position": "absolute",
      "left": "50%",
      "top": "45%",
      "transform": "translate(-50%,-58%)"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "0"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "0"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(":"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "0"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "0")])], -1 /* HOISTED */);
});
var _hoisted_83 = {
  key: 0,
  "class": "wheel-buttons-box"
};
var _hoisted_84 = {
  key: 1,
  "class": "wheel-buttons-box"
};
var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "gold active"
  }, "2x", -1 /* HOISTED */);
});
var _hoisted_86 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "red active"
  }, "3x", -1 /* HOISTED */);
});
var _hoisted_87 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "violet active"
  }, "5x", -1 /* HOISTED */);
});
var _hoisted_88 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "green active"
  }, "50x", -1 /* HOISTED */);
});
var _hoisted_89 = [_hoisted_85, _hoisted_86, _hoisted_87, _hoisted_88];
var _hoisted_90 = {
  "class": "bet-filter-box"
};
var _hoisted_91 = /*#__PURE__*/_withScopeId(function () {
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
    "data-bs-target": "#betFilter",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter",
    "aria-selected": "true"
  }, " All Bets ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link",
    id: "pills-profile-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#betFilter4",
    type: "button",
    role: "tab",
    "aria-controls": "betFilter4",
    "aria-selected": "false"
  }, " My Bets ")])], -1 /* HOISTED */);
});
var _hoisted_92 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_93 = {
  "class": "tab-pane fade show active",
  id: "betFilter",
  role: "tabpanel",
  "aria-labelledby": "betFilter-tab"
};
var _hoisted_94 = {
  "class": "betFilter-table-box"
};
var _hoisted_95 = {
  "class": "avitor-game1-table"
};
var _hoisted_96 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "user"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "select"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount")], -1 /* HOISTED */);
});
var _hoisted_97 = ["rowsrec"];
var _hoisted_98 = {
  "class": "cresultbox"
};
var _hoisted_99 = {
  "class": "tab-pane fade",
  id: "betFilter4",
  role: "tabpanel",
  "aria-labelledby": "betFilter4-tab",
  style: {
    "height": "200px",
    "overflow": "scroll"
  }
};
var _hoisted_100 = {
  "class": "avitor-game1-table"
};
var _hoisted_101 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Select"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Point"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Result"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "time")], -1 /* HOISTED */);
});
var _hoisted_102 = ["rowsrec"];
var _hoisted_103 = {
  "class": "cresultbox"
};
var _hoisted_104 = ["innerHTML"];
var _hoisted_105 = ["innerHTML"];
var _hoisted_106 = {
  "class": "wlbox",
  id: "c_resulPopup"
};
var _hoisted_107 = {
  key: 0,
  "class": "wlbox-main"
};
var _hoisted_108 = {
  key: 0,
  "class": "top",
  style: {
    "background": "green"
  }
};
var _hoisted_109 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "coin",
    "class": "ccon"
  }, null, -1 /* HOISTED */);
});
var _hoisted_110 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "crown",
    "class": "ccrn"
  }, null, -1 /* HOISTED */);
});
var _hoisted_111 = {
  key: 0
};
var _hoisted_112 = {
  key: 1
};
var _hoisted_113 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "coin",
    "class": "ccon"
  }, null, -1 /* HOISTED */);
});
var _hoisted_114 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "crown",
    "class": "ccrn"
  }, null, -1 /* HOISTED */);
});
var _hoisted_115 = {
  "class": "result"
};
var _hoisted_116 = {
  "class": "row curresult px-4 mt-3"
};
var _hoisted_117 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, " Period: ", -1 /* HOISTED */);
});
var _hoisted_118 = {
  "class": "col-6 text-end"
};
var _hoisted_119 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, " Your Bet Price: ", -1 /* HOISTED */);
});
var _hoisted_120 = {
  "class": "col-6 text-end"
};
var _hoisted_121 = {
  key: 2,
  "class": "yourresult"
};
var _hoisted_122 = {
  "class": "mainr"
};
var _hoisted_123 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, "Select"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4 text-center"
  }, "Fee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4 text-end"
  }, "Amount")], -1 /* HOISTED */);
});
var _hoisted_124 = ["rowsrec"];
var _hoisted_125 = {
  "class": "col-4"
};
var _hoisted_126 = {
  "class": "col-4 text-center"
};
var _hoisted_127 = {
  "class": "btnok"
};
var _hoisted_128 = {
  "class": "circle-popup"
};
var _hoisted_129 = {
  "class": "offcanvas fast-parity-offcanva offcanvas-bottom",
  tabindex: "-1",
  id: "offcanvasBottom",
  "aria-labelledby": "offcanvasBottomLabel"
};
var _hoisted_130 = {
  "class": "offcanvas-header"
};
var _hoisted_131 = {
  "class": "offcanvas-body small"
};
var _hoisted_132 = {
  "class": "circle-popup-body"
};
var _hoisted_133 = {
  "class": "circle-popup-body-recharge"
};
var _hoisted_134 = {
  "class": "contract-money-box"
};
var _hoisted_135 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Contract Money", -1 /* HOISTED */);
});
var _hoisted_136 = {
  id: "amountlist"
};
var _hoisted_137 = {
  "class": "second-contract-money-box"
};
var _hoisted_138 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Number", -1 /* HOISTED */);
});
var _hoisted_139 = {
  "class": "contract-money-box"
};
var _hoisted_140 = {
  "class": "contract-money-box"
};
var _hoisted_141 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_142 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_143 = {
  style: {
    "color": "red"
  }
};
var _hoisted_144 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_145 = {
  style: {
    "color": "green"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push({
        name: 'Home'
      });
    })
  }, [].concat(_hoisted_5)), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.telegram();
    }),
    href: "javascript:void(0)"
  }, [].concat(_hoisted_8))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.nexttimestamp), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PERIODS BOTTOM TILES "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$router.push({
        name: 'GameHistory',
        params: {
          game: 'circle'
        }
      });
    }),
    "class": "wlrcd wlb justify-content-center align-items-center"
  }, [].concat(_hoisted_15)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.resultrec, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: rows.id,
      rowsrec: rows,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["wlrcd wlb", $options.getResultClass(rows.clo)])
    }, null, 10 /* CLASS, PROPS */, _hoisted_16);
  }), 128 /* KEYED_FRAGMENT */)), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_21, [].concat(_hoisted_81)))]), _hoisted_82, $data.allowedbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "gold",
    id: "joingold",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.join('gold');
    })
  }, "2x"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "red",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.join('red');
    })
  }, "3x"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "violet",
    id: "joinviolet",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.join('violet');
    })
  }, "5x"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "green",
    id: "joingreen",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.join('green');
    })
  }, "50x")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_84, [].concat(_hoisted_89))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_95, [_hoisted_96, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.betsAll, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.userencode(rows.username)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getResultClass(rows.ans)])
    }, null, 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_97);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_100, [_hoisted_101, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.betrec, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getResultClass(rows.ans)])
    }, null, 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      innerHTML: $options.getResultHtml(rows.fres)
    }, null, 8 /* PROPS */, _hoisted_104), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      innerHTML: $options.betamount(rows.amount, rows.ans, rows.res)
    }, null, 8 /* PROPS */, _hoisted_105), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_102);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [this.userlastresult.isbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_107, [this.userlastresult.isbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_108, [_hoisted_109, _hoisted_110, this.userlastresult.isbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_111, "Winner")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userlastresult.issuccess ? 'You Won' : 'You Lose'), 1 /* TEXT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": "top",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: !$data.userlastresult.issuccess ? 'red' : 'green'
    })
  }, [_hoisted_113, _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userlastresult.issuccess ? 'You Won' : 'You Lose'), 1 /* TEXT */)], 4 /* STYLE */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["option", $options.getResultClass(this.userlastresult.last.clo)])
  }, null, 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [_hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.nexttimestamp - 1), 1 /* TEXT */), _hoisted_119, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, " ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userlastresult.amount), 1 /* TEXT */)]), this.userlastresult.isbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [_hoisted_123, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.userlastresult.ans, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: rows.id,
      rowsrec: rows,
      "class": "row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select", rows.ans])
    }, null, 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, "-₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getBetCharges(rows.amount)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-4 text-end",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: rows.res == 'success' ? 'green' : 'red'
      })
    }, "+100", 4 /* STYLE */)], 8 /* PROPS */, _hoisted_124);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.hidePoupbet();
    })
  }, "Ok")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["offcanvas-title", $options.betclass($data.betbox.title)]),
    id: "offcanvasBottomLabel"
  }, "Join " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.title), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.balance), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Recharge'
    },
    "class": "circle-popup-body-recharge-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Recharge")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [_hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "10",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.selectmultiply(10);
    }),
    "class": "contract-money-inner-box active-contract"
  }, "10"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "100",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.selectmultiply(100);
    }),
    "class": "contract-money-inner-box"
  }, "100"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "1000",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.selectmultiply(1000);
    }),
    "class": "contract-money-inner-box"
  }, "1000"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "10000",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.selectmultiply(10000);
    }),
    "class": "contract-money-inner-box"
  }, "10000")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [_hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.minus(5);
    })
  }, "-5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.minus(1);
    })
  }, "-1")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.multiply), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.plus(1);
    })
  }, "+1"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.plus(5);
    })
  }, "+5")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Betting Money : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.amount), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Betting Charge : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_143, "-₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getBetCharges($data.betbox.amount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Win Money : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_145, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getbetwinAmount($data.betbox.amount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "contract-money-confirm-btn",
    "data-bs-dismiss": "offcanvas",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.confirmbet();
    })
  }, "Confirm")])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.wlrcd.wlb.red[data-v-1929925e] {\n    background: red;\n}\n.wlrcd.wlb.gold[data-v-1929925e] {\n    background: #ffd76e;\n}\n.wlrcd.wlb.green[data-v-1929925e] {\n    background: green;\n}\n.wlrcd.wlb.violet[data-v-1929925e] {\n    background: #9400d3;\n}\n\n/* bet popup start */\n.circle-popup .offcanvas.show[data-v-1929925e] {\n    transform: none;\n    max-width: 480px;\n    width: 100%;\n    margin: auto;\n}\n.circle-popup .offcanvas[data-v-1929925e] {\n    max-width: 480px;\n    width: 100%;\n    margin: auto;\n    background: #090f1f;\n    border-radius: 14px 14px 0 0;\n    padding: 1rem 2.8%;\n}\n.circle-popup .offcanvas-header[data-v-1929925e] {\n    padding: 1.4rem 2.8%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.offcanvas-title[data-v-1929925e] {\n    font-size: 2rem;\n    color: #fff;\n    font-weight: 700;\n}\n.circle-popup-body .circle-popup-body-recharge[data-v-1929925e] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #22487c3d;\n    height: 55px;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 6px;\n}\n.circle-popup-body .circle-popup-body-recharge h4[data-v-1929925e] {\n    color: #fff;\n    /*-webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;*/\n    font-size: 2rem;\n    font-weight: 800;\n    margin: 0 1rem;\n    letter-spacing: .3px;\n}\n.circle-popup-body-recharge .circle-popup-body-recharge-btn[data-v-1929925e] {\n    background: linear-gradient(45deg, #ffd76e, #f9ab13);\n    width: 100px;\n    height: 35px;\n    border-radius: 4px;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: #000000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.contract-money-box p[data-v-1929925e] {\n    color: #fff;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n    padding: 1rem 0;\n}\n.contract-money-box[data-v-1929925e] {\n    padding: 1rem 0;\n}\n.contract-money-inner-box[data-v-1929925e] {\n    color: #fff;\n    font-size: 1.6rem;\n    width: 75px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    border-radius: 2px;\n    border: 1.4px solid #fff;\n}\n.contract-money-box div[data-v-1929925e] {\n    display: flex;\n    align-items: center;\n    padding: 1rem 0;\n    justify-content: space-between;\n}\n.active-contract[data-v-1929925e] {\n    border: 1.4px solid #4a80f5;\n}\n.second-contract-money-box div[data-v-1929925e] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.second-contract-money-box p[data-v-1929925e] {\n    color: #fff;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n}\n.second-contract-money-box div h4[data-v-1929925e] {\n    font-size: 2rem;\n    color: #f9ab13;\n    font-weight: 700;\n}\n.contract-money-inner-box-subheading[data-v-1929925e] {\n    color: #fff;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n    text-align: end;\n}\n.contract-money-inner-box-subheading span[data-v-1929925e] {\n    color: #f9ab13;\n    font-size: 1.8rem;\n    margin: 0 .4rem;\n    font-weight: 800;\n}\n.contract-money-confirm-btn[data-v-1929925e] {\n    background: var(--yellow-color);\n    border-radius: 8px;\n    color: var(--black-color);\n    font-size: 2.2rem;\n    font-weight: 700;\n    height: 50px;\n    width: 100%;\n    letter-spacing: .3px;\n    margin-top: 2rem;\n}\n.circle-popup .offcanvas-bottom[data-v-1929925e] {\n    height: auto !important;\n}\n.circle-popup .button-group[data-v-1929925e] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n.contract-money-confirm-btn[data-v-1929925e] {\n    background: var(--yellow-color);\n    border-radius: 8px;\n    color: var(--black-color);\n    font-size: 2.2rem;\n    font-weight: 700;\n    height: 50px;\n    width: 100%;\n    letter-spacing: .3px;\n    margin-top: 2rem;\n}\n.contract-money-cancel-btn[data-v-1929925e] {\n    background: #fff;\n    border: 2px solid #f9ab13;\n    border-radius: 8px;\n    color: var(--black-color);\n    font-size: 2.2rem;\n    font-weight: 700;\n    height: 50px;\n    width: 100%;\n    letter-spacing: .3px;\n    margin-top: 2rem;\n}\n\n/* bet popup end */\n.betamount-cl[data-v-1929925e] {\n    margin: 1.5rem 2.8%;\n}\n.betamount-cl .heading[data-v-1929925e] {\n    font-size: 2rem;\n    color: #fff;\n}\n.betamount-cl .amount-input[data-v-1929925e] {\n    border: 1px solid #afafaf30;\n    border-radius: 10px;\n    position: relative;\n    padding: 1rem 3%;\n    display: flex;\n    background: #afafaf30;\n}\n.betamount-cl .amount-input .amount-sign[data-v-1929925e] {\n    background: #075507;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n    text-align: center;\n    position: relative;\n}\n.betamount-cl .amount-input .amount-sign i[data-v-1929925e] {\n    font-size: 1.6rem;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.betamount-cl .amount-input .amount[data-v-1929925e] {\n    -moz-appearance: textfield;\n    color: #fff;\n    font-size: 2rem;\n    padding: 0 1rem;\n    border: none;\n    width: 100%;\n    background: transparent;\n}\n.betamount-cl .amount-input .amount-options[data-v-1929925e] {\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translate(0, -50%);\n    display: flex;\n    justify-content: space-around;\n    width: 7rem;\n}\n.betamount-cl .amount-input .amount-increase[data-v-1929925e],\n.betamount-cl .amount-input .amount-decrease[data-v-1929925e] {\n    height: 3rem;\n    width: 3rem;\n    background: var(--yellow-color);\n    right: 3rem;\n    color: #090f1f;\n    font-size: 2rem;\n    border-radius: 5px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.betamount-cl .amount-input .amount[data-v-1929925e]::-webkit-inner-spin-button,\n.betamount-cl .amount-input .amount[data-v-1929925e]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.amount-options-two[data-v-1929925e] {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 1rem;\n    padding: 1rem 0;\n    height: 2rem;\n}\n.amount-options-two .amount-option-two[data-v-1929925e] {\n    font-size: 1.8rem;\n    color: #000;\n    background: #ffffffe0;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    border: 1px solid #afafaf30;\n}\n.game-details-cl[data-v-1929925e] {\n    color: #fff;\n    padding: var(--padding);\n}\n.cresultbox[data-v-1929925e] {\n    display: inline-flex;\n    overflow: hidden;\n}\n.cresultbox .result[data-v-1929925e] {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border-radius: 6px;\n    margin: 0 5px;\n    background: #dee2e6;\n    color: #333;\n    line-height: 30px;\n    font-size: 18px;\n}\n.result.gold[data-v-1929925e] {\n    background-color: #f9ab13;\n    background-size: 100%;\n}\n.result.red[data-v-1929925e] {\n    background-color: red;\n    background-size: 100%;\n}\n.result.violet[data-v-1929925e] {\n    background-color: #9400d3;\n    background-size: 100%;\n}\n.result.green[data-v-1929925e] {\n    background-color: green;\n    background-size: 100%;\n}\n.result.que[data-v-1929925e] {\n    text-align: center;\n}\n.wheel-buttons-box .gold[data-v-1929925e] {\n    border-color: #f9ab13;\n    color: #f9ab13;\n}\n.wheel-buttons-box .red[data-v-1929925e] {\n    border-color: red;\n    color: red;\n}\n.wheel-buttons-box .violet[data-v-1929925e] {\n    border-color: #9400d3;\n    color: #9400d3;\n}\n.wheel-buttons-box .green[data-v-1929925e] {\n    border-color: green;\n    color: green;\n}\n.wheel-buttons-box .gold.active[data-v-1929925e],\n.wheel-buttons-box .violet.active[data-v-1929925e],\n.wheel-buttons-box .red.active[data-v-1929925e],\n.wheel-buttons-box .green.active[data-v-1929925e] {\n    border-color: #ffffffb3 !important;\n    color: #ffffffb3 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/assets/img/crown.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/crown.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/crown.png?033c195360c124646ed6146f0a9b4d60");

/***/ }),

/***/ "./resources/js/assets/img/stopWheel.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/stopWheel.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/stopWheel.png?e73a84afa7b12ef57e79c7a03e77ed60");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_style_index_0_id_1929925e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_style_index_0_id_1929925e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_style_index_0_id_1929925e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/CirclePage.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/CirclePage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CirclePage_vue_vue_type_template_id_1929925e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CirclePage.vue?vue&type=template&id=1929925e&scoped=true */ "./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true");
/* harmony import */ var _CirclePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CirclePage.vue?vue&type=script&lang=js */ "./resources/js/views/CirclePage.vue?vue&type=script&lang=js");
/* harmony import */ var _CirclePage_vue_vue_type_style_index_0_id_1929925e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css */ "./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css");
/* harmony import */ var _Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_saurabhsingh_Desktop_yuviwin_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CirclePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CirclePage_vue_vue_type_template_id_1929925e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1929925e"],['__file',"resources/js/views/CirclePage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/CirclePage.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/CirclePage.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CirclePage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_template_id_1929925e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_template_id_1929925e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CirclePage.vue?vue&type=template&id=1929925e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=template&id=1929925e&scoped=true");


/***/ }),

/***/ "./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CirclePage_vue_vue_type_style_index_0_id_1929925e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CirclePage.vue?vue&type=style&index=0&id=1929925e&scoped=true&lang=css");


/***/ })

}]);