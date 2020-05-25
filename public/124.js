(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      users: [],
      userList: [],
      searchUserOptions: [],
      regionActive: false,
      user: '',
      isModalVisible: false,
      modal: false,
      selectedModal: '',
      isLoading: ''
    };
  },
  computed: {},
  methods: {
    showModal: function showModal(user, arr) {
      this.selectedModal = user;
      this.modal = arr;
    },
    deleteUser: function deleteUser(user) {
      var _this = this;

      axios["delete"]("/users/".concat(user.id)).then(function (response) {
        _this.modal = null;

        _this.loadUsers();
      })["catch"](function (error) {
        _this.serverErrors = error.response.data.errors;
      });
    },
    loadUsers: function loadUsers() {
      var _this2 = this;

      axios.get('/userlist/fetch').then(function (response) {
        console.log(response.data);
        _this2.users = response.data;
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    saveName: function saveName(user) {
      var _this3 = this;

      var data = {
        name: user.name
      };
      axios.patch("/master/userlist/".concat(user.id), data).then(function (response) {
        console.log(response.data);

        _this3.loadUsers();
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    saveEmail: function saveEmail(user) {
      var _this4 = this;

      var data = {
        email: user.email
      };
      axios.patch("/master/userlist/".concat(user.id), data).then(function (response) {
        console.log(response.data);

        _this4.loadUsers();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    },
    saveUserType: function saveUserType(user) {
      var _this5 = this;

      var data = {
        type: user.type
      };
      axios.patch("/master/userlist/".concat(user.id), data).then(function (response) {
        console.log(response.data);

        _this5.loadUsers();
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    },
    asyncGenerateUserList: function asyncGenerateUserList(query) {
      var _this6 = this;

      axios.get('/api/search/user/list', {
        params: {
          keywords: query
        }
      }).then(function (response) {
        console.log(response.data);
        _this6.users = response.data;
      })["catch"](function (error) {
        _this6.loadUsers();
      });
    },
    createList: function createList() {
      this.searchUserOptions = this.userlist;
    }
  },
  created: function created() {
    this.loadUsers();
  },
  validations: {
    region: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "users" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userList,
              expression: "userList"
            }
          ],
          staticClass: "general",
          attrs: { placeholder: "Filter by name or email", type: "text" },
          domProps: { value: _vm.userList },
          on: {
            keyup: function($event) {
              return _vm.asyncGenerateUserList(_vm.userList)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.userList = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._l(_vm.users, function(user, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: user.name,
                expression: "user.name"
              }
            ],
            attrs: { type: "text", placeholder: "User Name" },
            domProps: { value: user.name },
            on: {
              blur: function($event) {
                return _vm.saveName(user)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(user, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: user.email,
                expression: "user.email"
              }
            ],
            attrs: { type: "text", placeholder: "Email" },
            domProps: { value: user.email },
            on: {
              blur: function($event) {
                return _vm.saveEmail(user)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(user, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: user.type,
                  expression: "user.type"
                }
              ],
              attrs: { placeholder: "User Type" },
              on: {
                blur: function($event) {
                  return _vm.saveUserType(user)
                },
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    user,
                    "type",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "a" } }, [_vm._v("Admin")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "m" } }, [_vm._v("Moderator")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "g" } }, [_vm._v("Guest")])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-circle",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showModal(user, "delete")
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _vm.modal == "delete"
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
                    "You are deleting the user " +
                      _vm._s(_vm.selectedModal.name) +
                      " user."
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
                        return _vm.deleteUser(_vm.selectedModal)
                      }
                    }
                  },
                  [_vm._v("Delete")]
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
      _c("div", { staticClass: "title" }, [_c("h1", [_vm._v("Users")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/adminArea/admin-user.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-user.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user.vue?vue&type=template&id=2aab4de5& */ "./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5&");
/* harmony import */ var _admin_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-user.vue?vue&type=template&id=2aab4de5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-user.vue?vue&type=template&id=2aab4de5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_user_vue_vue_type_template_id_2aab4de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);