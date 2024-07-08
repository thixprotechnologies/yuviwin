"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ParityPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=script&lang=js ***!
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
// import Popup from '../components/Popup.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  //     components: {
  //     Popup
  //   },
  data: function data() {
    return {
      showPopupDialog: false,
      selectedChoice: '',
      selectedAmount: 1,
      quantity: 1,
      selectedMultiplier: 1,
      user: {
        username: null
      },
      resultrec: '',
      nexttimestamp: null,
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
      userlastparity: {
        isbet: false,
        issuccess: false,
        amount: 0,
        ans: null,
        last: {}
      },
      prediction: {
        red: 0,
        green: 0,
        violet: 0,
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
      },
      allowedbet: false
    };
  },
  computed: {
    totalAmount: function totalAmount() {
      return this.selectedAmount * this.quantity * this.selectedMultiplier;
    },
    formattedAmount: function formattedAmount() {
      return this.userlastparity.amount.toFixed(2);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.user.username = _this.Users.username;
      _this.fechresultrec();
      _this.fatchUserResults();
      _this.countdown();
    });
    this.refreshcountdown = setInterval(this.countdown, 1000);
  },
  beforeUnmount: function beforeUnmount() {
    clearInterval(this.refreshcountdown);
  },
  methods: {
    showPopup: function showPopup(choice) {
      this.popupChoice = choice;
      this.showPopupDialog = true;
      this.selectedChoice = choice;
      //   this.updateBodyClass();
    },
    confirmBet: function confirmBet(totalAmount) {
      // Pass the total amount to the confirmbet method
      this.confirmbet(totalAmount);
      // Close the popup after confirming the bet
      this.closePopup();
    },
    //  updateBodyClass() {
    //   if (this.showPopupDialog) {
    //     document.body.classList.add('no-scroll');
    //   } else {
    //     document.body.classList.remove('no-scroll');
    //   }
    // },
    selectAmount: function selectAmount(amount) {
      this.selectedAmount = amount;
    },
    placeBet: function placeBet() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this2.balance >= _this2.betbox.amount)) {
                _context.next = 16;
                break;
              }
              if (!_this2.betbox.timeout) {
                _context.next = 13;
                break;
              }
              data = new FormData();
              data.append("username", _this2.user.username);
              data.append("period", _this2.nexttimestamp);
              data.append("amount", _this2.betbox.amount);
              data.append("ans", _this2.betbox.target); // Set the option to 'big' or 'small'
              _context.next = 9;
              return _this2.callApi('post', 'api/user/v1/user/bet/parity', data);
            case 9:
              res = _context.sent;
              if (res.status === 200) {
                _this2.closebetbox();
                _this2.salert(res.data.msg);
                _this2.fatchUserResults();
                _this2.GetUser();
              } else {
                // Handle API errors
              }
              _context.next = 14;
              break;
            case 13:
              _this2.walert("Timeout! Please wait for the next round.");
            case 14:
              _context.next = 17;
              break;
            case 16:
              _this2.walert("Low Balance! Please Recharge First.");
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    decreaseQuantity: function decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity: function increaseQuantity() {
      this.quantity++;
    },
    validateQuantity: function validateQuantity() {
      this.quantity = Math.max(1, parseInt(this.quantity) || 1);
    },
    selectMultiplier: function selectMultiplier(multiplier) {
      this.selectedMultiplier = multiplier;
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
    // getResultAmount(x, y, z, a) {
    //     var f;
    //     if (z == "fail") {
    //         f = 98 / 100 * x;
    //     } else if (z == 'success') {
    //         if (a == "violet") {
    //             if (y == "green" || y == "red") {
    //                 f = 90 / 100 * x * 0.5;
    //             } else if (y == "violet") {
    //                 f = 95 / 100 * x * 3.5;
    //             } else {
    //                 f = 95 / 100 * x * 8;
    //             }
    //         } else {
    //             if (y == "green" || y == "red") {
    //                 f = 97.5 / 100 * x * 2;
    //             } else if (y == "violet") {
    //                 f = 95 / 100 * x * 3.5;
    //             } else {
    //                 f = 95 / 100 * x * 8;
    //             }
    //         }
    //     } else {
    //         f=0;
    //     }
    //     return f.toFixed(2)
    // },
    getResultAmount: function getResultAmount(x, y, z, a) {
      var amount;
      var f;
      if (z == "fail") {
        f = 98 / 100 * x;
      } else if (z == 'success') {
        if (a == "violet") {
          if (y == "green" || y == "red") {
            f = 96 / 100 * x * .5;
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
          } else if (y == "Big" || y == "Small") {
            f = 98 / 100 * x * 2;
          } else {
            f = 98 / 100 * x * 8;
          }
        } else {
          if (y == "green" || y == "red" || y == "Big" || y == "Small") {
            f = 98 / 100 * x * 2;
          } else if (y == "violet") {
            f = 98 / 100 * x * 3.5;
          } else {
            f = 98 / 100 * x * 8;
          }
        }
      } else {
        f = 0;
      }
      return f.toFixed(2);
    },
    userResult: function userResult() {
      if (this.userlastparity.issuccess) {
        return 'Win &#8377; ' + this.userlastparity.amount;
      } else {
        return 'Lose &#8377; ' + this.userlastparity.amount;
      }
    },
    updateScrollProgress: function updateScrollProgress() {
      var container = this.$refs.recordsContainer;
      var scrollProgress = this.$refs.scrollProgress;
      var maxHeight = container.scrollHeight - container.clientHeight;
      var percentageScrolled = container.scrollTop / maxHeight * 100;
      scrollProgress.style.height = percentageScrolled + '%';
    },
    getBetCharges: function getBetCharges(amount) {
      if (this.betbox.target == "green" || this.betbox.target == "red") {
        return amount * 2.5 / 100;
      } else {
        return amount * 5 / 100;
      }
    },
    getbetwinAmount: function getbetwinAmount(amount) {
      var f;
      if (this.betbox.target == "green" || this.betbox.target == "red") {
        f = 98 / 100 * amount * 2;
        return f.toFixed(2);
      } else if (this.betbox.target == "violet") {
        f = 98 / 100 * amount * 3.5;
        return f.toFixed(2);
      } else if (this.betbox.target === "Big") {
        f = 98 / 100 * amount * 2;
        return f.toFixed(2);
      } else if (this.betbox.target === "Small") {
        f = 98 / 100 * amount * 2;
        return f.toFixed(2);
      } else {
        f = 98 / 100 * amount * 8;
        return f.toFixed(2);
      }
    },
    countdown: function countdown() {
      var _this3 = this;
      var countDownDate = Date.parse(new Date()) / 1e3;
      var distance = 180 - countDownDate % 180;
      var i = distance / 60,
        n = distance % 60;
      var minutes = Math.floor(i);
      var seconds = ('0' + Math.floor(n)).slice(-2);
      var sec1 = (seconds % 100 - seconds % 10) / 10;
      var sec2 = seconds % 10;
      document.getElementById('time').innerHTML = '<div> <span class="timer">0</span> <span class="timer">' + Math.floor(minutes) + '</span> <span class="timer-demo">:</span> <span class="timer">' + sec1 + '</span> <span class="timer">' + sec2 + '</span> </div>';
      var dis = distance % 2;
      if (dis == 0 && 30 < distance) {
        this.getBets();
      }
      if (30 < distance) {
        this.betbox.timeout = true;
        this.allowedbet = true;
      }
      if (30 > distance) {
        this.allowedbet = false;
        this.betbox.timeout = false;
        var listItems = document.getElementById('amountlist').childNodes;
        for (var _i = 0; _i < listItems.length; _i++) {
          listItems[_i].classList.remove('active-contract');
        }
        this.betbox.amount = this.betbox.factor * this.betbox.multiply;
        document.getElementById("10").className = "contract-money-inner-box active-contract";
        this.betbox.multiply = 1;
        this.betbox.factor = 10;
        this.betbox.amount = 10;
        //this.hidebetbox();
      }
      if (180 == distance || 179 == distance) {
        this.fechresultrec().then(function () {
          if (_this3.userlastparity.isbet == true) {
            document.getElementById('resultPopup').classList.add('show');
            setTimeout(function () {
              document.getElementById('resultPopup').classList.remove('show');
            }, 5000);
            _this3.fatchUserResults();
            location.reload();
          }
          _this3.fatchUserResults();
          // setTimeout(()=>{
          //         location.reload();
          //         },5000)
          _this3.GetUser();
        });
      } else {
        document.getElementById('resultPopup').classList.remove('show');
      }
    },
    hidePoupbet: function hidePoupbet() {
      document.getElementById("resultPopup").classList.remove("show");
      location.reload();
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
    getResultClass: function getResultClass(name) {
      return name;
    },
    betamount: function betamount(x, y, z, a) {
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
          if (y == "green" || y == "red" || y == "Big" || y == "Small") {
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
        return '<div class="" style="margin-left: 25%;color: #000;font-size: 1.2rem;"><span>Wait</span></div>';
      }
    },
    join: function join(label) {
      if (this.betbox.timeout) {
        if (label == "Green") {
          this.betbox.target = "green";
          this.betbox.boxcolor = "green";
          this.betbox.title = label;
        } else if (label == "Red") {
          this.betbox.target = "red";
          this.betbox.boxcolor = "red";
          this.betbox.title = label;
        } else if (label == "Violet") {
          this.betbox.target = "violet";
          this.betbox.boxcolor = "violet";
          this.betbox.title = label;
        } else if (label == "Big") {
          this.betbox.target = "Big";
          this.betbox.title = label;
        } else if (label == "Small") {
          this.betbox.target = "Small";
          this.betbox.title = label;
        } else {
          var intvalue = parseInt(label.trim().match(/\d+/));
          this.betbox.target = intvalue;
          this.betbox.title = intvalue;
        }
      }
    },
    betclass: function betclass(name) {
      return name + ' ' + this.betbox.boxcolor;
    },
    showBetbox: function showBetbox() {
      var offcanvas = document.getElementById('offcanvasBottom');
      offcanvas.classList.add('show');
      offcanvas.setAttribute('aria-hidden', 'false');
      offcanvas.setAttribute('role', 'dialog');
      offcanvas.style.visibility = 'visible';
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
    //
    "short": function short(stat) {
      if (stat == "red") {
        return 'R';
      } else if (stat == "green") {
        return 'G';
      } else if (stat == "violet") {
        return 'V';
      } else if (stat === 'Big') {
        return 'B';
      } else if (stat === 'Small') {
        return 'S';
      } else {
        var intvalue = parseInt(stat);
        return intvalue;
      }
    },
    getcolor: function getcolor(stat) {
      if (stat === "red") {
        return 'red';
      } else if (stat === "green") {
        return 'green';
      } else if (stat === 'Small' || stat === 'S') {
        return 'small-color-class';
      } else if (stat === 'Big' || stat === 'B') {
        return 'big-color-class';
      } else if (stat === "violet") {
        return 'violet';
      } else {
        var intvalue = parseInt(stat);
        var point = intvalue % 2;
        if (point === 1) {
          return 'green';
        } else if (point === 0) {
          return 'red';
        }
        return 'nothing';
      }
    },
    fechresultrec: function fechresultrec() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data, res, key, i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = new FormData();
              data.append("username", _this4.user.username);
              _context2.next = 4;
              return _this4.callApi('post', 'api/user/v1/parity/results', data);
            case 4:
              res = _context2.sent;
              if (res.status === 200) {
                _this4.resultrec = res.data.data;
                _this4.nexttimestamp = res.data.next;
                _this4.userlastparity = res.data.userbet;
                if (res.data.prediction) {
                  for (key in res.data.prediction) {
                    if (_this4.prediction.hasOwnProperty(key)) {
                      _this4.prediction[key] = res.data.prediction[key];
                    }
                  }
                }
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
    fatchUserResults: function fatchUserResults() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              data = new FormData();
              data.append("username", _this5.user.username);
              _context3.next = 4;
              return _this5.callApi('post', 'api/user/v1/user/parity', data);
            case 4:
              res = _context3.sent;
              if (res.status === 200) {
                console.log('data data', res.data);
                _this5.betrec = res.data.data;
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
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    confirmbet: function confirmbet() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_this6.betbox.target == 'Big' || _this6.betbox.target == 'Small')) {
                _context4.next = 4;
                break;
              }
              _this6.placeBet();
              _context4.next = 21;
              break;
            case 4:
              if (!(_this6.balance >= _this6.betbox.amount)) {
                _context4.next = 20;
                break;
              }
              if (!_this6.betbox.timeout) {
                _context4.next = 17;
                break;
              }
              data = new FormData();
              data.append("username", _this6.user.username);
              data.append("period", _this6.nexttimestamp);
              data.append("amount", _this6.betbox.amount);
              data.append("ans", _this6.betbox.target);
              _context4.next = 13;
              return _this6.callApi('post', 'api/user/v1/user/bet/parity', data);
            case 13:
              res = _context4.sent;
              if (res.status === 200) {
                _this6.closebetbox();
                _this6.salert(res.data.msg);
                _this6.fatchUserResults();
                _this6.GetUser();
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
              _context4.next = 18;
              break;
            case 17:
              _this6.walert("Timeout! Please wait for next round.");
            case 18:
              _context4.next = 21;
              break;
            case 20:
              _this6.walert("Low Balance! Please Recharge First.");
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getBets: function getBets() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var data, res, i;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              data = new FormData();
              data.append('period', _this7.nexttimestamp);
              _context5.next = 4;
              return _this7.callApi('post', '/api/user/v1/parity/bets', data);
            case 4:
              res = _context5.sent;
              if (res.status === 200) {
                _this7.betsAll = res.data.data;
              } else {
                if (res.status === 401) {
                  _this7.logout();
                } else if (res.status == 400) {
                  _this7.ialert(res.data.msg);
                } else if (res.status == 422) {
                  for (i in res.data.errors) {
                    _this7.ealert(res.data.errors[i][0]);
                  }
                } else {
                  _this7.swralert();
                }
              }
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
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
  },
  watch: {
    showPopupDialog: function showPopupDialog(newValue) {
      this.updateBodyClass();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/telegram-icon.png */ "./resources/js/assets/img/telegram-icon.png");
/* harmony import */ var _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/games/rocket.png */ "./resources/js/assets/img/games/rocket.png");
/* harmony import */ var _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/coin.png */ "./resources/js/assets/img/coin.png");
/* harmony import */ var _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/crown.png */ "./resources/js/assets/img/crown.png");





var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5b55fe0a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center parity-game popup-container",
  style: {
    "min-height": "100vh!important"
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
  }, "Parity", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* HOISTED */);
});
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "game-details-pg"
};
var _hoisted_10 = {
  "class": "basic-details"
};
var _hoisted_11 = {
  "class": "first"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Balance", -1 /* HOISTED */);
});
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "last"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Parity")], -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "game-top"
};
var _hoisted_15 = {
  "class": ""
};
var _hoisted_16 = {
  "class": "left-content"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Period", -1 /* HOISTED */);
});
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"\" data-v-5b55fe0a><div class=\"right-content\" data-v-5b55fe0a><h2 data-v-5b55fe0a>Count Down</h2><span id=\"time\" data-v-5b55fe0a><div data-v-5b55fe0a><span class=\"timer\" data-v-5b55fe0a>0</span><span class=\"timer\" data-v-5b55fe0a>0</span><span class=\"timer-demo\" data-v-5b55fe0a>:</span><span class=\"timer\" data-v-5b55fe0a>0</span><span class=\"timer\" data-v-5b55fe0a>0</span></div></span></div></div>", 1);
var _hoisted_19 = {
  key: 0,
  "class": "game-options"
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "join game"
  }, null, -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Join Red", -1 /* HOISTED */);
});
var _hoisted_22 = [_hoisted_20, _hoisted_21];
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "join game"
  }, null, -1 /* HOISTED */);
});
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Join violet", -1 /* HOISTED */);
});
var _hoisted_25 = [_hoisted_23, _hoisted_24];
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "join game"
  }, null, -1 /* HOISTED */);
});
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Join Green", -1 /* HOISTED */);
});
var _hoisted_28 = [_hoisted_26, _hoisted_27];
var _hoisted_29 = {
  key: 1,
  "class": "game-options-two"
};
var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1", -1 /* HOISTED */);
});
var _hoisted_31 = [_hoisted_30];
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "2", -1 /* HOISTED */);
});
var _hoisted_33 = [_hoisted_32];
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "3", -1 /* HOISTED */);
});
var _hoisted_35 = [_hoisted_34];
var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "4", -1 /* HOISTED */);
});
var _hoisted_37 = [_hoisted_36];
var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "5", -1 /* HOISTED */);
});
var _hoisted_39 = [_hoisted_38];
var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "6", -1 /* HOISTED */);
});
var _hoisted_41 = [_hoisted_40];
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "7", -1 /* HOISTED */);
});
var _hoisted_43 = [_hoisted_42];
var _hoisted_44 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "8", -1 /* HOISTED */);
});
var _hoisted_45 = [_hoisted_44];
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "9", -1 /* HOISTED */);
});
var _hoisted_47 = [_hoisted_46];
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "0", -1 /* HOISTED */);
});
var _hoisted_49 = [_hoisted_48];
var _hoisted_50 = {
  key: 2,
  "class": "btn-box"
};
var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "text-align": "center",
      "color": "#fff"
    }
  }, "Big", -1 /* HOISTED */);
});
var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "text-align": "center",
      "color": "#fff"
    }
  }, "Small", -1 /* HOISTED */);
});
var _hoisted_54 = [_hoisted_53];
var _hoisted_55 = {
  key: 3,
  "class": "game-options"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"game-option red active\" id=\"joinred\" data-v-5b55fe0a><img src=\"" + _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"join game\" data-v-5b55fe0a><p data-v-5b55fe0a>Join Red</p></div><div class=\"game-option violet active\" data-v-5b55fe0a><img src=\"" + _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"join game\" data-v-5b55fe0a><p data-v-5b55fe0a>Join violet</p></div><div class=\"game-option green active\" id=\"joingreen\" data-v-5b55fe0a><img src=\"" + _assets_img_games_rocket_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"join game\" data-v-5b55fe0a><p data-v-5b55fe0a>Join Green</p></div>", 3);
var _hoisted_59 = [_hoisted_56];
var _hoisted_60 = {
  key: 4,
  "class": "game-options-two"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>1</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>2</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>3</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>4</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>5</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>6</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>7</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>8</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>9</p></div><div class=\"game-option active\" data-v-5b55fe0a><p data-v-5b55fe0a>0</p></div>", 10);
var _hoisted_71 = [_hoisted_61];
var _hoisted_72 = {
  key: 5,
  "class": "btn-box"
};
var _hoisted_73 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "text-align": "center",
      "color": "#fff"
    }
  }, "Big", -1 /* HOISTED */);
});
var _hoisted_74 = [_hoisted_73];
var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "text-align": "center",
      "color": "#fff"
    }
  }, "Small", -1 /* HOISTED */);
});
var _hoisted_76 = [_hoisted_75];
var _hoisted_77 = {
  "class": "bet-filter-box fast-bg"
};
var _hoisted_78 = {
  "class": "nav nav-pills mb-3",
  id: "pills-tab",
  role: "tablist",
  style: {
    "border": "none"
  }
};
var _hoisted_79 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
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
    "aria-selected": "true",
    style: {
      "color": "rgb(156 163 175)"
    }
  }, " Records ")], -1 /* HOISTED */);
});
var _hoisted_80 = {
  "class": "nav-item",
  role: "presentation"
};
var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
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
    "aria-selected": "false",
    style: {
      "color": "rgb(156 163 175)"
    }
  }, " Probability ")], -1 /* HOISTED */);
});
var _hoisted_82 = {
  "class": "tab-pane fade show active",
  id: "betFilter1",
  role: "tabpanel",
  "aria-labelledby": "betFilter1-tab"
};
var _hoisted_83 = {
  "class": "game-records"
};
var _hoisted_84 = {
  "class": "period-id"
};
var _hoisted_85 = {
  "class": "violet"
};
var _hoisted_86 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_87 = {
  "class": "record"
};
var _hoisted_88 = {
  "class": "period-id"
};
var _hoisted_89 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "result waiting"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "option waiting"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-question"
  })])], -1 /* HOISTED */);
});
var _hoisted_90 = {
  "class": "game-records-scroll-progress"
};
var _hoisted_91 = {
  ref: "scrollProgress"
};
var _hoisted_92 = {
  "class": "tab-pane fade",
  id: "betFilter2",
  role: "tabpanel",
  "aria-labelledby": "betFilter2-tab"
};
var _hoisted_93 = {
  "class": "probability"
};
var _hoisted_94 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_95 = {
  "class": "record"
};
var _hoisted_96 = {
  "class": "period-id"
};
var _hoisted_97 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_98 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_99 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_100 = {
  "class": "record"
};
var _hoisted_101 = {
  "class": "period-id"
};
var _hoisted_102 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_103 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_104 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_105 = {
  "class": "record"
};
var _hoisted_106 = {
  "class": "period-id"
};
var _hoisted_107 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_108 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_109 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_110 = {
  "class": "record"
};
var _hoisted_111 = {
  "class": "period-id"
};
var _hoisted_112 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_113 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_114 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_115 = {
  "class": "record"
};
var _hoisted_116 = {
  "class": "period-id"
};
var _hoisted_117 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_118 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_119 = {
  "class": "probability-two"
};
var _hoisted_120 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_121 = {
  "class": "record"
};
var _hoisted_122 = {
  "class": "period-id"
};
var _hoisted_123 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_124 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_125 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_126 = {
  "class": "record"
};
var _hoisted_127 = {
  "class": "period-id"
};
var _hoisted_128 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_129 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_130 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_131 = {
  "class": "record"
};
var _hoisted_132 = {
  "class": "period-id"
};
var _hoisted_133 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_134 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_135 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_136 = {
  "class": "record"
};
var _hoisted_137 = {
  "class": "period-id"
};
var _hoisted_138 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_139 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_140 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_141 = {
  "class": "record"
};
var _hoisted_142 = {
  "class": "period-id"
};
var _hoisted_143 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_144 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_145 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_146 = {
  "class": "record"
};
var _hoisted_147 = {
  "class": "period-id"
};
var _hoisted_148 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_149 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_150 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_151 = {
  "class": "record"
};
var _hoisted_152 = {
  "class": "period-id"
};
var _hoisted_153 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_154 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_155 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_156 = {
  "class": "record"
};
var _hoisted_157 = {
  "class": "period-id"
};
var _hoisted_158 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_159 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_160 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_161 = {
  "class": "record"
};
var _hoisted_162 = {
  "class": "period-id"
};
var _hoisted_163 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_164 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_165 = {
  "class": "d-flex justify-content-around align-items-center",
  style: {
    "border": "1px solid #aeaeae",
    "padding": "0.5rem"
  }
};
var _hoisted_166 = {
  "class": "record"
};
var _hoisted_167 = {
  "class": "period-id"
};
var _hoisted_168 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_169 = {
  style: {
    "font-size": "1.5rem",
    "font-weight": "600"
  }
};
var _hoisted_170 = {
  "class": "bet-filter-box bet-history-pg"
};
var _hoisted_171 = /*#__PURE__*/_withScopeId(function () {
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
    "aria-selected": "true",
    style: {
      "color": "rgb(156 163 175)"
    }
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
    "aria-selected": "false",
    style: {
      "color": "rgb(156 163 175)"
    }
  }, " My Bets ")])], -1 /* HOISTED */);
});
var _hoisted_172 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_173 = {
  "class": "tab-pane fade show active",
  id: "betFilter",
  role: "tabpanel",
  "aria-labelledby": "betFilter-tab"
};
var _hoisted_174 = {
  "class": "betFilter-table-box"
};
var _hoisted_175 = {
  "class": "avitor-game1-table game-table pagepage"
};
var _hoisted_176 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "user"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "select"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "big/Small"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount")], -1 /* HOISTED */);
});
var _hoisted_177 = ["rowsrec"];
var _hoisted_178 = {
  "class": "record"
};
var _hoisted_179 = {
  "class": "period-id"
};
var _hoisted_180 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_181 = {
  "class": "tab-pane fade",
  id: "betFilter4",
  role: "tabpanel",
  "aria-labelledby": "betFilter4-tab",
  style: {
    "height": "200px",
    "overflow": "scroll"
  }
};
var _hoisted_182 = {
  "class": "avitor-game1-table game-table pagepage"
};
var _hoisted_183 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Select"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Point"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Result"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "time")], -1 /* HOISTED */);
});
var _hoisted_184 = ["rowsrec"];
var _hoisted_185 = {
  "class": "record"
};
var _hoisted_186 = {
  "class": "period-id"
};
var _hoisted_187 = {
  "class": "option",
  style: {
    "position": "relative"
  }
};
var _hoisted_188 = ["innerHTML"];
var _hoisted_189 = ["innerHTML"];
var _hoisted_190 = {
  "class": "wlbox",
  id: "resultPopup"
};
var _hoisted_191 = {
  key: 0,
  "class": "wlbox-main"
};
var _hoisted_192 = {
  key: 0,
  "class": "top",
  style: {
    "background": "green"
  }
};
var _hoisted_193 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "coin",
    "class": "ccon"
  }, null, -1 /* HOISTED */);
});
var _hoisted_194 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "crown",
    "class": "ccrn"
  }, null, -1 /* HOISTED */);
});
var _hoisted_195 = {
  key: 0
};
var _hoisted_196 = {
  key: 1
};
var _hoisted_197 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_coin_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "coin",
    "class": "ccon"
  }, null, -1 /* HOISTED */);
});
var _hoisted_198 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_img_crown_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "crown",
    "class": "ccrn"
  }, null, -1 /* HOISTED */);
});
var _hoisted_199 = {
  "class": "violet"
};
var _hoisted_200 = {
  "class": "option2",
  style: {
    "position": "relative"
  }
};
var _hoisted_201 = {
  "class": "row curresult px-4 mt-3"
};
var _hoisted_202 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, " Period: ", -1 /* HOISTED */);
});
var _hoisted_203 = {
  "class": "col-6 text-end"
};
var _hoisted_204 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-6"
  }, " Your Bet Price: ", -1 /* HOISTED */);
});
var _hoisted_205 = {
  "class": "col-6 text-end"
};
var _hoisted_206 = {
  key: 2,
  "class": "yourresult"
};
var _hoisted_207 = {
  "class": "mainr"
};
var _hoisted_208 = /*#__PURE__*/_withScopeId(function () {
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
var _hoisted_209 = ["rowsrec"];
var _hoisted_210 = {
  "class": "col-4 text-center text-white"
};
var _hoisted_211 = {
  "class": "col-4 text-center"
};
var _hoisted_212 = {
  "class": "btnok"
};
var _hoisted_213 = {
  "class": "fast-parity-popup"
};
var _hoisted_214 = {
  "class": "offcanvas fast-parity-offcanva offcanvas-bottom",
  tabindex: "-1",
  id: "offcanvasBottom",
  "aria-labelledby": "offcanvasBottomLabel"
};
var _hoisted_215 = {
  "class": "offcanvas-header"
};
var _hoisted_216 = {
  "class": "offcanvas-body small"
};
var _hoisted_217 = {
  "class": "fast-parity-popup-body"
};
var _hoisted_218 = {
  "class": "fast-parity-popup-body-recharge"
};
var _hoisted_219 = {
  "class": "contract-money-box"
};
var _hoisted_220 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Contract Money", -1 /* HOISTED */);
});
var _hoisted_221 = {
  id: "amountlist"
};
var _hoisted_222 = {
  "class": "second-contract-money-box"
};
var _hoisted_223 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Number", -1 /* HOISTED */);
});
var _hoisted_224 = {
  "class": "contract-money-box"
};
var _hoisted_225 = {
  "class": "contract-money-box"
};
var _hoisted_226 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_227 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_228 = {
  style: {
    "color": "red"
  }
};
var _hoisted_229 = {
  "class": "contract-money-inner-box-subheading"
};
var _hoisted_230 = {
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
  }, [].concat(_hoisted_8))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.balance), 1 /* TEXT */)]), _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.nexttimestamp), 1 /* TEXT */)])]), _hoisted_18]), $data.allowedbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option red",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.join('Red');
    })
  }, [].concat(_hoisted_22)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option violet",
    id: "joinviolet",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.join('Violet');
    })
  }, [].concat(_hoisted_25)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option green",
    id: "joingreen",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.join('Green');
    })
  }, [].concat(_hoisted_28))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join1",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.join('join1');
    })
  }, [].concat(_hoisted_31)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join2",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.join('join2');
    })
  }, [].concat(_hoisted_33)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join3",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.join('join3');
    })
  }, [].concat(_hoisted_35)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join4",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.join('join4');
    })
  }, [].concat(_hoisted_37)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join5",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.join('join5');
    })
  }, [].concat(_hoisted_39)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join6",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.join('join6');
    })
  }, [].concat(_hoisted_41)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join7",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.join('join7');
    })
  }, [].concat(_hoisted_43)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join8",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.join('join8');
    })
  }, [].concat(_hoisted_45)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join9",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.join('join9');
    })
  }, [].concat(_hoisted_47)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-option",
    id: "join0",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.join('join0');
    })
  }, [].concat(_hoisted_49))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "item yellow left",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.join('Big');
    })
  }, [].concat(_hoisted_52)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "item green right",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.join('Small');
    })
  }, [].concat(_hoisted_54))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [].concat(_hoisted_59))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [].concat(_hoisted_71))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.allowedbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "item yellow_back",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.join('Big');
    }),
    "aria-disabled": "true"
  }, [].concat(_hoisted_74)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "item yellow_back",
    id: "joinred",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasBottom",
    "aria-controls": "offcanvasBottom",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $options.join('Small');
    }),
    "aria-disabled": "true"
  }, [].concat(_hoisted_76))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Buttons to trigger the popup "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "nav-link",
    id: "pills-home-tab",
    type: "button",
    role: "tab",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return _ctx.$router.push({
        name: 'GameHistory',
        params: {
          game: 'parity'
        }
      });
    }),
    style: {
      "color": "rgb(156 163 175)"
    }
  }, " History ")]), _hoisted_81]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "records",
    ref: "recordsContainer",
    onScroll: _cache[20] || (_cache[20] = function ($event) {
      return $options.updateScrollProgress();
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.resultrec, function (row) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "record",
      key: row.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor(row.clo)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, row.res1 === 'violet']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.ans) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.ans <= 4 ? 'S' : 'B'), 1 /* TEXT */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.period % 1000), 1 /* TEXT */)])]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.nexttimestamp % 1000), 1 /* TEXT */)])])], 544 /* NEED_HYDRATION, NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, null, 512 /* NEED_PATCH */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('red')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('red')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction.red), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('Big')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('Big')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction.Big), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('Small')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('Small')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction.Small), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('violet')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('violet')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction.violet), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('green')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('green')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction.green), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('0')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('0')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('0')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['0']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('1')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('1')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('1')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['1']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('2')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('2')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('2')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['2']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('3')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('3')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('3')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['3']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('4')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('4')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('4')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['4']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('5')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('5')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('5')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_149, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['5']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('6')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('6')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('6')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['6']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('7')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('7')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('7')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_159, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['7']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('8')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('8')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_163, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('8')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_164, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['8']), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_167, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor('9')])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "violet",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "right": "0"
    }, $options.isvoilet('9')])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"]('9')), 1 /* TEXT */)], 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_169, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.prediction['9']), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [_hoisted_171, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_175, [_hoisted_176, $data.betsAll != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.betsAll, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.userencode(rows.username)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor(rows.ans)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "violet",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.isvoilet(rows.ans))
    }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.ans === "Small" ? 'S' : rows.ans === "Big" ? 'B' : $options["short"](rows.ans)), 1 /* TEXT */)], 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.ans), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_177);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_182, [_hoisted_183, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.betrec, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: rows.id,
      rowsrec: rows
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.period), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_186, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor(rows.ans)])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "violet",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.isvoilet(rows.ans))
    }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.ans === "Small" ? 'S' : rows.ans === "Big" ? 'B' : $options["short"](rows.ans)), 1 /* TEXT */)], 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      innerHTML: $options.getele(rows.number)
    }, null, 8 /* PROPS */, _hoisted_188), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      innerHTML: $options.betamount(rows.amount, rows.ans, rows.res, rows.color2)
    }, null, 8 /* PROPS */, _hoisted_189), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rows.time), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_184);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [this.userlastparity.isbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_191, [this.userlastparity.isbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_192, [_hoisted_193, _hoisted_194, this.userlastparity.isbet == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_195, "Winner")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_196, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userlastparity.issuccess ? 'You Won' : 'You Lose'), 1 /* TEXT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": "top",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: !$data.userlastparity.issuccess ? 'red' : 'green'
    })
  }, [_hoisted_197, _hoisted_198, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userlastparity.issuccess ? 'You Won' : 'You Lose'), 1 /* TEXT */)], 4 /* STYLE */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["result", $options.getcolor(this.userlastparity.last.clo)])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["option", $options.getResultClass(this.userlastparity.last.clo)]),
    style: {
      "display": "block"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, this.userlastparity.last.res1 === 'violet']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.userlastparity.last.ans) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.userlastparity.last.ans <= 4 ? 'S' : 'B'), 1 /* TEXT */)], 2 /* CLASS */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [_hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.nexttimestamp - 1), 1 /* TEXT */), _hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, " ₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formattedAmount), 1 /* TEXT */)]), this.userlastparity.isbet == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [_hoisted_208, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.userlastparity.ans, function (rows) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: rows.id,
      rowsrec: rows,
      "class": "row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select center-content", $options.getcolor(rows.ans)])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options["short"](rows.ans)), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, "-₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getfeeParity(rows.amount, rows.ans, rows.color2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "col-4 text-end",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: rows.res == 'success' ? 'green' : 'red'
      })
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getResultAmount(rows.amount, rows.ans, rows.res, rows.color2)), 5 /* TEXT, STYLE */)], 8 /* PROPS */, _hoisted_209);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $options.hidePoupbet();
    })
  }, "Ok")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["offcanvas-title", $options.betclass($data.betbox.title)]),
    id: "offcanvasBottomLabel"
  }, "Join " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.title), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.balance), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Recharge'
    },
    "class": "fast-parity-popup-body-recharge-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Recharge")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_219, [_hoisted_220, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "10",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $options.selectmultiply(10);
    }),
    "class": "contract-money-inner-box active-contract"
  }, "10"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "100",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $options.selectmultiply(100);
    }),
    "class": "contract-money-inner-box"
  }, "100"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "1000",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $options.selectmultiply(1000);
    }),
    "class": "contract-money-inner-box"
  }, "1000"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "10000",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $options.selectmultiply(10000);
    }),
    "class": "contract-money-inner-box"
  }, "10000")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_222, [_hoisted_223, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $options.minus(5);
    })
  }, "-5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $options.minus(1);
    })
  }, "-1")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.multiply), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.plus(1);
    })
  }, "+1"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "contract-money-inner-box",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $options.plus(5);
    })
  }, "+5")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Betting Money : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.betbox.amount), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Betting Charge : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_228, "-₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getBetCharges($data.betbox.amount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Win Money : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_230, "₹ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getbetwinAmount($data.betbox.amount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "contract-money-confirm-btn",
    "data-bs-dismiss": "offcanvas",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $options.confirmbet();
    })
  }, "Confirm")])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.big-color-class[data-v-5b55fe0a] {\n  background-color: #c13bf2; /* Example color for Big */\n}\n.small-color-class[data-v-5b55fe0a] {\n  background-color: #3977cd; /* Example color for Small */\n}\n.center-content[data-v-5b55fe0a] {\n    text-align: center;\n}\n/* .no-scroll {\n  overflow: hidden;\n} */\n/* Button styles */\n.btn-box[data-v-5b55fe0a] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 5px;\n}\n.yellow_back[data-v-5b55fe0a] {\n    background-color: rgba(240, 234, 234, 0.2);\n    border-radius: 1px solid rgba(135, 130, 130, 0.2);\n}\n.item[data-v-5b55fe0a] {\n  cursor: pointer;\n  padding: 10px 20px;\n  width: 55%;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  margin: 0 5px;\n}\n.left[data-v-5b55fe0a] {\n    background-color: #c13bf2;\n    border: 1px solid #c13bf2;\n    border-radius: 5px;\n    width: 60%;\n}\n.right[data-v-5b55fe0a] {\n  background-color: #3977cd;/* Blue color */\n  border: 1px solid #3977cd;\n  border-radius: 5px;\n  width: 60%;\n}\n\n/* Popup styles */\n.popup-overlay[data-v-5b55fe0a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\n    z-index: 9998;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.popup-container[data-v-5b55fe0a] {\n    position: relative; /* Ensure relative positioning */\n    z-index: 9999; /* Set a high z-index value to ensure it appears above other content */\n}\n.popup-join[data-v-5b55fe0a] {\n  background: white;\n  width: 100%;\n  max-width: 400px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  animation: slideUp-5b55fe0a 0.3s forwards;\n}\n@keyframes slideUp-5b55fe0a {\nfrom {\n    transform: translateY(100%);\n}\nto {\n    transform: translateY(0);\n}\n}\n.info .li[data-v-5b55fe0a] {\n  padding: 10px;\n  border-radius: 5px;\n  margin: 5px;\n  cursor: pointer;\n}\n.info .li.active[data-v-5b55fe0a] {\n  background-color: #fb4e4e;\n  color: white;\n}\n.stepper-box .li[data-v-5b55fe0a] {\n  padding: 10px;\n  border-radius: 5px;\n  margin: 5px;\n  cursor: pointer;\n}\n.digit-box input[data-v-5b55fe0a] {\n  text-align: center;\n  width: 40px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n.foot .left[data-v-5b55fe0a],\n.foot .right[data-v-5b55fe0a] {\n  flex: 1;\n  text-align: center;\n  padding: 15px;\n  cursor: pointer;\n}\n.foot .left[data-v-5b55fe0a] {\n  background-color: #555;\n  color: white;\n}\n.foot .right[data-v-5b55fe0a] {\n  background-color: #fb4e4e;\n  color: white;\n}\n\n/* .btn-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n} */\n\n/* new popup design css start */\n.wlbox-main .result .option2[data-v-5b55fe0a] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n.wlbox-main .result .violet[data-v-5b55fe0a] {\n    height: 4rem !important;\n    width: 2rem !important;\n    border-radius: 0 2rem 2rem 0 !important;\n}\n\n/* new popup design css end */\n.hidden[data-v-5b55fe0a] {\n    display: none !important;\n}\n.parity-game[data-v-5b55fe0a] {\n    background-color: #fff;\n    position: relative;\n}\n.bet-filter-box.fast-bg .fade[data-v-5b55fe0a]:not(.show) {\n    display: none;\n    opacity: 0;\n}\n\n/* probability */\n.probability[data-v-5b55fe0a] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    padding: 1rem;\n}\n.probability-two[data-v-5b55fe0a] {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap: 1rem;\n    padding: 1rem;\n}\n\n/* popup design  fast parity */\n.fp_popup[data-v-5b55fe0a] {\n    display: flex;\n    height: 150px;\n    min-width: 150px;\n    background: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 5;\n    border: 10px solid #9d9d9d5c;\n    border-radius: 10px;\n    padding: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n.fpp_details[data-v-5b55fe0a] {\n    isplay: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.fpp_record[data-v-5b55fe0a] {\n    display: flex;\n    justify-content: center;\n    width: 100%\n}\n.fppu_details[data-v-5b55fe0a] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 1rem;\n}\n.fppu_details .heading[data-v-5b55fe0a] {\n    font-size: 1.4rem;\n    color: green;\n    text-align: center;\n}\n.fppu_details .heading.red[data-v-5b55fe0a] {\n    color: red;\n}\n.fppu_details .details[data-v-5b55fe0a] {\n    font-size: 1.2rem;\n    text-align: justify;\n    text-align: center;\n}\n.game-details-pg[data-v-5b55fe0a] {\n    margin-top: 6rem;\n    background: linear-gradient(rgb(90, 96, 128) -4.92%, rgb(159, 165, 189) 100%);\n    color: var(--bg-color);\n    padding: var(--padding);\n    position: relative;\n}\n.game-top[data-v-5b55fe0a] {\n    width: 100%;\n    color: #fff;\n    display: inline-flex;\n    justify-content: space-between;\n}\n.left-content[data-v-5b55fe0a] {\n    padding: 2rem 0;\n    text-align: left;\n}\n.left-content h2[data-v-5b55fe0a],\n.right-content h2[data-v-5b55fe0a] {\n    font-size: 1.2rem;\n}\n.left-content p[data-v-5b55fe0a],\n.right-content p[data-v-5b55fe0a] {\n    font-size: 1.8rem;\n}\n.right-content[data-v-5b55fe0a] {\n    padding: 2rem 0;\n    text-align: end;\n}\n.right-content .timer[data-v-5b55fe0a] {\n    text-align: center;\n    min-width: 1.2rem;\n    border-radius: 0.25rem;\n    padding: 0.25rem;\n    background: rgba(255, 255, 255, 0.20);\n    margin: 0 0.15rem;\n    display: inline-block\n}\n.right-content .timer-demo[data-v-5b55fe0a] {\n    border-radius: 0.25rem;\n    padding: 0.25rem;\n    display: inline-block;\n}\n#time[data-v-5b55fe0a] {\n    font-size: 1.1rem;\n    line-height: .75rem;\n}\n.basic-details[data-v-5b55fe0a] {\n    display: inline-flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 1rem;\n}\n.basic-details .first[data-v-5b55fe0a] {\n    background: rgba(255, 255, 255, 0.2);\n    color: #fff;\n    min-height: 40px;\n    border-radius: 10px;\n    padding: 0.2rem 0.8rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.basic-details .last[data-v-5b55fe0a] {\n    background: #fff;\n    color: var(--bg-color);\n    min-height: 40px;\n    border-radius: 10px;\n    padding: 0.2rem 0.8rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.first p[data-v-5b55fe0a],\n.first h2[data-v-5b55fe0a],\n.last h2[data-v-5b55fe0a] {\n    font-size: 1.4rem;\n}\n.first h2[data-v-5b55fe0a] {\n    color: green;\n}\n.game-options[data-v-5b55fe0a] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n}\n.game-options-two[data-v-5b55fe0a] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    padding: 1rem 0;\n    gap: 1rem;\n}\n.game-options-two .game-option[data-v-5b55fe0a] {\n    height: 4rem !important;\n}\n.game-option[data-v-5b55fe0a] {\n    height: 6rem;\n    position: relative;\n    border: 1px solid #fff;\n    background-color: #fff;\n    border-radius: 5px;\n}\n.game-option.active[data-v-5b55fe0a] {\n    border: 1px solid rgba(255, 255, 255, 0.2) !important;\n    background-color: rgba(255, 255, 255, 0.2) !important;\n    border-radius: 5px;\n}\n.game-option.red[data-v-5b55fe0a] {\n    border: 1px solid red;\n    background-color: red;\n    border-radius: 5px;\n}\n.game-option.green[data-v-5b55fe0a] {\n    border: 1px solid green;\n    background-color: green;\n    border-radius: 5px;\n}\n.game-option.violet[data-v-5b55fe0a] {\n    border: 1px solid #9400d3;\n    background-color: #9400d3;\n    border-radius: 5px;\n}\n.game-option p[data-v-5b55fe0a] {\n    font-size: 1.3rem;\n    text-align: center;\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n    color: #fff;\n    z-index: 3;\n}\n\n/* .game-option .amt {\n    font-size: 1.4rem;\n    text-align: center;\n    position: absolute;\n    color: var(--bg-color);\n    z-index: 3;\n    color: #fff;\n    right: 0.4rem;\n    top: -1.3rem;\n    background: #8BC34A;\n    border-radius: 50%;\n    padding: 0.4rem;\n} */\n.game-option img[data-v-5b55fe0a] {\n    height: 3rem;\n    position: absolute;\n    top: 2px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n.game-options-two .game-option p[data-v-5b55fe0a] {\n    font-size: 1.3rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--bg-color);\n}\n.bet-filter-box.fast-bg[data-v-5b55fe0a] {\n    background: #fff;\n    background: #fff;\n    height: 180px;\n    padding: 0;\n}\n.bet-filter-box.fast-bg .nav-pills .nav-link.active[data-v-5b55fe0a],\n.nav-pills .show>.nav-link[data-v-5b55fe0a] {\n    background: #f0f8ff;\n    color: #000 !important;\n}\n.game-records[data-v-5b55fe0a] {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: baseline;\n    position: relative;\n}\n.game-records-scroll-progress[data-v-5b55fe0a] {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 5px;\n    height: 100%;\n    background-color: lightgray;\n    z-index: 1;\n}\n.game-records-scroll-progress div[data-v-5b55fe0a] {\n    width: 100%;\n    height: 5px;\n    background-color: #007bff;\n    transition: height 0.3s ease;\n}\n.records[data-v-5b55fe0a] {\n    display: flex;\n    margin-top: 1rem;\n    flex-wrap: wrap;\n    overflow-y: scroll;\n    height: 100px;\n}\n.records .record[data-v-5b55fe0a] {\n    width: 10%;\n    padding: 1px;\n    display: grid;\n    justify-content: center;\n}\n.record .period-id[data-v-5b55fe0a] {\n    margin: auto;\n    font-size: 1.3rem;\n    color: var(--bg-color);\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n.record .result[data-v-5b55fe0a] {\n    color: #fff;\n    text-align: center;\n    border-radius: 10%;\n    display: inline-block;\n    box-shadow: 0 0 5px rgb(0 0 0/40%);\n    height: 3rem;\n    width: 3rem;\n    position: relative;\n}\n.record .result .option[data-v-5b55fe0a] {\n    position: absolute;\n    top: 0.2rem;\n    font-size: 1.8rem;\n}\n.record .result.waiting[data-v-5b55fe0a] {\n    background: rgb(194 194 194);\n}\n.result .option.waiting[data-v-5b55fe0a] {\n    font-size: 2rem;\n    border-radius: 10%;\n    color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.result.red[data-v-5b55fe0a] {\n    background: red;\n}\n.result.violet[data-v-5b55fe0a] {\n    background: #9400d3;\n}\n.result.green[data-v-5b55fe0a] {\n    background: green;\n}\n.result .red[data-v-5b55fe0a] {\n    background-color: red;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .violet[data-v-5b55fe0a] {\n    background-color: #9400d3;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .green[data-v-5b55fe0a] {\n    background-color: green;\n    position: absolute;\n    width: 1.5rem;\n    height: 3rem;\n    border-radius: 0 15px 15px 0;\n    color: var(--bg-color);\n    text-align: center;\n    display: inline-block;\n    box-shadow: 0 0 2px rgb(0 0 0/40%);\n}\n.result .red.active[data-v-5b55fe0a],\n.result .green.active[data-v-5b55fe0a],\n.result .violet.active[data-v-5b55fe0a] {\n    display: none;\n}\n.pagepage.game-table tr th[data-v-5b55fe0a],\n.pagepage.game-table tr td[data-v-5b55fe0a] {\n    color: #000 !important;\n}\n.avitor-game1-table.game-table .heading[data-v-5b55fe0a] {\n    background: #afafaf;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n}\n.bet-filter-box.bet-history-pg[data-v-5b55fe0a] {\n    background: #fff;\n    background: #fff;\n    height: unset;\n    padding: 0;\n}\n.bet-filter-box.bet-history-pg .nav-pills .nav-link.active[data-v-5b55fe0a],\n.nav-pills .show>.nav-link[data-v-5b55fe0a] {\n    background: #f0f8ff;\n    color: #000 !important;\n}\n.bet-filter-box.bet-history-pg .bet-filter-box .nav-pills[data-v-5b55fe0a] {\n    border: none;\n}\n\n/* betting popup  */\n.fast-parity-popup .offcanvas.show[data-v-5b55fe0a] {\n    transform: none;\n    max-width: 480px;\n    width: 100%;\n    margin: auto;\n}\n.fast-parity-popup .offcanvas[data-v-5b55fe0a] {\n    max-width: 480px;\n    width: 100%;\n    margin: auto;\n    background: #fff;\n    border-radius: 14px 14px 0 0;\n    padding: 1rem 2.8%;\n}\n.fast-parity-popup .offcanvas-header[data-v-5b55fe0a] {\n    padding: 1.4rem 2.8%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.fast-parity-popup .offcanvas-title[data-v-5b55fe0a] {\n    font-size: 2rem;\n    color: #090f1f;\n    font-weight: 700;\n}\n.offcanvas-title.Small[data-v-5b55fe0a] {\n    color: #3977cd !important;\n}\n.offcanvas-title.Big[data-v-5b55fe0a] {\n    color: #c13bf2 !important;\n}\n.fast-parity-popup .offcanvas-title.red[data-v-5b55fe0a] {\n    color: red !important;\n}\n.fast-parity-popup .offcanvas-title.violet[data-v-5b55fe0a] {\n    color: #9400d3 !important;\n}\n.fast-parity-popup .offcanvas-title.green[data-v-5b55fe0a] {\n    color: green !important;\n}\n.fast-parity-popup-body .fast-parity-popup-body-recharge[data-v-5b55fe0a] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #22487c3d;\n    height: 55px;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 6px;\n}\n.fast-parity-popup-body .fast-parity-popup-body-recharge h4[data-v-5b55fe0a] {\n    color: #090f1f;\n    /*-webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;*/\n    font-size: 2rem;\n    font-weight: 800;\n    margin: 0 1rem;\n    letter-spacing: .3px;\n}\n.fast-parity-popup-body .fast-parity-popup-body-recharge input[data-v-5b55fe0a] {\n    color: #090f1f;\n    font-weight: 600;\n    background: transparent;\n    font-size: 2rem;\n    margin: 0 1rem;\n    letter-spacing: .3px;\n}\n.fast-parity-popup-body .fast-parity-popup-body-recharge input[type=\"number\"][data-v-5b55fe0a]::-webkit-inner-spin-button,\n.fast-parity-popup-body .fast-parity-popup-body-recharge input[type=\"number\"][data-v-5b55fe0a]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n    /* Optional: Adjust spacing */\n}\n.fast-parity-popup-body-recharge .fast-parity-popup-body-recharge-btn[data-v-5b55fe0a] {\n    background: linear-gradient(45deg, #ffd76e, #f9ab13);\n    width: 100px;\n    height: 35px;\n    border-radius: 4px;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: #000000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.contract-money-box p[data-v-5b55fe0a] {\n    color: #090f1f;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n    padding: 1rem 0;\n}\n.contract-money-box[data-v-5b55fe0a] {\n    padding: 1rem 0;\n}\n.contract-money-inner-box[data-v-5b55fe0a] {\n    color: #090f1f;\n    font-size: 1.6rem;\n    width: 75px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    border-radius: 2px;\n    border: 1.4px solid #9a9a9a;\n}\n.contract-money-box div[data-v-5b55fe0a] {\n    display: flex;\n    align-items: center;\n    padding: 1rem 0;\n    justify-content: space-between;\n}\n.active-contract[data-v-5b55fe0a] {\n    border: 1.4px solid #4a80f5;\n}\n.second-contract-money-box div[data-v-5b55fe0a] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.second-contract-money-box p[data-v-5b55fe0a] {\n    color: #090f1f;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n}\n.second-contract-money-box div h4[data-v-5b55fe0a] {\n    font-size: 2rem;\n    color: #f9ab13;\n    font-weight: 700;\n}\n.contract-money-inner-box-subheading[data-v-5b55fe0a] {\n    color: #090f1f;\n    font-size: 1.2rem;\n    letter-spacing: .3px;\n    text-align: end;\n}\n.contract-money-inner-box-subheading span[data-v-5b55fe0a] {\n    color: #f9ab13;\n    font-size: 1.8rem;\n    margin: 0 .4rem;\n    font-weight: 800;\n}\n.fast-parity-popup .button-group[data-v-5b55fe0a] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n.contract-money-confirm-btn[data-v-5b55fe0a] {\n    background: var(--yellow-color);\n    border-radius: 8px;\n    color: var(--black-color);\n    font-size: 2.2rem;\n    font-weight: 700;\n    height: 50px;\n    width: 100%;\n    letter-spacing: .3px;\n    margin-top: 2rem;\n}\n.contract-money-cancel-btn[data-v-5b55fe0a] {\n    background: #fff;\n    border: 2px solid #f9ab13;\n    border-radius: 8px;\n    color: var(--black-color);\n    font-size: 2.2rem;\n    font-weight: 700;\n    height: 50px;\n    width: 100%;\n    letter-spacing: .3px;\n    margin-top: 2rem;\n}\n.fast-parity-popup .offcanvas-bottom[data-v-5b55fe0a] {\n    height: auto !important;\n}\n.bet-filter-box.fast-bg[data-v-5b55fe0a] {\n    height: 230px;\n}\n\n/*Media quaries*/\n@media screen and (max-width: 991px) {\n.bet-filter-box.fast-bg[data-v-5b55fe0a] {\n        height: 200px;\n}\n}\n@media screen and (max-width: 768px) {\n.bet-filter-box.fast-bg[data-v-5b55fe0a] {\n        height: 200px;\n}\n}\n@media screen and (max-width: 650px) {\n.bet-filter-box.fast-bg[data-v-5b55fe0a] {\n        height: 200px;\n}\n}\n", ""]);
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

/***/ "./resources/js/assets/img/games/rocket.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/games/rocket.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/rocket.png?5ecb46dab676c17339608ea378c4221e");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_style_index_0_id_5b55fe0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_style_index_0_id_5b55fe0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_style_index_0_id_5b55fe0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/ParityPage.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/ParityPage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ParityPage_vue_vue_type_template_id_5b55fe0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true */ "./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true");
/* harmony import */ var _ParityPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParityPage.vue?vue&type=script&lang=js */ "./resources/js/views/ParityPage.vue?vue&type=script&lang=js");
/* harmony import */ var _ParityPage_vue_vue_type_style_index_0_id_5b55fe0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css */ "./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css");
/* harmony import */ var C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ParityPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ParityPage_vue_vue_type_template_id_5b55fe0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5b55fe0a"],['__file',"resources/js/views/ParityPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/ParityPage.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/ParityPage.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ParityPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_template_id_5b55fe0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_template_id_5b55fe0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=template&id=5b55fe0a&scoped=true");


/***/ }),

/***/ "./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ParityPage_vue_vue_type_style_index_0_id_5b55fe0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ParityPage.vue?vue&type=style&index=0&id=5b55fe0a&scoped=true&lang=css");


/***/ })

}]);