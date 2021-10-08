/*!
 * 
 *  js-cloudimage-360-view v2.6.0
 *  https://github.com/scaleflex/js-cloudimage-360-view
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2021-07-16T08:43:21.600Z
 * 
*/
!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 38)
}([function(e, t, i) {
    (function(t) {
        var i = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")()
    }
    ).call(this, i(42))
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, i) {
    var n = i(23)
      , o = {}.hasOwnProperty;
    e.exports = Object.hasOwn || function(e, t) {
        return o.call(n(e), t)
    }
}
, function(e, t, i) {
    var n = i(1);
    e.exports = !n((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, i) {
    var n = i(3)
      , o = i(6)
      , s = i(18);
    e.exports = n ? function(e, t, i) {
        return o.f(e, t, s(1, i))
    }
    : function(e, t, i) {
        return e[t] = i,
        e
    }
}
, function(e, t, i) {
    var n = i(3)
      , o = i(24)
      , s = i(7)
      , r = i(22)
      , a = Object.defineProperty;
    t.f = n ? a : function(e, t, i) {
        if (s(e),
        t = r(t, !0),
        s(i),
        o)
            try {
                return a(e, t, i)
            } catch (e) {}
        if ("get"in i || "set"in i)
            throw TypeError("Accessors not supported");
        return "value"in i && (e[t] = i.value),
        e
    }
}
, function(e, t, i) {
    var n = i(4);
    e.exports = function(e) {
        if (!n(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(17).f
      , s = i(5)
      , r = i(44)
      , a = i(10)
      , c = i(48)
      , l = i(54);
    e.exports = function(e, t) {
        var i, h, u, d, f, v = e.target, p = e.global, m = e.stat;
        if (i = p ? n : m ? n[v] || a(v, {}) : (n[v] || {}).prototype)
            for (h in t) {
                if (d = t[h],
                u = e.noTargetGet ? (f = o(i, h)) && f.value : i[h],
                !l(p ? h : v + (m ? "." : "#") + h, e.forced) && void 0 !== u) {
                    if (typeof d == typeof u)
                        continue;
                    c(d, u)
                }
                (e.sham || u && u.sham) && s(d, "sham", !0),
                r(i, h, d, e)
            }
    }
}
, function(e, t, i) {
    var n = i(19)
      , o = i(21);
    e.exports = function(e) {
        return n(o(e))
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(5);
    e.exports = function(e, t) {
        try {
            o(n, e, t)
        } catch (i) {
            n[e] = t
        }
        return t
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(10)
      , s = n["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = s
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, i) {
    var n = i(50)
      , o = i(0)
      , s = function(e) {
        return "function" == typeof e ? e : void 0
    };
    e.exports = function(e, t) {
        return arguments.length < 2 ? s(n[e]) || s(o[e]) : n[e] && n[e][t] || o[e] && o[e][t]
    }
}
, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}
, function(e, t, i) {
    var n = i(0)
      , o = i(28)
      , s = i(2)
      , r = i(29)
      , a = i(36)
      , c = i(60)
      , l = o("wks")
      , h = n.Symbol
      , u = c ? h : h && h.withoutSetter || r;
    e.exports = function(e) {
        return s(l, e) && (a || "string" == typeof l[e]) || (a && s(h, e) ? l[e] = h[e] : l[e] = u("Symbol." + e)),
        l[e]
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(35)
      , s = Function.call;
    e.exports = function(e, t, i) {
        return o(s, n[e].prototype[t], i)
    }
}
, function(e, t, i) {
    var n = i(3)
      , o = i(43)
      , s = i(18)
      , r = i(9)
      , a = i(22)
      , c = i(2)
      , l = i(24)
      , h = Object.getOwnPropertyDescriptor;
    t.f = n ? h : function(e, t) {
        if (e = r(e),
        t = a(t, !0),
        l)
            try {
                return h(e, t)
            } catch (e) {}
        if (c(e, t))
            return s(!o.f.call(e, t), e[t])
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, i) {
    var n = i(1)
      , o = i(20)
      , s = "".split;
    e.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == o(e) ? s.call(e, "") : Object(e)
    }
    : Object
}
, function(e, t) {
    var i = {}.toString;
    e.exports = function(e) {
        return i.call(e).slice(8, -1)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
}
, function(e, t, i) {
    var n = i(4);
    e.exports = function(e, t) {
        if (!n(e))
            return e;
        var i, o;
        if (t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
            return o;
        if ("function" == typeof (i = e.valueOf) && !n(o = i.call(e)))
            return o;
        if (!t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, i) {
    var n = i(21);
    e.exports = function(e) {
        return Object(n(e))
    }
}
, function(e, t, i) {
    var n = i(3)
      , o = i(1)
      , s = i(25);
    e.exports = !n && !o((function() {
        return 7 != Object.defineProperty(s("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, i) {
    var n = i(0)
      , o = i(4)
      , s = n.document
      , r = o(s) && o(s.createElement);
    e.exports = function(e) {
        return r ? s.createElement(e) : {}
    }
}
, function(e, t, i) {
    var n = i(11)
      , o = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function(e) {
        return o.call(e)
    }
    ),
    e.exports = n.inspectSource
}
, function(e, t, i) {
    var n = i(28)
      , o = i(29)
      , s = n("keys");
    e.exports = function(e) {
        return s[e] || (s[e] = o(e))
    }
}
, function(e, t, i) {
    var n = i(47)
      , o = i(11);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.15.2",
        mode: n ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    var i = 0
      , n = Math.random();
    e.exports = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++i + n).toString(36)
    }
}
, function(e, t, i) {
    var n = i(2)
      , o = i(9)
      , s = i(31).indexOf
      , r = i(12);
    e.exports = function(e, t) {
        var i, a = o(e), c = 0, l = [];
        for (i in a)
            !n(r, i) && n(a, i) && l.push(i);
        for (; t.length > c; )
            n(a, i = t[c++]) && (~s(l, i) || l.push(i));
        return l
    }
}
, function(e, t, i) {
    var n = i(9)
      , o = i(32)
      , s = i(52)
      , r = function(e) {
        return function(t, i, r) {
            var a, c = n(t), l = o(c.length), h = s(r, l);
            if (e && i != i) {
                for (; l > h; )
                    if ((a = c[h++]) != a)
                        return !0
            } else
                for (; l > h; h++)
                    if ((e || h in c) && c[h] === i)
                        return e || h || 0;
            return !e && -1
        }
    };
    e.exports = {
        includes: r(!0),
        indexOf: r(!1)
    }
}
, function(e, t, i) {
    var n = i(33)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var i = Math.ceil
      , n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
    }
}
, function(e, t, i) {
    var n = i(35)
      , o = i(19)
      , s = i(23)
      , r = i(32)
      , a = i(57)
      , c = [].push
      , l = function(e) {
        var t = 1 == e
          , i = 2 == e
          , l = 3 == e
          , h = 4 == e
          , u = 6 == e
          , d = 7 == e
          , f = 5 == e || u;
        return function(v, p, m, y) {
            for (var g, w, x = s(v), b = o(x), I = n(p, m, 3), S = r(b.length), C = 0, k = y || a, E = t ? k(v, S) : i || d ? k(v, 0) : void 0; S > C; C++)
                if ((f || C in b) && (w = I(g = b[C], C, x),
                e))
                    if (t)
                        E[C] = w;
                    else if (w)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return g;
                        case 6:
                            return C;
                        case 2:
                            c.call(E, g)
                        }
                    else
                        switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            c.call(E, g)
                        }
            return u ? -1 : l || h ? h : E
        }
    };
    e.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterOut: l(7)
    }
}
, function(e, t, i) {
    var n = i(56);
    e.exports = function(e, t, i) {
        if (n(e),
        void 0 === t)
            return e;
        switch (i) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(i) {
                return e.call(t, i)
            }
            ;
        case 2:
            return function(i, n) {
                return e.call(t, i, n)
            }
            ;
        case 3:
            return function(i, n, o) {
                return e.call(t, i, n, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, i) {
    var n = i(37)
      , o = i(1);
    e.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && n && n < 41
    }
    ))
}
, function(e, t, i) {
    var n, o, s = i(0), r = i(59), a = s.process, c = a && a.versions, l = c && c.v8;
    l ? o = (n = l.split("."))[0] < 4 ? 1 : n[0] + n[1] : r && (!(n = r.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = r.match(/Chrome\/(\d+)/)) && (o = n[1]),
    e.exports = o && +o
}
, function(e, t, i) {
    "use strict";
    i(39),
    i(62),
    i(66);
    var n, o = i(74), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    function r() {
        var e = []
          , t = document.querySelectorAll(".cloudimage-360:not(.initialized)");
        [].slice.call(t).forEach((function(t) {
            e.push(new s.default(t))
        }
        )),
        window.CI360._viewers = e
    }
    function a() {
        return !(window.CI360._viewers && window.CI360._viewers.length > 0)
    }
    window.CI360 = window.CI360 || {},
    window.CI360.init = r,
    window.CI360.destroy = function() {
        a() || (window.CI360._viewers.forEach((function(e) {
            e.destroy()
        }
        )),
        window.CI360._viewers = [])
    }
    ,
    window.CI360.getActiveIndexByID = function(e) {
        if (!a()) {
            var t = window.CI360._viewers.filter((function(t) {
                return t.id === e
            }
            ))[0];
            return t && t.activeImage - 1
        }
    }
    ,
    window.CI360.notInitOnLoad || r()
}
, function(e, t, i) {
    var n = i(40);
    e.exports = n
}
, function(e, t, i) {
    i(41);
    var n = i(16);
    e.exports = n("Array", "forEach")
}
, function(e, t, i) {
    "use strict";
    var n = i(8)
      , o = i(55);
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != o
    }, {
        forEach: o
    })
}
, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}
, function(e, t, i) {
    "use strict";
    var n = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , s = o && !n.call({
        1: 2
    }, 1);
    t.f = s ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    }
    : n
}
, function(e, t, i) {
    var n = i(0)
      , o = i(5)
      , s = i(2)
      , r = i(10)
      , a = i(26)
      , c = i(45)
      , l = c.get
      , h = c.enforce
      , u = String(String).split("String");
    (e.exports = function(e, t, i, a) {
        var c, l = !!a && !!a.unsafe, d = !!a && !!a.enumerable, f = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof t || s(i, "name") || o(i, "name", t),
        (c = h(i)).source || (c.source = u.join("string" == typeof t ? t : ""))),
        e !== n ? (l ? !f && e[t] && (d = !0) : delete e[t],
        d ? e[t] = i : o(e, t, i)) : d ? e[t] = i : r(t, i)
    }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && l(this).source || a(this)
    }
    ))
}
, function(e, t, i) {
    var n, o, s, r = i(46), a = i(0), c = i(4), l = i(5), h = i(2), u = i(11), d = i(27), f = i(12), v = a.WeakMap;
    if (r || u.state) {
        var p = u.state || (u.state = new v)
          , m = p.get
          , y = p.has
          , g = p.set;
        n = function(e, t) {
            if (y.call(p, e))
                throw new TypeError("Object already initialized");
            return t.facade = e,
            g.call(p, e, t),
            t
        }
        ,
        o = function(e) {
            return m.call(p, e) || {}
        }
        ,
        s = function(e) {
            return y.call(p, e)
        }
    } else {
        var w = d("state");
        f[w] = !0,
        n = function(e, t) {
            if (h(e, w))
                throw new TypeError("Object already initialized");
            return t.facade = e,
            l(e, w, t),
            t
        }
        ,
        o = function(e) {
            return h(e, w) ? e[w] : {}
        }
        ,
        s = function(e) {
            return h(e, w)
        }
    }
    e.exports = {
        set: n,
        get: o,
        has: s,
        enforce: function(e) {
            return s(e) ? o(e) : n(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var i;
                if (!c(t) || (i = o(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return i
            }
        }
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(26)
      , s = n.WeakMap;
    e.exports = "function" == typeof s && /native code/.test(o(s))
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, i) {
    var n = i(2)
      , o = i(49)
      , s = i(17)
      , r = i(6);
    e.exports = function(e, t) {
        for (var i = o(t), a = r.f, c = s.f, l = 0; l < i.length; l++) {
            var h = i[l];
            n(e, h) || a(e, h, c(t, h))
        }
    }
}
, function(e, t, i) {
    var n = i(13)
      , o = i(51)
      , s = i(53)
      , r = i(7);
    e.exports = n("Reflect", "ownKeys") || function(e) {
        var t = o.f(r(e))
          , i = s.f;
        return i ? t.concat(i(e)) : t
    }
}
, function(e, t, i) {
    var n = i(0);
    e.exports = n
}
, function(e, t, i) {
    var n = i(30)
      , o = i(14).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, o)
    }
}
, function(e, t, i) {
    var n = i(33)
      , o = Math.max
      , s = Math.min;
    e.exports = function(e, t) {
        var i = n(e);
        return i < 0 ? o(i + t, 0) : s(i, t)
    }
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, i) {
    var n = i(1)
      , o = /#|\.prototype\./
      , s = function(e, t) {
        var i = a[r(e)];
        return i == l || i != c && ("function" == typeof t ? n(t) : !!t)
    }
      , r = s.normalize = function(e) {
        return String(e).replace(o, ".").toLowerCase()
    }
      , a = s.data = {}
      , c = s.NATIVE = "N"
      , l = s.POLYFILL = "P";
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    var n = i(34).forEach
      , o = i(61)("forEach");
    e.exports = o ? [].forEach : function(e) {
        return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
}
, function(e, t, i) {
    var n = i(4)
      , o = i(58)
      , s = i(15)("species");
    e.exports = function(e, t) {
        var i;
        return o(e) && ("function" != typeof (i = e.constructor) || i !== Array && !o(i.prototype) ? n(i) && null === (i = i[s]) && (i = void 0) : i = void 0),
        new (void 0 === i ? Array : i)(0 === t ? 0 : t)
    }
}
, function(e, t, i) {
    var n = i(20);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}
, function(e, t, i) {
    var n = i(13);
    e.exports = n("navigator", "userAgent") || ""
}
, function(e, t, i) {
    var n = i(36);
    e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
}
, function(e, t, i) {
    "use strict";
    var n = i(1);
    e.exports = function(e, t) {
        var i = [][e];
        return !!i && n((function() {
            i.call(null, t || function() {
                throw 1
            }
            , 1)
        }
        ))
    }
}
, function(e, t, i) {
    var n = i(63);
    e.exports = n
}
, function(e, t, i) {
    i(64);
    var n = i(16);
    e.exports = n("Array", "filter")
}
, function(e, t, i) {
    "use strict";
    var n = i(8)
      , o = i(34).filter;
    n({
        target: "Array",
        proto: !0,
        forced: !i(65)("filter")
    }, {
        filter: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}
, function(e, t, i) {
    var n = i(1)
      , o = i(15)
      , s = i(37)
      , r = o("species");
    e.exports = function(e) {
        return s >= 51 || !n((function() {
            var t = [];
            return (t.constructor = {})[r] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        }
        ))
    }
}
, function(e, t, i) {
    var n = i(67);
    e.exports = n
}
, function(e, t, i) {
    i(68);
    var n = i(16);
    e.exports = n("Array", "includes")
}
, function(e, t, i) {
    "use strict";
    var n = i(8)
      , o = i(31).includes
      , s = i(69);
    n({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    s("includes")
}
, function(e, t, i) {
    var n = i(15)
      , o = i(70)
      , s = i(6)
      , r = n("unscopables")
      , a = Array.prototype;
    null == a[r] && s.f(a, r, {
        configurable: !0,
        value: o(null)
    }),
    e.exports = function(e) {
        a[r][e] = !0
    }
}
, function(e, t, i) {
    var n, o = i(7), s = i(71), r = i(14), a = i(12), c = i(73), l = i(25), h = i(27), u = h("IE_PROTO"), d = function() {}, f = function(e) {
        return "<script>" + e + "<\/script>"
    }, v = function() {
        try {
            n = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        var e, t;
        v = n ? function(e) {
            e.write(f("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(n) : ((t = l("iframe")).style.display = "none",
        c.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(f("document.F=Object")),
        e.close(),
        e.F);
        for (var i = r.length; i--; )
            delete v.prototype[r[i]];
        return v()
    };
    a[u] = !0,
    e.exports = Object.create || function(e, t) {
        var i;
        return null !== e ? (d.prototype = o(e),
        i = new d,
        d.prototype = null,
        i[u] = e) : i = v(),
        void 0 === t ? i : s(i, t)
    }
}
, function(e, t, i) {
    var n = i(3)
      , o = i(6)
      , s = i(7)
      , r = i(72);
    e.exports = n ? Object.defineProperties : function(e, t) {
        s(e);
        for (var i, n = r(t), a = n.length, c = 0; a > c; )
            o.f(e, i = n[c++], t[i]);
        return e
    }
}
, function(e, t, i) {
    var n = i(30)
      , o = i(14);
    e.exports = Object.keys || function(e) {
        return n(e, o)
    }
}
, function(e, t, i) {
    var n = i(13);
    e.exports = n("document", "documentElement")
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , o = i(75);
    var s = function() {
        function e(t, i, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.container = t,
            this.activeImage = 1,
            this.movementStart = 0,
            this.isClicked = !1,
            this.loadedImages = 0,
            this.imagesLoaded = !1,
            this.reversed = !1,
            this.fullScreenView = !!i,
            this.ratio = n,
            this.images = [],
            this.devicePixelRatio = Math.round(window.devicePixelRatio || 1),
            this.isMobile = !(!("ontouchstart"in window) && !navigator.msMaxTouchPoints),
            this.id = t.id,
            this.init(t),
            this.zoomWidth = 0,
            this.zoomHeight = 0,
            this.zoomOffset = 0,
            this.scrolling = !1
        }
        return n(e, [{
            key: "mousedown",
            value: function(e) {
                e.preventDefault(),
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1),
                this.scrollZoom && this.container.addEventListener("wheel", this.mouseScrollZoom.bind(this)),
                this.movementStart = e.pageX,
                this.isClicked = !0,
                this.container.style.cursor = "grabbing")
            }
        }, {
            key: "mouseup",
            value: function() {
                this.imagesLoaded && (this.movementStart = 0,
                this.isClicked = !1,
                this.container.style.cursor = "grab",
                this.bottomCircle && this.show360ViewCircleIcon())
            }
        }, {
            key: "mousemove",
            value: function(e) {
                this.isClicked && this.imagesLoaded && this.onMove(e.pageX)
            }
        }, {
            key: "touchstart",
            value: function(e) {
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1),
                this.movementStart = e.touches[0].clientX,
                this.isClicked = !0)
            }
        }, {
            key: "touchend",
            value: function() {
                this.imagesLoaded && (this.movementStart = 0,
                this.isClicked = !1,
                this.bottomCircle && this.show360ViewCircleIcon())
            }
        }, {
            key: "touchmove",
            value: function(e) {
                this.isClicked && this.imagesLoaded && this.onMove(e.touches[0].clientX)
            }
        }, {
            key: "keydownGeneral",
            value: function() {
                this.imagesLoaded && this.glass && this.closeMagnifier()
            }
        }, {
            key: "mouseScrollZoom",
            value: function(e) {
                if (this.imagesLoaded && this.scrollZoom) {
                    e.preventDefault();
                    var t = this.zoomSpeed / 100
                      , i = this.canvas.width + this.canvas.width * this.maxZoomScale / 10;
                    e.deltaY < 0 && this.zoomWidth < i ? (this.zoomWidth += Math.floor(this.zoomWidth * t),
                    this.zoomHeight += Math.floor(this.zoomHeight * t),
                    this.update()) : this.zoomWidth > this.canvas.width && e.deltaY > 0 && (this.zoomWidth -= Math.floor(this.zoomWidth * t),
                    this.zoomHeight -= Math.floor(this.zoomHeight * t),
                    this.update()),
                    this.scrolling = !0
                }
            }
        }, {
            key: "keydown",
            value: function(e) {
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                -1 !== [37, 39].indexOf(e.keyCode) && (37 === e.keyCode ? this.reversed ? this.prev() : this.next() : 39 === e.keyCode && (this.reversed ? this.next() : this.prev()),
                this.onSpin()))
            }
        }, {
            key: "onSpin",
            value: function() {
                this.bottomCircle && this.hide360ViewCircleIcon(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1)
            }
        }, {
            key: "keyup",
            value: function(e) {
                this.imagesLoaded && -1 !== [37, 39].indexOf(e.keyCode) && this.onFinishSpin()
            }
        }, {
            key: "onFinishSpin",
            value: function() {
                this.bottomCircle && this.show360ViewCircleIcon()
            }
        }, {
            key: "onMove",
            value: function(e) {
                if (e - this.movementStart >= this.speedFactor) {
                    var t = Math.floor((e - this.movementStart) / this.speedFactor) || 1;
                    this.movementStart = e,
                    this.spinReverse ? this.moveActiveIndexDown(t) : this.moveActiveIndexUp(t),
                    this.bottomCircle && this.hide360ViewCircleIcon(),
                    this.update()
                } else if (this.movementStart - e >= this.speedFactor) {
                    var i = Math.floor((this.movementStart - e) / this.speedFactor) || 1;
                    this.movementStart = e,
                    this.spinReverse ? this.moveActiveIndexUp(i) : this.moveActiveIndexDown(i),
                    this.bottomCircle && this.hide360ViewCircleIcon(),
                    this.update()
                }
            }
        }, {
            key: "moveActiveIndexUp",
            value: function(e) {
                var t = this.controlReverse ? !this.spinReverse : this.spinReverse;
                this.stopAtEdges ? this.activeImage + e >= this.amount ? (this.activeImage = this.amount,
                (t ? this.prevElem : this.nextElem) && (0,
                o.addClass)(t ? this.prevElem : this.nextElem, "not-active")) : (this.activeImage += e,
                this.nextElem && (0,
                o.removeClass)(this.nextElem, "not-active"),
                this.prevElem && (0,
                o.removeClass)(this.prevElem, "not-active")) : this.activeImage = (this.activeImage + e) % this.amount || this.amount
            }
        }, {
            key: "moveActiveIndexDown",
            value: function(e) {
                var t = this.controlReverse ? !this.spinReverse : this.spinReverse;
                this.stopAtEdges ? this.activeImage - e <= 1 ? (this.activeImage = 1,
                (t ? this.nextElem : this.prevElem) && (0,
                o.addClass)(t ? this.nextElem : this.prevElem, "not-active")) : (this.activeImage -= e,
                this.prevElem && (0,
                o.removeClass)(this.prevElem, "not-active"),
                this.nextElem && (0,
                o.removeClass)(this.nextElem, "not-active")) : this.activeImage - e < 1 ? this.activeImage = this.amount + (this.activeImage - e) : this.activeImage -= e
            }
        }, {
            key: "loop",
            value: function(e) {
                e ? this.prev() : this.next()
            }
        }, {
            key: "next",
            value: function() {
                this.moveActiveIndexUp(1),
                this.update()
            }
        }, {
            key: "prev",
            value: function() {
                this.moveActiveIndexDown(1),
                this.update()
            }
        }, {
            key: "update",
            value: function() {
                var e = this.images[this.activeImage - 1]
                  , t = this.canvas.getContext("2d");
                if (t.scale(this.devicePixelRatio, this.devicePixelRatio),
                this.fullScreenView) {
                    this.canvas.width = window.innerWidth * this.devicePixelRatio,
                    this.canvas.style.width = window.innerWidth + "px",
                    this.canvas.height = window.innerHeight * this.devicePixelRatio,
                    this.canvas.style.height = window.innerHeight + "px";
                    var i = (0,
                    o.contain)(this.canvas.width, this.canvas.height, e.width, e.height)
                      , n = i.offsetX
                      , s = i.offsetY
                      , r = i.width
                      , a = i.height;
                    t.drawImage(e, n, s, r, a)
                } else
                    this.canvas.width = this.container.offsetWidth * this.devicePixelRatio,
                    this.canvas.style.width = this.container.offsetWidth + "px",
                    this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / e.width * e.height,
                    this.canvas.style.height = this.container.offsetWidth / e.width * e.height + "px",
                    this.scrolling && (this.zoomOffset = (this.canvas.width - this.zoomWidth) / 2,
                    this.scrolling = !1),
                    t.drawImage(e, this.zoomOffset, this.zoomOffset, this.zoomWidth, this.zoomHeight)
            }
        }, {
            key: "updatePercentageInLoader",
            value: function(e) {
                this.loader && (this.loader.style.width = e + "%"),
                this.view360Icon && (this.view360Icon.innerText = e + "%")
            }
        }, {
            key: "onAllImagesLoaded",
            value: function() {
                if (this.imagesLoaded = !0,
                this.container.style.cursor = "grab",
                this.disableDrag && (this.container.style.cursor = "default"),
                this.removeLoader(),
                this.fullScreenView) {
                    var e = this.container.offsetHeight / this.container.offsetWidth
                      , t = this.container.offsetWidth;
                    this.ratio > e && (t = this.container.offsetHeight / this.ratio),
                    this.speedFactor = Math.floor(this.dragSpeed / 150 * 36 / this.amount * 25 * t / 1500) || 1
                } else
                    this.speedFactor = Math.floor(this.dragSpeed / 150 * 36 / this.amount * 25 * this.container.offsetWidth / 1500) || 1;
                this.imageOffset && (this.activeImage = this.imageOffset),
                this.autoplay && this.play(),
                this.view360Icon && (this.view360Icon.innerText = "",
                (0,
                o.setView360Icon)(this.view360Icon, this.logoSrc)),
                this.initControls()
            }
        }, {
            key: "onFirstImageLoaded",
            value: function(e) {
                var t = this;
                if (this.hide360Logo || this.add360ViewIcon(),
                this.fullScreenView) {
                    this.canvas.width = window.innerWidth * this.devicePixelRatio,
                    this.canvas.style.width = window.innerWidth + "px",
                    this.canvas.height = window.innerHeight * this.devicePixelRatio,
                    this.canvas.style.height = window.innerHeight + "px";
                    var i = this.canvas.getContext("2d")
                      , n = (0,
                    o.contain)(this.canvas.width, this.canvas.height, e.target.width, e.target.height)
                      , s = n.offsetX
                      , r = n.offsetY
                      , a = n.width
                      , c = n.height;
                    i.drawImage(e.target, s, r, a, c)
                } else {
                    var l = this.canvas.getContext("2d")
                      , h = e.target;
                    if (this.imageOffset && (h = this.images[this.imageOffset]),
                    this.container.offsetWidth > 0 && (this.canvas.width = this.container.offsetWidth * this.devicePixelRatio,
                    this.canvas.style.width = this.container.offsetWidth + "px",
                    this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / e.target.width * e.target.height,
                    this.canvas.style.height = this.container.offsetWidth / e.target.width * e.target.height + "px",
                    this.zoomWidth = this.container.offsetWidth * this.devicePixelRatio,
                    this.zoomHeight = this.container.offsetWidth * this.devicePixelRatio / e.target.width * e.target.height,
                    l.drawImage(h, 0, 0, this.canvas.width, this.canvas.height)),
                    0 === this.container.offsetWidth) {
                        var u = document.getElementById("modal-content-ref");
                        this.canvas.style.width = u.style.width,
                        this.canvas.style.height = u.style.height,
                        l.drawImage(e.target, 0, 0, this.canvas.width, this.canvas.height)
                    }
                }
                this.lazyload && !this.fullScreenView && this.images.forEach((function(e, i) {
                    0 !== i ? e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")) : t.innerBox.removeChild(t.lazyloadInitImage)
                }
                )),
                this.ratio && (this.container.style.minHeight = "auto"),
                this.magnifier && !this.fullScreenView && this.addMagnifier(),
                this.boxShadow && !this.fullScreenView && this.addBoxShadow(),
                this.bottomCircle && !this.fullScreenView && this.add360ViewCircleIcon(),
                this.fullScreen && !this.fullScreenView ? this.addFullScreenIcon() : this.fullScreenView && this.addCloseFullScreenView()
            }
        }, {
            key: "onImageLoad",
            value: function(e, t) {
                var i = Math.round(this.loadedImages / this.amount * 100);
                this.loadedImages += 1,
                this.updatePercentageInLoader(i),
                this.loadedImages === this.amount ? this.onAllImagesLoaded(t) : this.imageOffset > 1 && this.imageOffset - 1 === e ? (this.activeImage = this.imageOffset,
                this.update()) : 0 === e && this.onFirstImageLoaded(t)
            }
        }, {
            key: "addCloseFullScreenView",
            value: function(e) {
                var t = document.createElement("div");
                (0,
                o.setCloseFullScreenViewStyles)(t),
                t.onclick = this.setFullScreenEvents.bind(this, e),
                window.onkeyup = this.setFullScreenEvents.bind(this, e),
                this.innerBox.appendChild(t)
            }
        }, {
            key: "add360ViewIcon",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.set360ViewIconStyles)(e),
                e.innerText = "0%",
                this.view360Icon = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addFullScreenIcon",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setFullScreenIconStyles)(e, this.fullscreenIconSelector),
                e.onclick = this.openFullScreenModal.bind(this),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addMagnifier",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setMagnifyIconStyles)(e, this.fullScreen, this.magnifyIconSelector),
                e.onclick = this.magnify.bind(this),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "getOriginalSrc",
            value: function() {
                var e = this.images[this.activeImage - 1]
                  , t = e.src.lastIndexOf("//");
                return t > 10 ? e.src.slice(t) : e.src
            }
        }, {
            key: "magnify",
            value: function() {
                var e = this
                  , t = new Image
                  , i = this.getOriginalSrc();
                t.src = i,
                t.onload = function() {
                    e.glass && (e.glass.style.cursor = "none")
                }
                ,
                this.glass = document.createElement("div"),
                this.container.style.overflow = "hidden",
                (0,
                o.magnify)(this.container, i, this.glass, this.magnifier || 3)
            }
        }, {
            key: "closeMagnifier",
            value: function() {
                this.glass && (this.container.style.overflow = "visible",
                this.container.removeChild(this.glass),
                this.glass = null)
            }
        }, {
            key: "openFullScreenModal",
            value: function() {
                var t = document.createElement("div");
                (0,
                o.setFullScreenModalStyles)(t);
                var i = this.container.cloneNode()
                  , n = this.images[0]
                  , s = n.height / n.width;
                i.style.height = "100%",
                i.style.maxHeight = "100%",
                t.appendChild(i),
                window.document.body.style.overflow = "hidden",
                window.document.body.appendChild(t),
                new e(i,!0,s)
            }
        }, {
            key: "setFullScreenEvents",
            value: function(e, t) {
                return "click" === t.type ? this.closeFullScreenModal() : "Escape" === t.key ? this.closeFullScreenModalOnEsc() : void 0
            }
        }, {
            key: "closeFullScreenModalOnEsc",
            value: function() {
                this.container.parentNode.parentNode === document.body && this.closeFullScreenModal()
            }
        }, {
            key: "closeFullScreenModal",
            value: function() {
                document.body.removeChild(this.container.parentNode),
                window.document.body.style.overflow = "visible"
            }
        }, {
            key: "add360ViewCircleIcon",
            value: function() {
                var e = new Image;
                (0,
                o.set360ViewCircleIconStyles)(e, this.bottomCircleOffset),
                this.view360CircleIcon = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "hide360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "0")
            }
        }, {
            key: "show360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "1")
            }
        }, {
            key: "remove360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.innerBox.removeChild(this.view360CircleIcon),
                this.view360CircleIcon = null)
            }
        }, {
            key: "addLoader",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setLoaderStyles)(e),
                this.loader = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addBoxShadow",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setBoxShadowStyles)(e, this.boxShadow),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "removeLoader",
            value: function() {
                this.loader && (this.innerBox.removeChild(this.loader),
                this.loader = null)
            }
        }, {
            key: "remove360ViewIcon",
            value: function() {
                this.view360Icon && (this.innerBox.removeChild(this.view360Icon),
                this.view360Icon = null)
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                this.bottomCircle && this.hide360ViewCircleIcon(),
                this.remove360ViewIcon(),
                this.loopTimeoutId = window.setInterval((function() {
                    e.loop(e.reversed);
                    var t = e.reversed && 1 === e.activeImage || !e.reversed && e.activeImage === e.amount;
                    e.playOnce && t && window.clearTimeout(e.loopTimeoutId)
                }
                ), this.autoplaySpeed)
            }
        }, {
            key: "stop",
            value: function() {
                this.bottomCircle && this.show360ViewCircleIcon(),
                window.clearTimeout(this.loopTimeoutId)
            }
        }, {
            key: "getSrc",
            value: function(e, t, i, n, s) {
                var r = s.ciSize
                  , a = s.ciToken
                  , c = s.ciOperation
                  , l = s.ciFilters
                  , h = "" + i + n;
                if (e) {
                    var u = t.offsetWidth;
                    if (this.fullScreenView) {
                        var d = t.offsetHeight / t.offsetWidth;
                        this.ratio > d && (u = t.offsetHeight / this.ratio)
                    }
                    h = "https://" + a + ".cloudimg.io/" + c + "/" + (0,
                    o.getSizeAccordingToPixelRatio)(r || (0,
                    o.getResponsiveWidthOfContainer)(u)) + "/" + l + "/" + h
                }
                return h
            }
        }, {
            key: "preloadImages",
            value: function(e, t, i, n, s, r, a) {
                var c = this;
                if (this.imageList)
                    try {
                        var l = JSON.parse(this.imageList);
                        this.amount = l.length,
                        l.forEach((function(e, t) {
                            var o = /(http(s?)):\/\//gi.test(e) ? "" : c.folder
                              , l = c.getSrc(r, s, o, e, a);
                            c.addImage(l, i, n, t)
                        }
                        ))
                    } catch (e) {
                        console.error("Wrong format in image-list attribute: " + e.message)
                    }
                else
                    [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++)
                                i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(new Array(e))).map((function(e, s) {
                        var r = (0,
                        o.pad)(s + 1, c.indexZeroBase)
                          , a = t.replace("{index}", r);
                        c.addImage(a, i, n, s)
                    }
                    ))
            }
        }, {
            key: "addImage",
            value: function(e, t, i, n) {
                var o = new Image;
                t && !this.fullScreenView ? (o.setAttribute("data-src", e),
                o.className = o.className.length ? o.className + " " + i : i,
                0 === n && (this.lazyloadInitImage = o,
                o.style.position = "absolute",
                o.style.top = "0",
                o.style.left = "0",
                this.innerBox.appendChild(o))) : o.src = e,
                o.onload = this.onImageLoad.bind(this, n),
                o.onerror = this.onImageLoad.bind(this, n),
                this.images.push(o)
            }
        }, {
            key: "destroy",
            value: function() {
                stop();
                var e = this.container
                  , t = e.cloneNode(!0)
                  , i = t.querySelector(".cloudimage-inner-box");
                t.className = t.className.replace(" initialized", ""),
                t.style.position = "relative",
                t.style.width = "100%",
                t.style.cursor = "default",
                t.setAttribute("draggable", "false"),
                t.style.minHeight = "auto",
                t.removeChild(i),
                e.parentNode.replaceChild(t, e)
            }
        }, {
            key: "initControls",
            value: function() {
                var e = this
                  , t = this.controlReverse ? !this.spinReverse : this.spinReverse
                  , i = this.container.querySelector(".cloudimage-360-prev")
                  , n = this.container.querySelector(".cloudimage-360-next");
                if (i || n) {
                    var s = function(t) {
                        t.stopPropagation(),
                        e.onSpin(),
                        e.prev(),
                        e.loopTimeoutId = window.setInterval(e.prev.bind(e), e.autoplaySpeed)
                    }
                      , r = function(t) {
                        t.stopPropagation(),
                        e.onSpin(),
                        e.next(),
                        e.loopTimeoutId = window.setInterval(e.next.bind(e), e.autoplaySpeed)
                    }
                      , a = function() {
                        e.onFinishSpin(),
                        window.clearTimeout(e.loopTimeoutId)
                    }
                      , c = function() {
                        e.onFinishSpin(),
                        window.clearTimeout(e.loopTimeoutId)
                    };
                    i && (i.style.display = "block",
                    i.addEventListener("mousedown", t ? r : s),
                    i.addEventListener("touchstart", t ? r : s),
                    i.addEventListener("mouseup", t ? c : a),
                    i.addEventListener("touchend", t ? c : a),
                    this.prevElem = i),
                    n && (n.style.display = "block",
                    n.addEventListener("mousedown", t ? s : r),
                    n.addEventListener("touchstart", t ? s : r),
                    n.addEventListener("mouseup", t ? a : c),
                    n.addEventListener("touchend", t ? a : c),
                    this.nextElem = n),
                    (t ? n : i) && this.stopAtEdges && (0,
                    o.addClass)(t ? n : i, "not-active")
                }
            }
        }, {
            key: "addInnerBox",
            value: function() {
                this.innerBox = document.createElement("div"),
                this.innerBox.className = "cloudimage-inner-box",
                this.container.appendChild(this.innerBox)
            }
        }, {
            key: "addCanvas",
            value: function() {
                this.canvas = document.createElement("canvas"),
                this.canvas.style.width = "100%",
                this.canvas.style.fontSize = "0",
                this.ratio && (this.container.style.minHeight = this.container.offsetWidth * this.ratio + "px",
                this.canvas.height = parseInt(this.container.style.minHeight)),
                this.innerBox.appendChild(this.canvas)
            }
        }, {
            key: "attachEvents",
            value: function(e, t, i) {
                e && !this.disableDrag && (this.container.addEventListener("mousedown", this.mousedown.bind(this)),
                this.container.addEventListener("mouseup", this.mouseup.bind(this)),
                this.container.addEventListener("mousemove", this.mousemove.bind(this))),
                t && !this.disableDrag && (this.container.addEventListener("touchstart", this.touchstart.bind(this), {
                    passive: !0
                }),
                this.container.addEventListener("touchend", this.touchend.bind(this), {
                    passive: !0
                }),
                this.container.addEventListener("touchmove", this.touchmove.bind(this))),
                i ? (document.addEventListener("keydown", this.keydown.bind(this)),
                document.addEventListener("keyup", this.keyup.bind(this))) : document.addEventListener("keydown", this.keydownGeneral.bind(this))
            }
        }, {
            key: "applyStylesToContainer",
            value: function() {
                this.container.style.position = "relative",
                this.container.style.width = "100%",
                this.container.style.cursor = "wait",
                this.container.setAttribute("draggable", "false"),
                this.container.className = this.container.className + " initialized"
            }
        }, {
            key: "init",
            value: function(e) {
                var t = (0,
                o.get360ViewProps)(e)
                  , i = t.folder
                  , n = t.filename
                  , s = t.imageList
                  , r = t.indexZeroBase
                  , a = t.amount
                  , c = t.imageOffset
                  , l = t.draggable
                  , h = void 0 === l || l
                  , u = t.swipeable
                  , d = void 0 === u || u
                  , f = t.keys
                  , v = t.bottomCircle
                  , p = t.bottomCircleOffset
                  , m = t.boxShadow
                  , y = t.autoplay
                  , g = t.playOnce
                  , w = t.scrollZoom
                  , x = t.zoomSpeed
                  , b = t.maxZoomScale
                  , I = t.speed
                  , S = t.autoplayReverse
                  , C = t.disableDrag
                  , k = void 0 === C || C
                  , E = t.fullScreen
                  , O = t.magnifier
                  , z = t.ratio
                  , L = t.responsive
                  , M = t.ciToken
                  , j = t.ciSize
                  , A = t.ciOperation
                  , P = t.ciFilters
                  , F = t.lazyload
                  , R = t.lazySelector
                  , V = t.spinReverse
                  , T = t.dragSpeed
                  , W = t.stopAtEdges
                  , _ = t.controlReverse
                  , B = t.hide360Logo
                  , N = t.logoSrc
                  , H = t.magnifyIconSelector
                  , D = t.fullscreenIconSelector
                  , Z = {
                    ciSize: j,
                    ciToken: M,
                    ciOperation: A,
                    ciFilters: P
                };
                this.addInnerBox(),
                this.addLoader(),
                this.folder = i,
                this.filename = n,
                this.imageList = s,
                this.indexZeroBase = r,
                this.amount = a,
                this.imageOffset = c,
                this.bottomCircle = v,
                this.bottomCircleOffset = p,
                this.boxShadow = m,
                this.autoplay = y && !this.isMobile,
                this.playOnce = g,
                this.scrollZoom = w,
                this.zoomSpeed = x,
                this.maxZoomScale = b,
                this.speed = I,
                this.reversed = S,
                this.disableDrag = k,
                this.fullScreen = E,
                this.magnifier = !(this.isMobile || !O) && O,
                this.lazyload = F,
                this.ratio = z,
                this.spinReverse = V,
                this.controlReverse = _,
                this.dragSpeed = T,
                this.autoplaySpeed = 36 * this.speed / this.amount,
                this.stopAtEdges = W,
                this.hide360Logo = B,
                this.logoSrc = N,
                this.magnifyIconSelector = H,
                this.fullscreenIconSelector = D,
                this.applyStylesToContainer(),
                this.addCanvas();
                var X = this.getSrc(L, e, i, n, Z);
                this.preloadImages(a, X, F, R, e, L, Z),
                this.attachEvents(h, d, f)
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = function(e, t) {
        var i = s(e, t)
          , n = s(e, "data-" + t);
        return null !== i && "false" !== i || null !== n && "false" !== n
    }, s = function(e, t) {
        return e.getAttribute(t)
    }, r = (n = !0,
    function(e, t, i, o) {
        var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
          , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5
          , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .5
          , c = i / o
          , l = e / t
          , h = e * s
          , u = t * s;
        return (n ? c > l : c < l) ? u = h / c : h = u * c,
        {
            width: h,
            height: u,
            offsetX: (e - h) * r,
            offsetY: (t - u) * a
        }
    }
    );
    t.get360ViewProps = function(e) {
        return {
            folder: s(e, "folder") || s(e, "data-folder") || "/",
            filename: s(e, "filename") || s(e, "data-filename") || "image-{index}.jpg",
            imageList: s(e, "image-list") || s(e, "data-image-list") || null,
            indexZeroBase: parseInt(s(e, "index-zero-base") || s(e, "data-index-zero-base") || 0, 10),
            amount: parseInt(s(e, "amount") || s(e, "data-amount") || 36, 10),
            imageOffset: parseInt(s(e, "image-offset") || s(e, "data-image-offset")),
            speed: parseInt(s(e, "speed") || s(e, "data-speed") || 80, 10),
            dragSpeed: parseInt(s(e, "drag-speed") || s(e, "data-drag-speed") || 150, 10),
            keys: o(e, "keys"),
            boxShadow: s(e, "box-shadow") || s(e, "data-box-shadow"),
            autoplay: o(e, "autoplay"),
            playOnce: o(e, "playOnce"),
            scrollZoom: o(e, "scrollZoom"),
            zoomSpeed: parseInt(s(e, "zoom-speed") || s(e, "data-zoom-speed") || 1, 10),
            maxZoomScale: parseInt(s(e, "zoom-scale") || s(e, "data-zoom-scale") || 2, 22),
            autoplayReverse: o(e, "autoplay-reverse"),
            bottomCircle: o(e, "bottom-circle"),
            disableDrag: o(e, "disable-drag"),
            fullScreen: o(e, "full-screen"),
            magnifier: (null !== s(e, "magnifier") || null !== s(e, "data-magnifier")) && parseInt(s(e, "magnifier") || s(e, "data-magnifier"), 10),
            bottomCircleOffset: parseInt(s(e, "bottom-circle-offset") || s(e, "data-bottom-circle-offset") || 5, 10),
            ratio: parseFloat(s(e, "ratio") || s(e, "data-ratio") || 0) || !1,
            responsive: o(e, "responsive"),
            ciToken: s(e, "responsive") || s(e, "data-responsive") || "demo",
            ciSize: s(e, "size") || s(e, "data-size"),
            ciOperation: s(e, "operation") || s(e, "data-operation") || "width",
            ciFilters: s(e, "filters") || s(e, "data-filters") || "q35",
            lazyload: o(e, "lazyload"),
            lazySelector: s(e, "lazyload-selector") || s(e, "data-lazyload-selector") || "lazyload",
            spinReverse: o(e, "spin-reverse"),
            controlReverse: o(e, "control-reverse"),
            stopAtEdges: o(e, "stop-at-edges"),
            hide360Logo: o(e, "hide-360-logo"),
            logoSrc: s(e, "logo-src") || "https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg",
            magnifyIconSelector: s(e, "magnify-icon-selector") || s(e, "data-magnify-icon-selector") || "magnify-icon",
            fullscreenIconSelector: s(e, "fullscreen-icon-selector") || s(e, "data-fullscreen-icon-selector") || "fullscreen-icon"
        }
    }
    ,
    t.set360ViewIconStyles = function(e) {
        e.style.position = "absolute",
        e.style.top = "0",
        e.style.bottom = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "100px",
        e.style.height = "100px",
        e.style.margin = "auto",
        e.style.backgroundColor = "rgba(255,255,255,0.8)",
        e.style.borderRadius = "50%",
        e.style.boxShadow = "rgb(255, 255, 255, 0.5) 0px 0px 4px",
        e.style.transition = "0.5s all",
        e.style.color = "rgb(80,80,80)",
        e.style.textAlign = "center",
        e.style.lineHeight = "100px",
        e.style.zIndex = "2"
    }
    ,
    t.set360ViewCircleIconStyles = function(e, t) {
        e.src = "https://scaleflex.ultrafast.io/https://scaleflex.api.airstore.io/v1/get/_/2236d56f-914a-5a8b-a3ae-f7bde1c50000/360.svg",
        e.style.position = "absolute",
        e.style.top = "auto",
        e.style.bottom = t + "%",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "80%",
        e.style.height = "auto",
        e.style.margin = "auto",
        e.style.transition = "0.5s all",
        e.style.zIndex = "2"
    }
    ,
    t.setLoaderStyles = function(e) {
        e.className = "cloudimage-360-loader",
        e.style.position = "absolute",
        e.style.zIndex = "100",
        e.style.top = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "0%",
        e.style.height = "8px",
        e.style.background = "rgb(165,175,184)"
    }
    ,
    t.setBoxShadowStyles = function(e, t) {
        e.className = "cloudimage-360-box-shadow",
        e.style.position = "absolute",
        e.style.zIndex = "99",
        e.style.top = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.bottom = "0",
        e.style.boxShadow = t
    }
    ,
    t.setView360Icon = function(e, t) {
        e.style.background = "rgba(255,255,255,0.8) url('" + t + "') 50% 50% / contain no-repeat"
    }
    ,
    t.magnify = function(e, t, i, n) {
        var o, s;
        function r(t) {
            var r, a = void 0, c = void 0;
            t.preventDefault(),
            r = function(t) {
                var i, n = 0, o = 0;
                return t = t || window.event,
                i = e.getBoundingClientRect(),
                n = t.pageX - i.left,
                o = t.pageY - i.top,
                n -= window.pageXOffset,
                o -= window.pageYOffset,
                {
                    x: n,
                    y: o
                }
            }(t),
            a = r.x,
            c = r.y,
            a > e.offsetWidth - o / n && (a = e.offsetWidth - o / n),
            a < o / n && (a = o / n),
            c > e.offsetHeight - s / n && (c = e.offsetHeight - s / n),
            c < s / n && (c = s / n),
            i.style.left = a - o + "px",
            i.style.top = c - s + "px",
            i.style.backgroundPosition = "-" + (a * n - o + 3) + "px -" + (c * n - s + 3) + "px"
        }
        i.setAttribute("class", "img-magnifier-glass"),
        e.prepend(i),
        i.style.backgroundColor = "#fff",
        i.style.backgroundImage = "url('" + t + "')",
        i.style.backgroundRepeat = "no-repeat",
        i.style.backgroundSize = e.offsetWidth * n + "px " + e.offsetHeight * n + "px",
        i.style.position = "absolute",
        i.style.border = "3px solid #000",
        i.style.borderRadius = "50%",
        i.style.cursor = "wait",
        i.style.lineHeight = "200px",
        i.style.textAlign = "center",
        i.style.zIndex = "1000",
        i.style.width = "250px",
        i.style.height = "250px",
        i.style.top = "-75px",
        i.style.right = "-85px",
        o = i.offsetWidth / 2,
        s = i.offsetHeight / 2,
        i.addEventListener("mousemove", r),
        e.addEventListener("mousemove", r),
        i.addEventListener("touchmove", r),
        e.addEventListener("touchmove", r)
    }
    ,
    t.setMagnifyIconStyles = function(e, t, i) {
        e.style.position = "absolute",
        e.style.top = t ? "35px" : "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat",
        e.className = i
    }
    ,
    t.setFullScreenModalStyles = function(e) {
        e.style.position = "fixed",
        e.style.top = "0",
        e.style.bottom = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "100%",
        e.style.height = "100%",
        e.style.zIndex = "999",
        e.style.background = "#fff"
    }
    ,
    t.setFullScreenIconStyles = function(e, t) {
        e.style.position = "absolute",
        e.style.top = "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat",
        e.className = t
    }
    ,
    t.setCloseFullScreenViewStyles = function(e) {
        e.style.position = "absolute",
        e.style.top = "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat"
    }
    ,
    t.getResponsiveWidthOfContainer = function(e) {
        return (t = e) <= 25 ? "25" : t <= 50 ? "50" : (100 * Math.ceil(t / 100)).toString();
        var t
    }
    ,
    t.getSizeAccordingToPixelRatio = function(e) {
        var t = e.toString().split("x")
          , i = [];
        return [].forEach.call(t, (function(e) {
            i.push(e * Math.round(window.devicePixelRatio || 1))
        }
        )),
        i.join("x")
    }
    ,
    t.contain = r,
    t.addClass = function(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }
    ,
    t.removeClass = function(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
    ,
    t.pad = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (e += "").length >= t ? e : new Array(t - e.length + 1).join("0") + e
    }
}
]);
