import { _ as __nuxt_component_0 } from './nuxt-link-BMOPjvwq.mjs';
import { _ as _export_sfc, d as __nuxt_component_1 } from './server.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
  const _component_NuxtLink = __nuxt_component_0;
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_main = resolveComponent("v-main");
  const _component_NuxtPage = __nuxt_component_1;
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_app_bar, {
          color: "primary",
          dark: "",
          elevation: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, { variant: "text" }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_app_bar_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/",
                      class: "text-decoration-none text-white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, { left: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-calculator-variant`);
                              } else {
                                return [
                                  createTextVNode("mdi-calculator-variant")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(` My Nuxt App `);
                        } else {
                          return [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-calculator-variant")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" My Nuxt App ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "text-decoration-none text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-calculator-variant")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Nuxt App ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                to: "/",
                variant: "text",
                "prepend-icon": "mdi-home"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Home `);
                  } else {
                    return [
                      createTextVNode(" Home ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                to: "/calculatorApp",
                variant: "text",
                "prepend-icon": "mdi-calculator"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Calculator `);
                  } else {
                    return [
                      createTextVNode(" Calculator ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_app_bar_nav_icon, { variant: "text" }),
                createVNode(_component_v_app_bar_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "text-decoration-none text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { left: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-calculator-variant")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Nuxt App ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_spacer),
                createVNode(_component_v_btn, {
                  to: "/",
                  variant: "text",
                  "prepend-icon": "mdi-home"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Home ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  to: "/calculatorApp",
                  variant: "text",
                  "prepend-icon": "mdi-calculator"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Calculator ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtPage)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_footer, {
          color: "primary",
          dark: "",
          class: "text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, {
                justify: "center",
                "no-gutters": ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      class: "text-center mt-4",
                      cols: "12"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-fe402a59${_scopeId4}>\xA9 2025 My Nuxt App. All rights reserved.</p>`);
                        } else {
                          return [
                            createVNode("p", null, "\xA9 2025 My Nuxt App. All rights reserved.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        class: "text-center mt-4",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, "\xA9 2025 My Nuxt App. All rights reserved.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_row, {
                  justify: "center",
                  "no-gutters": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      class: "text-center mt-4",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "\xA9 2025 My Nuxt App. All rights reserved.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_app_bar, {
            color: "primary",
            dark: "",
            elevation: "4"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_app_bar_nav_icon, { variant: "text" }),
              createVNode(_component_v_app_bar_title, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "text-decoration-none text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { left: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-calculator-variant")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" My Nuxt App ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                to: "/",
                variant: "text",
                "prepend-icon": "mdi-home"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Home ")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, {
                to: "/calculatorApp",
                variant: "text",
                "prepend-icon": "mdi-calculator"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Calculator ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtPage)
            ]),
            _: 1
          }),
          createVNode(_component_v_footer, {
            color: "primary",
            dark: "",
            class: "text-center"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_row, {
                justify: "center",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    class: "text-center mt-4",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "\xA9 2025 My Nuxt App. All rights reserved.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fe402a59"]]);

export { _default as default };
//# sourceMappingURL=default-Enq7riVS.mjs.map
