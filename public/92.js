(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contactLevels: '',
      levelActive: false,
      contactLevel: '',
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: ''
    };
  },
  computed: {},
  methods: {
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    submitNewContactLevel: function submitNewContactLevel() {
      var _this = this;

      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitNewContactLevel$(_context) {
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
                level: this.contactLevel
              };
              axios.post('/contactlevels', data).then(function (response) {
                console.log(response.data);
                _this.isModalVisible = false;
                _this.contactLevel = '';

                _this.loadContactLevels();
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
    showModal: function showModal(level) {
      this.modalDelete = level;
      this.isEditModalVisible = true;
    },
    deleteContactLevel: function deleteContactLevel(level) {
      var _this2 = this;

      axios["delete"]("/contactlevels/".concat(level.id)).then(function (response) {
        console.log(response.data);
        _this2.isEditModalVisible = false;

        _this2.loadContactLevels();
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    loadContactLevels: function loadContactLevels() {
      var _this3 = this;

      axios.get('/contactlevels').then(function (response) {
        _this3.contactLevels = response.data;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    saveContactLevel: function saveContactLevel(level) {
      var _this4 = this;

      var data = {
        level: level.level
      };
      axios.patch("/contactlevels/".concat(level.id), data).then(function (response) {
        console.log(response.data);

        _this4.loadContactLevels();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    },
    saveRank: function saveRank(level) {
      var _this5 = this;

      var data = {
        rank: level.rank
      };
      axios.patch("/contactlevels/".concat(level.id), data).then(function (response) {
        console.log(response.data);

        _this5.loadContactLevels();
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    this.loadContactLevels();
  },
  validations: {
    contactLevel: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "contactlevels" },
    [
      _c("div", {}, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Contact Levels")]),
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
      _vm._l(_vm.contactLevels, function(level, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: level.level,
                expression: "level.level"
              }
            ],
            attrs: { type: "text", placeholder: "Contact Level Name" },
            domProps: { value: level.level },
            on: {
              blur: function($event) {
                return _vm.saveContactLevel(level)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(level, "level", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: level.rank,
                expression: "level.rank"
              }
            ],
            attrs: { type: "text", placeholder: "Contact Level Rank" },
            domProps: { value: level.rank },
            on: {
              blur: function($event) {
                return _vm.saveRank(level)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(level, "rank", $event.target.value)
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
                  return _vm.showModal(level)
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
                        return _vm.deleteContactLevel(_vm.modalDelete)
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
                                value: _vm.contactLevel,
                                expression: "contactLevel"
                              }
                            ],
                            class: { active: _vm.levelActive },
                            attrs: {
                              type: "text",
                              placeholder: "Contact Level Name"
                            },
                            domProps: { value: _vm.contactLevel },
                            on: {
                              click: function($event) {
                                _vm.levelActive = true
                              },
                              blur: function($event) {
                                _vm.levelActive = false
                              },
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.contactLevel = $event.target.value
                                },
                                _vm.$v.contactLevel.$touch
                              ]
                            }
                          }),
                          _vm._v(" "),
                          _vm.$v.contactLevel.$error
                            ? _c("div", { staticClass: "validation-error" }, [
                                !_vm.$v.contactLevel.required
                                  ? _c("p", { staticClass: "error" }, [
                                      _vm._v("Please Add Contact Level ")
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
                            return _vm.submitNewContactLevel()
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

/***/ "./resources/js/pages/adminArea/admin-contact-level.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-contact-level.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-contact-level.vue?vue&type=template&id=f2598026& */ "./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026&");
/* harmony import */ var _admin_contact_level_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-contact-level.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_contact_level_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-contact-level.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_contact_level_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-contact-level.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_contact_level_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-contact-level.vue?vue&type=template&id=f2598026& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-contact-level.vue?vue&type=template&id=f2598026&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_contact_level_vue_vue_type_template_id_f2598026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);