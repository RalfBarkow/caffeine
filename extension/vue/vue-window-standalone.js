!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 20)
}([function(t, e, n) {
    "use strict";
    /**
  * vue-class-component v6.3.2
  * (c) 2015-present Evan You
  * @license MIT
  */
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, i = (o = n(1)) && "object" == typeof o && "default"in o ? o.default : o, r = "undefined" != typeof Reflect && Reflect.defineMetadata;
    function a(t, e, n) {
        (n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e)).forEach(function(o) {
            var i = n ? Reflect.getOwnMetadata(o, e, n) : Reflect.getOwnMetadata(o, e);
            n ? Reflect.defineMetadata(o, i, t, n) : Reflect.defineMetadata(o, i, t)
        })
    }
    var s = {
        __proto__: []
    }instanceof Array;
    var u = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured"];
    function c(t, e) {
        void 0 === e && (e = {}),
        e.name = e.name || t._componentTag || t.name;
        var n = t.prototype;
        Object.getOwnPropertyNames(n).forEach(function(t) {
            if ("constructor" !== t)
                if (u.indexOf(t) > -1)
                    e[t] = n[t];
                else {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    void 0 !== o.value ? "function" == typeof o.value ? (e.methods || (e.methods = {}))[t] = o.value : (e.mixins || (e.mixins = [])).push({
                        data: function() {
                            var e;
                            return (e = {})[t] = o.value,
                            e
                        }
                    }) : (o.get || o.set) && ((e.computed || (e.computed = {}))[t] = {
                        get: o.get,
                        set: o.set
                    })
                }
        }),
        (e.mixins || (e.mixins = [])).push({
            data: function() {
                return function(t, e) {
                    var n = e.prototype._init;
                    e.prototype._init = function() {
                        var e = this
                          , n = Object.getOwnPropertyNames(t);
                        if (t.$options.props)
                            for (var o in t.$options.props)
                                t.hasOwnProperty(o) || n.push(o);
                        n.forEach(function(n) {
                            "_" !== n.charAt(0) && Object.defineProperty(e, n, {
                                get: function() {
                                    return t[n]
                                },
                                set: function(e) {
                                    t[n] = e
                                },
                                configurable: !0
                            })
                        })
                    }
                    ;
                    var o = new e;
                    e.prototype._init = n;
                    var i = {};
                    return Object.keys(o).forEach(function(t) {
                        void 0 !== o[t] && (i[t] = o[t])
                    }),
                    i
                }(this, t)
            }
        });
        var o = t.__decorators__;
        o && (o.forEach(function(t) {
            return t(e)
        }),
        delete t.__decorators__);
        var c, l, p = Object.getPrototypeOf(t.prototype), f = p instanceof i ? p.constructor : i, h = f.extend(e);
        return function(t, e, n) {
            Object.getOwnPropertyNames(e).forEach(function(o) {
                if ("prototype" !== o) {
                    var i = Object.getOwnPropertyDescriptor(t, o);
                    if (!i || i.configurable) {
                        var r, a, u = Object.getOwnPropertyDescriptor(e, o);
                        if (!s) {
                            if ("cid" === o)
                                return;
                            var c = Object.getOwnPropertyDescriptor(n, o);
                            if (r = u.value,
                            a = typeof r,
                            null != r && ("object" === a || "function" === a) && c && c.value === u.value)
                                return
                        }
                        0,
                        Object.defineProperty(t, o, u)
                    }
                }
            })
        }(h, t, f),
        r && (a(c = h, l = t),
        Object.getOwnPropertyNames(l.prototype).forEach(function(t) {
            a(c.prototype, l.prototype, t)
        }),
        Object.getOwnPropertyNames(l).forEach(function(t) {
            a(c, l, t)
        })),
        h
    }
    function l(t) {
        return "function" == typeof t ? c(t) : function(e) {
            return c(e, t)
        }
    }
    l.registerHooks = function(t) {
        u.push.apply(u, t)
    }
    ,
    e.default = l,
    e.createDecorator = function(t) {
        return function(e, n, o) {
            var i = "function" == typeof e ? e : e.constructor;
            i.__decorators__ || (i.__decorators__ = []),
            "number" != typeof o && (o = void 0),
            i.__decorators__.push(function(e) {
                return t(e, n, o)
            })
        }
    }
    ,
    e.mixins = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return i.extend({
            mixins: t
        })
    }
}
, function(t, e) {
    t.exports = Vue
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(3)
      , i = n.n(o);
    for (var r in o)
        "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t]
            })
        }(r);
    e.default = i.a
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(14);
    e.default = o.WindowType
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(5)
      , i = n.n(o);
    for (var r in o)
        "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t]
            })
        }(r);
    e.default = i.a
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(28);
    e.default = o.Button
}
, function(t, e, n) {
    var o = n(30);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(19)(o, i);
    o.locals && (t.exports = o.locals)
}
, function(t, e, n) {
    var o = n(33);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(19)(o, i);
    o.locals && (t.exports = o.locals)
}
, function(t, e, n) {
    "use strict";
    function o(t, e, n, o, i, r, a, s) {
        var u, c = "function" == typeof t ? t.options : t;
        if (e && (c.render = e,
        c.staticRenderFns = n,
        c._compiled = !0),
        o && (c.functional = !0),
        r && (c._scopeId = "data-v-" + r),
        a ? (u = function(t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
            i && i.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(a)
        }
        ,
        c._ssrRegister = u) : i && (u = s ? function() {
            i.call(this, this.$root.$options.shadowRoot)
        }
        : i),
        u)
            if (c.functional) {
                c._injectStyles = u;
                var l = c.render;
                c.render = function(t, e) {
                    return u.call(e),
                    l(t, e)
                }
            } else {
                var p = c.beforeCreate;
                c.beforeCreate = p ? [].concat(p, u) : [u]
            }
        return {
            exports: t,
            options: c
        }
    }
    n.d(e, "a", function() {
        return o
    })
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "__extends", function() {
        return i
    }),
    n.d(e, "__assign", function() {
        return r
    }),
    n.d(e, "__rest", function() {
        return a
    }),
    n.d(e, "__decorate", function() {
        return s
    }),
    n.d(e, "__param", function() {
        return u
    }),
    n.d(e, "__metadata", function() {
        return c
    }),
    n.d(e, "__awaiter", function() {
        return l
    }),
    n.d(e, "__generator", function() {
        return p
    }),
    n.d(e, "__exportStar", function() {
        return f
    }),
    n.d(e, "__values", function() {
        return h
    }),
    n.d(e, "__read", function() {
        return d
    }),
    n.d(e, "__spread", function() {
        return v
    }),
    n.d(e, "__await", function() {
        return y
    }),
    n.d(e, "__asyncGenerator", function() {
        return m
    }),
    n.d(e, "__asyncDelegator", function() {
        return b
    }),
    n.d(e, "__asyncValues", function() {
        return w
    }),
    n.d(e, "__makeTemplateObject", function() {
        return g
    }),
    n.d(e, "__importStar", function() {
        return _
    }),
    n.d(e, "__importDefault", function() {
        return x
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var o = function(t, e) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    };
    function i(t, e) {
        function n() {
            this.constructor = t
        }
        o(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    var r = function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        ).apply(this, arguments)
    };
    function a(t, e) {
        var n = {};
        for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (o = Object.getOwnPropertySymbols(t); i < o.length; i++)
                e.indexOf(o[i]) < 0 && (n[o[i]] = t[o[i]])
        }
        return n
    }
    function s(t, e, n, o) {
        var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, o);
        else
            for (var s = t.length - 1; s >= 0; s--)
                (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
        return r > 3 && a && Object.defineProperty(e, n, a),
        a
    }
    function u(t, e) {
        return function(n, o) {
            e(n, o, t)
        }
    }
    function c(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(t, e)
    }
    function l(t, e, n, o) {
        return new (n || (n = Promise))(function(i, r) {
            function a(t) {
                try {
                    u(o.next(t))
                } catch (t) {
                    r(t)
                }
            }
            function s(t) {
                try {
                    u(o.throw(t))
                } catch (t) {
                    r(t)
                }
            }
            function u(t) {
                t.done ? i(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, s)
            }
            u((o = o.apply(t, e || [])).next())
        }
        )
    }
    function p(t, e) {
        var n, o, i, r, a = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function s(r) {
            return function(s) {
                return function(r) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o),
                            0) : o.next) && !(i = i.call(o, r[1])).done)
                                return i;
                            switch (o = 0,
                            i && (r = [2 & r[0], i.value]),
                            r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                o = r[1],
                                r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1],
                                    i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2],
                                    a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            r = e.call(t, a)
                        } catch (t) {
                            r = [6, t],
                            o = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, s])
            }
        }
    }
    function f(t, e) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n])
    }
    function h(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0),
                {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }
    function d(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var o, i, r = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                a.push(o.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (n = r.return) && n.call(r)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function v() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(d(arguments[e]));
        return t
    }
    function y(t) {
        return this instanceof y ? (this.v = t,
        this) : new y(t)
    }
    function m(t, e, n) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, i = n.apply(t, e || []), r = [];
        return o = {},
        a("next"),
        a("throw"),
        a("return"),
        o[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        o;
        function a(t) {
            i[t] && (o[t] = function(e) {
                return new Promise(function(n, o) {
                    r.push([t, e, n, o]) > 1 || s(t, e)
                }
                )
            }
            )
        }
        function s(t, e) {
            try {
                (n = i[t](e)).value instanceof y ? Promise.resolve(n.value.v).then(u, c) : l(r[0][2], n)
            } catch (t) {
                l(r[0][3], t)
            }
            var n
        }
        function u(t) {
            s("next", t)
        }
        function c(t) {
            s("throw", t)
        }
        function l(t, e) {
            t(e),
            r.shift(),
            r.length && s(r[0][0], r[0][1])
        }
    }
    function b(t) {
        var e, n;
        return e = {},
        o("next"),
        o("throw", function(t) {
            throw t
        }),
        o("return"),
        e[Symbol.iterator] = function() {
            return this
        }
        ,
        e;
        function o(o, i) {
            e[o] = t[o] ? function(e) {
                return (n = !n) ? {
                    value: y(t[o](e)),
                    done: "return" === o
                } : i ? i(e) : e
            }
            : i
        }
    }
    function w(t) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, n = t[Symbol.asyncIterator];
        return n ? n.call(t) : (t = h(t),
        e = {},
        o("next"),
        o("throw"),
        o("return"),
        e[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        e);
        function o(n) {
            e[n] = t[n] && function(e) {
                return new Promise(function(o, i) {
                    (function(t, e, n, o) {
                        Promise.resolve(o).then(function(e) {
                            t({
                                value: e,
                                done: n
                            })
                        }, e)
                    }
                    )(o, i, (e = t[n](e)).done, e.value)
                }
                )
            }
        }
    }
    function g(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
        }) : t.raw = e,
        t
    }
    function _(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var n in t)
                Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t,
        e
    }
    function x(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}
, function(t, e, n) {
    "use strict";
    function o(t) {
        return window.TouchEvent && t instanceof TouchEvent
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isTouchEvent = o;
    var i = function() {
        function t(t) {
            this.e = t
        }
        return t.prototype.stopPropagation = function() {
            this.e.stopPropagation()
        }
        ,
        t.prototype.preventDefault = function() {
            this.e.preventDefault()
        }
        ,
        Object.defineProperty(t.prototype, "clientX", {
            get: function() {
                return o(this.e) ? ("touchend" === this.e.type ? this.e.changedTouches : this.e.touches).item(0).clientX : this.e.clientX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "clientY", {
            get: function() {
                return o(this.e) ? ("touchend" === this.e.type ? this.e.changedTouches : this.e.touches).item(0).clientY : this.e.clientY
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "clientCoord", {
            get: function() {
                return new r(this.clientX,this.clientY)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.bindDown = function(e, n, o, i) {
            void 0 === i && (i = !1);
            var r = function(e) {
                n(new t(e))
            }
              , a = function(e) {
                1 === e.touches.length && n(new t(e)),
                e.touches.length > 1 && o && o(new t(e))
            };
            return e.addEventListener("mousedown", r, i),
            e.addEventListener("touchstart", a, i),
            function() {
                e.removeEventListener("mousedown", r, i),
                e.removeEventListener("touchstart", a, i)
            }
        }
        ,
        t.bindMove = function(e, n, o) {
            void 0 === o && (o = !1);
            var i = function(e) {
                n(new t(e))
            }
              , r = function(e) {
                1 === e.touches.length && n(new t(e))
            };
            return e.addEventListener("mousemove", i, o),
            e.addEventListener("touchmove", r, o),
            function() {
                e.removeEventListener("mousemove", i, o),
                e.removeEventListener("touchmove", r, o)
            }
        }
        ,
        t.bindUp = function(e, n, o) {
            void 0 === o && (o = !1);
            var i = function(e) {
                n(new t(e))
            }
              , r = function(e) {
                0 === e.touches.length && n(new t(e))
            };
            return e.addEventListener("mouseup", i, o),
            e.addEventListener("touchend", r, o),
            function() {
                e.removeEventListener("mouseup", i, o),
                e.removeEventListener("touchend", r, o)
            }
        }
        ,
        t.prototype.originalEvent = function(t) {
            var e = t.mouse
              , n = t.touch;
            o(this.e) ? n && n(this.e) : e && e(this.e)
        }
        ,
        t
    }();
    e.SinglePointerEvent = i;
    var r = function() {
        function t(t, e) {
            this.x = t,
            this.y = e
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y)
        }
        ,
        t
    }();
    e.V2 = r
}
, function(t, e, n) {
    "use strict";
    function o(t) {
        return {
            provide: function() {
                var n;
                return (n = {})[e.WINDOW_STYLE_KEY] = t,
                n
            },
            render: function(t) {
                return t("div", this.$slots.default)
            }
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.WINDOW_STYLE_KEY = "@hscmap/vue-window/windowStyle",
    e.StyleFactory = o,
    e.StyleBlack = o({
        window: {
            color: "#fff",
            boxShadow: "0 0 6pt rgba(255, 255, 255, 0.75)",
            backgroundColor: "rgba(31, 31, 31, 0.9)"
        },
        titlebar: {
            backgroundColor: "rgba(63, 63, 63, 0.9)"
        },
        content: {},
        button: {
            color: "white"
        },
        buttonHover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)"
        },
        buttonActive: {
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    }),
    e.StyleWhite = o({
        window: {
            color: "#000",
            boxShadow: "0 2pt 4pt rgba(0, 0, 0, 0.5)",
            backgroundColor: "rgba(239, 239, 239, 0.95)"
        },
        titlebar: {
            backgroundColor: "rgba(191, 191, 191, 0.9)"
        },
        content: {},
        button: {
            color: "#000"
        },
        buttonHover: {
            backgroundColor: "rgba(0, 0, 0, 0.25)"
        },
        buttonActive: {
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
    }),
    e.StyleMetal = o({
        window: {
            color: "#000",
            boxShadow: "0 4pt 8pt rgba(0, 0, 0, 0.5)",
            background: "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"
        },
        titlebar: {
            background: "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"
        },
        content: {},
        button: {
            color: "#000"
        },
        buttonHover: {
            backgroundColor: "rgba(0, 0, 0, 0.25)"
        },
        buttonActive: {
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
    })
}
, function(t, e, n) {
    "use strict";
    var o = function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("transition", {
            attrs: {
                name: "fade"
            },
            on: {
                "after-leave": function(e) {
                    return t.$emit("close")
                },
                "after-enter": function(e) {
                    return t.$emit("open")
                }
            }
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.isOpen,
                expression: "isOpen"
            }],
            ref: "window",
            staticClass: "window",
            style: t.styleWindow,
            on: {
                mousedown: t.activate,
                touchstart: t.activate
            }
        }, [n("div", {
            ref: "titlebar",
            staticClass: "titlebar",
            style: t.styleTitlebar
        }, [n("div", {
            staticClass: "title"
        }, [t.$slots.title ? [t._t("title")] : [t._v(t._s(t.title))]], 2), t._v(" "), t.closeButton ? [n("my-button", {
            on: {
                click: t.closeButtonClick
            }
        }, [t._v("×")])] : t._e()], 2), t._v(" "), n("div", {
            ref: "content",
            staticClass: "content",
            style: t.styleContent
        }, [t._t("default")], 2)])])
    }
      , i = [];
    o._withStripped = !0,
    n.d(e, "a", function() {
        return o
    }),
    n.d(e, "b", function() {
        return i
    })
}
, function(t, e, n) {
    "use strict";
    var o = function() {
        var t = this
          , e = t.$createElement;
        return (t._self._c || e)("div", {
            staticClass: "button",
            style: t.style,
            attrs: {
                disabled: t.disabled
            },
            on: {
                mouseenter: function(e) {
                    t.hover = !0
                },
                mouseleave: function(e) {
                    t.hover = !1
                },
                mousedown: function(e) {
                    return e.stopPropagation(),
                    t.mousedown(e)
                },
                touchstart: function(e) {
                    return e.stopPropagation(),
                    t.mousedown(e)
                },
                mouseup: t.mouseup,
                touchend: t.mouseup
            }
        }, [t._t("default")], 2)
    }
      , i = [];
    o._withStripped = !0,
    n.d(e, "a", function() {
        return o
    }),
    n.d(e, "b", function() {
        return i
    })
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(9)
      , i = n(15)
      , r = n(16)
      , a = n(24)
      , s = n(25)
      , u = n(11)
      , c = n(17)
      , l = n(26)
      , p = n(27)
      , f = []
      , h = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.zIndex = "auto",
            e.openCount = 0,
            e
        }
        return o.__extends(e, t),
        e.prototype.mounted = function() {
            var t = this;
            f.push(this),
            this.zElement = new l.ZElement(this.zGroup,function(e) {
                return t.zIndex = "" + e
            }
            ),
            this.isOpen && this.onIsOpenChange(!0),
            c.windows.add(this)
        }
        ,
        e.prototype.beforeDestroy = function() {
            c.windows.delete(this),
            this.zElement.unregister(),
            this.resizableHelper && this.resizableHelper.teardown(),
            this.draggableHelper && this.draggableHelper.teardown(),
            f.splice(f.indexOf(this), 1)
        }
        ,
        e.prototype.windowElement = function() {
            return this.$refs.window
        }
        ,
        e.prototype.titlebarElement = function() {
            return this.$refs.titlebar
        }
        ,
        e.prototype.contentElement = function() {
            return this.$refs.content
        }
        ,
        e.prototype.activate = function() {
            this.zElement.raise(),
            this.$emit("activate")
        }
        ,
        Object.defineProperty(e.prototype, "styleWindow", {
            get: function() {
                return o.__assign({}, this.windowStyle.window, {
                    zIndex: this.zIndex,
                    overflow: this.overflow
                })
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "styleTitlebar", {
            get: function() {
                return this.windowStyle.titlebar
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "styleContent", {
            get: function() {
                var t = o.__assign({}, this.windowStyle.content);
                return this.resizable ? t.padding = "0" : null != this.padding && (t.padding = this.padding + "px"),
                this.isScrollable && (t.overflow = "auto"),
                t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.onResizableChange = function(t) {
            console.error("prop 'resizable' can't be changed")
        }
        ,
        e.prototype.onIsOpenChange = function(t) {
            var e = this;
            t && (this.$nextTick(function() {
                0 == e.openCount++ && (e.setWindowRect(e),
                e.setInitialPosition()),
                e.resizable && e.onWindowResize(),
                e.onWindowMove(),
                e.draggableHelper = new a.DraggableHelper(e.titlebarElement(),e.windowElement(),{
                    onMove: function() {
                        return e.onWindowMove()
                    },
                    onMoveStart: function() {
                        return e.$emit("move-start")
                    },
                    onMoveEnd: function() {
                        return e.$emit("move-end")
                    }
                }),
                e.resizable && e.initResizeHelper()
            }),
            this.activateWhenOpen && this.activate())
        }
        ,
        e.prototype.onZGroupChange = function() {
            this.zElement.group = this.zGroup
        }
        ,
        e.prototype.fixPosition = function() {
            var t = this.windowElement()
              , e = t.getBoundingClientRect();
            e.left < 0 && (t.style.left = "0px"),
            e.top < 0 && (t.style.top = "0px"),
            e.right > window.innerWidth && (t.style.left = window.innerWidth - e.width + "px"),
            e.bottom > window.innerHeight && (t.style.top = window.innerHeight - e.height + "px")
        }
        ,
        e.prototype.onLeftChange = function(t) {
            this.setWindowRect({
                left: t
            }),
            this.onWindowMove(!1)
        }
        ,
        e.prototype.onTopChange = function(t) {
            this.setWindowRect({
                top: t
            }),
            this.onWindowMove(!1)
        }
        ,
        e.prototype.onWidthChange = function(t) {
            this.setWindowRect({
                width: t
            }),
            this.onWindowResize(!1)
        }
        ,
        e.prototype.onHeightChange = function(t) {
            this.setWindowRect({
                height: t
            }),
            this.onWindowResize(!1)
        }
        ,
        e.prototype.setWindowRect = function(t) {
            var e = t.width
              , n = t.height
              , o = t.top
              , i = t.left
              , r = this.windowElement();
            if (null != e && (r.style.width = e + "px"),
            null != n) {
                var a = v(this.titlebarElement()).height;
                r.style.height = n + a + "px"
            }
            null != i && (r.style.left = i + "px"),
            null != o && (r.style.top = o + "px")
        }
        ,
        e.prototype.initResizeHelper = function() {
            var t = this
              , e = r.naturalSize(this.titlebarElement()).height;
            this.resizableHelper = new s.ResizableHelper(this.windowElement(),{
                onResize: function() {
                    return t.onWindowResize()
                },
                onResizeStart: function() {
                    return t.$emit("resize-start")
                },
                onResizeEnd: function() {
                    return t.$emit("resize-end")
                },
                minWidth: this.minWidth,
                minHeight: this.minHeight + e,
                maxWidth: this.maxWidth,
                maxHeight: this.maxHeight ? this.maxHeight + e : void 0
            })
        }
        ,
        e.prototype.onWindowResize = function(t) {
            void 0 === t && (t = !0);
            var e = this.windowElement()
              , n = this.titlebarElement()
              , o = this.contentElement()
              , i = v(o)
              , r = i.width
              , a = i.height
              , s = v(e)
              , u = s.width
              , c = s.height
              , l = v(n).height
              , p = u - (o.offsetWidth - r)
              , f = c - l - (o.offsetHeight - a);
            o.style.width = p + "px",
            o.style.height = f + "px",
            b(),
            this.$emit("resize", new y(p,f)),
            t && (this.$emit("update:width", p),
            this.$emit("update:height", f))
        }
        ,
        e.prototype.onWindowMove = function(t) {
            void 0 === t && (t = !0),
            this.fixPosition();
            var e = this.windowElement().getBoundingClientRect()
              , n = e.left
              , o = e.top;
            t && (this.$emit("update:left", n),
            this.$emit("update:top", o))
        }
        ,
        e.prototype.setInitialPosition = function() {
            var t, e, n = this, o = this.windowElement(), i = r.naturalSize(o), a = i.width, s = i.height;
            if (void 0 !== this.left != (void 0 !== this.top))
                throw new Error("Either of left or top is specified. Both must be set or not set.");
            if ("number" == typeof this.left)
                t = this.left,
                e = this.top;
            else {
                var u = this.positionHint || "auto";
                switch (u) {
                case "auto":
                    var c = 20
                      , l = 50
                      , p = 0;
                    do {
                        if (f.every(function(t) {
                            if (!t.isOpen || n == t)
                                return !0;
                            var e = m(t);
                            if (null == e)
                                return !0;
                            var o, i, r = e.left, a = e.top;
                            return (o = r - c) * o + (i = a - l) * i > 16
                        }))
                            break;
                        c = (c + 40) % (window.innerWidth - 200),
                        l = (l + 40) % (window.innerHeight - 200)
                    } while (++p < 100);t = c,
                    e = l;
                    break;
                case "center":
                    t = (window.innerWidth - a) / 2,
                    e = (window.innerHeight - s) / 2;
                    break;
                default:
                    try {
                        var h = u.split("/").map(Number);
                        if (2 != h.length)
                            throw null;
                        var d = h[0]
                          , v = h[1];
                        if (!isFinite(d) || !isFinite(v))
                            throw null;
                        t = d >= 0 ? d : window.innerWidth - a + d,
                        e = v >= 0 ? v : window.innerHeight - s + v
                    } catch (t) {
                        throw new Error("invalid position string: " + u)
                    }
                }
            }
            o.style.left = t + "px",
            o.style.top = e + "px"
        }
        ,
        e.prototype.closeButtonClick = function() {
            this.$emit("closebuttonclick"),
            this.$emit("update:isOpen", !1)
        }
        ,
        o.__decorate([i.Prop({
            type: Boolean,
            default: !0
        })], e.prototype, "isOpen", void 0),
        o.__decorate([i.Prop({
            type: String,
            default: ""
        })], e.prototype, "title", void 0),
        o.__decorate([i.Prop({
            type: Boolean,
            default: !1
        })], e.prototype, "closeButton", void 0),
        o.__decorate([i.Prop({
            type: Boolean,
            default: !1
        })], e.prototype, "resizable", void 0),
        o.__decorate([i.Prop({
            type: Boolean,
            default: !1
        })], e.prototype, "isScrollable", void 0),
        o.__decorate([i.Prop({
            type: Number,
            default: 8
        })], e.prototype, "padding", void 0),
        o.__decorate([i.Prop({
            type: Boolean,
            default: !0
        })], e.prototype, "activateWhenOpen", void 0),
        o.__decorate([i.Prop({
            type: String
        })], e.prototype, "positionHint", void 0),
        o.__decorate([i.Prop({
            type: Number,
            default: 0
        })], e.prototype, "zGroup", void 0),
        o.__decorate([i.Prop({
            default: "visible"
        })], e.prototype, "overflow", void 0),
        o.__decorate([i.Inject(u.WINDOW_STYLE_KEY)], e.prototype, "windowStyle", void 0),
        o.__decorate([i.Watch("resizable")], e.prototype, "onResizableChange", null),
        o.__decorate([i.Watch("isOpen")], e.prototype, "onIsOpenChange", null),
        o.__decorate([i.Watch("zGroup")], e.prototype, "onZGroupChange", null),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "left", void 0),
        o.__decorate([i.Watch("left")], e.prototype, "onLeftChange", null),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "top", void 0),
        o.__decorate([i.Watch("top")], e.prototype, "onTopChange", null),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "width", void 0),
        o.__decorate([i.Watch("width")], e.prototype, "onWidthChange", null),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "height", void 0),
        o.__decorate([i.Watch("height")], e.prototype, "onHeightChange", null),
        o.__decorate([i.Prop({
            type: Number,
            default: 1
        })], e.prototype, "minWidth", void 0),
        o.__decorate([i.Prop({
            type: Number,
            default: 0
        })], e.prototype, "minHeight", void 0),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "maxWidth", void 0),
        o.__decorate([i.Prop({
            type: Number
        })], e.prototype, "maxHeight", void 0),
        e = o.__decorate([i.Component({
            components: {
                MyButton: p.default
            }
        })], e)
    }(i.Vue);
    function d(t) {
        return null !== t ? parseFloat(t) : 0
    }
    function v(t) {
        var e = window.getComputedStyle(t);
        return {
            width: Math.ceil([e.paddingLeft, e.width, e.paddingRight].map(d).reduce(function(t, e) {
                return t + e
            })),
            height: Math.ceil([e.paddingTop, e.height, e.paddingBottom].map(d).reduce(function(t, e) {
                return t + e
            }))
        }
    }
    e.WindowType = h;
    var y = function() {
        return function(t, e) {
            this.width = t,
            this.height = e
        }
    }();
    function m(t) {
        var e = t.windowElement()
          , n = parseFloat(e.style.left || "NaN")
          , o = parseFloat(e.style.top || "NaN");
        return isNaN(n) || isNaN(o) ? null : {
            left: n,
            top: o
        }
    }
    function b() {
        c.windows.forEach(function(t) {
            t.fixPosition()
        })
    }
    e.WindowResizeEvent = y,
    e.fixPosition = b,
    window.addEventListener("resize", function(t) {
        return b()
    })
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "Inject", function() {
        return s
    }),
    n.d(e, "Provide", function() {
        return u
    }),
    n.d(e, "Model", function() {
        return c
    }),
    n.d(e, "Prop", function() {
        return l
    }),
    n.d(e, "Watch", function() {
        return p
    }),
    n.d(e, "Emit", function() {
        return d
    });
    var o = n(1)
      , i = n.n(o);
    n.d(e, "Vue", function() {
        return i.a
    });
    var r = n(0)
      , a = n.n(r);
    function s(t) {
        return Object(r.createDecorator)(function(e, n) {
            void 0 === e.inject && (e.inject = {}),
            Array.isArray(e.inject) || (e.inject[n] = t || n)
        })
    }
    function u(t) {
        return Object(r.createDecorator)(function(e, n) {
            var o = e.provide;
            if ("function" != typeof o || !o.managed) {
                var i = e.provide;
                (o = e.provide = function() {
                    var t = Object.create(("function" == typeof i ? i.call(this) : i) || null);
                    for (var e in o.managed)
                        t[o.managed[e]] = this[e];
                    return t
                }
                ).managed = {}
            }
            o.managed[n] = t || n
        })
    }
    function c(t, e) {
        return void 0 === e && (e = {}),
        Object(r.createDecorator)(function(n, o) {
            (n.props || (n.props = {}))[o] = e,
            n.model = {
                prop: o,
                event: t || o
            }
        })
    }
    function l(t) {
        return void 0 === t && (t = {}),
        Object(r.createDecorator)(function(e, n) {
            (e.props || (e.props = {}))[n] = t
        })
    }
    function p(t, e) {
        void 0 === e && (e = {});
        var n = e.deep
          , o = void 0 !== n && n
          , i = e.immediate
          , a = void 0 !== i && i;
        return Object(r.createDecorator)(function(e, n) {
            "object" != typeof e.watch && (e.watch = Object.create(null));
            var i = e.watch;
            "object" != typeof i[t] || Array.isArray(i[t]) ? void 0 === i[t] && (i[t] = []) : i[t] = [i[t]],
            i[t].push({
                handler: n,
                deep: o,
                immediate: a
            })
        })
    }
    n.d(e, "Component", function() {
        return a.a
    }),
    n.d(e, "Mixins", function() {
        return r.mixins
    });
    var f = /\B([A-Z])/g
      , h = function(t) {
        return t.replace(f, "-$1").toLowerCase()
    };
    function d(t) {
        return function(e, n, o) {
            n = h(n);
            var i = o.value;
            o.value = function() {
                for (var e = this, o = [], r = 0; r < arguments.length; r++)
                    o[r] = arguments[r];
                var a, s = function(i) {
                    void 0 !== i && o.unshift(i),
                    e.$emit.apply(e, [t || n].concat(o))
                }, u = i.apply(this, o);
                (a = u)instanceof Promise || a && "function" == typeof a.then ? u.then(function(t) {
                    s(t)
                }) : s(u)
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    function o(t) {
        var e = t.getBoundingClientRect()
          , n = e.width
          , o = e.height
          , i = e.top
          , r = e.left;
        return {
            width: n,
            height: o,
            top: i,
            left: r,
            bottom: i + o,
            right: r + n
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.naturalSize = function(t) {
        var e = t.style
          , n = e.width
          , i = e.height;
        t.style.width = "auto",
        t.style.height = "auto";
        var r = o(t);
        return t.style.width = n,
        t.style.height = i,
        r
    }
    ,
    e.getRect = o
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.windows = new Set
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || ""
                      , o = t[3];
                    if (!o)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var i = (a = o,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                          , r = o.sources.map(function(t) {
                            return "/*# sourceURL=" + o.sourceRoot + t + " */"
                        });
                        return [n].concat(r).concat([i]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var o = {}, i = 0; i < this.length; i++) {
                var r = this[i][0];
                null != r && (o[r] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                null != a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(t, e, n) {
    var o, i, r = {}, a = (o = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === i && (i = o.apply(this, arguments)),
        i
    }
    ), s = function(t) {
        var e = {};
        return function(t, n) {
            if ("function" == typeof t)
                return t();
            if (void 0 === e[t]) {
                var o = function(t, e) {
                    return e ? e.querySelector(t) : document.querySelector(t)
                }
                .call(this, t, n);
                if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                    try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                e[t] = o
            }
            return e[t]
        }
    }(), u = null, c = 0, l = [], p = n(31);
    function f(t, e) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n]
              , i = r[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++)
                    i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++)
                    i.parts.push(b(o.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < o.parts.length; a++)
                    s.push(b(o.parts[a], e));
                r[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function h(t, e) {
        for (var n = [], o = {}, i = 0; i < t.length; i++) {
            var r = t[i]
              , a = e.base ? r[0] + e.base : r[0]
              , s = {
                css: r[1],
                media: r[2],
                sourceMap: r[3]
            };
            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    function d(t, e) {
        var n = s(t.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = l[l.length - 1];
        if ("top" === t.insertAt)
            o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            l.push(e);
        else if ("bottom" === t.insertAt)
            n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(t.insertAt.before, n);
            n.insertBefore(e, i)
        }
    }
    function v(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = l.indexOf(t);
        e >= 0 && l.splice(e, 1)
    }
    function y(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce) {
            var o = function() {
                0;
                return n.nc
            }();
            o && (t.attrs.nonce = o)
        }
        return m(e, t.attrs),
        d(t, e),
        e
    }
    function m(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }
    function b(t, e) {
        var n, o, i, r;
        if (e.transform && t.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css)))
                return function() {}
                ;
            t.css = r
        }
        if (e.singleton) {
            var a = c++;
            n = u || (u = y(e)),
            o = _.bind(null, n, a, !1),
            i = _.bind(null, n, a, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                m(e, t.attrs),
                d(t, e),
                e
            }(e),
            o = function(t, e, n) {
                var o = n.css
                  , i = n.sourceMap
                  , r = void 0 === e.convertToAbsoluteUrls && i;
                (e.convertToAbsoluteUrls || r) && (o = p(o));
                i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var a = new Blob([o],{
                    type: "text/css"
                })
                  , s = t.href;
                t.href = URL.createObjectURL(a),
                s && URL.revokeObjectURL(s)
            }
            .bind(null, n, e),
            i = function() {
                v(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = y(e),
            o = function(t, e) {
                var n = e.css
                  , o = e.media;
                o && t.setAttribute("media", o);
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n),
            i = function() {
                v(n)
            }
            );
        return o(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                o(t = e)
            } else
                i()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
        var n = h(t, e);
        return f(n, e),
        function(t) {
            for (var o = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = r[a.id]).refs--,
                o.push(s)
            }
            t && f(h(t, e), e);
            for (i = 0; i < o.length; i++) {
                var s;
                if (0 === (s = o[i]).refs) {
                    for (var u = 0; u < s.parts.length; u++)
                        s.parts[u]();
                    delete r[s.id]
                }
            }
        }
    }
    ;
    var w, g = (w = [],
    function(t, e) {
        return w[t] = e,
        w.filter(Boolean).join("\n")
    }
    );
    function _(t, e, n, o) {
        var i = n ? "" : o.css;
        if (t.styleSheet)
            t.styleSheet.cssText = g(e, i);
        else {
            var r = document.createTextNode(i)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
        }
    }
}
, function(t, e, n) {
    n(21),
    t.exports = n(34)
}
, function(t, e, n) {
    "use strict";
    !function() {
        var t = n(1);
        if (!t) {
            throw alert("Vue not installed"),
            new Error("Vue not installed")
        }
        t.use(n(22))
    }()
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(23)
      , i = n(11);
    e.StyleBlack = i.StyleBlack,
    e.StyleWhite = i.StyleWhite,
    e.StyleMetal = i.StyleMetal,
    e.StyleFactory = i.StyleFactory;
    var r = n(14);
    e.WindowResizeEvent = r.WindowResizeEvent,
    e.fixPosition = r.fixPosition,
    e.install = function(t, e) {
        void 0 === e && (e = {
            prefix: "hsc-window"
        });
        var n = e.prefix;
        t.component("" + n, o.default),
        t.component(n + "-style-black", i.StyleBlack),
        t.component(n + "-style-white", i.StyleWhite),
        t.component(n + "-style-metal", i.StyleMetal)
    }
    ;
    var a = n(17);
    e.windows = a.windows,
    e.WindowType = o.default
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(12)
      , i = n(2);
    for (var r in i)
        "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t]
            })
        }(r);
    n(32);
    var a = n(8)
      , s = Object(a.a)(i.default, o.a, o.b, !1, null, "300294cc", null);
    s.options.__file = "src/window/index.vue",
    e.default = s.exports
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(10)
      , i = function() {
        function t(t, e, n) {
            void 0 === n && (n = {});
            var i = this;
            this.handle = t,
            this.container = e,
            this.options = n,
            this.mousedown = function(t) {
                t.preventDefault();
                var e = i.handle.getBoundingClientRect()
                  , n = e.left
                  , r = e.top;
                i.offsetX = t.clientX - n,
                i.offsetY = t.clientY - r,
                i.options.onMoveStart && i.options.onMoveStart(),
                i.unbindMove = o.SinglePointerEvent.bindMove(document, i.mousemove),
                i.unbindUp = o.SinglePointerEvent.bindUp(document, i.mouseup)
            }
            ,
            this.mousemove = function(t) {
                i.container.style.left = t.clientX - i.offsetX + "px",
                i.container.style.top = t.clientY - i.offsetY + "px",
                i.options.onMove && i.options.onMove()
            }
            ,
            this.mouseup = function(t) {
                i.options.onMoveEnd && i.options.onMoveEnd(),
                i.unbindUp(),
                i.unbindMove(),
                i.unbindUp = i.unbindMove = void 0
            }
            ,
            this.unbindDown = o.SinglePointerEvent.bindDown(t, this.mousedown),
            t.classList.add("draggable-handle")
        }
        return t.prototype.teardown = function() {
            this.handle.classList.remove("draggable-handle"),
            this.unbindDown(),
            this.unbindUp && this.unbindUp(),
            this.unbindMove && this.unbindMove()
        }
        ,
        t
    }();
    e.DraggableHelper = i
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(9)
      , i = n(16)
      , r = n(10)
      , a = function() {
        function t(t, e) {
            var n = this;
            this.container = t,
            this.options = e,
            this.handles = s.map(function(e) {
                return new e(t,n)
            });
            var o = i.naturalSize(t)
              , r = o.width
              , a = o.height
              , u = e.maxWidth || window.innerWidth
              , l = e.maxHeight || window.innerHeight
              , p = !1;
            (r < e.minWidth || r > u) && (t.style.width = c(r, e.minWidth, u) + "px",
            p = !0),
            (a < e.minHeight || a > l) && (t.style.height = c(a, e.minHeight, l) + "px",
            p = !0),
            p && e.onResize && e.onResize()
        }
        return t.prototype.teardown = function() {
            this.handles.forEach(function(t) {
                return t.teardown()
            })
        }
        ,
        t
    }();
    e.ResizableHelper = a;
    var s = []
      , u = function() {
        function t(t, e) {
            var n = this;
            this.container = t,
            this.helper = e,
            this.handleSize = 8,
            this.mousedown = function(t) {
                t.preventDefault(),
                t.stopPropagation();
                var e = i.getRect(n.container)
                  , o = e.left
                  , a = e.top
                  , s = e.width
                  , u = e.height;
                n.x0 = t.clientX,
                n.y0 = t.clientY,
                n.left0 = o,
                n.top0 = a,
                n.width0 = s,
                n.height0 = u,
                n.calcSafeBoundaries(),
                n.helper.options.onResizeStart && n.helper.options.onResizeStart(),
                n.unbindMove = r.SinglePointerEvent.bindMove(document, n.mousemove),
                n.unbindUp = r.SinglePointerEvent.bindUp(document, n.mouseup)
            }
            ,
            this.mousemove = function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                n.setPosition(t),
                n.fixPosition(),
                n.helper.options.onResize && n.helper.options.onResize()
            }
            ,
            this.mouseup = function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                n.helper.options.onResizeEnd && n.helper.options.onResizeEnd(),
	      n.unbindUp && n.unbindUp(),
	      n.unbindMove && n.unbindMove(),
                n.unbindUp = n.unbindMove = void 0
            }
            ,
            this.handle = this.createHandleElement(),
            this.unbindDown = r.SinglePointerEvent.bindDown(this.handle, this.mousedown)
        }
        return t.prototype.teardown = function() {
            this.unbindDown(),
            this.unbindUp && this.unbindUp(),
            this.unbindMove && this.unbindMove(),
            this.handle.parentElement.removeChild(this.handle)
        }
        ,
        t.prototype.calcSafeBoundaries = function() {
            var t = i.getRect(this.container)
              , e = t.left
              , n = t.top
              , o = t.right
              , r = t.bottom
              , a = this.helper.options
              , s = a.maxWidth || window.innerWidth
              , u = a.maxHeight || window.innerHeight;
            this.minLeft = Math.max(o - s, 0),
            this.maxLeft = o - a.minWidth,
            this.minRight = e + a.minWidth,
            this.maxRight = Math.min(e + s, window.innerWidth),
            this.minTop = Math.max(r - u, 0),
            this.maxTop = r - a.minHeight,
            this.minBottom = n + a.minHeight,
            this.maxBottom = Math.min(n + u, window.innerHeight)
        }
        ,
        t.prototype.fixPosition = function() {
            var t = i.getRect(this.container)
              , e = t.width
              , n = t.height
              , o = t.left
              , r = t.top
              , a = t.right
              , s = t.bottom
              , u = this.helper.options;
            o < this.minLeft ? (this.container.style.width = e + o - this.minLeft + "px",
            this.container.style.left = this.minLeft + "px") : o > this.maxLeft ? (this.container.style.width = u.minWidth + "px",
            this.container.style.left = this.maxLeft + "px") : a < this.minRight ? this.container.style.width = u.minWidth + "px" : a > this.maxRight && (this.container.style.width = this.maxRight - o + "px"),
            r < this.minTop ? (this.container.style.height = n + r - this.minTop + "px",
            this.container.style.top = this.minTop + "px") : r > this.maxTop ? (this.container.style.height = u.minHeight + "px",
            this.container.style.top = this.maxTop + "px") : s < this.minBottom ? this.container.style.height = u.minHeight + "px" : s > this.maxBottom && (this.container.style.height = this.maxBottom - r + "px")
        }
        ,
        t.prototype.createHandleElement = function() {
            var t = document.createElement("div")
              , e = t.style;
            return e.position = "absolute",
            this.applyStyle(e),
            this.container.appendChild(t),
            t
        }
        ,
        t
    }();
    function c(t, e, n) {
        return t < e ? e : t > n ? n : t
    }
    s.push(function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.width = this.width0 + t.clientX - this.x0 + "px",
            this.container.style.height = this.height0 + t.clientY - this.y0 + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.width = 2 * this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.right = -this.handleSize + "px",
            t.bottom = -this.handleSize + "px",
            t.cursor = "nwse-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.height = this.height0 + t.clientY - this.y0 + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.right = this.handleSize + "px",
            t.left = this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.bottom = -this.handleSize + "px",
            t.cursor = "ns-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.left = this.left0 + t.clientX - this.x0 + "px",
            this.container.style.width = this.width0 - (t.clientX - this.x0) + "px",
            this.container.style.height = this.height0 + t.clientY - this.y0 + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.left = -this.handleSize + "px",
            t.bottom = -this.handleSize + "px",
            t.width = 2 * this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.cursor = "nesw-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.left = this.left0 + t.clientX - this.x0 + "px",
            this.container.style.width = this.width0 - (t.clientX - this.x0) + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.left = -this.handleSize + "px",
            t.bottom = this.handleSize + "px",
            t.width = 2 * this.handleSize + "px",
            t.top = this.handleSize + "px",
            t.cursor = "ew-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.left = this.left0 + t.clientX - this.x0 + "px",
            this.container.style.width = this.width0 - (t.clientX - this.x0) + "px",
            this.container.style.top = this.top0 + t.clientY - this.y0 + "px",
            this.container.style.height = this.height0 - (t.clientY - this.y0) + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.left = -this.handleSize + "px",
            t.top = -this.handleSize + "px",
            t.width = 2 * this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.cursor = "nwse-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.top = this.top0 + t.clientY - this.y0 + "px",
            this.container.style.height = this.height0 - (t.clientY - this.y0) + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.left = this.handleSize + "px",
            t.right = this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.top = -this.handleSize + "px",
            t.cursor = "ns-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.top = this.top0 + t.clientY - this.y0 + "px",
            this.container.style.height = this.height0 - (t.clientY - this.y0) + "px",
            this.container.style.width = this.width0 + t.clientX - this.x0 + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.right = -this.handleSize + "px",
            t.top = -this.handleSize + "px",
            t.height = 2 * this.handleSize + "px",
            t.width = 2 * this.handleSize + "px",
            t.cursor = "nesw-resize"
        }
        ,
        e
    }(u), function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.__extends(e, t),
        e.prototype.setPosition = function(t) {
            this.container.style.width = this.width0 + t.clientX - this.x0 + "px"
        }
        ,
        e.prototype.applyStyle = function(t) {
            t.right = -this.handleSize + "px",
            t.top = this.handleSize + "px",
            t.bottom = this.handleSize + "px",
            t.width = 2 * this.handleSize + "px",
            t.cursor = "ew-resize"
        }
        ,
        e
    }(u))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            var n = this;
            this._group = t,
            this.onChange = e,
            this.a(function(t) {
                return t.push(n)
            })
        }
        return Object.defineProperty(t.prototype, "group", {
            get: function() {
                return this._group
            },
            set: function(t) {
                this._group = t;
                var e = a(this._group)
                  , n = a(t);
                e.splice(e.indexOf(this), 1),
                n.push(this),
                u()
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.unregister = function() {
            var t = this;
            this.a(function(e) {
                return e.splice(e.indexOf(t), 1)
            })
        }
        ,
        t.prototype.raise = function() {
            var t = this;
            this.a(function(e) {
                e.splice(e.indexOf(t), 1),
                e.push(t)
            })
        }
        ,
        t.prototype.a = function(t) {
            t(a(this._group)),
            u()
        }
        ,
        t
    }();
    e.ZElement = o;
    var i = new Map
      , r = 0;
    function a(t) {
        return i.has(t) || i.set(t, []),
        i.get(t)
    }
    function s(t, e) {
        return t > e ? -s(e, t) : t < 0 && e >= 0 ? 1 : t - e
    }
    function u() {
        for (var t = r, e = 0, n = function(t) {
            var e = [];
            return t.forEach(function(t, n) {
                return e.push(n)
            }),
            e
        }(i).sort(s); e < n.length; e++)
            for (var o = 0, u = a(n[e]); o < u.length; o++) {
                var c = u[o];
                t != c.zIndex && (c.zIndex = t,
                c.onChange(t)),
                t++
            }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(13)
      , i = n(4);
    for (var r in i)
        "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t]
            })
        }(r);
    n(29);
    var a = n(8)
      , s = Object(a.a)(i.default, o.a, o.b, !1, null, "46a594e4", null);
    s.options.__file = "src/button/index.vue",
    e.default = s.exports
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(9)
      , i = n(11)
      , r = n(15)
      , a = n(10)
      , s = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hover = !1,
            e.active = !1,
            e
        }
        return o.__extends(e, t),
        Object.defineProperty(e.prototype, "style", {
            get: function() {
                var t = this.windowStyle.button;
                return this.hover && (t = o.__assign({}, t, this.windowStyle.buttonHover)),
                this.active && (t = o.__assign({}, t, this.windowStyle.buttonActive)),
                t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.mousedown = function(t) {
            var e = this;
            t.preventDefault(),
            this.active = !0;
            var n = a.SinglePointerEvent.bindUp(document, function() {
                e.active = !1,
                n()
            })
        }
        ,
        e.prototype.mouseup = function(t) {
            this.active && this.$emit("click")
        }
        ,
        o.__decorate([r.Inject(i.WINDOW_STYLE_KEY)], e.prototype, "windowStyle", void 0),
        o.__decorate([r.Prop({
            type: Boolean,
            default: !1
        })], e.prototype, "disabled", void 0),
        e = o.__decorate([r.Component], e)
    }(r.Vue);
    e.Button = s
}
, function(t, e, n) {
    "use strict";
    var o = n(6);
    n.n(o).a
}
, function(t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, ".button[data-v-46a594e4] {\n  background-color: transparent;\n  border: none;\n  font-size: medium;\n  margin: 0;\n  padding: 0 0.25em;\n  border-radius: 4pt;\n}\n", ""])
}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var n = e.protocol + "//" + e.host
          , o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var i, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""),
            "url(" + JSON.stringify(i) + ")")
        })
    }
}
, function(t, e, n) {
    "use strict";
    var o = n(7);
    n.n(o).a
}
, function(t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, ".window[data-v-300294cc] {\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  border-radius: 4pt 4pt 0 0;\n}\n.titlebar[data-v-300294cc] {\n  display: flex;\n  flex-flow: row nowrap;\n  border-radius: 4pt 4pt 0 0;\n  font-family: sans-serif;\n  padding: 0.5em;\n  flex: 0 0 auto;\n}\n.title[data-v-300294cc] {\n  flex-grow: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content[data-v-300294cc] {\n  flex-grow: 1;\n  padding: 0.5em;\n}\n.draggable-handle[data-v-300294cc] {\n  cursor: move;\n}\n.fade-enter[data-v-300294cc],\n.fade-leave-to[data-v-300294cc] {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.fade-enter-active[data-v-300294cc],\n.fade-leave-active[data-v-300294cc] {\n  transition: 0.2s;\n}\n", ""])
}
, function(t, e, n) {
    t.exports = n.p + "example.html"
}
]);

