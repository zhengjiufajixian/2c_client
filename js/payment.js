webpackJsonp([19],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "hemayin-app" } },
    [_c("PageInit", { attrs: { curstep: _vm.curstep, maxstep: _vm.maxstep } })],
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
    require("vue-hot-reload-api")      .rerender("data-v-9b9e39f6", esExports)
  }
}

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(452);


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pingpp_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pingpp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pingpp_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_pageinit__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr__);
//
//
//
//
//










/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            maxstep: ['loading'],
            curstep: []
        };
    },
    components: {
        PageInit: __WEBPACK_IMPORTED_MODULE_1__library_component_common_pageinit__["a" /* default */]
    },
    mounted() {

        this.checkParams();
    },
    methods: {
        checkParams() {
            let payment_charge_type; //alipay_pc_direct ,wechat_phone_webpage,alipay_phone_webpage,wx_pub
            let order_id = __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["getCookies"]('order_id');
            let pay_type = __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["getCookies"]('pay_type');
            let open_id;
            __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["removeCookies"]('order_id');
            __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["removeCookies"]('pay_type');
            let post = {
                order_id: order_id,
                payment_charge_type: payment_charge_type,
                success_url: __WEBPACK_IMPORTED_MODULE_2__config_index__["node_web_host_2c_whole"] + '/order_detail?id=' + order_id
            };
            if (pay_type == 'wechat') {
                if (__WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["isWxBrowser"]()) {
                    payment_charge_type = 'wechat_wechat_webpage';
                    if (__WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["getUrlParam"]('code')) {
                        post.payment_charge_type = payment_charge_type;
                        this.getWechatCode(post);
                        return;
                    }
                } else {
                    payment_charge_type = 'wechat_phone_webpage';
                }
            } else {
                if (__WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["isMobile"]()) {
                    payment_charge_type = 'alipay_phone_webpage';
                } else {
                    payment_charge_type = 'alipay_pc_webpage';
                }
            }
            post.payment_charge_type = payment_charge_type;
            this.sendOrderPayRequest(post);
        },
        sendOrderPayRequest(post) {
            console.log('------payOrder requset------');
            __WEBPACK_IMPORTED_MODULE_4__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_4__library_request_index__["map_route_api_2c"].API_Order_PayOrder,
                client_type: __WEBPACK_IMPORTED_MODULE_2__config_index__["node_web_client_type_2c"],
                params: post,
                success_function: data => {
                    console.log('pingxx return success');
                    __WEBPACK_IMPORTED_MODULE_0_pingpp_js___default.a.createPayment(data.result['payment_charge_obj'], result => {
                        if (result === 'success') {
                            setTimeout(function () {
                                if (post.order_id) {
                                    window.location.replace('/order_detail?id=' + post.order_id);
                                } else {
                                    window.location.replace('/order');
                                }
                            }, 1000);
                        } else {
                            setTimeout(function () {
                                if (post.order_id) {
                                    window.location.replace('/order_detail?id=' + post.order_id);
                                } else {
                                    window.location.replace('/order');
                                }
                            }, 1000);
                        }
                    });
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr___default.a().error(data.message);
                    // setTimeout(function(){
                    //     if(post.order_id){
                    //         window.location.replace('/order_detail?id=' + post.order_id)
                    //     }else{
                    //         window.location.replace('/order')
                    //     }
                    // },1000)
                }
            });
        },
        getWechatCode(post) {
            let code = __WEBPACK_IMPORTED_MODULE_3__library_tools_index_js__["getUrlParam"]('code');
            __WEBPACK_IMPORTED_MODULE_4__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_4__library_request_index__["map_route_api_2c"].API_Consumer_GetWechatOpenId,
                client_type: __WEBPACK_IMPORTED_MODULE_2__config_index__["node_web_client_type_2c"],
                params: {
                    code: code
                },
                success_function: data => {
                    post.open_id = data.result.open_id;
                    this.sendOrderPayRequest(post);
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_5__library_component_common_toastr___default.a().error(data.message);
                    setTimeout(function () {
                        if (post.order_id) {
                            window.location.replace('/order_detail?id=' + post.order_id);
                        } else {
                            window.location.replace('/order');
                        }
                    }, 1000);
                }
            });
        }
    }
});

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(25);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(924);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#hemayin-app',
    template: '<App/>',
    components: { App: _index2.default }
});

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(251);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b9e39f6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1016);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b9e39f6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/payment/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b9e39f6", Component.options)
  } else {
    hotAPI.reload("data-v-9b9e39f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[1174]);