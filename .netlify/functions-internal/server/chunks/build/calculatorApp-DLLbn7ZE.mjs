import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, computed, watch, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$2 = {
  __name: "CalculatorForm",
  __ssrInlineRender: true,
  props: {
    onCalculate: {
      type: Function,
      required: true
    },
    recallCalculation: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const a = ref(0);
    const b = ref(0);
    const method = ref("add");
    const result = ref(null);
    const methodOptions = [
      { title: "Add (+)", value: "add" },
      { title: "Subtract (-)", value: "sub" },
      { title: "Multiply (\xD7)", value: "mul" },
      { title: "Divide (\xF7)", value: "div" }
    ];
    const canCalculate = computed(() => {
      return a.value !== null && b.value !== null && !isNaN(a.value) && !isNaN(b.value);
    });
    watch(() => props.recallCalculation, (newRecall) => {
      if (newRecall) {
        console.log("Recalling calculation:", newRecall);
        a.value = newRecall.a;
        b.value = newRecall.b;
        method.value = newRecall.method;
        result.value = newRecall.result;
      }
    }, { immediate: true });
    function calculate() {
      let res;
      switch (method.value) {
        case "add":
          res = a.value + b.value;
          break;
        case "sub":
          res = a.value - b.value;
          break;
        case "mul":
          res = a.value * b.value;
          break;
        case "div":
          res = b.value !== 0 ? a.value / b.value : "Cannot divide by zero";
          break;
      }
      result.value = res;
      props.onCalculate({
        a: a.value,
        b: b.value,
        method: method.value,
        result: res,
        time: (/* @__PURE__ */ new Date()).toLocaleString(),
        id: Date.now()
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_fade_transition = resolveComponent("v-fade-transition");
      const _component_v_alert = resolveComponent("v-alert");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "mx-auto pa-6",
        "max-width": "600",
        elevation: "3"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "text-h5 text-center text-primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    left: "",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-calculator`);
                      } else {
                        return [
                          createTextVNode("mdi-calculator")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Calculation Form `);
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      left: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-calculator")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Calculation Form ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, {
                    align: "center",
                    justify: "center",
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: a.value,
                                "onUpdate:modelValue": ($event) => a.value = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                label: "Input A",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  modelValue: a.value,
                                  "onUpdate:modelValue": ($event) => a.value = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  label: "Input A",
                                  variant: "outlined",
                                  density: "comfortable",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_select, {
                                modelValue: method.value,
                                "onUpdate:modelValue": ($event) => method.value = $event,
                                items: methodOptions,
                                label: "Select Method",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_select, {
                                  modelValue: method.value,
                                  "onUpdate:modelValue": ($event) => method.value = $event,
                                  items: methodOptions,
                                  label: "Select Method",
                                  variant: "outlined",
                                  density: "comfortable",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: b.value,
                                "onUpdate:modelValue": ($event) => b.value = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                label: "Input B",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  modelValue: b.value,
                                  "onUpdate:modelValue": ($event) => b.value = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  label: "Input B",
                                  variant: "outlined",
                                  density: "comfortable",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                disabled: !canCalculate.value,
                                color: "primary",
                                size: "large",
                                variant: "elevated",
                                block: "",
                                onClick: calculate
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-equal`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-equal")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Calculate `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, { left: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-equal")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Calculate ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  disabled: !canCalculate.value,
                                  color: "primary",
                                  size: "large",
                                  variant: "elevated",
                                  block: "",
                                  onClick: calculate
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { left: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-equal")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Calculate ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: a.value,
                                "onUpdate:modelValue": ($event) => a.value = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                label: "Input A",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_select, {
                                modelValue: method.value,
                                "onUpdate:modelValue": ($event) => method.value = $event,
                                items: methodOptions,
                                label: "Select Method",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: b.value,
                                "onUpdate:modelValue": ($event) => b.value = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                label: "Input B",
                                variant: "outlined",
                                density: "comfortable",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                disabled: !canCalculate.value,
                                color: "primary",
                                size: "large",
                                variant: "elevated",
                                block: "",
                                onClick: calculate
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-equal")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Calculate ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, { class: "my-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_fade_transition, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (result.value !== null) {
                          _push4(ssrRenderComponent(_component_v_alert, {
                            type: "success",
                            variant: "tonal",
                            prominent: "",
                            class: "text-center"
                          }, {
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-check-circle`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-check-circle")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(` Result `);
                              } else {
                                return [
                                  createVNode(_component_v_icon, { left: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-circle")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Result ")
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h4 mt-2"${_scopeId4}>${ssrInterpolate(result.value)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h4 mt-2" }, toDisplayString(result.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          result.value !== null ? (openBlock(), createBlock(_component_v_alert, {
                            key: 0,
                            type: "success",
                            variant: "tonal",
                            prominent: "",
                            class: "text-center"
                          }, {
                            title: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Result ")
                            ]),
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h4 mt-2" }, toDisplayString(result.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, {
                      align: "center",
                      justify: "center",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: a.value,
                              "onUpdate:modelValue": ($event) => a.value = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              label: "Input A",
                              variant: "outlined",
                              density: "comfortable",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_select, {
                              modelValue: method.value,
                              "onUpdate:modelValue": ($event) => method.value = $event,
                              items: methodOptions,
                              label: "Select Method",
                              variant: "outlined",
                              density: "comfortable",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: b.value,
                              "onUpdate:modelValue": ($event) => b.value = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              label: "Input B",
                              variant: "outlined",
                              density: "comfortable",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              disabled: !canCalculate.value,
                              color: "primary",
                              size: "large",
                              variant: "elevated",
                              block: "",
                              onClick: calculate
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { left: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-equal")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Calculate ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider, { class: "my-6" }),
                    createVNode(_component_v_fade_transition, null, {
                      default: withCtx(() => [
                        result.value !== null ? (openBlock(), createBlock(_component_v_alert, {
                          key: 0,
                          type: "success",
                          variant: "tonal",
                          prominent: "",
                          class: "text-center"
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_v_icon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-check-circle")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Result ")
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h4 mt-2" }, toDisplayString(result.value), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
              createVNode(_component_v_card_title, { class: "text-h5 text-center text-primary" }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    left: "",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-calculator")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Calculation Form ")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, {
                    align: "center",
                    justify: "center",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: a.value,
                            "onUpdate:modelValue": ($event) => a.value = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            label: "Input A",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_select, {
                            modelValue: method.value,
                            "onUpdate:modelValue": ($event) => method.value = $event,
                            items: methodOptions,
                            label: "Select Method",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: b.value,
                            "onUpdate:modelValue": ($event) => b.value = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            label: "Input B",
                            variant: "outlined",
                            density: "comfortable",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            disabled: !canCalculate.value,
                            color: "primary",
                            size: "large",
                            variant: "elevated",
                            block: "",
                            onClick: calculate
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { left: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-equal")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Calculate ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "my-6" }),
                  createVNode(_component_v_fade_transition, null, {
                    default: withCtx(() => [
                      result.value !== null ? (openBlock(), createBlock(_component_v_alert, {
                        key: 0,
                        type: "success",
                        variant: "tonal",
                        prominent: "",
                        class: "text-center"
                      }, {
                        title: withCtx(() => [
                          createVNode(_component_v_icon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Result ")
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "text-h4 mt-2" }, toDisplayString(result.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalculatorForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CalculationHistory",
  __ssrInlineRender: true,
  props: {
    history: {
      type: Array,
      default: () => []
    },
    onDelete: {
      type: Function,
      required: true
    },
    onRecall: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    function getMethodLabel(method) {
      switch (method) {
        case "add":
          return { label: "Add", icon: "mdi-plus", color: "success" };
        case "sub":
          return { label: "Subtract", icon: "mdi-minus", color: "warning" };
        case "mul":
          return { label: "Multiply", icon: "mdi-close", color: "info" };
        case "div":
          return { label: "Divide", icon: "mdi-division", color: "purple" };
        default:
          return { label: "-", icon: "mdi-help", color: "grey" };
      }
    }
    function getMethodIcon(method) {
      switch (method) {
        case "add":
          return "mdi-plus";
        case "sub":
          return "mdi-minus";
        case "mul":
          return "mdi-close";
        case "div":
          return "mdi-division";
        default:
          return "mdi-help";
      }
    }
    function formatTime(timeString) {
      try {
        const date = new Date(timeString);
        return date.toLocaleTimeString("th-TH", {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return timeString;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_empty_state = resolveComponent("v-empty-state");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "mx-auto mt-6",
        "max-width": "900",
        elevation: "3"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "text-h5 text-center text-primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    left: "",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-history`);
                      } else {
                        return [
                          createTextVNode("mdi-history")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Calculation History `);
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      left: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-history")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Calculation History ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.history.length) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_table, {
                      density: "comfortable",
                      class: "elevation-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-center"${_scopeId3}>A</th><th class="text-center"${_scopeId3}>Method</th><th class="text-center"${_scopeId3}>B</th><th class="text-center"${_scopeId3}>Result</th><th class="text-center"${_scopeId3}>Time</th><th class="text-center"${_scopeId3}>Actions</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                          ssrRenderList(__props.history, (item) => {
                            _push4(`<tr${_scopeId3}><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              color: "primary",
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.a)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.a), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              color: getMethodLabel(item.method).color,
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_icon, {
                                    left: "",
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(getMethodIcon(item.method))}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(getMethodIcon(item.method)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(getMethodLabel(item.method).label)}`);
                                } else {
                                  return [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getMethodIcon(item.method)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createTextVNode(" " + toDisplayString(getMethodLabel(item.method).label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              color: "primary",
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.b)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.b), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              color: typeof item.result === "number" ? "success" : "error",
                              variant: "elevated",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<strong${_scopeId4}>${ssrInterpolate(item.result)}</strong>`);
                                } else {
                                  return [
                                    createVNode("strong", null, toDisplayString(item.result), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              color: "grey",
                              variant: "text",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_icon, {
                                    left: "",
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-clock-outline`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-clock-outline")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(formatTime(item.time))}`);
                                } else {
                                  return [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-clock-outline")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(formatTime(item.time)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_btn, {
                              color: "primary",
                              size: "small",
                              variant: "tonal",
                              density: "comfortable",
                              class: "mr-2",
                              onClick: ($event) => __props.onRecall(item)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_icon, {
                                    left: "",
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-restore`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-restore")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` Recall `);
                                } else {
                                  return [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-restore")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Recall ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_btn, {
                              color: "error",
                              size: "small",
                              variant: "tonal",
                              density: "comfortable",
                              onClick: ($event) => __props.onDelete(item.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_icon, {
                                    left: "",
                                    size: "small"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-delete`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-delete")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` Delete `);
                                } else {
                                  return [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-delete")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Delete ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td></tr>`);
                          });
                          _push4(`<!--]--></tbody>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-center" }, "A"),
                                createVNode("th", { class: "text-center" }, "Method"),
                                createVNode("th", { class: "text-center" }, "B"),
                                createVNode("th", { class: "text-center" }, "Result"),
                                createVNode("th", { class: "text-center" }, "Time"),
                                createVNode("th", { class: "text-center" }, "Actions")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.history, (item) => {
                                return openBlock(), createBlock("tr", {
                                  key: item.id
                                }, [
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_chip, {
                                      color: "primary",
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.a), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_chip, {
                                      color: getMethodLabel(item.method).color,
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          left: "",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getMethodIcon(item.method)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createTextVNode(" " + toDisplayString(getMethodLabel(item.method).label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_chip, {
                                      color: "primary",
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.b), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_chip, {
                                      color: typeof item.result === "number" ? "success" : "error",
                                      variant: "elevated",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("strong", null, toDisplayString(item.result), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_chip, {
                                      color: "grey",
                                      variant: "text",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          left: "",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-clock-outline")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" " + toDisplayString(formatTime(item.time)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("td", { class: "text-center" }, [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      size: "small",
                                      variant: "tonal",
                                      density: "comfortable",
                                      class: "mr-2",
                                      onClick: ($event) => __props.onRecall(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          left: "",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-restore")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Recall ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "error",
                                      size: "small",
                                      variant: "tonal",
                                      density: "comfortable",
                                      onClick: ($event) => __props.onDelete(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          left: "",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-delete")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Delete ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_v_empty_state, {
                      headline: "No calculation history yet",
                      title: "Start calculating numbers",
                      text: "Use the form above to perform calculations. History will be displayed here",
                      icon: "mdi-calculator-variant",
                      color: "grey"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    __props.history.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_v_table, {
                        density: "comfortable",
                        class: "elevation-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-center" }, "A"),
                              createVNode("th", { class: "text-center" }, "Method"),
                              createVNode("th", { class: "text-center" }, "B"),
                              createVNode("th", { class: "text-center" }, "Result"),
                              createVNode("th", { class: "text-center" }, "Time"),
                              createVNode("th", { class: "text-center" }, "Actions")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.history, (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.id
                              }, [
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_chip, {
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.a), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_chip, {
                                    color: getMethodLabel(item.method).color,
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        left: "",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(getMethodIcon(item.method)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createTextVNode(" " + toDisplayString(getMethodLabel(item.method).label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_chip, {
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.b), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_chip, {
                                    color: typeof item.result === "number" ? "success" : "error",
                                    variant: "elevated",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("strong", null, toDisplayString(item.result), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_chip, {
                                    color: "grey",
                                    variant: "text",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        left: "",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-clock-outline")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString(formatTime(item.time)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    size: "small",
                                    variant: "tonal",
                                    density: "comfortable",
                                    class: "mr-2",
                                    onClick: ($event) => __props.onRecall(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        left: "",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-restore")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Recall ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "error",
                                    size: "small",
                                    variant: "tonal",
                                    density: "comfortable",
                                    onClick: ($event) => __props.onDelete(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        left: "",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Delete ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock(_component_v_empty_state, {
                      key: 1,
                      headline: "No calculation history yet",
                      title: "Start calculating numbers",
                      text: "Use the form above to perform calculations. History will be displayed here",
                      icon: "mdi-calculator-variant",
                      color: "grey"
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, { class: "text-h5 text-center text-primary" }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    left: "",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-history")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Calculation History ")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  __props.history.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_v_table, {
                      density: "comfortable",
                      class: "elevation-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-center" }, "A"),
                            createVNode("th", { class: "text-center" }, "Method"),
                            createVNode("th", { class: "text-center" }, "B"),
                            createVNode("th", { class: "text-center" }, "Result"),
                            createVNode("th", { class: "text-center" }, "Time"),
                            createVNode("th", { class: "text-center" }, "Actions")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.history, (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.id
                            }, [
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_chip, {
                                  color: "primary",
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.a), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_chip, {
                                  color: getMethodLabel(item.method).color,
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getMethodIcon(item.method)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createTextVNode(" " + toDisplayString(getMethodLabel(item.method).label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_chip, {
                                  color: "primary",
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.b), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_chip, {
                                  color: typeof item.result === "number" ? "success" : "error",
                                  variant: "elevated",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("strong", null, toDisplayString(item.result), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_chip, {
                                  color: "grey",
                                  variant: "text",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-clock-outline")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(formatTime(item.time)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  size: "small",
                                  variant: "tonal",
                                  density: "comfortable",
                                  class: "mr-2",
                                  onClick: ($event) => __props.onRecall(item)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-restore")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Recall ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  size: "small",
                                  variant: "tonal",
                                  density: "comfortable",
                                  onClick: ($event) => __props.onDelete(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-delete")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock(_component_v_empty_state, {
                    key: 1,
                    headline: "No calculation history yet",
                    title: "Start calculating numbers",
                    text: "Use the form above to perform calculations. History will be displayed here",
                    icon: "mdi-calculator-variant",
                    color: "grey"
                  }))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalculationHistory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "calculatorApp",
  __ssrInlineRender: true,
  setup(__props) {
    const calculationHistory = ref([]);
    const recallCalculation = ref(null);
    function handleCalculate(data) {
      calculationHistory.value.unshift(data);
      recallCalculation.value = null;
    }
    function handleDelete(id) {
      calculationHistory.value = calculationHistory.value.filter((item) => item.id !== id);
    }
    function handleRecall(item) {
      recallCalculation.value = { ...item };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          class: "mx-auto mb-6",
                          "max-width": "800",
                          elevation: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      left: "",
                                      color: "primary",
                                      size: "large"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-calculator-variant`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-calculator-variant")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Calculator `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        left: "",
                                        color: "primary",
                                        size: "large"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-calculator-variant")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Calculator ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card_subtitle, { class: "text-center text-grey-darken-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Basic calculation system with operation history `);
                                  } else {
                                    return [
                                      createTextVNode(" Basic calculation system with operation history ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      left: "",
                                      color: "primary",
                                      size: "large"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-calculator-variant")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Calculator ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_subtitle, { class: "text-center text-grey-darken-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Basic calculation system with operation history ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          "on-calculate": handleCalculate,
                          "recall-calculation": recallCalculation.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          history: calculationHistory.value,
                          "on-delete": handleDelete,
                          "on-recall": handleRecall
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            class: "mx-auto mb-6",
                            "max-width": "800",
                            elevation: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    left: "",
                                    color: "primary",
                                    size: "large"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-calculator-variant")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Calculator ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_subtitle, { class: "text-center text-grey-darken-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Basic calculation system with operation history ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$2, {
                            "on-calculate": handleCalculate,
                            "recall-calculation": recallCalculation.value
                          }, null, 8, ["recall-calculation"]),
                          createVNode(_sfc_main$1, {
                            history: calculationHistory.value,
                            "on-delete": handleDelete,
                            "on-recall": handleRecall
                          }, null, 8, ["history"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "mx-auto mb-6",
                          "max-width": "800",
                          elevation: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  left: "",
                                  color: "primary",
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-calculator-variant")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Calculator ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_subtitle, { class: "text-center text-grey-darken-1" }, {
                              default: withCtx(() => [
                                createTextVNode(" Basic calculation system with operation history ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$2, {
                          "on-calculate": handleCalculate,
                          "recall-calculation": recallCalculation.value
                        }, null, 8, ["recall-calculation"]),
                        createVNode(_sfc_main$1, {
                          history: calculationHistory.value,
                          "on-delete": handleDelete,
                          "on-recall": handleRecall
                        }, null, 8, ["history"])
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
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "mx-auto mb-6",
                        "max-width": "800",
                        elevation: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h4 text-center text-primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                left: "",
                                color: "primary",
                                size: "large"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-calculator-variant")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Calculator ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_subtitle, { class: "text-center text-grey-darken-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" Basic calculation system with operation history ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$2, {
                        "on-calculate": handleCalculate,
                        "recall-calculation": recallCalculation.value
                      }, null, 8, ["recall-calculation"]),
                      createVNode(_sfc_main$1, {
                        history: calculationHistory.value,
                        "on-delete": handleDelete,
                        "on-recall": handleRecall
                      }, null, 8, ["history"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calculatorApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=calculatorApp-DLLbn7ZE.mjs.map
