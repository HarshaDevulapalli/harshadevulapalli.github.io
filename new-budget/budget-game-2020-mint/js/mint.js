// https://d3js.org Version 4.12.2. Copyright 2017 Mike Bostock.
(function(t, n) { "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {}) })(this, function(t) {
    "use strict";

    function n(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function e(t) {
        return 1 === t.length && (t = function(t) { return function(e, r) { return n(t(e), r) } }(t)), {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) < 0 ? r = o + 1 : i = o
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) > 0 ? i = o : r = o + 1
                }
                return r
            }
        }
    }

    function r(t, n) { return [t, n] }

    function i(t) { return null === t ? NaN : +t }

    function o(t, n) {
        var e, r, o = t.length,
            u = 0,
            a = -1,
            c = 0,
            s = 0;
        if (null == n)
            for (; ++a < o;) isNaN(e = i(t[a])) || (s += (r = e - c) * (e - (c += r / ++u)));
        else
            for (; ++a < o;) isNaN(e = i(n(t[a], a, t))) || (s += (r = e - c) * (e - (c += r / ++u)));
        if (u > 1) return s / (u - 1)
    }

    function u(t, n) { var e = o(t, n); return e ? Math.sqrt(e) : e }

    function a(t, n) {
        var e, r, i, o = t.length,
            u = -1;
        if (null == n) {
            for (; ++u < o;)
                if (null != (e = t[u]) && e >= e)
                    for (r = i = e; ++u < o;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
        } else
            for (; ++u < o;)
                if (null != (e = n(t[u], u, t)) && e >= e)
                    for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
    }

    function c(t) { return function() { return t } }

    function s(t) { return t }

    function f(t, n, e) { t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e; for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e; return o }

    function l(t, n, e) {
        var r, i, o, u, a = -1;
        if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
        if ((r = n < t) && (i = t, t = n, n = i), 0 === (u = h(t, n, e)) || !isFinite(u)) return [];
        if (u > 0)
            for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) * u;
        else
            for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(i = Math.ceil(t - n + 1)); ++a < i;) o[a] = (t - a) / u;
        return r && o.reverse(), o
    }

    function h(t, n, e) {
        var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            o = r / Math.pow(10, i);
        return i >= 0 ? (o >= Ys ? 10 : o >= Bs ? 5 : o >= Hs ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Ys ? 10 : o >= Bs ? 5 : o >= Hs ? 2 : 1)
    }

    function p(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i;
        return o >= Ys ? i *= 10 : o >= Bs ? i *= 5 : o >= Hs && (i *= 2), n < t ? -i : i
    }

    function d(t) { return Math.ceil(Math.log(t.length) / Math.LN2) + 1 }

    function v(t, n, e) {
        if (null == e && (e = i), r = t.length) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r, o = (r - 1) * n,
                u = Math.floor(o),
                a = +e(t[u], u, t);
            return a + (+e(t[u + 1], u + 1, t) - a) * (o - u)
        }
    }

    function g(t) {
        for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
        for (e = new Array(u); --i >= 0;)
            for (n = (r = t[i]).length; --n >= 0;) e[--u] = r[n];
        return e
    }

    function _(t, n) {
        var e, r, i = t.length,
            o = -1;
        if (null == n) {
            for (; ++o < i;)
                if (null != (e = t[o]) && e >= e)
                    for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
        } else
            for (; ++o < i;)
                if (null != (e = n(t[o], o, t)) && e >= e)
                    for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
        return r
    }

    function y(t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = _(t, m), r = new Array(e); ++n < e;)
            for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
        return r
    }

    function m(t) { return t.length }

    function x(t) { return t }

    function b(t) { return "translate(" + (t + .5) + ",0)" }

    function w(t) { return "translate(0," + (t + .5) + ")" }

    function M() { return !this.__axis }

    function T(t, n) {
        function e(e) {
            var h = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
                p = null == o ? n.tickFormat ? n.tickFormat.apply(n, r) : x : o,
                d = Math.max(u, 0) + c,
                v = n.range(),
                g = +v[0] + .5,
                _ = +v[v.length - 1] + .5,
                y = (n.bandwidth ? function(t) {
                    var n = Math.max(0, t.bandwidth() - 1) / 2;
                    return t.round() && (n = Math.round(n)),
                        function(e) { return +t(e) + n }
                } : function(t) { return function(n) { return +t(n) } })(n.copy()),
                m = e.selection ? e.selection() : e,
                b = m.selectAll(".domain").data([null]),
                w = m.selectAll(".tick").data(h, n).order(),
                T = w.exit(),
                N = w.enter().append("g").attr("class", "tick"),
                k = w.select("line"),
                S = w.select("text");
            b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), w = w.merge(N), k = k.merge(N.append("line").attr("stroke", "#000").attr(f + "2", s * u)), S = S.merge(N.append("text").attr("fill", "#000").attr(f, s * d).attr("dy", t === Xs ? "0em" : t === $s ? "0.71em" : "0.32em")), e !== m && (b = b.transition(e), w = w.transition(e), k = k.transition(e), S = S.transition(e), T = T.transition(e).attr("opacity", Zs).attr("transform", function(t) { return isFinite(t = y(t)) ? l(t) : this.getAttribute("transform") }), N.attr("opacity", Zs).attr("transform", function(t) { var n = this.parentNode.__axis; return l(n && isFinite(n = n(t)) ? n : y(t)) })), T.remove(), b.attr("d", t === Ws || t == Vs ? "M" + s * a + "," + g + "H0.5V" + _ + "H" + s * a : "M" + g + "," + s * a + "V0.5H" + _ + "V" + s * a), w.attr("opacity", 1).attr("transform", function(t) { return l(y(t)) }), k.attr(f + "2", s * u), S.attr(f, s * d).text(p), m.filter(M).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Vs ? "start" : t === Ws ? "end" : "middle"), m.each(function() { this.__axis = y })
        }
        var r = [],
            i = null,
            o = null,
            u = 6,
            a = 6,
            c = 3,
            s = t === Xs || t === Ws ? -1 : 1,
            f = t === Ws || t === Vs ? "x" : "y",
            l = t === Xs || t === $s ? b : w;
        return e.scale = function(t) { return arguments.length ? (n = t, e) : n }, e.ticks = function() { return r = js.call(arguments), e }, e.tickArguments = function(t) { return arguments.length ? (r = null == t ? [] : js.call(t), e) : r.slice() }, e.tickValues = function(t) { return arguments.length ? (i = null == t ? null : js.call(t), e) : i && i.slice() }, e.tickFormat = function(t) { return arguments.length ? (o = t, e) : o }, e.tickSize = function(t) { return arguments.length ? (u = a = +t, e) : u }, e.tickSizeInner = function(t) { return arguments.length ? (u = +t, e) : u }, e.tickSizeOuter = function(t) { return arguments.length ? (a = +t, e) : a }, e.tickPadding = function(t) { return arguments.length ? (c = +t, e) : c }, e
    }

    function N() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new k(r)
    }

    function k(t) { this._ = t }

    function S(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) { t[r] = Gs, t = t.slice(0, r).concat(t.slice(r + 1)); break } return null != e && t.push({ name: n, value: e }), t
    }

    function E(t) {
        var n = t += "",
            e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Js.hasOwnProperty(n) ? { space: Js[n], local: t } : t
    }

    function A(t) {
        var n = E(t);
        return (n.local ? function(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } } : function(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === Qs && n.documentElement.namespaceURI === Qs ? n.createElement(t) : n.createElementNS(e, t)
            }
        })(n)
    }

    function C() { return new z }

    function z() { this._ = "@" + (++Ks).toString(36) }

    function P(t, n, e) {
        return t = R(t, n, e),
            function(n) {
                var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
            }
    }

    function R(n, e, r) {
        return function(i) {
            var o = t.event;
            t.event = i;
            try { n.call(this, this.__data__, e, r) } finally { t.event = o }
        }
    }

    function L(t) { return function() { var n = this.__on; if (n) { for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);++i ? n.length = i : delete this.__on } } }

    function q(t, n, e) {
        var r = of .hasOwnProperty(t.type) ? P : R;
        return function(i, o, u) {
            var a, c = this.__on,
                s = r(n, o, u);
            if (c)
                for (var f = 0, l = c.length; f < l; ++f)
                    if ((a = c[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
            this.addEventListener(t.type, s, e), a = { type: t.type, name: t.name, value: n, listener: s, capture: e }, c ? c.push(a) : this.__on = [a]
        }
    }

    function D(n, e, r, i) {
        var o = t.event;
        n.sourceEvent = t.event, t.event = n;
        try { return e.apply(r, i) } finally { t.event = o }
    }

    function U() { for (var n, e = t.event; n = e.sourceEvent;) e = n; return e }

    function O(t, n) { var e = t.ownerSVGElement || t; if (e.createSVGPoint) { var r = e.createSVGPoint(); return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y] } var i = t.getBoundingClientRect(); return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop] }

    function F(t) { var n = U(); return n.changedTouches && (n = n.changedTouches[0]), O(t, n) }

    function I() {}

    function Y(t) { return null == t ? I : function() { return this.querySelector(t) } }

    function B() { return [] }

    function H(t) { return null == t ? B : function() { return this.querySelectorAll(t) } }

    function j(t) { return new Array(t.length) }

    function X(t, n) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n }

    function V(t, n, e, r, i, o) { for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new X(t, o[a]); for (; a < c; ++a)(u = n[a]) && (i[a] = u) }

    function $(t, n, e, r, i, o, u) {
        var a, c, s, f = {},
            l = n.length,
            h = o.length,
            p = new Array(l);
        for (a = 0; a < l; ++a)(c = n[a]) && (p[a] = s = uf + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
        for (a = 0; a < h; ++a)(c = f[s = uf + u.call(t, o[a], a, o)]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new X(t, o[a]);
        for (a = 0; a < l; ++a)(c = n[a]) && f[p[a]] === c && (i[a] = c)
    }

    function W(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function Z(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView }

    function G(t, n) { return t.style.getPropertyValue(n) || Z(t).getComputedStyle(t, null).getPropertyValue(n) }

    function Q(t) { return t.trim().split(/^|\s+/) }

    function J(t) { return t.classList || new K(t) }

    function K(t) { this._node = t, this._names = Q(t.getAttribute("class") || "") }

    function tt(t, n) { for (var e = J(t), r = -1, i = n.length; ++r < i;) e.add(n[r]) }

    function nt(t, n) { for (var e = J(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]) }

    function et() { this.textContent = "" }

    function rt() { this.innerHTML = "" }

    function it() { this.nextSibling && this.parentNode.appendChild(this) }

    function ot() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }

    function ut() { return null }

    function at() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function ct(t, n, e) {
        var r = Z(t),
            i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function st(t, n) { this._groups = t, this._parents = n }

    function ft() {
        return new st([
            [document.documentElement]
        ], af)
    }

    function lt(t) {
        return "string" == typeof t ? new st([
            [document.querySelector(t)]
        ], [document.documentElement]) : new st([
            [t]
        ], af)
    }

    function ht(t, n, e) {
        arguments.length < 3 && (e = n, n = U().changedTouches);
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
            if ((r = n[i]).identifier === e) return O(t, r);
        return null
    }

    function pt() { t.event.stopImmediatePropagation() }

    function dt() { t.event.preventDefault(), t.event.stopImmediatePropagation() }

    function vt(t) {
        var n = t.document.documentElement,
            e = lt(t).on("dragstart.drag", dt, !0);
        "onselectstart" in n ? e.on("selectstart.drag", dt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    }

    function gt(t, n) {
        var e = t.document.documentElement,
            r = lt(t).on("dragstart.drag", null);
        n && (r.on("click.drag", dt, !0), setTimeout(function() { r.on("click.drag", null) }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }

    function _t(t) { return function() { return t } }

    function yt(t, n, e, r, i, o, u, a, c, s) { this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s }

    function mt() { return !t.event.button }

    function xt() { return this.parentNode }

    function bt(n) { return null == n ? { x: t.event.x, y: t.event.y } : n }

    function wt() { return "ontouchstart" in this }

    function Mt(t, n, e) { t.prototype = n.prototype = e, e.constructor = t }

    function Tt(t, n) { var e = Object.create(t.prototype); for (var r in n) e[r] = n[r]; return e }

    function Nt() {}

    function kt(t) { var n; return t = (t + "").trim().toLowerCase(), (n = lf.exec(t)) ? (n = parseInt(n[1], 16), new zt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = hf.exec(t)) ? St(parseInt(n[1], 16)) : (n = pf.exec(t)) ? new zt(n[1], n[2], n[3], 1) : (n = df.exec(t)) ? new zt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = vf.exec(t)) ? Et(n[1], n[2], n[3], n[4]) : (n = gf.exec(t)) ? Et(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = _f.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, 1) : (n = yf.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, n[4]) : mf.hasOwnProperty(t) ? St(mf[t]) : "transparent" === t ? new zt(NaN, NaN, NaN, 0) : null }

    function St(t) { return new zt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

    function Et(t, n, e, r) { return r <= 0 && (t = n = e = NaN), new zt(t, n, e, r) }

    function At(t) { return t instanceof Nt || (t = kt(t)), t ? (t = t.rgb(), new zt(t.r, t.g, t.b, t.opacity)) : new zt }

    function Ct(t, n, e, r) { return 1 === arguments.length ? At(t) : new zt(t, n, e, null == r ? 1 : r) }

    function zt(t, n, e, r) { this.r = +t, this.g = +n, this.b = +e, this.opacity = +r }

    function Pt(t, n, e, r) { return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Lt(t, n, e, r) }

    function Rt(t, n, e, r) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof Lt) return new Lt(t.h, t.s, t.l, t.opacity);
            if (t instanceof Nt || (t = kt(t)), !t) return new Lt;
            if (t instanceof Lt) return t;
            var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = Math.min(n, e, r),
                o = Math.max(n, e, r),
                u = NaN,
                a = o - i,
                c = (o + i) / 2;
            return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new Lt(u, a, c, t.opacity)
        }(t) : new Lt(t, n, e, null == r ? 1 : r)
    }

    function Lt(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function qt(t, n, e) { return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) }

    function Dt(t) {
        if (t instanceof Ot) return new Ot(t.l, t.a, t.b, t.opacity);
        if (t instanceof jt) { var n = t.h * xf; return new Ot(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity) } t instanceof zt || (t = At(t));
        var e = Bt(t.r),
            r = Bt(t.g),
            i = Bt(t.b),
            o = Ft((.4124564 * e + .3575761 * r + .1804375 * i) / wf),
            u = Ft((.2126729 * e + .7151522 * r + .072175 * i) / Mf);
        return new Ot(116 * u - 16, 500 * (o - u), 200 * (u - Ft((.0193339 * e + .119192 * r + .9503041 * i) / Tf)), t.opacity)
    }

    function Ut(t, n, e, r) { return 1 === arguments.length ? Dt(t) : new Ot(t, n, e, null == r ? 1 : r) }

    function Ot(t, n, e, r) { this.l = +t, this.a = +n, this.b = +e, this.opacity = +r }

    function Ft(t) { return t > Ef ? Math.pow(t, 1 / 3) : t / Sf + Nf }

    function It(t) { return t > kf ? t * t * t : Sf * (t - Nf) }

    function Yt(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055) }

    function Bt(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

    function Ht(t, n, e, r) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof jt) return new jt(t.h, t.c, t.l, t.opacity);
            t instanceof Ot || (t = Dt(t));
            var n = Math.atan2(t.b, t.a) * bf;
            return new jt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }(t) : new jt(t, n, e, null == r ? 1 : r)
    }

    function jt(t, n, e, r) { this.h = +t, this.c = +n, this.l = +e, this.opacity = +r }

    function Xt(t, n, e, r) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof Vt) return new Vt(t.h, t.s, t.l, t.opacity);
            t instanceof zt || (t = At(t));
            var n = t.r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = (Lf * r + Pf * n - Rf * e) / (Lf + Pf - Rf),
                o = r - i,
                u = (zf * (e - i) - Af * o) / Cf,
                a = Math.sqrt(u * u + o * o) / (zf * i * (1 - i)),
                c = a ? Math.atan2(u, o) * bf - 120 : NaN;
            return new Vt(c < 0 ? c + 360 : c, a, i, t.opacity)
        }(t) : new Vt(t, n, e, null == r ? 1 : r)
    }

    function Vt(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function $t(t, n, e, r, i) {
        var o = t * t,
            u = o * t;
        return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
    }

    function Wt(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                i = t[r],
                o = t[r + 1],
                u = r > 0 ? t[r - 1] : 2 * i - o,
                a = r < n - 1 ? t[r + 2] : 2 * o - i;
            return $t((e - r / n) * n, u, i, o, a)
        }
    }

    function Zt(t) {
        var n = t.length;
        return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                u = t[(r + 1) % n],
                a = t[(r + 2) % n];
            return $t((e - r / n) * n, i, o, u, a)
        }
    }

    function Gt(t) { return function() { return t } }

    function Qt(t, n) { return function(e) { return t + e * n } }

    function Jt(t, n) { var e = n - t; return e ? Qt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Gt(isNaN(t) ? n : t) }

    function Kt(t) {
        return 1 == (t = +t) ? tn : function(n, e) {
            return e - n ? function(t, n, e) {
                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                    function(r) { return Math.pow(t + r * n, e) }
            }(n, e, t) : Gt(isNaN(n) ? e : n)
        }
    }

    function tn(t, n) { var e = n - t; return e ? Qt(t, e) : Gt(isNaN(t) ? n : t) }

    function nn(t) {
        return function(n) {
            var e, r, i = n.length,
                o = new Array(i),
                u = new Array(i),
                a = new Array(i);
            for (e = 0; e < i; ++e) r = Ct(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
            return o = t(o), u = t(u), a = t(a), r.opacity = 1,
                function(t) { return r.r = o(t), r.g = u(t), r.b = a(t), r + "" }
        }
    }

    function en(t, n) {
        var e, r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = cn(t[e], n[e]);
        for (; e < r; ++e) u[e] = n[e];
        return function(t) { for (e = 0; e < i; ++e) u[e] = o[e](t); return u }
    }

    function rn(t, n) {
        var e = new Date;
        return t = +t, n -= t,
            function(r) { return e.setTime(t + n * r), e }
    }

    function on(t, n) {
        return t = +t, n -= t,
            function(e) { return t + n * e }
    }

    function un(t, n) {
        var e, r = {},
            i = {};
        null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
        for (e in n) e in t ? r[e] = cn(t[e], n[e]) : i[e] = n[e];
        return function(t) { for (e in r) i[e] = r[e](t); return i }
    }

    function an(t, n) {
        var e, r, i, o = jf.lastIndex = Xf.lastIndex = 0,
            u = -1,
            a = [],
            c = [];
        for (t += "", n += "";
            (e = jf.exec(t)) && (r = Xf.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({ i: u, x: on(e, r) })), o = Xf.lastIndex;
        return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function(t) { return function(n) { return t(n) + "" } }(c[0].x) : function(t) { return function() { return t } }(n) : (n = c.length, function(t) { for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t); return a.join("") })
    }

    function cn(t, n) { var e, r = typeof n; return null == n || "boolean" === r ? Gt(n) : ("number" === r ? on : "string" === r ? (e = kt(n)) ? (n = e, Yf) : an : n instanceof kt ? Yf : n instanceof Date ? rn : Array.isArray(n) ? en : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? un : on)(t, n) }

    function sn(t, n) {
        return t = +t, n -= t,
            function(e) { return Math.round(t + n * e) }
    }

    function fn(t, n, e, r, i, o) { var u, a, c; return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Vf, skewX: Math.atan(c) * Vf, scaleX: u, scaleY: a } }

    function ln(t, n, e, r) {
        function i(t) { return t.length ? t.pop() + " " : "" }
        return function(o, u) {
            var a = [],
                c = [];
            return o = t(o), u = t(u),
                function(t, r, i, o, u, a) {
                    if (t !== i || r !== o) {
                        var c = u.push("translate(", null, n, null, e);
                        a.push({ i: c - 4, x: on(t, i) }, { i: c - 2, x: on(r, o) })
                    } else(i || o) && u.push("translate(" + i + n + o + e)
                }(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
                function(t, n, e, o) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: on(t, n) })) : n && e.push(i(e) + "rotate(" + n + r) }(o.rotate, u.rotate, a, c),
                function(t, n, e, o) { t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: on(t, n) }) : n && e.push(i(e) + "skewX(" + n + r) }(o.skewX, u.skewX, a, c),
                function(t, n, e, r, o, u) {
                    if (t !== e || n !== r) {
                        var a = o.push(i(o) + "scale(", null, ",", null, ")");
                        u.push({ i: a - 4, x: on(t, e) }, { i: a - 2, x: on(n, r) })
                    } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null,
                function(t) { for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t); return a.join("") }
        }
    }

    function hn(t) { return ((t = Math.exp(t)) + 1 / t) / 2 }

    function pn(t, n) {
        var e, r, i = t[0],
            o = t[1],
            u = t[2],
            a = n[0],
            c = n[1],
            s = n[2],
            f = a - i,
            l = c - o,
            h = f * f + l * l;
        if (h < Kf) r = Math.log(s / u) / Gf, e = function(t) { return [i + t * f, o + t * l, u * Math.exp(Gf * t * r)] };
        else {
            var p = Math.sqrt(h),
                d = (s * s - u * u + Jf * h) / (2 * u * Qf * p),
                v = (s * s - u * u - Jf * h) / (2 * s * Qf * p),
                g = Math.log(Math.sqrt(d * d + 1) - d),
                _ = Math.log(Math.sqrt(v * v + 1) - v);
            r = (_ - g) / Gf, e = function(t) {
                var n = t * r,
                    e = hn(g),
                    a = u / (Qf * p) * (e * function(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1) }(Gf * n + g) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(g));
                return [i + a * f, o + a * l, u * e / hn(Gf * n + g)]
            }
        }
        return e.duration = 1e3 * r, e
    }

    function dn(t) {
        return function(n, e) {
            var r = t((n = Rt(n)).h, (e = Rt(e)).h),
                i = tn(n.s, e.s),
                o = tn(n.l, e.l),
                u = tn(n.opacity, e.opacity);
            return function(t) { return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + "" }
        }
    }

    function vn(t) {
        return function(n, e) {
            var r = t((n = Ht(n)).h, (e = Ht(e)).h),
                i = tn(n.c, e.c),
                o = tn(n.l, e.l),
                u = tn(n.opacity, e.opacity);
            return function(t) { return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + "" }
        }
    }

    function gn(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Xt(n)).h, (r = Xt(r)).h),
                    o = tn(n.s, r.s),
                    u = tn(n.l, r.l),
                    a = tn(n.opacity, r.opacity);
                return function(t) { return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "" }
            }
            return e = +e, r.gamma = n, r
        }(1)
    }

    function _n() { return ll || (dl(yn), ll = pl.now() + hl) }

    function yn() { ll = 0 }

    function mn() { this._call = this._time = this._next = null }

    function xn(t, n, e) { var r = new mn; return r.restart(t, n, e), r }

    function bn() { _n(), ++ul; for (var t, n = Ff; n;)(t = ll - n._time) >= 0 && n._call.call(null, t), n = n._next;--ul }

    function wn() {
        ll = (fl = pl.now()) + hl, ul = al = 0;
        try { bn() } finally {
            ul = 0,
                function() {
                    var t, n, e = Ff,
                        r = 1 / 0;
                    for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ff = n);
                    If = t, Tn(r)
                }(), ll = 0
        }
    }

    function Mn() {
        var t = pl.now(),
            n = t - fl;
        n > sl && (hl -= n, fl = t)
    }

    function Tn(t) {
        if (!ul) {
            al && (al = clearTimeout(al));
            t - ll > 24 ? (t < 1 / 0 && (al = setTimeout(wn, t - pl.now() - hl)), cl && (cl = clearInterval(cl))) : (cl || (fl = pl.now(), cl = setInterval(Mn, sl)), ul = 1, dl(wn))
        }
    }

    function Nn(t, n, e) { var r = new mn; return n = null == n ? 0 : +n, r.restart(function(e) { r.stop(), t(e + n) }, n, e), r }

    function kn(t, n, e, r, i, o) {
        var u = t.__transition;
        if (u) { if (e in u) return } else t.__transition = {};
        (function(t, n, e) {
            function r(c) {
                var s, f, l, h;
                if (e.state !== yl) return o();
                for (s in a)
                    if ((h = a[s]).name === e.name) {
                        if (h.state === xl) return Nn(r);
                        h.state === bl ? (h.state = Ml, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete a[s]) : +s < n && (h.state = Ml, h.timer.stop(), delete a[s])
                    } if (Nn(function() { e.state === xl && (e.state = bl, e.timer.restart(i, e.delay, e.time), i(c)) }), e.state = ml, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ml) {
                    for (e.state = xl, u = new Array(l = e.tween.length), s = 0, f = -1; s < l; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (u[++f] = h);
                    u.length = f + 1
                }
            }

            function i(n) {
                for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = wl, 1), i = -1, a = u.length; ++i < a;) u[i].call(null, r);
                e.state === wl && (e.on.call("end", t, t.__data__, e.index, e.group), o())
            }

            function o() {
                e.state = Ml, e.timer.stop(), delete a[n];
                for (var r in a) return;
                delete t.__transition
            }
            var u, a = t.__transition;
            a[n] = e, e.timer = xn(function(t) { e.state = yl, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay) }, 0, e.time)
        })(t, e, { name: n, index: r, group: i, on: vl, tween: gl, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: _l })
    }

    function Sn(t, n) { var e = An(t, n); if (e.state > _l) throw new Error("too late; already scheduled"); return e }

    function En(t, n) { var e = An(t, n); if (e.state > ml) throw new Error("too late; already started"); return e }

    function An(t, n) { var e = t.__transition; if (!e || !(e = e[n])) throw new Error("transition not found"); return e }

    function Cn(t, n) {
        var e, r, i, o = t.__transition,
            u = !0;
        if (o) {
            n = null == n ? null : n + "";
            for (i in o)(e = o[i]).name === n ? (r = e.state > ml && e.state < wl, e.state = Ml, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
            u && delete t.__transition
        }
    }

    function zn(t, n, e) {
        var r = t._id;
        return t.each(function() {
                var t = En(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            }),
            function(t) { return An(t, r).value[n] }
    }

    function Pn(t, n) { var e; return ("number" == typeof n ? on : n instanceof kt ? Yf : (e = kt(n)) ? (n = e, Yf) : an)(t, n) }

    function Rn(t, n, e, r) { this._groups = t, this._parents = n, this._name = e, this._id = r }

    function Ln(t) { return ft().transition(t) }

    function qn() { return ++Nl }

    function Dn(t) { return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2 }

    function Un(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 }

    function On(t) { return (1 - Math.cos(Cl * t)) / 2 }

    function Fn(t) { return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2 }

    function In(t) { return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2 }

    function Yn(t) { return (t = +t) < Pl ? Yl * t * t : t < Ll ? Yl * (t -= Rl) * t + ql : t < Ul ? Yl * (t -= Dl) * t + Ol : Yl * (t -= Fl) * t + Il }

    function Bn(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) return Zl.time = _n(), Zl;
        return e
    }

    function Hn(t) { return function() { return t } }

    function jn() { t.event.stopImmediatePropagation() }

    function Xn() { t.event.preventDefault(), t.event.stopImmediatePropagation() }

    function Vn(t) { return { type: t } }

    function $n() { return !t.event.button }

    function Wn() {
        var t = this.ownerSVGElement || this;
        return [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ]
    }

    function Zn(t) {
        for (; !t.__brush;)
            if (!(t = t.parentNode)) return;
        return t.__brush
    }

    function Gn(t) { return t[0][0] === t[1][0] || t[0][1] === t[1][1] }

    function Qn(n) {
        function e(t) {
            var e = t.property("__brush", a).selectAll(".overlay").data([Vn("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", ih.overlay).merge(e).each(function() {
                var t = Zn(this).extent;
                lt(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }), t.selectAll(".selection").data([Vn("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", ih.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var i = t.selectAll(".handle").data(n.handles, function(t) { return t.type });
            i.exit().remove(), i.enter().append("rect").attr("class", function(t) { return "handle handle--" + t.type }).attr("cursor", function(t) { return ih[t.type] }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
        }

        function r() {
            var t = lt(this),
                n = Zn(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) { return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2 }).attr("y", function(t) { return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2 }).attr("width", function(t) { return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h }).attr("height", function(t) { return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }

        function i(t, n) { return t.__brush.emitter || new o(t, n) }

        function o(t, n) { this.that = t, this.args = n, this.state = t.__brush, this.active = 0 }

        function u() {
            function e() { var t = F(w);!L || x || b || (Math.abs(t[0] - D[0]) > Math.abs(t[1] - D[1]) ? b = !0 : x = !0), D = t, m = !0, Xn(), o() }

            function o() {
                var t;
                switch (_ = D[0] - q[0], y = D[1] - q[1], T) {
                    case Jl:
                    case Ql:
                        N && (_ = Math.max(C - a, Math.min(P - p, _)), s = a + _, d = p + _), k && (y = Math.max(z - l, Math.min(R - v, y)), h = l + y, g = v + y);
                        break;
                    case Kl:
                        N < 0 ? (_ = Math.max(C - a, Math.min(P - a, _)), s = a + _, d = p) : N > 0 && (_ = Math.max(C - p, Math.min(P - p, _)), s = a, d = p + _), k < 0 ? (y = Math.max(z - l, Math.min(R - l, y)), h = l + y, g = v) : k > 0 && (y = Math.max(z - v, Math.min(R - v, y)), h = l, g = v + y);
                        break;
                    case th:
                        N && (s = Math.max(C, Math.min(P, a - _ * N)), d = Math.max(C, Math.min(P, p + _ * N))), k && (h = Math.max(z, Math.min(R, l - y * k)), g = Math.max(z, Math.min(R, v + y * k)))
                }
                d < s && (N *= -1, t = a, a = p, p = t, t = s, s = d, d = t, M in oh && I.attr("cursor", ih[M = oh[M]])), g < h && (k *= -1, t = l, l = v, v = t, t = h, h = g, g = t, M in uh && I.attr("cursor", ih[M = uh[M]])), S.selection && (A = S.selection), x && (s = A[0][0], d = A[1][0]), b && (h = A[0][1], g = A[1][1]), A[0][0] === s && A[0][1] === h && A[1][0] === d && A[1][1] === g || (S.selection = [
                    [s, h],
                    [d, g]
                ], r.call(w), U.brush())
            }

            function u() {
                if (jn(), t.event.touches) {
                    if (t.event.touches.length) return;
                    c && clearTimeout(c), c = setTimeout(function() { c = null }, 500), O.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else gt(t.event.view, m), Y.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                O.attr("pointer-events", "all"), I.attr("cursor", ih.overlay), S.selection && (A = S.selection), Gn(A) && (S.selection = null, r.call(w)), U.end()
            }
            if (t.event.touches) { if (t.event.changedTouches.length < t.event.touches.length) return Xn() } else if (c) return;
            if (f.apply(this, arguments)) {
                var a, s, l, h, p, d, v, g, _, y, m, x, b, w = this,
                    M = t.event.target.__data__.type,
                    T = "selection" === (t.event.metaKey ? M = "overlay" : M) ? Ql : t.event.altKey ? th : Kl,
                    N = n === eh ? null : ah[M],
                    k = n === nh ? null : ch[M],
                    S = Zn(w),
                    E = S.extent,
                    A = S.selection,
                    C = E[0][0],
                    z = E[0][1],
                    P = E[1][0],
                    R = E[1][1],
                    L = N && k && t.event.shiftKey,
                    q = F(w),
                    D = q,
                    U = i(w, arguments).beforestart();
                "overlay" === M ? S.selection = A = [
                    [a = n === eh ? C : q[0], l = n === nh ? z : q[1]],
                    [p = n === eh ? P : a, v = n === nh ? R : l]
                ] : (a = A[0][0], l = A[0][1], p = A[1][0], v = A[1][1]), s = a, h = l, d = p, g = v;
                var O = lt(w).attr("pointer-events", "none"),
                    I = O.selectAll(".overlay").attr("cursor", ih[M]);
                if (t.event.touches) O.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0);
                else {
                    var Y = lt(t.event.view).on("keydown.brush", function() {
                        switch (t.event.keyCode) {
                            case 16:
                                L = N && k;
                                break;
                            case 18:
                                T === Kl && (N && (p = d - _ * N, a = s + _ * N), k && (v = g - y * k, l = h + y * k), T = th, o());
                                break;
                            case 32:
                                T !== Kl && T !== th || (N < 0 ? p = d - _ : N > 0 && (a = s - _), k < 0 ? v = g - y : k > 0 && (l = h - y), T = Jl, I.attr("cursor", ih.selection), o());
                                break;
                            default:
                                return
                        }
                        Xn()
                    }, !0).on("keyup.brush", function() {
                        switch (t.event.keyCode) {
                            case 16:
                                L && (x = b = L = !1, o());
                                break;
                            case 18:
                                T === th && (N < 0 ? p = d : N > 0 && (a = s), k < 0 ? v = g : k > 0 && (l = h), T = Kl, o());
                                break;
                            case 32:
                                T === Jl && (t.event.altKey ? (N && (p = d - _ * N, a = s + _ * N), k && (v = g - y * k, l = h + y * k), T = th) : (N < 0 ? p = d : N > 0 && (a = s), k < 0 ? v = g : k > 0 && (l = h), T = Kl), I.attr("cursor", ih[M]), o());
                                break;
                            default:
                                return
                        }
                        Xn()
                    }, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);
                    vt(t.event.view)
                }
                jn(), Cn(w), r.call(w), U.start()
            }
        }

        function a() { var t = this.__brush || { selection: null }; return t.extent = s.apply(this, arguments), t.dim = n, t }
        var c, s = Wn,
            f = $n,
            l = N(e, "start", "brush", "end"),
            h = 6;
        return e.move = function(t, e) {
            t.selection ? t.on("start.brush", function() { i(this, arguments).beforestart().start() }).on("interrupt.brush end.brush", function() { i(this, arguments).end() }).tween("brush", function() {
                function t(t) { u.selection = 1 === t && Gn(s) ? null : f(t), r.call(o), a.brush() }
                var o = this,
                    u = o.__brush,
                    a = i(o, arguments),
                    c = u.selection,
                    s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent),
                    f = cn(c, s);
                return c && s ? t : t(1)
            }) : t.each(function() {
                var t = arguments,
                    o = this.__brush,
                    u = n.input("function" == typeof e ? e.apply(this, t) : e, o.extent),
                    a = i(this, t).beforestart();
                Cn(this), o.selection = null == u || Gn(u) ? null : u, r.call(this), a.start().brush().end()
            })
        }, o.prototype = { beforestart: function() { return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this }, start: function() { return this.starting && (this.starting = !1, this.emit("start")), this }, brush: function() { return this.emit("brush"), this }, end: function() { return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this }, emit: function(t) { D(new function(t, n, e) { this.target = t, this.type = n, this.selection = e }(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args]) } }, e.extent = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : Hn([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), e) : s
        }, e.filter = function(t) { return arguments.length ? (f = "function" == typeof t ? t : Hn(!!t), e) : f }, e.handleSize = function(t) { return arguments.length ? (h = +t, e) : h }, e.on = function() { var t = l.on.apply(l, arguments); return t === l ? e : t }, e
    }

    function Jn(t) { return function() { return t } }

    function Kn() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

    function te() { return new Kn }

    function ne(t) { return t.source }

    function ee(t) { return t.target }

    function re(t) { return t.radius }

    function ie(t) { return t.startAngle }

    function oe(t) { return t.endAngle }

    function ue() {}

    function ae(t, n) {
        var e = new ue;
        if (t instanceof ue) t.each(function(t, n) { e.set(n, t) });
        else if (Array.isArray(t)) {
            var r, i = -1,
                o = t.length;
            if (null == n)
                for (; ++i < o;) e.set(i, t[i]);
            else
                for (; ++i < o;) e.set(n(r = t[i], i, t), r)
        } else if (t)
            for (var u in t) e.set(u, t[u]);
        return e
    }

    function ce() { return {} }

    function se(t, n, e) { t[n] = e }

    function fe() { return ae() }

    function le(t, n, e) { t.set(n, e) }

    function he() {}

    function pe(t, n) {
        var e = new he;
        if (t instanceof he) t.each(function(t) { e.add(t) });
        else if (t) {
            var r = -1,
                i = t.length;
            if (null == n)
                for (; ++r < i;) e.add(t[r]);
            else
                for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }

    function de(t) { return new Function("d", "return {" + t.map(function(t, n) { return JSON.stringify(t) + ": d[" + n + "]" }).join(",") + "}") }

    function ve(t) {
        function n(t, n) {
            function e() {
                if (s) return bh;
                if (f) return f = !1, xh;
                var n, e, r = a;
                if (t.charCodeAt(r) === wh) { for (; a++ < u && t.charCodeAt(a) !== wh || t.charCodeAt(++a) === wh;); return (n = a) >= u ? s = !0 : (e = t.charCodeAt(a++)) === Mh ? f = !0 : e === Th && (f = !0, t.charCodeAt(a) === Mh && ++a), t.slice(r + 1, n - 1).replace(/""/g, '"') }
                for (; a < u;) {
                    if ((e = t.charCodeAt(n = a++)) === Mh) f = !0;
                    else if (e === Th) f = !0, t.charCodeAt(a) === Mh && ++a;
                    else if (e !== o) continue;
                    return t.slice(r, n)
                }
                return s = !0, t.slice(r, u)
            }
            var r, i = [],
                u = t.length,
                a = 0,
                c = 0,
                s = u <= 0,
                f = !1;
            for (t.charCodeAt(u - 1) === Mh && --u, t.charCodeAt(u - 1) === Th && --u;
                (r = e()) !== bh;) {
                for (var l = []; r !== xh && r !== bh;) l.push(r), r = e();
                n && null == (l = n(l, c++)) || i.push(l)
            }
            return i
        }

        function e(n) { return n.map(r).join(t) }

        function r(t) { return null == t ? "" : i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t }
        var i = new RegExp('["' + t + "\n\r]"),
            o = t.charCodeAt(0);
        return {
            parse: function(t, e) {
                var r, i, o = n(t, function(t, n) {
                    if (r) return r(t, n - 1);
                    i = t, r = e ? function(t, n) { var e = de(t); return function(r, i) { return n(e(r), i, t) } }(t, e) : de(t)
                });
                return o.columns = i || [], o
            },
            parseRows: n,
            format: function(n, e) {
                return null == e && (e = function(t) {
                    var n = Object.create(null),
                        e = [];
                    return t.forEach(function(t) { for (var r in t) r in n || e.push(n[r] = r) }), e
                }(n)), [e.map(r).join(t)].concat(n.map(function(n) { return e.map(function(t) { return r(n[t]) }).join(t) })).join("\n")
            },
            formatRows: function(t) { return t.map(e).join("\n") }
        }
    }

    function ge(t) { return function() { return t } }

    function _e() { return 1e-6 * (Math.random() - .5) }

    function ye(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, o, u, a, c, s, f, l, h, p = t._root,
            d = { data: r },
            v = t._x0,
            g = t._y0,
            _ = t._x1,
            y = t._y1;
        if (!p) return t._root = d, t;
        for (; p.length;)
            if ((s = n >= (o = (v + _) / 2)) ? v = o : _ = o, (f = e >= (u = (g + y) / 2)) ? g = u : y = u, i = p, !(p = p[l = f << 1 | s])) return i[l] = d, t;
        if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c) return d.next = p, i ? i[l] = d : t._root = d, t;
        do { i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + _) / 2)) ? v = o : _ = o, (f = e >= (u = (g + y) / 2)) ? g = u : y = u } while ((l = f << 1 | s) == (h = (c >= u) << 1 | a >= o));
        return i[h] = p, i[l] = d, t
    }

    function me(t, n, e, r, i) { this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i }

    function xe(t) { return t[0] }

    function be(t) { return t[1] }

    function we(t, n, e) { var r = new Me(null == n ? xe : n, null == e ? be : e, NaN, NaN, NaN, NaN); return null == t ? r : r.addAll(t) }

    function Me(t, n, e, r, i, o) { this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0 }

    function Te(t) { for (var n = { data: t.data }, e = n; t = t.next;) e = e.next = { data: t.data }; return n }

    function Ne(t) { return t.x + t.vx }

    function ke(t) { return t.y + t.vy }

    function Se(t) { return t.index }

    function Ee(t, n) { var e = t.get(n); if (!e) throw new Error("missing: " + n); return e }

    function Ae(t) { return t.x }

    function Ce(t) { return t.y }

    function ze(t, n) { if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null; var e, r = t.slice(0, e); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)] }

    function Pe(t) { return (t = ze(Math.abs(t))) ? t[1] : NaN }

    function Re(t, n) {
        var e = ze(t, n);
        if (!e) return t + "";
        var r = e[0],
            i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }

    function Le(t) { return new qe(t) }

    function qe(t) {
        if (!(n = Ih.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ",
            r = n[2] || ">",
            i = n[3] || "-",
            o = n[4] || "",
            u = !!n[5],
            a = n[6] && +n[6],
            c = !!n[7],
            s = n[8] && +n[8].slice(1),
            f = n[9] || "";
        "n" === f ? (c = !0, f = "g") : Fh[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
    }

    function De(t) { return t }

    function Ue(t) {
        function n(t) {
            function n(t) {
                var n, r, u, f = g,
                    x = _;
                if ("c" === v) x = y(t) + x, t = "";
                else {
                    var b = (t = +t) < 0;
                    if (t = y(Math.abs(t), d), b && 0 == +t && (b = !1), f = (b ? "(" === s ? s : "-" : "-" === s || "(" === s ? "" : s) + f, x = x + ("s" === v ? Bh[8 + Dh / 3] : "") + (b && "(" === s ? ")" : ""), m)
                        for (n = -1, r = t.length; ++n < r;)
                            if (48 > (u = t.charCodeAt(n)) || u > 57) { x = (46 === u ? i + t.slice(n + 1) : t.slice(n)) + x, t = t.slice(0, n); break }
                }
                p && !l && (t = e(t, 1 / 0));
                var w = f.length + t.length + x.length,
                    M = w < h ? new Array(h - w + 1).join(a) : "";
                switch (p && l && (t = e(M + t, M.length ? h - x.length : 1 / 0), M = ""), c) {
                    case "<":
                        t = f + t + x + M;
                        break;
                    case "=":
                        t = f + M + t + x;
                        break;
                    case "^":
                        t = M.slice(0, w = M.length >> 1) + f + t + x + M.slice(w);
                        break;
                    default:
                        t = M + f + t + x
                }
                return o(t)
            }
            var a = (t = Le(t)).fill,
                c = t.align,
                s = t.sign,
                f = t.symbol,
                l = t.zero,
                h = t.width,
                p = t.comma,
                d = t.precision,
                v = t.type,
                g = "$" === f ? r[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
                _ = "$" === f ? r[1] : /[%p]/.test(v) ? u : "",
                y = Fh[v],
                m = !v || /[defgprs%]/.test(v);
            return d = null == d ? v ? 6 : 12 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function() { return t + "" }, n
        }
        var e = t.grouping && t.thousands ? function(t, n) { return function(e, r) { for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) a = t[u = (u + 1) % t.length]; return o.reverse().join(n) } }(t.grouping, t.thousands) : De,
            r = t.currency,
            i = t.decimal,
            o = t.numerals ? function(t) { return function(n) { return n.replace(/[0-9]/g, function(n) { return t[+n] }) } }(t.numerals) : De,
            u = t.percent || "%";
        return {
            format: n,
            formatPrefix: function(t, e) {
                var r = n((t = Le(t), t.type = "f", t)),
                    i = 3 * Math.max(-8, Math.min(8, Math.floor(Pe(e) / 3))),
                    o = Math.pow(10, -i),
                    u = Bh[8 + i / 3];
                return function(t) { return r(o * t) + u }
            }
        }
    }

    function Oe(n) { return Yh = Ue(n), t.format = Yh.format, t.formatPrefix = Yh.formatPrefix, Yh }

    function Fe(t) { return Math.max(0, -Pe(Math.abs(t))) }

    function Ie(t, n) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Pe(n) / 3))) - Pe(Math.abs(t))) }

    function Ye(t, n) { return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Pe(n) - Pe(t)) + 1 }

    function Be() { return new He }

    function He() { this.reset() }

    function je(t, n, e) {
        var r = t.s = n + e,
            i = r - n,
            o = r - i;
        t.t = n - o + (e - i)
    }

    function Xe(t) { return t > 1 ? 0 : t < -1 ? Mp : Math.acos(t) }

    function Ve(t) { return t > 1 ? Tp : t < -1 ? -Tp : Math.asin(t) }

    function $e(t) { return (t = Up(t / 2)) * t }

    function We() {}

    function Ze(t, n) { t && Bp.hasOwnProperty(t.type) && Bp[t.type](t, n) }

    function Ge(t, n, e) {
        var r, i = -1,
            o = t.length - e;
        for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function Qe(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r;) Ge(t[e], n, 1);
        n.polygonEnd()
    }

    function Je(t, n) { t && Yp.hasOwnProperty(t.type) ? Yp[t.type](t, n) : Ze(t, n) }

    function Ke() { Xp.point = nr }

    function tr() { er(Hh, jh) }

    function nr(t, n) { Xp.point = er, Hh = t, jh = n, Xh = t *= Ep, Vh = Pp(n = (n *= Ep) / 2 + Np), $h = Up(n) }

    function er(t, n) {
        n = (n *= Ep) / 2 + Np;
        var e = (t *= Ep) - Xh,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = Pp(n),
            u = Up(n),
            a = $h * u,
            c = Vh * o + a * Pp(i),
            s = a * r * Up(i);
        Hp.add(zp(s, c)), Xh = t, Vh = o, $h = u
    }

    function rr(t) { return [zp(t[1], t[0]), Ve(t[2])] }

    function ir(t) {
        var n = t[0],
            e = t[1],
            r = Pp(e);
        return [r * Pp(n), r * Up(n), Up(e)]
    }

    function or(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] }

    function ur(t, n) { return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]] }

    function ar(t, n) { t[0] += n[0], t[1] += n[1], t[2] += n[2] }

    function cr(t, n) { return [t[0] * n, t[1] * n, t[2] * n] }

    function sr(t) {
        var n = Fp(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function fr(t, n) { ep.push(rp = [Wh = t, Gh = t]), n < Zh && (Zh = n), n > Qh && (Qh = n) }

    function lr(t, n) {
        var e = ir([t * Ep, n * Ep]);
        if (np) {
            var r = ur(np, e),
                i = ur([r[1], -r[0], 0], r);
            sr(i), i = rr(i);
            var o, u = t - Jh,
                a = u > 0 ? 1 : -1,
                c = i[0] * Sp * a,
                s = Ap(u) > 180;
            s ^ (a * Jh < c && c < a * t) ? (o = i[1] * Sp) > Qh && (Qh = o) : (c = (c + 360) % 360 - 180, s ^ (a * Jh < c && c < a * t) ? (o = -i[1] * Sp) < Zh && (Zh = o) : (n < Zh && (Zh = n), n > Qh && (Qh = n))), s ? t < Jh ? _r(Wh, t) > _r(Wh, Gh) && (Gh = t) : _r(t, Gh) > _r(Wh, Gh) && (Wh = t) : Gh >= Wh ? (t < Wh && (Wh = t), t > Gh && (Gh = t)) : t > Jh ? _r(Wh, t) > _r(Wh, Gh) && (Gh = t) : _r(t, Gh) > _r(Wh, Gh) && (Wh = t)
        } else ep.push(rp = [Wh = t, Gh = t]);
        n < Zh && (Zh = n), n > Qh && (Qh = n), np = e, Jh = t
    }

    function hr() { $p.point = lr }

    function pr() { rp[0] = Wh, rp[1] = Gh, $p.point = fr, np = null }

    function dr(t, n) {
        if (np) {
            var e = t - Jh;
            Vp.add(Ap(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else Kh = t, tp = n;
        Xp.point(t, n), lr(t, n)
    }

    function vr() { Xp.lineStart() }

    function gr() { dr(Kh, tp), Xp.lineEnd(), Ap(Vp) > bp && (Wh = -(Gh = 180)), rp[0] = Wh, rp[1] = Gh, np = null }

    function _r(t, n) { return (n -= t) < 0 ? n + 360 : n }

    function yr(t, n) { return t[0] - n[0] }

    function mr(t, n) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n }

    function xr(t, n) {
        t *= Ep;
        var e = Pp(n *= Ep);
        br(e * Pp(t), e * Up(t), Up(n))
    }

    function br(t, n, e) { up += (t - up) / ++ip, ap += (n - ap) / ip, cp += (e - cp) / ip }

    function wr() { Wp.point = Mr }

    function Mr(t, n) {
        t *= Ep;
        var e = Pp(n *= Ep);
        _p = e * Pp(t), yp = e * Up(t), mp = Up(n), Wp.point = Tr, br(_p, yp, mp)
    }

    function Tr(t, n) {
        t *= Ep;
        var e = Pp(n *= Ep),
            r = e * Pp(t),
            i = e * Up(t),
            o = Up(n),
            u = zp(Fp((u = yp * o - mp * i) * u + (u = mp * r - _p * o) * u + (u = _p * i - yp * r) * u), _p * r + yp * i + mp * o);
        op += u, sp += u * (_p + (_p = r)), fp += u * (yp + (yp = i)), lp += u * (mp + (mp = o)), br(_p, yp, mp)
    }

    function Nr() { Wp.point = xr }

    function kr() { Wp.point = Er }

    function Sr() { Ar(vp, gp), Wp.point = xr }

    function Er(t, n) {
        vp = t, gp = n, t *= Ep, n *= Ep, Wp.point = Ar;
        var e = Pp(n);
        _p = e * Pp(t), yp = e * Up(t), mp = Up(n), br(_p, yp, mp)
    }

    function Ar(t, n) {
        t *= Ep;
        var e = Pp(n *= Ep),
            r = e * Pp(t),
            i = e * Up(t),
            o = Up(n),
            u = yp * o - mp * i,
            a = mp * r - _p * o,
            c = _p * i - yp * r,
            s = Fp(u * u + a * a + c * c),
            f = Ve(s),
            l = s && -f / s;
        hp += l * u, pp += l * a, dp += l * c, op += f, sp += f * (_p + (_p = r)), fp += f * (yp + (yp = i)), lp += f * (mp + (mp = o)), br(_p, yp, mp)
    }

    function Cr(t) { return function() { return t } }

    function zr(t, n) {
        function e(e, r) { return e = t(e, r), n(e[0], e[1]) }
        return t.invert && n.invert && (e.invert = function(e, r) { return (e = n.invert(e, r)) && t.invert(e[0], e[1]) }), e
    }

    function Pr(t, n) { return [t > Mp ? t - kp : t < -Mp ? t + kp : t, n] }

    function Rr(t, n, e) { return (t %= kp) ? n || e ? zr(qr(t), Dr(n, e)) : qr(t) : n || e ? Dr(n, e) : Pr }

    function Lr(t) { return function(n, e) { return n += t, [n > Mp ? n - kp : n < -Mp ? n + kp : n, e] } }

    function qr(t) { var n = Lr(t); return n.invert = Lr(-t), n }

    function Dr(t, n) {
        function e(t, n) {
            var e = Pp(n),
                a = Pp(t) * e,
                c = Up(t) * e,
                s = Up(n),
                f = s * r + a * i;
            return [zp(c * o - f * u, a * r - s * i), Ve(f * o + c * u)]
        }
        var r = Pp(t),
            i = Up(t),
            o = Pp(n),
            u = Up(n);
        return e.invert = function(t, n) {
            var e = Pp(n),
                a = Pp(t) * e,
                c = Up(t) * e,
                s = Up(n),
                f = s * o - c * u;
            return [zp(c * o + s * u, a * r + f * i), Ve(f * r - a * i)]
        }, e
    }

    function Ur(t) {
        function n(n) { return n = t(n[0] * Ep, n[1] * Ep), n[0] *= Sp, n[1] *= Sp, n }
        return t = Rr(t[0] * Ep, t[1] * Ep, t.length > 2 ? t[2] * Ep : 0), n.invert = function(n) { return n = t.invert(n[0] * Ep, n[1] * Ep), n[0] *= Sp, n[1] *= Sp, n }, n
    }

    function Or(t, n, e, r, i, o) {
        if (e) {
            var u = Pp(n),
                a = Up(n),
                c = r * e;
            null == i ? (i = n + r * kp, o = n - c / 2) : (i = Fr(u, i), o = Fr(u, o), (r > 0 ? i < o : i > o) && (i += r * kp));
            for (var s, f = i; r > 0 ? f > o : f < o; f -= c) s = rr([u, -a * Pp(f), -a * Up(f)]), t.point(s[0], s[1])
        }
    }

    function Fr(t, n) {
        (n = ir(n))[0] -= t, sr(n);
        var e = Xe(-n[1]);
        return ((-n[2] < 0 ? -e : e) + kp - bp) % kp
    }

    function Ir() { var t, n = []; return { point: function(n, e) { t.push([n, e]) }, lineStart: function() { n.push(t = []) }, lineEnd: We, rejoin: function() { n.length > 1 && n.push(n.pop().concat(n.shift())) }, result: function() { var e = n; return n = [], t = null, e } } }

    function Yr(t, n) { return Ap(t[0] - n[0]) < bp && Ap(t[1] - n[1]) < bp }

    function Br(t, n, e, r) { this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null }

    function Hr(t, n, e, r, i) {
        var o, u, a = [],
            c = [];
        if (t.forEach(function(t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e, r = t[0],
                        u = t[n];
                    if (Yr(r, u)) {
                        for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                        i.lineEnd()
                    } else a.push(e = new Br(r, t, null, !0)), c.push(e.o = new Br(r, null, e, !1)), a.push(e = new Br(u, t, null, !1)), c.push(e.o = new Br(u, null, e, !0))
                }
            }), a.length) {
            for (c.sort(n), jr(a), jr(c), o = 0, u = c.length; o < u; ++o) c[o].e = e = !e;
            for (var s, f, l = a[0];;) {
                for (var h = l, p = !0; h.v;)
                    if ((h = h.n) === l) return;
                s = h.z, i.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (p)
                            for (o = 0, u = s.length; o < u; ++o) i.point((f = s[o])[0], f[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (p)
                            for (s = h.p.z, o = s.length - 1; o >= 0; --o) i.point((f = s[o])[0], f[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    s = (h = h.o).z, p = !p
                } while (!h.v);
                i.lineEnd()
            }
        }
    }

    function jr(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i
        }
    }

    function Xr(t, n) {
        var e = n[0],
            r = n[1],
            i = [Up(e), -Pp(e), 0],
            o = 0,
            u = 0;
        ud.reset();
        for (var a = 0, c = t.length; a < c; ++a)
            if (f = (s = t[a]).length)
                for (var s, f, l = s[f - 1], h = l[0], p = l[1] / 2 + Np, d = Up(p), v = Pp(p), g = 0; g < f; ++g, h = y, d = x, v = b, l = _) {
                    var _ = s[g],
                        y = _[0],
                        m = _[1] / 2 + Np,
                        x = Up(m),
                        b = Pp(m),
                        w = y - h,
                        M = w >= 0 ? 1 : -1,
                        T = M * w,
                        N = T > Mp,
                        k = d * x;
                    if (ud.add(zp(k * M * Up(T), v * b + k * Pp(T))), o += N ? w + M * kp : w, N ^ h >= e ^ y >= e) {
                        var S = ur(ir(l), ir(_));
                        sr(S);
                        var E = ur(i, S);
                        sr(E);
                        var A = (N ^ w >= 0 ? -1 : 1) * Ve(E[2]);
                        (r > A || r === A && (S[0] || S[1])) && (u += N ^ w >= 0 ? 1 : -1)
                    }
                }
        return (o < -bp || o < bp && ud < -bp) ^ 1 & u
    }

    function Vr(t, n, e, r) {
        return function(i) {
            function o(n, e) { t(n, e) && i.point(n, e) }

            function u(t, n) { v.point(t, n) }

            function a() { x.point = u, v.lineStart() }

            function c() { x.point = o, v.lineEnd() }

            function s(t, n) { d.push([t, n]), y.point(t, n) }

            function f() { y.lineStart(), d = [] }

            function l() {
                s(d[0][0], d[0][1]), y.lineEnd();
                var t, n, e, r, o = y.clean(),
                    u = _.result(),
                    a = u.length;
                if (d.pop(), h.push(d), d = null, a)
                    if (1 & o) {
                        if (e = u[0], (n = e.length - 1) > 0) {
                            for (m || (i.polygonStart(), m = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                            i.lineEnd()
                        }
                    } else a > 1 && 2 & o && u.push(u.pop().concat(u.shift())), p.push(u.filter($r))
            }
            var h, p, d, v = n(i),
                _ = Ir(),
                y = n(_),
                m = !1,
                x = {
                    point: o,
                    lineStart: a,
                    lineEnd: c,
                    polygonStart: function() { x.point = s, x.lineStart = f, x.lineEnd = l, p = [], h = [] },
                    polygonEnd: function() {
                        x.point = o, x.lineStart = a, x.lineEnd = c, p = g(p);
                        var t = Xr(h, r);
                        p.length ? (m || (i.polygonStart(), m = !0), Hr(p, Wr, t, e, i)) : t && (m || (i.polygonStart(), m = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), m && (i.polygonEnd(), m = !1), p = h = null
                    },
                    sphere: function() { i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd() }
                };
            return x
        }
    }

    function $r(t) { return t.length > 1 }

    function Wr(t, n) { return ((t = t.x)[0] < 0 ? t[1] - Tp - bp : Tp - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Tp - bp : Tp - n[1]) }

    function Zr(t) {
        function n(t, n) { return Pp(t) * Pp(n) > i }

        function e(t, n, e) {
            var r = [1, 0, 0],
                o = ur(ir(t), ir(n)),
                u = or(o, o),
                a = o[0],
                c = u - a * a;
            if (!c) return !e && t;
            var s = i * u / c,
                f = -i * a / c,
                l = ur(r, o),
                h = cr(r, s);
            ar(h, cr(o, f));
            var p = l,
                d = or(h, p),
                v = or(p, p),
                g = d * d - v * (or(h, h) - 1);
            if (!(g < 0)) {
                var _ = Fp(g),
                    y = cr(p, (-d - _) / v);
                if (ar(y, h), y = rr(y), !e) return y;
                var m, x = t[0],
                    b = n[0],
                    w = t[1],
                    M = n[1];
                b < x && (m = x, x = b, b = m);
                var T = b - x,
                    N = Ap(T - Mp) < bp;
                if (!N && M < w && (m = w, w = M, M = m), N || T < bp ? N ? w + M > 0 ^ y[1] < (Ap(y[0] - x) < bp ? w : M) : w <= y[1] && y[1] <= M : T > Mp ^ (x <= y[0] && y[0] <= b)) { var k = cr(p, (-d + _) / v); return ar(k, h), [y, rr(k)] }
            }
        }

        function r(n, e) {
            var r = u ? t : Mp - t,
                i = 0;
            return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
        }
        var i = Pp(t),
            o = 6 * Ep,
            u = i > 0,
            a = Ap(i) > bp;
        return Vr(n, function(t) {
            var i, o, c, s, f;
            return {
                lineStart: function() { s = c = !1, f = 1 },
                point: function(l, h) {
                    var p, d = [l, h],
                        v = n(l, h),
                        g = u ? v ? 0 : r(l, h) : v ? r(l + (l < 0 ? Mp : -Mp), h) : 0;
                    if (!i && (s = c = v) && t.lineStart(), v !== c && (!(p = e(i, d)) || Yr(i, p) || Yr(d, p)) && (d[0] += bp, d[1] += bp, v = n(d[0], d[1])), v !== c) f = 0, v ? (t.lineStart(), p = e(d, i), t.point(p[0], p[1])) : (p = e(i, d), t.point(p[0], p[1]), t.lineEnd()), i = p;
                    else if (a && i && u ^ v) {
                        var _;
                        g & o || !(_ = e(d, i, !0)) || (f = 0, u ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])))
                    }!v || i && Yr(i, d) || t.point(d[0], d[1]), i = d, c = v, o = g
                },
                lineEnd: function() { c && t.lineEnd(), i = null },
                clean: function() { return f | (s && c) << 1 }
            }
        }, function(n, e, r, i) { Or(i, t, o, r, n, e) }, u ? [0, -t] : [-Mp, t - Mp])
    }

    function Gr(t, n, e, r) {
        function i(i, o) { return t <= i && i <= e && n <= o && o <= r }

        function o(i, o, a, s) {
            var f = 0,
                l = 0;
            if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0)
                do { s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n) } while ((f = (f + a + 4) % 4) !== l);
            else s.point(o[0], o[1])
        }

        function u(r, i) { return Ap(r[0] - t) < bp ? i > 0 ? 0 : 3 : Ap(r[0] - e) < bp ? i > 0 ? 2 : 1 : Ap(r[1] - n) < bp ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2 }

        function a(t, n) { return c(t.x, n.x) }

        function c(t, n) {
            var e = u(t, 1),
                r = u(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(u) {
            function c(t, n) { i(t, n) && w.point(t, n) }

            function s(o, u) {
                var a = i(o, u);
                if (l && h.push([o, u]), x) p = o, d = u, v = a, x = !1, a && (w.lineStart(), w.point(o, u));
                else if (a && m) w.point(o, u);
                else {
                    var c = [_ = Math.max(sd, Math.min(cd, _)), y = Math.max(sd, Math.min(cd, y))],
                        s = [o = Math.max(sd, Math.min(cd, o)), u = Math.max(sd, Math.min(cd, u))];
                    ! function(t, n, e, r, i, o) {
                        var u, a = t[0],
                            c = t[1],
                            s = 0,
                            f = 1,
                            l = n[0] - a,
                            h = n[1] - c;
                        if (u = e - a, l || !(u > 0)) {
                            if (u /= l, l < 0) {
                                if (u < s) return;
                                u < f && (f = u)
                            } else if (l > 0) {
                                if (u > f) return;
                                u > s && (s = u)
                            }
                            if (u = i - a, l || !(u < 0)) {
                                if (u /= l, l < 0) {
                                    if (u > f) return;
                                    u > s && (s = u)
                                } else if (l > 0) {
                                    if (u < s) return;
                                    u < f && (f = u)
                                }
                                if (u = r - c, h || !(u > 0)) {
                                    if (u /= h, h < 0) {
                                        if (u < s) return;
                                        u < f && (f = u)
                                    } else if (h > 0) {
                                        if (u > f) return;
                                        u > s && (s = u)
                                    }
                                    if (u = o - c, h || !(u < 0)) {
                                        if (u /= h, h < 0) {
                                            if (u > f) return;
                                            u > s && (s = u)
                                        } else if (h > 0) {
                                            if (u < s) return;
                                            u < f && (f = u)
                                        }
                                        return s > 0 && (t[0] = a + s * l, t[1] = c + s * h), f < 1 && (n[0] = a + f * l, n[1] = c + f * h), !0
                                    }
                                }
                            }
                        }
                    }(c, s, t, n, e, r) ? a && (w.lineStart(), w.point(o, u), b = !1): (m || (w.lineStart(), w.point(c[0], c[1])), w.point(s[0], s[1]), a || w.lineEnd(), b = !1)
                }
                _ = o, y = u, m = a
            }
            var f, l, h, p, d, v, _, y, m, x, b, w = u,
                M = Ir(),
                T = {
                    point: c,
                    lineStart: function() { T.point = s, l && l.push(h = []), x = !0, m = !1, _ = y = NaN },
                    lineEnd: function() { f && (s(p, d), v && m && M.rejoin(), f.push(M.result())), T.point = c, m && w.lineEnd() },
                    polygonStart: function() { w = M, f = [], l = [], b = !0 },
                    polygonEnd: function() {
                        var n = function() {
                                for (var n = 0, e = 0, i = l.length; e < i; ++e)
                                    for (var o, u, a = l[e], c = 1, s = a.length, f = a[0], h = f[0], p = f[1]; c < s; ++c) o = h, u = p, h = (f = a[c])[0], p = f[1], u <= r ? p > r && (h - o) * (r - u) > (p - u) * (t - o) && ++n : p <= r && (h - o) * (r - u) < (p - u) * (t - o) && --n;
                                return n
                            }(),
                            e = b && n,
                            i = (f = g(f)).length;
                        (e || i) && (u.polygonStart(), e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), i && Hr(f, a, n, o, u), u.polygonEnd()), w = u, f = l = h = null
                    }
                };
            return T
        }
    }

    function Qr() { ld.point = ld.lineEnd = We }

    function Jr(t, n) { Zp = t *= Ep, Gp = Up(n *= Ep), Qp = Pp(n), ld.point = Kr }

    function Kr(t, n) {
        t *= Ep;
        var e = Up(n *= Ep),
            r = Pp(n),
            i = Ap(t - Zp),
            o = Pp(i),
            u = r * Up(i),
            a = Qp * e - Gp * r * o,
            c = Gp * e + Qp * r * o;
        fd.add(zp(Fp(u * u + a * a), c)), Zp = t, Gp = e, Qp = r
    }

    function ti(t) { return fd.reset(), Je(t, ld), +fd }

    function ni(t, n) { return hd[0] = t, hd[1] = n, ti(pd) }

    function ei(t, n) { return !(!t || !vd.hasOwnProperty(t.type)) && vd[t.type](t, n) }

    function ri(t, n) { return 0 === ni(t, n) }

    function ii(t, n) { var e = ni(t[0], t[1]); return ni(t[0], n) + ni(n, t[1]) <= e + bp }

    function oi(t, n) { return !!Xr(t.map(ui), ai(n)) }

    function ui(t) { return (t = t.map(ai)).pop(), t }

    function ai(t) { return [t[0] * Ep, t[1] * Ep] }

    function ci(t, n, e) { var r = f(t, n - bp, e).concat(n); return function(t) { return r.map(function(n) { return [t, n] }) } }

    function si(t, n, e) { var r = f(t, n - bp, e).concat(n); return function(t) { return r.map(function(n) { return [n, t] }) } }

    function fi() {
        function t() { return { type: "MultiLineString", coordinates: n() } }

        function n() { return f(Rp(o / _) * _, i, _).map(p).concat(f(Rp(s / y) * y, c, y).map(d)).concat(f(Rp(r / v) * v, e, v).filter(function(t) { return Ap(t % _) > bp }).map(l)).concat(f(Rp(a / g) * g, u, g).filter(function(t) { return Ap(t % y) > bp }).map(h)) }
        var e, r, i, o, u, a, c, s, l, h, p, d, v = 10,
            g = v,
            _ = 90,
            y = 360,
            m = 2.5;
        return t.lines = function() { return n().map(function(t) { return { type: "LineString", coordinates: t } }) }, t.outline = function() { return { type: "Polygon", coordinates: [p(o).concat(d(c).slice(1), p(i).reverse().slice(1), d(s).reverse().slice(1))] } }, t.extent = function(n) { return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor() }, t.extentMajor = function(n) {
            return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(m)) : [
                [o, s],
                [i, c]
            ]
        }, t.extentMinor = function(n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(m)) : [
                [r, a],
                [e, u]
            ]
        }, t.step = function(n) { return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor() }, t.stepMajor = function(n) { return arguments.length ? (_ = +n[0], y = +n[1], t) : [_, y] }, t.stepMinor = function(n) { return arguments.length ? (v = +n[0], g = +n[1], t) : [v, g] }, t.precision = function(n) { return arguments.length ? (m = +n, l = ci(a, u, 90), h = si(r, e, m), p = ci(s, c, 90), d = si(o, i, m), t) : m }, t.extentMajor([
            [-180, -90 + bp],
            [180, 90 - bp]
        ]).extentMinor([
            [-180, -80 - bp],
            [180, 80 + bp]
        ])
    }

    function li(t) { return t }

    function hi() { yd.point = pi }

    function pi(t, n) { yd.point = di, Jp = td = t, Kp = nd = n }

    function di(t, n) { _d.add(nd * t - td * n), td = t, nd = n }

    function vi() { di(Jp, Kp) }

    function gi(t, n) { Td += t, Nd += n, ++kd }

    function _i() { Rd.point = yi }

    function yi(t, n) { Rd.point = mi, gi(id = t, od = n) }

    function mi(t, n) {
        var e = t - id,
            r = n - od,
            i = Fp(e * e + r * r);
        Sd += i * (id + t) / 2, Ed += i * (od + n) / 2, Ad += i, gi(id = t, od = n)
    }

    function xi() { Rd.point = gi }

    function bi() { Rd.point = Mi }

    function wi() { Ti(ed, rd) }

    function Mi(t, n) { Rd.point = Ti, gi(ed = id = t, rd = od = n) }

    function Ti(t, n) {
        var e = t - id,
            r = n - od,
            i = Fp(e * e + r * r);
        Sd += i * (id + t) / 2, Ed += i * (od + n) / 2, Ad += i, Cd += (i = od * t - id * n) * (id + t), zd += i * (od + n), Pd += 3 * i, gi(id = t, od = n)
    }

    function Ni(t) { this._context = t }

    function ki(t, n) { Id.point = Si, qd = Ud = t, Dd = Od = n }

    function Si(t, n) { Ud -= t, Od -= n, Fd.add(Fp(Ud * Ud + Od * Od)), Ud = t, Od = n }

    function Ei() { this._string = [] }

    function Ai(t) { return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z" }

    function Ci(t) { return function(n) { var e = new zi; for (var r in t) e[r] = t[r]; return e.stream = n, e } }

    function zi() {}

    function Pi(t, n, e) { var r = t.clipExtent && t.clipExtent(); return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Je(e, t.stream(Md)), n(Md.result()), null != r && t.clipExtent(r), t }

    function Ri(t, n, e) {
        return Pi(t, function(e) {
            var r = n[1][0] - n[0][0],
                i = n[1][1] - n[0][1],
                o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([u, a])
        }, e)
    }

    function Li(t, n, e) {
        return Ri(t, [
            [0, 0], n
        ], e)
    }

    function qi(t, n, e) {
        return Pi(t, function(e) {
            var r = +n,
                i = r / (e[1][0] - e[0][0]),
                o = (r - i * (e[1][0] + e[0][0])) / 2,
                u = -i * e[0][1];
            t.scale(150 * i).translate([o, u])
        }, e)
    }

    function Di(t, n, e) {
        return Pi(t, function(e) {
            var r = +n,
                i = r / (e[1][1] - e[0][1]),
                o = -i * e[0][0],
                u = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, u])
        }, e)
    }

    function Ui(t, n) {
        return +n ? function(t, n) {
            function e(r, i, o, u, a, c, s, f, l, h, p, d, v, g) {
                var _ = s - r,
                    y = f - i,
                    m = _ * _ + y * y;
                if (m > 4 * n && v--) {
                    var x = u + h,
                        b = a + p,
                        w = c + d,
                        M = Fp(x * x + b * b + w * w),
                        T = Ve(w /= M),
                        N = Ap(Ap(w) - 1) < bp || Ap(o - l) < bp ? (o + l) / 2 : zp(b, x),
                        k = t(N, T),
                        S = k[0],
                        E = k[1],
                        A = S - r,
                        C = E - i,
                        z = y * A - _ * C;
                    (z * z / m > n || Ap((_ * A + y * C) / m - .5) > .3 || u * h + a * p + c * d < Bd) && (e(r, i, o, u, a, c, S, E, N, x /= M, b /= M, w, v, g), g.point(S, E), e(S, E, N, x, b, w, s, f, l, h, p, d, v, g))
                }
            }
            return function(n) {
                function r(e, r) { e = t(e, r), n.point(e[0], e[1]) }

                function i() { _ = NaN, w.point = o, n.lineStart() }

                function o(r, i) {
                    var o = ir([r, i]),
                        u = t(r, i);
                    e(_, y, g, m, x, b, _ = u[0], y = u[1], g = r, m = o[0], x = o[1], b = o[2], Yd, n), n.point(_, y)
                }

                function u() { w.point = r, n.lineEnd() }

                function a() { i(), w.point = c, w.lineEnd = s }

                function c(t, n) { o(f = t, n), l = _, h = y, p = m, d = x, v = b, w.point = o }

                function s() { e(_, y, g, m, x, b, l, h, f, p, d, v, Yd, n), w.lineEnd = u, u() }
                var f, l, h, p, d, v, g, _, y, m, x, b, w = { point: r, lineStart: i, lineEnd: u, polygonStart: function() { n.polygonStart(), w.lineStart = a }, polygonEnd: function() { n.polygonEnd(), w.lineStart = i } };
                return w
            }
        }(t, n) : function(t) { return Ci({ point: function(n, e) { n = t(n, e), this.stream.point(n[0], n[1]) } }) }(t)
    }

    function Oi(t) { return Fi(function() { return t })() }

    function Fi(t) {
        function n(t) { return t = s(t[0] * Ep, t[1] * Ep), [t[0] * v + u, a - t[1] * v] }

        function e(t, n) { return t = o(t, n), [t[0] * v + u, a - t[1] * v] }

        function r() { s = zr(c = Rr(x, b, w), o); var t = o(y, m); return u = g - t[0] * v, a = _ + t[1] * v, i() }

        function i() { return p = d = null, n }
        var o, u, a, c, s, f, l, h, p, d, v = 150,
            g = 480,
            _ = 250,
            y = 0,
            m = 0,
            x = 0,
            b = 0,
            w = 0,
            M = null,
            T = ad,
            N = null,
            k = li,
            S = .5,
            E = Ui(e, S);
        return n.stream = function(t) { return p && d === t ? p : p = Hd(function(t) { return Ci({ point: function(n, e) { var r = t(n, e); return this.stream.point(r[0], r[1]) } }) }(c)(T(E(k(d = t))))) }, n.preclip = function(t) { return arguments.length ? (T = t, M = void 0, i()) : T }, n.postclip = function(t) { return arguments.length ? (k = t, N = f = l = h = null, i()) : k }, n.clipAngle = function(t) { return arguments.length ? (T = +t ? Zr(M = t * Ep) : (M = null, ad), i()) : M * Sp }, n.clipExtent = function(t) {
                return arguments.length ? (k = null == t ? (N = f = l = h = null, li) : Gr(N = +t[0][0], f = +t[0][1], l = +t[1][0], h = +t[1][1]), i()) : null == N ? null : [
                    [N, f],
                    [l, h]
                ]
            }, n.scale = function(t) { return arguments.length ? (v = +t, r()) : v }, n.translate = function(t) { return arguments.length ? (g = +t[0], _ = +t[1], r()) : [g, _] }, n.center = function(t) { return arguments.length ? (y = t[0] % 360 * Ep, m = t[1] % 360 * Ep, r()) : [y * Sp, m * Sp] }, n.rotate = function(t) { return arguments.length ? (x = t[0] % 360 * Ep, b = t[1] % 360 * Ep, w = t.length > 2 ? t[2] % 360 * Ep : 0, r()) : [x * Sp, b * Sp, w * Sp] }, n.precision = function(t) { return arguments.length ? (E = Ui(e, S = t * t), i()) : Fp(S) }, n.fitExtent = function(t, e) { return Ri(n, t, e) }, n.fitSize = function(t, e) { return Li(n, t, e) }, n.fitWidth = function(t, e) { return qi(n, t, e) }, n.fitHeight = function(t, e) { return Di(n, t, e) },
            function() { return o = t.apply(this, arguments), n.invert = o.invert && function(t) { return (t = s.invert((t[0] - u) / v, (a - t[1]) / v)) && [t[0] * Sp, t[1] * Sp] }, r() }
    }

    function Ii(t) {
        var n = 0,
            e = Mp / 3,
            r = Fi(t),
            i = r(n, e);
        return i.parallels = function(t) { return arguments.length ? r(n = t[0] * Ep, e = t[1] * Ep) : [n * Sp, e * Sp] }, i
    }

    function Yi(t, n) {
        function e(t, n) { var e = Fp(o - 2 * i * Up(n)) / i; return [e * Up(t *= i), u - e * Pp(t)] }
        var r = Up(t),
            i = (r + Up(n)) / 2;
        if (Ap(i) < bp) return function(t) {
            function n(t, n) { return [t * e, Up(n) / e] }
            var e = Pp(t);
            return n.invert = function(t, n) { return [t / e, Ve(n * e)] }, n
        }(t);
        var o = 1 + r * (2 * i - r),
            u = Fp(o) / i;
        return e.invert = function(t, n) { var e = u - n; return [zp(t, Ap(e)) / i * Op(e), Ve((o - (t * t + e * e) * i * i) / (2 * i))] }, e
    }

    function Bi() { return Ii(Yi).scale(155.424).center([0, 33.6442]) }

    function Hi() { return Bi().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]) }

    function ji(t) {
        return function(n, e) {
            var r = Pp(n),
                i = Pp(e),
                o = t(r * i);
            return [o * i * Up(n), o * Up(e)]
        }
    }

    function Xi(t) {
        return function(n, e) {
            var r = Fp(n * n + e * e),
                i = t(r),
                o = Up(i),
                u = Pp(i);
            return [zp(n * o, r * u), Ve(r && e * o / r)]
        }
    }

    function Vi(t, n) { return [t, qp(Ip((Tp + n) / 2))] }

    function $i(t) {
        function n() {
            var n = Mp * a(),
                u = o(Ur(o.rotate()).invert([0, 0]));
            return s(null == f ? [
                [u[0] - n, u[1] - n],
                [u[0] + n, u[1] + n]
            ] : t === Vi ? [
                [Math.max(u[0] - n, f), e],
                [Math.min(u[0] + n, r), i]
            ] : [
                [f, Math.max(u[1] - n, e)],
                [r, Math.min(u[1] + n, i)]
            ])
        }
        var e, r, i, o = Oi(t),
            u = o.center,
            a = o.scale,
            c = o.translate,
            s = o.clipExtent,
            f = null;
        return o.scale = function(t) { return arguments.length ? (a(t), n()) : a() }, o.translate = function(t) { return arguments.length ? (c(t), n()) : c() }, o.center = function(t) { return arguments.length ? (u(t), n()) : u() }, o.clipExtent = function(t) {
            return arguments.length ? (null == t ? f = e = r = i = null : (f = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == f ? null : [
                [f, e],
                [r, i]
            ]
        }, n()
    }

    function Wi(t) { return Ip((Tp + t) / 2) }

    function Zi(t, n) {
        function e(t, n) { o > 0 ? n < -Tp + bp && (n = -Tp + bp) : n > Tp - bp && (n = Tp - bp); var e = o / Dp(Wi(n), i); return [e * Up(i * t), o - e * Pp(i * t)] }
        var r = Pp(t),
            i = t === n ? Up(t) : qp(r / Pp(n)) / qp(Wi(n) / Wi(t)),
            o = r * Dp(Wi(t), i) / i;
        return i ? (e.invert = function(t, n) {
            var e = o - n,
                r = Op(i) * Fp(t * t + e * e);
            return [zp(t, Ap(e)) / i * Op(e), 2 * Cp(Dp(o / r, 1 / i)) - Tp]
        }, e) : Vi
    }

    function Gi(t, n) { return [t, n] }

    function Qi(t, n) {
        function e(t, n) {
            var e = o - n,
                r = i * t;
            return [e * Up(r), o - e * Pp(r)]
        }
        var r = Pp(t),
            i = t === n ? Up(t) : (r - Pp(n)) / (n - t),
            o = r / i + t;
        return Ap(i) < bp ? Gi : (e.invert = function(t, n) { var e = o - n; return [zp(t, Ap(e)) / i * Op(e), o - Op(i) * Fp(t * t + e * e)] }, e)
    }

    function Ji(t, n) {
        var e = Pp(n),
            r = Pp(t) * e;
        return [e * Up(t) / r, Up(n) / r]
    }

    function Ki(t, n, e, r) { return 1 === t && 1 === n && 0 === e && 0 === r ? li : Ci({ point: function(i, o) { this.stream.point(i * t + e, o * n + r) } }) }

    function to(t, n) {
        var e = n * n,
            r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }

    function no(t, n) { return [Pp(n) * Up(t), Up(n)] }

    function eo(t, n) {
        var e = Pp(n),
            r = 1 + Pp(t) * e;
        return [e * Up(t) / r, Up(n) / r]
    }

    function ro(t, n) { return [qp(Ip((Tp + n) / 2)), -t] }

    function io(t, n) { return t.parent === n.parent ? 1 : 2 }

    function oo(t, n) { return t + n.x }

    function uo(t, n) { return Math.max(t, n.y) }

    function ao(t) {
        var n = 0,
            e = t.children,
            r = e && e.length;
        if (r)
            for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n
    }

    function co(t, n) {
        var e, r, i, o, u, a = new ho(t),
            c = +t.value && (a.value = t.value),
            s = [a];
        for (null == n && (n = so); e = s.pop();)
            if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                for (e.children = new Array(u), o = u - 1; o >= 0; --o) s.push(r = e.children[o] = new ho(i[o])), r.parent = e, r.depth = e.depth + 1;
        return a.eachBefore(lo)
    }

    function so(t) { return t.children }

    function fo(t) { t.data = t.data.data }

    function lo(t) {
        var n = 0;
        do { t.height = n } while ((t = t.parent) && t.height < ++n)
    }

    function ho(t) { this.data = t, this.depth = this.height = 0, this.parent = null }

    function po(t) {
        for (var n, e, r = 0, i = (t = function(t) { for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n; return t }(Vd.call(t))).length, o = []; r < i;) n = t[r], e && go(e, n) ? ++r : (e = function(t) {
            switch (t.length) {
                case 1:
                    return function(t) { return { x: t.x, y: t.y, r: t.r } }(t[0]);
                case 2:
                    return yo(t[0], t[1]);
                case 3:
                    return mo(t[0], t[1], t[2])
            }
        }(o = function(t, n) {
            var e, r;
            if (_o(n, t)) return [n];
            for (e = 0; e < t.length; ++e)
                if (vo(n, t[e]) && _o(yo(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e)
                for (r = e + 1; r < t.length; ++r)
                    if (vo(yo(t[e], t[r]), n) && vo(yo(t[e], n), t[r]) && vo(yo(t[r], n), t[e]) && _o(mo(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }(o, n)), r = 0);
        return e
    }

    function vo(t, n) {
        var e = t.r - n.r,
            r = n.x - t.x,
            i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i
    }

    function go(t, n) {
        var e = t.r - n.r + 1e-6,
            r = n.x - t.x,
            i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }

    function _o(t, n) {
        for (var e = 0; e < n.length; ++e)
            if (!go(t, n[e])) return !1;
        return !0
    }

    function yo(t, n) {
        var e = t.x,
            r = t.y,
            i = t.r,
            o = n.x,
            u = n.y,
            a = n.r,
            c = o - e,
            s = u - r,
            f = a - i,
            l = Math.sqrt(c * c + s * s);
        return { x: (e + o + c / l * f) / 2, y: (r + u + s / l * f) / 2, r: (l + i + a) / 2 }
    }

    function mo(t, n, e) {
        var r = t.x,
            i = t.y,
            o = t.r,
            u = n.x,
            a = n.y,
            c = n.r,
            s = e.x,
            f = e.y,
            l = e.r,
            h = r - u,
            p = r - s,
            d = i - a,
            v = i - f,
            g = c - o,
            _ = l - o,
            y = r * r + i * i - o * o,
            m = y - u * u - a * a + c * c,
            x = y - s * s - f * f + l * l,
            b = p * d - h * v,
            w = (d * x - v * m) / (2 * b) - r,
            M = (v * g - d * _) / b,
            T = (p * m - h * x) / (2 * b) - i,
            N = (h * _ - p * g) / b,
            k = M * M + N * N - 1,
            S = 2 * (o + w * M + T * N),
            E = w * w + T * T - o * o,
            A = -(k ? (S + Math.sqrt(S * S - 4 * k * E)) / (2 * k) : E / S);
        return { x: r + w + M * A, y: i + T + N * A, r: A }
    }

    function xo(t, n, e) {
        var r = t.x,
            i = t.y,
            o = n.r + e.r,
            u = t.r + e.r,
            a = n.x - r,
            c = n.y - i,
            s = a * a + c * c;
        if (s) {
            var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
                l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
            e.x = r + f * a + l * c, e.y = i + f * c - l * a
        } else e.x = r + u, e.y = i
    }

    function bo(t, n) {
        var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r + n.r;
        return i * i - 1e-6 > e * e + r * r
    }

    function wo(t) {
        var n = t._,
            e = t.next._,
            r = n.r + e.r,
            i = (n.x * e.r + e.x * n.r) / r,
            o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o
    }

    function Mo(t) { this._ = t, this.next = null, this.previous = null }

    function To(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i, o, u, a, c, s, f, l;
        if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        xo(e, n, r = t[2]), n = new Mo(n), e = new Mo(e), r = new Mo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t: for (a = 3; a < i; ++a) {
            xo(n._, e._, r = t[a]), r = new Mo(r), c = e.next, s = n.previous, f = e._.r, l = n._.r;
            do {
                if (f <= l) { if (bo(c._, r._)) { e = c, n.next = e, e.previous = n, --a; continue t } f += c._.r, c = c.next } else {
                    if (bo(s._, r._)) {
                        (n = s).next = e, e.previous = n, --a;
                        continue t
                    }
                    l += s._.r, s = s.previous
                }
            } while (c !== s.next);
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = wo(n);
                (r = r.next) !== e;)(u = wo(r)) < o && (n = r, o = u);
            e = n.next
        }
        for (n = [e._], r = e;
            (r = r.next) !== e;) n.push(r._);
        for (r = po(n), a = 0; a < i; ++a) n = t[a], n.x -= r.x, n.y -= r.y;
        return r.r
    }

    function No(t) { if ("function" != typeof t) throw new Error; return t }

    function ko() { return 0 }

    function So(t) { return function() { return t } }

    function Eo(t) { return Math.sqrt(t.value) }

    function Ao(t) { return function(n) { n.children || (n.r = Math.max(0, +t(n) || 0)) } }

    function Co(t, n) {
        return function(e) {
            if (r = e.children) {
                var r, i, o, u = r.length,
                    a = t(e) * n || 0;
                if (a)
                    for (i = 0; i < u; ++i) r[i].r += a;
                if (o = To(r), a)
                    for (i = 0; i < u; ++i) r[i].r -= a;
                e.r = o + a
            }
        }
    }

    function zo(t) {
        return function(n) {
            var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }

    function Po(t) { t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1) }

    function Ro(t, n, e, r, i) { for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;)(o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s }

    function Lo(t) { return t.id }

    function qo(t) { return t.parentId }

    function Do(t, n) { return t.parent === n.parent ? 1 : 2 }

    function Uo(t) { var n = t.children; return n ? n[0] : t.t }

    function Oo(t) { var n = t.children; return n ? n[n.length - 1] : t.t }

    function Fo(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
    }

    function Io(t, n, e) { return t.a.parent === n.parent ? t.a : e }

    function Yo(t, n) { this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n }

    function Bo(t, n, e, r, i) { for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;)(o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s }

    function Ho(t, n, e, r, i, o) {
        for (var u, a, c, s, f, l, h, p, d, v, g, _ = [], y = n.children, m = 0, x = 0, b = y.length, w = n.value; m < b;) {
            c = i - e, s = o - r;
            do { f = y[x++].value } while (!f && x < b);
            for (l = h = f, g = f * f * (v = Math.max(s / c, c / s) / (w * t)), d = Math.max(h / g, g / l); x < b; ++x) { if (f += a = y[x].value, a < l && (l = a), a > h && (h = a), g = f * f * v, (p = Math.max(h / g, g / l)) > d) { f -= a; break } d = p } _.push(u = { value: f, dice: c < s, children: y.slice(m, x) }), u.dice ? Ro(u, e, r, i, w ? r += s * f / w : o) : Bo(u, e, r, w ? e += c * f / w : i, o), w -= f, m = x
        }
        return _
    }

    function jo(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]) }

    function Xo(t, n) { return t[0] - n[0] || t[1] - n[1] }

    function Vo(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && jo(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
            e[r++] = i
        }
        return e.slice(0, r)
    }

    function $o(t) { this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0 }

    function Wo(t) {
        if (!t._start) try {
            (function(t) {
                for (; t._start = t._waiting && t._active < t._size;) {
                    var n = t._ended + t._active,
                        e = t._tasks[n],
                        r = e.length - 1,
                        i = e[r];
                    e[r] = function(t, n) { return function(e, r) { t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? Zo(t, e) : (t._data[n] = r, t._waiting ? Wo(t) : Go(t)))) } }(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || tv)
                }
            })(t)
        } catch (n) {
            if (t._tasks[t._ended + t._active - 1]) Zo(t, n);
            else if (!t._data) throw n
        }
    }

    function Zo(t, n) {
        var e, r = t._tasks.length;
        for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
            if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try { e.abort() } catch (n) {} t._active = NaN, Go(t)
    }

    function Go(t) {
        if (!t._active && t._call) {
            var n = t._data;
            t._data = void 0, t._call(t._error, n)
        }
    }

    function Qo(t) {
        if (null == t) t = 1 / 0;
        else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
        return new $o(t)
    }

    function Jo() { return Math.random() }

    function Ko(t, n) {
        function e(t) {
            var n, e = s.status;
            if (!e && function(t) { var n = t.responseType; return n && "text" !== n ? t.response : t.responseText }(s) || e >= 200 && e < 300 || 304 === e) {
                if (o) try { n = o.call(r, s) } catch (t) { return void a.call("error", r, t) } else n = s;
                a.call("load", r, n)
            } else a.call("error", r, t)
        }
        var r, i, o, u, a = N("beforesend", "progress", "load", "error"),
            c = ae(),
            s = new XMLHttpRequest,
            f = null,
            l = null,
            h = 0;
        if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = e : s.onreadystatechange = function(t) { s.readyState > 3 && e(t) }, s.onprogress = function(t) { a.call("progress", r, t) }, r = { header: function(t, n) { return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r) }, mimeType: function(t) { return arguments.length ? (i = null == t ? null : t + "", r) : i }, responseType: function(t) { return arguments.length ? (u = t, r) : u }, timeout: function(t) { return arguments.length ? (h = +t, r) : h }, user: function(t) { return arguments.length < 1 ? f : (f = null == t ? null : t + "", r) }, password: function(t) { return arguments.length < 1 ? l : (l = null == t ? null : t + "", r) }, response: function(t) { return o = t, r }, get: function(t, n) { return r.send("GET", t, n) }, post: function(t, n) { return r.send("POST", t, n) }, send: function(n, e, o) { return s.open(n, t, !0, f, l), null == i || c.has("accept") || c.set("accept", i + ",*/*"), s.setRequestHeader && c.each(function(t, n) { s.setRequestHeader(n, t) }), null != i && s.overrideMimeType && s.overrideMimeType(i), null != u && (s.responseType = u), h > 0 && (s.timeout = h), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = function(t) { return function(n, e) { t(null == n ? e : null) } }(o)), null != o && r.on("error", o).on("load", function(t) { o(null, t) }), a.call("beforesend", r, s), s.send(null == e ? null : e), r }, abort: function() { return s.abort(), r }, on: function() { var t = a.on.apply(a, arguments); return t === a ? r : t } }, null != n) { if ("function" != typeof n) throw new Error("invalid callback: " + n); return r.get(n) }
        return r
    }

    function tu(t, n) { return function(e, r) { var i = Ko(e).mimeType(t).response(n); if (null != r) { if ("function" != typeof r) throw new Error("invalid callback: " + r); return i.get(r) } return i } }

    function nu(t, n) { return function(e, r, i) { arguments.length < 3 && (i = r, r = null); var o = Ko(e).mimeType(t); return o.row = function(t) { return arguments.length ? o.response(function(t, n) { return function(e) { return t(e.responseText, n) } }(n, r = t)) : r }, o.row(r), i ? o.get(i) : o } }

    function eu(t) {
        function n(n) {
            var o = n + "",
                u = e.get(o);
            if (!u) {
                if (i !== gv) return i;
                e.set(o, u = r.push(n))
            }
            return t[(u - 1) % t.length]
        }
        var e = ae(),
            r = [],
            i = gv;
        return t = null == t ? [] : vv.call(t), n.domain = function(t) {
            if (!arguments.length) return r.slice();
            r = [], e = ae();
            for (var i, o, u = -1, a = t.length; ++u < a;) e.has(o = (i = t[u]) + "") || e.set(o, r.push(i));
            return n
        }, n.range = function(e) { return arguments.length ? (t = vv.call(e), n) : t.slice() }, n.unknown = function(t) { return arguments.length ? (i = t, n) : i }, n.copy = function() { return eu().domain(r).range(t).unknown(i) }, n
    }

    function ru() {
        function t() {
            var t = i().length,
                r = u[1] < u[0],
                h = u[r - 0],
                p = u[1 - r];
            n = (p - h) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), h += (p - h - n * (t - c)) * l, e = n * (1 - c), a && (h = Math.round(h), e = Math.round(e));
            var d = f(t).map(function(t) { return h + n * t });
            return o(r ? d.reverse() : d)
        }
        var n, e, r = eu().unknown(void 0),
            i = r.domain,
            o = r.range,
            u = [0, 1],
            a = !1,
            c = 0,
            s = 0,
            l = .5;
        return delete r.unknown, r.domain = function(n) { return arguments.length ? (i(n), t()) : i() }, r.range = function(n) { return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice() }, r.rangeRound = function(n) { return u = [+n[0], +n[1]], a = !0, t() }, r.bandwidth = function() { return e }, r.step = function() { return n }, r.round = function(n) { return arguments.length ? (a = !!n, t()) : a }, r.padding = function(n) { return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c }, r.paddingInner = function(n) { return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c }, r.paddingOuter = function(n) { return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s }, r.align = function(n) { return arguments.length ? (l = Math.max(0, Math.min(1, n)), t()) : l }, r.copy = function() { return ru().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(l) }, t()
    }

    function iu(t) { var n = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return iu(n()) }, t }

    function ou(t) { return function() { return t } }

    function uu(t) { return +t }

    function au(t, n) { return (n -= t = +t) ? function(e) { return (e - t) / n } : ou(n) }

    function cu(t, n, e, r) {
        var i = t[0],
            o = t[1],
            u = n[0],
            a = n[1];
        return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)),
            function(t) { return u(i(t)) }
    }

    function su(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
            o = new Array(i),
            u = new Array(i),
            a = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
        return function(n) { var e = Ds(t, n, 1, i) - 1; return u[e](o[e](n)) }
    }

    function fu(t, n) { return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()) }

    function lu(t, n) {
        function e() { return i = Math.min(a.length, c.length) > 2 ? su : cu, o = u = null, r }

        function r(n) { return (o || (o = i(a, c, f ? function(t) { return function(n, e) { var r = t(n = +n, e = +e); return function(t) { return t <= n ? 0 : t >= e ? 1 : r(t) } } }(t) : t, s)))(+n) }
        var i, o, u, a = _v,
            c = _v,
            s = cn,
            f = !1;
        return r.invert = function(t) { return (u || (u = i(c, a, au, f ? function(t) { return function(n, e) { var r = t(n = +n, e = +e); return function(t) { return t <= 0 ? n : t >= 1 ? e : r(t) } } }(n) : n)))(+t) }, r.domain = function(t) { return arguments.length ? (a = dv.call(t, uu), e()) : a.slice() }, r.range = function(t) { return arguments.length ? (c = vv.call(t), e()) : c.slice() }, r.rangeRound = function(t) { return c = vv.call(t), s = sn, e() }, r.clamp = function(t) { return arguments.length ? (f = !!t, e()) : f }, r.interpolate = function(t) { return arguments.length ? (s = t, e()) : s }, e()
    }

    function hu(n) {
        var e = n.domain;
        return n.ticks = function(t) { var n = e(); return l(n[0], n[n.length - 1], null == t ? 10 : t) }, n.tickFormat = function(n, r) {
            return function(n, e, r) {
                var i, o = n[0],
                    u = n[n.length - 1],
                    a = p(o, u, null == e ? 10 : e);
                switch ((r = Le(null == r ? ",f" : r)).type) {
                    case "s":
                        var c = Math.max(Math.abs(o), Math.abs(u));
                        return null != r.precision || isNaN(i = Ie(a, c)) || (r.precision = i), t.formatPrefix(r, c);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != r.precision || isNaN(i = Ye(a, Math.max(Math.abs(o), Math.abs(u)))) || (r.precision = i - ("e" === r.type));
                        break;
                    case "f":
                    case "%":
                        null != r.precision || isNaN(i = Fe(a)) || (r.precision = i - 2 * ("%" === r.type))
                }
                return t.format(r)
            }(e(), n, r)
        }, n.nice = function(t) {
            null == t && (t = 10);
            var r, i = e(),
                o = 0,
                u = i.length - 1,
                a = i[o],
                c = i[u];
            return c < a && (r = a, a = c, c = r, r = o, o = u, u = r), (r = h(a, c, t)) > 0 ? r = h(a = Math.floor(a / r) * r, c = Math.ceil(c / r) * r, t) : r < 0 && (r = h(a = Math.ceil(a * r) / r, c = Math.floor(c * r) / r, t)), r > 0 ? (i[o] = Math.floor(a / r) * r, i[u] = Math.ceil(c / r) * r, e(i)) : r < 0 && (i[o] = Math.ceil(a * r) / r, i[u] = Math.floor(c * r) / r, e(i)), n
        }, n
    }

    function pu() { var t = lu(au, on); return t.copy = function() { return fu(t, pu()) }, hu(t) }

    function du() {
        function t(t) { return +t }
        var n = [0, 1];
        return t.invert = t, t.domain = t.range = function(e) { return arguments.length ? (n = dv.call(e, uu), t) : n.slice() }, t.copy = function() { return du().domain(n) }, hu(t)
    }

    function vu(t, n) {
        var e, r = 0,
            i = (t = t.slice()).length - 1,
            o = t[r],
            u = t[i];
        return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
    }

    function gu(t, n) { return (n = Math.log(n / t)) ? function(e) { return Math.log(e / t) / n } : ou(n) }

    function _u(t, n) { return t < 0 ? function(e) { return -Math.pow(-n, e) * Math.pow(-t, 1 - e) } : function(e) { return Math.pow(n, e) * Math.pow(t, 1 - e) } }

    function yu(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

    function mu(t) { return 10 === t ? yu : t === Math.E ? Math.exp : function(n) { return Math.pow(t, n) } }

    function xu(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) { return Math.log(n) / t }) }

    function bu(t) { return function(n) { return -t(-n) } }

    function wu() {
        function n() { return o = xu(i), u = mu(i), r()[0] < 0 && (o = bu(o), u = bu(u)), e }
        var e = lu(gu, _u).domain([1, 10]),
            r = e.domain,
            i = 10,
            o = xu(10),
            u = mu(10);
        return e.base = function(t) { return arguments.length ? (i = +t, n()) : i }, e.domain = function(t) { return arguments.length ? (r(t), n()) : r() }, e.ticks = function(t) {
            var n, e = r(),
                a = e[0],
                c = e[e.length - 1];
            (n = c < a) && (p = a, a = c, c = p);
            var s, f, h, p = o(a),
                d = o(c),
                v = null == t ? 10 : +t,
                g = [];
            if (!(i % 1) && d - p < v) {
                if (p = Math.round(p) - 1, d = Math.round(d) + 1, a > 0) {
                    for (; p < d; ++p)
                        for (f = 1, s = u(p); f < i; ++f)
                            if (!((h = s * f) < a)) {
                                if (h > c) break;
                                g.push(h)
                            }
                } else
                    for (; p < d; ++p)
                        for (f = i - 1, s = u(p); f >= 1; --f)
                            if (!((h = s * f) < a)) {
                                if (h > c) break;
                                g.push(h)
                            }
            } else g = l(p, d, Math.min(d - p, v)).map(u);
            return n ? g.reverse() : g
        }, e.tickFormat = function(n, r) {
            if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0) return r;
            null == n && (n = 10);
            var a = Math.max(1, i * n / e.ticks().length);
            return function(t) { var n = t / u(Math.round(o(t))); return n * i < i - .5 && (n *= i), n <= a ? r(t) : "" }
        }, e.nice = function() { return r(vu(r(), { floor: function(t) { return u(Math.floor(o(t))) }, ceil: function(t) { return u(Math.ceil(o(t))) } })) }, e.copy = function() { return fu(e, wu().base(i)) }, e
    }

    function Mu(t, n) { return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n) }

    function Tu() {
        var t = 1,
            n = lu(function(n, e) { return (e = Mu(e, t) - (n = Mu(n, t))) ? function(r) { return (Mu(r, t) - n) / e } : ou(e) }, function(n, e) {
                return e = Mu(e, t) - (n = Mu(n, t)),
                    function(r) { return Mu(n + e * r, 1 / t) }
            }),
            e = n.domain;
        return n.exponent = function(n) { return arguments.length ? (t = +n, e(e())) : t }, n.copy = function() { return fu(n, Tu().exponent(t)) }, hu(n)
    }

    function Nu() {
        function t() {
            var t = 0,
                n = Math.max(1, i.length);
            for (o = new Array(n - 1); ++t < n;) o[t - 1] = v(r, t / n);
            return e
        }

        function e(t) { if (!isNaN(t = +t)) return i[Ds(o, t)] }
        var r = [],
            i = [],
            o = [];
        return e.invertExtent = function(t) { var n = i.indexOf(t); return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]] }, e.domain = function(e) {
            if (!arguments.length) return r.slice();
            r = [];
            for (var i, o = 0, u = e.length; o < u; ++o) null == (i = e[o]) || isNaN(i = +i) || r.push(i);
            return r.sort(n), t()
        }, e.range = function(n) { return arguments.length ? (i = vv.call(n), t()) : i.slice() }, e.quantiles = function() { return o.slice() }, e.copy = function() { return Nu().domain(r).range(i) }, e
    }

    function ku() {
        function t(t) { if (t <= t) return u[Ds(o, t, 0, i)] }

        function n() { var n = -1; for (o = new Array(i); ++n < i;) o[n] = ((n + 1) * r - (n - i) * e) / (i + 1); return t }
        var e = 0,
            r = 1,
            i = 1,
            o = [.5],
            u = [0, 1];
        return t.domain = function(t) { return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r] }, t.range = function(t) { return arguments.length ? (i = (u = vv.call(t)).length - 1, n()) : u.slice() }, t.invertExtent = function(t) { var n = u.indexOf(t); return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]] }, t.copy = function() { return ku().domain([e, r]).range(u) }, hu(t)
    }

    function Su() {
        function t(t) { if (t <= t) return e[Ds(n, t, 0, r)] }
        var n = [.5],
            e = [0, 1],
            r = 1;
        return t.domain = function(i) { return arguments.length ? (n = vv.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice() }, t.range = function(i) { return arguments.length ? (e = vv.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice() }, t.invertExtent = function(t) { var r = e.indexOf(t); return [n[r - 1], n[r]] }, t.copy = function() { return Su().domain(n).range(e) }, t
    }

    function Eu(t, n, e, r) {
        function i(n) { return t(n = new Date(+n)), n }
        return i.floor = i, i.ceil = function(e) { return t(e = new Date(e - 1)), n(e, 1), t(e), e }, i.round = function(t) {
            var n = i(t),
                e = i.ceil(t);
            return t - n < e - t ? n : e
        }, i.offset = function(t, e) { return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t }, i.range = function(e, r, o) {
            var u, a = [];
            if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
            do { a.push(u = new Date(+e)), n(e, o), t(e) } while (u < e && e < r);
            return a
        }, i.filter = function(e) {
            return Eu(function(n) {
                if (n >= n)
                    for (; t(n), !e(n);) n.setTime(n - 1)
            }, function(t, r) {
                if (t >= t)
                    if (r < 0)
                        for (; ++r <= 0;)
                            for (; n(t, -1), !e(t););
                    else
                        for (; --r >= 0;)
                            for (; n(t, 1), !e(t););
            })
        }, e && (i.count = function(n, r) { return yv.setTime(+n), mv.setTime(+r), t(yv), t(mv), Math.floor(e(yv, mv)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) { return r(n) % t == 0 } : function(n) { return i.count(0, n) % t == 0 }) : i : null }), i
    }

    function Au(t) { return Eu(function(n) { n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0) }, function(t, n) { t.setDate(t.getDate() + 7 * n) }, function(t, n) { return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * wv) / Mv }) }

    function Cu(t) { return Eu(function(n) { n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCDate(t.getUTCDate() + 7 * n) }, function(t, n) { return (n - t) / Mv }) }

    function zu(t) { if (0 <= t.y && t.y < 100) { var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return n.setFullYear(t.y), n } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

    function Pu(t) { if (0 <= t.y && t.y < 100) { var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return n.setUTCFullYear(t.y), n } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

    function Ru(t) { return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 } }

    function Lu(t) {
        function n(t, n) {
            return function(e) {
                var r, i, o, u = [],
                    a = -1,
                    c = 0,
                    s = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++a < s;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = bg[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
                return u.push(t.slice(c, a)), u.join("")
            }
        }

        function e(t, n) { return function(e) { var i, o, u = Ru(1900); if (r(u, t, e += "", 0) != e.length) return null; if ("Q" in u) return new Date(u.Q); if ("p" in u && (u.H = u.H % 12 + 12 * u.p), "V" in u) { if (u.V < 1 || u.V > 53) return null; "w" in u || (u.w = 1), "Z" in u ? (i = (o = (i = Pu(Ru(u.y))).getUTCDay()) > 4 || 0 === o ? rg.ceil(i) : rg(i), i = tg.offset(i, 7 * (u.V - 1)), u.y = i.getUTCFullYear(), u.m = i.getUTCMonth(), u.d = i.getUTCDate() + (u.w + 6) % 7) : (i = (o = (i = n(Ru(u.y))).getDay()) > 4 || 0 === o ? Rv.ceil(i) : Rv(i), i = Cv.offset(i, 7 * (u.V - 1)), u.y = i.getFullYear(), u.m = i.getMonth(), u.d = i.getDate() + (u.w + 6) % 7) } else("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), o = "Z" in u ? Pu(Ru(u.y)).getUTCDay() : n(Ru(u.y)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (o + 5) % 7 : u.w + 7 * u.U - (o + 6) % 7); return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, Pu(u)) : n(u) } }

        function r(t, n, e, r) { for (var i, o, u = 0, a = n.length, c = e.length; u < a;) { if (r >= c) return -1; if (37 === (i = n.charCodeAt(u++))) { if (i = n.charAt(u++), !(o = T[i in bg ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1 } else if (i != e.charCodeAt(r++)) return -1 } return r }
        var i = t.dateTime,
            o = t.date,
            u = t.time,
            a = t.periods,
            c = t.days,
            s = t.shortDays,
            f = t.months,
            l = t.shortMonths,
            h = Uu(a),
            p = Ou(a),
            d = Uu(c),
            v = Ou(c),
            g = Uu(s),
            _ = Ou(s),
            y = Uu(f),
            m = Ou(f),
            x = Uu(l),
            b = Ou(l),
            w = { a: function(t) { return s[t.getDay()] }, A: function(t) { return c[t.getDay()] }, b: function(t) { return l[t.getMonth()] }, B: function(t) { return f[t.getMonth()] }, c: null, d: ia, e: ia, f: sa, H: oa, I: ua, j: aa, L: ca, m: fa, M: la, p: function(t) { return a[+(t.getHours() >= 12)] }, Q: Fa, s: Ia, S: ha, u: pa, U: da, V: va, w: ga, W: _a, x: null, X: null, y: ya, Y: ma, Z: xa, "%": Oa },
            M = { a: function(t) { return s[t.getUTCDay()] }, A: function(t) { return c[t.getUTCDay()] }, b: function(t) { return l[t.getUTCMonth()] }, B: function(t) { return f[t.getUTCMonth()] }, c: null, d: ba, e: ba, f: ka, H: wa, I: Ma, j: Ta, L: Na, m: Sa, M: Ea, p: function(t) { return a[+(t.getUTCHours() >= 12)] }, Q: Fa, s: Ia, S: Aa, u: Ca, U: za, V: Pa, w: Ra, W: La, x: null, X: null, y: qa, Y: Da, Z: Ua, "%": Oa },
            T = { a: function(t, n, e) { var r = g.exec(n.slice(e)); return r ? (t.w = _[r[0].toLowerCase()], e + r[0].length) : -1 }, A: function(t, n, e) { var r = d.exec(n.slice(e)); return r ? (t.w = v[r[0].toLowerCase()], e + r[0].length) : -1 }, b: function(t, n, e) { var r = x.exec(n.slice(e)); return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1 }, B: function(t, n, e) { var r = y.exec(n.slice(e)); return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1 }, c: function(t, n, e) { return r(t, i, n, e) }, d: Wu, e: Wu, f: ta, H: Gu, I: Gu, j: Zu, L: Ku, m: $u, M: Qu, p: function(t, n, e) { var r = h.exec(n.slice(e)); return r ? (t.p = p[r[0].toLowerCase()], e + r[0].length) : -1 }, Q: ea, s: ra, S: Ju, u: Iu, U: Yu, V: Bu, w: Fu, W: Hu, x: function(t, n, e) { return r(t, o, n, e) }, X: function(t, n, e) { return r(t, u, n, e) }, y: Xu, Y: ju, Z: Vu, "%": na };
        return w.x = n(o, w), w.X = n(u, w), w.c = n(i, w), M.x = n(o, M), M.X = n(u, M), M.c = n(i, M), { format: function(t) { var e = n(t += "", w); return e.toString = function() { return t }, e }, parse: function(t) { var n = e(t += "", zu); return n.toString = function() { return t }, n }, utcFormat: function(t) { var e = n(t += "", M); return e.toString = function() { return t }, e }, utcParse: function(t) { var n = e(t, Pu); return n.toString = function() { return t }, n } }
    }

    function qu(t, n, e) {
        var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }

    function Du(t) { return t.replace(Tg, "\\$&") }

    function Uu(t) { return new RegExp("^(?:" + t.map(Du).join("|") + ")", "i") }

    function Ou(t) { for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e; return n }

    function Fu(t, n, e) { var r = wg.exec(n.slice(e, e + 1)); return r ? (t.w = +r[0], e + r[0].length) : -1 }

    function Iu(t, n, e) { var r = wg.exec(n.slice(e, e + 1)); return r ? (t.u = +r[0], e + r[0].length) : -1 }

    function Yu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.U = +r[0], e + r[0].length) : -1 }

    function Bu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.V = +r[0], e + r[0].length) : -1 }

    function Hu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.W = +r[0], e + r[0].length) : -1 }

    function ju(t, n, e) { var r = wg.exec(n.slice(e, e + 4)); return r ? (t.y = +r[0], e + r[0].length) : -1 }

    function Xu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1 }

    function Vu(t, n, e) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1 }

    function $u(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.m = r[0] - 1, e + r[0].length) : -1 }

    function Wu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.d = +r[0], e + r[0].length) : -1 }

    function Zu(t, n, e) { var r = wg.exec(n.slice(e, e + 3)); return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1 }

    function Gu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.H = +r[0], e + r[0].length) : -1 }

    function Qu(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.M = +r[0], e + r[0].length) : -1 }

    function Ju(t, n, e) { var r = wg.exec(n.slice(e, e + 2)); return r ? (t.S = +r[0], e + r[0].length) : -1 }

    function Ku(t, n, e) { var r = wg.exec(n.slice(e, e + 3)); return r ? (t.L = +r[0], e + r[0].length) : -1 }

    function ta(t, n, e) { var r = wg.exec(n.slice(e, e + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1 }

    function na(t, n, e) { var r = Mg.exec(n.slice(e, e + 1)); return r ? e + r[0].length : -1 }

    function ea(t, n, e) { var r = wg.exec(n.slice(e)); return r ? (t.Q = +r[0], e + r[0].length) : -1 }

    function ra(t, n, e) { var r = wg.exec(n.slice(e)); return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1 }

    function ia(t, n) { return qu(t.getDate(), n, 2) }

    function oa(t, n) { return qu(t.getHours(), n, 2) }

    function ua(t, n) { return qu(t.getHours() % 12 || 12, n, 2) }

    function aa(t, n) { return qu(1 + Cv.count(Wv(t), t), n, 3) }

    function ca(t, n) { return qu(t.getMilliseconds(), n, 3) }

    function sa(t, n) { return ca(t, n) + "000" }

    function fa(t, n) { return qu(t.getMonth() + 1, n, 2) }

    function la(t, n) { return qu(t.getMinutes(), n, 2) }

    function ha(t, n) { return qu(t.getSeconds(), n, 2) }

    function pa(t) { var n = t.getDay(); return 0 === n ? 7 : n }

    function da(t, n) { return qu(Pv.count(Wv(t), t), n, 2) }

    function va(t, n) { var e = t.getDay(); return t = e >= 4 || 0 === e ? Dv(t) : Dv.ceil(t), qu(Dv.count(Wv(t), t) + (4 === Wv(t).getDay()), n, 2) }

    function ga(t) { return t.getDay() }

    function _a(t, n) { return qu(Rv.count(Wv(t), t), n, 2) }

    function ya(t, n) { return qu(t.getFullYear() % 100, n, 2) }

    function ma(t, n) { return qu(t.getFullYear() % 1e4, n, 4) }

    function xa(t) { var n = t.getTimezoneOffset(); return (n > 0 ? "-" : (n *= -1, "+")) + qu(n / 60 | 0, "0", 2) + qu(n % 60, "0", 2) }

    function ba(t, n) { return qu(t.getUTCDate(), n, 2) }

    function wa(t, n) { return qu(t.getUTCHours(), n, 2) }

    function Ma(t, n) { return qu(t.getUTCHours() % 12 || 12, n, 2) }

    function Ta(t, n) { return qu(1 + tg.count(yg(t), t), n, 3) }

    function Na(t, n) { return qu(t.getUTCMilliseconds(), n, 3) }

    function ka(t, n) { return Na(t, n) + "000" }

    function Sa(t, n) { return qu(t.getUTCMonth() + 1, n, 2) }

    function Ea(t, n) { return qu(t.getUTCMinutes(), n, 2) }

    function Aa(t, n) { return qu(t.getUTCSeconds(), n, 2) }

    function Ca(t) { var n = t.getUTCDay(); return 0 === n ? 7 : n }

    function za(t, n) { return qu(eg.count(yg(t), t), n, 2) }

    function Pa(t, n) { var e = t.getUTCDay(); return t = e >= 4 || 0 === e ? ug(t) : ug.ceil(t), qu(ug.count(yg(t), t) + (4 === yg(t).getUTCDay()), n, 2) }

    function Ra(t) { return t.getUTCDay() }

    function La(t, n) { return qu(rg.count(yg(t), t), n, 2) }

    function qa(t, n) { return qu(t.getUTCFullYear() % 100, n, 2) }

    function Da(t, n) { return qu(t.getUTCFullYear() % 1e4, n, 4) }

    function Ua() { return "+0000" }

    function Oa() { return "%" }

    function Fa(t) { return +t }

    function Ia(t) { return Math.floor(+t / 1e3) }

    function Ya(n) { return mg = Lu(n), t.timeFormat = mg.format, t.timeParse = mg.parse, t.utcFormat = mg.utcFormat, t.utcParse = mg.utcParse, mg }

    function Ba(t) { return new Date(t) }

    function Ha(t) { return t instanceof Date ? +t : +new Date(+t) }

    function ja(t, n, r, i, o, u, a, c, s) {
        function f(e) { return (a(e) < e ? g : u(e) < e ? _ : o(e) < e ? y : i(e) < e ? m : n(e) < e ? r(e) < e ? x : b : t(e) < e ? w : M)(e) }

        function l(n, r, i, o) {
            if (null == n && (n = 10), "number" == typeof n) {
                var u = Math.abs(i - r) / n,
                    a = e(function(t) { return t[2] }).right(T, u);
                a === T.length ? (o = p(r / Lg, i / Lg, n), n = t) : a ? (o = (a = T[u / T[a - 1][2] < T[a][2] / u ? a - 1 : a])[1], n = a[0]) : (o = Math.max(p(r, i, n), 1), n = c)
            }
            return null == o ? n : n.every(o)
        }
        var h = lu(au, on),
            d = h.invert,
            v = h.domain,
            g = s(".%L"),
            _ = s(":%S"),
            y = s("%I:%M"),
            m = s("%I %p"),
            x = s("%a %d"),
            b = s("%b %d"),
            w = s("%B"),
            M = s("%Y"),
            T = [
                [a, 1, Eg],
                [a, 5, 5 * Eg],
                [a, 15, 15 * Eg],
                [a, 30, 30 * Eg],
                [u, 1, Ag],
                [u, 5, 5 * Ag],
                [u, 15, 15 * Ag],
                [u, 30, 30 * Ag],
                [o, 1, Cg],
                [o, 3, 3 * Cg],
                [o, 6, 6 * Cg],
                [o, 12, 12 * Cg],
                [i, 1, zg],
                [i, 2, 2 * zg],
                [r, 1, Pg],
                [n, 1, Rg],
                [n, 3, 3 * Rg],
                [t, 1, Lg]
            ];
        return h.invert = function(t) { return new Date(d(t)) }, h.domain = function(t) { return arguments.length ? v(dv.call(t, Ha)) : v().map(Ba) }, h.ticks = function(t, n) {
            var e, r = v(),
                i = r[0],
                o = r[r.length - 1],
                u = o < i;
            return u && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
        }, h.tickFormat = function(t, n) { return null == n ? f : s(n) }, h.nice = function(t, n) { var e = v(); return (t = l(t, e[0], e[e.length - 1], n)) ? v(vu(e, t)) : h }, h.copy = function() { return fu(h, ja(t, n, r, i, o, u, a, c, s)) }, h
    }

    function Xa(t) { return t.match(/.{6}/g).map(function(t) { return "#" + t }) }

    function Va(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } }

    function $a(t) {
        function n(n) { var o = (n - e) / (r - e); return t(i ? Math.max(0, Math.min(1, o)) : o) }
        var e = 0,
            r = 1,
            i = !1;
        return n.domain = function(t) { return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r] }, n.clamp = function(t) { return arguments.length ? (i = !!t, n) : i }, n.interpolator = function(e) { return arguments.length ? (t = e, n) : t }, n.copy = function() { return $a(t).domain([e, r]).clamp(i) }, hu(n)
    }

    function Wa(t) { return function() { return t } }

    function Za(t) { return t >= 1 ? e_ : t <= -1 ? -e_ : Math.asin(t) }

    function Ga(t) { return t.innerRadius }

    function Qa(t) { return t.outerRadius }

    function Ja(t) { return t.startAngle }

    function Ka(t) { return t.endAngle }

    function tc(t) { return t && t.padAngle }

    function nc(t, n, e, r, i, o, u) {
        var a = t - e,
            c = n - r,
            s = (u ? o : -o) / Kg(a * a + c * c),
            f = s * c,
            l = -s * a,
            h = t + f,
            p = n + l,
            d = e + f,
            v = r + l,
            g = (h + d) / 2,
            _ = (p + v) / 2,
            y = d - h,
            m = v - p,
            x = y * y + m * m,
            b = i - o,
            w = h * v - d * p,
            M = (m < 0 ? -1 : 1) * Kg(Gg(0, b * b * x - w * w)),
            T = (w * m - y * M) / x,
            N = (-w * y - m * M) / x,
            k = (w * m + y * M) / x,
            S = (-w * y + m * M) / x,
            E = T - g,
            A = N - _,
            C = k - g,
            z = S - _;
        return E * E + A * A > C * C + z * z && (T = k, N = S), { cx: T, cy: N, x01: -f, y01: -l, x11: T * (i / b - 1), y11: N * (i / b - 1) }
    }

    function ec(t) { this._context = t }

    function rc(t) { return new ec(t) }

    function ic(t) { return t[0] }

    function oc(t) { return t[1] }

    function uc() {
        function t(t) {
            var a, c, s, f = t.length,
                l = !1;
            for (null == i && (u = o(s = te())), a = 0; a <= f; ++a) !(a < f && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
            if (s) return u = null, s + "" || null
        }
        var n = ic,
            e = oc,
            r = Wa(!0),
            i = null,
            o = rc,
            u = null;
        return t.x = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Wa(+e), t) : n }, t.y = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Wa(+n), t) : e }, t.defined = function(n) { return arguments.length ? (r = "function" == typeof n ? n : Wa(!!n), t) : r }, t.curve = function(n) { return arguments.length ? (o = n, null != i && (u = o(i)), t) : o }, t.context = function(n) { return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i }, t
    }

    function ac() {
        function t(t) {
            var n, f, l, h, p, d = t.length,
                v = !1,
                g = new Array(d),
                _ = new Array(d);
            for (null == a && (s = c(p = te())), n = 0; n <= d; ++n) {
                if (!(n < d && u(h = t[n], n, t)) === v)
                    if (v = !v) f = n, s.areaStart(), s.lineStart();
                    else {
                        for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l) s.point(g[l], _[l]);
                        s.lineEnd(), s.areaEnd()
                    } v && (g[n] = +e(h, n, t), _[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : g[n], o ? +o(h, n, t) : _[n]))
            }
            if (p) return s = null, p + "" || null
        }

        function n() { return uc().defined(u).curve(c).context(a) }
        var e = ic,
            r = null,
            i = Wa(0),
            o = oc,
            u = Wa(!0),
            a = null,
            c = rc,
            s = null;
        return t.x = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Wa(+n), r = null, t) : e }, t.x0 = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Wa(+n), t) : e }, t.x1 = function(n) { return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : Wa(+n), t) : r }, t.y = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Wa(+n), o = null, t) : i }, t.y0 = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Wa(+n), t) : i }, t.y1 = function(n) { return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : Wa(+n), t) : o }, t.lineX0 = t.lineY0 = function() { return n().x(e).y(i) }, t.lineY1 = function() { return n().x(e).y(o) }, t.lineX1 = function() { return n().x(r).y(i) }, t.defined = function(n) { return arguments.length ? (u = "function" == typeof n ? n : Wa(!!n), t) : u }, t.curve = function(n) { return arguments.length ? (c = n, null != a && (s = c(a)), t) : c }, t.context = function(n) { return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a }, t
    }

    function cc(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }

    function sc(t) { return t }

    function fc(t) { this._curve = t }

    function lc(t) {
        function n(n) { return new fc(t(n)) }
        return n._curve = t, n
    }

    function hc(t) { var n = t.curve; return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) { return arguments.length ? n(lc(t)) : n()._curve }, t }

    function pc() { return hc(uc().curve(i_)) }

    function dc() {
        var t = ac().curve(i_),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() { return hc(e()) }, delete t.lineX0, t.lineEndAngle = function() { return hc(r()) }, delete t.lineX1, t.lineInnerRadius = function() { return hc(i()) }, delete t.lineY0, t.lineOuterRadius = function() { return hc(o()) }, delete t.lineY1, t.curve = function(t) { return arguments.length ? n(lc(t)) : n()._curve }, t
    }

    function vc(t, n) { return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)] }

    function gc(t) { return t.source }

    function _c(t) { return t.target }

    function yc(t) {
        function n() {
            var n, a = o_.call(arguments),
                c = e.apply(this, a),
                s = r.apply(this, a);
            if (u || (u = n = te()), t(u, +i.apply(this, (a[0] = c, a)), +o.apply(this, a), +i.apply(this, (a[0] = s, a)), +o.apply(this, a)), n) return u = null, n + "" || null
        }
        var e = gc,
            r = _c,
            i = ic,
            o = oc,
            u = null;
        return n.source = function(t) { return arguments.length ? (e = t, n) : e }, n.target = function(t) { return arguments.length ? (r = t, n) : r }, n.x = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Wa(+t), n) : i }, n.y = function(t) { return arguments.length ? (o = "function" == typeof t ? t : Wa(+t), n) : o }, n.context = function(t) { return arguments.length ? (u = null == t ? null : t, n) : u }, n
    }

    function mc(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i) }

    function xc(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i) }

    function bc(t, n, e, r, i) {
        var o = vc(n, e),
            u = vc(n, e = (e + i) / 2),
            a = vc(r, e),
            c = vc(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
    }

    function wc() {}

    function Mc(t, n, e) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6) }

    function Tc(t) { this._context = t }

    function Nc(t) { this._context = t }

    function kc(t) { this._context = t }

    function Sc(t, n) { this._basis = new Tc(t), this._beta = n }

    function Ec(t, n, e) { t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2) }

    function Ac(t, n) { this._context = t, this._k = (1 - n) / 6 }

    function Cc(t, n) { this._context = t, this._k = (1 - n) / 6 }

    function zc(t, n) { this._context = t, this._k = (1 - n) / 6 }

    function Pc(t, n, e) {
        var r = t._x1,
            i = t._y1,
            o = t._x2,
            u = t._y2;
        if (t._l01_a > t_) {
            var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > t_) {
            var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                f = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
        }
        t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
    }

    function Rc(t, n) { this._context = t, this._alpha = n }

    function Lc(t, n) { this._context = t, this._alpha = n }

    function qc(t, n) { this._context = t, this._alpha = n }

    function Dc(t) { this._context = t }

    function Uc(t) { return t < 0 ? -1 : 1 }

    function Oc(t, n, e) {
        var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || i < 0 && -0),
            u = (e - t._y1) / (i || r < 0 && -0),
            a = (o * i + u * r) / (r + i);
        return (Uc(o) + Uc(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
    }

    function Fc(t, n) { var e = t._x1 - t._x0; return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n }

    function Ic(t, n, e) {
        var r = t._x0,
            i = t._y0,
            o = t._x1,
            u = t._y1,
            a = (o - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
    }

    function Yc(t) { this._context = t }

    function Bc(t) { this._context = new Hc(t) }

    function Hc(t) { this._context = t }

    function jc(t) { this._context = t }

    function Xc(t) {
        var n, e, r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            u = new Array(r);
        for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
        for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o]
    }

    function Vc(t, n) { this._context = t, this._t = n }

    function $c(t, n) {
        if ((i = t.length) > 1)
            for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
                for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
    }

    function Wc(t) { for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n; return e }

    function Zc(t, n) { return t[n] }

    function Gc(t) { var n = t.map(Qc); return Wc(t).sort(function(t, e) { return n[t] - n[e] }) }

    function Qc(t) { for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n); return e }

    function Jc(t) { return function() { return t } }

    function Kc(t) { return t[0] }

    function ts(t) { return t[1] }

    function ns() { this._ = null }

    function es(t) { t.U = t.C = t.L = t.R = t.P = t.N = null }

    function rs(t, n) {
        var e = n,
            r = n.R,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function is(t, n) {
        var e = n,
            r = n.L,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function os(t) { for (; t.L;) t = t.L; return t }

    function us(t, n, e, r) {
        var i = [null, null],
            o = L_.push(i) - 1;
        return i.left = t, i.right = n, e && cs(i, t, n, e), r && cs(i, n, t, r), P_[t.index].halfedges.push(o), P_[n.index].halfedges.push(o), i
    }

    function as(t, n, e) { var r = [n, e]; return r.left = t, r }

    function cs(t, n, e, r) { t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e) }

    function ss(t, n, e, r, i) {
        var o, u = t[0],
            a = t[1],
            c = u[0],
            s = u[1],
            f = 0,
            l = 1,
            h = a[0] - c,
            p = a[1] - s;
        if (o = n - c, h || !(o > 0)) {
            if (o /= h, h < 0) {
                if (o < f) return;
                o < l && (l = o)
            } else if (h > 0) {
                if (o > l) return;
                o > f && (f = o)
            }
            if (o = r - c, h || !(o < 0)) {
                if (o /= h, h < 0) {
                    if (o > l) return;
                    o > f && (f = o)
                } else if (h > 0) {
                    if (o < f) return;
                    o < l && (l = o)
                }
                if (o = e - s, p || !(o > 0)) {
                    if (o /= p, p < 0) {
                        if (o < f) return;
                        o < l && (l = o)
                    } else if (p > 0) {
                        if (o > l) return;
                        o > f && (f = o)
                    }
                    if (o = i - s, p || !(o < 0)) {
                        if (o /= p, p < 0) {
                            if (o > l) return;
                            o > f && (f = o)
                        } else if (p > 0) {
                            if (o < f) return;
                            o < l && (l = o)
                        }
                        return !(f > 0 || l < 1) || (f > 0 && (t[0] = [c + f * h, s + f * p]), l < 1 && (t[1] = [c + l * h, s + l * p]), !0)
                    }
                }
            }
        }
    }

    function fs(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var u, a, c = t[0],
            s = t.left,
            f = t.right,
            l = s[0],
            h = s[1],
            p = f[0],
            d = f[1],
            v = (l + p) / 2,
            g = (h + d) / 2;
        if (d === h) {
            if (v < n || v >= r) return;
            if (l > p) {
                if (c) { if (c[1] >= i) return } else c = [v, e];
                o = [v, i]
            } else {
                if (c) { if (c[1] < e) return } else c = [v, i];
                o = [v, e]
            }
        } else if (u = (l - p) / (d - h), a = g - u * v, u < -1 || u > 1)
            if (l > p) {
                if (c) { if (c[1] >= i) return } else c = [(e - a) / u, e];
                o = [(i - a) / u, i]
            } else {
                if (c) { if (c[1] < e) return } else c = [(i - a) / u, i];
                o = [(e - a) / u, e]
            }
        else if (h < d) {
            if (c) { if (c[0] >= r) return } else c = [n, u * n + a];
            o = [r, u * r + a]
        } else {
            if (c) { if (c[0] < n) return } else c = [r, u * r + a];
            o = [n, u * n + a]
        }
        return t[0] = c, t[1] = o, !0
    }

    function ls(t, n) {
        var e = t.site,
            r = n.left,
            i = n.right;
        return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function hs(t, n) { return n[+(n.left !== t.site)] }

    function ps(t, n) { return n[+(n.left === t.site)] }

    function ds(t) {
        var n = t.P,
            e = t.N;
        if (n && e) {
            var r = n.site,
                i = t.site,
                o = e.site;
            if (r !== o) {
                var u = i[0],
                    a = i[1],
                    c = r[0] - u,
                    s = r[1] - a,
                    f = o[0] - u,
                    l = o[1] - a,
                    h = 2 * (c * l - s * f);
                if (!(h >= -O_)) {
                    var p = c * c + s * s,
                        d = f * f + l * l,
                        v = (l * p - s * d) / h,
                        g = (c * d - f * p) / h,
                        _ = q_.pop() || new function() { es(this), this.x = this.y = this.arc = this.site = this.cy = null };
                    _.arc = t, _.site = i, _.x = v + u, _.y = (_.cy = g + a) + Math.sqrt(v * v + g * g), t.circle = _;
                    for (var y = null, m = R_._; m;)
                        if (_.y < m.y || _.y === m.y && _.x <= m.x) { if (!m.L) { y = m.P; break } m = m.L } else { if (!m.R) { y = m; break } m = m.R } R_.insert(y, _), y || (C_ = _)
                }
            }
        }
    }

    function vs(t) {
        var n = t.circle;
        n && (n.P || (C_ = n.N), R_.remove(n), q_.push(n), es(n), t.circle = null)
    }

    function gs(t) { var n = D_.pop() || new function() { es(this), this.edge = this.site = this.circle = null }; return n.site = t, n }

    function _s(t) { vs(t), z_.remove(t), D_.push(t), es(t) }

    function ys(t) {
        var n = t.circle,
            e = n.x,
            r = n.cy,
            i = [e, r],
            o = t.P,
            u = t.N,
            a = [t];
        _s(t);
        for (var c = o; c.circle && Math.abs(e - c.circle.x) < U_ && Math.abs(r - c.circle.cy) < U_;) o = c.P, a.unshift(c), _s(c), c = o;
        a.unshift(c), vs(c);
        for (var s = u; s.circle && Math.abs(e - s.circle.x) < U_ && Math.abs(r - s.circle.cy) < U_;) u = s.N, a.push(s), _s(s), s = u;
        a.push(s), vs(s);
        var f, l = a.length;
        for (f = 1; f < l; ++f) s = a[f], c = a[f - 1], cs(s.edge, c.site, s.site, i);
        c = a[0], (s = a[l - 1]).edge = us(c.site, s.site, null, i), ds(c), ds(s)
    }

    function ms(t) {
        for (var n, e, r, i, o = t[0], u = t[1], a = z_._; a;)
            if ((r = xs(a, u) - o) > U_) a = a.L;
            else { if (!((i = o - function(t, n) { var e = t.N; if (e) return xs(e, n); var r = t.site; return r[1] === n ? r[0] : 1 / 0 }(a, u)) > U_)) { r > -U_ ? (n = a.P, e = a) : i > -U_ ? (n = a, e = a.N) : n = e = a; break } if (!a.R) { n = a; break } a = a.R }(function(t) { P_[t.index] = { site: t, halfedges: [] } })(t);
        var c = gs(t);
        if (z_.insert(n, c), n || e) {
            if (n === e) return vs(n), e = gs(n.site), z_.insert(c, e), c.edge = e.edge = us(n.site, c.site), ds(n), void ds(e);
            if (e) {
                vs(n), vs(e);
                var s = n.site,
                    f = s[0],
                    l = s[1],
                    h = t[0] - f,
                    p = t[1] - l,
                    d = e.site,
                    v = d[0] - f,
                    g = d[1] - l,
                    _ = 2 * (h * g - p * v),
                    y = h * h + p * p,
                    m = v * v + g * g,
                    x = [(g * y - p * m) / _ + f, (h * m - v * y) / _ + l];
                cs(e.edge, s, d, x), c.edge = us(s, t, null, x), e.edge = us(t, d, null, x), ds(n), ds(e)
            } else c.edge = us(n.site, c.site)
        }
    }

    function xs(t, n) {
        var e = t.site,
            r = e[0],
            i = e[1],
            o = i - n;
        if (!o) return r;
        var u = t.P;
        if (!u) return -1 / 0;
        var a = (e = u.site)[0],
            c = e[1],
            s = c - n;
        if (!s) return a;
        var f = a - r,
            l = 1 / o - 1 / s,
            h = f / s;
        return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
    }

    function bs(t, n, e) { return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]) }

    function ws(t, n) { return n[1] - t[1] || n[0] - t[0] }

    function Ms(t, n) {
        var e, r, i, o = t.sort(ws).pop();
        for (L_ = [], P_ = new Array(t.length), z_ = new ns, R_ = new ns;;)
            if (i = C_, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (ms(o), e = o[0], r = o[1]), o = t.pop();
            else {
                if (!i) break;
                ys(i.arc)
            } if (function() {
                for (var t, n, e, r, i = 0, o = P_.length; i < o; ++i)
                    if ((t = P_[i]) && (r = (n = t.halfedges).length)) {
                        var u = new Array(r),
                            a = new Array(r);
                        for (e = 0; e < r; ++e) u[e] = e, a[e] = ls(t, L_[n[e]]);
                        for (u.sort(function(t, n) { return a[n] - a[t] }), e = 0; e < r; ++e) a[e] = n[u[e]];
                        for (e = 0; e < r; ++e) n[e] = a[e]
                    }
            }(), n) {
            var u = +n[0][0],
                a = +n[0][1],
                c = +n[1][0],
                s = +n[1][1];
            (function(t, n, e, r) { for (var i, o = L_.length; o--;) fs(i = L_[o], t, n, e, r) && ss(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > U_ || Math.abs(i[0][1] - i[1][1]) > U_) || delete L_[o] })(u, a, c, s),
            function(t, n, e, r) {
                var i, o, u, a, c, s, f, l, h, p, d, v, g = P_.length,
                    _ = !0;
                for (i = 0; i < g; ++i)
                    if (o = P_[i]) {
                        for (u = o.site, a = (c = o.halfedges).length; a--;) L_[c[a]] || c.splice(a, 1);
                        for (a = 0, s = c.length; a < s;) d = (p = ps(o, L_[c[a]]))[0], v = p[1], l = (f = hs(o, L_[c[++a % s]]))[0], h = f[1], (Math.abs(d - l) > U_ || Math.abs(v - h) > U_) && (c.splice(a, 0, L_.push(as(u, p, Math.abs(d - t) < U_ && r - v > U_ ? [t, Math.abs(l - t) < U_ ? h : r] : Math.abs(v - r) < U_ && e - d > U_ ? [Math.abs(h - r) < U_ ? l : e, r] : Math.abs(d - e) < U_ && v - n > U_ ? [e, Math.abs(l - e) < U_ ? h : n] : Math.abs(v - n) < U_ && d - t > U_ ? [Math.abs(h - n) < U_ ? l : t, n] : null)) - 1), ++s);
                        s && (_ = !1)
                    } if (_) {
                    var y, m, x, b = 1 / 0;
                    for (i = 0, _ = null; i < g; ++i)(o = P_[i]) && (x = (y = (u = o.site)[0] - t) * y + (m = u[1] - n) * m) < b && (b = x, _ = o);
                    if (_) {
                        var w = [t, n],
                            M = [t, r],
                            T = [e, r],
                            N = [e, n];
                        _.halfedges.push(L_.push(as(u = _.site, w, M)) - 1, L_.push(as(u, M, T)) - 1, L_.push(as(u, T, N)) - 1, L_.push(as(u, N, w)) - 1)
                    }
                }
                for (i = 0; i < g; ++i)(o = P_[i]) && (o.halfedges.length || delete P_[i])
            }(u, a, c, s)
        }
        this.edges = L_, this.cells = P_, z_ = R_ = L_ = P_ = null
    }

    function Ts(t) { return function() { return t } }

    function Ns(t, n, e) { this.k = t, this.x = n, this.y = e }

    function ks(t) { return t.__zoom || F_ }

    function Ss() { t.event.stopImmediatePropagation() }

    function Es() { t.event.preventDefault(), t.event.stopImmediatePropagation() }

    function As() { return !t.event.button }

    function Cs() {
        var t, n, e = this;
        return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
            [0, 0],
            [t, n]
        ]
    }

    function zs() { return this.__zoom || F_ }

    function Ps() { return -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500 }

    function Rs() { return "ontouchstart" in this }

    function Ls(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
            i = t.invertX(n[1][0]) - e[1][0],
            o = t.invertY(n[0][1]) - e[0][1],
            u = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
    }
    var qs = e(n),
        Ds = qs.right,
        Us = qs.left,
        Os = Array.prototype,
        Fs = Os.slice,
        Is = Os.map,
        Ys = Math.sqrt(50),
        Bs = Math.sqrt(10),
        Hs = Math.sqrt(2),
        js = Array.prototype.slice,
        Xs = 1,
        Vs = 2,
        $s = 3,
        Ws = 4,
        Zs = 1e-6,
        Gs = { value: function() {} };
    k.prototype = N.prototype = {
        constructor: k,
        on: function(t, n) {
            var e, r = this._,
                i = function(t, n) {
                    return t.trim().split(/^|\s+/).map(function(t) {
                        var e = "",
                            r = t.indexOf(".");
                        if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return { type: t, name: e }
                    })
                }(t + "", r),
                o = -1,
                u = i.length; {
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < u;)
                        if (e = (t = i[o]).type) r[e] = S(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = S(r[e], t.name, null);
                    return this
                }
                for (; ++o < u;)
                    if ((e = (t = i[o]).type) && (e = function(t, n) {
                            for (var e, r = 0, i = t.length; r < i; ++r)
                                if ((e = t[r]).name === n) return e.value
                        }(r[e], t.name))) return e
            }
        },
        copy: function() {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new k(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
        },
        apply: function(t, n, e) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e) }
    };
    var Qs = "http://www.w3.org/1999/xhtml",
        Js = { svg: "http://www.w3.org/2000/svg", xhtml: Qs, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
        Ks = 0;
    z.prototype = C.prototype = {
        constructor: z,
        get: function(t) {
            for (var n = this._; !(n in t);)
                if (!(t = t.parentNode)) return;
            return t[n]
        },
        set: function(t, n) { return t[this._] = n },
        remove: function(t) { return this._ in t && delete t[this._] },
        toString: function() { return this._ }
    };
    var tf = function(t) { return function() { return this.matches(t) } };
    if ("undefined" != typeof document) {
        var nf = document.documentElement;
        if (!nf.matches) {
            var ef = nf.webkitMatchesSelector || nf.msMatchesSelector || nf.mozMatchesSelector || nf.oMatchesSelector;
            tf = function(t) { return function() { return ef.call(this, t) } }
        }
    }
    var rf = tf,
        of = {};
    if (t.event = null, "undefined" != typeof document) { "onmouseenter" in document.documentElement || ( of = { mouseenter: "mouseover", mouseleave: "mouseout" }) } X.prototype = { constructor: X, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, n) { return this._parent.insertBefore(t, n) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } };
    var uf = "$";
    K.prototype = {
        add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) { return this._names.indexOf(t) >= 0 }
    };
    var af = [null];
    st.prototype = ft.prototype = {
        constructor: st,
        select: function(t) {
            "function" != typeof t && (t = Y(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; f < c; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
            return new st(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = H(t));
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
            return new st(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = rf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
            return new st(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return p = new Array(this.size()), s = -1, this.each(function(t) { p[++s] = t }), p;
            var e = n ? $ : V,
                r = this._parents,
                i = this._groups;
            "function" != typeof t && (t = function(t) { return function() { return t } }(t));
            for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
                var f = r[s],
                    l = i[s],
                    h = l.length,
                    p = t.call(f, f && f.__data__, s, r),
                    d = p.length,
                    v = a[s] = new Array(d),
                    g = u[s] = new Array(d);
                e(f, l, v, g, c[s] = new Array(h), p, n);
                for (var _, y, m = 0, x = 0; m < d; ++m)
                    if (_ = v[m]) {
                        for (m >= x && (x = m + 1); !(y = g[x]) && ++x < d;);
                        _._next = y || null
                    }
            }
            return u = new st(u, r), u._enter = a, u._exit = c, u
        },
        enter: function() { return new st(this._enter || this._groups.map(j), this._parents) },
        exit: function() { return new st(this._exit || this._groups.map(j), this._parents) },
        merge: function(t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
            for (; a < r; ++a) u[a] = n[a];
            return new st(u, this._parents)
        },
        order: function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
            return this
        },
        sort: function(t) {
            function n(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e } t || (t = W);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
                s.sort(n)
            }
            return new st(i, this._parents).order()
        },
        call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this },
        nodes: function() {
            var t = new Array(this.size()),
                n = -1;
            return this.each(function() { t[++n] = this }), t
        },
        node: function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) { var u = r[i]; if (u) return u }
            return null
        },
        size: function() { var t = 0; return this.each(function() {++t }), t },
        empty: function() { return !this.node() },
        each: function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
            return this
        },
        attr: function(t, n) {
            var e = E(t);
            if (arguments.length < 2) { var r = this.node(); return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e) }
            return this.each((null == n ? e.local ? function(t) { return function() { this.removeAttributeNS(t.space, t.local) } } : function(t) { return function() { this.removeAttribute(t) } } : "function" == typeof n ? e.local ? function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            } : function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            } : e.local ? function(t, n) { return function() { this.setAttributeNS(t.space, t.local, n) } } : function(t, n) { return function() { this.setAttribute(t, n) } })(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? function(t) { return function() { this.style.removeProperty(t) } } : "function" == typeof n ? function(t, n, e) {
                return function() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            } : function(t, n, e) { return function() { this.style.setProperty(t, n, e) } })(t, n, null == e ? "" : e)) : G(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? function(t) { return function() { delete this[t] } } : "function" == typeof n ? function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            } : function(t, n) { return function() { this[t] = n } })(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = Q(t + "");
            if (arguments.length < 2) {
                for (var r = J(this.node()), i = -1, o = e.length; ++i < o;)
                    if (!r.contains(e[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? function(t, n) {
                return function() {
                    (n.apply(this, arguments) ? tt : nt)(this, t)
                }
            } : n ? function(t) { return function() { tt(this, t) } } : function(t) { return function() { nt(this, t) } })(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? et : ("function" == typeof t ? function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            } : function(t) { return function() { this.textContent = t } })(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? rt : ("function" == typeof t ? function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            } : function(t) { return function() { this.innerHTML = t } })(t)) : this.node().innerHTML
        },
        raise: function() { return this.each(it) },
        lower: function() { return this.each(ot) },
        append: function(t) { var n = "function" == typeof t ? t : A(t); return this.select(function() { return this.appendChild(n.apply(this, arguments)) }) },
        insert: function(t, n) {
            var e = "function" == typeof t ? t : A(t),
                r = null == n ? ut : "function" == typeof n ? n : Y(n);
            return this.select(function() { return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null) })
        },
        remove: function() { return this.each(at) },
        datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ },
        on: function(t, n, e) {
            var r, i, o = function(t) {
                    return t.trim().split(/^|\s+/).map(function(t) {
                        var n = "",
                            e = t.indexOf(".");
                        return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n }
                    })
                }(t + ""),
                u = o.length;
            if (!(arguments.length < 2)) { for (a = n ? q : L, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e)); return this }
            var a = this.node().__on;
            if (a)
                for (var c, s = 0, f = a.length; s < f; ++s)
                    for (r = 0, c = a[s]; r < u; ++r)
                        if ((i = o[r]).type === c.type && i.name === c.name) return c.value
        },
        dispatch: function(t, n) { return this.each(("function" == typeof n ? function(t, n) { return function() { return ct(this, t, n.apply(this, arguments)) } } : function(t, n) { return function() { return ct(this, t, n) } })(t, n)) }
    }, yt.prototype.on = function() { var t = this._.on.apply(this._, arguments); return t === this._ ? this : t };
    var cf = "\\s*([+-]?\\d+)\\s*",
        sf = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        ff = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        lf = /^#([0-9a-f]{3})$/,
        hf = /^#([0-9a-f]{6})$/,
        pf = new RegExp("^rgb\\(" + [cf, cf, cf] + "\\)$"),
        df = new RegExp("^rgb\\(" + [ff, ff, ff] + "\\)$"),
        vf = new RegExp("^rgba\\(" + [cf, cf, cf, sf] + "\\)$"),
        gf = new RegExp("^rgba\\(" + [ff, ff, ff, sf] + "\\)$"),
        _f = new RegExp("^hsl\\(" + [sf, ff, ff] + "\\)$"),
        yf = new RegExp("^hsla\\(" + [sf, ff, ff, sf] + "\\)$"),
        mf = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
    Mt(Nt, kt, { displayable: function() { return this.rgb().displayable() }, toString: function() { return this.rgb() + "" } }), Mt(zt, Ct, Tt(Nt, { brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new zt(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new zt(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1 }, toString: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") } })), Mt(Lt, Rt, Tt(Nt, {
        brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Lt(this.h, this.s, this.l * t, this.opacity) },
        darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new Lt(this.h, this.s, this.l * t, this.opacity) },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                i = 2 * e - r;
            return new zt(qt(t >= 240 ? t - 240 : t + 120, i, r), qt(t, i, r), qt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }
    }));
    var xf = Math.PI / 180,
        bf = 180 / Math.PI,
        wf = .95047,
        Mf = 1,
        Tf = 1.08883,
        Nf = 4 / 29,
        kf = 6 / 29,
        Sf = 3 * kf * kf,
        Ef = kf * kf * kf;
    Mt(Ot, Ut, Tt(Nt, {
        brighter: function(t) { return new Ot(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) },
        darker: function(t) { return new Ot(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) },
        rgb: function() {
            var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return t = Mf * It(t), n = wf * It(n), e = Tf * It(e), new zt(Yt(3.2404542 * n - 1.5371385 * t - .4985314 * e), Yt(-.969266 * n + 1.8760108 * t + .041556 * e), Yt(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })), Mt(jt, Ht, Tt(Nt, { brighter: function(t) { return new jt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity) }, darker: function(t) { return new jt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity) }, rgb: function() { return Dt(this).rgb() } }));
    var Af = -.29227,
        Cf = -.90649,
        zf = 1.97294,
        Pf = zf * Cf,
        Rf = 1.78277 * zf,
        Lf = 1.78277 * Af - -.14861 * Cf;
    Mt(Vt, Xt, Tt(Nt, {
        brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Vt(this.h, this.s, this.l * t, this.opacity) },
        darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new Vt(this.h, this.s, this.l * t, this.opacity) },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * xf,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t);
            return new zt(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (Af * r + Cf * i)), 255 * (n + e * (zf * r)), this.opacity)
        }
    }));
    var qf, Df, Uf, Of, Ff, If, Yf = function t(n) {
            function e(t, n) {
                var e = r((t = Ct(t)).r, (n = Ct(n)).r),
                    i = r(t.g, n.g),
                    o = r(t.b, n.b),
                    u = tn(t.opacity, n.opacity);
                return function(n) { return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "" }
            }
            var r = Kt(n);
            return e.gamma = t, e
        }(1),
        Bf = nn(Wt),
        Hf = nn(Zt),
        jf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Xf = new RegExp(jf.source, "g"),
        Vf = 180 / Math.PI,
        $f = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
        Wf = ln(function(t) { return "none" === t ? $f : (qf || (qf = document.createElement("DIV"), Df = document.documentElement, Uf = document.defaultView), qf.style.transform = t, t = Uf.getComputedStyle(Df.appendChild(qf), null).getPropertyValue("transform"), Df.removeChild(qf), t = t.slice(7, -1).split(","), fn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5])) }, "px, ", "px)", "deg)"),
        Zf = ln(function(t) { return null == t ? $f : (Of || (Of = document.createElementNS("http://www.w3.org/2000/svg", "g")), Of.setAttribute("transform", t), (t = Of.transform.baseVal.consolidate()) ? (t = t.matrix, fn(t.a, t.b, t.c, t.d, t.e, t.f)) : $f) }, ", ", ")", ")"),
        Gf = Math.SQRT2,
        Qf = 2,
        Jf = 4,
        Kf = 1e-12,
        tl = dn(Jt),
        nl = dn(tn),
        el = vn(Jt),
        rl = vn(tn),
        il = gn(Jt),
        ol = gn(tn),
        ul = 0,
        al = 0,
        cl = 0,
        sl = 1e3,
        fl = 0,
        ll = 0,
        hl = 0,
        pl = "object" == typeof performance && performance.now ? performance : Date,
        dl = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };
    mn.prototype = xn.prototype = {
        constructor: mn,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? _n() : +e) + (null == n ? 0 : +n), this._next || If === this || (If ? If._next = this : Ff = this, If = this), this._call = t, this._time = e, Tn()
        },
        stop: function() { this._call && (this._call = null, this._time = 1 / 0, Tn()) }
    };
    var vl = N("start", "end", "interrupt"),
        gl = [],
        _l = 0,
        yl = 1,
        ml = 2,
        xl = 3,
        bl = 4,
        wl = 5,
        Ml = 6,
        Tl = ft.prototype.constructor,
        Nl = 0,
        kl = ft.prototype;
    Rn.prototype = Ln.prototype = {
        constructor: Rn,
        select: function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = Y(t));
            for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                for (var a, c, s = r[u], f = s.length, l = o[u] = new Array(f), h = 0; h < f; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, kn(l[h], n, e, h, l, An(a, e)));
            return new Rn(o, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
                e = this._id;
            "function" != typeof t && (t = H(t));
            for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                for (var c, s = r[a], f = s.length, l = 0; l < f; ++l)
                    if (c = s[l]) {
                        for (var h, p = t.call(c, c.__data__, l, s), d = An(c, e), v = 0, g = p.length; v < g; ++v)(h = p[v]) && kn(h, n, e, v, p, d);
                        o.push(p), u.push(c)
                    } return new Rn(o, u, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = rf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
            return new Rn(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
            for (; a < r; ++a) u[a] = n[a];
            return new Rn(u, this._parents, this._name, this._id)
        },
        selection: function() { return new Tl(this._groups, this._parents) },
        transition: function() {
            for (var t = this._name, n = this._id, e = qn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
                    if (u = a[s]) {
                        var f = An(u, n);
                        kn(u, t, e, s, a, { time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease })
                    } return new Rn(r, this._parents, t, e)
        },
        call: kl.call,
        nodes: kl.nodes,
        node: kl.node,
        size: kl.size,
        empty: kl.empty,
        each: kl.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? An(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                var r, i, o = function(t) { return (t + "").trim().split(/^|\s+/).every(function(t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || "start" === t }) }(n) ? Sn : En;
                return function() {
                    var u = o(this, t),
                        a = u.on;
                    a !== r && (i = (r = a).copy()).on(n, e), u.on = i
                }
            }(e, t, n))
        },
        attr: function(t, n) {
            var e = E(t),
                r = "transform" === e ? Zf : Pn;
            return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
                var r, i, o;
                return function() {
                    var u, a = e(this);
                    if (null != a) return (u = this.getAttributeNS(t.space, t.local)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function(t, n, e) {
                var r, i, o;
                return function() {
                    var u, a = e(this);
                    if (null != a) return (u = this.getAttribute(t)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
                    this.removeAttribute(t)
                }
            })(e, r, zn(this, "attr." + t, n)) : null == n ? (e.local ? function(t) { return function() { this.removeAttributeNS(t.space, t.local) } } : function(t) { return function() { this.removeAttribute(t) } })(e) : (e.local ? function(t, n, e) { var r, i; return function() { var o = this.getAttributeNS(t.space, t.local); return o === e ? null : o === r ? i : i = n(r = o, e) } } : function(t, n, e) { var r, i; return function() { var o = this.getAttribute(t); return o === e ? null : o === r ? i : i = n(r = o, e) } })(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = E(t);
            return this.tween(e, (r.local ? function(t, n) {
                function e() {
                    var e = this,
                        r = n.apply(e, arguments);
                    return r && function(n) { e.setAttributeNS(t.space, t.local, r(n)) }
                }
                return e._value = n, e
            } : function(t, n) {
                function e() {
                    var e = this,
                        r = n.apply(e, arguments);
                    return r && function(n) { e.setAttribute(t, r(n)) }
                }
                return e._value = n, e
            })(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? Wf : Pn;
            return null == n ? this.styleTween(t, function(t, n) {
                var e, r, i;
                return function() {
                    var o = G(this, t),
                        u = (this.style.removeProperty(t), G(this, t));
                    return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
                }
            }(t, r)).on("end.style." + t, function(t) { return function() { this.style.removeProperty(t) } }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                var r, i, o;
                return function() {
                    var u = G(this, t),
                        a = e(this);
                    return null == a && (this.style.removeProperty(t), a = G(this, t)), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a)
                }
            }(t, r, zn(this, "style." + t, n)) : function(t, n, e) { var r, i; return function() { var o = G(this, t); return o === e ? null : o === r ? i : i = n(r = o, e) } }(t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, function(t, n, e) {
                function r() {
                    var r = this,
                        i = n.apply(r, arguments);
                    return i && function(n) { r.style.setProperty(t, i(n), e) }
                }
                return r._value = n, r
            }(t, n, null == e ? "" : e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(zn(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + ""))
        },
        remove: function() {
            return this.on("end.remove", function(t) {
                return function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }
            }(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = An(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                    if ((r = i[o]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? function(t, n) {
                var e, r;
                return function() {
                    var i = En(this, t),
                        o = i.tween;
                    if (o !== e)
                        for (var u = 0, a = (r = e = o).length; u < a; ++u)
                            if (r[u].name === n) {
                                (r = r.slice()).splice(u, 1);
                                break
                            } i.tween = r
                }
            } : function(t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function() {
                    var o = En(this, t),
                        u = o.tween;
                    if (u !== r) {
                        i = (r = u).slice();
                        for (var a = { name: n, value: e }, c = 0, s = i.length; c < s; ++c)
                            if (i[c].name === n) { i[c] = a; break } c === s && i.push(a)
                    }
                    o.tween = i
                }
            })(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function(t, n) { return function() { Sn(this, t).delay = +n.apply(this, arguments) } } : function(t, n) {
                return n = +n,
                    function() { Sn(this, t).delay = n }
            })(n, t)) : An(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function(t, n) { return function() { En(this, t).duration = +n.apply(this, arguments) } } : function(t, n) {
                return n = +n,
                    function() { En(this, t).duration = n }
            })(n, t)) : An(this.node(), n).duration
        },
        ease: function(t) { var n = this._id; return arguments.length ? this.each(function(t, n) { if ("function" != typeof n) throw new Error; return function() { En(this, t).ease = n } }(n, t)) : An(this.node(), n).ease }
    };
    var Sl = function t(n) {
            function e(t) { return Math.pow(t, n) }
            return n = +n, e.exponent = t, e
        }(3),
        El = function t(n) {
            function e(t) { return 1 - Math.pow(1 - t, n) }
            return n = +n, e.exponent = t, e
        }(3),
        Al = function t(n) {
            function e(t) { return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2 }
            return n = +n, e.exponent = t, e
        }(3),
        Cl = Math.PI,
        zl = Cl / 2,
        Pl = 4 / 11,
        Rl = 6 / 11,
        Ll = 8 / 11,
        ql = .75,
        Dl = 9 / 11,
        Ul = 10 / 11,
        Ol = .9375,
        Fl = 21 / 22,
        Il = 63 / 64,
        Yl = 1 / Pl / Pl,
        Bl = function t(n) {
            function e(t) { return t * t * ((n + 1) * t - n) }
            return n = +n, e.overshoot = t, e
        }(1.70158),
        Hl = function t(n) {
            function e(t) { return --t * t * ((n + 1) * t + n) + 1 }
            return n = +n, e.overshoot = t, e
        }(1.70158),
        jl = function t(n) {
            function e(t) { return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2 }
            return n = +n, e.overshoot = t, e
        }(1.70158),
        Xl = 2 * Math.PI,
        Vl = function t(n, e) {
            function r(t) { return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e) }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Xl);
            return r.amplitude = function(n) { return t(n, e * Xl) }, r.period = function(e) { return t(n, e) }, r
        }(1, .3),
        $l = function t(n, e) {
            function r(t) { return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e) }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Xl);
            return r.amplitude = function(n) { return t(n, e * Xl) }, r.period = function(e) { return t(n, e) }, r
        }(1, .3),
        Wl = function t(n, e) {
            function r(t) { return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2 }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Xl);
            return r.amplitude = function(n) { return t(n, e * Xl) }, r.period = function(e) { return t(n, e) }, r
        }(1, .3),
        Zl = { time: null, delay: 0, duration: 250, ease: Un };
    ft.prototype.interrupt = function(t) { return this.each(function() { Cn(this, t) }) }, ft.prototype.transition = function(t) {
        var n, e;
        t instanceof Rn ? (n = t._id, t = t._name) : (n = qn(), (e = Zl).time = _n(), t = null == t ? null : t + "");
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && kn(u, t, n, s, a, e || Bn(u, n));
        return new Rn(r, this._parents, t, n)
    };
    var Gl = [null],
        Ql = { name: "drag" },
        Jl = { name: "space" },
        Kl = { name: "handle" },
        th = { name: "center" },
        nh = {
            name: "x",
            handles: ["e", "w"].map(Vn),
            input: function(t, n) {
                return t && [
                    [t[0], n[0][1]],
                    [t[1], n[1][1]]
                ]
            },
            output: function(t) { return t && [t[0][0], t[1][0]] }
        },
        eh = {
            name: "y",
            handles: ["n", "s"].map(Vn),
            input: function(t, n) {
                return t && [
                    [n[0][0], t[0]],
                    [n[1][0], t[1]]
                ]
            },
            output: function(t) { return t && [t[0][1], t[1][1]] }
        },
        rh = { name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Vn), input: function(t) { return t }, output: function(t) { return t } },
        ih = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
        oh = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        uh = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        ah = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
        ch = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 },
        sh = Math.cos,
        fh = Math.sin,
        lh = Math.PI,
        hh = lh / 2,
        ph = 2 * lh,
        dh = Math.max,
        vh = Array.prototype.slice,
        gh = Math.PI,
        _h = 2 * gh,
        yh = _h - 1e-6;
    Kn.prototype = te.prototype = {
        constructor: Kn,
        moveTo: function(t, n) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) },
        closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") },
        lineTo: function(t, n) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n) },
        quadraticCurveTo: function(t, n, e, r) { this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r) },
        bezierCurveTo: function(t, n, e, r, i, o) { this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) },
        arcTo: function(t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var o = this._x1,
                u = this._y1,
                a = e - t,
                c = r - n,
                s = o - t,
                f = u - n,
                l = s * s + f * f;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > 1e-6)
                if (Math.abs(f * a - c * s) > 1e-6 && i) {
                    var h = e - o,
                        p = r - u,
                        d = a * a + c * c,
                        v = h * h + p * p,
                        g = Math.sqrt(d),
                        _ = Math.sqrt(l),
                        y = i * Math.tan((gh - Math.acos((d + l - v) / (2 * g * _))) / 2),
                        m = y / _,
                        x = y / g;
                    Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * s) + "," + (n + m * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * h > s * p) + "," + (this._x1 = t + x * a) + "," + (this._y1 = n + x * c)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function(t, n, e, r, i, o) {
            t = +t, n = +n;
            var u = (e = +e) * Math.cos(r),
                a = e * Math.sin(r),
                c = t + u,
                s = n + a,
                f = 1 ^ o,
                l = o ? r - i : i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + s : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - s) > 1e-6) && (this._ += "L" + c + "," + s), e && (l < 0 && (l = l % _h + _h), l > yh ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = s) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= gh) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        },
        rect: function(t, n, e, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z" },
        toString: function() { return this._ }
    };
    ue.prototype = ae.prototype = {
        constructor: ue,
        has: function(t) { return "$" + t in this },
        get: function(t) { return this["$" + t] },
        set: function(t, n) { return this["$" + t] = n, this },
        remove: function(t) { var n = "$" + t; return n in this && delete this[n] },
        clear: function() { for (var t in this) "$" === t[0] && delete this[t] },
        keys: function() { var t = []; for (var n in this) "$" === n[0] && t.push(n.slice(1)); return t },
        values: function() { var t = []; for (var n in this) "$" === n[0] && t.push(this[n]); return t },
        entries: function() { var t = []; for (var n in this) "$" === n[0] && t.push({ key: n.slice(1), value: this[n] }); return t },
        size: function() { var t = 0; for (var n in this) "$" === n[0] && ++t; return t },
        empty: function() {
            for (var t in this)
                if ("$" === t[0]) return !1;
            return !0
        },
        each: function(t) { for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this) }
    };
    var mh = ae.prototype;
    he.prototype = pe.prototype = { constructor: he, has: mh.has, add: function(t) { return t += "", this["$" + t] = t, this }, remove: mh.remove, clear: mh.clear, values: mh.keys, size: mh.size, empty: mh.empty, each: mh.each };
    var xh = {},
        bh = {},
        wh = 34,
        Mh = 10,
        Th = 13,
        Nh = ve(","),
        kh = Nh.parse,
        Sh = Nh.parseRows,
        Eh = Nh.format,
        Ah = Nh.formatRows,
        Ch = ve("\t"),
        zh = Ch.parse,
        Ph = Ch.parseRows,
        Rh = Ch.format,
        Lh = Ch.formatRows,
        qh = we.prototype = Me.prototype;
    qh.copy = function() {
        var t, n, e = new Me(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = Te(r), e;
        for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();)
            for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = Te(n));
        return e
    }, qh.add = function(t) {
        var n = +this._x.call(null, t),
            e = +this._y.call(null, t);
        return ye(this.cover(n, e), n, e, t)
    }, qh.addAll = function(t) {
        var n, e, r, i, o = t.length,
            u = new Array(o),
            a = new Array(o),
            c = 1 / 0,
            s = 1 / 0,
            f = -1 / 0,
            l = -1 / 0;
        for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > f && (f = r), i < s && (s = i), i > l && (l = i));
        for (f < c && (c = this._x0, f = this._x1), l < s && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; e < o; ++e) ye(this, u[e], a[e], t[e]);
        return this
    }, qh.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
        else {
            if (!(e > t || t > i || r > n || n > o)) return this;
            var u, a, c = i - e,
                s = this._root;
            switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                case 0:
                    do { u = new Array(4), u[a] = s, s = u } while (c *= 2, i = e + c, o = r + c, t > i || n > o);
                    break;
                case 1:
                    do { u = new Array(4), u[a] = s, s = u } while (c *= 2, e = i - c, o = r + c, e > t || n > o);
                    break;
                case 2:
                    do { u = new Array(4), u[a] = s, s = u } while (c *= 2, i = e + c, r = o - c, t > i || r > n);
                    break;
                case 3:
                    do { u = new Array(4), u[a] = s, s = u } while (c *= 2, e = i - c, r = o - c, e > t || r > n)
            }
            this._root && this._root.length && (this._root = s)
        }
        return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
    }, qh.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length)
                do { t.push(n.data) } while (n = n.next)
        }), t
    }, qh.extent = function(t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
            [this._x0, this._y0],
            [this._x1, this._y1]
        ]
    }, qh.find = function(t, n, e) {
        var r, i, o, u, a, c, s, f = this._x0,
            l = this._y0,
            h = this._x1,
            p = this._y1,
            d = [],
            v = this._root;
        for (v && d.push(new me(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();)
            if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l))
                if (v.length) {
                    var g = (i + u) / 2,
                        _ = (o + a) / 2;
                    d.push(new me(v[3], g, _, u, a), new me(v[2], i, _, g, a), new me(v[1], g, o, u, _), new me(v[0], i, o, g, _)), (s = (n >= _) << 1 | t >= g) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c)
                } else {
                    var y = t - +this._x.call(null, v.data),
                        m = n - +this._y.call(null, v.data),
                        x = y * y + m * m;
                    if (x < e) {
                        var b = Math.sqrt(e = x);
                        f = t - b, l = n - b, h = t + b, p = n + b, r = v.data
                    }
                } return r
    }, qh.remove = function(t) {
        if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
        var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root,
            d = this._x0,
            v = this._y0,
            g = this._x1,
            _ = this._y1;
        if (!p) return this;
        if (p.length)
            for (;;) {
                if ((s = o >= (a = (d + g) / 2)) ? d = a : g = a, (f = u >= (c = (v + _) / 2)) ? v = c : _ = c, n = p, !(p = p[l = f << 1 | s])) return this;
                if (!p.length) break;
                (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
            }
        for (; p.data !== t;)
            if (r = p, !(p = p.next)) return this;
        return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
    }, qh.removeAll = function(t) { for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]); return this }, qh.root = function() { return this._root }, qh.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length)
                do {++t } while (n = n.next)
        }), t
    }, qh.visit = function(t) {
        var n, e, r, i, o, u, a = [],
            c = this._root;
        for (c && a.push(new me(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
            if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                var s = (r + o) / 2,
                    f = (i + u) / 2;
                (e = c[3]) && a.push(new me(e, s, f, o, u)), (e = c[2]) && a.push(new me(e, r, f, s, u)), (e = c[1]) && a.push(new me(e, s, i, o, f)), (e = c[0]) && a.push(new me(e, r, i, s, f))
            } return this
    }, qh.visitAfter = function(t) {
        var n, e = [],
            r = [];
        for (this._root && e.push(new me(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var o, u = n.x0,
                    a = n.y0,
                    c = n.x1,
                    s = n.y1,
                    f = (u + c) / 2,
                    l = (a + s) / 2;
                (o = i[0]) && e.push(new me(o, u, a, f, l)), (o = i[1]) && e.push(new me(o, f, a, c, l)), (o = i[2]) && e.push(new me(o, u, l, f, s)), (o = i[3]) && e.push(new me(o, f, l, c, s))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    }, qh.x = function(t) { return arguments.length ? (this._x = t, this) : this._x }, qh.y = function(t) { return arguments.length ? (this._y = t, this) : this._y };
    var Dh, Uh = 10,
        Oh = Math.PI * (3 - Math.sqrt(5)),
        Fh = {
            "": function(t, n) {
                t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, o = -1; i < r; ++i) switch (t[i]) {
                    case ".":
                        o = e = i;
                        break;
                    case "0":
                        0 === o && (o = i), e = i;
                        break;
                    case "e":
                        break t;
                    default:
                        o > 0 && (o = 0)
                }
                return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
            },
            "%": function(t, n) { return (100 * t).toFixed(n) },
            b: function(t) { return Math.round(t).toString(2) },
            c: function(t) { return t + "" },
            d: function(t) { return Math.round(t).toString(10) },
            e: function(t, n) { return t.toExponential(n) },
            f: function(t, n) { return t.toFixed(n) },
            g: function(t, n) { return t.toPrecision(n) },
            o: function(t) { return Math.round(t).toString(8) },
            p: function(t, n) { return Re(100 * t, n) },
            r: Re,
            s: function(t, n) {
                var e = ze(t, n);
                if (!e) return t + "";
                var r = e[0],
                    i = e[1],
                    o = i - (Dh = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                    u = r.length;
                return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ze(t, Math.max(0, n + o - 1))[0]
            },
            X: function(t) { return Math.round(t).toString(16).toUpperCase() },
            x: function(t) { return Math.round(t).toString(16) }
        },
        Ih = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    Le.prototype = qe.prototype, qe.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type };
    var Yh, Bh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    Oe({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] }), He.prototype = { constructor: He, reset: function() { this.s = this.t = 0 }, add: function(t) { je(xp, t, this.t), je(this, xp.s, this.s), this.s ? this.t += xp.t : this.s = xp.t }, valueOf: function() { return this.s } };
    var Hh, jh, Xh, Vh, $h, Wh, Zh, Gh, Qh, Jh, Kh, tp, np, ep, rp, ip, op, up, ap, cp, sp, fp, lp, hp, pp, dp, vp, gp, _p, yp, mp, xp = new He,
        bp = 1e-6,
        wp = 1e-12,
        Mp = Math.PI,
        Tp = Mp / 2,
        Np = Mp / 4,
        kp = 2 * Mp,
        Sp = 180 / Mp,
        Ep = Mp / 180,
        Ap = Math.abs,
        Cp = Math.atan,
        zp = Math.atan2,
        Pp = Math.cos,
        Rp = Math.ceil,
        Lp = Math.exp,
        qp = Math.log,
        Dp = Math.pow,
        Up = Math.sin,
        Op = Math.sign || function(t) { return t > 0 ? 1 : t < 0 ? -1 : 0 },
        Fp = Math.sqrt,
        Ip = Math.tan,
        Yp = { Feature: function(t, n) { Ze(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;) Ze(e[r].geometry, n) } },
        Bp = { Sphere: function(t, n) { n.sphere() }, Point: function(t, n) { t = t.coordinates, n.point(t[0], t[1], t[2]) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2]) }, LineString: function(t, n) { Ge(t.coordinates, n, 0) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Ge(e[r], n, 0) }, Polygon: function(t, n) { Qe(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Qe(e[r], n) }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Ze(e[r], n) } },
        Hp = Be(),
        jp = Be(),
        Xp = {
            point: We,
            lineStart: We,
            lineEnd: We,
            polygonStart: function() { Hp.reset(), Xp.lineStart = Ke, Xp.lineEnd = tr },
            polygonEnd: function() {
                var t = +Hp;
                jp.add(t < 0 ? kp + t : t), this.lineStart = this.lineEnd = this.point = We
            },
            sphere: function() { jp.add(kp) }
        },
        Vp = Be(),
        $p = { point: fr, lineStart: hr, lineEnd: pr, polygonStart: function() { $p.point = dr, $p.lineStart = vr, $p.lineEnd = gr, Vp.reset(), Xp.polygonStart() }, polygonEnd: function() { Xp.polygonEnd(), $p.point = fr, $p.lineStart = hr, $p.lineEnd = pr, Hp < 0 ? (Wh = -(Gh = 180), Zh = -(Qh = 90)) : Vp > bp ? Qh = 90 : Vp < -bp && (Zh = -90), rp[0] = Wh, rp[1] = Gh } },
        Wp = { sphere: We, point: xr, lineStart: wr, lineEnd: Nr, polygonStart: function() { Wp.lineStart = kr, Wp.lineEnd = Sr }, polygonEnd: function() { Wp.lineStart = wr, Wp.lineEnd = Nr } };
    Pr.invert = Pr;
    var Zp, Gp, Qp, Jp, Kp, td, nd, ed, rd, id, od, ud = Be(),
        ad = Vr(function() { return !0 }, function(t) {
            var n, e = NaN,
                r = NaN,
                i = NaN;
            return {
                lineStart: function() { t.lineStart(), n = 1 },
                point: function(o, u) {
                    var a = o > 0 ? Mp : -Mp,
                        c = Ap(o - e);
                    Ap(c - Mp) < bp ? (t.point(e, r = (r + u) / 2 > 0 ? Tp : -Tp), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Mp && (Ap(e - i) < bp && (e -= i * bp), Ap(o - a) < bp && (o -= a * bp), r = function(t, n, e, r) { var i, o, u = Up(t - e); return Ap(u) > bp ? Cp((Up(n) * (o = Pp(r)) * Up(e) - Up(r) * (i = Pp(n)) * Up(t)) / (i * o * u)) : (n + r) / 2 }(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
                },
                lineEnd: function() { t.lineEnd(), e = r = NaN },
                clean: function() { return 2 - n }
            }
        }, function(t, n, e, r) {
            var i;
            if (null == t) i = e * Tp, r.point(-Mp, i), r.point(0, i), r.point(Mp, i), r.point(Mp, 0), r.point(Mp, -i), r.point(0, -i), r.point(-Mp, -i), r.point(-Mp, 0), r.point(-Mp, i);
            else if (Ap(t[0] - n[0]) > bp) {
                var o = t[0] < n[0] ? Mp : -Mp;
                i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
            } else r.point(n[0], n[1])
        }, [-Mp, -Tp]),
        cd = 1e9,
        sd = -cd,
        fd = Be(),
        ld = { sphere: We, point: We, lineStart: function() { ld.point = Jr, ld.lineEnd = Qr }, lineEnd: We, polygonStart: We, polygonEnd: We },
        hd = [null, null],
        pd = { type: "LineString", coordinates: hd },
        dd = {
            Feature: function(t, n) { return ei(t.geometry, n) },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;)
                    if (ei(e[r].geometry, n)) return !0;
                return !1
            }
        },
        vd = {
            Sphere: function() { return !0 },
            Point: function(t, n) { return ri(t.coordinates, n) },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (ri(e[r], n)) return !0;
                return !1
            },
            LineString: function(t, n) { return ii(t.coordinates, n) },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (ii(e[r], n)) return !0;
                return !1
            },
            Polygon: function(t, n) { return oi(t.coordinates, n) },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (oi(e[r], n)) return !0;
                return !1
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                    if (ei(e[r], n)) return !0;
                return !1
            }
        },
        gd = Be(),
        _d = Be(),
        yd = { point: We, lineStart: We, lineEnd: We, polygonStart: function() { yd.lineStart = hi, yd.lineEnd = vi }, polygonEnd: function() { yd.lineStart = yd.lineEnd = yd.point = We, gd.add(Ap(_d)), _d.reset() }, result: function() { var t = gd / 2; return gd.reset(), t } },
        md = 1 / 0,
        xd = md,
        bd = -md,
        wd = bd,
        Md = {
            point: function(t, n) { t < md && (md = t), t > bd && (bd = t), n < xd && (xd = n), n > wd && (wd = n) },
            lineStart: We,
            lineEnd: We,
            polygonStart: We,
            polygonEnd: We,
            result: function() {
                var t = [
                    [md, xd],
                    [bd, wd]
                ];
                return bd = wd = -(xd = md = 1 / 0), t
            }
        },
        Td = 0,
        Nd = 0,
        kd = 0,
        Sd = 0,
        Ed = 0,
        Ad = 0,
        Cd = 0,
        zd = 0,
        Pd = 0,
        Rd = { point: gi, lineStart: _i, lineEnd: xi, polygonStart: function() { Rd.lineStart = bi, Rd.lineEnd = wi }, polygonEnd: function() { Rd.point = gi, Rd.lineStart = _i, Rd.lineEnd = xi }, result: function() { var t = Pd ? [Cd / Pd, zd / Pd] : Ad ? [Sd / Ad, Ed / Ad] : kd ? [Td / kd, Nd / kd] : [NaN, NaN]; return Td = Nd = kd = Sd = Ed = Ad = Cd = zd = Pd = 0, t } };
    Ni.prototype = {
        _radius: 4.5,
        pointRadius: function(t) { return this._radius = t, this },
        polygonStart: function() { this._line = 0 },
        polygonEnd: function() { this._line = NaN },
        lineStart: function() { this._point = 0 },
        lineEnd: function() { 0 === this._line && this._context.closePath(), this._point = NaN },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, kp)
            }
        },
        result: We
    };
    var Ld, qd, Dd, Ud, Od, Fd = Be(),
        Id = { point: We, lineStart: function() { Id.point = ki }, lineEnd: function() { Ld && Si(qd, Dd), Id.point = We }, polygonStart: function() { Ld = !0 }, polygonEnd: function() { Ld = null }, result: function() { var t = +Fd; return Fd.reset(), t } };
    Ei.prototype = {
        _radius: 4.5,
        _circle: Ai(4.5),
        pointRadius: function(t) { return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this },
        polygonStart: function() { this._line = 0 },
        polygonEnd: function() { this._line = NaN },
        lineStart: function() { this._point = 0 },
        lineEnd: function() { 0 === this._line && this._string.push("Z"), this._point = NaN },
        point: function(t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = Ai(this._radius)), this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() { if (this._string.length) { var t = this._string.join(""); return this._string = [], t } return null }
    }, zi.prototype = { constructor: zi, point: function(t, n) { this.stream.point(t, n) }, sphere: function() { this.stream.sphere() }, lineStart: function() { this.stream.lineStart() }, lineEnd: function() { this.stream.lineEnd() }, polygonStart: function() { this.stream.polygonStart() }, polygonEnd: function() { this.stream.polygonEnd() } };
    var Yd = 16,
        Bd = Pp(30 * Ep),
        Hd = Ci({ point: function(t, n) { this.stream.point(t * Ep, n * Ep) } }),
        jd = ji(function(t) { return Fp(2 / (1 + t)) });
    jd.invert = Xi(function(t) { return 2 * Ve(t / 2) });
    var Xd = ji(function(t) { return (t = Xe(t)) && t / Up(t) });
    Xd.invert = Xi(function(t) { return t }), Vi.invert = function(t, n) { return [t, 2 * Cp(Lp(n)) - Tp] }, Gi.invert = Gi, Ji.invert = Xi(Cp), to.invert = function(t, n) {
        var e, r = n,
            i = 25;
        do {
            var o = r * r,
                u = o * o;
            r -= e = (r * (1.007226 + o * (.015085 + u * (.028874 * o - .044475 - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (.259866 * o - .311325 - .005916 * 11 * u)))
        } while (Ap(e) > bp && --i > 0);
        return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
    }, no.invert = Xi(Ve), eo.invert = Xi(function(t) { return 2 * Cp(t) }), ro.invert = function(t, n) { return [-n, 2 * Cp(Lp(t)) - Tp] }, ho.prototype = co.prototype = {
        constructor: ho,
        count: function() { return this.eachAfter(ao) },
        each: function(t) {
            var n, e, r, i, o = this,
                u = [o];
            do {
                for (n = u.reverse(), u = []; o = n.pop();)
                    if (t(o), e = o.children)
                        for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
            } while (u.length);
            return this
        },
        eachAfter: function(t) {
            for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                if (u.push(i), n = i.children)
                    for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
            for (; i = u.pop();) t(i);
            return this
        },
        eachBefore: function(t) {
            for (var n, e, r = this, i = [r]; r = i.pop();)
                if (t(r), n = r.children)
                    for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        },
        sum: function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        },
        sort: function(t) { return this.eachBefore(function(n) { n.children && n.children.sort(t) }) },
        path: function(t) {
            for (var n = this, e = function(t, n) {
                    if (t === n) return t;
                    var e = t.ancestors(),
                        r = n.ancestors(),
                        i = null;
                    for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                    return i
                }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
            return r
        },
        ancestors: function() { for (var t = this, n = [t]; t = t.parent;) n.push(t); return n },
        descendants: function() { var t = []; return this.each(function(n) { t.push(n) }), t },
        leaves: function() { var t = []; return this.eachBefore(function(n) { n.children || t.push(n) }), t },
        links: function() {
            var t = this,
                n = [];
            return t.each(function(e) { e !== t && n.push({ source: e.parent, target: e }) }), n
        },
        copy: function() { return co(this).eachBefore(fo) }
    };
    var Vd = Array.prototype.slice,
        $d = "$",
        Wd = { depth: -1 },
        Zd = {};
    Yo.prototype = Object.create(ho.prototype);
    var Gd = (1 + Math.sqrt(5)) / 2,
        Qd = function t(n) {
            function e(t, e, r, i, o) { Ho(n, t, e, r, i, o) }
            return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e
        }(Gd),
        Jd = function t(n) {
            function e(t, e, r, i, o) {
                if ((u = t._squarify) && u.ratio === n)
                    for (var u, a, c, s, f, l = -1, h = u.length, p = t.value; ++l < h;) {
                        for (c = (a = u[l]).children, s = a.value = 0, f = c.length; s < f; ++s) a.value += c[s].value;
                        a.dice ? Ro(a, e, r, i, r += (o - r) * a.value / p) : Bo(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
                    } else t._squarify = u = Ho(n, t, e, r, i, o), u.ratio = n
            }
            return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e
        }(Gd),
        Kd = [].slice,
        tv = {};
    $o.prototype = Qo.prototype = { constructor: $o, defer: function(t) { if ("function" != typeof t) throw new Error("invalid callback"); if (this._call) throw new Error("defer after await"); if (null != this._error) return this; var n = Kd.call(arguments, 1); return n.push(t), ++this._waiting, this._tasks.push(n), Wo(this), this }, abort: function() { return null == this._error && Zo(this, new Error("abort")), this }, await: function(t) { if ("function" != typeof t) throw new Error("invalid callback"); if (this._call) throw new Error("multiple await"); return this._call = function(n, e) { t.apply(null, [n].concat(e)) }, Go(this), this }, awaitAll: function(t) { if ("function" != typeof t) throw new Error("invalid callback"); if (this._call) throw new Error("multiple await"); return this._call = t, Go(this), this } };
    var nv = function t(n) {
            function e(t, e) {
                return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                    function() { return n() * e + t }
            }
            return e.source = t, e
        }(Jo),
        ev = function t(n) {
            function e(t, e) {
                var r, i;
                return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                    function() {
                        var o;
                        if (null != r) o = r, r = null;
                        else
                            do { r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o } while (!i || i > 1);
                        return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
                    }
            }
            return e.source = t, e
        }(Jo),
        rv = function t(n) {
            function e() { var t = ev.source(n).apply(this, arguments); return function() { return Math.exp(t()) } }
            return e.source = t, e
        }(Jo),
        iv = function t(n) {
            function e(t) { return function() { for (var e = 0, r = 0; r < t; ++r) e += n(); return e } }
            return e.source = t, e
        }(Jo),
        ov = function t(n) {
            function e(t) { var e = iv.source(n)(t); return function() { return e() / t } }
            return e.source = t, e
        }(Jo),
        uv = function t(n) {
            function e(t) { return function() { return -Math.log(1 - n()) / t } }
            return e.source = t, e
        }(Jo),
        av = tu("text/html", function(t) { return document.createRange().createContextualFragment(t.responseText) }),
        cv = tu("application/json", function(t) { return JSON.parse(t.responseText) }),
        sv = tu("text/plain", function(t) { return t.responseText }),
        fv = tu("application/xml", function(t) { var n = t.responseXML; if (!n) throw new Error("parse error"); return n }),
        lv = nu("text/csv", kh),
        hv = nu("text/tab-separated-values", zh),
        pv = Array.prototype,
        dv = pv.map,
        vv = pv.slice,
        gv = { name: "implicit" },
        _v = [0, 1],
        yv = new Date,
        mv = new Date,
        xv = Eu(function() {}, function(t, n) { t.setTime(+t + n) }, function(t, n) { return n - t });
    xv.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Eu(function(n) { n.setTime(Math.floor(n / t) * t) }, function(n, e) { n.setTime(+n + e * t) }, function(n, e) { return (e - n) / t }) : xv : null };
    var bv = xv.range,
        wv = 6e4,
        Mv = 6048e5,
        Tv = Eu(function(t) { t.setTime(1e3 * Math.floor(t / 1e3)) }, function(t, n) { t.setTime(+t + 1e3 * n) }, function(t, n) { return (n - t) / 1e3 }, function(t) { return t.getUTCSeconds() }),
        Nv = Tv.range,
        kv = Eu(function(t) { t.setTime(Math.floor(t / wv) * wv) }, function(t, n) { t.setTime(+t + n * wv) }, function(t, n) { return (n - t) / wv }, function(t) { return t.getMinutes() }),
        Sv = kv.range,
        Ev = Eu(function(t) {
            var n = t.getTimezoneOffset() * wv % 36e5;
            n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
        }, function(t, n) { t.setTime(+t + 36e5 * n) }, function(t, n) { return (n - t) / 36e5 }, function(t) { return t.getHours() }),
        Av = Ev.range,
        Cv = Eu(function(t) { t.setHours(0, 0, 0, 0) }, function(t, n) { t.setDate(t.getDate() + n) }, function(t, n) { return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * wv) / 864e5 }, function(t) { return t.getDate() - 1 }),
        zv = Cv.range,
        Pv = Au(0),
        Rv = Au(1),
        Lv = Au(2),
        qv = Au(3),
        Dv = Au(4),
        Uv = Au(5),
        Ov = Au(6),
        Fv = Pv.range,
        Iv = Rv.range,
        Yv = Lv.range,
        Bv = qv.range,
        Hv = Dv.range,
        jv = Uv.range,
        Xv = Ov.range,
        Vv = Eu(function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }, function(t, n) { t.setMonth(t.getMonth() + n) }, function(t, n) { return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()) }, function(t) { return t.getMonth() }),
        $v = Vv.range,
        Wv = Eu(function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }, function(t, n) { t.setFullYear(t.getFullYear() + n) }, function(t, n) { return n.getFullYear() - t.getFullYear() }, function(t) { return t.getFullYear() });
    Wv.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Eu(function(n) { n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0) }, function(n, e) { n.setFullYear(n.getFullYear() + e * t) }) : null };
    var Zv = Wv.range,
        Gv = Eu(function(t) { t.setUTCSeconds(0, 0) }, function(t, n) { t.setTime(+t + n * wv) }, function(t, n) { return (n - t) / wv }, function(t) { return t.getUTCMinutes() }),
        Qv = Gv.range,
        Jv = Eu(function(t) { t.setUTCMinutes(0, 0, 0) }, function(t, n) { t.setTime(+t + 36e5 * n) }, function(t, n) { return (n - t) / 36e5 }, function(t) { return t.getUTCHours() }),
        Kv = Jv.range,
        tg = Eu(function(t) { t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCDate(t.getUTCDate() + n) }, function(t, n) { return (n - t) / 864e5 }, function(t) { return t.getUTCDate() - 1 }),
        ng = tg.range,
        eg = Cu(0),
        rg = Cu(1),
        ig = Cu(2),
        og = Cu(3),
        ug = Cu(4),
        ag = Cu(5),
        cg = Cu(6),
        sg = eg.range,
        fg = rg.range,
        lg = ig.range,
        hg = og.range,
        pg = ug.range,
        dg = ag.range,
        vg = cg.range,
        gg = Eu(function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCMonth(t.getUTCMonth() + n) }, function(t, n) { return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()) }, function(t) { return t.getUTCMonth() }),
        _g = gg.range,
        yg = Eu(function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCFullYear(t.getUTCFullYear() + n) }, function(t, n) { return n.getUTCFullYear() - t.getUTCFullYear() }, function(t) { return t.getUTCFullYear() });
    yg.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Eu(function(n) { n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0) }, function(n, e) { n.setUTCFullYear(n.getUTCFullYear() + e * t) }) : null };
    var mg, xg = yg.range,
        bg = { "-": "", _: " ", 0: "0" },
        wg = /^\s*\d+/,
        Mg = /^%/,
        Tg = /[\\^$*+?|[\]().{}]/g;
    Ya({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
    var Ng = "%Y-%m-%dT%H:%M:%S.%LZ",
        kg = Date.prototype.toISOString ? function(t) { return t.toISOString() } : t.utcFormat(Ng),
        Sg = +new Date("2000-01-01T00:00:00.000Z") ? function(t) { var n = new Date(t); return isNaN(n) ? null : n } : t.utcParse(Ng),
        Eg = 1e3,
        Ag = 60 * Eg,
        Cg = 60 * Ag,
        zg = 24 * Cg,
        Pg = 7 * zg,
        Rg = 30 * zg,
        Lg = 365 * zg,
        qg = Xa("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Dg = Xa("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
        Ug = Xa("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
        Og = Xa("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
        Fg = ol(Xt(300, .5, 0), Xt(-240, .5, 1)),
        Ig = ol(Xt(-100, .75, .35), Xt(80, 1.5, .8)),
        Yg = ol(Xt(260, .75, .35), Xt(80, 1.5, .8)),
        Bg = Xt(),
        Hg = Va(Xa("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        jg = Va(Xa("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        Xg = Va(Xa("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        Vg = Va(Xa("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
        $g = Math.abs,
        Wg = Math.atan2,
        Zg = Math.cos,
        Gg = Math.max,
        Qg = Math.min,
        Jg = Math.sin,
        Kg = Math.sqrt,
        t_ = 1e-12,
        n_ = Math.PI,
        e_ = n_ / 2,
        r_ = 2 * n_;
    ec.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._point = 0 },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
            }
        }
    };
    var i_ = lc(rc);
    fc.prototype = { areaStart: function() { this._curve.areaStart() }, areaEnd: function() { this._curve.areaEnd() }, lineStart: function() { this._curve.lineStart() }, lineEnd: function() { this._curve.lineEnd() }, point: function(t, n) { this._curve.point(n * Math.sin(t), n * -Math.cos(t)) } };
    var o_ = Array.prototype.slice,
        u_ = {
            draw: function(t, n) {
                var e = Math.sqrt(n / n_);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, r_)
            }
        },
        a_ = {
            draw: function(t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
            }
        },
        c_ = Math.sqrt(1 / 3),
        s_ = 2 * c_,
        f_ = {
            draw: function(t, n) {
                var e = Math.sqrt(n / s_),
                    r = e * c_;
                t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
            }
        },
        l_ = Math.sin(n_ / 10) / Math.sin(7 * n_ / 10),
        h_ = Math.sin(r_ / 10) * l_,
        p_ = -Math.cos(r_ / 10) * l_,
        d_ = {
            draw: function(t, n) {
                var e = Math.sqrt(.8908130915292852 * n),
                    r = h_ * e,
                    i = p_ * e;
                t.moveTo(0, -e), t.lineTo(r, i);
                for (var o = 1; o < 5; ++o) {
                    var u = r_ * o / 5,
                        a = Math.cos(u),
                        c = Math.sin(u);
                    t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                }
                t.closePath()
            }
        },
        v_ = {
            draw: function(t, n) {
                var e = Math.sqrt(n),
                    r = -e / 2;
                t.rect(r, r, e, e)
            }
        },
        g_ = Math.sqrt(3),
        __ = {
            draw: function(t, n) {
                var e = -Math.sqrt(n / (3 * g_));
                t.moveTo(0, 2 * e), t.lineTo(-g_ * e, -e), t.lineTo(g_ * e, -e), t.closePath()
            }
        },
        y_ = Math.sqrt(3) / 2,
        m_ = 1 / Math.sqrt(12),
        x_ = 3 * (m_ / 2 + 1),
        b_ = {
            draw: function(t, n) {
                var e = Math.sqrt(n / x_),
                    r = e / 2,
                    i = e * m_,
                    o = r,
                    u = e * m_ + e,
                    a = -o,
                    c = u;
                t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(-.5 * r - y_ * i, y_ * r + -.5 * i), t.lineTo(-.5 * o - y_ * u, y_ * o + -.5 * u), t.lineTo(-.5 * a - y_ * c, y_ * a + -.5 * c), t.lineTo(-.5 * r + y_ * i, -.5 * i - y_ * r), t.lineTo(-.5 * o + y_ * u, -.5 * u - y_ * o), t.lineTo(-.5 * a + y_ * c, -.5 * c - y_ * a), t.closePath()
            }
        },
        w_ = [u_, a_, f_, v_, d_, __, b_];
    Tc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 3:
                    Mc(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    Mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, Nc.prototype = {
        areaStart: wc,
        areaEnd: wc,
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    Mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, kc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6,
                        r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, Sc.prototype = {
        lineStart: function() { this._x = [], this._y = [], this._basis.lineStart() },
        lineEnd: function() {
            var t = this._x,
                n = this._y,
                e = t.length - 1;
            if (e > 0)
                for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
            this._x = this._y = null, this._basis.lineEnd()
        },
        point: function(t, n) { this._x.push(+t), this._y.push(+n) }
    };
    var M_ = function t(n) {
        function e(t) { return 1 === n ? new Tc(t) : new Sc(t, n) }
        return e.beta = function(n) { return t(+n) }, e
    }(.85);
    Ac.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Ec(this, this._x1, this._y1)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Ec(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var T_ = function t(n) {
        function e(t) { return new Ac(t, n) }
        return e.tension = function(n) { return t(+n) }, e
    }(0);
    Cc.prototype = {
        areaStart: wc,
        areaEnd: wc,
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Ec(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var N_ = function t(n) {
        function e(t) { return new Cc(t, n) }
        return e.tension = function(n) { return t(+n) }, e
    }(0);
    zc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Ec(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var k_ = function t(n) {
        function e(t) { return new zc(t, n) }
        return e.tension = function(n) { return t(+n) }, e
    }(0);
    Rc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Pc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var S_ = function t(n) {
        function e(t) { return n ? new Rc(t, n) : new Ac(t, 0) }
        return e.alpha = function(n) { return t(+n) }, e
    }(.5);
    Lc.prototype = {
        areaStart: wc,
        areaEnd: wc,
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Pc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var E_ = function t(n) {
        function e(t) { return n ? new Lc(t, n) : new Cc(t, 0) }
        return e.alpha = function(n) { return t(+n) }, e
    }(.5);
    qc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Pc(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var A_ = function t(n) {
        function e(t) { return n ? new qc(t, n) : new zc(t, 0) }
        return e.alpha = function(n) { return t(+n) }, e
    }(.5);
    Dc.prototype = { areaStart: wc, areaEnd: wc, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, n) { t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n)) } }, Yc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 },
        lineEnd: function() {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    Ic(this, this._t0, Fc(this, this._t0))
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, Ic(this, Fc(this, e = Oc(this, t, n)), e);
                        break;
                    default:
                        Ic(this, this._t0, e = Oc(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, (Bc.prototype = Object.create(Yc.prototype)).point = function(t, n) { Yc.prototype.point.call(this, n, t) }, Hc.prototype = { moveTo: function(t, n) { this._context.moveTo(n, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, n) { this._context.lineTo(n, t) }, bezierCurveTo: function(t, n, e, r, i, o) { this._context.bezierCurveTo(n, t, r, e, o, i) } }, jc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x = [], this._y = [] },
        lineEnd: function() {
            var t = this._x,
                n = this._y,
                e = t.length;
            if (e)
                if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                else
                    for (var r = Xc(t), i = Xc(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        },
        point: function(t, n) { this._x.push(+t), this._y.push(+n) }
    }, Vc.prototype = {
        areaStart: function() { this._line = 0 },
        areaEnd: function() { this._line = NaN },
        lineStart: function() { this._x = this._y = NaN, this._point = 0 },
        lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                    else {
                        var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                    }
            }
            this._x = t, this._y = n
        }
    }, ns.prototype = {
        constructor: ns,
        insert: function(t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = os(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (rs(this, e), e = (t = e).U), e.C = !1, r.C = !0, is(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (is(this, e), e = (t = e).U), e.C = !1, r.C = !0, rs(this, r)), e = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var n, e, r, i = t.U,
                o = t.L,
                u = t.R;
            if (e = o ? u ? os(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r)
                if (t && t.C) t.C = !1;
                else {
                    do { if (t === this._) break; if (t === i.L) { if ((n = i.R).C && (n.C = !1, i.C = !0, rs(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) { n.R && n.R.C || (n.L.C = !1, n.C = !0, is(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, rs(this, i), t = this._; break } } else if ((n = i.L).C && (n.C = !1, i.C = !0, is(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) { n.L && n.L.C || (n.R.C = !1, n.C = !0, rs(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, is(this, i), t = this._; break } n.C = !0, t = i, i = i.U } while (!t.C);
                    t && (t.C = !1)
                }
        }
    };
    var C_, z_, P_, R_, L_, q_ = [],
        D_ = [],
        U_ = 1e-6,
        O_ = 1e-12;
    Ms.prototype = {
        constructor: Ms,
        polygons: function() { var t = this.edges; return this.cells.map(function(n) { var e = n.halfedges.map(function(e) { return hs(n, t[e]) }); return e.data = n.site.data, e }) },
        triangles: function() {
            var t = [],
                n = this.edges;
            return this.cells.forEach(function(e, r) {
                if (o = (i = e.halfedges).length)
                    for (var i, o, u, a = e.site, c = -1, s = n[i[o - 1]], f = s.left === a ? s.right : s.left; ++c < o;) u = f, f = (s = n[i[c]]).left === a ? s.right : s.left, u && f && r < u.index && r < f.index && bs(a, u, f) < 0 && t.push([a.data, u.data, f.data])
            }), t
        },
        links: function() { return this.edges.filter(function(t) { return t.right }).map(function(t) { return { source: t.left.data, target: t.right.data } }) },
        find: function(t, n, e) {
            for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);)
                if (++u >= a) return null;
            var c = t - i.site[0],
                s = n - i.site[1],
                f = c * c + s * s;
            do {
                i = o.cells[r = u], u = null, i.halfedges.forEach(function(e) {
                    var r = o.edges[e],
                        a = r.left;
                    if (a !== i.site && a || (a = r.right)) {
                        var c = t - a[0],
                            s = n - a[1],
                            l = c * c + s * s;
                        l < f && (f = l, u = a.index)
                    }
                })
            } while (null !== u);
            return o._found = r, null == e || f <= e * e ? i.site : null
        }
    }, Ns.prototype = { constructor: Ns, scale: function(t) { return 1 === t ? this : new Ns(this.k * t, this.x, this.y) }, translate: function(t, n) { return 0 === t & 0 === n ? this : new Ns(this.k, this.x + this.k * t, this.y + this.k * n) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } };
    var F_ = new Ns(1, 0, 0);
    ks.prototype = Ns.prototype, t.version = "4.12.2", t.bisect = Ds, t.bisectRight = Ds, t.bisectLeft = Us, t.ascending = n, t.bisector = e, t.cross = function(t, n, e) {
        var i, o, u, a, c = t.length,
            s = n.length,
            f = new Array(c * s);
        for (null == e && (e = r), i = u = 0; i < c; ++i)
            for (a = t[i], o = 0; o < s; ++o, ++u) f[u] = e(a, n[o]);
        return f
    }, t.descending = function(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }, t.deviation = u, t.extent = a, t.histogram = function() {
        function t(t) {
            var i, o, u = t.length,
                a = new Array(u);
            for (i = 0; i < u; ++i) a[i] = n(t[i], i, t);
            var c = e(a),
                s = c[0],
                l = c[1],
                h = r(a, s, l);
            Array.isArray(h) || (h = p(s, l, h), h = f(Math.ceil(s / h) * h, Math.floor(l / h) * h, h));
            for (var d = h.length; h[0] <= s;) h.shift(), --d;
            for (; h[d - 1] > l;) h.pop(), --d;
            var v, g = new Array(d + 1);
            for (i = 0; i <= d; ++i)(v = g[i] = []).x0 = i > 0 ? h[i - 1] : s, v.x1 = i < d ? h[i] : l;
            for (i = 0; i < u; ++i) s <= (o = a[i]) && o <= l && g[Ds(h, o, 0, d)].push(t[i]);
            return g
        }
        var n = s,
            e = a,
            r = d;
        return t.value = function(e) { return arguments.length ? (n = "function" == typeof e ? e : c(e), t) : n }, t.domain = function(n) { return arguments.length ? (e = "function" == typeof n ? n : c([n[0], n[1]]), t) : e }, t.thresholds = function(n) { return arguments.length ? (r = "function" == typeof n ? n : Array.isArray(n) ? c(Fs.call(n)) : c(n), t) : r }, t
    }, t.thresholdFreedmanDiaconis = function(t, e, r) { return t = Is.call(t, i).sort(n), Math.ceil((r - e) / (2 * (v(t, .75) - v(t, .25)) * Math.pow(t.length, -1 / 3))) }, t.thresholdScott = function(t, n, e) { return Math.ceil((e - n) / (3.5 * u(t) * Math.pow(t.length, -1 / 3))) }, t.thresholdSturges = d, t.max = function(t, n) {
        var e, r, i = t.length,
            o = -1;
        if (null == n) {
            for (; ++o < i;)
                if (null != (e = t[o]) && e >= e)
                    for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
        } else
            for (; ++o < i;)
                if (null != (e = n(t[o], o, t)) && e >= e)
                    for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
        return r
    }, t.mean = function(t, n) {
        var e, r = t.length,
            o = r,
            u = -1,
            a = 0;
        if (null == n)
            for (; ++u < r;) isNaN(e = i(t[u])) ? --o : a += e;
        else
            for (; ++u < r;) isNaN(e = i(n(t[u], u, t))) ? --o : a += e;
        if (o) return a / o
    }, t.median = function(t, e) {
        var r, o = t.length,
            u = -1,
            a = [];
        if (null == e)
            for (; ++u < o;) isNaN(r = i(t[u])) || a.push(r);
        else
            for (; ++u < o;) isNaN(r = i(e(t[u], u, t))) || a.push(r);
        return v(a.sort(n), .5)
    }, t.merge = g, t.min = _, t.pairs = function(t, n) { null == n && (n = r); for (var e = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i); e < i;) u[e] = n(o, o = t[++e]); return u }, t.permute = function(t, n) { for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]]; return r }, t.quantile = v, t.range = f, t.scan = function(t, e) {
        if (r = t.length) {
            var r, i, o = 0,
                u = 0,
                a = t[u];
            for (null == e && (e = n); ++o < r;)(e(i = t[o], a) < 0 || 0 !== e(a, a)) && (a = i, u = o);
            return 0 === e(a, a) ? u : void 0
        }
    }, t.shuffle = function(t, n, e) { for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r; return t }, t.sum = function(t, n) {
        var e, r = t.length,
            i = -1,
            o = 0;
        if (null == n)
            for (; ++i < r;)(e = +t[i]) && (o += e);
        else
            for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e);
        return o
    }, t.ticks = l, t.tickIncrement = h, t.tickStep = p, t.transpose = y, t.variance = o, t.zip = function() { return y(arguments) }, t.axisTop = function(t) { return T(Xs, t) }, t.axisRight = function(t) { return T(Vs, t) }, t.axisBottom = function(t) { return T($s, t) }, t.axisLeft = function(t) { return T(Ws, t) }, t.brush = function() { return Qn(rh) }, t.brushX = function() { return Qn(nh) }, t.brushY = function() { return Qn(eh) }, t.brushSelection = function(t) { var n = t.__brush; return n ? n.dim.output(n.selection) : null }, t.chord = function() {
        function t(t) {
            var o, u, a, c, s, l, h = t.length,
                p = [],
                d = f(h),
                v = [],
                g = [],
                _ = g.groups = new Array(h),
                y = new Array(h * h);
            for (o = 0, s = -1; ++s < h;) {
                for (u = 0, l = -1; ++l < h;) u += t[s][l];
                p.push(u), v.push(f(h)), o += u
            }
            for (e && d.sort(function(t, n) { return e(p[t], p[n]) }), r && v.forEach(function(n, e) { n.sort(function(n, i) { return r(t[e][n], t[e][i]) }) }), c = (o = dh(0, ph - n * h) / o) ? n : ph / h, u = 0, s = -1; ++s < h;) {
                for (a = u, l = -1; ++l < h;) {
                    var m = d[s],
                        x = v[m][l],
                        b = t[m][x],
                        w = u,
                        M = u += b * o;
                    y[x * h + m] = { index: m, subindex: x, startAngle: w, endAngle: M, value: b }
                }
                _[m] = { index: m, startAngle: a, endAngle: u, value: p[m] }, u += c
            }
            for (s = -1; ++s < h;)
                for (l = s - 1; ++l < h;) {
                    var T = y[l * h + s],
                        N = y[s * h + l];
                    (T.value || N.value) && g.push(T.value < N.value ? { source: N, target: T } : { source: T, target: N })
                }
            return i ? g.sort(i) : g
        }
        var n = 0,
            e = null,
            r = null,
            i = null;
        return t.padAngle = function(e) { return arguments.length ? (n = dh(0, e), t) : n }, t.sortGroups = function(n) { return arguments.length ? (e = n, t) : e }, t.sortSubgroups = function(n) { return arguments.length ? (r = n, t) : r }, t.sortChords = function(n) { return arguments.length ? (null == n ? i = null : (i = function(t) { return function(n, e) { return t(n.source.value + n.target.value, e.source.value + e.target.value) } }(n))._ = n, t) : i && i._ }, t
    }, t.ribbon = function() {
        function t() {
            var t, a = vh.call(arguments),
                c = n.apply(this, a),
                s = e.apply(this, a),
                f = +r.apply(this, (a[0] = c, a)),
                l = i.apply(this, a) - hh,
                h = o.apply(this, a) - hh,
                p = f * sh(l),
                d = f * fh(l),
                v = +r.apply(this, (a[0] = s, a)),
                g = i.apply(this, a) - hh,
                _ = o.apply(this, a) - hh;
            if (u || (u = t = te()), u.moveTo(p, d), u.arc(0, 0, f, l, h), l === g && h === _ || (u.quadraticCurveTo(0, 0, v * sh(g), v * fh(g)), u.arc(0, 0, v, g, _)), u.quadraticCurveTo(0, 0, p, d), u.closePath(), t) return u = null, t + "" || null
        }
        var n = ne,
            e = ee,
            r = re,
            i = ie,
            o = oe,
            u = null;
        return t.radius = function(n) { return arguments.length ? (r = "function" == typeof n ? n : Jn(+n), t) : r }, t.startAngle = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Jn(+n), t) : i }, t.endAngle = function(n) { return arguments.length ? (o = "function" == typeof n ? n : Jn(+n), t) : o }, t.source = function(e) { return arguments.length ? (n = e, t) : n }, t.target = function(n) { return arguments.length ? (e = n, t) : e }, t.context = function(n) { return arguments.length ? (u = null == n ? null : n, t) : u }, t
    }, t.nest = function() {
        function t(n, i, u, a) { if (i >= o.length) return null != e && n.sort(e), null != r ? r(n) : n; for (var c, s, f, l = -1, h = n.length, p = o[i++], d = ae(), v = u(); ++l < h;)(f = d.get(c = p(s = n[l]) + "")) ? f.push(s) : d.set(c, [s]); return d.each(function(n, e) { a(v, e, t(n, i, u, a)) }), v }

        function n(t, e) { if (++e > o.length) return t; var i, a = u[e - 1]; return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function(t, r) { i.push({ key: r, values: n(t, e) }) })), null != a ? i.sort(function(t, n) { return a(t.key, n.key) }) : i }
        var e, r, i, o = [],
            u = [];
        return i = { object: function(n) { return t(n, 0, ce, se) }, map: function(n) { return t(n, 0, fe, le) }, entries: function(e) { return n(t(e, 0, fe, le), 0) }, key: function(t) { return o.push(t), i }, sortKeys: function(t) { return u[o.length - 1] = t, i }, sortValues: function(t) { return e = t, i }, rollup: function(t) { return r = t, i } }
    }, t.set = pe, t.map = ae, t.keys = function(t) { var n = []; for (var e in t) n.push(e); return n }, t.values = function(t) { var n = []; for (var e in t) n.push(t[e]); return n }, t.entries = function(t) { var n = []; for (var e in t) n.push({ key: e, value: t[e] }); return n }, t.color = kt, t.rgb = Ct, t.hsl = Rt, t.lab = Ut, t.hcl = Ht, t.cubehelix = Xt, t.dispatch = N, t.drag = function() {
        function n(t) { t.on("mousedown.drag", e).filter(g).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function e() {
            if (!h && p.apply(this, arguments)) {
                var n = c("mouse", d.apply(this, arguments), F, this, arguments);
                n && (lt(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), vt(t.event.view), pt(), l = !1, s = t.event.clientX, f = t.event.clientY, n("start"))
            }
        }

        function r() {
            if (dt(), !l) {
                var n = t.event.clientX - s,
                    e = t.event.clientY - f;
                l = n * n + e * e > x
            }
            _.mouse("drag")
        }

        function i() { lt(t.event.view).on("mousemove.drag mouseup.drag", null), gt(t.event.view, l), dt(), _.mouse("end") }

        function o() {
            if (p.apply(this, arguments)) {
                var n, e, r = t.event.changedTouches,
                    i = d.apply(this, arguments),
                    o = r.length;
                for (n = 0; n < o; ++n)(e = c(r[n].identifier, i, ht, this, arguments)) && (pt(), e("start"))
            }
        }

        function u() {
            var n, e, r = t.event.changedTouches,
                i = r.length;
            for (n = 0; n < i; ++n)(e = _[r[n].identifier]) && (dt(), e("drag"))
        }

        function a() {
            var n, e, r = t.event.changedTouches,
                i = r.length;
            for (h && clearTimeout(h), h = setTimeout(function() { h = null }, 500), n = 0; n < i; ++n)(e = _[r[n].identifier]) && (pt(), e("end"))
        }

        function c(e, r, i, o, u) {
            var a, c, s, f = i(r, e),
                l = y.copy();
            if (D(new yt(n, "beforestart", a, e, m, f[0], f[1], 0, 0, l), function() { return null != (t.event.subject = a = v.apply(o, u)) && (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0) })) return function t(h) {
                var p, d = f;
                switch (h) {
                    case "start":
                        _[e] = t, p = m++;
                        break;
                    case "end":
                        delete _[e], --m;
                    case "drag":
                        f = i(r, e), p = m
                }
                D(new yt(n, h, a, e, p, f[0] + c, f[1] + s, f[0] - d[0], f[1] - d[1], l), l.apply, l, [h, o, u])
            }
        }
        var s, f, l, h, p = mt,
            d = xt,
            v = bt,
            g = wt,
            _ = {},
            y = N("start", "drag", "end"),
            m = 0,
            x = 0;
        return n.filter = function(t) { return arguments.length ? (p = "function" == typeof t ? t : _t(!!t), n) : p }, n.container = function(t) { return arguments.length ? (d = "function" == typeof t ? t : _t(t), n) : d }, n.subject = function(t) { return arguments.length ? (v = "function" == typeof t ? t : _t(t), n) : v }, n.touchable = function(t) { return arguments.length ? (g = "function" == typeof t ? t : _t(!!t), n) : g }, n.on = function() { var t = y.on.apply(y, arguments); return t === y ? n : t }, n.clickDistance = function(t) { return arguments.length ? (x = (t = +t) * t, n) : Math.sqrt(x) }, n
    }, t.dragDisable = vt, t.dragEnable = gt, t.dsvFormat = ve, t.csvParse = kh, t.csvParseRows = Sh, t.csvFormat = Eh, t.csvFormatRows = Ah, t.tsvParse = zh, t.tsvParseRows = Ph, t.tsvFormat = Rh, t.tsvFormatRows = Lh, t.easeLinear = function(t) { return +t }, t.easeQuad = Dn, t.easeQuadIn = function(t) { return t * t }, t.easeQuadOut = function(t) { return t * (2 - t) }, t.easeQuadInOut = Dn, t.easeCubic = Un, t.easeCubicIn = function(t) { return t * t * t }, t.easeCubicOut = function(t) { return --t * t * t + 1 }, t.easeCubicInOut = Un, t.easePoly = Al, t.easePolyIn = Sl, t.easePolyOut = El, t.easePolyInOut = Al, t.easeSin = On, t.easeSinIn = function(t) { return 1 - Math.cos(t * zl) }, t.easeSinOut = function(t) { return Math.sin(t * zl) }, t.easeSinInOut = On, t.easeExp = Fn, t.easeExpIn = function(t) { return Math.pow(2, 10 * t - 10) }, t.easeExpOut = function(t) { return 1 - Math.pow(2, -10 * t) }, t.easeExpInOut = Fn, t.easeCircle = In, t.easeCircleIn = function(t) { return 1 - Math.sqrt(1 - t * t) }, t.easeCircleOut = function(t) { return Math.sqrt(1 - --t * t) }, t.easeCircleInOut = In, t.easeBounce = Yn, t.easeBounceIn = function(t) { return 1 - Yn(1 - t) }, t.easeBounceOut = Yn, t.easeBounceInOut = function(t) { return ((t *= 2) <= 1 ? 1 - Yn(1 - t) : Yn(t - 1) + 1) / 2 }, t.easeBack = jl, t.easeBackIn = Bl, t.easeBackOut = Hl, t.easeBackInOut = jl, t.easeElastic = $l, t.easeElasticIn = Vl, t.easeElasticOut = $l, t.easeElasticInOut = Wl, t.forceCenter = function(t, n) {
        function e() {
            var e, i, o = r.length,
                u = 0,
                a = 0;
            for (e = 0; e < o; ++e) u += (i = r[e]).x, a += i.y;
            for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e)(i = r[e]).x -= u, i.y -= a
        }
        var r;
        return null == t && (t = 0), null == n && (n = 0), e.initialize = function(t) { r = t }, e.x = function(n) { return arguments.length ? (t = +n, e) : t }, e.y = function(t) { return arguments.length ? (n = +t, e) : n }, e
    }, t.forceCollide = function(t) {
        function n() {
            for (var t, n, r, c, s, f, l, h = i.length, p = 0; p < a; ++p)
                for (n = we(i, Ne, ke).visitAfter(e), t = 0; t < h; ++t) r = i[t], f = o[r.index], l = f * f, c = r.x + r.vx, s = r.y + r.vy, n.visit(function(t, n, e, i, o) {
                    var a = t.data,
                        h = t.r,
                        p = f + h;
                    if (!a) return n > c + p || i < c - p || e > s + p || o < s - p;
                    if (a.index > r.index) {
                        var d = c - a.x - a.vx,
                            v = s - a.y - a.vy,
                            g = d * d + v * v;
                        g < p * p && (0 === d && (d = _e(), g += d * d), 0 === v && (v = _e(), g += v * v), g = (p - (g = Math.sqrt(g))) / g * u, r.vx += (d *= g) * (p = (h *= h) / (l + h)), r.vy += (v *= g) * p, a.vx -= d * (p = 1 - p), a.vy -= v * p)
                    }
                })
        }

        function e(t) { if (t.data) return t.r = o[t.data.index]; for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r) }

        function r() { if (i) { var n, e, r = i.length; for (o = new Array(r), n = 0; n < r; ++n) e = i[n], o[e.index] = +t(e, n, i) } }
        var i, o, u = 1,
            a = 1;
        return "function" != typeof t && (t = ge(null == t ? 1 : +t)), n.initialize = function(t) { i = t, r() }, n.iterations = function(t) { return arguments.length ? (a = +t, n) : a }, n.strength = function(t) { return arguments.length ? (u = +t, n) : u }, n.radius = function(e) { return arguments.length ? (t = "function" == typeof e ? e : ge(+e), r(), n) : t }, n
    }, t.forceLink = function(t) {
        function n(n) {
            for (var e = 0, r = t.length; e < p; ++e)
                for (var i, a, c, f, l, h, d, v = 0; v < r; ++v) a = (i = t[v]).source, f = (c = i.target).x + c.vx - a.x - a.vx || _e(), l = c.y + c.vy - a.y - a.vy || _e(), f *= h = ((h = Math.sqrt(f * f + l * l)) - u[v]) / h * n * o[v], l *= h, c.vx -= f * (d = s[v]), c.vy -= l * d, a.vx += f * (d = 1 - d), a.vy += l * d
        }

        function e() {
            if (a) {
                var n, e, l = a.length,
                    h = t.length,
                    p = ae(a, f);
                for (n = 0, c = new Array(l); n < h; ++n)(e = t[n]).index = n, "object" != typeof e.source && (e.source = Ee(p, e.source)), "object" != typeof e.target && (e.target = Ee(p, e.target)), c[e.source.index] = (c[e.source.index] || 0) + 1, c[e.target.index] = (c[e.target.index] || 0) + 1;
                for (n = 0, s = new Array(h); n < h; ++n) e = t[n], s[n] = c[e.source.index] / (c[e.source.index] + c[e.target.index]);
                o = new Array(h), r(), u = new Array(h), i()
            }
        }

        function r() {
            if (a)
                for (var n = 0, e = t.length; n < e; ++n) o[n] = +l(t[n], n, t)
        }

        function i() {
            if (a)
                for (var n = 0, e = t.length; n < e; ++n) u[n] = +h(t[n], n, t)
        }
        var o, u, a, c, s, f = Se,
            l = function(t) { return 1 / Math.min(c[t.source.index], c[t.target.index]) },
            h = ge(30),
            p = 1;
        return null == t && (t = []), n.initialize = function(t) { a = t, e() }, n.links = function(r) { return arguments.length ? (t = r, e(), n) : t }, n.id = function(t) { return arguments.length ? (f = t, n) : f }, n.iterations = function(t) { return arguments.length ? (p = +t, n) : p }, n.strength = function(t) { return arguments.length ? (l = "function" == typeof t ? t : ge(+t), r(), n) : l }, n.distance = function(t) { return arguments.length ? (h = "function" == typeof t ? t : ge(+t), i(), n) : h }, n
    }, t.forceManyBody = function() {
        function t(t) {
            var n, a = i.length,
                c = we(i, Ae, Ce).visitAfter(e);
            for (u = t, n = 0; n < a; ++n) o = i[n], c.visit(r)
        }

        function n() { if (i) { var t, n, e = i.length; for (a = new Array(e), t = 0; t < e; ++t) n = i[t], a[n.index] = +c(n, t, i) } }

        function e(t) {
            var n, e, r, i, o, u = 0,
                c = 0;
            if (t.length) {
                for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, i += e * n.y);
                t.x = r / c, t.y = i / c
            } else {
                (n = t).x = n.data.x, n.y = n.data.y;
                do { u += a[n.data.index] } while (n = n.next)
            }
            t.value = u
        }

        function r(t, n, e, r) {
            if (!t.value) return !0;
            var i = t.x - o.x,
                c = t.y - o.y,
                h = r - n,
                p = i * i + c * c;
            if (h * h / l < p) return p < f && (0 === i && (i = _e(), p += i * i), 0 === c && (c = _e(), p += c * c), p < s && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;
            if (!(t.length || p >= f)) {
                (t.data !== o || t.next) && (0 === i && (i = _e(), p += i * i), 0 === c && (c = _e(), p += c * c), p < s && (p = Math.sqrt(s * p)));
                do { t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h) } while (t = t.next)
            }
        }
        var i, o, u, a, c = ge(-30),
            s = 1,
            f = 1 / 0,
            l = .81;
        return t.initialize = function(t) { i = t, n() }, t.strength = function(e) { return arguments.length ? (c = "function" == typeof e ? e : ge(+e), n(), t) : c }, t.distanceMin = function(n) { return arguments.length ? (s = n * n, t) : Math.sqrt(s) }, t.distanceMax = function(n) { return arguments.length ? (f = n * n, t) : Math.sqrt(f) }, t.theta = function(n) { return arguments.length ? (l = n * n, t) : Math.sqrt(l) }, t
    }, t.forceRadial = function(t, n, e) {
        function r(t) {
            for (var r = 0, i = o.length; r < i; ++r) {
                var c = o[r],
                    s = c.x - n || 1e-6,
                    f = c.y - e || 1e-6,
                    l = Math.sqrt(s * s + f * f),
                    h = (a[r] - l) * u[r] * t / l;
                c.vx += s * h, c.vy += f * h
            }
        }

        function i() { if (o) { var n, e = o.length; for (u = new Array(e), a = new Array(e), n = 0; n < e; ++n) a[n] = +t(o[n], n, o), u[n] = isNaN(a[n]) ? 0 : +c(o[n], n, o) } }
        var o, u, a, c = ge(.1);
        return "function" != typeof t && (t = ge(+t)), null == n && (n = 0), null == e && (e = 0), r.initialize = function(t) { o = t, i() }, r.strength = function(t) { return arguments.length ? (c = "function" == typeof t ? t : ge(+t), i(), r) : c }, r.radius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ge(+n), i(), r) : t }, r.x = function(t) { return arguments.length ? (n = +t, r) : n }, r.y = function(t) { return arguments.length ? (e = +t, r) : e }, r
    }, t.forceSimulation = function(t) {
        function n() { e(), p.call("tick", o), u < a && (h.stop(), p.call("end", o)) }

        function e() { var n, e, r = t.length; for (u += (s - u) * c, l.each(function(t) { t(u) }), n = 0; n < r; ++n) null == (e = t[n]).fx ? e.x += e.vx *= f : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= f : (e.y = e.fy, e.vy = 0) }

        function r() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
                if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                    var i = Uh * Math.sqrt(e),
                        o = e * Oh;
                    n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
            }
        }

        function i(n) { return n.initialize && n.initialize(t), n }
        var o, u = 1,
            a = .001,
            c = 1 - Math.pow(a, 1 / 300),
            s = 0,
            f = .6,
            l = ae(),
            h = xn(n),
            p = N("tick", "end");
        return null == t && (t = []), r(), o = {
            tick: e,
            restart: function() { return h.restart(n), o },
            stop: function() { return h.stop(), o },
            nodes: function(n) { return arguments.length ? (t = n, r(), l.each(i), o) : t },
            alpha: function(t) { return arguments.length ? (u = +t, o) : u },
            alphaMin: function(t) { return arguments.length ? (a = +t, o) : a },
            alphaDecay: function(t) { return arguments.length ? (c = +t, o) : +c },
            alphaTarget: function(t) { return arguments.length ? (s = +t, o) : s },
            velocityDecay: function(t) { return arguments.length ? (f = 1 - t, o) : 1 - f },
            force: function(t, n) { return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t) },
            find: function(n, e, r) {
                var i, o, u, a, c, s = 0,
                    f = t.length;
                for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s)(u = (i = n - (a = t[s]).x) * i + (o = e - a.y) * o) < r && (c = a, r = u);
                return c
            },
            on: function(t, n) { return arguments.length > 1 ? (p.on(t, n), o) : p.on(t) }
        }
    }, t.forceX = function(t) {
        function n(t) { for (var n, e = 0, u = r.length; e < u; ++e)(n = r[e]).vx += (o[e] - n.x) * i[e] * t }

        function e() { if (r) { var n, e = r.length; for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r) } }
        var r, i, o, u = ge(.1);
        return "function" != typeof t && (t = ge(null == t ? 0 : +t)), n.initialize = function(t) { r = t, e() }, n.strength = function(t) { return arguments.length ? (u = "function" == typeof t ? t : ge(+t), e(), n) : u }, n.x = function(r) { return arguments.length ? (t = "function" == typeof r ? r : ge(+r), e(), n) : t }, n
    }, t.forceY = function(t) {
        function n(t) { for (var n, e = 0, u = r.length; e < u; ++e)(n = r[e]).vy += (o[e] - n.y) * i[e] * t }

        function e() { if (r) { var n, e = r.length; for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r) } }
        var r, i, o, u = ge(.1);
        return "function" != typeof t && (t = ge(null == t ? 0 : +t)), n.initialize = function(t) { r = t, e() }, n.strength = function(t) { return arguments.length ? (u = "function" == typeof t ? t : ge(+t), e(), n) : u }, n.y = function(r) { return arguments.length ? (t = "function" == typeof r ? r : ge(+r), e(), n) : t }, n
    }, t.formatDefaultLocale = Oe, t.formatLocale = Ue, t.formatSpecifier = Le, t.precisionFixed = Fe, t.precisionPrefix = Ie, t.precisionRound = Ye, t.geoArea = function(t) { return jp.reset(), Je(t, Xp), 2 * jp }, t.geoBounds = function(t) {
        var n, e, r, i, o, u, a;
        if (Qh = Gh = -(Wh = Zh = 1 / 0), ep = [], Je(t, $p), e = ep.length) { for (ep.sort(yr), n = 1, o = [r = ep[0]]; n < e; ++n) mr(r, (i = ep[n])[0]) || mr(r, i[1]) ? (_r(r[0], i[1]) > _r(r[0], r[1]) && (r[1] = i[1]), _r(i[0], r[1]) > _r(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i); for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = _r(r[1], i[0])) > u && (u = a, Wh = i[0], Gh = r[1]) }
        return ep = rp = null, Wh === 1 / 0 || Zh === 1 / 0 ? [
            [NaN, NaN],
            [NaN, NaN]
        ] : [
            [Wh, Zh],
            [Gh, Qh]
        ]
    }, t.geoCentroid = function(t) {
        ip = op = up = ap = cp = sp = fp = lp = hp = pp = dp = 0, Je(t, Wp);
        var n = hp,
            e = pp,
            r = dp,
            i = n * n + e * e + r * r;
        return i < wp && (n = sp, e = fp, r = lp, op < bp && (n = up, e = ap, r = cp), (i = n * n + e * e + r * r) < wp) ? [NaN, NaN] : [zp(e, n) * Sp, Ve(r / Fp(i)) * Sp]
    }, t.geoCircle = function() {
        function t() {
            var t = r.apply(this, arguments),
                a = i.apply(this, arguments) * Ep,
                c = o.apply(this, arguments) * Ep;
            return n = [], e = Rr(-t[0] * Ep, -t[1] * Ep, 0).invert, Or(u, a, c, 1), t = { type: "Polygon", coordinates: [n] }, n = e = null, t
        }
        var n, e, r = Cr([0, 0]),
            i = Cr(90),
            o = Cr(6),
            u = { point: function(t, r) { n.push(t = e(t, r)), t[0] *= Sp, t[1] *= Sp } };
        return t.center = function(n) { return arguments.length ? (r = "function" == typeof n ? n : Cr([+n[0], +n[1]]), t) : r }, t.radius = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Cr(+n), t) : i }, t.precision = function(n) { return arguments.length ? (o = "function" == typeof n ? n : Cr(+n), t) : o }, t
    }, t.geoClipAntimeridian = ad, t.geoClipCircle = Zr, t.geoClipExtent = function() {
        var t, n, e, r = 0,
            i = 0,
            o = 960,
            u = 500;
        return e = {
            stream: function(e) { return t && n === e ? t : t = Gr(r, i, o, u)(n = e) },
            extent: function(a) {
                return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [
                    [r, i],
                    [o, u]
                ]
            }
        }
    }, t.geoClipRectangle = Gr, t.geoContains = function(t, n) { return (t && dd.hasOwnProperty(t.type) ? dd[t.type] : ei)(t, n) }, t.geoDistance = ni, t.geoGraticule = fi, t.geoGraticule10 = function() { return fi()() }, t.geoInterpolate = function(t, n) {
        var e = t[0] * Ep,
            r = t[1] * Ep,
            i = n[0] * Ep,
            o = n[1] * Ep,
            u = Pp(r),
            a = Up(r),
            c = Pp(o),
            s = Up(o),
            f = u * Pp(e),
            l = u * Up(e),
            h = c * Pp(i),
            p = c * Up(i),
            d = 2 * Ve(Fp($e(o - r) + u * c * $e(i - e))),
            v = Up(d),
            g = d ? function(t) {
                var n = Up(t *= d) / v,
                    e = Up(d - t) / v,
                    r = e * f + n * h,
                    i = e * l + n * p,
                    o = e * a + n * s;
                return [zp(i, r) * Sp, zp(o, Fp(r * r + i * i)) * Sp]
            } : function() { return [e * Sp, r * Sp] };
        return g.distance = d, g
    }, t.geoLength = ti, t.geoPath = function(t, n) {
        function e(t) { return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), Je(t, r(i))), i.result() }
        var r, i, o = 4.5;
        return e.area = function(t) { return Je(t, r(yd)), yd.result() }, e.measure = function(t) { return Je(t, r(Id)), Id.result() }, e.bounds = function(t) { return Je(t, r(Md)), Md.result() }, e.centroid = function(t) { return Je(t, r(Rd)), Rd.result() }, e.projection = function(n) { return arguments.length ? (r = null == n ? (t = null, li) : (t = n).stream, e) : t }, e.context = function(t) { return arguments.length ? (i = null == t ? (n = null, new Ei) : new Ni(n = t), "function" != typeof o && i.pointRadius(o), e) : n }, e.pointRadius = function(t) { return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o }, e.projection(t).context(n)
    }, t.geoAlbers = Hi, t.geoAlbersUsa = function() {
        function t(t) {
            var n = t[0],
                e = t[1];
            return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a)
        }

        function n() { return e = r = null, t }
        var e, r, i, o, u, a, c = Hi(),
            s = Bi().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            f = Bi().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            l = { point: function(t, n) { a = [t, n] } };
        return t.invert = function(t) {
            var n = c.scale(),
                e = c.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n;
            return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t)
        }, t.stream = function(t) { return e && r === t ? e : e = function(t) { var n = t.length; return { point: function(e, r) { for (var i = -1; ++i < n;) t[i].point(e, r) }, sphere: function() { for (var e = -1; ++e < n;) t[e].sphere() }, lineStart: function() { for (var e = -1; ++e < n;) t[e].lineStart() }, lineEnd: function() { for (var e = -1; ++e < n;) t[e].lineEnd() }, polygonStart: function() { for (var e = -1; ++e < n;) t[e].polygonStart() }, polygonEnd: function() { for (var e = -1; ++e < n;) t[e].polygonEnd() } } }([c.stream(r = t), s.stream(t), f.stream(t)]) }, t.precision = function(t) { return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision() }, t.scale = function(n) { return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale() }, t.translate = function(t) {
            if (!arguments.length) return c.translate();
            var e = c.scale(),
                r = +t[0],
                a = +t[1];
            return i = c.translate(t).clipExtent([
                [r - .455 * e, a - .238 * e],
                [r + .455 * e, a + .238 * e]
            ]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([
                [r - .425 * e + bp, a + .12 * e + bp],
                [r - .214 * e - bp, a + .234 * e - bp]
            ]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([
                [r - .214 * e + bp, a + .166 * e + bp],
                [r - .115 * e - bp, a + .234 * e - bp]
            ]).stream(l), n()
        }, t.fitExtent = function(n, e) { return Ri(t, n, e) }, t.fitSize = function(n, e) { return Li(t, n, e) }, t.fitWidth = function(n, e) { return qi(t, n, e) }, t.fitHeight = function(n, e) { return Di(t, n, e) }, t.scale(1070)
    }, t.geoAzimuthalEqualArea = function() { return Oi(jd).scale(124.75).clipAngle(179.999) }, t.geoAzimuthalEqualAreaRaw = jd, t.geoAzimuthalEquidistant = function() { return Oi(Xd).scale(79.4188).clipAngle(179.999) }, t.geoAzimuthalEquidistantRaw = Xd, t.geoConicConformal = function() { return Ii(Zi).scale(109.5).parallels([30, 30]) }, t.geoConicConformalRaw = Zi, t.geoConicEqualArea = Bi, t.geoConicEqualAreaRaw = Yi, t.geoConicEquidistant = function() { return Ii(Qi).scale(131.154).center([0, 13.9389]) }, t.geoConicEquidistantRaw = Qi, t.geoEquirectangular = function() { return Oi(Gi).scale(152.63) }, t.geoEquirectangularRaw = Gi, t.geoGnomonic = function() { return Oi(Ji).scale(144.049).clipAngle(60) }, t.geoGnomonicRaw = Ji, t.geoIdentity = function() {
        function t() { return i = o = null, u }
        var n, e, r, i, o, u, a = 1,
            c = 0,
            s = 0,
            f = 1,
            l = 1,
            h = li,
            p = null,
            d = li;
        return u = {
            stream: function(t) { return i && o === t ? i : i = h(d(o = t)) },
            postclip: function(i) { return arguments.length ? (d = i, p = n = e = r = null, t()) : d },
            clipExtent: function(i) {
                return arguments.length ? (d = null == i ? (p = n = e = r = null, li) : Gr(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == p ? null : [
                    [p, n],
                    [e, r]
                ]
            },
            scale: function(n) { return arguments.length ? (h = Ki((a = +n) * f, a * l, c, s), t()) : a },
            translate: function(n) { return arguments.length ? (h = Ki(a * f, a * l, c = +n[0], s = +n[1]), t()) : [c, s] },
            reflectX: function(n) { return arguments.length ? (h = Ki(a * (f = n ? -1 : 1), a * l, c, s), t()) : f < 0 },
            reflectY: function(n) { return arguments.length ? (h = Ki(a * f, a * (l = n ? -1 : 1), c, s), t()) : l < 0 },
            fitExtent: function(t, n) { return Ri(u, t, n) },
            fitSize: function(t, n) { return Li(u, t, n) },
            fitWidth: function(t, n) { return qi(u, t, n) },
            fitHeight: function(t, n) { return Di(u, t, n) }
        }
    }, t.geoProjection = Oi, t.geoProjectionMutator = Fi, t.geoMercator = function() { return $i(Vi).scale(961 / kp) }, t.geoMercatorRaw = Vi, t.geoNaturalEarth1 = function() { return Oi(to).scale(175.295) }, t.geoNaturalEarth1Raw = to, t.geoOrthographic = function() { return Oi(no).scale(249.5).clipAngle(90 + bp) }, t.geoOrthographicRaw = no, t.geoStereographic = function() { return Oi(eo).scale(250).clipAngle(142) }, t.geoStereographicRaw = eo, t.geoTransverseMercator = function() {
        var t = $i(ro),
            n = t.center,
            e = t.rotate;
        return t.center = function(t) { return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]]) }, t.rotate = function(t) { return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90]) }, e([0, 0, 90]).scale(159.155)
    }, t.geoTransverseMercatorRaw = ro, t.geoRotation = Ur, t.geoStream = Je, t.geoTransform = function(t) { return { stream: Ci(t) } }, t.cluster = function() {
        function t(t) {
            var o, u = 0;
            t.eachAfter(function(t) {
                var e = t.children;
                e ? (t.x = function(t) { return t.reduce(oo, 0) / t.length }(e), t.y = function(t) { return 1 + t.reduce(uo, 0) }(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t)
            });
            var a = function(t) { for (var n; n = t.children;) t = n[0]; return t }(t),
                c = function(t) { for (var n; n = t.children;) t = n[n.length - 1]; return t }(t),
                s = a.x - n(a, c) / 2,
                f = c.x + n(c, a) / 2;
            return t.eachAfter(i ? function(n) { n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r } : function(n) { n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r })
        }
        var n = io,
            e = 1,
            r = 1,
            i = !1;
        return t.separation = function(e) { return arguments.length ? (n = e, t) : n }, t.size = function(n) { return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r] }, t.nodeSize = function(n) { return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null }, t
    }, t.hierarchy = co, t.pack = function() {
        function t(t) { return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Ao(n)).eachAfter(Co(i, .5)).eachBefore(zo(1)) : t.eachBefore(Ao(Eo)).eachAfter(Co(ko, 1)).eachAfter(Co(i, t.r / Math.min(e, r))).eachBefore(zo(Math.min(e, r) / (2 * t.r))), t }
        var n = null,
            e = 1,
            r = 1,
            i = ko;
        return t.radius = function(e) { return arguments.length ? (n = function(t) { return null == t ? null : No(t) }(e), t) : n }, t.size = function(n) { return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r] }, t.padding = function(n) { return arguments.length ? (i = "function" == typeof n ? n : So(+n), t) : i }, t
    }, t.packSiblings = function(t) { return To(t), t }, t.packEnclose = po, t.partition = function() {
        function t(t) {
            var o = t.height + 1;
            return t.x0 = t.y0 = r, t.x1 = n, t.y1 = e / o, t.eachBefore(function(t, n) {
                return function(e) {
                    e.children && Ro(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var i = e.x0,
                        o = e.y0,
                        u = e.x1 - r,
                        a = e.y1 - r;
                    u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = i, e.y0 = o, e.x1 = u, e.y1 = a
                }
            }(e, o)), i && t.eachBefore(Po), t
        }
        var n = 1,
            e = 1,
            r = 0,
            i = !1;
        return t.round = function(n) { return arguments.length ? (i = !!n, t) : i }, t.size = function(r) { return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e] }, t.padding = function(n) { return arguments.length ? (r = +n, t) : r }, t
    }, t.stratify = function() {
        function t(t) {
            var r, i, o, u, a, c, s, f = t.length,
                l = new Array(f),
                h = {};
            for (i = 0; i < f; ++i) r = t[i], a = l[i] = new ho(r), null != (c = n(r, i, t)) && (c += "") && (h[s = $d + (a.id = c)] = s in h ? Zd : a);
            for (i = 0; i < f; ++i)
                if (a = l[i], null != (c = e(t[i], i, t)) && (c += "")) {
                    if (!(u = h[$d + c])) throw new Error("missing: " + c);
                    if (u === Zd) throw new Error("ambiguous: " + c);
                    u.children ? u.children.push(a) : u.children = [a], a.parent = u
                } else {
                    if (o) throw new Error("multiple roots");
                    o = a
                } if (!o) throw new Error("no root");
            if (o.parent = Wd, o.eachBefore(function(t) { t.depth = t.parent.depth + 1, --f }).eachBefore(lo), o.parent = null, f > 0) throw new Error("cycle");
            return o
        }
        var n = Lo,
            e = qo;
        return t.id = function(e) { return arguments.length ? (n = No(e), t) : n }, t.parentId = function(n) { return arguments.length ? (e = No(n), t) : e }, t
    }, t.tree = function() {
        function t(t) {
            var c = function(t) {
                for (var n, e, r, i, o, u = new Yo(t, 0), a = [u]; n = a.pop();)
                    if (r = n._.children)
                        for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Yo(r[i], i)), e.parent = n;
                return (u.parent = new Yo(null, 0)).children = [u], u
            }(t);
            if (c.eachAfter(n), c.parent.m = -c.z, c.eachBefore(e), a) t.eachBefore(r);
            else {
                var s = t,
                    f = t,
                    l = t;
                t.eachBefore(function(t) { t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t) });
                var h = s === f ? 1 : i(s, f) / 2,
                    p = h - s.x,
                    d = o / (f.x + h + p),
                    v = u / (l.depth || 1);
                t.eachBefore(function(t) { t.x = (t.x + p) * d, t.y = t.depth * v })
            }
            return t
        }

        function n(t) {
            var n = t.children,
                e = t.parent.children,
                r = t.i ? e[t.i - 1] : null;
            if (n) {
                (function(t) { for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c) })(t);
                var o = (n[0].z + n[n.length - 1].z) / 2;
                r ? (t.z = r.z + i(t._, r._), t.m = t.z - o) : t.z = o
            } else r && (t.z = r.z + i(t._, r._));
            t.parent.A = function(t, n, e) {
                if (n) {
                    for (var r, o = t, u = t, a = n, c = o.parent.children[0], s = o.m, f = u.m, l = a.m, h = c.m; a = Oo(a), o = Uo(o), a && o;) c = Uo(c), (u = Oo(u)).a = t, (r = a.z + l - o.z - s + i(a._, o._)) > 0 && (Fo(Io(a, t, e), t, r), s += r, f += r), l += a.m, s += o.m, h += c.m, f += u.m;
                    a && !Oo(u) && (u.t = a, u.m += l - f), o && !Uo(c) && (c.t = o, c.m += s - h, e = t)
                }
                return e
            }(t, r, t.parent.A || e[0])
        }

        function e(t) { t._.x = t.z + t.parent.m, t.m += t.parent.m }

        function r(t) { t.x *= o, t.y = t.depth * u }
        var i = Do,
            o = 1,
            u = 1,
            a = null;
        return t.separation = function(n) { return arguments.length ? (i = n, t) : i }, t.size = function(n) { return arguments.length ? (a = !1, o = +n[0], u = +n[1], t) : a ? null : [o, u] }, t.nodeSize = function(n) { return arguments.length ? (a = !0, o = +n[0], u = +n[1], t) : a ? [o, u] : null }, t
    }, t.treemap = function() {
        function t(t) { return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(Po), t }

        function n(t) {
            var n = u[t.depth],
                r = t.x0 + n,
                i = t.y0 + n,
                o = t.x1 - n,
                h = t.y1 - n;
            o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
        }
        var e = Qd,
            r = !1,
            i = 1,
            o = 1,
            u = [0],
            a = ko,
            c = ko,
            s = ko,
            f = ko,
            l = ko;
        return t.round = function(n) { return arguments.length ? (r = !!n, t) : r }, t.size = function(n) { return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o] }, t.tile = function(n) { return arguments.length ? (e = No(n), t) : e }, t.padding = function(n) { return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner() }, t.paddingInner = function(n) { return arguments.length ? (a = "function" == typeof n ? n : So(+n), t) : a }, t.paddingOuter = function(n) { return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop() }, t.paddingTop = function(n) { return arguments.length ? (c = "function" == typeof n ? n : So(+n), t) : c }, t.paddingRight = function(n) { return arguments.length ? (s = "function" == typeof n ? n : So(+n), t) : s }, t.paddingBottom = function(n) { return arguments.length ? (f = "function" == typeof n ? n : So(+n), t) : f }, t.paddingLeft = function(n) { return arguments.length ? (l = "function" == typeof n ? n : So(+n), t) : l }, t
    }, t.treemapBinary = function(t, n, e, r, i) {
        function o(t, n, e, r, i, u, a) {
            if (t >= n - 1) { var s = c[t]; return s.x0 = r, s.y0 = i, s.x1 = u, void(s.y1 = a) }
            for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
                var v = p + d >>> 1;
                f[v] < h ? p = v + 1 : d = v
            }
            h - f[p - 1] < f[p] - h && t + 1 < p && --p;
            var g = f[p] - l,
                _ = e - g;
            if (u - r > a - i) {
                var y = (r * _ + u * g) / e;
                o(t, p, g, r, i, y, a), o(p, n, _, y, i, u, a)
            } else {
                var m = (i * _ + a * g) / e;
                o(t, p, g, r, i, u, m), o(p, n, _, r, m, u, a)
            }
        }
        var u, a, c = t.children,
            s = c.length,
            f = new Array(s + 1);
        for (f[0] = a = u = 0; u < s; ++u) f[u + 1] = a += c[u].value;
        o(0, s, t.value, n, e, r, i)
    }, t.treemapDice = Ro, t.treemapSlice = Bo, t.treemapSliceDice = function(t, n, e, r, i) {
        (1 & t.depth ? Bo : Ro)(t, n, e, r, i)
    }, t.treemapSquarify = Qd, t.treemapResquarify = Jd, t.interpolate = cn, t.interpolateArray = en, t.interpolateBasis = Wt, t.interpolateBasisClosed = Zt, t.interpolateDate = rn, t.interpolateNumber = on, t.interpolateObject = un, t.interpolateRound = sn, t.interpolateString = an, t.interpolateTransformCss = Wf, t.interpolateTransformSvg = Zf, t.interpolateZoom = pn, t.interpolateRgb = Yf, t.interpolateRgbBasis = Bf, t.interpolateRgbBasisClosed = Hf, t.interpolateHsl = tl, t.interpolateHslLong = nl, t.interpolateLab = function(t, n) {
        var e = tn((t = Ut(t)).l, (n = Ut(n)).l),
            r = tn(t.a, n.a),
            i = tn(t.b, n.b),
            o = tn(t.opacity, n.opacity);
        return function(n) { return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "" }
    }, t.interpolateHcl = el, t.interpolateHclLong = rl, t.interpolateCubehelix = il, t.interpolateCubehelixLong = ol, t.quantize = function(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1)); return e }, t.path = te, t.polygonArea = function(t) { for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1]; return o / 2 }, t.polygonCentroid = function(t) { for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e; return c *= 3, [o / c, u / c] }, t.polygonHull = function(t) {
        if ((e = t.length) < 3) return null;
        var n, e, r = new Array(e),
            i = new Array(e);
        for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(Xo), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
        var o = Vo(r),
            u = Vo(i),
            a = u[0] === o[0],
            c = u[u.length - 1] === o[o.length - 1],
            s = [];
        for (n = o.length - 1; n >= 0; --n) s.push(t[r[o[n]][2]]);
        for (n = +a; n < u.length - c; ++n) s.push(t[r[u[n]][2]]);
        return s
    }, t.polygonContains = function(t, n) { for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r; return f }, t.polygonLength = function(t) { for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, n -= u = (o = t[r])[0], e -= a = o[1], c += Math.sqrt(n * n + e * e); return c }, t.quadtree = we, t.queue = Qo, t.randomUniform = nv, t.randomNormal = ev, t.randomLogNormal = rv, t.randomBates = ov, t.randomIrwinHall = iv, t.randomExponential = uv, t.request = Ko, t.html = av, t.json = cv, t.text = sv, t.xml = fv, t.csv = lv, t.tsv = hv, t.scaleBand = ru, t.scalePoint = function() { return iu(ru().paddingInner(1)) }, t.scaleIdentity = du, t.scaleLinear = pu, t.scaleLog = wu, t.scaleOrdinal = eu, t.scaleImplicit = gv, t.scalePow = Tu, t.scaleSqrt = function() { return Tu().exponent(.5) }, t.scaleQuantile = Nu, t.scaleQuantize = ku, t.scaleThreshold = Su, t.scaleTime = function() { return ja(Wv, Vv, Pv, Cv, Ev, kv, Tv, xv, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]) }, t.scaleUtc = function() { return ja(yg, gg, eg, tg, Jv, Gv, Tv, xv, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]) }, t.schemeCategory10 = qg, t.schemeCategory20b = Dg, t.schemeCategory20c = Ug, t.schemeCategory20 = Og, t.interpolateCubehelixDefault = Fg, t.interpolateRainbow = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return Bg.h = 360 * t - 100, Bg.s = 1.5 - 1.5 * n, Bg.l = .8 - .9 * n, Bg + ""
    }, t.interpolateWarm = Ig, t.interpolateCool = Yg, t.interpolateViridis = Hg, t.interpolateMagma = jg, t.interpolateInferno = Xg, t.interpolatePlasma = Vg, t.scaleSequential = $a, t.creator = A, t.local = C, t.matcher = rf, t.mouse = F, t.namespace = E, t.namespaces = Js, t.clientPoint = O, t.select = lt, t.selectAll = function(t) { return "string" == typeof t ? new st([document.querySelectorAll(t)], [document.documentElement]) : new st([null == t ? [] : t], af) }, t.selection = ft, t.selector = Y, t.selectorAll = H, t.style = G, t.touch = ht, t.touches = function(t, n) { null == n && (n = U().touches); for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = O(t, n[e]); return i }, t.window = Z, t.customEvent = D, t.arc = function() {
        function t() {
            var t, s, f = +n.apply(this, arguments),
                l = +e.apply(this, arguments),
                h = o.apply(this, arguments) - e_,
                p = u.apply(this, arguments) - e_,
                d = $g(p - h),
                v = p > h;
            if (c || (c = t = te()), l < f && (s = l, l = f, f = s), l > t_)
                if (d > r_ - t_) c.moveTo(l * Zg(h), l * Jg(h)), c.arc(0, 0, l, h, p, !v), f > t_ && (c.moveTo(f * Zg(p), f * Jg(p)), c.arc(0, 0, f, p, h, v));
                else {
                    var g, _, y = h,
                        m = p,
                        x = h,
                        b = p,
                        w = d,
                        M = d,
                        T = a.apply(this, arguments) / 2,
                        N = T > t_ && (i ? +i.apply(this, arguments) : Kg(f * f + l * l)),
                        k = Qg($g(l - f) / 2, +r.apply(this, arguments)),
                        S = k,
                        E = k;
                    if (N > t_) {
                        var A = Za(N / f * Jg(T)),
                            C = Za(N / l * Jg(T));
                        (w -= 2 * A) > t_ ? (A *= v ? 1 : -1, x += A, b -= A) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > t_ ? (C *= v ? 1 : -1, y += C, m -= C) : (M = 0, y = m = (h + p) / 2)
                    }
                    var z = l * Zg(y),
                        P = l * Jg(y),
                        R = f * Zg(b),
                        L = f * Jg(b);
                    if (k > t_) {
                        var q = l * Zg(m),
                            D = l * Jg(m),
                            U = f * Zg(x),
                            O = f * Jg(x);
                        if (d < n_) {
                            var F = w > t_ ? function(t, n, e, r, i, o, u, a) {
                                    var c = e - t,
                                        s = r - n,
                                        f = u - i,
                                        l = a - o,
                                        h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
                                    return [t + h * c, n + h * s]
                                }(z, P, U, O, q, D, R, L) : [R, L],
                                I = z - F[0],
                                Y = P - F[1],
                                B = q - F[0],
                                H = D - F[1],
                                j = 1 / Jg(function(t) { return t > 1 ? 0 : t < -1 ? n_ : Math.acos(t) }((I * B + Y * H) / (Kg(I * I + Y * Y) * Kg(B * B + H * H))) / 2),
                                X = Kg(F[0] * F[0] + F[1] * F[1]);
                            S = Qg(k, (f - X) / (j - 1)), E = Qg(k, (l - X) / (j + 1))
                        }
                    }
                    M > t_ ? E > t_ ? (g = nc(U, O, z, P, l, E, v), _ = nc(q, D, R, L, l, E, v), c.moveTo(g.cx + g.x01, g.cy + g.y01), E < k ? c.arc(g.cx, g.cy, E, Wg(g.y01, g.x01), Wg(_.y01, _.x01), !v) : (c.arc(g.cx, g.cy, E, Wg(g.y01, g.x01), Wg(g.y11, g.x11), !v), c.arc(0, 0, l, Wg(g.cy + g.y11, g.cx + g.x11), Wg(_.cy + _.y11, _.cx + _.x11), !v), c.arc(_.cx, _.cy, E, Wg(_.y11, _.x11), Wg(_.y01, _.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, y, m, !v)) : c.moveTo(z, P), f > t_ && w > t_ ? S > t_ ? (g = nc(R, L, q, D, f, -S, v), _ = nc(z, P, U, O, f, -S, v), c.lineTo(g.cx + g.x01, g.cy + g.y01), S < k ? c.arc(g.cx, g.cy, S, Wg(g.y01, g.x01), Wg(_.y01, _.x01), !v) : (c.arc(g.cx, g.cy, S, Wg(g.y01, g.x01), Wg(g.y11, g.x11), !v), c.arc(0, 0, f, Wg(g.cy + g.y11, g.cx + g.x11), Wg(_.cy + _.y11, _.cx + _.x11), v), c.arc(_.cx, _.cy, S, Wg(_.y11, _.x11), Wg(_.y01, _.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(R, L)
                }
            else c.moveTo(0, 0);
            if (c.closePath(), t) return c = null, t + "" || null
        }
        var n = Ga,
            e = Qa,
            r = Wa(0),
            i = null,
            o = Ja,
            u = Ka,
            a = tc,
            c = null;
        return t.centroid = function() {
            var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - n_ / 2;
            return [Zg(r) * t, Jg(r) * t]
        }, t.innerRadius = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Wa(+e), t) : n }, t.outerRadius = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Wa(+n), t) : e }, t.cornerRadius = function(n) { return arguments.length ? (r = "function" == typeof n ? n : Wa(+n), t) : r }, t.padRadius = function(n) { return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : Wa(+n), t) : i }, t.startAngle = function(n) { return arguments.length ? (o = "function" == typeof n ? n : Wa(+n), t) : o }, t.endAngle = function(n) { return arguments.length ? (u = "function" == typeof n ? n : Wa(+n), t) : u }, t.padAngle = function(n) { return arguments.length ? (a = "function" == typeof n ? n : Wa(+n), t) : a }, t.context = function(n) { return arguments.length ? (c = null == n ? null : n, t) : c }, t
    }, t.area = ac, t.line = uc, t.pie = function() {
        function t(t) {
            var a, c, s, f, l, h = t.length,
                p = 0,
                d = new Array(h),
                v = new Array(h),
                g = +i.apply(this, arguments),
                _ = Math.min(r_, Math.max(-r_, o.apply(this, arguments) - g)),
                y = Math.min(Math.abs(_) / h, u.apply(this, arguments)),
                m = y * (_ < 0 ? -1 : 1);
            for (a = 0; a < h; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
            for (null != e ? d.sort(function(t, n) { return e(v[t], v[n]) }) : null != r && d.sort(function(n, e) { return r(t[n], t[e]) }), a = 0, s = p ? (_ - h * m) / p : 0; a < h; ++a, g = f) c = d[a], f = g + ((l = v[c]) > 0 ? l * s : 0) + m, v[c] = { data: t[c], index: a, value: l, startAngle: g, endAngle: f, padAngle: y };
            return v
        }
        var n = sc,
            e = cc,
            r = null,
            i = Wa(0),
            o = Wa(r_),
            u = Wa(0);
        return t.value = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Wa(+e), t) : n }, t.sortValues = function(n) { return arguments.length ? (e = n, r = null, t) : e }, t.sort = function(n) { return arguments.length ? (r = n, e = null, t) : r }, t.startAngle = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Wa(+n), t) : i }, t.endAngle = function(n) { return arguments.length ? (o = "function" == typeof n ? n : Wa(+n), t) : o }, t.padAngle = function(n) { return arguments.length ? (u = "function" == typeof n ? n : Wa(+n), t) : u }, t
    }, t.areaRadial = dc, t.radialArea = dc, t.lineRadial = pc, t.radialLine = pc, t.pointRadial = vc, t.linkHorizontal = function() { return yc(mc) }, t.linkVertical = function() { return yc(xc) }, t.linkRadial = function() { var t = yc(bc); return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t }, t.symbol = function() {
        function t() { var t; if (r || (r = t = te()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null }
        var n = Wa(u_),
            e = Wa(64),
            r = null;
        return t.type = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Wa(e), t) : n }, t.size = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Wa(+n), t) : e }, t.context = function(n) { return arguments.length ? (r = null == n ? null : n, t) : r }, t
    }, t.symbols = w_, t.symbolCircle = u_, t.symbolCross = a_, t.symbolDiamond = f_, t.symbolSquare = v_, t.symbolStar = d_, t.symbolTriangle = __, t.symbolWye = b_, t.curveBasisClosed = function(t) { return new Nc(t) }, t.curveBasisOpen = function(t) { return new kc(t) }, t.curveBasis = function(t) { return new Tc(t) }, t.curveBundle = M_, t.curveCardinalClosed = N_, t.curveCardinalOpen = k_, t.curveCardinal = T_, t.curveCatmullRomClosed = E_, t.curveCatmullRomOpen = A_, t.curveCatmullRom = S_, t.curveLinearClosed = function(t) { return new Dc(t) }, t.curveLinear = rc, t.curveMonotoneX = function(t) { return new Yc(t) }, t.curveMonotoneY = function(t) { return new Bc(t) }, t.curveNatural = function(t) { return new jc(t) }, t.curveStep = function(t) { return new Vc(t, .5) }, t.curveStepAfter = function(t) { return new Vc(t, 1) }, t.curveStepBefore = function(t) { return new Vc(t, 0) }, t.stack = function() {
        function t(t) {
            var o, u, a = n.apply(this, arguments),
                c = t.length,
                s = a.length,
                f = new Array(s);
            for (o = 0; o < s; ++o) {
                for (var l, h = a[o], p = f[o] = new Array(c), d = 0; d < c; ++d) p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
                p.key = h
            }
            for (o = 0, u = e(f); o < s; ++o) f[u[o]].index = o;
            return r(f, u), f
        }
        var n = Wa([]),
            e = Wc,
            r = $c,
            i = Zc;
        return t.keys = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Wa(o_.call(e)), t) : n }, t.value = function(n) { return arguments.length ? (i = "function" == typeof n ? n : Wa(+n), t) : i }, t.order = function(n) { return arguments.length ? (e = null == n ? Wc : "function" == typeof n ? n : Wa(o_.call(n)), t) : e }, t.offset = function(n) { return arguments.length ? (r = null == n ? $c : n, t) : r }, t
    }, t.stackOffsetExpand = function(t, n) {
        if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                if (i)
                    for (e = 0; e < r; ++e) t[e][o][1] /= i
            }
            $c(t, n)
        }
    }, t.stackOffsetDiverging = function(t, n) {
        if ((a = t.length) > 1)
            for (var e, r, i, o, u, a, c = 0, s = t[n[0]].length; c < s; ++c)
                for (o = u = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = o
    }, t.stackOffsetNone = $c, t.stackOffsetSilhouette = function(t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
                i[r][1] += i[r][0] = -a / 2
            }
            $c(t, n)
        }
    }, t.stackOffsetWiggle = function(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                for (var a = 0, c = 0, s = 0; a < i; ++a) {
                    for (var f = t[n[a]], l = f[u][1] || 0, h = (l - (f[u - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
                        var d = t[n[p]];
                        h += (d[u][1] || 0) - (d[u - 1][1] || 0)
                    }
                    c += l, s += h * l
                }
                e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
            }
            e[u - 1][1] += e[u - 1][0] = o, $c(t, n)
        }
    }, t.stackOrderAscending = Gc, t.stackOrderDescending = function(t) { return Gc(t).reverse() }, t.stackOrderInsideOut = function(t) {
        var n, e, r = t.length,
            i = t.map(Qc),
            o = Wc(t).sort(function(t, n) { return i[n] - i[t] }),
            u = 0,
            a = 0,
            c = [],
            s = [];
        for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
        return s.reverse().concat(c)
    }, t.stackOrderNone = Wc, t.stackOrderReverse = function(t) { return Wc(t).reverse() }, t.timeInterval = Eu, t.timeMillisecond = xv, t.timeMilliseconds = bv, t.utcMillisecond = xv, t.utcMilliseconds = bv, t.timeSecond = Tv, t.timeSeconds = Nv, t.utcSecond = Tv, t.utcSeconds = Nv, t.timeMinute = kv, t.timeMinutes = Sv, t.timeHour = Ev, t.timeHours = Av, t.timeDay = Cv, t.timeDays = zv, t.timeWeek = Pv, t.timeWeeks = Fv, t.timeSunday = Pv, t.timeSundays = Fv, t.timeMonday = Rv, t.timeMondays = Iv, t.timeTuesday = Lv, t.timeTuesdays = Yv, t.timeWednesday = qv, t.timeWednesdays = Bv, t.timeThursday = Dv, t.timeThursdays = Hv, t.timeFriday = Uv, t.timeFridays = jv, t.timeSaturday = Ov, t.timeSaturdays = Xv, t.timeMonth = Vv, t.timeMonths = $v, t.timeYear = Wv, t.timeYears = Zv, t.utcMinute = Gv, t.utcMinutes = Qv, t.utcHour = Jv, t.utcHours = Kv, t.utcDay = tg, t.utcDays = ng, t.utcWeek = eg, t.utcWeeks = sg, t.utcSunday = eg, t.utcSundays = sg, t.utcMonday = rg, t.utcMondays = fg, t.utcTuesday = ig, t.utcTuesdays = lg, t.utcWednesday = og, t.utcWednesdays = hg, t.utcThursday = ug, t.utcThursdays = pg, t.utcFriday = ag, t.utcFridays = dg, t.utcSaturday = cg, t.utcSaturdays = vg, t.utcMonth = gg, t.utcMonths = _g, t.utcYear = yg, t.utcYears = xg, t.timeFormatDefaultLocale = Ya, t.timeFormatLocale = Lu, t.isoFormat = kg, t.isoParse = Sg, t.now = _n, t.timer = xn, t.timerFlush = bn, t.timeout = Nn, t.interval = function(t, n, e) {
        var r = new mn,
            i = n;
        return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? _n() : +e, r.restart(function o(u) { u += i, r.restart(o, i += n, e), t(u) }, n, e), r)
    }, t.transition = Ln, t.active = function(t, n) {
        var e, r, i = t.__transition;
        if (i) {
            n = null == n ? null : n + "";
            for (r in i)
                if ((e = i[r]).state > yl && e.name === n) return new Rn([
                    [t]
                ], Gl, n, +r)
        }
        return null
    }, t.interrupt = Cn, t.voronoi = function() {
        function t(t) { return new Ms(t.map(function(r, i) { var o = [Math.round(n(r, i, t) / U_) * U_, Math.round(e(r, i, t) / U_) * U_]; return o.index = i, o.data = r, o }), r) }
        var n = Kc,
            e = ts,
            r = null;
        return t.polygons = function(n) { return t(n).polygons() }, t.links = function(n) { return t(n).links() }, t.triangles = function(n) { return t(n).triangles() }, t.x = function(e) { return arguments.length ? (n = "function" == typeof e ? e : Jc(+e), t) : n }, t.y = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Jc(+n), t) : e }, t.extent = function(n) {
            return arguments.length ? (r = null == n ? null : [
                [+n[0][0], +n[0][1]],
                [+n[1][0], +n[1][1]]
            ], t) : r && [
                [r[0][0], r[0][1]],
                [r[1][0], r[1][1]]
            ]
        }, t.size = function(n) {
            return arguments.length ? (r = null == n ? null : [
                [0, 0],
                [+n[0], +n[1]]
            ], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
        }, t
    }, t.zoom = function() {
        function n(t) { t.property("__zoom", zs).on("wheel.zoom", c).on("mousedown.zoom", s).on("dblclick.zoom", f).filter(x).on("touchstart.zoom", l).on("touchmove.zoom", h).on("touchend.zoom touchcancel.zoom", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function e(t, n) { return (n = Math.max(b[0], Math.min(b[1], n))) === t.k ? t : new Ns(n, t.x, t.y) }

        function r(t, n, e) {
            var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t : new Ns(t.k, r, i)
        }

        function i(t) { return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2] }

        function o(t, n, e) {
            t.on("start.zoom", function() { u(this, arguments).start() }).on("interrupt.zoom end.zoom", function() { u(this, arguments).end() }).tween("zoom", function() {
                var t = arguments,
                    r = u(this, t),
                    o = _.apply(this, t),
                    a = e || i(o),
                    c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                    s = this.__zoom,
                    f = "function" == typeof n ? n.apply(this, t) : n,
                    l = T(s.invert(a).concat(c / s.k), f.invert(a).concat(c / f.k));
                return function(t) {
                    if (1 === t) t = f;
                    else {
                        var n = l(t),
                            e = c / n[2];
                        t = new Ns(e, a[0] - n[0] * e, a[1] - n[1] * e)
                    }
                    r.zoom(null, t)
                }
            })
        }

        function u(t, n) {
            for (var e, r = 0, i = k.length; r < i; ++r)
                if ((e = k[r]).that === t) return e;
            return new a(t, n)
        }

        function a(t, n) { this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = _.apply(t, n) }

        function c() {
            if (g.apply(this, arguments)) {
                var t = u(this, arguments),
                    n = this.__zoom,
                    i = Math.max(b[0], Math.min(b[1], n.k * Math.pow(2, m.apply(this, arguments)))),
                    o = F(this);
                if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)), clearTimeout(t.wheel);
                else {
                    if (n.k === i) return;
                    t.mouse = [o, n.invert(o)], Cn(this), t.start()
                }
                Es(), t.wheel = setTimeout(function() { t.wheel = null, t.end() }, A), t.zoom("mouse", y(r(e(n, i), t.mouse[0], t.mouse[1]), t.extent, w))
            }
        }

        function s() {
            if (!v && g.apply(this, arguments)) {
                var n = u(this, arguments),
                    e = lt(t.event.view).on("mousemove.zoom", function() {
                        if (Es(), !n.moved) {
                            var e = t.event.clientX - o,
                                i = t.event.clientY - a;
                            n.moved = e * e + i * i > C
                        }
                        n.zoom("mouse", y(r(n.that.__zoom, n.mouse[0] = F(n.that), n.mouse[1]), n.extent, w))
                    }, !0).on("mouseup.zoom", function() { e.on("mousemove.zoom mouseup.zoom", null), gt(t.event.view, n.moved), Es(), n.end() }, !0),
                    i = F(this),
                    o = t.event.clientX,
                    a = t.event.clientY;
                vt(t.event.view), Ss(), n.mouse = [i, this.__zoom.invert(i)], Cn(this), n.start()
            }
        }

        function f() {
            if (g.apply(this, arguments)) {
                var i = this.__zoom,
                    u = F(this),
                    a = i.invert(u),
                    c = i.k * (t.event.shiftKey ? .5 : 2),
                    s = y(r(e(i, c), u, a), _.apply(this, arguments), w);
                Es(), M > 0 ? lt(this).transition().duration(M).call(o, s, u) : lt(this).call(n.transform, s)
            }
        }

        function l() {
            if (g.apply(this, arguments)) {
                var n, e, r, i, o = u(this, arguments),
                    a = t.event.changedTouches,
                    c = a.length;
                for (Ss(), e = 0; e < c; ++e) i = [i = ht(this, a, (r = a[e]).identifier), this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
                if (d && (d = clearTimeout(d), !o.touch1)) return o.end(), void((i = lt(this).on("dblclick.zoom")) && i.apply(this, arguments));
                n && (d = setTimeout(function() { d = null }, E), Cn(this), o.start())
            }
        }

        function h() {
            var n, i, o, a, c = u(this, arguments),
                s = t.event.changedTouches,
                f = s.length;
            for (Es(), d && (d = clearTimeout(d)), n = 0; n < f; ++n) o = ht(this, s, (i = s[n]).identifier), c.touch0 && c.touch0[2] === i.identifier ? c.touch0[0] = o : c.touch1 && c.touch1[2] === i.identifier && (c.touch1[0] = o);
            if (i = c.that.__zoom, c.touch1) {
                var l = c.touch0[0],
                    h = c.touch0[1],
                    p = c.touch1[0],
                    v = c.touch1[1],
                    g = (g = p[0] - l[0]) * g + (g = p[1] - l[1]) * g,
                    _ = (_ = v[0] - h[0]) * _ + (_ = v[1] - h[1]) * _;
                i = e(i, Math.sqrt(g / _)), o = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2], a = [(h[0] + v[0]) / 2, (h[1] + v[1]) / 2]
            } else {
                if (!c.touch0) return;
                o = c.touch0[0], a = c.touch0[1]
            }
            c.zoom("touch", y(r(i, o, a), c.extent, w))
        }

        function p() {
            var n, e, r = u(this, arguments),
                i = t.event.changedTouches,
                o = i.length;
            for (Ss(), v && clearTimeout(v), v = setTimeout(function() { v = null }, E), n = 0; n < o; ++n) e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
        }
        var d, v, g = As,
            _ = Cs,
            y = Ls,
            m = Ps,
            x = Rs,
            b = [0, 1 / 0],
            w = [
                [-1 / 0, -1 / 0],
                [1 / 0, 1 / 0]
            ],
            M = 250,
            T = pn,
            k = [],
            S = N("start", "zoom", "end"),
            E = 500,
            A = 150,
            C = 0;
        return n.transform = function(t, n) {
            var e = t.selection ? t.selection() : t;
            e.property("__zoom", zs), t !== e ? o(t, n) : e.interrupt().each(function() { u(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end() })
        }, n.scaleBy = function(t, e) { n.scaleTo(t, function() { return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e) }) }, n.scaleTo = function(t, o) {
            n.transform(t, function() {
                var t = _.apply(this, arguments),
                    n = this.__zoom,
                    u = i(t),
                    a = n.invert(u),
                    c = "function" == typeof o ? o.apply(this, arguments) : o;
                return y(r(e(n, c), u, a), t, w)
            })
        }, n.translateBy = function(t, e, r) { n.transform(t, function() { return y(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), _.apply(this, arguments), w) }) }, n.translateTo = function(t, e, r) {
            n.transform(t, function() {
                var t = _.apply(this, arguments),
                    n = this.__zoom,
                    o = i(t);
                return y(F_.translate(o[0], o[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof r ? -r.apply(this, arguments) : -r), t, w)
            })
        }, a.prototype = { start: function() { return 1 == ++this.active && (this.index = k.push(this) - 1, this.emit("start")), this }, zoom: function(t, n) { return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this }, end: function() { return 0 == --this.active && (k.splice(this.index, 1), this.index = -1, this.emit("end")), this }, emit: function(t) { D(new function(t, n, e) { this.target = t, this.type = n, this.transform = e }(n, t, this.that.__zoom), S.apply, S, [t, this.that, this.args]) } }, n.wheelDelta = function(t) { return arguments.length ? (m = "function" == typeof t ? t : Ts(+t), n) : m }, n.filter = function(t) { return arguments.length ? (g = "function" == typeof t ? t : Ts(!!t), n) : g }, n.touchable = function(t) { return arguments.length ? (x = "function" == typeof t ? t : Ts(!!t), n) : x }, n.extent = function(t) {
            return arguments.length ? (_ = "function" == typeof t ? t : Ts([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), n) : _
        }, n.scaleExtent = function(t) { return arguments.length ? (b[0] = +t[0], b[1] = +t[1], n) : [b[0], b[1]] }, n.translateExtent = function(t) {
            return arguments.length ? (w[0][0] = +t[0][0], w[1][0] = +t[1][0], w[0][1] = +t[0][1], w[1][1] = +t[1][1], n) : [
                [w[0][0], w[0][1]],
                [w[1][0], w[1][1]]
            ]
        }, n.constrain = function(t) { return arguments.length ? (y = t, n) : y }, n.duration = function(t) { return arguments.length ? (M = +t, n) : M }, n.interpolate = function(t) { return arguments.length ? (T = t, n) : T }, n.on = function() { var t = S.on.apply(S, arguments); return t === S ? n : t }, n.clickDistance = function(t) { return arguments.length ? (C = (t = +t) * t, n) : Math.sqrt(C) }, n
    }, t.zoomTransform = ks, t.zoomIdentity = F_, Object.defineProperty(t, "__esModule", { value: !0 })
});

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() { return f.call(this) },
        get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] },
        pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b },
        each: function(a) { return r.each(this, a) },
        map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(f.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === r.type(a) },
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) },
        isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a },
        globalEval: function(a) { p(a) },
        camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(s, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" });
        try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) {
            G = {
                apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return X.test(a.nodeName) },
                input: function(a) { return W.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: pa(function() { return [0] }),
                last: pa(function(a, b) { return [b - 1] }),
                eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }),
                even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
                odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
                lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {} ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                } return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                } return d
        },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext;

    function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) } r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) { return this.pushStack(E(this, a || [], !1)) },
        not: function(a) { return this.pushStack(E(this, a || [], !0)) },
        is: function(a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return K(a, "nextSibling") }, prev: function(a) { return K(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) { var b = {}; return r.each(a.match(L) || [], function(a, c) { b[c] = !0 }), b } r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    };

    function N(a) { return a }

    function O(a) { throw a }

    function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } } r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() { return d },
                    always: function() { return f.done(arguments).fail(arguments), this },
                    "catch": function(a) { return e.then(null, a) },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise()
                    },
                    promise: function(a) { return null != a ? r.extend(a, e) : e }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var R = r.Deferred();
    r.fn.ready = function(a) { return R.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function V() { this.expando = r.expando + V.uid++ } V.uid = 1, V.prototype = {
        cache: function(a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] },
        access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } },
        hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = $(c) } catch (e) {} X.set(a, b, c) } else c = void 0;
        return c
    }
    r.extend({ hasData: function(a) { return X.hasData(a) || W.hasData(a) }, data: function(a, b, c) { return X.access(a, b, c) }, removeData: function(a, b) { X.remove(a, b) }, _data: function(a, b, c) { return W.access(a, b, c) }, _removeData: function(a, b) { W.remove(a, b) } }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { X.set(this, a) }) : T(this, function(b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function() { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { X.remove(this, a) }) }
    }), r.extend({
        queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function() { W.remove(a, [b + "queue", c]) }) }) }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function() { return ia(this, !0) }, hide: function() { return ia(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { da(this) ? r(this).show() : r(this).hide() }) } });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c }

    function oa(a, b) { for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() { return !0 }

    function wa() { return !1 }

    function xa() { try { return d.activeElement } catch (a) {} }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f })
                    } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
        },
        addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) },
        fix: function(a) { return a[r.expando] ? a : new r.Event(a) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function(a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({ on: function(a, b, c, d) { return ya(this, a, b, c, d) }, one: function(a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a }

    function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({
        htmlPrefilter: function(a) { return a.replace(za, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) { return Ka(this, a, !0) },
        remove: function(a) { return Ka(this, a) },
        text: function(a) { return T(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } }))
    }();

    function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Pa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b }

    function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() { return $a(a, b, d) }) },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) } r.Tween = _a, _a.prototype = { constructor: _a, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function(a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) }

    function fb() { return a.setTimeout(function() { ab = void 0 }), ab = r.now() }

    function gb(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j
    }
    r.Animation = r.extend(kb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function(a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function(a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) }
        }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function(a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function() { bb || (bb = !0, eb()) }, r.fx.stop = function() { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });

    function pb(a) { var b = a.match(L) || []; return b.join(" ") }

    function qb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, qb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, qb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) { var b; if (k) { if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b },
                    getAllResponseHeaders: function() { return k ? g : null },
                    setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this },
                    overrideMimeType: function(a) { return null == k && (o.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout));
                try { k = !1, e.send(v, A) } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) { return r.get(a, b, c, "json") },
        getScript: function(a, b) { return r.get(a, void 0, b, "script") }
    }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({
        wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this }
    }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i }
            },
            abort: function() { c && c() }
        }
    }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) }
    }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return T(this, function(a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
    }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function(a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r
});

// https://github.com/HarryStevens/jeezy#readme Version 1.12.11. Copyright 2018 Harry Stevens.
! function(r, n) { "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(r.jz = {}) }(this, function(r) {
    "use strict";

    function n(r) { return r.reduce(function(r, n) { return n + r }) }

    function t(r) { return n(r) / r.length }

    function e(r) { return "object" == typeof r && r.length >= 0 }

    function o(r, n) { return r.map(function(r) { return r[n] }) }

    function u(r, n) {
        if (!r) throw new Error("You must pass a first argument.");
        if (!n) throw new Error("You must pass a second argument.");
        if (!e(r)) throw new Error("The first argument must be an array.");
        if (!e(n)) throw new Error("The second argument must be an array.");
        var t = [];
        return n.forEach(function(e) {
            n.forEach(function(n) {
                var o = i(r, e, n),
                    u = { column_x: e, column_y: n, correlation: a(o[0], o[1]) };
                t.push(u)
            })
        }), t
    }

    function i(r, n, t) { return [o(r, n), o(r, t)] }

    function a(r, n) {
        var t = 0;
        r.length == n.length ? t = r.length : r.length > n.length ? (t = n.length, console.error("x has more items in it, the last " + (r.length - t) + " item(s) will be ignored")) : (t = r.length, console.error("y has more items in it, the last " + (n.length - t) + " item(s) will be ignored"));
        for (var e = [], o = [], u = [], i = 0; i < t; i++) e.push(r[i] * n[i]), o.push(r[i] * r[i]), u.push(n[i] * n[i]);
        for (var a = 0, c = 0, f = 0, s = 0, l = 0, i = 0; i < t; i++) a += r[i], c += n[i], f += e[i], s += o[i], l += u[i];
        var p = t * f - a * c,
            h = t * s - a * a,
            g = t * l - c * c;
        return p / Math.sqrt(h * g)
    }

    function c(r) { return r.reduce(function(r, n) { return Math.max(r, n) }) }

    function f(r) { return r.reduce(function(r, n) { return Math.min(r, n) }) }

    function s(r) { return [f(r), c(r)] }

    function l(r, n) { return r.sort(function(r, t) { return "desc" == n ? t - r : r - t }) }

    function p(r) { r = l(r); var n = r.length / 2; return n % 1 == 0 ? (r[n - 1] + r[n]) / 2 : r[Math.floor(n)] }

    function h(r) {
        var n = [],
            t = Object.keys(r[0]),
            e = t.shift();
        return t.forEach(function(t) {
            r.forEach(function(r) {
                var o = {};
                o[e] = r[e], o.column = t, o.value = r[t], n.push(o)
            })
        }), n
    }

    function g(r) { return [].concat.apply([], r) }

    function m(r) { return r.slice() }

    function d(r, n, t) {
        var e = Object.keys(r[0]),
            o = Object.keys(n[0]);
        if (-1 == e.indexOf(t)) throw new Error(t + " not in first array.");
        if (-1 == o.indexOf(t)) throw new Error(t + " not in second array.");
        var u = m(r);
        return u.forEach(function(r) {
            var u = n.filter(function(n) { return r[t] == n[t] });
            return o.forEach(function(n) {
                var t = -1 == e.indexOf(n) ? n : n + "2";
                r[t] = u[0] ? u[0][n] : "NA"
            }), r
        }), u
    }

    function v(r) { return r.filter(function(r, n, t) { return t.indexOf(r) === n }) }

    function w(r, n) { return v(o(r, n)).sort().map(function(t) { return { value: t, count: r.filter(function(r) { return r[n] == t }).length } }) }

    function b(r, n, t) {
        if (void 0 == r) throw new Error("You must pass a first argument.");
        if (void 0 == n) throw new Error("You must pass a second argument.");
        if (!e(r)) throw new Error("The first argument must be an array.");
        if (!e(n) && "string" != typeof n) throw new Error("The second argument must be a string or an array.");
        if (t && "function" != typeof t) throw new Error("The third argument must be a function.");
        return e(n) ? (r.forEach(function(r, e) {
            return n.forEach(function(n) {
                if ("string" != typeof n) throw new Error("Each item in the second array must be a string.");
                r[n] = isNaN(+r[n]) ? +t(r[n]) : +r[n]
            }), r
        }), r) : (r.forEach(function(r) { return r[n] = isNaN(+r[n]) ? +t(r[n]) : +r[n], r }), r)
    }

    function S(r, n) {
        var t = m(r),
            e = t.indexOf(n);
        return e > -1 && t.splice(e, 1), t
    }

    function y(r, n) { var t = dr(r); return t.forEach(function(r) { e(n) ? n.forEach(function(n) { delete r[n] }) : delete r[n] }), t }

    function C(r, n) {
        function t(r, n) { r[n.out] = r[n.in], delete r[n.in] }
        var o = dr(r);
        return o.forEach(function(r) { return e(n) ? n.forEach(function(n) { t(r, n) }) : t(r, n), r }), o
    }

    function E(r) { for (var n, t, e = r.length; e;) t = Math.floor(Math.random() * e--), n = r[e], r[e] = r[t], r[t] = n; return r }

    function O(r, n, t) {
        var e = r.slice(),
            o = e.every(function(r) { return "number" == typeof r[n] }),
            u = [];
        return u = o ? e.sort(function(r, t) { return r[n] - t[n] }) : e.sort(function(r, t) { return r[n] < t[n] ? -1 : r[n] > t[n] ? 1 : 0 }), "desc" == t ? u.reverse() : u
    }

    function x(r, n) { var t = v(o(r, n)).sort().map(function(r) { return r }); return "number" == typeof t[0] ? l(t) : t.sort() }

    function j(r, n) { return Math.floor(Math.random() * (n - r + 1) + r) }

    function A(r) { return r[j(0, r.length - 1)] }

    function U(r) { return r % 2 == 0 }

    function L(r) { return r.toString().replace(/(?:^\w|[A-Z]|\b\w)/g, function(r, n) { return 0 == n ? r.toLowerCase() : r.toUpperCase() }).replace(/\s+/g, "").replace(/[^\w\-]+/g, "") }

    function M(r) { var n = r.match(/\b[a-zA-Z]/); return n ? n[0] : null }

    function N(r, n) {
        return r = n ? r.toString().toLowerCase() : r.toString(),
            function(r, n) {
                function t(r, n, t, e) { return 0 == t.length ? r : n < t.length - 1 ? r + e : r }
                var e = r.split(n[0]).map(function(r, e, o) { return t(r, e, o, n[0]) });
                return n.shift(), n.forEach(function(r) { e = g(e.map(function(n) { return n.split(r).map(function(n, e, o) { return t(n, e, o, r) }) })) }), e
            }(r, [". ", "! ", "? "]).map(function(r) { var n = M(r); return n ? r.replace(n, n.toUpperCase()) : r }).join("")
    }

    function k(r) { return r.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }

    function T(r) { return r.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^\w\_]+/g, "").replace(/\_\_+/g, "_").replace(/^_+/, "").replace(/_+$/, "") }

    function W(r, n) { return r.toString().split(" ").map(function(r) { return n ? N(r, n) : N(r) }).join(" ") }

    function _(r) {
        var n = [];
        ["A", "An", "The"].forEach(function(r) { n.push(r) }), ["And", "But", "Or", "Nor", "So", "Yet"].forEach(function(r) { n.push(r) }), ["As", "At", "Atop", "By", "Into", "It", "In", "For", "From", "Of", "Onto", "On", "Out", "Over", "Per", "To", "Unto", "Up", "Upon", "With"].forEach(function(r) { n.push(r) });
        return r = r.split("").reverse().join("") + " ", r = r.replace(/['"]?[a-z]['"]?(?= )/g, function(r) { return r.toUpperCase() }), r = r.split("").slice(0, -1).reverse().join(""), r = r.replace(/ .*?(?= )/g, function(r) { return -1 !== n.indexOf(r.substr(1)) ? r.toLowerCase() : r }), r = r.replace(/(([^\.]\w\. )|(\.[\w]*?\.\. )).*?(?=[ \.])/g, function(r) {
            var t = r.split(" ")[1],
                e = t.split("");
            return e[0] = e[0].toUpperCase(), t = e.join(""), -1 !== n.indexOf(t) ? r.split(" ")[0] + " " + t : r
        }), r = r.replace(/: .*?(?= )/g, function(r) { var n = r.match(/\b[a-z]/); return r.replace(n[0], n[0].toUpperCase()) })
    }

    function z(r, n, t) { return r.toString().replace(new RegExp(n, "g"), t) }

    function B(r, n) { return r = r.toString(), z(r, n, "") }

    function I(r) { return B(r, ",").replace(/\B(?=(\d{3})+(?!\d))/g, ",") }

    function F(r, n) { return Number(B(r, ",")).toFixed(n) }

    function P(r) {
        r = B(r, ",");
        var n = r.indexOf(".") > 0 ? r.substring(r.indexOf("."), r.length) : "";
        r = Math.floor(r).toString();
        var t = r.substring(r.length - 3),
            e = r.substring(0, r.length - 3);
        return t = "" != e ? "," + t : t, e.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + t + n
    }

    function Y(r) {
        var n = r % 10,
            t = r % 100;
        return 1 == n && 11 != t ? r + "st" : 2 == n && 12 != t ? r + "nd" : 3 == n && 13 != t ? r + "rd" : r + "th"
    }

    function D(r, n, t) { t = t ? "string" != typeof t ? "0" : t.length > 1 ? M(t) : t : "0"; for (var e = "", o = 1; o <= n - B(r, ",").length; o++) e += t; return e + B(r, ",") }

    function q(r, n) { return (r.match(new RegExp(n, "g")) || []).length }

    function Z(r, n, t) { return r = r.toString(), t ? r.toUpperCase().endsWith(n.toUpperCase()) : r.endsWith(n) }

    function J(r) { return /\d/.test(r) }

    function R(r, n, t) { return r = r.toString(), t ? -1 != r.toUpperCase().indexOf(n.toUpperCase()) : -1 != r.indexOf(n) }

    function $(r) { return r === r.toUpperCase() }

    function V(r) { return /^\d+$/.test(r) }

    function G(r) { return r === r.toLowerCase() }

    function H(r, n, t) { return t ? r.toUpperCase().startsWith(n.toUpperCase()) : r.toString().startsWith(n) }

    function K(r, n) { return r.toString().split("").map(function(r) { if (r == n) return r }).join("") }

    function Q(r, n) { return r = r.toString(), r.slice(r.length - n, r.length) }

    function X(r) { return r.replace(/[^\d.-]/g, "") }

    function rr(r, n) { return K(r, n).charAt(0) }

    function nr(r, n) { return r.toString().slice(0, +n) }

    function tr(r) { return r.toString().replace(/\d+/g, "") }

    function er(r, n) { return r.toString().replace(n, "") }

    function or(r, n, t) { r = r.toString(); var e = r.split(""); return e[r.lastIndexOf(n)] = t, e.join("") }

    function ur(r, n) { return or(r, n, "") }

    function ir(r) { return r.replace(/[^a-zA-Z ]/g, "") }

    function ar(r, n) {
        n || (n = []), n = n.map(function(r) { return "<" + r + ">" }).join(","), n = (((n || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        var t = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            e = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return r.replace(e, "").replace(t, function(r, t) { return n.indexOf("<" + t.toLowerCase() + ">") > -1 ? r : "" })
    }

    function cr(r, n, t) { return n || (n = 0), r.substr(0, n) + t + r.substr(n + t.length) }

    function fr(r, n, t) { return r.toString().replace(n, t) }

    function sr(r) { return r.toString().split("").reverse().join("") }

    function lr(r) { return r.toString().split(" ").reverse().join(" ") }

    function pr(r) { return E(r.toString().split("")).join("") }

    function hr(r) { return r.toString().split(" ").map(function(r) { return pr(r) }).join(" ") }

    function gr(r) { return E(r.toString().split(" ")).join(" ") }

    function mr(r) { r || (r = 5); for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; e < r; e++) n += t.charAt(Math.floor(Math.random() * t.length)); return n }
    var dr = function(r) { return JSON.parse(JSON.stringify(r)) },
        vr = { average: t, columnsToValues: h, correlationMatrix: u, deepCopy: dr, extent: s, flatten: g, is: e, max: c, median: p, merge: d, min: f, pivot: w, pluck: o, propertyToNumber: b, removeItem: S, removeProperty: y, renameProperty: C, random: A, shallowCopy: m, shuffle: E, sortBy: O, sortNumbers: l, sum: n, unique: v, uniqueBy: x },
        wr = { isEven: U, randBetween: j },
        br = { count: q, endsWith: Z, firstLetter: M, hasDigit: J, includes: R, isAllCaps: $, isAllDigits: V, isAllLower: G, keepAll: K, keepEnd: Q, keepNumber: X, keepOne: rr, keepStart: nr, numberCommas: I, numberDecimals: F, numberLakhs: P, numberOrdinal: Y, numberPrepend: D, randomString: mr, removeAll: B, removeDigits: tr, removeFirst: er, removeLast: ur, removeSymbols: ir, removeTags: ar, replaceAll: z, replaceAt: cr, replaceFirst: fr, replaceLast: or, reverseCharacters: sr, reverseWords: lr, shuffleCharacters: pr, shuffleCharactersInWords: hr, shuffleWords: gr, startsWith: H, toCamelCase: L, toSentenceCase: N, toSlugCase: k, toSnakeCase: T, toStartCase: W, toTitleCase: _ };
    r.arr = vr, r.num = wr, r.str = br, Object.defineProperty(r, "__esModule", { value: !0 })
});

/*! vex.combined.js: vex 4.0.1, vex-dialog 1.0.7 */
! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.vex = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j }
                var k = c[g] = { exports: {} };
                a[g][0].call(k.exports, function(b) { var c = a[g][1][b]; return e(c ? c : b) }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? ! function() {
                "use strict";
                var a = document.createElement("_");
                if (a.classList.add("c1", "c2"), !a.classList.contains("c2")) {
                    var b = function(a) {
                        var b = DOMTokenList.prototype[a];
                        DOMTokenList.prototype[a] = function(a) { var c, d = arguments.length; for (c = 0; c < d; c++) a = arguments[c], b.call(this, a) }
                    };
                    b("add"), b("remove")
                }
                if (a.classList.toggle("c3", !1), a.classList.contains("c3")) {
                    var c = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(a, b) { return 1 in arguments && !this.contains(a) == !b ? b : c.call(this, a) }
                }
                a = null
            }() : ! function(a) {
                "use strict";
                if ("Element" in a) {
                    var b = "classList",
                        c = "prototype",
                        d = a.Element[c],
                        e = Object,
                        f = String[c].trim || function() { return this.replace(/^\s+|\s+$/g, "") },
                        g = Array[c].indexOf || function(a) {
                            for (var b = 0, c = this.length; b < c; b++)
                                if (b in this && this[b] === a) return b;
                            return -1
                        },
                        h = function(a, b) { this.name = a, this.code = DOMException[a], this.message = b },
                        i = function(a, b) { if ("" === b) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified"); if (/\s/.test(b)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character"); return g.call(a, b) },
                        j = function(a) {
                            for (var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; d < e; d++) this.push(c[d]);
                            this._updateClassName = function() { a.setAttribute("class", this.toString()) }
                        },
                        k = j[c] = [],
                        l = function() { return new j(this) };
                    if (h[c] = Error[c], k.item = function(a) { return this[a] || null }, k.contains = function(a) { return a += "", i(this, a) !== -1 }, k.add = function() {
                            var a, b = arguments,
                                c = 0,
                                d = b.length,
                                e = !1;
                            do a = b[c] + "", i(this, a) === -1 && (this.push(a), e = !0); while (++c < d);
                            e && this._updateClassName()
                        }, k.remove = function() {
                            var a, b, c = arguments,
                                d = 0,
                                e = c.length,
                                f = !1;
                            do
                                for (a = c[d] + "", b = i(this, a); b !== -1;) this.splice(b, 1), f = !0, b = i(this, a); while (++d < e);
                            f && this._updateClassName()
                        }, k.toggle = function(a, b) {
                            a += "";
                            var c = this.contains(a),
                                d = c ? b !== !0 && "remove" : b !== !1 && "add";
                            return d && this[d](a), b === !0 || b === !1 ? b : !c
                        }, k.toString = function() { return this.join(" ") }, e.defineProperty) { var m = { get: l, enumerable: !0, configurable: !0 }; try { e.defineProperty(d, b, m) } catch (n) { n.number === -2146823252 && (m.enumerable = !1, e.defineProperty(d, b, m)) } } else e[c].__defineGetter__ && d.__defineGetter__(b, l)
                }
            }(window.self))
        }, {}],
        2: [function(a, b, c) {
            function d(a, b) {
                if ("string" != typeof a) throw new TypeError("String expected");
                b || (b = document);
                var c = /<([\w:]+)/.exec(a);
                if (!c) return b.createTextNode(a);
                a = a.replace(/^\s+|\s+$/g, "");
                var d = c[1];
                if ("body" == d) { var e = b.createElement("html"); return e.innerHTML = a, e.removeChild(e.lastChild) }
                var f = g[d] || g._default,
                    h = f[0],
                    i = f[1],
                    j = f[2],
                    e = b.createElement("div");
                for (e.innerHTML = i + a + j; h--;) e = e.lastChild;
                if (e.firstChild == e.lastChild) return e.removeChild(e.firstChild);
                for (var k = b.createDocumentFragment(); e.firstChild;) k.appendChild(e.removeChild(e.firstChild));
                return k
            }
            b.exports = d;
            var e, f = !1;
            "undefined" != typeof document && (e = document.createElement("div"), e.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', f = !e.getElementsByTagName("link").length, e = void 0);
            var g = { legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], _default: f ? [1, "X<div>", "</div>"] : [0, "", ""] };
            g.td = g.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], g.option = g.optgroup = [1, '<select multiple="multiple">', "</select>"], g.thead = g.tbody = g.colgroup = g.caption = g.tfoot = [1, "<table>", "</table>"], g.polyline = g.ellipse = g.polygon = g.circle = g.text = g.line = g.path = g.rect = g.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
        }, {}],
        3: [function(a, b, c) {
            "use strict";

            function d(a, b) {
                if (void 0 === a || null === a) throw new TypeError("Cannot convert first argument to object");
                for (var c = Object(a), d = 1; d < arguments.length; d++) {
                    var e = arguments[d];
                    if (void 0 !== e && null !== e)
                        for (var f = Object.keys(Object(e)), g = 0, h = f.length; g < h; g++) {
                            var i = f[g],
                                j = Object.getOwnPropertyDescriptor(e, i);
                            void 0 !== j && j.enumerable && (c[i] = e[i])
                        }
                }
                return c
            }

            function e() { Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: d }) } b.exports = { assign: d, polyfill: e }
        }, {}],
        4: [function(a, b, c) {
            function d(a, b) {
                "object" != typeof b ? b = { hash: !!b } : void 0 === b.hash && (b.hash = !0);
                for (var c = b.hash ? {} : "", d = b.serializer || (b.hash ? g : h), e = a && a.elements ? a.elements : [], f = Object.create(null), k = 0; k < e.length; ++k) {
                    var l = e[k];
                    if ((b.disabled || !l.disabled) && l.name && j.test(l.nodeName) && !i.test(l.type)) {
                        var m = l.name,
                            n = l.value;
                        if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (n = void 0), b.empty) { if ("checkbox" !== l.type || l.checked || (n = ""), "radio" === l.type && (f[l.name] || l.checked ? l.checked && (f[l.name] = !0) : f[l.name] = !1), !n && "radio" == l.type) continue } else if (!n) continue;
                        if ("select-multiple" !== l.type) c = d(c, m, n);
                        else {
                            n = [];
                            for (var o = l.options, p = !1, q = 0; q < o.length; ++q) {
                                var r = o[q],
                                    s = b.empty && !r.value,
                                    t = r.value || s;
                                r.selected && t && (p = !0, c = b.hash && "[]" !== m.slice(m.length - 2) ? d(c, m + "[]", r.value) : d(c, m, r.value))
                            }!p && b.empty && (c = d(c, m, ""))
                        }
                    }
                }
                if (b.empty)
                    for (var m in f) f[m] || (c = d(c, m, ""));
                return c
            }

            function e(a) {
                var b = [],
                    c = /^([^\[\]]*)/,
                    d = new RegExp(k),
                    e = c.exec(a);
                for (e[1] && b.push(e[1]); null !== (e = d.exec(a));) b.push(e[1]);
                return b
            }

            function f(a, b, c) {
                if (0 === b.length) return a = c;
                var d = b.shift(),
                    e = d.match(/^\[(.+?)\]$/);
                if ("[]" === d) return a = a || [], Array.isArray(a) ? a.push(f(null, b, c)) : (a._values = a._values || [], a._values.push(f(null, b, c))), a;
                if (e) {
                    var g = e[1],
                        h = +g;
                    isNaN(h) ? (a = a || {}, a[g] = f(a[g], b, c)) : (a = a || [], a[h] = f(a[h], b, c))
                } else a[d] = f(a[d], b, c);
                return a
            }

            function g(a, b, c) {
                var d = b.match(k);
                if (d) {
                    var g = e(b);
                    f(a, g, c)
                } else {
                    var h = a[b];
                    h ? (Array.isArray(h) || (a[b] = [h]), a[b].push(c)) : a[b] = c
                }
                return a
            }

            function h(a, b, c) { return c = c.replace(/(\r)?\n/g, "\r\n"), c = encodeURIComponent(c), c = c.replace(/%20/g, "+"), a + (a ? "&" : "") + encodeURIComponent(b) + "=" + c }
            var i = /^(?:submit|button|image|reset|file)$/i,
                j = /^(?:input|select|textarea|keygen)/i,
                k = /(\[[^\[\]]*\])/g;
            b.exports = d
        }, {}],
        5: [function(b, c, d) {
            (function(e) {
                ! function(b) {
                    if ("object" == typeof d && "undefined" != typeof c) c.exports = b();
                    else if ("function" == typeof a && a.amd) a([], b);
                    else {
                        var f;
                        f = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : this, f.vexDialog = b()
                    }
                }(function() {
                    return function a(c, d, e) {
                        function f(h, i) {
                            if (!d[h]) {
                                if (!c[h]) { var j = "function" == typeof b && b; if (!i && j) return j(h, !0); if (g) return g(h, !0); var k = new Error("Cannot find module '" + h + "'"); throw k.code = "MODULE_NOT_FOUND", k }
                                var l = d[h] = { exports: {} };
                                c[h][0].call(l.exports, function(a) { var b = c[h][1][a]; return f(b ? b : a) }, l, l.exports, a, c, d, e)
                            }
                            return d[h].exports
                        }
                        for (var g = "function" == typeof b && b, h = 0; h < e.length; h++) f(e[h]);
                        return f
                    }({
                        1: [function(a, b, c) {
                            function d(a, b) {
                                if ("string" != typeof a) throw new TypeError("String expected");
                                b || (b = document);
                                var c = /<([\w:]+)/.exec(a);
                                if (!c) return b.createTextNode(a);
                                a = a.replace(/^\s+|\s+$/g, "");
                                var d = c[1];
                                if ("body" == d) { var e = b.createElement("html"); return e.innerHTML = a, e.removeChild(e.lastChild) }
                                var f = g[d] || g._default,
                                    h = f[0],
                                    i = f[1],
                                    j = f[2],
                                    e = b.createElement("div");
                                for (e.innerHTML = i + a + j; h--;) e = e.lastChild;
                                if (e.firstChild == e.lastChild) return e.removeChild(e.firstChild);
                                for (var k = b.createDocumentFragment(); e.firstChild;) k.appendChild(e.removeChild(e.firstChild));
                                return k
                            }
                            b.exports = d;
                            var e, f = !1;
                            "undefined" != typeof document && (e = document.createElement("div"), e.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', f = !e.getElementsByTagName("link").length, e = void 0);
                            var g = { legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], _default: f ? [1, "X<div>", "</div>"] : [0, "", ""] };
                            g.td = g.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], g.option = g.optgroup = [1, '<select multiple="multiple">', "</select>"], g.thead = g.tbody = g.colgroup = g.caption = g.tfoot = [1, "<table>", "</table>"], g.polyline = g.ellipse = g.polygon = g.circle = g.text = g.line = g.path = g.rect = g.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
                        }, {}],
                        2: [function(a, b, c) {
                            function d(a, b) {
                                "object" != typeof b ? b = { hash: !!b } : void 0 === b.hash && (b.hash = !0);
                                for (var c = b.hash ? {} : "", d = b.serializer || (b.hash ? g : h), e = a && a.elements ? a.elements : [], f = Object.create(null), k = 0; k < e.length; ++k) {
                                    var l = e[k];
                                    if ((b.disabled || !l.disabled) && l.name && j.test(l.nodeName) && !i.test(l.type)) {
                                        var m = l.name,
                                            n = l.value;
                                        if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (n = void 0), b.empty) { if ("checkbox" !== l.type || l.checked || (n = ""), "radio" === l.type && (f[l.name] || l.checked ? l.checked && (f[l.name] = !0) : f[l.name] = !1), !n && "radio" == l.type) continue } else if (!n) continue;
                                        if ("select-multiple" !== l.type) c = d(c, m, n);
                                        else {
                                            n = [];
                                            for (var o = l.options, p = !1, q = 0; q < o.length; ++q) {
                                                var r = o[q],
                                                    s = b.empty && !r.value,
                                                    t = r.value || s;
                                                r.selected && t && (p = !0, c = b.hash && "[]" !== m.slice(m.length - 2) ? d(c, m + "[]", r.value) : d(c, m, r.value))
                                            }!p && b.empty && (c = d(c, m, ""))
                                        }
                                    }
                                }
                                if (b.empty)
                                    for (var m in f) f[m] || (c = d(c, m, ""));
                                return c
                            }

                            function e(a) {
                                var b = [],
                                    c = /^([^\[\]]*)/,
                                    d = new RegExp(k),
                                    e = c.exec(a);
                                for (e[1] && b.push(e[1]); null !== (e = d.exec(a));) b.push(e[1]);
                                return b
                            }

                            function f(a, b, c) {
                                if (0 === b.length) return a = c;
                                var d = b.shift(),
                                    e = d.match(/^\[(.+?)\]$/);
                                if ("[]" === d) return a = a || [], Array.isArray(a) ? a.push(f(null, b, c)) : (a._values = a._values || [], a._values.push(f(null, b, c))), a;
                                if (e) {
                                    var g = e[1],
                                        h = +g;
                                    isNaN(h) ? (a = a || {}, a[g] = f(a[g], b, c)) : (a = a || [], a[h] = f(a[h], b, c))
                                } else a[d] = f(a[d], b, c);
                                return a
                            }

                            function g(a, b, c) {
                                var d = b.match(k);
                                if (d) {
                                    var g = e(b);
                                    f(a, g, c)
                                } else {
                                    var h = a[b];
                                    h ? (Array.isArray(h) || (a[b] = [h]), a[b].push(c)) : a[b] = c
                                }
                                return a
                            }

                            function h(a, b, c) { return c = c.replace(/(\r)?\n/g, "\r\n"), c = encodeURIComponent(c), c = c.replace(/%20/g, "+"), a + (a ? "&" : "") + encodeURIComponent(b) + "=" + c }
                            var i = /^(?:submit|button|image|reset|file)$/i,
                                j = /^(?:input|select|textarea|keygen)/i,
                                k = /(\[[^\[\]]*\])/g;
                            b.exports = d
                        }, {}],
                        3: [function(a, b, c) {
                            var d = a("domify"),
                                e = a("form-serialize"),
                                f = function(a) {
                                    var b = document.createElement("form");
                                    b.classList.add("vex-dialog-form");
                                    var c = document.createElement("div");
                                    c.classList.add("vex-dialog-message"), c.appendChild(a.message instanceof window.Node ? a.message : d(a.message));
                                    var e = document.createElement("div");
                                    return e.classList.add("vex-dialog-input"), e.appendChild(a.input instanceof window.Node ? a.input : d(a.input)), b.appendChild(c), b.appendChild(e), b
                                },
                                g = function(a) {
                                    var b = document.createElement("div");
                                    b.classList.add("vex-dialog-buttons");
                                    for (var c = 0; c < a.length; c++) {
                                        var d = a[c],
                                            e = document.createElement("button");
                                        e.type = d.type, e.textContent = d.text, e.className = d.className, e.classList.add("vex-dialog-button"), 0 === c ? e.classList.add("vex-first") : c === a.length - 1 && e.classList.add("vex-last"),
                                            function(a) { e.addEventListener("click", function(b) { a.click && a.click.call(this, b) }.bind(this)) }.bind(this)(d), b.appendChild(e)
                                    }
                                    return b
                                },
                                h = function(a) {
                                    var b = {
                                        name: "dialog",
                                        open: function(b) {
                                            var c = Object.assign({}, this.defaultOptions, b);
                                            c.unsafeMessage && !c.message ? c.message = c.unsafeMessage : c.message && (c.message = a._escapeHtml(c.message));
                                            var d = c.unsafeContent = f(c),
                                                e = a.open(c),
                                                h = c.beforeClose && c.beforeClose.bind(e);
                                            if (e.options.beforeClose = function() { var a = !h || h(); return a && c.callback(this.value || !1), a }.bind(e), d.appendChild(g.call(e, c.buttons)), e.form = d, d.addEventListener("submit", c.onSubmit.bind(e)), c.focusFirstInput) {
                                                var i = e.contentEl.querySelector("button, input, select, textarea");
                                                i && i.focus()
                                            }
                                            return e
                                        },
                                        alert: function(a) { return "string" == typeof a && (a = { message: a }), a = Object.assign({}, this.defaultOptions, this.defaultAlertOptions, a), this.open(a) },
                                        confirm: function(a) { if ("object" != typeof a || "function" != typeof a.callback) throw new Error("dialog.confirm(options) requires options.callback."); return a = Object.assign({}, this.defaultOptions, this.defaultConfirmOptions, a), this.open(a) },
                                        prompt: function(b) {
                                            if ("object" != typeof b || "function" != typeof b.callback) throw new Error("dialog.prompt(options) requires options.callback.");
                                            var c = Object.assign({}, this.defaultOptions, this.defaultPromptOptions),
                                                d = { unsafeMessage: '<label for="vex">' + a._escapeHtml(b.label || c.label) + "</label>", input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + a._escapeHtml(b.placeholder || c.placeholder) + '" value="' + a._escapeHtml(b.value || c.value) + '" />' };
                                            b = Object.assign(c, d, b);
                                            var e = b.callback;
                                            return b.callback = function(a) {
                                                if ("object" == typeof a) {
                                                    var b = Object.keys(a);
                                                    a = b.length ? a[b[0]] : ""
                                                }
                                                e(a)
                                            }, this.open(b)
                                        }
                                    };
                                    return b.buttons = { YES: { text: "OK", type: "submit", className: "vex-dialog-button-primary", click: function() { this.value = !0 } }, NO: { text: "Cancel", type: "button", className: "vex-dialog-button-secondary", click: function() { this.value = !1, this.close() } } }, b.defaultOptions = { callback: function() {}, afterOpen: function() {}, message: "", input: "", buttons: [b.buttons.YES, b.buttons.NO], showCloseButton: !1, onSubmit: function(a) { return a.preventDefault(), this.options.input && (this.value = e(this.form, { hash: !0 })), this.close() }, focusFirstInput: !0 }, b.defaultAlertOptions = { buttons: [b.buttons.YES] }, b.defaultPromptOptions = { label: "Prompt:", placeholder: "", value: "" }, b.defaultConfirmOptions = {}, b
                                };
                            b.exports = h
                        }, { domify: 1, "form-serialize": 2 }]
                    }, {}, [3])(3)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { domify: 2, "form-serialize": 4 }],
        6: [function(a, b, c) {
            var d = a("./vex");
            d.registerPlugin(a("vex-dialog")), b.exports = d
        }, { "./vex": 7, "vex-dialog": 5 }],
        7: [function(a, b, c) {
            a("classlist-polyfill"), a("es6-object-assign").polyfill();
            var d = a("domify"),
                e = function(a) { if ("undefined" != typeof a) { var b = document.createElement("div"); return b.appendChild(document.createTextNode(a)), b.innerHTML } return "" },
                f = function(a, b) {
                    if ("string" == typeof b && 0 !== b.length)
                        for (var c = b.split(" "), d = 0; d < c.length; d++) {
                            var e = c[d];
                            e.length && a.classList.add(e)
                        }
                },
                g = function() {
                    var a = document.createElement("div"),
                        b = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oanimationend", msAnimation: "MSAnimationEnd", animation: "animationend" };
                    for (var c in b)
                        if (void 0 !== a.style[c]) return b[c];
                    return !1
                }(),
                h = { vex: "vex", content: "vex-content", overlay: "vex-overlay", close: "vex-close", closing: "vex-closing", open: "vex-open" },
                i = {},
                j = 1,
                k = !1,
                l = {
                    open: function(a) {
                        var b = function(a) { console.warn('The "' + a + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'), console.warn("See http://github.hubspot.com/vex/api/advanced/#options") };
                        a.css && b("css"), a.overlayCSS && b("overlayCSS"), a.contentCSS && b("contentCSS"), a.closeCSS && b("closeCSS");
                        var c = {};
                        c.id = j++, i[c.id] = c, c.isOpen = !0, c.close = function() {
                            function a(a) { return "none" !== d.getPropertyValue(a + "animation-name") && "0s" !== d.getPropertyValue(a + "animation-duration") }
                            if (!this.isOpen) return !0;
                            var b = this.options;
                            if (k && !b.escapeButtonCloses) return !1;
                            var c = function() { return !b.beforeClose || b.beforeClose.call(this) }.bind(this)();
                            if (c === !1) return !1;
                            this.isOpen = !1;
                            var d = window.getComputedStyle(this.contentEl),
                                e = a("") || a("-webkit-") || a("-moz-") || a("-o-"),
                                f = function j() { this.rootEl.parentNode && (this.rootEl.removeEventListener(g, j), this.overlayEl.removeEventListener(g, j), delete i[this.id], this.rootEl.parentNode.removeChild(this.rootEl), this.bodyEl.removeChild(this.overlayEl), b.afterClose && b.afterClose.call(this), 0 === Object.keys(i).length && document.body.classList.remove(h.open)) }.bind(this);
                            return g && e ? (this.rootEl.addEventListener(g, f), this.overlayEl.addEventListener(g, f), this.rootEl.classList.add(h.closing), this.overlayEl.classList.add(h.closing)) : f(), !0
                        }, "string" == typeof a && (a = { content: a }), a.unsafeContent && !a.content ? a.content = a.unsafeContent : a.content && (a.content = e(a.content));
                        var m = c.options = Object.assign({}, l.defaultOptions, a),
                            n = c.bodyEl = document.getElementsByTagName("body")[0],
                            o = c.rootEl = document.createElement("div");
                        o.classList.add(h.vex), f(o, m.className);
                        var p = c.overlayEl = document.createElement("div");
                        p.classList.add(h.overlay), f(p, m.overlayClassName), m.overlayClosesOnClick && o.addEventListener("click", function(a) { a.target === o && c.close() }), n.appendChild(p);
                        var q = c.contentEl = document.createElement("div");
                        if (q.classList.add(h.content), f(q, m.contentClassName), q.appendChild(m.content instanceof window.Node ? m.content : d(m.content)), o.appendChild(q), m.showCloseButton) {
                            var r = c.closeEl = document.createElement("div");
                            r.classList.add(h.close), f(r, m.closeClassName), r.addEventListener("click", c.close.bind(c)), q.appendChild(r)
                        }
                        return document.querySelector(m.appendLocation).appendChild(o), m.afterOpen && m.afterOpen.call(c), document.body.classList.add(h.open), c
                    },
                    close: function(a) {
                        var b;
                        if (a.id) b = a.id;
                        else {
                            if ("string" != typeof a) throw new TypeError("close requires a vex object or id string");
                            b = a
                        }
                        return !!i[b] && i[b].close()
                    },
                    closeTop: function() { var a = Object.keys(i); return !!a.length && i[a[a.length - 1]].close() },
                    closeAll: function() { for (var a in i) this.close(a); return !0 },
                    getAll: function() { return i },
                    getById: function(a) { return i[a] }
                };
            window.addEventListener("keyup", function(a) { 27 === a.keyCode && (k = !0, l.closeTop(), k = !1) }), window.addEventListener("popstate", function() { l.defaultOptions.closeAllOnPopState && l.closeAll() }), l.defaultOptions = { content: "", showCloseButton: !0, escapeButtonCloses: !0, overlayClosesOnClick: !0, appendLocation: "body", className: "", overlayClassName: "", contentClassName: "", closeClassName: "", closeAllOnPopState: !0 }, Object.defineProperty(l, "_escapeHtml", { configurable: !1, enumerable: !1, writable: !1, value: e }), l.registerPlugin = function(a, b) {
                var c = a(l),
                    d = b || c.name;
                if (l[d]) throw new Error("Plugin " + b + " is already registered.");
                l[d] = c
            }, b.exports = l
        }, { "classlist-polyfill": 1, domify: 2, "es6-object-assign": 3 }]
    }, {}, [6])(6)
});

vex.defaultOptions.className = 'vex-theme-os'

// template
var twitterStatus = "Can you make a better budget than Nirmala Sitharaman? Play this game to find out.",
    hashtags = "Budget2020";
$(document).ready(function() {
    function t(t) { return t <= 480 ? "sm" : "md" }
    var e = t($(window).width());

    function a(t) {
        if ("md" == t) {
            var e = .67 * $(".related-story").width();
            $(".related-story img").height(e)
        } else $(".related-story img").css({ width: "100%", height: "auto" })
    }
    $(window).resize(function() { e = t($(window).width()) }), a(e), $(window).resize(function() { a(e) });
    var r = window.location.href,
        i = "http://twitter.com/share?text=" + twitterStatus + "&url=" + r + "&hashtags=" + hashtags;
    $(".twitter-share").attr("href", i);
    var h = "https://www.facebook.com/sharer/sharer.php?u=" + r;
    $(".facebook-share").attr("href", h)
});

// scripts
function go() {
    var t = 692992,
        e = 22980190,
        a = t / e * 100,
        n = 0,
        i = 0,
        o = t,
        r = $(window).width(),
        s = { red: "#df5a49", green: "#45b29d", blue: "#2880b9", darkred: "#983E32" },
        c = [{ "type": "spend", "rank": 1, "category": "fci", "item_name": "FCI payment", "short_description": "Pay back 20 percent of the total liabilities to FCI (accumulated since 2014-15)", "long_description": "Governments across regimes have been deferring subsidy payments due to the Food Corporation of India. Under the government\u2019s cash accounting system, deferred payments are not considered as expenses, which allows the government to report better fiscal deficit numbers. Over the years, the carryover liabilities to FCI have inflated. In fiscal 2020, the carryover liability bill due to FCI is <a href='https:\/\/www.livemint.com\/budget\/news\/how-deep-is-india-s-fiscal-hole-11579539858141.html' target='_blank'> likely to cross \u20b92 trillion <\/a>. Settling this bill would reveal the true extent of India's fiscal deficit.", "new allocation": "", "allocation": 33429, "FY19-20 (allocated)": 27443.06, "FY 18-19 (revised)": "", "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "fci calculation sheet" }, { "type": "spend", "rank": 2, "category": "Health", "item_name": "the National Health Mission", "short_description": "Increase spending on the National Health Mission", "long_description": "The National Health Policy of 2017 envisions spending of 2.5% of GDP to address India's public health challenge. India, though, is some way off this target. <a href='https:\/\/www.livemint.com\/Politics\/cs6dPgDpwHUAlHCyk4fJbK\/Funding-shortfall-may-hit-National-Health-Missions-key-prog.html' target='_blank'>Increased spending on the National Health Mission would bring India closer to the 2.5% mark <\/a> and improve public health in the process.", "new allocation": "", "allocation": 37207, "FY19-20 (allocated)": 33651, "FY 18-19 (revised)": 31187.48, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "spend", "rank": 3, "category": "Better data and monitoring", "item_name": "the Ministry of Statistics and Program Implementation", "short_description": "Strengthen the statisical infrastructure of the country", "long_description": "Once the envy of the world, India's statistical system has decayed <a href='https:\/\/www.livemint.com\/news\/india\/how-india-s-statistical-system-was-crippled-1557250292753.html' target='_blank'> considerably in the last few years <\/a>. A basic requirement for any successful policy is accurate, credible, and timely data on important socio-economic indicators. The only way to improve the quality and quantity of data is to strengthen India's statistical infrastructure.", "new allocation": "", "allocation": 5784, "FY19-20 (allocated)": 5231.06, "FY 18-19 (revised)": 4928.62, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe94.pdf" }, { "type": "spend", "rank": 4, "category": "Rural roads", "item_name": "rural roads", "short_description": "Build more rural roads", "long_description": "Rural roads form the backbone of India's road network and plays an important role in rural economies.New research <a href='http:\/\/www.dartmouth.edu\/~novosad\/asher-novosad-roads.pdf' target='_blank'>suggests <\/a> that roads built under the Pradhan Mantri Gram Sadak Yojana, the major scheme for rural road construction, have made non-agricultural jobs more accessible to rural workers.", "new allocation": "", "allocation": 21008, "FY19-20 (allocated)": 19000, "FY 18-19 (revised)": 15500, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "spend", "rank": 5, "category": "Rural electrification", "item_name": "rural electrification", "short_description": "Raise allocation for rural electrification", "long_description": "According to official statistics, almost all households in India are now connected to an electricity grid. But quality of electricity supply still remains patchy with many households only getting less than 10 hours of electricity. More funds for the Deen Dayal Upadhyaya Gram Jyoti Yojana, the government's rural electricity programme, could address the <a href='https:\/\/www.livemint.com\/elections\/lok-sabha-elections\/the-curious-case-of-electrification-in-india-amid-power-discom-blackouts-1552257301715.html' target='_blank'>disparities in electricity access.<\/a>", "new allocation": "", "allocation": 4496, "FY19-20 (allocated)": 4066, "FY 18-19 (revised)": 3800, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4b.pdf" }, { "type": "spend", "rank": 6, "category": "Digital India", "item_name": "modernising land records", "short_description": "Modernise land records", "long_description": "Rural India's bane is the lack of land titles and poor record-keeping. Launched in 2008, the Digital India Land Records Modernisation Programme aims to correct this. Accurate land records could enable land leasing, speed up transactions, and stimulate rural investments.", "new allocation": "", "allocation": 166, "FY19-20 (allocated)": 150, "FY 18-19 (revised)": 145, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe85.pdf" }, { "type": "spend", "rank": 7, "category": "farming", "item_name": "rural employment guarantee scheme implementation", "short_description": "Increase funding for the national rural empolyment guarantee programme", "long_description": "One of the most ambitious social security and public works programme in the world, MGNREGA seeks to address rural poverty by providing households with at least 100 days of guaranteed employment. Amid deepening rural distress, strengthening MGNREGA, through greater allocations for wages, <a href='https:\/\/www.livemint.com\/news\/india\/is-mgnregs-the-answer-to-the-rural-slowdown-11579685377701.html' target='_blank'>could be one way to boost consumption acoss the country <\/a>", "new allocation": "", "allocation": 66341, "FY19-20 (allocated)": 60000, "FY 18-19 (revised)": 61084.09, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe84.pdf" }, { "type": "spend", "rank": 8, "category": "housing", "item_name": "housing for all", "short_description": "Housing for all", "long_description": "The quality of housing is the most visible aspect of poverty. In India\u2019s cities and villages, the poorest almost always live in makeshift or dilapidated homes, <a href='https:\/\/www.livemint.com\/Politics\/j5WIwii0cfNfIHZaDv3l3L\/pradhan-mantri-awas-yojana-urban-rural-housing-for-all.html' target='_blank'>which can be bad for their health and hurt their productivity <\/a>. Spending more on the Housing for All scheme could help address this.", "new allocation": "", "allocation": 28586, "FY19-20 (allocated)": 25853.26, "FY 18-19 (revised)": 26405.01, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "spend", "rank": 9, "category": "skill development", "item_name": "jobs and skill development", "short_description": "Spend more on jobs and skill development", "long_description": "India's unemployment rate is reportedly the highest in 45 years. One way to address this is to invest in greater training and skill development for job-seekers, as recommended by a <a href='https:\/\/www.msde.gov.in\/report-ssc.html' target='_blank'>2017 government appointed committee <\/a>.", "new allocation": "", "allocation": 8028, "FY19-20 (allocated)": 7260.44, "FY 18-19 (revised)": 6830.06, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "spend", "rank": 10, "category": "health insurance", "item_name": "health", "short_description": "Increase spending on Jan Arogya Yojana Ayushman Bharat", "long_description": "Lack of quality and affordable medical care has meant millions of Indians continue to remain vulnerable to health shocks. Increasing the spending on the Ayushman Bharat program could help improve the quality medical care to India's poorer citizens.", "new allocation": "", "allocation": 7076, "FY19-20 (allocated)": 6400, "FY 18-19 (revised)": 2400, "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe42.pdf" }, { "type": "spend", "rank": 11, "category": "income", "item_name": "basic income scheme", "short_description": "Launch a basic income scheme for the poorest 20 percent", "long_description": "Ahead of the 2019 elections, the Congress had proposed implementing the Nyuntam Aay Yojana (NYAY), a national basic income scheme providing Rs 6,000 per month to the poorest 20 percent in India. Many economists believe that a basic income scheme like this could increase consumption, improve financial inclusion and alleviate poverty.", "new allocation": "", "allocation": 409800, "FY19-20 (allocated)": "", "FY 18-19 (revised)": "", "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "ubi excel sheet" }, { "type": "spend", "rank": 12, "category": "justice", "item_name": "law and justice", "short_description": "Strengthen judicial infrastructure", "long_description": "The <a href='https:\/\/www.indiabudget.gov.in\/economicsurvey\/doc\/echapter.pdf' target='_blank'> 2018-19 Economic Survey <\/a> suggested that improving the capabilities of the lower judiciary could be the biggest aid to improving the ease of doing business in India. Spending more on courts could improve their infrastructure and productivity which could generate economy-wide benefits.", "new allocation": "", "allocation": 796, "FY19-20 (allocated)": 720, "FY 18-19 (revised)": "", "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "spend", "rank": 13, "category": "Agricultural Extension", "item_name": "farm extension training", "short_description": "Hire and train more farm extension workers", "long_description": "Farm extension workers are frontline workers of the agricultural research establishment, who desseminate research findings, and help farmers cope with the growing risks involved in farming. Their services are essential to raise farm incomes, and yet spending on the agricultural extension scheme has not gone up.", "new allocation": "", "allocation": 245, "FY19-20 (allocated)": 221.15, "FY 18-19 (revised)": "", "amount": ".5,1,3", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe2.pdf" }, { "type": "cut", "rank": 1, "category": "Energy and Climate change", "item_name": "fuel subsidies", "short_description": "Reduce fuel subsidies", "long_description": "India's fuel subsidies are <a href='https:\/\/www.livemint.com\/Opinion\/fURzNfqkjNe4sJOamyeCFN\/Who-benefits-from-fuel-subsidies.html' target='_blank'>fiscally expensive and socially regressive <\/a>. In per capita terms, India's top 10 percent households spend 20 more times on fuel than the poorest ten percent. Eliminating these subsidies could save the exchequer money and aid in the fight to stop climate change.", "new allocation": "", "allocation": 41439, "FY19-20 (allocated)": 37478, "FY 18-19 (revised)": 24833.18, "amount": ".25,.5,1", "reaction": "Eliminating fuel subsidies completely is likely to hit a section of the poor, who depend on kerosene.", "reaction_amount": 1, "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat7.pdf" }, { "type": "cut", "rank": 2, "category": "fertilizer", "item_name": "feriliser subsidies", "short_description": "Cut fertiliser subsidies", "long_description": "According to some economists, fertilizer subsidies are regressive, benefiting large farmers in irrigated parts of the country much more than small and marginal farmers in rain-fed parts of the country who need fertilizer the most.", "new allocation": "", "allocation": 88450, "FY19-20 (allocated)": 79996, "FY 18-19 (revised)": 70085.7, "amount": ".25,.5,1", "reaction": "Farmers are not going to be happy with fertiliser subisdy cuts, and they could make for inconvenient opponents come next election.", "reaction_amount": ".5,1", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat7.pdf" }, { "type": "cut", "rank": 3, "category": "Separation of powers", "item_name": "the MPLAD program", "short_description": "Scrap or cut back on the Member of Parliament Local Area Development (MPLAD) scheme", "long_description": "The Member of Parliament Local Area Development (MPLAD) scheme has been plagued by corruption ever since it started in 1993. Perhaps more importantly, it challenges the constitutional separation of duties of different arms of the sovereign. The MPLAD scheme \u201cseriously erode[s] the notion of separation of powers, as the legislator directly becomes the executive,\u201d the Second Administrative Reforms Commission <a href='http:\/\/arc.gov.in\/4threport.pdf' target='_blank'>said in 2007<\/a>.", "new allocation": "", "allocation": 4379, "FY19-20 (allocated)": 3960, "FY 18-19 (revised)": 3950, "amount": ".25,.5,1", "reaction": "Scrapping MPLAD is likely to upset your local representative. Be careful about making powerful enemies.", "reaction_amount": 1, "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4b.pdf" }, { "type": "cut", "rank": 4, "category": "arts and culture", "item_name": "promoting art and culture", "short_description": "Reduce support for promoting art and culture", "long_description": "As in many other economies, private firms and wealthy patrons should be roped in to promote the arts, allowing the state to exit from a non-core function.", "new allocation": "", "allocation": 3364, "FY19-20 (allocated)": 3042.35, "FY 18-19 (revised)": 2800, "amount": ".25,.5,1", "reaction": "There could be a public outcry if you eliminate support for arts and culture. Even though it is not much money, many citizens care deeply about public funding for arts.", "reaction_amount": 1, "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe17.pdf" }, { "type": "cut", "rank": 5, "category": "Scientific temper", "item_name": "the National AYUSH Mission", "short_description": "Scrap the National AYUSH Mission", "long_description": "The government's promotion of homeopathy is at odds with scientific evidence that disputes its efficacy. By eliminating budgetary support to this scheme, the government would help develop scientific temper, which is one of the fundamental duties of every Indian citizen, according to the Indian Constitution.", "new allocation": "", "allocation": 725, "FY19-20 (allocated)": 656, "FY 18-19 (revised)": 504.43, "amount": ".25,.5,1", "reaction": "You will displease fans of alternative medicine by cutting funds for the National Ayush Mission.", "reaction_amount": ".5,1", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe4.pdf" }, { "type": "cut", "rank": 6, "category": "Skill India", "item_name": "the Skill India Initiative", "short_description": "Reduce support for Skill India initiative (Pradhan Mantri Kaushal Vikas Yojana)", "long_description": "Amid a jobs crisis, many have suggested the flagship scheme under the Skill India program has failed to live up to expectations. In its 2017 report, a <a href='https:\/\/www.msde.gov.in\/report-ssc.html' target='_blank'>government-appointed committee led by Sharda Prasad <\/a> found that the targets under the program were too ambitious, and funds spent on the program were not subject to adequate monitoring. Reduced spending here could free up spending for other job-creating initiatives.", "new allocation": "", "allocation": 3305, "FY19-20 (allocated)": 2989.21, "FY 18-19 (revised)": 2820.06, "amount": ".25,.5,1", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe90.pdf" }, { "type": "cut", "rank": 7, "category": "Modernisation of railways", "item_name": "railways development", "short_description": "Dial back support for railways development", "long_description": "The government has been inefficient in running Indian Railways, and the rail system continues to depend on government largesse for modernisation as well as rountine mainentance. It is time to cut back budgetary support for the railways, and force it to raise its own resources.", "new allocation": "", "allocation": 75207, "FY19-20 (allocated)": 68018.67, "FY 18-19 (revised)": 55135, "amount": ".25,.5,1", "reaction": "Indian Railways is one of the largest employers in the world and a critical means of transport for poor Indians. Reducing the railway budget could inconvenience millions of Indians.", "reaction_amount": ".25,.5,1", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat3a.pdf" }, { "type": "cut", "rank": 8, "category": "Food and Nutrition", "item_name": "food subsidies", "short_description": "Slash food subsidies", "long_description": "Food subsidies are less regressive than fertilizer or petroleum subsidies but still suffer from inefficient management by the Food Corporation of India (FCI) and from leakages in the public distribution system (PDS). <a href='http:\/\/fci.gov.in\/app2\/webroot\/upload\/News\/Report%20of%20the%20High%20Level%20Committee%20on%20Reorienting%20the%20Role%20and%20Restructuring%20of%20FCI_English.pdf' target='_blank'> The Shanta Kumar Committee on food management reforms <\/a> estimated that moving away from food-based transfers to cash transfers in large cities alone could save the exchequer Rs 30,000 crore annually.", "new allocation": "", "allocation": 203689, "FY19-20 (allocated)": 184220, "FY 18-19 (revised)": 171298, "amount": ".25,.5,1", "reaction": "Major cuts to food subsidies will likely to hurt many poor households, which depend upon the public distribution system. People could starve.", "reaction_amount": ".5,1", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat7.pdf" }, { "type": "cut", "rank": 9, "category": "water", "item_name": "water", "short_description": "Cut down spending on Jal Shakti by 10 percent", "long_description": "The water ministry's flagship programs, and especially the Namami Gange program, have come under severe criticism for their <a href='https:\/\/www.livemint.com\/politics\/news\/a-cleaner-ganga-nda-s-unfulfilled-promise-1556462580465.html' target='_blank'>poor implementation <\/a>. Funds allocated to the ministry for such schemes remain underutilized while some environmentalists have condemned the government for turning Ganga into a \"source of earning money", "new allocation": "", "allocation": 3125, "FY19-20 (allocated)": 2826.159, "FY 18-19 (revised)": 2760.549, "amount": ".25,.5,1", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat3a.pdf" }, { "type": "cut", "rank": 10, "category": "smart city", "item_name": "smart cities", "short_description": "Scrap funding for Smart cities Mission", "long_description": "As India's teeming cities, struggle with basic issues of clean air and regular water supply <a href='https:\/\/www.livemint.com\/Politics\/sMVEQUQKo83bsG9C2De7RP\/Smart-Cities-Mission-is-too-projectbased-and-lacks-integrat.html' target='_blank'>some urban experts have questioned the usefulness of the Smart Cities Mission <\/a>. They argue that the mission has failed to address structural issues with Indian urbanization while only focusing on 100 of India's 4000-plus cities and towns.", "new allocation": "", "allocation": 15203, "FY19-20 (allocated)": 13750, "FY 18-19 (revised)": 12569.04, "amount": ".25,.5,1", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4a.pdf" }, { "type": "cut", "rank": 11, "category": "army", "item_name": "defence", "short_description": "Cut down on defence spending", "long_description": "India spends more than 2% of its GDP on defence. For a developing country, such as India, some argue that part of this money could be spent elsewhere on other pressing needs.", "new allocation": "", "allocation": 114322, "FY19-20 (allocated)": 103394.31, "FY 18-19 (revised)": "", "amount": ".25,.5,1", "reaction": "National security is a politically sensitive issue. And cutting defence spending could be seen as compromising on national security.", "reaction_amount": ".25,.5,1", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/sbe20.pdf" }, { "type": "cut", "rank": 12, "category": "loan", "item_name": "funding for micro enterprises", "short_description": "Scrap MUDRA Yojana", "long_description": "According to some critics, the scheme has created a headache banks due to the growing menace of NPAs. Poor underwriting and pressure to meet targets seem to have added to the problem. If not fixed, the scheme will <a href='https:\/\/www.livemint.com\/industry\/banking\/rbi-concerned-about-growing-stress-in-mudra-loans-says-deputy-governor-jain-11574752992888.html' target='_blank'>excaberate the bad loan problem. <\/a>.", "new allocation": "", "allocation": 564, "FY19-20 (allocated)": 510, "FY 18-19 (revised)": "", "amount": ".25,.5,1", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4b.pdf" }, { "type": "cut", "rank": 13, "category": "farmer insurance", "item_name": "crop insurance", "short_description": "Eliminate the crop insurance scheme", "long_description": "According to <a href='https:\/\/www.livemint.com\/news\/world\/crop-insurance-flaws-fuel-farm-distress-11574185759756.html' target='_blank'>reports <\/a>, few farmers are enrolling in the central government crop insurance scheme since it is plagued with several implementation challenges such as delays in payments and private insurers dropping out. Withdrawing the scheme could save money for productive rural spending.", "new allocation": "", "allocation": 15480, "FY19-20 (allocated)": 14000, "FY 18-19 (revised)": 12975.7, "amount": ".25,.5,1", "reaction": "", "reaction_amount": "", "source": "https:\/\/www.indiabudget.gov.in\/doc\/eb\/stat4b.pdf" }]

    jz.arr.propertyToNumber(c, "allocation");
    var d = jz.arr.sortBy(c.filter(function(t) { return "cut" == t.type }), "rank"),
        l = jz.arr.sortBy(c.filter(function(t) { return "spend" == t.type }), "rank");

    console.log("Hello");

    function u(t, e) {
        t.forEach(function(t, a) {
            $(".budget-items-" + e).append("<div data-item-name='" + t.item_name + "' data-reaction='" + t.reaction + "' data-reaction-amount='" + t.reaction_amount + "' data-allocation='" + t.allocation + "' data-type='" + e + "' data-index='" + a + "' class='budget-item budget-item-" + a + "'></div>");
            var n = ".budget-items-" + e + " .budget-item-" + a;
            $(n).append("<div class='budget-item-category'><img src='img/icons/" + jz.str.toSlugCase(t.category) + ".svg' /><div class='budget-item-category-whitespace'></div>"), $(n).append("<div class='budget-item-description'><p class='budget-item-short-description'>" + t.short_description + "</p><p class='budget-item-expand'>More information <i class='fa fa-caret-down' aria-hidden='true'></i></p><p class='budget-item-long-description hidden'>" + t.long_description + "</p><div class='budget-item-options'></div></div>");
            var i = jz.str.numberLakhs(t.allocation);
            $(n).append("<div class='budget-item-allocation'><p class='rupees'>Rupees</p><p class='number" + (i.length < 7 ? "" : i.length >= 7 && i.length < 10 ? " number-sm" : " number-xsm") + "'>" + i + "</p><p class='crore'>crore</p><div class='budget-item-allocation-whitespace'></div></div>");
            var o = { cut: { "option_.25": "Cut by a quarter", "option_.5": "Cut in half", option_1: "Eliminate" }, spend: { "option_.5": "Raise by 50%", option_1: "Double", option_3: "Quadruple" } };
            t.amount.split(",").forEach(function(a) { $(n + " .budget-item-options").append("<div class='budget-item-option clickable' data-proportion='" + a + "' data-amount='" + a * t.allocation + "'>" + o[e]["option_" + a] + "</div>") }), $(n + " .budget-item-options").append("<div class='budget-option-undo'><i class='fa fa-times' aria-hidden='true'></i> " + (r <= 480 ? "Remove" : "") + "</div>")
        })
    }
    u(d, "cut"), u(l, "spend"), $(document).on("click", ".budget-item-expand", function() {
        var t = $(this).next();
        t.hasClass("hidden") ? (t.slideDown(), t.removeClass("hidden"), $(this).html("Less information <i class='fa fa-caret-up' aria-hidden='true'></i>").addClass("active")) : (t.slideUp(), t.addClass("hidden"), $(this).html("More information <i class='fa fa-caret-down' aria-hidden='true'></i>").removeClass("active"))
    });
    for (var p = 30, m = 25, h = 0, g = 5, f = $("#budget-game").width() - h - g, y = 30, b = d3.select(".budget-scale").insert("svg", ":first-child").attr("width", f + h + g).attr("height", y + p + m).append("g").attr("transform", "translate(" + h + ", " + p + ")"), v = d3.scaleLinear().range([0, f]).domain([0, t]), w = b.append("rect").attr("class", "scale-rect scale-rect-deficit").attr("x", 0).attr("y", 0).attr("width", L).attr("height", y).style("fill", s.red), _ = b.append("rect").attr("class", "scale-rect scale-rect-cut").attr("x", B).attr("y", 0).attr("width", D).attr("height", y).style("fill", s.blue), k = b.append("rect").attr("class", "scale-rect scale-rect-spend").attr("x", q).attr("y", 0).attr("width", E).attr("height", y).style("fill", G), C = b.append("text").attr("class", "scale-text scale-deficit-text").attr("x", f).attr("y", 0).attr("dy", -12).style("text-anchor", "end").html(function() { if (r <= 480) return "Fiscal deficit: Rs <tspan class='amt'>" + jz.str.numberLakhs(t) + "</tspan> crore, <tspan class='pct-gdp'>" + +a.toFixed(1) + "</tspan><tspan>%</tspan> GDP"; return " The fiscal deficit should be capped at 3% of GDP for FY2021. Your current fiscal deficit is <tspan class='amt'>" + jz.str.numberLakhs(t) + "</tspan> crore, or <tspan class='pct-gdp'>" + +a.toFixed(1) + "</tspan><tspan>%</tspan> of GDP" }), x = b.append("polygon").attr("class", "scale-deficit-triangle").attr("points", function() { return I(f, "down") }), A = b.append("polyline").attr("class", "scale-savings-shape").attr("points", M).style("opacity", S), P = b.append("text").attr("class", "scale-savings-text scale-text").attr("x", f).attr("y", y + 20).html(function() { return "<tspan class='percent'>0.00</tspan><tspan>%</tspan> deficit <tspan class='increase-reduction'>reduction</tspan>" }).style("opacity", S), R = f / 20; R < f; R += f / 20) b.append("line").attr("x1", R).attr("y1", 0).attr("x2", R).attr("y2", y).style("stroke", "#fff").style("shape-rendering", "crispEdges");

    function M() {
        var e = y + 2,
            a = e + 5,
            n = v(o < t ? o : t),
            i = v(o < t ? t : o);
        return T([N([n, e]), N([n, a]), N([i, a]), N([i, e])])
    }

    function S() { return o == t ? 0 : 1 }

    function I(t, e) {
        var a = [t, "down" == e ? -7 : null],
            n = [a[0] + 5 / 1.5, a[1]],
            i = [a[0], a[1] + 5 * ("down" == e ? 1 : -1)];
        return T([N([a[0] - 5 / 1.5, a[1]]), N(n), N(i)])
    }

    function N(t) { return t.join(",") }

    function T(t) { return t.join(" ") }

    function j() {
        var r = a,
            s = t - n + i;
        n = z("cut"), i = z("spend"), a = (o = t - (n - i)) / e * 100, v.domain([0, o > t ? o : t]), w.transition().attr("width", L), x.transition().attr("points", function() { return I(v(o), "down") }), A.transition().attr("points", M).style("opacity", S), _.transition().attr("x", B).attr("width", D), k.transition().attr("x", q).attr("width", E).style("fill", G), C.transition().attr("x", function() {
            var e = C.node().getBoundingClientRect().width,
                a = v(t - o);
            return e > v(o) ? e : v(o) + (a > e ? e / 2 : 0)
        }).tween("tspan.amt", function() { var t = d3.interpolateNumber(s, o); return function(e) { d3.select(".scale-deficit-text tspan.amt").text(jz.str.numberLakhs(Math.round(t(e)))) } }).tween("tspan.pct", function() { var t = d3.interpolateNumber(r, a); return function(e) { d3.select(".scale-deficit-text tspan.pct-gdp").text(+t(e).toFixed(1)) } }), d3.select("tspan.percent").transition().tween("tspan", function() {
            var e = +d3.select(this).text(),
                a = +(o - t) / t * 100 * (o < t ? -1 : 1),
                n = d3.interpolateNumber(e, a);
            return function(t) { d3.select("tspan.percent").text(n(t).toFixed(1)) }
        }), P.transition().attr("x", function() {
            var e = v(o > t ? t : o),
                a = v(o > t ? o : t),
                n = (e + a) / 2,
                i = P.node().getBoundingClientRect().width;
            return f - n > i / 2 ? n + i / 2 : a
        }).style("opacity", S), d3.select("tspan.increase-reduction").text(function() { return o > t ? "increase" : "reduction" }), o > t && $(".budget-scale svg").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).removeClass("animated tada") })
    }

    function z(t) { var e = 0; return $(".budget-items-" + t + " .budget-item-option.clicked").each(function(t, a) { e += Number($(a).attr("data-amount")) }), e }

    function L() { return v(t) }

    function B() { return v(i > n ? t : t - n) }

    function D() { return v(i > n ? 0 : n) }

    function q() { return v(i > n ? t : t - n) }

    function E() { return v(i > n ? i - n : i) }

    function G() { return o >= t ? s.darkred : s.green }

    function F(t) {
        if ($(".tab-switch").removeClass("active"), $(".left-tabs .tab-" + t).addClass("active"), !$(".budget-section-" + t).hasClass("show")) {
            $(".budget-section").removeClass("show").addClass("hide"), $(".budget-section-" + t).removeClass("hide").addClass("show");
            var e = $(".budget-section-" + t).position().top,
                a = $(".budget-scale").height();
            $("html, body").animate({ scrollTop: e - a - 60 }, 250)
        }
        "submit" == t && Y()
    }

    function Y() {
        var e = m("cut"),
            a = m("spend"),
            r = function(t) { return 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : 3 == t ? "three" : 4 == t ? "four" : 5 == t ? "five" : 6 == t ? "six" : 7 == t ? "seven" : 8 == t ? "eight" : 9 == t ? "nine" : 10 == t ? "ten" : 11 == t ? "eleven" : "twelve" };
        if (0 == e.length && 0 == a.length) $(".budget-section-summary").html("You have not made any changes to the budget. Choose items to <span class='budget-section-switch color-blue' data-which='cut'>cut</span> or to <span class='budget-section-switch color-green' data-which='spend'>spend on</span>.");
        else {
            var s = function(t) { return jz.str.numberLakhs(+t.toFixed(1)) },
                c = o > t,
                d = (o - t) / t * 100,
                l = "<li>You <b>" + (c ? "increased" : "reduced") + "</b> the deficit by <b>Rs " + s(c ? o - t : t - o) + " crore</b>. That&rsquo;s a change of <b>" + d.toFixed(1) + "%</b>.</li>",
                u = "<li>You <span class='color-blue bold'>cut</span> <b class='color-blue'>" + r(e.length) + " item" + (1 == e.length ? "" : "s") + "</b> worth <b>Rs " + s(n) + " crore</b> and you <b class='color-green'>spent on " + r(a.length) + " item" + (1 == a.length ? "" : "s") + "</b> worth <b>Rs " + s(i) + " crore</b>.</li>";
            $(".budget-section-summary").empty(), $(".budget-section-summary").append("<ul>" + (l + u) + "</ul>"), $(".budget-section-summary").append("<div class='summary-head'>Cuts</div>"), $(".budget-section-summary").append("<ul class='summary-cuts'></ul>"), 0 == e.length ? $(".summary-cuts").append("<li>You did not cut anything.</li>") : e.forEach(function(t) { $(".summary-cuts").append("<li>You cut funding for <b>" + t.description + "</b> " + ("1" == t.proportion ? "completely" : "by " + (".5" == t.proportion ? "half" : "a quarter")) + ", saving <b>Rs " + s(+t.amount) + " crore</b>.</li>") }), $(".budget-section-summary").append("<div class='summary-head'>Spends</div>"), $(".budget-section-summary").append("<ul class='summary-spends'></ul>"), 0 == a.length ? $(".summary-spends").append("<li>You did not spend on anything.</li>") : a.forEach(function(t) { $(".summary-spends").append("<li>You " + ("1" == t.proportion ? "doubled" : "3" == t.proportion ? "quadrupled" : "increased") + " funding for <b>" + t.description + "</b>" + (".5" == t.proportion ? " by 50%" : "") + ", which cost <b>Rs " + s(+t.amount) + " crore</b>.</li>") }), $(".budget-section-summary").append("<div class='summary-head'>Public reactions</div>");
            var p = e.filter(function(t) { return -1 !== t.reaction_amount.split(",").indexOf(t.proportion) });
            $(".budget-section-summary").append("<ul class='summary-reactions'></ul>"), $(".summary-reactions").empty(), 0 == p.length && o < t ? $(".summary-reactions").append("<li>There are no serious reactions to your budget.</li>") : (o > t && $(".summary-reactions").append("<li>You increased the deficit, which can lead to higher taxes, higher inflation, or both.</li>"), p.forEach(function(t) { $(".summary-reactions").append("<li>" + t.reaction + "</li>") }))
        }

        function m(t, e) {
            e = [];
            return $(".budget-items-" + t).find(".budget-item-option.clicked").each(function(t, a) {
                var n, i, o, r;
                n = a, i = e, o = $(n).closest(".budget-item"), (r = {}).description = o.attr("data-item-name"), r.proportion = $(n).attr("data-proportion"), r.amount = $(n).attr("data-amount"), r.proportion_description = $(n).text(), r.reaction_amount = o.attr("data-reaction-amount"), r.reaction = o.attr("data-reaction"), i.push(r)
            }), e.forEach(function(e) { return e.type = t, e }), e
        }
    }
    $(document).on("click", ".budget-item-option", function() {
            var t = $(this).closest(".budget-item"),
                e = $(this).hasClass("clickable");
            t.find(".budget-item-option").removeClass("clicked").addClass("clickable"), e ? ($(this).removeClass("clickable").addClass("clicked"), $(this).closest(".budget-item-options").find(".budget-option-undo").css({ opacity: "1", cursor: "pointer", display: "inline" })) : $(this).closest(".budget-item-options").find(".budget-option-undo").css({ opacity: "0", cursor: "default", display: "none" }), j();
            var a = $(this).closest(".budget-items").attr("data-which"),
                n = t.attr("data-reaction"),
                i = t.attr("data-reaction-amount").split(","),
                o = $(this).attr("data-proportion");
            if ("cut" == a && "" !== n && -1 !== i.indexOf(o) && e) { vex.open({ unsafeContent: "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i><div class='exclamation'>" + jz.arr.random(["Careful!", "Watch out!", "Hey!", "Caution!", "Proceed with caution!", "Heads up!", "Reconsider?"]) + "</div><div class='reaction'>" + n + "</div>", showCloseButton: !0, escapeButtonCloses: !0, overlayClosesOnClick: !0 }) }
        }), $(".budget-option-undo").click(function() { $(this).closest(".budget-item-options").find(".budget-item-option.clicked").removeClass("clicked").addClass("clickable"), $(this).css({ opacity: "0", cursor: "default", display: "none" }), j(), Y() }),
        function(t, e, a, n, i) {
            var o = $(t).offset().top - e,
                r = $(window).scrollTop(),
                s = $(n).offset().top - i;

            function c(e, n) { e > n ? ($(t).addClass("fixed"), $("body").css("padding-top", a + $(t).height() + Number($(t).css("margin-bottom").split("px")[0]))) : ($(t).removeClass("fixed"), $("body").css("padding-top", "0px")) }

            function d(e, a) { e > a ? $(t).hide() : $(t).show() } c(r, o), d(r, s), $(window).scroll(function() { c(r = $(window).scrollTop(), o), d(r, s) })
        }(".budget-scale", 40, 15, ".budget-intro-bottom", $(".budget-scale").height() + $(".navbar").height()), $(".tab-switch").click(function() { F($(this).attr("data-which")) }), $(".budget-section-switch").click(function() { F($(this).attr("data-which")) }), $(".tab.trigger").click(function() {
            var t, e = $(this).attr("data-which");
            t = { reset: { message: "Are you sure you want to reset everything?", ok: function() { $(".budget-item-option.clicked").removeClass("clicked").addClass("clickable"), $(".budget-option-undo").css({ opacity: "0", cursor: "default", display: "none" }), j(), Y() } } } [e], vex.dialog.confirm({ message: t.message, callback: function(e) { e && t.ok() } })
        })
}
$(document).ready(go);