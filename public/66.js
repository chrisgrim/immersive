(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
var _components$computed$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_components$computed$ = {
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: {},
  data: function data() {
    return {
      organizer: [],
      organizerList: [],
      initOrganizers: [],
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: '',
      isLoading: '',
      selectedModal: '',
      modal: '',
      newOwner: 'bob',
      user: '',
      users: []
    };
  }
}, _defineProperty(_components$computed$, "computed", {
  organizers: function organizers() {
    return this.organizerList.length ? this.organizerList : this.initOrganizers;
  }
}), _defineProperty(_components$computed$, "methods", {
  showModal: function showModal(event, arr) {
    this.selectedModal = event;
    this.modal = arr;
  },
  deleteOrg: function deleteOrg(index) {
    var _this = this;

    axios["delete"]("/organizer/".concat(this.selectedModal.slug)).then(function (response) {
      _this.events = response.data;
      _this.selectedModal = '';
      _this.modal = '';

      _this.onLoad();
    })["catch"](function (errorResponse) {
      errorResponse.response.data.errors;
    });
  },
  onLoad: function onLoad() {
    var _this2 = this;

    axios.get('/admin/organizer/fetch').then(function (response) {
      _this2.initOrganizers = response.data;
    })["catch"](function (error) {
      _this2.serverErrors = error.response.data.errors;
    });
  },
  onChangeOwner: function onChangeOwner() {
    var _this3 = this;

    axios.post("/change/organizer/".concat(this.selectedModal.slug), this.user).then(function (res) {
      console.log(res.data);
      _this3.modal = '';

      _this3.onLoad();
    });
  },
  asyncGenerateUserList: function asyncGenerateUserList(query) {
    var _this4 = this;

    axios.get('/api/search/user/list', {
      params: {
        keywords: query
      }
    }).then(function (res) {
      _this4.users = res.data;
    })["catch"](function (error) {
      _this4.loadUsers();
    });
  },
  loadUsers: function loadUsers() {
    var _this5 = this;

    axios.get('/userlist/fetch').then(function (res) {
      console.log(res.data);
      _this5.users = res.data;
    })["catch"](function (error) {
      _this5.serverErrors = error.response.data.errors;
    });
  },
  onSaveUser: function onSaveUser(value) {
    var _this6 = this;

    var data = {
      user_id: value.user_id
    };
    axios.patch("/admin/organizer/".concat(value.slug), data).then(function (response) {
      console.log(response.data);

      _this6.onLoad();
    })["catch"](function (error) {
      _this6.serverErrors = error.response.data.errors;
    });
  },
  onSaveName: function onSaveName(val) {
    var _this7 = this;

    var data = {
      name: val.name
    };
    axios.patch("/admin/organizer/".concat(val.slug), data).then(function (response) {
      console.log(response.data);

      _this7.onLoad();
    })["catch"](function (error) {
      _this7.serverErrors = error.response.data.errors;
    });
  },
  asyncGenerateOrganizerList: function asyncGenerateOrganizerList(query) {
    var _this8 = this;

    axios.get('/api/organizer/search', {
      params: {
        keywords: query
      }
    }).then(function (response) {
      console.log(response.data);
      _this8.organizerList = response.data;
    });
  }
}), _defineProperty(_components$computed$, "created", function created() {
  this.onLoad();
  this.loadUsers();
}), _defineProperty(_components$computed$, "validations", {
  region: {
    required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
  }
}), _components$computed$);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "organizers" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.organizer,
              expression: "organizer"
            }
          ],
          staticClass: "general",
          attrs: { placeholder: "Filter by organization name", type: "text" },
          domProps: { value: _vm.organizer },
          on: {
            keyup: function($event) {
              return _vm.asyncGenerateOrganizerList(_vm.organizer)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.organizer = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._l(_vm.organizers, function(organizer, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: organizer.name,
                expression: "organizer.name"
              }
            ],
            attrs: { type: "text", placeholder: "Organization" },
            domProps: { value: organizer.name },
            on: {
              blur: function($event) {
                return _vm.onSaveName(organizer)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(organizer, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "\n            " + _vm._s(organizer.user.email) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.showModal(organizer, "changeOrg")
                  }
                }
              },
              [_vm._v("Change Owner")]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-circle",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showModal(organizer, "deleteOrg")
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _vm.modal == "deleteOrg"
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.modal = null
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
                    "You are deleting your " +
                      _vm._s(_vm.selectedModal.name) +
                      " organization."
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
                        return _vm.deleteOrg()
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
      _vm.modal == "changeOrg"
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.modal = null
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c("div", { staticClass: "circle sub" }, [
                  _c("p", [_vm._v("!")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "body" }, slot: "body" },
                [
                  _c("h3", [_vm._v("Change Organizer Owner")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      "deselect-label": "Can't remove this value",
                      "track-by": "email",
                      label: "email",
                      placeholder: "Select one",
                      options: _vm.users
                    },
                    on: {
                      input: function($event) {
                        return _vm.asyncGenerateUserList(_vm.user)
                      }
                    },
                    model: {
                      value: _vm.user,
                      callback: function($$v) {
                        _vm.user = $$v
                      },
                      expression: "user"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn sub",
                    on: {
                      click: function($event) {
                        return _vm.onChangeOwner()
                      }
                    }
                  },
                  [_vm._v("Change Owner")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("div", { staticClass: "title" }, [_c("h1", [_vm._v("Organizers")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-organizer.vue?vue&type=template&id=405f0af6& */ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&");
/* harmony import */ var _admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-organizer.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-organizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-organizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-organizer.vue?vue&type=template&id=405f0af6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);