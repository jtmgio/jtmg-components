Array.prototype.remove || (Array.prototype.remove = function () {
        for (var e, t, n = arguments, i = n.length; i && this.length;)
            for (e = n[--i]; - 1 !== (t = this.indexOf(e));) this.splice(t, 1);
        return this
    }), Array.prototype.sum || (Array.prototype.sum = function () { var e = 0; return this.map(function (t) { e += t }), e }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
        var t = this.length,
            n = Number(arguments[1]);
        for (isNaN(n) ? n = t - 1 : (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n ? n += t : n >= t && (n = t - 1)); n > -1; n--)
            if (n in this && this[n] === e) return n;
        return -1
    }), Array.prototype.unique || (Array.prototype.unique = function () { for (var e = [], t = 0; t < this.length; t++) - 1 == e.indexOf(this[t]) && e.push(this[t]); return e }), define("prototype/array.prototype", function () {}),
    function (e, t) {
        function n(e) {
            var t = e.length,
                n = ct.type(e);
            return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) { var t = Ct[e] = {}; return ct.each(e.match(ut) || [], function (e, n) { t[n] = !0 }), t }

        function r(e, n, i, r) {
            if (ct.acceptData(e)) {
                var a, s, o = ct.expando,
                    c = "string" == typeof n,
                    l = e.nodeType,
                    u = l ? ct.cache : e,
                    d = l ? e[o] : e[o] && o;
                if (d && u[d] && (r || u[d].data) || !c || i !== t) return d || (l ? e[o] = d = Q.pop() || ct.guid++ : d = o), u[d] || (u[d] = {}, l || (u[d].toJSON = ct.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[d] = ct.extend(u[d], n) : u[d].data = ct.extend(u[d].data, n)), a = u[d], r || (a.data || (a.data = {}), a = a.data), i !== t && (a[ct.camelCase(n)] = i), c ? (s = a[n], null == s && (s = a[ct.camelCase(n)])) : s = a, s
            }
        }

        function a(e, t, n) {
            if (ct.acceptData(e)) {
                var i, r, a, s = e.nodeType,
                    c = s ? ct.cache : e,
                    l = s ? e[ct.expando] : ct.expando;
                if (c[l]) { if (t && (a = n ? c[l] : c[l].data)) { ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in a ? t = [t] : (t = ct.camelCase(t), t = t in a ? [t] : t.split(" ")); for (i = 0, r = t.length; r > i; i++) delete a[t[i]]; if (!(n ? o : ct.isEmptyObject)(a)) return }(n || (delete c[l].data, o(c[l]))) && (s ? ct.cleanData([e], !0) : ct.support.deleteExpando || c != c.window ? delete c[l] : c[l] = null) }
            }
        }

        function s(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(Mt, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try { i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : xt.test(i) ? ct.parseJSON(i) : i } catch (a) {}
                    ct.data(e, n, i)
                } else i = t
            }
            return i
        }

        function o(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c() { return !0 }

        function l() { return !1 }

        function u(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

        function d(e, t, n) {
            if (t = t || 0, ct.isFunction(t)) return ct.grep(e, function (e, i) { var r = !!t.call(e, i, e); return r === n });
            if (t.nodeType) return ct.grep(e, function (e) { return e === t === n });
            if ("string" == typeof t) {
                var i = ct.grep(e, function (e) { return 1 === e.nodeType });
                if (Ut.test(t)) return ct.filter(t, i, !n);
                t = ct.filter(t, i)
            }
            return ct.grep(e, function (e) { return ct.inArray(e, t) >= 0 === n })
        }

        function f(e) {
            var t = Vt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

        function p(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e }

        function m(e) { var t = an.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function g(e, t) { for (var n, i = 0; null != (n = e[i]); i++) ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval")) }

        function v(e, t) {
            if (1 === t.nodeType && ct.hasData(e)) {
                var n, i, r, a = ct._data(e),
                    s = ct._data(t, a),
                    o = a.events;
                if (o) {
                    delete s.handle, s.events = {};
                    for (n in o)
                        for (i = 0, r = o[n].length; r > i; i++) ct.event.add(t, n, o[n][i])
                }
                s.data && (s.data = ct.extend({}, s.data))
            }
        }

        function b(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                    r = ct._data(t);
                    for (i in r.events) ct.removeEvent(t, i, r.handle);
                    t.removeAttribute(ct.expando)
                }
                "script" === n && t.text !== e.text ? (p(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function y(e, n) {
            var i, r, a = 0,
                s = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
            if (!s)
                for (s = [], i = e.childNodes || e; null != (r = i[a]); a++) !n || ct.nodeName(r, n) ? s.push(r) : ct.merge(s, y(r, n));
            return n === t || n && ct.nodeName(e, n) ? ct.merge([e], s) : s
        }

        function A(e) { tn.test(e.type) && (e.defaultChecked = e.checked) }

        function w(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Mn.length; r--;)
                if (t = Mn[r] + n, t in e) return t;
            return i
        }

        function T(e, t) { return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e) }

        function C(e, t) { for (var n, i, r, a = [], s = 0, o = e.length; o > s; s++) i = e[s], i.style && (a[s] = ct._data(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (a[s] = ct._data(i, "olddisplay", S(i.nodeName)))) : a[s] || (r = T(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display")))); for (s = 0; o > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none")); return e }

        function x(e, t, n) { var i = bn.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function M(e, t, n, i, r) { for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === n && (s += ct.css(e, n + xn[a], !0, r)), i ? ("content" === n && (s -= ct.css(e, "padding" + xn[a], !0, r)), "margin" !== n && (s -= ct.css(e, "border" + xn[a] + "Width", !0, r))) : (s += ct.css(e, "padding" + xn[a], !0, r), "padding" !== n && (s += ct.css(e, "border" + xn[a] + "Width", !0, r))); return s }

        function _(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = dn(e),
                s = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, a);
            if (0 >= r || null == r) {
                if (r = fn(e, t, a), (0 > r || null == r) && (r = e.style[t]), yn.test(r)) return r;
                i = s && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + M(e, t, n || (s ? "border" : "content"), i, a) + "px"
        }

        function S(e) {
            var t = G,
                n = wn[e];
            return n || (n = k(e, t), "none" !== n && n || (un = (un || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = k(e, t), un.detach()), wn[e] = n), n
        }

        function k(e, t) {
            var n = ct(t.createElement(e)).appendTo(t.body),
                i = ct.css(n[0], "display");
            return n.remove(), i
        }

        function E(e, t, n, i) {
            var r;
            if (ct.isArray(t)) ct.each(t, function (t, r) { n || Sn.test(e) ? i(e, r) : E(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== ct.type(t)) i(e, t);
            else
                for (r in t) E(e + "[" + r + "]", t[r], n, i)
        }

        function D(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(ut) || [];
                if (ct.isFunction(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function N(e, n, i, r) {
            function a(c) { var l; return s[c] = !0, ct.each(e[c] || [], function (e, c) { var u = c(n, i, r); return "string" != typeof u || o || s[u] ? o ? !(l = u) : t : (n.dataTypes.unshift(u), a(u), !1) }), l }
            var s = {},
                o = e === Wn;
            return a(n.dataTypes[0]) || !s["*"] && a("*")
        }

        function P(e, n) { var i, r, a = ct.ajaxSettings.flatOptions || {}; for (r in n) n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]); return i && ct.extend(!0, e, i), e }

        function j(e, n, i) {
            var r, a, s, o, c = e.contents,
                l = e.dataTypes,
                u = e.responseFields;
            for (o in u) o in i && (n[u[o]] = i[o]);
            for (;
                "*" === l[0];) l.shift(), a === t && (a = e.mimeType || n.getResponseHeader("Content-Type"));
            if (a)
                for (o in c)
                    if (c[o] && c[o].test(a)) { l.unshift(o); break }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || e.converters[o + " " + l[0]]) { s = o; break }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : t
        }

        function I(e, t) {
            var n, i, r, a, s = {},
                o = 0,
                c = e.dataTypes.slice(),
                l = c[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1])
                for (r in e.converters) s[r.toLowerCase()] = e.converters[r];
            for (; i = c[++o];)
                if ("*" !== i) {
                    if ("*" !== l && l !== i) {
                        if (r = s[l + " " + i] || s["* " + i], !r)
                            for (n in s)
                                if (a = n.split(" "), a[1] === i && (r = s[l + " " + a[0]] || s["* " + a[0]])) { r === !0 ? r = s[n] : s[n] !== !0 && (i = a[0], c.splice(o--, 0, i)); break }
                        if (r !== !0)
                            if (r && e["throws"]) t = r(t);
                            else try { t = r(t) } catch (u) { return { state: "parsererror", error: r ? u : "No conversion from " + l + " to " + i } }
                    }
                    l = i
                }
            return { state: "success", data: t }
        }

        function O() { try { return new e.XMLHttpRequest } catch (t) {} }

        function z() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function B() { return setTimeout(function () { Qn = t }), Qn = ct.now() }

        function L(e, t) {
            ct.each(t, function (t, n) {
                for (var i = (ai[t] || []).concat(ai["*"]), r = 0, a = i.length; a > r; r++)
                    if (i[r].call(e, t, n)) return
            })
        }

        function q(e, t, n) {
            var i, r, a = 0,
                s = ri.length,
                o = ct.Deferred().always(function () { delete c.elem }),
                c = function () { if (r) return !1; for (var t = Qn || B(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, a = 1 - i, s = 0, c = l.tweens.length; c > s; s++) l.tweens[s].run(a); return o.notifyWith(e, [l, a, n]), 1 > a && c ? n : (o.resolveWith(e, [l]), !1) },
                l = o.promise({
                    elem: e,
                    props: ct.extend({}, t),
                    opts: ct.extend(!0, { specialEasing: {} }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qn || B(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) { var i = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i },
                    stop: function (t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) l.tweens[n].run(1);
                        return t ? o.resolveWith(e, [l, t]) : o.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (R(u, l.opts.specialEasing); s > a; a++)
                if (i = ri[a].call(l, e, u, l.opts)) return i;
            return L(l, u), ct.isFunction(l.opts.start) && l.opts.start.call(e, l), ct.fx.timer(ct.extend(c, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function R(e, t) {
            var n, i, r, a, s;
            for (r in e)
                if (i = ct.camelCase(r), a = t[i], n = e[r], ct.isArray(n) && (a = n[1], n = e[r] = n[0]), r !== i && (e[i] = n, delete e[r]), s = ct.cssHooks[i], s && "expand" in s) { n = s.expand(n), delete e[i]; for (r in n) r in e || (e[r] = n[r], t[r] = a) } else t[i] = a
        }

        function F(e, t, n) {
            var i, r, a, s, o, c, l, u, d, f = this,
                h = e.style,
                p = {},
                m = [],
                g = e.nodeType && T(e);
            n.queue || (u = ct._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function () { u.unqueued || d() }), u.unqueued++, f.always(function () { f.always(function () { u.unqueued--, ct.queue(e, "fx").length || u.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ct.support.shrinkWrapBlocks || f.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] }));
            for (r in t)
                if (s = t[r], ti.exec(s)) {
                    if (delete t[r], c = c || "toggle" === s, s === (g ? "hide" : "show")) continue;
                    m.push(r)
                }
            if (a = m.length) {
                o = ct._data(e, "fxshow") || ct._data(e, "fxshow", {}), "hidden" in o && (g = o.hidden), c && (o.hidden = !g), g ? ct(e).show() : f.done(function () { ct(e).hide() }), f.done(function () {
                    var t;
                    ct._removeData(e, "fxshow");
                    for (t in p) ct.style(e, t, p[t])
                });
                for (r = 0; a > r; r++) i = m[r], l = f.createTween(i, g ? o[i] : 0), p[i] = o[i] || ct.style(e, i), i in o || (o[i] = l.start, g && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t, n, i, r) { return new $.prototype.init(e, t, n, i, r) }

        function U(e, t) {
            var n, i = { height: e },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = xn[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function W(e) { return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
        var H, V, Y = typeof t,
            G = e.document,
            X = e.location,
            K = e.jQuery,
            J = e.$,
            Z = {},
            Q = [],
            et = "1.9.1",
            tt = Q.concat,
            nt = Q.push,
            it = Q.slice,
            rt = Q.indexOf,
            at = Z.toString,
            st = Z.hasOwnProperty,
            ot = et.trim,
            ct = function (e, t) { return new ct.fn.init(e, t, V) },
            lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ut = /\S+/g,
            dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pt = /^[\],:{}\s]*$/,
            mt = /(?:^|:|,)(?:\s*\[)+/g,
            gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            bt = /^-ms-/,
            yt = /-([\da-z])/gi,
            At = function (e, t) { return t.toUpperCase() },
            wt = function (e) {
                (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Tt(), ct.ready())
            },
            Tt = function () { G.addEventListener ? (G.removeEventListener("DOjtmgioontentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (G.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt)) };
        ct.fn = ct.prototype = {
            jquery: et,
            constructor: ct,
            init: function (e, n, i) {
                var r, a;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                    if (r[1]) {
                        if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ht.test(r[1]) && ct.isPlainObject(n))
                            for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                        return this
                    }
                    if (a = G.getElementById(r[2]), a && a.parentNode) {
                        if (a.id !== r[2]) return i.find(e);
                        this.length = 1, this[0] = a
                    }
                    return this.context = G, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function () { return this.length },
            toArray: function () { return it.call(this) },
            get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
            pushStack: function (e) { var t = ct.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
            each: function (e, t) { return ct.each(this, e, t) },
            ready: function (e) { return ct.ready.promise().done(e), this },
            slice: function () { return this.pushStack(it.apply(this, arguments)) },
            first: function () { return this.eq(0) },
            last: function () { return this.eq(-1) },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function (e) { return this.pushStack(ct.map(this, function (t, n) { return e.call(t, n, t) })) },
            end: function () { return this.prevObject || this.constructor(null) },
            push: nt,
            sort: [].sort,
            splice: [].splice
        }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
            var e, n, i, r, a, s, o = arguments[0] || {},
                c = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, c = 2), "object" == typeof o || ct.isFunction(o) || (o = {}), l === c && (o = this, --c); l > c; c++)
                if (null != (a = arguments[c]))
                    for (r in a) e = o[r], i = a[r], o !== i && (u && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = e && ct.isArray(e) ? e : []) : s = e && ct.isPlainObject(e) ? e : {}, o[r] = ct.extend(u, s, i)) : i !== t && (o[r] = i));
            return o
        }, ct.extend({
            noConflict: function (t) { return e.$ === ct && (e.$ = J), t && e.jQuery === ct && (e.jQuery = K), ct },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) { e ? ct.readyWait++ : ct.ready(!0) },
            ready: function (e) {
                if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                    if (!G.body) return setTimeout(ct.ready);
                    ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (H.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) { return "function" === ct.type(e) },
            isArray: Array.isArray || function (e) { return "array" === ct.type(e) },
            isWindow: function (e) { return null != e && e == e.window },
            isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) },
            type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[at.call(e)] || "object" : typeof e },
            isPlainObject: function (e) { if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1; try { if (e.constructor && !st.call(e, "constructor") && !st.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var i; for (i in e); return i === t || st.call(e, i) },
            isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 },
            error: function (e) { throw Error(e) },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || G;
                var i = ht.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], i.childNodes))
            },
            parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && pt.test(n.replace(gt, "@").replace(vt, "]").replace(mt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t) },
            parseXML: function (n) { var i, r; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n)) } catch (a) { i = t } return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i },
            noop: function () {},
            globalEval: function (t) { t && ct.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) },
            camelCase: function (e) { return e.replace(bt, "ms-").replace(yt, At) },
            nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
            each: function (e, t, i) {
                var r, a = 0,
                    s = e.length,
                    o = n(e);
                if (i) {
                    if (o)
                        for (; s > a && (r = t.apply(e[a], i), r !== !1); a++);
                    else
                        for (a in e)
                            if (r = t.apply(e[a], i), r === !1) break
                } else if (o)
                    for (; s > a && (r = t.call(e[a], a, e[a]), r !== !1); a++);
                else
                    for (a in e)
                        if (r = t.call(e[a], a, e[a]), r === !1) break; return e
            },
            trim: ot && !ot.call("﻿ ") ? function (e) { return null == e ? "" : ot.call(e) } : function (e) { return null == e ? "" : (e + "").replace(dt, "") },
            makeArray: function (e, t) { var i = t || []; return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : nt.call(i, e)), i },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (rt) return rt.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, n) {
                var i = n.length,
                    r = e.length,
                    a = 0;
                if ("number" == typeof i)
                    for (; i > a; a++) e[r++] = n[a];
                else
                    for (; n[a] !== t;) e[r++] = n[a++];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                var i, r = [],
                    a = 0,
                    s = e.length;
                for (n = !!n; s > a; a++) i = !!t(e[a], a), n !== i && r.push(e[a]);
                return r
            },
            map: function (e, t, i) {
                var r, a = 0,
                    s = e.length,
                    o = n(e),
                    c = [];
                if (o)
                    for (; s > a; a++) r = t(e[a], a, i), null != r && (c[c.length] = r);
                else
                    for (a in e) r = t(e[a], a, i), null != r && (c[c.length] = r);
                return tt.apply([], c)
            },
            guid: 1,
            proxy: function (e, n) { var i, r, a; return "string" == typeof n && (a = e[n], n = e, e = a), ct.isFunction(e) ? (i = it.call(arguments, 2), r = function () { return e.apply(n || this, i.concat(it.call(arguments))) }, r.guid = e.guid = e.guid || ct.guid++, r) : t },
            access: function (e, n, i, r, a, s, o) {
                var c = 0,
                    l = e.length,
                    u = null == i;
                if ("object" === ct.type(i)) { a = !0; for (c in i) ct.access(e, n, c, i[c], !0, s, o) } else if (r !== t && (a = !0, ct.isFunction(r) || (o = !0), u && (o ? (n.call(e, r), n = null) : (u = n, n = function (e, t, n) { return u.call(ct(e), n) })), n))
                    for (; l > c; c++) n(e[c], i, o ? r : r.call(e[c], c, n(e[c], i)));
                return a ? e : u ? n.call(e) : l ? n(e[0], i) : s
            },
            now: function () { return (new Date).getTime() }
        }), ct.ready.promise = function (t) {
            if (!H)
                if (H = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
                else if (G.addEventListener) G.addEventListener("DOjtmgioontentLoaded", wt, !1), e.addEventListener("load", wt, !1);
            else {
                G.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
                var n = !1;
                try { n = null == e.frameElement && G.documentElement } catch (i) {}
                n && n.doScroll && function r() {
                    if (!ct.isReady) {
                        try { n.doScroll("left") } catch (e) { return setTimeout(r, 50) }
                        Tt(), ct.ready()
                    }
                }()
            }
            return H.promise(t)
        }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { Z["[object " + t + "]"] = t.toLowerCase() }), V = ct(G);
        var Ct = {};
        ct.Callbacks = function (e) {
            e = "string" == typeof e ? Ct[e] || i(e) : ct.extend({}, e);
            var n, r, a, s, o, c, l = [],
                u = !e.once && [],
                d = function (t) {
                    for (r = e.memory && t, a = !0, o = c || 0, c = 0, s = l.length, n = !0; l && s > o; o++)
                        if (l[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break }
                    n = !1, l && (u ? u.length && d(u.shift()) : r ? l = [] : f.disable())
                },
                f = {
                    add: function () { if (l) { var t = l.length;! function i(t) { ct.each(t, function (t, n) { var r = ct.type(n); "function" === r ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) }(arguments), n ? s = l.length : r && (c = t, d(r)) } return this },
                    remove: function () {
                        return l && ct.each(arguments, function (e, t) {
                            for (var i;
                                (i = ct.inArray(t, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, o >= i && o--)
                        }), this
                    },
                    has: function (e) { return e ? ct.inArray(e, l) > -1 : !(!l || !l.length) },
                    empty: function () { return l = [], this },
                    disable: function () { return l = u = r = t, this },
                    disabled: function () { return !l },
                    lock: function () { return u = t, r || f.disable(), this },
                    locked: function () { return !u },
                    fireWith: function (e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !l || a && !u || (n ? u.push(t) : d(t)), this },
                    fire: function () { return f.fireWith(this, arguments), this },
                    fired: function () { return !!a }
                };
            return f
        }, ct.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function () { return n },
                        always: function () { return r.done(arguments).fail(arguments), this },
                        then: function () {
                            var e = arguments;
                            return ct.Deferred(function (n) {
                                ct.each(t, function (t, a) {
                                    var s = a[0],
                                        o = ct.isFunction(e[t]) && e[t];
                                    r[a[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) { return null != e ? ct.extend(e, i) : i }
                    },
                    r = {};
                return i.pipe = i.then, ct.each(t, function (e, a) {
                    var s = a[2],
                        o = a[3];
                    i[a[1]] = s.add, o && s.add(function () { n = o }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () { return r[a[0] + "With"](this === r ? i : this, arguments), this }, r[a[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function (e) {
                var t, n, i, r = 0,
                    a = it.call(arguments),
                    s = a.length,
                    o = 1 !== s || e && ct.isFunction(e.promise) ? s : 0,
                    c = 1 === o ? e : ct.Deferred(),
                    l = function (e, n, i) { return function (r) { n[e] = this, i[e] = arguments.length > 1 ? it.call(arguments) : r, i === t ? c.notifyWith(n, i) : --o || c.resolveWith(n, i) } };
                if (s > 1)
                    for (t = Array(s), n = Array(s), i = Array(s); s > r; r++) a[r] && ct.isFunction(a[r].promise) ? a[r].promise().done(l(r, i, a)).fail(c.reject).progress(l(r, n, t)) : --o;
                return o || c.resolveWith(i, a), c.promise()
            }
        }), ct.support = function () {
            var t, n, i, r, a, s, o, c, l, u, d = G.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
            a = G.createElement("select"), o = a.appendChild(G.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: "/a" === i.getAttribute("href"), opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: !!r.value, optSelected: o.selected, enctype: !!G.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === G.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !o.disabled;
            try { delete d.test } catch (f) { t.deleteExpando = !1 }
            r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(r), t.appendChecked = r.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click());
            for (u in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + u, "t"), t[u + "Bubbles"] = c in e || d.attributes[c].expando === !1;
            return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, ct(function () {
                var n, i, r, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = G.getElementsByTagName("body")[0];
                s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, i = d.appendChild(G.createElement("div")), i.style.cssText = d.style.cssText = a, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Y && (d.innerHTML = "", d.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = r = i = null)
            }), n = a = s = o = i = r = null, t
        }();
        var xt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Mt = /([A-Z])/g;
        ct.extend({ cache: {}, expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (e) { return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !o(e) }, data: function (e, t, n) { return r(e, t, n) }, removeData: function (e, t) { return a(e, t) }, _data: function (e, t, n) { return r(e, t, n, !0) }, _removeData: function (e, t) { return a(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), ct.fn.extend({
            data: function (e, n) {
                var i, r, a = this[0],
                    o = 0,
                    c = null;
                if (e === t) {
                    if (this.length && (c = ct.data(a), 1 === a.nodeType && !ct._data(a, "parsedAttrs"))) {
                        for (i = a.attributes; i.length > o; o++) r = i[o].name, r.indexOf("data-") || (r = ct.camelCase(r.slice(5)), s(a, r, c[r]));
                        ct._data(a, "parsedAttrs", !0)
                    }
                    return c
                }
                return "object" == typeof e ? this.each(function () { ct.data(this, e) }) : ct.access(this, function (n) { return n === t ? a ? s(a, e, ct.data(a, e)) : null : (this.each(function () { ct.data(this, e, n) }), t) }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function (e) { return this.each(function () { ct.removeData(this, e) }) }
        }), ct.extend({
            queue: function (e, n, i) { var r; return e ? (n = (n || "fx") + "queue", r = ct._data(e, n), i && (!r || ct.isArray(i) ? r = ct._data(e, n, ct.makeArray(i)) : r.push(i)), r || []) : t },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ct.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = ct._queueHooks(e, t),
                    s = function () { ct.dequeue(e, t) };
                "inprogress" === r && (r = n.shift(), i--), a.cur = r, r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function (e, t) { var n = t + "queueHooks"; return ct._data(e, n) || ct._data(e, n, { empty: ct.Callbacks("once memory").add(function () { ct._removeData(e, t + "queue"), ct._removeData(e, n) }) }) }
        }), ct.fn.extend({
            queue: function (e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                    var t = ct.queue(this, e, n);
                    ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
                })
            },
            dequeue: function (e) { return this.each(function () { ct.dequeue(this, e) }) },
            delay: function (e, t) {
                return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () { clearTimeout(i) }
                })
            },
            clearQueue: function (e) { return this.queue(e || "fx", []) },
            promise: function (e, n) {
                var i, r = 1,
                    a = ct.Deferred(),
                    s = this,
                    o = this.length,
                    c = function () {--r || a.resolveWith(s, [s]) };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; o--;) i = ct._data(s[o], e + "queueHooks"), i && i.empty && (r++, i.empty.add(c));
                return c(), a.promise(n)
            }
        });
        var _t, St, kt = /[\t\r\n]/g,
            Et = /\r/g,
            Dt = /^(?:input|select|textarea|button|object)$/i,
            Nt = /^(?:a|area)$/i,
            Pt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            jt = /^(?:checked|selected)$/i,
            It = ct.support.getSetAttribute,
            Ot = ct.support.input;
        ct.fn.extend({
            attr: function (e, t) { return ct.access(this, ct.attr, e, t, arguments.length > 1) },
            removeAttr: function (e) { return this.each(function () { ct.removeAttr(this, e) }) },
            prop: function (e, t) { return ct.access(this, ct.prop, e, t, arguments.length > 1) },
            removeProp: function (e) { return e = ct.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) {} }) },
            addClass: function (e) {
                var t, n, i, r, a, s = 0,
                    o = this.length,
                    c = "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function (t) { ct(this).addClass(e.call(this, t, this.className)) });
                if (c)
                    for (t = (e || "").match(ut) || []; o > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : " ")) {
                            for (a = 0; r = t[a++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                            n.className = ct.trim(i)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, r, a, s = 0,
                    o = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function (t) { ct(this).removeClass(e.call(this, t, this.className)) });
                if (c)
                    for (t = (e || "").match(ut) || []; o > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : "")) {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = e ? ct.trim(i) : ""
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return this.each(ct.isFunction(e) ? function (n) { ct(this).toggleClass(e.call(this, n, this.className, t), t) } : function () {
                    if ("string" === n)
                        for (var r, a = 0, s = ct(this), o = t, c = e.match(ut) || []; r = c[a++];) o = i ? o : !s.hasClass(r), s[o ? "addClass" : "removeClass"](r);
                    else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(kt, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var n, i, r, a = this[0];
                return arguments.length ? (r = ct.isFunction(e), this.each(function (n) {
                    var a, s = ct(this);
                    1 === this.nodeType && (a = r ? e.call(this, n, s.val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ct.isArray(a) && (a = ct.map(a, function (e) { return null == e ? "" : e + "" })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, a, "value") !== t || (this.value = a))
                })) : a ? (i = ct.valHooks[a.type] || ct.valHooks[a.nodeName.toLowerCase()], i && "get" in i && (n = i.get(a, "value")) !== t ? n : (n = a.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)) : void 0
            }
        }), ct.extend({
            valHooks: {
                option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, s = a ? null : [], o = a ? r + 1 : i.length, c = 0 > r ? o : a ? r : 0; o > c; c++)
                            if (n = i[c], !(!n.selected && c !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ct(n).val(), a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) { var n = ct.makeArray(t); return ct(e).find("option").each(function () { this.selected = ct.inArray(ct(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n }
                }
            },
            attr: function (e, n, i) { var r, a, s, o = e.nodeType; return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Y ? ct.prop(e, n, i) : (a = 1 !== o || !ct.isXMLDoc(e), a && (n = n.toLowerCase(), r = ct.attrHooks[n] || (Pt.test(n) ? St : _t)), i === t ? r && a && "get" in r && null !== (s = r.get(e, n)) ? s : (typeof e.getAttribute !== Y && (s = e.getAttribute(n)), null == s ? t : s) : null !== i ? r && a && "set" in r && (s = r.set(e, i, n)) !== t ? s : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), t)) : void 0 },
            removeAttr: function (e, t) {
                var n, i, r = 0,
                    a = t && t.match(ut);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = ct.propFix[n] || n, Pt.test(n) ? !It && jt.test(n) ? e[ct.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(It ? n : i)
            },
            attrHooks: { type: { set: function (e, t) { if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
            propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            prop: function (e, n, i) {
                var r, a, s, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !ct.isXMLDoc(e), s && (n = ct.propFix[n] || n, a = ct.propHooks[n]), i !== t ? a && "set" in a && (r = a.set(e, i, n)) !== t ? r : e[n] = i : a && "get" in a && null !== (r = a.get(e, n)) ? r : e[n]) : void 0
            },
            propHooks: { tabIndex: { get: function (e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : Dt.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : t } } }
        }), St = {
            get: function (e, n) {
                var i = ct.prop(e, n),
                    r = "boolean" == typeof i && e.getAttribute(n),
                    a = "boolean" == typeof i ? Ot && It ? null != r : jt.test(n) ? e[ct.camelCase("default-" + n)] : !!r : e.getAttributeNode(n);
                return a && a.value !== !1 ? n.toLowerCase() : t
            },
            set: function (e, t, n) { return t === !1 ? ct.removeAttr(e, n) : Ot && It || !jt.test(n) ? e.setAttribute(!It && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n }
        }, Ot && It || (ct.attrHooks.value = { get: function (e, n) { var i = e.getAttributeNode(n); return ct.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t }, set: function (e, n, i) { return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : _t && _t.set(e, n, i) } }), It || (_t = ct.valHooks.button = { get: function (e, n) { var i = e.getAttributeNode(n); return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t }, set: function (e, n, i) { var r = e.getAttributeNode(i); return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t } }, ct.attrHooks.contenteditable = { get: _t.get, set: function (e, t, n) { _t.set(e, "" === t ? !1 : t, n) } }, ct.each(["width", "height"], function (e, n) { ct.attrHooks[n] = ct.extend(ct.attrHooks[n], { set: function (e, i) { return "" === i ? (e.setAttribute(n, "auto"), i) : t } }) })), ct.support.hrefNormalized || (ct.each(["href", "src", "width", "height"], function (e, n) { ct.attrHooks[n] = ct.extend(ct.attrHooks[n], { get: function (e) { var i = e.getAttribute(n, 2); return null == i ? t : i } }) }), ct.each(["href", "src"], function (e, t) { ct.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), ct.support.style || (ct.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), ct.support.optSelected || (ct.propHooks.selected = ct.extend(ct.propHooks.selected, { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.support.checkOn || ct.each(["radio", "checkbox"], function () { ct.valHooks[this] = { get: function (e) { return null === e.getAttribute("value") ? "on" : e.value } } }), ct.each(["radio", "checkbox"], function () { ct.valHooks[this] = ct.extend(ct.valHooks[this], { set: function (e, n) { return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t } }) });
        var zt = /^(?:input|select|textarea)$/i,
            Bt = /^key/,
            Lt = /^(?:mouse|contextmenu)|click/,
            qt = /^(?:focusinfocus|focusoutblur)$/,
            Rt = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
                global: {},
                add: function (e, n, i, r, a) {
                    var s, o, c, l, u, d, f, h, p, m, g, v = ct._data(e);
                    if (v) {
                        for (i.handler && (l = i, i = l.handler, a = l.selector), i.guid || (i.guid = ct.guid++), (o = v.events) || (o = v.events = {}), (d = v.handle) || (d = v.handle = function (e) { return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments) }, d.elem = e), n = (n || "").match(ut) || [""], c = n.length; c--;) s = Rt.exec(n[c]) || [], p = g = s[1], m = (s[2] || "").split(".").sort(), u = ct.event.special[p] || {}, p = (a ? u.delegateType : u.bindType) || p, u = ct.event.special[p] || {}, f = ct.extend({ type: p, origType: g, data: r, handler: i, guid: i.guid, selector: a, needsContext: a && ct.expr.match.needsContext.test(a), namespace: m.join(".") }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, u.setup && u.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), a ? h.splice(h.delegateCount++, 0, f) : h.push(f), ct.event.global[p] = !0;
                        e = null
                    }
                },
                remove: function (e, t, n, i, r) {
                    var a, s, o, c, l, u, d, f, h, p, m, g = ct.hasData(e) && ct._data(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(ut) || [""], l = t.length; l--;)
                            if (o = Rt.exec(t[l]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h) {
                                for (d = ct.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = u[h] || [], o = o[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = a = f.length; a--;) s = f[a], !r && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(a, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(e, s));
                                c && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ct.removeEvent(e, h, g.handle), delete u[h])
                            } else
                                for (h in u) ct.event.remove(e, h + t[l], n, i, !0);
                        ct.isEmptyObject(u) && (delete g.handle, ct._removeData(e, "events"))
                    }
                },
                trigger: function (n, i, r, a) {
                    var s, o, c, l, u, d, f, h = [r || G],
                        p = st.call(n, "type") ? n.type : n,
                        m = st.call(n, "namespace") ? n.namespace.split(".") : [];
                    if (c = d = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !qt.test(p + ct.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), o = 0 > p.indexOf(":") && "on" + p, n = n[ct.expando] ? n : new ct.Event(p, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), u = ct.event.special[p] || {}, a || !u.trigger || u.trigger.apply(r, i) !== !1)) {
                        if (!a && !u.noBubble && !ct.isWindow(r)) {
                            for (l = u.delegateType || p, qt.test(l + p) || (c = c.parentNode); c; c = c.parentNode) h.push(c), d = c;
                            d === (r.ownerDocument || G) && h.push(d.defaultView || d.parentWindow || e)
                        }
                        for (f = 0;
                            (c = h[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? l : u.bindType || p, s = (ct._data(c, "events") || {})[n.type] && ct._data(c, "handle"), s && s.apply(c, i), s = o && c[o], s && ct.acceptData(c) && s.apply && s.apply(c, i) === !1 && n.preventDefault();
                        if (n.type = p, !(a || n.isDefaultPrevented() || u._default && u._default.apply(r.ownerDocument, i) !== !1 || "click" === p && ct.nodeName(r, "a") || !ct.acceptData(r) || !o || !r[p] || ct.isWindow(r))) {
                            d = r[o], d && (r[o] = null), ct.event.triggered = p;
                            try { r[p]() } catch (g) {}
                            ct.event.triggered = t, d && (r[o] = d)
                        }
                        return n.result
                    }
                },
                dispatch: function (e) {
                    e = ct.event.fix(e);
                    var n, i, r, a, s, o = [],
                        c = it.call(arguments),
                        l = (ct._data(this, "events") || {})[e.type] || [],
                        u = ct.event.special[e.type] || {};
                    if (c[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (o = ct.event.handlers.call(this, e, l), n = 0;
                            (a = o[n++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = a.elem, s = 0;
                                (r = a.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, c), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, n) {
                    var i, r, a, s, o = [],
                        c = n.delegateCount,
                        l = e.target;
                    if (c && l.nodeType && (!e.button || "click" !== e.type))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (a = [], s = 0; c > s; s++) r = n[s], i = r.selector + " ", a[i] === t && (a[i] = r.needsContext ? ct(i, this).index(l) >= 0 : ct.find(i, this, null, [l]).length), a[i] && a.push(r);
                                a.length && o.push({ elem: l, handlers: a })
                            }
                    return n.length > c && o.push({ elem: this, handlers: n.slice(c) }), o
                },
                fix: function (e) {
                    if (e[ct.expando]) return e;
                    var t, n, i, r = e.type,
                        a = e,
                        s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks : Bt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ct.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                    return e.target || (e.target = a.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, n) {
                        var i, r, a, s = n.button,
                            o = n.fromElement;
                        return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, a = r.documentElement, i = r.body, e.pageX = n.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? n.toElement : o), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                    }
                },
                special: { load: { noBubble: !0 }, click: { trigger: function () { return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t } }, focus: { trigger: function () { if (this !== G.activeElement && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function () { return this === G.activeElement && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
                simulate: function (e, t, n, i) {
                    var r = ct.extend(new ct.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                    i ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, ct.removeEvent = G.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) {
                var i = "on" + t;
                e.detachEvent && (typeof e[i] === Y && (e[i] = null), e.detachEvent(i, n))
            }, ct.Event = function (e, n) { return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? c : l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n) }, ct.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function () { this.isImmediatePropagationStopped = c, this.stopPropagation() }
            }, ct.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
                ct.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            a = e.handleObj;
                        return (!r || r !== i && !ct.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ct.support.submitBubbles || (ct.event.special.submit = {
                setup: function () {
                    return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                        var n = e.target,
                            i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                        i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function (e) { e._submit_bubble = !0 }), ct._data(i, "submitBubbles", !0))
                    }), t)
                },
                postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0)) },
                teardown: function () { return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t) }
            }), ct.support.changeBubbles || (ct.event.special.change = {
                setup: function () {
                    return zt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), ct.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0) })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        zt.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {!this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0) }), ct._data(t, "changeBubbles", !0))
                    }), t)
                },
                handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
                teardown: function () { return ct.event.remove(this, "._change"), !zt.test(this.nodeName) }
            }), ct.support.focusinBubbles || ct.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = 0,
                    i = function (e) { ct.event.simulate(t, e.target, ct.event.fix(e), !0) };
                ct.event.special[t] = { setup: function () { 0 === n++ && G.addEventListener(e, i, !0) }, teardown: function () { 0 === --n && G.removeEventListener(e, i, !0) } }
            }), ct.fn.extend({
                on: function (e, n, i, r, a) {
                    var s, o;
                    if ("object" == typeof e) { "string" != typeof n && (i = i || n, n = t); for (s in e) this.on(s, n, i, e[s], a); return this }
                    if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = l;
                    else if (!r) return this;
                    return 1 === a && (o = r, r = function (e) { return ct().off(e), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = ct.guid++)), this.each(function () { ct.event.add(this, e, r, i, n) })
                },
                one: function (e, t, n, i) { return this.on(e, t, n, i, 1) },
                off: function (e, n, i) { var r, a; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (a in e) this.off(a, n, e[a]); return this } return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = l), this.each(function () { ct.event.remove(this, e, i, n) }) },
                bind: function (e, t, n) { return this.on(e, null, t, n) },
                unbind: function (e, t) { return this.off(e, null, t) },
                delegate: function (e, t, n, i) { return this.on(t, e, n, i) },
                undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) },
                trigger: function (e, t) { return this.each(function () { ct.event.trigger(e, t, this) }) },
                triggerHandler: function (e, n) { var i = this[0]; return i ? ct.event.trigger(e, n, i, !0) : t }
            }),
            function (e, t) {
                function n(e) { return pt.test(e + "") }

                function i() { var e, t = []; return e = function (n, i) { return t.push(n += " ") > x.cacheLength && delete e[t.shift()], e[n] = i } }

                function r(e) { return e[q] = !0, e }

                function a(e) { var t = N.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } }

                function s(e, t, n, i) {
                    var r, a, s, o, c, l, u, h, p, m;
                    if ((t ? t.ownerDocument || t : R) !== N && D(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (o = t.nodeType) && 9 !== o) return [];
                    if (!j && !i) {
                        if (r = mt.exec(e))
                            if (s = r[1]) { if (9 === o) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && B(t, a) && a.id === s) return n.push(a), n } else { if (r[2]) return J.apply(n, Z.call(t.getElementsByTagName(e), 0)), n; if ((s = r[3]) && F.getByClassName && t.getElementsByClassName) return J.apply(n, Z.call(t.getElementsByClassName(s), 0)), n }
                        if (F.qsa && !I.test(e)) {
                            if (u = !0, h = q, p = t, m = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                                for (l = d(e), (u = t.getAttribute("id")) ? h = u.replace(bt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = l.length; c--;) l[c] = h + f(l[c]);
                                p = ht.test(e) && t.parentNode || t, m = l.join(",")
                            }
                            if (m) try { return J.apply(n, Z.call(p.querySelectorAll(m), 0)), n } catch (g) {} finally { u || t.removeAttribute("id") }
                        }
                    }
                    return A(e.replace(st, "$1"), t, n, i)
                }

                function o(e, t) {
                    var n = t && e,
                        i = n && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function c(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

                function l(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                function u(e) { return r(function (t) { return t = +t, r(function (n, i) { for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r])) }) }) }

                function d(e, t) {
                    var n, i, r, a, o, c, l, u = H[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (o = e, c = [], l = x.preFilter; o;) {
                        (!n || (i = ot.exec(o))) && (i && (o = o.slice(i[0].length) || o), c.push(r = [])), n = !1, (i = lt.exec(o)) && (n = i.shift(), r.push({ value: n, type: i[0].replace(st, " ") }), o = o.slice(n.length));
                        for (a in x.filter) !(i = ft[a].exec(o)) || l[a] && !(i = l[a](i)) || (n = i.shift(), r.push({ value: n, type: a, matches: i }), o = o.slice(n.length));
                        if (!n) break
                    }
                    return t ? o.length : o ? s.error(e) : H(e, c).slice(0)
                }

                function f(e) { for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value; return i }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        a = U++;
                    return t.first ? function (t, n, a) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, a)
                    } : function (t, n, s) {
                        var o, c, l, u = $ + " " + a;
                        if (s) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    if (l = t[q] || (t[q] = {}), (c = l[i]) && c[0] === u) { if ((o = c[1]) === !0 || o === C) return o === !0 } else if (c = l[i] = [u], c[1] = e(t, n, s) || C, c[1] === !0) return !0
                    }
                }

                function p(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, t, n, i, r) { for (var a, s = [], o = 0, c = e.length, l = null != t; c > o; o++)(a = e[o]) && (!n || n(a, i, r)) && (s.push(a), l && t.push(o)); return s }

                function g(e, t, n, i, a, s) {
                    return i && !i[q] && (i = g(i)), a && !a[q] && (a = g(a, s)), r(function (r, s, o, c) {
                        var l, u, d, f = [],
                            h = [],
                            p = s.length,
                            g = r || y(t || "*", o.nodeType ? [o] : o, []),
                            v = !e || !r && t ? g : m(g, f, e, o, c),
                            b = n ? a || (r ? e : p || i) ? [] : s : v;
                        if (n && n(v, b, o, c), i)
                            for (l = m(b, h), i(l, [], o, c), u = l.length; u--;)(d = l[u]) && (b[h[u]] = !(v[h[u]] = d));
                        if (r) {
                            if (a || e) {
                                if (a) {
                                    for (l = [], u = b.length; u--;)(d = b[u]) && l.push(v[u] = d);
                                    a(null, b = [], l, c)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (l = a ? Q.call(r, d) : f[u]) > -1 && (r[l] = !(s[l] = d))
                            }
                        } else b = m(b === s ? b.splice(p, b.length) : b), a ? a(null, s, b, c) : J.apply(s, b)
                    })
                }

                function v(e) {
                    for (var t, n, i, r = e.length, a = x.relative[e[0].type], s = a || x.relative[" "], o = a ? 1 : 0, c = h(function (e) { return e === t }, s, !0), l = h(function (e) { return Q.call(t, e) > -1 }, s, !0), u = [function (e, n, i) { return !a && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i)) }]; r > o; o++)
                        if (n = x.relative[e[o].type]) u = [h(p(u), n)];
                        else {
                            if (n = x.filter[e[o].type].apply(null, e[o].matches), n[q]) { for (i = ++o; r > i && !x.relative[e[i].type]; i++); return g(o > 1 && p(u), o > 1 && f(e.slice(0, o - 1)).replace(st, "$1"), n, i > o && v(e.slice(o, i)), r > i && v(e = e.slice(i)), r > i && f(e)) }
                            u.push(n)
                        }
                    return p(u)
                }

                function b(e, t) {
                    var n = 0,
                        i = t.length > 0,
                        a = e.length > 0,
                        o = function (r, o, c, l, u) {
                            var d, f, h, p = [],
                                g = 0,
                                v = "0",
                                b = r && [],
                                y = null != u,
                                A = E,
                                w = r || a && x.find.TAG("*", u && o.parentNode || o),
                                T = $ += null == A ? 1 : Math.random() || .1;
                            for (y && (E = o !== N && o, C = n); null != (d = w[v]); v++) {
                                if (a && d) {
                                    for (f = 0; h = e[f++];)
                                        if (h(d, o, c)) { l.push(d); break }
                                    y && ($ = T, C = ++n)
                                }
                                i && ((d = !h && d) && g--, r && b.push(d))
                            }
                            if (g += v, i && v !== g) {
                                for (f = 0; h = t[f++];) h(b, p, o, c);
                                if (r) {
                                    if (g > 0)
                                        for (; v--;) b[v] || p[v] || (p[v] = K.call(l));
                                    p = m(p)
                                }
                                J.apply(l, p), y && !r && p.length > 0 && g + t.length > 1 && s.uniqueSort(l)
                            }
                            return y && ($ = T, E = A), b
                        };
                    return i ? r(o) : o
                }

                function y(e, t, n) { for (var i = 0, r = t.length; r > i; i++) s(e, t[i], n); return n }

                function A(e, t, n, i) {
                    var r, a, s, o, c, l = d(e);
                    if (!i && 1 === l.length) {
                        if (a = l[0] = l[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && !j && x.relative[a[1].type]) {
                            if (t = x.find.ID(s.matches[0].replace(At, wt), t)[0], !t) return n;
                            e = e.slice(a.shift().value.length)
                        }
                        for (r = ft.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !x.relative[o = s.type]);)
                            if ((c = x.find[o]) && (i = c(s.matches[0].replace(At, wt), ht.test(a[0].type) && t.parentNode || t))) { if (a.splice(r, 1), e = i.length && f(a), !e) return J.apply(n, Z.call(i, 0)), n; break }
                    }
                    return S(e, l)(i, t, j, n, ht.test(e)), n
                }

                function w() {}
                var T, C, x, M, _, S, k, E, D, N, P, j, I, O, z, B, L, q = "sizzle" + -new Date,
                    R = e.document,
                    F = {},
                    $ = 0,
                    U = 0,
                    W = i(),
                    H = i(),
                    V = i(),
                    Y = typeof t,
                    G = 1 << 31,
                    X = [],
                    K = X.pop,
                    J = X.push,
                    Z = X.slice,
                    Q = X.indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    et = "[\\x20\\t\\r\\n\\f]",
                    tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    nt = tt.replace("w", "w#"),
                    it = "([*^$|!~]?=)",
                    rt = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + it + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
                    at = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)",
                    st = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                    ot = RegExp("^" + et + "*," + et + "*"),
                    lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
                    ut = RegExp(at),
                    dt = RegExp("^" + nt + "$"),
                    ft = { ID: RegExp("^#(" + tt + ")"), CLASS: RegExp("^\\.(" + tt + ")"), NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"), TAG: RegExp("^(" + tt.replace("w", "w*") + ")"), ATTR: RegExp("^" + rt), PSEUDO: RegExp("^" + at), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"), needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i") },
                    ht = /[\x20\t\r\n\f]*[+~]/,
                    pt = /^[^{]+\{\s*\[native code/,
                    mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^h\d$/i,
                    bt = /'|\\/g,
                    yt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    At = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    wt = function (e, t) { var n = "0x" + t - 65536; return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n) };
                try { Z.call(R.documentElement.childNodes, 0)[0].nodeType } catch (Tt) { Z = function (e) { for (var t, n = []; t = this[e++];) n.push(t); return n } }
                _ = s.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, D = s.setDocument = function (e) {
                    var i = e ? e.ownerDocument || e : R;
                    return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, P = i.documentElement, j = _(i), F.tagNameNoComments = a(function (e) { return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length }), F.attributes = a(function (e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), F.getByClassName = a(function (e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }), F.getByName = a(function (e) { e.id = q + 0, e.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>", P.insertBefore(e, P.firstChild); var t = i.getElementsByName && i.getElementsByName(q).length === 2 + i.getElementsByName(q + 0).length; return F.getIdNotName = !i.getElementById(q), P.removeChild(e), t }), x.attrHandle = a(function (e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function (e) { return e.getAttribute("href", 2) }, type: function (e) { return e.getAttribute("type") } }, F.getIdNotName ? (x.find.ID = function (e, t) { if (typeof t.getElementById !== Y && !j) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, x.filter.ID = function (e) { var t = e.replace(At, wt); return function (e) { return e.getAttribute("id") === t } }) : (x.find.ID = function (e, n) { if (typeof n.getElementById !== Y && !j) { var i = n.getElementById(e); return i ? i.id === e || typeof i.getAttributeNode !== Y && i.getAttributeNode("id").value === e ? [i] : t : [] } }, x.filter.ID = function (e) { var t = e.replace(At, wt); return function (e) { var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id"); return n && n.value === t } }), x.find.TAG = F.tagNameNoComments ? function (e, n) { return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) { for (; n = a[r++];) 1 === n.nodeType && i.push(n); return i }
                        return a
                    }, x.find.NAME = F.getByName && function (e, n) { return typeof n.getElementsByName !== Y ? n.getElementsByName(name) : t }, x.find.CLASS = F.getByClassName && function (e, n) { return typeof n.getElementsByClassName === Y || j ? t : n.getElementsByClassName(e) }, O = [], I = [":focus"], (F.qsa = n(i.querySelectorAll)) && (a(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || I.push(":checked") }), a(function (e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && I.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:") })), (F.matchesSelector = n(z = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && a(function (e) { F.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), O.push("!=", at) }), I = RegExp(I.join("|")), O = RegExp(O.join("|")), B = n(P.contains) || P.compareDocumentPosition ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, L = P.compareDocumentPosition ? function (e, t) { var n; return e === t ? (k = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || B(R, e) ? -1 : t === i || B(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) {
                        var n, r = 0,
                            a = e.parentNode,
                            s = t.parentNode,
                            c = [e],
                            l = [t];
                        if (e === t) return k = !0, 0;
                        if (!a || !s) return e === i ? -1 : t === i ? 1 : a ? -1 : s ? 1 : 0;
                        if (a === s) return o(e, t);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; c[r] === l[r];) r++;
                        return r ? o(c[r], l[r]) : c[r] === R ? -1 : l[r] === R ? 1 : 0
                    }, k = !1, [0, 0].sort(L), F.detectDuplicates = k, N) : N
                }, s.matches = function (e, t) { return s(e, null, null, t) }, s.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== N && D(e), t = t.replace(yt, "='$1']"), !(!F.matchesSelector || j || O && O.test(t) || I.test(t))) try { var n = z.call(e, t); if (n || F.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) {}
                    return s(t, N, null, [e]).length > 0
                }, s.contains = function (e, t) { return (e.ownerDocument || e) !== N && D(e), B(e, t) }, s.attr = function (e, t) { var n; return (e.ownerDocument || e) !== N && D(e), j || (t = t.toLowerCase()), (n = x.attrHandle[t]) ? n(e) : j || F.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null }, s.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, s.uniqueSort = function (e) {
                    var t, n = [],
                        i = 1,
                        r = 0;
                    if (k = !F.detectDuplicates, e.sort(L), k) { for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
                    return e
                }, M = s.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += M(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                        for (; t = e[i]; i++) n += M(t);
                    return n
                }, x = s.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ft,
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function (e) { return e[1] = e[1].replace(At, wt), e[3] = (e[4] || e[5] || "").replace(At, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || s.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && s.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                    filter: {
                        TAG: function (e) { return "*" === e ? function () { return !0 } : (e = e.replace(At, wt).toLowerCase(), function (t) { return t.nodeName && t.nodeName.toLowerCase() === e }) },
                        CLASS: function (e) { var t = W[e + " "]; return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && W(e, function (e) { return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "") }) },
                        ATTR: function (e, t, n) { return function (i) { var r = s.attr(i, e); return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0 } },
                        CHILD: function (e, t, n, i, r) {
                            var a = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                o = "of-type" === t;
                            return 1 === i && 0 === r ? function (e) { return !!e.parentNode } : function (t, n, c) {
                                var l, u, d, f, h, p, m = a !== s ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = o && t.nodeName.toLowerCase(),
                                    b = !c && !o;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild], s && b) {
                                        for (u = g[q] || (g[q] = {}), l = u[e] || [], h = l[0] === $ && l[1], f = l[0] === $ && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                            if (1 === d.nodeType && ++f && d === t) { u[e] = [$, h, f]; break }
                                    } else if (b && (l = (t[q] || (t[q] = {}))[e]) && l[0] === $) f = l[1];
                                    else
                                        for (;
                                            (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (b && ((d[q] || (d[q] = {}))[e] = [$, f]), d !== t)););
                                    return f -= r, f === i || 0 === f % i && f / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, t) { var n, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || s.error("unsupported pseudo: " + e); return i[q] ? i(t) : i.length > 1 ? (n = [e, e, "", t], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) { for (var r, a = i(e, t), s = a.length; s--;) r = Q.call(e, a[s]), e[r] = !(n[r] = a[s]) }) : function (e) { return i(e, 0, n) }) : i }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(st, "$1"));
                            return i[q] ? r(function (e, t, n, r) { for (var a, s = i(e, null, r, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a)) }) : function (e, r, a) { return t[0] = e, i(t, null, a, n), !n.pop() }
                        }),
                        has: r(function (e) { return function (t) { return s(e, t).length > 0 } }),
                        contains: r(function (e) { return function (t) { return (t.textContent || t.innerText || M(t)).indexOf(e) > -1 } }),
                        lang: r(function (e) {
                            return dt.test(e || "") || s.error("unsupported lang: " + e), e = e.replace(At, wt).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = j ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                        root: function (e) { return e === P },
                        focus: function (e) { return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                        enabled: function (e) { return e.disabled === !1 },
                        disabled: function (e) { return e.disabled === !0 },
                        checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                        selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function (e) { return !x.pseudos.empty(e) },
                        header: function (e) { return vt.test(e.nodeName) },
                        input: function (e) { return gt.test(e.nodeName) },
                        button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                        text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                        first: u(function () { return [0] }),
                        last: u(function (e, t) { return [t - 1] }),
                        eq: u(function (e, t, n) { return [0 > n ? n + t : n] }),
                        even: u(function (e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                        odd: u(function (e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                        lt: u(function (e, t, n) { for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i); return e }),
                        gt: u(function (e, t, n) { for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i); return e })
                    }
                };
                for (T in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[T] = c(T);
                for (T in { submit: !0, reset: !0 }) x.pseudos[T] = l(T);
                S = s.compile = function (e, t) {
                    var n, i = [],
                        r = [],
                        a = V[e + " "];
                    if (!a) {
                        for (t || (t = d(e)), n = t.length; n--;) a = v(t[n]), a[q] ? i.push(a) : r.push(a);
                        a = V(e, b(r, i))
                    }
                    return a
                }, x.pseudos.nth = x.pseudos.eq, x.filters = w.prototype = x.pseudos, x.setFilters = new w, D(), s.attr = ct.attr, ct.find = s, ct.expr = s.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = s.uniqueSort, ct.text = s.getText, ct.isXMLDoc = s.isXML, ct.contains = s.contains
            }(e);
        var Ft = /Until$/,
            $t = /^(?:parents|prev(?:Until|All))/,
            Ut = /^.[^:#\[\.,]*$/,
            Wt = ct.expr.match.needsContext,
            Ht = { children: !0, contents: !0, next: !0, prev: !0 };
        ct.fn.extend({
            find: function (e) {
                var t, n, i, r = this.length;
                if ("string" != typeof e) return i = this, this.pushStack(ct(e).filter(function () {
                    for (t = 0; r > t; t++)
                        if (ct.contains(i[t], this)) return !0
                }));
                for (n = [], t = 0; r > t; t++) ct.find(e, this[t], n);
                return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function (e) {
                var t, n = ct(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)
                        if (ct.contains(this, n[t])) return !0
                })
            },
            not: function (e) { return this.pushStack(d(this, e, !1)) },
            filter: function (e) { return this.pushStack(d(this, e, !0)) },
            is: function (e) { return !!e && ("string" == typeof e ? Wt.test(e) ? ct(e, this.context).index(this[0]) >= 0 : ct.filter(e, this).length > 0 : this.filter(e).length > 0) },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, a = [], s = Wt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (s ? s.index(n) > -1 : ct.find.matchesSelector(n, e)) { a.push(n); break }
                        n = n.parentNode
                    }
                return this.pushStack(a.length > 1 ? ct.unique(a) : a)
            },
            index: function (e) { return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function (e, t) {
                var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                    i = ct.merge(this.get(), n);
                return this.pushStack(ct.unique(i))
            },
            addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), ct.fn.andSelf = ct.fn.addBack, ct.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return ct.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return ct.dir(e, "parentNode", n) }, next: function (e) { return u(e, "nextSibling") }, prev: function (e) { return u(e, "previousSibling") }, nextAll: function (e) { return ct.dir(e, "nextSibling") }, prevAll: function (e) { return ct.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return ct.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return ct.dir(e, "previousSibling", n) }, siblings: function (e) { return ct.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return ct.sibling(e.firstChild) }, contents: function (e) { return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes) } }, function (e, t) { ct.fn[e] = function (n, i) { var r = ct.map(this, t, n); return Ft.test(e) || (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), r = this.length > 1 && !Ht[e] ? ct.unique(r) : r, this.length > 1 && $t.test(e) && (r = r.reverse()), this.pushStack(r) } }), ct.extend({ filter: function (e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? ct.find.matchesSelector(t[0], e) ? [t[0]] : [] : ct.find.matches(e, t) }, dir: function (e, n, i) { for (var r = [], a = e[n]; a && 9 !== a.nodeType && (i === t || 1 !== a.nodeType || !ct(a).is(i));) 1 === a.nodeType && r.push(a), a = a[n]; return r }, sibling: function (e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
        var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Yt = / jQuery\d+="(?:null|\d+)"/g,
            Gt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
            Xt = /^\s+/,
            Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Jt = /<([\w:]+)/,
            Zt = /<tbody/i,
            Qt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^$|\/(?:java|ecma)script/i,
            an = /^true\/(.*)/,
            sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            on = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            cn = f(G),
            ln = cn.appendChild(G.createElement("div"));
        on.optgroup = on.option, on.tbody = on.tfoot = on.colgroup = on.caption = on.thead, on.th = on.td, ct.fn.extend({
            text: function (e) { return ct.access(this, function (e) { return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e)) }, null, e, arguments.length) },
            wrapAll: function (e) {
                if (ct.isFunction(e)) return this.each(function (t) { ct(this).wrapAll(e.call(this, t)) });
                if (this[0]) {
                    var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return this.each(ct.isFunction(e) ? function (t) { ct(this).wrapInner(e.call(this, t)) } : function () {
                    var t = ct(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) { var t = ct.isFunction(e); return this.each(function (n) { ct(this).wrapAll(t ? e.call(this, n) : e) }) },
            unwrap: function () { return this.parent().each(function () { ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes) }).end() },
            append: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
            after: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
            remove: function (e, t) { for (var n, i = 0; null != (n = this[i]); i++)(!e || ct.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ct.cleanData(y(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n))); return this },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ct.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ct.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return ct.clone(this, e, t) }) },
            html: function (e) {
                return ct.access(this, function (e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Yt, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Gt.test(e) || !ct.support.leadingWhitespace && Xt.test(e) || on[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Kt, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(y(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (a) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function (e) {
                var t = ct.isFunction(e);
                return t || "string" == typeof e || (e = ct(e).not(this).detach()), this.domManip([e], !0, function (e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    n && (ct(this).remove(), n.insertBefore(e, t))
                })
            },
            detach: function (e) { return this.remove(e, !0) },
            domManip: function (e, n, i) {
                e = tt.apply([], e);
                var r, a, s, o, c, l, u = 0,
                    d = this.length,
                    f = this,
                    g = d - 1,
                    v = e[0],
                    b = ct.isFunction(v);
                if (b || !(1 >= d || "string" != typeof v || ct.support.checkClone) && nn.test(v)) return this.each(function (r) {
                    var a = f.eq(r);
                    b && (e[0] = v.call(this, r, n ? a.html() : t)), a.domManip(e, n, i)
                });
                if (d && (l = ct.buildFragment(e, this[0].ownerDocument, !1, this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                    for (n = n && ct.nodeName(r, "tr"), o = ct.map(y(l, "script"), p), s = o.length; d > u; u++) a = l, u !== g && (a = ct.clone(a, !0, !0), s && ct.merge(o, y(a, "script"))), i.call(n && ct.nodeName(this[u], "table") ? h(this[u], "tbody") : this[u], a, u);
                    if (s)
                        for (c = o[o.length - 1].ownerDocument, ct.map(o, m), u = 0; s > u; u++) a = o[u], rn.test(a.type || "") && !ct._data(a, "globalEval") && ct.contains(c, a) && (a.src ? ct.ajax({ url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : ct.globalEval((a.text || a.textContent || a.innerHTML || "").replace(sn, "")));
                    l = r = null
                }
                return this
            }
        }), ct.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { ct.fn[e] = function (e) { for (var n, i = 0, r = [], a = ct(e), s = a.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ct(a[i])[t](n), nt.apply(r, n.get()); return this.pushStack(r) } }), ct.extend({
            clone: function (e, t, n) {
                var i, r, a, s, o, c = ct.contains(e.ownerDocument, e);
                if (ct.support.html5Clone || ct.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(a = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                    for (i = y(a), o = y(e), s = 0; null != (r = o[s]); ++s) i[s] && b(r, i[s]);
                if (t)
                    if (n)
                        for (o = o || y(e), i = i || y(a), s = 0; null != (r = o[s]); s++) v(r, i[s]);
                    else v(e, a);
                return i = y(a, "script"), i.length > 0 && g(i, !c && y(e, "script")), i = o = r = null, a
            },
            buildFragment: function (e, t, n, i) {
                for (var r, a, s, o, c, l, u, d = e.length, h = f(t), p = [], m = 0; d > m; m++)
                    if (a = e[m], a || 0 === a)
                        if ("object" === ct.type(a)) ct.merge(p, a.nodeType ? [a] : a);
                        else if (Qt.test(a)) {
                    for (o = o || h.appendChild(t.createElement("div")), c = (Jt.exec(a) || ["", ""])[1].toLowerCase(), u = on[c] || on._default, o.innerHTML = u[1] + a.replace(Kt, "<$1></$2>") + u[2], r = u[0]; r--;) o = o.lastChild;
                    if (!ct.support.leadingWhitespace && Xt.test(a) && p.push(t.createTextNode(Xt.exec(a)[0])), !ct.support.tbody)
                        for (a = "table" !== c || Zt.test(a) ? "<table>" !== u[1] || Zt.test(a) ? 0 : o : o.firstChild, r = a && a.childNodes.length; r--;) ct.nodeName(l = a.childNodes[r], "tbody") && !l.childNodes.length && a.removeChild(l);
                    for (ct.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                    o = h.lastChild
                } else p.push(t.createTextNode(a));
                for (o && h.removeChild(o), ct.support.appendChecked || ct.grep(y(p, "input"), A), m = 0; a = p[m++];)
                    if ((!i || -1 === ct.inArray(a, i)) && (s = ct.contains(a.ownerDocument, a), o = y(h.appendChild(a), "script"), s && g(o), n))
                        for (r = 0; a = o[r++];) rn.test(a.type || "") && n.push(a);
                return o = null, h
            },
            cleanData: function (e, t) {
                for (var n, i, r, a, s = 0, o = ct.expando, c = ct.cache, l = ct.support.deleteExpando, u = ct.event.special; null != (n = e[s]); s++)
                    if ((t || ct.acceptData(n)) && (r = n[o], a = r && c[r])) {
                        if (a.events)
                            for (i in a.events) u[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, a.handle);
                        c[r] && (delete c[r], l ? delete n[o] : typeof n.removeAttribute !== Y ? n.removeAttribute(o) : n[o] = null, Q.push(r))
                    }
            }
        });
        var un, dn, fn, hn = /alpha\([^)]*\)/i,
            pn = /opacity\s*=\s*([^)]*)/,
            mn = /^(top|right|bottom|left)$/,
            gn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            bn = RegExp("^(" + lt + ")(.*)$", "i"),
            yn = RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
            An = RegExp("^([+-])=(" + lt + ")", "i"),
            wn = { BODY: "block" },
            Tn = { position: "absolute", visibility: "hidden", display: "block" },
            Cn = { letterSpacing: 0, fontWeight: 400 },
            xn = ["Top", "Right", "Bottom", "Left"],
            Mn = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function (e, n) {
                return ct.access(this, function (e, n, i) {
                    var r, a, s = {},
                        o = 0;
                    if (ct.isArray(n)) { for (a = dn(e), r = n.length; r > o; o++) s[n[o]] = ct.css(e, n[o], !1, a); return s }
                    return i !== t ? ct.style(e, n, i) : ct.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function () { return C(this, !0) },
            hide: function () { return C(this) },
            toggle: function (e) {
                var t = "boolean" == typeof e;
                return this.each(function () {
                    (t ? e : T(this)) ? ct(this).show(): ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: { opacity: { get: function (e, t) { if (t) { var n = fn(e, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": ct.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, s, o, c = ct.camelCase(n),
                        l = e.style;
                    if (n = ct.cssProps[c] || (ct.cssProps[c] = w(l, c)), o = ct.cssHooks[n] || ct.cssHooks[c], i === t) return o && "get" in o && (a = o.get(e, !1, r)) !== t ? a : l[n];
                    if (s = typeof i, "string" === s && (a = An.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(ct.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[c] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), o && "set" in o && (i = o.set(e, i, r)) === t))) try { l[n] = i } catch (u) {}
                }
            },
            css: function (e, n, i, r) { var a, s, o, c = ct.camelCase(n); return n = ct.cssProps[c] || (ct.cssProps[c] = w(e.style, c)), o = ct.cssHooks[n] || ct.cssHooks[c], o && "get" in o && (s = o.get(e, !0, i)), s === t && (s = fn(e, n, r)), "normal" === s && n in Cn && (s = Cn[n]), "" === i || i ? (a = parseFloat(s), i === !0 || ct.isNumeric(a) ? a || 0 : s) : s },
            swap: function (e, t, n, i) {
                var r, a, s = {};
                for (a in t) s[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = s[a];
                return r
            }
        }), e.getComputedStyle ? (dn = function (t) { return e.getComputedStyle(t, null) }, fn = function (e, n, i) {
            var r, a, s, o = i || dn(e),
                c = o ? o.getPropertyValue(n) || o[n] : t,
                l = e.style;
            return o && ("" !== c || ct.contains(e.ownerDocument, e) || (c = ct.style(e, n)), yn.test(c) && vn.test(n) && (r = l.width, a = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = o.width, l.width = r, l.minWidth = a, l.maxWidth = s)), c
        }) : G.documentElement.currentStyle && (dn = function (e) { return e.currentStyle }, fn = function (e, n, i) {
            var r, a, s, o = i || dn(e),
                c = o ? o[n] : t,
                l = e.style;
            return null == c && l && l[n] && (c = l[n]), yn.test(c) && !mn.test(n) && (r = l.left, a = e.runtimeStyle, s = a && a.left, s && (a.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : c, c = l.pixelLeft + "px", l.left = r, s && (a.left = s)), "" === c ? "auto" : c
        }), ct.each(["height", "width"], function (e, n) { ct.cssHooks[n] = { get: function (e, i, r) { return i ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, Tn, function () { return _(e, n, r) }) : _(e, n, r) : t }, set: function (e, t, i) { var r = i && dn(e); return x(e, t, i ? M(e, n, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0) } } }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function (e, t) { return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
            set: function (e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(a.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = hn.test(a) ? a.replace(hn, r) : a + " " + r)
            }
        }), ct(function () { ct.support.reliableMarginRight || (ct.cssHooks.marginRight = { get: function (e, n) { return n ? ct.swap(e, { display: "inline-block" }, fn, [e, "marginRight"]) : t } }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) { ct.cssHooks[n] = { get: function (e, i) { return i ? (i = fn(e, n), yn.test(i) ? ct(e).position()[n] + "px" : i) : t } } }) }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display")) }, ct.expr.filters.visible = function (e) { return !ct.expr.filters.hidden(e) }), ct.each({ margin: "", padding: "", border: "Width" }, function (e, t) { ct.cssHooks[e + t] = { expand: function (n) { for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + xn[i] + t] = a[i] || a[i - 2] || a[0]; return r } }, vn.test(e) || (ct.cssHooks[e + t].set = x) });
        var _n = /%20/g,
            Sn = /\[\]$/,
            kn = /\r?\n/g,
            En = /^(?:submit|button|image|reset|file)$/i,
            Dn = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({ serialize: function () { return ct.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = ct.prop(this, "elements"); return e ? ct.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !En.test(e) && (this.checked || !tn.test(e)) }).map(function (e, t) { var n = ct(this).val(); return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) { return { name: t.name, value: e.replace(kn, "\r\n") } }) : { name: t.name, value: n.replace(kn, "\r\n") } }).get() } }), ct.param = function (e, n) {
            var i, r = [],
                a = function (e, t) { t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () { a(this.name, this.value) });
            else
                for (i in e) E(i, e[i], n, a);
            return r.join("&").replace(_n, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { ct.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), ct.fn.hover = function (e, t) { return this.mouseenter(e).mouseleave(t || e) };
        var Nn, Pn, jn = ct.now(),
            In = /\?/,
            On = /#.*$/,
            zn = /([?&])_=[^&]*/,
            Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ln = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qn = /^(?:GET|HEAD)$/,
            Rn = /^\/\//,
            Fn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            $n = ct.fn.load,
            Un = {},
            Wn = {},
            Hn = "*/".concat("*");
        try { Pn = X.href } catch (Vn) { Pn = G.createElement("a"), Pn.href = "", Pn = Pn.href }
        Nn = Fn.exec(Pn.toLowerCase()) || [], ct.fn.load = function (e, n, i) {
            if ("string" != typeof e && $n) return $n.apply(this, arguments);
            var r, a, s, o = this,
                c = e.indexOf(" ");
            return c >= 0 && (r = e.slice(c, e.length), e = e.slice(0, c)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), o.length > 0 && ct.ajax({ url: e, type: s, dataType: "html", data: n }).done(function (e) { a = arguments, o.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e) }).complete(i && function (e, t) { o.each(i, a || [e.responseText, t, e]) }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { ct.fn[t] = function (e) { return this.on(t, e) } }), ct.each(["get", "post"], function (e, n) { ct[n] = function (e, i, r, a) { return ct.isFunction(i) && (a = a || r, r = i, i = t), ct.ajax({ url: e, type: n, dataType: a, data: i, success: r }) } }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Pn, type: "GET", isLocal: Ln.test(Nn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": ct.parseJSON, "text xml": ct.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function (e, t) { return t ? P(P(e, ct.ajaxSettings), t) : P(ct.ajaxSettings, e) },
            ajaxPrefilter: D(Un),
            ajaxTransport: D(Wn),
            ajax: function (e, n) {
                function i(e, n, i, r) {
                    var a, d, b, y, w, C = n;
                    2 !== A && (A = 2, c && clearTimeout(c), u = t, o = r || "", T.readyState = e > 0 ? 4 : 0, i && (y = j(f, T, i)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = T.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === e ? (a = !0, C = "nocontent") : 304 === e ? (a = !0, C = "notmodified") : (a = I(f, y), C = a.state, d = a.data, b = a.error, a = !b)) : (b = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", a ? m.resolveWith(h, [d, C, T]) : m.rejectWith(h, [T, C, b]), T.statusCode(v), v = t, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [T, f, a ? d : b]), g.fireWith(h, [T, C]), l && (p.trigger("ajaxComplete", [T, f]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, a, s, o, c, l, u, d, f = ct.ajaxSetup({}, n),
                    h = f.context || f,
                    p = f.context && (h.nodeType || h.jquery) ? ct(h) : ct.event,
                    m = ct.Deferred(),
                    g = ct.Callbacks("once memory"),
                    v = f.statusCode || {},
                    b = {},
                    y = {},
                    A = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === A) {
                                if (!d)
                                    for (d = {}; t = Bn.exec(o);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () { return 2 === A ? o : null },
                        setRequestHeader: function (e, t) { var n = e.toLowerCase(); return A || (e = y[n] = y[n] || e, b[e] = t), this },
                        overrideMimeType: function (e) { return A || (f.mimeType = e), this },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > A)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function (e) { var t = e || w; return u && u.abort(t), i(0, t), this }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || Pn) + "").replace(On, "").replace(Rn, Nn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ut) || [""], null == f.crossDomain && (r = Fn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Nn[1] && r[2] === Nn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Nn[3] || ("http:" === Nn[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), N(Un, f, n, T), 2 === A) return T;
                l = f.global, l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qn.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (In.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = zn.test(s) ? s.replace(zn, "$1_=" + jn++) : s + (In.test(s) ? "&" : "?") + "_=" + jn++)), f.ifModified && (ct.lastModified[s] && T.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && T.setRequestHeader("If-None-Match", ct.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Hn + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers) T.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (f.beforeSend.call(h, T, f) === !1 || 2 === A)) return T.abort();
                w = "abort";
                for (a in { success: 1, error: 1, complete: 1 }) T[a](f[a]);
                if (u = N(Wn, f, n, T)) {
                    T.readyState = 1, l && p.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (c = setTimeout(function () { T.abort("timeout") }, f.timeout));
                    try { A = 1, u.send(b, i) } catch (C) {
                        if (!(2 > A)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getScript: function (e, n) { return ct.get(e, t, n, "script") },
            getJSON: function (e, t, n) { return ct.get(e, t, n, "json") }
        }), ct.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return ct.globalEval(e), e } } }), ct.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ct.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, i = G.head || ct("head")[0] || G.documentElement;
                return {
                    send: function (t, r) {
                        n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function () { n && n.onload(t, !0) }
                }
            }
        });
        var Yn = [],
            Gn = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Yn.pop() || ct.expando + "_" + jn++; return this[e] = !0, e } }), ct.ajaxPrefilter("json jsonp", function (n, i, r) { var a, s, o, c = n.jsonp !== !1 && (Gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data"); return c || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, c ? n[c] = n[c].replace(Gn, "$1" + a) : n.jsonp !== !1 && (n.url += (In.test(n.url) ? "&" : "?") + n.jsonp + "=" + a), n.converters["script json"] = function () { return o || ct.error(a + " was not called"), o[0] }, n.dataTypes[0] = "json", s = e[a], e[a] = function () { o = arguments }, r.always(function () { e[a] = s, n[a] && (n.jsonpCallback = i.jsonpCallback, Yn.push(a)), o && ct.isFunction(s) && s(o[0]), o = s = t }), "script") : t });
        var Xn, Kn, Jn = 0,
            Zn = e.ActiveXObject && function () { var e; for (e in Xn) Xn[e](t, !0) };
        ct.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && O() || z() } : O, Kn = ct.ajaxSettings.xhr(), ct.support.cors = !!Kn && "withCredentials" in Kn, Kn = ct.support.ajax = !!Kn, Kn && ct.ajaxTransport(function (n) {
            if (!n.crossDomain || ct.support.cors) {
                var i;
                return {
                    send: function (r, a) {
                        var s, o, c = n.xhr();
                        if (n.username ? c.open(n.type, n.url, n.async, n.username, n.password) : c.open(n.type, n.url, n.async), n.xhrFields)
                            for (o in n.xhrFields) c[o] = n.xhrFields[o];
                        n.mimeType && c.overrideMimeType && c.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try { for (o in r) c.setRequestHeader(o, r[o]) } catch (l) {}
                        c.send(n.hasContent && n.data || null), i = function (e, r) {
                            var o, l, u, d;
                            try {
                                if (i && (r || 4 === c.readyState))
                                    if (i = t, s && (c.onreadystatechange = ct.noop, Zn && delete Xn[s]), r) 4 !== c.readyState && c.abort();
                                    else {
                                        d = {}, o = c.status, l = c.getAllResponseHeaders(), "string" == typeof c.responseText && (d.text = c.responseText);
                                        try { u = c.statusText } catch (f) { u = "" }
                                        o || !n.isLocal || n.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                                    }
                            } catch (h) { r || a(-1, h) }
                            d && a(o, u, d, l)
                        }, n.async ? 4 === c.readyState ? setTimeout(i) : (s = ++Jn, Zn && (Xn || (Xn = {}, ct(e).unload(Zn)), Xn[s] = i), c.onreadystatechange = i) : i()
                    },
                    abort: function () { i && i(t, !0) }
                }
            }
        });
        var Qn, ei, ti = /^(?:toggle|show|hide)$/,
            ni = RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            ri = [F],
            ai = {
                "*": [function (e, t) {
                    var n, i, r = this.createTween(e, t),
                        a = ni.exec(t),
                        s = r.cur(),
                        o = +s || 0,
                        c = 1,
                        l = 20;
                    if (a) {
                        if (n = +a[2], i = a[3] || (ct.cssNumber[e] ? "" : "px"), "px" !== i && o) {
                            o = ct.css(r.elem, e, !0) || n || 1;
                            do c = c || ".5", o /= c, ct.style(r.elem, e, o + i); while (c !== (c = r.cur() / s) && 1 !== c && --l)
                        }
                        r.unit = i, r.start = o, r.end = a[1] ? o + (a[1] + 1) * n : n
                    }
                    return r
                }]
            };
        ct.Animation = ct.extend(q, { tweener: function (e, t) { ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ai[n] = ai[n] || [], ai[n].unshift(t) }, prefilter: function (e, t) { t ? ri.unshift(e) : ri.push(e) } }), ct.Tween = $, $.prototype = { constructor: $, init: function (e, t, n, i, r, a) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ct.cssNumber[n] ? "" : "px") }, cur: function () { var e = $.propHooks[this.prop]; return e && e.get ? e.get(this) : $.propHooks._default.get(this) }, run: function (e) { var t, n = $.propHooks[this.prop]; return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this } }, $.prototype.init.prototype = $.prototype, $.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, $.propHooks.scrollTop = $.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ct.each(["toggle", "show", "hide"], function (e, t) {
            var n = ct.fn[t];
            ct.fn[t] = function (e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, r) }
        }), ct.fn.extend({
            fadeTo: function (e, t, n, i) { return this.filter(T).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
            animate: function (e, t, n, i) {
                var r = ct.isEmptyObject(e),
                    a = ct.speed(t, n, i),
                    s = function () {
                        var t = q(this, ct.extend({}, e), a);
                        s.finish = function () { t.stop(!0) }, (r || ct._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function (e, n, i) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        a = ct.timers,
                        s = ct._data(this);
                    if (n) s[n] && s[n].stop && r(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && ii.test(n) && r(s[n]);
                    for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(i), t = !1, a.splice(n, 1));
                    (t || !i) && ct.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ct._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = ct.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ct.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ct.each({ slideDown: U("show"), slideUp: U("hide"), slideToggle: U("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { ct.fn[e] = function (e, n, i) { return this.animate(t, e, n, i) } }), ct.speed = function (e, t, n) { var i = e && "object" == typeof e ? ct.extend({}, e) : { complete: n || !n && t || ct.isFunction(e) && e, duration: e, easing: n && t || t && !ct.isFunction(t) && t }; return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () { ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue) }, i }, ct.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, ct.timers = [], ct.fx = $.prototype.init, ct.fx.tick = function () {
            var e, n = ct.timers,
                i = 0;
            for (Qn = ct.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ct.fx.stop(), Qn = t
        }, ct.fx.timer = function (e) { e() && ct.timers.push(e) && ct.fx.start() }, ct.fx.interval = 13, ct.fx.start = function () { ei || (ei = setInterval(ct.fx.tick, ct.fx.interval)) }, ct.fx.stop = function () { clearInterval(ei), ei = null }, ct.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) { return ct.grep(ct.timers, function (t) { return e === t.elem }).length }), ct.fn.offset = function (e) {
            if (arguments.length) return e === t ? this : this.each(function (t) { ct.offset.setOffset(this, e, t) });
            var n, i, r = { top: 0, left: 0 },
                a = this[0],
                s = a && a.ownerDocument;
            return s ? (n = s.documentElement, ct.contains(n, a) ? (typeof a.getBoundingClientRect !== Y && (r = a.getBoundingClientRect()), i = W(s), { top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : r) : void 0
        }, ct.offset = {
            setOffset: function (e, t, n) {
                var i = ct.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, a, s = ct(e),
                    o = s.offset(),
                    c = ct.css(e, "top"),
                    l = ct.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [c, l]) > -1,
                    d = {},
                    f = {};
                u ? (f = s.position(), r = f.top, a = f.left) : (r = parseFloat(c) || 0, a = parseFloat(l) || 0), ct.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (d.top = t.top - o.top + r), null != t.left && (d.left = t.left - o.left + a), "using" in t ? t.using.call(e, d) : s.css(d)
            }
        }, ct.fn.extend({
            position: function () {
                if (this[0]) {
                    var e, t, n = { top: 0, left: 0 },
                        i = this[0];
                    return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ct.css(i, "marginTop", !0), left: t.left - n.left - ct.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function () { return this.map(function () { for (var e = this.offsetParent || G.documentElement; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent; return e || G.documentElement }) }
        }), ct.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
            var i = /Y/.test(n);
            ct.fn[e] = function (r) { return ct.access(this, function (e, r, a) { var s = W(e); return a === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : a, i ? a : ct(s).scrollTop()) : e[r] = a, t) }, e, r, arguments.length, null) }
        }), ct.each({ Height: "height", Width: "width" }, function (e, n) {
            ct.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (i, r) {
                ct.fn[r] = function (r, a) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        o = i || (r === !0 || a === !0 ? "margin" : "border");
                    return ct.access(this, function (n, i, r) { var a; return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : r === t ? ct.css(n, i, o) : ct.style(n, i, r, o) }, n, s ? r : t, s, null)
                }
            })
        }), e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return ct })
    }(window),
    function (e) {
        function t(i) {
            function a(e) { return e && "object" == typeof e && !bn(e) && Xt.call(e, "__wrapped__") ? e : new H(e) }

            function B(e) {
                var t = e.length,
                    n = t >= l;
                if (n)
                    for (var i = {}, r = -1; ++r < t;) {
                        var a = c + e[r];
                        (i[a] || (i[a] = [])).push(e[r])
                    }
                return function (t) { if (n) { var r = c + t; return i[r] && -1 < At(i[r], t) } return -1 < At(e, t) }
            }

            function L(e) { return e.charCodeAt(0) }

            function q(e, t) {
                var n = e.b,
                    i = t.b;
                if (e = e.a, t = t.a, e !== t) { if (e > t || "undefined" == typeof e) return 1; if (t > e || "undefined" == typeof t) return -1 }
                return i > n ? -1 : 1
            }

            function R(e, t, n, i) {
                function r() {
                    var i = arguments,
                        l = s ? this : t;
                    return a || (e = t[o]), n.length && (i = i.length ? (i = un.call(i), c ? i.concat(n) : n.concat(i)) : n), this instanceof r ? (V.prototype = e.prototype, l = new V, V.prototype = null, i = e.apply(l, i), nt(i) ? i : l) : e.apply(l, i)
                }
                var a = tt(e),
                    s = !n,
                    o = t;
                if (s) {
                    var c = i;
                    n = t
                } else if (!a) {
                    if (!i) throw new qt;
                    t = e
                }
                return r
            }

            function F() {
                for (var e, t = { g: C, b: "k(m)", c: "", e: "m", f: "", h: "", i: !0, j: !!An }, n = 0; e = arguments[n]; n++)
                    for (var i in e) t[i] = e[i];
                if (e = t.a, t.d = /^[^,]+/.exec(e)[0], n = jt, i = "var i,m=" + t.d + ",u=" + t.e + ";if(!m)return u;" + t.h + ";", t.b ? (i += "var n=m.length;i=-1;if(" + t.b + "){", pn.unindexedChars && (i += "if(l(m)){m=m.split('')}"), i += "while(++i<n){" + t.f + "}}else{") : pn.nonEnumArgs && (i += "var n=m.length;i=-1;if(n&&j(m)){while(++i<n){i+='';" + t.f + "}}else{"), pn.enumPrototypes && (i += "var v=typeof m=='function';"), t.i && t.j) i += "var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];", pn.enumPrototypes && (i += "if(!(v&&i=='prototype')){"), i += t.f, pn.enumPrototypes && (i += "}"), i += "}";
                else if (i += "for(i in m){", (pn.enumPrototypes || t.i) && (i += "if(", pn.enumPrototypes && (i += "!(v&&i=='prototype')"), pn.enumPrototypes && t.i && (i += "&&"), t.i && (i += "h.call(m,i)"), i += "){"), i += t.f + ";", (pn.enumPrototypes || t.i) && (i += "}"), i += "}", pn.nonEnumShadows) { i += "var f=m.constructor;"; for (var r = 0; 7 > r; r++) i += "i='" + t.g[r] + "';if(", "constructor" == t.g[r] && (i += "!(f&&f.prototype===m)&&"), i += "h.call(m,i)){" + t.f + "}" }
                return (t.b || pn.nonEnumArgs) && (i += "}"), i += t.c + ";return u", n("h,j,k,l,o,p,r", "return function(" + e + "){" + i + "}")(Xt, K, bn, rt, An, a, I)
            }

            function $(e) { return "\\" + O[e] }

            function U(e) { return Tn[e] }

            function W(e) { return "function" != typeof e.toString && "string" == typeof (e + "") }

            function H(e) { this.__wrapped__ = e }

            function V() {}

            function Y(e) {
                var t = !1;
                if (!e || Qt.call(e) != D || !pn.argsClass && K(e)) return t;
                var n = e.constructor;
                return (tt(n) ? n instanceof n : pn.nodeClass || !W(e)) ? pn.ownLast ? (_n(e, function (e, n, i) { return t = Xt.call(i, n), !1 }), !0 === t) : (_n(e, function (e, n) {
                    t = n
                }), !1 === t || Xt.call(e, t)) : t
            }

            function G(e, t, n) {
                t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                var i = -1;
                n = n - t || 0;
                for (var r = Dt(0 > n ? 0 : n); ++i < n;) r[i] = e[t + i];
                return r
            }

            function X(e) { return Cn[e] }

            function K(e) { return Qt.call(e) == x }

            function J(e, t, i, r, s, o) {
                var c = e;
                if ("function" == typeof t && (r = i, i = t, t = !1), "function" == typeof i) {
                    if (i = "undefined" == typeof r ? i : a.createCallback(i, r, 1), c = i(c), "undefined" != typeof c) return c;
                    c = e
                }
                if (r = nt(c)) { var l = Qt.call(c); if (!j[l] || !pn.nodeClass && W(c)) return c; var u = bn(c) }
                if (!r || !t) return r ? u ? G(c) : xn({}, c) : c;
                switch (r = hn[l], l) {
                    case _:
                    case S:
                        return new r(+c);
                    case E:
                    case P:
                        return new r(c);
                    case N:
                        return r(c.source, m.exec(c))
                }
                for (s || (s = []), o || (o = []), l = s.length; l--;)
                    if (s[l] == e) return o[l];
                return c = u ? r(c.length) : {}, u && (Xt.call(e, "index") && (c.index = e.index), Xt.call(e, "input") && (c.input = e.input)), s.push(e), o.push(c), (u ? dt : Sn)(e, function (e, r) { c[r] = J(e, t, i, n, s, o) }), c
            }

            function Z(e) { var t = []; return _n(e, function (e, n) { tt(e) && t.push(n) }), t.sort() }

            function Q(e) {
                for (var t = -1, n = An(e), i = n.length, r = {}; ++t < i;) {
                    var a = n[t];
                    r[e[a]] = a
                }
                return r
            }

            function et(e, t, n, i, r, s) {
                var c = n === o;
                if ("function" == typeof n && !c) { n = a.createCallback(n, i, 2); var l = n(e, t); if ("undefined" != typeof l) return !!l }
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var u = typeof e,
                    d = typeof t;
                if (e === e && (!e || "function" != u && "object" != u) && (!t || "function" != d && "object" != d)) return !1;
                if (null == e || null == t) return e === t;
                if (d = Qt.call(e), u = Qt.call(t), d == x && (d = D), u == x && (u = D), d != u) return !1;
                switch (d) {
                    case _:
                    case S:
                        return +e == +t;
                    case E:
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case N:
                    case P:
                        return e == Lt(t)
                }
                if (u = d == M, !u) {
                    if (Xt.call(e, "__wrapped__") || Xt.call(t, "__wrapped__")) return et(e.__wrapped__ || e, t.__wrapped__ || t, n, i, r, s);
                    if (d != D || !pn.nodeClass && (W(e) || W(t))) return !1;
                    var d = !pn.argsObject && K(e) ? zt : e.constructor,
                        f = !pn.argsObject && K(t) ? zt : t.constructor;
                    if (!(d == f || tt(d) && d instanceof d && tt(f) && f instanceof f)) return !1
                }
                for (r || (r = []), s || (s = []), d = r.length; d--;)
                    if (r[d] == e) return s[d] == t;
                var h = 0,
                    l = !0;
                if (r.push(e), s.push(t), u) {
                    if (d = e.length, h = t.length, l = h == e.length, !l && !c) return l;
                    for (; h--;)
                        if (u = d, f = t[h], c)
                            for (; u-- && !(l = et(e[u], f, n, i, r, s)););
                        else if (!(l = et(e[h], f, n, i, r, s))) break;
                    return l
                }
                return _n(t, function (t, a, o) { return Xt.call(o, a) ? (h++, l = Xt.call(e, a) && et(e[a], t, n, i, r, s)) : void 0 }), l && !c && _n(e, function (e, t, n) { return Xt.call(n, t) ? l = -1 < --h : void 0 }), l
            }

            function tt(e) { return "function" == typeof e }

            function nt(e) { return e ? I[typeof e] : !1 }

            function it(e) { return "number" == typeof e || Qt.call(e) == E }

            function rt(e) { return "string" == typeof e || Qt.call(e) == P }

            function at(e, t, n) {
                var i = arguments,
                    r = 0,
                    s = 2;
                if (!nt(e)) return e;
                if (n === o) var c = i[3],
                    l = i[4],
                    u = i[5];
                else l = [], u = [], "number" != typeof n && (s = i.length), s > 3 && "function" == typeof i[s - 2] ? c = a.createCallback(i[--s - 1], i[s--], 2) : s > 2 && "function" == typeof i[s - 1] && (c = i[--s]);
                for (; ++r < s;)(bn(i[r]) ? dt : Sn)(i[r], function (t, n) {
                    var i, r, a = t,
                        s = e[n];
                    if (t && ((r = bn(t)) || kn(t))) {
                        for (a = l.length; a--;)
                            if (i = l[a] == t) { s = u[a]; break }
                        if (!i) {
                            var d;
                            c && (a = c(s, t), d = "undefined" != typeof a) && (s = a), d || (s = r ? bn(s) ? s : [] : kn(s) ? s : {}), l.push(t), u.push(s), d || (s = at(s, t, o, c, l, u))
                        }
                    } else c && (a = c(s, t), "undefined" == typeof a && (a = t)), "undefined" != typeof a && (s = a);
                    e[n] = s
                });
                return e
            }

            function st(e) { for (var t = -1, n = An(e), i = n.length, r = Dt(i); ++t < i;) r[t] = e[n[t]]; return r }

            function ot(e, t, n) {
                var i = -1,
                    r = e ? e.length : 0,
                    a = !1;
                return n = (0 > n ? sn(0, r + n) : n) || 0, "number" == typeof r ? a = -1 < (rt(e) ? e.indexOf(t, n) : At(e, t, n)) : wn(e, function (e) { return ++i < n ? void 0 : !(a = e === t) }), a
            }

            function ct(e, t, n) { var i = !0; if (t = a.createCallback(t, n), bn(e)) { n = -1; for (var r = e.length; ++n < r && (i = !!t(e[n], n, e));); } else wn(e, function (e, n, r) { return i = !!t(e, n, r) }); return i }

            function lt(e, t, n) {
                var i = [];
                if (t = a.createCallback(t, n), bn(e)) {
                    n = -1;
                    for (var r = e.length; ++n < r;) {
                        var s = e[n];
                        t(s, n, e) && i.push(s)
                    }
                } else wn(e, function (e, n, r) { t(e, n, r) && i.push(e) });
                return i
            }

            function ut(e, t, n) {
                if (t = a.createCallback(t, n), !bn(e)) { var i; return wn(e, function (e, n, r) { return t(e, n, r) ? (i = e, !1) : void 0 }), i }
                n = -1;
                for (var r = e.length; ++n < r;) { var s = e[n]; if (t(s, n, e)) return s }
            }

            function dt(e, t, n) { if (t && "undefined" == typeof n && bn(e)) { n = -1; for (var i = e.length; ++n < i && !1 !== t(e[n], n, e);); } else wn(e, t, n); return e }

            function ft(e, t, n) {
                var i = -1,
                    r = e ? e.length : 0,
                    s = Dt("number" == typeof r ? r : 0);
                if (t = a.createCallback(t, n), bn(e))
                    for (; ++i < r;) s[i] = t(e[i], i, e);
                else wn(e, function (e, n, r) { s[++i] = t(e, n, r) });
                return s
            }

            function ht(e, t, n) {
                var i = -1 / 0,
                    r = i;
                if (!t && bn(e)) {
                    n = -1;
                    for (var s = e.length; ++n < s;) {
                        var o = e[n];
                        o > r && (r = o)
                    }
                } else t = !t && rt(e) ? L : a.createCallback(t, n), wn(e, function (e, n, a) { n = t(e, n, a), n > i && (i = n, r = e) });
                return r
            }

            function pt(e, t, n, i) {
                var r = 3 > arguments.length;
                if (t = a.createCallback(t, i, 4), bn(e)) {
                    var s = -1,
                        o = e.length;
                    for (r && (n = e[++s]); ++s < o;) n = t(n, e[s], s, e)
                } else wn(e, function (e, i, a) { n = r ? (r = !1, e) : t(n, e, i, a) });
                return n
            }

            function mt(e, t, n, i) {
                var r = e,
                    s = e ? e.length : 0,
                    o = 3 > arguments.length;
                if ("number" != typeof s) var c = An(e),
                    s = c.length;
                else pn.unindexedChars && rt(e) && (r = e.split(""));
                return t = a.createCallback(t, i, 4), dt(e, function (e, i, a) { i = c ? c[--s] : --s, n = o ? (o = !1, r[i]) : t(n, r[i], i, a) }), n
            }

            function gt(e, t, n) { var i; if (t = a.createCallback(t, n), bn(e)) { n = -1; for (var r = e.length; ++n < r && !(i = t(e[n], n, e));); } else wn(e, function (e, n, r) { return !(i = t(e, n, r)) }); return !!i }

            function vt(e) {
                for (var t = -1, n = e ? e.length : 0, i = Vt.apply(Rt, un.call(arguments, 1)), i = B(i), r = []; ++t < n;) {
                    var a = e[t];
                    i(a) || r.push(a)
                }
                return r
            }

            function bt(e, t, n) {
                if (e) {
                    var i = 0,
                        r = e.length;
                    if ("number" != typeof t && null != t) { var s = -1; for (t = a.createCallback(t, n); ++s < r && t(e[s], s, e);) i++ } else if (i = t, null == i || n) return e[0];
                    return G(e, 0, on(sn(0, i), r))
                }
            }

            function yt(e, t, n, i) {
                var r = -1,
                    s = e ? e.length : 0,
                    o = [];
                for ("boolean" != typeof t && null != t && (i = n, n = t, t = !1), null != n && (n = a.createCallback(n, i)); ++r < s;) i = e[r], n && (i = n(i, r, e)), bn(i) ? Kt.apply(o, t ? i : yt(i)) : o.push(i);
                return o
            }

            function At(e, t, n) {
                var i = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof n) i = (0 > n ? sn(0, r + n) : n || 0) - 1;
                else if (n) return i = Tt(e, t), e[i] === t ? i : -1;
                for (; ++i < r;)
                    if (e[i] === t) return i;
                return -1
            }

            function wt(e, t, n) {
                if ("number" != typeof t && null != t) {
                    var i = 0,
                        r = -1,
                        s = e ? e.length : 0;
                    for (t = a.createCallback(t, n); ++r < s && t(e[r], r, e);) i++
                } else i = null == t || n ? 1 : sn(0, t);
                return G(e, i)
            }

            function Tt(e, t, n, i) {
                var r = 0,
                    s = e ? e.length : r;
                for (n = n ? a.createCallback(n, i, 1) : St, t = n(t); s > r;) i = r + s >>> 1, n(e[i]) < t ? r = i + 1 : s = i;
                return r
            }

            function Ct(e, t, n, i) {
                var r = -1,
                    s = e ? e.length : 0,
                    o = [],
                    u = o;
                "boolean" != typeof t && null != t && (i = n, n = t, t = !1);
                var d = !t && s >= l;
                if (d) var f = {};
                for (null != n && (u = [], n = a.createCallback(n, i)); ++r < s;) {
                    i = e[r];
                    var h = n ? n(i, r, e) : i;
                    if (d) var p = c + h,
                        p = f[p] ? !(u = f[p]) : u = f[p] = [];
                    (t ? !r || u[u.length - 1] !== h : p || 0 > At(u, h)) && ((n || d) && u.push(h), o.push(i))
                }
                return o
            }

            function xt(e, t) {
                for (var n = -1, i = e ? e.length : 0, r = {}; ++n < i;) {
                    var a = e[n];
                    t ? r[a] = t[n] : r[a[0]] = a[1]
                }
                return r
            }

            function Mt(e, t) { return pn.fastBind || en && 2 < arguments.length ? en.call.apply(en, arguments) : R(e, t, un.call(arguments, 2)) }

            function _t(e) { var t = un.call(arguments, 1); return Zt(function () { e.apply(n, t) }, 1) }

            function St(e) { return e }

            function kt(e) {
                dt(Z(e), function (t) {
                    var n = a[t] = e[t];
                    a.prototype[t] = function () {
                        var e = this.__wrapped__,
                            t = [e];
                        return Kt.apply(t, arguments), t = n.apply(a, t), e && "object" == typeof e && e == t ? this : new H(t)
                    }
                })
            }

            function Et() { return this.__wrapped__ }
            i = i ? z.defaults(e.Object(), i, z.pick(e, T)) : e;
            var Dt = i.Array,
                Nt = i.Boolean,
                Pt = i.Date,
                jt = i.Function,
                It = i.Math,
                Ot = i.Number,
                zt = i.Object,
                Bt = i.RegExp,
                Lt = i.String,
                qt = i.TypeError,
                Rt = Dt(),
                Ft = zt(),
                $t = i._,
                Ut = Bt("^" + Lt(Ft.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
                Wt = It.ceil,
                Ht = i.clearTimeout,
                Vt = Rt.concat,
                Yt = It.floor,
                Gt = Ut.test(Gt = zt.getPrototypeOf) && Gt,
                Xt = Ft.hasOwnProperty,
                Kt = Rt.push,
                Jt = i.setImmediate,
                Zt = i.setTimeout,
                Qt = Ft.toString,
                en = Ut.test(en = Qt.bind) && en,
                tn = Ut.test(tn = Dt.isArray) && tn,
                nn = i.isFinite,
                rn = i.isNaN,
                an = Ut.test(an = zt.keys) && an,
                sn = It.max,
                on = It.min,
                cn = i.parseInt,
                ln = It.random,
                un = Rt.slice,
                dn = Ut.test(i.attachEvent),
                fn = en && !/\n|true/.test(en + dn),
                hn = {};
            hn[M] = Dt, hn[_] = Nt, hn[S] = Pt, hn[D] = zt, hn[E] = Ot, hn[N] = Bt, hn[P] = Lt;
            var pn = a.support = {};
            ! function () {
                var e = function () { this.x = 1 },
                    t = { 0: 1, length: 1 },
                    n = [];
                e.prototype = { valueOf: 1, y: 1 };
                for (var i in new e) n.push(i);
                for (i in arguments);
                pn.argsObject = arguments.constructor == zt && !(arguments instanceof Dt), pn.argsClass = K(arguments), pn.enumPrototypes = e.propertyIsEnumerable("prototype"), pn.fastBind = en && !fn, pn.ownLast = "x" != n[0], pn.nonEnumArgs = 0 != i, pn.nonEnumShadows = !/valueOf/.test(n), pn.spliceObjects = (Rt.splice.call(t, 0, 1), !t[0]), pn.unindexedChars = "xx" != "x" [0] + zt("x")[0];
                try { pn.nodeClass = !(Qt.call(document) == D && !({ toString: 0 } + "")) } catch (r) { pn.nodeClass = !0 }
            }(1), a.templateSettings = { escape: /<%-([\s\S]+?)%>/g, evaluate: /<%([\s\S]+?)%>/g, interpolate: g, variable: "", imports: { _: a } };
            var mn = { a: "q,w,g", h: "var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){", f: "if(typeof u[i]=='undefined')u[i]=m[i]", c: "}}" },
                gn = { a: "e,d,x", h: "d=d&&typeof x=='undefined'?d:p.createCallback(d,x)", b: "typeof n=='number'", f: "if(d(m[i],i,e)===false)return u" },
                vn = { h: "if(!r[typeof m])return u;" + gn.h, b: !1 };
            H.prototype = a.prototype, pn.argsClass || (K = function (e) { return e ? Xt.call(e, "callee") : !1 });
            var bn = tn || function (e) { return e ? "object" == typeof e && Qt.call(e) == M : !1 },
                yn = F({ a: "q", e: "[]", h: "if(!(r[typeof q]))return u", f: "u.push(i)", b: !1 }),
                An = an ? function (e) { return nt(e) ? pn.enumPrototypes && "function" == typeof e || pn.nonEnumArgs && e.length && K(e) ? yn(e) : an(e) : [] } : yn,
                wn = F(gn),
                Tn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
                Cn = Q(Tn),
                xn = F(mn, { h: mn.h.replace(";", ";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"), f: "u[i]=d?d(u[i],m[i]):m[i]" }),
                Mn = F(mn),
                _n = F(gn, vn, { i: !1 }),
                Sn = F(gn, vn);
            tt(/x/) && (tt = function (e) { return "function" == typeof e && Qt.call(e) == k });
            var kn = Gt ? function (e) {
                if (!e || Qt.call(e) != D || !pn.argsClass && K(e)) return !1;
                var t = e.valueOf,
                    n = "function" == typeof t && (n = Gt(t)) && Gt(n);
                return n ? e == n || Gt(e) == n : Y(e)
            } : Y;
            fn && r && "function" == typeof Jt && (_t = Mt(Jt, i));
            var En = 8 == cn(v + "08") ? cn : function (e, t) { return cn(rt(e) ? e.replace(b, "") : e, t || 0) };
            return a.after = function (e, t) { return 1 > e ? t() : function () { return 1 > --e ? t.apply(this, arguments) : void 0 } }, a.assign = xn, a.at = function (e) {
                var t = -1,
                    n = Vt.apply(Rt, un.call(arguments, 1)),
                    i = n.length,
                    r = Dt(i);
                for (pn.unindexedChars && rt(e) && (e = e.split("")); ++t < i;) r[t] = e[n[t]];
                return r
            }, a.bind = Mt, a.bindAll = function (e) {
                for (var t = 1 < arguments.length ? Vt.apply(Rt, un.call(arguments, 1)) : Z(e), n = -1, i = t.length; ++n < i;) {
                    var r = t[n];
                    e[r] = Mt(e[r], e)
                }
                return e
            }, a.bindKey = function (e, t) { return R(e, t, un.call(arguments, 2), o) }, a.compact = function (e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var r = e[t];
                    r && i.push(r)
                }
                return i
            }, a.compose = function () { var e = arguments; return function () { for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)]; return t[0] } }, a.countBy = function (e, t, n) { var i = {}; return t = a.createCallback(t, n), dt(e, function (e, n, r) { n = Lt(t(e, n, r)), Xt.call(i, n) ? i[n]++ : i[n] = 1 }), i }, a.createCallback = function (e, t, n) { if (null == e) return St; var i = typeof e; if ("function" != i) { if ("object" != i) return function (t) { return t[e] }; var r = An(e); return function (t) { for (var n = r.length, i = !1; n-- && (i = et(t[r[n]], e[r[n]], o));); return i } } return "undefined" != typeof t ? 1 === n ? function (n) { return e.call(t, n) } : 2 === n ? function (n, i) { return e.call(t, n, i) } : 4 === n ? function (n, i, r, a) { return e.call(t, n, i, r, a) } : function (n, i, r) { return e.call(t, n, i, r) } : e }, a.debounce = function (e, t, n) {
                function i() { a = c = null, l && (s = e.apply(o, r)) }
                var r, a, s, o, c, l = !0;
                if (!0 === n) var u = !0,
                    l = !1;
                else n && I[typeof n] && (u = n.leading, l = "trailing" in n ? n.trailing : l);
                return function () { return r = arguments, o = this, Ht(c), !a && u ? (a = !0, s = e.apply(o, r)) : c = Zt(i, t), s }
            }, a.defaults = Mn, a.defer = _t, a.delay = function (e, t) { var i = un.call(arguments, 2); return Zt(function () { e.apply(n, i) }, t) }, a.difference = vt, a.filter = lt, a.flatten = yt, a.forEach = dt, a.forIn = _n, a.forOwn = Sn, a.functions = Z, a.groupBy = function (e, t, n) { var i = {}; return t = a.createCallback(t, n), dt(e, function (e, n, r) { n = Lt(t(e, n, r)), (Xt.call(i, n) ? i[n] : i[n] = []).push(e) }), i }, a.initial = function (e, t, n) {
                if (!e) return [];
                var i = 0,
                    r = e.length;
                if ("number" != typeof t && null != t) { var s = r; for (t = a.createCallback(t, n); s-- && t(e[s], s, e);) i++ } else i = null == t || n ? 1 : t || i;
                return G(e, 0, on(sn(0, r - i), r))
            }, a.intersection = function (e) {
                var t = arguments,
                    n = t.length,
                    i = { 0: {} },
                    r = -1,
                    a = e ? e.length : 0,
                    s = a >= l,
                    o = [],
                    u = o;
                e: for (; ++r < a;) {
                    var d = e[r];
                    if (s) var f = c + d,
                        f = i[0][f] ? !(u = i[0][f]) : u = i[0][f] = [];
                    if (f || 0 > At(u, d)) {
                        s && u.push(d);
                        for (var h = n; --h;)
                            if (!(i[h] || (i[h] = B(t[h])))(d)) continue e;
                        o.push(d)
                    }
                }
                return o
            }, a.invert = Q, a.invoke = function (e, t) {
                var n = un.call(arguments, 2),
                    i = -1,
                    r = "function" == typeof t,
                    a = e ? e.length : 0,
                    s = Dt("number" == typeof a ? a : 0);
                return dt(e, function (e) { s[++i] = (r ? t : e[t]).apply(e, n) }), s
            }, a.keys = An, a.map = ft, a.max = ht, a.memoize = function (e, t) { var n = {}; return function () { var i = c + (t ? t.apply(this, arguments) : arguments[0]); return Xt.call(n, i) ? n[i] : n[i] = e.apply(this, arguments) } }, a.merge = at, a.min = function (e, t, n) {
                var i = 1 / 0,
                    r = i;
                if (!t && bn(e)) {
                    n = -1;
                    for (var s = e.length; ++n < s;) {
                        var o = e[n];
                        r > o && (r = o)
                    }
                } else t = !t && rt(e) ? L : a.createCallback(t, n), wn(e, function (e, n, a) { n = t(e, n, a), i > n && (i = n, r = e) });
                return r
            }, a.omit = function (e, t, n) {
                var i = "function" == typeof t,
                    r = {};
                if (i) t = a.createCallback(t, n);
                else var s = Vt.apply(Rt, un.call(arguments, 1));
                return _n(e, function (e, n, a) {
                    (i ? !t(e, n, a) : 0 > At(s, n)) && (r[n] = e)
                }), r
            }, a.once = function (e) { var t, n; return function () { return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n) } }, a.pairs = function (e) {
                for (var t = -1, n = An(e), i = n.length, r = Dt(i); ++t < i;) {
                    var a = n[t];
                    r[t] = [a, e[a]]
                }
                return r
            }, a.partial = function (e) { return R(e, un.call(arguments, 1)) }, a.partialRight = function (e) { return R(e, un.call(arguments, 1), null, o) }, a.pick = function (e, t, n) {
                var i = {};
                if ("function" != typeof t)
                    for (var r = -1, s = Vt.apply(Rt, un.call(arguments, 1)), o = nt(e) ? s.length : 0; ++r < o;) {
                        var c = s[r];
                        c in e && (i[c] = e[c])
                    } else t = a.createCallback(t, n), _n(e, function (e, n, r) { t(e, n, r) && (i[n] = e) });
                return i
            }, a.pluck = ft, a.range = function (e, t, n) {
                e = +e || 0, n = +n || 1, null == t && (t = e, e = 0);
                var i = -1;
                t = sn(0, Wt((t - e) / n));
                for (var r = Dt(t); ++i < t;) r[i] = e, e += n;
                return r
            }, a.reject = function (e, t, n) { return t = a.createCallback(t, n), lt(e, function (e, n, i) { return !t(e, n, i) }) }, a.rest = wt, a.shuffle = function (e) {
                var t = -1,
                    n = e ? e.length : 0,
                    i = Dt("number" == typeof n ? n : 0);
                return dt(e, function (e) {
                    var n = Yt(ln() * (++t + 1));
                    i[t] = i[n], i[n] = e
                }), i
            }, a.sortBy = function (e, t, n) {
                var i = -1,
                    r = e ? e.length : 0,
                    s = Dt("number" == typeof r ? r : 0);
                for (t = a.createCallback(t, n), dt(e, function (e, n, r) { s[++i] = { a: t(e, n, r), b: i, c: e } }), r = s.length, s.sort(q); r--;) s[r] = s[r].c;
                return s
            }, a.tap = function (e, t) { return t(e), e }, a.throttle = function (e, t, n) {
                function i() { o = null, u && (c = new Pt, a = e.apply(s, r)) }
                var r, a, s, o, c = 0,
                    l = !0,
                    u = !0;
                return !1 === n ? l = !1 : n && I[typeof n] && (l = "leading" in n ? n.leading : l, u = "trailing" in n ? n.trailing : u),
                    function () { var n = new Pt;!o && !l && (c = n); var u = t - (n - c); return r = arguments, s = this, u > 0 ? o || (o = Zt(i, u)) : (Ht(o), o = null, c = n, a = e.apply(s, r)), a }
            }, a.times = function (e, t, n) {
                e = -1 < (e = +e) ? e : 0;
                var i = -1,
                    r = Dt(e);
                for (t = a.createCallback(t, n, 1); ++i < e;) r[i] = t(i);
                return r
            }, a.toArray = function (e) { return e && "number" == typeof e.length ? pn.unindexedChars && rt(e) ? e.split("") : G(e) : st(e) }, a.union = function (e) { return bn(e) || (arguments[0] = e ? un.call(e) : Rt), Ct(Vt.apply(Rt, arguments)) }, a.uniq = Ct, a.unzip = function (e) {
                for (var t = -1, n = e ? e.length : 0, i = n ? ht(ft(e, "length")) : 0, r = Dt(i); ++t < n;)
                    for (var a = -1, s = e[t]; ++a < i;)(r[a] || (r[a] = Dt(n)))[t] = s[a];
                return r
            }, a.values = st, a.where = lt, a.without = function (e) { return vt(e, un.call(arguments, 1)) }, a.wrap = function (e, t) { return function () { var n = [e]; return Kt.apply(n, arguments), t.apply(this, n) } }, a.zip = function (e) { for (var t = -1, n = e ? ht(ft(arguments, "length")) : 0, i = Dt(n); ++t < n;) i[t] = ft(arguments, t); return i }, a.zipObject = xt, a.collect = ft, a.drop = wt, a.each = dt, a.extend = xn, a.methods = Z, a.object = xt, a.select = lt, a.tail = wt, a.unique = Ct, kt(a), a.clone = J, a.cloneDeep = function (e, t, n) { return J(e, !0, t, n) }, a.contains = ot, a.escape = function (e) { return null == e ? "" : Lt(e).replace(A, U) }, a.every = ct, a.find = ut, a.findIndex = function (e, t, n) {
                var i = -1,
                    r = e ? e.length : 0;
                for (t = a.createCallback(t, n); ++i < r;)
                    if (t(e[i], i, e)) return i;
                return -1
            }, a.findKey = function (e, t, n) { var i; return t = a.createCallback(t, n), Sn(e, function (e, n, r) { return t(e, n, r) ? (i = n, !1) : void 0 }), i }, a.has = function (e, t) { return e ? Xt.call(e, t) : !1 }, a.identity = St, a.indexOf = At, a.isArguments = K, a.isArray = bn, a.isBoolean = function (e) { return !0 === e || !1 === e || Qt.call(e) == _ }, a.isDate = function (e) { return e ? "object" == typeof e && Qt.call(e) == S : !1 }, a.isElement = function (e) { return e ? 1 === e.nodeType : !1 }, a.isEmpty = function (e) {
                var t = !0;
                if (!e) return t;
                var n = Qt.call(e),
                    i = e.length;
                return n == M || n == P || (pn.argsClass ? n == x : K(e)) || n == D && "number" == typeof i && tt(e.splice) ? !i : (Sn(e, function () { return t = !1 }), t)
            }, a.isEqual = et, a.isFinite = function (e) { return nn(e) && !rn(parseFloat(e)) }, a.isFunction = tt, a.isNaN = function (e) { return it(e) && e != +e }, a.isNull = function (e) { return null === e }, a.isNumber = it, a.isObject = nt, a.isPlainObject = kn, a.isRegExp = function (e) { return e ? I[typeof e] && Qt.call(e) == N : !1 }, a.isString = rt, a.isUndefined = function (e) { return "undefined" == typeof e }, a.lastIndexOf = function (e, t, n) {
                var i = e ? e.length : 0;
                for ("number" == typeof n && (i = (0 > n ? sn(0, i + n) : on(n, i - 1)) + 1); i--;)
                    if (e[i] === t) return i;
                return -1
            }, a.mixin = kt, a.noConflict = function () { return i._ = $t, this }, a.parseInt = En, a.random = function (e, t) { return null == e && null == t && (t = 1), e = +e || 0, null == t && (t = e, e = 0), e + Yt(ln() * ((+t || 0) - e + 1)) }, a.reduce = pt, a.reduceRight = mt, a.result = function (e, t) { var i = e ? e[t] : n; return tt(i) ? e[t]() : i }, a.runInContext = t, a.size = function (e) { var t = e ? e.length : 0; return "number" == typeof t ? t : An(e).length }, a.some = gt, a.sortedIndex = Tt, a.template = function (e, t, i) {
                var r = a.templateSettings;
                e || (e = ""), i = Mn({}, i, r);
                var s, o = Mn({}, i.imports, r.imports),
                    r = An(o),
                    o = st(o),
                    c = 0,
                    l = i.interpolate || y,
                    h = "__p+='",
                    l = Bt((i.escape || y).source + "|" + l.source + "|" + (l === g ? p : y).source + "|" + (i.evaluate || y).source + "|$", "g");
                e.replace(l, function (t, n, i, r, a, o) { return i || (i = r), h += e.slice(c, o).replace(w, $), n && (h += "'+__e(" + n + ")+'"), a && (s = !0, h += "';" + a + ";__p+='"), i && (h += "'+((__t=(" + i + "))==null?'':__t)+'"), c = o + t.length, t }), h += "';\n", l = i = i.variable, l || (i = "obj", h = "with(" + i + "){" + h + "}"), h = (s ? h.replace(u, "") : h).replace(d, "$1").replace(f, "$1;"), h = "function(" + i + "){" + (l ? "" : i + "||(" + i + "={});") + "var __t,__p='',__e=_.escape" + (s ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + h + "return __p}";
                try { var m = jt(r, "return " + h).apply(n, o) } catch (v) { throw v.source = h, v }
                return t ? m(t) : (m.source = h, m)
            }, a.unescape = function (e) { return null == e ? "" : Lt(e).replace(h, X) }, a.uniqueId = function (e) { var t = ++s; return Lt(null == e ? "" : e) + t }, a.all = ct, a.any = gt, a.detect = ut, a.foldl = pt, a.foldr = mt, a.include = ot, a.inject = pt, Sn(a, function (e, t) { a.prototype[t] || (a.prototype[t] = function () { var t = [this.__wrapped__]; return Kt.apply(t, arguments), e.apply(a, t) }) }), a.first = bt, a.last = function (e, t, n) {
                if (e) {
                    var i = 0,
                        r = e.length;
                    if ("number" != typeof t && null != t) { var s = r; for (t = a.createCallback(t, n); s-- && t(e[s], s, e);) i++ } else if (i = t, null == i || n) return e[r - 1];
                    return G(e, sn(0, r - i))
                }
            }, a.take = bt, a.head = bt, Sn(a, function (e, t) { a.prototype[t] || (a.prototype[t] = function (t, n) { var i = e(this.__wrapped__, t, n); return null == t || n && "function" != typeof t ? i : new H(i) }) }), a.VERSION = "1.2.1", a.prototype.toString = function () { return Lt(this.__wrapped__) }, a.prototype.value = Et, a.prototype.valueOf = Et, wn(["join", "pop", "shift"], function (e) {
                var t = Rt[e];
                a.prototype[e] = function () { return t.apply(this.__wrapped__, arguments) }
            }), wn(["push", "reverse", "sort", "unshift"], function (e) {
                var t = Rt[e];
                a.prototype[e] = function () { return t.apply(this.__wrapped__, arguments), this }
            }), wn(["concat", "slice", "splice"], function (e) {
                var t = Rt[e];
                a.prototype[e] = function () { return new H(t.apply(this.__wrapped__, arguments)) }
            }), pn.spliceObjects || wn(["pop", "shift", "splice"], function (e) {
                var t = Rt[e],
                    n = "splice" == e;
                a.prototype[e] = function () {
                    var e = this.__wrapped__,
                        i = t.apply(e, arguments);
                    return 0 === e.length && delete e[0], n ? new H(i) : i
                }
            }), a
        }
        var n, i = "object" == typeof exports && exports,
            r = "object" == typeof module && module && module.exports == i && module,
            a = "object" == typeof global && global;
        (a.global === a || a.window === a) && (e = a);
        var s = 0,
            o = {},
            c = +new Date + "",
            l = 200,
            u = /\b__p\+='';/g,
            d = /\b(__p\+=)''\+/g,
            f = /(__e\(.*?\)|\b__t\))\+'';/g,
            h = /&(?:amp|lt|gt|quot|#39);/g,
            p = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            m = /\w*$/,
            g = /<%=([\s\S]+?)%>/g,
            v = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
            b = RegExp("^[" + v + "]*0+(?=.$)"),
            y = /($^)/,
            A = /[&<>"']/g,
            w = /['\n\r\t\u2028\u2029\\]/g,
            T = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),
            C = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
            x = "[object Arguments]",
            M = "[object Array]",
            _ = "[object Boolean]",
            S = "[object Date]",
            k = "[object Function]",
            E = "[object Number]",
            D = "[object Object]",
            N = "[object RegExp]",
            P = "[object String]",
            j = {};
        j[k] = !1, j[x] = j[M] = j[_] = j[S] = j[E] = j[D] = j[N] = j[P] = !0;
        var I = { "boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1 },
            O = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
            z = t();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (e._ = z, define("underscore", [], function () { return z })) : i && !i.nodeType ? r ? (r.exports = z)._ = z : i._ = z : e._ = z
    }(this),
    function () {
        var e, t = this,
            n = t.Backbone,
            i = [],
            r = i.push,
            a = i.slice,
            s = i.splice;
        e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.0.0";
        var o = t._;
        o || "undefined" == typeof require || (o = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, e.noConflict = function () { return t.Backbone = n, this }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var c = e.Events = {
                on: function (e, t, n) {
                    if (!u(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({ callback: t, context: n, ctx: n || this }), this
                },
                once: function (e, t, n) {
                    if (!u(this, "once", e, [t, n]) || !t) return this;
                    var i = this,
                        r = o.once(function () { i.off(e, r), t.apply(this, arguments) });
                    return r._callback = t, this.on(e, r, n)
                },
                off: function (e, t, n) {
                    var i, r, a, s, c, l, d, f;
                    if (!this._events || !u(this, "off", e, [t, n])) return this;
                    if (!e && !t && !n) return this._events = {}, this;
                    for (s = e ? [e] : o.keys(this._events), c = 0, l = s.length; l > c; c++)
                        if (e = s[c], a = this._events[e]) {
                            if (this._events[e] = i = [], t || n)
                                for (d = 0, f = a.length; f > d; d++) r = a[d], (t && t !== r.callback && t !== r.callback._callback || n && n !== r.context) && i.push(r);
                            i.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function (e) {
                    if (!this._events) return this;
                    var t = a.call(arguments, 1);
                    if (!u(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        i = this._events.all;
                    return n && d(n, t), i && d(i, arguments), this
                },
                stopListening: function (e, t, n) { var i = this._listeners; if (!i) return this; var r = !t && !n; "object" == typeof t && (n = this), e && ((i = {})[e._listenerId] = e); for (var a in i) i[a].off(t, n, this), r && delete this._listeners[a]; return this }
            },
            l = /\s+/,
            u = function (e, t, n, i) { if (!n) return !0; if ("object" == typeof n) { for (var r in n) e[t].apply(e, [r, n[r]].concat(i)); return !1 } if (l.test(n)) { for (var a = n.split(l), s = 0, o = a.length; o > s; s++) e[t].apply(e, [a[s]].concat(i)); return !1 } return !0 },
            d = function (e, t) {
                var n, i = -1,
                    r = e.length,
                    a = t[0],
                    s = t[1],
                    o = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a);
                        return;
                    case 2:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a, s);
                        return;
                    case 3:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, a, s, o);
                        return;
                    default:
                        for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t)
                }
            },
            f = { listenTo: "on", listenToOnce: "once" };
        o.each(f, function (e, t) {
            c[t] = function (t, n, i) {
                var r = this._listeners || (this._listeners = {}),
                    a = t._listenerId || (t._listenerId = o.uniqueId("l"));
                return r[a] = t, "object" == typeof n && (i = this), t[e](n, i, this), this
            }
        }), c.bind = c.on, c.unbind = c.off, o.extend(e, c);
        var h = e.Model = function (e, t) {
                var n, i = e || {};
                t || (t = {}), this.cid = o.uniqueId("c"), this.attributes = {}, o.extend(this, o.pick(t, p)), t.parse && (i = this.parse(i, t) || {}), (n = o.result(this, "defaults")) && (i = o.defaults({}, i, n)), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
            },
            p = ["url", "urlRoot", "collection"];
        o.extend(h.prototype, c, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function () { return o.clone(this.attributes) },
            sync: function () { return e.sync.apply(this, arguments) },
            get: function (e) { return this.attributes[e] },
            escape: function (e) { return o.escape(this.get(e)) },
            has: function (e) { return null != this.get(e) },
            set: function (e, t, n) {
                var i, r, a, s, c, l, u, d;
                if (null == e) return this;
                if ("object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, n || (n = {}), !this._validate(r, n)) return !1;
                a = n.unset, c = n.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = o.clone(this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (i in r) t = r[i], o.isEqual(d[i], t) || s.push(i), o.isEqual(u[i], t) ? delete this.changed[i] : this.changed[i] = t, a ? delete d[i] : d[i] = t;
                if (!c) { s.length && (this._pending = !0); for (var f = 0, h = s.length; h > f; f++) this.trigger("change:" + s[f], this, d[s[f]], n) }
                if (l) return this;
                if (!c)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (e, t) { return this.set(e, void 0, o.extend({}, t, { unset: !0 })) },
            clear: function (e) { var t = {}; for (var n in this.attributes) t[n] = void 0; return this.set(t, o.extend({}, e, { unset: !0 })) },
            hasChanged: function (e) { return null == e ? !o.isEmpty(this.changed) : o.has(this.changed, e) },
            changedAttributes: function (e) {
                if (!e) return this.hasChanged() ? o.clone(this.changed) : !1;
                var t, n = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var r in e) o.isEqual(i[r], t = e[r]) || ((n || (n = {}))[r] = t);
                return n
            },
            previous: function (e) { return null != e && this._previousAttributes ? this._previousAttributes[e] : null },
            previousAttributes: function () { return o.clone(this._previousAttributes) },
            fetch: function (e) {
                e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    n = e.success;
                return e.success = function (i) { return t.set(t.parse(i, e), e) ? (n && n(t, i, e), void t.trigger("sync", t, i, e)) : !1 }, B(this, e), this.sync("read", this, e)
            },
            save: function (e, t, n) {
                var i, r, a, s = this.attributes;
                if (null == e || "object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, !(!i || n && n.wait || this.set(i, n))) return !1;
                if (n = o.extend({ validate: !0 }, n), !this._validate(i, n)) return !1;
                i && n.wait && (this.attributes = o.extend({}, s, i)), void 0 === n.parse && (n.parse = !0);
                var c = this,
                    l = n.success;
                return n.success = function (e) { c.attributes = s; var t = c.parse(e, n); return n.wait && (t = o.extend(i || {}, t)), o.isObject(t) && !c.set(t, n) ? !1 : (l && l(c, e, n), void c.trigger("sync", c, e, n)) }, B(this, n), r = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === r && (n.attrs = i), a = this.sync(r, this, n), i && n.wait && (this.attributes = s), a
            },
            destroy: function (e) {
                e = e ? o.clone(e) : {};
                var t = this,
                    n = e.success,
                    i = function () { t.trigger("destroy", t, t.collection, e) };
                if (e.success = function (r) {
                        (e.wait || t.isNew()) && i(), n && n(t, r, e), t.isNew() || t.trigger("sync", t, r, e)
                    }, this.isNew()) return e.success(), !1;
                B(this, e);
                var r = this.sync("delete", this, e);
                return e.wait || i(), r
            },
            url: function () { var e = o.result(this, "urlRoot") || o.result(this.collection, "url") || z(); return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id) },
            parse: function (e) { return e },
            clone: function () { return new this.constructor(this.attributes) },
            isNew: function () { return null == this.id },
            isValid: function (e) { return this._validate({}, o.extend(e || {}, { validate: !0 })) },
            _validate: function (e, t) {
                if (!t.validate || !this.validate) return !0;
                e = o.extend({}, this.attributes, e);
                var n = this.validationError = this.validate(e, t) || null;
                return n ? (this.trigger("invalid", this, n, o.extend(t || {}, { validationError: n })), !1) : !0
            }
        });
        var m = ["keys", "values", "pairs", "invert", "pick", "omit"];
        o.each(m, function (e) { h.prototype[e] = function () { var t = a.call(arguments); return t.unshift(this.attributes), o[e].apply(o, t) } });
        var g = e.Collection = function (e, t) { t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, o.extend({ silent: !0 }, t)) },
            v = { add: !0, remove: !0, merge: !0 },
            b = { add: !0, merge: !1, remove: !1 };
        o.extend(g.prototype, c, {
            model: h,
            initialize: function () {},
            toJSON: function (e) { return this.map(function (t) { return t.toJSON(e) }) },
            sync: function () { return e.sync.apply(this, arguments) },
            add: function (e, t) { return this.set(e, o.defaults(t || {}, b)) },
            remove: function (e, t) { e = o.isArray(e) ? e.slice() : [e], t || (t = {}); var n, i, r, a; for (n = 0, i = e.length; i > n; n++) a = this.get(e[n]), a && (delete this._byId[a.id], delete this._byId[a.cid], r = this.indexOf(a), this.models.splice(r, 1), this.length--, t.silent || (t.index = r, a.trigger("remove", a, this, t)), this._removeReference(a)); return this },
            set: function (e, t) {
                t = o.defaults(t || {}, v), t.parse && (e = this.parse(e, t)), o.isArray(e) || (e = e ? [e] : []);
                var n, i, a, c, l, u = t.at,
                    d = this.comparator && null == u && t.sort !== !1,
                    f = o.isString(this.comparator) ? this.comparator : null,
                    h = [],
                    p = [],
                    m = {};
                for (n = 0, i = e.length; i > n; n++)(a = this._prepareModel(e[n], t)) && ((c = this.get(a)) ? (t.remove && (m[c.cid] = !0), t.merge && (c.set(a.attributes, t), d && !l && c.hasChanged(f) && (l = !0))) : t.add && (h.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)));
                if (t.remove) {
                    for (n = 0, i = this.length; i > n; ++n) m[(a = this.models[n]).cid] || p.push(a);
                    p.length && this.remove(p, t)
                }
                if (h.length && (d && (l = !0), this.length += h.length, null != u ? s.apply(this.models, [u, 0].concat(h)) : r.apply(this.models, h)), l && this.sort({ silent: !0 }), t.silent) return this;
                for (n = 0, i = h.length; i > n; n++)(a = h[n]).trigger("add", a, this, t);
                return l && this.trigger("sort", this, t), this
            },
            reset: function (e, t) { t || (t = {}); for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]); return t.previousModels = this.models, this._reset(), this.add(e, o.extend({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), this },
            push: function (e, t) { return e = this._prepareModel(e, t), this.add(e, o.extend({ at: this.length }, t)), e },
            pop: function (e) { var t = this.at(this.length - 1); return this.remove(t, e), t },
            unshift: function (e, t) { return e = this._prepareModel(e, t), this.add(e, o.extend({ at: 0 }, t)), e },
            shift: function (e) { var t = this.at(0); return this.remove(t, e), t },
            slice: function (e, t) { return this.models.slice(e, t) },
            get: function (e) { return null == e ? void 0 : this._byId[null != e.id ? e.id : e.cid || e] },
            at: function (e) { return this.models[e] },
            where: function (e, t) {
                return o.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function (e) { return this.where(e, !0) },
            sort: function (e) { if (!this.comparator) throw new Error("Cannot sort a set without a comparator"); return e || (e = {}), o.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(o.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this },
            sortedIndex: function (e, t, n) { t || (t = this.comparator); var i = o.isFunction(t) ? t : function (e) { return e.get(t) }; return o.sortedIndex(this.models, e, i, n) },
            pluck: function (e) { return o.invoke(this.models, "get", e) },
            fetch: function (e) {
                e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    n = this;
                return e.success = function (i) {
                    var r = e.reset ? "reset" : "set";
                    n[r](i, e), t && t(n, i, e), n.trigger("sync", n, i, e)
                }, B(this, e), this.sync("read", this, e)
            },
            create: function (e, t) {
                if (t = t ? o.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var n = this,
                    i = t.success;
                return t.success = function (r) { t.wait && n.add(e, t), i && i(e, r, t) }, e.save(null, t), e
            },
            parse: function (e) { return e },
            clone: function () { return new this.constructor(this.models) },
            _reset: function () { this.length = 0, this.models = [], this._byId = {} },
            _prepareModel: function (e, t) {
                if (e instanceof h) return e.collection || (e.collection = this), e;
                t || (t = {}), t.collection = this;
                var n = new this.model(e, t);
                return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1)
            },
            _removeReference: function (e) { this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this) },
            _onModelEvent: function (e, t, n, i) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        o.each(y, function (e) { g.prototype[e] = function () { var t = a.call(arguments); return t.unshift(this.models), o[e].apply(o, t) } });
        var A = ["groupBy", "countBy", "sortBy"];
        o.each(A, function (e) {
            g.prototype[e] = function (t, n) {
                var i = o.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
                return o[e](this.models, i, n)
            }
        });
        var w = e.View = function (e) { this.cid = o.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents() },
            T = /^(\S+)\s*(.*)$/,
            C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        o.extend(w.prototype, c, {
            tagName: "div",
            $: function (e) { return this.$el.find(e) },
            initialize: function () {},
            render: function () { return this },
            remove: function () { return this.$el.remove(), this.stopListening(), this },
            setElement: function (t, n) { return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this },
            delegateEvents: function (e) {
                if (!e && !(e = o.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    if (o.isFunction(n) || (n = this[e[t]]), n) {
                        var i = t.match(T),
                            r = i[1],
                            a = i[2];
                        n = o.bind(n, this), r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, n) : this.$el.on(r, a, n)
                    }
                }
                return this
            },
            undelegateEvents: function () { return this.$el.off(".delegateEvents" + this.cid), this },
            _configure: function (e) { this.options && (e = o.extend({}, o.result(this, "options"), e)), o.extend(this, o.pick(e, C)), this.options = e },
            _ensureElement: function () {
                if (this.el) this.setElement(o.result(this, "el"), !1);
                else {
                    var t = o.extend({}, o.result(this, "attributes"));
                    this.id && (t.id = o.result(this, "id")), this.className && (t["class"] = o.result(this, "className"));
                    var n = e.$("<" + o.result(this, "tagName") + ">").attr(t);
                    this.setElement(n, !1)
                }
            }
        }), e.sync = function (t, n, i) {
            var r = x[t];
            o.defaults(i || (i = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });
            var a = { type: r, dataType: "json" };
            if (i.url || (a.url = o.result(n, "url") || z()), null != i.data || !n || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || n.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? { model: a.data } : {}), i.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                a.type = "POST", i.emulateJSON && (a.data._method = r);
                var s = i.beforeSend;
                i.beforeSend = function (e) { return e.setRequestHeader("X-HTTP-Method-Override", r), s ? s.apply(this, arguments) : void 0 }
            }
            "GET" === a.type || i.emulateJSON || (a.processData = !1), "PATCH" !== a.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (a.xhr = function () { return new ActiveXObject("Microsoft.XMLHTTP") });
            var c = i.xhr = e.ajax(o.extend(a, i));
            return n.trigger("request", n, c, i), c
        };
        var x = { create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET" };
        e.ajax = function () { return e.$.ajax.apply(e.$, arguments) };
        var M = e.Router = function (e) { e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments) },
            _ = /\((.*?)\)/g,
            S = /(\(\?)?:\w+/g,
            k = /\*\w+/g,
            E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        o.extend(M.prototype, c, {
            initialize: function () {},
            route: function (t, n, i) {
                o.isRegExp(t) || (t = this._routeToRegExp(t)), o.isFunction(n) && (i = n, n = ""), i || (i = this[n]);
                var r = this;
                return e.history.route(t, function (a) {
                    var s = r._extractParameters(t, a);
                    i && i.apply(r, s), r.trigger.apply(r, ["route:" + n].concat(s)), r.trigger("route", n, s), e.history.trigger("route", r, n, s)
                }), this
            },
            navigate: function (t, n) { return e.history.navigate(t, n), this },
            _bindRoutes: function () { if (this.routes) { this.routes = o.result(this, "routes"); for (var e, t = o.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e]) } },
            _routeToRegExp: function (e) { return e = e.replace(E, "\\$&").replace(_, "(?:$1)?").replace(S, function (e, t) { return t ? e : "([^/]+)" }).replace(k, "(.*?)"), new RegExp("^" + e + "$") },
            _extractParameters: function (e, t) { var n = e.exec(t).slice(1); return o.map(n, function (e) { return e ? decodeURIComponent(e) : null }) }
        });
        var D = e.History = function () { this.handlers = [], o.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history) },
            N = /^[#\/]|\s+$/g,
            P = /^\/+|\/+$/g,
            j = /msie [\w.]+/,
            I = /\/$/;
        D.started = !1, o.extend(D.prototype, c, {
            interval: 50,
            getHash: function (e) { var t = (e || this).location.href.match(/#(.*)$/); return t ? t[1] : "" },
            getFragment: function (e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = this.location.pathname;
                        var n = this.root.replace(I, "");
                        e.indexOf(n) || (e = e.substr(n.length))
                    } else e = this.getHash();
                return e.replace(N, "")
            },
            start: function (t) {
                if (D.started) throw new Error("Backbone.history has already been started");
                D.started = !0, this.options = o.extend({}, { root: "/" }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var n = this.getFragment(),
                    i = document.documentMode,
                    r = j.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                this.root = ("/" + this.root + "/").replace(P, "/"), r && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                var a = this.location,
                    s = a.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && s && a.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment + a.search)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function () { e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), D.started = !1 },
            route: function (e, t) { this.handlers.unshift({ route: e, callback: t }) },
            checkUrl: function () { var e = this.getFragment(); return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void(this.loadUrl() || this.loadUrl(this.getHash()))) },
            loadUrl: function (e) {
                var t = this.fragment = this.getFragment(e),
                    n = o.any(this.handlers, function (e) { return e.route.test(t) ? (e.callback(t), !0) : void 0 });
                return n
            },
            navigate: function (e, t) {
                if (!D.started) return !1;
                if (t && t !== !0 || (t = { trigger: t }), e = this.getFragment(e || ""), this.fragment !== e) {
                    this.fragment = e;
                    var n = this.root + e;
                    if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    t.trigger && this.loadUrl(e)
                }
            },
            _updateHash: function (e, t, n) {
                if (n) {
                    var i = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(i + "#" + t)
                } else e.hash = "#" + t
            }
        }), e.history = new D;
        var O = function (e, t) {
            var n, i = this;
            n = e && o.has(e, "constructor") ? e.constructor : function () { return i.apply(this, arguments) }, o.extend(n, i, t);
            var r = function () { this.constructor = n };
            return r.prototype = i.prototype, n.prototype = new r, e && o.extend(n.prototype, e), n.__super__ = i.prototype, n
        };
        h.extend = g.extend = M.extend = w.extend = D.extend = O;
        var z = function () { throw new Error('A "url" property or function must be specified') },
            B = function (e, t) {
                var n = t.error;
                t.error = function (i) { n && n(e, i, t), e.trigger("error", e, i, t) }
            }
    }.call(this), define("backbone", ["underscore", "jquery"], function (e) { return function () { var t; return t || e.Backbone } }(this));
var jtmgio = jtmgio || {};
jtmgio.app = jtmgio.app || {}, jtmgio.app.helpers = jtmgio.app.helpers || {}, define("helpers/helper.html", ["jquery", "backbone"], function (e) {
    return jtmgio.app.helpers.htmlHelper = {
        bodyscroll: function (t, n) {
            var t = t || 0,
                n = n || "slow";
            return e("html, body").animate({ scrollTop: t }, n), !0
        },
        renderMessage: function (t) { var n, i, r = { type: "info", message: null, parentDiv: "#component-wrapper", messageTimeout: 3e3, errors: null }; if (t = e.extend(r, t), n = e("<p />", { html: t.message }), i = e("<div />", { "class": "jtmgio-msg " + t.type, html: n, css: { display: "none" } }), e(".jtmgio-msg").slideUp("fast").remove(), !t.message) throw "HTML Helper :: renderMessage: This method requires a message"; return t.errors && i.append(e(t.errors)), e(t.parentDiv).prepend(i), i.slideDown(), t.messageTimeout && t.messageTimeout > 0 && setTimeout(function () { t.errors || i.slideUp(function () { i.remove() }) }, t.messageTimeout), this.bodyscroll(), !0 },
        clearRenderMessage: function () { return e(".jtmgio-msg").slideUp("fast"), !0 },
        lightsOut: function (t) {
            var n = this,
                i = e("<h2 />"),
                r = e("<div />", { "class": "jtmgio-modal-lights-out", css: { height: e(window).height() + "px" } }),
                a = e("<div />", { "class": "jtmgio-modal-box" }),
                s = { fadeSpeed: 500, opacity: .7, message: "Please wait while we process your request.", redirect: null, fadeOutSpeed: 3e3, removeModal: !0 };
            return t = e.extend(s, t), a.html(i.text(t.message)), this.clearRenderMessage(), e(".jtmgio-modal-lights-out, .jtmgio-modal-box").remove(), e("body").prepend(r).prepend(a), r.fadeTo(t.fadeSpeed, t.opacity), this.bodyscroll(), setTimeout(function () { a.center({ vertical: !1, horizontal: !0 }).fadeIn() }, 500), setTimeout(function () { t.removeModal ? n.lightsOn(t) : !t.removeModal && t.redirect && (window.location.href = t.redirect) }, t.fadeOutSpeed), e(".jtmgio-modal-lights-out").click(function () { t.removeModal && n.lightsOn(t) }), !0
        },
        lightsOn: function (t) { defaults = { redirect: null }, t = e.extend(defaults, t), e(".jtmgio-modal-box").fadeOut("fast"), e(".jtmgio-modal-lights-out").fadeTo(500, 0, function () { e(".jtmgio-modal-lights-out, .jtmgio-modal-box").remove(), t.redirect && (window.location.href = t.redirect) }) }
    }, jtmgio.app.helpers.htmlHelper
});
var jtmgio = jtmgio || {};
jtmgio.app = jtmgio.app || {}, jtmgio.app.helpers = jtmgio.app.helpers || {}, define("helpers/helper.url", ["jquery", "backbone"], function () {
    return jtmgio.app.helpers.urlHelper = {
        isFrontEnd: function () { var e = "/administrator/"; return -1 == window.location.pathname.indexOf(e) },
        getQueryParamValue: function (e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = "[\\?&]" + e + "=([^&#]*)",
                n = new RegExp(t),
                i = n.exec(window.location.href);
            return null == i ? "" : i[1]
        }
    }, jtmgio.app.helpers.urlHelper
});
var jtmgio = jtmgio || {};
if (jtmgio.app = jtmgio.app || {}, jtmgio.app.configs = jtmgio.app.configs || {}, define("helpers/helper.serverErrors", ["jquery"], function () { var e = { 400: { message: "The request cannot be fulfilled due to bad syntax.", errorType: "Bad Request Error: ", statusCode: "400" }, 401: { message: "The request requires user authentication.", errorType: "Unauthorized Error: ", statusCode: "401" }, 403: { message: "The server understood the request, but is refusing to fulfill it.", errorType: "Forbidden Error: ", statusCode: "403" }, 404: { message: "The server has not found anything matching the Request-URI.", errorType: "Not Found Error: ", statusCode: "404" }, 405: { message: "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.", errorType: "Method Not Found Error: ", statusCode: "405" }, 406: { message: "No acceptable objects were found.", errorType: "Not Acceptable Error: ", statusCode: "406" }, 407: { message: "You must authenticate with a proxy server before this request can be serviced. Please logon to your proxy server and then try again.", errorType: "Proxy Authentication Required Error: ", statusCode: "407" }, 408: { message: "The request has timed out.", errorType: "Request Timeout Error: ", statusCode: "408" }, 500: { message: "The server encountered an unexpected condition which prevented it from fulfilling the request. ", errorType: "Internal Server Error: ", statusCode: "500" }, 501: { message: "The server does not support the functionality required to fulfill the request.", errorType: "Not Implemented Error: ", statusCode: "501" }, 502: { message: "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.", errorType: "Bad Gateway Error: ", statusCode: "502" }, 503: { message: "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. ", errorType: "Service Unavailable Error: ", statusCode: "503" }, 504: { message: "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request.", errorType: "Gateway Timeout Error: ", statusCode: "504" }, unknown: { message: "There was an unknown error while processing this request, please try again. If this error persist, please contact your site administrator.", errorType: "Unknown Server Error: ", statusCode: "Unknown" } }; return jtmgio.app.configs.errorHandler = { getError: function (t) { if (!t) throw "ErrorHandler :: getError - Needs to provide an error type"; return e.hasOwnProperty(t) ? e[t] : t.unknown } }, jtmgio.app.configs.errorHandler }), define("base/Router", ["jquery", "underscore", "backbone", "helpers/helper.html", "helpers/helper.url", "helpers/helper.serverErrors"], function (e, t, n) { return n.Router.extend({}) }), define("base/View", ["jquery", "underscore", "backbone", "helpers/helper.html", "helpers/helper.url", "helpers/helper.serverErrors"], function (e, t, n, i, r, a) {
        console.log;
        return n.View.prototype.close = function () { this.remove(), this.unbind(), this.onClose && this.onClose() }, n.View.extend({
            close: function () { this.unbind(), this.Vent.off("close:all", this.close), this.remove(), delete this.$el, delete this.el },
            checkRespStatus: function (e) { return 200 != e.status ? (alert("There was a server error: " + e.responseText), !1) : !0 },
            killZombies: function (e) { return e.undelegateEvents(), e.$el.unbind(), e.$el.removeData().unbind(), this },
            destroyView: function (e) { return e.undelegateEvents(), e.$el.removeData().unbind(), e.remove(), n.View.prototype.remove.call(e), delete e.$el, delete e.el, !0 },
            appendViews: function (e, n) { return t.each(e, function (e) { n.append(e.$el) }, this), n },
            compileViews: function (n, i) { var r = e("<div />", { "class": "jtmgio-clear-fix" }); return t.each(t.compact(t.flatten(n)), function (e) { i.append(e.$el.append(r.clone())) }, this), i },
            lazyLoadView: function (e) {
                if (t.isUndefined(e)) throw new Error("Please provide a Parameters Object");
                if (t.isUndefined(e.parentEl)) throw new Error("Please provide a parent dom node");
                if (t.isUndefined(e.viewPath)) throw new Error("Please provide a View");
                if (t.isUndefined(e.vent)) throw new Error("Please provide an Event Dispatcher");
                if (t.isUndefined(e.onAfterLoad || !t.isFunction(e.onAfterLoad))) throw new Error("Please provide an callback On After load");
                var n = (e.options || {}, {}),
                    n = t.extend(n, e.options);
                return n.vent = e.vent, !t.isUndefined(e.onBeforeLoad) && t.isFunction(e.onBeforeLoad) && e.onBeforeLoad(e), require([e.viewPath], function (t) {
                    var t = new t(n);
                    e.onAfterLoad(t, e)
                }), this
            },
            changePropName: function (e) { return t.each(e.options, function (n, i) { t.isUndefined(e[i]) && (e[i] = e.options[i]) }), t.has(e.options, "preLoadedObjs") && t.each(e.options.preLoadedObjs, function (n, i) { t.isUndefined(e[i]) && (e[i] = e.options.preLoadedObjs[i]) }), e },
            removeObjByKey: function (e, n, i) { var r = []; return t.filter(e, function (e) { e[n] != i && r.push(e) }), r },
            changeKey: function (e, t) { for (var n = 0; n < e.length; n++) e[n].name = e[n][t], delete e[n][t]; return e },
            loadCollection: function (e, t) {
                function n(e, t) {
                    var n = a.getError(t.status);
                    i.renderMessage({ message: n.errorType + n.message, type: "error" })
                }

                function r(e) { s = t ? e.at(0) : e }
                var s;
                return t = t || !1, (new e).fetch({ async: !1, success: r, error: n }), s
            },
            object: function (e) {
                if (null == e) return {};
                var t, n = {},
                    i = 0;
                for (i = 0, t = e.length; t > i; i++) n[e[i]] = "";
                return n
            },
            where: function (e, n, i) {
                return t.isEmpty(n) ? i ? null : [] : t[i ? "find" : "filter"](e, function (e) {
                    for (var t in n)
                        if (n[t] !== e[t]) return !1;
                    return !0
                })
            },
            getFormVals: function (n, i) {
                var r = {},
                    a = e(n).parent("form");
                return t.isUndefined(i) || (a = n), e.each(a.find(":input"), function (e, t) { "radio" == t.type && t.checked ? r[t.name] = t.value : "select-one" == t.type ? r[t.name] = t.options[t.selectedIndex].value : "text" == t.type && (r[t.name] = "undefined" == t.value ? 0 : t.value) }), r
            },
            sortObjs: function (e) { return e.sort(function (e, t) { return parseFloat(e.sortOrder) - parseFloat(t.sortOrder) }) }
        })
    }), define("views/MainAppView", ["jquery", "underscore", "backbone", "base/View"], function (e, t, n, i) {
        var r = jtmgio.app.bootstrap,
            a = i.extend({ el: "#app-holder", events: {}, render: function (e) { return this.$el.empty(), this.$el.append(e.$el), this }, close: function () { r.Vent.trigger("close:all") } });
        return a
    }), define("com/modal/modalView", ["base/View"], function (e) {
        var t = t || { removeWhiteOut: function () { jQuery(".whiteout, .msg, .modal, #modal").remove() } },
            n = e.extend({
                tagName: "div",
                id: "modal",
                initialize: function () {
                    _.bindAll(this, "render", "closeModal");
                    var e = this;
                    e = this.changePropName(this), this.render()
                },
                render: function () { return this },
                simpleClose: function (e) { e && e.preventDefault(), t.removeWhiteOut() },
                closeModal: function (e) { _.isUndefined(this.collection) || _.isUndefined(this.collection.reset) || this.collection.reset(), e && e.preventDefault(), t.removeWhiteOut() },
                closeThisModal: function (e, t, n) { _.isUndefined(this.collection) || _.isUndefined(this.collection.reset) || this.collection.reset(), e && e.preventDefault(), jQuery("div." + n).remove(), jQuery("#" + t).remove() },
                startWhiteOut: function () { $("div#component-wrapper").whiteout() }
            });
        return n
    }), define("text", ["module"], function (e) {
        var t, n, i, r, a = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            s = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            o = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            c = "undefined" != typeof location && location.href,
            l = c && location.protocol && location.protocol.replace(/\:/, ""),
            u = c && location.hostname,
            d = c && (location.port || void 0),
            f = [],
            h = e.config && e.config() || {};
        return t = {
            version: "2.0.6",
            strip: function (e) {
                if (e) {
                    e = e.replace(s, "");
                    var t = e.match(o);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function (e) { return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029") },
            createXhr: h.createXhr || function () {
                var e, t, n;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (t = 0; 3 > t; t += 1) { n = a[t]; try { e = new ActiveXObject(n) } catch (i) {} if (e) { a = [n]; break } }
                return e
            },
            parseName: function (e) {
                var t, n, i, r = !1,
                    a = e.indexOf("."),
                    s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== a && (!s || a > 1) ? (t = e.substring(0, a), n = e.substring(a + 1, e.length)) : t = e, i = n || t, a = i.indexOf("!"), -1 !== a && (r = "strip" === i.substring(a + 1), i = i.substring(0, a), n ? n = i : t = i), { moduleName: t, ext: n, strip: r }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function (e, n, i, r) { var a, s, o, c = t.xdRegExp.exec(e); return c ? (a = c[2], s = c[3], s = s.split(":"), o = s[1], s = s[0], !(a && a !== n || s && s.toLowerCase() !== i.toLowerCase() || (o || s) && o !== r)) : !0 },
            finishLoad: function (e, n, i, r) { i = n ? t.strip(i) : i, h.isBuild && (f[e] = i), r(i) },
            load: function (e, n, i, r) {
                if (r.isBuild && !r.inlineText) return void i();
                h.isBuild = r.isBuild;
                var a = t.parseName(e),
                    s = a.moduleName + (a.ext ? "." + a.ext : ""),
                    o = n.toUrl(s),
                    f = h.useXhr || t.useXhr;
                !c || f(o, l, u, d) ? t.get(o, function (n) { t.finishLoad(e, a.strip, n, i) }, function (e) { i.error && i.error(e) }) : n([s], function (e) { t.finishLoad(a.moduleName + "." + a.ext, a.strip, e, i) })
            },
            write: function (e, n, i) {
                if (f.hasOwnProperty(n)) {
                    var r = t.jsEscape(f[n]);
                    i.asModule(e + "!" + n, "define(function () { return '" + r + "';});\n")
                }
            },
            writeFile: function (e, n, i, r, a) {
                var s = t.parseName(n),
                    o = s.ext ? "." + s.ext : "",
                    c = s.moduleName + o,
                    l = i.toUrl(s.moduleName + o) + ".js";
                t.load(c, i, function () {
                    var n = function (e) { return r(l, e) };
                    n.asModule = function (e, t) { return r.asModule(e, l, t) }, t.write(e, c, n, a)
                }, a)
            }
        }, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node ? (n = require.nodeRequire("fs"), t.get = function (e, t) {
            var i = n.readFileSync(e, "utf8");
            0 === i.indexOf("﻿") && (i = i.substring(1)), t(i)
        }) : "xhr" === h.env || !h.env && t.createXhr() ? t.get = function (e, n, i, r) {
            var a, s = t.createXhr();
            if (s.open("GET", e, !0), r)
                for (a in r) r.hasOwnProperty(a) && s.setRequestHeader(a.toLowerCase(), r[a]);
            h.onXhr && h.onXhr(s, e), s.onreadystatechange = function () {
                var t, r;
                4 === s.readyState && (t = s.status, t > 399 && 600 > t ? (r = new Error(e + " HTTP status: " + t), r.xhr = s, i(r)) : n(s.responseText), h.onXhrComplete && h.onXhrComplete(s, e))
            }, s.send(null)
        } : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function (e, t) {
            var n, i, r = "utf-8",
                a = new java.io.File(e),
                s = java.lang.System.getProperty("line.separator"),
                o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), r)),
                c = "";
            try {
                for (n = new java.lang.StringBuffer, i = o.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), n.append(i); null !== (i = o.readLine());) n.append(s), n.append(i);
                c = String(n.toString())
            } finally { o.close() }
            t(c)
        } : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, r = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), t.get = function (e, t) {
            var n, a, s = {},
                o = new FileUtils.File(e);
            try { n = i["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream), n.init(o, 1, 0, !1), a = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream), a.init(n, "utf-8", n.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), a.readString(n.available(), s), a.close(), n.close(), t(s.value) } catch (c) { throw new Error((o && o.path || "") + ": " + c) }
        }), t
    }), define("text!com/modal/modalBody.html", [], function () { return '<!-- tet -->\n<div class="modal-interior"><%= content %></div>\n' }), define("text!com/modal/modalFooter.html", [], function () { return '<!-- tet -->\n<div class="modal-footer"><%= content %></div>' }), define("text!com/modal/modalHeader.html", [], function () { return '<!-- tet -->\n<div class="modal-header"><%= content %></div>\n' }), define("text!com/modal/modalBtns.html", [], function () { return '<div class="btn-container">\n	<a id="cancel" class="alt-button red" >Cancel</a> <a id="save" class="alt-button green">Save</a> \n</div>\n<div class="jtmgio-clearfix"></div>' }), define("text!com/modal/simpleModalBtns.html", [], function () { return '<div class="btn-container">\n	<% if(!  _.isEmpty( cancelText ) ){ %>\n		<a id="cancel" class="alt-button red cancel-simple-modal"><%= cancelText %></a> \n	<% } %>\n	<a id="ok" class="alt-button green"><%= confirmText %></a>\n</div>\n<div class="jtmgio-clearfix"></div>\n' }), function (e, t) {
        var n = function () {
            if (void 0 != t.innerWidth) return [t.innerWidth, t.innerHeight];
            var e = document.body,
                n = document.documentElement;
            return [Math.max(n.clientWidth, e.clientWidth), Math.max(n.clientHeight, e.clientHeight)]
        };
        e.fn.center = function (i) {
            var r = e(t),
                a = r.scrollTop();
            return this.each(function () {
                var t = e(this),
                    s = e.extend({ against: "window", top: !1, topPercentage: .5, resize: !0 }, i),
                    o = function () {
                        var e, i, r = s.against;
                        "window" === r ? e = n() : "parent" === r ? (i = t.parent(), e = [i.width(), i.height()], a = 0) : (i = t.parents(r), e = [i.width(), i.height()], a = 0);
                        var o = .5 * (e[0] - t.outerWidth()),
                            c = (e[1] - t.outerHeight()) * s.topPercentage + a;
                        s.top && (c = s.top + a), t.css({ left: o, top: s.top ? s.top : "100px" })
                    };
                o(), s.resize === !0 && r.resize(o)
            })
        }
    }(jQuery, window), define("plugins/jquery/jquery.center", function () {}), define("com/modal/Modal", ["jquery", "underscore", "backbone", "com/modal/modalView", "text!com/modal/modalBody.html", "text!com/modal/modalFooter.html", "text!com/modal/modalHeader.html", "text!com/modal/modalBtns.html", "text!com/modal/simpleModalBtns.html", "plugins/jquery/jquery.center"], function (e, t, n, i, r, a, s, o, c) {
        function l() { e(".whiteout, .msg, .modal, #modal").remove() }
        var u = function (n, u, d, f) {
            function h(e) {
                if (1 == e.length && "simple" == e[0]) return !0;
                if (e.length < 3) throw new Error("Please provide all parameters");
                t.each(e, function (e, n) { if (0 == n && !t.isObject(e)) throw new Error("Please provide a valid Collection"); if (1 == n && !t.isString(e)) throw new Error("Please provide a valid View Path"); if (2 == n && !t.isObject(e)) throw new Error("Please provide a valid Event Object") })
            }

            function p(e) {
                require([T.viewPath], function (t) {
                    var t = new t({ collection: T.collection, vent: T.vent, data: T.data, modal: T });
                    T.view = t, w(t), m(t, e)
                })
            }

            function m(t, n) {
                var i = e(document).height(),
                    r = e(window).width();
                t.$el.addClass("modal"), t.$el.css(t.opts.customStyles), e(t.opts.parent).append(C).append(t.$el.center(t.opts.centerOpts)), e(window).resize(function () { i = e(document).height(), r = e(window).width(), C.css({ width: r, height: i }) }), C.css({ width: r, height: i }), t.opts.whiteOutClass && C.addClass(t.opts.whiteOutClass), C.fadeTo(500, .85, function () { n(t), t.$el.fadeIn() })
            }

            function g(e) {
                if (t.isNull(e.modalOptions.modalBody)) throw new Error("You at least need to provide a body for the modal");
                e.$el.append(t.template(r, { content: e.opts.modalBody || "" }))
            }

            function v(e) { e.$el.append(t.template(s, { content: e.opts.modalHeader || "" })) }

            function b(e) {
                var n = e.opts.modalBtns || o;
                e.$el.append(t.template(a, { content: n }))
            }

            function y(n) { n.$el.wrapInner(e("<div />", { id: "modal-container" })), n.$wrap = n.$("#modal-container"), t.isUndefined(n.onAfterRender) || n.onAfterRender() }

            function A(e, n, i) {
                var r = e.opts.modalBtns || t.template(c, { confirmText: n, cancelText: i });
                e.$el.append(t.template(a, { content: r }))
            }

            function w(e) {
                if (t.isUndefined(e.modalOptions)) throw new Error("Please define Modal Options from with in your modal view.");
                var n = { parent: "body", customStyles: {}, centerOpts: {}, modalBtns: null, modalHeader: null, modalBody: null, modalFooter: null };
                e.opts = e.modalOptions() || {}, t.defaults(e.opts, n)
            }
            h(arguments);
            var T = this,
                C = e("<div />", { "class": "whiteout" }).css("display", "none");
            this.viewPath = u, this.vent = d || jtmgio.app.bootstrap.Vent, this.collection = n, this.data = f || {}, this.view = "";
            var x = { closeOnEscape: !1 };
            return t.extend(x, f), x.closeOnEscape || e(document).keyup(function (e) { 27 == e.keyCode && l() }), this.close = function () { e(".whiteout").remove(), this.vent.off("modal:close"), e(".whiteout, .msg, .modal, #modal").remove(), delete this.view }, this.closeThisModal = function (t) { e("div." + t.whiteOutClass).remove(), e("#" + t.thisModal).remove(), this.vent.off("modal:closethismodal"), this.vent.off("modal:close"), delete this.view }, this.vent.on("modal:close", this.close, this), this.vent.on("modal:closethismodal", this.closeThisModal, this), this.reRenderView = function () {
                var e = this.view;
                e.$el.empty(), e.render(), v(e), g(e), b(e), y(e)
            }, this.createModal = function (e) { return v(e), g(e), b(e), y(e), this }, this.createSimpleModal = function (n, r, a) {
                var s, o, c;
                if (t.isObject(a[3])) {
                    var u = a[3];
                    s = u.confirmText ? u.confirmText : "Ok", o = u.cancelText ? u.cancelText : "Cancel", u.attributes && (c = new i({ attributes: { "class": "form-modal" } }))
                } else c = new i, s = t.isUndefined(a[3]) ? "Ok" : a[3], o = t.isUndefined(a[4]) ? "Cancel" : a[4];
                c.modalOptions = function () { return { modalBody: n, centerOpts: { topPercentage: .3 } } }, w(c), g(c), A(c, s, o), m(c, function () {}), c.$el.center(), e(".cancel-simple-modal").click(function (e) { l(), e.preventDefault() }), e("#ok").click(function (e) {!t.isUndefined(r) && t.isFunction(r) && r(), l(), e.preventDefault() })
            }, this.confirmModal = function () {
                var n, r = arguments[0][1];
                n = new i, n.modalOptions = function () { return { modalHeader: r.modalHeader ? r.modalHeader : "", modalBody: r.msg, centerOpts: { topPercentage: .3 } } }, w(n), r.modalHeader && v(n), g(n), A(n, r.confirmTxt, r.cancelTxt), m(n, function () {}), n.$el.center(), e(".cancel-simple-modal").click(function (e) {!t.isUndefined(r.cancel) && t.isFunction(r.cancel) && r.cancel(), l(), this.vent.off("modal:close"), e.preventDefault() }.bind(this)), e("#ok").click(function (e) {!t.isUndefined(r.success) && t.isFunction(r.success) && r.success(), l(), this.vent.off("modal:close"), e.preventDefault() }.bind(this))
            }, this.action = function (e) { return t.isArray(e) && "createSimpleModal" == e[0] ? T[e[0]](e[1], e[2], e) : "confirmModal" == arguments[0] ? T.confirmModal(arguments) : p(T[e]), this }, this.listActions = function () { t.each(t.functions(T), function (e) { console.log(e) }, this) }, this
        };
        return u
    }), define("views/view.base", ["jquery", "underscore", "backbone", "base/View", "com/modal/Modal"], function (e, t, n, i, r) { var a = jtmgio.app.bootstrap; return i.extend({ createModal: function (e, t, n) { new r(e, t, a.Vent, n).action("createModal") } }) }), define("base/Collection", ["jquery", "underscore", "backbone", "helpers/helper.html", "helpers/helper.url", "helpers/helper.serverErrors"], function (e, t, n) { return n.Collection.extend({ removeObjByKey: function (e, n, i) { var r = []; return t.filter(e, function (e) { e[n] != i && r.push(e) }), r }, changeKey: function (e, t) { for (var n = 0; n < e.length; n++) e[n].name = e[n][t], delete e[n][t]; return e } }) }), define("com/pager/clientPager", ["jquery", "underscore", "backbone", "base/Collection"], function (e, t, n, i) {
        var r = {};
        return n.Paginator = function () {
            return r.clientPager = i.extend({
                isSearching: !1,
                pagerDefaults: { firstPage: 1, currentPage: 1, perPage: 5, totalPages: 0, collectionLoaded: !1, sortField: "id", sortDirection: "ASC", searchLen: 3, runSetup: !1, numberFields: [], resultsHtml: 'of <strong id="totalCount">0</strong>' },
                serverOpts: { error: function () {}, success: function () {}, reset: !0 },
                initialize: function () { return this },
                serverDefaults: {},
                fetchInit: function () { return t.isUndefined(this.prePager) || this.prePager(), t.isUndefined(this.origModels) && (this.origModels = this.models, this.origModelsToJSON = this.toJSON()), this.pageModels(), this },
                getStartStop: function () { var e = this; return { start: (e.currentPage - 1) * e.perPage, stop: function () { return this.start + e.perPage } } },
                getModelDatum: function (e, t) { return e.get(t) },
                filter: function (e) {
                    if (e.length < this.searchLen) return !0;
                    this.isSearching = !0;
                    var n = this,
                        i = this.getStartStop(),
                        r = (new RegExp(e, "gi"), this.origModels.slice()),
                        a = arguments,
                        s = t.filter(r, function (i) {
                            var r = [];
                            return t.each(a, function (t, a) {
                                if (a > 0) {
                                    var s = (n.getModelDatum(i, t).toLowerCase(), n.getModelDatum(i, t).toLowerCase().search(e));
                                    r.push(s > -1 ? !0 : !1)
                                }
                            }), t.compact(r).length ? !0 : !1
                        });
                    return this.models = s.slice(), this.filteredModels = s.slice(), this.sort(), this.setPagerCounts(s), this.reset(this.models.slice(i.start, i.stop())), this.view[this.renderMethod](this), this
                },
                clearFilteredModels: function () { return this.isSearching = !1, this.filteredModels = [], this },
                pageModels: function () {
                    var e = this,
                        n = e.getStartStop();
                    return t.isUndefined(e.origModels) && (e.origModels = e.models), e.models = this.isSearching ? e.filteredModels.slice() : e.origModels.slice(), e.sort(), e.reset(e.models.slice(n.start, n.stop())), this
                },
                setSortField: function (e, t) { return this.sortField = e, this.sortDirection = t, this },
                comparator: function (e) { return e.get(this.sortField).toString().toLowerCase() },
                sortBy: function (e, n) {
                    var i = this.models,
                        r = this,
                        a = this.sortDirection;
                    return t.pluck(t.map(i, function (t, i, r) { return { value: t, index: i, criteria: e.call(n, t, i, r) } }).sort(function (e, n) {
                        var i = "ASC" === a ? e.criteria : n.criteria,
                            s = "ASC" === a ? n.criteria : e.criteria;
                        if (t.indexOf(r.numberFields, r.sortField) > -1 && (i = parseFloat(i), s = parseFloat(s)), i !== s) { if (i > s || void 0 === i) return 1; if (s > i || void 0 === s) return -1 }
                        return e.index < n.index ? -1 : 1
                    }), "value")
                },
                getResultsHtml: function () { return this.resultsHtml },
                goTo: function (e) { var t = this; return this.currentPage = e, this.pageModels(), this.setPagerCounts(this.isSearching ? this.filteredModels : this.origModels), this.pager({ view: t.serverParams.view, successCallback: t.serverParams.viewCallback }), this },
                requestPreviousPage: function () { var e = this; return e.currentPage - 1 > 0 && e.currentPage--, this.pageModels(), this.pager({ view: e.serverParams.view, successCallback: e.serverParams.viewCallback }), this },
                requestNextPage: function () { var e = this; return e.currentPage + 1 <= e.totalPages && e.currentPage++, this.pageModels(), this.pager({ view: e.serverParams.view, successCallback: e.serverParams.viewCallback }), this },
                setDefaults: function () {
                    var e = this,
                        n = t.defaults(this.pagerSetup, this.pagerDefaults);
                    return t.defaults(this, n), this.serverParams.success = function (t) { e.setPageCounts(), e.fetchInit(), e.serverParams.viewCallback(t) }, this
                },
                setPageCounts: function () { this.totalPages = Math.ceil(this.length / this.perPage), this.origLength = this.length },
                pager: function (e) { var n = this; return this.view = this.view || e.view, this.successCallback = this.successCallback || e.successCallback, this.renderMethod = this.renderMethod || e.renderMethod || "render", this.serverParams = { viewCallback: this.successCallback || function () {}, view: this.view || {} }, this.setDefaults(), this.runSetup && (n.setPageCounts(), this.runSetup = !1), this.collectionLoaded ? e.sortName ? (this.sortField = e.sortName || this.pagerDefaults.sortField, this.sortDirection = e.sortDirection.toUpperCase() || this.pagerDefaults.sortDirection, this.goTo(1)) : (this.pageModels(), this.setPagerCounts(this.origModels), this.view[this.renderMethod](this)) : (this.fetch(this.serverParams).always(function (n, i, r) { t.isUndefined(e.getXhr) || e.getXhr(n, i, r) }), this.collectionLoaded = !0), this },
                getCurrentPage: function () { return this.currentPage },
                getTotalPages: function () {
                    return this.totalPages
                },
                setPagerCounts: function (e) { return this.totalPages = Math.ceil(e.length / this.perPage), this },
                getOriginalLength: function () { return this.origModels.length },
                getOriginalModels: function () { return this.origModels.slice() },
                getFilteredLength: function () { return this.filteredModels.length },
                clearFilter: function () {
                    var e = this;
                    this.isSearching = !1, this.setPagerCounts(this.origModels).pager({ view: e.serverParams.view, successCallback: e.serverParams.viewCallback })
                }
            }), r
        }, new n.Paginator
    }), define("com/table/collections/TableClientCollection", ["jquery", "underscore", "backbone", "com/pager/clientPager"], function (e, t, n, i) {
        return i.clientPager.extend({
            createColumns: function (e) {
                var n = { model: "", addTagColumn: !1, tagTemplate: "" },
                    i = {},
                    r = this.toJSON()[0] || { columnData: {} },
                    a = r.columnData;
                return t.defaults(e, n), e.addTagColumn && (i.tagrow = e.tagTemplate), t.each(a, function (e) { i[e.id] = function (n) { return t.where(n.get("columnData"), { id: e.id })[0].value } }, this), i
            }
        })
    }), define("collections/FrmListTable", ["jquery", "underscore", "backbone", "com/table/collections/TableClientCollection"], function (e, t, n, i) { var r = (jtmgio.app.bootstrap, i.extend({ url: function () { return "/form/form" }, pagerSetup: { firstPage: 1, currentPage: 1, perPage: 25, searchLen: 1, sortField: "name", sortDirection: "ASC" }, serverDefaults: { success: function () {} }, getModelDatum: function (e, n) { var i = { name: t.isNull(e.get("name")) ? "" : e.get("name"), id: t.isNull(e.get("id")) ? "" : e.get("id"), submissionCount: t.isNull(e.get("submissionCount")) ? "" : e.get("submissionCount") }; return i[n].toString() }, comparator: function (e) { var n = { name: t.isNull(e.get("name")) ? "" : e.get("name"), id: t.isNull(e.get("id")) ? "" : e.get("id"), submissionCount: t.isNull(e.get("submissionCount")) ? "" : e.get("submissionCount") }; return "submissionCount" == this.sortField ? n[this.sortField] : n[this.sortField].toString().toLowerCase() } })); return r }), define("text!templates/frmListActions.html", [], function () { return '<% if( ! model.anonymous ) { %>\n<a data-id="<%= model.id %>" class="take-frm" href="">Take this form</a>\n<% } else { %>\n<span class="low" title="This is an anonymous form.">Take this form</span>\n<% } %> |\n<a data-id="<%= model.id %>" href="/administrator/index.php?option=com_jtmgioform&view=formbuilder&id=<%= model.id %>">Edit</a> |\n<a data-id="<%= model.id %>" class="copy-frm" href="">Copy</a> |\n<% if( model.canDelete ) { %>\n<a data-id="<%= model.id %>" class="delete-frm" href="">Delete</a>\n<% } else { %>\n<span class="low" title="This form has<% if( model.submissionCount == 0 ) { %> deleted<% } %> submissions and is no longer eligible for deletion.">Delete</span>\n<% } %>\n' }), define("configs/config.frmList", ["jquery", "underscore", "text!templates/frmListActions.html"], function (e, t, n) {
        var i = (jtmgio.app.bootstrap, {
            pager: !0,
            tableID: "formList" + t.random(0, 5e5),
            truncateCells: { events: !1 },
            headerMap: { name: function () { return { cellText: "Name", sortColumn: !0 } }, id: function () { return { cellText: "Form ID", sortColumn: !0 } }, submissionCount: function () { return { cellText: "Form Submissions", sortColumn: !0 } }, events: function () { return { cellText: "Event Registrants", sortColumn: !1 } }, published: function () { return { cellText: "Published", sortColumn: !1 } }, actions: function () { return { cellText: "Actions", sortColumn: !1 } } },
            columns: {
                name: function (e) { return e.get("name") },
                id: function (e, t) { return t.css({ "max-width": "150px", width: "150px" }), e.get("id") },
                submissionCount: function (t, n) { n.css({ "max-width": "150px", width: "150px" }); var i, r = t.get("submissionCount"); return i = t.get("canDelete") ? r : e("<a />", { href: "#submissions/" + t.get("id"), text: t.get("submissionCount") }) },
                events: function (e) { var n = '<a class="show-registrants" href="#registrants/<%= id %>/<%= events[ 0 ].sectionId %>" data-id="<%=id%>">View Registrants</a>'; return t.isNull(e.get("events")) ? "" : t.template(n, e.toJSON()) },
                published: function (e) {
                    var n = e.get("published"),
                        i = e.get("id"),
                        r = n ? "Published" : "Unpublished",
                        a = '                        <a data-id="<%= id %>" data-published="<%= published %>" href="" class="publish-form <%= publishedString.toLowerCase() %>"><%= publishedString %></a>';
                    return t.template(a, { publishedString: r, id: i, published: n })
                },
                actions: function (e, i) { return i.addClass("actions-cell"), i.css({ "max-width": "220px", width: "220px" }), t.template(n, { model: e.toJSON() }) }
            }
        });
        return i
    }), define("text!com/table/templates/incelledit-text.html", [], function () { return '<div class="in-cell-edits-wrapper">\n    <input type="text" class="in-cell-edits-text" value="<%= value %>"\n        <% if( maxlength && maxlength > 0 ) { %>maxlength="<%= maxlength %>"<% } %>\n    />\n    <div class="in-cell-buttons"><i id="save" class="icon-ok"></i><i id="cancel" class="icon-remove"></i></div>\n</div>\n' }), define("text!com/table/templates/tooltip.html", [], function () { return '<div class="tooltip-container">\n	<div><span><%= truncate %></span></div>\n	<div class="tooltip">\n		<p><%= all %></p>\n		<div class="tooltip-arrow"></div>\n	</div>\n</div>\n' }), function (e) {
        e.fn.hoverIntent = function (t, n) {
            var i = { sensitivity: 7, interval: 100, timeout: 0 };
            i = e.extend(i, n ? { over: t, out: n } : t);
            var r, a, s, o, c = function (e) { r = e.pageX, a = e.pageY },
                l = function (t, n) { return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(s - r) + Math.abs(o - a) < i.sensitivity ? (e(n).unbind("mousemove", c), n.hoverIntent_s = 1, i.over.apply(n, [t])) : (s = r, o = a, n.hoverIntent_t = setTimeout(function () { l(t, n) }, i.interval), void 0) },
                u = function (e, t) { return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, i.out.apply(t, [e]) },
                d = function (t) {
                    var n = jQuery.extend({}, t),
                        r = this;
                    r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t)), "mouseenter" == t.type ? (s = n.pageX, o = n.pageY, e(r).bind("mousemove", c), 1 != r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () { l(n, r) }, i.interval))) : (e(r).unbind("mousemove", c), 1 == r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () { u(n, r) }, i.timeout)))
                };
            return this.bind("mouseenter", d).bind("mouseleave", d)
        }
    }(jQuery), define("plugins/jquery/jquery.hoverIntent.min", function () {}), define("com/table/views/mainTableView", ["jquery", "underscore", "backbone", "base/View", "com/modal/modalView", "text!com/table/templates/incelledit-text.html", "text!com/table/templates/tooltip.html", "plugins/jquery/jquery.hoverIntent.min"], function (e, t, n, i, r, a) {
        {
            var s, o, c, l = i.extend({ tagName: "table", className: "table-component jtmgio-formatted-table jtmgio-ui-component jtmgio-table-sortable", initialize: function () { t.bindAll(this, "createTable"), o = this.options.config, s = this.options.config.headerMap, _COLUMNS = this.options.config.columns, c = this.options.vent || null }, render: function () { var e = { thead: new u({ collection: this.collection }), tbody: new h({ collection: this.collection }), tfoot: new g }; return o.sortable && this.$el.addClass("jtmgio-table-sortable"), this.$el.attr("id", o.tableID), this.createTable(e), this }, createTable: function (e) { t.each(e, function (e) { this.$el.append(e.$el) }, this) } }),
                u = n.View.extend({ tagName: "thead", className: "jtmgio-thead", initialize: function () { t.bindAll(this, "render"), this.render() }, render: function () { var e = new d({ collection: this.collection }); return this.$el.html(e.$el) } }),
                d = n.View.extend({
                    tagName: "tr",
                    className: "jtmgio-head-row",
                    events: { "click th": "sortBy" },
                    initialize: function () { this.sortingMap = [], this.render() },
                    render: function () {
                        var n, i = function (i, r, a, o) {
                            var c, l = new f({ sortName: i, colData: n }),
                                u = "icon-asc",
                                d = "asc",
                                h = {};
                            n = s[i](r.collection, l.$el), ("tagrow" == i || 0 == a && !o) && l.$el.addClass("first"), c = t.isObject(n) ? n.cellText : n, r.$el.append(l.$el.html(c).wrapInner("<span />").wrapInner("<div />")), h = l.$el.data(), h = t.extend(h, { sortName: i, sortDirection: d }), l.$el.data(h), "tagrow" == i && l.$el.addClass("checkbox"), t.isObject(n) && n.sortColumn ? (l.$el.find("span").append(e('<i class="sort sort-default" />')), r.collection.sorterBy && r.collection.sorterBy == i && (d = r.collection.sortDirection.toLowerCase(), u = "asc" == r.collection.sortDirection.toLowerCase() ? "sort sort-asc" : "sort sort-desc", l.$el.find("i").removeClass("sort-default"), l.$el.find("i").addClass(u), l.$el.addClass("active")), r.sortingMap.push(i)) : l.$el.addClass("no-state")
                        };
                        return t.isUndefined(s.tagrow) || i("tagrow", this, -1, !0), t.each(t.keys(s), function (e, t) { "tagrow" != e && i(e, this, t, !1) }, this), this
                    },
                    sortBy: function (n) {
                        var i = "",
                            a = e(n.currentTarget);
                        if (!a.hasClass("override-sort")) {
                            var s = a.data("sortName"),
                                o = s == this.collection.sorterBy && "asc" == this.collection.sortDirection.toLowerCase() ? "desc" : "asc";
                            if (-1 == e.inArray(s, this.sortingMap)) return !0;
                            i = new r({ childView: "msgView", methodArgs: { messageType: "default", message: "Please Wait" } }), t.isUndefined(this.collection.args) && (this.collection.args = {}), this.collection.sorterBy = s, this.collection.sortDirection = o, this.collection.args.sortName = s, this.collection.args.sortDirection = o, this.collection.pager(this.collection.args)
                        }
                    }
                }),
                f = n.View.extend({ tagName: "th", className: "jtmgio-th", initialize: function () { t.bindAll(this, "render"), this.render() }, render: function () { return this.$el } }),
                h = n.View.extend({
                    tagName: "tbody",
                    className: "jtmgio-tbody",
                    events: { "click tr": "eventListener" },
                    initialize: function () { t.bindAll(this, "render", "eventListener"), this.render() },
                    render: function () { return this.collection.each(function (e) { this.$el.append(new p({ model: e, collection: this.collection }).$el) }, this), this },
                    eventListener: function (t) {
                        var n = e(t.currentTarget),
                            i = t.type;
                        o.rowEvents && o.rowEvents[i](n, this, t)
                    }
                }),
                p = n.View.extend({
                    tagName: "tr",
                    className: "jtmgio-tr",
                    events: { 'click input[type="checkbox"]': "stopPropagation" },
                    initialize: function () { t.bindAll(this, "render"), this.render(), this.model = t.pick(this.model.toJSON(), t.keys(s)) },
                    render: function () { var n, i = function (i, r) { t.has(_COLUMNS, i) && (td = new m({ collection: r.collection, model: r.model, cell: i }), n = _COLUMNS[i](r.model, td.$el, r.collection), r.$el.append(td.$el.html(n).wrapInner("<div><span></span></div>")).attr("data-model", r.model.cid), o.clickRowId && "tagrow" !== i && td.$el.attr("data-id", r.model.get(o.clickRowId)).attr("title", o.hoverText).addClass(o.dataClass), o.inCellEdits && t.has(o.inCellEdits, i) && (td.$el.addClass("jtmgio-in-cell-edits"), td.$el.find("span").append(e("<i />", { "class": "pencil-icon" }))), "tagrow" == i && td.$el.addClass("checkbox"), t.has(o, "truncateCells") && t.has(o.truncateCells, i) && !o.truncateCells[i] || r.truncateCell(td, i)) }; return t.isUndefined(s.tagrow) || i("tagrow", this), t.each(t.keys(s), function (e) { "tagrow" != e && i(e, this) }, this), this },
                    stopPropagation: function (n) {
                        if ($obj = e(n.currentTarget), $obj.hasClass("stopPropagation")) return !0;
                        if (!t.isNull(c)) {
                            var i = { model: this.model, checkbox: e(n.currentTarget) };
                            c.trigger("tablecomponent:clickedCheckBoxAction", i, this)
                        }
                        n.stopPropagation()
                    },
                    truncateCell: function (e, n) {
                        {
                            var i = e.$el.not(".flyout-trigger, .checkbox, .jtmgio-in-cell-edits, .actions-cell").find("span"),
                                r = i.text().trim(),
                                a = !t.isUndefined(o.truncateCells) && t.has(o.truncateCells, n) ? o.truncateCells[n] : 50;
                            r.substring(0, a) + "..."
                        }
                        a && r.length > a && e.$el.attr("title", r)
                    }
                }),
                m = n.View.extend({
                    tagName: "td",
                    className: "jtmgio-td",
                    events: { click: "inCellEdit" },
                    initialize: function () { this.isInEdit = !1, t.bindAll(this, "render"), this.render() },
                    render: function () { return this },
                    inCellEdit: function () {
                        if (t.has(o.inCellEdits, this.options.cell)) {
                            var e, n = {},
                                i = this;
                            n = { childView: "inlineEditView", methodArgs: { collection: i.collection, model: i.model, cell: i.options.cell, parent: i.$el, config: o.inCellEdits[i.options.cell] } }, e = new r(n)
                        }
                    }
                }),
                g = (n.View.extend({
                    tagName: "div",
                    className: "jtmgio-inCellEdits",
                    events: { "click input": "focusOnMe", "click #save": "saveChanges", "click #cancel": "cancelChanges" },
                    saveChanges: function (t) {
                        var n = e(t.currentTarget),
                            i = n.parents("div.in-cell-edits-wrapper").find("input").val(),
                            r = this;
                        this.$el.parent("td").empty().html(e("<span />", { text: r.cellConfig.callback(r.collection, r.model, r.$el, i) })).append(e("<i />", { "class": "icon-edit" }))
                    },
                    cancelChanges: function (t) {
                        var n = (e(t.currentTarget), this);
                        this.$el.parent("td").empty().html(e("<span />", { text: n.cellConfig.cancelCallback(n.collection, n.model, n.$el) })).append(e("<i />", { "class": "icon-edit" }))
                    },
                    focusOnMe: function (t) {
                        var n = e(t.currentTarget);
                        n.focus()
                    },
                    initialize: function () {
                        var e = this.options.parent.find("span").text();
                        this.cellConfig = o.inCellEdits[this.options.cell], this.template = this.getTemplate(e), t.bindAll(this, "render")
                    },
                    render: function () { return this.$el.html(this.template), this },
                    getTemplate: function (e) {
                        switch (this.cellConfig.type) {
                            case "text":
                                return t.template(a, { value: e, maxlength: this.cellConfig.maxlength })
                        }
                    }
                }), n.View.extend({ tagName: "tfoot", className: "jtmgio-tfoot", initialize: function () { t.bindAll(this, "render"), this.render() }, render: function () { return this } }));
            n.View.extend({ tagName: "tr", className: "jtmgio-tr", initialize: function () { t.bindAll(this, "render"), this.render(), this.model = t.pick(this.model.toJSON(), t.keys(s)) }, render: function () { return this } }), n.View.extend({ tagName: "td", className: "jtmgio-td", initialize: function () { t.bindAll(this, "render"), this.render() }, render: function () { return this } })
        }
        return l
    }), define("text!com/table/templates/searcher.html", [], function () { return '<ul>\n	<li><span><input name="filter" id="filter" class="jtmgio-filter" placeholder="<%=defaultSearchText%>" value="" type="text" /></span></li>\n	<li><a class="btn btn-small search-btn" href="#"><i class="icon-search"></i></a></li>\n</ul>\n' }), define("com/table/views/mainButtonView", ["jquery", "underscore", "backbone", "text!com/table/templates/searcher.html"], function (e, t, n, i) {
        var r, a, s = n.View.extend({
                tagName: "section",
                id: "button-bar",
                className: "",
                initialize: function () { t.bindAll(this, "render"), a = this.options.config, r = this.options.config.buttonsMap },
                render: function () {
                    var t = { list: new o({ collection: this.options.collection }) },
                        n = e('<div class="button-bar-item" />');
                    return n.append(t.list.$el), this.$el.html(n), a.searchable && this.$el.append(new f({ collection: this.options.collection }).$el), this
                }
            }),
            o = n.View.extend({
                tagName: "ul",
                initialize: function () { t.bindAll(this, "render"), this.render() },
                render: function () {
                    return t.each(r, function (e, n) {
                        var i = Object.keys(e).length,
                            a = 1;
                        e.text && (i -= 1, this.$el.append(new d({ text: e.text }).$el)), t.each(e, function (e, t) { "text" != t && (this.$el.append(new c({ button: e, index: a, objlen: i, collection: this.options.collection }).$el), a++) }, this), a = 1, r.length - 1 != n && this.$el.append((new l).$el)
                    }, this), this.$el.wrap('<div class="button-bar-item" />'), this
                }
            }),
            c = n.View.extend({ tagName: "li", className: "jtmgio-button-wrap", initialize: function () { t.bindAll(this, "render"), this.button = this.options.button, this.i = this.options.index, this.objLen = this.options.objlen, this.render() }, render: function () { return console.log(this.i, this.objLen), this.$el.addClass(1 == this.i && 1 != this.objLen ? "pill first" : this.i == this.objLen && 1 != this.objLen ? "pill last " : 1 == this.objLen ? "alone" : "pill middle"), this.$el.html(new u({ button: this.button, collection: this.options.collection }).$el), this } }),
            l = n.View.extend({ tagName: "li", className: "jtmgio-button-spacer", initialize: function () { t.bindAll(this, "render") }, render: function () { return this } }),
            u = n.View.extend({
                tagName: "a",
                className: "btn",
                events: { click: "eventListener" },
                initialize: function () { t.bindAll(this, "render", "eventListener"), this.button = this.options.button, this.render() },
                render: function () { return this.$el.text(this.button.text), t.isUndefined(this.button.attrs["class"]) ? this.button.attrs["class"] = "btn btn-small" : this.button.attrs["class"] += " btn btn-small", this.$el.attr(this.button.attrs), this.$el.wrapInner("<span />"), this },
                eventListener: function (t) {
                    {
                        var n = e(t.currentTarget);
                        t.type
                    }
                    this.button.callback(n, this, t, this.options.collection)
                }
            }),
            d = n.View.extend({ tagName: "li", className: "jtmgio-button-group-label", initialize: function () { t.bindAll(this, "render"), this.text = this.options.text, this.render() }, render: function () { return this.$el.html("<span>" + this.text + "</span>"), this } }),
            f = n.View.extend({
                className: "button-bar-item right",
                events: { "click .jtmgio-com-search-table": "searchTable", 'focus input[ type="text" ]': "focus", 'blur  input[ type="text" ]': "blur", "click .jtmgio-clear-search": "clearSearch", 'keypress input[ type="text" ]': "keyPressSearch" },
                initialize: function () { t.bindAll(this, "render"), this.template = t.template(i, { defaultSearchText: a.defaultSearchText || "Search" }), this.render() },
                render: function () {
                    this.$el.html(this.template);
                    var e = this.collection.getSearchTerm();
                    if (e) {
                        var t = this.$el.find('input[ type="text" ]');
                        t.val(e), this.$el.find("i").show()
                    }
                    return this
                },
                keyPressSearch: function (t) {
                    if (13 == t.which) {
                        var n = e(t.currentTarget),
                            i = n.val(),
                            r = { term: i };
                        this.collection.searchTable(r, this.collection.resetButtons(this.collection))
                    }
                },
                searchTable: function (t) {
                    var n = e(t.currentTarget),
                        i = n.parents("ul").find('input[ type="text" ]').val();
                    i == a.defaultSearchText && (i = "");
                    var r = { term: i };
                    this.collection.searchTable(r, this.collection.resetButtons(this.collection)), t.preventDefault()
                },
                focus: function (t) {
                    var n = (a.defaultSearchText || "", e(t.currentTarget));
                    n.css("color", "#333"), n.val() == a.defaultSearchText && n.val("")
                },
                blur: function (t) {
                    var n = a.defaultSearchText || "",
                        i = e(t.currentTarget);
                    "" == i.val() && (i.val(n), i.css("color", "#CCC"))
                },
                clearSearch: function (e) { this.collection.clearSearch(), e.preventDefault() }
            });
        return s
    }), define("com/table/views/mainBarView", ["jquery", "underscore", "backbone", "base/View"], function (e, t, n, i) {
        var r, a, s = i.extend({
            tagName: "section",
            className: "bar-section",
            initialize: function () { t.bindAll(this, "render"), a = this.options.config, r = this.options.config.buttonsMap },
            render: function () {
                var n = this.changePropName(this),
                    i = e('<div class="bar-item" />');
                return t.each(n.views, function (e) { i.append(e.render().$el) }, this), i.append(e("<div />", { "class": "jtmgio-clearfix" })), this.$el.html(i), this
            }
        });
        return s
    }), define("text!com/pager/pager.html", [], function () { return '<div class="pager-btn-container">\n	<div class="per-page">\n	<p>\n		<select name="perPage" id="perPage">\n			<option value="5">5</option>\n			<option value="10">10</option>\n			<option value="25">25</option>\n			<option value="50">50</option>\n			<option value="100">100</option>\n		</select>\n			Per Page <%=resultsHtml%>\n	</p>\n	</div>\n	<div class="go-to-page">\n		<div class="go-to-page-frm">\n			<p>\n			Page\n                <select name="goToPage" id="goToPage">\n                   <%for( var i = 1; i <= totalPages; i++ )\n                    { %>\n                        <option value="<%= i %>" <% if( i == currentPage ){ %> selected <% } %>><%= i %></option>\n                   <% } %>\n\n			    </select> of <strong id="totalpages">1</strong>\n			</p>\n		</div>\n		<div class="button-group">\n			<p>\n			<a id="first" style="margin-left:10px;" class="gen-button first">First</a><a id="prev" class="gen-button">Previous</a><a id="next" class="gen-button">Next</a><a id="last" class="gen-button last">Last</a>\n			</p>\n		</div>\n	</div>\n</div>\n' }), define("com/pager/pagerView", ["jquery", "underscore", "backbone", "text!com/pager/pager.html"], function (e, t, n, i) {
        var r = n.View.extend({
            tagName: "div",
            className: "jtmgio-pager",
            attributes: function () { return { id: this.options.config.tableID + "_pager" } },
            events: { "click #prev": "previous", "click #next": "next", "click #last": "last", "click #first": "first", "change #perPage": "perPage", "change #goToPage": "goToPage" },
            initialize: function () { t.bindAll(this, "render"), this.template = t.template(i, { totalPages: this.collection.getTotalPages() || this.collection.totalPages, currentPage: this.collection.getCurrentPage(), resultsHtml: this.collection.getResultsHtml() }) },
            render: function () {
                var t = this.collection.getTotalPages() || this.collection.totalPages,
                    n = this.collection.isSearching ? this.collection.getFilteredLength() : "function" != typeof this.collection.getOriginalLength ? this.collection.count || 0 : this.collection.getOriginalLength();
                if (this.$el.html(this.template), this.$el.find("#totalpages").text(t), this.$el.find("#totalCount").text(n), 0 == t) {
                    var i = e("<option />", { value: 0, text: 0 });
                    i.attr("selected", !0), this.$el.find("#goToPage").append(i)
                }
                return this.$el.find("#perPage").val(this.collection.perPage), this.$el.css("float", "none"), this
            },
            goToPage: function (t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    i = n.find("option:selected").val();
                this.collection.goTo(i)
            },
            previous: function (e) { e.preventDefault(), this.collection.requestPreviousPage() },
            next: function (e) { e.preventDefault(), this.collection.requestNextPage() },
            first: function (e) { e.preventDefault(), this.collection.goTo(this.collection.firstPage) },
            last: function (e) { e.preventDefault(), this.collection.goTo(this.collection.totalPages) },
            perPage: function (t) {
                t.preventDefault();
                var n = e(t.currentTarget),
                    i = n.find("option:selected").val();
                this.collection.perPage = parseInt(i, 10), this.collection.goTo(1), this.collection.totalPages = this.collection.getTotalPages() || this.collection.totalPages, this.$el.find("#totalpages").text(this.collection.getTotalPages() || this.collection.totalPages), e("#perPage").val(i)
            }
        });
        return r
    }), define("com/table/table_component", ["jquery", "underscore", "backbone", "com/table/views/mainTableView", "com/table/views/mainButtonView", "com/table/views/mainBarView", "com/pager/pagerView", "plugins/jquery/jquery.center"], function (e, t, n, i, r, a, s) {
        var o = function (n, o) {
            var o = o;
            return this.version = "1.0", this.buttonsGrp = {}, this.parent = {}, this.config = n || {}, this.vent = {}, this.init = function (n) { if (this.vent = n, t.isUndefined(this.config.tableID)) throw new Error("Please provide a unique ID for the table component"); return t.isUndefined(this.config.duplicate) && (e("table#" + this.config.tableID + ".table-component").remove(), e("div#" + this.config.tableID + "_pager").remove()), this }, this.getConfig = function () { return this.config }, this.getButtonFactory = function () { return this.buttonsGrp || {} }, this.getPagerFactory = function () { return this.pager || {} }, this.getBar = function () { return this.bar || {} }, this.setBar = function (e) { return this.bar = new a({ views: e, config: this.config, collection: o }).render(), this }, this.renderTable = function (n, r) {
                var a = e("<div />", { "class": t.isUndefined(n) ? "" : n }),
                    s = new i({ collection: o, config: this.config, vent: this.vent }).render();
                return this.alterDOMElement(s.$el, a), o.length <= 0 && this.noResults(a), t.isUndefined(r) && this.vent.trigger("tablecomponent:rendertable", o), a
            }, this.noResults = function () {}, this.alterDOMElement = function (t, i) {
                if (this.config.sortableConfig = this.config.sortableConfig || {}, this.config.pagerConfig = this.config.pagerConfig || {}, this.config.inCellEdits = this.config.inCellEdits || {}, i.append(t), n.pager) {
                    var r = new s({ collection: o, config: this.config }).render();
                    this.pager = r
                }
                if (n.buttonBar) { this.buttonFactory() }
                return n.rowSort && (t.find("tbody").sortable({ snap: !0, placeholder: "ui-state-highlight", start: function (t, n) { e(n.helper).addClass("ui-draggable-helper").css("background-color", "#FFF6BF !important") } }), t.find("tbody").disableSelection(), t.find("tbody tr td:first-child").width(40).css("position", "relative"), t.find("tbody tr td:first-child span").prepend(e("<i />", { "class": "icon-resize-vertical sorter-icon" })), t.find("tbody tr td:first-child span input").css({ position: "relative", top: "-1px" }), e(".ui-sortable-helper").css("cursor", "url(https://mail.google.com/mail/images/2/closedhand.cur), auto"), n.rowSortUpdate && t.find("tbody").bind("sortupdate", n.rowSortUpdate)), !0
            }, this.buttonFactory = function () { return this.buttonsGrp = new r({ config: this.config, collection: o }).render(), this.buttonsGrp }, this
        };
        return o
    }), define("text!templates/frmList.html", [], function () { return '<div id="frm-list">\n	<div class="tc">\n		<section class="bar-section">\n			<div class="bar-item">\n				<div class="bar-container">\n					<span class="col">\n						<a href="" id="create-form" class="alt-button green">Create New Form</a>\n					</span>\n				</div>\n			</div>\n			<div class="bar-item">\n				<div class="bar-container push-right">\n				<span class="col">\n					<input id="search-form-input" type="text" placeholder="Search Forms">\n					<a id="search-form" class="gen-button"><i class="icon-search"></i> Search</a>\n					<i id="clear-search" class="fa fa-times-sign clear-search"></i>\n				</span>\n				</div>\n\n			</div>\n			<div class="jtmgio-clearfix"></div>\n		</section>\n	</div>\n	<div id="no-forms" class="jtmgio-msg info jtmgio-hide"><p>There are no forms</p></div>\n</div>\n' }), define("base/Model", ["jquery", "underscore", "backbone", "helpers/helper.html", "helpers/helper.url", "helpers/helper.serverErrors"], function (e, t, n) { return n.Model.extend({ removeObjByKey: function (e, n, i) { var r = []; return t.filter(e, function (e) { e[n] != i && r.push(e) }), r }, changeKey: function (e, t) { for (var n = 0; n < e.length; n++) e[n].name = e[n][t], delete e[n][t]; return e } }) }), define("models/Form", ["jquery", "backbone", "base/Model"], function (e, t, n) { return n.extend({ urlRoot: "/form/form", copyForm: function () { return e.ajax({ url: "/form/form/" + this.get("id") + "/copy", type: "POST", contentType: "application/json", dataType: "json" }) }, publishForm: function (t) { return e.ajax({ url: "/form/form/" + this.get("id") + "/publish", type: "PUT", contentType: "application/json", dataType: "json", data: JSON.stringify({ publish: t }) }) } }) }), define("views/FrmListView", ["jquery", "underscore", "backbone", "views/view.base", "com/modal/Modal", "collections/FrmListTable", "configs/config.frmList", "com/table/table_component", "text!templates/frmList.html", "models/Form"], function (e, t, n, i, r, a, s, o, c, l) {
        var u = jtmgio.app.bootstrap;
        return i.extend({
            initialize: function () { this.changePropName(this), this.Vent = u.Vent, u.Vent.on("close:all", this.close, this), this.searchTerm = "", this.initTable(), this.render() },
            events: { "click #search-form": "searchForm", "keydown #search-form-input": "searchFormByKey", "click #clear-search": "clearFormSearch", "keyup #search-form-input": "keyPressDelete", "click .copy-frm": "copyFrm", "click .delete-frm": "deleteFrm", "click #create-form": "createFrm", "click #possess-profile": "possessProfile", "click .take-frm": "takeFrm", "click .publish-form": "publishFrm", "change .events-list": "navigateToRegistrants" },
            navigateToRegistrants: function (t) {
                var n;
                n = e(t.currentTarget), n.val() > 0 && u.router.navigate("registrants/" + n.data("formid") + "/" + n.val(), { trigger: !0 }), t.preventDefault()
            },
            createFrm: function (e) { this.createModal([], "views/modals/CreateFrmView", {}), e.preventDefault() },
            takeFrm: function (t) {
                var n, i;
                n = e(t.currentTarget).data("id"), i = this.collection.get(n), this.createModal([], "views/modals/modal.takeFrm", { form: i.toJSON() }), t.preventDefault()
            },
            deleteFrm: function (t) {
                var n, i, a, s, o, c, u, d;
                c = this, n = e(t.currentTarget), i = n.data("id"), u = new l({ id: i }), d = this.collection.perPage, a = new r("simple"), s = "Are you sure you want to delete this form?", o = function () { u.destroy().always(function () { c.initTable(), c.collection.perPage = d }) }, a.action(["createSimpleModal", s, o, "Delete"]), t.preventDefault()
            },
            copyFrm: function (t) {
                var n, i, r = this;
                i = e(t.currentTarget), n = new l({ id: i.data("id") }), n.copyForm().always(function () { r.initTable() }), t.preventDefault()
            },
            publishFrm: function (t) {
                var n, i, r, a = this;
                i = e(t.currentTarget), r = i.data("published"), n = new l({ id: i.data("id") }), n.publishForm(!r).always(function () { a.initTable() }), t.preventDefault()
            },
            clearFormSearch: function (e) { this.collection.clearFilter(), this.searchTerm = "", this.$("#search-form-input").val(""), this.$(".clear-search").hide(), this.renderTable(e), e.preventDefault() },
            keyPressDelete: function (e) {
                var n, i, r, a = [8, 46];
                n = this.$("#search-form-input"), i = n.val(), r = e.keyCode || e.which, t.indexOf(a, r) > -1 && 0 === i.length && this.clearFormSearch(e)
            },
            searchFormByKey: function (e) {
                var t, n, i;
                n = this.$("#search-form-input"), i = n.val(), t = e.keyCode || e.which, i.length > 0 && (this.$(".clear-search")[i.length > 0 ? "show" : "hide"](), this.searchTerm = i), i.length > 0 && 13 == t ? this.searchForm(e) : 0 === i.length && 8 == t && (this.collection.clearFilter(), this.searchTerm = "", this.renderTable(e), this.$(".clear-search").hide())
            },
            searchForm: function (e) {
                var t;
                t = this.$("#search-form-input"), this.collection.filter(t.val().toLowerCase(), "name", "id"), this.collection.goTo(1), this.$("#search-form-input").focus(), e.preventDefault()
            },
            render: function () { return this.$el.html(t.template(c, {})), this },
            initTable: function () {
                var e;
                e = this, delete this.collection, this.collection = new a, this.collection.collectionLoaded = !1, this.attrCollectionArgs = { view: e, renderMethod: "renderTable", successCallback: function (t) { e.collection = t, e.renderTable() } }, this.collection.pager(this.attrCollectionArgs)
            },
            renderTable: function () {
                if (this.collection.length > 0) {
                    s.view = this;
                    var t = new o(s, this.collection).init(u.Vent, this.$el);
                    this.$(".frm-table").remove(), this.$(".tc").append(t.renderTable("frm-table")), e("#frm-list").append(t.getPagerFactory().$el), this.$("#no-forms").hide()
                } else this.$(".table-component, .jtmgio-pager").remove(), this.$("#no-forms").show();
                e("#component-wrapper").whiteout("clear")
            }
        })
    }), define("com/pager/pager", ["jquery", "underscore", "backbone", "base/Collection", "plugins/jquery/jquery.center"], function (e, t, n, i) {
        return n.Paginator = function () {
            var n = {};
            return n.version = "0.25", n.requestPager = i.extend({
                isloaded: !1,
                cache: !1,
                bypassFetch: !1,
                init: function () { var e = this; if (this.pagerConfig = this.pagerConfig || {}, this.serverConfig = this.serverConfig || {}, this.serverData = this.serverData || null, t.defaults(e.pagerConfig, { firstPage: 1, currentPage: 1, perPage: 10, totalPages: 0, isSearching: !1, searchId: "", term: null, resultsHtml: 'of <strong id="totalCount">0</strong>' }), t.each(e.pagerConfig, function (n, i) { t.isUndefined(e[i]) && (e[i] = e.pagerConfig[i]) }), t.defaults(e.serverConfig, { timeout: 25e3, cache: !0, type: "GET", format: "json", processData: !1, countAsync: !1 }), !this.serverConfig.resourceUrl && this.serverConfig.resourceCountUrl) throw "Resource URL Required"; return this.serverConfig.countUrl = this.serverConfig.resourceCountUrl, this.isLoaded = !0, this },
                setResourceTotal: function (n) {
                    var i = this,
                        r = "";
                    t.isNull(this.appendedURI) || t.isUndefined(this.appendedURI) || (r = this.appendedURI.indexOf("?") >= 0 ? this.appendedURI : "?id=" + this.appendedURI), this.serverConfig.countUrl = this.serverConfig.countUrl.replace("?&", "?"), this.serverConfig.countUrl = this.serverConfig.countUrl.replace("&&", "?");
                    var a = i.serverConfig.countUrl + r;
                    a = a.replace("?&", "?");
                    var s = { url: a, timeout: 25e3, type: "GET", format: "json", processData: !1, async: i.serverConfig.countAsync, success: function (e) { i.count = parseInt(e, 10), i.totalPages = Math.ceil(i.count / i.perPage) } };
                    t.isUndefined(n) ? e.ajax(s) : (i.count = parseInt(n, 10), i.totalPages = Math.ceil(i.count / i.perPage))
                },
                setServerData: function (e) { return this.serverData = e, this },
                clearServerData: function () { return delete this.serverConfig.data, this.serverData = null, this.serverConfig.processData = !1, this },
                getServerData: function () { return this.serverData },
                pager: function (e, n) {
                    var i = this,
                        e = e || {};
                    return this.bypassFetch ? (this.removeWaitMessage(e), this.callingView[t.isUndefined(e.renderMethod) ? "render" : e.renderMethod](), this.bypassFetch = !1, this) : (t.isUndefined(e.doNotShowWait) && this.displayWaitMessage(e), t.isUndefined(e.customWaitMessage) || e.customWaitMessage(i.callingView), this.constructURL(e), (!this.count || !t.isUndefined(e.resetCount) && e.resetCount) && (this.setResourceTotal(), e.resetCount = !1), this.serverConfig.success = function (r, a, s) {!t.isUndefined(e.callback) && t.isFunction(e.callback) && e.callback(i.callingView, r, s, e), i.callingView[t.isUndefined(e.renderMethod) ? "render" : e.renderMethod](), i.setPagerDropDown(), i.removeWaitMessage(e), t.isFunction(n) && n(i.callingView) }, this.serverData && (this.serverConfig.data = this.serverData, this.serverConfig.processData = !0, this.serverConfig.type = "POST", this.serverConfig.contentType = "application/json"), this.serverConfig.url = this.serverConfig.url.replace("?&", "?"), this.serverConfig.url = this.serverConfig.url.replace("&&", "&"), t.isUndefined(e.doNotFetch) ? setTimeout(function () { i.fetch(i.serverConfig) }, i.serverConfig.countAsync ? 500 : 0) : this.serverConfig.success(this, ""), this)
                },
                removeWaitMessage: function (n) { t.isUndefined(n.keepWhiteOut) && e("div.whiteout, div.jqwhiteout").remove(), e("div.spinner").remove() },
                displayWaitMessage: function (n) {
                    var i = t.isUndefined(n.parent) ? "div#component-wrapper" : n.parent;
                    e.whiteout ? e(i).whiteout(t.isUndefined(n.whiteoutparams) ? {} : n.whiteoutparams) : e(i).prepend(e("<div />", { "class": "whiteout" }).css("opacity", .85)).prepend(e("<div />", { "class": "spinner" }).css({ opacity: 1, position: "absolute", "z-index": 1e4, left: "3%", top: "30%", width: "90%" }).html(e('<img src="/ui-v1/images/jtmgio/hourglass.gif" />')).center())
                },
                searchTable: function (e, t) { return this.currentPage = 1, this.isSearching = !0, this.searchId = "", this.serverConfig.countUrl = this.serverConfig.resourceCountUrl, this.term = e.term, e.searchId && (this.searchId = e.searchId), this.pager({}, t) },
                clearSearch: function (e) {
                    return this.currentPage = 1, this.isSearching = !1, this.searchId = "", this.serverConfig.countUrl = this.serverConfig.resourceCountUrl, this.term = null, this.currentPage = 1, this.perPage = 10, this.pager({}, e)
                },
                getSearchTerm: function () { return this.term },
                setPagerDropDown: function () {
                    var e = this.callingView.$el.find("select#perPage");
                    e.find('option[ value="' + this.perPage + '" ]').attr("selected", "selected")
                },
                constructURL: function (e) {
                    var n = "";
                    t.isNull(this.appendedURI) || t.isUndefined(this.appendedURI) || (n = this.appendedURI.indexOf("?") >= 0 ? this.appendedURI : "?id=" + this.appendedURI);
                    var i = this.serverConfig.resourceUrl + n,
                        r = "&";
                    if (this.perPage > 0 && (r = i.indexOf("?") >= 0 ? "&" : "?", i += r + "pageNum=" + this.currentPage, i += "&pageSize=" + this.perPage), e.sortName ? (r = i.indexOf("?") >= 0 ? "&" : "?", i += r + "sortBy=" + e.sortName, i += "&sortDirection=" + e.sortDirection) : this.defaultSortName && (r = i.indexOf("?") >= 0 ? "&" : "?", i += r + "sortBy=" + this.defaultSortName, this.defaultSortDirection && (i += "&sortDirection=" + this.defaultSortDirection)), this.isSearching)
                        if (r = i.indexOf("?") >= 0 ? "&" : "?", isWhitespace(this.searchId) && !isWhitespace(this.term) && this.getSearchId && (this.searchId = this.getSearchId(this.term)), isWhitespace(this.searchId)) i += r + "searchText=" + this.term;
                        else {
                            i += r + "searchId=" + this.searchId;
                            var a = this.serverConfig.resourceCountUrl,
                                s = a.indexOf("?") >= 0 ? "&" : "?";
                            a += s + "searchId=" + this.searchId, this.serverConfig.countUrl = a
                        }
                    e.data && t.each(e.data, function (e, t) { r = i.indexOf("?") >= 0 ? "&" : "?", i += r + t + "=" + e }), this.args = e, this.serverConfig.url = i
                },
                requestNextPage: function () { return void 0 !== this.currentPage && this.currentPage < this.totalPages ? (this.currentPage += 1, this.pager(this.args)) : void 0 },
                requestPreviousPage: function () { return void 0 !== this.currentPage && this.currentPage > 1 ? (this.currentPage -= 1, this.pager(this.args)) : void 0 },
                goTo: function (e, n) { var i = t.extend(this.args, n); return void 0 !== e ? (this.currentPage = parseInt(e, self.perPage), this.pager(i)) : void 0 },
                appendURIResource: function (e) {
                    if (t.isUndefined(e)) throw new Error("URI is required");
                    this.appendedURI = e
                },
                getResourceCount: function () { return this.count },
                getCurrentPage: function () { return this.currentPage },
                getTotalPages: function () { return Math.ceil(this.count / this.perPage) },
                getResultsHtml: function () { return this.resultsHtml },
                resetButtons: function () {},
                resetCurrentPage: function () { this.currentPage = 1 },
                sortBy: function (e, t, n) {
                    var i = n ? function (t) { return n(t[e]) } : function (t) { return t[e] };
                    return t = [-1, 1][+!!t],
                        function (e, n) { return e = i(e), n = i(n), e = 0 == e.length ? "zzzzzzzzz" : e, n = 0 == n.length ? "zzzzzzzzz" : n, t * ((e > n) - (n > e)) }
                }
            }), n
        }, new n.Paginator
    }), define("com/table/collections/TableCollection", ["jquery", "underscore", "backbone", "com/pager/pager"], function (e, t, n, i) {
        return i.requestPager.extend({
            createColumns: function (e) {
                var n = { model: "", addTagColumn: !1, tagTemplate: "", columnDataId: "id" },
                    i = {},
                    r = this.toJSON()[0] || { columnData: {} },
                    a = r.columnData;
                return t.defaults(e, n), e.addTagColumn && (i.tagrow = e.tagTemplate), t.each(a, function (n) {
                    var r = n[e.columnDataId];
                    i[r] = function (n) { var i = {}; return i[e.columnDataId] = r, t.where(n.get("columnData"), i)[0].value }
                }, this), i
            }
        })
    }), define("models/SubmissionList", ["jquery", "backbone", "base/Model"], function (e, t, n) { return n.extend({}) }), define("collections/SubmissionListTable", ["jquery", "underscore", "backbone", "com/table/collections/TableCollection", "models/SubmissionList"], function (e, t, n, i, r) {
        jtmgio.app.bootstrap;
        resourceUrl = "/form/submission?status=active&formId=", resourceCountUrl = "/form/submission/count?status=active&formId=";
        var a = i.extend({
            model: r,
            serverConfig: { resourceUrl: resourceUrl, resourceCountUrl: resourceCountUrl, countAsync: !0 },
            pagerConfig: { perPage: 10 },
            startPager: function (e) { this.callingView = e, this.init() },
            setFormId: function (e) { this.formId = e, this.serverConfig.resourceUrl = resourceUrl + e, this.serverConfig.resourceCountUrl = resourceCountUrl + e },
            setStatus: function (e) { this.status = e },
            setTagId: function (e) { this.tagId = e, this.updateResourceUrls(e) },
            setSearchTerm: function (e, t, n) {
                var i = "";
                this.searchTerm = e, this.tableFilter = n, e && (i += "&searchText=" + encodeURI(e)), n && "all" != n && (i += "&filter=" + encodeURI(n));
                var r = resourceUrl + this.formId + i;
                this.serverConfig.resourceUrl = this.updateParam(r, "status", t);
                var a = resourceCountUrl + this.formId + i;
                this.serverConfig.resourceCountUrl = this.updateParam(a, "status", t)
            },
            resetResourceUrls: function () { resourceUrl = "/form/submission?status=active&formId=", resourceCountUrl = "/form/submission/count?status=active&formId=", this.serverConfig.resourceUrl = "/form/submission?status=active&formId=" + this.formId, this.serverConfig.resourceCountUrl = "/form/submission/count?status=active&formId=" + this.formId },
            updateResourceUrls: function (e) { resourceUrl = "/form/submission/" + e + "?status=active&formId=", resourceCountUrl = "/form/submission/" + e + "/count?status=active&formId=", this.serverConfig.resourceUrl = "/form/submission/" + e + "?status=" + this.status + "&filter=" + (t.isUndefined(this.tableFilter) ? "" : this.tableFilter) + "&searchText=" + (t.isUndefined(this.searchTerm) ? "" : this.searchTerm) + "&formId=" + this.formId, this.serverConfig.resourceCountUrl = "/form/submission/" + e + "/count?status=" + this.status + "&filter=" + (t.isUndefined(this.tableFilter) ? "" : this.tableFilter) + "&searchText=" + (t.isUndefined(this.searchTerm) ? "" : this.searchTerm) + "&formId=" + this.formId },
            updateParam: function (e, t, n) {
                var i, r = e.indexOf(t + "=");
                if (-1 == r) i = e + t + "=" + n;
                else {
                    r += t.length + 1;
                    var a = r + e.substr(r).indexOf("&");
                    i = e.substr(0, r) + n + e.substr(a)
                }
                return i
            },
            sortField: "submitDate",
            sortDir: "desc",
            sorter: function (e, n) {
                var i = this,
                    r = ["submitDate", "amountPaid", "balance", "invoiceId", "id"];
                this.reset(i.toJSON().sort(i.sortBy(e, "desc" == n.toLowerCase() ? !1 : !0, t.indexOf(r, e) > -1 ? parseFloat : function (e) { return 0 == e.toUpperCase().length ? "zzzzzzzzzzzz" : e.toUpperCase() })))
            },
            tagSubmissions: function (n) { var i = t.isUndefined(n) || t.isEmpty(n) ? [{ formId: parseInt(this.formId) }] : n; return t.isUndefined(this.tagId) ? "" : e.ajax({ url: this.getTagUrl(), type: "POST", data: JSON.stringify(i), contentType: "application/json", dataType: "json" }) },
            untagSubmissions: function (n) {
                var i = t.isUndefined(n) || t.isEmpty(n) || "clear" == n ? [{ formId: parseInt(this.formId) }] : n,
                    r = "clear" == n ? "/form/submission/" + this.tagId + "/tag" : this.getTagUrl();
                return t.isUndefined(this.tagId) ? "" : e.ajax({ url: r, type: "DELETE", data: JSON.stringify(i), contentType: "application/json", dataType: "json" })
            },
            getTagUrl: function () { var e = this.serverConfig.url; return e = -1 == e.indexOf(this.tagId) ? e.replace("?", "/" + this.tagId + "/tag?") : e.replace("?", "/tag?") },
            getTaggedCount: function () { return t.isUndefined(this.tagId) ? 0 : e.ajax({ url: "/form/submission/" + this.tagId + "/tag/count", type: "GET", contentType: "application/json", dataType: "json" }) },
            getTagId: function () { return this.tagId },
            getTaggedEmailSubmissionsCount: function () { return t.isUndefined(this.tagId) ? 0 : e.ajax({ url: "/form/submission-contact/" + this.tagId, type: "POST", contentType: "application/json", dataType: "json" }) }
        });
        return a
    }), define("text!templates/submissionListActions.html", [], function () { return '<% if( !model.deleted ) { %>\n<a data-id="<%= model.id %>" data-applicantCount="<%= model.applicantCount %>" data-registrantCount="<%= model.registrantCount %>" class="delete-submission" href="">Delete</a>\n<% } %>' }), function (e) {
        function t(e, t, n) {
            switch (arguments.length) {
                case 2:
                    return null != e ? e : t;
                case 3:
                    return null != e ? e : null != t ? t : n;
                default:
                    throw new Error("Implement me")
            }
        }

        function n(e, t) { return xt.call(e, t) }

        function i() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } }

        function r(e) { bt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

        function a(e, t) { var n = !0; return f(function () { return n && (r(e), n = !1), t.apply(this, arguments) }, t) }

        function s(e, t) { gn[e] || (r(t), gn[e] = !0) }

        function o(e, t) { return function (n) { return m(e.call(this, n), t) } }

        function c(e, t) { return function (n) { return this.localeData().ordinal(e.call(this, n), t) } }

        function l() {}

        function u(e, t) { t !== !1 && N(e), h(this, e), this._d = new Date(+e._d) }

        function d(e) {
            var t = x(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                a = t.week || 0,
                s = t.day || 0,
                o = t.hour || 0,
                c = t.minute || 0,
                l = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * l + 6e4 * c + 36e5 * o, this._days = +s + 7 * a, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = bt.localeData(), this._bubble()
        }

        function f(e, t) { for (var i in t) n(t, i) && (e[i] = t[i]); return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e }

        function h(e, t) {
            var n, i, r;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), jt.length > 0)
                for (n in jt) i = jt[n], r = t[i], "undefined" != typeof r && (e[i] = r);
            return e
        }

        function p(e) { return 0 > e ? Math.ceil(e) : Math.floor(e) }

        function m(e, t, n) { for (var i = "" + Math.abs(e), r = e >= 0; i.length < t;) i = "0" + i; return (r ? n ? "+" : "" : "-") + i }

        function g(e, t) { var n = { milliseconds: 0, months: 0 }; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

        function v(e, t) { var n; return t = z(t, e), e.isBefore(t) ? n = g(e, t) : (n = g(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n }

        function b(e, t) { return function (n, i) { var r, a; return null === i || isNaN(+i) || (s(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), a = n, n = i, i = a), n = "string" == typeof n ? +n : n, r = bt.duration(n, i), y(this, r, e), this } }

        function y(e, t, n, i) {
            var r = t._milliseconds,
                a = t._days,
                s = t._months;
            i = null == i ? !0 : i, r && e._d.setTime(+e._d + r * n), a && ft(e, "Date", dt(e, "Date") + a * n), s && ut(e, dt(e, "Month") + s * n), i && bt.updateOffset(e, a || s)
        }

        function A(e) { return "[object Array]" === Object.prototype.toString.call(e) }

        function w(e) { return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date }

        function T(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                a = Math.abs(e.length - t.length),
                s = 0;
            for (i = 0; r > i; i++)(n && e[i] !== t[i] || !n && _(e[i]) !== _(t[i])) && s++;
            return s + a
        }

        function C(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = ln[e] || un[t] || t
            }
            return e
        }

        function x(e) { var t, i, r = {}; for (i in e) n(e, i) && (t = C(i), t && (r[t] = e[i])); return r }

        function M(t) {
            var n, i;
            if (0 === t.indexOf("week")) n = 7, i = "day";
            else {
                if (0 !== t.indexOf("month")) return;
                n = 12, i = "month"
            }
            bt[t] = function (r, a) {
                var s, o, c = bt._locale[t],
                    l = [];
                if ("number" == typeof r && (a = r, r = e), o = function (e) { var t = bt().utc().set(i, e); return c.call(bt._locale, t, r || "") }, null != a) return o(a);
                for (s = 0; n > s; s++) l.push(o(s));
                return l
            }
        }

        function _(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function S(e, t) { return new Date(Date.UTC(e, t + 1, 0)).getUTCDate() }

        function k(e, t, n) { return st(bt([e, 11, 31 + t - n]), t, n).week }

        function E(e) { return D(e) ? 366 : 365 }

        function D(e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }

        function N(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[_t] < 0 || e._a[_t] > 11 ? _t : e._a[St] < 1 || e._a[St] > S(e._a[Mt], e._a[_t]) ? St : e._a[kt] < 0 || e._a[kt] > 23 ? kt : e._a[Et] < 0 || e._a[Et] > 59 ? Et : e._a[Dt] < 0 || e._a[Dt] > 59 ? Dt : e._a[Nt] < 0 || e._a[Nt] > 999 ? Nt : -1, e._pf._overflowDayOfYear && (Mt > t || t > St) && (t = St), e._pf.overflow = t)
        }

        function P(e) { return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid }

        function j(e) { return e ? e.toLowerCase().replace("_", "-") : e }

        function I(e) {
            for (var t, n, i, r, a = 0; a < e.length;) {
                for (r = j(e[a]).split("-"), t = r.length, n = j(e[a + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = O(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && T(r, n, !0) >= t - 1) break;
                    t--
                }
                a++
            }
            return null
        }

        function O(e) {
            var t = null;
            if (!Pt[e] && It) try { t = bt.locale(), require("./locale/" + e), bt.locale(t) } catch (n) {}
            return Pt[e]
        }

        function z(e, t) { return t._isUTC ? bt(e).zone(t._offset || 0) : bt(e).local() }

        function B(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

        function L(e) { var t, n, i = e.match(Lt); for (t = 0, n = i.length; n > t; t++) i[t] = mn[i[t]] ? mn[i[t]] : B(i[t]); return function (r) { var a = ""; for (t = 0; n > t; t++) a += i[t] instanceof Function ? i[t].call(r, e) : i[t]; return a } }

        function q(e, t) { return e.isValid() ? (t = R(t, e.localeData()), dn[t] || (dn[t] = L(t)), dn[t](e)) : e.localeData().invalidDate() }

        function R(e, t) {
            function n(e) { return t.longDateFormat(e) || e }
            var i = 5;
            for (qt.lastIndex = 0; i >= 0 && qt.test(e);) e = e.replace(qt, n), qt.lastIndex = 0, i -= 1;
            return e
        }

        function F(e, t) {
            var n, i = t._strict;
            switch (e) {
                case "Q":
                    return Kt;
                case "DDDD":
                    return Zt;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return i ? Qt : $t;
                case "Y":
                case "G":
                case "g":
                    return tn;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return i ? en : Ut;
                case "S":
                    if (i) return Kt;
                case "SS":
                    if (i) return Jt;
                case "SSS":
                    if (i) return Zt;
                case "DDD":
                    return Ft;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Ht;
                case "a":
                case "A":
                    return t._locale._meridiemParse;
                case "X":
                    return Gt;
                case "Z":
                case "ZZ":
                    return Vt;
                case "T":
                    return Yt;
                case "SSSS":
                    return Wt;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return i ? Jt : Rt;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return Rt;
                case "Do":
                    return Xt;
                default:
                    return n = new RegExp(K(X(e.replace("\\", "")), "i"))
            }
        }

        function $(e) {
            e = e || "";
            var t = e.match(Vt) || [],
                n = t[t.length - 1] || [],
                i = (n + "").match(on) || ["-", 0, 0],
                r = +(60 * i[1]) + _(i[2]);
            return "+" === i[0] ? -r : r
        }

        function U(e, t, n) {
            var i, r = n._a;
            switch (e) {
                case "Q":
                    null != t && (r[_t] = 3 * (_(t) - 1));
                    break;
                case "M":
                case "MM":
                    null != t && (r[_t] = _(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    i = n._locale.monthsParse(t), null != i ? r[_t] = i : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (r[St] = _(t));
                    break;
                case "Do":
                    null != t && (r[St] = _(parseInt(t, 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = _(t));
                    break;
                case "YY":
                    r[Mt] = bt.parseTwoDigitYear(t);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    r[Mt] = _(t);
                    break;
                case "a":
                case "A":
                    n._isPm = n._locale.isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    r[kt] = _(t);
                    break;
                case "m":
                case "mm":
                    r[Et] = _(t);
                    break;
                case "s":
                case "ss":
                    r[Dt] = _(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    r[Nt] = _(1e3 * ("0." + t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = $(t);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = _(t));
                    break;
                case "gg":
                case "GG":
                    n._w = n._w || {}, n._w[e] = bt.parseTwoDigitYear(t)
            }
        }

        function W(e) {
            var n, i, r, a, s, o, c;
            n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, o = 4, i = t(n.GG, e._a[Mt], st(bt(), 1, 4).year), r = t(n.W, 1), a = t(n.E, 1)) : (s = e._locale._week.dow, o = e._locale._week.doy, i = t(n.gg, e._a[Mt], st(bt(), s, o).year), r = t(n.w, 1), null != n.d ? (a = n.d, s > a && ++r) : a = null != n.e ? n.e + s : s), c = ot(i, r, a, o, s), e._a[Mt] = c.year, e._dayOfYear = c.dayOfYear
        }

        function H(e) {
            var n, i, r, a, s = [];
            if (!e._d) {
                for (r = Y(e), e._w && null == e._a[St] && null == e._a[_t] && W(e), e._dayOfYear && (a = t(e._a[Mt], r[Mt]), e._dayOfYear > E(a) && (e._pf._overflowDayOfYear = !0), i = nt(a, 0, e._dayOfYear), e._a[_t] = i.getUTCMonth(), e._a[St] = i.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = s[n] = r[n];
                for (; 7 > n; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                e._d = (e._useUTC ? nt : tt).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm)
            }
        }

        function V(e) {
            var t;
            e._d || (t = x(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], H(e))
        }

        function Y(e) { var t = new Date; return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }

        function G(e) {
            if (e._f === bt.ISO_8601) return void Z(e);
            e._a = [], e._pf.empty = !0;
            var t, n, i, r, a, s = "" + e._i,
                o = s.length,
                c = 0;
            for (i = R(e._f, e._locale).match(Lt) || [], t = 0; t < i.length; t++) r = i[t], n = (s.match(F(r, e)) || [])[0], n && (a = s.substr(0, s.indexOf(n)), a.length > 0 && e._pf.unusedInput.push(a), s = s.slice(s.indexOf(n) + n.length), c += n.length), mn[r] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(r), U(r, n, e)) : e._strict && !n && e._pf.unusedTokens.push(r);
            e._pf.charsLeftOver = o - c, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[kt] < 12 && (e._a[kt] += 12), e._isPm === !1 && 12 === e._a[kt] && (e._a[kt] = 0), H(e), N(e)
        }

        function X(e) { return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) { return t || n || i || r }) }

        function K(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

        function J(e) {
            var t, n, r, a, s;
            if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
            for (a = 0; a < e._f.length; a++) s = 0, t = h({}, e), t._pf = i(), t._f = e._f[a], G(t), P(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == r || r > s) && (r = s, n = t));
            f(e, n || t)
        }

        function Z(e) {
            var t, n, i = e._i,
                r = nn.exec(i);
            if (r) {
                for (e._pf.iso = !0, t = 0, n = an.length; n > t; t++)
                    if (an[t][1].exec(i)) { e._f = an[t][0] + (r[6] || " "); break }
                for (t = 0, n = sn.length; n > t; t++)
                    if (sn[t][1].exec(i)) { e._f += sn[t][0]; break }
                i.match(Vt) && (e._f += "Z"), G(e)
            } else e._isValid = !1
        }

        function Q(e) { Z(e), e._isValid === !1 && (delete e._isValid, bt.createFromInputFallback(e)) }

        function et(t) {
            var n, i = t._i;
            i === e ? t._d = new Date : w(i) ? t._d = new Date(+i) : null !== (n = Ot.exec(i)) ? t._d = new Date(+n[1]) : "string" == typeof i ? Q(t) : A(i) ? (t._a = i.slice(0), H(t)) : "object" == typeof i ? V(t) : "number" == typeof i ? t._d = new Date(i) : bt.createFromInputFallback(t)
        }

        function tt(e, t, n, i, r, a, s) { var o = new Date(e, t, n, i, r, a, s); return 1970 > e && o.setFullYear(e), o }

        function nt(e) { var t = new Date(Date.UTC.apply(null, arguments)); return 1970 > e && t.setUTCFullYear(e), t }

        function it(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) { if (e = t.weekdaysParse(e), "number" != typeof e) return null } else e = parseInt(e, 10);
            return e
        }

        function rt(e, t, n, i, r) { return r.relativeTime(t || 1, !!n, e, i) }

        function at(e, t, n) {
            var i = bt.duration(e).abs(),
                r = Ct(i.as("s")),
                a = Ct(i.as("m")),
                s = Ct(i.as("h")),
                o = Ct(i.as("d")),
                c = Ct(i.as("M")),
                l = Ct(i.as("y")),
                u = r < fn.s && ["s", r] || 1 === a && ["m"] || a < fn.m && ["mm", a] || 1 === s && ["h"] || s < fn.h && ["hh", s] || 1 === o && ["d"] || o < fn.d && ["dd", o] || 1 === c && ["M"] || c < fn.M && ["MM", c] || 1 === l && ["y"] || ["yy", l];
            return u[2] = t, u[3] = +e > 0, u[4] = n, rt.apply({}, u)
        }

        function st(e, t, n) {
            var i, r = n - t,
                a = n - e.day();
            return a > r && (a -= 7), r - 7 > a && (a += 7), i = bt(e).add(a, "d"), { week: Math.ceil(i.dayOfYear() / 7), year: i.year() }
        }

        function ot(e, t, n, i, r) { var a, s, o = nt(e, 0, 1).getUTCDay(); return o = 0 === o ? 7 : o, n = null != n ? n : r, a = r - o + (o > i ? 7 : 0) - (r > o ? 7 : 0), s = 7 * (t - 1) + (n - r) + a + 1, { year: s > 0 ? e : e - 1, dayOfYear: s > 0 ? s : E(e - 1) + s } }

        function ct(t) {
            var n = t._i,
                i = t._f;
            return t._locale = t._locale || bt.localeData(t._l), null === n || i === e && "" === n ? bt.invalid({ nullInput: !0 }) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), bt.isMoment(n) ? new u(n, !0) : (i ? A(i) ? J(t) : G(t) : et(t), new u(t)))
        }

        function lt(e, t) { var n, i; if (1 === t.length && A(t[0]) && (t = t[0]), !t.length) return bt(); for (n = t[0], i = 1; i < t.length; ++i) t[i][e](n) && (n = t[i]); return n }

        function ut(e, t) { var n; return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), S(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e) }

        function dt(e, t) { return e._d["get" + (e._isUTC ? "UTC" : "") + t]() }

        function ft(e, t, n) { return "Month" === t ? ut(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n) }

        function ht(e, t) { return function (n) { return null != n ? (ft(this, e, n), bt.updateOffset(this, t), this) : dt(this, e) } }

        function pt(e) { return 400 * e / 146097 }

        function mt(e) { return 146097 * e / 400 }

        function gt(e) { bt.duration.fn[e] = function () { return this._data[e] } }

        function vt(e) { "undefined" == typeof ender && (yt = Tt.moment, Tt.moment = e ? a("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", bt) : bt) }
        for (var bt, yt, At, wt = "2.8.2", Tt = "undefined" != typeof global ? global : this, Ct = Math.round, xt = Object.prototype.hasOwnProperty, Mt = 0, _t = 1, St = 2, kt = 3, Et = 4, Dt = 5, Nt = 6, Pt = {}, jt = [], It = "undefined" != typeof module && module.exports, Ot = /^\/?Date\((\-?\d+)/i, zt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Bt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Lt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, qt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Rt = /\d\d?/, Ft = /\d{1,3}/, $t = /\d{1,4}/, Ut = /[+\-]?\d{1,6}/, Wt = /\d+/, Ht = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vt = /Z|[\+\-]\d\d:?\d\d/gi, Yt = /T/i, Gt = /[\+\-]?\d+(\.\d{1,3})?/, Xt = /\d{1,2}/, Kt = /\d/, Jt = /\d\d/, Zt = /\d{3}/, Qt = /\d{4}/, en = /[+-]?\d{6}/, tn = /[+-]?\d+/, nn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, rn = "YYYY-MM-DDTHH:mm:ssZ", an = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], sn = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], on = /([\+\-]|\d\d)/gi, cn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), ln = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, un = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, dn = {}, fn = { s: 45, m: 45, h: 22, d: 26, M: 11 }, hn = "DDD w W M D d".split(" "), pn = "M D H h m s w W".split(" "), mn = {
                M: function () { return this.month() + 1 },
                MMM: function (e) { return this.localeData().monthsShort(this, e) },
                MMMM: function (e) { return this.localeData().months(this, e) },
                D: function () { return this.date() },
                DDD: function () { return this.dayOfYear() },
                d: function () { return this.day() },
                dd: function (e) { return this.localeData().weekdaysMin(this, e) },
                ddd: function (e) { return this.localeData().weekdaysShort(this, e) },
                dddd: function (e) { return this.localeData().weekdays(this, e) },
                w: function () { return this.week() },
                W: function () { return this.isoWeek() },
                YY: function () { return m(this.year() % 100, 2) },
                YYYY: function () { return m(this.year(), 4) },
                YYYYY: function () { return m(this.year(), 5) },
                YYYYYY: function () {
                    var e = this.year(),
                        t = e >= 0 ? "+" : "-";
                    return t + m(Math.abs(e), 6)
                },
                gg: function () { return m(this.weekYear() % 100, 2) },
                gggg: function () { return m(this.weekYear(), 4) },
                ggggg: function () { return m(this.weekYear(), 5) },
                GG: function () { return m(this.isoWeekYear() % 100, 2) },
                GGGG: function () { return m(this.isoWeekYear(), 4) },
                GGGGG: function () { return m(this.isoWeekYear(), 5) },
                e: function () { return this.weekday() },
                E: function () { return this.isoWeekday() },
                a: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !0) },
                A: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !1) },
                H: function () { return this.hours() },
                h: function () { return this.hours() % 12 || 12 },
                m: function () { return this.minutes() },
                s: function () { return this.seconds() },
                S: function () { return _(this.milliseconds() / 100) },
                SS: function () { return m(_(this.milliseconds() / 10), 2) },
                SSS: function () { return m(this.milliseconds(), 3) },
                SSSS: function () { return m(this.milliseconds(), 3) },
                Z: function () {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + m(_(e / 60), 2) + ":" + m(_(e) % 60, 2)
                },
                ZZ: function () {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + m(_(e / 60), 2) + m(_(e) % 60, 2)
                },
                z: function () { return this.zoneAbbr() },
                zz: function () { return this.zoneName() },
                X: function () { return this.unix() },
                Q: function () { return this.quarter() }
            }, gn = {}, vn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; hn.length;) At = hn.pop(), mn[At + "o"] = c(mn[At], At);
        for (; pn.length;) At = pn.pop(), mn[At + At] = o(mn[At], 2);
        mn.DDDD = o(mn.DDD, 3), f(l.prototype, {
            set: function (e) { var t, n; for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function (e) { return this._months[e.month()] },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function (e) { return this._monthsShort[e.month()] },
            monthsParse: function (e) {
                var t, n, i;
                for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                    if (this._monthsParse[t] || (n = bt.utc([2e3, t]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function (e) { return this._weekdays[e.day()] },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function (e) { return this._weekdaysShort[e.day()] },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function (e) { return this._weekdaysMin[e.day()] },
            weekdaysParse: function (e) {
                var t, n, i;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                    if (this._weekdaysParse[t] || (n = bt([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            },
            _longDateFormat: { LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" },
            longDateFormat: function (e) { var t = this._longDateFormat[e]; return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) { return e.slice(1) }), this._longDateFormat[e] = t), t },
            isPM: function (e) { return "p" === (e + "").toLowerCase().charAt(0) },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" },
            _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            calendar: function (e, t) { var n = this._calendar[e]; return "function" == typeof n ? n.apply(t) : n },
            _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            relativeTime: function (e, t, n, i) { var r = this._relativeTime[n]; return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e) },
            pastFuture: function (e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return "function" == typeof n ? n(t) : n.replace(/%s/i, t) },
            ordinal: function (e) { return this._ordinal.replace("%d", e) },
            _ordinal: "%d",
            preparse: function (e) { return e },
            postformat: function (e) { return e },
            week: function (e) { return st(e, this._week.dow, this._week.doy).week },
            _week: { dow: 0, doy: 6 },
            _invalidDate: "Invalid date",
            invalidDate: function () { return this._invalidDate }
        }), bt = function (t, n, r, a) { var s; return "boolean" == typeof r && (a = r, r = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = r, s._strict = a, s._isUTC = !1, s._pf = i(), ct(s) }, bt.suppressDeprecationWarnings = !1, bt.createFromInputFallback = a("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) { e._d = new Date(e._i) }), bt.min = function () { var e = [].slice.call(arguments, 0); return lt("isBefore", e) }, bt.max = function () { var e = [].slice.call(arguments, 0); return lt("isAfter", e) }, bt.utc = function (t, n, r, a) { var s; return "boolean" == typeof r && (a = r, r = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = r, s._i = t, s._f = n, s._strict = a, s._pf = i(), ct(s).utc() }, bt.unix = function (e) { return bt(1e3 * e) }, bt.duration = function (e, t) {
            var i, r, a, s, o = e,
                c = null;
            return bt.isDuration(e) ? o = { ms: e._milliseconds, d: e._days, M: e._months } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (c = zt.exec(e)) ? (i = "-" === c[1] ? -1 : 1, o = { y: 0, d: _(c[St]) * i, h: _(c[kt]) * i, m: _(c[Et]) * i, s: _(c[Dt]) * i, ms: _(c[Nt]) * i }) : (c = Bt.exec(e)) ? (i = "-" === c[1] ? -1 : 1, a = function (e) { var t = e && parseFloat(e.replace(",", ".")); return (isNaN(t) ? 0 : t) * i }, o = { y: a(c[2]), M: a(c[3]), d: a(c[4]), h: a(c[5]), m: a(c[6]), s: a(c[7]), w: a(c[8]) }) : "object" == typeof o && ("from" in o || "to" in o) && (s = v(bt(o.from), bt(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), r = new d(o), bt.isDuration(e) && n(e, "_locale") && (r._locale = e._locale), r
        }, bt.version = wt, bt.defaultFormat = rn, bt.ISO_8601 = function () {}, bt.momentProperties = jt, bt.updateOffset = function () {}, bt.relativeTimeThreshold = function (t, n) { return fn[t] === e ? !1 : n === e ? fn[t] : (fn[t] = n, !0) }, bt.lang = a("moment.lang is deprecated. Use moment.locale instead.", function (e, t) { return bt.locale(e, t) }), bt.locale = function (e, t) { var n; return e && (n = "undefined" != typeof t ? bt.defineLocale(e, t) : bt.localeData(e), n && (bt.duration._locale = bt._locale = n)), bt._locale._abbr }, bt.defineLocale = function (e, t) { return null !== t ? (t.abbr = e, Pt[e] || (Pt[e] = new l), Pt[e].set(t), bt.locale(e), Pt[e]) : (delete Pt[e], null) }, bt.langData = a("moment.langData is deprecated. Use moment.localeData instead.", function (e) { return bt.localeData(e) }), bt.localeData = function (e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return bt._locale;
            if (!A(e)) {
                if (t = O(e)) return t;
                e = [e]
            }
            return I(e)
        }, bt.isMoment = function (e) { return e instanceof u || null != e && n(e, "_isAMomentObject") }, bt.isDuration = function (e) { return e instanceof d };
        for (At = vn.length - 1; At >= 0; --At) M(vn[At]);
        bt.normalizeUnits = function (e) { return C(e) }, bt.invalid = function (e) { var t = bt.utc(0 / 0); return null != e ? f(t._pf, e) : t._pf.userInvalidated = !0, t }, bt.parseZone = function () { return bt.apply(null, arguments).parseZone() }, bt.parseTwoDigitYear = function (e) { return _(e) + (_(e) > 68 ? 1900 : 2e3) }, f(bt.fn = u.prototype, {
            clone: function () { return bt(this) },
            valueOf: function () { return +this._d + 6e4 * (this._offset || 0) },
            unix: function () { return Math.floor(+this / 1e3) },
            toString: function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") },
            toDate: function () { return this._offset ? new Date(+this) : this._d },
            toISOString: function () { var e = bt(this).utc(); return 0 < e.year() && e.year() <= 9999 ? q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") },
            toArray: function () { var e = this; return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()] },
            isValid: function () { return P(this) },
            isDSTShifted: function () { return this._a ? this.isValid() && T(this._a, (this._isUTC ? bt.utc(this._a) : bt(this._a)).toArray()) > 0 : !1 },
            parsingFlags: function () { return f({}, this._pf) },
            invalidAt: function () { return this._pf.overflow },
            utc: function (e) { return this.zone(0, e) },
            local: function (e) { return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._d.getTimezoneOffset(), "m")), this },
            format: function (e) { var t = q(this, e || bt.defaultFormat); return this.localeData().postformat(t) },
            add: b(1, "add"),
            subtract: b(-1, "subtract"),
            diff: function (e, t, n) {
                var i, r, a = z(e, this),
                    s = 6e4 * (this.zone() - a.zone());
                return t = C(t), "year" === t || "month" === t ? (i = 432e5 * (this.daysInMonth() + a.daysInMonth()), r = 12 * (this.year() - a.year()) + (this.month() - a.month()), r += (this - bt(this).startOf("month") - (a - bt(a).startOf("month"))) / i, r -= 6e4 * (this.zone() - bt(this).startOf("month").zone() - (a.zone() - bt(a).startOf("month").zone())) / i, "year" === t && (r /= 12)) : (i = this - a, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? r : p(r)
            },
            from: function (e, t) { return bt.duration({ to: this, from: e }).locale(this.locale()).humanize(!t) },
            fromNow: function (e) { return this.from(bt(), e) },
            calendar: function (e) {
                var t = e || bt(),
                    n = z(t, this).startOf("day"),
                    i = this.diff(n, "days", !0),
                    r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(r, this))
            },
            isLeapYear: function () { return D(this.year()) },
            isDST: function () { return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone() },
            day: function (e) { var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = it(e, this.localeData()), this.add(e - t, "d")) : t },
            month: ht("Month", !0),
            startOf: function (e) {
                switch (e = C(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function (e) { return e = C(e), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms") },
            isAfter: function (e, t) {
                return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +bt(e).startOf(t)
            },
            isBefore: function (e, t) { return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +bt(e).startOf(t) },
            isSame: function (e, t) { return t = t || "ms", +this.clone().startOf(t) === +z(e, this).startOf(t) },
            min: a("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (e) { return e = bt.apply(null, arguments), this > e ? this : e }),
            max: a("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (e) { return e = bt.apply(null, arguments), e > this ? this : e }),
            zone: function (e, t) { var n, i = this._offset || 0; return null == e ? this._isUTC ? i : this._d.getTimezoneOffset() : ("string" == typeof e && (e = $(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._d.getTimezoneOffset()), this._offset = e, this._isUTC = !0, null != n && this.subtract(n, "m"), i !== e && (!t || this._changeInProgress ? y(this, bt.duration(i - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, bt.updateOffset(this, !0), this._changeInProgress = null)), this) },
            zoneAbbr: function () { return this._isUTC ? "UTC" : "" },
            zoneName: function () { return this._isUTC ? "Coordinated Universal Time" : "" },
            parseZone: function () { return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this },
            hasAlignedHourOffset: function (e) { return e = e ? bt(e).zone() : 0, (this.zone() - e) % 60 === 0 },
            daysInMonth: function () { return S(this.year(), this.month()) },
            dayOfYear: function (e) { var t = Ct((bt(this).startOf("day") - bt(this).startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") },
            quarter: function (e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) },
            weekYear: function (e) { var t = st(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == e ? t : this.add(e - t, "y") },
            isoWeekYear: function (e) { var t = st(this, 1, 4).year; return null == e ? t : this.add(e - t, "y") },
            week: function (e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") },
            isoWeek: function (e) { var t = st(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") },
            weekday: function (e) { var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") },
            isoWeekday: function (e) { return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) },
            isoWeeksInYear: function () { return k(this.year(), 1, 4) },
            weeksInYear: function () { var e = this.localeData()._week; return k(this.year(), e.dow, e.doy) },
            get: function (e) { return e = C(e), this[e]() },
            set: function (e, t) { return e = C(e), "function" == typeof this[e] && this[e](t), this },
            locale: function (t) { return t === e ? this._locale._abbr : (this._locale = bt.localeData(t), this) },
            lang: a("moment().lang() is deprecated. Use moment().localeData() instead.", function (t) { return t === e ? this.localeData() : (this._locale = bt.localeData(t), this) }),
            localeData: function () { return this._locale }
        }), bt.fn.millisecond = bt.fn.milliseconds = ht("Milliseconds", !1), bt.fn.second = bt.fn.seconds = ht("Seconds", !1), bt.fn.minute = bt.fn.minutes = ht("Minutes", !1), bt.fn.hour = bt.fn.hours = ht("Hours", !0), bt.fn.date = ht("Date", !0), bt.fn.dates = a("dates accessor is deprecated. Use date instead.", ht("Date", !0)), bt.fn.year = ht("FullYear", !0), bt.fn.years = a("years accessor is deprecated. Use year instead.", ht("FullYear", !0)), bt.fn.days = bt.fn.day, bt.fn.months = bt.fn.month, bt.fn.weeks = bt.fn.week, bt.fn.isoWeeks = bt.fn.isoWeek, bt.fn.quarters = bt.fn.quarter, bt.fn.toJSON = bt.fn.toISOString, f(bt.duration.fn = d.prototype, {
            _bubble: function () {
                var e, t, n, i = this._milliseconds,
                    r = this._days,
                    a = this._months,
                    s = this._data,
                    o = 0;
                s.milliseconds = i % 1e3, e = p(i / 1e3), s.seconds = e % 60, t = p(e / 60), s.minutes = t % 60, n = p(t / 60), s.hours = n % 24, r += p(n / 24), o = p(pt(r)), r -= p(mt(o)), a += p(r / 30), r %= 30, o += p(a / 12), a %= 12, s.days = r, s.months = a, s.years = o
            },
            abs: function () { return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this },
            weeks: function () { return p(this.days() / 7) },
            valueOf: function () { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12) },
            humanize: function (e) { var t = at(this, !e, this.localeData()); return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t) },
            add: function (e, t) { var n = bt.duration(e, t); return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this },
            subtract: function (e, t) { var n = bt.duration(e, t); return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this },
            get: function (e) { return e = C(e), this[e.toLowerCase() + "s"]() },
            as: function (e) {
                var t, n;
                if (e = C(e), t = this._days + this._milliseconds / 864e5, "month" === e || "year" === e) return n = this._months + 12 * pt(t), "month" === e ? n : n / 12;
                switch (t += mt(this._months / 12), e) {
                    case "week":
                        return t / 7;
                    case "day":
                        return t;
                    case "hour":
                        return 24 * t;
                    case "minute":
                        return 24 * t * 60;
                    case "second":
                        return 24 * t * 60 * 60;
                    case "millisecond":
                        return 24 * t * 60 * 60 * 1e3;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            },
            lang: bt.fn.lang,
            locale: bt.fn.locale,
            toIsoString: a("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () { return this.toISOString() }),
            toISOString: function () {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    i = Math.abs(this.hours()),
                    r = Math.abs(this.minutes()),
                    a = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || r || a ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (a ? a + "S" : "") : "P0D"
            },
            localeData: function () { return this._locale }
        }), bt.duration.fn.toString = bt.duration.fn.toISOString;
        for (At in cn) n(cn, At) && gt(At.toLowerCase());
        bt.duration.fn.asMilliseconds = function () { return this.as("ms") }, bt.duration.fn.asSeconds = function () { return this.as("s") }, bt.duration.fn.asMinutes = function () { return this.as("m") }, bt.duration.fn.asHours = function () { return this.as("h") }, bt.duration.fn.asDays = function () { return this.as("d") }, bt.duration.fn.asWeeks = function () { return this.as("weeks") }, bt.duration.fn.asMonths = function () { return this.as("M") }, bt.duration.fn.asYears = function () { return this.as("y") }, bt.locale("en", {
            ordinal: function (e) {
                var t = e % 10,
                    n = 1 === _(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), It ? module.exports = bt : "function" == typeof define && define.amd ? (define("moment", ["require", "exports", "module"], function (e, t, n) { return n.config && n.config() && n.config().noGlobal === !0 && (Tt.moment = yt), bt }), vt(!0)) : vt()
    }.call(this), ! function (e, t) { "function" == typeof define && define.amd ? define("moment-timezone", ["moment"], t) : "object" == typeof exports ? module.exports = t(require("moment")) : t(e.moment) }(this, function (e) {
        function t(e) { return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48 }

        function n(e) {
            var n, i = 0,
                r = e.split("."),
                a = r[0],
                s = r[1] || "",
                o = 1,
                c = 0,
                l = 1;
            for (45 === e.charCodeAt(0) && (i = 1, l = -1), i; i < a.length; i++) n = t(a.charCodeAt(i)), c = 60 * c + n;
            for (i = 0; i < s.length; i++) o /= 60, n = t(s.charCodeAt(i)), c += n * o;
            return c * l
        }

        function i(e) { for (var t = 0; t < e.length; t++) e[t] = n(e[t]) }

        function r(e, t) {
            for (var n = 0; t > n; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
            e[t - 1] = 1 / 0
        }

        function a(e, t) { var n, i = []; for (n = 0; n < t.length; n++) i[n] = e[t[n]]; return i }

        function s(e) {
            var t = e.split("|"),
                n = t[2].split(" "),
                s = t[3].split(""),
                o = t[4].split(" ");
            return i(n), i(s), i(o), r(o, s.length), { name: t[0], abbrs: a(t[1].split(" "), s), offsets: a(n, s), untils: o }
        }

        function o(e) { e && this._set(s(e)) }

        function c(e) { return (e || "").toLowerCase().replace(/\//g, "_") }

        function l(e) { var t, n, i; for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = new o(e[t]), i = c(n.name), x[i] = n, h(i) }

        function u(e) { return x[c(e)] || null }

        function d() { var e, t = []; for (e in x) x.hasOwnProperty(e) && x[e] && t.push(x[e].name); return t.sort() }

        function f(e) { var t, n; for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = e[t].split("|"), m(n[0], n[1]), m(n[1], n[0]) }

        function h(e) {
            if (M[e]) {
                var t, n = x[e],
                    i = M[e];
                for (t = 0; t < i.length; t++) p(n, i[t]);
                M[e] = null
            }
        }

        function p(e, t) {
            var n = x[c(t)] = new o;
            n._set(e), n.name = t
        }

        function m(e, t) { e = c(e), x[e] ? p(x[e], t) : (M[e] = M[e] || [], M[e].push(t)) }

        function g(e) { l(e.zones), f(e.links), A.dataVersion = e.version }

        function v(e) { return v.didShowError || (v.didShowError = !0, y("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!u(e) }

        function b(e) { return !(!e._a || void 0 !== e._tzm) }

        function y(e) { "undefined" != typeof console && "function" == typeof console.error && console.error(e) }

        function A() {
            var t = Array.prototype.slice.call(arguments, 0, -1),
                n = arguments[arguments.length - 1],
                i = u(n),
                r = e.utc.apply(null, t);
            return i && b(r) && r.add(i.parse(r), "minutes"), r.tz(n), r
        }

        function w(e) { return function () { return this._z ? this._z.abbr(this) : e.call(this) } }

        function T(e) { return function () { return this._z = null, e.apply(this, arguments) } }
        if (void 0 !== e.tz) return e;
        var C = "0.2.5",
            x = {},
            M = {},
            _ = e.version.split("."),
            S = +_[0],
            k = +_[1];
        (2 > S || 2 === S && 6 > k) && y("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), o.prototype = {
            _set: function (e) { this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets },
            _index: function (e) {
                var t, n = +e,
                    i = this.untils;
                for (t = 0; t < i.length; t++)
                    if (n < i[t]) return t
            },
            parse: function (e) {
                var t, n, i, r, a = +e,
                    s = this.offsets,
                    o = this.untils,
                    c = o.length - 1;
                for (r = 0; c > r; r++)
                    if (t = s[r], n = s[r + 1], i = s[r ? r - 1 : r], n > t && A.moveAmbiguousForward ? t = n : t > i && A.moveInvalidForward && (t = i), a < o[r] - 6e4 * t) return s[r];
                return s[c]
            },
            abbr: function (e) { return this.abbrs[this._index(e)] },
            offset: function (e) { return this.offsets[this._index(e)] }
        }, A.version = C, A.dataVersion = "", A._zones = x, A._links = M, A.add = l, A.link = f, A.load = g, A.zone = u, A.zoneExists = v, A.names = d, A.Zone = o, A.unpack = s, A.unpackBase60 = n, A.needsOffset = b, A.moveInvalidForward = !0, A.moveAmbiguousForward = !1;
        var E = e.fn;
        e.tz = A, e.updateOffset = function (e, t) {
            var n;
            e._z && (n = e._z.offset(e), Math.abs(n) < 16 && (n /= 60), e.zone(n, t))
        }, E.tz = function (t) { return t ? (this._z = u(t), this._z ? e.updateOffset(this) : y("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0 }, E.zoneName = w(E.zoneName), E.zoneAbbr = w(E.zoneAbbr), E.utc = T(E.utc);
        var D = e.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(D) ? (D.push("_z"), D.push("_a")) : D && (D._z = null), g({ version: "2014j", zones: ["Africa/Abidjan|GMT|0|0|", "Africa/Addis_Ababa|EAT|-30|0|", "Africa/Algiers|CET|-10|0|", "Africa/Bangui|WAT|-10|0|", "Africa/Blantyre|CAT|-20|0|", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0", "Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0", "Africa/Ceuta|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Africa/Johannesburg|SAST|-20|0|", "Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00", "Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0", "America/Adak|HAST HADT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Anguilla|AST|40|0|", "America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0", "America/Argentina/Buenos_Aires|ART|30|0|", "America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0", "America/Atikokan|EST|50|0|", "America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0", "America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Belem|BRT|30|0|", "America/Belize|CST|60|0|", "America/Boa_Vista|AMT|40|0|", "America/Bogota|COT|50|0|", "America/Boise|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10", "America/Cancun|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Caracas|VET|4u|0|", "America/Cayenne|GFT|30|0|", "America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Creston|MST|70|0|", "America/Dawson|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Detroit|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Eirunepe|AMT ACT|40 50|01|1KLE0", "America/Glace_Bay|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Grand_Turk|EST EDT AST|50 40 40|0101010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Guayaquil|ECT|50|0|", "America/Guyana|GYT|40|0|", "America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0", "America/La_Paz|BOT|40|0|", "America/Lima|PET|50|0|", "America/Metlakatla|PST|80|0|", "America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Montevideo|UYST UYT|20 30|01010101010101010101010|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10", "America/Noronha|FNT|20|0|", "America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Paramaribo|SRT|30|0|", "America/Port-au-Prince|EST EDT|50 40|0101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Santa_Isabel|PST PDT|80 70|01010101010101010101010|1C1m0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Santiago|CLST CLT|30 40|01010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0", "America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10", "America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Antarctica/Casey|CAST AWST|-b0 -80|0101|1BN30 40P0 KL0", "Antarctica/Davis|DAVT DAVT|-50 -70|0101|1BPw0 3Wn0 KN0", "Antarctica/DumontDUrville|DDUT|-a0|0|", "Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140", "Antarctica/Mawson|MAWT|-50|0|", "Antarctica/McMurdo|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "Antarctica/Rothera|ROTT|30|0|", "Antarctica/Syowa|SYOT|-30|0|", "Antarctica/Troll|UTC CEST|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Antarctica/Vostok|VOST|-60|0|", "Asia/Aden|AST|-30|0|", "Asia/Almaty|ALMT|-60|0|", "Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0", "Asia/Anadyr|ANAT ANAST ANAT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0", "Asia/Aqtau|AQTT|-50|0|", "Asia/Ashgabat|TMT|-50|0|", "Asia/Baku|AZT AZST|-40 -50|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Bangkok|ICT|-70|0|", "Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0", "Asia/Bishkek|KGT|-60|0|", "Asia/Brunei|BNT|-80|0|", "Asia/Calcutta|IST|-5u|0|", "Asia/Chita|YAKT YAKST YAKT IRKT|-90 -a0 -a0 -80|01023|1BWh0 1qM0 WM0 8Hz0", "Asia/Choibalsan|CHOT|-80|0|", "Asia/Chongqing|CST|-80|0|", "Asia/Dacca|BDT|-60|0|", "Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0", "Asia/Dili|TLT|-90|0|", "Asia/Dubai|GST|-40|0|", "Asia/Dushanbe|TJT|-50|0|", "Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0", "Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0", "Asia/Hong_Kong|HKT|-80|0|", "Asia/Hovd|HOVT|-70|0|", "Asia/Irkutsk|IRKT IRKST IRKT|-80 -90 -90|01020|1BWi0 1qM0 WM0 8Hz0", "Asia/Istanbul|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Jakarta|WIB|-70|0|", "Asia/Jayapura|WIT|-90|0|", "Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0", "Asia/Kabul|AFT|-4u|0|", "Asia/Kajtmgiohatka|PETT PETST PETT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0", "Asia/Karachi|PKT|-50|0|", "Asia/Kashgar|XJT|-60|0|", "Asia/Kathmandu|NPT|-5J|0|", "Asia/Khandyga|VLAT VLAST VLAT YAKT YAKT|-a0 -b0 -b0 -a0 -90|010234|1BWg0 1qM0 WM0 17V0 7zD0", "Asia/Krasnoyarsk|KRAT KRAST KRAT|-70 -80 -80|01020|1BWj0 1qM0 WM0 8Hz0", "Asia/Kuala_Lumpur|MYT|-80|0|", "Asia/Magadan|MAGT MAGST MAGT MAGT|-b0 -c0 -c0 -a0|01023|1BWf0 1qM0 WM0 8Hz0", "Asia/Makassar|WITA|-80|0|", "Asia/Manila|PHT|-80|0|", "Asia/Nicosia|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Novokuznetsk|KRAT NOVST NOVT NOVT|-70 -70 -60 -70|01230|1BWj0 1qN0 WM0 8Hz0", "Asia/Novosibirsk|NOVT NOVST NOVT|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0", "Asia/Omsk|OMST OMSST OMST|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0", "Asia/Oral|ORAT|-50|0|", "Asia/Pyongyang|KST|-90|0|", "Asia/Qyzylorda|QYZT|-60|0|", "Asia/Rangoon|MMT|-6u|0|", "Asia/Sakhalin|SAKT SAKST SAKT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0", "Asia/Samarkand|UZT|-50|0|", "Asia/Singapore|SGT|-80|0|", "Asia/Srednekolymsk|MAGT MAGST MAGT SRET|-b0 -c0 -c0 -b0|01023|1BWf0 1qM0 WM0 8Hz0", "Asia/Tbilisi|GET|-40|0|", "Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0", "Asia/Thimbu|BTT|-60|0|", "Asia/Tokyo|JST|-90|0|", "Asia/Ulaanbaatar|ULAT|-80|0|", "Asia/Ust-Nera|MAGT MAGST MAGT VLAT VLAT|-b0 -c0 -c0 -b0 -a0|010234|1BWf0 1qM0 WM0 17V0 7zD0", "Asia/Vladivostok|VLAT VLAST VLAT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0", "Asia/Yakutsk|YAKT YAKST YAKT|-90 -a0 -a0|01020|1BWh0 1qM0 WM0 8Hz0", "Asia/Yekaterinburg|YEKT YEKST YEKT|-50 -60 -60|01020|1BWl0 1qM0 WM0 8Hz0", "Asia/Yerevan|AMT AMST|-40 -50|01010|1BWm0 1qM0 WM0 1qM0", "Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Canary|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Cape_Verde|CVT|10|0|", "Atlantic/South_Georgia|GST|20|0|", "Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10", "Australia/ACT|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Brisbane|AEST|-a0|0|", "Australia/Darwin|ACST|-9u|0|", "Australia/Eucla|ACWST|-8J|0|", "Australia/LHI|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu", "Australia/Perth|AWST|-80|0|", "Chile/EasterIsland|EASST EAST|50 60|01010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0", "Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Etc/GMT+1|GMT+1|10|0|", "Etc/GMT+10|GMT+10|a0|0|", "Etc/GMT+11|GMT+11|b0|0|", "Etc/GMT+12|GMT+12|c0|0|", "Etc/GMT+2|GMT+2|20|0|", "Etc/GMT+3|GMT+3|30|0|", "Etc/GMT+4|GMT+4|40|0|", "Etc/GMT+5|GMT+5|50|0|", "Etc/GMT+6|GMT+6|60|0|", "Etc/GMT+7|GMT+7|70|0|", "Etc/GMT+8|GMT+8|80|0|", "Etc/GMT+9|GMT+9|90|0|", "Etc/GMT-1|GMT-1|-10|0|", "Etc/GMT-10|GMT-10|-a0|0|", "Etc/GMT-11|GMT-11|-b0|0|", "Etc/GMT-12|GMT-12|-c0|0|", "Etc/GMT-13|GMT-13|-d0|0|", "Etc/GMT-14|GMT-14|-e0|0|", "Etc/GMT-2|GMT-2|-20|0|", "Etc/GMT-3|GMT-3|-30|0|", "Etc/GMT-4|GMT-4|-40|0|", "Etc/GMT-5|GMT-5|-50|0|", "Etc/GMT-6|GMT-6|-60|0|", "Etc/GMT-7|GMT-7|-70|0|", "Etc/GMT-8|GMT-8|-80|0|", "Etc/GMT-9|GMT-9|-90|0|", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Belfast|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Kaliningrad|EET EEST FET|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0", "Europe/Minsk|EET EEST FET MSK|-20 -30 -30 -30|01023|1BWo0 1qM0 WM0 8Hy0", "Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0", "Europe/Samara|SAMT SAMST SAMT|-40 -40 -30|0120|1BWm0 1qN0 WM0", "Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0", "Europe/Volgograd|MSK MSK|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0", "HST|HST|a0|0|", "Indian/Chagos|IOT|-60|0|", "Indian/Christmas|CXT|-70|0|", "Indian/Cocos|CCT|-6u|0|", "Indian/Kerguelen|TFT|-50|0|", "Indian/Mahe|SCT|-40|0|", "Indian/Maldives|MVT|-50|0|", "Indian/Mauritius|MUT|-40|0|", "Indian/Reunion|RET|-40|0|", "Kwajalein|MHT|-c0|0|", "MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "NZ-CHAT|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "Pacific/Bougainville|PGT BST|-a0 -b0|01|1NwE0", "Pacific/Chuuk|CHUT|-a0|0|", "Pacific/Efate|VUT|-b0|0|", "Pacific/Enderbury|PHOT|-d0|0|", "Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0", "Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0", "Pacific/Funafuti|TVT|-c0|0|", "Pacific/Galapagos|GALT|60|0|", "Pacific/Gambier|GAMT|90|0|", "Pacific/Guadalcanal|SBT|-b0|0|", "Pacific/Guam|ChST|-a0|0|", "Pacific/Kiritimati|LINT|-e0|0|", "Pacific/Kosrae|KOST|-b0|0|", "Pacific/Marquesas|MART|9u|0|", "Pacific/Midway|SST|b0|0|", "Pacific/Nauru|NRT|-c0|0|", "Pacific/Niue|NUT|b0|0|", "Pacific/Norfolk|NFT|-bu|0|", "Pacific/Noumea|NCT|-b0|0|", "Pacific/Palau|PWT|-90|0|", "Pacific/Pohnpei|PONT|-b0|0|", "Pacific/Port_Moresby|PGT|-a0|0|", "Pacific/Rarotonga|CKT|a0|0|", "Pacific/Tahiti|TAHT|a0|0|", "Pacific/Tarawa|GILT|-c0|0|", "Pacific/Tongatapu|TOT|-d0|0|", "Pacific/Wake|WAKT|-c0|0|", "Pacific/Wallis|WFT|-c0|0|"], links: ["Africa/Abidjan|Africa/Accra", "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Bissau", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Monrovia", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|America/Danmarkshavn", "Africa/Abidjan|Atlantic/Reykjavik", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Abidjan|Etc/GMT", "Africa/Abidjan|Etc/GMT+0", "Africa/Abidjan|Etc/GMT-0", "Africa/Abidjan|Etc/GMT0", "Africa/Abidjan|Etc/Greenwich", "Africa/Abidjan|GMT", "Africa/Abidjan|GMT+0", "Africa/Abidjan|GMT-0", "Africa/Abidjan|GMT0", "Africa/Abidjan|Greenwich", "Africa/Abidjan|Iceland", "Africa/Addis_Ababa|Africa/Asmara", "Africa/Addis_Ababa|Africa/Asmera", "Africa/Addis_Ababa|Africa/Dar_es_Salaam", "Africa/Addis_Ababa|Africa/Djibouti", "Africa/Addis_Ababa|Africa/Juba", "Africa/Addis_Ababa|Africa/Kampala", "Africa/Addis_Ababa|Africa/Khartoum", "Africa/Addis_Ababa|Africa/Mogadishu", "Africa/Addis_Ababa|Africa/Nairobi", "Africa/Addis_Ababa|Indian/Antananarivo", "Africa/Addis_Ababa|Indian/Comoro", "Africa/Addis_Ababa|Indian/Mayotte", "Africa/Algiers|Africa/Tunis", "Africa/Bangui|Africa/Brazzaville", "Africa/Bangui|Africa/Douala", "Africa/Bangui|Africa/Kinshasa", "Africa/Bangui|Africa/Lagos", "Africa/Bangui|Africa/Libreville", "Africa/Bangui|Africa/Luanda", "Africa/Bangui|Africa/Malabo", "Africa/Bangui|Africa/Ndjamena", "Africa/Bangui|Africa/Niamey", "Africa/Bangui|Africa/Porto-Novo", "Africa/Blantyre|Africa/Bujumbura", "Africa/Blantyre|Africa/Gaborone", "Africa/Blantyre|Africa/Harare", "Africa/Blantyre|Africa/Kigali", "Africa/Blantyre|Africa/Lubumbashi", "Africa/Blantyre|Africa/Lusaka", "Africa/Blantyre|Africa/Maputo", "Africa/Cairo|Egypt", "Africa/Casablanca|Africa/El_Aaiun", "Africa/Ceuta|Arctic/Longyearbyen", "Africa/Ceuta|Atlantic/Jan_Mayen", "Africa/Ceuta|CET", "Africa/Ceuta|Europe/Amsterdam", "Africa/Ceuta|Europe/Andorra", "Africa/Ceuta|Europe/Belgrade", "Africa/Ceuta|Europe/Berlin", "Africa/Ceuta|Europe/Bratislava", "Africa/Ceuta|Europe/Brussels", "Africa/Ceuta|Europe/Budapest", "Africa/Ceuta|Europe/Busingen", "Africa/Ceuta|Europe/Copenhagen", "Africa/Ceuta|Europe/Gibraltar", "Africa/Ceuta|Europe/Ljubljana", "Africa/Ceuta|Europe/Luxembourg", "Africa/Ceuta|Europe/Madrid", "Africa/Ceuta|Europe/Malta", "Africa/Ceuta|Europe/Monaco", "Africa/Ceuta|Europe/Oslo", "Africa/Ceuta|Europe/Paris", "Africa/Ceuta|Europe/Podgorica", "Africa/Ceuta|Europe/Prague", "Africa/Ceuta|Europe/Rome", "Africa/Ceuta|Europe/San_Marino", "Africa/Ceuta|Europe/Sarajevo", "Africa/Ceuta|Europe/Skopje", "Africa/Ceuta|Europe/Stockholm", "Africa/Ceuta|Europe/Tirane", "Africa/Ceuta|Europe/Vaduz", "Africa/Ceuta|Europe/Vatican", "Africa/Ceuta|Europe/Vienna", "Africa/Ceuta|Europe/Warsaw", "Africa/Ceuta|Europe/Zagreb", "Africa/Ceuta|Europe/Zurich", "Africa/Ceuta|Poland", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|America/Juneau", "America/Anchorage|America/Nome", "America/Anchorage|America/Sitka", "America/Anchorage|America/Yakutat", "America/Anchorage|US/Alaska", "America/Anguilla|America/Antigua", "America/Anguilla|America/Aruba", "America/Anguilla|America/Barbados", "America/Anguilla|America/Blanc-Sablon", "America/Anguilla|America/Curacao", "America/Anguilla|America/Dominica", "America/Anguilla|America/Grenada", "America/Anguilla|America/Guadeloupe", "America/Anguilla|America/Kralendijk", "America/Anguilla|America/Lower_Princes", "America/Anguilla|America/Marigot", "America/Anguilla|America/Martinique", "America/Anguilla|America/Montserrat", "America/Anguilla|America/Port_of_Spain", "America/Anguilla|America/Puerto_Rico", "America/Anguilla|America/Santo_Domingo", "America/Anguilla|America/St_Barthelemy", "America/Anguilla|America/St_Kitts", "America/Anguilla|America/St_Lucia", "America/Anguilla|America/St_Thomas", "America/Anguilla|America/St_Vincent", "America/Anguilla|America/Tortola", "America/Anguilla|America/Virgin", "America/Argentina/Buenos_Aires|America/Argentina/Catamarca", "America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia", "America/Argentina/Buenos_Aires|America/Argentina/Cordoba", "America/Argentina/Buenos_Aires|America/Argentina/Jujuy", "America/Argentina/Buenos_Aires|America/Argentina/La_Rioja", "America/Argentina/Buenos_Aires|America/Argentina/Mendoza", "America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos", "America/Argentina/Buenos_Aires|America/Argentina/Salta", "America/Argentina/Buenos_Aires|America/Argentina/San_Juan", "America/Argentina/Buenos_Aires|America/Argentina/San_Luis", "America/Argentina/Buenos_Aires|America/Argentina/Tucuman", "America/Argentina/Buenos_Aires|America/Argentina/Ushuaia", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Buenos_Aires|America/Catamarca", "America/Argentina/Buenos_Aires|America/Cordoba", "America/Argentina/Buenos_Aires|America/Jujuy", "America/Argentina/Buenos_Aires|America/Mendoza", "America/Argentina/Buenos_Aires|America/Rosario", "America/Atikokan|America/Cayman", "America/Atikokan|America/Coral_Harbour", "America/Atikokan|America/Jamaica", "America/Atikokan|America/Panama", "America/Atikokan|EST", "America/Atikokan|Jamaica", "America/Belem|America/Fortaleza", "America/Belem|America/Maceio", "America/Belem|America/Recife", "America/Belem|America/Santarem", "America/Belize|America/Costa_Rica", "America/Belize|America/El_Salvador", "America/Belize|America/Guatemala", "America/Belize|America/Managua", "America/Belize|America/Regina", "America/Belize|America/Swift_Current", "America/Belize|America/Tegucigalpa", "America/Belize|Canada/East-Saskatchewan", "America/Belize|Canada/Saskatchewan", "America/Boa_Vista|America/Manaus", "America/Boa_Vista|America/Porto_Velho", "America/Boa_Vista|Brazil/West", "America/Boise|America/Cambridge_Bay", "America/Boise|America/Denver", "America/Boise|America/Edmonton", "America/Boise|America/Inuvik", "America/Boise|America/Ojinaga", "America/Boise|America/Shiprock", "America/Boise|America/Yellowknife", "America/Boise|Canada/Mountain", "America/Boise|MST7MDT", "America/Boise|Navajo", "America/Boise|US/Mountain", "America/Campo_Grande|America/Cuiaba", "America/Cancun|America/Merida", "America/Cancun|America/Mexico_City", "America/Cancun|America/Monterrey", "America/Cancun|Mexico/General", "America/Chicago|America/Indiana/Knox", "America/Chicago|America/Indiana/Tell_City", "America/Chicago|America/Knox_IN", "America/Chicago|America/Matamoros", "America/Chicago|America/Menominee", "America/Chicago|America/North_Dakota/Center", "America/Chicago|America/North_Dakota/New_Salem", "America/Chicago|America/Rainy_River", "America/Chicago|America/Rankin_Inlet", "America/Chicago|America/Resolute", "America/Chicago|America/Winnipeg", "America/Chicago|CST6CDT", "America/Chicago|Canada/Central", "America/Chicago|US/Central", "America/Chicago|US/Indiana-Starke", "America/Chihuahua|America/Mazatlan", "America/Chihuahua|Mexico/BajaSur", "America/Creston|America/Dawson_Creek", "America/Creston|America/Hermosillo", "America/Creston|America/Phoenix", "America/Creston|MST", "America/Creston|US/Arizona", "America/Dawson|America/Ensenada", "America/Dawson|America/Los_Angeles", "America/Dawson|America/Tijuana", "America/Dawson|America/Vancouver", "America/Dawson|America/Whitehorse", "America/Dawson|Canada/Pacific", "America/Dawson|Canada/Yukon", "America/Dawson|Mexico/BajaNorte", "America/Dawson|PST8PDT", "America/Dawson|US/Pacific", "America/Dawson|US/Pacific-New", "America/Detroit|America/Fort_Wayne", "America/Detroit|America/Indiana/Indianapolis", "America/Detroit|America/Indiana/Marengo", "America/Detroit|America/Indiana/Petersburg", "America/Detroit|America/Indiana/Vevay", "America/Detroit|America/Indiana/Vincennes", "America/Detroit|America/Indiana/Winamac", "America/Detroit|America/Indianapolis", "America/Detroit|America/Iqaluit", "America/Detroit|America/Kentucky/Louisville", "America/Detroit|America/Kentucky/Monticello", "America/Detroit|America/Louisville", "America/Detroit|America/Montreal", "America/Detroit|America/Nassau", "America/Detroit|America/New_York", "America/Detroit|America/Nipigon", "America/Detroit|America/Pangnirtung", "America/Detroit|America/Thunder_Bay", "America/Detroit|America/Toronto", "America/Detroit|Canada/Eastern", "America/Detroit|EST5EDT", "America/Detroit|US/East-Indiana", "America/Detroit|US/Eastern", "America/Detroit|US/Michigan", "America/Eirunepe|America/Porto_Acre", "America/Eirunepe|America/Rio_Branco", "America/Eirunepe|Brazil/Acre", "America/Glace_Bay|America/Halifax", "America/Glace_Bay|America/Moncton", "America/Glace_Bay|America/Thule", "America/Glace_Bay|Atlantic/Bermuda", "America/Glace_Bay|Canada/Atlantic", "America/Havana|Cuba", "America/Metlakatla|Pacific/Pitcairn", "America/Noronha|Brazil/DeNoronha", "America/Santiago|Antarctica/Palmer", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "Antarctica/McMurdo|Antarctica/South_Pole", "Antarctica/McMurdo|NZ", "Antarctica/McMurdo|Pacific/Auckland", "Asia/Aden|Asia/Baghdad", "Asia/Aden|Asia/Bahrain", "Asia/Aden|Asia/Kuwait", "Asia/Aden|Asia/Qatar", "Asia/Aden|Asia/Riyadh", "Asia/Aqtau|Asia/Aqtobe", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Ho_Chi_Minh", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Saigon", "Asia/Bangkok|Asia/Vientiane", "Asia/Calcutta|Asia/Colombo", "Asia/Calcutta|Asia/Kolkata", "Asia/Chongqing|Asia/Chungking", "Asia/Chongqing|Asia/Harbin", "Asia/Chongqing|Asia/Macao", "Asia/Chongqing|Asia/Macau", "Asia/Chongqing|Asia/Shanghai", "Asia/Chongqing|Asia/Taipei", "Asia/Chongqing|PRC", "Asia/Chongqing|ROC", "Asia/Dacca|Asia/Dhaka", "Asia/Dubai|Asia/Muscat", "Asia/Hong_Kong|Hongkong", "Asia/Istanbul|Europe/Istanbul", "Asia/Istanbul|Turkey", "Asia/Jakarta|Asia/Pontianak", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kashgar|Asia/Urumqi", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kuala_Lumpur|Asia/Kuching", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|EET", "Asia/Nicosia|Europe/Athens", "Asia/Nicosia|Europe/Bucharest", "Asia/Nicosia|Europe/Chisinau", "Asia/Nicosia|Europe/Helsinki", "Asia/Nicosia|Europe/Kiev", "Asia/Nicosia|Europe/Mariehamn", "Asia/Nicosia|Europe/Nicosia", "Asia/Nicosia|Europe/Riga", "Asia/Nicosia|Europe/Sofia", "Asia/Nicosia|Europe/Tallinn", "Asia/Nicosia|Europe/Tiraspol", "Asia/Nicosia|Europe/Uzhgorod", "Asia/Nicosia|Europe/Vilnius", "Asia/Nicosia|Europe/Zaporozhye", "Asia/Pyongyang|Asia/Seoul", "Asia/Pyongyang|ROK", "Asia/Samarkand|Asia/Tashkent", "Asia/Singapore|Singapore", "Asia/Tehran|Iran", "Asia/Thimbu|Asia/Thimphu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Atlantic/Canary|Atlantic/Faeroe", "Atlantic/Canary|Atlantic/Faroe", "Atlantic/Canary|Atlantic/Madeira", "Atlantic/Canary|Europe/Lisbon", "Atlantic/Canary|Portugal", "Atlantic/Canary|WET", "Australia/ACT|Australia/Canberra", "Australia/ACT|Australia/Currie", "Australia/ACT|Australia/Hobart", "Australia/ACT|Australia/Melbourne", "Australia/ACT|Australia/NSW", "Australia/ACT|Australia/Sydney", "Australia/ACT|Australia/Tasmania", "Australia/ACT|Australia/Victoria", "Australia/Adelaide|Australia/Broken_Hill", "Australia/Adelaide|Australia/South", "Australia/Adelaide|Australia/Yancowinna", "Australia/Brisbane|Australia/Lindeman", "Australia/Brisbane|Australia/Queensland", "Australia/Darwin|Australia/North", "Australia/LHI|Australia/Lord_Howe", "Australia/Perth|Australia/West", "Chile/EasterIsland|Pacific/Easter", "Eire|Europe/Dublin", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belfast|Europe/Guernsey", "Europe/Belfast|Europe/Isle_of_Man", "Europe/Belfast|Europe/Jersey", "Europe/Belfast|Europe/London", "Europe/Belfast|GB", "Europe/Belfast|GB-Eire", "Europe/Moscow|W-SU", "HST|Pacific/Honolulu", "HST|Pacific/Johnston", "HST|US/Hawaii", "Kwajalein|Pacific/Kwajalein", "Kwajalein|Pacific/Majuro", "NZ-CHAT|Pacific/Chatham", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Guam|Pacific/Saipan", "Pacific/Midway|Pacific/Pago_Pago", "Pacific/Midway|Pacific/Samoa", "Pacific/Midway|US/Samoa", "Pacific/Pohnpei|Pacific/Ponape"] }), e
    }), define("configs/config.submissions", ["jquery", "underscore", "text!templates/submissionListActions.html", "moment", "moment-timezone"], function (e, t, n) {
        var i = {
            searchable: !1,
            sortable: !1,
            tagRow: !1,
            pager: !0,
            buttonBar: !1,
            tableID: "submissions" + t.random(0, 5e5),
            headerMap: { tag: function () { var e = '<span id="toggletag">Tag All Users <span id="arrow"></span></span><div class="tag" id="tag-actions" style="display:none; "><ul><li><a id="tagvisible" data-action="tag" data-type="visible">Tag all on this page</a></li><li><a id="tagall" data-action="tag" data-type="all">Tag all on all pages</a></li></ul></div>'; return { cellText: e, sortColumn: !1 } }, id: function () { return { cellText: "Submission ID", sortColumn: !0 } }, invoiceId: function () { return { cellText: "Invoice #", sortColumn: !0 } }, firstName: function () { return { cellText: "First Name", sortColumn: !0 } }, lastName: function () { return { cellText: "Last Name", sortColumn: !0 } }, companyName: function () { return { cellText: "Organization", sortColumn: !0 } }, submitDate: function () { return { cellText: "Submit Date", sortColumn: !0 } }, amountPaid: function () { return { cellText: "Amount Paid", sortColumn: !0 } }, balance: function () { return { cellText: "Balance", sortColumn: !0 } }, actions: function () { return { cellText: "Actions", sortColumn: !1 } } },
            columns: {
                tag: function (t, n) { n.css("width", "20px").css("cursor", "pointer"); var i = { checked: t.get("tag") ? "checked" : !1, name: "submission-check", type: "checkbox", "class": "submission-check", value: t.get("id") }; return e("<input />", i) },
                id: function (t) { return e("<a />", { text: t.get("id"), href: "#submission/" + i.formId + "/" + t.get("id") }) },
                invoiceId: function (t) { var n, r = t.get("invoiceId"); return n = r > 0 ? e("<a />", { text: t.get("customerInvoiceId"), href: "#submission/" + i.formId + "/" + t.get("id") + "/invoice/" + r }) : "" },
                firstName: function (e, t) { return t.addClass("data-text-wrap"), e.get("firstName") },
                function (e, t) { return t.addClass("data-text-wrap"), e.get("checked": false, ) },
                companyName: function (e, t) { return t.addClass("data-text-wrap"), e.get("companyName") },
                submitDate: function (e, t) {
                    t.addClass("data-text-wrap");
                    var n = moment(e.get("submitDate")).tz(ORGTIMEZONE).format("MM/DD/YYYY h:mm A"),
                        i = n.slice(0, 10) + "<br>" + n.slice(11);
                    return i
                },
                amountPaid: function (e) { return "$" + parseFloat(e.get("amountPaid")).toFixed(2) },
                balance: function (e) { return "$" + parseFloat(e.get("balance")).toFixed(2) },
                actions: function (e) { return t.template(n, { model: e.toJSON() }) }
            }
        };
        return i
    }), define("text!templates/submissionList.html", [], function () { return '<div id="submission-list" class="tc">\n</div>\n<div class="jtmgio-msg info jtmgio-hide" id="no-submissions"><p>No submissions to view</p></div>\n' }), define("text!templates/template.submissionActionsDropdown.html", [], function () { return '<a id="actions-btn" class="gen-button first trigger">Actions</a>\n<select id="actions-cols" class="" style="display:none">\n    <optgroup>\n        <option>Export Tagged Submissions</option>\n        <option>Contact Tagged Submissions</option>\n    </optgroup>\n</select>\n' }), define("models/Submission", ["jquery", "backbone", "base/Model"], function (e, t, n) {
        return n.extend({
            urlRoot: "/form/submission",
            getId: function () { return this.get("id") },
            getNewInvoice: function (e) {
                var t = this.get("newInvoices"),
                    n = _.where(t, { id: e });
                return n.length ? n[0] : !1
            },
            getNewInvoices: function () { return this.get("newInvoices") },
            addNewInvoice: function (e) {
                var t = this.get("newInvoices");
                t.push(e)
            },
            removeNewInvoice: function (e) {
                var t = this.get("newInvoices"),
                    n = _.reject(t, function (t) { return t.id == e ? t : void 0 });
                return this.set("newInvoices", n), n
            },
            validateInvoices: function () {
                var e = 0,
                    t = this.get("newInvoices");
                return _.each(t, function (t) { t.getLineItems().length && e++ }), e == t.length ? !0 : !1
            }
        })
    }), define("text!templates/submissionBtnbar.html", [], function () { return '<div id="frm-list">\n    <span class="col">\n        <select id="filter-submission-status">\n            <option value="active">Active</option>\n            <option value="deleted">Deleted</option>\n        </select>\n    </span>\n	<span class="col">\n		<div class="button-group">\n			<a data-type="0" id="0-filter" data-filter="all" class="filter gen-button first pressed">All</a>\n			<a data-type="1" id="1-filter" data-filter="paid" class="filter gen-button">Paid</a>\n			<a data-type="2" id="2-filter" data-filter="unpaid" class="filter gen-button last">Unpaid</a>\n		</div>\n	</span>\n    <span class="tag-col col">\n        <%= taggedCount %> Tagged <%= jtmg.pluralize( \'Submission\', taggedCount ) %>\n    </span>\n    <span class="col">\n        <div class="dropdown-container">\n            <a id="actions-btn" class="gen-button first trigger">Actions</a>\n            <select id="actions-cols" class="" style="display:none">\n                <optgroup>\n                    <option>Export Tagged Submissions</option>\n                    <option>Contact Tagged Submissions</option>\n                </optgroup>\n            </select>\n        </div>\n    </span>\n    <span class="col">\n        <a id="clear-tagged" class="alt-button red disabled">Untag</a>\n    </span>\n    <span id="search-container" class="col push-right">\n        <input id="search-form-input" type="text" placeholder="Search Submissions" autofocus>\n        <a id="search-form"  class="gen-button"><i class="icon-search"></i> Search</a>\n        <i id="clear-search" class="fa fa-times-sign clear-search"></i>\n    </span>\n\n</div>\n' }), "undefined" == typeof jtmg && (jtmg = {}), jtmg.pluralize = function () {
        function e(e, t) { return t.match(/^[A-Z]/) ? e.charAt(0).toUpperCase() + e.slice(1) : e }

        function t(e) { e = e.split(","); for (var t = e.length, n = {}, i = 0; t > i; i++) n[e[i]] = 1; return n }

        function n(t, n, o) { if ("" === t) return ""; if (1 === n) return t; if ("string" == typeof o) return o; var c = t.toLowerCase(); if (c in i) return e(i[c], t); if (t.match(/^[A-Z]$/)) return t + "'s"; if (t.match(/fish$|ois$|sheep$|deer$|pox$|itis$/i)) return t; if (t.match(/^[A-Z][a-z]*ese$/)) return t; if (c in r) return t; if (c in a) return e(a[c], t); for (var l = s.length, u = 0; l > u; u++) { var d = s[u]; if (t.match(d[0])) return t.replace(d[0], d[1]) } return t + "s" }
        var i = {},
            r = t("aircraft,advice,blues,corn,molasses,equipment,gold,information,cotton,jewelry,kin,legislation,luck,luggage,moose,music,offspring,rice,silver,trousers,wheat,bison,bream,breeches,britches,carp,chassis,clippers,cod,contretemps,corps,debris,diabetes,djinn,eland,elk,flounder,gallows,graffiti,headquarters,herpes,high,homework,innings,jackanapes,mackerel,measles,mews,mumps,news,pincers,pliers,proceedings,rabies,salmon,scissors,sea,series,shears,species,swine,trout,tuna,whiting,wildebeest,pike,oats,tongs,dregs,snuffers,victuals,tweezers,vespers,pinchers,bellows,cattle"),
            a = { I: "we", you: "you", he: "they", it: "they", me: "us", you: "you", him: "them", them: "them", myself: "ourselves", yourself: "yourselves", himself: "themselves", herself: "themselves", itself: "themselves", themself: "themselves", oneself: "oneselves", child: "children", dwarf: "dwarfs", mongoose: "mongooses", mythos: "mythoi", ox: "oxen", soliloquy: "soliloquies", trilby: "trilbys", person: "people", forum: "forums", syllabus: "syllabi", alumnus: "alumni", genus: "genera", viscus: "viscera", stigma: "stigmata" },
            s = [[/man$/i, "men"], [/([lm])ouse$/i, "$1ice"], [/tooth$/i, "teeth"], [/goose$/i, "geese"], [/foot$/i, "feet"], [/zoon$/i, "zoa"], [/([tcsx])is$/i, "$1es"], [/ix$/i, "ices"], [/^(cod|mur|sil|vert)ex$/i, "$1ices"], [/^(agend|addend|memorand|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi)um$/i, "$1a"], [/^(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|\w+hedr)on$/i, "$1a"], [/^(alumn|alg|vertebr)a$/i, "$1ae"], [/([cs]h|ss|x)$/i, "$1es"], [/([aeo]l|[^d]ea|ar)f$/i, "$1ves"], [/([nlw]i)fe$/i, "$1ves"], [/([aeiou])y$/i, "$1ys"], [/(^[A-Z][a-z]*)y$/, "$1ys"], [/y$/i, "ies"], [/([aeiou])o$/i, "$1os"], [/^(pian|portic|albin|generalissim|manifest|archipelag|ghett|medic|armadill|guan|octav|command|infern|phot|ditt|jumb|pr|dynam|ling|quart|embry|lumbag|rhin|fiasc|magnet|styl|alt|contralt|sopran|bass|crescend|temp|cant|sol|kimon)o$/i, "$1os"], [/o$/i, "oes"], [/s$/i, "ses"]];
        return n.define = function (e, t) { i[e.toLowerCase()] = t }, n
    }(), define("pluralize", function () {}), function (e) {
        e.fn.extend({
            jtmgioDropDownList: function (t) {
                function n(e) { return "listitem_" + e.replace(/[^\w\s]/gi, "").replace(/ /g, "_").toLowerCase() }
                var i = { position: "bottom", group: !1, arrow: !0, rightPosition: 0, topPosition: !1, leftPosition: 0 },
                    t = e.extend(i, t),
                    r = t.position;
                return this.each(function () {
                    function i() { c.closest("div.jtmgio-custom-dropdown").mouseleave(function () { c.hide(), u.removeClass("pressed"), d.removeClass("pressed"), c.closest("div.jtmgio-custom-dropdown").off("mouseleave") }) }
                    var a = t,
                        s = (console.log, e(this)),
                        o = e("<div />", { "class": "jtmgio-custom-dropdown" }),
                        c = e("<div />", { "class": "jtmgio-dropdown-list" }),
                        l = s.parent("div.dropdown-container"),
                        u = l.find("a.trigger"),
                        d = l.prev(),
                        f = s.find("optgroup");
                    c.attr("id", s.attr("id")), f.each(function (t, i) {
                        var r = e(i),
                            a = r.find("option"),
                            s = e("<ul />"),
                            o = r.attr("label");
                        "undefined" != typeof o && c.append(e("<p />", { text: o, "class": "jtmgio-drop-section-title" })), a.each(function (t, i) {
                            var r = e(i),
                                a = r.data("icon"),
                                o = r.data(),
                                c = e("<li />", { "class": n(r.text()) + " jtmgiodropdown-listitem" });
                            if (c.data(o), "undefined" != typeof a) {
                                var l = e("<i />", { "class": a }),
                                    u = e("<span />");
                                u.append(l).append(" " + r.html()), c.html(u)
                            } else c.text(r.html());
                            c.bind("click", function () { "undefined" != typeof o.url && (window.location = o.url) }), s.append(c)
                        }), c.append(s)
                    }), l.wrap(function () { return o }), u.after(c), u.css("display", "inline-block");
                    var h = 23;
                    h = h + 3 + "px", 0 != a.topPosition && (h = a.topPosition);
                    var p = { top: h, display: "none" };
                    0 != a.rightPosition && (p.right = a.rightPosition), 0 != a.leftPosition && (p.left = a.leftPosition), c.css(p);
                    void 0 !== a.buttonState && "enable" == a.buttonState ? u.removeClass("disabled") : void 0 !== a.buttonState && u.addClass("disabled"), u.click(function (e) { "top" == r && (h = -(3 + c.outerHeight()) + "px", c.css({ top: h })), void 0 !== a.buttonState && "enable" == a.buttonState ? c.show() : void 0 === a.buttonState && c.show(), u.addClass("pressed"), d.addClass("pressed"), setTimeout(i, 500), e.preventDefault() }), c.unbind("mouseenter mouseleave");
                    var m = l.find(".jtmgio-dropdown-text");
                    if (0 == e.map(m, function (e, t) { return t }).length) {
                        { u.find(".jtmgio-dropdown-select") }
                        u.find(".jtmgio-dropdown-select").addClass("remove-select-styling"), a.arrow && !u.has("div.added-arrow").length && u.append('<div class="added-arrow"></div>')
                    }
                    s.remove()
                })
            }
        })
    }(jQuery), define("dropdown", function () {}), define("views/SubmissionListView", ["jquery", "underscore", "backbone", "views/view.base", "com/modal/Modal", "com/table/table_component", "collections/SubmissionListTable", "configs/config.submissions", "text!templates/submissionList.html", "text!templates/template.submissionActionsDropdown.html", "models/Submission", "text!templates/submissionBtnbar.html", "pluralize", "dropdown"], function (e, t, n, i, r, a, s, o, c, l, u, d) {
        var f = jtmgio.app.bootstrap,
            h = i.extend({
                id: "table-utilities",
                className: "bar-container",
                events: { "click #search-form": "searchCollection", "keydown #search-form-input": "searchByEnter", "click #clear-search": "resetSearch", "keyup #search-form-input": "keyPressDelete", "change #filter-submission-status": "filterStatus", "click #export-btn": "exportSubmissions", "click .filter": "filterByPaid", "click .listitem_export_tagged_submissions": "exportTaggedSubmissions", "click .listitem_contact_tagged_submissions": "contactTaggedSubmissions" },
                filterByPaid: function (t) {
                    var n, i, r, a;
                    n = e(t.currentTarget), i = n.data("filter"), this.$(".filter").removeClass("pressed"), n.addClass("pressed"), r = this.$("#search-form-input").val(), a = this.$("#filter-submission-status").val(), f.Vent.trigger("submissionList:searchCollection", { filter: i, searchValue: r, status: a, resetSearch: !1 }), t.preventDefault()
                },
                exportTaggedSubmissions: function (e) { this.createModal([], "views/modals/modal.exportSubmissions", { formId: f.formId, uuId: this.collection.getTagId() }), e.preventDefault() },
                contactTaggedSubmissions: function (e) { this.createModal(this.collection, "views/modals/modal.emailSubmissions", { formId: f.formId, uuId: this.collection.getTagId(), taggedCount: this.taggedCount }), e.preventDefault() },
                keyPressDelete: function (e) {
                    var n, i, r, a = [8, 46];
                    n = this.$("#search-form-input"), i = n.val(), r = e.keyCode || e.which, t.indexOf(a, r) > -1 && 0 === i.length && this.resetSearch(e)
                },
                initialize: function () { f.Vent.off("submissionListBtnBar:resetSearch, submissionListBtnBar:resetSearchInputs, submissionListBtnBar:updateTaggedCount"), f.Vent.on("submissionListBtnBar:resetSearch", this.resetSearch, this), f.Vent.on("submissionListBtnBar:resetSearchInputs", this.resetInputs, this), f.Vent.on("submissionListBtnBar:updateTaggedCount", this.updateTaggedCount, this), this.changePropName(this), this.actionsState = "disable" },
                render: function () { return this.$el.html(t.template(d, { taggedCount: 0 })), this.$("#search-form-input").val(this.searchTerm), this.$("#filter-submission-status").val(this.status), this.searchTerm.length > 0 && this.$("#clear-search").show(), this.$("#search-form-input").focus(), this.$(".filter").removeClass("pressed"), this.$('a[ data-filter="' + this.filter + '"].filter').addClass("pressed"), this.$("#actions-cols").jtmgioDropDownList({ buttonState: this.actionsState }), this.$(".dropdown-container").mouseleave(function () { e("#actions-cols").hide() }), this },
                resetInputs: function () { this.searchTerm = "", this.$("#search-form-input").val(""), this.$("#clear-search").hide() },
                resetSearch: function (e) {
                    var t;
                    t = this.$("#filter-submission-status").val(), f.Vent.trigger("submissionList:clearSearch", { status: t, resetSearch: !1 }), this.$("#search-form-input").val(""), e.preventDefault && e.preventDefault()
                },
                searchByEnter: function (e) {
                    var n, i, r, a = [8, 46];
                    n = this.$("#search-form-input"), i = n.val(), r = e.keyCode || e.which, 0 === r || e.ctrlKey || e.metaKey || e.altKey || (i.length >= 0 && this.$("#clear-search").show(), i.length > 0 && 13 == r ? this.searchCollection(e) : i.length <= 1 && t.indexOf(a, r) > -1 && this.resetSearch(e))
                },
                searchCollection: function (e) {
                    var t, n, i;
                    t = this.$("#search-form-input"), n = this.$("#filter-submission-status").val(), i = this.$(".filter.pressed").data("filter"), f.Vent.trigger("submissionList:searchCollection", { filter: i, searchValue: t.val(), status: n, resetSearch: !1 }), e.preventDefault()
                },
                filterStatus: function (e) { this.searchCollection(e) },
                updateTaggedCount: function () {
                    function n(n, i) {
                        n.taggedCount = i;
                        var r = "<%= taggedCount %> Tagged <%= jtmg.pluralize( 'Submission', taggedCount ) %>";
                        e(".tag-col").html(t.template(r, { taggedCount: i })), n.actionsState = i > 0 ? "enable" : "disable", n.$("#clear-tagged")[i > 0 ? "removeClass" : "addClass"]("disabled"), n.$(".dropdown-container").html(l), n.$("#actions-cols").jtmgioDropDownList({ buttonState: n.actionsState })
                    }
                    var i = this.collection.getTaggedCount();
                    0 !== i ? i.always(function (e) { n(this, e) }.bind(this)) : n(i)
                }
            });
        return i.extend({
            initialize: function () { this.changePropName(this), this.Vent = f.Vent, f.Vent.on("close:all", this.close, this), this.Vent.on("submissionlist:close", this.close, this), f.Vent.off("submissionList:refresh", "submissionList:searchCollection", "submissionList:clearSearch", "tablecomponent:clickedCheckBoxAction"), f.Vent.on("submissionList:refresh", this.initTable, this), f.Vent.on("submissionList:searchCollection", this.searchCollection, this), f.Vent.on("submissionList:clearSearch", this.clearSearch, this), f.Vent.on("tablecomponent:clickedCheckBoxAction", this.tagOneSubmission, this), this.searchTerm = "", this.status = "active", this.filter = "all", this.taggedSubmissions = [], this.tagAllSubmissions = !1, this.render() },
            events: { "click .delete-submission": "deleteSubmission", "click #tagvisible": "tagSubmissions", "click #tagall": "tagSubmissions", "click #clear-tagged": "clearAllTags" },
            close: function () { this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), n.View.prototype.remove.call(this), delete this.$el, delete this.el, this.Vent.unbind(), this.Vent.stopListening() },
            searchCollection: function (e) { this.searchTerm = e.searchValue, this.status = e.status, this.filter = e.filter, this.collection.setSearchTerm(e.searchValue, e.status, e.filter), this.initTable(e) },
            clearSearch: function (e) { this.searchTerm = "", e.searchValue = this.searchTerm, this.status = e.status, e.filter = this.filter, this.collection.setSearchTerm(e.searchValue, e.status, this.filter), this.initTable(e) },
            tagSubmissions: function (n) {
                var i = this.$el.find('input[ type="checkbox" ].submission-check'),
                    r = "tag" == e(n.currentTarget).data("action") ? !0 : !1,
                    a = e(n.currentTarget).data("type");
                i.prop("checked", r);
                var s = t.map(i, function (t) { return { id: parseInt(e(t).val()) } });
                this.collection[r ? "tagSubmissions" : "untagSubmissions"]("all" == a ? [] : s).always(function () { f.Vent.trigger("submissionListBtnBar:updateTaggedCount") }), this.tagAllSubmissions = "all" == a && r ? !0 : !1, e(n.currentTarget).data("action", r ? "untag" : "tag");
                var o = "all" == a ? r ? "Untag all on all pages" : "Tag all on all pages" : r ? "Untag all on this page" : "Tag all on this page";
                e(n.currentTarget).html(o), e("#tag-actions").hide(), n.preventDefault()
            },
            tagOneSubmission: function (e) {
                var t = parseInt(e.checkbox.val()),
                    n = this.collection[e.checkbox.is(":checked") ? "tagSubmissions" : "untagSubmissions"]([{ id: t }]);
                n && n.always(function () { f.Vent.trigger("submissionListBtnBar:updateTaggedCount") })
            },
            clearAllTags: function (t) {
                if (!e(t.currentTarget).hasClass("disabled")) {
                    var n = this,
                        i = this.$el.find('input[ type="checkbox" ].submission-check'),
                        a = new r("simple"),
                        s = "Are you sure you want to untag all submissions?",
                        o = function () {
                            i.prop("checked", !1);
                            var e = n.collection.untagSubmissions("clear");
                            e && e.always(function () { f.Vent.trigger("submissionListBtnBar:updateTaggedCount") })
                        };
                    a.action(["createSimpleModal", s, o, "Untag"]), t.preventDefault()
                }
            },
            render: function () { return this.$el.html(t.template(c, {})), this.initTable(), this },
            renderTable: function () {
                var t = this;
                if (o.formId = this.formId, table = new a(o, this.collection).init(f.Vent, this.$el), this.$(".tc").html(table.setBar([new h({ collection: t.collection, searchTerm: t.searchTerm, status: t.status, type: t.type, filter: t.filter })]).getBar().$el), this.collection.length ? (this.$(".submission-table").remove(), this.$(".tc").append(table.renderTable("submission-table")), this.$(".tc").append(table.getPagerFactory().$el), e("#component-wrapper").whiteout("clear"), this.$("#no-submissions").hide()) : this.$("#no-submissions").show(), this.isLoaded = !0, e("#search-form-input").focus(), this.resetTag || f.Vent.trigger("submissionListBtnBar:updateTaggedCount"), this.collection.length > 0) {
                    var n = this.$el.find("input.submission-check:checked");
                    e("#tagvisible").html(n.length == this.collection.length ? "Untag all on this page" : "Tag all on this page"), e("#tagvisible").data("action", n.length == this.collection.length ? "untag" : "tag");
                    var i = this.tagAllSubmissions ? "Untag all on all pages" : "Tag all on all pages";
                    e("#tagall").html(i), e("#tagall").data("action", this.tagAllSubmissions ? "untag" : "tag")
                }
                e("#toggletag").click(function () { e("#tag-actions").show().mouseleave(function () { e(this).hide() }) }), this.$(".submission-table").prop("id", "jtmgio-scroll")
            },
            initTable: function (e) {
                var n = this;
                delete this.collection, this.collection = new s, this.collection.setFormId(this.formId), this.collection.setStatus(e ? e.status : this.status), this.resetTag && this.collection.resetResourceUrls(), e === !0 && (this.searchTerm = "", f.Vent.trigger("submissionListBtnBar:resetSearchInputs", { dontReset: !0 }), this.collection.clearSearch()), e && this.collection.setSearchTerm(e.searchValue, e.status, e.filter);
                var i = function (e, i, r, a) {
                    (e.resetTag || t.isUndefined(n.collection.tagId)) && (n.tagId = n.tagId ? n.tagId : r.xhr.getResponseHeader("X-jtmgio-TagId"), n.collection.setTagId(n.tagId), e.resetTag = !1), a.sortName && (i.sortField = a.sortName, i.sortDir = a.sortDirection.toLowerCase(), n.collection.sorter(a.sortName, a.sortDirection))
                };
                this.collection.startPager(this), this.collection.pager({ sortName: "submitDate", sortDirection: "desc", callback: i, renderMethod: "renderTable" })
            },
            deleteSubmission: function (t) {
                var n, i, a, s, o, c, l, d, f, h;
                if (c = this, n = e(t.currentTarget), i = n.data("id"), l = new u({ id: i }), d = this.collection.perPage, f = n.data("applicantcount"), h = n.data("registrantcount"), a = new r("simple"), s = "", f > 0) {
                    var p = f > 1 ? "A" : "An a",
                        m = f > 1 ? "s are" : " is";
                    s = s + "<li>" + p + "pplicant" + m + " associated with this submission. Expiration dates and other data may need to be modified on each of the associated profiles.</li>"
                }
                if (h > 0) {
                    var g = h > 1 ? "s" : " ";
                    s = s + "<li>The registrant" + g + " associated with this submission will be removed from the event.</li>"
                }
                s.length > 0 && (s = "<p><strong>Please review the following:</strong></p><ul>" + s + "</ul>"), s += "<p>Are you sure you want to delete this submission?</p>", o = function () { l.destroy().always(function () { c.initTable(), c.collection.perPage = d }) }, a.action(["createSimpleModal", s, o, "Delete"]), t.preventDefault()
            }
        })
    }), define("com/tabs/views/MainTabView", ["jquery", "underscore", "backbone", "base/View"], function (e, t, n, i) {
        var r = tabNameSpace = {},
            a = [],
            s = [],
            o = (console.log, i.extend({
                attributes: function () { var e = this.changePropName(this); return { id: e.config.tabID, "class": "tabs" } },
                initialize: function () {
                    var e = this.changePropName(this);
                    r.config = e.config, r.vent = e.vent, r.vent.off("changeTab"), r.vent.off("changeTabByTrigger"), a = [], this.render()
                },
                render: function () {
                    var e = new c,
                        t = new d;
                    return this.$el.append(e.$el), this.$el.append(t.$el), this
                }
            })),
            c = i.extend({
                attributes: function () { return { "class": "tab-buttons" } },
                tagName: "ul",
                events: { "click li.tab-nav": "changeTab" },
                changeTab: function (t) {
                    var n = e(t.currentTarget),
                        i = n.data();
                    n.hasClass("disabled") || (e(".tab-nav").removeClass("active"), n.addClass("active"), r.vent.trigger("changeTab", i)), t.preventDefault()
                },
                changeTabByTrigger: function (t) { e(".tab-nav").removeClass("active"), e("li#tab-" + t.tabname).addClass("active") },
                initialize: function () {
                    var e = this.changePropName(this);
                    t.bindAll(this, "changeTabByTrigger"), r.vent.on("changeTabByTrigger", this.changeTabByTrigger), t.each(r.config.tabsMap, function (t, n) { e.$el.append(new l({ tab: t(), key: n }).$el) }), t.isUndefined(r.config.activeTab) && e.$el.find("li:first-child").addClass("active"), this.render()
                },
                render: function () { return this }
            }),
            l = i.extend({
                attributes: function () {
                    var e = this.changePropName(this),
                        n = { "class": "tab-nav" };
                    return h(e) && (n["class"] += " active"), n.id = "tab-" + e.key, n["data-tabName"] = e.key, !t.isUndefined(r.config.disabled) && r.config.disabled[e.key] && (n["class"] += " disabled"), n
                },
                tagName: "li",
                initialize: function () {
                    this.changePropName(this);
                    this.render()
                },
                render: function () { var e = this; return this.$el.html(new u({ tabName: e.tab }).$el), this }
            }),
            u = i.extend({
                attributes: function () { return {} },
                tagName: "div",
                initialize: function () {
                    this.changePropName(this);
                    this.render()
                },
                render: function () { var e = this; return this.$el.html(e.tabName), this }
            }),
            d = i.extend({
                attributes: function () { return { "class": "tab-container" } },
                initialize: function () {
                    this.changePropName(this);
                    t.bindAll(this, "changeTab"), r.vent.on("changeTab", this.changeTab), this.render()
                },
                changeTab: function (e) {
                    var t, n = this;
                    n.$el.find(".tab").removeClass("active"), r.vent.trigger("changeTabByTrigger", { tabname: e.tabname }), t = n.$el.find("div#tab-container-" + e.tabname).addClass("active"), p(t, e.tabname, e)
                },
                render: function () { var e = this; return t.each(r.config.tabsMap, function (t, n) { e.$el.append(new f({ tab: t(), key: n }).$el) }), this.$el.html(), this }
            }),
            f = i.extend({
                attributes: function () {
                    var e = this.changePropName(this),
                        t = { "class": "tab" };
                    return h(e) && (t["class"] += " active"), t.id = "tab-container-" + e.key, t
                },
                initialize: function () {
                    this.changePropName(this);
                    this.render()
                },
                render: function () { var n = this; return t.isUndefined(r.config.activeTab) ? n.$el.find("div:first-child").addClass("active") : h(n) || !t.isUndefined(r.config.loadAll) && r.config.loadAll ? p(this.$el, n.key) : e.inArray(n.key, r.config.loadTabList) > -1 && p(this.$el, n.key), this }
            }),
            h = function (e) { return !t.isUndefined(r.config.activeTab) && e.tab.toLowerCase() == r.config.activeTab.toLowerCase() },
            p = function (e, n, i) {
                if (t.contains(a, n)) return !0;
                var o = tabContainerData = t.isFunction(r.config.tabsContainerMap[n]) ? r.config.tabsContainerMap[n]() : r.config.tabsContainerMap[n];
                !t.isUndefined(o.onBeforeRender) && t.isFunction(o.onBeforeRender) && o.onBeforeRender(e), t.each(s, function (e, n) { t.isUndefined(e) || t.isUndefined(e.remove) || (e.remove(), s.splice(n, 1)) }), require([o.viewPath], function (c) {
                    var c = new c({ vent: o.vent, data: o.data, completeData: i });
                    o.reload ? s.push(c) : a.push(n), e.empty(), e.html(c.$el), t.isUndefined(r.config.controlBtns) || t.isUndefined(r.config.controlBtns[n]) || e.prepend(r.config.controlBtns[n](c, e, n)), !t.isUndefined(o.onBeforeRender) && t.isFunction(o.onBeforeRender) && o.onAfterRender(e)
                })
            };
        return o
    }), define("com/tabs/Tabs", ["jquery", "underscore", "backbone", "com/tabs/views/MainTabView"], function (e, t, n, i) { var r = function (e, t) { var n = (console.log, this); return this.version = "1.0", this.config = e || {}, this.vent = t, this.tabs = null, this.init = function () { return n.setTabs(new i({ config: n.config, vent: n.vent })), this }, this.setTabs = function (e) { return this.tabs = e, this }, this.getTabs = function () { return this.tabs }, this.init(), this }; return r }), function (e, t) {
        var n = (e(t), console.log, "jqwhiteout"),
            i = "has-modal",
            r = {};
        e.fn.extend({ whiteout: function (t, n) { return t && "object" == typeof t ? (t = e.extend(!0, {}, e.whiteout.defaults, t), r = t.css) : r = e.whiteout.defaults.css, this.each(function () { new e.whiteout(this, t, n) }), this } }), e.whiteout = function (a, s, o) {
            function c(e, t, n, i) { return n * e / i + t }

            function l(e, t, n, i) {
                var r = (e /= i) * e,
                    a = r * e;
                return t + n * (6 * a * r + -15 * r * r + 10 * a)
            }

            function u() {
                function n() {
                    var e = h(),
                        t = p(e),
                        n = e / 2 + "px",
                        i = { width: e + "px", height: e + "px" };
                    m[0].setAttribute("viewBox", "0 0 " + e + " " + e), m.css(i).css("transform-origin", n + " " + n + " " + n), y.css("stroke-width", t + "px")
                }

                function i(e, n, i, r, a) {
                    var s = ++C,
                        c = u(),
                        l = n - e,
                        f = h(),
                        m = f - p(f),
                        g = i || v.easeFn,
                        A = r || v.duration;
                    n === e ? y.attr("d", d(n, f, m, a)) : o = b(function w(n) {
                        var i = t.Math.max(0, t.Math.min((n || u()) - c, A));
                        y.attr("d", d(g(i, e, l, A), f, m, a)), s === C && A > i && (o = b(w))
                    })
                }

                function r() {
                    if (l || e("body").find(f).length) {
                        l && (l = !1), i(A, w, v.easeFnIndeterminate, v.durationIndeterminate, T), y.attr("stroke", x[M / 2]), M = (M + 1) % (2 * x.length), T = (T + w) % 100;
                        var t = A;
                        A = -w, w = -t
                    } else s()
                }

                function a() { c || (c = setInterval(r, v.durationIndeterminate + 50), r()) }

                function s() { c && (clearInterval(c), c = null) }
                var o, c, l = !0,
                    u = t.performance ? function () { return t.performance.now() } : Date.now || function () { return (new Date).getTime() },
                    f = g,
                    m = f.find("svg"),
                    y = f.find("path"),
                    A = v.startIndeterminate,
                    w = v.endIndeterminate,
                    T = 0,
                    C = 0,
                    x = ["#00A3E0", "#6CC24A", "#F1C400"],
                    M = 0;
                a(), n()
            }

            function d(e, t, n, i) {
                var r, a = 3.5999,
                    s = i || 0,
                    o = t / 2,
                    c = n / 2,
                    l = s * a,
                    u = e * a,
                    d = f(o, c, l),
                    h = f(o, c, u + l),
                    p = 0 > u ? 0 : 1;
                return r = 0 > u ? u >= -180 ? 0 : 1 : 180 >= u ? 0 : 1, "M" + d + "A" + c + "," + c + " 0 " + r + "," + p + " " + h
            }

            function f(e, n, i) { var r = (i - 90) * y; return e + n * t.Math.cos(r) + "," + (e + n * t.Math.sin(r)) }

            function h(e) { var t = v.progressSize; if (e) { var n = parseFloat(e); return e.lastIndexOf("%") === e.length - 1 && (n = n / 100 * t), n } return t }

            function p(e) { return v.strokeWidth / 100 * e }
            var m = e(a).css("position", "relative"),
                g = e("<div></div>", { "class": n }).css(r);
            e(a).hasClass("modal") && g.addClass(i), g.html('<div class="whiteout-icon"><svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg></div>');
            var v = { progressSize: 50, strokeWidth: 10, duration: 100, easeFn: c, durationIndeterminate: 500, startIndeterminate: 3, endIndeterminate: 80, easeFnIndeterminate: l, easingPresets: { linearEase: c, materialEase: l } },
                b = t.requestAnimationFrame || e.noop,
                y = (t.cancelAnimationFrame || e.noop, t.Math.PI / 180);
            if (this.actions = { start: function () { e(".modal").addClass("whiteout-loading"), e(".whiteout").addClass("whiteout-loading"), 0 === m.find(".jqwhiteout").length && (m.prepend(g), u()) }, clear: function () { e(".modal").removeClass("whiteout-loading"), m.find("div." + n).remove() }, clearAll: function () { console.log(e("body").find(".jqwhiteout")) } }, !s || "string" != typeof s) return void this.actions.start(o, s);
            try { this.actions[s](o, s) } catch (A) { throw new Error("Plugin method does not exist, please learn to read/implement me.") }
        }, e.whiteout.defaults = { onBeforeStart: function () {}, onAfterRendered: function () {}, onBeforeRemove: function () {}, onAfterRemove: function () {}, fadeIn: !1, fadeInSpeed: "fast", fadeOut: !1, fadeOutSpeed: "fast", css: { height: "100%", left: 0, right: 0, bottom: 0, opacity: .85, position: "absolute", top: 0, width: "100%", "z-index": 1500 } }
    }(jQuery, window), define("whiteout", function () {}), define("configs/config.tabs", ["jquery", "whiteout"], function () { var e = { tabID: "submissionTabs", activeTab: "Submission", loadAll: !1, tabsMap: { submission: function () { return "Submission" } }, tabsContainerMap: {} }; return e }), define("views/ViewSubmissionView", ["jquery", "underscore", "backbone", "base/View", "com/modal/Modal", "com/tabs/Tabs", "configs/config.tabs", "models/Submission"], function (e, t, n, i, r, a, s, o) {
        var c = jtmgio.app.bootstrap;
        return i.extend({
            initialize: function () { this.changePropName(this), t.bindAll(this, "render"), this.sectionId && this.model.set("sectionId", this.sectionId), this.render() },
            events: { "click .delete-submission": "deleteSubmission" },
            render: function () {
                var e = {};
                return t.deepCopy(e, s), e.tabsContainerMap.submission = function () { return { viewPath: "views/tabs/ViewSubmissionView", reload: !0, data: { model: this.model } } }.bind(this), t.each(this.model.get("invoices"), function (n) {
                    var i = n.creditMemo ? "Credit Memo" : "Invoice";
                    e.tabsMap["invoice" + n.invoiceId] = function () { return i + " # " + n.customerId }, e.tabsContainerMap["invoice" + n.invoiceId] = function () { return { viewPath: "views/tabs/ViewInvoice", reload: !0, data: { invoiceId: n.invoiceId, model: this.model } } }, t.isUndefined(this.invoiceId) || n.invoiceId != this.invoiceId || (this.invoice = n)
                }, this), t.isUndefined(this.invoiceId) || (e.activeTab = "Invoice # " + this.invoice.customerId), tabs = new a(e, c.Vent), this.$el.html(tabs.getTabs().$el), this
            },
            deleteSubmission: function (t) {
                var n, i, a, s, c, l, u, d, f;
                if (l = this, n = e(t.currentTarget), i = n.data("id"), u = new o({ id: i }), d = n.data("applicantcount"), f = n.data("registrantcount"), a = new r("simple"), s = "", d > 0) {
                    var h = d > 1 ? "A" : "An a",
                        p = d > 1 ? "s are" : " is";
                    s = s + "<li>" + h + "pplicant" + p + " associated with this submission. Expiration dates and other data may need to be modified on each of the associated profiles.</li>"
                }
                if (f > 0) {
                    var m = f > 1 ? "s" : " ";
                    s = s + "<li>The registrant" + m + " associated with this submission will be removed from the event.</li>"
                }
                s.length > 0 && (s = "<p>Please review the following:</p><ul>" + s + "</ul>"), s += "<p>Are you sure you want to delete this submission?</p>", c = function () { u.destroy().always(function () { window.location = "/administrator/index.php?option=com_jtmgioform&view=formlist" }) }, a.action(["createSimpleModal", s, c, "Delete"]), t.preventDefault()
            }
        })
    }), define("sModels/Generic", ["jquery", "backbone", "base/Model"], function (e, t, n) { var i = n.extend(); return i }), define("collections/collection.formevents", ["jquery", "backbone", "base/Collection", "sModels/Generic"], function (e, t, n, i) { jtmgio.app.bootstrap; return n.extend({ url: function () { return "/form/form/" + this.formId + "/events" }, setFormId: function (e) { return this.formId = e, this }, model: i }) }), define("models/SubmissionLayout", ["jquery", "backbone", "base/Model"], function (e, t, n) {
        return n.extend({
            urlRoot: "/form/submissionLayout",
            edit: !1,
            editMode: function () { return this.edit = !0, this },
            fetch: function (t) { t = t || {}; var n = _.clone(t); return delete n.codes, _.has(t, "edit") && (this.url = this.urlRoot + "/" + this.get("id") + "/edit"), _.has(t, "codes") && (this.url = this.urlRoot + "/" + this.get("id") + "/edit?" + e.param(n, !0)), this.constructor.__super__.fetch.apply(this, arguments) },
            pluckOrganizationFields: function () {
                var e = [],
                    t = this.get("sections"),
                    n = _.where(t, { type: 4 });
                return _.each(n, function (t) {
                    if (!_.isNull(t.organization)) {
                        var n = { id: t.organization.id, sectionId: t.organization.sectionId, fieldValues: [] };
                        _.each(t.organization.elements, function (e) { e.fieldValues ? _.each(e.fieldValues, function (e) { n.fieldValues.push(e) }) : n.fieldValues.push(e.fieldValue) }), e.push(n)
                    }
                }), e
            },
            pluckApplicantFields: function () {
                var e = [],
                    t = this.get("sections"),
                    n = _.where(t, { type: 4 });
                return _.each(n, function (t) {
                    _.each(t.applicants, function (t) {
                        var n = { id: t.id, sectionId: t.sectionId, self: t.self, userId: t.userId, fieldValues: [] };
                        _.each(t.elements, function (e) { e.fieldValues ? _.each(e.fieldValues, function (e) { n.fieldValues.push(e) }) : n.fieldValues.push(e.fieldValue) }), e.push(n)
                    })
                }), e
            },
            pluckEventFields: function () {
                var e = [],
                    t = this.get("sections"),
                    n = _.where(t, { type: 3 });
                return _.each(n, function (t) {
                    _.each(t.registrants, function (t) {
                        var n = { id: t.id, sectionId: t.sectionId, guest: t.guest, self: t.self, registered: t.registered, userId: t.userId, fieldValues: [] };
                        _.each(t.elements, function (e) { e.fieldValues ? _.each(e.fieldValues, function (e) { n.fieldValues.push(e) }) : n.fieldValues.push(e.fieldValue) }), e.push(n)
                    })
                }), e
            },
            pluckGeneralFields: function () {
                var e = [],
                    t = this.get("sections"),
                    n = _.where(t, { type: 2 });
                return _.each(n, function (t) {
                    _.each(t.elements, function (t) {
                        t.fieldValues ? _.each(t.fieldValues, function (t) {
                            e.push(t)
                        }) : e.push(t.fieldValue)
                    })
                }), e
            },
            addRegistrant: function (t, n) { var i = this.urlRoot + "/" + t.submissionId + "/" + t.sectionId + "/registrant/"; return t.self && (i += "self"), t.guest && (i += "guest"), isNaN(t.userId) || (i += "linkedProfile/" + t.userId), n && (i += "?dateBasedPriceId=" + n.dateBasedPriceId + "&discountCodeId=" + n.discountCodeId), e.ajax({ url: i, type: "GET" }) },
            toggleRegistrant: function (e) {
                var t = this.get("sections");
                _.each(t, function (n, i) {
                    if (n.id == e.sectionid) {
                        var r = [];
                        _.each(n.registrants, function (t) { t.id == e.registrantid && (t.registered = !e.registered), r.push(t) }), t[i].registrants = r
                    }
                }, this), this.set("sections", t)
            },
            injectRegistrant: function (e, t) {
                var n = this.get("sections");
                _.each(n, function (i, r) { i.id == e && n[r].registrants.push(t) }, this), this.set("sections", n)
            },
            ejectRegistrant: function (e, t) {
                var n = this.get("sections");
                _.each(n, function (i, r) {
                    if (i.id == e) {
                        var a = _.reject(n[r].registrants, function (e) { return e.id == t ? e : void 0 });
                        n[r].registrants = a
                    }
                }, this), this.set("sections", n)
            }
        })
    }), define("text!templates/toolbarTemplate.html", [], function () { return '<div class="toolbar" id="toolbar">\n	<table class="toolbar">\n		<tbody>\n			<tr>\n                \n                <% if( page == "submission" || page == "viewregistrants" ){ %>\n                <td class="button">\n                	<a href="/administrator/index.php?option=com_jtmgioform&view=formlist#" class="toolbar">\n                		<img src="templates/LanternVerde/images/toolbar/icon-32-back.png" title="Message Details" />Form List\n                	</a>\n                </td>                \n                <% } %>\n\n                <% if( page == "viewsubmission" ){ %>\n                <td class="button">\n                	<a href="/administrator/index.php?option=com_jtmgiocore&view=profile&id=<%= userId %>" class="toolbar">\n                		<img src="templates/LanternVerde/images/toolbar/icon-32-profile.png" title="Message Details" />View Profile\n                	</a>\n                </td>                \n                <td class="button">\n                	<a href="/administrator/index.php?option=com_jtmgioform&view=formlist#" class="toolbar">\n                		<img src="templates/LanternVerde/images/toolbar/icon-32-back.png" title="Message Details" />Form List\n                	</a>\n                </td>                \n                <td class="button">\n                	<a href="/administrator/index.php?option=com_jtmgioform&view=formlist#submissions/<%= id %>" class="toolbar">\n                		<img src="templates/LanternVerde/images/toolbar/icon-32-back.png" title="Message Details" />Submission List\n                	</a>\n                </td>\n					<% if( sectionId ){ %>\n					<td class="button">\n						<a href="/administrator/index.php?option=com_jtmgioform&view=formlist#registrants/<%= id %>/<%= sectionId %>" class="toolbar">\n							<img src="templates/LanternVerde/images/toolbar/icon-32-back.png" title="Message Details" />Registrants List\n						</a>\n					</td>\n					<% } %>\n                <% } %>\n			</tr>\n		</tbody>\n	</table>\n</div>\n<% if( page == "submission" ){ %>\n	<h3 class="header">Submission List </h3>\n<% }else if ( page == "viewsubmission" ){ %>\n	<h3 class="header">Submission List </h3>\n<% }else if ( page == "viewregistrants" ){ %>\n	<h3 class="header">Registrant List </h3>\n<% }else{ %> \n	<h3 class="header">Form List </h3>\n<%} %>\n\n<div class="clr"></div>\n' }), define("views/ToolbarView", ["jquery", "underscore", "backbone", "base/View", "text!templates/toolbarTemplate.html"], function (e, t, n, i, r) { var a = (jtmgio.app.bootstrap, i.extend({ el: "#toolbar-box", initialize: function () { this.changePropName(this), this.render() }, events: {}, render: function () { var e = this; return this.$el.html(t.template(r, { userId: t.isUndefined(e.userId) ? 0 : e.userId, page: e.page, id: t.isUndefined(e.id) ? 0 : e.id, sectionId: t.isUndefined(e.sectionId) ? 0 : e.sectionId })), this } })); return a }), define("models/Registrant", ["jquery", "backbone", "base/Model"], function (e, t, n) { return n.extend({ urlRoot: "form/registrant", tag: !1, attend: function (t) { return e.ajax({ url: "/form/registrant/status/attend/" + this.get("formid") + "/" + this.get("sectionid"), type: "PUT", contentType: "application/json", dataType: "json", data: JSON.stringify(t) }) }, register: function (t) { return e.ajax({ url: "/form/registrant/status/register/" + this.get("formid") + "/" + this.get("sectionid"), type: "PUT", contentType: "application/json", dataType: "json", data: JSON.stringify(t) }) }, noShow: function (t) { return e.ajax({ url: "/form/registrant/status/noshow/" + this.get("formid") + "/" + this.get("sectionid"), type: "PUT", contentType: "application/json", dataType: "json", data: JSON.stringify(t) }) } }) }), define("collections/Registrants", ["jquery", "backbone", "base/Collection", "models/Registrant"], function (e, t, n, i) { jtmgio.app.bootstrap; return n.extend({ url: function () { return "/form/registrant?formId=" + this.formId + "&sectionId=" + this.sectionId }, model: i, setUrlVars: function (e, t) { return this.formId = e, this.sectionId = t, this } }) }), define("collections/RegistrantsTable", ["jquery", "underscore", "backbone", "com/table/collections/TableClientCollection", "moment"], function (e, t, n, i) {
        var r = (jtmgio.app.bootstrap, i.extend({
            url: function () { return "/form/registrant?formId=" + this.formId + "&sectionId=" + this.sectionId },
            setUrlVars: function (e, t) { return this.formId = e, this.sectionId = t, this },
            pagerSetup: { firstPage: 1, currentPage: 1, perPage: 25, searchLen: 1, sortField: "checked": false, , collectionLoaded: !1 },
            serverDefaults: { success: function () {} },
            getModelDatum: function (e, n) { var i = { firstName: t.isNull(e.get("firstName")) ? "" : e.get("firstName"), lastName: t.isNull(e.get("checked": false, )) ? "" : e.get("checked": false, ), companyName: t.isNull(e.get("companyName")) ? "" : e.get("companyName"), registeredBy: t.isNull(e.get("registeredBy")) ? "" : e.get("registeredBy"), submissionId: t.isNull(e.get("submissionId")) ? "" : e.get("submissionId") }; return i[n] },
            comparator: function (e) {
                var n = ["amountPaid", "balance"],
                    i = ["submissionId"],
                    r = ["dateRegistered"],
                    a = { firstName: t.isNull(e.get("firstName")) ? "" : e.get("firstName"), lastName: t.isNull(e.get("checked": false, )) ? "" : e.get("checked": false, ), companyName: t.isNull(e.get("companyName")) ? "" : e.get("companyName"), status: t.isNull(e.get("status")) ? "" : e.get("status"), memberType: t.isNull(e.get("memberTypeName")) ? "" : e.get("memberTypeName"), dateRegistered: t.isNull(e.get("dateRegisteredString")) ? "" : e.get("dateRegisteredString"), amountPaid: t.isNull(e.get("amountPaid")) ? "" : e.get("amountPaid"), balance: t.isNull(e.get("balance")) ? "" : e.get("balance"), registeredBy: t.isNull(e.get("registeredBy")) ? "" : e.get("registeredBy"), submissionId: t.isNull(e.get("submissionId")) ? "" : e.get("submissionId") };
                return t.contains(i, this.sortField) ? parseInt(a[this.sortField]) : t.contains(n, this.sortField) ? parseFloat(a[this.sortField]) : t.contains(r, this.sortField) ? this.parseDateString(a[this.sortField]) : a[this.sortField].toString().toLowerCase()
            },
            parseDateString: function (e) { var t = moment(e).unix(); return t },
            searchTerm: "",
            statusFilters: [],
            tagAllRegistrants: function (e, n) {
                var i = this.isSearching ? this.filteredModels : this.origModels;
                t.each(i, function (i) { i.set("tag", e), e ? t.contains(n, i.id) || n.push(i.id) : n.splice(n.indexOf(i.id), 1) }, this)
            },
            setTaggedRegistrantStatus: function (t, n) { return e.ajax({ url: "/form/registrant/status/" + t + "/" + this.formId + "/" + this.sectionId, type: "PUT", contentType: "application/json", dataType: "json", data: JSON.stringify(n) }) },
            updateRegistrantStatus: function (e, n) { t.each(this.models, function (t) { t.get("id") == n && t.set("status", e) }) },
            filter: function () {
                if (this.searchTerm.length < this.searchLen && t.isEmpty(this.statusFilters)) return !0;
                this.isSearching = !0;
                var e = this,
                    n = this.getStartStop(),
                    i = this.origModels.slice(),
                    r = [],
                    a = ["firstName", "checked": false, , "companyName", "registeredBy", "submissionId"];
                return r = t.filter(i, function (n) {
                    var i = !1;
                    if (t.each(a, function (t) {
                            var r = e.getModelDatum(n, t).toString().toLowerCase().search(e.searchTerm);
                            r > -1 && (i = !0)
                        }), t.isEmpty(e.statusFilters) || t.contains(e.statusFilters, n.get("status"))) { if (i) return n; if (!e.searchTerm.length) return n }
                }), this.models = r.slice(), this.filteredModels = r.slice(), this.sort(), this.setPagerCounts(r), this.reset(this.models.slice(n.start, n.stop())), this.view[this.renderMethod](), this
            },
            resetRegistrants: function () { return this.statusFilters = [], t.isEmpty(this.searchTerm) ? (this.isSearching = !1, this.setPagerCounts(this.origModels).pager({ view: this.serverParams.view, successCallback: this.serverParams.viewCallback })) : this.filter(), this },
            clearSearch: function () { return this.searchTerm = "", t.isEmpty(this.statusFilters) ? (this.isSearching = !1, this.setPagerCounts(this.origModels).pager({ view: this.serverParams.view, successCallback: this.serverParams.viewCallback })) : this.filter(), this },
            setStatusFilters: function (e) { return this.statusFilters = e, this },
            setSearchTerm: function (e) { return this.searchTerm = e, this },
            getTaggedEmailRegistrantsCount: function (e) {
                var n = [],
                    i = this.filteredModels ? this.filteredModels : this.origModels,
                    r = t.filter(i, function (i) { return t.contains(e, i.get("id")) && "Guest" !== i.get("memberTypeName") && 0 !== i.get("userId") && !t.contains(n, i.get("userId")) ? (n.push(i.get("userId")), i) : void 0 });
                return r = t.pluck(r, "id")
            }
        }));
        return r
    }), define("configs/config.registrants", ["jquery", "underscore"], function (e, t) {
        var n = (jtmgio.app.bootstrap, {
            pager: !0,
            tableID: "registrants" + t.random(0, 5e5),
            tagrow: !1,
            headerMap: { tag: function () { var e = '<span id="toggletag">Tag All Users <span id="arrow"></span></span><div class="tag" id="tag-actions" style="display:none; "><ul><li><a id="tagvisible" data-action="tag" data-type="visible">Tag all on this page</a></li><li><a id="tagall" data-action="tag" data-type="all">Tag all on all pages</a></li></ul></div>'; return { cellText: e, sortColumn: !1 } }, firstName: function () { return { cellText: "First Name", sortColumn: !0 } }, lastName: function () { return { cellText: "Last Name", sortColumn: !0 } }, companyName: function () { return { cellText: "Organization", sortColumn: !0 } }, status: function () { return { cellText: "Status", sortColumn: !0 } }, memberType: function () { return { cellText: "Member Type", sortColumn: !0 } }, dateRegistered: function () { return { cellText: "Date Registered", sortColumn: !0 } }, amountPaid: function () { return { cellText: "Amount Paid", sortColumn: !0 } }, balance: function () { return { cellText: "Balance", sortColumn: !0 } }, registeredBy: function () { return { cellText: "Registered By", sortColumn: !0 } }, submissionId: function () { return { cellText: "Submission ID", sortColumn: !0 } }, actions: function () { return { cellText: "Actions", sortColumn: !1 } } },
            columns: {
                tag: function (t, n) { n.css("width", "20px").css("cursor", "pointer"); var i = { checked: t.get("tag") ? "checked" : !1, name: "reg-check", type: "checkbox", "class": "reg-check", value: t.get("id") }; return e("<input />", i) },
                firstName: function (e, t) { return t.addClass("data-text-wrap"), e.get("firstName") },
                lastName: function (e, t) { return t.addClass("data-text-wrap"), e.get("checked": false, ) },
                companyName: function (e, t) { return t.addClass("data-text-wrap"), e.get("companyName") },
                status: function (e) {
                    var n = [{ value: "Registered", id: 1 }, { value: "Cancelled", id: 2 }, { value: "Attended", id: 3 }, { value: "No Show", id: 4 }],
                        i = "";
                    2 === e.get("status") ? i = " disabled " : n = t.reject(n, { value: "Cancelled" });
                    var r = '<select class="status-change" data-regid="' + e.id + '" data-formid="' + e.get("formId") + '" data-sectionid="' + e.get("sectionId") + '" ' + i + ">";
                    return t.each(n, function (t) {
                        var n = t.id == parseInt(e.get("status")) ? " selected" : "";
                        r += '<option value="' + t.id + '"' + n + ">" + t.value + "</option>"
                    }), r += "</select>"
                },
                memberType: function (e, t) { return t.addClass("data-text-wrap"), e.get("memberTypeName") },
                dateRegistered: function (e, t) {
                    t.addClass("data-text-wrap");
                    var n = e.get("dateRegisteredString"),
                        i = n.slice(0, 10) + "<br>" + n.slice(11);
                    return i
                },
                amountPaid: function (e) { return "$" + parseFloat(e.get("amountPaid")).toFixed(2) },
                balance: function (e) { return "$" + parseFloat(e.get("balance")).toFixed(2) },
                registeredBy: function (e, t) { return t.addClass("data-text-wrap"), e.get("registeredBy") },
                submissionId: function (e) { return e.get("submissionId") },
                actions: function (e) { return '<a class="edit-registrant" href="/administrator/index.php?option=com_jtmgioform&view=formlist#editsubmission/' + e.get("formId") + "/" + e.get("submissionId") + "/" + e.get("id") + "/" + e.get("sectionId") + '">Edit</a>' }
            }
        });
        return n
    }), define("text!templates/registrantsList.html", [], function () { return '<div id="frm-list" class="registrant-list">\n	<div class="tc">\n		<section class="bar-section">\n			<div class="bar-item">\n				<div class="bar-container">\n					<span class="col">\n				        <select id="events-list">\n							<% _.each( eventList, function( evnt, idx ){ %>\n								<option value="<%= evnt.get(\'sectionId\') %>"><%= evnt.get(\'eventName\') %></option>\n							<% }); %>\n				        </select>\n				    </span>\n					<span class="col">\n						<div class="button-group">\n							<a data-type="1" id="1-filter" data-filter="registered" class="filter gen-button first">Registered</a>\n							<a data-type="3" id="3-filter" data-filter="attended" class="filter gen-button">Attended</a>\n                            <a data-type="4" id="4-filter" data-filter="noshowed" class="filter gen-button">No Show</a>\n							<a data-type="2" id="2-filter" data-filter="cancelled" class="filter gen-button last">Cancelled</a>\n						</div>\n				    </span>\n				</div>\n				<div class="bar-container push-right">\n					<span class="col search">\n						<input id="search-form-input" type="text" placeholder="Search Registrants"><a id="search-form" class="gen-button">Search</a>\n						<i id="clear-search" class="fa fa-times-sign clear-search"></i>\n					</span>\n				</div>\n				<div class="bar-container">\n					<span class="tag-col col">\n						<%= taggedCount %> Tagged <%= jtmg.pluralize( \'Registrant\', taggedCount ) %>\n				    </span>\n					<span class="col">\n						<div class="dropdown-container">\n							<a id="actions-btn" class="gen-button first trigger">Actions</a>\n							<select id="actions-cols" class="" style="display:none">\n								<optgroup>\n									<option data-id="register">Set Tagged as Registered</option>\n									<option data-id="attend">Set Tagged as Attended</option>\n                                    <option data-id="noshow">Set Tagged as No Show</option>\n									<option>Export Tagged Registrants</option>\n								</optgroup>\n							</select>\n						</div>\n				    </span>\n					<span class="col">\n						<a id="clear-tagged" class="alt-button red disabled">Untag</a>\n				    </span>\n				</div>\n			</div>\n			<div class="jtmgio-clearfix"></div>\n		</section>\n	</div>\n	<div id="no-forms" class="jtmgio-msg info jtmgio-hide"><p>No registrants found for the criteria provided</p></div>\n</div>\n' }), define("text!templates/template.actionsDropdown.html", [], function () { return '<a id="actions-btn" class="gen-button first trigger">Actions</a>\n<select id="actions-cols" class="" style="display:none">\n    <optgroup>\n        <option data-id="register">Set Tagged as Registered</option>\n        <option data-id="attend">Set Tagged as Attended</option>\n        <option data-id="noshow">Set Tagged as No Show</option>\n        <option>Export Tagged Registrants</option>\n        <option>Contact Tagged Registrants</option>\n    </optgroup>\n</select>\n' }), define("views/RegistrantsView", ["jquery", "underscore", "backbone", "views/view.base", "com/modal/Modal", "collections/RegistrantsTable", "configs/config.registrants", "com/table/table_component", "text!templates/registrantsList.html", "text!templates/template.actionsDropdown.html", "models/Registrant", "pluralize", "dropdown"], function (e, t, n, i, r, a, s, o, c, l, u) {
        var d = jtmgio.app.bootstrap;
        return i.extend({
            initialize: function () { this.changePropName(this), t.bindAll(this, "updateTaggedCount"), this.Vent = d.Vent, d.Vent.on("close:all", this.close, this), this.Vent.on("registrants:reload", this.reload, this), this.Vent.on("tablecomponent:clickedCheckBoxAction", this.tagOneRegistrant, this), this.searchTerm = "", this.actionsState = "disable", this.statusFilters = [], this.taggedRegistrants = [], this.tagAllRegistrants = !1, this.initTable(), this.render() },
            events: { "click #search-form": "searchForm", "keydown #search-form-input": "searchFormByKey", "click #clear-search": "clearFormSearch", "keyup #search-form-input": "keyPressDelete", "click .copy-frm": "copyFrm", "click .delete-frm": "deleteFrm", "click #create-form": "createFrm", "click #export-btn": "exportRegistrants", "change .status-change": "changeStatus", "change #events-list": "loadEventRegistrants", "click .listitem_set_tagged_as_registered": "setRegistrantStatus", "click .listitem_set_tagged_as_attended": "setRegistrantStatus", "click .listitem_set_tagged_as_no_show": "setRegistrantStatus", "click .listitem_export_tagged_registrants": "exportTaggedRegistrants", "click .listitem_contact_tagged_registrants": "contactTaggedRegistrants", "click .filter": "filterStatus", "click #tagvisible": "tagRegistrants", "click #tagall": "tagRegistrants", "click #clear-tagged": "clearAllTags" },
            loadEventRegistrants: function (t) {
                var n = e(t.currentTarget).val();
                this.sectionId = parseInt(n), this.clearTags(), this.clearStatusFilters(), this.initTable()
            },
            setRegistrantStatus: function (t) {
                var n = e(t.currentTarget).data("id");
                this.createModal(this.collection, "views/modals/modal.registrantStatus", { status: n, taggedRegistrants: this.taggedRegistrants }), t.preventDefault()
            },
            exportTaggedRegistrants: function (e) { this.createModal([], "views/modals/modal.exportRegistrants", { formId: this.formId, sectionId: this.sectionId, taggedRegistrants: this.taggedRegistrants }), e.preventDefault() },
            contactTaggedRegistrants: function (e) { this.createModal(this.collection, "views/modals/modal.emailRegistrants", { formId: this.formId, sectionId: this.sectionId, taggedRegistrants: this.taggedRegistrants }), e.preventDefault() },
            clearFormSearch: function (e) { this.collection.clearSearch(), this.searchTerm = "", this.$("#search-form-input").val(""), this.$(".clear-search").hide(), this.renderTable(e), e.preventDefault() },
            keyPressDelete: function (e) {
                var n, i, r, a = [8, 46];
                n = this.$("#search-form-input"), i = n.val(), r = e.keyCode || e.which, t.indexOf(a, r) > -1 && 0 === i.length && this.clearFormSearch(e)
            },
            searchFormByKey: function (e) {
                var t, n, i;
                n = this.$("#search-form-input"), i = n.val(), t = e.keyCode || e.which, i.length > 0 && (this.$(".clear-search")[i.length > 0 ? "show" : "hide"](), this.searchTerm = i), i.length > 0 && 13 == t ? this.searchForm(e) : 0 === i.length && 8 == t && (this.collection.clearSearch(), this.searchTerm = "", this.renderTable(e), this.$(".clear-search").hide())
            },
            searchForm: function (e) {
                var t;
                t = this.$("#search-form-input"), this.collection.setSearchTerm(t.val().toLowerCase()), this.collection.filter(), this.collection.goTo(1), this.$("#search-form-input").focus(), e.preventDefault()
            },
            clearStatusFilters: function () { e(".filter").removeClass("pressed") },
            filterStatus: function (n) {
                var i = e(n.currentTarget),
                    r = parseInt(i.data("type")),
                    a = !t.contains(this.statusFilters, r);
                a ? (this.statusFilters.push(r), i.addClass("pressed")) : (this.statusFilters.splice(this.statusFilters.indexOf(r), 1), i.removeClass("pressed")), t.isEmpty(this.statusFilters) ? this.collection.resetRegistrants() : this.collection.setStatusFilters(this.statusFilters).filter()
            },
            changeStatus: function (n) {
                var i = e(n.currentTarget),
                    r = i.find("option:selected"),
                    a = r.val(),
                    s = 0,
                    o = [{ value: "register", id: 1 }, { value: "attend", id: 3 }, { value: "noShow", id: 4 }],
                    c = "";
                t.each(o, function (e) { e.id == a && (s = e.id, c = e.value) }), new u({ formid: i.data("formid"), sectionid: i.data("sectionid") })[c]([i.data("regid")]), this.collection.updateRegistrantStatus(s, parseInt(i.data("regid"))), (this.searchTerm.length > 0 || !t.isEmpty(this.statusFilters)) && this.collection.filter()
            },
            reload: function () { this.initTable() },
            render: function () { return this.$el.html(t.template(c, { eventList: this.eventList.models, taggedCount: 0 })), this.$("#actions-cols").jtmgioDropDownList({ buttonState: this.actionsState }), this.$(".dropdown-container").mouseleave(function () { e("#actions-cols").hide() }), this },
            initTable: function () {
                var e;
                e = this, delete this.collection, this.collection = (new a).setUrlVars(this.formId, this.sectionId), this.collection.collectionLoaded = !1, this.attrCollectionArgs = { view: e, renderMethod: "renderTable", successCallback: function (t) { e.collection = t, e.renderTable() } }, this.collection.pager(this.attrCollectionArgs)
            },
            renderTable: function () {
                if (this.collection.length > 0) {
                    s.view = this;
                    var n = new o(s, this.collection).init(d.Vent, this.$el);
                    if (this.$(".registrant-table").remove(), this.$(".tc").append(n.renderTable("registrant-table")), e("#frm-list").append(n.getPagerFactory().$el), this.$("#no-forms").hide(), this.taggedRegistrants.length > 0) {
                        var i = this.$el.find("input.reg-check");
                        1 == i.length ? t.contains(this.taggedRegistrants, parseInt(i.val())) && i.prop("checked", !0) : t.each(i, function (n) { t.contains(this.taggedRegistrants, parseInt(e(n).val())) && e(n).prop("checked", !0) }, this)
                    }
                    this.$(".registrant-table").css({ "overflow-x": "auto", "box-shadow": "0 0 1px #4a4a4a" }), this.$(".registrant-table table").css("border-radius", "1px 1px 0 0")
                } else this.$(".table-component, .jtmgio-pager").remove(), this.$("#no-forms").show();
                if (this.taggedRegistrants.length > 0) {
                    var r = this.$el.find("input.reg-check:checked");
                    e("#tagvisible").html(r.length == this.collection.length ? "Untag all on this page" : "Tag all on this page"), e("#tagvisible").data("action", r.length == this.collection.length ? "untag" : "tag");
                    var a = this.tagAllRegistrants ? "Untag all on all pages" : "Tag all on all pages";
                    e("#tagall").html(a), e("#tagall").data("action", this.tagAllRegistrants ? "untag" : "tag")
                }
                e("#toggletag").click(function () { e("#tag-actions").show().mouseleave(function () { e(this).hide() }) }), e("#component-wrapper").whiteout("clear")
            },
            updateTaggedCount: function () {
                var n = "<%= taggedCount %> Tagged <%= jtmg.pluralize( 'Registrant', taggedCount ) %>";
                e(".tag-col").html(t.template(n, { taggedCount: this.taggedRegistrants.length })), this.actionsState = this.taggedRegistrants.length > 0 ? "enable" : "disable", this.$("#clear-tagged")[this.taggedRegistrants.length > 0 ? "removeClass" : "addClass"]("disabled"), this.$(".dropdown-container").html(l), this.$("#actions-cols").jtmgioDropDownList({ buttonState: this.actionsState })
            },
            tagRegistrants: function (n) {
                var i = this.$el.find('input[ type="checkbox" ].reg-check'),
                    r = "tag" == e(n.currentTarget).data("action") ? !0 : !1,
                    a = e(n.currentTarget).data("type");
                if (i.prop("checked", r), "all" == a) this.tagAllRegistrants = r, this.collection.tagAllRegistrants(r, this.taggedRegistrants);
                else {
                    var s = function (e, n) {
                        var i = parseInt(e.val());
                        n.collection.get(i).set("tag", r), r ? t.contains(n.taggedRegistrants, i) || n.taggedRegistrants.push(i) : n.taggedRegistrants.splice(n.taggedRegistrants.indexOf(i), 1)
                    };
                    1 == i.length ? s(i, this) : t.each(i, function (t) { s(e(t), this) }, this)
                }
                e(n.currentTarget).data("action", r ? "untag" : "tag");
                var o = "all" == a ? r ? "Untag all on all pages" : "Tag all on all pages" : r ? "Untag all on this page" : "Tag all on this page";
                e(n.currentTarget).html(o), this.updateTaggedCount(), e("#tag-actions").hide()
            },
            tagOneRegistrant: function (e) {
                var n = parseInt(e.checkbox.val());
                t.contains(this.taggedRegistrants, n) ? this.taggedRegistrants.splice(this.taggedRegistrants.indexOf(n), 1) : this.taggedRegistrants.push(parseInt(e.checkbox.val())), this.updateTaggedCount()
            },
            clearAllTags: function (t) {
                if (!e(t.currentTarget).hasClass("disabled")) {
                    var n = this,
                        i = this.$el.find('input[ type="checkbox" ].reg-check'),
                        a = new r("simple"),
                        s = "Are you sure you want to untag all registrants?",
                        o = function () { i.prop("checked", !1), n.clearTags() };
                    a.action(["createSimpleModal", s, o, "Untag"])
                }
            },
            clearTags: function () { this.tagAllRegistrants = !1, this.collection.tagAllRegistrants(!1, this.taggedRegistrants), this.updateTaggedCount() }
        })
    }), define("views/EditSubmissionView", ["jquery", "underscore", "backbone", "base/View", "com/tabs/Tabs", "configs/config.tabs"], function (e, t, n, i, r, a) { var s = jtmgio.app.bootstrap; return i.extend({ initialize: function () { this.changePropName(this), t.bindAll(this, "render"), s.Vent.on("editsubmissionview:refreshsubmissionedit", this.render, this), this.render() }, events: {}, render: function () { var e = {}; return t.deepCopy(e, a), e.tabsContainerMap.submission = function () { return { viewPath: "views/tabs/EditSubmissionView", reload: !0, data: { model: this.model, registrantId: this.registrantId, sectionId: this.sectionId, parentEl: this.$el, currentTab: e.tabsContainerMap } } }.bind(this), tabs = new r(e, s.Vent), this.$el.html(tabs.getTabs().$el), this } }) }), define("routers/AppRouter", ["jquery", "underscore", "backbone", "base/Router", "views/MainAppView", "views/FrmListView", "views/SubmissionListView", "views/ViewSubmissionView", "collections/collection.formevents", "models/SubmissionLayout", "views/ToolbarView", "collections/Registrants", "views/RegistrantsView", "views/EditSubmissionView", "whiteout"], function (e, t, n, i, r, a, s, o, c, l, u, d, f, h) {
        var p = jtmgio.app.bootstrap,
            m = i.extend({
                initialize: function () { this.MainApp = new r, p.Vent = t.extend({}, n.Events), n.history.start() },
                routes: { "": "index", "registrants/:formId/:sectionId": "viewRegistrants", "editsubmission/:formId/:id/:registrantId/:sectionId": "editSubmission", "editsubmission/:formId/:id/:registrantId": "editSubmission", "submission/:formId/:id/invoice/:invoiceId": "viewInvoice", "submission/:formId/:id/:sectionId": "viewSubmission", "submission/:formId/:id": "viewSubmission", "submissions/:id": "listSubmissions", "*notFound": "index" },
                viewInvoice: function (t, n, i) {
                    e("#app-holder").empty(), e("#component-wrapper").whiteout();
                    var r, a = this,
                        s = new l({ id: n });
                    new u({ page: "viewsubmission", id: t }), s.fetch().always(function () { r = new o({ model: s, submissionId: n, invoiceId: i }), a.MainApp.render(r), e("#component-wrapper").whiteout("clear") })
                },
                viewRegistrants: function (t, n) {
                    e("#app-holder").empty(), e("#component-wrapper").whiteout();
                    var i, r = this;
                    new u({ page: "viewregistrants", id: t, sectionId: n });
                    var a = (new c).setFormId(t);
                    a.fetch().always(function () { i = new f({ formId: t, sectionId: n, eventList: a }), r.MainApp.render(i) })
                },
                editSubmission: function (t, n, i, r) {
                    e("#app-holder").empty(), e("#component-wrapper").whiteout();
                    var a, s = new l({ id: n }),
                        i = parseInt(i);
                    s.fetch({ edit: !0 }).always(function () { new u({ page: "viewsubmission", id: t, userId: s.get("userId"), sectionId: r ? r : !1 }), a = new h({ model: s, submissionId: n, registrantId: i ? i : !1, sectionId: r ? r : !1 }), this.MainApp.render(a), e("#component-wrapper").whiteout("clear") }.bind(this))
                },
                viewSubmission: function (t, n, i) {
                    e("#app-holder").empty(), e("#component-wrapper").whiteout();
                    var r, a = this,
                        s = new l({ id: n });
                    s.fetch().always(function () { new u({ page: "viewsubmission", id: t, userId: s.get("userId"), sectionId: i ? i : !1 }), r = new o({ formId: t, model: s, submissionId: n, sectionId: i ? i : !1 }), a.MainApp.render(r), e("#component-wrapper").whiteout("clear") })
                },
                listSubmissions: function (t) {
                    e("#app-holder").empty(), e("#component-wrapper").whiteout("clear"), p.formId = parseInt(t), new u({ page: "submission" });
                    var n = new s({ formId: t, resetTag: !0 });
                    this.MainApp.render(n)
                },
                index: function () {
                    new u({ page: "" }), e("#app-holder").empty(), e("#component-wrapper").whiteout("clear"), p.Vent.trigger("submissionlist:close");
                    var t = new a;
                    this.MainApp.render(t)
                }
            });
        return m
    }), define("bootstrap/Configurations", ["jquery", "underscore"], function () { var e = (jtmgio.app.bootstrap, function () { return {} }); return e }), define("mixins/underscore.mixins", ["jquery", "underscore", "backbone"], function (e, t) {
        (function () {
            var n = jtmgio.app.bootstrap,
                i = {},
                r = window;
            i.isBlank = function (e) { return t.isNumber(e) ? 0 == parseInt(e) ? !0 : !1 : t.isUndefined(e) || t.isNull(e) || 0 === e.trim().length }, i.buildSelectOptions = function (e, n, i, r) { var a; return r = r || null, a = '<option <%= _.setSelected( data[ value ], selected ) %> value="<%= data[ value ] %>"><%= data[ text ] %></option>', t.reduce(e, function (e, s) { return e + t.template(a, { data: s, selected: r, value: n, text: i }) }, "") }, i.setSelected = function (e, t) { return t == e ? "selected='selected'" : "" }, i.setHide = function (e) { return t.isUndefined(e) || t.isNull(e) || t.isBoolean(e) && !e ? 'style="display:none"' : void 0 }, i.matches = function (e) {
                var n = t.pairs(e),
                    i = n.length;
                return function (e) {
                    if (null == e) return !i;
                    e = new Object(e);
                    for (var t = 0; i > t; t++) {
                        var r = n[t],
                            a = r[0];
                        if (r[1] !== e[a] || !(a in e)) return !1
                    }
                    return !0
                }
            }, i.findWhere = function (e, n) { return t.find(e, t.matches(n)) }, i.splitCamelCase = function (e) { return e.replace(/([A-Z])/g, " $1").replace(/^./, function (e) { return e.toUpperCase() }) }, i.getSysPerm = function (e) { if (!t.has(n, "systemPermissions")) throw new Error("System Permissions has not been defined"); for (var i, r = t.keys(n.systemPermissions), a = r.length, s = {}; a--;) i = r[a], s[i.toLowerCase()] = n.systemPermissions[i]; if (!t.has(s, e.toLowerCase())) throw new Error("System Permission: " + e + " does not exist"); return s[e.toLowerCase()] || !1 }, i.removeCollectionByVal = function (e, n, i) {
                t.log(arguments);
                for (var r = 0; r < e.length; r++)
                    if (t.log(e[r][n], i), e[r][n] && e[r][n] == i) { e.splice(r, 1); break }
                return e
            }, i.keyDownNumber = function (e) { return 188 == e.keyCode || 37 == e.keyCode || 39 == e.keyCode || 9 == e.keyCode || 46 == e.keyCode || 8 == e.keyCode || 190 == e.keyCode || 110 == e.keyCode || e.keyCode >= 96 && e.keyCode <= 105 ? !0 : void((e.keyCode < 48 || e.keyCode > 57) && e.preventDefault()) }, i.parseObject = function (e) {
                var n = {},
                    i = {};
                return t.deepCopy(n, e), t.each(n, function (e, n) { t.isArray(e) || t.isObject(e) || (i[n] = e) }), JSON.stringify(i)
            }, i.writeString = function (e) { return e = new String(e), e = e.replace(/function \(\){/, ""), e = e.replace(/function\(\){/, ""), e = e.replace(/\*\/}/, ""), e = e.replace(/\//, "", -1), e = e.replace(/\*/, "", -1) }, i.bootstrapData = function (n, i, r, a) {
                if (t.isUndefined(r) || !t.isFunction(r)) throw new Error("Please provide a success method");
                a = a || function () { t.log(arguments[0] + " " + arguments[3]) };
                var s = [],
                    o = null,
                    c = t.keys(i);
                return t.each(c, function (e) { t.isUndefined(n[e]) && (n[e] = {}), t.extend(n[e], i[e]), t.each(i[e], function (e) { s.push(e) }) }), o = t.map(s, function (e) { return e.fetch() }), e.when.apply(this, o).then(r, a), this
            }, i.squash = function (e) { for (var t in e) e[t] || delete e[t]; return e }, i.ifNull = function (e, n) { return t.isNull(e) ? n || "" : e }, i.getPlatformPath = function () {
                var e = !1;
                return function (t) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|jtmgio(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|jtmgio|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                }(navigator.userAgent || navigator.vendor || window.opera), (e ? "mobile" : "desktop") + "/" + (-1 == r.location.pathname.indexOf("/administrator/") ? "frontend" : "admin") + "/"
            }, i.setCustomXHRRequest = function (e, n) {
                {
                    var i = n.split("/");
                    t.lastIndexOf(i), t.getPlatformPath() + i.pop()
                }
                return t.contains(i, "ui-v2") || t.contains(i, "ui-v1") ? e : (i.splice(t.indexOf(i, "templates") + 1, 0, t.getPlatformPath().slice(0, -1)), e.open("get", i.join("/") + "/" + n.split("/").pop(), !0), this)
            }, i.log = function () {
                if (0 == arguments.length) console.log((new Date).getTime());
                else { console.log("--------LOG START--------"); for (var e = 0; e < arguments.length; e++) e > 0 && console.log("---------------"), console.log(arguments[e]) }
            }, i.loadCSS = function () {
                var e = document.createElement("link");
                return e.type = "text/css", e.rel = "stylesheet", e.href = url, document.getElementsByTagName("head")[0].appendChild(e), this
            }, i.deepCopy = function (e, t) { for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n]; return e }, i.deepExtend = function (e) {
                var n = /#{\s*?_\s*?}/,
                    i = Array.prototype.slice,
                    r = Object.prototype.hasOwnProperty;
                return t.each(i.call(arguments, 1), function (i) {
                    for (var a in i)
                        if (r.call(i, a))
                            if (t.isUndefined(e[a]) || t.isFunction(e[a]) || t.isNull(i[a])) e[a] = i[a];
                            else if (t.isString(i[a]) && n.test(i[a])) t.isString(e[a]) && (e[a] = i[a].replace(n, e[a]));
                    else if (t.isArray(e[a]) || t.isArray(i[a])) {
                        if (!t.isArray(e[a]) || !t.isArray(i[a])) throw "Error: Trying to combine an array with a non-array (" + a + ")";
                        e[a] = t.reject(t.deepExtend(e[a], i[a]), function (e) { return t.isNull(e) })
                    } else if (t.isObject(e[a]) || t.isObject(i[a])) {
                        if (!t.isObject(e[a]) || !t.isObject(i[a])) throw "Error: Trying to combine an object with a non-object (" + a + ")";
                        e[a] = t.deepExtend(e[a], i[a])
                    } else e[a] = i[a]
                }), e
            }, i.deepCopyObject = function (e) {
                var n = {};
                for (var i in e)
                    if (e[i] === Object) {
                        var r = t.deepCopyObject(e[i]);
                        n[i] = r
                    } else if (t.isArray(e[i])) {
                    var a = t.deepCopy([], e[i]);
                    n[i] = a
                } else n[i] = e[i];
                return n
            }, i.deepCopyComplexObject = function (e) {
                var n = t.isArray(e) ? [] : {};
                for (var r in e)
                    if (t.isArray(e[r])) {
                        var a = i.deepCopyArray([], e[r]);
                        n[r] = a
                    } else if ("object" == typeof e[r]) {
                    var s = i.deepCopyComplexObject(e[r]);
                    t.isArray(e) ? n.push(s) : n[r] = s
                } else n[r] = e[r];
                return n
            }, i.deepCopyArray = function (e, t) {
                for (var n in t)
                    if ("object" == typeof t[n]) {
                        var r = i.deepCopyComplexObject(t[n]);
                        e[n] = r
                    } else e[n] = t[n];
                return e
            }, i.fileExists = function (e) { var t = new XMLHttpRequest; return t.open("HEAD", e, !1), t.send(), 404 != t.status }, i.wrapFader = function (t, n, i) {
                var i = i || "";
                t.find(".fader").remove(), n.prepend(e("<div />", { "class": "fader " + i })), n.find(".fader").css("background", "#e7ffcc"), n.find("> div:first-child").animate({ opacity: "0" }, 3e3, function () { n.find(".fader").delay().remove() })
            }, i.tabElevator = function (e, n, i) {
                var r = 150,
                    a = e.height(),
                    s = n.offset().top - n.parent().offset().top - n.parent().scrollTop();
                return s > 20 && (s -= 30), i.animate({ top: s + "px" }, 500), s % a > 150 && e.animate({ height: a + r + "px" }, 500), t
            }, t.mixin(i)
        }).call(this)
    }), require(["jquery", "underscore", "backbone", "routers/AppRouter", "bootstrap/Configurations", "mixins/underscore.mixins"], function (e, t, n, i, r) {
        var a, s = jtmgio.app.bootstrap;
        a = { app: i };
        var o = { configurations: new r };
        e.ajaxSetup({ cache: !1 }), t.bootstrapData(s, o, function () { s.router = new a.app }), e("html, body").animate({ scrollTop: 0 }, 500)
    }), define("bootstrap", ["jquery"], function () {}), "undefined" == typeof jtmgio.app.paths) throw new Error("Please setup the paths map: jtmgio.app.paths");
require.config({ baseUrl: jtmgio.app.paths.appPath, cdn: jtmgio.app.paths.jsPath, paths: { jquery: jtmgio.app.paths.jsPath + "libs/jquery/jquery.min", jqueryui: jtmgio.app.paths.jsPath + "libs/jqueryui/jquery-ui", underscore: jtmgio.app.paths.jsPath + "libs/underscore/underscore.min", backbone: jtmgio.app.paths.jsPath + "libs/backbone/backbone.min", jquerytools: jtmgio.app.paths.jsPath + "libs/jquerytools/jquery.tools.min", date: jtmgio.app.paths.jsPath + "libs/dates/jtmgio.date_v2", timezone: jtmgio.app.paths.jsPath + "libs/dates/date", moment: jtmgio.app.paths.jsPath + "libs/momentjs/moment.min.2.8.2", "moment-timezone": jtmgio.app.paths.jsPath + "libs/momentjs/moment-timezone-with-data-2010-2020.min", mixins: jtmgio.app.paths.jsPath + "mixins", prototype: jtmgio.app.paths.jsPath + "prototypes", sCollections: jtmgio.app.paths.jsPath + "collections", sModels: jtmgio.app.paths.jsPath + "models", text: jtmgio.app.paths.jsPath + "plugins/require/text", modules: jtmgio.app.paths.jsPath + "modules", "jquery.ui.widget": jtmgio.app.paths.jsPath + "plugins/jquery/jqueryfileupload/vendor/jquery.ui.widget", "jquery.iframe-transport": jtmgio.app.paths.jsPath + "plugins/jquery/jqueryfileupload/jquery.iframe-transport", "jquery.fileupload": jtmgio.app.paths.jsPath + "plugins/jquery/jqueryfileupload/jquery.fileupload", whiteout: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.whiteout.2.0", input: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.dynamicinput", dropdown: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.jtmgiodropdownmenu", jcolor: jtmgio.app.paths.jsPath + "plugins/jquery/jcrop/jquery.color", jcrop: jtmgio.app.paths.jsPath + "plugins/jquery/jcrop/jquery.Jcrop.min", scrolltofix: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.scrolltofixed.min", switchtoggle: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.switchtoggle", numeric: jtmgio.app.paths.jsPath + "plugins/jquery/jquery.numeric", pluralize: jtmgio.app.paths.jsPath + "plugins/js/pluralize", com: jtmgio.app.paths.jsPath + "components/backbone", plugins: jtmgio.app.paths.jsPath + "plugins", base: jtmgio.app.paths.jsPath + "base", helpers: jtmgio.app.paths.jsPath + "helpers", collections: "collections", routers: "routers", models: "models", views: "views", configs: "configs", data: "data", facades: "facades", templates: "templates", bootstrap: "bootstrap", utils: "utils" }, shim: { jquerymobile: ["jquery"], jquerytools: ["jquery"], bootstrap: ["jquery"], jqueryui: ["jquery"], backbone: { deps: ["underscore", "jquery"], exports: "Backbone" } } }), require(["prototype/array.prototype", "bootstrap"]), define("config.paths", function () {});