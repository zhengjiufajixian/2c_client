webpackJsonp([2],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "setpassword-wrap" }, [
    _c(
      "div",
      { staticClass: "editpassword-content-operation" },
      [
        _c("Input", {
          ref: "myformPhone_set",
          attrs: {
            label: this.loginStatus === 1 ? "请输入手机号" : "请输入邮箱号"
          },
          on: { onChange: this.changeCodeSetIsDisabled }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "editpassword-content-operation" },
      [_c("HumanVerification", { ref: "luosimao" })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "editpassword-content-operation" },
      [
        _c("Input", {
          ref: "myformVerification_code",
          attrs: {
            type: "text",
            label: this.loginStatus === 1 ? "短信验证码" : "邮箱验证码"
          },
          on: { onChange: this.changeCodeSetIsDisabled }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            class:
              this.verifiNum === this.verifiTime
                ? "operation-verification"
                : "operation-verification operation-veritheclick",
            on: { click: this.getVerifiyCodeHandle }
          },
          [
            _vm._v(
              "\n        " +
                _vm._s(
                  this.verifiNum === this.verifiTime
                    ? this.loginStatus === 1
                      ? "获取短信验证码"
                      : "发送邮箱验证码"
                    : this.verifiNum + "s后再发送"
                ) +
                "\n    "
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "editpassword-content-operation" }, [
      _c(
        "button",
        {
          staticClass: "operation-submit",
          attrs: { disabled: this.codeSetIsDisabled },
          on: { click: this.nextVerifyHandle }
        },
        [_vm._v("下一步")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7aca963a", esExports)
  }
}

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "replacethephone max-limit" }, [
    _c(
      "div",
      { staticClass: "replacethephone-header" },
      [
        _c("Header", {
          attrs: { leftIconClassName: "icon-arrow1-left", rightText: " " },
          on: { leftHandle: this.hidePageHandle }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "replacethephone-header-content" }, [
      _c("div", { staticClass: "component-title" }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myformPhone",
            attrs: {
              label:
                _vm.pulicBindStatus === "bind" ? "新手机号" : "请输入手机号"
            },
            on: { onChange: this.changeCodeBtnIsDisabled }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [_c("HumanVerification", { ref: "luosimao" })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myformVerification",
            attrs: { label: "短信验证码" },
            on: { onChange: this.changeCodeBtnIsDisabled }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              class:
                _vm.verifiNum === this.verifiTime
                  ? "operation-verification"
                  : "operation-verification operation-veritheclick",
              on: { click: this.getPhoneVerifyCodeRequest }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm.verifiNum === _vm.verifiTime
                      ? "获取验证码"
                      : this.verifiNum + "s后再发送"
                  ) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "header-content-operation" },
            [
              _c("Input", {
                ref: "myformPaw",
                attrs: { type: "password", label: "登录密码" },
                on: { onChange: this.changeCodeBtnIsDisabled }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "header-content-operation" }, [
            _c(
              "button",
              {
                staticClass: "operation-submit",
                attrs: { disabled: this.codeBtnIsDisabled },
                on: { click: this.submitEditPhoneRequest }
              },
              [_vm._v("确定")]
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fed896b8", esExports)
  }
}

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(679);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3e951724", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23cd3d5c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23cd3d5c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(680);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6d8a1891", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2454c07e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2454c07e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("f56a454a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34e861cf\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34e861cf\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("89197d0a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3661ceeb\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3661ceeb\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(723);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1b479014", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-661b71f0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-661b71f0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(724);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6d34f1b8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68f2307b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68f2307b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("00857a5e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fed896b8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fed896b8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(434);


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['slideAnimateState'],
  updated: function () {
    if (this.slideAnimateState) {
      $('body').addClass('model-open');
    } else {
      $('body').removeClass('model-open');
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_luosimao_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuZengZhi on 2018/01/11.
 */













/* harmony default export */ __webpack_exports__["a"] = ({
	components: { Header: __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__["a" /* default */], HumanVerification: __WEBPACK_IMPORTED_MODULE_5__library_component_common_luosimao_index__["a" /* default */], Input: __WEBPACK_IMPORTED_MODULE_6__library_component_common_input_index__["a" /* default */] },
	props: ['pulicBindStatus'],
	data() {
		return {
			title: this.pulicBindStatus === 'bind' ? '更换邮箱' : '绑定邮箱',
			verifiNum: 60,
			verifiTime: 60,
			codeBtnIsDisabled: true
		};
	},
	beforeDestroy() {
		clearInterval(this.time);
	},
	methods: {
		hidePageHandle: function () {
			this.$emit('hidePageHandle');
		},
		changeCodeBtnIsDisabled: function () {
			let email = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformEmail'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformVerification'].value);
			let paw = this.$refs['myformPaw'].value.replace(/(^\s*)|(\s*$)/g, '');

			if (!email || !verification || !paw) {
				this.codeBtnIsDisabled = true;
				return null;
			}
			this.codeBtnIsDisabled = false;
		},
		getEmailVerifyCodeRequest: function () {
			const that = this;
			let auth_code = this.$refs['luosimao'].value();

			if (this.verifiNum !== this.verifiTime) {
				return new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(this.verifiNum + 's后再发送');
			}
			// if (Boolean(auth_code) === false) {
			//    return new Toastr().error('请进行人机验证')
			// }

			let email = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformEmail'].value);
			let params = {
				auth_code: auth_code,
				code_type: 1002,
				email: email

				// 避免点击状态过慢
			};if (that.verifiNum === this.verifiTime) {
				this.verifiNum = --that.verifiNum;
			}

			that.time = setInterval(() => {
				this.verifiNum = --that.verifiNum;
				if (this.verifiNum === 0) {
					clearInterval(that.time);
					that.verifiNum = that.verifiTime;
				}
			}, 1000);
			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"].API_Auth_GetEmailVerifyCode,
				params: params,
				success_function: data => {},
				error_function: data => {
					// 验证码错误，清除定时器及倒计时数
					that.verifiNum = that.verifiTime;

					clearInterval(that.time);

					try {
						LUOCAPTCHA.reset();
					} catch (error) {
						console.log(error);
					}
					new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		},
		submitEditEmailRequest() {
			let email = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformEmail'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformVerification'].value);
			let paw = this.$refs['myformPaw'].value;

			let params = {
				password: __WEBPACK_IMPORTED_MODULE_0_md5___default()(paw),
				verify_code: verification,
				email: email
			};

			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"].API_Auth_EditEmailAddress,
				params: params,
				success_function: () => {
					this.$emit('hidePageHandle', 'needfresh');
				},
				error_function: data => {
					try {
						LUOCAPTCHA.reset();
					} catch (error) {
						console.log(error);
					}
					new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		}
	}
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuzengzhi on 2018/01/10.
 */











/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		Header: __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__["a" /* default */],
		Input: __WEBPACK_IMPORTED_MODULE_3__library_component_common_input_index__["a" /* default */]
	},
	data() {
		return {
			title: '编辑用户名',
			label: '请输入用户名称',
			editData: '',
			editDataLen: 0,
			maxLen: 24
		};
	},
	methods: {
		onChange() {
			this.editData = this.$refs['myform'].value;
			this.editDataLen = this.editData.length;
		},
		hidePageHandle: function () {
			this.$emit('hidePageHandle');
		},
		submitEditNickNameRequest() {
			const that = this;

			if (this.editDataLen > this.maxLen) {
				return new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error('字符超过最大值');
			}
			if (!this.editDataLen) {
				return new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error('输入值为空');
			}
			__WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Consumer_EditSelfInfo,
				params: { nickname: this.editData },
				success_function: () => {
					__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["setCookies"]('nickname', this.editData, { expires: 7 });
					this.$emit('hidePageHandle', 'needfresh');
				},
				error_function: data => {
					new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		}
	}
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_luosimao_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuZengZhi on 2018/01/11.
 */








/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['account_list', 'verify_code', 'loginStatus'],
	components: {
		HumanVerification: __WEBPACK_IMPORTED_MODULE_1__library_component_common_luosimao_index__["a" /* default */],
		Input: __WEBPACK_IMPORTED_MODULE_2__library_component_common_input_index__["a" /* default */]
	},
	data() {
		this.time = null;
		let account_action = this.account_list[0];

		return {
			verifiTime: 60,
			verifiNum: 60,
			accountVerify: false,
			account_action: account_action // 选中账户
		};
	},
	beforeDestroy() {
		clearInterval(this.time);
	},
	methods: {
		changeCode() {
			let val = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformVerification_code'].value);

			if (Boolean(val.length) === true) {
				$(this.$refs['operation_onclickable']).css({
					background: '#000000',
					color: '#FFFFFF'
				});
			} else {
				$(this.$refs['operation_onclickable']).css({
					background: 'rgb(214,214,214)',
					color: 'rgb(255,255,255)'
				});
			}
		},
		getVerifiyCodeHandle() {
			// 重置_获取验证码
			const that = this;
			let params = {};

			if (this.verifiNum !== this.verifiTime) {
				return new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(this.verifiNum + 's后再发送');
			}
			let auth_code = this.$refs['luosimao'].value();

			if (Boolean(auth_code) === false) {
				return new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error('请进行人机验证');
			}

			if (this.account_action.type === 'phone') {
				params = {
					phone: this.account_action.val,
					code_type: 3,
					auth_code: auth_code
				};
			} else {
				params = {
					email: this.account_action.val,
					code_type: 1003,
					auth_code: auth_code
				};
			}

			// 避免点击状态过慢
			if (that.verifiNum === this.verifiTime) {
				this.verifiNum = --that.verifiNum;
			}
			that.time = setInterval(() => {
				that.verifiNum = --this.verifiNum;
				if (this.verifiNum === 0) {
					clearInterval(that.time);
					this.verifiNum = that.verifiTime;
				}
			}, 1000);

			this.$emit('getPhoneVerifyCodeRequest', params, () => {
				// 验证码错误，清除定时器及倒计时数
				that.verifiNum = that.verifiTime;
				clearInterval(that.time);
			});
		},
		showSelectListHandle(ev) {
			if (Object.keys(this.account_list).length <= 1) {
				return false;
			}
			if ($(ev.target).parents('.operation-wrap-list').length > 0) {
				return false;
			}
			this.accountVerify = true;
		},
		selectAccountHandle(item) {
			this.accountVerify = false;
			this.account_action = item;
		},
		nextVerifyHandle() {
			let verification = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformVerification_code'].value);

			if (Boolean(verification) === false) {
				return new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error('请输入验证码');
			}

			this.$emit('nextVerifyHandle', this.account_action.val, verification);
		}
	}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_component_common_luosimao_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuZengZhi on 2018/01/11.
 */








/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['loginStatus'],
	components: {
		HumanVerification: __WEBPACK_IMPORTED_MODULE_2__library_component_common_luosimao_index__["a" /* default */],
		Input: __WEBPACK_IMPORTED_MODULE_1__library_component_common_input_index__["a" /* default */]
	},
	data() {
		this.time = null;
		return {
			codeSetIsDisabled: true,
			verifiTime: 60,
			verifiNum: 60
		};
	},
	beforeDestroy() {
		clearInterval(this.time);
	},
	methods: {
		changeCodeSetIsDisabled() {
			// 判断是否可点击
			let phone = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformPhone_set'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformVerification_code'].value);

			if (!phone || !verification) {
				this.codeSetIsDisabled = true;
				return null;
			}
			this.codeSetIsDisabled = false;
		},
		getVerifiyCodeHandle() {
			// 获取验证码
			const that = this;
			let auth_code = this.$refs['luosimao'].value();

			if (Boolean(auth_code) === false) {
				return new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error('请进行人机验证');
			}

			if (this.verifiNum !== this.verifiTime) {
				return new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(this.verifiNum + 's后再发送');
			}
			let phone = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformPhone_set'].value);
			let params = {};

			if (this.loginStatus === 1) {
				params = {
					phone: phone,
					code_type: 3,
					auth_code: auth_code
				};
			} else {
				params = {
					email: phone,
					code_type: 1003,
					auth_code: auth_code
				};
			}
			// 避免点击状态过慢
			if (that.verifiNum === this.verifiTime) {
				this.verifiNum = --that.verifiNum;
			}

			that.time = setInterval(() => {
				that.verifiNum = --this.verifiNum;

				if (this.verifiNum === 0) {
					clearInterval(that.time);
					this.verifiNum = that.verifiTime;
				}
			}, 1000);

			this.$emit('getPhoneVerifyCodeRequest', params, () => {
				// 验证码错误，清除定时器及倒计时数
				this.verifiNum = that.verifiTime;
				clearInterval(that.time);
			});
		},
		nextVerifyHandle() {
			// 下一步
			let phone = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformPhone_set'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["removeSpace"](this.$refs['myformVerification_code'].value);

			this.$emit('nextVerifyHandle', phone, verification);
		}
	}
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NoPassWord_vue__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HaveRevisePassword_vue__ = __webpack_require__(837);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuZengZhi on 2018/01/11.
 */











 // 没有绑定密码场景下
 // 绑定密码场景下

/* harmony default export */ __webpack_exports__["a"] = ({
	// loginStatus  1: 手机登录 2: 为邮箱登录
	props: ['pulicBindStatus', 'loginStatus', 'phone', 'email'],
	components: {
		Input: __WEBPACK_IMPORTED_MODULE_3__library_component_common_input_index__["a" /* default */],
		Header: __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__["a" /* default */],
		NoPassWord: __WEBPACK_IMPORTED_MODULE_6__NoPassWord_vue__["a" /* default */],
		HaveRevisePassword: __WEBPACK_IMPORTED_MODULE_7__HaveRevisePassword_vue__["a" /* default */]
	},
	data() {
		let pulicBindStatus = this.pulicBindStatus;
		let account_list = [];
		let title = '';

		if (pulicBindStatus === 'no_bind') {
			title = '设置密码';
		} else {
			if (Boolean(this.phone) === true) {
				account_list.push({
					val: this.phone,
					type: 'phone'
				});
			}
			if (Boolean(this.email) === true) {
				account_list.push({
					val: this.email,
					type: 'email'
				});
			}
			title = '修改密码';
		}

		return {
			title: title,
			nextVerify: false, // 下一步状态
			account_list: account_list, // 账户列表
			fodeSubIsDisabled: false,
			username: null,
			verify_code: null,
			codeSubIsDisabled: true
		};
	},
	methods: {
		changeCodeSubIsDisabled() {
			let myformNewPaw_set = this.$refs['myformNewPaw_set'].value;
			let myformComfirmNewPaw_set = this.$refs['myformComfirmNewPaw_set'].value;

			if (myformNewPaw_set === '' || myformComfirmNewPaw_set === '' || myformComfirmNewPaw_set !== myformNewPaw_set) {
				this.codeSubIsDisabled = true;
				return null;
			}
			this.codeSubIsDisabled = false;
		},
		onBlurVerify() {
			let myformNewPaw_set = this.$refs['myformNewPaw_set'].value;
			let myformComfirmNewPaw_set = this.$refs['myformComfirmNewPaw_set'].value;

			if (Boolean(myformComfirmNewPaw_set) === false) {
				return null;
			}

			if (this.state.nextVerify === false) {
				return null;
			}

			if (myformNewPaw_set !== myformComfirmNewPaw_set) {
				new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error('两次的密码不同，请重新输入');
			}
		},
		nextVerifyHandle(username, verify_code) {
			// 去除默认填充表单
			$('input[type$=password]').val('');

			this.username = username;
			this.verify_code = verify_code;
			this.nextVerify = !this.nextVerify;

			if (this.pulicBindStatus !== 'no_bind') {
				// 绑定情况下，titlePage需要变化
				if (this.nextVerify) {
					this.titlePage = '设置密码';
				} else {
					this.titlePage = '修改密码';
				}
			}
		},
		hidePageHandle() {
			if (this.nextVerify === true) {
				this.nextVerify = false;
				return null;
			}
			this.$emit('hidePageHandle', 'needfresh');
		},
		resetPasswordHandle() {
			let myformComfirmNewPaw_set = this.$refs['myformComfirmNewPaw_set'].value;

			let params = {
				username: this.username,
				verify_code: this.verify_code,
				new_password: __WEBPACK_IMPORTED_MODULE_0_md5___default()(myformComfirmNewPaw_set)
			};

			this.resetPasswordRequest(params);
		},
		resetPasswordRequest(params) {
			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"].API_Auth_ResetPassword,
				params: params,
				success_function: () => {
					this.$emit('hidePageHandle', 'needfresh');
				},
				error_function: data => {
					new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		},
		getPhoneVerifyCodeRequest(params, cal) {
			let url = Boolean(params.phone) === true ? 'API_Auth_GetPhoneVerifyCode' : 'API_Auth_GetEmailVerifyCode';
			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"][url],
				params: params,
				success_function: () => {},
				error_function: data => {
					cal();
					try {
						LUOCAPTCHA.reset();
					} catch (error) {
						console.log(error);
					}
					new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		}
	}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_luosimao_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_component_common_input_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuZengZhi on 2018/01/11.
 */













/* harmony default export */ __webpack_exports__["a"] = ({
	components: { Header: __WEBPACK_IMPORTED_MODULE_4__library_component_common_header_index__["a" /* default */], HumanVerification: __WEBPACK_IMPORTED_MODULE_5__library_component_common_luosimao_index__["a" /* default */], Input: __WEBPACK_IMPORTED_MODULE_6__library_component_common_input_index__["a" /* default */] },
	props: ['pulicBindStatus'],
	data() {
		return {
			title: this.pulicBindStatus === 'bind' ? '更换手机' : '绑定手机',
			verifiNum: 60,
			verifiTime: 60,
			codeBtnIsDisabled: true
		};
	},
	beforeDestroy() {
		clearInterval(this.time);
	},
	methods: {
		hidePageHandle: function () {
			this.$emit('hidePageHandle');
		},
		changeCodeBtnIsDisabled: function () {
			let phone = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformPhone'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformVerification'].value);
			let paw = this.$refs['myformPaw'].value.replace(/(^\s*)|(\s*$)/g, '');

			if (!phone || !verification || !paw) {
				this.codeBtnIsDisabled = true;
				return null;
			}
			this.codeBtnIsDisabled = false;
		},
		getPhoneVerifyCodeRequest: function () {
			const that = this;
			let auth_code = this.$refs['luosimao'].value();

			if (this.verifiNum !== this.verifiTime) {
				return new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(this.verifiNum + 's后再发送');
			}
			if (Boolean(auth_code) === false) {
				return new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error('请进行人机验证');
			}

			let phone = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformPhone'].value);
			let params = {
				auth_code: auth_code,
				code_type: 2,
				phone: phone

				// 避免点击状态过慢
			};if (that.verifiNum === this.verifiTime) {
				this.verifiNum = --that.verifiNum;
			}

			that.time = setInterval(() => {
				this.verifiNum = --that.verifiNum;
				if (this.verifiNum === 0) {
					clearInterval(that.time);
					that.verifiNum = that.verifiTime;
				}
			}, 1000);
			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"].API_Auth_GetPhoneVerifyCode,
				params: params,
				success_function: data => {},
				error_function: data => {
					// 验证码错误，清除定时器及倒计时数
					that.verifiNum = that.verifiTime;

					clearInterval(that.time);

					try {
						LUOCAPTCHA.reset();
					} catch (error) {
						console.log(error);
					}
					new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		},
		submitEditPhoneRequest() {
			let phone = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformPhone'].value);
			let verification = __WEBPACK_IMPORTED_MODULE_3__library_tools_index__["removeSpace"](this.$refs['myformVerification'].value);
			let paw = this.$refs['myformPaw'].value.replace(/(^\s*)|(\s*$)/g, '');
			let params = {
				password: __WEBPACK_IMPORTED_MODULE_0_md5___default()(paw),
				verify_code: verification,
				phone: phone
			};

			__WEBPACK_IMPORTED_MODULE_2__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_1__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_2__library_request_index__["map_route_api_2c"].API_Auth_EditPhone,
				params: params,
				success_function: () => {
					this.$emit('hidePageHandle', 'needfresh');
				},
				error_function: data => {
					try {
						LUOCAPTCHA.reset();
					} catch (error) {
						console.log(error);
					}
					new __WEBPACK_IMPORTED_MODULE_7__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		}
	}
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuzengzhi on 2018/01/10.
 */


/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['keyName', 'label', 'value'],
	data() {
		return {};
	},
	methods: {
		handleClick() {
			if (this.keyName !== 'consumer_profile_image') {
				this.$emit('showPagesHandle', this.keyName);
			}
		},
		upImgFileHandle(event) {
			let obj = event.target;
			let temp_img_obj = obj.files[0];
			this.$emit('upImgFileHandle', temp_img_obj);
		}
	}
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_component_common_header__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_slideanimate_index__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_component_common_pageinit_index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NavList_vue__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EditName_index_vue__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditPhone_index__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EditPassword_index__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__EditEmail_index__ = __webpack_require__(835);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Revised by zhuzengzhi on 2018/01/10.
 */


















/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		Header: __WEBPACK_IMPORTED_MODULE_0__library_component_common_header__["a" /* default */],
		Pageinit: __WEBPACK_IMPORTED_MODULE_2__library_component_common_pageinit_index__["a" /* default */],
		NavList: __WEBPACK_IMPORTED_MODULE_7__NavList_vue__["a" /* default */],
		SlideAnimate: __WEBPACK_IMPORTED_MODULE_1__library_component_common_slideanimate_index__["a" /* default */],
		EditName: __WEBPACK_IMPORTED_MODULE_8__EditName_index_vue__["a" /* default */],
		EditPhone: __WEBPACK_IMPORTED_MODULE_9__EditPhone_index__["a" /* default */],
		EditEmail: __WEBPACK_IMPORTED_MODULE_11__EditEmail_index__["a" /* default */],
		EditPassword: __WEBPACK_IMPORTED_MODULE_10__EditPassword_index__["a" /* default */]
	},
	data() {
		return {
			title: '设置',
			navListData: {
				consumer_profile_image: {
					label: '头像',
					value: ''
				},
				name: {
					label: '用户名',
					value: '',
					showKey: 'showEditNamePage'
				},
				phone: {
					label: '手机',
					value: '',
					showKey: 'showEditPhonePage',
					status: 'no_bind' // 是否绑定
				},
				email: {
					label: '邮箱',
					value: '',
					showKey: 'showEditEmailPage',
					status: 'no_bind' // 是否绑定
				},
				password: {
					label: '密码',
					value: '',
					showKey: 'showEditPasswordPage',
					loginStatus: 1, // 1为手机登录　｜　２　为邮箱登录
					status: 'no_bind' // 是否绑定
				}
			},
			showComponentPages: {
				showEditNamePage: false,
				showEditEmailPage: false,
				showEditPhonePage: false,
				showEditPasswordPage: false
			},
			fullPhone: '',
			fullEmail: '',
			pulicBindStatus: 'no_bind',
			maxstep: ['sendRqust'],
			curstep: ['sendRqust'],
			slideAnimateVerify: false
		};
	},
	beforeMount() {
		let url_item = __WEBPACK_IMPORTED_MODULE_6__library_tools_index__["getUrlParam"]('key');

		if (Boolean(url_item) === true) {
			Object.keys(this.navListData).map(item => {
				let targetKey = this.navListData[item].showKey;
				if (Boolean(targetKey) === true && targetKey === url_item) {
					this.showPagesHandle(item);
				}
			});
		}
		this.initData();
	},
	methods: {
		gobeforePage() {
			window.history.go(-1);
		},
		decreaseStep(step) {
			let curstep = this.curstep;
			curstep.indexOf(step) > -1 && curstep.splice(curstep.indexOf(step), 1);
		},
		increaseStep(step) {
			let curstep = this.curstep;
			curstep.indexOf(step) === -1 && curstep.push(step);
		},
		secedeHandle() {
			__WEBPACK_IMPORTED_MODULE_6__library_tools_index__["clearCookies"]();
			location.href = '/index';
		},
		upImgFileHandle(temp_img_obj) {

			this.decreaseStep('sendRqust');
			const that = this;

			__WEBPACK_IMPORTED_MODULE_5__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_4__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_5__library_request_index__["map_route_api_2c"].API_Oss_GetOSSParams,
				params: { upload_file_event_type: 'upload_consumer_user_profile_image' },
				success_function: data => {
					let resuleData = data.result;

					let expire = resuleData['expire'];
					let policy = resuleData['policy'];
					let signature = resuleData.signature;
					let callback = resuleData.callback;
					let access_id = resuleData['access_id'];
					let host = resuleData.host;
					let uuid = resuleData.uuid;

					let user_id = __WEBPACK_IMPORTED_MODULE_6__library_tools_index__["getCookies"]('user_id');
					let token = __WEBPACK_IMPORTED_MODULE_6__library_tools_index__["getCookies"]('token');
					let img_file = temp_img_obj;

					let params = new FormData();
					params.append('x:user_id', user_id);
					params.append('x:token', token);
					params.append('x:client_type', 'client2c');
					params.append('key', uuid + __WEBPACK_IMPORTED_MODULE_6__library_tools_index__["splitFileExt"](img_file.name));
					params.append('host', host);
					params.append('expire', expire);
					params.append('policy', policy);
					params.append('OSSAccessKeyId', access_id);
					params.append('success_action_status', '200');
					params.append('callback', callback);
					params.append('signature', signature);
					params.append('file', img_file);

					__WEBPACK_IMPORTED_MODULE_5__library_request_index__["sendRequest"]({
						url: host,
						client_type: __WEBPACK_IMPORTED_MODULE_4__config_index__["node_web_client_type_2c"],
						params: params,
						success_function: data => {
							let consumer_profile_image_url = data.result['consumer_profile_image_url'];

							this.increaseStep('sendRqust');
							new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().success(data.message);

							__WEBPACK_IMPORTED_MODULE_6__library_tools_index__["setCookies"]('image_url', consumer_profile_image_url, { expires: 7 });
							that.$set(this.navListData.consumer_profile_image, 'value', consumer_profile_image_url);
						},
						error_function: data => {
							this.increaseStep('sendRqust');
							new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
						}
					});
				},
				error_function: data => {
					this.increaseStep('sendRqust');
					new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		},
		showPagesHandle(key) {
			let verifyKey = this.navListData[key].showKey;

			if (verifyKey) {
				this.slideAnimateVerify = true;

				this.$set(this.showComponentPages, verifyKey, true);
				this.pulicBindStatus = this.navListData[key].status;
			}
		},
		hidePageHandle(needfresh) {
			if (!this.slideAnimateVerify) {
				return null;
			}
			this.slideAnimateVerify = false;
			setTimeout(() => {
				this.showComponentPages = {};
				needfresh && this.initData();
			}, 300);
		},

		initData() {
			this.decreaseStep('sendRqust');

			__WEBPACK_IMPORTED_MODULE_5__library_request_index__["sendRequest"]({
				client_type: __WEBPACK_IMPORTED_MODULE_4__config_index__["node_web_client_type_2c"],
				url: __WEBPACK_IMPORTED_MODULE_5__library_request_index__["map_route_api_2c"].API_Consumer_GetSelfInfo,
				params: {},
				success_function: data => {
					this.increaseStep('sendRqust');
					let result = data.result;
					let formPhone = '绑定';
					let formEmail = '绑定';

					if (Boolean(result.phone) === true) {
						formPhone = result.phone.substr(0, 3) + ' *** ' + result.phone.substr(result.phone.length - 4, result.phone.length);
						this.fullPhone = result.phone;
					}
					if (Boolean(result.email) === true) {
						formEmail = result.email.substr(0, 3) + ' *** ' + result.email.substr(result.email.indexOf('@'), result.email.length);
						this.fullEmail = result.email;
					}

					let consumer_profile_image = result['consumer_user_basic'].consumer_profile_image_url || '';
					let name = result['consumer_user_basic'].consumer_nickname || 'USERO989';
					let phone = formPhone;
					let email = formEmail;
					let password = result.password ? '修改' : '设置';
					let json = { consumer_profile_image, name, phone, email, password };
					if (Boolean(result.phone) === true) {
						this.$set(this.navListData.phone, 'status', 'bind');
					}
					if (Boolean(result.email) === true) {
						this.$set(this.navListData.email, 'status', 'bind');
					}
					if (Boolean(result.password) === true) {
						this.$set(this.navListData.password, 'status', 'bind');
						this.$set(this.navListData.password, 'loginStatus', Boolean(result.phone) === true ? 1 : 2);
					}

					Object.keys(this.navListData).map(item => {
						this.$set(this.navListData[item], 'value', json[item]);
					});
				},
				error_function: data => {
					this.increaseStep('sendRqust');
					new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
				}
			});
		}
	}
});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(25);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(842);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#hemayin-app',
	template: '<App/>',
	components: { App: _index2.default }
});

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.editemail {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ffffff;\n  z-index: 999;\n  padding-top: .44rem;\n}\n.editemail .editemail-header .center-header {\n  display: none;\n}\n.editemail .editemail-header-content {\n  padding: 0px 20px;\n}\n.editemail .editemail-header-content .header-content-operation {\n  position: relative;\n  margin-bottom: 25px;\n  font-size: .16rem;\n  line-height: .28rem;\n}\n.editemail .editemail-header-content .header-content-operation .operation-verification {\n  position: absolute;\n  right: 0px;\n  top: 0.06rem;\n  padding: 0 0.05rem;\n  height: 0.28rem;\n  line-height: 0.28rem;\n  font-size: .14rem;\n  text-align: center;\n  border: 1px solid #757575;\n  color: #292929;\n  cursor: pointer;\n}\n.editemail .editemail-header-content .header-content-operation .operation-veritheclick {\n  opacity: 0.16;\n}\n.editemail .editemail-header-content .header-content-operation .operation-submit {\n  height: .45rem;\n  width: 100%;\n  text-align: center;\n  line-height: .45rem;\n  font-size: .16rem;\n  color: #ffffff;\n  background: #292929;\n  cursor: pointer;\n}\n.editemail .editemail-header-content .header-content-operation .operation-submit:disabled {\n  background: #d6d6d6;\n}\n", ""]);

// exports


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody,\nbutton,\nul,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ndl,\ndt,\ndd {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  font-weight: normal;\n}\nbody {\n  max-width: 800px;\n  margin: 0 auto;\n  background: #ffffff;\n  font-family: 'PingFang SC', 'Microsoft YaHei', 'STHeiti', 'sans-serif';\n}\n#hemayin-app {\n  font-size: 0.16rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\nli {\n  list-style: none;\n}\ni {\n  font-style: normal;\n}\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\ninput {\n  -webkit-appearance: none;\n}\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=text]:focus,\ninput[type=password]:focus,\ntextarea:focus {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\nimg {\n  border: none;\n}\n.model-open {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 800px;\n  overflow: hidden;\n}\n.hide {\n  display: none !important;\n}\n.max-limit {\n  width: 100%;\n  max-width: 800px;\n  left: 50% !important;\n  transform: translateX(-50%);\n}\n/***  font size  ***/\n@font-face {\n  font-family: 'hemayin';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "#iefix) format('embedded-opentype'), url(" + __webpack_require__(21) + ") format('truetype'), url(" + __webpack_require__(22) + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'hemayin' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-more2:before {\n  content: \"\\E958\";\n}\n.icon-wechatmoment:before {\n  content: \"\\E957\";\n}\n.icon-link:before {\n  content: \"\\E955\";\n}\n.icon-gear:before {\n  content: \"\\E954\";\n}\n.icon-more:before {\n  content: \"\\E953\";\n}\n.icon-menu-card:before {\n  content: \"\\E952\";\n}\n.icon-menu-home:before {\n  content: \"\\E956\";\n}\n.icon-truck:before {\n  content: \"\\E951\";\n}\n.icon-magic:before {\n  content: \"\\E93A\";\n}\n.icon-heart-line:before {\n  content: \"\\E950\";\n}\n.icon-factory:before {\n  content: \"\\E94F\";\n}\n.icon-coin:before {\n  content: \"\\E94E\";\n}\n.icon-plus-small:before {\n  content: \"\\E90A\";\n}\n.icon-camera:before {\n  content: \"\\E94C\";\n}\n.icon-bell:before {\n  content: \"\\E94D\";\n}\n.icon-tencentweibo:before {\n  content: \"\\E94B\";\n}\n.icon-qqzone:before {\n  content: \"\\E94A\";\n}\n.icon-qq:before {\n  content: \"\\E949\";\n}\n.icon-douban:before {\n  content: \"\\E948\";\n}\n.icon-temp-stop:before {\n  content: \"\\E947\";\n}\n.icon-temp-play:before {\n  content: \"\\E946\";\n}\n.icon-temp-microphone-stop:before {\n  content: \"\\E945\";\n}\n.icon-temp-Shape24:before {\n  content: \"\\E944\";\n}\n.icon-temp-arrow-opne:before {\n  content: \"\\E943\";\n}\n.icon-temp-arrow-close:before {\n  content: \"\\E942\";\n}\n.icon-pencil:before {\n  content: \"\\E941\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-temp-microphone:before {\n  content: \"\\E93F\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-eye:before {\n  content: \"\\E93D\";\n}\n.icon-time:before {\n  content: \"\\E93C\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-cart:before {\n  content: \"\\E939\";\n}\n.icon-address:before {\n  content: \"\\E900\";\n}\n.icon-alipay:before {\n  content: \"\\E901\";\n}\n.icon-arrow1-down:before {\n  content: \"\\E902\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-arrow1-right:before {\n  content: \"\\E904\";\n}\n.icon-arrow1-up:before {\n  content: \"\\E905\";\n}\n.icon-arrow2-down:before {\n  content: \"\\E906\";\n}\n.icon-arrow2-left:before {\n  content: \"\\E907\";\n}\n.icon-arrow2-right:before {\n  content: \"\\E908\";\n}\n.icon-arrow2-up:before {\n  content: \"\\E909\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-car:before {\n  content: \"\\E90B\";\n}\n.icon-checkbox-round-off:before {\n  content: \"\\E90D\";\n}\n.icon-checkbox-round-on:before {\n  content: \"\\E90E\";\n}\n.icon-checkbox-square-off:before {\n  content: \"\\E90F\";\n}\n.icon-checkbox-square-on:before {\n  content: \"\\E910\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-done:before {\n  content: \"\\E914\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-email:before {\n  content: \"\\E917\";\n}\n.icon-face:before {\n  content: \"\\E918\";\n}\n.icon-hamburger:before {\n  content: \"\\E919\";\n}\n.icon-heart:before {\n  content: \"\\E91A\";\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-id:before {\n  content: \"\\E91C\";\n}\n.icon-imformation:before {\n  content: \"\\E91D\";\n}\n.icon-info:before {\n  content: \"\\E91E\";\n}\n.icon-instagram:before {\n  content: \"\\E91F\";\n}\n.icon-logo-a:before {\n  content: \"\\E920\";\n}\n.icon-logo-artden:before {\n  content: \"\\E921\";\n}\n.icon-logo-word:before {\n  content: \"\\E922\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-password:before {\n  content: \"\\E927\";\n}\n.icon-paste:before {\n  content: \"\\E928\";\n}\n.icon-phone:before {\n  content: \"\\E929\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-search:before {\n  content: \"\\E92D\";\n}\n.icon-service:before {\n  content: \"\\E92E\";\n}\n.icon-share:before {\n  content: \"\\E92F\";\n}\n.icon-trash:before {\n  content: \"\\E930\";\n}\n.icon-triangle-down:before {\n  content: \"\\E931\";\n}\n.icon-triangle-up:before {\n  content: \"\\E932\";\n}\n.icon-user:before {\n  content: \"\\E933\";\n}\n.icon-wechat:before {\n  content: \"\\E934\";\n}\n.icon-wechatpay:before {\n  content: \"\\E935\";\n}\n.icon-weibo:before {\n  content: \"\\E936\";\n}\n.icon-wrong:before {\n  content: \"\\E937\";\n}\n.icon-zoom:before {\n  content: \"\\E938\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93C\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-temp-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-microphone:before {\n  content: \"\\E923\";\n}\n.icon-uniE938:before {\n  content: \"\\E938\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-cross::before {\n  content: \"\\E913\";\n}\n.icon-trash:before {\n  content: '\\E930';\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-temp-arrow-opne::before {\n  content: '\\E943';\n}\n.icon-temp-arrow-close::before {\n  content: '\\E942';\n}\n.icon-address::before {\n  content: '\\E900';\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-center:before {\n  content: \"\\E90C\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-rotate:before {\n  content: \"\\E92B\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-reset:before {\n  content: \"\\E929\";\n}\n.icon-undo:before {\n  content: \"\\E91E\";\n}\n.icon-restore:before {\n  content: \"\\E91C\";\n}\n.index-wrap {\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody,\nbutton,\nul,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ndl,\ndt,\ndd {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  font-weight: normal;\n}\nbody {\n  max-width: 800px;\n  margin: 0 auto;\n  background: #ffffff;\n  font-family: 'PingFang SC', 'Microsoft YaHei', 'STHeiti', 'sans-serif';\n}\n#hemayin-app {\n  font-size: 0.16rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\nli {\n  list-style: none;\n}\ni {\n  font-style: normal;\n}\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\ninput {\n  -webkit-appearance: none;\n}\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=text]:focus,\ninput[type=password]:focus,\ntextarea:focus {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\nimg {\n  border: none;\n}\n.model-open {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 800px;\n  overflow: hidden;\n}\n.hide {\n  display: none !important;\n}\n.max-limit {\n  width: 100%;\n  max-width: 800px;\n  left: 50% !important;\n  transform: translateX(-50%);\n}\n/***  font size  ***/\n@font-face {\n  font-family: 'hemayin';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "#iefix) format('embedded-opentype'), url(" + __webpack_require__(21) + ") format('truetype'), url(" + __webpack_require__(22) + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'hemayin' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-more2:before {\n  content: \"\\E958\";\n}\n.icon-wechatmoment:before {\n  content: \"\\E957\";\n}\n.icon-link:before {\n  content: \"\\E955\";\n}\n.icon-gear:before {\n  content: \"\\E954\";\n}\n.icon-more:before {\n  content: \"\\E953\";\n}\n.icon-menu-card:before {\n  content: \"\\E952\";\n}\n.icon-menu-home:before {\n  content: \"\\E956\";\n}\n.icon-truck:before {\n  content: \"\\E951\";\n}\n.icon-magic:before {\n  content: \"\\E93A\";\n}\n.icon-heart-line:before {\n  content: \"\\E950\";\n}\n.icon-factory:before {\n  content: \"\\E94F\";\n}\n.icon-coin:before {\n  content: \"\\E94E\";\n}\n.icon-plus-small:before {\n  content: \"\\E90A\";\n}\n.icon-camera:before {\n  content: \"\\E94C\";\n}\n.icon-bell:before {\n  content: \"\\E94D\";\n}\n.icon-tencentweibo:before {\n  content: \"\\E94B\";\n}\n.icon-qqzone:before {\n  content: \"\\E94A\";\n}\n.icon-qq:before {\n  content: \"\\E949\";\n}\n.icon-douban:before {\n  content: \"\\E948\";\n}\n.icon-temp-stop:before {\n  content: \"\\E947\";\n}\n.icon-temp-play:before {\n  content: \"\\E946\";\n}\n.icon-temp-microphone-stop:before {\n  content: \"\\E945\";\n}\n.icon-temp-Shape24:before {\n  content: \"\\E944\";\n}\n.icon-temp-arrow-opne:before {\n  content: \"\\E943\";\n}\n.icon-temp-arrow-close:before {\n  content: \"\\E942\";\n}\n.icon-pencil:before {\n  content: \"\\E941\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-temp-microphone:before {\n  content: \"\\E93F\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-eye:before {\n  content: \"\\E93D\";\n}\n.icon-time:before {\n  content: \"\\E93C\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-cart:before {\n  content: \"\\E939\";\n}\n.icon-address:before {\n  content: \"\\E900\";\n}\n.icon-alipay:before {\n  content: \"\\E901\";\n}\n.icon-arrow1-down:before {\n  content: \"\\E902\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-arrow1-right:before {\n  content: \"\\E904\";\n}\n.icon-arrow1-up:before {\n  content: \"\\E905\";\n}\n.icon-arrow2-down:before {\n  content: \"\\E906\";\n}\n.icon-arrow2-left:before {\n  content: \"\\E907\";\n}\n.icon-arrow2-right:before {\n  content: \"\\E908\";\n}\n.icon-arrow2-up:before {\n  content: \"\\E909\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-car:before {\n  content: \"\\E90B\";\n}\n.icon-checkbox-round-off:before {\n  content: \"\\E90D\";\n}\n.icon-checkbox-round-on:before {\n  content: \"\\E90E\";\n}\n.icon-checkbox-square-off:before {\n  content: \"\\E90F\";\n}\n.icon-checkbox-square-on:before {\n  content: \"\\E910\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-done:before {\n  content: \"\\E914\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-email:before {\n  content: \"\\E917\";\n}\n.icon-face:before {\n  content: \"\\E918\";\n}\n.icon-hamburger:before {\n  content: \"\\E919\";\n}\n.icon-heart:before {\n  content: \"\\E91A\";\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-id:before {\n  content: \"\\E91C\";\n}\n.icon-imformation:before {\n  content: \"\\E91D\";\n}\n.icon-info:before {\n  content: \"\\E91E\";\n}\n.icon-instagram:before {\n  content: \"\\E91F\";\n}\n.icon-logo-a:before {\n  content: \"\\E920\";\n}\n.icon-logo-artden:before {\n  content: \"\\E921\";\n}\n.icon-logo-word:before {\n  content: \"\\E922\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-password:before {\n  content: \"\\E927\";\n}\n.icon-paste:before {\n  content: \"\\E928\";\n}\n.icon-phone:before {\n  content: \"\\E929\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-search:before {\n  content: \"\\E92D\";\n}\n.icon-service:before {\n  content: \"\\E92E\";\n}\n.icon-share:before {\n  content: \"\\E92F\";\n}\n.icon-trash:before {\n  content: \"\\E930\";\n}\n.icon-triangle-down:before {\n  content: \"\\E931\";\n}\n.icon-triangle-up:before {\n  content: \"\\E932\";\n}\n.icon-user:before {\n  content: \"\\E933\";\n}\n.icon-wechat:before {\n  content: \"\\E934\";\n}\n.icon-wechatpay:before {\n  content: \"\\E935\";\n}\n.icon-weibo:before {\n  content: \"\\E936\";\n}\n.icon-wrong:before {\n  content: \"\\E937\";\n}\n.icon-zoom:before {\n  content: \"\\E938\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93C\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-temp-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-microphone:before {\n  content: \"\\E923\";\n}\n.icon-uniE938:before {\n  content: \"\\E938\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-cross::before {\n  content: \"\\E913\";\n}\n.icon-trash:before {\n  content: '\\E930';\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-temp-arrow-opne::before {\n  content: '\\E943';\n}\n.icon-temp-arrow-close::before {\n  content: '\\E942';\n}\n.icon-address::before {\n  content: '\\E900';\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-center:before {\n  content: \"\\E90C\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-rotate:before {\n  content: \"\\E92B\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-reset:before {\n  content: \"\\E929\";\n}\n.icon-undo:before {\n  content: \"\\E91E\";\n}\n.icon-restore:before {\n  content: \"\\E91C\";\n}\n.accountsetting {\n  padding: 0.44rem 0 0.5rem 0;\n}\n.component-title {\n  margin-bottom: 0.2rem;\n  font-size: 0.32rem;\n  line-height: 0.54rem;\n  color: #252a33;\n}\n.accountsetting-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 44px;\n  width: 100%;\n}\n.accountsetting-main {\n  padding: 0px 20px;\n  display: flex;\n  flex-direction: column;\n}\n.navlist {\n  margin-bottom: 20px;\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.navlist > [class^=\"navlist\"] {\n  font-size: .16rem;\n  text-align: left;\n  line-height: .28rem;\n}\n.navlist .navlist-title {\n  flex-shrink: 0;\n  color: #757575;\n}\n.navlist .navlist-info {\n  padding-left: 0.2rem;\n  color: #292929;\n}\n.navlist .navlist-info .navlist-title-img {\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.navlist .navlist-info .navlist-title-img .img-show,\n.navlist .navlist-info .navlist-title-img .img-file {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.navlist .navlist-info .navlist-title-img .img-show {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navlist .navlist-info .navlist-title-img .img-show .img-show-item {\n  font-size: .52rem;\n}\n.navlist .navlist-info .navlist-title-img .img-file {\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.accountsetting-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #f0f0f0;\n  background: rgba(255, 255, 255, 0.9);\n  font-size: .16rem;\n  line-height: 1;\n  color: #292929;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.editname {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ffffff;\n  z-index: 999;\n  padding-top: .44rem;\n}\n.editname .editname-header .center-header {\n  display: none;\n}\n.editname .editname-header-content {\n  padding: 0 20px;\n}\n.editname .editname-header-content .header-content-operation {\n  color: #adadad;\n  font-size: .16rem;\n  line-height: .28rem;\n}\n.editname .editname-header-content .header-content-info {\n  color: #757575;\n  font-size: .12rem;\n  line-height: .2rem;\n  text-align: right;\n}\n.editname .editname-header-content .header-content-error span {\n  color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.slide-animate-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  overflow: scroll;\n  width: 100%;\n  z-index: 10;\n  transition: transform .3s;\n}\n.slide-animate-wrap > div {\n  height: 100vh;\n  overflow-y: scroll;\n}\nhtml {\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.editpassword {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ffffff;\n  z-index: 999;\n  padding-top: .44rem;\n}\n.editpassword .editpassword-header .center-header {\n  display: none;\n}\n.editpassword .editpassword-content {\n  padding: 0 20px;\n}\n.editpassword .editpassword-content .no-next .no-next-content {\n  display: block;\n}\n.editpassword .editpassword-content .no-next .next-content {\n  display: none;\n}\n.editpassword .editpassword-content .next .no-next-content {\n  display: none;\n}\n.editpassword .editpassword-content .next .next-content {\n  display: block;\n}\n.editpassword .editpassword-content .editpassword-content-operation {\n  position: relative;\n  margin-bottom: 25px;\n  font-size: .16rem;\n  line-height: .28rem;\n}\n.editpassword .editpassword-content .editpassword-content-operation .clear-fill-up {\n  position: absolute;\n  z-index: -1;\n}\n.editpassword .editpassword-content .editpassword-content-operation .operation-verification {\n  position: absolute;\n  right: 0px;\n  top: 0.06rem;\n  padding: 0 0.05rem;\n  height: 28px;\n  line-height: 28px;\n  font-size: .14rem;\n  text-align: center;\n  border: 1px solid #757575;\n  color: #292929;\n  cursor: pointer;\n}\n.editpassword .editpassword-content .editpassword-content-operation .operation-veritheclick {\n  opacity: 0.16;\n}\n.editpassword .editpassword-content .editpassword-content-operation .operation-submit {\n  height: .45rem;\n  width: 100%;\n  text-align: center;\n  line-height: .45rem;\n  font-size: .16rem;\n  color: #ffffff;\n  background: #292929;\n  cursor: pointer;\n}\n.editpassword .editpassword-content .editpassword-content-operation .operation-submit:disabled {\n  background: #d6d6d6;\n}\n.editpassword .editpassword-content .editpassword-content-operation .operation-onclickable {\n  background: #d6d6d6;\n  color: #ffffff;\n}\n.editpassword .editpassword-content .editpassword-content-operation .content-operation-wrap {\n  z-index: 3;\n  position: relative;\n  height: .28rem;\n  width: 100%;\n  border-bottom: 2px solid #f0f0f0;\n  cursor: pointer;\n}\n.editpassword .editpassword-content .editpassword-content-operation .content-operation-wrap .operation-wrap-current {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: .14rem;\n  line-height: 1;\n  color: #292929;\n}\n.editpassword .editpassword-content .editpassword-content-operation .content-operation-wrap .operation-wrap-current .curren-img {\n  color: #757575;\n}\n.editpassword .editpassword-content .editpassword-content-operation .content-operation-wrap .operation-wrap-list {\n  padding: .02rem 0;\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  top: .3rem;\n  background: #ffffff;\n  left: 0;\n}\n.editpassword .editpassword-content .editpassword-content-operation .content-operation-wrap .operation-wrap-list .wrap-list-item {\n  width: 100%;\n  height: .28rem;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.replacethephone {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ffffff;\n  z-index: 999;\n  padding-top: .44rem;\n}\n.replacethephone .replacethephone-header .center-header {\n  display: none;\n}\n.replacethephone .replacethephone-header-content {\n  padding: 0 20px;\n}\n.replacethephone .replacethephone-header-content .header-content-operation {\n  position: relative;\n  margin-bottom: 25px;\n  font-size: .16rem;\n  line-height: .28rem;\n}\n.replacethephone .replacethephone-header-content .header-content-operation .operation-verification {\n  position: absolute;\n  right: 0px;\n  top: 0.06rem;\n  padding: 0 0.05rem;\n  height: 0.28rem;\n  line-height: 0.28rem;\n  font-size: .14rem;\n  text-align: center;\n  opacity: 1;\n  border: 1px solid #757575;\n  color: #292929;\n  cursor: pointer;\n}\n.replacethephone .replacethephone-header-content .header-content-operation .operation-veritheclick {\n  opacity: 0.16;\n}\n.replacethephone .replacethephone-header-content .header-content-operation .operation-submit {\n  height: .45rem;\n  width: 100%;\n  text-align: center;\n  line-height: .45rem;\n  font-size: .16rem;\n  color: #ffffff;\n  background: #292929;\n  cursor: pointer;\n}\n.replacethephone .replacethephone-header-content .header-content-operation .operation-submit:disabled {\n  background: #d6d6d6;\n}\n", ""]);

// exports


/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(152);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_661b71f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(995);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1110)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_661b71f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/library/component/common/slideanimate/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-661b71f0", Component.options)
  } else {
    hotAPI.reload("data-v-661b71f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(157);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23cd3d5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(947);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1066)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23cd3d5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditEmail/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23cd3d5c", Component.options)
  } else {
    hotAPI.reload("data-v-23cd3d5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3661ceeb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(962);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1080)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3661ceeb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditName/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3661ceeb", Component.options)
  } else {
    hotAPI.reload("data-v-3661ceeb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HaveRevisePassword_vue__ = __webpack_require__(159);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29f2f602_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HaveRevisePassword_vue__ = __webpack_require__(955);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HaveRevisePassword_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29f2f602_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HaveRevisePassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditPassword/HaveRevisePassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29f2f602", Component.options)
  } else {
    hotAPI.reload("data-v-29f2f602", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NoPassWord_vue__ = __webpack_require__(160);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca963a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NoPassWord_vue__ = __webpack_require__(1005);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NoPassWord_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca963a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NoPassWord_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditPassword/NoPassWord.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aca963a", Component.options)
  } else {
    hotAPI.reload("data-v-7aca963a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(161);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68f2307b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(996);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1111)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68f2307b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditPassword/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68f2307b", Component.options)
  } else {
    hotAPI.reload("data-v-68f2307b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(162);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed896b8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1045);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1152)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed896b8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/EditPhone/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fed896b8", Component.options)
  } else {
    hotAPI.reload("data-v-fed896b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavList_vue__ = __webpack_require__(163);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2454c07e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavList_vue__ = __webpack_require__(948);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1067)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2454c07e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/NavList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2454c07e", Component.options)
  } else {
    hotAPI.reload("data-v-2454c07e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(164);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34e861cf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(960);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1078)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34e861cf_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/account_set/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34e861cf", Component.options)
  } else {
    hotAPI.reload("data-v-34e861cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "editemail max-limit" }, [
    _c(
      "div",
      { staticClass: "editemail-header" },
      [
        _c("Header", {
          attrs: { leftIconClassName: "icon-arrow1-left", rightText: " " },
          on: { leftHandle: this.hidePageHandle }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "editemail-header-content" }, [
      _c("div", { staticClass: "component-title" }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myformEmail",
            attrs: {
              label:
                this.pulicBindStatus === "bind"
                  ? "请输入邮箱号"
                  : "请输入新的邮箱号"
            },
            on: { onChange: this.changeCodeBtnIsDisabled }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [_c("HumanVerification", { ref: "luosimao" })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myformVerification",
            attrs: { type: "text", label: "邮箱验证码" },
            on: { onChange: this.changeCodeBtnIsDisabled }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              class:
                this.verifiNum === this.verifiTime
                  ? "operation-verification"
                  : "operation-verification operation-veritheclick",
              on: { click: this.getEmailVerifyCodeRequest }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(
                    this.verifiNum === this.verifiTime
                      ? "获取验证码"
                      : this.verifiNum + "s后再发送"
                  ) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myformPaw",
            attrs: { type: "password", label: "登录密码" },
            on: { onChange: this.changeCodeBtnIsDisabled }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "header-content-operation" }, [
        _c(
          "button",
          {
            staticClass: "operation-submit",
            attrs: { disabled: this.codeBtnIsDisabled },
            on: { click: this.submitEditEmailRequest }
          },
          [_vm._v("确定")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-23cd3d5c", esExports)
  }
}

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "navlist", on: { click: this.handleClick } },
    [
      _c("div", { staticClass: "navlist-title" }, [
        _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navlist-info" },
        [
          _vm.keyName === "consumer_profile_image"
            ? _c("div", { staticClass: "navlist-title-img" }, [
                _c("div", { staticClass: "navlist-title-img" }, [
                  Boolean(_vm.value) === true
                    ? _c("img", {
                        staticClass: "img-show",
                        attrs: { src: _vm.value }
                      })
                    : _c("div", { staticClass: "img-show" }, [
                        _c("span", {
                          staticClass: "img-show-item icon-logo-word"
                        })
                      ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "myformImg",
                    staticClass: "img-file",
                    attrs: { type: "file" },
                    on: {
                      change: function($event) {
                        return _vm.upImgFileHandle($event)
                      }
                    }
                  })
                ])
              ])
            : [_vm._v("\n            " + _vm._s(_vm.value) + "\n        ")]
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2454c07e", esExports)
  }
}

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "revisePassword-wrap" }, [
    _c("div", { staticClass: "editpassword-content-operation" }, [
      _c("input", { staticClass: "clear-fill-up", attrs: { type: "text" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-operation-wrap",
          on: { click: this.showSelectListHandle }
        },
        [
          _c("div", { staticClass: "operation-wrap-current" }, [
            _c("span", [_vm._v(_vm._s(this.account_action.val))]),
            _vm._v(" "),
            _c("span", {
              class: this.accountVerify
                ? "current-img icon-triangle-up"
                : "current-img icon-triangle-down"
            })
          ]),
          _vm._v(" "),
          this.accountVerify
            ? _c(
                "div",
                { staticClass: "operation-wrap-list" },
                [
                  _vm._l(_vm.account_list, function(item, index) {
                    return [
                      _c(
                        "div",
                        {
                          key: index,
                          staticClass: "wrap-list-item",
                          on: {
                            click: function($event) {
                              return _vm.selectAccountHandle(item)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item.val))]
                      )
                    ]
                  })
                ],
                2
              )
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "editpassword-content-operation" },
      [_c("HumanVerification", { ref: "luosimao" })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "editpassword-content-operation" },
      [
        _c("Input", {
          ref: "myformVerification_code",
          attrs: {
            type: "text",
            label:
              this.account_action.type === "phone" ? "短信验证码" : "邮箱验证码"
          },
          on: { onChange: this.changeCode }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            class:
              this.verifiNum === this.verifiTime
                ? "operation-verification"
                : "operation-verification operation-veritheclick",
            on: { click: this.getVerifiyCodeHandle }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(
                  this.verifiNum === this.verifiTime
                    ? this.loginStatus === 1
                      ? "获取验证码"
                      : "发送邮箱验证"
                    : this.verifiNum + "s后再发送"
                ) +
                "\n        "
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "editpassword-content-operation" }, [
      _c(
        "button",
        {
          ref: "operation_onclickable",
          staticClass: "operation-submit operation-onclickable",
          on: { click: this.nextVerifyHandle }
        },
        [_vm._v("下一步")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-29f2f602", esExports)
  }
}

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "accountsetting", attrs: { id: "hemayin-app" } },
    [
      _c(
        "div",
        { staticClass: "accountsetting-header" },
        [
          _c("Header", {
            attrs: { leftIconClassName: "icon-cross icon-arrow1-left" },
            on: { leftHandle: this.gobeforePage }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "accountsetting-main" },
        [
          _c("div", { staticClass: "component-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._l(Object.keys(_vm.navListData), function(item, index) {
            return [
              _c("NavList", {
                key: index,
                attrs: {
                  keyName: item,
                  label: _vm.navListData[item].label,
                  value: _vm.navListData[item].value
                },
                on: {
                  upImgFileHandle: _vm.upImgFileHandle,
                  showPagesHandle: _vm.showPagesHandle
                }
              })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "accountsetting-footer max-limit",
          on: { click: this.secedeHandle }
        },
        [_vm._v("\n            退出\n        ")]
      ),
      _vm._v(" "),
      _c(
        "SlideAnimate",
        { attrs: { slideAnimateState: _vm.slideAnimateVerify } },
        [
          _vm.showComponentPages.showEditNamePage
            ? _c("EditName", { on: { hidePageHandle: _vm.hidePageHandle } })
            : _vm._e(),
          _vm._v(" "),
          this.showComponentPages.showEditPhonePage
            ? _c("EditPhone", {
                attrs: { pulicBindStatus: _vm.pulicBindStatus },
                on: { hidePageHandle: this.hidePageHandle }
              })
            : _vm._e(),
          _vm._v(" "),
          this.showComponentPages.showEditEmailPage
            ? _c("EditEmail", {
                attrs: { pulicBindStatus: _vm.pulicBindStatus },
                on: { hidePageHandle: this.hidePageHandle }
              })
            : _vm._e(),
          _vm._v(" "),
          this.showComponentPages.showEditPasswordPage
            ? _c("EditPassword", {
                attrs: {
                  pulicBindStatus: _vm.pulicBindStatus,
                  loginStatus: _vm.navListData.password.loginStatus,
                  phone: _vm.fullPhone,
                  email: _vm.fullEmail
                },
                on: { hidePageHandle: this.hidePageHandle }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("Pageinit", {
        attrs: { curstep: this.curstep, maxstep: this.maxstep }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34e861cf", esExports)
  }
}

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "editname max-limit" }, [
    _c(
      "div",
      { staticClass: "editname-header" },
      [
        _c("Header", {
          attrs: {
            leftIconClassName: "icon-arrow1-left",
            rightText: " ",
            rightIconClassName: "icon-done"
          },
          on: {
            leftHandle: this.hidePageHandle,
            rightHandle: this.submitEditNickNameRequest
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "editname-header-content" }, [
      _c("div", { staticClass: "component-title" }, [
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-content-operation" },
        [
          _c("Input", {
            ref: "myform",
            attrs: { label: _vm.label },
            on: { onChange: this.onChange }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "editDataLen > maxLen? 'header-content-info header-content-error':\n              'header-content-info'"
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.editDataLen))]),
          _vm._v("/" + _vm._s(_vm.maxLen) + "\n        ")
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3661ceeb", esExports)
  }
}

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "slide-animate-wrap",
      style: _vm.slideAnimateState
        ? "transform: translateX(0%)"
        : "transform:translateX(100%)"
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-661b71f0", esExports)
  }
}

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "editpassword max-limit" }, [
    _c(
      "div",
      { staticClass: "editpassword-header" },
      [
        _c("Header", {
          attrs: { leftIconClassName: "icon-arrow1-left", rightText: " " },
          on: { leftHandle: this.hidePageHandle }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "editpassword-main" }, [
      _c("div", { staticClass: "editpassword-content" }, [
        _c("div", { staticClass: "component-title" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c("div", { class: this.nextVerify ? "next" : "no-next" }, [
          _c(
            "div",
            { staticClass: "no-next-content" },
            [
              this.pulicBindStatus === "bind"
                ? _c("HaveRevisePassword", {
                    attrs: {
                      verify_code: _vm.verify_code,
                      loginStatus: _vm.loginStatus,
                      account_list: _vm.account_list
                    },
                    on: {
                      nextVerifyHandle: this.nextVerifyHandle,
                      getPhoneVerifyCodeRequest: this.getPhoneVerifyCodeRequest
                    }
                  })
                : _c("NoPassWord", {
                    attrs: { loginStatus: this.loginStatus },
                    on: {
                      nextVerifyHandle: this.nextVerifyHandle,
                      getPhoneVerifyCodeRequest: this.getPhoneVerifyCodeRequest
                    }
                  })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "next-content" }, [
            _c("div", { staticClass: "editpassword-content-content" }, [
              _c(
                "div",
                { staticClass: "editpassword-content-operation" },
                [
                  _c("Input", {
                    ref: "myformNewPaw_set",
                    attrs: {
                      type: "password",
                      label: "密码(6位以上数字字母组合)"
                    },
                    on: {
                      onBlur: this.onBlurVerify,
                      onChange: this.onBlurVerify
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "editpassword-content-operation" },
                [
                  _c("Input", {
                    ref: "myformComfirmNewPaw_set",
                    attrs: { type: "password", label: "确认密码" },
                    on: {
                      onBlur: this.onBlurVerify,
                      onChange: this.changeCodeSubIsDisabled
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "editpassword-content-operation" }, [
                _c(
                  "button",
                  {
                    staticClass: "operation-submit",
                    attrs: { disabled: this.codeSubIsDisabled },
                    on: { click: this.resetPasswordHandle }
                  },
                  [_vm._v("确定")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68f2307b", esExports)
  }
}

/***/ })

},[1156]);