(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contentAdvisory: '',
      contentActive: false,
      contentAdvisories: '',
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: ''
    };
  },
  computed: {},
  methods: {
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    submitNewContentAdvisory: function submitNewContentAdvisory() {
      var _this = this;

      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitNewContentAdvisory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$v.$touch();

              if (!this.$v.$invalid) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", false);

            case 3:
              ;
              data = {
                advisories: this.contentAdvisory
              };
              axios.post('/contentadvisories', data).then(function (response) {
                console.log(response.data);
                _this.isModalVisible = false;
                _this.contentAdvisory = '';

                _this.loadContentAdvisories();
              })["catch"](function (error) {
                _this.isModalVisible = false;
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    showModal: function showModal(advisory) {
      this.modalDelete = advisory;
      this.isEditModalVisible = true;
    },
    deleteContentAdvisory: function deleteContentAdvisory(advisory) {
      var _this2 = this;

      axios["delete"]("/contentadvisories/".concat(advisory.id)).then(function (response) {
        console.log(response.data);
        _this2.isEditModalVisible = false;

        _this2.loadContentAdvisories();
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    loadContentAdvisories: function loadContentAdvisories() {
      var _this3 = this;

      axios.get('/contentadvisories').then(function (response) {
        _this3.contentAdvisories = response.data;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    saveContentAdvisory: function saveContentAdvisory(advisory) {
      var _this4 = this;

      var data = {
        advisories: advisory.advisories
      };
      axios.patch("/contentadvisories/".concat(advisory.id), data).then(function (response) {
        console.log(response.data);

        _this4.loadContentAdvisories();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    this.loadContentAdvisories();
  },
  validations: {
    contentAdvisory: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "contentlevels" },
    [
      _c("div", {}, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Content Advisories")]),
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
      _vm._l(_vm.contentAdvisories, function(advisory, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: advisory.advisories,
                expression: "advisory.advisories"
              }
            ],
            attrs: { type: "text", placeholder: "Content Advisories" },
            domProps: { value: advisory.advisories },
            on: {
              blur: function($event) {
                return _vm.saveContentAdvisory(advisory)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(advisory, "advisories", $event.target.value)
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
                  return _vm.showModal(advisory)
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "modal",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isEditModalVisible,
              expression: "isEditModalVisible"
            }
          ],
          on: {
            close: function($event) {
              _vm.isEditModalVisible = false
            }
          }
        },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("div", { staticClass: "circle del" }, [_c("p", [_vm._v("X")])])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "body" }, slot: "body" }, [
            _c("h3", [_vm._v("Are you sure?")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "You are deleting " + _vm._s(_vm.modalDelete.advisories) + "."
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
                    return _vm.deleteContentAdvisory(_vm.modalDelete)
                  }
                }
              },
              [_vm._v("Delete")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pin noimg" },
        [
          _c(
            "modal",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isModalVisible,
                  expression: "isModalVisible"
                }
              ],
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
                { staticClass: "body", attrs: { slot: "body" }, slot: "body" },
                [
                  _c("div", { staticClass: "text" }, [
                    _c("div", { staticClass: "name" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.contentAdvisory,
                            expression: "contentAdvisory"
                          }
                        ],
                        class: { active: _vm.contentActive },
                        attrs: {
                          type: "text",
                          placeholder: "Content Advisory"
                        },
                        domProps: { value: _vm.contentAdvisory },
                        on: {
                          click: function($event) {
                            _vm.contentActive = true
                          },
                          blur: function($event) {
                            _vm.contentActive = false
                          },
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.contentAdvisory = $event.target.value
                            },
                            _vm.$v.contentAdvisory.$touch
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.contentAdvisory.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.contentAdvisory.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Please Add Content Advisories ")
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
                        return _vm.submitNewContentAdvisory()
                      }
                    }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
          )
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

/***/ "./resources/js/components/adminArea/admin-content-advisories.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-content-advisories.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-content-advisories.vue?vue&type=template&id=4a138832& */ "./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832&");
/* harmony import */ var _admin_content_advisories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-content-advisories.vue?vue&type=script&lang=js& */ "./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_content_advisories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adminArea/admin-content-advisories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_content_advisories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-content-advisories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_content_advisories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-content-advisories.vue?vue&type=template&id=4a138832& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-content-advisories.vue?vue&type=template&id=4a138832&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_content_advisories_vue_vue_type_template_id_4a138832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);