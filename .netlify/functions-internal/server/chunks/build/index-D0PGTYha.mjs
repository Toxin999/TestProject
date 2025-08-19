import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-CYEeiwM4.mjs';
import './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home"
    });
    const features = [
      {
        title: "Pages",
        icon: "mdi-file-document-outline",
        color: "primary",
        description: "Add more pages in the pages/ folder and they will automatically become routes"
      },
      {
        title: "Components",
        icon: "mdi-puzzle-outline",
        color: "success",
        description: "Create reusable components in the components/ folder"
      },
      {
        title: "Layouts",
        icon: "mdi-palette-outline",
        color: "info",
        description: "Customize layouts in the layouts/ folder for consistent design"
      }
    ];
    const technologies = [
      { name: "Nuxt 3", icon: "mdi-nuxt", color: "success" },
      { name: "Vue 3", icon: "mdi-vuejs", color: "success" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "primary" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "info" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              justify: "center",
              class: "mb-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          class: "text-center pa-8",
                          elevation: "0",
                          color: "transparent"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h2 text-primary font-weight-bold mb-4"${_scopeId5}> Welcome to My Nuxt App </div><div class="text-h5 text-grey-darken-1 mb-6"${_scopeId5}> Your modern web application built with Nuxt 3 and Vuetify </div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      to: "/calculatorApp",
                                      color: "primary",
                                      size: "large",
                                      variant: "elevated",
                                      "prepend-icon": "mdi-calculator",
                                      class: "ma-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Try Calculator `);
                                        } else {
                                          return [
                                            createTextVNode(" Try Calculator ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h2 text-primary font-weight-bold mb-4" }, " Welcome to My Nuxt App "),
                                      createVNode("div", { class: "text-h5 text-grey-darken-1 mb-6" }, " Your modern web application built with Nuxt 3 and Vuetify "),
                                      createVNode(_component_v_btn, {
                                        to: "/calculatorApp",
                                        color: "primary",
                                        size: "large",
                                        variant: "elevated",
                                        "prepend-icon": "mdi-calculator",
                                        class: "ma-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Try Calculator ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h2 text-primary font-weight-bold mb-4" }, " Welcome to My Nuxt App "),
                                    createVNode("div", { class: "text-h5 text-grey-darken-1 mb-6" }, " Your modern web application built with Nuxt 3 and Vuetify "),
                                    createVNode(_component_v_btn, {
                                      to: "/calculatorApp",
                                      color: "primary",
                                      size: "large",
                                      variant: "elevated",
                                      "prepend-icon": "mdi-calculator",
                                      class: "ma-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Try Calculator ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            class: "text-center pa-8",
                            elevation: "0",
                            color: "transparent"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h2 text-primary font-weight-bold mb-4" }, " Welcome to My Nuxt App "),
                                  createVNode("div", { class: "text-h5 text-grey-darken-1 mb-6" }, " Your modern web application built with Nuxt 3 and Vuetify "),
                                  createVNode(_component_v_btn, {
                                    to: "/calculatorApp",
                                    color: "primary",
                                    size: "large",
                                    variant: "elevated",
                                    "prepend-icon": "mdi-calculator",
                                    class: "ma-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Try Calculator ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "10",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "text-center pa-8",
                          elevation: "0",
                          color: "transparent"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h2 text-primary font-weight-bold mb-4" }, " Welcome to My Nuxt App "),
                                createVNode("div", { class: "text-h5 text-grey-darken-1 mb-6" }, " Your modern web application built with Nuxt 3 and Vuetify "),
                                createVNode(_component_v_btn, {
                                  to: "/calculatorApp",
                                  color: "primary",
                                  size: "large",
                                  variant: "elevated",
                                  "prepend-icon": "mdi-calculator",
                                  class: "ma-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Try Calculator ")
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Getting Started `);
                                  } else {
                                    return [
                                      createTextVNode(" Getting Started ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` You can edit this main page by modifying <code class="bg-grey-lighten-2 pa-1 rounded"${_scopeId5}>pages/index.vue</code>`);
                                  } else {
                                    return [
                                      createTextVNode(" You can edit this main page by modifying "),
                                      createVNode("code", { class: "bg-grey-lighten-2 pa-1 rounded" }, "pages/index.vue")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(features, (feature) => {
                                            _push7(ssrRenderComponent(_component_v_col, {
                                              key: feature.title,
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_card, {
                                                    class: "h-100 text-center",
                                                    elevation: "1",
                                                    hover: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card_text, { class: "pa-6" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_avatar, {
                                                                size: "80",
                                                                color: feature.color,
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_icon, {
                                                                      size: "40",
                                                                      color: "white"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(feature.icon)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(feature.icon), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_icon, {
                                                                        size: "40",
                                                                        color: "white"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(feature.icon), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`<div class="text-h6 font-weight-bold mb-3"${_scopeId9}>${ssrInterpolate(feature.title)}</div><p class="text-body-2 text-grey-darken-1"${_scopeId9}>${ssrInterpolate(feature.description)}</p>`);
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_avatar, {
                                                                  size: "80",
                                                                  color: feature.color,
                                                                  class: "mb-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      size: "40",
                                                                      color: "white"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(feature.icon), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"]),
                                                                createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                                createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_avatar, {
                                                                size: "80",
                                                                color: feature.color,
                                                                class: "mb-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    size: "40",
                                                                    color: "white"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(feature.icon), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"]),
                                                              createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                              createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_card, {
                                                      class: "h-100 text-center",
                                                      elevation: "1",
                                                      hover: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_avatar, {
                                                              size: "80",
                                                              color: feature.color,
                                                              class: "mb-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  size: "40",
                                                                  color: "white"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(feature.icon), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"]),
                                                            createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                            createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                              return createVNode(_component_v_col, {
                                                key: feature.title,
                                                cols: "12",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    class: "h-100 text-center",
                                                    elevation: "1",
                                                    hover: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_avatar, {
                                                            size: "80",
                                                            color: feature.color,
                                                            class: "mb-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                size: "40",
                                                                color: "white"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(feature.icon), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"]),
                                                          createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                          createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                            return createVNode(_component_v_col, {
                                              key: feature.title,
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  class: "h-100 text-center",
                                                  elevation: "1",
                                                  hover: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          size: "80",
                                                          color: feature.color,
                                                          class: "mb-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              size: "40",
                                                              color: "white"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(feature.icon), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"]),
                                                        createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                        createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Getting Started ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" You can edit this main page by modifying "),
                                    createVNode("code", { class: "bg-grey-lighten-2 pa-1 rounded" }, "pages/index.vue")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                          return createVNode(_component_v_col, {
                                            key: feature.title,
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                class: "h-100 text-center",
                                                elevation: "1",
                                                hover: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        size: "80",
                                                        color: feature.color,
                                                        class: "mb-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            size: "40",
                                                            color: "white"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(feature.icon), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"]),
                                                      createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                      createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Getting Started ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                                default: withCtx(() => [
                                  createTextVNode(" You can edit this main page by modifying "),
                                  createVNode("code", { class: "bg-grey-lighten-2 pa-1 rounded" }, "pages/index.vue")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                        return createVNode(_component_v_col, {
                                          key: feature.title,
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              class: "h-100 text-center",
                                              elevation: "1",
                                              hover: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, {
                                                      size: "80",
                                                      color: feature.color,
                                                      class: "mb-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          size: "40",
                                                          color: "white"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(feature.icon), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"]),
                                                    createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                    createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "10",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" Getting Started ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                              default: withCtx(() => [
                                createTextVNode(" You can edit this main page by modifying "),
                                createVNode("code", { class: "bg-grey-lighten-2 pa-1 rounded" }, "pages/index.vue")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                      return createVNode(_component_v_col, {
                                        key: feature.title,
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            class: "h-100 text-center",
                                            elevation: "1",
                                            hover: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_text, { class: "pa-6" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, {
                                                    size: "80",
                                                    color: feature.color,
                                                    class: "mb-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, {
                                                        size: "40",
                                                        color: "white"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(feature.icon), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                  createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              justify: "center",
              class: "mt-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-rocket-launch`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-rocket-launch")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Technologies Used `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, { left: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-rocket-launch")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Technologies Used ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_text, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { justify: "center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(technologies, (tech) => {
                                            _push7(ssrRenderComponent(_component_v_col, {
                                              key: tech.name,
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_chip, {
                                                    size: "large",
                                                    color: tech.color,
                                                    variant: "tonal",
                                                    class: "ma-1",
                                                    block: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(tech.icon)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(tech.icon), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(` ${ssrInterpolate(tech.name)}`);
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_icon, { left: "" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(tech.icon), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createTextVNode(" " + toDisplayString(tech.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_chip, {
                                                      size: "large",
                                                      color: tech.color,
                                                      variant: "tonal",
                                                      class: "ma-1",
                                                      block: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { left: "" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(tech.icon), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createTextVNode(" " + toDisplayString(tech.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                              return createVNode(_component_v_col, {
                                                key: tech.name,
                                                cols: "12",
                                                sm: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_chip, {
                                                    size: "large",
                                                    color: tech.color,
                                                    variant: "tonal",
                                                    class: "ma-1",
                                                    block: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, { left: "" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(tech.icon), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createTextVNode(" " + toDisplayString(tech.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { justify: "center" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                            return createVNode(_component_v_col, {
                                              key: tech.name,
                                              cols: "12",
                                              sm: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_chip, {
                                                  size: "large",
                                                  color: tech.color,
                                                  variant: "tonal",
                                                  class: "ma-1",
                                                  block: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, { left: "" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(tech.icon), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createTextVNode(" " + toDisplayString(tech.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { left: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-rocket-launch")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Technologies Used ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { justify: "center" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                          return createVNode(_component_v_col, {
                                            key: tech.name,
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_chip, {
                                                size: "large",
                                                color: tech.color,
                                                variant: "tonal",
                                                class: "ma-1",
                                                block: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, { left: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(tech.icon), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createTextVNode(" " + toDisplayString(tech.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-rocket-launch")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Technologies Used ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { justify: "center" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                        return createVNode(_component_v_col, {
                                          key: tech.name,
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_chip, {
                                              size: "large",
                                              color: tech.color,
                                              variant: "tonal",
                                              class: "ma-1",
                                              block: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { left: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(tech.icon), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createTextVNode(" " + toDisplayString(tech.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "10",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { left: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-rocket-launch")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Technologies Used ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { justify: "center" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                      return createVNode(_component_v_col, {
                                        key: tech.name,
                                        cols: "12",
                                        sm: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_chip, {
                                            size: "large",
                                            color: tech.color,
                                            variant: "tonal",
                                            class: "ma-1",
                                            block: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { left: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(tech.icon), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(tech.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, {
                justify: "center",
                class: "mb-8"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "text-center pa-8",
                        elevation: "0",
                        color: "transparent"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h2 text-primary font-weight-bold mb-4" }, " Welcome to My Nuxt App "),
                              createVNode("div", { class: "text-h5 text-grey-darken-1 mb-6" }, " Your modern web application built with Nuxt 3 and Vuetify "),
                              createVNode(_component_v_btn, {
                                to: "/calculatorApp",
                                color: "primary",
                                size: "large",
                                variant: "elevated",
                                "prepend-icon": "mdi-calculator",
                                class: "ma-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Try Calculator ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" Getting Started ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_subtitle, { class: "text-center mb-4" }, {
                            default: withCtx(() => [
                              createTextVNode(" You can edit this main page by modifying "),
                              createVNode("code", { class: "bg-grey-lighten-2 pa-1 rounded" }, "pages/index.vue")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                                    return createVNode(_component_v_col, {
                                      key: feature.title,
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          class: "h-100 text-center",
                                          elevation: "1",
                                          hover: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_text, { class: "pa-6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, {
                                                  size: "80",
                                                  color: feature.color,
                                                  class: "mb-4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, {
                                                      size: "40",
                                                      color: "white"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(feature.icon), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(feature.title), 1),
                                                createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(feature.description), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                justify: "center",
                class: "mt-8"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "10",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "2" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-rocket-launch")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Technologies Used ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { justify: "center" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(technologies, (tech) => {
                                    return createVNode(_component_v_col, {
                                      key: tech.name,
                                      cols: "12",
                                      sm: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_chip, {
                                          size: "large",
                                          color: tech.color,
                                          variant: "tonal",
                                          class: "ma-1",
                                          block: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { left: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(tech.icon), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createTextVNode(" " + toDisplayString(tech.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D0PGTYha.mjs.map
