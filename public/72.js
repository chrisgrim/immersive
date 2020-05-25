(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      interactiveLevels: '',
      active: '',
      interactiveLevel: {
        name: '',
        description: ''
      },
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: ''
    };
  },
  computed: {},
  methods: {
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    onSubmit: function onSubmit() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      ;
      var data = {
        name: this.interactiveLevel.name,
        description: this.interactiveLevel.description
      };
      axios.post('/interactivelevels', data).then(function (res) {
        console.log(res.data);
        _this.isModalVisible = false;
        _this.interactiveLevel = '';

        _this.loadInteractiveLevels();
      })["catch"](function (error) {
        _this.isModalVisible = false;
      });
    },
    showModal: function showModal(interactiveLevel) {
      this.modalDelete = interactiveLevel;
      this.isEditModalVisible = true;
    },
    deleteInteractiveLevel: function deleteInteractiveLevel(interactiveLevel) {
      var _this2 = this;

      axios["delete"]("/interactivelevels/".concat(interactiveLevel.id)).then(function (res) {
        console.log(res.data);
        _this2.isEditModalVisible = false;

        _this2.loadInteractiveLevels();
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    loadInteractiveLevels: function loadInteractiveLevels() {
      var _this3 = this;

      axios.get('/interactivelevels').then(function (res) {
        _this3.interactiveLevels = res.data;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    saveInteractive: function saveInteractive(interactiveLevel) {
      var _this4 = this;

      var data = {
        name: interactiveLevel.name
      };
      axios.patch("/interactivelevels/".concat(interactiveLevel.id), data).then(function (res) {
        console.log(res.data);

        _this4.loadInteractiveLevels();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    },
    saveDescription: function saveDescription(interactiveLevel) {
      var _this5 = this;

      var data = {
        description: interactiveLevel.description
      };
      axios.patch("/interactivelevels/".concat(interactiveLevel.id), data).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    },
    saveRank: function saveRank(interactiveLevel) {
      var _this6 = this;

      var data = {
        rank: interactiveLevel.rank
      };
      axios.patch("/interactivelevels/".concat(interactiveLevel.id), data).then(function (res) {
        console.log(res.data);

        _this6.loadInteractiveLevels();
      })["catch"](function (error) {
        _this6.serverErrors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    this.loadInteractiveLevels();
  },
  validations: {
    interactiveLevel: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "genres" },
    [
      _c("div", {}, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Interactive Levels")]),
          _vm._v(" "),
          _c("div", { staticClass: "add" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.isModalVisible = true
                  }
                }
              },
              [_c("p", [_vm._v("+")])]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.interactiveLevels, function(interactiveLevel, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: interactiveLevel.name,
                expression: "interactiveLevel.name"
              }
            ],
            attrs: { type: "text", placeholder: "Interactive Level" },
            domProps: { value: interactiveLevel.name },
            on: {
              blur: function($event) {
                return _vm.saveInteractive(interactiveLevel)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(interactiveLevel, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: interactiveLevel.description,
                expression: "interactiveLevel.description"
              }
            ],
            attrs: {
              type: "text",
              placeholder: "Interactive level description"
            },
            domProps: { value: interactiveLevel.description },
            on: {
              blur: function($event) {
                return _vm.saveDescription(interactiveLevel)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(interactiveLevel, "description", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: interactiveLevel.rank,
                expression: "interactiveLevel.rank"
              }
            ],
            attrs: { type: "text", placeholder: "Rank" },
            domProps: { value: interactiveLevel.rank },
            on: {
              blur: function($event) {
                return _vm.saveRank(interactiveLevel)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(interactiveLevel, "rank", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-circle",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showModal(interactiveLevel)
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _vm.isEditModalVisible
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.isEditModalVisible = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c("div", { staticClass: "circle del" }, [
                  _c("p", [_vm._v("X")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("h3", [_vm._v("Are you sure?")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "You are deleting " + _vm._s(_vm.modalDelete.level) + "."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn del",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.deleteInteractiveLevel(_vm.modalDelete)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pin noimg" },
        [
          _vm.isModalVisible
            ? _c(
                "modal",
                {
                  on: {
                    close: function($event) {
                      _vm.isModalVisible = false
                    }
                  }
                },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("div")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "body",
                      attrs: { slot: "body" },
                      slot: "body"
                    },
                    [
                      _c("div", { staticClass: "text" }, [
                        _c("div", { staticClass: "name" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.interactiveLevel.name,
                                expression: "interactiveLevel.name"
                              }
                            ],
                            class: { active: (_vm.active = "name") },
                            attrs: {
                              type: "text",
                              placeholder: "Interactive Level"
                            },
                            domProps: { value: _vm.interactiveLevel.name },
                            on: {
                              click: function($event) {
                                _vm.active = "name"
                              },
                              blur: function($event) {
                                _vm.active = null
                              },
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.interactiveLevel,
                                    "name",
                                    $event.target.value
                                  )
                                },
                                _vm.$v.interactiveLevel.name.$touch
                              ]
                            }
                          }),
                          _vm._v(" "),
                          _vm.$v.interactiveLevel.name.$error
                            ? _c("div", { staticClass: "validation-error" }, [
                                !_vm.$v.interactiveLevel.name.required
                                  ? _c("p", { staticClass: "error" }, [
                                      _vm._v(
                                        "Please add interactive level name "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.interactiveLevel.description,
                                expression: "interactiveLevel.description"
                              }
                            ],
                            attrs: {
                              type: "text",
                              placeholder: "Interactive level description"
                            },
                            domProps: {
                              value: _vm.interactiveLevel.description
                            },
                            on: {
                              blur: function($event) {
                                return _vm.saveDescription(_vm.interactiveLevel)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.interactiveLevel,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.$v.interactiveLevel.description.$error
                            ? _c("div", { staticClass: "validation-error" }, [
                                !_vm.$v.interactiveLevel.description.required
                                  ? _c("p", { staticClass: "error" }, [
                                      _vm._v(
                                        "Please add interactive level description "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn sub",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onSubmit()
                          }
                        }
                      },
                      [_vm._v("Submit")]
                    )
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/pages/adminArea/admin-interactive-levels.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-interactive-levels.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4& */ "./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4&");
/* harmony import */ var _admin_interactive_levels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-interactive-levels.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_interactive_levels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-interactive-levels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_interactive_levels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-interactive-levels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_interactive_levels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-interactive-levels.vue?vue&type=template&id=6e9cb5d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_interactive_levels_vue_vue_type_template_id_6e9cb5d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);