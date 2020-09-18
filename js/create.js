webpackJsonp([5],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "operation-area-wrap" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.step === "create-edit" || _vm.step === "create-loading",
              expression: "step==='create-edit'||step==='create-loading'"
            }
          ],
          staticClass: "history-wrap"
        },
        [
          _c(
            "div",
            {
              class: _vm.historyIndex <= 0 ? "undo-wrap disabled" : "undo-wrap",
              on: { click: _vm.undoHandle }
            },
            [
              _c("i", { staticClass: "icon-undo" }),
              _vm._v(" "),
              _c("span", [_vm._v("撤销")])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class:
                _vm.historyIndex < _vm.historyList.length - 1
                  ? "restore-wrap"
                  : "restore-wrap disabled",
              on: { click: _vm.restoreHandle }
            },
            [
              _c("span", [_vm._v("恢复")]),
              _vm._v(" "),
              _c("i", { staticClass: "icon-restore" })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.mdseTypeComponentData &&
                (_vm.step == "create-edit" || _vm.step == "create-loading"),
              expression:
                "mdseTypeComponentData&&(step=='create-edit'||step=='create-loading')"
            }
          ],
          class: _vm.detailColorState
            ? "mdse-component-wrap detail-color-show"
            : "mdse-component-wrap"
        },
        [
          _vm._l(
            _vm.mdseTypeComponentData["mdse_type_component_image_list"],
            function(item, index) {
              return _c(
                "div",
                {
                  key: "component-" + index,
                  class:
                    index == _vm.activePieceIndex
                      ? "mdse-component-item active"
                      : "mdse-component-item",
                  on: {
                    click: function($event) {
                      return _vm.changeIndex(index)
                    }
                  }
                },
                [
                  _c("img", { attrs: { src: item.component_image_url } }),
                  _vm._v(" "),
                  _c("p", { staticClass: "mdse-component-name" }, [
                    _vm._v(_vm._s(_vm.getMdseComponentName(item)))
                  ])
                ]
              )
            }
          ),
          _vm._v(" "),
          _vm.mdseTypeComponentData.mdse_type_color_option_list
            ? _c(
                "div",
                {
                  staticClass: "mdse-component-item detail-color-btn-wrap",
                  on: { click: _vm.toggleDetailColor }
                },
                [
                  _c("div", {
                    staticClass: "detail-color",
                    style: { backgroundColor: "#" + _vm.detailColor }
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "mdse-component-name" }, [
                    _vm._v("细节颜色")
                  ])
                ]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.step === "create-edit" || _vm.step === "create-loading",
              expression: "step==='create-edit'||step==='create-loading'"
            }
          ],
          staticClass: "show-area-wrap"
        },
        [
          _c("div", { staticClass: "component-bg-color" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "image-wrap", style: _vm.getBgBackground() },
            [
              _c("div", { staticClass: "line-top" }),
              _vm._v(" "),
              _c("img", {
                staticClass: "component-img",
                attrs: {
                  src:
                    _vm.mdseTypeComponentData["mdse_type_component_image_list"][
                      _vm.activePieceIndex
                    ]["component_image_url"]
                }
              }),
              _vm._v(" "),
              _c("canvas", {
                attrs: { id: "canvas", width: "600", height: "600" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "line-bottom" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "move-wrap" }, [
            _c(
              "div",
              { staticClass: "hammer-wrap", style: _vm.getCanvasMoveStyle() },
              [
                _c(
                  "Hammer",
                  {
                    attrs: {
                      pinchstart: _vm.pinchstart,
                      pinchmove: _vm.pinchmove,
                      pinchend: _vm.pinchend,
                      rotatestart: _vm.rotatestart,
                      rotatemove: _vm.rotatemove,
                      rotateend: _vm.rotateend,
                      panstart: _vm.panstart,
                      panmove: _vm.panmove,
                      panend: _vm.panend
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "canvas-move active",
                        on: {
                          mousedown: function($event) {
                            return _vm.handleClick($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "canvas-border-wrap",
                            attrs: { "data-movetype": "move" }
                          },
                          [
                            _c("span", [_c("i", { staticClass: "lt" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "t" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "rt" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "l" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "r" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "lb" })]),
                            _vm._v(" "),
                            _c("span", [_c("i", { staticClass: "b" })]),
                            _vm._v(" "),
                            _c("span", [
                              _c("i", {
                                staticClass: "rb icon-rotate",
                                attrs: { "data-movetype": "zoom" }
                              })
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        !_vm.currentMdseTypeDraft["component_list"][
                          _vm.activePieceIndex
                        ]["component_data"]["artwork"].pixel
                          ? _c(
                              "div",
                              {
                                staticClass: "not-enough",
                                on: { click: _vm.setRightPixel }
                              },
                              [_vm._v("像素不足")]
                            )
                          : _vm._e()
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.step == "create-result"
        ? _c("div", { staticClass: "create-result-wrap" }, [
            _c("div", { staticClass: "cover-wrap" }, [
              _c(
                "div",
                { ref: "wrap", staticClass: "cover-img" },
                [
                  _c(
                    "Hammer",
                    {
                      attrs: {
                        swipeleft: _vm.swipeleft,
                        swiperight: _vm.swiperight
                      }
                    },
                    [
                      _c(
                        "ul",
                        { ref: "slide", staticClass: "img-list" },
                        _vm._l(
                          _vm.createResult.mdseinfo_generate_image_list,
                          function(item, index) {
                            return _c("li", {
                              key: "create-result-img-" + index,
                              staticClass: "img-item",
                              style: {
                                backgroundImage:
                                  "url(" + item["generate_image_url"] + ")"
                              }
                            })
                          }
                        ),
                        0
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "cover-slide" },
                _vm._l(_vm.createResult.mdseinfo_generate_image_list, function(
                  item,
                  index
                ) {
                  return _c("span", {
                    key: "slider-" + index,
                    class: _vm.activeResultIndex == index ? "active" : "",
                    style: {
                      width:
                        (1 /
                          _vm.createResult.mdseinfo_generate_image_list
                            .length) *
                          100 +
                        "%",
                      left:
                        (1 /
                          _vm.createResult.mdseinfo_generate_image_list
                            .length) *
                          100 *
                          index +
                        "%"
                    },
                    on: {
                      click: function($event) {
                        return _vm.sliderClick(index)
                      }
                    }
                  })
                }),
                0
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.createToolBarState,
              expression: "createToolBarState"
            }
          ],
          staticClass: "create-tool-bar-wrap"
        },
        [
          _c("div", { staticClass: "create-tool-bar-content" }, [
            _c(
              "ul",
              {
                staticClass: "create-tool-bar-list",
                style: { width: _vm.tools.isMobile() ? "116%" : "100%" }
              },
              [
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item fill",
                    on: { click: _vm.toggleBgColor }
                  },
                  [
                    _c("span", {
                      staticClass: "bg-color",
                      style: { backgroundColor: "#" + _vm.bgColor }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("底色")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item",
                    on: { click: _vm.btnReset }
                  },
                  [
                    _c("i", { staticClass: "icon-reset" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("重置")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item",
                    on: { click: _vm.btnCenter }
                  },
                  [
                    _c("i", { staticClass: "icon-center" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("居中")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item",
                    on: { click: _vm.btnFlipH }
                  },
                  [
                    _c("i", { staticClass: "icon-mirror" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("左右翻转")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item",
                    on: { click: _vm.btnFlopV }
                  },
                  [
                    _c("i", { staticClass: "icon-mirror2" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("垂直翻转")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "create-tool-bar-list-item",
                    on: { click: _vm.btnCopy }
                  },
                  [
                    _c("i", { staticClass: "icon-copy" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("复制")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    class: _vm.tools.haveSomething(_vm.copyInfo)
                      ? "create-tool-bar-list-item"
                      : "create-tool-bar-list-item empty",
                    on: { click: _vm.btnPaste }
                  },
                  [
                    _c("i", { staticClass: "icon-paste" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text" }, [_vm._v("粘贴")])
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.bgColorState
        ? _c("div", { staticClass: "select-color-wrap bg-color" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "color-picker-wrap" },
              [
                _c("ColorPicker", {
                  attrs: { color: _vm.bgColor },
                  on: { onChange: _vm.onBgColorChange }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "select-color-btn-wrap" }, [
              _c("span", {
                staticClass: "icon-cross",
                on: { click: _vm.cancelSetBgColor }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "icon-done",
                on: { click: _vm.updateBgColor }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.detailColorState
        ? _c("div", { staticClass: "select-color-wrap detail-color" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "color-picker-wrap" },
              [
                _c("ColorPicker", {
                  attrs: { color: _vm.detailColor },
                  on: { onChange: _vm.onDetailColorChange }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "select-color-btn-wrap" }, [
              _c("span", {
                staticClass: "icon-cross",
                on: { click: _vm.cancelSetDetailColor }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "icon-done",
                on: { click: _vm.updateDetailColor }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-btn-wrap" }, [
        _c(
          "span",
          {
            class: _vm.step == "create-result" ? "" : "active",
            on: { click: _vm.toggleCreateToolBar }
          },
          [_vm._v("编辑")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            class: _vm.step == "create-result" ? "active" : "",
            on: { click: _vm.createMdseInfo }
          },
          [_vm._v("预览")]
        ),
        _vm._v(" "),
        _c("span", { on: { click: _vm.saveMdseInfo } }, [_vm._v("保存")])
      ]),
      _vm._v(" "),
      _vm.step == "create-loading" ? _c("Loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _vm._v("\n            作品填满裁片时"),
      _c("br"),
      _vm._v("\n            是看不到底色的哦\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _vm._v("\n            细节颜色应用到包边"),
      _c("br"),
      _vm._v("\n            拉链等，预览可查看效果\n        ")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cca2d4d0", esExports)
  }
}

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "color-picker" } }, [
      _c("input", { attrs: { type: "hidden", id: "color" } })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dd3d5a56", esExports)
  }
}

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loading-wrap" }, [
      _c("div", { staticClass: "center-position" }, [
        _c("div", { staticClass: "line-scale" }, [
          _c("div"),
          _vm._v(" "),
          _c("div"),
          _vm._v(" "),
          _c("div"),
          _vm._v(" "),
          _c("div"),
          _vm._v(" "),
          _c("div")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "loading-text" })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e9ce5af6", esExports)
  }
}

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "select-type-container" }, [
    _vm.mdseTypeData
      ? _c("div", { staticClass: "select-type-wrap" }, [
          _c("div", { staticClass: "header" }, [
            _c("div", { staticClass: "close-wrap max-limit" }, [
              _c("span", { on: { click: _vm.closeHandle } }, [_vm._v("关闭")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "title" }, [_vm._v("选择要定制的商品")]),
            _vm._v(" "),
            _c("div", { staticClass: "tip" }, [_vm._v("Tip  勾选后会自动设计")])
          ]),
          _vm._v(" "),
          _c("div", {}, [
            _c(
              "div",
              { staticClass: "nav-list" },
              _vm._l(_vm.mdseTypeData, function(item, index) {
                return _c(
                  "div",
                  {
                    key: "nav-item-" + index,
                    class:
                      index == _vm.activeIndex ? "nav-item active" : "nav-item",
                    on: {
                      click: function($event) {
                        return _vm.setActiveIndex(index)
                      }
                    }
                  },
                  [
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(
                          item.mdse_group_list[0]["mdse_group_list"][0][
                            "mdse_group_name"
                          ]
                        )
                      }
                    })
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _vm.mdseTypeData[_vm.activeIndex]
              ? _c(
                  "div",
                  { staticClass: "mdse-type-list" },
                  _vm._l(
                    _vm.mdseTypeData[_vm.activeIndex]["mdse_group_list"],
                    function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "type-item-" + index,
                          staticClass: "mdse-type-item"
                        },
                        [
                          _c(
                            "div",
                            {
                              class:
                                _vm.autoDesignArr.indexOf(item.mdse_type_id) >
                                -1
                                  ? "check-wrap checked"
                                  : "check-wrap",
                              on: {
                                click: function($event) {
                                  return _vm.setAutoDesign(item.mdse_type_id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-done" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              key: _vm.getImage(item),
                              class:
                                _vm.autoDesigningArr.indexOf(
                                  item.mdse_type_id
                                ) < 0
                                  ? "img-wrap"
                                  : "img-wrap designing",
                              style: {
                                backgroundImage:
                                  "url(" + _vm.getImage(item) + ")"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.setAutoDesign(item.mdse_type_id)
                                }
                              }
                            },
                            [
                              _vm.autoDesigningArr.indexOf(item.mdse_type_id) >
                              -1
                                ? _c("img", {
                                    attrs: {
                                      src: __webpack_require__(819)
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("h3", {
                            staticClass: "title text-overflow",
                            domProps: {
                              textContent: _vm._s(item.mdse_type_name)
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "price" }, [
                            _vm._v("￥ " + _vm._s(_vm.getMinPrice(item)))
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              class:
                                _vm.autoDesigningArr.indexOf(
                                  item.mdse_type_id
                                ) < 0
                                  ? "edit"
                                  : "designing",
                              on: {
                                click: function($event) {
                                  _vm.autoDesigningArr.indexOf(
                                    item.mdse_type_id
                                  ) < 0
                                    ? _vm.getMdseTypeComponent(
                                        item.mdse_type_id
                                      )
                                    : function() {}
                                }
                              }
                            },
                            [
                              _vm.autoDesigningArr.indexOf(item.mdse_type_id) <
                              0
                                ? _c("span", [_vm._v("编辑")])
                                : _c("span", [
                                    _vm._v("设计中"),
                                    _c("span", { staticClass: "dotting" })
                                  ])
                            ]
                          )
                        ]
                      )
                    }
                  ),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "save-btn-wrap max-limit",
                on: { click: _vm.saveMdseinfo }
              },
              [
                _c("span", [
                  _vm._v(
                    "保存 " +
                      _vm._s(
                        _vm.autoDesignArr.length > 0
                          ? "(" + _vm.autoDesignArr.length + ")"
                          : ""
                      )
                  )
                ])
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fa2454b0", esExports)
  }
}

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0b9c8ecd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08a5a733\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08a5a733\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(668);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3ee9764d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-138ddb3e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-138ddb3e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(756);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("a0ba9e04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cca2d4d0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cca2d4d0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(760);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b3a59380", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9ce5af6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9ce5af6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(763);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("313549eb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa2454b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa2454b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(439);


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colorpicker_min_js__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colorpicker_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__colorpicker_min_js__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['color'],
    mounted() {
        let _this = this;
        let colorPicker = new __WEBPACK_IMPORTED_MODULE_0__colorpicker_min_js___default.a({
            place: 'color-picker',
            size: 215,
            method: 'triangle',
            input: 'color',
            color: '#' + this.color
        });

        // set size options to ColorPicker

        colorPicker.getWheel().width = 30;
        colorPicker.getSvFigCursor().radius = 10;
        colorPicker.getWheelCursor().height = 10;
        colorPicker.getWheelCursor().lineWeight = 1;
        colorPicker.getWheel().startAngle = 0;
        colorPicker.getWheel().outerStrokeStyle = 'rgba(0,0,0,0)';
        colorPicker.getWheel().innerStrokeStyle = 'rgba(0,0,0,0)';

        // update to applay size options

        colorPicker.updateView(true);
        colorPicker.addUserEvent('change', function () {
            let colorObject = {
                HEX: colorPicker.getCurColorHex(),
                RGB: colorPicker.getCurColorRgb()
            };
            _this.onChange(colorObject);
        });
    },
    methods: {
        onChange(val) {
            this.$emit('onChange', val);
        }
    }
});

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clone__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_component_common_hammer_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ColorPicker_index_vue__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_index_vue__ = __webpack_require__(856);
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










/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['mdseTypeComponentData', 'currentMdseTypeDraft', 'artworkDetail', 'step', 'createResult', 'mainColor'],
    data() {
        return {
            tools: __WEBPACK_IMPORTED_MODULE_1__library_tools_index__,
            activePieceIndex: 0, // 当前选中裁片的index                
            imgRandom: '?t=' + Math.random(),
            createToolBarState: false, // 编辑工具列表状态
            bgColor: '',
            bgColorState: false,
            detailColor: '',
            detailColorState: false,
            quitState: false,
            historyList: [],
            historyIndex: 0,
            lastRotateValue: 0,
            lastScaleValue: 0,
            activeResultIndex: 0,
            copyInfo: null,
            showAreaWidth: 0
        };
    },
    components: {
        Hammer: __WEBPACK_IMPORTED_MODULE_2__library_component_common_hammer_index__["a" /* default */],
        ColorPicker: __WEBPACK_IMPORTED_MODULE_3__ColorPicker_index_vue__["a" /* default */],
        Loading: __WEBPACK_IMPORTED_MODULE_4__loading_index_vue__["a" /* default */]
    },
    mounted() {
        this.startDraw();
        this.saveHistory();
        this.setBgColor();
        this.detailColor = this.getDetailColor();
        let window_width = $(window).width() > 800 ? 800 : $(window).width();
        $('.show-area-wrap').css({
            transform: 'translate(-50%,-50%) scale(' + window_width / 600 + ')'
        });
        this.showAreaWidth = window_width;
    },
    updated() {
        this.onDraw();
    },
    methods: {
        setBgColor() {
            this.bgColor = this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.background.bg_color;
        },
        resetColor() {
            this.bgColor = this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.background.bg_color;
            this.detailColor = this.getDetailColor();
        },
        // 撤销
        undoHandle() {
            if (this.historyIndex <= 0) {
                return;
            }
            this.historyIndex = this.historyIndex - 1;
            this.$nextTick(function () {
                this.updateMdseTypeDraft(__WEBPACK_IMPORTED_MODULE_0_clone___default()(this.historyList[this.historyIndex]), 'history');
                this.$nextTick(function () {
                    this.resetColor();
                });
            });
        },
        // 恢复
        restoreHandle() {
            if (this.historyIndex >= this.historyList.length - 1) {
                return;
            }
            this.historyIndex = this.historyIndex + 1;
            this.updateMdseTypeDraft(__WEBPACK_IMPORTED_MODULE_0_clone___default()(this.historyList[this.historyIndex]), 'history');
            this.$nextTick(function () {
                this.resetColor();
            });
        },
        saveHistory() {
            this.historyList.splice(this.historyIndex + 1);
            this.historyList.push(__WEBPACK_IMPORTED_MODULE_0_clone___default()(this.currentMdseTypeDraft));
            this.$nextTick(function () {
                this.historyIndex = this.historyList.length - 1;
            });
        },
        saveMdseInfo() {
            this.$emit('saveMdseInfo', this.mdseTypeComponentData.mdse_type_id);
        },
        sliderClick(index) {
            let wrap = this.$refs.wrap;
            let slide = this.$refs.slide;
            let tab = this.$refs.tab;
            this.activeResultIndex = index;
            $(slide).css({
                transform: 'translate(-' + $(wrap).width() * index + 'px, 0)'
            });
        },

        swipeleft() {
            let wrap = this.$refs.wrap;
            let slide = this.$refs.slide;
            let tab = this.$refs.tab;
            if (this.activeResultIndex >= this.createResult.mdseinfo_generate_image_list.length - 1) {
                return;
            }
            ++this.activeResultIndex;
            $(slide).css({
                transform: 'translate(-' + $(wrap).width() * this.activeResultIndex + 'px, 0)'
            });
        },

        swiperight() {
            let wrap = this.$refs.wrap;
            let slide = this.$refs.slide;
            let tab = this.$refs.tab;
            if (this.activeResultIndex <= 0) {
                return;
            }
            --this.activeResultIndex;
            $(slide).css({
                transform: 'translate(-' + $(wrap).width() * this.activeResultIndex + 'px, 0)'
            });
        },
        createMdseInfo() {
            this.createToolBarState = false;
            this.$emit('createMdseInfo');
        },
        toggleBgColor() {
            this.bgColorState = !this.bgColorState;
            this.detailColorState = false;
        },
        toggleDetailColor() {
            this.detailColorState = !this.detailColorState;
            this.bgColorState = false;
        },
        updateBgColor() {
            let obj = {
                bg_color: this.bgColor
            };
            let draftObj = this.currentMdseTypeDraft;
            draftObj.component_list[this.activePieceIndex]['component_data']['background'] = obj;
            this.updateMdseTypeDraft(draftObj);
            this.bgColorState = false;
        },
        updateDetailColor() {
            let draftObj = this.currentMdseTypeDraft;
            for (const key in draftObj) {
                if (key !== 'component_list' && key !== 'mdse_type_id') {
                    draftObj[key] = this.detailColor;
                }
            }
            this.updateMdseTypeDraft(draftObj);
            this.detailColorState = false;
        },
        cancelSetBgColor() {
            this.bgColorState = false;
            let originColor = this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.background.bg_color;
            this.bgColor = originColor;
        },
        cancelSetDetailColor() {
            this.detailColorState = false;
            let originColor = this.getDetailColor();
            this.detailColor = originColor;
        },
        getDetailColor() {
            let draftObj = this.currentMdseTypeDraft;
            for (const key in draftObj) {
                if (key !== 'component_list' && key !== 'mdse_type_id') {
                    return draftObj[key];
                }
            }
        },
        onBgColorChange(colorObj) {
            this.bgColor = colorObj.HEX.split('#')[1];
        },
        onDetailColorChange(colorObj) {
            this.detailColor = colorObj.HEX.split('#')[1];
        },
        toggleCreateToolBar() {
            this.setStep('create-edit');
            this.createToolBarState = !this.createToolBarState;
        },
        // 设置当前编辑的裁片
        changeIndex(index) {
            this.detailColorState = false;
            if (index == this.activePieceIndex) {
                return;
            }
            this.activePieceIndex = index;
            this.$nextTick(function () {
                this.setBgColor();
            });
        },
        getMdseComponentName(item) {
            switch (item.component_name) {
                case 'front':
                    return '前片';
                    break;
                case 'back':
                    return '后片';
                    break;
                case 'left':
                    return '左片';
                    break;
                case 'right':
                    return '右片';
                    break;
                default:
                    break;
            }
        },
        getBgBackground() {
            return {
                background: this.currentMdseTypeDraft.component_list[this.activePieceIndex]['component_data']['background'].bg_color ? '#' + this.currentMdseTypeDraft.component_list[this.activePieceIndex]['component_data']['background'].bg_color : 'none'
            };
        },
        getCanvasMoveStyle() {
            let currentData = this.currentMdseTypeDraft.component_list[this.activePieceIndex]['component_data'].artwork;
            return {
                left: currentData.artwork_positionX + 'px',
                top: currentData.artwork_positionY + 'px',
                width: currentData.artwork_width * (currentData.width_scale / 100) + 'px',
                height: currentData.artwork_height * (currentData.height_scale / 100) + 'px',
                transform: 'rotate(' + currentData.artwork_rotate + 'deg)'
            };
        },
        // 判断像素
        overPixel(mdsedraft) {
            let activePieceIndex = this.activePieceIndex;
            let pieceDraftObj = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;

            let factory_width = this.mdseTypeComponentData['mdse_type_component_image_list'][activePieceIndex]['factory_width'];
            let design_width = this.mdseTypeComponentData['mdse_type_component_image_list'][activePieceIndex]['design_width'];
            let max_radio = design_width / factory_width * 500;
            this.max_radio = max_radio;
            let real_radio = mdsedraft.width_scale;
            return real_radio <= max_radio;
        },

        // 设置正确的缩放的比例
        setRightPixel() {
            this.overPixel(this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.artwork);
            this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.artwork.width_scale = this.max_radio;
            this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.artwork.height_scale = this.max_radio;
            this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.artwork.pixel = this.overPixel(this.currentMdseTypeDraft.component_list[this.activePieceIndex].component_data.artwork);
            this.btnCenter();
        },

        // 重置
        btnReset() {
            let artwork_width = this.artworkDetail.artwork_origin_width;
            let artwork_height = this.artworkDetail.artwork_origin_height;
            let pieceDraftObj = this.currentMdseTypeDraft;
            let activePieceIndex = this.activePieceIndex;

            let mdse_type_list = this.mdseTypeComponentData['mdse_type_component_image_list'][activePieceIndex];
            let artwork_scale = 100;
            let artwork_positionX = 0;
            let artwork_positionY = 0;
            let design_width = mdse_type_list['design_width'];
            let design_height = mdse_type_list['design_height'];
            if (artwork_width > artwork_height) {
                if (design_width >= design_height) {
                    artwork_scale = design_height / artwork_height * 100;
                } else {
                    artwork_scale = design_height / artwork_height * 100;
                }
                artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
            } else {
                if (design_width >= design_height) {
                    artwork_scale = design_width / artwork_width * 100;
                } else {
                    artwork_scale = design_width / artwork_width * 100;
                }
                artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
            }
            let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
            let initRotate = Math.acos(artwork_width / initDiagonal);
            let factory_width = mdse_type_list['factory_width'];

            let max_radio = design_width / factory_width * 500;
            let pixel_bool = artwork_scale <= max_radio;

            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.width_scale = artwork_scale;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.height_scale = artwork_scale;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionX = artwork_positionX;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionY = artwork_positionY;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.pixel = pixel_bool;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_flipH = false;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_flopV = false;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_rotate = 0;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].background.bg_color = "fff";
            this.bgColor = 'fff';
            this.updateMdseTypeDraft(pieceDraftObj);
        },
        // 居中
        btnCenter() {
            // 获取裁片对应的草稿数据
            let activePieceIndex = this.activePieceIndex;
            let pieceDraftObj = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            let draftdata = this.currentMdseTypeDraft;
            let artworkW = pieceDraftObj.artwork_width * pieceDraftObj.width_scale / 100;
            let artworkH = pieceDraftObj.artwork_height * pieceDraftObj.height_scale / 100;

            // 将经过计算的新的图片位置更新到草稿数据中
            draftdata.component_list[activePieceIndex].component_data.artwork.artwork_positionX = (600 - artworkW) / 2;
            draftdata.component_list[activePieceIndex].component_data.artwork.artwork_positionY = (600 - artworkH) / 2;
            this.updateMdseTypeDraft(draftdata);
        },
        btnFlipH() {
            let activePieceIndex = this.activePieceIndex;
            let pieceDraftObj = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            let draftdata = this.currentMdseTypeDraft;
            draftdata.component_list[activePieceIndex].component_data.artwork.artwork_flipH = !pieceDraftObj.artwork_flipH;
            this.updateMdseTypeDraft(draftdata);
            this.$nextTick(function () {
                this.onDraw();
            });
        },
        btnFlopV() {
            let activePieceIndex = this.activePieceIndex;
            let pieceDraftObj = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            let draftdata = this.currentMdseTypeDraft;
            draftdata.component_list[activePieceIndex].component_data.artwork.artwork_flopV = !pieceDraftObj.artwork_flopV;
            this.updateMdseTypeDraft(draftdata);
            this.$nextTick(function () {
                this.onDraw();
            });
        },
        btnCopy() {
            let activePieceIndex = this.activePieceIndex;
            this.copyInfo = __WEBPACK_IMPORTED_MODULE_0_clone___default()(this.currentMdseTypeDraft.component_list[activePieceIndex].component_data);
        },
        btnPaste() {
            if (!__WEBPACK_IMPORTED_MODULE_1__library_tools_index__["haveSomething"](this.copyInfo)) {
                return;
            }
            let activePieceIndex = this.activePieceIndex;
            let pieceDraftObj = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data;
            let draftdata = this.currentMdseTypeDraft;
            draftdata.component_list[activePieceIndex].component_data = __WEBPACK_IMPORTED_MODULE_0_clone___default()(this.copyInfo);
            this.updateMdseTypeDraft(draftdata);
            this.$nextTick(function () {
                this.setBgColor();
                this.onDraw();
            });
        },
        handleClick(event) {
            if (__WEBPACK_IMPORTED_MODULE_1__library_tools_index__["isMobile"]()) {
                return false;
            }
            event.preventDefault();
            let activePieceIndex = this.activePieceIndex;
            let pieceDraft = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            this.artworkRotate = pieceDraft.artwork_rotate;

            this.borderCenterX = (pieceDraft.artwork_positionX + pieceDraft.artwork_width * pieceDraft.width_scale / 200) * this.showAreaWidth / 600;
            this.borderCenterY = (pieceDraft.artwork_positionY + pieceDraft.artwork_height * pieceDraft.height_scale / 200) * this.showAreaWidth / 600;

            this.parentsTop = $('.move-wrap').offset().top;
            this.parentsLeft = $('.move-wrap').offset().left;

            this.mouseDownX = event.clientX - this.parentsLeft;
            this.mouseDownY = event.clientY - this.parentsTop;

            this.initDiagonal = Math.sqrt(Math.pow(pieceDraft.artwork_width, 2) + Math.pow(pieceDraft.artwork_height, 2)) / 2;
            let nowDiagonal = this.getPointDistance({ x: this.mouseDownX, y: this.mouseDownY }, {
                x: this.borderCenterX,
                y: this.borderCenterY
            });
            let nowCosRotate = (this.mouseDownX - this.borderCenterX) / nowDiagonal;
            this.oldRotate = Math.acos(nowCosRotate) * 180 / Math.PI;

            if (this.mouseDownY - this.borderCenterY > 0) {
                this.oldRotate = -this.oldRotate;
            }
            switch ($(event.target).attr('data-movetype')) {
                case 'move':
                    this.isMoving = true;
                    this.isZooming = false;
                    this.isRotating = false;
                    break;
                case 'zoom':
                    this.isMoving = false;
                    this.isZooming = true;
                    this.isRotating = true;
                    break;
            }
            let _this = this;
            document.onmousemove = function (event) {
                _this.handleMove(event);
            };
        },

        handleMove(event) {
            event.preventDefault();
            let _this = this;
            let activePieceIndex = this.activePieceIndex;
            let pieceDraft = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;

            let eventX = event.clientX - _this.parentsLeft;
            let eventY = event.clientY - _this.parentsTop;

            let offsetX = eventX - _this.mouseDownX;
            let offsetY = eventY - _this.mouseDownY;
            if (_this.isMoving) {
                pieceDraft.artwork_positionX += offsetX;
                pieceDraft.artwork_positionY += offsetY;
                _this.mouseDownX = eventX;
                _this.mouseDownY = eventY;
            }
            if (_this.isRotating) {
                let newDiagonal = _this.getPointDistance({ x: eventX, y: eventY }, {
                    x: _this.borderCenterX,
                    y: _this.borderCenterY
                });
                let changeCosRotate = (eventX - _this.borderCenterX) / newDiagonal;
                let changeRotate = Math.acos(changeCosRotate) * 180 / Math.PI;
                if (eventY - _this.borderCenterY > 0) {
                    changeRotate = -changeRotate;
                }
                let newRotate = _this.artworkRotate + _this.oldRotate - changeRotate;
                if (newRotate > 180) {
                    newRotate = newRotate - 360;
                } else if (newRotate < -180) {
                    newRotate = 360 + newRotate;
                }
                pieceDraft.artwork_rotate = newRotate;
            }

            if (_this.isZooming) {
                let newDiagonal = _this.getPointDistance({ x: eventX, y: eventY }, {
                    x: _this.borderCenterX,
                    y: _this.borderCenterY
                });
                this.scaleChange(newDiagonal / (_this.initDiagonal * this.showAreaWidth / 600) * 100);
            }
            document.onmouseup = function () {
                _this.isZooming = false;
                _this.isRotating = false;
                document.onmousemove = null;
            };
        },
        // 手势操作
        // 开始缩放记录数据
        pinchstart(e) {
            this.lastScaleValue = e.scale;
        },

        // 缩放中更新相应草稿数据
        pinchmove(e) {
            if (!__WEBPACK_IMPORTED_MODULE_1__library_tools_index__["isMobile"]()) {
                return;
            }
            let pieceDraftObj = this.currentMdseTypeDraft;
            let activePieceIndex = this.activePieceIndex;

            let value = pieceDraftObj.component_list[activePieceIndex].component_data.artwork.width_scale;
            this.scaleChange(value / this.lastScaleValue * e.scale);
            this.lastScaleValue = e.scale;
        },
        pinchend() {
            let draftObj = this.currentMdseTypeDraft;
            this.updateMdseTypeDraft(draftObj);
        },

        // 开始旋转记录数据
        rotatestart(e) {
            this.lastRotateValue = e.rotation;
        },

        // 旋转中更新相应草稿数据
        rotatemove(e) {
            if (!__WEBPACK_IMPORTED_MODULE_1__library_tools_index__["isMobile"]()) {
                return;
            }
            let pieceDraftObj = this.currentMdseTypeDraft;
            let activePieceIndex = this.activePieceIndex;

            let value = pieceDraftObj.component_list[activePieceIndex].component_data.artwork.artwork_rotate;
            let pieceDraft = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            pieceDraft.artwork_rotate = __WEBPACK_IMPORTED_MODULE_1__library_tools_index__["rotateMagic"](value + e.rotation - this.lastRotateValue);
            this.lastRotateValue = e.rotation;
        },
        rotateend() {
            let draftObj = this.currentMdseTypeDraft;
            this.updateMdseTypeDraft(draftObj);
        },
        // 开始移动记录数据
        panstart(e) {
            this.deltaX = e.deltaX;
            this.deltaY = e.deltaY;
        },

        // 开始移动更新相应草稿数据
        panmove(e) {
            if (!__WEBPACK_IMPORTED_MODULE_1__library_tools_index__["isMobile"]()) {
                return;
            }
            let activePieceIndex = this.activePieceIndex;
            let pieceDraft = this.currentMdseTypeDraft.component_list[activePieceIndex].component_data.artwork;
            pieceDraft.artwork_positionX += (e.deltaX - this.deltaX) * this.floorNumber(600 / this.showAreaWidth);
            pieceDraft.artwork_positionY += (e.deltaY - this.deltaY) * this.floorNumber(600 / this.showAreaWidth);
            this.deltaX = e.deltaX;
            this.deltaY = e.deltaY;
        },

        // 移动结束
        panend() {
            let draftObj = this.currentMdseTypeDraft;
            this.updateMdseTypeDraft(draftObj);
        },

        floorNumber(number, isFloor) {
            if (isFloor) {
                return Math.floor(number * 100) / 100 - 0.01;
            } else {
                return number;
            }
        },

        getPointDistance(a, b) {
            let x1 = a.x,
                y1 = a.y,
                x2 = b.x,
                y2 = b.y;
            let dd = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            return dd;
        },
        // 缩放方法
        scaleChange(value) {
            // 获取裁片对应的草稿数据
            let pieceDraftObj = this.currentMdseTypeDraft;
            let activePieceIndex = this.activePieceIndex;

            let oldPositionX = pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionX;
            let oldPositionY = pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionY;

            // 旋转中心变化所产生的位置偏移量
            let offsetScaleX = (pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.width_scale - value) / 100;
            let offsetScaleY = (pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.height_scale - value) / 100;
            let offsetPosiitonX = offsetScaleX * pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_width / 2;
            let offsetPosiitonY = offsetScaleY * pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_height / 2;

            // 将经过计算的新的图片位置及缩放倍数更新到草稿数据中
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionX = oldPositionX + offsetPosiitonX;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.artwork_positionY = oldPositionY + offsetPosiitonY;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.width_scale = value;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.height_scale = value;
            pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork.pixel = this.overPixel(pieceDraftObj.component_list[activePieceIndex]['component_data'].artwork);
        },
        setStep(step) {
            this.$emit('setStep', step);
        },
        // 开始绘制
        startDraw() {
            let _this = this;
            let data = this.artworkDetail;
            let artworkDetail = {
                artwork_origin_width: data.artwork_origin_width,
                artwork_origin_height: data.artwork_origin_height,
                artwork_image_display_url: data.artwork_image_display_url + this.imgRandom
            };
            _this.initImgW = artworkDetail.artwork_origin_width;
            _this.initImgH = artworkDetail.artwork_origin_height;
            _this.theCanvas = document.getElementById('canvas');
            _this.ctx = _this.theCanvas.getContext('2d');
            _this.cvsH = _this.theCanvas.height;
            _this.cvsW = _this.theCanvas.width;
            _this.ctxRotate = 0;
            _this.PO = { x: 0, y: 0 };
            _this.artworkImg = new Image();
            // _this.artworkImg.crossOrigin = 'Anonymous'
            _this.artworkImg.onload = function () {
                // RGBaster.colors(_this.artworkImg, {
                //     success: function(payload) {
                //         // payload.dominant是主色，RGB形式表示
                //         _this.setMainColor(payload.dominant)
                //     }
                // });
                _this.onDraw();
            };
            _this.artworkImg.src = artworkDetail.artwork_image_display_url;
        },
        // 设置主色(滚条，包边，拉链，等颜色)
        setMainColor(color) {
            let r = color;
            let pattern = /\(([^()]+)\)/g;
            while (r = pattern.exec(color)) {
                let hex = this.rgbToHex(...r[1].split(','));
                let draftObj = this.currentMdseTypeDraft;
                for (const key in draftObj) {
                    if (key != 'component_list' && key != 'mdse_type_id') {
                        draftObj[key] = hex;
                    }
                }
                this.updateMdseTypeDraft(draftObj);
            }
        },
        rgbToHex(red, green, blue) {
            let rgb = blue | green << 8 | red << 16;
            return (0x1000000 + rgb).toString(16).slice(1);
        },
        // 更新草稿数据
        updateMdseTypeDraft(draftObj, type) {
            if (type != 'history') {
                this.saveHistory();
            }
            this.$emit('updateMdseTypeDraft', draftObj);
        },
        // 绘制中
        onDraw() {
            if (!this.ctx) {
                return;
            }
            let draftdata = this.currentMdseTypeDraft.component_list[this.activePieceIndex]['component_data'].artwork;
            let imgRotate = draftdata.artwork_rotate / 180 * Math.PI;
            let imgWidthZoom = draftdata.width_scale / 100;
            let imgHeightZoom = draftdata.height_scale / 100;
            // 图片尺寸缩放
            this.artworkImgW = this.initImgW * imgWidthZoom;
            this.artworkImgH = this.initImgH * imgHeightZoom;
            this.artworkFlipH = draftdata.artwork_flipH;
            this.artworkFlipV = draftdata.artwork_flopV;
            this.PO = {
                x: draftdata.artwork_positionX + this.artworkImgW / 2,
                y: draftdata.artwork_positionY + this.artworkImgH / 2
            };
            this.ctx.save();
            this.ctx.translate(this.PO.x, this.PO.y);
            this.ctx.rotate(imgRotate);
            this.DrawArtworkImg();

            this.ctx.restore();
        },

        // 绘制方法
        DrawArtworkImg() {
            // 每次绘制清除上一次的数据
            this.ctx.clearRect(-2 * this.cvsW, -2 * this.cvsH, 4 * this.cvsW, 4 * this.cvsH);
            // 绘制图片，如有翻转操作则先临时保存画布坐标系统的状态，翻转坐标系后绘制图片，再将坐标系状态恢复到save之前设置的状态，避免翻转操作对其他操作产生影响
            // 垂直/水平翻转
            this.ctx.save();
            if (this.artworkFlipV && this.artworkFlipH) {
                this.ctx.translate(this.artworkImgW, this.artworkImgH);
                this.ctx.scale(-1, -1);
                this.ctx.translate(this.artworkImgW, this.artworkImgH);
            }
            // 水平翻转
            else if (this.artworkFlipH) {
                    this.ctx.translate(this.artworkImgW, 0);
                    this.ctx.scale(-1, 1);
                    this.ctx.translate(this.artworkImgW, 0);
                }
                // 垂直翻转
                else if (this.artworkFlipV) {
                        this.ctx.translate(0, this.artworkImgH);
                        this.ctx.scale(1, -1);
                        this.ctx.translate(0, this.artworkImgH);
                    }
            this.ctx.drawImage(this.artworkImg, -this.artworkImgW / 2, -this.artworkImgH / 2, this.artworkImgW, this.artworkImgH);
            this.ctx.restore();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            arr: ['稍等片刻，您的作品就能成为河马印的颜值担当', '等得不耐烦，先去吃包辣条吧', '今天天气真好，你去哪里耍', '据说长得好的人，耐心也一样好', '我想听你给我唱首歌', '下一个要开个展的人就是你', '掐指一算，您的作品就要大卖了', '等得好辛苦，不如起来嗨', '听说，你想静静', '等待总是漫长的，想想你的TA', '跟着我左手右手一个慢动作', '爱等待的人，运气不会差', '爆款大作就要横空出世，请耐住寂寞', '正在百米冲刺中，为它呐喊助威吧'],
            arrIndex: 0
        };
    },
    mounted() {
        let obj = this;
        if (obj.arrIndex < obj.arr.length) {
            $('.loading-text').html(obj.arr[obj.arrIndex]);
        } else {
            obj.arrIndex = -1;
        }
        obj.go = window.setTimeout(function () {
            obj.arrIndex = ++obj.arrIndex;
        }, 2000);
    },
    destroyed() {
        window.clearTimeout(this.go);
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_component_2c_mdseinfoList_index_vue__ = __webpack_require__(97);
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


/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['autoDesignArr', 'artworkDetail'],
    data() {
        return {
            mdseinfoList: []
        };
    },
    components: {
        MdseInfoList: __WEBPACK_IMPORTED_MODULE_0__library_component_2c_mdseinfoList_index_vue__["a" /* default */]
    },
    mounted() {
        this.artworkDetail.related_mdseinfo_list.map(item => {
            if (this.autoDesignArr.indexOf(item.mdse_type_id) > -1) {
                this.mdseinfoList.push(item);
            }
        });
    },
    methods: {
        closeHandle() {
            window.history.go(-1);
        }
    }
});

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__library_component_common_toastr_index__);
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




/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['mdseTypeData', 'activeIndex', 'artworkDetail', 'autoDesignArr', 'autoDesigningArr'],
    data() {
        return {};
    },
    components: {},
    updated() {
        if ($('.mdse-type-list').length) {
            let height = $(window).height() - 165;
            $('.mdse-type-list').css({
                'maxHeight': height
            });
        }
    },
    methods: {
        closeHandle() {
            window.history.go(-1);
        },
        saveMdseinfo() {
            if (this.autoDesignArr.length <= 0) {
                new __WEBPACK_IMPORTED_MODULE_1__library_component_common_toastr_index___default.a().info('没有需要保存的商品哦！');
                return;
            }
            if (this.autoDesigningArr.length > 0) {
                new __WEBPACK_IMPORTED_MODULE_1__library_component_common_toastr_index___default.a().info('请等待商品设计完成哦！');
                return;
            }
            this.$emit('setStep', 'save-page');
        },
        getMinPrice(item) {
            let priceArr = [];
            item.mdse_type_list.map(mdse_type_list_item => {
                priceArr.push(mdse_type_list_item.default_retail_price);
            });
            return Math.min.apply(null, priceArr);
        },
        getStatus(item) {
            let status = '';
            if (this.artworkDetail) {
                this.artworkDetail.related_mdseinfo_list.map(mdseinfo_item => {
                    if (mdseinfo_item.mdse_type_id == item.mdse_type_id) {
                        status = mdseinfo_item.mdseinfo_status;
                    }
                });
                return status == 'published';
            }
        },
        getImage(item) {
            let imageUrl = '';
            if (this.artworkDetail) {
                this.artworkDetail.related_mdseinfo_list.map(mdseinfo_item => {
                    if (mdseinfo_item.mdse_type_id == item.mdse_type_id && this.autoDesigningArr.indexOf(item.mdse_type_id) < 0) {
                        imageUrl = __WEBPACK_IMPORTED_MODULE_0__library_tools_index__["getCoverImgOfMdse"](mdseinfo_item.mdseinfo_generate_image_list);
                    }
                });
                imageUrl = imageUrl ? imageUrl : item.model_image_url;
                return imageUrl;
            }
        },
        goBack() {
            window.history.go(-1);
        },
        setActiveIndex(index) {
            this.$emit('setActiveIndex', index);
        },
        getMdseTypeComponent(mdse_type_id) {
            this.$emit('getMdseTypeComponent', mdse_type_id);
        },
        setAutoDesign(mdse_type_id) {
            this.$emit('setAutoDesign', mdse_type_id);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_request_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_request_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__library_request_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_tools_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_tools_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__library_tools_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_component_common_pageinit_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_component_2c_modal_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SelectType_index_vue__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__OperationArea_index__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SavePage_index_vue__ = __webpack_require__(857);
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
//
//













/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            mdseTypeData: null,
            activeIndex: 0,
            artworkDetail: null,
            autoDesignArr: [], // 自动设计
            autoDesigningArr: [], // 设计中    
            /*
                'select-type': 选择衍生品类别
                'create-tool-edit': 编辑作品（操作在里面控制）
                'create-loading': 加载中
                'create-result': 渲染完成
                'save-page': 添加到购物车完成
                'publish-complete': 发布完成
            */
            step: 'select-type', // 当前进度  
            mainColor: "#000", // 主色    
            mdseTypeComponentData: null, // 裁片信息
            currentMdseTypeDraft: null, // 草稿数据
            createResult: null, // 渲染结果
            isRequestOver: false,
            quitState: false,
            helpState: false
        };
    },
    components: {
        SelectType: __WEBPACK_IMPORTED_MODULE_6__SelectType_index_vue__["a" /* default */],
        OperationArea: __WEBPACK_IMPORTED_MODULE_7__OperationArea_index__["a" /* default */],
        SavePage: __WEBPACK_IMPORTED_MODULE_8__SavePage_index_vue__["a" /* default */],
        Modal: __WEBPACK_IMPORTED_MODULE_5__library_component_2c_modal_index__["a" /* default */]
    },
    mounted() {
        this.getMdseTypeCreateInfo();
        this.getArtworkDetail();
    },
    methods: {
        showHelpPage() {
            this.helpState = true;
        },
        hideHelpPage() {
            this.helpState = false;
        },
        showQuitModal() {
            this.quitState = true;
        },
        closeQuitModal() {
            this.quitState = false;
        },
        backHandle() {
            if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('tid')) {
                window.history.go(-1);
                return;
            }
            this.closeQuitModal();
            this.setStep('select-type');
        },
        updateMdseTypeDraft(draftObj, not) {
            this.currentMdseTypeDraft = draftObj, this.renderArtworkImg = not ? false : true; // 默认渲染作品图（实时渲染设置为true）
        },
        setStep(step) {
            this.step = step;
        },
        setAutoDesign(mdse_type_id) {
            let origin_arr = this.autoDesignArr;
            if (origin_arr.indexOf(mdse_type_id) > -1) {
                if (this.autoDesigningArr.indexOf(mdse_type_id) > -1) {
                    return;
                }
                origin_arr.splice(origin_arr.indexOf(mdse_type_id), 1);
                this.$nextTick(function () {
                    let _this = this;
                    setTimeout(function () {
                        _this.deleteMdseinfo(mdse_type_id);
                    });
                });
                this.autoDesignArr = origin_arr;
            } else {
                this.autoDesignArr.push(mdse_type_id);
                this.autoDesigningArr.push(mdse_type_id);
                this.$nextTick(function () {
                    if (this.autoDesigningArr.length <= 1) {
                        this.sendAutoDesginRequest();
                    }
                });
            }
        },
        deleteMdseinfo(mdse_type_id) {
            // find mdseinfo_id
            let mdseinfo_id;
            let array = this.artworkDetail.related_mdseinfo_list;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if (element.mdse_type_id == mdse_type_id) {
                    mdseinfo_id = element.mdseinfo_id;
                }
            }
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Mdseinfo_DeleteMdseinfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                params: {
                    mdseinfo_id: mdseinfo_id
                },
                success_function: data => {
                    this.getArtworkDetail();
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                }
            });
        },
        // 设置group active index
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        // 数据处理
        splitData(data) {
            data.sort(function (item_a, item_b) {
                if (item_a['display_rank'] - item_b['display_rank'] > 0) {
                    return 1;
                } else {
                    return -1;
                }
            });
            let arr = [{
                mdse_group_id: '',
                mdse_group_list: []
            }];
            let obj = {};
            data.map(item => {
                let index;
                obj = {
                    mdse_group_id: '',
                    mdse_group_list: []
                };
                let haveInArr = false;
                for (let i = 0; i < arr.length; i++) {
                    haveInArr = false;
                    const element = arr[i];
                    if (arr[i].mdse_group_id === item.mdse_group_id) {
                        index = i;
                        haveInArr = true;
                        break;
                    }
                }
                if (haveInArr) {
                    obj = {};
                    arr[index].mdse_group_list.push(item);
                } else {
                    obj.mdse_group_id = item.mdse_group_id;
                    obj.mdse_group_list.push(item);
                }
                if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["haveSomething"](obj)) {
                    arr.push(obj);
                }
            });
            arr.shift();
            arr.sort(function (item_a, item_b) {
                return item_a.mdse_group_list[0].mdse_group_list[0]['display_rank'] - item_b.mdse_group_list[0].mdse_group_list[0]['display_rank'] <= 0 ? -1 : 1;
            });
            this.mdseTypeData = __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["dataArrSort"](arr);
            this.$nextTick(function () {
                if (this.isRequestOver) {
                    this.toEditMdseinfo();
                } else {
                    this.isRequestOver = true;
                }
            });
        },
        // 是否存有草稿数据
        getDraftData(mdse_type_id) {
            let list = this.artworkDetail.related_mdseinfo_list;
            let draft_obj = {};
            // 如果有草稿数据
            list.forEach(function (element) {
                if (Number(element.mdse_type_id) === Number(mdse_type_id)) {
                    if (element.draft_obj) {
                        draft_obj = JSON.parse(element.draft_obj);
                    }
                }
            });
            return draft_obj;
        },
        // 初始化草稿数据(添加作品图层)
        getMdseTypeComponent(mdse_type_id) {
            let currentMdseTypeData = {};
            let draftdata = {};
            this.mdseTypeList.map(item => {
                if (Number(item.mdse_type_id) === Number(mdse_type_id)) {
                    currentMdseTypeData = item;
                }
            });

            draftdata = this.getDraftData(mdse_type_id);
            let data = this.mdseTypeList;
            for (let item in data) {
                // 根据mdse_type_id寻找所有裁片信息
                if (Number(data[item].mdse_type_id) === Number(mdse_type_id)) {
                    this.mdseTypeComponentData = data[item];
                }
            }
            if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["emptyObj"](draftdata)) {
                draftdata = {
                    mdse_type_id: mdse_type_id.toString(),
                    component_list: []

                    // 获取作品原始尺寸
                };let artwork_width = this.artworkDetail.artwork_origin_width;
                let artwork_height = this.artworkDetail.artwork_origin_height;
                // 判断草稿数据是否存在，如不存在则根据衍生品的裁片信息初始化草稿数据
                let mdse_piece_list = currentMdseTypeData['mdse_type_component_image_list'] || [];

                mdse_piece_list.forEach((element, index) => {
                    let component_name = element.component_name;
                    let artwork_scale = 100;
                    let artwork_positionX = 0;
                    let artwork_positionY = 0;
                    let design_width = element['design_width'];
                    let design_height = element['design_height'];
                    if (artwork_width > artwork_height) {
                        if (design_width >= design_height) {
                            artwork_scale = design_height / artwork_height * 100;
                        } else {
                            artwork_scale = design_height / artwork_height * 100;
                        }
                        artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                        artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
                    } else {
                        if (design_width >= design_height) {
                            artwork_scale = design_width / artwork_width * 100;
                        } else {
                            artwork_scale = design_width / artwork_width * 100;
                        }
                        artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                        artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
                    }
                    let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
                    let initRotate = Math.acos(artwork_width / initDiagonal);
                    let factory_width = element['factory_width'];
                    let max_radio = design_width / factory_width * 500;
                    let pixel_bool = artwork_scale <= max_radio;
                    let newWidth = initDiagonal * artwork_scale * Math.cos(Math.abs(initRotate));
                    let newHeight = initDiagonal * artwork_scale * Math.sin(Math.abs(initRotate));
                    let obj = {
                        component_name: component_name,
                        component_data: {
                            background: {
                                bg_color: 'fff'
                            },
                            artwork: {
                                component_name: component_name,
                                design_element_type: 'artwork',
                                design_element_uuid: this.artworkDetail.artwork_origin_uuid,
                                design_element_ext: this.artworkDetail.artwork_origin_ext,
                                design_element_display_uuid: this.artworkDetail.artwork_display_uuid,
                                design_element_display_ext: this.artworkDetail.artwork_display_ext,
                                artwork_width: artwork_width,
                                artwork_height: artwork_height,
                                width_scale: artwork_scale,
                                height_scale: artwork_scale,
                                artwork_rotate: 0,
                                artwork_position: {
                                    left: artwork_positionX + artwork_width * artwork_scale / 2 - newWidth / 2,
                                    top: artwork_positionY + artwork_height * artwork_scale / 2 - newHeight / 2
                                },
                                artwork_positionX: artwork_positionX,
                                artwork_positionY: artwork_positionY,
                                artwork_flipH: false,
                                artwork_flopV: false,
                                pixel: pixel_bool
                            },
                            font: [],
                            icon: []
                        }
                    };
                    draftdata.component_list.push(obj);
                });

                this.mdseTypeComponentData['mdse_type_color_option_list'].map((item, index) => {
                    draftdata[item.color_option_name] = this.mainColor;
                });
            }

            this.currentMdseTypeId = mdse_type_id;
            this.currentMdseTypeData = currentMdseTypeData;
            this.currentMdseTypeDraft = draftdata;
            this.$nextTick(function () {
                this.step = 'create-edit';
            });
        },
        // 自动创作
        sendAutoDesginRequest() {
            // 设置参数
            if (this.autoDesigningArr.length == 0) {
                return;
            }
            let mdse_type_id = this.autoDesigningArr[0];
            let currentMdseTypeData = {};
            let draftdata = {};
            this.mdseTypeList.map(item => {
                if (Number(item.mdse_type_id) === Number(mdse_type_id)) {
                    currentMdseTypeData = item;
                }
            });

            let data = this.mdseTypeList;
            for (let item in data) {
                // 根据mdse_type_id寻找所有裁片信息
                if (Number(data[item].mdse_type_id) === Number(mdse_type_id)) {
                    this.mdseTypeComponentData = data[item];
                }
            }
            if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["emptyObj"](draftdata)) {
                draftdata = {
                    mdse_type_id: mdse_type_id.toString(),
                    component_list: []

                    // 获取作品原始尺寸
                };let artwork_width = this.artworkDetail.artwork_origin_width;
                let artwork_height = this.artworkDetail.artwork_origin_height;
                // 判断草稿数据是否存在，如不存在则根据衍生品的裁片信息初始化草稿数据
                let mdse_piece_list = currentMdseTypeData['mdse_type_component_image_list'] || [];

                mdse_piece_list.forEach((element, index) => {
                    let component_name = element.component_name;
                    let artwork_scale = 100;
                    let artwork_positionX = 0;
                    let artwork_positionY = 0;
                    let design_width = element['design_width'];
                    let design_height = element['design_height'];
                    if (artwork_width > artwork_height) {
                        if (design_width >= design_height) {
                            artwork_scale = design_height / artwork_height * 100;
                        } else {
                            artwork_scale = design_height / artwork_height * 100;
                        }
                        artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                        artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
                    } else {
                        if (design_width >= design_height) {
                            artwork_scale = design_width / artwork_width * 100;
                        } else {
                            artwork_scale = design_width / artwork_width * 100;
                        }
                        artwork_positionX = (600 - artwork_width * artwork_scale / 100) / 2;
                        artwork_positionY = (600 - artwork_height * artwork_scale / 100) / 2;
                    }
                    let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
                    let initRotate = Math.acos(artwork_width / initDiagonal);
                    let factory_width = element['factory_width'];
                    let max_radio = design_width / factory_width * 500;
                    let pixel_bool = artwork_scale <= max_radio;
                    let newWidth = initDiagonal * artwork_scale * Math.cos(Math.abs(initRotate));
                    let newHeight = initDiagonal * artwork_scale * Math.sin(Math.abs(initRotate));
                    let obj = {
                        component_name: component_name,
                        component_data: {
                            background: {
                                bg_color: 'fff'
                            },
                            artwork: {
                                component_name: component_name,
                                design_element_type: 'artwork',
                                design_element_uuid: this.artworkDetail.artwork_origin_uuid,
                                design_element_ext: this.artworkDetail.artwork_origin_ext,
                                design_element_display_uuid: this.artworkDetail.artwork_display_uuid,
                                design_element_display_ext: this.artworkDetail.artwork_display_ext,
                                artwork_width: artwork_width,
                                artwork_height: artwork_height,
                                width_scale: artwork_scale,
                                height_scale: artwork_scale,
                                artwork_rotate: 0,
                                artwork_position: {
                                    left: artwork_positionX + artwork_width * artwork_scale / 2 - newWidth / 2,
                                    top: artwork_positionY + artwork_height * artwork_scale / 2 - newHeight / 2
                                },
                                artwork_positionX: artwork_positionX,
                                artwork_positionY: artwork_positionY,
                                artwork_flipH: false,
                                artwork_flopV: false,
                                pixel: pixel_bool
                            },
                            font: [],
                            icon: []
                        }
                    };
                    draftdata.component_list.push(obj);
                });

                this.mdseTypeComponentData['mdse_type_color_option_list'].map((item, index) => {
                    draftdata[item.color_option_name] = this.mainColor;
                });
            }
            let artwork_width = this.artworkDetail.artwork_origin_width;
            let artwork_height = this.artworkDetail.artwork_origin_height;
            let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
            let initRotate = Math.acos(artwork_width / initDiagonal);
            let mdseinfo_component_info_list = [];

            for (let index = 0; index < draftdata.component_list.length; index++) {
                const element = draftdata.component_list[index].component_data;
                const component_name = draftdata.component_list[index].component_name;
                let layer_rank = 0;
                for (const key in element) {
                    if (element[key]) {
                        if (key === 'background') {
                            if (element[key].bg_color) {
                                mdseinfo_component_info_list.push({
                                    'component_name': component_name,
                                    'layer_rank': ++layer_rank,
                                    'design_element_type': 'background',
                                    'bg_color': element[key].bg_color
                                });
                            }
                        }
                        if (key === 'artwork') {
                            let width_scaling = element[key].width_scale / 100;
                            let height_scaling = element[key].height_scale / 100;
                            let design_width = currentMdseTypeData['mdse_type_component_image_list'][index]['design_width'];
                            let design_height = currentMdseTypeData['mdse_type_component_image_list'][index]['design_height'];
                            let rotate = element[key].artwork_rotate;
                            let temp_rotate = Math.abs(rotate);
                            if (temp_rotate > 90) {
                                temp_rotate = 180 - temp_rotate;
                            }
                            temp_rotate = temp_rotate / 180 * Math.PI;
                            let newWidth = initDiagonal * width_scaling * Math.cos(Math.abs(temp_rotate - initRotate));
                            let newHeight = initDiagonal * height_scaling * Math.sin(Math.abs(temp_rotate + initRotate));
                            element[key].artwork_position = {
                                left: element[key].artwork_positionX + element[key].artwork_width * width_scaling / 2 - newWidth / 2,
                                top: element[key].artwork_positionY + element[key].artwork_height * height_scaling / 2 - newHeight / 2
                            };

                            let bx = element[key].artwork_position.left - (600 - design_width) / 2;
                            let by = element[key].artwork_position.top - (600 - design_height) / 2;

                            let flipH = element[key].artwork_flipH;
                            let flipV = element[key].artwork_flopV;

                            mdseinfo_component_info_list.push({
                                'component_name': component_name,
                                'design_element_type': 'artwork',
                                'design_element_uuid': this.artworkDetail.artwork_origin_uuid,
                                'design_element_ext': this.artworkDetail.artwork_origin_ext,
                                'design_element_display_uuid': this.artworkDetail.artwork_display_uuid,
                                'design_element_display_ext': this.artworkDetail.artwork_display_ext,
                                'layer_rank': ++layer_rank,
                                'width': artwork_width,
                                'height': artwork_height,
                                'flip_ver': flipV,
                                'flop_hor': flipH,
                                'rotate': rotate,
                                'width_scale': newWidth / artwork_width,
                                'height_scale': newHeight / artwork_height,
                                'bx': bx,
                                'by': by
                            });
                        }

                        if (key === 'icon') {}
                        if (key === 'font') {}
                    }
                }
            }
            let mdseinfo_color_option_list = [];
            let obj = {};
            if (draftdata.zipper) {
                obj = {
                    color_option_name: 'zipper',
                    color_value: draftdata.zipper
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.border) {
                obj = {
                    color_option_name: 'border',
                    color_value: draftdata.border
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.waist_band_color) {
                obj = {
                    color_option_name: 'waist_band_color',
                    color_value: draftdata.waist_band_color
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.pillow_edge) {
                obj = {
                    color_option_name: 'pillow_edge',
                    color_value: draftdata.pillow_edge
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.handle) {
                obj = {
                    color_option_name: 'handle',
                    color_value: draftdata.handle
                };
                mdseinfo_color_option_list.push(obj);
            }
            let params = {
                mdseinfo_component_info_list: JSON.stringify(mdseinfo_component_info_list),
                mdseinfo_color_option_list: JSON.stringify(mdseinfo_color_option_list),
                mdse_type_id: mdse_type_id,
                user_artwork_id: __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('id')
            };
            this.artworkDetail.related_mdseinfo_list.map(item => {
                if (item.mdse_type_id == mdse_type_id) {
                    params['mdseinfo_id'] = item.mdseinfo_id;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_CreateMdseinfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                params: params,
                success_function: data => {
                    __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                        url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_EditMdseinfoDraft,
                        client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                        params: {
                            action_type: 'add',
                            mdseinfo_id: data.result.mdseinfo_id,
                            draft_obj: JSON.stringify(draftdata)
                        },
                        success_function: () => {
                            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Artwork_GetArtworkInfo,
                                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                                params: {
                                    user_artwork_id: __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('id')
                                },
                                success_function: data => {
                                    this.artworkDetail = data.result['user_artwork'];
                                    this.autoDesigningArr.splice(this.autoDesigningArr.indexOf(mdse_type_id), 1);
                                    let _this = this;
                                    this.$nextTick(function () {
                                        setTimeout(function () {
                                            _this.sendAutoDesginRequest();
                                        }, 300);
                                    });
                                },
                                error_function: data => {
                                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                                }
                            });
                        },
                        error_function: data => {
                            new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                        }
                    });
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                    this.autoDesignArr.splice(this.autoDesignArr.indexOf('mdse_type_id'), 1);
                    this.autoDesigningArr.splice(this.autoDesigningArr.indexOf('mdse_type_id'), 1);
                }
            });
        },
        // 判断像素
        overPixel() {
            let isOver = false;
            this.currentMdseTypeDraft.component_list.map(component_list_item => {
                return Boolean(component_list_item.component_data.artwork.pixel) === false ? isOver = true : null;
            });
            return isOver;
        },
        // 在线创作Handle
        createMdseInfo() {
            if (this.overPixel()) {
                new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error('有裁片存在像素不足的情况，无法生成预览图，请重新编辑！');
                return null;
            } else {
                this.createMdseInfoRequest();
                this.setStep('create-loading');
            }
        },
        // 保存创作商品
        saveMdseInfo(mdse_type_id) {
            if (this.overPixel()) {
                new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error('有裁片存在像素不足的情况，无法生成预览图，请重新编辑！');
                return null;
            } else {
                if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('tid')) {
                    if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["haveSomething"](this.createResult)) {
                        __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["goHead"]();
                    } else {
                        new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().info('请先进行预览，再进行保存哦！');
                    }
                } else {
                    if (this.autoDesignArr.indexOf(mdse_type_id) < 0) {
                        this.autoDesignArr.push(mdse_type_id);
                    }
                    if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["haveSomething"](this.createResult)) {
                        this.step = 'select-type';
                        return;
                    }
                    this.autoDesigningArr.push(mdse_type_id);
                    this.step = 'select-type';
                    this.saveMdseInfoCallback(mdse_type_id);
                }
            }
        },
        // 保存创作商品
        saveMdseInfoCallback(mdse_type_id) {
            let draftdata = this.currentMdseTypeDraft;
            let artwork_width = this.artworkDetail.artwork_origin_width;
            let artwork_height = this.artworkDetail.artwork_origin_height;
            let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
            let initRotate = Math.acos(artwork_width / initDiagonal);
            let mdseinfo_component_info_list = [];

            for (let index = 0; index < draftdata.component_list.length; index++) {
                const element = draftdata.component_list[index].component_data;
                const component_name = draftdata.component_list[index].component_name;
                let layer_rank = 0;
                for (const key in element) {
                    if (element[key]) {
                        if (key === 'background') {
                            if (element[key].bg_color) {
                                mdseinfo_component_info_list.push({
                                    'component_name': component_name,
                                    'layer_rank': ++layer_rank,
                                    'design_element_type': 'background',
                                    'bg_color': element[key].bg_color
                                });
                            }
                        }
                        if (key === 'artwork') {
                            let width_scaling = element[key].width_scale / 100;
                            let height_scaling = element[key].height_scale / 100;
                            let design_width = this.currentMdseTypeData['mdse_type_component_image_list'][index]['design_width'];
                            let design_height = this.currentMdseTypeData['mdse_type_component_image_list'][index]['design_height'];
                            let rotate = element[key].artwork_rotate;
                            let temp_rotate = Math.abs(rotate);
                            if (temp_rotate > 90) {
                                temp_rotate = 180 - temp_rotate;
                            }
                            temp_rotate = temp_rotate / 180 * Math.PI;
                            let newWidth = initDiagonal * width_scaling * Math.cos(Math.abs(temp_rotate - initRotate));
                            let newHeight = initDiagonal * height_scaling * Math.sin(Math.abs(temp_rotate + initRotate));
                            element[key].artwork_position = {
                                left: element[key].artwork_positionX + element[key].artwork_width * width_scaling / 2 - newWidth / 2,
                                top: element[key].artwork_positionY + element[key].artwork_height * height_scaling / 2 - newHeight / 2
                            };

                            let bx = element[key].artwork_position.left - (600 - design_width) / 2;
                            let by = element[key].artwork_position.top - (600 - design_height) / 2;

                            let flipH = element[key].artwork_flipH;
                            let flipV = element[key].artwork_flopV;

                            mdseinfo_component_info_list.push({
                                'component_name': component_name,
                                'design_element_type': 'artwork',
                                'design_element_uuid': this.artworkDetail.artwork_origin_uuid,
                                'design_element_ext': this.artworkDetail.artwork_origin_ext,
                                'design_element_display_uuid': this.artworkDetail.artwork_display_uuid,
                                'design_element_display_ext': this.artworkDetail.artwork_display_ext,
                                'layer_rank': ++layer_rank,
                                'width': artwork_width,
                                'height': artwork_height,
                                'flip_ver': flipV,
                                'flop_hor': flipH,
                                'rotate': rotate,
                                'width_scale': newWidth / artwork_width,
                                'height_scale': newHeight / artwork_height,
                                'bx': bx,
                                'by': by
                            });
                        }

                        if (key === 'icon') {}
                        if (key === 'font') {}
                    }
                }
            }
            let mdseinfo_color_option_list = [];
            let obj = {};
            if (draftdata.zipper) {
                obj = {
                    color_option_name: 'zipper',
                    color_value: draftdata.zipper
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.border) {
                obj = {
                    color_option_name: 'border',
                    color_value: draftdata.border
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.waist_band_color) {
                obj = {
                    color_option_name: 'waist_band_color',
                    color_value: draftdata.waist_band_color
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.pillow_edge) {
                obj = {
                    color_option_name: 'pillow_edge',
                    color_value: draftdata.pillow_edge
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.handle) {
                obj = {
                    color_option_name: 'handle',
                    color_value: draftdata.handle
                };
                mdseinfo_color_option_list.push(obj);
            }
            let params = {
                mdseinfo_component_info_list: JSON.stringify(mdseinfo_component_info_list),
                mdseinfo_color_option_list: JSON.stringify(mdseinfo_color_option_list),
                mdse_type_id: this.currentMdseTypeId,
                user_artwork_id: __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('id')
            };
            this.artworkDetail.related_mdseinfo_list.map(item => {
                if (item.mdse_type_id == this.currentMdseTypeId) {
                    params['mdseinfo_id'] = item.mdseinfo_id;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_CreateMdseinfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                params: params,
                success_function: data => {

                    __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                        url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_EditMdseinfoDraft,
                        client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                        params: {
                            action_type: 'add',
                            mdseinfo_id: data.result.mdseinfo_id,
                            draft_obj: JSON.stringify(draftdata)
                        },
                        success_function: () => {
                            this.getArtworkDetail();
                            this.autoDesigningArr.splice(this.autoDesigningArr.indexOf(mdse_type_id), 1);
                        },
                        error_function: data => {
                            new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                            this.setStep('select-type');
                        }
                    });
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                }
            });
        },
        // 创作商品请求
        createMdseInfoRequest() {
            let draftdata = this.currentMdseTypeDraft;
            let artwork_width = this.artworkDetail.artwork_origin_width;
            let artwork_height = this.artworkDetail.artwork_origin_height;
            let initDiagonal = Math.sqrt(Math.pow(artwork_width, 2) + Math.pow(artwork_height, 2));
            let initRotate = Math.acos(artwork_width / initDiagonal);
            let mdseinfo_component_info_list = [];

            for (let index = 0; index < draftdata.component_list.length; index++) {
                const element = draftdata.component_list[index].component_data;
                const component_name = draftdata.component_list[index].component_name;
                let layer_rank = 0;
                for (const key in element) {
                    if (element[key]) {
                        if (key === 'background') {
                            if (element[key].bg_color) {
                                mdseinfo_component_info_list.push({
                                    'component_name': component_name,
                                    'layer_rank': ++layer_rank,
                                    'design_element_type': 'background',
                                    'bg_color': element[key].bg_color
                                });
                            }
                        }
                        if (key === 'artwork') {
                            let width_scaling = element[key].width_scale / 100;
                            let height_scaling = element[key].height_scale / 100;
                            let design_width = this.currentMdseTypeData['mdse_type_component_image_list'][index]['design_width'];
                            let design_height = this.currentMdseTypeData['mdse_type_component_image_list'][index]['design_height'];
                            let rotate = element[key].artwork_rotate;
                            let temp_rotate = Math.abs(rotate);
                            if (temp_rotate > 90) {
                                temp_rotate = 180 - temp_rotate;
                            }
                            temp_rotate = temp_rotate / 180 * Math.PI;
                            let newWidth = initDiagonal * width_scaling * Math.cos(Math.abs(temp_rotate - initRotate));
                            let newHeight = initDiagonal * height_scaling * Math.sin(Math.abs(temp_rotate + initRotate));
                            element[key].artwork_position = {
                                left: element[key].artwork_positionX + element[key].artwork_width * width_scaling / 2 - newWidth / 2,
                                top: element[key].artwork_positionY + element[key].artwork_height * height_scaling / 2 - newHeight / 2
                            };

                            let bx = element[key].artwork_position.left - (600 - design_width) / 2;
                            let by = element[key].artwork_position.top - (600 - design_height) / 2;

                            let flipH = element[key].artwork_flipH;
                            let flipV = element[key].artwork_flopV;

                            mdseinfo_component_info_list.push({
                                'component_name': component_name,
                                'design_element_type': 'artwork',
                                'design_element_uuid': this.artworkDetail.artwork_origin_uuid,
                                'design_element_ext': this.artworkDetail.artwork_origin_ext,
                                'design_element_display_uuid': this.artworkDetail.artwork_display_uuid,
                                'design_element_display_ext': this.artworkDetail.artwork_display_ext,
                                'layer_rank': ++layer_rank,
                                'width': artwork_width,
                                'height': artwork_height,
                                'flip_ver': flipV,
                                'flop_hor': flipH,
                                'rotate': rotate,
                                'width_scale': newWidth / artwork_width,
                                'height_scale': newHeight / artwork_height,
                                'bx': bx,
                                'by': by
                            });
                        }

                        if (key === 'icon') {}
                        if (key === 'font') {}
                    }
                }
            }
            let mdseinfo_color_option_list = [];
            let obj = {};
            if (draftdata.zipper) {
                obj = {
                    color_option_name: 'zipper',
                    color_value: draftdata.zipper
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.border) {
                obj = {
                    color_option_name: 'border',
                    color_value: draftdata.border
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.waist_band_color) {
                obj = {
                    color_option_name: 'waist_band_color',
                    color_value: draftdata.waist_band_color
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.pillow_edge) {
                obj = {
                    color_option_name: 'pillow_edge',
                    color_value: draftdata.pillow_edge
                };
                mdseinfo_color_option_list.push(obj);
            }
            if (draftdata.handle) {
                obj = {
                    color_option_name: 'handle',
                    color_value: draftdata.handle
                };
                mdseinfo_color_option_list.push(obj);
            }
            let params = {
                mdseinfo_component_info_list: JSON.stringify(mdseinfo_component_info_list),
                mdseinfo_color_option_list: JSON.stringify(mdseinfo_color_option_list),
                mdse_type_id: this.currentMdseTypeId,
                user_artwork_id: __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('id')
            };
            this.artworkDetail.related_mdseinfo_list.map(item => {
                if (item.mdse_type_id == this.currentMdseTypeId) {
                    params['mdseinfo_id'] = item.mdseinfo_id;
                }
            });
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_CreateMdseinfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                params: params,
                success_function: data => {
                    this.setStep('create-result');
                    this.createResult = data.result;

                    __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                        url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_EditMdseinfoDraft,
                        client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                        params: {
                            action_type: 'add',
                            mdseinfo_id: this.createResult.mdseinfo_id,
                            draft_obj: JSON.stringify(draftdata)
                        },
                        success_function: () => {
                            this.getArtworkDetail();
                            // this.getMdseinfoDetail(data.result.mdseinfo_id)
                        },
                        error_function: data => {
                            new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                            this.setStep('select-type');
                        }
                    });
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                    this.setStep('select-type');
                }
            });
        },
        // 获取创作商品类别信息
        getMdseTypeCreateInfo() {
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Create_GetMdseTypeCreateInfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                success_function: data => {
                    this.mdseTypeList = __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["dataArrSort"](data.result.mdse_type_list);
                    this.splitData(data.result.mdse_type_list);
                },
                error_function: data => {}
            });
        },
        // 获取作品详情
        getArtworkDetail() {
            __WEBPACK_IMPORTED_MODULE_1__library_request_index__["sendRequest"]({
                url: __WEBPACK_IMPORTED_MODULE_1__library_request_index__["map_route_api_2c"].API_Artwork_GetArtworkInfo,
                client_type: __WEBPACK_IMPORTED_MODULE_0__config_index__["node_web_client_type_2c"],
                params: {
                    user_artwork_id: __WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('id')
                },
                success_function: data => {
                    this.artworkDetail = data.result['user_artwork'];
                    let _this = this;
                    let url = this.artworkDetail.artwork_display_url;
                    let index = url.lastIndexOf("\/");
                    url = __WEBPACK_IMPORTED_MODULE_0__config_index__["oss_public_external_direct_url"] + url.substring(index + 1, url.length);
                    // $.get(url,function(data){
                    //     _this.mainColor = data.RGB.slice(2)
                    // })
                    this.$nextTick(function () {
                        if (this.isRequestOver) {
                            this.toEditMdseinfo();
                        } else {
                            this.isRequestOver = true;
                        }
                    });
                },
                error_function: data => {
                    new __WEBPACK_IMPORTED_MODULE_3__library_component_common_toastr_index___default.a().error(data.message);
                }
            });
        },
        toEditMdseinfo() {
            if (__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('tid') && this.isRequestOver && this.step === 'select-type') {
                this.getMdseTypeComponent(__WEBPACK_IMPORTED_MODULE_2__library_tools_index__["getUrlParam"]('tid'));
            }
        }
    }
});

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(25);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(859);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#hemayin-app',
    template: '<App/>',
    components: { App: _index2.default }
});

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @category  html5 widgets
 * @package   Kelly
 * @author    Rubchuk Vladimir <torrenttvi@gmail.com>
 * @copyright 2015-2016 Rubchuk Vladimir
 * @license   GPLv3
 * @version   1.16
 *
 * Usage example :
 *
 *   new KellyColorPicker({place : 'color-picker'})
 * 
 * Add switch color in colorsavers button (analog of X button in Photoshop)
 *
 **/

/**
 * Create color picker
 * @param {Array} cfg
 * @returns {KellyColorPicker}
 */

function KellyColorPicker(cfg) {
    var PI = Math.PI;

    var svFig = void 0; // current method SV figure object

    var changeCursor = true;

    var svCursor = new Object();
    svCursor.radius = 4;

    var canvas = false;
    var ctx = false;

    var method = 'quad';
    var alpha = false; // is alpha slider enabled
    var drag = false;
    var cursorAnimReady = true; // sets by requestAnimationFrame to limit FPS on events like mousemove etc. when draging 

    var events = new Array();
    var userEvents = new Array();

    var canvasHelper = document.createElement('canvas');
    var canvasHelperCtx = false; // used if needed to copy image data throw ctx.drawImage for save alpha channel
    var rendered = false; // is colorpicker rendered (without side alpha bar and cursors, rendered image stores in canvasHelperData
    var canvasHelperData = null; // rendered interface without cursors and without alpha slider [wheelBlockSize x wheelBlockSize]

    var input = false;

    // used by updateInput() function if not overloaded by user event
    var inputColor = true; // update input color according to picker
    var inputFormat = 'mixed'; // text format of colorpicker color displayed in input element | values : mixed | hex | rgba

    var popup = new Object(); // popup block for input
    popup.tag = false; // Dom element if popup is enabled
    popup.margin = 6; // margin from input in pixels

    // container, or canvas element
    var place = false;
    var handler = this;

    var basePadding = 2;

    var padding = void 0;
    var wheelBlockSize = 200;
    var center = void 0;

    // current color
    var hsv = void 0;
    var rgb = void 0;
    var hex = '#000000';
    var a = 1;

    var resizeWith = false;

    var colorSavers = new Array();

    var styleSwitch = false; // change method from square to triangle
    var svFigsPool = new Array(); // if we have button for switch method, better store already created figure object to buffer

    // style switch from triange to quad and backwards
    function initStyleSwitch() {

        styleSwitch = new Object();
        styleSwitch.size;
        styleSwitch.sizePercentage = 10;
        styleSwitch.position;
        styleSwitch.paddingY = 4;
        styleSwitch.paddingX = 4;
        styleSwitch.imageData = new Array();
        styleSwitch.lineWidth = 2;
        styleSwitch.color = '#c1ebf5';

        styleSwitch.updateSize = function () {
            this.size = parseInt(wheelBlockSize - wheelBlockSize / 100 * (100 - this.sizePercentage));

            if (this.size < 16) this.size = 16;

            this.position = { x: this.paddingX, y: this.paddingY };
        };

        styleSwitch.draw = function () {

            if (this.imageData[method]) {
                ctx.putImageData(this.imageData[method], this.position.x, this.position.y);
                return;
            }

            var rgb = hexToRgb(this.color);

            canvasHelper.width = this.size;
            canvasHelper.height = this.size;

            canvasHelperCtx.clearRect(0, 0, this.size, this.size);
            canvasHelperCtx.beginPath();

            var switchFig = 'triangle';
            if (method == 'triangle') switchFig = 'quad';

            canvasHelperCtx.beginPath();
            var circleRadius = void 0;
            var circleRadiusMain = void 0;
            if (this.size < 35) {
                circleRadiusMain = canvasHelper.width / 2;
                circleRadius = circleRadiusMain;
            } else {

                circleRadiusMain = canvasHelper.width / 2 - this.lineWidth;

                canvasHelperCtx.arc(this.size / 2, this.size / 2, circleRadiusMain, 0, PI * 2);
                canvasHelperCtx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
                canvasHelperCtx.lineWidth = this.lineWidth;
                canvasHelperCtx.stroke();

                circleRadius = circleRadiusMain - 6;
                canvasHelperCtx.closePath();
                canvasHelperCtx.beginPath();
                canvasHelperCtx.arc(this.size / 2, this.size / 2, circleRadius, 0, PI * 2);
                canvasHelperCtx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
                canvasHelperCtx.lineWidth = this.lineWidth;
                canvasHelperCtx.stroke();
                canvasHelperCtx.closePath();
            }

            canvasHelperCtx.beginPath();
            var svmSize = void 0;
            var svmPos = void 0;
            if (switchFig == 'quad') {
                var workDiametr = circleRadius * 2 - 4; // may be some paddings here
                svmSize = Math.floor(workDiametr / Math.sqrt(2));
                var _padding = (this.size - svmSize) / 2;
                svmPos = { x: _padding + svmSize, y: _padding + svmSize / 2 // start middle point
                };svmPos.y = svmPos.y - svmSize / 2;
                canvasHelperCtx.moveTo(svmPos.x, svmPos.y); // right top
                canvasHelperCtx.lineTo(svmPos.x - svmSize, svmPos.y); // left tp
                canvasHelperCtx.lineTo(svmPos.x - svmSize, svmPos.y + svmSize); // left bottom
                canvasHelperCtx.lineTo(svmPos.x, svmPos.y + svmSize); // right bottom
            } else {
                svmSize = Math.floor((2 * circleRadius - 4) * Math.sin(toRadians(60))); // side size
                svmPos = { x: circleRadius * 2 + (circleRadiusMain - circleRadius), y: this.size / 2 // start middle point
                };var h = Math.sqrt(3) / 2 * svmSize;
                canvasHelperCtx.moveTo(svmPos.x, svmPos.y);
                canvasHelperCtx.lineTo(svmPos.x - h, svmPos.y - svmSize / 2); // top 
                canvasHelperCtx.lineTo(svmPos.x - h, svmPos.y + svmSize / 2); // bottom
                canvasHelperCtx.lineTo(svmPos.x, svmPos.y);
            }

            canvasHelperCtx.lineTo(svmPos.x, svmPos.y);

            canvasHelperCtx.fillStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1)';
            canvasHelperCtx.fill();
            canvasHelperCtx.lineWidth = this.lineWidth;
            canvasHelperCtx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
            canvasHelperCtx.stroke();
            canvasHelperCtx.closePath();

            this.imageData[method] = canvasHelperCtx.getImageData(0, 0, canvasHelper.width, canvasHelper.width);
            ctx.drawImage(canvasHelper, this.position.x, this.position.y);
        };

        styleSwitch.isDotIn = function (dot) {
            if (dot.x >= this.position.x && dot.x <= this.position.x + this.size && dot.y >= this.position.y && dot.y <= this.position.y + this.size) {
                return true;
            }

            //if (Math.pow(this.position.x - dot.x, 2) + Math.pow(this.position.y - dot.y, 2) < Math.pow(this.outerRadius, 2)) {
            //	return true
            //}			

            return false;
        };
    }

    // triangle colorsavers for left and right side
    function initColorSaver(align, selected, color) {

        if (!selected) selected = false;else selected = true;

        var colorSaver = new Object();
        colorSaver.width; // size of side of triangle
        colorSaver.widthPercentage = 22;

        colorSaver.imageData = null; // last rendered colorsaver image
        colorSaver.align = align;
        colorSaver.selected = selected; // current color
        colorSaver.color = '#ffffff'; // hex color
        colorSaver.position; // top point of triangle
        colorSaver.paddingY = -4;
        colorSaver.paddingX = 4;
        colorSaver.lineWidth = 1;
        colorSaver.selectSize = 4;

        if (align == 'right') {
            colorSaver.paddingX = colorSaver.paddingX * -1;
        }

        if (colorSaver.selected) {
            colorSaver.color = hex;
        }

        if (color) {
            colorSaver.color = color;
        }

        colorSaver.updateSize = function () {
            this.width = parseInt(wheelBlockSize - wheelBlockSize / 100 * (100 - this.widthPercentage));

            // start render point in global canvas coords
            if (this.align == 'left') {
                this.position = { x: 0, y: wheelBlockSize - this.width };
            } else if (this.align == 'right') {
                this.position = { x: wheelBlockSize - this.width, y: wheelBlockSize - this.width };
            }
        };

        // calc triangle area (same method as for triangle sv figure)
        colorSaver.calcS = function (p) {
            return Math.abs((p[1].x - p[0].x) * (p[2].y - p[0].y) - (p[2].x - p[0].x) * (p[1].y - p[0].y)) / 2;
        };

        colorSaver.isDotIn = function (dot) {

            var path = new Array();

            if (this.align == 'left') {
                path[0] = { x: this.position.x, y: this.position.y // top 
                };path[1] = { x: this.position.x, y: this.position.y + this.width // bottom left
                };path[2] = { x: this.position.x + this.width, y: this.position.y + this.width // bottom right
                };
            } else {
                path[0] = { x: this.position.x + this.width, y: this.position.y // top 
                };path[1] = { x: path[0].x, y: path[0].y + this.width // bottom right
                };path[2] = { x: path[0].x - this.width, y: this.position.y + this.width // bottom left				
                };
            }

            for (var i = 0; i <= path.length - 1; ++i) {
                path[i].x += this.paddingX;
                path[i].y += this.paddingY;
            }

            var selfS = this.calcS(path);

            var t = [{ x: path[0].x, y: path[0].y }, { x: path[1].x, y: path[1].y }, { x: dot.x, y: dot.y }];

            var s = this.calcS(t);
            t[1] = { x: path[2].x, y: path[2].y };
            s += this.calcS(t);
            t[0] = { x: path[1].x, y: path[1].y };
            s += this.calcS(t);

            if (Math.ceil(s) == Math.ceil(selfS)) return true;else return false;
        };

        colorSaver.draw = function () {

            canvasHelper.width = this.width;
            canvasHelper.height = this.width;

            canvasHelperCtx.clearRect(0, 0, this.width, this.width);
            canvasHelperCtx.beginPath();

            if (this.align == 'left') {
                canvasHelperCtx.moveTo(this.lineWidth / 2, this.width - this.lineWidth);
                canvasHelperCtx.lineTo(this.width, this.width - this.lineWidth);
                canvasHelperCtx.lineTo(this.lineWidth, this.lineWidth);
                canvasHelperCtx.lineTo(this.lineWidth, this.width - this.lineWidth);
            }

            if (this.align == 'right') {
                canvasHelperCtx.moveTo(this.lineWidth / 2, this.width - this.lineWidth);
                canvasHelperCtx.lineTo(this.width - this.lineWidth, this.width - this.lineWidth);
                canvasHelperCtx.lineTo(this.width - this.lineWidth, this.lineWidth);
                canvasHelperCtx.lineTo(this.lineWidth, this.width - this.lineWidth);
            }

            if (this.selected) {

                // start draw addition inner figure

                canvasHelperCtx.fillStyle = 'rgba(255,255,255, 1)';
                canvasHelperCtx.fill();

                canvasHelperCtx.strokeStyle = 'rgba(0, 0, 0, 1)';
                canvasHelperCtx.stroke();
                canvasHelperCtx.closePath();
                canvasHelperCtx.beginPath();

                canvasHelperCtx.lineWidth = this.lineWidth;

                if (this.align == 'left') {
                    canvasHelperCtx.moveTo(this.selectSize, this.width - this.selectSize);
                    canvasHelperCtx.lineTo(this.width - this.selectSize * 2, this.width - this.selectSize);
                    canvasHelperCtx.lineTo(this.selectSize, this.selectSize * 2);
                    canvasHelperCtx.lineTo(this.selectSize, this.width - this.selectSize);
                }

                if (this.align == 'right') {

                    canvasHelperCtx.moveTo(this.selectSize * 2, this.width - this.selectSize);
                    canvasHelperCtx.lineTo(this.width - this.selectSize, this.width - this.selectSize);
                    canvasHelperCtx.lineTo(this.width - this.selectSize, this.selectSize * 2);
                    canvasHelperCtx.lineTo(this.selectSize * 2, this.width - this.selectSize);
                }
            }

            var rgb = hexToRgb(this.color);
            canvasHelperCtx.fillStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1)';
            canvasHelperCtx.fill();
            canvasHelperCtx.strokeStyle = 'rgba(0, 0, 0, 1)';
            canvasHelperCtx.stroke();

            this.imageData = canvasHelperCtx.getImageData(0, 0, this.width, this.width);
            ctx.drawImage(canvasHelper, this.position.x + this.paddingX, this.position.y + this.paddingY);
        };

        var colorSaverKey = colorSavers.length;
        colorSavers[colorSaverKey] = colorSaver;
    }

    var wheel = new Object();
    wheel.width = 18;
    wheel.imageData = null; // rendered wheel image data
    wheel.innerRadius;
    wheel.startAngle = 0; // 150
    wheel.outerRadius;
    wheel.outerStrokeStyle = 'rgba(0,0,0,0.2)';
    wheel.innerStrokeStyle = 'rgba(0,0,0,0.2)';
    wheel.pos; // updates in updateSize() | center point wheel cursor \ hsv quad \ hsv triangle positioned relative that point
    wheel.draw = function () {

        // put rendered data

        if (this.imageData) {
            ctx.putImageData(this.imageData, 0, 0);
        } else {
            var hAngle = this.startAngle;
            for (var angle = 0; angle <= 360; angle++) {

                var startAngle = toRadians(angle - 2);
                var endAngle = toRadians(angle);

                ctx.beginPath();
                ctx.moveTo(center, center);
                ctx.arc(center, center, this.outerRadius, startAngle, endAngle, false);
                ctx.closePath();

                var targetRgb = hsvToRgb(hAngle / 360, 1, 1);
                ctx.fillStyle = 'rgb(' + targetRgb.r + ', ' + targetRgb.g + ', ' + targetRgb.b + ')';
                //ctx.fillStyle = 'hsl('+hAngle+', 100%, 50%)'
                ctx.fill();

                hAngle++;
                if (hAngle >= 360) hAngle = 0;
            }

            ctx.globalCompositeOperation = 'destination-out'; // cut out color wheel inside by circle next
            ctx.beginPath();
            ctx.arc(center, center, this.innerRadius, 0, PI * 2);

            ctx.fill();

            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = this.innerStrokeStyle; // 'rgba(0,0,0,0.2)'
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            // wheel border
            ctx.beginPath();
            ctx.arc(center, center, this.outerRadius, 0, PI * 2);
            ctx.strokeStyle = this.outerStrokeStyle;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            this.imageData = ctx.getImageData(0, 0, wheelBlockSize, wheelBlockSize);
        }
    };

    wheel.isDotIn = function (dot) {
        // is dot in circle
        if (Math.pow(this.pos.x - dot.x, 2) + Math.pow(this.pos.y - dot.y, 2) < Math.pow(this.outerRadius, 2)) {
            if (Math.pow(this.pos.x - dot.x, 2) + Math.pow(this.pos.y - dot.y, 2) > Math.pow(this.innerRadius, 2)) {
                return true;
            }
        }
        return false;
    };

    var wheelCursor = new Object();
    wheelCursor.lineWeight = 2;
    wheelCursor.height = 4;
    wheelCursor.paddingX = 2; // padding from sides of wheel
    wheelCursor.path; // rotatePath2 --- поворот по старой функции, в фигуре не приплюсован центр

    var alphaSlider = new Object();
    alphaSlider.width = 18;
    alphaSlider.padding = 4;
    alphaSlider.outerStrokeStyle = 'rgba(0,0,0,0.2)';
    alphaSlider.innerStrokeStyle = 'rgba(0,0,0,0.2)';
    alphaSlider.height;
    alphaSlider.pos; // left top corner position
    alphaSlider.updateSize = function () {
        this.pos = { x: wheelBlockSize + alphaSlider.padding, y: alphaSlider.padding };
        this.height = wheelBlockSize - alphaSlider.padding * 2;
    };

    alphaSlider.draw = function () {
        var alphaGrd = ctx.createLinearGradient(0, 0, 0, this.height);
        alphaGrd.addColorStop(0, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',1)');
        alphaGrd.addColorStop(1, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0)');

        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.fillStyle = alphaGrd;
        ctx.fill();

        ctx.strokeStyle = 'rgba(0,0,0, 0.2)';
        ctx.lineWidth = 2;

        ctx.stroke();
        ctx.closePath();
    };

    alphaSlider.dotToAlpha = function (dot) {
        return 1 - Math.abs(this.pos.y - dot.y) / this.height;
    };

    alphaSlider.alphaToDot = function (alpha) {
        return {
            x: 0,
            y: this.height - this.height * alpha
        };
    };

    alphaSlider.limitDotPosition = function (dot) {
        var y = dot.y;

        if (y < this.pos.y) {
            y = this.pos.y;
        }

        if (y > this.pos.y + this.height) {
            y = this.pos.y + this.height;
        }

        return { x: this.pos.x, y: y };
    };

    alphaSlider.isDotIn = function (dot) {
        if (dot.x < this.pos.x || dot.x > this.pos.x + alphaSlider.width || dot.y < this.pos.y || dot.y > this.pos.y + this.height) {
            return false;
        }
        return true;
    };

    // svCursorMouse - для устройств с мышкой, генератор указателя в зависимости от активной области
    var svCursorMouse = new Object();

    svCursorMouse.svCursorData = null;
    svCursorMouse.stCursor = null; // cursor before replace
    svCursorMouse.curType = 0; // if > 0 cursor switched by KellyColorPicker to custom
    svCursorMouse.size = 16;

    svCursorMouse.initSvCursor = function () {
        if (!canvas) return false;
        var el = document.body;

        this.curType = 1;

        if (!this.stCursor) this.stCursor = el.style.cursor;
        if (!this.stCursor) this.stCursor = 'auto';

        if (this.svCursorData) {
            el.style.cursor = this.svCursorData;
            return true;
        }

        if (!canvasHelper) return false;

        // create canvas on 2 pixels bigger for Opera that cut image 
        var canvasSize = this.size + 2;

        canvasHelper.width = canvasSize;
        canvasHelper.height = canvasSize;

        canvasHelperCtx.clearRect(0, 0, this.size, this.size);
        canvasHelperCtx.strokeStyle = 'rgba(255, 255, 255, 1)';

        canvasHelperCtx.beginPath();
        canvasHelperCtx.lineWidth = 2;
        canvasHelperCtx.arc(canvasSize / 2, canvasSize / 2, this.size / 2, 0, PI * 2);

        canvasHelperCtx.stroke();
        canvasHelperCtx.closePath();

        var offset = canvasSize; //if (input.value.indexOf(curImageData) !== -1)
        var curImageData = canvasHelper.toDataURL();

        this.svCursorData = 'url(' + curImageData + ') ' + offset / 2 + ' ' + offset / 2 + ', auto';

        if (!this.svCursorData) return false;

        el.style.cursor = this.svCursorData;
        if (el.style.cursor.indexOf(curImageData) === -1) {
            // for autist IE (Edge also), that not support data-uri for cursor -_-
            this.svCursorData = 'crosshair';
            el.style.cursor = 'crosshair';
        }
        return true;
    };

    svCursorMouse.initStandartCursor = function () {
        if (!this.stCursor) return;
        svCursorMouse.curType = 0;
        document.body.style.cursor = this.stCursor;
    };

    svCursorMouse.updateCursor = function (newDot) {
        if (!changeCursor) return;

        if (KellyColorPicker.cursorLock) return;

        if (svFig.isDotIn(newDot)) {
            svCursorMouse.initSvCursor();
        } else {
            svCursorMouse.initStandartCursor();
        }
    };

    // updateinput

    function constructor(cfg) {
        var criticalError = '',
            placeName = '';

        // save non-camelased old style options compatibility

        if (cfg.alpha_slider !== undefined) {
            cfg.alphaSlider = cfg.alpha_slider;
        }

        if (cfg.input_color !== undefined) {
            cfg.inputColor = cfg.input_color;
        }

        if (cfg.input_format !== undefined) {
            cfg.inputFormat = cfg.input_format;
        }

        // config apply

        if (cfg.input && _typeof(cfg.input) !== 'object') {
            cfg.input = document.getElementById(cfg.input);
            input = cfg.input;
            // if (!cfg.input) log += '| 'input' (' + inputName + ') not not found'
        } else if (_typeof(cfg.input) === 'object') {
            input = cfg.input;
        }

        if (cfg.changeCursor !== undefined) {
            changeCursor = cfg.changeCursor;
        }

        if (cfg.alpha !== undefined) {
            a = cfg.alpha;
        }

        if (cfg.alphaSlider !== undefined) {
            alpha = cfg.alphaSlider;
        }

        if (cfg.inputColor !== undefined) {
            inputColor = cfg.inputColor;
        }

        if (cfg.inputFormat !== undefined) {
            inputFormat = cfg.inputFormat;
        }

        if (cfg.userEvents) userEvents = cfg.userEvents;

        if (cfg.place && _typeof(cfg.place) !== 'object') {
            placeName = cfg.place;
            cfg.place = document.getElementById(cfg.place);
        }

        if (cfg.resizeWith) {

            if (_typeof(cfg.resizeWith) !== 'object') cfg.resizeWith = document.getElementById(cfg.resizeWith);

            resizeWith = cfg.resizeWith;

            if (resizeWith) {
                var newSize = getSizeByElement(resizeWith);
                if (newSize) cfg.size = getSizeByElement(resizeWith);

                addEventListner(window, 'resize', function (e) {
                    return handler.syncSize(e);
                }, 'canvas_');
            }
        }

        if (cfg.place) {
            place = cfg.place;
        } else if (input) {

            popup.tag = document.createElement('div');
            popup.tag.className = 'popup-kelly-color';

            if (!cfg.popupClass) {

                popup.tag.className = 'popup-kelly-color';

                popup.tag.style.position = 'absolute';
                popup.tag.style.bottom = '0px';
                popup.tag.style.left = '0px';
                popup.tag.style.display = 'none';
                popup.tag.style.backgroundColor = '#e1e1e1';
                popup.tag.style.border = '1px solid #bfbfbf';
                popup.tag.style.boxShadow = '7px 7px 14px -3px rgba(0,0,0,0.24)';
                popup.tag.style.borderTopLeftRadius = '4px';
                popup.tag.style.borderTopRightRadius = '4px';
                popup.tag.style.borderBottomLeftRadius = '4px';
                popup.tag.style.borderBottomRightRadius = '4px';
                popup.tag.style.padding = '12px';
                popup.tag.style.boxSizing = 'content-box';
            } else {
                popup.tag.className = cfg.inputClassName;
            }

            place = popup.tag;

            var body = document.getElementsByTagName('body')[0];
            body.appendChild(popup.tag);

            addEventListner(input, 'click', function (e) {
                return handler.popUpShow(e);
            }, 'popup_');
        } // attach directly to input by popup
        else criticalError += '| ' + place + ' (' + placeName + ') not not found';

        if (cfg.size && cfg.size > 0) {
            wheelBlockSize = cfg.size;
        }

        // hex default #000000
        var colorData = false;

        if (cfg.color) {
            colorData = readColorData(cfg.color);
        } else if (input && input.value) {
            colorData = readColorData(input.value);
        }

        if (colorData) {
            hex = colorData.h;
            if (alpha) a = colorData.a;
        }

        //if (hex.charAt(0) == '#') hex = hex.slice(1)
        //if (hex.length == 3) hex = hex + hex
        //if (hex.length !== 6) hex = '#000000'

        if (cfg.method && (cfg.method == 'triangle' || cfg.method == 'quad')) method = cfg.method;

        if (!initCanvas()) {
            criticalError += ' | cant init canvas context';
        }

        if (criticalError) {
            if (typeof console !== 'undefined') console.log('KellyColorPicker : ' + criticalError);
            return;
        }

        if (method == 'quad') svFig = getSvFigureQuad();
        if (method == 'triangle') svFig = getSvFigureTriangle();

        if (input) {
            var inputEdit = function inputEdit(e) {
                e = e || window.event;
                if (!e.target) {
                    e.target = e.srcElement;
                }
                handler.setColorByHex(e.target.value, true);
            };

            addEventListner(input, 'click', inputEdit, 'input_edit_');
            addEventListner(input, 'change', inputEdit, 'input_edit_');
            addEventListner(input, 'keyup', inputEdit, 'input_edit_');
            addEventListner(input, 'keypress', inputEdit, 'input_edit_');
        }

        if (cfg.colorSaver) {
            initColorSaver('left', true);
            initColorSaver('right');
        }

        if (cfg.methodSwitch) {
            initStyleSwitch();
        }

        enableEvents();

        updateSize();
        handler.setColorByHex(false); // update color info and first draw
    }

    // may be zero in some cases / check before applay

    function getSizeByElement(el) {

        var sizeInfo = el.getBoundingClientRect();
        var size = 0;
        var sizeReduse = 0;
        if (alpha) {
            sizeReduse = alphaSlider.width + alphaSlider.padding * 2;
        }

        if (sizeInfo.width > sizeInfo.height) size = sizeInfo.height;
        if (sizeInfo.height > sizeInfo.width) size = sizeInfo.width;

        size = parseInt(size);

        if (alpha) {

            size -= sizeReduse;
        }

        if (size <= 0) {
            return false;
        }

        return size;
    }

    // Read color value from string cString in rgb \ rgba \ hex format 
    // falseOnFail = false - return default color #000000 on fail

    function readColorData(cString, falseOnFail) {
        var alpha = 1;
        var h = false;

        cString = cString.trim(cString);
        if (cString.length <= 7) {
            // hex color
            if (cString.charAt(0) == '#') cString = cString.slice(1);

            if (cString.length == 3) h = cString + cString;else if (cString.length == 6) h = cString;

            //if (h && !h.match(/^#([0-9A-F]){3}$|^#([0-9A-F]){6}$/img)) h = false			
        } else if (cString.substring(0, 3) == 'rgb') {
            var rgba = cString.split(',');

            if (rgba.length >= 3 && rgba.length <= 4) {
                rgba[0] = rgba[0].replace('rgba(', '');
                rgba[0] = rgba[0].replace('rgb(', '');

                var _rgb = { r: parseInt(rgba[0]), g: parseInt(rgba[1]), b: parseInt(rgba[2]) };

                if (_rgb.r <= 255 && _rgb.g <= 255 && _rgb.b <= 255) {

                    h = rgbToHex(_rgb);

                    if (rgba.length == 4) {
                        alpha = parseFloat(rgba[3]);
                        if (!alpha || alpha < 0) alpha = 0;
                        if (alpha > 1) alpha = 1;
                    }
                }
            }
        }

        if (h === false && falseOnFail) return false;
        if (h === false) h = '000000';

        if (h.charAt(0) != '#') h = '#' + h;
        return { h: h, a: alpha };
    }

    function getSvFigureQuad() {

        if (svFigsPool['quad']) return svFigsPool['quad'];

        var quad = new Object();
        quad.size;
        quad.padding = 2;
        quad.path; // крайние точки фигуры на координатной плоскости
        quad.imageData = null; // rendered quad image data
        // перезаписывается существующий, чтобы не вызывать утечек памяти, обнуляя прошлый
        // тк UInt8ClampedArray генерируемый createImageData стандартными способами не
        // во всех браузерах выгружается сразу

        quad.dotToSv = function (dot) {
            return {
                s: Math.abs(this.path[3].x - dot.x) / this.size,
                v: Math.abs(this.path[3].y - dot.y) / this.size
            };
        };

        quad.svToDot = function (sv) {
            var quadX = this.path[0].x;
            var quadY = this.path[0].y;

            var svError = 0.02;
            if (wheelBlockSize < 150) {
                svError = 0.07;
            } else if (wheelBlockSize < 100) {
                svError = 0.16;
            }

            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    var dot = { x: x + quadX, y: y + quadY };
                    var targetSv = this.dotToSv(dot);
                    var es = Math.abs(targetSv.s - sv.s),
                        ev = Math.abs(targetSv.v - sv.v);

                    if (es < svError && ev < svError) {
                        return dot;
                    }
                }
            }

            return { x: 0, y: 0 };
        };

        quad.limitDotPosition = function (dot) {
            var x = dot.x;
            var y = dot.y;

            if (x < this.path[0].x) {
                x = this.path[0].x;
            }

            if (x > this.path[0].x + this.size) {
                x = this.path[0].x + this.size;
            }

            if (y < this.path[0].y) {
                y = this.path[0].y;
            }

            if (y > this.path[0].y + this.size) {
                y = this.path[0].y + this.size;
            }

            return { x: x, y: y };
        };

        quad.draw = function () {
            if (!this.imageData) this.imageData = ctx.createImageData(this.size, this.size);
            var i = 0;

            var quadX = this.path[0].x;
            var quadY = this.path[0].y;

            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    var dot = { x: x + quadX, y: y + quadY };

                    var sv = this.dotToSv(dot);
                    var targetRgb = hsvToRgb(hsv.h, sv.s, sv.v);
                    this.imageData.data[i + 0] = targetRgb.r;
                    this.imageData.data[i + 1] = targetRgb.g;
                    this.imageData.data[i + 2] = targetRgb.b;
                    this.imageData.data[i + 3] = 255;
                    i += 4;
                }
            }

            ctx.putImageData(this.imageData, quadX, quadY);

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0,0,0, 0.2)';
            ctx.lineWidth = 2;
            for (var _i = 0; _i <= this.path.length - 1; ++_i) {
                if (_i == 0) ctx.moveTo(this.path[_i].x, this.path[_i].y);else ctx.lineTo(this.path[_i].x, this.path[_i].y);
            }

            ctx.stroke();

            ctx.closePath();
        };

        quad.updateSize = function () {
            var workD = wheel.innerRadius * 2 - wheelCursor.paddingX * 2 - this.padding * 2;

            // исходя из формулы диагонали квадрата, узнаем длинну стороны на основании доступного диаметра
            this.size = Math.floor(workD / Math.sqrt(2));

            this.path = new Array();

            // находим верхнюю левую точку и от нее задаем остальные координаты
            this.path[0] = { x: -1 * (this.size / 2), y: -1 * (this.size / 2) };
            this.path[1] = { x: this.path[0].x + this.size, y: this.path[0].y };
            this.path[2] = { x: this.path[1].x, y: this.path[1].y + this.size };
            this.path[3] = { x: this.path[2].x - this.size, y: this.path[2].y };
            this.path[4] = { x: this.path[0].x, y: this.path[0].y };

            for (var i = 0; i <= this.path.length - 1; ++i) {
                this.path[i].x += wheel.pos.x;
                this.path[i].y += wheel.pos.y;
            }
        };

        quad.isDotIn = function (dot) {
            if (dot.x < this.path[0].x || dot.x > this.path[0].x + this.size || dot.y < this.path[0].y || dot.y > this.path[0].y + this.size) {
                return false;
            }
            return true;
        };

        svFigsPool['quad'] = quad;
        return quad;
    }

    function getSvFigureTriangle() {

        if (svFigsPool['triangle']) return svFigsPool['triangle'];

        var triangle = new Object();
        triangle.size; // сторона равностороннего треугольника
        triangle.padding = 2;
        triangle.path;
        triangle.imageData = null; // rendered triangle image data
        triangle.followWheel = true;
        triangle.s;
        triangle.sOnTop = false;
        triangle.outerRadius;

        triangle.limitDotPosition = function (dot) {
            var x = dot.x;
            var y = dot.y;

            var maxX = this.path[0].x;
            var minX = this.path[2].x;
            var finalX = x;
            var finalY = y;

            finalX = Math.min(Math.max(minX, finalX), maxX);
            var slope = (this.path[0].y - this.path[1].y) / (this.path[0].x - this.path[1].x);
            var minY = Math.ceil(this.path[1].y + slope * (finalX - this.path[1].x));
            slope = (this.path[0].y - this.path[2].y) / (this.path[0].x - this.path[2].x);
            var maxY = Math.floor(this.path[2].y + slope * (finalX - this.path[2].x));

            if (x < minX) {
                finalY = y;
            }

            finalY = Math.min(Math.max(minY, finalY), maxY);
            return { x: finalX, y: finalY };
        };

        triangle.svToDot = function (sv) {
            var svError = 0.02;
            if (wheelBlockSize < 150) {
                svError = 0.07;
            } else if (wheelBlockSize < 100) {
                svError = 0.16;
            }

            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    var dot = { x: this.path[1].x + x, y: this.path[1].y + y };
                    if (svFig.isDotIn(dot)) {
                        var targetSv = this.dotToSv(dot);
                        var es = Math.abs(targetSv.s - sv.s),
                            ev = Math.abs(targetSv.v - sv.v);

                        if (es < svError && ev < svError) {
                            return dot;
                        }
                    }
                }
            }

            return {
                x: 0,
                y: 0
            };
        };

        triangle.draw = function () {
            // no buffer

            if (!this.imageData) this.imageData = canvasHelperCtx.createImageData(this.size, this.size);

            canvasHelper.width = this.size;
            canvasHelper.height = this.size;

            var trX = this.path[1].x;
            var trY = this.path[1].y;
            var i = 0;
            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    var dot = { x: this.path[1].x + x, y: this.path[1].y + y };
                    if (!svFig.isDotIn(dot)) {
                        this.imageData.data[i + 0] = 0;
                        this.imageData.data[i + 1] = 0;
                        this.imageData.data[i + 2] = 0;
                        this.imageData.data[i + 3] = 0;
                    } else {
                        var sv = this.dotToSv(dot);
                        var targetRgb = hsvToRgb(hsv.h, sv.s, sv.v);

                        this.imageData.data[i + 0] = targetRgb.r;
                        this.imageData.data[i + 1] = targetRgb.g;
                        this.imageData.data[i + 2] = targetRgb.b;
                        this.imageData.data[i + 3] = 255;
                    }

                    i += 4;
                }
            }

            canvasHelperCtx.putImageData(this.imageData, 0, 0);
            ctx.drawImage(canvasHelper, trX, trY); // draw with save overlaps transparent things , not direct putImageData that rewrite all pixels

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 2;
            var trianglePath = this.path; //rotatePath(triangle.path, hsv.h * 360)
            for (var _i2 = 0; _i2 <= trianglePath.length - 1; ++_i2) {
                if (_i2 == 0) ctx.moveTo(trianglePath[_i2].x, trianglePath[_i2].y);else ctx.lineTo(trianglePath[_i2].x, trianglePath[_i2].y);
            }

            ctx.stroke();
            ctx.closePath();
        };

        triangle.calcS = function (p) {
            return Math.abs((p[1].x - p[0].x) * (p[2].y - p[0].y) - (p[2].x - p[0].x) * (p[1].y - p[0].y)) / 2;
        };

        triangle.dotToSv = function (dot) {
            var p = getP({ x: dot.x, y: dot.y }, this.vol);
            var len = getLen(p, this.vol[0]);

            // dirty tricks? replace output to interpolation and lerp in future
            if (len < 1) len = Math.floor(len);
            if (len > this.h - 1) len = this.h;

            var vol = len / this.h;

            var angle = Math.abs(getAngle(dot, this.sSide));
            if (angle < 30) angle = 30;
            angle -= 30;
            angle = 60 - angle;
            angle = angle / 60; // - saturation from one angle

            return { s: angle, v: vol };
        };

        triangle.isDotIn = function (dot) {
            var t = [{ x: this.path[0].x, y: this.path[0].y }, { x: this.path[1].x, y: this.path[1].y }, { x: dot.x, y: dot.y }];

            var s = this.calcS(t);
            t[1] = { x: this.path[2].x, y: this.path[2].y };
            s += this.calcS(t);
            t[0] = { x: this.path[1].x, y: this.path[1].y };
            s += this.calcS(t);

            if (Math.ceil(s) == Math.ceil(this.s)) return true;else return false;
        };

        triangle.updateSize = function () {
            // из формулы высоты равностороннего треугольника
            this.outerRadius = wheel.innerRadius - wheelCursor.paddingX - this.padding;
            // из теоремы синусов треугольника
            this.size = Math.floor(2 * this.outerRadius * Math.sin(toRadians(60)));

            var h = Math.sqrt(3) / 2 * this.size;
            this.h = Math.sqrt(3) / 2 * this.size;

            this.path = new Array();
            this.path[0] = { x: this.outerRadius, y: 0 // middle point - h
            };this.path[1] = { x: this.path[0].x - h, y: -1 * (this.size / 2) // upper - s
            };this.path[2] = { x: this.path[1].x, y: this.size / 2 // bottom - v
            };this.path[3] = { x: this.path[0].x, y: this.path[0].y // to begin

            };for (var i = 0; i <= this.path.length - 1; ++i) {
                this.path[i].x += wheel.pos.x;
                this.path[i].y += wheel.pos.y;
            }

            this.vol = new Array();

            this.s = this.calcS(this.path);
            if (this.sOnTop) {
                var middle = getMiddlePoint(this.path[0], this.path[2]);

                this.vol[0] = { x: this.path[1].x, y: this.path[1].y };
                this.vol[1] = { x: middle.x, y: middle.y };

                this.sSide = this.path[1];
            } else {
                var _middle = getMiddlePoint(this.path[0], this.path[1]);

                this.vol[0] = { x: this.path[2].x, y: this.path[2].y };
                this.vol[1] = { x: _middle.x, y: _middle.y };

                this.sSide = this.path[2];
            }
        };

        svFigsPool['triangle'] = triangle;
        return triangle;
    }

    // prefix - for multiple event functions for one object
    function addEventListner(object, event, callback, prefix) {
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
            object = document.getElementById(object);
        }

        if (!object) return false;
        if (!prefix) prefix = '';

        events[prefix + event] = callback;

        if (!object.addEventListener) {
            object.attachEvent('on' + event, events[prefix + event]);
        } else {
            object.addEventListener(event, events[prefix + event]);
        }

        return true;
    }

    function removeEventListener(object, event, prefix) {
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
            object = document.getElementById(object);
        }

        // console.log('remove :  : ' + Object.keys(events).length)
        if (!object) return false;
        if (!prefix) prefix = '';

        if (!events[prefix + event]) return false;

        if (!object.removeEventListener) {
            object.detachEvent('on' + event, events[prefix + event]);
        } else {
            object.removeEventListener(event, events[prefix + event]);
        }

        events[prefix + event] = null;
        return true;
    }

    // [converters]
    // Read more about HSV color model :
    // https://ru.wikipedia.org/wiki/HSV_%28%F6%E2%E5%F2%EE%E2%E0%FF_%EC%EE%E4%E5%EB%FC%29
    // source of converter hsv functions
    // http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

    function hsvToRgb(h, s, v) {
        var r = void 0,
            g = void 0,
            b = void 0,
            i = void 0,
            f = void 0,
            p = void 0,
            q = void 0,
            t = void 0;

        if (h && s === undefined && v === undefined) {
            s = h.s, v = h.v, h = h.h;
        }

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }

        return {
            r: Math.floor(r * 255),
            g: Math.floor(g * 255),
            b: Math.floor(b * 255)
        };
    }

    function rgbToHsv(r, g, b) {
        if (r && g === undefined && b === undefined) {
            g = r.g, b = r.b, r = r.r;
        }

        r = r / 255, g = g / 255, b = b / 255;
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h = void 0,
            s = void 0,
            v = max;

        var d = max - min;
        s = max == 0 ? 0 : d / max;

        if (max == min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return { h: h, s: s, v: v };
    }

    function hexToRgb(hex) {
        var dec = parseInt(hex.charAt(0) == '#' ? hex.slice(1) : hex, 16);
        return { r: dec >> 16, g: dec >> 8 & 255, b: dec & 255 };
    }

    function rgbToHex(color) {
        var componentToHex = function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
    }

    function toRadians(i) {
        return i * (PI / 180);
    }

    // [converters - end]

    function getLen(point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    function getMiddlePoint(point1, point2) {
        return { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 };
    }

    // перпендикуляр от точки

    function getP(point1, line1) {
        var l = (line1[0].x - line1[1].x) * (line1[0].x - line1[1].x) + (line1[0].y - line1[1].y) * (line1[0].y - line1[1].y);
        var pr = (point1.x - line1[0].x) * (line1[1].x - line1[0].x) + (point1.y - line1[0].y) * (line1[1].y - line1[0].y);
        var pt = true;
        var cf = pr / l;

        if (cf < 0) {
            cf = 0;
            pt = false;
        }
        if (cf > 1) {
            cf = 1;
            pt = false;
        }

        return {
            x: line1[0].x + cf * (line1[1].x - line1[0].x),
            y: line1[0].y + cf * (line1[1].y - line1[0].y),
            pt: pt
        };
    }

    // translate360 = true  270
    //            180 --- from.x.y --- 0
    //                      90

    function getAngle(point, from, translate360) {
        if (!from) from = { x: 0, y: 0 };

        var distX = point.x - from.x;
        var distY = point.y - from.y;

        var a = Math.atan2(distY, distX) * 180 / PI;
        if (translate360 && a < 0) a = 360 + a;

        return a;
    }

    // поворот фигуры относительно точки
    function rotatePath2(points, angle) {
        angle = toRadians(angle);
        var newPoints = new Array();

        for (var i = 0; i <= points.length - 1; ++i) {
            newPoints[i] = {
                x: points[i].x * Math.cos(angle) - points[i].y * Math.sin(angle),
                y: points[i].x * Math.sin(angle) + points[i].y * Math.cos(angle)
            };
        }

        return newPoints;
    }

    function updateSize() {
        padding = basePadding + wheelCursor.paddingX;

        rendered = false;
        wheel.imageData = null;

        center = wheelBlockSize / 2;
        wheel.pos = { x: center, y: center };

        wheel.outerRadius = center - padding;
        wheel.innerRadius = wheel.outerRadius - wheel.width;

        // объект относительно начала координат
        wheelCursor.path = [{ x: wheel.innerRadius - wheelCursor.paddingX, y: wheelCursor.height * -1 }, { x: wheel.outerRadius + wheelCursor.paddingX, y: wheelCursor.height * -1 }, { x: wheel.outerRadius + wheelCursor.paddingX, y: wheelCursor.height }, { x: wheel.innerRadius - wheelCursor.paddingX, y: wheelCursor.height }, { x: wheel.innerRadius - wheelCursor.paddingX, y: wheelCursor.height * -1 }];

        var width = wheelBlockSize;
        if (alpha) width += alphaSlider.width + alphaSlider.padding * 2;

        if (place.tagName != 'CANVAS') {
            place.style.width = width + 'px';
            place.style.height = wheelBlockSize + 'px';
        }

        canvas.width = width;
        canvas.height = wheelBlockSize;

        for (var i = 0; i <= colorSavers.length - 1; ++i) {
            colorSavers[i].updateSize();
        }

        if (styleSwitch) {

            styleSwitch.imageData['triangle'] = null;
            styleSwitch.imageData['quad'] = null;

            styleSwitch.updateSize();
        }

        svFig.updateSize();
        if (alpha) alphaSlider.updateSize();
    }

    // updates input after color changes (manualEnter = true if value entered from input, not from widget)
    // if manualEnter = true - save original text in input, else set input value in configurated format
    // if user event 'updateinput' is setted and return false - prevent default updateInput behavior

    function updateInput(manualEnter) {
        if (!input) return;

        if (userEvents['updateinput']) {
            var callback = userEvents['updateinput'];
            if (!callback(handler, input, manualEnter)) return;
        }

        var rgba = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + a.toFixed(2) + ')';

        if (!manualEnter) {
            if (a < 1 && inputFormat === 'mixed') {
                input.value = rgba;
            } else {
                if (inputFormat === 'hex' || inputFormat === 'mixed') input.value = hex;else input.value = rgba;
            }
        }

        if (inputColor) {
            if (hsv.v < 0.5) {
                input.style.color = '#FFF';
            } else {
                input.style.color = '#000';
            }

            input.style.background = rgba;
        }
    }

    function initCanvas() {
        if (!place) return false;
        if (place.tagName != 'CANVAS') {
            canvas = document.createElement('CANVAS');
            place.appendChild(canvas);
        } else {
            canvas = place;
        }

        // code for IE browsers
        if (typeof window.G_vmlCanvasManager != 'undefined') {
            canvas = window.G_vmlCanvasManager.initElement(canvas);
            canvasHelper = window.G_vmlCanvasManager.initElement(canvasHelper);
        }

        if (Boolean(canvas.getContext && canvas.getContext('2d')) === true) {
            ctx = canvas.getContext('2d');
            canvasHelperCtx = canvasHelper.getContext('2d');
            return true;
        } else return false;
    }

    // temp events until wait mouse click or touch
    function enableEvents() {
        addEventListner(canvas, 'mousedown', function (e) {
            handler.mouseDownEvent(e);
        }, 'wait_action_');
        addEventListner(canvas, 'touchstart', function (e) {
            handler.mouseDownEvent(e);
        }, 'wait_action_');
        addEventListner(canvas, 'mouseout', function (e) {
            handler.mouseOutEvent(e);
        }, 'wait_action_');
        addEventListner(window, 'touchmove', function (e) {
            handler.touchMoveEvent(e);
        }, 'wait_action_');
        addEventListner(canvas, 'mousemove', function (e) {
            handler.mouseMoveRest(e);
        }, 'wait_action_');
    }

    // mouse detect canvas events

    function disableEvents() {
        removeEventListener(canvas, 'mousedown', 'wait_action_');
        removeEventListener(canvas, 'touchstart', 'wait_action_');
        removeEventListener(canvas, 'mouseout', 'wait_action_');
        removeEventListener(window, 'touchmove', 'wait_action_');
        removeEventListener(canvas, 'mousemove', 'wait_action_');
    }

    function getEventDot(e) {

        e = e || window.event;
        var x = void 0,
            y = void 0;
        var scrollX = document.body.scrollLeft + document.documentElement.scrollLeft;
        var scrollY = document.body.scrollTop + document.documentElement.scrollTop;

        if (event.type == 'touchend') {

            x = e.changedTouches[0].clientX + scrollX;
            y = e.changedTouches[0].clientY + scrollY;
        } else if (event.type == 'touchmove' || e.touches) {

            x = e.touches[0].clientX + scrollX;
            y = e.touches[0].clientY + scrollY;
        } else {
            // e.pageX e.pageY e.x e.y bad for cross-browser
            x = e.clientX + scrollX;
            y = e.clientY + scrollY;
        }

        // set point to local coordinates

        var rect = canvas.getBoundingClientRect();
        x -= rect.left + scrollX;
        y -= rect.top + scrollY;

        return { x: x, y: y };
    }

    function selectColorSaver(key) {

        // disable current selection
        var previouseSelect = false;
        for (var i = 0; i <= colorSavers.length - 1; ++i) {
            if (colorSavers[i].selected) previouseSelect = i;
            colorSavers[i].selected = false;
        }

        // select new 
        var select = false;
        for (var _i3 = 0; _i3 <= colorSavers.length - 1; ++_i3) {
            if (_i3 == key) {
                colorSavers[_i3].selected = true;
                handler.setColorByHex(colorSavers[_i3].color);
                select = true;
                break;
            }
        }

        if (select && userEvents['selectcolorsaver']) {
            var callback = userEvents['selectcolorsaver'];
            callback(handler, colorSavers[key]);
        }

        if (!select && previouseSelect !== false) {
            colorSavers[previouseSelect].selected = true;
        }

        return select;
    }

    function updateColorSavers() {

        for (var i = 0; i <= colorSavers.length - 1; ++i) {
            if (colorSavers[i].selected) colorSavers[i].color = hex;
        }
    }

    function drawColorSavers() {
        if (colorSavers.length) {
            for (var i = 0; i <= colorSavers.length - 1; ++i) {
                colorSavers[i].draw();
            }
        }
    }

    // вывод интерфейса без курсоров
    // вынести буфер альфа слайдера отдельно от колеса и sv блока

    function drawColorPicker() {
        if (!ctx) return false;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // put buffered data
        if (rendered) {
            ctx.putImageData(canvasHelperData, 0, 0);
            drawColorSavers();
            return true;
        }

        // форма кольца может измениться только при изменении размеров виджета
        wheel.draw();
        svFig.draw();

        if (alpha) alphaSlider.draw();

        drawColorSavers();
        if (styleSwitch) styleSwitch.draw();

        // поместить текущее отрисованное изображение кольца + sv селектора в буфер
        // notice :
        // при перемещении курсора кольца сохранять буфер все изображение бессмысленно - sv блок постоянно обновляется, поэтому
        // сохраняем уже на событии выхода из процесса перемещения

        if (!drag) {
            //wheelBlockSize
            canvasHelperData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            rendered = true;
        }
        return true;
    }

    function draw() {
        if (!drawColorPicker()) {
            return false;
        }

        var curAngle = hsv.h * 360 - wheel.startAngle;

        // cursors

        if (alpha) {
            ctx.beginPath();
            var cursorHeight = 2;
            var cursorPaddingX = 2;
            var pointY = alphaSlider.height * (1 - a);
            ctx.rect(alphaSlider.pos.x - cursorPaddingX, alphaSlider.padding + pointY - cursorHeight / 2, alphaSlider.width + cursorPaddingX * 2, cursorHeight);
            ctx.strokeStyle = 'rgba(0,0,0, 0.8)';
            ctx.lineWidth = 2;

            ctx.stroke();
            ctx.closePath();
        }

        ctx.beginPath();

        var wheelCursorPath = rotatePath2(wheelCursor.path, curAngle, { x: wheel.pos.x, y: wheel.pos.y });
        for (var i = 0; i <= wheelCursorPath.length - 1; ++i) {
            wheelCursorPath[i].x += wheel.pos.x;
            wheelCursorPath[i].y += wheel.pos.y;
            if (i == 0) ctx.moveTo(wheelCursorPath[i].x, wheelCursorPath[i].y);else ctx.lineTo(wheelCursorPath[i].x, wheelCursorPath[i].y);
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        ctx.lineWidth = wheelCursor.lineWeight;
        ctx.stroke();
        ctx.closePath();

        var center = {
            x: (wheelCursorPath[0].x + wheelCursorPath[2].x) / 2,
            y: (wheelCursorPath[0].y + wheelCursorPath[2].y) / 2
        };

        ctx.beginPath();
        ctx.arc(center.x, center.y, 15, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'rgba(255,255,255, 1)';
        ctx.lineWidth = 2;

        ctx.stroke();
        ctx.closePath();

        // sv cursor
        if (hsv.v > 0.5 && hsv.s < 0.5) ctx.strokeStyle = 'rgba(0, 0, 0, 1)';else ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
        //ctx.strokeStyle='rgba(255,255, 255, 1)'

        //document.getElementById('test3').value = 'h' + hsv.h.toFixed(2) + ' s'  + hsv.s.toFixed(2) + ' v'  + hsv.v.toFixed(2)

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(hsv.x, hsv.y, svCursor.radius, 0, PI * 2);

        ctx.stroke();
        ctx.closePath();

        return false;
    }

    this.popUpClose = function (e) {
        if (popup.tag === false) return;

        if (e) {
            if (e.target == input || e.target == canvas) return false;
            if (e.target == popup.tag) return false;
        }

        popup.tag.style.display = 'none';
        if (KellyColorPicker.activePopUp == handler) KellyColorPicker.activePopUp = false;
    };

    // if 'popupshow' user event is setted and return false - prevent show popup default behavior

    this.popUpShow = function (e) {
        if (popup.tag === false) return;

        if (userEvents['popupshow']) {
            var callback = userEvents['popupshow'];
            if (!callback(handler, e)) return;
        }

        // include once 
        if (!KellyColorPicker.popupEventsInclude) {
            addEventListner(document, 'click', function (e) {
                if (KellyColorPicker.activePopUp) return KellyColorPicker.activePopUp.popUpClose(e);else return false;
            }, 'popup_close_');
            addEventListner(window, 'resize', function (e) {
                if (KellyColorPicker.activePopUp) return KellyColorPicker.activePopUp.popUpShow(e);
            }, 'popup_resize_');
            KellyColorPicker.popupEventsInclude = true;
        }

        if (KellyColorPicker.activePopUp) {
            KellyColorPicker.activePopUp.popUpClose(false);
        }

        var topMargin = handler.getCanvas().width;

        var alpha = handler.getAlphaFig();
        if (alpha) {
            topMargin -= alpha.width + alpha.padding;
        }

        var paddingPopup = parseInt(popup.tag.style.paddingBottom) + parseInt(popup.tag.style.paddingTop);
        if (paddingPopup <= 0) {
            paddingPopup = 0;
        }

        var viewportOffset = input.getBoundingClientRect();
        var top = viewportOffset.top + (window.scrollY || window.pageYOffset || document.body.scrollTop) - paddingPopup;
        var left = viewportOffset.left + (window.scrollX || window.pageXOffset || document.body.scrollLeft);

        popup.tag.style.top = top - topMargin - popup.margin + 'px';
        popup.tag.style.left = left + 'px';
        popup.tag.style.display = 'block';

        KellyColorPicker.activePopUp = handler;
        return false;
    };

    this.setHueByDot = function (dot) {
        var angle = getAngle(dot, wheel.pos) + wheel.startAngle;
        if (angle < 0) angle = 360 + angle;

        hsv.h = angle / 360;

        rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
        hex = rgbToHex(rgb);

        updateColorSavers();

        if (userEvents['change']) {
            var callback = userEvents['change'];
            callback(handler);
        }

        updateInput();

        rendered = false;
        draw();
    };

    this.setColorForColorSaver = function (cString, align) {
        var colorData = readColorData(cString, true);
        if (!colorData) return;

        var colorSaver = handler.getColorSaver(align);
        if (colorSaver.selected) {
            this.setColorByHex(cString, false);
        } else {
            colorSaver.color = colorData.h;
            draw();
        }

        return true;
    };

    // update color with redraw canvas and update input hex value
    // now support rgba \ rgb string format input

    this.setColorByHex = function (inputHex, manualEnter) {

        if (!manualEnter) manualEnter = false;
        var inputAlpha = a;

        if (inputHex !== false) {

            if (!inputHex || !inputHex.length) return;

            var colorData = readColorData(inputHex, true);
            if (!colorData) return;

            inputHex = colorData.h;
            if (alpha) inputAlpha = colorData.a;
        } else inputHex = hex;

        if (alpha && inputHex == hex && rendered && inputAlpha != a) {
            a = inputAlpha;

            draw(); // slider always redraws in current even if part of canvas buffered
            return;
        }

        if (hex && inputHex == hex && rendered) return;

        // set and redraw all

        a = inputAlpha;
        rgb = hexToRgb(inputHex);
        hex = inputHex;
        hsv = rgbToHsv(rgb);

        var dot = svFig.svToDot(hsv);
        hsv.x = dot.x;
        hsv.y = dot.y;

        rendered = false;
        updateColorSavers();
        draw();

        if (userEvents['change']) {
            var callback = userEvents['change'];
            callback(handler);
        }

        updateInput(manualEnter);
    };

    this.setAlphaByDot = function (dot) {
        a = alphaSlider.dotToAlpha(dot);

        if (userEvents['change']) {
            var callback = userEvents['change'];
            callback(handler);
        }

        updateInput();
        draw();
    };

    this.setAlpha = function (alpha) {
        a = alpha;
        updateInput();
        draw();
    };

    this.setColorByDot = function (dot) {
        var sv = svFig.dotToSv(dot);

        hsv.s = sv.s;
        hsv.v = sv.v;
        hsv.x = dot.x;
        hsv.y = dot.y;

        if (hsv.s > 1) hsv.s = 1;
        if (hsv.s < 0) hsv.s = 0;
        if (hsv.v > 1) hsv.v = 1;
        if (hsv.v < 0) hsv.v = 0;

        rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
        hex = rgbToHex(rgb);

        updateColorSavers();

        if (userEvents['change']) {
            var callback = userEvents['change'];
            callback(handler);
        }

        updateInput();
        draw();
    };

    this.mouseOutEvent = function () {
        if (svCursorMouse.curType > 0 && !KellyColorPicker.cursorLock) {
            svCursorMouse.initStandartCursor();
        }
    };

    // перемещение указателя по canvas в режиме покоя
    this.mouseMoveRest = function (e) {
        if (drag) return;

        if (!cursorAnimReady) {
            return;
        }

        cursorAnimReady = false;
        var newDot = getEventDot(e);
        svCursorMouse.updateCursor(newDot);
        requestAnimationFrame(function () {
            cursorAnimReady = true;
        });

        if (userEvents['mousemoverest']) {
            var callback = userEvents['mousemoverest'];
            callback(e, handler, newDot);
        }
    };

    // to prevent scroll by touches while change color
    // в FireFox под андройд есть 'фича' которая скрывает или раскрывает тулбар адресной строки при движении пальцем
    // отключить её можно только через опцию about:config browser.chrome.dynamictoolbar

    this.touchMoveEvent = function () {
        if (drag) {
            event.preventDefault();
        }
    };

    // маршрутизатор событий нажатий на элементы
    this.mouseDownEvent = function (event) {
        event.preventDefault();

        var move = void 0,
            up = false;
        var newDot = getEventDot(event);
        // console.log('mouseDownEvent : cur : ' + newDot.x + ' | ' + newDot.y)

        if (wheel.isDotIn(newDot)) {
            drag = 'wheel';
            handler.setHueByDot(newDot);

            move = function move(e) {
                handler.wheelMouseMove(e, newDot);
            };
            up = function up(e) {
                KellyColorPicker.cursorLock = false;
                handler.wheelMouseUp(e, newDot);
            };
        } else if (svFig.isDotIn(newDot)) {
            drag = 'sv';
            handler.setColorByDot(newDot);

            move = function move(e) {
                handler.svMouseMove(e, newDot);
            };
            up = function up(e) {
                KellyColorPicker.cursorLock = false;
                handler.svMouseUp(e, newDot);
            };
        } else if (alpha && alphaSlider.isDotIn(newDot)) {
            drag = 'alpha';
            handler.setAlphaByDot(newDot);

            move = function move(e) {
                handler.alphaMouseMove(e, newDot);
            };
            up = function up(e) {
                KellyColorPicker.cursorLock = false;
                handler.alphaMouseUp(e, newDot);
            };
        } else if (styleSwitch && styleSwitch.isDotIn(newDot)) {
            handler.setMethod();
        } else if (colorSavers.length) {
            // here all items with post check of dot in

            for (var i = 0; i <= colorSavers.length - 1; ++i) {
                if (colorSavers[i].isDotIn(newDot)) {
                    selectColorSaver(i);
                    break;
                }
            }
        }

        if (move && up) {
            disableEvents();
            KellyColorPicker.cursorLock = handler;
            addEventListner(document, 'mouseup', up, 'action_process_');
            addEventListner(document, 'mousemove', move, 'action_process_');
            addEventListner(document, 'touchend', up, 'action_process_');
            addEventListner(document, 'touchmove', move, 'action_process_');
        }
    };

    this.wheelMouseMove = function (event) {
        event.preventDefault();

        if (!drag) return;

        if (!cursorAnimReady) {
            return;
        }
        cursorAnimReady = false;
        var newDot = getEventDot(event);

        requestAnimationFrame(function () {
            cursorAnimReady = true;
        });

        handler.setHueByDot(newDot);

        if (userEvents['mousemoveh']) {
            var callback = userEvents['mousemoveh'];
            callback(event, handler, newDot);
        }
    };

    this.wheelMouseUp = function (event) {
        event.preventDefault();
        if (!drag) return;

        removeEventListener(document, 'mouseup', 'action_process_');
        removeEventListener(document, 'mousemove', 'action_process_');
        removeEventListener(document, 'touchend', 'action_process_');
        removeEventListener(document, 'touchmove', 'action_process_');

        enableEvents();
        drag = false;

        rendered = false;
        draw();

        var newDot = getEventDot(event);
        svCursorMouse.updateCursor(newDot);

        if (userEvents['mouseuph']) {
            var callback = userEvents['mouseuph'];
            callback(event, handler, newDot);
        }
    };

    this.alphaMouseMove = function (event) {
        event.preventDefault();
        if (!drag) return;

        if (!cursorAnimReady) {
            return;
        }

        cursorAnimReady = false;
        var newDot = getEventDot(event);

        newDot = alphaSlider.limitDotPosition(newDot);

        requestAnimationFrame(function () {
            cursorAnimReady = true;
        });
        //setTimeout(function() {cursorAnimReady = true}, 1000/30)

        handler.setAlphaByDot(newDot);

        if (userEvents['mousemovealpha']) {
            var callback = userEvents['mousemovealpha'];
            callback(event, handler, newDot);
        }
    };

    this.alphaMouseUp = function (event) {
        event.preventDefault();
        if (!drag) return;

        removeEventListener(document, 'mouseup', 'action_process_');
        removeEventListener(document, 'mousemove', 'action_process_');
        removeEventListener(document, 'touchend', 'action_process_');
        removeEventListener(document, 'touchmove', 'action_process_');

        enableEvents();
        drag = false;

        var newDot = getEventDot(event);
        svCursorMouse.updateCursor(newDot);

        if (userEvents['mouseupalpha']) {
            var callback = userEvents['mouseupalpha'];
            callback(event, handler, newDot);
        }
    };

    this.svMouseMove = function (event) {
        event.preventDefault();
        if (!drag) return;

        if (!cursorAnimReady) {
            return;
        }

        cursorAnimReady = false;
        var newDot = getEventDot(event);

        // console.log('svMouseMove : start : ' + dot.x + ' | ' + dot.y + ' cur : ' + newDot.x + ' | ' + newDot.y)

        newDot = svFig.limitDotPosition(newDot);

        requestAnimationFrame(function () {
            cursorAnimReady = true;
        });
        //setTimeout(function() {cursorAnimReady = true}, 1000/30)

        handler.setColorByDot(newDot);

        if (userEvents['mousemovesv']) {
            var callback = userEvents['mousemovesv'];
            callback(event, handler, newDot);
        }
    };

    this.svMouseUp = function (event) {
        event.preventDefault();
        if (!drag) return;

        removeEventListener(document, 'mouseup', 'action_process_');
        removeEventListener(document, 'mousemove', 'action_process_');
        removeEventListener(document, 'touchend', 'action_process_');
        removeEventListener(document, 'touchmove', 'action_process_');

        enableEvents();
        drag = false;

        var newDot = getEventDot(event);
        svCursorMouse.updateCursor(newDot);

        if (alpha) {
            rendered = false;
            draw();
        }

        if (userEvents['mouseupsv']) {
            var callback = userEvents['mouseupsv'];
            callback(event, handler, newDot);
        }
    };

    this.addUserEvent = function (event, callback) {
        userEvents[event] = callback;
        return true;
    };

    this.removeUserEvent = function (event) {
        if (!userEvents[event]) return false;
        userEvents[event] = null;
        return true;
    };

    // для кастомизации отображения элементов виджета

    this.getCanvas = function () {
        if (!ctx) return false;
        return canvas;
    };

    this.getCtx = function () {
        if (!ctx) return false;
        return ctx;
    };

    this.getInput = function () {
        return input;
    };
    this.getSvFig = function () {
        return svFig;
    };
    this.getSvFigCursor = function () {
        return svCursor;
    };

    this.getWheel = function () {
        return wheel;
    };
    this.getWheelCursor = function () {
        return wheelCursor;
    };

    this.getCurColorHsv = function () {
        return hsv;
    };
    this.getCurColorRgb = function () {
        return rgb;
    };
    this.getCurColorHex = function () {
        return hex;
    };
    this.getCurColorRgba = function () {
        return { r: rgb.r, g: rgb.g, b: rgb.b, a: a };
    };
    this.getCurAlpha = function () {
        return a;
    };
    this.getAlphaFig = function () {
        if (alpha) return alphaSlider;else return false;
    };

    this.getPopup = function () {
        return popup;
    };
    this.getSize = function () {
        return wheelBlockSize;
    };

    // if align not setted get selected
    this.getColorSaver = function (align) {
        for (var i = 0; i <= colorSavers.length - 1; ++i) {
            if (!align && colorSavers[i].selected || colorSavers[i].align == align) {
                colorSavers[i].rgb = hexToRgb(colorSavers[i].color);
                colorSavers[i].hsv = rgbToHsv(colorSavers[i].rgb.r, colorSavers[i].rgb.g, colorSavers[i].rgb.b);
                return colorSavers[i];
            }
        }
    };

    this.setColorSaver = function (align) {

        if (!align) return false;

        for (var i = 0; i <= colorSavers.length - 1; ++i) {
            if (colorSavers[i].align == align) {
                selectColorSaver(i);
                return colorSavers[i];
            }
        }
    };

    this.updateView = function (dropBuffer) {
        if (!ctx) return false;

        if (dropBuffer) {
            wheel.imageData = null;
            svFig.imageData = null;
            canvasHelperData = null;
        }

        rendered = false;
        updateSize();
        draw();
        return true;
    };

    // resize canvas, with all data \ full refresh view
    // if size same as current and refresh letiable setted to true - refresh current view anyway
    // othervise exit with return true

    this.resize = function (size, refresh) {
        if (!ctx) return false;
        if (size == wheelBlockSize && !refresh) return true;

        rendered = false;
        wheel.imageData = null;
        svFig.imageData = null;
        canvasHelperData = null;
        wheelBlockSize = size;
        updateSize();

        handler.setColorByHex(false);
        return false;
    };

    this.syncSize = function () {

        if (!resizeWith) return false;

        var newSize = getSizeByElement(resizeWith);
        if (newSize) handler.resize(newSize);
        return false;
    };

    this.setMethod = function (newMethod) {
        if (!newMethod) {
            newMethod = 'triangle';
            if (method == 'triangle') newMethod = 'quad';
        }

        if (newMethod == method) return false;
        if (method != 'quad' && method != 'triangle') return false;

        method = newMethod;

        if (method == 'quad') svFig = getSvFigureQuad();
        if (method == 'triangle') svFig = getSvFigureTriangle();

        handler.resize(wheelBlockSize, true);

        if (userEvents['setmethod']) {
            var callback = userEvents['setmethod'];
            callback(handler, method);
        }

        return true;
    };

    // restore color of input ? 

    this.destroy = function () {
        if (!handler) {
            return false;
        }

        if (svCursorMouse.curType > 0) {
            KellyColorPicker.cursorLock = false;
            svCursorMouse.initStandartCursor();
        }

        if (drag) {
            removeEventListener(document, 'mouseup', 'action_process_');
            removeEventListener(document, 'mousemove', 'action_process_');
            removeEventListener(document, 'touchend', 'action_process_');
            removeEventListener(document, 'touchmove', 'action_process_');

            drag = false;
        }

        if (popup.tag) {
            removeEventListener(input, 'click', 'popup_');
        }

        if (input) {
            removeEventListener(input, 'click', 'input_edit_');
            removeEventListener(input, 'change', 'input_edit_');
            removeEventListener(input, 'keyup', 'input_edit_');
            removeEventListener(input, 'keypress', 'input_edit_');
        }

        // remove popup close and resize events if this picker include them erlier
        if (KellyColorPicker.popupEventsInclude && events['popup_close_click']) {
            if (KellyColorPicker.activePopUp) KellyColorPicker.activePopUp.popUpClose(false);

            removeEventListener(document, 'click', 'popup_close_');
            removeEventListener(window, 'resize', 'popup_resize_');

            KellyColorPicker.popupEventsInclude = false;
        }

        wheel.imageData = null;
        svFig.imageData = null;
        canvasHelperData = null;
        canvasHelper = null;

        if (place && place.parentNode) {
            place.parentNode.removeChild(place);
        }

        if (resizeWith) {
            removeEventListener(window, 'resize', 'canvas_');
        }

        disableEvents(); // remove canvas events		

        // debug test for check is all events removed 
        // for (let key in events) {
        // 	console.log('key : ' +  key + ' data ' + events[key])
        // }

        handler = null;
    };

    constructor(cfg);
}

/* static methods */

/**
 * Тригер для объектов KellyColorPicker, чтобы не сбрасывали стиль курсора при наведении если уже идет выбор цвета
 * Notice : при выходе курсора за границы текущего canvas, событие неизвестного объекта всегда может сбросить изображение курсора
 */

KellyColorPicker.cursorLock = false; // можно указывать handler объекта
KellyColorPicker.activePopUp = false;
KellyColorPicker.popupEventsInclude = false; // include events for document and window once for all elements

KellyColorPicker.attachToInputByClass = function (className, cfg) {

    var colorPickers = new Array();
    var inputs = document.getElementsByClassName(className);

    for (var i = 0; i < inputs.length; i++) {

        if (cfg) cfg.input = inputs[i];else cfg = { input: inputs[i], size: 150 };

        colorPickers.push(new KellyColorPicker(cfg));
    }

    return colorPickers;
};

exports.default = KellyColorPicker;
// KellyColorPicker.dragTrigger = false

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody,\nbutton,\nul,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ndl,\ndt,\ndd {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  font-weight: normal;\n}\nbody {\n  max-width: 800px;\n  margin: 0 auto;\n  background: #ffffff;\n  font-family: 'PingFang SC', 'Microsoft YaHei', 'STHeiti', 'sans-serif';\n}\n#hemayin-app {\n  font-size: 0.16rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\nli {\n  list-style: none;\n}\ni {\n  font-style: normal;\n}\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\ninput {\n  -webkit-appearance: none;\n}\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=text]:focus,\ninput[type=password]:focus,\ntextarea:focus {\n  -webkit-box-shadow: 0 0 0 1000px white inset;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\nimg {\n  border: none;\n}\n.model-open {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 800px;\n  overflow: hidden;\n}\n.hide {\n  display: none !important;\n}\n.max-limit {\n  width: 100%;\n  max-width: 800px;\n  left: 50% !important;\n  transform: translateX(-50%);\n}\n/***  font size  ***/\n@font-face {\n  font-family: 'hemayin';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "#iefix) format('embedded-opentype'), url(" + __webpack_require__(21) + ") format('truetype'), url(" + __webpack_require__(22) + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'hemayin' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-more2:before {\n  content: \"\\E958\";\n}\n.icon-wechatmoment:before {\n  content: \"\\E957\";\n}\n.icon-link:before {\n  content: \"\\E955\";\n}\n.icon-gear:before {\n  content: \"\\E954\";\n}\n.icon-more:before {\n  content: \"\\E953\";\n}\n.icon-menu-card:before {\n  content: \"\\E952\";\n}\n.icon-menu-home:before {\n  content: \"\\E956\";\n}\n.icon-truck:before {\n  content: \"\\E951\";\n}\n.icon-magic:before {\n  content: \"\\E93A\";\n}\n.icon-heart-line:before {\n  content: \"\\E950\";\n}\n.icon-factory:before {\n  content: \"\\E94F\";\n}\n.icon-coin:before {\n  content: \"\\E94E\";\n}\n.icon-plus-small:before {\n  content: \"\\E90A\";\n}\n.icon-camera:before {\n  content: \"\\E94C\";\n}\n.icon-bell:before {\n  content: \"\\E94D\";\n}\n.icon-tencentweibo:before {\n  content: \"\\E94B\";\n}\n.icon-qqzone:before {\n  content: \"\\E94A\";\n}\n.icon-qq:before {\n  content: \"\\E949\";\n}\n.icon-douban:before {\n  content: \"\\E948\";\n}\n.icon-temp-stop:before {\n  content: \"\\E947\";\n}\n.icon-temp-play:before {\n  content: \"\\E946\";\n}\n.icon-temp-microphone-stop:before {\n  content: \"\\E945\";\n}\n.icon-temp-Shape24:before {\n  content: \"\\E944\";\n}\n.icon-temp-arrow-opne:before {\n  content: \"\\E943\";\n}\n.icon-temp-arrow-close:before {\n  content: \"\\E942\";\n}\n.icon-pencil:before {\n  content: \"\\E941\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-temp-microphone:before {\n  content: \"\\E93F\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-eye:before {\n  content: \"\\E93D\";\n}\n.icon-time:before {\n  content: \"\\E93C\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-cart:before {\n  content: \"\\E939\";\n}\n.icon-address:before {\n  content: \"\\E900\";\n}\n.icon-alipay:before {\n  content: \"\\E901\";\n}\n.icon-arrow1-down:before {\n  content: \"\\E902\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-arrow1-right:before {\n  content: \"\\E904\";\n}\n.icon-arrow1-up:before {\n  content: \"\\E905\";\n}\n.icon-arrow2-down:before {\n  content: \"\\E906\";\n}\n.icon-arrow2-left:before {\n  content: \"\\E907\";\n}\n.icon-arrow2-right:before {\n  content: \"\\E908\";\n}\n.icon-arrow2-up:before {\n  content: \"\\E909\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-car:before {\n  content: \"\\E90B\";\n}\n.icon-checkbox-round-off:before {\n  content: \"\\E90D\";\n}\n.icon-checkbox-round-on:before {\n  content: \"\\E90E\";\n}\n.icon-checkbox-square-off:before {\n  content: \"\\E90F\";\n}\n.icon-checkbox-square-on:before {\n  content: \"\\E910\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-done:before {\n  content: \"\\E914\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-email:before {\n  content: \"\\E917\";\n}\n.icon-face:before {\n  content: \"\\E918\";\n}\n.icon-hamburger:before {\n  content: \"\\E919\";\n}\n.icon-heart:before {\n  content: \"\\E91A\";\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-id:before {\n  content: \"\\E91C\";\n}\n.icon-imformation:before {\n  content: \"\\E91D\";\n}\n.icon-info:before {\n  content: \"\\E91E\";\n}\n.icon-instagram:before {\n  content: \"\\E91F\";\n}\n.icon-logo-a:before {\n  content: \"\\E920\";\n}\n.icon-logo-artden:before {\n  content: \"\\E921\";\n}\n.icon-logo-word:before {\n  content: \"\\E922\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-password:before {\n  content: \"\\E927\";\n}\n.icon-paste:before {\n  content: \"\\E928\";\n}\n.icon-phone:before {\n  content: \"\\E929\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-search:before {\n  content: \"\\E92D\";\n}\n.icon-service:before {\n  content: \"\\E92E\";\n}\n.icon-share:before {\n  content: \"\\E92F\";\n}\n.icon-trash:before {\n  content: \"\\E930\";\n}\n.icon-triangle-down:before {\n  content: \"\\E931\";\n}\n.icon-triangle-up:before {\n  content: \"\\E932\";\n}\n.icon-user:before {\n  content: \"\\E933\";\n}\n.icon-wechat:before {\n  content: \"\\E934\";\n}\n.icon-wechatpay:before {\n  content: \"\\E935\";\n}\n.icon-weibo:before {\n  content: \"\\E936\";\n}\n.icon-wrong:before {\n  content: \"\\E937\";\n}\n.icon-zoom:before {\n  content: \"\\E938\";\n}\n.icon-temp-fill:before {\n  content: \"\\E93A\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93C\";\n}\n.icon-temp-shape:before {\n  content: \"\\E93E\";\n}\n.icon-temp-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-audio:before {\n  content: \"\\E90A\";\n}\n.icon-plus:before {\n  content: \"\\E92A\";\n}\n.icon-Shape2:before {\n  content: \"\\E944\";\n}\n.icon-temp-music:before {\n  content: \"\\E940\";\n}\n.icon-microphone:before {\n  content: \"\\E923\";\n}\n.icon-uniE938:before {\n  content: \"\\E938\";\n}\n.icon-temp-pause:before {\n  content: \"\\E93B\";\n}\n.icon-cross::before {\n  content: \"\\E913\";\n}\n.icon-trash:before {\n  content: '\\E930';\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-temp-arrow-opne::before {\n  content: '\\E943';\n}\n.icon-temp-arrow-close::before {\n  content: '\\E942';\n}\n.icon-address::before {\n  content: '\\E900';\n}\n.icon-help:before {\n  content: \"\\E91B\";\n}\n.icon-arrow1-left:before {\n  content: \"\\E903\";\n}\n.icon-edit:before {\n  content: \"\\E916\";\n}\n.icon-center:before {\n  content: \"\\E90C\";\n}\n.icon-mirror:before {\n  content: \"\\E925\";\n}\n.icon-mirror2:before {\n  content: \"\\E926\";\n}\n.icon-copy:before {\n  content: \"\\E911\";\n}\n.icon-crop:before {\n  content: \"\\E912\";\n}\n.icon-save:before {\n  content: \"\\E92C\";\n}\n.icon-rotate:before {\n  content: \"\\E92B\";\n}\n.icon-dropper:before {\n  content: \"\\E915\";\n}\n.icon-minus:before {\n  content: \"\\E924\";\n}\n.icon-reset:before {\n  content: \"\\E929\";\n}\n.icon-undo:before {\n  content: \"\\E91E\";\n}\n.icon-restore:before {\n  content: \"\\E91C\";\n}\n.header-wrap {\n  position: relative;\n  background-color: #f7f9fa;\n  z-index: 1;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: 1.75;\n}\n.header-wrap .back-btn {\n  font-size: .16rem;\n  color: #292929;\n  padding: 0.06rem .2rem;\n}\n.header-wrap .icon-help {\n  font-size: .16rem;\n  padding: .14rem .2rem;\n}\n.help-page {\n  position: fixed;\n  left: 50%;\n  top: 0;\n  width: 100%;\n  max-width: 800px;\n  background-color: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.help-page .close-wrap {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: .2rem;\n  font-size: .24rem;\n  color: #fff;\n}\n.help-page img {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.save-page-wrap .close-wrap {\n  font-size: .16rem;\n  line-height: 1.75;\n  color: #292929;\n  padding: .16rem .2rem;\n  display: inline-block;\n}\n.save-page-wrap .text-wrap .title {\n  font-size: .22rem;\n  line-height: 1.73;\n  text-align: center;\n  color: #292929;\n}\n.save-page-wrap .text-wrap .tip {\n  font-size: .14rem;\n  font-weight: 300;\n  line-height: 1.71;\n  text-align: center;\n  color: #757575;\n}\n.save-page-wrap .mdseinfo-wrap {\n  padding: .16rem .2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\nbody {\n  background-color: #f7f9fa;\n}\n.operation-area-wrap {\n  position: relative;\n}\n.operation-area-wrap .history-wrap {\n  position: absolute;\n  right: .56rem;\n  top: -0.22rem;\n  transform: translateY(-50%);\n  display: inline-flex;\n  z-index: 1;\n}\n.operation-area-wrap .history-wrap > div {\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 1.67;\n  text-align: center;\n  color: #292929;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: .44rem;\n  margin-left: .2rem;\n}\n.operation-area-wrap .history-wrap > div > i {\n  margin: 0 .05rem;\n}\n.operation-area-wrap .history-wrap > div.disabled {\n  color: #adadad;\n}\n.operation-area-wrap .mdse-component-wrap {\n  position: relative;\n  z-index: 1000;\n  padding-top: .06rem;\n  text-align: center;\n  background-color: #f7f9fa;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item {\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 0 .1rem;\n  cursor: pointer;\n  font-size: 0;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item img {\n  width: .4rem;\n  background-color: #adadaa;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item .mdse-component-name {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  color: #757575;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item.active {\n  background-color: #f7f9fa;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item.active .mdse-component-name {\n  color: #292929;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item.active img {\n  background-color: #618ca2;\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item.detail-color-btn-wrap .detail-color {\n  margin: 0.08rem;\n  width: .24rem;\n  height: .24rem;\n  background-color: #ffffff;\n  border: solid 1px rgba(0, 0, 0, 0.2);\n}\n.operation-area-wrap .mdse-component-wrap .mdse-component-item.detail-color-btn-wrap .mdse-component-name {\n  width: .4rem;\n  white-space: nowrap;\n}\n.operation-area-wrap .mdse-component-wrap.detail-color-show .mdse-component-item.active .mdse-component-name {\n  color: #292929;\n}\n.operation-area-wrap .mdse-component-wrap.detail-color-show .mdse-component-item.active img {\n  background-color: #adadaa;\n}\n.operation-area-wrap .mdse-component-wrap.detail-color-show .mdse-component-item.detail-color-btn-wrap .mdse-component-name {\n  color: #292929;\n}\n.show-area-wrap {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  display: flex;\n  margin-top: 30px;\n  align-items: center;\n  justify-content: center;\n}\n.show-area-wrap .prev-wrap,\n.show-area-wrap .next-wrap {\n  position: absolute;\n  cursor: pointer;\n}\n.show-area-wrap .prev-wrap i,\n.show-area-wrap .next-wrap i {\n  display: flex;\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  align-items: center;\n  justify-content: center;\n}\n.show-area-wrap .prev-wrap i.disabled,\n.show-area-wrap .next-wrap i.disabled {\n  cursor: not-allowed;\n  color: #d6d6d6;\n}\n.show-area-wrap .prev-wrap i.disabled:active,\n.show-area-wrap .next-wrap i.disabled:active {\n  transform: scale(1);\n}\n.show-area-wrap .prev-wrap i:active,\n.show-area-wrap .next-wrap i:active {\n  transform: scale(0.9);\n}\n.show-area-wrap .prev-wrap {\n  left: 10%;\n}\n.show-area-wrap .next-wrap {\n  right: 10%;\n}\n.show-area-wrap .component-bg-color {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background: #ffffff;\n}\n.show-area-wrap .image-wrap {\n  position: relative;\n  z-index: 10;\n  width: 600px;\n  height: 600px;\n  transform: scale(1);\n}\n.show-area-wrap .image-wrap .artwork-img {\n  z-index: 20;\n}\n.show-area-wrap .image-wrap .component-img {\n  z-index: 100;\n}\n.show-area-wrap .image-wrap img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 600px;\n}\n.show-area-wrap .image-wrap .line-top,\n.show-area-wrap .image-wrap .line-bottom {\n  position: absolute;\n  left: 50%;\n  height: 10px;\n  width: 100%;\n  background-color: #f7f9fa;\n  transform: translateX(-50%);\n}\n.show-area-wrap .image-wrap .line-top {\n  top: -5px;\n}\n.show-area-wrap .image-wrap .line-bottom {\n  bottom: -5px;\n}\n.show-area-wrap .move-wrap {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 50%;\n  width: 600px;\n  height: 600px;\n  transform: translateX(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap {\n  position: absolute;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div {\n  width: 100%;\n  height: 100%;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move {\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap {\n  cursor: all-scroll;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span {\n  position: absolute;\n  z-index: 10;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:first-child {\n  top: -4px;\n  left: -4px;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(2) {\n  top: -4px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(3) {\n  top: -4px;\n  right: -4px;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(4) {\n  top: 50%;\n  left: -4px;\n  transform: translateY(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(5) {\n  top: 50%;\n  right: -4px;\n  transform: translateY(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(6) {\n  bottom: -4px;\n  left: -4px;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:nth-child(7) {\n  bottom: -4px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span:last-child {\n  right: -8px;\n  bottom: -8px;\n  width: 16px;\n  height: 16px;\n  border: none;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span i {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border: 1px solid;\n  border-radius: 50%;\n  background: #ffffff;\n  position: absolute;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .t {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .rt {\n  right: 0;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .l {\n  top: 50%;\n  transform: translateY(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .r {\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .lb {\n  bottom: 0;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .b {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .canvas-border-wrap span .rb {\n  width: 16px;\n  height: 16px;\n  border: none;\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move .not-enough {\n  cursor: pointer;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n  line-height: 1.67;\n  color: #ffffff;\n  width: 72px;\n  height: 24px;\n  opacity: 0.9;\n  border-radius: 37px;\n  background-image: linear-gradient(109deg, #ffa779, #fd6e44);\n}\n.show-area-wrap .move-wrap .hammer-wrap > div .canvas-move.active {\n  border: 1px solid ;\n}\n.create-result-wrap {\n  width: 100%;\n  max-width: 800px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.create-result-wrap .cover-wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  color: #ffffff;\n  position: relative;\n}\n.create-result-wrap .cover-wrap .cover-img {\n  width: 2.95rem;\n  height: 2.95rem;\n  overflow: hidden;\n}\n.create-result-wrap .cover-wrap .cover-img .img-list {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  transition: transform 1s;\n}\n.create-result-wrap .cover-wrap .cover-img .img-list .img-item {\n  display: inline-block;\n  width: 2.95rem;\n  height: 2.95rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.create-result-wrap .cover-wrap .cover-img .img-list .img-item img {\n  width: 100%;\n  height: 100%;\n}\n.create-result-wrap .cover-wrap .cover-slide {\n  position: absolute;\n  left: 50%;\n  bottom: -0.3rem;\n  transform: translateX(-50%);\n  width: 1.6rem;\n  height: 1px;\n  border-radius: 1px;\n  background-color: rgba(0, 0, 0, 0.16);\n}\n.create-result-wrap .cover-wrap .cover-slide span {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: .01rem;\n  box-sizing: border-box;\n}\n.create-result-wrap .cover-wrap .cover-slide span.active {\n  background-color: #292929;\n}\n.create-tool-bar-wrap {\n  width: 100%;\n  max-width: 800px;\n  position: fixed;\n  left: 50%;\n  bottom: .5rem;\n  transform: translateX(-50%);\n  overflow: hidden;\n  height: 0.7rem;\n}\n.create-tool-bar-wrap .create-tool-bar-content {\n  background-color: #fff;\n  overflow-x: scroll;\n  padding-bottom: 20px;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list {\n  overflow: hidden;\n  width: 116%;\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item {\n  position: relative;\n  min-width: 0.5rem;\n  height: 0.7rem;\n  padding: .15rem 0.1rem;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item i {\n  font-size: 0.25rem;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item .text {\n  white-space: nowrap;\n  font-size: 0.12rem;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item.fill .bg-color {\n  display: inline-block;\n  width: .24rem;\n  height: .24rem;\n  border: solid 1px rgba(0, 0, 0, 0.32);\n  border-radius: 50%;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item.fill:after {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: .3rem;\n  background-color: #f0f0f0;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item.empty {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.create-tool-bar-wrap .create-tool-bar-content .create-tool-bar-list .create-tool-bar-list-item.active {\n  opacity: 1;\n}\n.select-color-wrap {\n  width: 100%;\n  max-width: 800px;\n  position: fixed;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  background-color: #ffffff;\n  height: 1.2rem;\n  z-index: 10;\n  box-sizing: border-box;\n}\n.select-color-wrap .text-wrap {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.71;\n  color: #757575;\n  padding: .11rem .2rem;\n}\n.select-color-wrap .color-picker-wrap {\n  position: absolute;\n  right: .2rem;\n  bottom: .6rem;\n}\n.select-color-wrap .select-color-btn-wrap {\n  height: .5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: inset 0 0.5px 0 0 #f0f0f0;\n}\n.select-color-wrap .select-color-btn-wrap span {\n  font-size: .24rem;\n  padding: .13rem .3rem;\n}\n.bottom-btn-wrap {\n  display: flex;\n  width: 100%;\n  max-width: 800px;\n  position: fixed;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  align-items: center;\n  background-color: #ffffff;\n  box-shadow: inset 0 0.5px 0 0 #f0f0f0;\n}\n.bottom-btn-wrap span {\n  flex: 1;\n  font-size: 14px;\n  line-height: .5rem;\n  text-align: center;\n  color: #757575;\n}\n.bottom-btn-wrap span.active {\n  color: #88b4c1;\n}\n", ""]);

// exports


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.loading-wrap[data-v-e9ce5af6] {\n  position: fixed;\n  z-index: 10000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.loading-wrap .center-position[data-v-e9ce5af6] {\n  margin-top: -65px;\n}\n.loading-wrap > *[data-v-e9ce5af6] {\n  position: relative;\n  top: 50%;\n  display: block;\n  text-align: center;\n}\n.loading-wrap .loading-text[data-v-e9ce5af6] {\n  font-size: 0.16rem;\n  line-height: 0.28rem;\n  color: #ffffff;\n}\n.loading-wrap .line-scale[data-v-e9ce5af6] {\n  padding-bottom: 0.2rem;\n}\n@-webkit-keyframes line-scale-data-v-e9ce5af6 {\n0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n}\n50% {\n    -webkit-transform: scaley(0.4);\n    transform: scaley(0.4);\n}\n100% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n}\n}\n@keyframes line-scale-data-v-e9ce5af6 {\n0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n}\n50% {\n    -webkit-transform: scaley(0.4);\n    transform: scaley(0.4);\n}\n100% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n}\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6]:nth-child(1) {\n  -webkit-animation: line-scale-data-v-e9ce5af6 1s 0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation: line-scale-data-v-e9ce5af6 1s 0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6]:nth-child(2) {\n  -webkit-animation: line-scale-data-v-e9ce5af6 1s 0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation: line-scale-data-v-e9ce5af6 1s 0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6]:nth-child(3) {\n  -webkit-animation: line-scale-data-v-e9ce5af6 1s 0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation: line-scale-data-v-e9ce5af6 1s 0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6]:nth-child(4) {\n  -webkit-animation: line-scale-data-v-e9ce5af6 1s 0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation: line-scale-data-v-e9ce5af6 1s 0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6]:nth-child(5) {\n  -webkit-animation: line-scale-data-v-e9ce5af6 1s 0.5s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation: line-scale-data-v-e9ce5af6 1s 0.5s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n}\n.loading-wrap .line-scale > div[data-v-e9ce5af6] {\n  display: inline-block;\n  width: 4px;\n  height: 35px;\n  margin: 2px;\n  border-radius: 2px;\n  background-color: #ffffff;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.select-type-container {\n  width: 100%;\n  max-width: 800px;\n  overflow: hidden;\n}\n.select-type-container .select-type-wrap {\n  padding-bottom: 1rem;\n}\n.select-type-container .select-type-wrap .header {\n  padding-top: .44rem;\n}\n.select-type-container .select-type-wrap .header .close-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: .16rem;\n  line-height: 1.75;\n  color: #292929;\n  box-sizing: border-box;\n}\n.select-type-container .select-type-wrap .header .close-wrap span {\n  display: inline-block;\n  padding: .16rem .2rem;\n}\n.select-type-container .select-type-wrap .header .title {\n  text-align: center;\n  font-size: .22rem;\n  line-height: 1.73;\n  color: #292929;\n}\n.select-type-container .select-type-wrap .header .tip {\n  text-align: center;\n  font-size: .14rem;\n  font-weight: 300;\n  line-height: 1.71;\n  color: #757575;\n}\n.select-type-container .select-type-wrap .nav-list {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: .16rem;\n}\n.select-type-container .select-type-wrap .nav-list .nav-item {\n  flex: 1;\n  text-align: center;\n  cursor: pointer;\n}\n.select-type-container .select-type-wrap .nav-list .nav-item span {\n  color: #757575;\n  display: inline-block;\n  line-height: .44rem;\n  position: relative;\n}\n.select-type-container .select-type-wrap .nav-list .nav-item.active span {\n  color: #454b56;\n}\n.select-type-container .select-type-wrap .nav-list .nav-item.active span:before {\n  position: absolute;\n  bottom: 0;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  content: '';\n  background-color: #77f7b2;\n}\n.select-type-container .select-type-wrap .mdse-type-list {\n  overflow-y: scroll;\n  width: 100%;\n  padding-right: 20px;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item {\n  position: relative;\n  margin-left: .2rem;\n  margin-top: .2rem;\n  display: inline-block;\n  width: 28%;\n  cursor: pointer;\n  text-align: center;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .check-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: .16rem;\n  height: .16rem;\n  font-size: 0;\n  border-radius: .12rem;\n  border: solid 1px #adadad;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .check-wrap.checked {\n  font-size: .16rem;\n  color: #fff;\n  background-color: #454b56;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .title {\n  font-size: .16rem;\n  line-height: 28px;\n  color: #454b56;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .price {\n  font-size: .12rem;\n  line-height: 1.67;\n  color: #757575;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .edit {\n  font-size: .12rem;\n  color: #292929;\n  border-radius: .15rem;\n  border: solid 1px #f0f0f0;\n  width: .53rem;\n  margin: 0.05rem auto 0;\n  line-height: .24rem;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .designing {\n  font-size: .12rem;\n  color: #adadad;\n  font-weight: 300;\n  border-radius: .15rem;\n  border: none;\n  margin: 0.05rem auto 0;\n  line-height: .26rem;\n  /* for IE9+,FF,CH,OP,SF 占据空间*/\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .designing .dotting {\n  display: inline-block;\n  min-width: 2px;\n  min-height: 2px;\n  box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;\n  /* for IE9+, ..., 3个点 */\n  animation: dot 4s infinite step-start both;\n  /* for IE10+, ... */\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .designing :root .dotting {\n  margin-right: 8px;\n}\n@keyframes dot {\n25% {\n    box-shadow: none;\n}\n  /* 0个点 */\n50% {\n    box-shadow: 2px 0 currentColor;\n}\n  /* 1个点 */\n75% {\n    box-shadow: 2px 0 currentColor, 6px 0 currentColor;\n    /* 2个点 */\n}\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .img-wrap {\n  width: 100%;\n  padding: 50% 0;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .img-wrap img {\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .img-wrap.designing {\n  opacity: 0.5;\n}\n.select-type-container .select-type-wrap .mdse-type-list .mdse-type-item .published-tips {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 16px;\n  line-height: 28px;\n  color: #454b56;\n}\n.select-type-container .select-type-wrap .save-btn-wrap {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  width: 100%;\n  font-size: .16rem;\n  text-align: center;\n  color: #ffffff;\n  line-height: .5rem;\n  border-radius: 1px;\n  background-color: #454b56;\n}\n", ""]);

// exports


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/create/creating.gif?584c9890d703b4d22ccc037692fdb968";

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/create/help.png?9fe89dc0be000183c9fe8bc8442c25bc";

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(177);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd3d5a56_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1034);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd3d5a56_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/ColorPicker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd3d5a56", Component.options)
  } else {
    hotAPI.reload("data-v-dd3d5a56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(178);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cca2d4d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1032);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1143)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cca2d4d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/OperationArea/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cca2d4d0", Component.options)
  } else {
    hotAPI.reload("data-v-cca2d4d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(179);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9ce5af6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1037);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1147)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e9ce5af6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9ce5af6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/OperationArea/loading/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9ce5af6", Component.options)
  } else {
    hotAPI.reload("data-v-e9ce5af6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(180);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_138ddb3e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(936);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1055)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_138ddb3e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/SavePage/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-138ddb3e", Component.options)
  } else {
    hotAPI.reload("data-v-138ddb3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(181);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa2454b0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1042);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1150)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa2454b0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/SelectType/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa2454b0", Component.options)
  } else {
    hotAPI.reload("data-v-fa2454b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08a5a733_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(927);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1047)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08a5a733_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/2c/create/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08a5a733", Component.options)
  } else {
    hotAPI.reload("data-v-08a5a733", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "hemayin-app" } }, [
    _c(
      "div",
      [
        _vm.step == "select-type"
          ? _c("SelectType", {
              attrs: {
                mdseTypeData: _vm.mdseTypeData,
                activeIndex: _vm.activeIndex,
                artworkDetail: _vm.artworkDetail,
                autoDesignArr: _vm.autoDesignArr,
                autoDesigningArr: _vm.autoDesigningArr
              },
              on: {
                setStep: _vm.setStep,
                setActiveIndex: _vm.setActiveIndex,
                getMdseTypeComponent: _vm.getMdseTypeComponent,
                setAutoDesign: _vm.setAutoDesign
              }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("div", [
      _vm.step == "create-edit" ||
      _vm.step == "create-result" ||
      _vm.step == "create-loading"
        ? _c("div", { staticClass: "header-wrap" }, [
            _c(
              "span",
              { staticClass: "back-btn", on: { click: _vm.showQuitModal } },
              [_vm._v("返回")]
            ),
            _vm._v(" "),
            _c("span", {
              staticClass: "icon-help",
              on: { click: _vm.showHelpPage }
            })
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.step !== "select-type" && _vm.step !== "save-page"
          ? _c("OperationArea", {
              attrs: {
                step: _vm.step,
                mdseTypeComponentData: _vm.mdseTypeComponentData,
                currentMdseTypeDraft: _vm.currentMdseTypeDraft,
                artworkDetail: _vm.artworkDetail,
                createResult: _vm.createResult,
                mainColor: _vm.mainColor
              },
              on: {
                updateMdseTypeDraft: _vm.updateMdseTypeDraft,
                createMdseInfo: _vm.createMdseInfo,
                saveMdseInfo: _vm.saveMdseInfo,
                setStep: _vm.setStep
              }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.step == "save-page"
          ? _c("SavePage", {
              attrs: {
                artworkDetail: _vm.artworkDetail,
                autoDesignArr: _vm.autoDesignArr
              }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("Modal", {
          attrs: {
            visible: _vm.quitState,
            title: "放弃当前操作？",
            btnGroup: ["取消", "确定"]
          },
          on: { onCancel: _vm.closeQuitModal, onOk: _vm.backHandle }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.helpState
      ? _c("div", { staticClass: "help-page" }, [
          _c(
            "div",
            { staticClass: "close-wrap", on: { click: _vm.hideHelpPage } },
            [_c("i", { staticClass: "icon-cross" })]
          ),
          _vm._v(" "),
          _c("img", {
            attrs: { src: __webpack_require__(820), alt: "" }
          })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-08a5a733", esExports)
  }
}

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "save-page-wrap" }, [
    _c("div", { staticClass: "close-wrap", on: { click: _vm.closeHandle } }, [
      _vm._v("\n        关闭\n    ")
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mdseinfo-wrap" },
      [
        _c("MdseInfoList", {
          attrs: {
            mdseinfoList: _vm.mdseinfoList,
            artworkTitle: _vm.artworkDetail.artwork_title
              ? _vm.artworkDetail.artwork_title
              : ""
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _c("p", { staticClass: "title" }, [_vm._v(" 🎉 保存成功 🎉")]),
      _vm._v(" "),
      _c("p", { staticClass: "tip" }, [
        _vm._v("Tip 现在可以将商品加入到购物车了")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-138ddb3e", esExports)
  }
}

/***/ })

},[1161]);