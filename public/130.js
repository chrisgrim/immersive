(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/location-google.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/location-google.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_google_location_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/google-location-mixin */ "./resources/js/pages/create/components/google-location-mixin.js");
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['event'],
  mixins: [_components_google_location_mixin__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_5__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_5__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_5__["LMarker"]
  },
  computed: {
    locationPlaceholder: function locationPlaceholder() {
      return this.location.postal_code || this.location.city ? (this.location.home ? this.location.home + ' ' : '') + (this.location.street ? this.location.street + ', ' : '') + (this.location.city ? this.location.city + ', ' : '') + (this.location.country ? this.location.country : '') : 'Enter full address ';
    }
  },
  data: function data() {
    return {
      location: this.initializeEventObject(),
      map: this.initializeMapObject(),
      eventUrl: "/create-event/".concat(this.event.slug),
      activeItem: null,
      disabled: false,
      pageHeight: 0,
      hasLocation: this.event.hasLocation ? true : false,
      remoteOptions: [],
      remoteLocation: ''
    };
  },
  methods: {
    initializeEventObject: function initializeEventObject() {
      return {
        street: '',
        city: '',
        region: '',
        country: '',
        postal_code: '',
        hiddenLocation: '',
        hiddenLocationToggle: 0,
        latitude: '',
        longitude: '',
        home: ''
      };
    },
    initializeMapObject: function initializeMapObject() {
      return {
        zoom: 14,
        center: '',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        activeItem: null,
        allowZoom: false
      };
    },
    //checks for validations
    //creates data variable called data and adds location info to the variable
    //adds regions to data variable
    submitLocation: function submitLocation() {
      var _this = this;

      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitLocation$(_context) {
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
              !this.hasLocation ? data = {
                noLocation: true
              } : '';
              !this.hasLocation ? data.remoteLocation = this.remoteLocation.map(function (a) {
                return a.location;
              }) : '';
              this.hasLocation ? data = this.location : '';
              this.dis = true;

              if (this.location.hiddenLocationToggle) {
                this.zipLatLng(data);
              } else {
                axios.patch("".concat(this.eventUrl, "/location"), data).then(function (response) {
                  console.log(response.data);
                  window.location.href = "".concat(_this.eventUrl, "/category");
                })["catch"](function (errorResponse) {
                  _this.dis = false;
                  _this.validationErrors = errorResponse.response.data.errors;
                });
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    zipLatLng: function zipLatLng(data) {
      var _this2 = this;

      axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.location.postal_code ? this.location.postal_code : this.location.city, "&key=AIzaSyBxpUKfSJMC4_3xwLU73AmH-jszjexoriw")).then(function (response) {
        data.latitude = response.data.results[0].geometry.location.lat;
        data.longitude = response.data.results[0].geometry.location.lng;
      }).then(function (response) {
        axios.patch("".concat(_this2.eventUrl, "/location"), data);
        window.location.href = "".concat(_this2.eventUrl, "/category");
      })["catch"](function (errorResponse) {
        _this2.dis = false;
        _this2.validationErrors = errorResponse.response.data.errors;
      });
    },
    // adds lat and lon to leaflet map using this.center
    // sends google map loc and lat info to updateLats
    //adds address info to location object
    setPlace: function setPlace() {
      var place = this.autocomplete.getPlace();
      this.map.center = L.latLng(place.geometry.location.lat(), place.geometry.location.lng());
      this.updateLats(place);
      this.getAddressObject(place.address_components);
    },
    // adds the google 
    updateLats: function updateLats(e) {
      this.location.latitude = e.geometry.location.lat();
      this.location.longitude = e.geometry.location.lng();
    },
    // If there is data in Database it will load from the database
    load: function load() {
      var _this3 = this;

      axios.get("".concat(this.eventUrl, "/location/fetch?timestamp=").concat(new Date().getTime())).then(function (response) {
        console.log(response.data);

        _this3.updateEventFields(response.data.location);

        _this3.remoteLocation = response.data.pivots;
        _this3.remoteOptions = response.data.remoteLocations;
      });
    },
    //after google fields search this inputs data into vue fields
    updateLocationFields: function updateLocationFields(input) {
      if (input !== null && _typeof(input) === "object" && input.id !== null) {
        this.location = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.extend(this.location, input);
      }
    },
    handleResize: function handleResize() {
      this.pageHeight = "height:calc(".concat(window.innerHeight, "px - 8rem)");
    },
    addTag: function addTag(newTag) {
      var tag = {
        location: newTag,
        id: newTag.substring(0, 0) + Math.floor(Math.random() * 10000000)
      };
      this.remoteOptions.push(tag);
      this.remoteLocation.push(tag);
    }
  },
  created: function created() {
    this.load();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  mounted: function mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(this.$refs.autocomplete, {
      types: ['geocode']
    });
    this.autocomplete.addListener('place_changed', this.setPlace);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  validations: {
    location: {
      latitude: {
        ifLocation: function ifLocation() {
          return this.hasLocation ? this.location.latitude ? true : false : true;
        }
      }
    },
    remoteLocation: {
      ifNoLocation: function ifNoLocation() {
        return !this.hasLocation ? this.remoteLocation.length ? true : false : true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "event-create__location container grid" }, [
    _c("section", { staticClass: "event-enter-location" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", [_vm._v(" Does your event have a physical location? ")]),
        _vm._v(" "),
        _c("div", { attrs: { id: "cover" } }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.hasLocation,
                expression: "hasLocation"
              }
            ],
            attrs: { type: "checkbox", id: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.hasLocation)
                ? _vm._i(_vm.hasLocation, null) > -1
                : _vm.hasLocation
            },
            on: {
              change: function($event) {
                var $$a = _vm.hasLocation,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.hasLocation = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.hasLocation = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.hasLocation = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("div", { attrs: { id: "bar" } }),
          _vm._v(" "),
          _c("div", { attrs: { id: "knob" } }, [
            _vm.hasLocation ? _c("p", [_vm._v("Yes")]) : _c("p", [_vm._v("No")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasLocation,
              expression: "hasLocation"
            }
          ]
        },
        [
          _c("div", { staticClass: "field" }, [
            _c("label", [_vm._v(" Is your location hidden? ")]),
            _vm._v(" "),
            _c("div", { attrs: { id: "cover" } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.location.hiddenLocationToggle,
                    expression: "location.hiddenLocationToggle"
                  }
                ],
                attrs: { type: "checkbox", id: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.location.hiddenLocationToggle)
                    ? _vm._i(_vm.location.hiddenLocationToggle, null) > -1
                    : _vm.location.hiddenLocationToggle
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.location.hiddenLocationToggle,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.location,
                            "hiddenLocationToggle",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.location,
                            "hiddenLocationToggle",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.location, "hiddenLocationToggle", $$c)
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { attrs: { id: "bar" } }),
              _vm._v(" "),
              _c("div", { attrs: { id: "knob" } }, [
                _vm.location.hiddenLocationToggle
                  ? _c("p", [_vm._v("Yes")])
                  : _c("p", [_vm._v("No")])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.location.hiddenLocationToggle
            ? _c("div", { staticClass: "field" }, [
                _c("label", [
                  _vm._v(
                    " We still need your address so that users searching for this event can see the general area. They will not see the specific street address. "
                  )
                ]),
                _vm._v(" "),
                _c("label", [
                  _vm._v(
                    " Please enter how participants will be notified of the location. (Required) "
                  )
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.location.hiddenLocation,
                      expression: "location.hiddenLocation",
                      modifiers: { trim: true }
                    }
                  ],
                  class: { active: _vm.activeItem == "hidden" },
                  attrs: {
                    rows: "4",
                    required: "",
                    autofocus: "",
                    placeholder:
                      "...the night before you will receieve an email containing the location..."
                  },
                  domProps: { value: _vm.location.hiddenLocation },
                  on: {
                    click: function($event) {
                      _vm.activeItem = "hidden"
                    },
                    blur: [
                      function($event) {
                        _vm.activeItem = null
                      },
                      function($event) {
                        return _vm.$forceUpdate()
                      }
                    ],
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.location,
                        "hiddenLocation",
                        $event.target.value.trim()
                      )
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", [_vm._v(" Event Location ")]),
            _vm._v(" "),
            _c("input", {
              ref: "autocomplete",
              class: {
                active: _vm.activeItem == "location",
                error: _vm.$v.location.latitude.$error
              },
              attrs: {
                placeholder: _vm.locationPlaceholder,
                autocomplete: "false",
                onfocus: "value = ''",
                type: "text"
              },
              on: {
                click: function($event) {
                  _vm.activeItem = "location"
                },
                blur: function($event) {
                  _vm.activeItem = null
                }
              }
            }),
            _vm._v(" "),
            _vm.$v.location.latitude.$error
              ? _c("div", { staticClass: "validation-error" }, [
                  !_vm.$v.location.latitude.ifLocation
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Please select from the list of locations")
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
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
              value: !_vm.hasLocation,
              expression: "!hasLocation"
            }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", [
                _vm._v(" What mediums will your remote event be using? ")
              ]),
              _vm._v(" "),
              _c("multiselect", {
                class: {
                  active: _vm.activeItem == "remote",
                  error: _vm.$v.remoteLocation.$error
                },
                attrs: {
                  "tag-placeholder": "Add this as new tag",
                  placeholder: "Type here to create your own",
                  label: "location",
                  "close-on-select": true,
                  "track-by": "id",
                  options: _vm.remoteOptions,
                  multiple: true,
                  taggable: true,
                  "tag-position": "bottom"
                },
                on: {
                  tag: _vm.addTag,
                  click: function($event) {
                    _vm.activeItem = "remote"
                  },
                  blur: function($event) {
                    _vm.activeItem = null
                  }
                },
                model: {
                  value: _vm.remoteLocation,
                  callback: function($$v) {
                    _vm.remoteLocation = $$v
                  },
                  expression: "remoteLocation"
                }
              }),
              _vm._v(" "),
              _vm.$v.remoteLocation.$error
                ? _c("div", { staticClass: "validation-error" }, [
                    !_vm.$v.remoteLocation.ifNoLocation
                      ? _c("p", { staticClass: "error" }, [
                          _vm._v("Please choose at least one Mobile Location")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "event-create__submit-button" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.disabled },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submitLocation()
              }
            }
          },
          [_vm._v(" Next ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "event-show-location", style: _vm.pageHeight },
      [
        _vm.map.center && _vm.hasLocation
          ? _c("div", { staticClass: "map" }, [
              _c("div", { staticClass: "zoom" }, [
                _c("div", { staticClass: "in" }, [
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.map.zoom += 1
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            viewBox: "0 0 16 16",
                            height: "16",
                            width: "16",
                            fill: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"
                            }
                          }),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "out" }, [
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.map.zoom -= 1
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            viewBox: "0 0 16 16",
                            height: "16",
                            width: "16",
                            fill: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { width: "100%" }, style: _vm.pageHeight },
                [
                  _c(
                    "l-map",
                    {
                      attrs: {
                        zoom: _vm.map.zoom,
                        center: _vm.map.center,
                        options: {
                          scrollWheelZoom: _vm.map.allowZoom,
                          zoomControl: _vm.map.allowZoom
                        }
                      }
                    },
                    [
                      _c("l-tile-layer", { attrs: { url: _vm.map.url } }),
                      _vm._v(" "),
                      _c("l-marker", { attrs: { "lat-lng": _vm.map.center } })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "create-button__in-nav" }, [
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.onBack("title")
            }
          }
        },
        [_vm._v(" Back ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.submitLocation()
            }
          }
        },
        [_vm._v(" Next ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [_c("h2", [_vm._v("Location")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/form-validation-mixin.js":
/*!******************************************************!*\
  !*** ./resources/js/mixins/form-validation-mixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    checkVuelidate: function checkVuelidate() {
      this.$v.$touch();
      !this.$v.$invalid ? this.disabled = true : false;
      return this.$v.$invalid;
    },
    onErrors: function onErrors(err) {
      this.serverErrors ? this.serverErrors = err.response.data.errors : '';
      this.disabled = false;
    },
    onBackInitial: function onBackInitial() {
      return window.location.href = "/create-event/edit/";
    },
    onBack: function onBack(arr) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(arr);
    },
    onForward: function onForward(arr) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(arr);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/create/components/google-location-mixin.js":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/create/components/google-location-mixin.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getAddressObject: function getAddressObject(address_components) {
      var ShouldBeComponent = {
        home: ["street_number"],
        postal_code: ["postal_code"],
        street: ["street_address", "route"],
        region: ["administrative_area_level_1", "administrative_area_level_2", "administrative_area_level_3", "administrative_area_level_4", "administrative_area_level_5"],
        city: ["locality", "sublocality", "sublocality_level_1", "sublocality_level_2", "sublocality_level_3", "sublocality_level_4"],
        country: ["country"]
      };
      var address = {
        home: "",
        postal_code: "",
        street: "",
        region: "",
        city: "",
        country: ""
      };
      address_components.forEach(function (component) {
        for (var shouldBe in ShouldBeComponent) {
          if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
            if (shouldBe === "country") {
              address[shouldBe] = component.short_name;
            } else {
              address[shouldBe] = component.long_name;
            }
          }
        }
      });
      this.updateLocationFields(address);
    },
    //Checks if database has fields and inputs them into Vue forms and adds lat and long to map
    updateEventFields: function updateEventFields(input) {
      if (input !== null && _typeof(input) === "object" && input.id !== null) {
        this.location = _.pick(input, _.intersection(_.keys(this.location), _.keys(input)));
      }

      ;
      this.location.latitude ? this.map.center = L.latLng(this.location.latitude, this.location.longitude) : '';
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/create/location-google.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/create/location-google.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-google.vue?vue&type=template&id=7b1acde7& */ "./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7&");
/* harmony import */ var _location_google_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-google.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/location-google.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _location_google_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/location-google.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/location-google.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/create/location-google.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_location_google_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./location-google.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/location-google.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_location_google_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./location-google.vue?vue&type=template&id=7b1acde7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/location-google.vue?vue&type=template&id=7b1acde7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_location_google_vue_vue_type_template_id_7b1acde7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);