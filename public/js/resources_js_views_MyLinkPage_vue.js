"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MyLinkPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      refcode: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.GetUser().then(function () {
      _this.refcode = _this.Users.usercode;
    });
  },
  methods: {
    copyLink: function copyLink() {
      var inputc = document.body.appendChild(document.createElement("input"));
      inputc.value = document.getElementById("reflink").textContent;
      inputc.focus();
      inputc.select();
      document.execCommand('copy');
      inputc.parentNode.removeChild(inputc);
      this.salert("Copied Successfully");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/telegram-icon.png */ "./resources/js/assets/img/telegram-icon.png");
/* harmony import */ var _assets_img_reward_box_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/reward-box-img.png */ "./resources/js/assets/img/reward-box-img.png");
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/logo2.png */ "./resources/js/assets/img/logo2.png");
/* harmony import */ var _assets_img_refer_earn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/refer-earn.png */ "./resources/js/assets/img/refer-earn.png");
/* harmony import */ var _assets_img_refer_icon1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/refer-icon1.png */ "./resources/js/assets/img/refer-icon1.png");
/* harmony import */ var _assets_img_refer_icon2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/refer-icon2.png */ "./resources/js/assets/img/refer-icon2.png");
/* harmony import */ var _assets_img_refer_icon3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/refer-icon3.png */ "./resources/js/assets/img/refer-icon3.png");
/* harmony import */ var _assets_img_refer_icon4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/refer-icon4.png */ "./resources/js/assets/img/refer-icon4.png");









var _hoisted_1 = {
  "class": "home-section"
};
var _hoisted_2 = {
  "class": "center",
  style: {
    "min-height": "100vh!important"
  }
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
}, "Invite Link", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_img_telegram_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}, null, -1 /* HOISTED */);
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "reward-box"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_img_reward_box_img_png__WEBPACK_IMPORTED_MODULE_2__["default"]
}, null, -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "*The Invitee will get ₹ 1 reward my invite link", -1 /* HOISTED */);
var _hoisted_12 = {
  href: "#",
  "class": "copy-link",
  id: "reflink"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Copy link and share", -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"refer-box\"><img src=\"" + _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_3__["default"] + "\"><div class=\"refer-box-img-main\"><img src=\"" + _assets_img_refer_earn_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\"></div><div class=\"refer-earn-icons\"><a href=\"javascript:void(0)\"><img src=\"" + _assets_img_refer_icon1_png__WEBPACK_IMPORTED_MODULE_5__["default"] + "\"> Send your unique refferal link</a><a href=\"javascript:void(0)\"><img src=\"" + _assets_img_refer_icon2_png__WEBPACK_IMPORTED_MODULE_6__["default"] + "\"> User register with your bank</a><a href=\"javascript:void(0)\"><img src=\"" + _assets_img_refer_icon3_png__WEBPACK_IMPORTED_MODULE_7__["default"] + "\"> User complete the first deposit</a><a href=\"javascript:void(0)\"><img src=\"" + _assets_img_refer_icon4_png__WEBPACK_IMPORTED_MODULE_8__["default"] + "\"> You Receive ₹ 1</a></div></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push({
        name: 'Invite'
      });
    })
  }, [].concat(_hoisted_5)), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.telegram();
    }),
    href: "javascript:void(0)"
  }, [].concat(_hoisted_8))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End top nav "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start reward box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, "https://yuviwin.com/login?LTCKE=" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.refcode), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "copy-link-btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.copyLink();
    })
  }, [].concat(_hoisted_14))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End reward box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start refer box "), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End rafer box ")])]);
}

/***/ }),

/***/ "./resources/js/assets/img/logo2.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/logo2.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo2.png?75dc981394723fd606cf081bc4dc5257");

/***/ }),

/***/ "./resources/js/assets/img/refer-earn.png":
/*!************************************************!*\
  !*** ./resources/js/assets/img/refer-earn.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/refer-earn.png?4f7318176405cc7cd1a06b9e9ec9449e");

/***/ }),

/***/ "./resources/js/assets/img/refer-icon1.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/refer-icon1.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/refer-icon1.png?0a5cc6a7daa3b983b165aa6f9d117e0d");

/***/ }),

/***/ "./resources/js/assets/img/refer-icon2.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/refer-icon2.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/refer-icon2.png?aae654f1f97c7e1c41f09faa4dd1752f");

/***/ }),

/***/ "./resources/js/assets/img/refer-icon3.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/refer-icon3.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/refer-icon3.png?363a61e2baa8757e178cf08aa1a6a08e");

/***/ }),

/***/ "./resources/js/assets/img/refer-icon4.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/refer-icon4.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/refer-icon4.png?7a2083f040e28fdb1d66f809b5131654");

/***/ }),

/***/ "./resources/js/assets/img/reward-box-img.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/reward-box-img.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/reward-box-img.png?668dfc0d6aef520f2d2b63166be5862c");

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

/***/ "./resources/js/views/MyLinkPage.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/MyLinkPage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyLinkPage_vue_vue_type_template_id_e1a20958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLinkPage.vue?vue&type=template&id=e1a20958 */ "./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958");
/* harmony import */ var _MyLinkPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyLinkPage.vue?vue&type=script&lang=js */ "./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_user_Desktop_thixpro_peojects_backup_yuviwinnew_laravelnew_laravelnew_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MyLinkPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MyLinkPage_vue_vue_type_template_id_e1a20958__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/MyLinkPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyLinkPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyLinkPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyLinkPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958":
/*!*************************************************************************!*\
  !*** ./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyLinkPage_vue_vue_type_template_id_e1a20958__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyLinkPage_vue_vue_type_template_id_e1a20958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyLinkPage.vue?vue&type=template&id=e1a20958 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyLinkPage.vue?vue&type=template&id=e1a20958");


/***/ })

}]);