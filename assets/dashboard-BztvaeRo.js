var Kr = Object.defineProperty;
var Gr = (e, t, i) =>
  t in e
    ? Kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (e[t] = i);
var L = (e, t, i) => Gr(e, typeof t != "symbol" ? t + "" : t, i);
import {
  r as K,
  j as x,
  am as Ao,
  e as Zr,
  h as Qr,
  d as Jr,
  as as Un,
  an as ta,
} from "./index-NBfXeSsy.js";
import { h as Oo } from "./moment-C5S46NFB.js";
var ea = { value: () => {} };
function Lo() {
  for (var e = 0, t = arguments.length, i = {}, n; e < t; ++e) {
    if (!(n = arguments[e] + "") || n in i || /[\s.]/.test(n))
      throw new Error("illegal type: " + n);
    i[n] = [];
  }
  return new ci(i);
}
function ci(e) {
  this._ = e;
}
function ia(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (i) {
      var n = "",
        s = i.indexOf(".");
      if (
        (s >= 0 && ((n = i.slice(s + 1)), (i = i.slice(0, s))),
        i && !t.hasOwnProperty(i))
      )
        throw new Error("unknown type: " + i);
      return { type: i, name: n };
    });
}
ci.prototype = Lo.prototype = {
  constructor: ci,
  on: function (e, t) {
    var i = this._,
      n = ia(e + "", i),
      s,
      o = -1,
      r = n.length;
    if (arguments.length < 2) {
      for (; ++o < r; )
        if ((s = (e = n[o]).type) && (s = na(i[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++o < r; )
      if ((s = (e = n[o]).type)) i[s] = Xn(i[s], e.name, t);
      else if (t == null) for (s in i) i[s] = Xn(i[s], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var i in t) e[i] = t[i].slice();
    return new ci(e);
  },
  call: function (e, t) {
    if ((s = arguments.length - 2) > 0)
      for (var i = new Array(s), n = 0, s, o; n < s; ++n)
        i[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], n = 0, s = o.length; n < s; ++n) o[n].value.apply(t, i);
  },
  apply: function (e, t, i) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var n = this._[e], s = 0, o = n.length; s < o; ++s)
      n[s].value.apply(t, i);
  },
};
function na(e, t) {
  for (var i = 0, n = e.length, s; i < n; ++i)
    if ((s = e[i]).name === t) return s.value;
}
function Xn(e, t, i) {
  for (var n = 0, s = e.length; n < s; ++n)
    if (e[n].name === t) {
      (e[n] = ea), (e = e.slice(0, n).concat(e.slice(n + 1)));
      break;
    }
  return i != null && e.push({ name: t, value: i }), e;
}
var en = "http://www.w3.org/1999/xhtml";
const qn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: en,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Oi(e) {
  var t = (e += ""),
    i = t.indexOf(":");
  return (
    i >= 0 && (t = e.slice(0, i)) !== "xmlns" && (e = e.slice(i + 1)),
    qn.hasOwnProperty(t) ? { space: qn[t], local: e } : e
  );
}
function sa(e) {
  return function () {
    var t = this.ownerDocument,
      i = this.namespaceURI;
    return i === en && t.documentElement.namespaceURI === en
      ? t.createElement(e)
      : t.createElementNS(i, e);
  };
}
function oa(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Io(e) {
  var t = Oi(e);
  return (t.local ? oa : sa)(t);
}
function ra() {}
function Mn(e) {
  return e == null
    ? ra
    : function () {
        return this.querySelector(e);
      };
}
function aa(e) {
  typeof e != "function" && (e = Mn(e));
  for (var t = this._groups, i = t.length, n = new Array(i), s = 0; s < i; ++s)
    for (
      var o = t[s], r = o.length, a = (n[s] = new Array(r)), l, c, h = 0;
      h < r;
      ++h
    )
      (l = o[h]) &&
        (c = e.call(l, l.__data__, h, o)) &&
        ("__data__" in l && (c.__data__ = l.__data__), (a[h] = c));
  return new tt(n, this._parents);
}
function la(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ca() {
  return [];
}
function No(e) {
  return e == null
    ? ca
    : function () {
        return this.querySelectorAll(e);
      };
}
function ha(e) {
  return function () {
    return la(e.apply(this, arguments));
  };
}
function fa(e) {
  typeof e == "function" ? (e = ha(e)) : (e = No(e));
  for (var t = this._groups, i = t.length, n = [], s = [], o = 0; o < i; ++o)
    for (var r = t[o], a = r.length, l, c = 0; c < a; ++c)
      (l = r[c]) && (n.push(e.call(l, l.__data__, c, r)), s.push(l));
  return new tt(n, s);
}
function Eo(e) {
  return function () {
    return this.matches(e);
  };
}
function Ro(e) {
  return function (t) {
    return t.matches(e);
  };
}
var ua = Array.prototype.find;
function da(e) {
  return function () {
    return ua.call(this.children, e);
  };
}
function ga() {
  return this.firstElementChild;
}
function pa(e) {
  return this.select(e == null ? ga : da(typeof e == "function" ? e : Ro(e)));
}
var ma = Array.prototype.filter;
function _a() {
  return Array.from(this.children);
}
function xa(e) {
  return function () {
    return ma.call(this.children, e);
  };
}
function ba(e) {
  return this.selectAll(
    e == null ? _a : xa(typeof e == "function" ? e : Ro(e))
  );
}
function ya(e) {
  typeof e != "function" && (e = Eo(e));
  for (var t = this._groups, i = t.length, n = new Array(i), s = 0; s < i; ++s)
    for (var o = t[s], r = o.length, a = (n[s] = []), l, c = 0; c < r; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && a.push(l);
  return new tt(n, this._parents);
}
function Fo(e) {
  return new Array(e.length);
}
function va() {
  return new tt(this._enter || this._groups.map(Fo), this._parents);
}
function mi(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
mi.prototype = {
  constructor: mi,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function wa(e) {
  return function () {
    return e;
  };
}
function ka(e, t, i, n, s, o) {
  for (var r = 0, a, l = t.length, c = o.length; r < c; ++r)
    (a = t[r]) ? ((a.__data__ = o[r]), (n[r] = a)) : (i[r] = new mi(e, o[r]));
  for (; r < l; ++r) (a = t[r]) && (s[r] = a);
}
function Ma(e, t, i, n, s, o, r) {
  var a,
    l,
    c = new Map(),
    h = t.length,
    f = o.length,
    u = new Array(h),
    d;
  for (a = 0; a < h; ++a)
    (l = t[a]) &&
      ((u[a] = d = r.call(l, l.__data__, a, t) + ""),
      c.has(d) ? (s[a] = l) : c.set(d, l));
  for (a = 0; a < f; ++a)
    (d = r.call(e, o[a], a, o) + ""),
      (l = c.get(d))
        ? ((n[a] = l), (l.__data__ = o[a]), c.delete(d))
        : (i[a] = new mi(e, o[a]));
  for (a = 0; a < h; ++a) (l = t[a]) && c.get(u[a]) === l && (s[a] = l);
}
function Sa(e) {
  return e.__data__;
}
function Ca(e, t) {
  if (!arguments.length) return Array.from(this, Sa);
  var i = t ? Ma : ka,
    n = this._parents,
    s = this._groups;
  typeof e != "function" && (e = wa(e));
  for (
    var o = s.length,
      r = new Array(o),
      a = new Array(o),
      l = new Array(o),
      c = 0;
    c < o;
    ++c
  ) {
    var h = n[c],
      f = s[c],
      u = f.length,
      d = Ta(e.call(h, h && h.__data__, c, n)),
      g = d.length,
      p = (a[c] = new Array(g)),
      m = (r[c] = new Array(g)),
      _ = (l[c] = new Array(u));
    i(h, f, p, m, _, d, t);
    for (var y = 0, v = 0, w, b; y < g; ++y)
      if ((w = p[y])) {
        for (y >= v && (v = y + 1); !(b = m[v]) && ++v < g; );
        w._next = b || null;
      }
  }
  return (r = new tt(r, n)), (r._enter = a), (r._exit = l), r;
}
function Ta(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Da() {
  return new tt(this._exit || this._groups.map(Fo), this._parents);
}
function Pa(e, t, i) {
  var n = this.enter(),
    s = this,
    o = this.exit();
  return (
    typeof e == "function"
      ? ((n = e(n)), n && (n = n.selection()))
      : (n = n.append(e + "")),
    t != null && ((s = t(s)), s && (s = s.selection())),
    i == null ? o.remove() : i(o),
    n && s ? n.merge(s).order() : s
  );
}
function Aa(e) {
  for (
    var t = e.selection ? e.selection() : e,
      i = this._groups,
      n = t._groups,
      s = i.length,
      o = n.length,
      r = Math.min(s, o),
      a = new Array(s),
      l = 0;
    l < r;
    ++l
  )
    for (
      var c = i[l], h = n[l], f = c.length, u = (a[l] = new Array(f)), d, g = 0;
      g < f;
      ++g
    )
      (d = c[g] || h[g]) && (u[g] = d);
  for (; l < s; ++l) a[l] = i[l];
  return new tt(a, this._parents);
}
function Oa() {
  for (var e = this._groups, t = -1, i = e.length; ++t < i; )
    for (var n = e[t], s = n.length - 1, o = n[s], r; --s >= 0; )
      (r = n[s]) &&
        (o &&
          r.compareDocumentPosition(o) ^ 4 &&
          o.parentNode.insertBefore(r, o),
        (o = r));
  return this;
}
function La(e) {
  e || (e = Ia);
  function t(f, u) {
    return f && u ? e(f.__data__, u.__data__) : !f - !u;
  }
  for (
    var i = this._groups, n = i.length, s = new Array(n), o = 0;
    o < n;
    ++o
  ) {
    for (
      var r = i[o], a = r.length, l = (s[o] = new Array(a)), c, h = 0;
      h < a;
      ++h
    )
      (c = r[h]) && (l[h] = c);
    l.sort(t);
  }
  return new tt(s, this._parents).order();
}
function Ia(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Na() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function Ea() {
  return Array.from(this);
}
function Ra() {
  for (var e = this._groups, t = 0, i = e.length; t < i; ++t)
    for (var n = e[t], s = 0, o = n.length; s < o; ++s) {
      var r = n[s];
      if (r) return r;
    }
  return null;
}
function Fa() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function za() {
  return !this.node();
}
function Ba(e) {
  for (var t = this._groups, i = 0, n = t.length; i < n; ++i)
    for (var s = t[i], o = 0, r = s.length, a; o < r; ++o)
      (a = s[o]) && e.call(a, a.__data__, o, s);
  return this;
}
function $a(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function ja(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ha(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function Wa(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Va(e, t) {
  return function () {
    var i = t.apply(this, arguments);
    i == null ? this.removeAttribute(e) : this.setAttribute(e, i);
  };
}
function Ya(e, t) {
  return function () {
    var i = t.apply(this, arguments);
    i == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, i);
  };
}
function Ua(e, t) {
  var i = Oi(e);
  if (arguments.length < 2) {
    var n = this.node();
    return i.local ? n.getAttributeNS(i.space, i.local) : n.getAttribute(i);
  }
  return this.each(
    (t == null
      ? i.local
        ? ja
        : $a
      : typeof t == "function"
      ? i.local
        ? Ya
        : Va
      : i.local
      ? Wa
      : Ha)(i, t)
  );
}
function zo(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function Xa(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function qa(e, t, i) {
  return function () {
    this.style.setProperty(e, t, i);
  };
}
function Ka(e, t, i) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.style.removeProperty(e) : this.style.setProperty(e, n, i);
  };
}
function Ga(e, t, i) {
  return arguments.length > 1
    ? this.each(
        (t == null ? Xa : typeof t == "function" ? Ka : qa)(e, t, i ?? "")
      )
    : se(this.node(), e);
}
function se(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    zo(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function Za(e) {
  return function () {
    delete this[e];
  };
}
function Qa(e, t) {
  return function () {
    this[e] = t;
  };
}
function Ja(e, t) {
  return function () {
    var i = t.apply(this, arguments);
    i == null ? delete this[e] : (this[e] = i);
  };
}
function tl(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? Za : typeof t == "function" ? Ja : Qa)(e, t))
    : this.node()[e];
}
function Bo(e) {
  return e.trim().split(/^|\s+/);
}
function Sn(e) {
  return e.classList || new $o(e);
}
function $o(e) {
  (this._node = e), (this._names = Bo(e.getAttribute("class") || ""));
}
$o.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function jo(e, t) {
  for (var i = Sn(e), n = -1, s = t.length; ++n < s; ) i.add(t[n]);
}
function Ho(e, t) {
  for (var i = Sn(e), n = -1, s = t.length; ++n < s; ) i.remove(t[n]);
}
function el(e) {
  return function () {
    jo(this, e);
  };
}
function il(e) {
  return function () {
    Ho(this, e);
  };
}
function nl(e, t) {
  return function () {
    (t.apply(this, arguments) ? jo : Ho)(this, e);
  };
}
function sl(e, t) {
  var i = Bo(e + "");
  if (arguments.length < 2) {
    for (var n = Sn(this.node()), s = -1, o = i.length; ++s < o; )
      if (!n.contains(i[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? nl : t ? el : il)(i, t));
}
function ol() {
  this.textContent = "";
}
function rl(e) {
  return function () {
    this.textContent = e;
  };
}
function al(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ll(e) {
  return arguments.length
    ? this.each(e == null ? ol : (typeof e == "function" ? al : rl)(e))
    : this.node().textContent;
}
function cl() {
  this.innerHTML = "";
}
function hl(e) {
  return function () {
    this.innerHTML = e;
  };
}
function fl(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ul(e) {
  return arguments.length
    ? this.each(e == null ? cl : (typeof e == "function" ? fl : hl)(e))
    : this.node().innerHTML;
}
function dl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function gl() {
  return this.each(dl);
}
function pl() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ml() {
  return this.each(pl);
}
function _l(e) {
  var t = typeof e == "function" ? e : Io(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function xl() {
  return null;
}
function bl(e, t) {
  var i = typeof e == "function" ? e : Io(e),
    n = t == null ? xl : typeof t == "function" ? t : Mn(t);
  return this.select(function () {
    return this.insertBefore(
      i.apply(this, arguments),
      n.apply(this, arguments) || null
    );
  });
}
function yl() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function vl() {
  return this.each(yl);
}
function wl() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function kl() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ml(e) {
  return this.select(e ? kl : wl);
}
function Sl(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Cl(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function Tl(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var i = "",
        n = t.indexOf(".");
      return (
        n >= 0 && ((i = t.slice(n + 1)), (t = t.slice(0, n))),
        { type: t, name: i }
      );
    });
}
function Dl(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var i = 0, n = -1, s = t.length, o; i < s; ++i)
        (o = t[i]),
          (!e.type || o.type === e.type) && o.name === e.name
            ? this.removeEventListener(o.type, o.listener, o.options)
            : (t[++n] = o);
      ++n ? (t.length = n) : delete this.__on;
    }
  };
}
function Pl(e, t, i) {
  return function () {
    var n = this.__on,
      s,
      o = Cl(t);
    if (n) {
      for (var r = 0, a = n.length; r < a; ++r)
        if ((s = n[r]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options),
            this.addEventListener(s.type, (s.listener = o), (s.options = i)),
            (s.value = t);
          return;
        }
    }
    this.addEventListener(e.type, o, i),
      (s = { type: e.type, name: e.name, value: t, listener: o, options: i }),
      n ? n.push(s) : (this.__on = [s]);
  };
}
function Al(e, t, i) {
  var n = Tl(e + ""),
    s,
    o = n.length,
    r;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, h; l < c; ++l)
        for (s = 0, h = a[l]; s < o; ++s)
          if ((r = n[s]).type === h.type && r.name === h.name) return h.value;
    }
    return;
  }
  for (a = t ? Pl : Dl, s = 0; s < o; ++s) this.each(a(n[s], t, i));
  return this;
}
function Wo(e, t, i) {
  var n = zo(e),
    s = n.CustomEvent;
  typeof s == "function"
    ? (s = new s(t, i))
    : ((s = n.document.createEvent("Event")),
      i
        ? (s.initEvent(t, i.bubbles, i.cancelable), (s.detail = i.detail))
        : s.initEvent(t, !1, !1)),
    e.dispatchEvent(s);
}
function Ol(e, t) {
  return function () {
    return Wo(this, e, t);
  };
}
function Ll(e, t) {
  return function () {
    return Wo(this, e, t.apply(this, arguments));
  };
}
function Il(e, t) {
  return this.each((typeof t == "function" ? Ll : Ol)(e, t));
}
function* Nl() {
  for (var e = this._groups, t = 0, i = e.length; t < i; ++t)
    for (var n = e[t], s = 0, o = n.length, r; s < o; ++s)
      (r = n[s]) && (yield r);
}
var Vo = [null];
function tt(e, t) {
  (this._groups = e), (this._parents = t);
}
function $e() {
  return new tt([[document.documentElement]], Vo);
}
function El() {
  return this;
}
tt.prototype = $e.prototype = {
  constructor: tt,
  select: aa,
  selectAll: fa,
  selectChild: pa,
  selectChildren: ba,
  filter: ya,
  data: Ca,
  enter: va,
  exit: Da,
  join: Pa,
  merge: Aa,
  selection: El,
  order: Oa,
  sort: La,
  call: Na,
  nodes: Ea,
  node: Ra,
  size: Fa,
  empty: za,
  each: Ba,
  attr: Ua,
  style: Ga,
  property: tl,
  classed: sl,
  text: ll,
  html: ul,
  raise: gl,
  lower: ml,
  append: _l,
  insert: bl,
  remove: vl,
  clone: Ml,
  datum: Sl,
  on: Al,
  dispatch: Il,
  [Symbol.iterator]: Nl,
};
function he(e) {
  return typeof e == "string"
    ? new tt([[document.querySelector(e)]], [document.documentElement])
    : new tt([[e]], Vo);
}
function Cn(e, t, i) {
  (e.prototype = t.prototype = i), (i.constructor = e);
}
function Yo(e, t) {
  var i = Object.create(e.prototype);
  for (var n in t) i[n] = t[n];
  return i;
}
function je() {}
var Pe = 0.7,
  _i = 1 / Pe,
  ie = "\\s*([+-]?\\d+)\\s*",
  Ae = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Rl = /^#([0-9a-f]{3,8})$/,
  Fl = new RegExp(`^rgb\\(${ie},${ie},${ie}\\)$`),
  zl = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),
  Bl = new RegExp(`^rgba\\(${ie},${ie},${ie},${Ae}\\)$`),
  $l = new RegExp(`^rgba\\(${bt},${bt},${bt},${Ae}\\)$`),
  jl = new RegExp(`^hsl\\(${Ae},${bt},${bt}\\)$`),
  Hl = new RegExp(`^hsla\\(${Ae},${bt},${bt},${Ae}\\)$`),
  Kn = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Cn(je, Oe, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Gn,
  formatHex: Gn,
  formatHex8: Wl,
  formatHsl: Vl,
  formatRgb: Zn,
  toString: Zn,
});
function Gn() {
  return this.rgb().formatHex();
}
function Wl() {
  return this.rgb().formatHex8();
}
function Vl() {
  return Uo(this).formatHsl();
}
function Zn() {
  return this.rgb().formatRgb();
}
function Oe(e) {
  var t, i;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = Rl.exec(e))
      ? ((i = t[1].length),
        (t = parseInt(t[1], 16)),
        i === 6
          ? Qn(t)
          : i === 3
          ? new J(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : i === 8
          ? Ve(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : i === 4
          ? Ve(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = Fl.exec(e))
      ? new J(t[1], t[2], t[3], 1)
      : (t = zl.exec(e))
      ? new J((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = Bl.exec(e))
      ? Ve(t[1], t[2], t[3], t[4])
      : (t = $l.exec(e))
      ? Ve((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = jl.exec(e))
      ? es(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = Hl.exec(e))
      ? es(t[1], t[2] / 100, t[3] / 100, t[4])
      : Kn.hasOwnProperty(e)
      ? Qn(Kn[e])
      : e === "transparent"
      ? new J(NaN, NaN, NaN, 0)
      : null
  );
}
function Qn(e) {
  return new J((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Ve(e, t, i, n) {
  return n <= 0 && (e = t = i = NaN), new J(e, t, i, n);
}
function Yl(e) {
  return (
    e instanceof je || (e = Oe(e)),
    e ? ((e = e.rgb()), new J(e.r, e.g, e.b, e.opacity)) : new J()
  );
}
function nn(e, t, i, n) {
  return arguments.length === 1 ? Yl(e) : new J(e, t, i, n ?? 1);
}
function J(e, t, i, n) {
  (this.r = +e), (this.g = +t), (this.b = +i), (this.opacity = +n);
}
Cn(
  J,
  nn,
  Yo(je, {
    brighter(e) {
      return (
        (e = e == null ? _i : Math.pow(_i, e)),
        new J(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Pe : Math.pow(Pe, e)),
        new J(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new J(qt(this.r), qt(this.g), qt(this.b), xi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Jn,
    formatHex: Jn,
    formatHex8: Ul,
    formatRgb: ts,
    toString: ts,
  })
);
function Jn() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}`;
}
function Ul() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}${Yt(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function ts() {
  const e = xi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qt(this.r)}, ${qt(this.g)}, ${qt(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function xi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Yt(e) {
  return (e = qt(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function es(e, t, i, n) {
  return (
    n <= 0
      ? (e = t = i = NaN)
      : i <= 0 || i >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new ht(e, t, i, n)
  );
}
function Uo(e) {
  if (e instanceof ht) return new ht(e.h, e.s, e.l, e.opacity);
  if ((e instanceof je || (e = Oe(e)), !e)) return new ht();
  if (e instanceof ht) return e;
  e = e.rgb();
  var t = e.r / 255,
    i = e.g / 255,
    n = e.b / 255,
    s = Math.min(t, i, n),
    o = Math.max(t, i, n),
    r = NaN,
    a = o - s,
    l = (o + s) / 2;
  return (
    a
      ? (t === o
          ? (r = (i - n) / a + (i < n) * 6)
          : i === o
          ? (r = (n - t) / a + 2)
          : (r = (t - i) / a + 4),
        (a /= l < 0.5 ? o + s : 2 - o - s),
        (r *= 60))
      : (a = l > 0 && l < 1 ? 0 : r),
    new ht(r, a, l, e.opacity)
  );
}
function Xl(e, t, i, n) {
  return arguments.length === 1 ? Uo(e) : new ht(e, t, i, n ?? 1);
}
function ht(e, t, i, n) {
  (this.h = +e), (this.s = +t), (this.l = +i), (this.opacity = +n);
}
Cn(
  ht,
  Xl,
  Yo(je, {
    brighter(e) {
      return (
        (e = e == null ? _i : Math.pow(_i, e)),
        new ht(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Pe : Math.pow(Pe, e)),
        new ht(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        i = this.l,
        n = i + (i < 0.5 ? i : 1 - i) * t,
        s = 2 * i - n;
      return new J(
        Hi(e >= 240 ? e - 240 : e + 120, s, n),
        Hi(e, s, n),
        Hi(e < 120 ? e + 240 : e - 120, s, n),
        this.opacity
      );
    },
    clamp() {
      return new ht(is(this.h), Ye(this.s), Ye(this.l), xi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = xi(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${is(this.h)}, ${
        Ye(this.s) * 100
      }%, ${Ye(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function is(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Ye(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hi(e, t, i) {
  return (
    (e < 60
      ? t + ((i - t) * e) / 60
      : e < 180
      ? i
      : e < 240
      ? t + ((i - t) * (240 - e)) / 60
      : t) * 255
  );
}
const Xo = (e) => () => e;
function ql(e, t) {
  return function (i) {
    return e + i * t;
  };
}
function Kl(e, t, i) {
  return (
    (e = Math.pow(e, i)),
    (t = Math.pow(t, i) - e),
    (i = 1 / i),
    function (n) {
      return Math.pow(e + n * t, i);
    }
  );
}
function Gl(e) {
  return (e = +e) == 1
    ? qo
    : function (t, i) {
        return i - t ? Kl(t, i, e) : Xo(isNaN(t) ? i : t);
      };
}
function qo(e, t) {
  var i = t - e;
  return i ? ql(e, i) : Xo(isNaN(e) ? t : e);
}
const ns = (function e(t) {
  var i = Gl(t);
  function n(s, o) {
    var r = i((s = nn(s)).r, (o = nn(o)).r),
      a = i(s.g, o.g),
      l = i(s.b, o.b),
      c = qo(s.opacity, o.opacity);
    return function (h) {
      return (
        (s.r = r(h)), (s.g = a(h)), (s.b = l(h)), (s.opacity = c(h)), s + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function It(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (i) {
      return e * (1 - i) + t * i;
    }
  );
}
var sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Wi = new RegExp(sn.source, "g");
function Zl(e) {
  return function () {
    return e;
  };
}
function Ql(e) {
  return function (t) {
    return e(t) + "";
  };
}
function Jl(e, t) {
  var i = (sn.lastIndex = Wi.lastIndex = 0),
    n,
    s,
    o,
    r = -1,
    a = [],
    l = [];
  for (e = e + "", t = t + ""; (n = sn.exec(e)) && (s = Wi.exec(t)); )
    (o = s.index) > i &&
      ((o = t.slice(i, o)), a[r] ? (a[r] += o) : (a[++r] = o)),
      (n = n[0]) === (s = s[0])
        ? a[r]
          ? (a[r] += s)
          : (a[++r] = s)
        : ((a[++r] = null), l.push({ i: r, x: It(n, s) })),
      (i = Wi.lastIndex);
  return (
    i < t.length && ((o = t.slice(i)), a[r] ? (a[r] += o) : (a[++r] = o)),
    a.length < 2
      ? l[0]
        ? Ql(l[0].x)
        : Zl(t)
      : ((t = l.length),
        function (c) {
          for (var h = 0, f; h < t; ++h) a[(f = l[h]).i] = f.x(c);
          return a.join("");
        })
  );
}
var ss = 180 / Math.PI,
  on = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Ko(e, t, i, n, s, o) {
  var r, a, l;
  return (
    (r = Math.sqrt(e * e + t * t)) && ((e /= r), (t /= r)),
    (l = e * i + t * n) && ((i -= e * l), (n -= t * l)),
    (a = Math.sqrt(i * i + n * n)) && ((i /= a), (n /= a), (l /= a)),
    e * n < t * i && ((e = -e), (t = -t), (l = -l), (r = -r)),
    {
      translateX: s,
      translateY: o,
      rotate: Math.atan2(t, e) * ss,
      skewX: Math.atan(l) * ss,
      scaleX: r,
      scaleY: a,
    }
  );
}
var Ue;
function tc(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + ""
  );
  return t.isIdentity ? on : Ko(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ec(e) {
  return e == null ||
    (Ue || (Ue = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Ue.setAttribute("transform", e),
    !(e = Ue.transform.baseVal.consolidate()))
    ? on
    : ((e = e.matrix), Ko(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Go(e, t, i, n) {
  function s(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, h, f, u, d, g) {
    if (c !== f || h !== u) {
      var p = d.push("translate(", null, t, null, i);
      g.push({ i: p - 4, x: It(c, f) }, { i: p - 2, x: It(h, u) });
    } else (f || u) && d.push("translate(" + f + t + u + i);
  }
  function r(c, h, f, u) {
    c !== h
      ? (c - h > 180 ? (h += 360) : h - c > 180 && (c += 360),
        u.push({ i: f.push(s(f) + "rotate(", null, n) - 2, x: It(c, h) }))
      : h && f.push(s(f) + "rotate(" + h + n);
  }
  function a(c, h, f, u) {
    c !== h
      ? u.push({ i: f.push(s(f) + "skewX(", null, n) - 2, x: It(c, h) })
      : h && f.push(s(f) + "skewX(" + h + n);
  }
  function l(c, h, f, u, d, g) {
    if (c !== f || h !== u) {
      var p = d.push(s(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: It(c, f) }, { i: p - 2, x: It(h, u) });
    } else (f !== 1 || u !== 1) && d.push(s(d) + "scale(" + f + "," + u + ")");
  }
  return function (c, h) {
    var f = [],
      u = [];
    return (
      (c = e(c)),
      (h = e(h)),
      o(c.translateX, c.translateY, h.translateX, h.translateY, f, u),
      r(c.rotate, h.rotate, f, u),
      a(c.skewX, h.skewX, f, u),
      l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, f, u),
      (c = h = null),
      function (d) {
        for (var g = -1, p = u.length, m; ++g < p; ) f[(m = u[g]).i] = m.x(d);
        return f.join("");
      }
    );
  };
}
var ic = Go(tc, "px, ", "px)", "deg)"),
  nc = Go(ec, ", ", ")", ")"),
  oe = 0,
  _e = 0,
  fe = 0,
  Zo = 1e3,
  bi,
  xe,
  yi = 0,
  Gt = 0,
  Li = 0,
  Le = typeof performance == "object" && performance.now ? performance : Date,
  Qo =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Tn() {
  return Gt || (Qo(sc), (Gt = Le.now() + Li));
}
function sc() {
  Gt = 0;
}
function vi() {
  this._call = this._time = this._next = null;
}
vi.prototype = Jo.prototype = {
  constructor: vi,
  restart: function (e, t, i) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    (i = (i == null ? Tn() : +i) + (t == null ? 0 : +t)),
      !this._next &&
        xe !== this &&
        (xe ? (xe._next = this) : (bi = this), (xe = this)),
      (this._call = e),
      (this._time = i),
      rn();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), rn());
  },
};
function Jo(e, t, i) {
  var n = new vi();
  return n.restart(e, t, i), n;
}
function oc() {
  Tn(), ++oe;
  for (var e = bi, t; e; )
    (t = Gt - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --oe;
}
function os() {
  (Gt = (yi = Le.now()) + Li), (oe = _e = 0);
  try {
    oc();
  } finally {
    (oe = 0), ac(), (Gt = 0);
  }
}
function rc() {
  var e = Le.now(),
    t = e - yi;
  t > Zo && ((Li -= t), (yi = e));
}
function ac() {
  for (var e, t = bi, i, n = 1 / 0; t; )
    t._call
      ? (n > t._time && (n = t._time), (e = t), (t = t._next))
      : ((i = t._next), (t._next = null), (t = e ? (e._next = i) : (bi = i)));
  (xe = e), rn(n);
}
function rn(e) {
  if (!oe) {
    _e && (_e = clearTimeout(_e));
    var t = e - Gt;
    t > 24
      ? (e < 1 / 0 && (_e = setTimeout(os, e - Le.now() - Li)),
        fe && (fe = clearInterval(fe)))
      : (fe || ((yi = Le.now()), (fe = setInterval(rc, Zo))), (oe = 1), Qo(os));
  }
}
function rs(e, t, i) {
  var n = new vi();
  return (
    (t = t == null ? 0 : +t),
    n.restart(
      (s) => {
        n.stop(), e(s + t);
      },
      t,
      i
    ),
    n
  );
}
var lc = Lo("start", "end", "cancel", "interrupt"),
  cc = [],
  tr = 0,
  as = 1,
  an = 2,
  hi = 3,
  ls = 4,
  ln = 5,
  fi = 6;
function Ii(e, t, i, n, s, o) {
  var r = e.__transition;
  if (!r) e.__transition = {};
  else if (i in r) return;
  hc(e, i, {
    name: t,
    index: n,
    group: s,
    on: lc,
    tween: cc,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: tr,
  });
}
function Dn(e, t) {
  var i = dt(e, t);
  if (i.state > tr) throw new Error("too late; already scheduled");
  return i;
}
function yt(e, t) {
  var i = dt(e, t);
  if (i.state > hi) throw new Error("too late; already running");
  return i;
}
function dt(e, t) {
  var i = e.__transition;
  if (!i || !(i = i[t])) throw new Error("transition not found");
  return i;
}
function hc(e, t, i) {
  var n = e.__transition,
    s;
  (n[t] = i), (i.timer = Jo(o, 0, i.time));
  function o(c) {
    (i.state = as),
      i.timer.restart(r, i.delay, i.time),
      i.delay <= c && r(c - i.delay);
  }
  function r(c) {
    var h, f, u, d;
    if (i.state !== as) return l();
    for (h in n)
      if (((d = n[h]), d.name === i.name)) {
        if (d.state === hi) return rs(r);
        d.state === ls
          ? ((d.state = fi),
            d.timer.stop(),
            d.on.call("interrupt", e, e.__data__, d.index, d.group),
            delete n[h])
          : +h < t &&
            ((d.state = fi),
            d.timer.stop(),
            d.on.call("cancel", e, e.__data__, d.index, d.group),
            delete n[h]);
      }
    if (
      (rs(function () {
        i.state === hi &&
          ((i.state = ls), i.timer.restart(a, i.delay, i.time), a(c));
      }),
      (i.state = an),
      i.on.call("start", e, e.__data__, i.index, i.group),
      i.state === an)
    ) {
      for (
        i.state = hi, s = new Array((u = i.tween.length)), h = 0, f = -1;
        h < u;
        ++h
      )
        (d = i.tween[h].value.call(e, e.__data__, i.index, i.group)) &&
          (s[++f] = d);
      s.length = f + 1;
    }
  }
  function a(c) {
    for (
      var h =
          c < i.duration
            ? i.ease.call(null, c / i.duration)
            : (i.timer.restart(l), (i.state = ln), 1),
        f = -1,
        u = s.length;
      ++f < u;

    )
      s[f].call(e, h);
    i.state === ln && (i.on.call("end", e, e.__data__, i.index, i.group), l());
  }
  function l() {
    (i.state = fi), i.timer.stop(), delete n[t];
    for (var c in n) return;
    delete e.__transition;
  }
}
function fc(e, t) {
  var i = e.__transition,
    n,
    s,
    o = !0,
    r;
  if (i) {
    t = t == null ? null : t + "";
    for (r in i) {
      if ((n = i[r]).name !== t) {
        o = !1;
        continue;
      }
      (s = n.state > an && n.state < ln),
        (n.state = fi),
        n.timer.stop(),
        n.on.call(s ? "interrupt" : "cancel", e, e.__data__, n.index, n.group),
        delete i[r];
    }
    o && delete e.__transition;
  }
}
function uc(e) {
  return this.each(function () {
    fc(this, e);
  });
}
function dc(e, t) {
  var i, n;
  return function () {
    var s = yt(this, e),
      o = s.tween;
    if (o !== i) {
      n = i = o;
      for (var r = 0, a = n.length; r < a; ++r)
        if (n[r].name === t) {
          (n = n.slice()), n.splice(r, 1);
          break;
        }
    }
    s.tween = n;
  };
}
function gc(e, t, i) {
  var n, s;
  if (typeof i != "function") throw new Error();
  return function () {
    var o = yt(this, e),
      r = o.tween;
    if (r !== n) {
      s = (n = r).slice();
      for (var a = { name: t, value: i }, l = 0, c = s.length; l < c; ++l)
        if (s[l].name === t) {
          s[l] = a;
          break;
        }
      l === c && s.push(a);
    }
    o.tween = s;
  };
}
function pc(e, t) {
  var i = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var n = dt(this.node(), i).tween, s = 0, o = n.length, r; s < o; ++s)
      if ((r = n[s]).name === e) return r.value;
    return null;
  }
  return this.each((t == null ? dc : gc)(i, e, t));
}
function Pn(e, t, i) {
  var n = e._id;
  return (
    e.each(function () {
      var s = yt(this, n);
      (s.value || (s.value = {}))[t] = i.apply(this, arguments);
    }),
    function (s) {
      return dt(s, n).value[t];
    }
  );
}
function er(e, t) {
  var i;
  return (
    typeof t == "number"
      ? It
      : t instanceof Oe
      ? ns
      : (i = Oe(t))
      ? ((t = i), ns)
      : Jl
  )(e, t);
}
function mc(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function _c(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function xc(e, t, i) {
  var n,
    s = i + "",
    o;
  return function () {
    var r = this.getAttribute(e);
    return r === s ? null : r === n ? o : (o = t((n = r), i));
  };
}
function bc(e, t, i) {
  var n,
    s = i + "",
    o;
  return function () {
    var r = this.getAttributeNS(e.space, e.local);
    return r === s ? null : r === n ? o : (o = t((n = r), i));
  };
}
function yc(e, t, i) {
  var n, s, o;
  return function () {
    var r,
      a = i(this),
      l;
    return a == null
      ? void this.removeAttribute(e)
      : ((r = this.getAttribute(e)),
        (l = a + ""),
        r === l
          ? null
          : r === n && l === s
          ? o
          : ((s = l), (o = t((n = r), a))));
  };
}
function vc(e, t, i) {
  var n, s, o;
  return function () {
    var r,
      a = i(this),
      l;
    return a == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((r = this.getAttributeNS(e.space, e.local)),
        (l = a + ""),
        r === l
          ? null
          : r === n && l === s
          ? o
          : ((s = l), (o = t((n = r), a))));
  };
}
function wc(e, t) {
  var i = Oi(e),
    n = i === "transform" ? nc : er;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (i.local ? vc : yc)(i, n, Pn(this, "attr." + e, t))
      : t == null
      ? (i.local ? _c : mc)(i)
      : (i.local ? bc : xc)(i, n, t)
  );
}
function kc(e, t) {
  return function (i) {
    this.setAttribute(e, t.call(this, i));
  };
}
function Mc(e, t) {
  return function (i) {
    this.setAttributeNS(e.space, e.local, t.call(this, i));
  };
}
function Sc(e, t) {
  var i, n;
  function s() {
    var o = t.apply(this, arguments);
    return o !== n && (i = (n = o) && Mc(e, o)), i;
  }
  return (s._value = t), s;
}
function Cc(e, t) {
  var i, n;
  function s() {
    var o = t.apply(this, arguments);
    return o !== n && (i = (n = o) && kc(e, o)), i;
  }
  return (s._value = t), s;
}
function Tc(e, t) {
  var i = "attr." + e;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  var n = Oi(e);
  return this.tween(i, (n.local ? Sc : Cc)(n, t));
}
function Dc(e, t) {
  return function () {
    Dn(this, e).delay = +t.apply(this, arguments);
  };
}
function Pc(e, t) {
  return (
    (t = +t),
    function () {
      Dn(this, e).delay = t;
    }
  );
}
function Ac(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? Dc : Pc)(t, e))
    : dt(this.node(), t).delay;
}
function Oc(e, t) {
  return function () {
    yt(this, e).duration = +t.apply(this, arguments);
  };
}
function Lc(e, t) {
  return (
    (t = +t),
    function () {
      yt(this, e).duration = t;
    }
  );
}
function Ic(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? Oc : Lc)(t, e))
    : dt(this.node(), t).duration;
}
function Nc(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    yt(this, e).ease = t;
  };
}
function Ec(e) {
  var t = this._id;
  return arguments.length ? this.each(Nc(t, e)) : dt(this.node(), t).ease;
}
function Rc(e, t) {
  return function () {
    var i = t.apply(this, arguments);
    if (typeof i != "function") throw new Error();
    yt(this, e).ease = i;
  };
}
function Fc(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Rc(this._id, e));
}
function zc(e) {
  typeof e != "function" && (e = Eo(e));
  for (var t = this._groups, i = t.length, n = new Array(i), s = 0; s < i; ++s)
    for (var o = t[s], r = o.length, a = (n[s] = []), l, c = 0; c < r; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && a.push(l);
  return new Pt(n, this._parents, this._name, this._id);
}
function Bc(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      i = e._groups,
      n = t.length,
      s = i.length,
      o = Math.min(n, s),
      r = new Array(n),
      a = 0;
    a < o;
    ++a
  )
    for (
      var l = t[a], c = i[a], h = l.length, f = (r[a] = new Array(h)), u, d = 0;
      d < h;
      ++d
    )
      (u = l[d] || c[d]) && (f[d] = u);
  for (; a < n; ++a) r[a] = t[a];
  return new Pt(r, this._parents, this._name, this._id);
}
function $c(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var i = t.indexOf(".");
      return i >= 0 && (t = t.slice(0, i)), !t || t === "start";
    });
}
function jc(e, t, i) {
  var n,
    s,
    o = $c(t) ? Dn : yt;
  return function () {
    var r = o(this, e),
      a = r.on;
    a !== n && (s = (n = a).copy()).on(t, i), (r.on = s);
  };
}
function Hc(e, t) {
  var i = this._id;
  return arguments.length < 2
    ? dt(this.node(), i).on.on(e)
    : this.each(jc(i, e, t));
}
function Wc(e) {
  return function () {
    var t = this.parentNode;
    for (var i in this.__transition) if (+i !== e) return;
    t && t.removeChild(this);
  };
}
function Vc() {
  return this.on("end.remove", Wc(this._id));
}
function Yc(e) {
  var t = this._name,
    i = this._id;
  typeof e != "function" && (e = Mn(e));
  for (var n = this._groups, s = n.length, o = new Array(s), r = 0; r < s; ++r)
    for (
      var a = n[r], l = a.length, c = (o[r] = new Array(l)), h, f, u = 0;
      u < l;
      ++u
    )
      (h = a[u]) &&
        (f = e.call(h, h.__data__, u, a)) &&
        ("__data__" in h && (f.__data__ = h.__data__),
        (c[u] = f),
        Ii(c[u], t, i, u, c, dt(h, i)));
  return new Pt(o, this._parents, t, i);
}
function Uc(e) {
  var t = this._name,
    i = this._id;
  typeof e != "function" && (e = No(e));
  for (var n = this._groups, s = n.length, o = [], r = [], a = 0; a < s; ++a)
    for (var l = n[a], c = l.length, h, f = 0; f < c; ++f)
      if ((h = l[f])) {
        for (
          var u = e.call(h, h.__data__, f, l),
            d,
            g = dt(h, i),
            p = 0,
            m = u.length;
          p < m;
          ++p
        )
          (d = u[p]) && Ii(d, t, i, p, u, g);
        o.push(u), r.push(h);
      }
  return new Pt(o, r, t, i);
}
var Xc = $e.prototype.constructor;
function qc() {
  return new Xc(this._groups, this._parents);
}
function Kc(e, t) {
  var i, n, s;
  return function () {
    var o = se(this, e),
      r = (this.style.removeProperty(e), se(this, e));
    return o === r ? null : o === i && r === n ? s : (s = t((i = o), (n = r)));
  };
}
function ir(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Gc(e, t, i) {
  var n,
    s = i + "",
    o;
  return function () {
    var r = se(this, e);
    return r === s ? null : r === n ? o : (o = t((n = r), i));
  };
}
function Zc(e, t, i) {
  var n, s, o;
  return function () {
    var r = se(this, e),
      a = i(this),
      l = a + "";
    return (
      a == null && (l = a = (this.style.removeProperty(e), se(this, e))),
      r === l ? null : r === n && l === s ? o : ((s = l), (o = t((n = r), a)))
    );
  };
}
function Qc(e, t) {
  var i,
    n,
    s,
    o = "style." + t,
    r = "end." + o,
    a;
  return function () {
    var l = yt(this, e),
      c = l.on,
      h = l.value[o] == null ? a || (a = ir(t)) : void 0;
    (c !== i || s !== h) && (n = (i = c).copy()).on(r, (s = h)), (l.on = n);
  };
}
function Jc(e, t, i) {
  var n = (e += "") == "transform" ? ic : er;
  return t == null
    ? this.styleTween(e, Kc(e, n)).on("end.style." + e, ir(e))
    : typeof t == "function"
    ? this.styleTween(e, Zc(e, n, Pn(this, "style." + e, t))).each(
        Qc(this._id, e)
      )
    : this.styleTween(e, Gc(e, n, t), i).on("end.style." + e, null);
}
function th(e, t, i) {
  return function (n) {
    this.style.setProperty(e, t.call(this, n), i);
  };
}
function eh(e, t, i) {
  var n, s;
  function o() {
    var r = t.apply(this, arguments);
    return r !== s && (n = (s = r) && th(e, r, i)), n;
  }
  return (o._value = t), o;
}
function ih(e, t, i) {
  var n = "style." + (e += "");
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, eh(e, t, i ?? ""));
}
function nh(e) {
  return function () {
    this.textContent = e;
  };
}
function sh(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function oh(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? sh(Pn(this, "text", e))
      : nh(e == null ? "" : e + "")
  );
}
function rh(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function ah(e) {
  var t, i;
  function n() {
    var s = e.apply(this, arguments);
    return s !== i && (t = (i = s) && rh(s)), t;
  }
  return (n._value = e), n;
}
function lh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, ah(e));
}
function ch() {
  for (
    var e = this._name,
      t = this._id,
      i = nr(),
      n = this._groups,
      s = n.length,
      o = 0;
    o < s;
    ++o
  )
    for (var r = n[o], a = r.length, l, c = 0; c < a; ++c)
      if ((l = r[c])) {
        var h = dt(l, t);
        Ii(l, e, i, c, r, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease,
        });
      }
  return new Pt(n, this._parents, e, i);
}
function hh() {
  var e,
    t,
    i = this,
    n = i._id,
    s = i.size();
  return new Promise(function (o, r) {
    var a = { value: r },
      l = {
        value: function () {
          --s === 0 && o();
        },
      };
    i.each(function () {
      var c = yt(this, n),
        h = c.on;
      h !== e &&
        ((t = (e = h).copy()),
        t._.cancel.push(a),
        t._.interrupt.push(a),
        t._.end.push(l)),
        (c.on = t);
    }),
      s === 0 && o();
  });
}
var fh = 0;
function Pt(e, t, i, n) {
  (this._groups = e), (this._parents = t), (this._name = i), (this._id = n);
}
function nr() {
  return ++fh;
}
var Mt = $e.prototype;
Pt.prototype = {
  constructor: Pt,
  select: Yc,
  selectAll: Uc,
  selectChild: Mt.selectChild,
  selectChildren: Mt.selectChildren,
  filter: zc,
  merge: Bc,
  selection: qc,
  transition: ch,
  call: Mt.call,
  nodes: Mt.nodes,
  node: Mt.node,
  size: Mt.size,
  empty: Mt.empty,
  each: Mt.each,
  on: Hc,
  attr: wc,
  attrTween: Tc,
  style: Jc,
  styleTween: ih,
  text: oh,
  textTween: lh,
  remove: Vc,
  tween: pc,
  delay: Ac,
  duration: Ic,
  ease: Ec,
  easeVarying: Fc,
  end: hh,
  [Symbol.iterator]: Mt[Symbol.iterator],
};
function uh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var dh = { time: null, delay: 0, duration: 250, ease: uh };
function gh(e, t) {
  for (var i; !(i = e.__transition) || !(i = i[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return i;
}
function ph(e) {
  var t, i;
  e instanceof Pt
    ? ((t = e._id), (e = e._name))
    : ((t = nr()), ((i = dh).time = Tn()), (e = e == null ? null : e + ""));
  for (var n = this._groups, s = n.length, o = 0; o < s; ++o)
    for (var r = n[o], a = r.length, l, c = 0; c < a; ++c)
      (l = r[c]) && Ii(l, e, t, c, r, i || gh(l, t));
  return new Pt(n, this._parents, e, t);
}
$e.prototype.interrupt = uc;
$e.prototype.transition = ph;
const cn = Math.PI,
  hn = 2 * cn,
  Ht = 1e-6,
  mh = hn - Ht;
function sr(e) {
  this._ += e[0];
  for (let t = 1, i = e.length; t < i; ++t) this._ += arguments[t] + e[t];
}
function _h(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return sr;
  const i = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let s = 1, o = n.length; s < o; ++s)
      this._ += Math.round(arguments[s] * i) / i + n[s];
  };
}
class xh {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? sr : _h(t));
  }
  moveTo(t, i) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +i)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, i) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +i)}`;
  }
  quadraticCurveTo(t, i, n, s) {
    this._append`Q${+t},${+i},${(this._x1 = +n)},${(this._y1 = +s)}`;
  }
  bezierCurveTo(t, i, n, s, o, r) {
    this._append`C${+t},${+i},${+n},${+s},${(this._x1 = +o)},${(this._y1 =
      +r)}`;
  }
  arcTo(t, i, n, s, o) {
    if (((t = +t), (i = +i), (n = +n), (s = +s), (o = +o), o < 0))
      throw new Error(`negative radius: ${o}`);
    let r = this._x1,
      a = this._y1,
      l = n - t,
      c = s - i,
      h = r - t,
      f = a - i,
      u = h * h + f * f;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = i)}`;
    else if (u > Ht)
      if (!(Math.abs(f * l - c * h) > Ht) || !o)
        this._append`L${(this._x1 = t)},${(this._y1 = i)}`;
      else {
        let d = n - r,
          g = s - a,
          p = l * l + c * c,
          m = d * d + g * g,
          _ = Math.sqrt(p),
          y = Math.sqrt(u),
          v = o * Math.tan((cn - Math.acos((p + u - m) / (2 * _ * y))) / 2),
          w = v / y,
          b = v / _;
        Math.abs(w - 1) > Ht && this._append`L${t + w * h},${i + w * f}`,
          this._append`A${o},${o},0,0,${+(f * d > h * g)},${(this._x1 =
            t + b * l)},${(this._y1 = i + b * c)}`;
      }
  }
  arc(t, i, n, s, o, r) {
    if (((t = +t), (i = +i), (n = +n), (r = !!r), n < 0))
      throw new Error(`negative radius: ${n}`);
    let a = n * Math.cos(s),
      l = n * Math.sin(s),
      c = t + a,
      h = i + l,
      f = 1 ^ r,
      u = r ? s - o : o - s;
    this._x1 === null
      ? this._append`M${c},${h}`
      : (Math.abs(this._x1 - c) > Ht || Math.abs(this._y1 - h) > Ht) &&
        this._append`L${c},${h}`,
      n &&
        (u < 0 && (u = (u % hn) + hn),
        u > mh
          ? this._append`A${n},${n},0,1,${f},${t - a},${
              i - l
            }A${n},${n},0,1,${f},${(this._x1 = c)},${(this._y1 = h)}`
          : u > Ht &&
            this._append`A${n},${n},0,${+(u >= cn)},${f},${(this._x1 =
              t + n * Math.cos(o))},${(this._y1 = i + n * Math.sin(o))}`);
  }
  rect(t, i, n, s) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +i)}h${(n = +n)}v${+s}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ot(e) {
  return function () {
    return e;
  };
}
const cs = Math.abs,
  V = Math.atan2,
  zt = Math.cos,
  bh = Math.max,
  Vi = Math.min,
  gt = Math.sin,
  te = Math.sqrt,
  Z = 1e-12,
  Ie = Math.PI,
  wi = Ie / 2,
  yh = 2 * Ie;
function vh(e) {
  return e > 1 ? 0 : e < -1 ? Ie : Math.acos(e);
}
function hs(e) {
  return e >= 1 ? wi : e <= -1 ? -wi : Math.asin(e);
}
function wh(e) {
  let t = 3;
  return (
    (e.digits = function (i) {
      if (!arguments.length) return t;
      if (i == null) t = null;
      else {
        const n = Math.floor(i);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${i}`);
        t = n;
      }
      return e;
    }),
    () => new xh(t)
  );
}
function kh(e) {
  return e.innerRadius;
}
function Mh(e) {
  return e.outerRadius;
}
function Sh(e) {
  return e.startAngle;
}
function Ch(e) {
  return e.endAngle;
}
function Th(e) {
  return e && e.padAngle;
}
function Dh(e, t, i, n, s, o, r, a) {
  var l = i - e,
    c = n - t,
    h = r - s,
    f = a - o,
    u = f * l - h * c;
  if (!(u * u < Z))
    return (u = (h * (t - o) - f * (e - s)) / u), [e + u * l, t + u * c];
}
function Xe(e, t, i, n, s, o, r) {
  var a = e - i,
    l = t - n,
    c = (r ? o : -o) / te(a * a + l * l),
    h = c * l,
    f = -c * a,
    u = e + h,
    d = t + f,
    g = i + h,
    p = n + f,
    m = (u + g) / 2,
    _ = (d + p) / 2,
    y = g - u,
    v = p - d,
    w = y * y + v * v,
    b = s - o,
    M = u * p - g * d,
    S = (v < 0 ? -1 : 1) * te(bh(0, b * b * w - M * M)),
    k = (M * v - y * S) / w,
    T = (-M * y - v * S) / w,
    A = (M * v + y * S) / w,
    D = (-M * y + v * S) / w,
    P = k - m,
    C = T - _,
    O = A - m,
    E = D - _;
  return (
    P * P + C * C > O * O + E * E && ((k = A), (T = D)),
    {
      cx: k,
      cy: T,
      x01: -h,
      y01: -f,
      x11: k * (s / b - 1),
      y11: T * (s / b - 1),
    }
  );
}
function Ph() {
  var e = kh,
    t = Mh,
    i = Ot(0),
    n = null,
    s = Sh,
    o = Ch,
    r = Th,
    a = null,
    l = wh(c);
  function c() {
    var h,
      f,
      u = +e.apply(this, arguments),
      d = +t.apply(this, arguments),
      g = s.apply(this, arguments) - wi,
      p = o.apply(this, arguments) - wi,
      m = cs(p - g),
      _ = p > g;
    if ((a || (a = h = l()), d < u && ((f = d), (d = u), (u = f)), !(d > Z)))
      a.moveTo(0, 0);
    else if (m > yh - Z)
      a.moveTo(d * zt(g), d * gt(g)),
        a.arc(0, 0, d, g, p, !_),
        u > Z && (a.moveTo(u * zt(p), u * gt(p)), a.arc(0, 0, u, p, g, _));
    else {
      var y = g,
        v = p,
        w = g,
        b = p,
        M = m,
        S = m,
        k = r.apply(this, arguments) / 2,
        T = k > Z && (n ? +n.apply(this, arguments) : te(u * u + d * d)),
        A = Vi(cs(d - u) / 2, +i.apply(this, arguments)),
        D = A,
        P = A,
        C,
        O;
      if (T > Z) {
        var E = hs((T / u) * gt(k)),
          z = hs((T / d) * gt(k));
        (M -= E * 2) > Z
          ? ((E *= _ ? 1 : -1), (w += E), (b -= E))
          : ((M = 0), (w = b = (g + p) / 2)),
          (S -= z * 2) > Z
            ? ((z *= _ ? 1 : -1), (y += z), (v -= z))
            : ((S = 0), (y = v = (g + p) / 2));
      }
      var j = d * zt(y),
        ot = d * gt(y),
        vt = u * zt(b),
        rt = u * gt(b);
      if (A > Z) {
        var wt = d * zt(v),
          at = d * gt(v),
          kt = u * zt(w),
          lt = u * gt(w),
          q;
        if (m < Ie)
          if ((q = Dh(j, ot, kt, lt, wt, at, vt, rt))) {
            var ct = j - q[0],
              Bi = ot - q[1],
              $i = wt - q[0],
              ji = at - q[1],
              Vn =
                1 /
                gt(
                  vh(
                    (ct * $i + Bi * ji) /
                      (te(ct * ct + Bi * Bi) * te($i * $i + ji * ji))
                  ) / 2
                ),
              Yn = te(q[0] * q[0] + q[1] * q[1]);
            (D = Vi(A, (u - Yn) / (Vn - 1))), (P = Vi(A, (d - Yn) / (Vn + 1)));
          } else D = P = 0;
      }
      S > Z
        ? P > Z
          ? ((C = Xe(kt, lt, j, ot, d, P, _)),
            (O = Xe(wt, at, vt, rt, d, P, _)),
            a.moveTo(C.cx + C.x01, C.cy + C.y01),
            P < A
              ? a.arc(C.cx, C.cy, P, V(C.y01, C.x01), V(O.y01, O.x01), !_)
              : (a.arc(C.cx, C.cy, P, V(C.y01, C.x01), V(C.y11, C.x11), !_),
                a.arc(
                  0,
                  0,
                  d,
                  V(C.cy + C.y11, C.cx + C.x11),
                  V(O.cy + O.y11, O.cx + O.x11),
                  !_
                ),
                a.arc(O.cx, O.cy, P, V(O.y11, O.x11), V(O.y01, O.x01), !_)))
          : (a.moveTo(j, ot), a.arc(0, 0, d, y, v, !_))
        : a.moveTo(j, ot),
        !(u > Z) || !(M > Z)
          ? a.lineTo(vt, rt)
          : D > Z
          ? ((C = Xe(vt, rt, wt, at, u, -D, _)),
            (O = Xe(j, ot, kt, lt, u, -D, _)),
            a.lineTo(C.cx + C.x01, C.cy + C.y01),
            D < A
              ? a.arc(C.cx, C.cy, D, V(C.y01, C.x01), V(O.y01, O.x01), !_)
              : (a.arc(C.cx, C.cy, D, V(C.y01, C.x01), V(C.y11, C.x11), !_),
                a.arc(
                  0,
                  0,
                  u,
                  V(C.cy + C.y11, C.cx + C.x11),
                  V(O.cy + O.y11, O.cx + O.x11),
                  _
                ),
                a.arc(O.cx, O.cy, D, V(O.y11, O.x11), V(O.y01, O.x01), !_)))
          : a.arc(0, 0, u, b, w, _);
    }
    if ((a.closePath(), h)) return (a = null), h + "" || null;
  }
  return (
    (c.centroid = function () {
      var h = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
        f =
          (+s.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ie / 2;
      return [zt(f) * h, gt(f) * h];
    }),
    (c.innerRadius = function (h) {
      return arguments.length
        ? ((e = typeof h == "function" ? h : Ot(+h)), c)
        : e;
    }),
    (c.outerRadius = function (h) {
      return arguments.length
        ? ((t = typeof h == "function" ? h : Ot(+h)), c)
        : t;
    }),
    (c.cornerRadius = function (h) {
      return arguments.length
        ? ((i = typeof h == "function" ? h : Ot(+h)), c)
        : i;
    }),
    (c.padRadius = function (h) {
      return arguments.length
        ? ((n = h == null ? null : typeof h == "function" ? h : Ot(+h)), c)
        : n;
    }),
    (c.startAngle = function (h) {
      return arguments.length
        ? ((s = typeof h == "function" ? h : Ot(+h)), c)
        : s;
    }),
    (c.endAngle = function (h) {
      return arguments.length
        ? ((o = typeof h == "function" ? h : Ot(+h)), c)
        : o;
    }),
    (c.padAngle = function (h) {
      return arguments.length
        ? ((r = typeof h == "function" ? h : Ot(+h)), c)
        : r;
    }),
    (c.context = function (h) {
      return arguments.length ? ((a = h ?? null), c) : a;
    }),
    c
  );
}
function be(e, t, i) {
  (this.k = e), (this.x = t), (this.y = i);
}
be.prototype = {
  constructor: be,
  scale: function (e) {
    return e === 1 ? this : new be(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new be(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
be.prototype;
const fs = ({ color: e = "#00A59F", percentage: t = 40 }) => {
  const i = K.useRef();
  return (
    K.useEffect(() => {
      if (!i.current) return;
      he(i.current).select("g") && he(i.current).selectAll("g").remove();
      const n = Math.PI / 4,
        s = n + (t / 100) * (Math.PI * 2),
        o = he(i.current).append("g").attr("transform", "translate(35,35)");
      he(i.current)
        .append("g")
        .attr("transform", "translate(50,35)")
        .append("text")
        .text(`${t}%`)
        .attr("fill", "#fff")
        .style("font-size", "10px")
        .style("font-weight", "700")
        .style("transform", "translate(-45%, 2%)"),
        o
          .append("circle")
          .attr("stroke-width", 6)
          .attr("fill", "transparent")
          .attr("r", 28)
          .attr("stroke", "#393B41"),
        he(i.current)
          .append("g")
          .attr("transform", "translate(35,35)")
          .append("path")
          .attr("fill", "none")
          .attr("stroke-width", 0)
          .attr("fill", e)
          .attr("stroke", "darkslategray")
          .attr(
            "d",
            Ph().cornerRadius(50)({
              startAngle: n,
              endAngle: s,
              innerRadius: 24,
              outerRadius: 30,
            })
          );
    }, [t]),
    x.jsx("div", {
      style: { backgroundColor: "#202125" },
      children: x.jsx("svg", {
        style: { position: "relative" },
        height: 65,
        width: 65,
        ref: i,
      }),
    })
  );
};
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function He(e) {
  return (e + 0.5) | 0;
}
const Nt = (e, t, i) => Math.max(Math.min(e, i), t);
function ye(e) {
  return Nt(He(e * 2.55), 0, 255);
}
function Rt(e) {
  return Nt(He(e * 255), 0, 255);
}
function Dt(e) {
  return Nt(He(e / 2.55) / 100, 0, 1);
}
function us(e) {
  return Nt(He(e * 100), 0, 100);
}
const et = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  fn = [..."0123456789ABCDEF"],
  Ah = (e) => fn[e & 15],
  Oh = (e) => fn[(e & 240) >> 4] + fn[e & 15],
  qe = (e) => (e & 240) >> 4 === (e & 15),
  Lh = (e) => qe(e.r) && qe(e.g) && qe(e.b) && qe(e.a);
function Ih(e) {
  var t = e.length,
    i;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (i = {
            r: 255 & (et[e[1]] * 17),
            g: 255 & (et[e[2]] * 17),
            b: 255 & (et[e[3]] * 17),
            a: t === 5 ? et[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (i = {
            r: (et[e[1]] << 4) | et[e[2]],
            g: (et[e[3]] << 4) | et[e[4]],
            b: (et[e[5]] << 4) | et[e[6]],
            a: t === 9 ? (et[e[7]] << 4) | et[e[8]] : 255,
          })),
    i
  );
}
const Nh = (e, t) => (e < 255 ? t(e) : "");
function Eh(e) {
  var t = Lh(e) ? Ah : Oh;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Nh(e.a, t) : void 0;
}
const Rh =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function or(e, t, i) {
  const n = t * Math.min(i, 1 - i),
    s = (o, r = (o + e / 30) % 12) =>
      i - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Fh(e, t, i) {
  const n = (s, o = (s + e / 60) % 6) =>
    i - i * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function zh(e, t, i) {
  const n = or(e, 1, 0.5);
  let s;
  for (t + i > 1 && ((s = 1 / (t + i)), (t *= s), (i *= s)), s = 0; s < 3; s++)
    (n[s] *= 1 - t - i), (n[s] += t);
  return n;
}
function Bh(e, t, i, n, s) {
  return e === s
    ? (t - i) / n + (t < i ? 6 : 0)
    : t === s
    ? (i - e) / n + 2
    : (e - t) / n + 4;
}
function An(e) {
  const i = e.r / 255,
    n = e.g / 255,
    s = e.b / 255,
    o = Math.max(i, n, s),
    r = Math.min(i, n, s),
    a = (o + r) / 2;
  let l, c, h;
  return (
    o !== r &&
      ((h = o - r),
      (c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
      (l = Bh(i, n, s, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function On(e, t, i, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, i, n)).map(Rt);
}
function Ln(e, t, i) {
  return On(or, e, t, i);
}
function $h(e, t, i) {
  return On(zh, e, t, i);
}
function jh(e, t, i) {
  return On(Fh, e, t, i);
}
function rr(e) {
  return ((e % 360) + 360) % 360;
}
function Hh(e) {
  const t = Rh.exec(e);
  let i = 255,
    n;
  if (!t) return;
  t[5] !== n && (i = t[6] ? ye(+t[5]) : Rt(+t[5]));
  const s = rr(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (n = $h(s, o, r))
      : t[1] === "hsv"
      ? (n = jh(s, o, r))
      : (n = Ln(s, o, r)),
    { r: n[0], g: n[1], b: n[2], a: i }
  );
}
function Wh(e, t) {
  var i = An(e);
  (i[0] = rr(i[0] + t)), (i = Ln(i)), (e.r = i[0]), (e.g = i[1]), (e.b = i[2]);
}
function Vh(e) {
  if (!e) return;
  const t = An(e),
    i = t[0],
    n = us(t[1]),
    s = us(t[2]);
  return e.a < 255
    ? `hsla(${i}, ${n}%, ${s}%, ${Dt(e.a)})`
    : `hsl(${i}, ${n}%, ${s}%)`;
}
const ds = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  gs = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Yh() {
  const e = {},
    t = Object.keys(gs),
    i = Object.keys(ds);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < i.length; s++)
      (o = i[s]), (a = a.replace(o, ds[o]));
    (o = parseInt(gs[r], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return e;
}
let Ke;
function Uh(e) {
  Ke || ((Ke = Yh()), (Ke.transparent = [0, 0, 0, 0]));
  const t = Ke[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Xh =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function qh(e) {
  const t = Xh.exec(e);
  let i = 255,
    n,
    s,
    o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      i = t[8] ? ye(r) : Nt(r * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? ye(n) : Nt(n, 0, 255))),
      (s = 255 & (t[4] ? ye(s) : Nt(s, 0, 255))),
      (o = 255 & (t[6] ? ye(o) : Nt(o, 0, 255))),
      { r: n, g: s, b: o, a: i }
    );
  }
}
function Kh(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Dt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const Yi = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Jt = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function Gh(e, t, i) {
  const n = Jt(Dt(e.r)),
    s = Jt(Dt(e.g)),
    o = Jt(Dt(e.b));
  return {
    r: Rt(Yi(n + i * (Jt(Dt(t.r)) - n))),
    g: Rt(Yi(s + i * (Jt(Dt(t.g)) - s))),
    b: Rt(Yi(o + i * (Jt(Dt(t.b)) - o))),
    a: e.a + i * (t.a - e.a),
  };
}
function Ge(e, t, i) {
  if (e) {
    let n = An(e);
    (n[t] = Math.max(0, Math.min(n[t] + n[t] * i, t === 0 ? 360 : 1))),
      (n = Ln(n)),
      (e.r = n[0]),
      (e.g = n[1]),
      (e.b = n[2]);
  }
}
function ar(e, t) {
  return e && Object.assign(t || {}, e);
}
function ps(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Rt(e[3])))
      : ((t = ar(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Rt(t.a))),
    t
  );
}
function Zh(e) {
  return e.charAt(0) === "r" ? qh(e) : Hh(e);
}
class Ne {
  constructor(t) {
    if (t instanceof Ne) return t;
    const i = typeof t;
    let n;
    i === "object"
      ? (n = ps(t))
      : i === "string" && (n = Ih(t) || Uh(t) || Zh(t)),
      (this._rgb = n),
      (this._valid = !!n);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ar(this._rgb);
    return t && (t.a = Dt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = ps(t);
  }
  rgbString() {
    return this._valid ? Kh(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Eh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Vh(this._rgb) : void 0;
  }
  mix(t, i) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const r = i === o ? 0.5 : i,
        a = 2 * r - 1,
        l = n.a - s.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = r * n.a + (1 - r) * s.a),
        (this.rgb = n);
    }
    return this;
  }
  interpolate(t, i) {
    return t && (this._rgb = Gh(this._rgb, t._rgb, i)), this;
  }
  clone() {
    return new Ne(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Rt(t)), this;
  }
  clearer(t) {
    const i = this._rgb;
    return (i.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      i = He(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = i), this;
  }
  opaquer(t) {
    const i = this._rgb;
    return (i.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Ge(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ge(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ge(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ge(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Wh(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function St() {}
const Qh = (() => {
  let e = 0;
  return () => e++;
})();
function B(e) {
  return e === null || typeof e > "u";
}
function H(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function N(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function X(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function pt(e, t) {
  return X(e) ? e : t;
}
function I(e, t) {
  return typeof e > "u" ? t : e;
}
const Jh = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function F(e, t, i) {
  if (e && typeof e.call == "function") return e.apply(i, t);
}
function R(e, t, i, n) {
  let s, o, r;
  if (H(e)) for (o = e.length, s = 0; s < o; s++) t.call(i, e[s], s);
  else if (N(e))
    for (r = Object.keys(e), o = r.length, s = 0; s < o; s++)
      t.call(i, e[r[s]], r[s]);
}
function ki(e, t) {
  let i, n, s, o;
  if (!e || !t || e.length !== t.length) return !1;
  for (i = 0, n = e.length; i < n; ++i)
    if (
      ((s = e[i]),
      (o = t[i]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function Mi(e) {
  if (H(e)) return e.map(Mi);
  if (N(e)) {
    const t = Object.create(null),
      i = Object.keys(e),
      n = i.length;
    let s = 0;
    for (; s < n; ++s) t[i[s]] = Mi(e[i[s]]);
    return t;
  }
  return e;
}
function lr(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function tf(e, t, i, n) {
  if (!lr(e)) return;
  const s = t[e],
    o = i[e];
  N(s) && N(o) ? Ee(s, o, n) : (t[e] = Mi(o));
}
function Ee(e, t, i) {
  const n = H(t) ? t : [t],
    s = n.length;
  if (!N(e)) return e;
  i = i || {};
  const o = i.merger || tf;
  let r;
  for (let a = 0; a < s; ++a) {
    if (((r = n[a]), !N(r))) continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c) o(l[c], e, r, i);
  }
  return e;
}
function ke(e, t) {
  return Ee(e, t, { merger: ef });
}
function ef(e, t, i) {
  if (!lr(e)) return;
  const n = t[e],
    s = i[e];
  N(n) && N(s)
    ? ke(n, s)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Mi(s));
}
const ms = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function nf(e) {
  const t = e.split("."),
    i = [];
  let n = "";
  for (const s of t)
    (n += s),
      n.endsWith("\\") ? (n = n.slice(0, -1) + ".") : (i.push(n), (n = ""));
  return i;
}
function sf(e) {
  const t = nf(e);
  return (i) => {
    for (const n of t) {
      if (n === "") break;
      i = i && i[n];
    }
    return i;
  };
}
function Si(e, t) {
  return (ms[t] || (ms[t] = sf(t)))(e);
}
function In(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Ci = (e) => typeof e < "u",
  Ft = (e) => typeof e == "function",
  _s = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const i of e) if (!t.has(i)) return !1;
    return !0;
  };
function of(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const W = Math.PI,
  ut = 2 * W,
  rf = ut + W,
  Ti = Number.POSITIVE_INFINITY,
  af = W / 180,
  ft = W / 2,
  Bt = W / 4,
  xs = (W * 2) / 3,
  un = Math.log10,
  re = Math.sign;
function Me(e, t, i) {
  return Math.abs(e - t) < i;
}
function bs(e) {
  const t = Math.round(e);
  e = Me(e, t, e / 1e3) ? t : e;
  const i = Math.pow(10, Math.floor(un(e))),
    n = e / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function lf(e) {
  const t = [],
    i = Math.sqrt(e);
  let n;
  for (n = 1; n < i; n++) e % n === 0 && (t.push(n), t.push(e / n));
  return i === (i | 0) && t.push(i), t.sort((s, o) => s - o).pop(), t;
}
function Re(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function cf(e, t) {
  const i = Math.round(e);
  return i - t <= e && i + t >= e;
}
function hf(e, t, i) {
  let n, s, o;
  for (n = 0, s = e.length; n < s; n++)
    (o = e[n][i]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function Ut(e) {
  return e * (W / 180);
}
function ff(e) {
  return e * (180 / W);
}
function ys(e) {
  if (!X(e)) return;
  let t = 1,
    i = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), i++;
  return i;
}
function uf(e, t) {
  const i = t.x - e.x,
    n = t.y - e.y,
    s = Math.sqrt(i * i + n * n);
  let o = Math.atan2(n, i);
  return o < -0.5 * W && (o += ut), { angle: o, distance: s };
}
function dn(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function df(e, t) {
  return ((e - t + rf) % ut) - W;
}
function xt(e) {
  return ((e % ut) + ut) % ut;
}
function cr(e, t, i, n) {
  const s = xt(e),
    o = xt(t),
    r = xt(i),
    a = xt(o - s),
    l = xt(r - s),
    c = xt(s - o),
    h = xt(s - r);
  return s === o || s === r || (n && o === r) || (a > l && c < h);
}
function it(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function gf(e) {
  return it(e, -32768, 32767);
}
function ee(e, t, i, n = 1e-6) {
  return e >= Math.min(t, i) - n && e <= Math.max(t, i) + n;
}
function Nn(e, t, i) {
  i = i || ((r) => e[r] < t);
  let n = e.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) (o = (s + n) >> 1), i(o) ? (s = o) : (n = o);
  return { lo: s, hi: n };
}
const Xt = (e, t, i, n) =>
    Nn(
      e,
      i,
      n
        ? (s) => {
            const o = e[s][t];
            return o < i || (o === i && e[s + 1][t] === i);
          }
        : (s) => e[s][t] < i
    ),
  pf = (e, t, i) => Nn(e, i, (n) => e[n][t] >= i);
function mf(e, t, i) {
  let n = 0,
    s = e.length;
  for (; n < s && e[n] < t; ) n++;
  for (; s > n && e[s - 1] > i; ) s--;
  return n > 0 || s < e.length ? e.slice(n, s) : e;
}
const hr = ["push", "pop", "shift", "splice", "unshift"];
function _f(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    hr.forEach((i) => {
      const n = "_onData" + In(i),
        s = e[i];
      Object.defineProperty(e, i, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = s.apply(this, o);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[n] == "function" && a[n](...o);
            }),
            r
          );
        },
      });
    });
}
function vs(e, t) {
  const i = e._chartjs;
  if (!i) return;
  const n = i.listeners,
    s = n.indexOf(t);
  s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (hr.forEach((o) => {
        delete e[o];
      }),
      delete e._chartjs);
}
function xf(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const fr = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function ur(e, t) {
  let i = [],
    n = !1;
  return function (...s) {
    (i = s),
      n ||
        ((n = !0),
        fr.call(window, () => {
          (n = !1), e.apply(t, i);
        }));
  };
}
function bf(e, t) {
  let i;
  return function (...n) {
    return (
      t ? (clearTimeout(i), (i = setTimeout(e, t, n))) : e.apply(this, n), t
    );
  };
}
const En = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Y = (e, t, i) => (e === "start" ? t : e === "end" ? i : (t + i) / 2),
  yf = (e, t, i, n) =>
    e === (n ? "left" : "right") ? i : e === "center" ? (t + i) / 2 : t;
function vf(e, t, i) {
  const n = t.length;
  let s = 0,
    o = n;
  if (e._sorted) {
    const { iScale: r, _parsed: a } = e,
      l = r.axis,
      { min: c, max: h, minDefined: f, maxDefined: u } = r.getUserBounds();
    f &&
      (s = it(
        Math.min(Xt(a, l, c).lo, i ? n : Xt(t, l, r.getPixelForValue(c)).lo),
        0,
        n - 1
      )),
      u
        ? (o =
            it(
              Math.max(
                Xt(a, r.axis, h, !0).hi + 1,
                i ? 0 : Xt(t, l, r.getPixelForValue(h), !0).hi + 1
              ),
              s,
              n
            ) - s)
        : (o = n - s);
  }
  return { start: s, count: o };
}
function wf(e) {
  const { xScale: t, yScale: i, _scaleRanges: n } = e,
    s = { xmin: t.min, xmax: t.max, ymin: i.min, ymax: i.max };
  if (!n) return (e._scaleRanges = s), !0;
  const o =
    n.xmin !== t.min ||
    n.xmax !== t.max ||
    n.ymin !== i.min ||
    n.ymax !== i.max;
  return Object.assign(n, s), o;
}
const Ze = (e) => e === 0 || e === 1,
  ws = (e, t, i) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ut) / i)),
  ks = (e, t, i) => Math.pow(2, -10 * e) * Math.sin(((e - t) * ut) / i) + 1,
  Se = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * ft) + 1,
    easeOutSine: (e) => Math.sin(e * ft),
    easeInOutSine: (e) => -0.5 * (Math.cos(W * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Ze(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Ze(e) ? e : ws(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Ze(e) ? e : ks(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ze(e)
        ? e
        : e < 0.5
        ? 0.5 * ws(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * ks(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Se.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Se.easeInBounce(e * 2) * 0.5
        : Se.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function Rn(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Ms(e) {
  return Rn(e) ? e : new Ne(e);
}
function Ui(e) {
  return Rn(e) ? e : new Ne(e).saturate(0.5).darken(0.1).hexString();
}
const kf = ["x", "y", "borderWidth", "radius", "tension"],
  Mf = ["color", "borderColor", "backgroundColor"];
function Sf(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: Mf },
      numbers: { type: "number", properties: kf },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function Cf(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Ss = new Map();
function Tf(e, t) {
  t = t || {};
  const i = e + JSON.stringify(t);
  let n = Ss.get(i);
  return n || ((n = new Intl.NumberFormat(e, t)), Ss.set(i, n)), n;
}
function dr(e, t, i) {
  return Tf(t, i).format(e);
}
const gr = {
  values(e) {
    return H(e) ? e : "" + e;
  },
  numeric(e, t, i) {
    if (e === 0) return "0";
    const n = this.chart.options.locale;
    let s,
      o = e;
    if (i.length > 1) {
      const c = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), (o = Df(e, i));
    }
    const r = un(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), dr(e, n, l);
  },
  logarithmic(e, t, i) {
    if (e === 0) return "0";
    const n = i[t].significand || e / Math.pow(10, Math.floor(un(e)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * i.length
      ? gr.numeric.call(this, e, t, i)
      : "";
  },
};
function Df(e, t) {
  let i = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(i) >= 1 && e !== Math.floor(e) && (i = e - Math.floor(e)), i;
}
var pr = { formatters: gr };
function Pf(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, i) => i.lineWidth,
      tickColor: (t, i) => i.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: pr.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const Zt = Object.create(null),
  gn = Object.create(null);
function Ce(e, t) {
  if (!t) return e;
  const i = t.split(".");
  for (let n = 0, s = i.length; n < s; ++n) {
    const o = i[n];
    e = e[o] || (e[o] = Object.create(null));
  }
  return e;
}
function Xi(e, t, i) {
  return typeof t == "string" ? Ee(Ce(e, t), i) : Ee(Ce(e, ""), t);
}
class Af {
  constructor(t, i) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => Ui(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => Ui(s.borderColor)),
      (this.hoverColor = (n, s) => Ui(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(i);
  }
  set(t, i) {
    return Xi(this, t, i);
  }
  get(t) {
    return Ce(this, t);
  }
  describe(t, i) {
    return Xi(gn, t, i);
  }
  override(t, i) {
    return Xi(Zt, t, i);
  }
  route(t, i, n, s) {
    const o = Ce(this, t),
      r = Ce(this, n),
      a = "_" + i;
    Object.defineProperties(o, {
      [a]: { value: o[i], writable: !0 },
      [i]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[s];
          return N(l) ? Object.assign({}, c, l) : I(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((i) => i(this));
  }
}
var $ = new Af(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Sf, Cf, Pf]
);
function Of(e) {
  return !e || B(e.size) || B(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Cs(e, t, i, n, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = e.measureText(s).width), i.push(s)), o > n && (n = o), n
  );
}
function $t(e, t, i) {
  const n = e.currentDevicePixelRatio,
    s = i !== 0 ? Math.max(i / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function Ts(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function pn(e, t, i, n) {
  mr(e, t, i, n, null);
}
function mr(e, t, i, n, s) {
  let o, r, a, l, c, h, f, u;
  const d = t.pointStyle,
    g = t.rotation,
    p = t.radius;
  let m = (g || 0) * af;
  if (
    d &&
    typeof d == "object" &&
    ((o = d.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(i, n),
      e.rotate(m),
      e.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
      e.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch ((e.beginPath(), d)) {
      default:
        s ? e.ellipse(i, n, s / 2, p, 0, 0, ut) : e.arc(i, n, p, 0, ut),
          e.closePath();
        break;
      case "triangle":
        (h = s ? s / 2 : p),
          e.moveTo(i + Math.sin(m) * h, n - Math.cos(m) * p),
          (m += xs),
          e.lineTo(i + Math.sin(m) * h, n - Math.cos(m) * p),
          (m += xs),
          e.lineTo(i + Math.sin(m) * h, n - Math.cos(m) * p),
          e.closePath();
        break;
      case "rectRounded":
        (c = p * 0.516),
          (l = p - c),
          (r = Math.cos(m + Bt) * l),
          (f = Math.cos(m + Bt) * (s ? s / 2 - c : l)),
          (a = Math.sin(m + Bt) * l),
          (u = Math.sin(m + Bt) * (s ? s / 2 - c : l)),
          e.arc(i - f, n - a, c, m - W, m - ft),
          e.arc(i + u, n - r, c, m - ft, m),
          e.arc(i + f, n + a, c, m, m + ft),
          e.arc(i - u, n + r, c, m + ft, m + W),
          e.closePath();
        break;
      case "rect":
        if (!g) {
          (l = Math.SQRT1_2 * p),
            (h = s ? s / 2 : l),
            e.rect(i - h, n - l, 2 * h, 2 * l);
          break;
        }
        m += Bt;
      case "rectRot":
        (f = Math.cos(m) * (s ? s / 2 : p)),
          (r = Math.cos(m) * p),
          (a = Math.sin(m) * p),
          (u = Math.sin(m) * (s ? s / 2 : p)),
          e.moveTo(i - f, n - a),
          e.lineTo(i + u, n - r),
          e.lineTo(i + f, n + a),
          e.lineTo(i - u, n + r),
          e.closePath();
        break;
      case "crossRot":
        m += Bt;
      case "cross":
        (f = Math.cos(m) * (s ? s / 2 : p)),
          (r = Math.cos(m) * p),
          (a = Math.sin(m) * p),
          (u = Math.sin(m) * (s ? s / 2 : p)),
          e.moveTo(i - f, n - a),
          e.lineTo(i + f, n + a),
          e.moveTo(i + u, n - r),
          e.lineTo(i - u, n + r);
        break;
      case "star":
        (f = Math.cos(m) * (s ? s / 2 : p)),
          (r = Math.cos(m) * p),
          (a = Math.sin(m) * p),
          (u = Math.sin(m) * (s ? s / 2 : p)),
          e.moveTo(i - f, n - a),
          e.lineTo(i + f, n + a),
          e.moveTo(i + u, n - r),
          e.lineTo(i - u, n + r),
          (m += Bt),
          (f = Math.cos(m) * (s ? s / 2 : p)),
          (r = Math.cos(m) * p),
          (a = Math.sin(m) * p),
          (u = Math.sin(m) * (s ? s / 2 : p)),
          e.moveTo(i - f, n - a),
          e.lineTo(i + f, n + a),
          e.moveTo(i + u, n - r),
          e.lineTo(i - u, n + r);
        break;
      case "line":
        (r = s ? s / 2 : Math.cos(m) * p),
          (a = Math.sin(m) * p),
          e.moveTo(i - r, n - a),
          e.lineTo(i + r, n + a);
        break;
      case "dash":
        e.moveTo(i, n),
          e.lineTo(i + Math.cos(m) * (s ? s / 2 : p), n + Math.sin(m) * p);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function Fe(e, t, i) {
  return (
    (i = i || 0.5),
    !t ||
      (e &&
        e.x > t.left - i &&
        e.x < t.right + i &&
        e.y > t.top - i &&
        e.y < t.bottom + i)
  );
}
function Ni(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Ei(e) {
  e.restore();
}
function Lf(e, t, i, n, s) {
  if (!t) return e.lineTo(i.x, i.y);
  if (s === "middle") {
    const o = (t.x + i.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, i.y);
  } else (s === "after") != !!n ? e.lineTo(t.x, i.y) : e.lineTo(i.x, t.y);
  e.lineTo(i.x, i.y);
}
function If(e, t, i, n) {
  if (!t) return e.lineTo(i.x, i.y);
  e.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? i.cp2x : i.cp1x,
    n ? i.cp2y : i.cp1y,
    i.x,
    i.y
  );
}
function Nf(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    B(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Ef(e, t, i, n, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(n),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = i - o.actualBoundingBoxAscent,
      c = i + o.actualBoundingBoxDescent,
      h = s.strikethrough ? (l + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = s.decorationWidth || 2),
      e.moveTo(r, h),
      e.lineTo(a, h),
      e.stroke();
  }
}
function Rf(e, t) {
  const i = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = i);
}
function ze(e, t, i, n, s, o = {}) {
  const r = H(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, Nf(e, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      o.backdrop && Rf(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        B(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(c, i, n, o.maxWidth)),
      e.fillText(c, i, n, o.maxWidth),
      Ef(e, i, n, c, o),
      (n += Number(s.lineHeight));
  e.restore();
}
function mn(e, t) {
  const { x: i, y: n, w: s, h: o, radius: r } = t;
  e.arc(i + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * W, W, !0),
    e.lineTo(i, n + o - r.bottomLeft),
    e.arc(i + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, W, ft, !0),
    e.lineTo(i + s - r.bottomRight, n + o),
    e.arc(
      i + s - r.bottomRight,
      n + o - r.bottomRight,
      r.bottomRight,
      ft,
      0,
      !0
    ),
    e.lineTo(i + s, n + r.topRight),
    e.arc(i + s - r.topRight, n + r.topRight, r.topRight, 0, -ft, !0),
    e.lineTo(i + r.topLeft, n);
}
const Ff = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  zf = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Bf(e, t) {
  const i = ("" + e).match(Ff);
  if (!i || i[1] === "normal") return t * 1.2;
  switch (((e = +i[2]), i[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const $f = (e) => +e || 0;
function _r(e, t) {
  const i = {},
    n = N(t),
    s = n ? Object.keys(t) : t,
    o = N(e) ? (n ? (r) => I(e[r], e[t[r]]) : (r) => e[r]) : () => e;
  for (const r of s) i[r] = $f(o(r));
  return i;
}
function jf(e) {
  return _r(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Te(e) {
  return _r(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function st(e) {
  const t = jf(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function U(e, t) {
  (e = e || {}), (t = t || $.font);
  let i = I(e.size, t.size);
  typeof i == "string" && (i = parseInt(i, 10));
  let n = I(e.style, t.style);
  n &&
    !("" + n).match(zf) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
  const s = {
    family: I(e.family, t.family),
    lineHeight: Bf(I(e.lineHeight, t.lineHeight), i),
    size: i,
    style: n,
    weight: I(e.weight, t.weight),
    string: "",
  };
  return (s.string = Of(s)), s;
}
function Qe(e, t, i, n) {
  let s, o, r;
  for (s = 0, o = e.length; s < o; ++s)
    if (((r = e[s]), r !== void 0 && r !== void 0)) return r;
}
function Hf(e, t, i) {
  const { min: n, max: s } = e,
    o = Jh(t, (s - n) / 2),
    r = (a, l) => (i && a === 0 ? 0 : a + l);
  return { min: r(n, -Math.abs(o)), max: r(s, o) };
}
function Qt(e, t) {
  return Object.assign(Object.create(e), t);
}
function Fn(e, t = [""], i, n, s = () => e[0]) {
  const o = i || e;
  typeof n > "u" && (n = vr("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => Fn([a, ...e], t, o, n),
  };
  return new Proxy(r, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    get(a, l) {
      return br(a, l, () => Gf(l, t, e, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, l) {
      return Ps(a).includes(l);
    },
    ownKeys(a) {
      return Ps(a);
    },
    set(a, l, c) {
      const h = a._storage || (a._storage = s());
      return (a[l] = h[l] = c), delete a._keys, !0;
    },
  });
}
function ae(e, t, i, n) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: xr(e, n),
    setContext: (o) => ae(e, o, i, n),
    override: (o) => ae(e.override(o), t, i, n),
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return br(o, r, () => Vf(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(e, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, r) {
      return Reflect.has(e, r);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, r, a) {
      return (e[r] = a), delete o[r], !0;
    },
  });
}
function xr(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: i = t.scriptable,
    _indexable: n = t.indexable,
    _allKeys: s = t.allKeys,
  } = e;
  return {
    allKeys: s,
    scriptable: i,
    indexable: n,
    isScriptable: Ft(i) ? i : () => i,
    isIndexable: Ft(n) ? n : () => n,
  };
}
const Wf = (e, t) => (e ? e + In(t) : t),
  zn = (e, t) =>
    N(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function br(e, t, i) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const n = i();
  return (e[t] = n), n;
}
function Vf(e, t, i) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = e;
  let a = n[t];
  return (
    Ft(a) && r.isScriptable(t) && (a = Yf(t, a, e, i)),
    H(a) && a.length && (a = Uf(t, a, e, r.isIndexable)),
    zn(t, a) && (a = ae(a, s, o && o[t], r)),
    a
  );
}
function Yf(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = i;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  a.add(e);
  let l = t(o, r || n);
  return a.delete(e), zn(e, l) && (l = Bn(s._scopes, s, e, l)), l;
}
function Uf(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = i;
  if (typeof o.index < "u" && n(e)) return t[o.index % t.length];
  if (N(t[0])) {
    const l = t,
      c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const f = Bn(c, s, e, h);
      t.push(ae(f, o, r && r[e], a));
    }
  }
  return t;
}
function yr(e, t, i) {
  return Ft(e) ? e(t, i) : e;
}
const Xf = (e, t) => (e === !0 ? t : typeof e == "string" ? Si(t, e) : void 0);
function qf(e, t, i, n, s) {
  for (const o of t) {
    const r = Xf(i, o);
    if (r) {
      e.add(r);
      const a = yr(r._fallback, i, s);
      if (typeof a < "u" && a !== i && a !== n) return a;
    } else if (r === !1 && typeof n < "u" && i !== n) return null;
  }
  return !1;
}
function Bn(e, t, i, n) {
  const s = t._rootScopes,
    o = yr(t._fallback, i, n),
    r = [...e, ...s],
    a = new Set();
  a.add(n);
  let l = Ds(a, r, i, o || i, n);
  return l === null ||
    (typeof o < "u" && o !== i && ((l = Ds(a, r, o, l, n)), l === null))
    ? !1
    : Fn(Array.from(a), [""], s, o, () => Kf(t, i, n));
}
function Ds(e, t, i, n, s) {
  for (; i; ) i = qf(e, t, i, n, s);
  return i;
}
function Kf(e, t, i) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return H(s) && N(i) ? i : s || {};
}
function Gf(e, t, i, n) {
  let s;
  for (const o of t)
    if (((s = vr(Wf(o, e), i)), typeof s < "u"))
      return zn(e, s) ? Bn(i, n, e, s) : s;
}
function vr(e, t) {
  for (const i of t) {
    if (!i) continue;
    const n = i[e];
    if (typeof n < "u") return n;
  }
}
function Ps(e) {
  let t = e._keys;
  return t || (t = e._keys = Zf(e._scopes)), t;
}
function Zf(e) {
  const t = new Set();
  for (const i of e)
    for (const n of Object.keys(i).filter((s) => !s.startsWith("_"))) t.add(n);
  return Array.from(t);
}
const Qf = Number.EPSILON || 1e-14,
  le = (e, t) => t < e.length && !e[t].skip && e[t],
  wr = (e) => (e === "x" ? "y" : "x");
function Jf(e, t, i, n) {
  const s = e.skip ? t : e,
    o = t,
    r = i.skip ? t : i,
    a = dn(o, s),
    l = dn(r, o);
  let c = a / (a + l),
    h = l / (a + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const f = n * c,
    u = n * h;
  return {
    previous: { x: o.x - f * (r.x - s.x), y: o.y - f * (r.y - s.y) },
    next: { x: o.x + u * (r.x - s.x), y: o.y + u * (r.y - s.y) },
  };
}
function tu(e, t, i) {
  const n = e.length;
  let s,
    o,
    r,
    a,
    l,
    c = le(e, 0);
  for (let h = 0; h < n - 1; ++h)
    if (((l = c), (c = le(e, h + 1)), !(!l || !c))) {
      if (Me(t[h], 0, Qf)) {
        i[h] = i[h + 1] = 0;
        continue;
      }
      (s = i[h] / t[h]),
        (o = i[h + 1] / t[h]),
        (a = Math.pow(s, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((r = 3 / Math.sqrt(a)),
          (i[h] = s * r * t[h]),
          (i[h + 1] = o * r * t[h]));
    }
}
function eu(e, t, i = "x") {
  const n = wr(i),
    s = e.length;
  let o,
    r,
    a,
    l = le(e, 0);
  for (let c = 0; c < s; ++c) {
    if (((r = a), (a = l), (l = le(e, c + 1)), !a)) continue;
    const h = a[i],
      f = a[n];
    r &&
      ((o = (h - r[i]) / 3),
      (a[`cp1${i}`] = h - o),
      (a[`cp1${n}`] = f - o * t[c])),
      l &&
        ((o = (l[i] - h) / 3),
        (a[`cp2${i}`] = h + o),
        (a[`cp2${n}`] = f + o * t[c]));
  }
}
function iu(e, t = "x") {
  const i = wr(t),
    n = e.length,
    s = Array(n).fill(0),
    o = Array(n);
  let r,
    a,
    l,
    c = le(e, 0);
  for (r = 0; r < n; ++r)
    if (((a = l), (l = c), (c = le(e, r + 1)), !!l)) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[i] - l[i]) / h : 0;
      }
      o[r] = a
        ? c
          ? re(s[r - 1]) !== re(s[r])
            ? 0
            : (s[r - 1] + s[r]) / 2
          : s[r - 1]
        : s[r];
    }
  tu(e, s, o), eu(e, o, t);
}
function Je(e, t, i) {
  return Math.max(Math.min(e, i), t);
}
function nu(e, t) {
  let i,
    n,
    s,
    o,
    r,
    a = Fe(e[0], t);
  for (i = 0, n = e.length; i < n; ++i)
    (r = o),
      (o = a),
      (a = i < n - 1 && Fe(e[i + 1], t)),
      o &&
        ((s = e[i]),
        r &&
          ((s.cp1x = Je(s.cp1x, t.left, t.right)),
          (s.cp1y = Je(s.cp1y, t.top, t.bottom))),
        a &&
          ((s.cp2x = Je(s.cp2x, t.left, t.right)),
          (s.cp2y = Je(s.cp2y, t.top, t.bottom))));
}
function su(e, t, i, n, s) {
  let o, r, a, l;
  if (
    (t.spanGaps && (e = e.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    iu(e, s);
  else {
    let c = n ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      (a = e[o]),
        (l = Jf(c, a, e[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && nu(e, i);
}
function $n() {
  return typeof window < "u" && typeof document < "u";
}
function jn(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Di(e, t, i) {
  let n;
  return (
    typeof e == "string"
      ? ((n = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (n = (n / 100) * t.parentNode[i]))
      : (n = e),
    n
  );
}
const Ri = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function ou(e, t) {
  return Ri(e).getPropertyValue(t);
}
const ru = ["top", "right", "bottom", "left"];
function Kt(e, t, i) {
  const n = {};
  i = i ? "-" + i : "";
  for (let s = 0; s < 4; s++) {
    const o = ru[s];
    n[o] = parseFloat(e[t + "-" + o + i]) || 0;
  }
  return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
}
const au = (e, t, i) => (e > 0 || t > 0) && (!i || !i.shadowRoot);
function lu(e, t) {
  const i = e.touches,
    n = i && i.length ? i[0] : e,
    { offsetX: s, offsetY: o } = n;
  let r = !1,
    a,
    l;
  if (au(s, o, e.target)) (a = s), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = n.clientX - c.left), (l = n.clientY - c.top), (r = !0);
  }
  return { x: a, y: l, box: r };
}
function Wt(e, t) {
  if ("native" in e) return e;
  const { canvas: i, currentDevicePixelRatio: n } = t,
    s = Ri(i),
    o = s.boxSizing === "border-box",
    r = Kt(s, "padding"),
    a = Kt(s, "border", "width"),
    { x: l, y: c, box: h } = lu(e, i),
    f = r.left + (h && a.left),
    u = r.top + (h && a.top);
  let { width: d, height: g } = t;
  return (
    o && ((d -= r.width + a.width), (g -= r.height + a.height)),
    {
      x: Math.round((((l - f) / d) * i.width) / n),
      y: Math.round((((c - u) / g) * i.height) / n),
    }
  );
}
function cu(e, t, i) {
  let n, s;
  if (t === void 0 || i === void 0) {
    const o = e && jn(e);
    if (!o) (t = e.clientWidth), (i = e.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = Ri(o),
        l = Kt(a, "border", "width"),
        c = Kt(a, "padding");
      (t = r.width - c.width - l.width),
        (i = r.height - c.height - l.height),
        (n = Di(a.maxWidth, o, "clientWidth")),
        (s = Di(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: i, maxWidth: n || Ti, maxHeight: s || Ti };
}
const ti = (e) => Math.round(e * 10) / 10;
function hu(e, t, i, n) {
  const s = Ri(e),
    o = Kt(s, "margin"),
    r = Di(s.maxWidth, e, "clientWidth") || Ti,
    a = Di(s.maxHeight, e, "clientHeight") || Ti,
    l = cu(e, t, i);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const u = Kt(s, "border", "width"),
      d = Kt(s, "padding");
    (c -= d.width + u.width), (h -= d.height + u.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, n ? c / n : h - o.height)),
    (c = ti(Math.min(c, r, l.maxWidth))),
    (h = ti(Math.min(h, a, l.maxHeight))),
    c && !h && (h = ti(c / 2)),
    (t !== void 0 || i !== void 0) &&
      n &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = ti(Math.floor(h * n)))),
    { width: c, height: h }
  );
}
function As(e, t, i) {
  const n = t || 1,
    s = Math.floor(e.height * n),
    o = Math.floor(e.width * n);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const r = e.canvas;
  return (
    r.style &&
      (i || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${e.height}px`), (r.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== n || r.height !== s || r.width !== o
      ? ((e.currentDevicePixelRatio = n),
        (r.height = s),
        (r.width = o),
        e.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const fu = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    $n() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Os(e, t) {
  const i = ou(e, t),
    n = i && i.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Vt(e, t, i, n) {
  return { x: e.x + i * (t.x - e.x), y: e.y + i * (t.y - e.y) };
}
function uu(e, t, i, n) {
  return {
    x: e.x + i * (t.x - e.x),
    y:
      n === "middle"
        ? i < 0.5
          ? e.y
          : t.y
        : n === "after"
        ? i < 1
          ? e.y
          : t.y
        : i > 0
        ? t.y
        : e.y,
  };
}
function du(e, t, i, n) {
  const s = { x: e.cp2x, y: e.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = Vt(e, s, i),
    a = Vt(s, o, i),
    l = Vt(o, t, i),
    c = Vt(r, a, i),
    h = Vt(a, l, i);
  return Vt(c, h, i);
}
const gu = function (e, t) {
    return {
      x(i) {
        return e + e + t - i;
      },
      setWidth(i) {
        t = i;
      },
      textAlign(i) {
        return i === "center" ? i : i === "right" ? "left" : "right";
      },
      xPlus(i, n) {
        return i - n;
      },
      leftForLtr(i, n) {
        return i - n;
      },
    };
  },
  pu = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ne(e, t, i) {
  return e ? gu(t, i) : pu();
}
function kr(e, t) {
  let i, n;
  (t === "ltr" || t === "rtl") &&
    ((i = e.canvas.style),
    (n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")]),
    i.setProperty("direction", t, "important"),
    (e.prevTextDirection = n));
}
function Mr(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Sr(e) {
  return e === "angle"
    ? { between: cr, compare: df, normalize: xt }
    : { between: ee, compare: (t, i) => t - i, normalize: (t) => t };
}
function Ls({ start: e, end: t, count: i, loop: n, style: s }) {
  return {
    start: e % i,
    end: t % i,
    loop: n && (t - e + 1) % i === 0,
    style: s,
  };
}
function mu(e, t, i) {
  const { property: n, start: s, end: o } = i,
    { between: r, normalize: a } = Sr(n),
    l = t.length;
  let { start: c, end: h, loop: f } = e,
    u,
    d;
  if (f) {
    for (c += l, h += l, u = 0, d = l; u < d && r(a(t[c % l][n]), s, o); ++u)
      c--, h--;
    (c %= l), (h %= l);
  }
  return h < c && (h += l), { start: c, end: h, loop: f, style: e.style };
}
function Cr(e, t, i) {
  if (!i) return [e];
  const { property: n, start: s, end: o } = i,
    r = t.length,
    { compare: a, between: l, normalize: c } = Sr(n),
    { start: h, end: f, loop: u, style: d } = mu(e, t, i),
    g = [];
  let p = !1,
    m = null,
    _,
    y,
    v;
  const w = () => l(s, v, _) && a(s, v) !== 0,
    b = () => a(o, _) === 0 || l(o, v, _),
    M = () => p || w(),
    S = () => !p || b();
  for (let k = h, T = h; k <= f; ++k)
    (y = t[k % r]),
      !y.skip &&
        ((_ = c(y[n])),
        _ !== v &&
          ((p = l(_, s, o)),
          m === null && M() && (m = a(_, s) === 0 ? k : T),
          m !== null &&
            S() &&
            (g.push(Ls({ start: m, end: k, loop: u, count: r, style: d })),
            (m = null)),
          (T = k),
          (v = _)));
  return (
    m !== null && g.push(Ls({ start: m, end: f, loop: u, count: r, style: d })),
    g
  );
}
function Tr(e, t) {
  const i = [],
    n = e.segments;
  for (let s = 0; s < n.length; s++) {
    const o = Cr(n[s], e.points, t);
    o.length && i.push(...o);
  }
  return i;
}
function _u(e, t, i, n) {
  let s = 0,
    o = t - 1;
  if (i && !n) for (; s < t && !e[s].skip; ) s++;
  for (; s < t && e[s].skip; ) s++;
  for (s %= t, i && (o += s); o > s && e[o % t].skip; ) o--;
  return (o %= t), { start: s, end: o };
}
function xu(e, t, i, n) {
  const s = e.length,
    o = [];
  let r = t,
    a = e[t],
    l;
  for (l = t + 1; l <= i; ++l) {
    const c = e[l % s];
    c.skip || c.stop
      ? a.skip ||
        ((n = !1),
        o.push({ start: t % s, end: (l - 1) % s, loop: n }),
        (t = r = c.stop ? l : null))
      : ((r = l), a.skip && (t = l)),
      (a = c);
  }
  return r !== null && o.push({ start: t % s, end: r % s, loop: n }), o;
}
function bu(e, t) {
  const i = e.points,
    n = e.options.spanGaps,
    s = i.length;
  if (!s) return [];
  const o = !!e._loop,
    { start: r, end: a } = _u(i, s, o, n);
  if (n === !0) return Is(e, [{ start: r, end: a, loop: o }], i, t);
  const l = a < r ? a + s : a,
    c = !!e._fullLoop && r === 0 && a === s - 1;
  return Is(e, xu(i, r, l, c), i, t);
}
function Is(e, t, i, n) {
  return !n || !n.setContext || !i ? t : yu(e, t, i, n);
}
function yu(e, t, i, n) {
  const s = e._chart.getContext(),
    o = Ns(e.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a },
    } = e,
    l = i.length,
    c = [];
  let h = o,
    f = t[0].start,
    u = f;
  function d(g, p, m, _) {
    const y = a ? -1 : 1;
    if (g !== p) {
      for (g += l; i[g % l].skip; ) g -= y;
      for (; i[p % l].skip; ) p += y;
      g % l !== p % l &&
        (c.push({ start: g % l, end: p % l, loop: m, style: _ }),
        (h = _),
        (f = p % l));
    }
  }
  for (const g of t) {
    f = a ? f : g.start;
    let p = i[f % l],
      m;
    for (u = f + 1; u <= g.end; u++) {
      const _ = i[u % l];
      (m = Ns(
        n.setContext(
          Qt(s, {
            type: "segment",
            p0: p,
            p1: _,
            p0DataIndex: (u - 1) % l,
            p1DataIndex: u % l,
            datasetIndex: r,
          })
        )
      )),
        vu(m, h) && d(f, u - 1, g.loop, h),
        (p = _),
        (h = m);
    }
    f < u - 1 && d(f, u - 1, g.loop, h);
  }
  return c;
}
function Ns(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function vu(e, t) {
  if (!t) return !1;
  const i = [],
    n = function (s, o) {
      return Rn(o) ? (i.includes(o) || i.push(o), i.indexOf(o)) : o;
    };
  return JSON.stringify(e, n) !== JSON.stringify(t, n);
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class wu {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, i, n, s) {
    const o = i.listeners[s],
      r = i.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: i.initial,
        numSteps: r,
        currentStep: Math.min(n - i.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = fr.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let i = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > n.duration && (n.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (s.draw(), this._notify(s, n, t, "progress")),
        o.length ||
          ((n.running = !1),
          this._notify(s, n, t, "complete"),
          (n.initial = !1)),
        (i += o.length);
    }),
      (this._lastDate = t),
      i === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const i = this._charts;
    let n = i.get(t);
    return (
      n ||
        ((n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        i.set(t, n)),
      n
    );
  }
  listen(t, i, n) {
    this._getAnims(t).listeners[i].push(n);
  }
  add(t, i) {
    !i || !i.length || this._getAnims(t).items.push(...i);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const i = this._charts.get(t);
    i &&
      ((i.running = !0),
      (i.start = Date.now()),
      (i.duration = i.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const i = this._charts.get(t);
    return !(!i || !i.running || !i.items.length);
  }
  stop(t) {
    const i = this._charts.get(t);
    if (!i || !i.items.length) return;
    const n = i.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    (i.items = []), this._notify(t, i, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Ct = new wu();
const Es = "transparent",
  ku = {
    boolean(e, t, i) {
      return i > 0.5 ? t : e;
    },
    color(e, t, i) {
      const n = Ms(e || Es),
        s = n.valid && Ms(t || Es);
      return s && s.valid ? s.mix(n, i).hexString() : t;
    },
    number(e, t, i) {
      return e + (t - e) * i;
    },
  };
class Mu {
  constructor(t, i, n, s) {
    const o = i[n];
    s = Qe([t.to, s, o, t.from]);
    const r = Qe([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || ku[t.type || typeof r]),
      (this._easing = Se[t.easing] || Se.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = i),
      (this._prop = n),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, i, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        r = this._duration - o;
      (this._start = n),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Qe([t.to, i, s, t.from])),
        (this._from = Qe([t.from, s, i]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const i = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || i < n)), !this._active)) {
      (this._target[s] = a), this._notify(!0);
      return;
    }
    if (i < 0) {
      this._target[s] = o;
      return;
    }
    (l = (i / n) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((i, n) => {
      t.push({ res: i, rej: n });
    });
  }
  _notify(t) {
    const i = t ? "res" : "rej",
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][i]();
  }
}
class Dr {
  constructor(t, i) {
    (this._chart = t), (this._properties = new Map()), this.configure(i);
  }
  configure(t) {
    if (!N(t)) return;
    const i = Object.keys($.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!N(o)) return;
      const r = {};
      for (const a of i) r[a] = o[a];
      ((H(o.properties) && o.properties) || [s]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, i) {
    const n = i.options,
      s = Cu(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        Su(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, i) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(i),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, i));
        continue;
      }
      const h = i[c];
      let f = o[c];
      const u = n.get(c);
      if (f)
        if (u && f.active()) {
          f.update(u, h, a);
          continue;
        } else f.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      (o[c] = f = new Mu(u, t, c, h)), s.push(f);
    }
    return s;
  }
  update(t, i) {
    if (this._properties.size === 0) {
      Object.assign(t, i);
      return;
    }
    const n = this._createAnimations(t, i);
    if (n.length) return Ct.add(this._chart, n), !0;
  }
}
function Su(e, t) {
  const i = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = e[n[s]];
    o && o.active() && i.push(o.wait());
  }
  return Promise.all(i);
}
function Cu(e, t) {
  if (!t) return;
  let i = e.options;
  if (!i) {
    e.options = t;
    return;
  }
  return (
    i.$shared &&
      (e.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })),
    i
  );
}
function Rs(e, t) {
  const i = (e && e.options) || {},
    n = i.reverse,
    s = i.min === void 0 ? t : 0,
    o = i.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function Tu(e, t, i) {
  if (i === !1) return !1;
  const n = Rs(e, i),
    s = Rs(t, i);
  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
}
function Du(e) {
  let t, i, n, s;
  return (
    N(e)
      ? ((t = e.top), (i = e.right), (n = e.bottom), (s = e.left))
      : (t = i = n = s = e),
    { top: t, right: i, bottom: n, left: s, disabled: e === !1 }
  );
}
function Pr(e, t) {
  const i = [],
    n = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) i.push(n[s].index);
  return i;
}
function Fs(e, t, i, n = {}) {
  const s = e.keys,
    o = n.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (((l = +s[r]), l === i)) {
        if (n.all) continue;
        break;
      }
      (c = e.values[l]), X(c) && (o || t === 0 || re(t) === re(c)) && (t += c);
    }
    return t;
  }
}
function Pu(e, t) {
  const { iScale: i, vScale: n } = t,
    s = i.axis === "x" ? "x" : "y",
    o = n.axis === "x" ? "x" : "y",
    r = Object.keys(e),
    a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    (h = r[l]), (a[l] = { [s]: h, [o]: e[h] });
  return a;
}
function qi(e, t) {
  const i = e && e.options.stacked;
  return i || (i === void 0 && t.stack !== void 0);
}
function Au(e, t, i) {
  return `${e.id}.${t.id}.${i.stack || i.type}`;
}
function Ou(e) {
  const { min: t, max: i, minDefined: n, maxDefined: s } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? i : Number.POSITIVE_INFINITY,
  };
}
function Lu(e, t, i) {
  const n = e[t] || (e[t] = {});
  return n[i] || (n[i] = {});
}
function zs(e, t, i, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = e[s.index];
    if ((i && o > 0) || (!i && o < 0)) return s.index;
  }
  return null;
}
function Bs(e, t) {
  const { chart: i, _cachedMeta: n } = e,
    s = i._stacks || (i._stacks = {}),
    { iScale: o, vScale: r, index: a } = n,
    l = o.axis,
    c = r.axis,
    h = Au(o, r, n),
    f = t.length;
  let u;
  for (let d = 0; d < f; ++d) {
    const g = t[d],
      { [l]: p, [c]: m } = g,
      _ = g._stacks || (g._stacks = {});
    (u = _[c] = Lu(s, h, p)),
      (u[a] = m),
      (u._top = zs(u, r, !0, n.type)),
      (u._bottom = zs(u, r, !1, n.type));
    const y = u._visualValues || (u._visualValues = {});
    y[a] = m;
  }
}
function Ki(e, t) {
  const i = e.scales;
  return Object.keys(i)
    .filter((n) => i[n].axis === t)
    .shift();
}
function Iu(e, t) {
  return Qt(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function Nu(e, t, i) {
  return Qt(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: i,
    index: t,
    mode: "default",
    type: "data",
  });
}
function ue(e, t) {
  const i = e.controller.index,
    n = e.vScale && e.vScale.axis;
  if (n) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][i] === void 0) return;
      delete o[n][i],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[i] !== void 0 &&
          delete o[n]._visualValues[i];
    }
  }
}
const Gi = (e) => e === "reset" || e === "none",
  $s = (e, t) => (t ? e : Object.assign({}, e)),
  Eu = (e, t, i) =>
    e && !t.hidden && t._stacked && { keys: Pr(i, !0), values: null };
class De {
  constructor(t, i) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = i),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = qi(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && ue(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      i = this._cachedMeta,
      n = this.getDataset(),
      s = (f, u, d, g) => (f === "x" ? u : f === "r" ? g : d),
      o = (i.xAxisID = I(n.xAxisID, Ki(t, "x"))),
      r = (i.yAxisID = I(n.yAxisID, Ki(t, "y"))),
      a = (i.rAxisID = I(n.rAxisID, Ki(t, "r"))),
      l = i.indexAxis,
      c = (i.iAxisID = s(l, o, r, a)),
      h = (i.vAxisID = s(l, r, o, a));
    (i.xScale = this.getScaleForId(o)),
      (i.yScale = this.getScaleForId(r)),
      (i.rScale = this.getScaleForId(a)),
      (i.iScale = this.getScaleForId(c)),
      (i.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const i = this._cachedMeta;
    return t === i.iScale ? i.vScale : i.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && vs(this._data, this), t._stacked && ue(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      i = t.data || (t.data = []),
      n = this._data;
    if (N(i)) {
      const s = this._cachedMeta;
      this._data = Pu(i, s);
    } else if (n !== i) {
      if (n) {
        vs(n, this);
        const s = this._cachedMeta;
        ue(s), (s._parsed = []);
      }
      i && Object.isExtensible(i) && _f(i, this),
        (this._syncList = []),
        (this._data = i);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const i = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = i._stacked;
    (i._stacked = qi(i.vScale, i)),
      i.stack !== n.stack && ((s = !0), ue(i), (i.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== i._stacked) &&
        (Bs(this, i._parsed), (i._stacked = qi(i.vScale, i)));
  }
  configure() {
    const t = this.chart.config,
      i = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), i, !0);
    (this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, i) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: r } = n,
      a = o.axis;
    let l = t === 0 && i === s.length ? !0 : n._sorted,
      c = t > 0 && n._parsed[t - 1],
      h,
      f,
      u;
    if (this._parsing === !1) (n._parsed = s), (n._sorted = !0), (u = s);
    else {
      H(s[t])
        ? (u = this.parseArrayData(n, s, t, i))
        : N(s[t])
        ? (u = this.parseObjectData(n, s, t, i))
        : (u = this.parsePrimitiveData(n, s, t, i));
      const d = () => f[a] === null || (c && f[a] < c[a]);
      for (h = 0; h < i; ++h)
        (n._parsed[h + t] = f = u[h]), l && (d() && (l = !1), (c = f));
      n._sorted = l;
    }
    r && Bs(this, u);
  }
  parsePrimitiveData(t, i, n, s) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      h = o === r,
      f = new Array(s);
    let u, d, g;
    for (u = 0, d = s; u < d; ++u)
      (g = u + n),
        (f[u] = { [a]: h || o.parse(c[g], g), [l]: r.parse(i[g], g) });
    return f;
  }
  parseArrayData(t, i, n, s) {
    const { xScale: o, yScale: r } = t,
      a = new Array(s);
    let l, c, h, f;
    for (l = 0, c = s; l < c; ++l)
      (h = l + n),
        (f = i[h]),
        (a[l] = { x: o.parse(f[0], h), y: r.parse(f[1], h) });
    return a;
  }
  parseObjectData(t, i, n, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let h, f, u, d;
    for (h = 0, f = s; h < f; ++h)
      (u = h + n),
        (d = i[u]),
        (c[h] = { x: o.parse(Si(d, a), u), y: r.parse(Si(d, l), u) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, i, n) {
    const s = this.chart,
      o = this._cachedMeta,
      r = i[t.axis],
      a = { keys: Pr(s, !0), values: i._stacks[t.axis]._visualValues };
    return Fs(a, r, o.index, { mode: n });
  }
  updateRangeFromParsed(t, i, n, s) {
    const o = n[i.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[i.axis];
    s && a && ((s.values = a), (r = Fs(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, i) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      r = s.length,
      a = this._getOtherScale(t),
      l = Eu(i, n, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: f } = Ou(a);
    let u, d;
    function g() {
      d = s[u];
      const p = d[a.axis];
      return !X(d[t.axis]) || h > p || f < p;
    }
    for (
      u = 0;
      u < r && !(!g() && (this.updateRangeFromParsed(c, t, d, l), o));
      ++u
    );
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(c, t, d, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const i = this._cachedMeta._parsed,
      n = [];
    let s, o, r;
    for (s = 0, o = i.length; s < o; ++s) (r = i[s][t.axis]), X(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta,
      n = i.iScale,
      s = i.vScale,
      o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const i = this._cachedMeta;
    this.update(t || "default"),
      (i._clip = Du(
        I(this.options.clip, Tu(i.xScale, i.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      i = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = i.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const f = s[h];
      f.hidden || (f.active && c ? r.push(f) : f.draw(t, o));
    }
    for (h = 0; h < r.length; ++h) r[h].draw(t, o);
  }
  getStyle(t, i) {
    const n = i ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, i, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = Nu(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = Iu(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!i), (o.mode = n), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, i) {
    return this._resolveElementOptions(this.dataElementType.id, i, t);
  }
  _resolveElementOptions(t, i = "default", n) {
    const s = i === "active",
      o = this._cachedDataOpts,
      r = t + "-" + i,
      a = o[r],
      l = this.enableOptionSharing && Ci(n);
    if (a) return $s(a, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      f = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      u = c.getOptionScopes(this.getDataset(), h),
      d = Object.keys($.elements[t]),
      g = () => this.getContext(n, s, i),
      p = c.resolveNamedOptions(u, d, g, f);
    return p.$shared && ((p.$shared = l), (o[r] = Object.freeze($s(p, l)))), p;
  }
  _resolveAnimations(t, i, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${i}`,
      a = o[r];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config,
        f = h.datasetAnimationScopeKeys(this._type, i),
        u = h.getOptionScopes(this.getDataset(), f);
      l = h.createResolver(u, this.getContext(t, n, i));
    }
    const c = new Dr(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, i) {
    return !i || Gi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, i) {
    const n = this.resolveDataElementOptions(t, i),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      r = this.includeOptions(i, o) || o !== s;
    return (
      this.updateSharedOptions(o, i, n), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, i, n, s) {
    Gi(s) ? Object.assign(t, n) : this._resolveAnimations(i, s).update(t, n);
  }
  updateSharedOptions(t, i, n) {
    t && !Gi(i) && this._resolveAnimations(void 0, i).update(t, n);
  }
  _setStyle(t, i, n, s) {
    t.active = s;
    const o = this.getStyle(i, s);
    this._resolveAnimations(i, n, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const i = this._data,
      n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = n.length,
      o = i.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, i, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + i;
    let a;
    const l = (c) => {
      for (c.length += i, a = c.length - 1; a >= r; a--) c[a] = c[a - i];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(t, i),
      n && this.updateElements(o, t, i, "reset");
  }
  updateElements(t, i, n, s) {}
  _removeElements(t, i) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, i);
      n._stacked && ue(n, s);
    }
    n.data.splice(t, i);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [i, n, s] = t;
      this[i](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, i) {
    i && this._sync(["_removeElements", t, i]);
    const n = arguments.length - 2;
    n && this._sync(["_insertElements", t, n]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
L(De, "defaults", {}),
  L(De, "datasetElementType", null),
  L(De, "dataElementType", null);
class ui extends De {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const i = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = i,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = vf(i, s, r);
    (this._drawStart = a),
      (this._drawCount = l),
      wf(i) && ((a = 0), (l = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(n, void 0, { animated: !r, options: c }, t),
      this.updateElements(s, a, l, t);
  }
  updateElements(t, i, n, s) {
    const o = s === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: f } = this._getSharedOptions(i, s),
      u = r.axis,
      d = a.axis,
      { spanGaps: g, segment: p } = this.options,
      m = Re(g) ? g : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || o || s === "none",
      y = i + n,
      v = t.length;
    let w = i > 0 && this.getParsed(i - 1);
    for (let b = 0; b < v; ++b) {
      const M = t[b],
        S = _ ? M : {};
      if (b < i || b >= y) {
        S.skip = !0;
        continue;
      }
      const k = this.getParsed(b),
        T = B(k[d]),
        A = (S[u] = r.getPixelForValue(k[u], b)),
        D = (S[d] =
          o || T
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[d], b));
      (S.skip = isNaN(A) || isNaN(D) || T),
        (S.stop = b > 0 && Math.abs(k[u] - w[u]) > m),
        p && ((S.parsed = k), (S.raw = c.data[b])),
        f &&
          (S.options =
            h || this.resolveDataElementOptions(b, M.active ? "active" : s)),
        _ || this.updateElement(M, b, S, s),
        (w = k);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      i = t.dataset,
      n = (i.options && i.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
L(ui, "id", "line"),
  L(ui, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  L(ui, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function jt() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Hn {
  constructor(t) {
    L(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Hn.prototype, t);
  }
  init() {}
  formats() {
    return jt();
  }
  parse() {
    return jt();
  }
  format() {
    return jt();
  }
  add() {
    return jt();
  }
  diff() {
    return jt();
  }
  startOf() {
    return jt();
  }
  endOf() {
    return jt();
  }
}
var Ru = { _date: Hn };
function Fu(e, t, i, n) {
  const { controller: s, data: o, _sorted: r } = e,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? pf : Xt;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0],
          h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const f = l(o, t, i - h),
            u = l(o, t, i + h);
          return { lo: f.lo, hi: u.hi };
        }
      }
    } else return l(o, t, i);
  }
  return { lo: 0, hi: o.length - 1 };
}
function We(e, t, i, n, s) {
  const o = e.getSortedVisibleDatasetMetas(),
    r = i[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a],
      { lo: f, hi: u } = Fu(o[a], t, r, s);
    for (let d = f; d <= u; ++d) {
      const g = h[d];
      g.skip || n(g, c, d);
    }
  }
}
function zu(e) {
  const t = e.indexOf("x") !== -1,
    i = e.indexOf("y") !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      r = i ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Zi(e, t, i, n, s) {
  const o = [];
  return (
    (!s && !e.isPointInArea(t)) ||
      We(
        e,
        i,
        t,
        function (a, l, c) {
          (!s && !Fe(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, n) &&
              o.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function Bu(e, t, i, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps(
        ["startAngle", "endAngle"],
        n
      ),
      { angle: f } = uf(r, { x: t.x, y: t.y });
    cr(f, c, h) && s.push({ element: r, datasetIndex: a, index: l });
  }
  return We(e, i, t, o), s;
}
function $u(e, t, i, n, s, o) {
  let r = [];
  const a = zu(i);
  let l = Number.POSITIVE_INFINITY;
  function c(h, f, u) {
    const d = h.inRange(t.x, t.y, s);
    if (n && !d) return;
    const g = h.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(g)) && !d) return;
    const m = a(t, g);
    m < l
      ? ((r = [{ element: h, datasetIndex: f, index: u }]), (l = m))
      : m === l && r.push({ element: h, datasetIndex: f, index: u });
  }
  return We(e, i, t, c), r;
}
function Qi(e, t, i, n, s, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : i === "r" && !n
    ? Bu(e, t, i, s)
    : $u(e, t, i, n, s, o);
}
function js(e, t, i, n, s) {
  const o = [],
    r = i === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    We(e, i, t, (l, c, h) => {
      l[r] &&
        l[r](t[i], s) &&
        (o.push({ element: l, datasetIndex: c, index: h }),
        (a = a || l.inRange(t.x, t.y, s)));
    }),
    n && !a ? [] : o
  );
}
var ju = {
  evaluateInteractionItems: We,
  modes: {
    index(e, t, i, n) {
      const s = Wt(t, e),
        o = i.axis || "x",
        r = i.includeInvisible || !1,
        a = i.intersect ? Zi(e, s, o, n, r) : Qi(e, s, o, !1, n, r),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = a[0].index,
              f = c.data[h];
            f &&
              !f.skip &&
              l.push({ element: f, datasetIndex: c.index, index: h });
          }),
          l)
        : [];
    },
    dataset(e, t, i, n) {
      const s = Wt(t, e),
        o = i.axis || "xy",
        r = i.includeInvisible || !1;
      let a = i.intersect ? Zi(e, s, o, n, r) : Qi(e, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = e.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({ element: c[h], datasetIndex: l, index: h });
      }
      return a;
    },
    point(e, t, i, n) {
      const s = Wt(t, e),
        o = i.axis || "xy",
        r = i.includeInvisible || !1;
      return Zi(e, s, o, n, r);
    },
    nearest(e, t, i, n) {
      const s = Wt(t, e),
        o = i.axis || "xy",
        r = i.includeInvisible || !1;
      return Qi(e, s, o, i.intersect, n, r);
    },
    x(e, t, i, n) {
      const s = Wt(t, e);
      return js(e, s, "x", i.intersect, n);
    },
    y(e, t, i, n) {
      const s = Wt(t, e);
      return js(e, s, "y", i.intersect, n);
    },
  },
};
const Ar = ["left", "top", "right", "bottom"];
function de(e, t) {
  return e.filter((i) => i.pos === t);
}
function Hs(e, t) {
  return e.filter((i) => Ar.indexOf(i.pos) === -1 && i.box.axis === t);
}
function ge(e, t) {
  return e.sort((i, n) => {
    const s = t ? n : i,
      o = t ? i : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Hu(e) {
  const t = [];
  let i, n, s, o, r, a;
  for (i = 0, n = (e || []).length; i < n; ++i)
    (s = e[i]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = s),
      t.push({
        index: i,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function Wu(e) {
  const t = {};
  for (const i of e) {
    const { stack: n, pos: s, stackWeight: o } = i;
    if (!n || !Ar.includes(s)) continue;
    const r = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function Vu(e, t) {
  const i = Wu(e),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box,
      c = i[a.stack],
      h = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = h ? h * n : l && t.availableWidth), (a.height = s))
      : ((a.width = n), (a.height = h ? h * s : l && t.availableHeight));
  }
  return i;
}
function Yu(e) {
  const t = Hu(e),
    i = ge(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    n = ge(de(t, "left"), !0),
    s = ge(de(t, "right")),
    o = ge(de(t, "top"), !0),
    r = ge(de(t, "bottom")),
    a = Hs(t, "x"),
    l = Hs(t, "y");
  return {
    fullSize: i,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: de(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function Ws(e, t, i, n) {
  return Math.max(e[i], t[i]) + Math.max(e[n], t[n]);
}
function Or(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function Uu(e, t, i, n) {
  const { pos: s, box: o } = i,
    r = e.maxPadding;
  if (!N(s)) {
    i.size && (e[s] -= i.size);
    const f = n[i.stack] || { size: 0, count: 1 };
    (f.size = Math.max(f.size, i.horizontal ? o.height : o.width)),
      (i.size = f.size / f.count),
      (e[s] += i.size);
  }
  o.getPadding && Or(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ws(r, e, "left", "right")),
    l = Math.max(0, t.outerHeight - Ws(r, e, "top", "bottom")),
    c = a !== e.w,
    h = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    i.horizontal ? { same: c, other: h } : { same: h, other: c }
  );
}
function Xu(e) {
  const t = e.maxPadding;
  function i(n) {
    const s = Math.max(t[n] - e[n], 0);
    return (e[n] += s), s;
  }
  (e.y += i("top")), (e.x += i("left")), i("right"), i("bottom");
}
function qu(e, t) {
  const i = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], i[r]);
      }),
      o
    );
  }
  return n(e ? ["left", "right"] : ["top", "bottom"]);
}
function ve(e, t, i, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    (a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, qu(a.horizontal, t));
    const { same: f, other: u } = Uu(t, i, a, n);
    (c |= f && s.length), (h = h || u), l.fullSize || s.push(a);
  }
  return (c && ve(s, t, i, n)) || h;
}
function ei(e, t, i, n, s) {
  (e.top = i),
    (e.left = t),
    (e.right = t + n),
    (e.bottom = i + s),
    (e.width = n),
    (e.height = s);
}
function Vs(e, t, i, n) {
  const s = i.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box,
      c = n[a.stack] || { count: 1, placed: 0, weight: 1 },
      h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * h,
        u = c.size || l.height;
      Ci(c.start) && (r = c.start),
        l.fullSize
          ? ei(l, s.left, r, i.outerWidth - s.right - s.left, u)
          : ei(l, t.left + c.placed, r, f, u),
        (c.start = r),
        (c.placed += f),
        (r = l.bottom);
    } else {
      const f = t.h * h,
        u = c.size || l.width;
      Ci(c.start) && (o = c.start),
        l.fullSize
          ? ei(l, o, s.top, u, i.outerHeight - s.bottom - s.top)
          : ei(l, o, t.top + c.placed, u, f),
        (c.start = o),
        (c.placed += f),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var nt = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(i) {
                t.draw(i);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const i = e.boxes ? e.boxes.indexOf(t) : -1;
    i !== -1 && e.boxes.splice(i, 1);
  },
  configure(e, t, i) {
    (t.fullSize = i.fullSize), (t.position = i.position), (t.weight = i.weight);
  },
  update(e, t, i, n) {
    if (!e) return;
    const s = st(e.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(i - s.height, 0),
      a = Yu(e.boxes),
      l = a.vertical,
      c = a.horizontal;
    R(e.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h =
        l.reduce(
          (p, m) => (m.box.options && m.box.options.display === !1 ? p : p + 1),
          0
        ) || 1,
      f = Object.freeze({
        outerWidth: t,
        outerHeight: i,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: r / 2,
      }),
      u = Object.assign({}, s);
    Or(u, st(n));
    const d = Object.assign(
        { maxPadding: u, w: o, h: r, x: s.left, y: s.top },
        s
      ),
      g = Vu(l.concat(c), f);
    ve(a.fullSize, d, f, g),
      ve(l, d, f, g),
      ve(c, d, f, g) && ve(l, d, f, g),
      Xu(d),
      Vs(a.leftAndTop, d, f, g),
      (d.x += d.w),
      (d.y += d.h),
      Vs(a.rightAndBottom, d, f, g),
      (e.chartArea = {
        left: d.left,
        top: d.top,
        right: d.left + d.w,
        bottom: d.top + d.h,
        height: d.h,
        width: d.w,
      }),
      R(a.chartArea, (p) => {
        const m = p.box;
        Object.assign(m, e.chartArea),
          m.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Lr {
  acquireContext(t, i) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, i, n) {}
  removeEventListener(t, i, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, i, n, s) {
    return (
      (i = Math.max(0, i || t.width)),
      (n = n || t.height),
      { width: i, height: Math.max(0, s ? Math.floor(i / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Ku extends Lr {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const di = "$chartjs",
  Gu = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Ys = (e) => e === null || e === "";
function Zu(e, t) {
  const i = e.style,
    n = e.getAttribute("height"),
    s = e.getAttribute("width");
  if (
    ((e[di] = {
      initial: {
        height: n,
        width: s,
        style: { display: i.display, height: i.height, width: i.width },
      },
    }),
    (i.display = i.display || "block"),
    (i.boxSizing = i.boxSizing || "border-box"),
    Ys(s))
  ) {
    const o = Os(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Ys(n))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const o = Os(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Ir = fu ? { passive: !0 } : !1;
function Qu(e, t, i) {
  e && e.addEventListener(t, i, Ir);
}
function Ju(e, t, i) {
  e && e.canvas && e.canvas.removeEventListener(t, i, Ir);
}
function td(e, t) {
  const i = Gu[e.type] || e.type,
    { x: n, y: s } = Wt(e, t);
  return {
    type: i,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null,
  };
}
function Pi(e, t) {
  for (const i of e) if (i === t || i.contains(t)) return !0;
}
function ed(e, t, i) {
  const n = e.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || Pi(a.addedNodes, n)), (r = r && !Pi(a.removedNodes, n));
      r && i();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function id(e, t, i) {
  const n = e.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || Pi(a.removedNodes, n)), (r = r && !Pi(a.addedNodes, n));
      r && i();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const Be = new Map();
let Us = 0;
function Nr() {
  const e = window.devicePixelRatio;
  e !== Us &&
    ((Us = e),
    Be.forEach((t, i) => {
      i.currentDevicePixelRatio !== e && t();
    }));
}
function nd(e, t) {
  Be.size || window.addEventListener("resize", Nr), Be.set(e, t);
}
function sd(e) {
  Be.delete(e), Be.size || window.removeEventListener("resize", Nr);
}
function od(e, t, i) {
  const n = e.canvas,
    s = n && jn(n);
  if (!s) return;
  const o = ur((a, l) => {
      const c = s.clientWidth;
      i(a, l), c < s.clientWidth && i();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return r.observe(s), nd(e, o), r;
}
function Ji(e, t, i) {
  i && i.disconnect(), t === "resize" && sd(e);
}
function rd(e, t, i) {
  const n = e.canvas,
    s = ur((o) => {
      e.ctx !== null && i(td(o, e));
    }, e);
  return Qu(n, t, s), s;
}
class ad extends Lr {
  acquireContext(t, i) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Zu(t, i), n) : null;
  }
  releaseContext(t) {
    const i = t.canvas;
    if (!i[di]) return !1;
    const n = i[di].initial;
    ["height", "width"].forEach((o) => {
      const r = n[o];
      B(r) ? i.removeAttribute(o) : i.setAttribute(o, r);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        i.style[o] = s[o];
      }),
      (i.width = i.width),
      delete i[di],
      !0
    );
  }
  addEventListener(t, i, n) {
    this.removeEventListener(t, i);
    const s = t.$proxies || (t.$proxies = {}),
      r = { attach: ed, detach: id, resize: od }[i] || rd;
    s[i] = r(t, i, n);
  }
  removeEventListener(t, i) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[i];
    if (!s) return;
    (({ attach: Ji, detach: Ji, resize: Ji })[i] || Ju)(t, i, s),
      (n[i] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, i, n, s) {
    return hu(t, i, n, s);
  }
  isAttached(t) {
    const i = t && jn(t);
    return !!(i && i.isConnected);
  }
}
function ld(e) {
  return !$n() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? Ku
    : ad;
}
class At {
  constructor() {
    L(this, "x");
    L(this, "y");
    L(this, "active", !1);
    L(this, "options");
    L(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: i, y: n } = this.getProps(["x", "y"], t);
    return { x: i, y: n };
  }
  hasValue() {
    return Re(this.x) && Re(this.y);
  }
  getProps(t, i) {
    const n = this.$animations;
    if (!i || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
L(At, "defaults", {}), L(At, "defaultRoutes");
function cd(e, t) {
  const i = e.options.ticks,
    n = hd(e),
    s = Math.min(i.maxTicksLimit || n, n),
    o = i.major.enabled ? ud(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = [];
  if (r > s) return dd(t, c, o, r / s), c;
  const h = fd(o, t, s);
  if (r > 0) {
    let f, u;
    const d = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (ii(t, c, h, B(d) ? 0 : a - d, a), f = 0, u = r - 1; f < u; f++)
      ii(t, c, h, o[f], o[f + 1]);
    return ii(t, c, h, l, B(d) ? t.length : l + d), c;
  }
  return ii(t, c, h), c;
}
function hd(e) {
  const t = e.options.offset,
    i = e._tickSize(),
    n = e._length / i + (t ? 0 : 1),
    s = e._maxLength / i;
  return Math.floor(Math.min(n, s));
}
function fd(e, t, i) {
  const n = gd(e),
    s = t.length / i;
  if (!n) return Math.max(s, 1);
  const o = lf(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function ud(e) {
  const t = [];
  let i, n;
  for (i = 0, n = e.length; i < n; i++) e[i].major && t.push(i);
  return t;
}
function dd(e, t, i, n) {
  let s = 0,
    o = i[0],
    r;
  for (n = Math.ceil(n), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), s++, (o = i[s * n]));
}
function ii(e, t, i, n, s) {
  const o = I(n, 0),
    r = Math.min(I(s, e.length), e.length);
  let a = 0,
    l,
    c,
    h;
  for (
    i = Math.ceil(i), s && ((l = s - n), (i = l / Math.floor(l / i))), h = o;
    h < 0;

  )
    a++, (h = Math.round(o + a * i));
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(e[c]), a++, (h = Math.round(o + a * i)));
}
function gd(e) {
  const t = e.length;
  let i, n;
  if (t < 2) return !1;
  for (n = e[0], i = 1; i < t; ++i) if (e[i] - e[i - 1] !== n) return !1;
  return n;
}
const pd = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  Xs = (e, t, i) => (t === "top" || t === "left" ? e[t] + i : e[t] - i),
  qs = (e, t) => Math.min(t || e, e);
function Ks(e, t) {
  const i = [],
    n = e.length / t,
    s = e.length;
  let o = 0;
  for (; o < s; o += n) i.push(e[Math.floor(o)]);
  return i;
}
function md(e, t, i) {
  const n = e.ticks.length,
    s = Math.min(t, n - 1),
    o = e._startPixel,
    r = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(s),
    c;
  if (
    !(
      i &&
      (n === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
        ? (c = (e.getPixelForTick(1) - l) / 2)
        : (c = (l - e.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function _d(e, t) {
  R(e, (i) => {
    const n = i.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete i.data[n[o]];
      n.splice(0, s);
    }
  });
}
function pe(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Gs(e, t) {
  if (!e.display) return 0;
  const i = U(e.font, t),
    n = st(e.padding);
  return (H(e.text) ? e.text.length : 1) * i.lineHeight + n.height;
}
function xd(e, t) {
  return Qt(e, { scale: t, type: "scale" });
}
function bd(e, t, i) {
  return Qt(e, { tick: i, index: t, type: "tick" });
}
function yd(e, t, i) {
  let n = En(e);
  return ((i && t !== "right") || (!i && t === "right")) && (n = pd(n)), n;
}
function vd(e, t, i, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = e,
    { chartArea: c, scales: h } = l;
  let f = 0,
    u,
    d,
    g;
  const p = r - s,
    m = a - o;
  if (e.isHorizontal()) {
    if (((d = Y(n, o, a)), N(i))) {
      const _ = Object.keys(i)[0],
        y = i[_];
      g = h[_].getPixelForValue(y) + p - t;
    } else
      i === "center" ? (g = (c.bottom + c.top) / 2 + p - t) : (g = Xs(e, i, t));
    u = a - o;
  } else {
    if (N(i)) {
      const _ = Object.keys(i)[0],
        y = i[_];
      d = h[_].getPixelForValue(y) - m + t;
    } else
      i === "center" ? (d = (c.left + c.right) / 2 - m + t) : (d = Xs(e, i, t));
    (g = Y(n, r, s)), (f = i === "left" ? -ft : ft);
  }
  return { titleX: d, titleY: g, maxWidth: u, rotation: f };
}
class ce extends At {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, i) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: i, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = pt(t, Number.POSITIVE_INFINITY)),
      (i = pt(i, Number.NEGATIVE_INFINITY)),
      (n = pt(n, Number.POSITIVE_INFINITY)),
      (s = pt(s, Number.NEGATIVE_INFINITY)),
      { min: pt(t, n), max: pt(i, s), minDefined: X(t), maxDefined: X(i) }
    );
  }
  getMinMax(t) {
    let { min: i, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      r;
    if (s && o) return { min: i, max: n };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        s || (i = Math.min(i, r.min)),
        o || (n = Math.max(n, r.max));
    return (
      (i = o && i > n ? n : i),
      (n = s && i > n ? i : n),
      { min: pt(i, pt(n, i)), max: pt(n, pt(i, n)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    F(this.options.beforeUpdate, [this]);
  }
  update(t, i, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = n =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Hf(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ks(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = cd(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      i,
      n;
    this.isHorizontal()
      ? ((i = this.left), (n = this.right))
      : ((i = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = i),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - i),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    F(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    F(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    F(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), F(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    F(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const i = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n]), (o.label = F(i.callback, [o.value, n, t], this));
  }
  afterTickToLabelConversion() {
    F(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    F(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      i = t.ticks,
      n = qs(this.ticks.length, t.ticks.maxTicksLimit),
      s = i.minRotation || 0,
      o = i.maxRotation;
    let r = s,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !i.display ||
      s >= o ||
      n <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(),
      f = h.widest.width,
      u = h.highest.height,
      d = it(this.chart.width - f, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / n : d / (n - 1)),
      f + 6 > a &&
        ((a = d / (n - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          pe(t.grid) -
          i.padding -
          Gs(t.title, this.chart.options.font)),
        (c = Math.sqrt(f * f + u * u)),
        (r = ff(
          Math.min(
            Math.asin(it((h.highest.height + 6) / a, -1, 1)),
            Math.asin(it(l / c, -1, 1)) - Math.asin(it(u / c, -1, 1))
          )
        )),
        (r = Math.max(s, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    F(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    F(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: i,
        options: { ticks: n, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = Gs(s, i.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = pe(o) + l))
          : ((t.height = this.maxHeight), (t.width = pe(o) + l)),
        n.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: h,
            widest: f,
            highest: u,
          } = this._getLabelSizes(),
          d = n.padding * 2,
          g = Ut(this.labelRotation),
          p = Math.cos(g),
          m = Math.sin(g);
        if (a) {
          const _ = n.mirror ? 0 : m * f.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + _ + d);
        } else {
          const _ = n.mirror ? 0 : p * f.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + _ + d);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            i.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            i.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, i, n, s) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0,
        d = 0;
      l
        ? c
          ? ((u = s * t.width), (d = n * i.height))
          : ((u = n * t.height), (d = s * i.width))
        : o === "start"
        ? (d = i.width)
        : o === "end"
        ? (u = t.width)
        : o !== "inner" && ((u = t.width / 2), (d = i.width / 2)),
        (this.paddingLeft = Math.max(
          ((u - h + r) * this.width) / (this.width - h),
          0
        )),
        (this.paddingRight = Math.max(
          ((d - f + r) * this.width) / (this.width - f),
          0
        ));
    } else {
      let h = i.height / 2,
        f = t.height / 2;
      o === "start"
        ? ((h = 0), (f = t.height))
        : o === "end" && ((h = i.height), (f = 0)),
        (this.paddingTop = h + r),
        (this.paddingBottom = f + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    F(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: i } = this.options;
    return i === "top" || i === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let i, n;
    for (i = 0, n = t.length; i < n; i++)
      B(t[i].label) && (t.splice(i, 1), n--, i--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const i = this.options.ticks.sampleSize;
      let n = this.ticks;
      i < n.length && (n = Ks(n, i)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, i, n) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(i / qs(i, n));
    let c = 0,
      h = 0,
      f,
      u,
      d,
      g,
      p,
      m,
      _,
      y,
      v,
      w,
      b;
    for (f = 0; f < i; f += l) {
      if (
        ((g = t[f].label),
        (p = this._resolveTickFontOptions(f)),
        (s.font = m = p.string),
        (_ = o[m] = o[m] || { data: {}, gc: [] }),
        (y = p.lineHeight),
        (v = w = 0),
        !B(g) && !H(g))
      )
        (v = Cs(s, _.data, _.gc, v, g)), (w = y);
      else if (H(g))
        for (u = 0, d = g.length; u < d; ++u)
          (b = g[u]),
            !B(b) && !H(b) && ((v = Cs(s, _.data, _.gc, v, b)), (w += y));
      r.push(v), a.push(w), (c = Math.max(v, c)), (h = Math.max(w, h));
    }
    _d(o, i);
    const M = r.indexOf(c),
      S = a.indexOf(h),
      k = (T) => ({ width: r[T] || 0, height: a[T] || 0 });
    return {
      first: k(0),
      last: k(i - 1),
      widest: k(M),
      highest: k(S),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, i) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const i = this._startPixel + t * this._length;
    return gf(this._alignToPixels ? $t(this.chart, i, 0) : i);
  }
  getDecimalForPixel(t) {
    const i = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - i : i;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: i } = this;
    return t < 0 && i < 0 ? i : t > 0 && i > 0 ? t : 0;
  }
  getContext(t) {
    const i = this.ticks || [];
    if (t >= 0 && t < i.length) {
      const n = i[t];
      return n.$context || (n.$context = bd(this.getContext(), t, n));
    }
    return this.$context || (this.$context = xd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      i = Ut(this.labelRotation),
      n = Math.abs(Math.cos(i)),
      s = Math.abs(Math.sin(i)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * n > a * s
        ? a / n
        : l / s
      : l * s < a * n
      ? l / n
      : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const i = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: r, border: a } = s,
      l = o.offset,
      c = this.isHorizontal(),
      f = this.ticks.length + (l ? 1 : 0),
      u = pe(o),
      d = [],
      g = a.setContext(this.getContext()),
      p = g.display ? g.width : 0,
      m = p / 2,
      _ = function (z) {
        return $t(n, z, p);
      };
    let y, v, w, b, M, S, k, T, A, D, P, C;
    if (r === "top")
      (y = _(this.bottom)),
        (S = this.bottom - u),
        (T = y - m),
        (D = _(t.top) + m),
        (C = t.bottom);
    else if (r === "bottom")
      (y = _(this.top)),
        (D = t.top),
        (C = _(t.bottom) - m),
        (S = y + m),
        (T = this.top + u);
    else if (r === "left")
      (y = _(this.right)),
        (M = this.right - u),
        (k = y - m),
        (A = _(t.left) + m),
        (P = t.right);
    else if (r === "right")
      (y = _(this.left)),
        (A = t.left),
        (P = _(t.right) - m),
        (M = y + m),
        (k = this.left + u);
    else if (i === "x") {
      if (r === "center") y = _((t.top + t.bottom) / 2 + 0.5);
      else if (N(r)) {
        const z = Object.keys(r)[0],
          j = r[z];
        y = _(this.chart.scales[z].getPixelForValue(j));
      }
      (D = t.top), (C = t.bottom), (S = y + m), (T = S + u);
    } else if (i === "y") {
      if (r === "center") y = _((t.left + t.right) / 2);
      else if (N(r)) {
        const z = Object.keys(r)[0],
          j = r[z];
        y = _(this.chart.scales[z].getPixelForValue(j));
      }
      (M = y - m), (k = M - u), (A = t.left), (P = t.right);
    }
    const O = I(s.ticks.maxTicksLimit, f),
      E = Math.max(1, Math.ceil(f / O));
    for (v = 0; v < f; v += E) {
      const z = this.getContext(v),
        j = o.setContext(z),
        ot = a.setContext(z),
        vt = j.lineWidth,
        rt = j.color,
        wt = ot.dash || [],
        at = ot.dashOffset,
        kt = j.tickWidth,
        lt = j.tickColor,
        q = j.tickBorderDash || [],
        ct = j.tickBorderDashOffset;
      (w = md(this, v, l)),
        w !== void 0 &&
          ((b = $t(n, w, vt)),
          c ? (M = k = A = P = b) : (S = T = D = C = b),
          d.push({
            tx1: M,
            ty1: S,
            tx2: k,
            ty2: T,
            x1: A,
            y1: D,
            x2: P,
            y2: C,
            width: vt,
            color: rt,
            borderDash: wt,
            borderDashOffset: at,
            tickWidth: kt,
            tickColor: lt,
            tickBorderDash: q,
            tickBorderDashOffset: ct,
          }));
    }
    return (this._ticksLength = f), (this._borderValue = y), d;
  }
  _computeLabelItems(t) {
    const i = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: f } = o,
      u = pe(n.grid),
      d = u + h,
      g = f ? -h : d,
      p = -Ut(this.labelRotation),
      m = [];
    let _,
      y,
      v,
      w,
      b,
      M,
      S,
      k,
      T,
      A,
      D,
      P,
      C = "middle";
    if (s === "top")
      (M = this.bottom - g), (S = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (M = this.top + g), (S = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const E = this._getYAxisLabelAlignment(u);
      (S = E.textAlign), (b = E.x);
    } else if (s === "right") {
      const E = this._getYAxisLabelAlignment(u);
      (S = E.textAlign), (b = E.x);
    } else if (i === "x") {
      if (s === "center") M = (t.top + t.bottom) / 2 + d;
      else if (N(s)) {
        const E = Object.keys(s)[0],
          z = s[E];
        M = this.chart.scales[E].getPixelForValue(z) + d;
      }
      S = this._getXAxisLabelAlignment();
    } else if (i === "y") {
      if (s === "center") b = (t.left + t.right) / 2 - d;
      else if (N(s)) {
        const E = Object.keys(s)[0],
          z = s[E];
        b = this.chart.scales[E].getPixelForValue(z);
      }
      S = this._getYAxisLabelAlignment(u).textAlign;
    }
    i === "y" && (l === "start" ? (C = "top") : l === "end" && (C = "bottom"));
    const O = this._getLabelSizes();
    for (_ = 0, y = a.length; _ < y; ++_) {
      (v = a[_]), (w = v.label);
      const E = o.setContext(this.getContext(_));
      (k = this.getPixelForTick(_) + o.labelOffset),
        (T = this._resolveTickFontOptions(_)),
        (A = T.lineHeight),
        (D = H(w) ? w.length : 1);
      const z = D / 2,
        j = E.color,
        ot = E.textStrokeColor,
        vt = E.textStrokeWidth;
      let rt = S;
      r
        ? ((b = k),
          S === "inner" &&
            (_ === y - 1
              ? (rt = this.options.reverse ? "left" : "right")
              : _ === 0
              ? (rt = this.options.reverse ? "right" : "left")
              : (rt = "center")),
          s === "top"
            ? c === "near" || p !== 0
              ? (P = -D * A + A / 2)
              : c === "center"
              ? (P = -O.highest.height / 2 - z * A + A)
              : (P = -O.highest.height + A / 2)
            : c === "near" || p !== 0
            ? (P = A / 2)
            : c === "center"
            ? (P = O.highest.height / 2 - z * A)
            : (P = O.highest.height - D * A),
          f && (P *= -1),
          p !== 0 && !E.showLabelBackdrop && (b += (A / 2) * Math.sin(p)))
        : ((M = k), (P = ((1 - D) * A) / 2));
      let wt;
      if (E.showLabelBackdrop) {
        const at = st(E.backdropPadding),
          kt = O.heights[_],
          lt = O.widths[_];
        let q = P - at.top,
          ct = 0 - at.left;
        switch (C) {
          case "middle":
            q -= kt / 2;
            break;
          case "bottom":
            q -= kt;
            break;
        }
        switch (S) {
          case "center":
            ct -= lt / 2;
            break;
          case "right":
            ct -= lt;
            break;
          case "inner":
            _ === y - 1 ? (ct -= lt) : _ > 0 && (ct -= lt / 2);
            break;
        }
        wt = {
          left: ct,
          top: q,
          width: lt + at.width,
          height: kt + at.height,
          color: E.backdropColor,
        };
      }
      m.push({
        label: w,
        font: T,
        textOffset: P,
        options: {
          rotation: p,
          color: j,
          strokeColor: ot,
          strokeWidth: vt,
          textAlign: rt,
          textBaseline: C,
          translation: [b, M],
          backdrop: wt,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: i } = this.options;
    if (-Ut(this.labelRotation)) return t === "top" ? "left" : "right";
    let s = "center";
    return (
      i.align === "start"
        ? (s = "left")
        : i.align === "end"
        ? (s = "right")
        : i.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: i,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let c, h;
    return (
      i === "left"
        ? s
          ? ((h = this.right + o),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h += l)))
          : ((h = this.right - a),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h = this.left)))
        : i === "right"
        ? s
          ? ((h = this.left + o),
            n === "near"
              ? (c = "right")
              : n === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h -= l)))
          : ((h = this.left + a),
            n === "near"
              ? (c = "left")
              : n === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h = this.right)))
        : (c = "right"),
      { textAlign: c, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      i = this.options.position;
    if (i === "left" || i === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (i === "top" || i === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: i },
      left: n,
      top: s,
      width: o,
      height: r,
    } = this;
    i && (t.save(), (t.fillStyle = i), t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const i = this.options.grid;
    if (!this._isVisible() || !i.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? i.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const i = this.options.grid,
      n = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width ||
        !h.color ||
        (n.save(),
        (n.lineWidth = h.width),
        (n.strokeStyle = h.color),
        n.setLineDash(h.borderDash || []),
        (n.lineDashOffset = h.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (i.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        i.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          i.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: i,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      r = n.display ? o.width : 0;
    if (!r) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, f, u;
    this.isHorizontal()
      ? ((c = $t(t, this.left, r) - r / 2),
        (h = $t(t, this.right, a) + a / 2),
        (f = u = l))
      : ((f = $t(t, this.top, r) - r / 2),
        (u = $t(t, this.bottom, a) + a / 2),
        (c = h = l)),
      i.save(),
      (i.lineWidth = o.width),
      (i.strokeStyle = o.color),
      i.beginPath(),
      i.moveTo(c, f),
      i.lineTo(h, u),
      i.stroke(),
      i.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && Ni(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options,
        l = r.font,
        c = r.label,
        h = r.textOffset;
      ze(n, c, 0, h, l, a);
    }
    s && Ei(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: i, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = U(n.font),
      r = st(n.padding),
      a = n.align;
    let l = o.lineHeight / 2;
    i === "bottom" || i === "center" || N(i)
      ? ((l += r.bottom),
        H(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += r.top);
    const {
      titleX: c,
      titleY: h,
      maxWidth: f,
      rotation: u,
    } = vd(this, l, i, a);
    ze(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: f,
      rotation: u,
      textAlign: yd(a, i, s),
      textBaseline: "middle",
      translation: [c, h],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      i = (t.ticks && t.ticks.z) || 0,
      n = I(t.grid && t.grid.z, -1),
      s = I(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ce.prototype.draw
      ? [
          {
            z: i,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: i,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const i = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + "AxisID",
      s = [];
    let o, r;
    for (o = 0, r = i.length; o < r; ++o) {
      const a = i[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const i = this.options.ticks.setContext(this.getContext(t));
    return U(i.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ni {
  constructor(t, i, n) {
    (this.type = t),
      (this.scope = i),
      (this.override = n),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const i = Object.getPrototypeOf(t);
    let n;
    Md(i) && (n = this.register(i));
    const s = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        wd(t, r, n),
        this.override && $.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const i = this.items,
      n = t.id,
      s = this.scope;
    n in i && delete i[n],
      s && n in $[s] && (delete $[s][n], this.override && delete Zt[n]);
  }
}
function wd(e, t, i) {
  const n = Ee(Object.create(null), [i ? $.get(i) : {}, $.get(t), e.defaults]);
  $.set(t, n),
    e.defaultRoutes && kd(t, e.defaultRoutes),
    e.descriptors && $.describe(t, e.descriptors);
}
function kd(e, t) {
  Object.keys(t).forEach((i) => {
    const n = i.split("."),
      s = n.pop(),
      o = [e].concat(n).join("."),
      r = t[i].split("."),
      a = r.pop(),
      l = r.join(".");
    $.route(o, s, l, a);
  });
}
function Md(e) {
  return "id" in e && "defaults" in e;
}
class Sd {
  constructor() {
    (this.controllers = new ni(De, "datasets", !0)),
      (this.elements = new ni(At, "elements")),
      (this.plugins = new ni(Object, "plugins")),
      (this.scales = new ni(ce, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, i, n) {
    [...i].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : R(s, (r) => {
            const a = n || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, i, n) {
    const s = In(t);
    F(n["before" + s], [], n), i[t](n), F(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const n = this._typedRegistries[i];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, i, n) {
    const s = i.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var _t = new Sd();
class Cd {
  constructor() {
    this._init = [];
  }
  notify(t, i, n, s) {
    i === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, i, n);
    return (
      i === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, i, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[n],
        l = [i, s, o.options];
      if (F(a, l, r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    B(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const i = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), i;
  }
  _createDescriptors(t, i) {
    const n = t && t.config,
      s = I(n.options && n.options.plugins, {}),
      o = Td(n);
    return s === !1 && !i ? [] : Pd(t, o, s, i);
  }
  _notifyStateChanges(t) {
    const i = this._oldCache || [],
      n = this._cache,
      s = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(i, n), t, "stop"), this._notify(s(n, i), t, "start");
  }
}
function Td(e) {
  const t = {},
    i = [],
    n = Object.keys(_t.plugins.items);
  for (let o = 0; o < n.length; o++) i.push(_t.getPlugin(n[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    i.indexOf(r) === -1 && (i.push(r), (t[r.id] = !0));
  }
  return { plugins: i, localIds: t };
}
function Dd(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Pd(e, { plugins: t, localIds: i }, n, s) {
  const o = [],
    r = e.getContext();
  for (const a of t) {
    const l = a.id,
      c = Dd(n[l], s);
    c !== null &&
      o.push({
        plugin: a,
        options: Ad(e.config, { plugin: a, local: i[l] }, c, r),
      });
  }
  return o;
}
function Ad(e, { plugin: t, local: i }, n, s) {
  const o = e.pluginScopeKeys(t),
    r = e.getOptionScopes(n, o);
  return (
    i && t.defaults && r.push(t.defaults),
    e.createResolver(r, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function _n(e, t) {
  const i = $.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || i.indexAxis || "x"
  );
}
function Od(e, t) {
  let i = e;
  return (
    e === "_index_" ? (i = t) : e === "_value_" && (i = t === "x" ? "y" : "x"),
    i
  );
}
function Ld(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Zs(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function Id(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function xn(e, ...t) {
  if (Zs(e)) return e;
  for (const i of t) {
    const n =
      i.axis || Id(i.position) || (e.length > 1 && Zs(e[0].toLowerCase()));
    if (n) return n;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Qs(e, t, i) {
  if (i[t + "AxisID"] === e) return { axis: t };
}
function Nd(e, t) {
  if (t.data && t.data.datasets) {
    const i = t.data.datasets.filter((n) => n.xAxisID === e || n.yAxisID === e);
    if (i.length) return Qs(e, "x", i[0]) || Qs(e, "y", i[0]);
  }
  return {};
}
function Ed(e, t) {
  const i = Zt[e.type] || { scales: {} },
    n = t.scales || {},
    s = _n(e.type, t),
    o = Object.create(null);
  return (
    Object.keys(n).forEach((r) => {
      const a = n[r];
      if (!N(a))
        return console.error(`Invalid scale configuration for scale: ${r}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`
        );
      const l = xn(r, a, Nd(r, e), $.scales[a.type]),
        c = Ld(l, s),
        h = i.scales || {};
      o[r] = ke(Object.create(null), [{ axis: l }, a, h[l], h[c]]);
    }),
    e.data.datasets.forEach((r) => {
      const a = r.type || e.type,
        l = r.indexAxis || _n(a, t),
        h = (Zt[a] || {}).scales || {};
      Object.keys(h).forEach((f) => {
        const u = Od(f, l),
          d = r[u + "AxisID"] || u;
        (o[d] = o[d] || Object.create(null)),
          ke(o[d], [{ axis: u }, n[d], h[f]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      ke(a, [$.scales[a.type], $.scale]);
    }),
    o
  );
}
function Er(e) {
  const t = e.options || (e.options = {});
  (t.plugins = I(t.plugins, {})), (t.scales = Ed(e, t));
}
function Rr(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function Rd(e) {
  return (e = e || {}), (e.data = Rr(e.data)), Er(e), e;
}
const Js = new Map(),
  Fr = new Set();
function si(e, t) {
  let i = Js.get(e);
  return i || ((i = t()), Js.set(e, i), Fr.add(i)), i;
}
const me = (e, t, i) => {
  const n = Si(t, i);
  n !== void 0 && e.add(n);
};
class Fd {
  constructor(t) {
    (this._config = Rd(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Rr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Er(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return si(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, i) {
    return si(`${t}.transition.${i}`, () => [
      [`datasets.${t}.transitions.${i}`, `transitions.${i}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, i) {
    return si(`${t}-${i}`, () => [
      [`datasets.${t}.elements.${i}`, `datasets.${t}`, `elements.${i}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const i = t.id,
      n = this.type;
    return si(`${n}-plugin-${i}`, () => [
      [`plugins.${i}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, i) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || i) && ((s = new Map()), n.set(t, s)), s;
  }
  getOptionScopes(t, i, n) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, n),
      a = r.get(i);
    if (a) return a;
    const l = new Set();
    i.forEach((h) => {
      t && (l.add(t), h.forEach((f) => me(l, t, f))),
        h.forEach((f) => me(l, s, f)),
        h.forEach((f) => me(l, Zt[o] || {}, f)),
        h.forEach((f) => me(l, $, f)),
        h.forEach((f) => me(l, gn, f));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Fr.has(i) && r.set(i, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: i } = this;
    return [t, Zt[i] || {}, $.datasets[i] || {}, { type: i }, $, gn];
  }
  resolveNamedOptions(t, i, n, s = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = to(this._resolverCache, t, s);
    let l = r;
    if (Bd(r, i)) {
      (o.$shared = !1), (n = Ft(n) ? n() : n);
      const c = this.createResolver(t, n, a);
      l = ae(r, n, c);
    }
    for (const c of i) o[c] = l[c];
    return o;
  }
  createResolver(t, i, n = [""], s) {
    const { resolver: o } = to(this._resolverCache, t, n);
    return N(i) ? ae(o, i, void 0, s) : o;
  }
}
function to(e, t, i) {
  let n = e.get(t);
  n || ((n = new Map()), e.set(t, n));
  const s = i.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Fn(t, i),
        subPrefixes: i.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      n.set(s, o)),
    o
  );
}
const zd = (e) => N(e) && Object.getOwnPropertyNames(e).some((t) => Ft(e[t]));
function Bd(e, t) {
  const { isScriptable: i, isIndexable: n } = xr(e);
  for (const s of t) {
    const o = i(s),
      r = n(s),
      a = (r || o) && e[s];
    if ((o && (Ft(a) || zd(a))) || (r && H(a))) return !0;
  }
  return !1;
}
var $d = "4.4.5";
const jd = ["top", "bottom", "left", "right", "chartArea"];
function eo(e, t) {
  return e === "top" || e === "bottom" || (jd.indexOf(e) === -1 && t === "x");
}
function io(e, t) {
  return function (i, n) {
    return i[e] === n[e] ? i[t] - n[t] : i[e] - n[e];
  };
}
function no(e) {
  const t = e.chart,
    i = t.options.animation;
  t.notifyPlugins("afterRender"), F(i && i.onComplete, [e], t);
}
function Hd(e) {
  const t = e.chart,
    i = t.options.animation;
  F(i && i.onProgress, [e], t);
}
function zr(e) {
  return (
    $n() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const gi = {},
  so = (e) => {
    const t = zr(e);
    return Object.values(gi)
      .filter((i) => i.canvas === t)
      .pop();
  };
function Wd(e, t, i) {
  const n = Object.keys(e);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = e[s];
      delete e[s], (i > 0 || o > t) && (e[o + i] = r);
    }
  }
}
function Vd(e, t, i, n) {
  return !i || e.type === "mouseout" ? null : n ? t : e;
}
function oi(e, t, i) {
  return e.options.clip ? e[i] : t[i];
}
function Yd(e, t) {
  const { xScale: i, yScale: n } = e;
  return i && n
    ? {
        left: oi(i, t, "left"),
        right: oi(i, t, "right"),
        top: oi(n, t, "top"),
        bottom: oi(n, t, "bottom"),
      }
    : t;
}
var Lt;
let Fi =
  ((Lt = class {
    static register(...t) {
      _t.add(...t), oo();
    }
    static unregister(...t) {
      _t.remove(...t), oo();
    }
    constructor(t, i) {
      const n = (this.config = new Fd(i)),
        s = zr(t),
        o = so(s);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const r = n.createResolver(n.chartOptionScopes(), this.getContext());
      (this.platform = new (n.platform || ld(s))()),
        this.platform.updateConfig(n);
      const a = this.platform.acquireContext(s, r.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        h = l && l.width;
      if (
        ((this.id = Qh()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = r),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Cd()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = bf((f) => this.update(f), r.resizeDelay || 0)),
        (this._dataChanges = []),
        (gi[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Ct.listen(this, "complete", no),
        Ct.listen(this, "progress", Hd),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: i },
        width: n,
        height: s,
        _aspectRatio: o,
      } = this;
      return B(t) ? (i && o ? o : s ? n / s : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return _t;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : As(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Ts(this.canvas, this.ctx), this;
    }
    stop() {
      return Ct.stop(this), this;
    }
    resize(t, i) {
      Ct.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: i })
        : this._resize(t, i);
    }
    _resize(t, i) {
      const n = this.options,
        s = this.canvas,
        o = n.maintainAspectRatio && this.aspectRatio,
        r = this.platform.getMaximumSize(s, t, i, o),
        a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = r.width),
        (this.height = r.height),
        (this._aspectRatio = this.aspectRatio),
        As(this, a, !0) &&
          (this.notifyPlugins("resize", { size: r }),
          F(n.onResize, [this, r], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const i = this.options.scales || {};
      R(i, (n, s) => {
        n.id = s;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        i = t.scales,
        n = this.scales,
        s = Object.keys(n).reduce((r, a) => ((r[a] = !1), r), {});
      let o = [];
      i &&
        (o = o.concat(
          Object.keys(i).map((r) => {
            const a = i[r],
              l = xn(r, a),
              c = l === "r",
              h = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : h ? "bottom" : "left",
              dtype: c ? "radialLinear" : h ? "category" : "linear",
            };
          })
        )),
        R(o, (r) => {
          const a = r.options,
            l = a.id,
            c = xn(l, a),
            h = I(a.type, r.dtype);
          (a.position === void 0 || eo(a.position, c) !== eo(r.dposition)) &&
            (a.position = r.dposition),
            (s[l] = !0);
          let f = null;
          if (l in n && n[l].type === h) f = n[l];
          else {
            const u = _t.getScale(h);
            (f = new u({ id: l, type: h, ctx: this.ctx, chart: this })),
              (n[f.id] = f);
          }
          f.init(a, t);
        }),
        R(s, (r, a) => {
          r || delete n[a];
        }),
        R(n, (r) => {
          nt.configure(this, r, r.options), nt.addBox(this, r);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        i = this.data.datasets.length,
        n = t.length;
      if ((t.sort((s, o) => s.index - o.index), n > i)) {
        for (let s = i; s < n; ++s) this._destroyDatasetMeta(s);
        t.splice(i, n - i);
      }
      this._sortedMetasets = t.slice(0).sort(io("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: i },
      } = this;
      t.length > i.length && delete this._stacks,
        t.forEach((n, s) => {
          i.filter((o) => o === n._dataset).length === 0 &&
            this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        i = this.data.datasets;
      let n, s;
      for (
        this._removeUnreferencedMetasets(), n = 0, s = i.length;
        n < s;
        n++
      ) {
        const o = i[n];
        let r = this.getDatasetMeta(n);
        const a = o.type || this.config.type;
        if (
          (r.type &&
            r.type !== a &&
            (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
          (r.type = a),
          (r.indexAxis = o.indexAxis || _n(a, this.options)),
          (r.order = o.order || 0),
          (r.index = n),
          (r.label = "" + o.label),
          (r.visible = this.isDatasetVisible(n)),
          r.controller)
        )
          r.controller.updateIndex(n), r.controller.linkScales();
        else {
          const l = _t.getController(a),
            { datasetElementType: c, dataElementType: h } = $.datasets[a];
          Object.assign(l, {
            dataElementType: _t.getElement(h),
            datasetElementType: c && _t.getElement(c),
          }),
            (r.controller = new l(this, n)),
            t.push(r.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      R(
        this.data.datasets,
        (t, i) => {
          this.getDatasetMeta(i).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const i = this.config;
      i.update();
      const n = (this._options = i.createResolver(
          i.chartOptionScopes(),
          this.getContext()
        )),
        s = (this._animationsDisabled = !n.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let r = 0;
      for (let c = 0, h = this.data.datasets.length; c < h; c++) {
        const { controller: f } = this.getDatasetMeta(c),
          u = !s && o.indexOf(f) === -1;
        f.buildOrUpdateElements(u), (r = Math.max(+f.getMaxOverflow(), r));
      }
      (r = this._minPadding = n.layout.autoPadding ? r : 0),
        this._updateLayout(r),
        s ||
          R(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(io("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      R(this.scales, (t) => {
        nt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        i = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      (!_s(i, n) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        i = this._getUniformDataChanges() || [];
      for (const { method: n, start: s, count: o } of i) {
        const r = n === "_removeElements" ? -o : o;
        Wd(t, s, r);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const i = this.data.datasets.length,
        n = (o) =>
          new Set(
            t
              .filter((r) => r[0] === o)
              .map((r, a) => a + "," + r.splice(1).join(","))
          ),
        s = n(0);
      for (let o = 1; o < i; o++) if (!_s(s, n(o))) return;
      return Array.from(s)
        .map((o) => o.split(","))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      nt.update(this, this.width, this.height, t);
      const i = this.chartArea,
        n = i.width <= 0 || i.height <= 0;
      (this._layers = []),
        R(
          this.boxes,
          (s) => {
            (n && s.position === "chartArea") ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, o) => {
          s._idx = o;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let i = 0, n = this.data.datasets.length; i < n; ++i)
          this.getDatasetMeta(i).controller.configure();
        for (let i = 0, n = this.data.datasets.length; i < n; ++i)
          this._updateDataset(i, Ft(t) ? t({ datasetIndex: i }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, i) {
      const n = this.getDatasetMeta(t),
        s = { meta: n, index: t, mode: i, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
        (n.controller._update(i),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Ct.has(this)
          ? this.attached && !Ct.running(this) && Ct.start(this)
          : (this.draw(), no({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: n, height: s } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(n, s);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const i = this._layers;
      for (t = 0; t < i.length && i[t].z <= 0; ++t) i[t].draw(this.chartArea);
      for (this._drawDatasets(); t < i.length; ++t) i[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const i = this._sortedMetasets,
        n = [];
      let s, o;
      for (s = 0, o = i.length; s < o; ++s) {
        const r = i[s];
        (!t || r.visible) && n.push(r);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let i = t.length - 1; i >= 0; --i) this._drawDataset(t[i]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const i = this.ctx,
        n = t._clip,
        s = !n.disabled,
        o = Yd(t, this.chartArea),
        r = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
        (s &&
          Ni(i, {
            left: n.left === !1 ? 0 : o.left - n.left,
            right: n.right === !1 ? this.width : o.right + n.right,
            top: n.top === !1 ? 0 : o.top - n.top,
            bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom,
          }),
        t.controller.draw(),
        s && Ei(i),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", r));
    }
    isPointInArea(t) {
      return Fe(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, i, n, s) {
      const o = ju.modes[i];
      return typeof o == "function" ? o(this, t, n, s) : [];
    }
    getDatasetMeta(t) {
      const i = this.data.datasets[t],
        n = this._metasets;
      let s = n.filter((o) => o && o._dataset === i).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (i && i.order) || 0,
            index: t,
            _dataset: i,
            _parsed: [],
            _sorted: !1,
          }),
          n.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Qt(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const i = this.data.datasets[t];
      if (!i) return !1;
      const n = this.getDatasetMeta(t);
      return typeof n.hidden == "boolean" ? !n.hidden : !i.hidden;
    }
    setDatasetVisibility(t, i) {
      const n = this.getDatasetMeta(t);
      n.hidden = !i;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, i, n) {
      const s = n ? "show" : "hide",
        o = this.getDatasetMeta(t),
        r = o.controller._resolveAnimations(void 0, s);
      Ci(i)
        ? ((o.data[i].hidden = !n), this.update())
        : (this.setDatasetVisibility(t, n),
          r.update(o, { visible: n }),
          this.update((a) => (a.datasetIndex === t ? s : void 0)));
    }
    hide(t, i) {
      this._updateVisibility(t, i, !1);
    }
    show(t, i) {
      this._updateVisibility(t, i, !0);
    }
    _destroyDatasetMeta(t) {
      const i = this._metasets[t];
      i && i.controller && i.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, i;
      for (
        this.stop(), Ct.remove(this), t = 0, i = this.data.datasets.length;
        t < i;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: i } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Ts(t, i),
          this.platform.releaseContext(i),
          (this.canvas = null),
          (this.ctx = null)),
        delete gi[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        i = this.platform,
        n = (o, r) => {
          i.addEventListener(this, o, r), (t[o] = r);
        },
        s = (o, r, a) => {
          (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
        };
      R(this.options.events, (o) => n(o, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        i = this.platform,
        n = (l, c) => {
          i.addEventListener(this, l, c), (t[l] = c);
        },
        s = (l, c) => {
          t[l] && (i.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let r;
      const a = () => {
        s("attach", a),
          (this.attached = !0),
          this.resize(),
          n("resize", o),
          n("detach", r);
      };
      (r = () => {
        (this.attached = !1),
          s("resize", o),
          this._stop(),
          this._resize(0, 0),
          n("attach", a);
      }),
        i.isAttached(this.canvas) ? a() : r();
    }
    unbindEvents() {
      R(this._listeners, (t, i) => {
        this.platform.removeEventListener(this, i, t);
      }),
        (this._listeners = {}),
        R(this._responsiveListeners, (t, i) => {
          this.platform.removeEventListener(this, i, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, i, n) {
      const s = n ? "set" : "remove";
      let o, r, a, l;
      for (
        i === "dataset" &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + s + "DatasetHoverStyle"]()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        r = t[a];
        const c = r && this.getDatasetMeta(r.datasetIndex).controller;
        c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const i = this._active || [],
        n = t.map(({ datasetIndex: o, index: r }) => {
          const a = this.getDatasetMeta(o);
          if (!a) throw new Error("No dataset found at index " + o);
          return { datasetIndex: o, element: a.data[r], index: r };
        });
      !ki(n, i) &&
        ((this._active = n),
        (this._lastEvent = null),
        this._updateHoverStyles(n, i));
    }
    notifyPlugins(t, i, n) {
      return this._plugins.notify(this, t, i, n);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((i) => i.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, i, n) {
      const s = this.options.hover,
        o = (l, c) =>
          l.filter(
            (h) =>
              !c.some(
                (f) => h.datasetIndex === f.datasetIndex && h.index === f.index
              )
          ),
        r = o(i, t),
        a = n ? t : o(t, i);
      r.length && this.updateHoverStyle(r, s.mode, !1),
        a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(t, i) {
      const n = {
          event: t,
          replay: i,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        s = (r) =>
          (r.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", n, s) === !1) return;
      const o = this._handleEvent(t, i, n.inChartArea);
      return (
        (n.cancelable = !1),
        this.notifyPlugins("afterEvent", n, s),
        (o || n.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, i, n) {
      const { _active: s = [], options: o } = this,
        r = i,
        a = this._getActiveElements(t, s, n, r),
        l = of(t),
        c = Vd(t, this._lastEvent, n, l);
      n &&
        ((this._lastEvent = null),
        F(o.onHover, [t, a, this], this),
        l && F(o.onClick, [t, a, this], this));
      const h = !ki(a, s);
      return (
        (h || i) && ((this._active = a), this._updateHoverStyles(a, s, i)),
        (this._lastEvent = c),
        h
      );
    }
    _getActiveElements(t, i, n, s) {
      if (t.type === "mouseout") return [];
      if (!n) return i;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, s);
    }
  }),
  L(Lt, "defaults", $),
  L(Lt, "instances", gi),
  L(Lt, "overrides", Zt),
  L(Lt, "registry", _t),
  L(Lt, "version", $d),
  L(Lt, "getChart", so),
  Lt);
function oo() {
  return R(Fi.instances, (e) => e._plugins.invalidate());
}
function Br(e, t, i = t) {
  (e.lineCap = I(i.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(I(i.borderDash, t.borderDash)),
    (e.lineDashOffset = I(i.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = I(i.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = I(i.borderWidth, t.borderWidth)),
    (e.strokeStyle = I(i.borderColor, t.borderColor));
}
function Ud(e, t, i) {
  e.lineTo(i.x, i.y);
}
function Xd(e) {
  return e.stepped
    ? Lf
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? If
    : Ud;
}
function $r(e, t, i = {}) {
  const n = e.length,
    { start: s = 0, end: o = n - 1 } = i,
    { start: r, end: a } = t,
    l = Math.max(s, r),
    c = Math.min(o, a),
    h = (s < r && o < r) || (s > a && o > a);
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? n + c - l : c - l,
  };
}
function qd(e, t, i, n) {
  const { points: s, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = $r(s, i, n),
    h = Xd(o);
  let { move: f = !0, reverse: u } = n || {},
    d,
    g,
    p;
  for (d = 0; d <= c; ++d)
    (g = s[(a + (u ? c - d : d)) % r]),
      !g.skip &&
        (f ? (e.moveTo(g.x, g.y), (f = !1)) : h(e, p, g, u, o.stepped),
        (p = g));
  return l && ((g = s[(a + (u ? c : 0)) % r]), h(e, p, g, u, o.stepped)), !!l;
}
function Kd(e, t, i, n) {
  const s = t.points,
    { count: o, start: r, ilen: a } = $r(s, i, n),
    { move: l = !0, reverse: c } = n || {};
  let h = 0,
    f = 0,
    u,
    d,
    g,
    p,
    m,
    _;
  const y = (w) => (r + (c ? a - w : w)) % o,
    v = () => {
      p !== m && (e.lineTo(h, m), e.lineTo(h, p), e.lineTo(h, _));
    };
  for (l && ((d = s[y(0)]), e.moveTo(d.x, d.y)), u = 0; u <= a; ++u) {
    if (((d = s[y(u)]), d.skip)) continue;
    const w = d.x,
      b = d.y,
      M = w | 0;
    M === g
      ? (b < p ? (p = b) : b > m && (m = b), (h = (f * h + w) / ++f))
      : (v(), e.lineTo(w, b), (g = M), (f = 0), (p = m = b)),
      (_ = b);
  }
  v();
}
function bn(e) {
  const t = e.options,
    i = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !i
    ? Kd
    : qd;
}
function Gd(e) {
  return e.stepped
    ? uu
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? du
    : Vt;
}
function Zd(e, t, i, n) {
  let s = t._path;
  s || ((s = t._path = new Path2D()), t.path(s, i, n) && s.closePath()),
    Br(e, t.options),
    e.stroke(s);
}
function Qd(e, t, i, n) {
  const { segments: s, options: o } = t,
    r = bn(t);
  for (const a of s)
    Br(e, o, a.style),
      e.beginPath(),
      r(e, t, a, { start: i, end: i + n - 1 }) && e.closePath(),
      e.stroke();
}
const Jd = typeof Path2D == "function";
function tg(e, t, i, n) {
  Jd && !t.options.segment ? Zd(e, t, i, n) : Qd(e, t, i, n);
}
class Et extends At {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, i) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === "monotone") &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      su(this._points, n, t, s, i), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = bu(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      i = this.points;
    return t.length && i[t[0].start];
  }
  last() {
    const t = this.segments,
      i = this.points,
      n = t.length;
    return n && i[t[n - 1].end];
  }
  interpolate(t, i) {
    const n = this.options,
      s = t[i],
      o = this.points,
      r = Tr(this, { property: i, start: s, end: s });
    if (!r.length) return;
    const a = [],
      l = Gd(n);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: f, end: u } = r[c],
        d = o[f],
        g = o[u];
      if (d === g) {
        a.push(d);
        continue;
      }
      const p = Math.abs((s - d[i]) / (g[i] - d[i])),
        m = l(d, g, p, n.stepped);
      (m[i] = t[i]), a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, i, n) {
    return bn(this)(t, this, i, n);
  }
  path(t, i, n) {
    const s = this.segments,
      o = bn(this);
    let r = this._loop;
    (i = i || 0), (n = n || this.points.length - i);
    for (const a of s) r &= o(t, this, a, { start: i, end: i + n - 1 });
    return !!r;
  }
  draw(t, i, n, s) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), tg(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
L(Et, "id", "line"),
  L(Et, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  L(Et, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  L(Et, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function ro(e, t, i, n) {
  const s = e.options,
    { [i]: o } = e.getProps([i], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class pi extends At {
  constructor(i) {
    super();
    L(this, "parsed");
    L(this, "skip");
    L(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      i && Object.assign(this, i);
  }
  inRange(i, n, s) {
    const o = this.options,
      { x: r, y: a } = this.getProps(["x", "y"], s);
    return (
      Math.pow(i - r, 2) + Math.pow(n - a, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(i, n) {
    return ro(this, i, "x", n);
  }
  inYRange(i, n) {
    return ro(this, i, "y", n);
  }
  getCenterPoint(i) {
    const { x: n, y: s } = this.getProps(["x", "y"], i);
    return { x: n, y: s };
  }
  size(i) {
    i = i || this.options || {};
    let n = i.radius || 0;
    n = Math.max(n, (n && i.hoverRadius) || 0);
    const s = (n && i.borderWidth) || 0;
    return (n + s) * 2;
  }
  draw(i, n) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Fe(this, n, this.size(s) / 2) ||
      ((i.strokeStyle = s.borderColor),
      (i.lineWidth = s.borderWidth),
      (i.fillStyle = s.backgroundColor),
      pn(i, s, this.x, this.y));
  }
  getRange() {
    const i = this.options || {};
    return i.radius + i.hitRadius;
  }
}
L(pi, "id", "point"),
  L(pi, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  L(pi, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function eg(e, t, i) {
  const n = e.segments,
    s = e.points,
    o = t.points,
    r = [];
  for (const a of n) {
    let { start: l, end: c } = a;
    c = Wn(l, c, s);
    const h = yn(i, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({ source: a, target: h, start: s[l], end: s[c] });
      continue;
    }
    const f = Tr(t, h);
    for (const u of f) {
      const d = yn(i, o[u.start], o[u.end], u.loop),
        g = Cr(a, s, d);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: { [i]: ao(h, d, "start", Math.max) },
          end: { [i]: ao(h, d, "end", Math.min) },
        });
    }
  }
  return r;
}
function yn(e, t, i, n) {
  if (n) return;
  let s = t[e],
    o = i[e];
  return (
    e === "angle" && ((s = xt(s)), (o = xt(o))),
    { property: e, start: s, end: o }
  );
}
function ig(e, t) {
  const { x: i = null, y: n = null } = e || {},
    s = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: r, end: a }) => {
      a = Wn(r, a, s);
      const l = s[r],
        c = s[a];
      n !== null
        ? (o.push({ x: l.x, y: n }), o.push({ x: c.x, y: n }))
        : i !== null && (o.push({ x: i, y: l.y }), o.push({ x: i, y: c.y }));
    }),
    o
  );
}
function Wn(e, t, i) {
  for (; t > e; t--) {
    const n = i[t];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return t;
}
function ao(e, t, i, n) {
  return e && t ? n(e[i], t[i]) : e ? e[i] : t ? t[i] : 0;
}
function jr(e, t) {
  let i = [],
    n = !1;
  return (
    H(e) ? ((n = !0), (i = e)) : (i = ig(e, t)),
    i.length
      ? new Et({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n })
      : null
  );
}
function lo(e) {
  return e && e.fill !== !1;
}
function ng(e, t, i) {
  let s = e[t].fill;
  const o = [t];
  let r;
  if (!i) return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!X(s)) return s;
    if (((r = e[s]), !r)) return !1;
    if (r.visible) return s;
    o.push(s), (s = r.fill);
  }
  return !1;
}
function sg(e, t, i) {
  const n = lg(e);
  if (N(n)) return isNaN(n.value) ? !1 : n;
  let s = parseFloat(n);
  return X(s) && Math.floor(s) === s
    ? og(n[0], t, s, i)
    : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
}
function og(e, t, i, n) {
  return (
    (e === "-" || e === "+") && (i = t + i), i === t || i < 0 || i >= n ? !1 : i
  );
}
function rg(e, t) {
  let i = null;
  return (
    e === "start"
      ? (i = t.bottom)
      : e === "end"
      ? (i = t.top)
      : N(e)
      ? (i = t.getPixelForValue(e.value))
      : t.getBasePixel && (i = t.getBasePixel()),
    i
  );
}
function ag(e, t, i) {
  let n;
  return (
    e === "start"
      ? (n = i)
      : e === "end"
      ? (n = t.options.reverse ? t.min : t.max)
      : N(e)
      ? (n = e.value)
      : (n = t.getBaseValue()),
    n
  );
}
function lg(e) {
  const t = e.options,
    i = t.fill;
  let n = I(i && i.target, i);
  return (
    n === void 0 && (n = !!t.backgroundColor),
    n === !1 || n === null ? !1 : n === !0 ? "origin" : n
  );
}
function cg(e) {
  const { scale: t, index: i, line: n } = e,
    s = [],
    o = n.segments,
    r = n.points,
    a = hg(t, i);
  a.push(jr({ x: null, y: t.bottom }, n));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++) fg(s, r[h], a);
  }
  return new Et({ points: s, options: {} });
}
function hg(e, t) {
  const i = [],
    n = e.getMatchingVisibleMetas("line");
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (o.index === t) break;
    o.hidden || i.unshift(o.dataset);
  }
  return i;
}
function fg(e, t, i) {
  const n = [];
  for (let s = 0; s < i.length; s++) {
    const o = i[s],
      { first: r, last: a, point: l } = ug(o, t, "x");
    if (!(!l || (r && a))) {
      if (r) n.unshift(l);
      else if ((e.push(l), !a)) break;
    }
  }
  e.push(...n);
}
function ug(e, t, i) {
  const n = e.interpolate(t, i);
  if (!n) return {};
  const s = n[i],
    o = e.segments,
    r = e.points;
  let a = !1,
    l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c],
      f = r[h.start][i],
      u = r[h.end][i];
    if (ee(s, f, u)) {
      (a = s === f), (l = s === u);
      break;
    }
  }
  return { first: a, last: l, point: n };
}
class Hr {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, i, n) {
    const { x: s, y: o, radius: r } = this;
    return (
      (i = i || { start: 0, end: ut }),
      t.arc(s, o, r, i.end, i.start, !0),
      !n.bounds
    );
  }
  interpolate(t) {
    const { x: i, y: n, radius: s } = this,
      o = t.angle;
    return { x: i + Math.cos(o) * s, y: n + Math.sin(o) * s, angle: o };
  }
}
function dg(e) {
  const { chart: t, fill: i, line: n } = e;
  if (X(i)) return gg(t, i);
  if (i === "stack") return cg(e);
  if (i === "shape") return !0;
  const s = pg(e);
  return s instanceof Hr ? s : jr(s, n);
}
function gg(e, t) {
  const i = e.getDatasetMeta(t);
  return i && e.isDatasetVisible(t) ? i.dataset : null;
}
function pg(e) {
  return (e.scale || {}).getPointPositionForValue ? _g(e) : mg(e);
}
function mg(e) {
  const { scale: t = {}, fill: i } = e,
    n = rg(i, t);
  if (X(n)) {
    const s = t.isHorizontal();
    return { x: s ? n : null, y: s ? null : n };
  }
  return null;
}
function _g(e) {
  const { scale: t, fill: i } = e,
    n = t.options,
    s = t.getLabels().length,
    o = n.reverse ? t.max : t.min,
    r = ag(i, t, o),
    a = [];
  if (n.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Hr({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r),
    });
  }
  for (let l = 0; l < s; ++l) a.push(t.getPointPositionForValue(l, r));
  return a;
}
function tn(e, t, i) {
  const n = dg(t),
    { line: s, scale: o, axis: r } = t,
    a = s.options,
    l = a.fill,
    c = a.backgroundColor,
    { above: h = c, below: f = c } = l || {};
  n &&
    s.points.length &&
    (Ni(e, i),
    xg(e, {
      line: s,
      target: n,
      above: h,
      below: f,
      area: i,
      scale: o,
      axis: r,
    }),
    Ei(e));
}
function xg(e, t) {
  const { line: i, target: n, above: s, below: o, area: r, scale: a } = t,
    l = i._loop ? "angle" : t.axis;
  e.save(),
    l === "x" &&
      o !== s &&
      (co(e, n, r.top),
      ho(e, { line: i, target: n, color: s, scale: a, property: l }),
      e.restore(),
      e.save(),
      co(e, n, r.bottom)),
    ho(e, { line: i, target: n, color: o, scale: a, property: l }),
    e.restore();
}
function co(e, t, i) {
  const { segments: n, points: s } = t;
  let o = !0,
    r = !1;
  e.beginPath();
  for (const a of n) {
    const { start: l, end: c } = a,
      h = s[l],
      f = s[Wn(l, c, s)];
    o ? (e.moveTo(h.x, h.y), (o = !1)) : (e.lineTo(h.x, i), e.lineTo(h.x, h.y)),
      (r = !!t.pathSegment(e, a, { move: r })),
      r ? e.closePath() : e.lineTo(f.x, i);
  }
  e.lineTo(t.first().x, i), e.closePath(), e.clip();
}
function ho(e, t) {
  const { line: i, target: n, property: s, color: o, scale: r } = t,
    a = eg(i, n, s);
  for (const { source: l, target: c, start: h, end: f } of a) {
    const { style: { backgroundColor: u = o } = {} } = l,
      d = n !== !0;
    e.save(), (e.fillStyle = u), bg(e, r, d && yn(s, h, f)), e.beginPath();
    const g = !!i.pathSegment(e, l);
    let p;
    if (d) {
      g ? e.closePath() : fo(e, n, f, s);
      const m = !!n.pathSegment(e, c, { move: g, reverse: !0 });
      (p = g && m), p || fo(e, n, h, s);
    }
    e.closePath(), e.fill(p ? "evenodd" : "nonzero"), e.restore();
  }
}
function bg(e, t, i) {
  const { top: n, bottom: s } = t.chart.chartArea,
    { property: o, start: r, end: a } = i || {};
  o === "x" && (e.beginPath(), e.rect(r, n, a - r, s - n), e.clip());
}
function fo(e, t, i, n) {
  const s = t.interpolate(i, n);
  s && e.lineTo(s.x, s.y);
}
var yg = {
  id: "filler",
  afterDatasetsUpdate(e, t, i) {
    const n = (e.data.datasets || []).length,
      s = [];
    let o, r, a, l;
    for (r = 0; r < n; ++r)
      (o = e.getDatasetMeta(r)),
        (a = o.dataset),
        (l = null),
        a &&
          a.options &&
          a instanceof Et &&
          (l = {
            visible: e.isDatasetVisible(r),
            index: r,
            fill: sg(a, r, n),
            chart: e,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a,
          }),
        (o.$filler = l),
        s.push(l);
    for (r = 0; r < n; ++r)
      (l = s[r]), !(!l || l.fill === !1) && (l.fill = ng(s, r, i.propagate));
  },
  beforeDraw(e, t, i) {
    const n = i.drawTime === "beforeDraw",
      s = e.getSortedVisibleDatasetMetas(),
      o = e.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      a &&
        (a.line.updateControlPoints(o, a.axis), n && a.fill && tn(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, i) {
    if (i.drawTime !== "beforeDatasetsDraw") return;
    const n = e.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      lo(o) && tn(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, i) {
    const n = t.meta.$filler;
    !lo(n) || i.drawTime !== "beforeDatasetDraw" || tn(e.ctx, n, e.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const uo = (e, t) => {
    let { boxHeight: i = t, boxWidth: n = t } = e;
    return (
      e.usePointStyle &&
        ((i = Math.min(i, t)), (n = e.pointStyleWidth || Math.min(n, t))),
      { boxWidth: n, boxHeight: i, itemHeight: Math.max(t, i) }
    );
  },
  vg = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class go extends At {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, i, n) {
    (this.maxWidth = t),
      (this.maxHeight = i),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let i = F(t.generateLabels, [this.chart], this) || [];
    t.filter && (i = i.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (i = i.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && i.reverse(),
      (this.legendItems = i);
  }
  fit() {
    const { options: t, ctx: i } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels,
      s = U(n.font),
      o = s.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = uo(n, o);
    let c, h;
    (i.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (h = this._fitRows(r, o, a, l) + 10))
        : ((h = this.maxHeight), (c = this._fitCols(r, s, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(h, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, i, n, s) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      h = s + a;
    let f = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let u = -1,
      d = -h;
    return (
      this.legendItems.forEach((g, p) => {
        const m = n + i / 2 + o.measureText(g.text).width;
        (p === 0 || c[c.length - 1] + m + 2 * a > r) &&
          ((f += h), (c[c.length - (p > 0 ? 0 : 1)] = 0), (d += h), u++),
          (l[p] = { left: 0, top: d, row: u, width: m, height: s }),
          (c[c.length - 1] += m + a);
      }),
      f
    );
  }
  _fitCols(t, i, n, s) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      h = r - t;
    let f = a,
      u = 0,
      d = 0,
      g = 0,
      p = 0;
    return (
      this.legendItems.forEach((m, _) => {
        const { itemWidth: y, itemHeight: v } = wg(n, i, o, m, s);
        _ > 0 &&
          d + v + 2 * a > h &&
          ((f += u + a),
          c.push({ width: u, height: d }),
          (g += u + a),
          p++,
          (u = d = 0)),
          (l[_] = { left: g, top: d, col: p, width: y, height: v }),
          (u = Math.max(u, y)),
          (d += v + a);
      }),
      (f += u),
      c.push({ width: u, height: d }),
      f
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: i,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      r = ne(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Y(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of i)
        a !== c.row &&
          ((a = c.row),
          (l = Y(n, this.left + s, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + s),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + s);
    } else {
      let a = 0,
        l = Y(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of i)
        c.col !== a &&
          ((a = c.col),
          (l = Y(
            n,
            this.top + t + s,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ni(t, this), this._draw(), Ei(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: i, lineWidths: n, ctx: s } = this,
      { align: o, labels: r } = t,
      a = $.color,
      l = ne(t.rtl, this.left, this.width),
      c = U(r.font),
      { padding: h } = r,
      f = c.size,
      u = f / 2;
    let d;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: g, boxHeight: p, itemHeight: m } = uo(r, f),
      _ = function (M, S, k) {
        if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
        s.save();
        const T = I(k.lineWidth, 1);
        if (
          ((s.fillStyle = I(k.fillStyle, a)),
          (s.lineCap = I(k.lineCap, "butt")),
          (s.lineDashOffset = I(k.lineDashOffset, 0)),
          (s.lineJoin = I(k.lineJoin, "miter")),
          (s.lineWidth = T),
          (s.strokeStyle = I(k.strokeStyle, a)),
          s.setLineDash(I(k.lineDash, [])),
          r.usePointStyle)
        ) {
          const A = {
              radius: (p * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: T,
            },
            D = l.xPlus(M, g / 2),
            P = S + u;
          mr(s, A, D, P, r.pointStyleWidth && g);
        } else {
          const A = S + Math.max((f - p) / 2, 0),
            D = l.leftForLtr(M, g),
            P = Te(k.borderRadius);
          s.beginPath(),
            Object.values(P).some((C) => C !== 0)
              ? mn(s, { x: D, y: A, w: g, h: p, radius: P })
              : s.rect(D, A, g, p),
            s.fill(),
            T !== 0 && s.stroke();
        }
        s.restore();
      },
      y = function (M, S, k) {
        ze(s, k.text, M, S + m / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      v = this.isHorizontal(),
      w = this._computeTitleHeight();
    v
      ? (d = {
          x: Y(o, this.left + h, this.right - n[0]),
          y: this.top + h + w,
          line: 0,
        })
      : (d = {
          x: this.left + h,
          y: Y(o, this.top + w + h, this.bottom - i[0].height),
          line: 0,
        }),
      kr(this.ctx, t.textDirection);
    const b = m + h;
    this.legendItems.forEach((M, S) => {
      (s.strokeStyle = M.fontColor), (s.fillStyle = M.fontColor);
      const k = s.measureText(M.text).width,
        T = l.textAlign(M.textAlign || (M.textAlign = r.textAlign)),
        A = g + u + k;
      let D = d.x,
        P = d.y;
      l.setWidth(this.width),
        v
          ? S > 0 &&
            D + A + h > this.right &&
            ((P = d.y += b),
            d.line++,
            (D = d.x = Y(o, this.left + h, this.right - n[d.line])))
          : S > 0 &&
            P + b > this.bottom &&
            ((D = d.x = D + i[d.line].width + h),
            d.line++,
            (P = d.y = Y(o, this.top + w + h, this.bottom - i[d.line].height)));
      const C = l.x(D);
      if (
        (_(C, P, M),
        (D = yf(T, D + g + u, v ? D + A : this.right, t.rtl)),
        y(l.x(D), P, M),
        v)
      )
        d.x += A + h;
      else if (typeof M.text != "string") {
        const O = c.lineHeight;
        d.y += Wr(M, O) + h;
      } else d.y += b;
    }),
      Mr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      i = t.title,
      n = U(i.font),
      s = st(i.padding);
    if (!i.display) return;
    const o = ne(t.rtl, this.left, this.width),
      r = this.ctx,
      a = i.position,
      l = n.size / 2,
      c = s.top + l;
    let h,
      f = this.left,
      u = this.width;
    if (this.isHorizontal())
      (u = Math.max(...this.lineWidths)),
        (h = this.top + c),
        (f = Y(t.align, f, this.right - u));
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h =
        c +
        Y(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const d = Y(a, f, f + u);
    (r.textAlign = o.textAlign(En(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = i.color),
      (r.fillStyle = i.color),
      (r.font = n.string),
      ze(r, i.text, d, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      i = U(t.font),
      n = st(t.padding);
    return t.display ? i.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, i) {
    let n, s, o;
    if (ee(t, this.left, this.right) && ee(i, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (
          ((s = o[n]),
          ee(t, s.left, s.left + s.width) && ee(i, s.top, s.top + s.height))
        )
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const i = this.options;
    if (!Sg(t.type, i)) return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = vg(s, n);
      s && !o && F(i.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && F(i.onHover, [t, n, this], this);
    } else n && F(i.onClick, [t, n, this], this);
  }
}
function wg(e, t, i, n, s) {
  const o = kg(n, e, t, i),
    r = Mg(s, n, t.lineHeight);
  return { itemWidth: o, itemHeight: r };
}
function kg(e, t, i, n) {
  let s = e.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((o, r) => (o.length > r.length ? o : r))),
    t + i.size / 2 + n.measureText(s).width
  );
}
function Mg(e, t, i) {
  let n = e;
  return typeof t.text != "string" && (n = Wr(t, i)), n;
}
function Wr(e, t) {
  const i = e.text ? e.text.length : 0;
  return t * i;
}
function Sg(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var Cg = {
  id: "legend",
  _element: go,
  start(e, t, i) {
    const n = (e.legend = new go({ ctx: e.ctx, options: i, chart: e }));
    nt.configure(e, n, i), nt.addBox(e, n);
  },
  stop(e) {
    nt.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, i) {
    const n = e.legend;
    nt.configure(e, n, i), (n.options = i);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, i) {
      const n = t.datasetIndex,
        s = i.chart;
      s.isDatasetVisible(n)
        ? (s.hide(n), (t.hidden = !0))
        : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: i,
              pointStyle: n,
              textAlign: s,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(i ? 0 : void 0),
            h = st(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class Vr extends At {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, i) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = i);
    const s = H(n.text) ? n.text.length : 1;
    this._padding = st(n.padding);
    const o = s * U(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: i, left: n, bottom: s, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      c,
      h,
      f;
    return (
      this.isHorizontal()
        ? ((h = Y(a, n, o)), (f = i + t), (c = o - n))
        : (r.position === "left"
            ? ((h = n + t), (f = Y(a, s, i)), (l = W * -0.5))
            : ((h = o - t), (f = Y(a, i, s)), (l = W * 0.5)),
          (c = s - i)),
      { titleX: h, titleY: f, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      i = this.options;
    if (!i.display) return;
    const n = U(i.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ze(t, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: l,
      rotation: c,
      textAlign: En(i.align),
      textBaseline: "middle",
      translation: [r, a],
    });
  }
}
function Tg(e, t) {
  const i = new Vr({ ctx: e.ctx, options: t, chart: e });
  nt.configure(e, i, t), nt.addBox(e, i), (e.titleBlock = i);
}
var Dg = {
  id: "title",
  _element: Vr,
  start(e, t, i) {
    Tg(e, i);
  },
  stop(e) {
    const t = e.titleBlock;
    nt.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, i) {
    const n = e.titleBlock;
    nt.configure(e, n, i), (n.options = i);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const we = {
  average(e) {
    if (!e.length) return !1;
    let t,
      i,
      n = new Set(),
      s = 0,
      o = 0;
    for (t = 0, i = e.length; t < i; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        n.add(l.x), (s += l.y), ++o;
      }
    }
    return o === 0 || n.size === 0
      ? !1
      : { x: [...n].reduce((a, l) => a + l) / n.size, y: s / o };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let i = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = dn(t, c);
        h < s && ((s = h), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (i = l.x), (n = l.y);
    }
    return { x: i, y: n };
  },
};
function mt(e, t) {
  return t && (H(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Tt(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function Pg(e, t) {
  const { element: i, datasetIndex: n, index: s } = t,
    o = e.getDatasetMeta(n).controller,
    { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(s),
    raw: e.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: i,
  };
}
function po(e, t) {
  const i = e.chart.ctx,
    { body: n, footer: s, title: o } = e,
    { boxWidth: r, boxHeight: a } = t,
    l = U(t.bodyFont),
    c = U(t.titleFont),
    h = U(t.footerFont),
    f = o.length,
    u = s.length,
    d = n.length,
    g = st(t.padding);
  let p = g.height,
    m = 0,
    _ = n.reduce(
      (w, b) => w + b.before.length + b.lines.length + b.after.length,
      0
    );
  if (
    ((_ += e.beforeBody.length + e.afterBody.length),
    f &&
      (p += f * c.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
    _)
  ) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += d * w + (_ - d) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let y = 0;
  const v = function (w) {
    m = Math.max(m, i.measureText(w).width + y);
  };
  return (
    i.save(),
    (i.font = c.string),
    R(e.title, v),
    (i.font = l.string),
    R(e.beforeBody.concat(e.afterBody), v),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    R(n, (w) => {
      R(w.before, v), R(w.lines, v), R(w.after, v);
    }),
    (y = 0),
    (i.font = h.string),
    R(e.footer, v),
    i.restore(),
    (m += g.width),
    { width: m, height: p }
  );
}
function Ag(e, t) {
  const { y: i, height: n } = t;
  return i < n / 2 ? "top" : i > e.height - n / 2 ? "bottom" : "center";
}
function Og(e, t, i, n) {
  const { x: s, width: o } = n,
    r = i.caretSize + i.caretPadding;
  if ((e === "left" && s + o + r > t.width) || (e === "right" && s - o - r < 0))
    return !0;
}
function Lg(e, t, i, n) {
  const { x: s, width: o } = i,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = e;
  let c = "center";
  return (
    n === "center"
      ? (c = s <= (a + l) / 2 ? "left" : "right")
      : s <= o / 2
      ? (c = "left")
      : s >= r - o / 2 && (c = "right"),
    Og(c, e, t, i) && (c = "center"),
    c
  );
}
function mo(e, t, i) {
  const n = i.yAlign || t.yAlign || Ag(e, i);
  return { xAlign: i.xAlign || t.xAlign || Lg(e, t, i, n), yAlign: n };
}
function Ig(e, t) {
  let { x: i, width: n } = e;
  return t === "right" ? (i -= n) : t === "center" && (i -= n / 2), i;
}
function Ng(e, t, i) {
  let { y: n, height: s } = e;
  return (
    t === "top" ? (n += i) : t === "bottom" ? (n -= s + i) : (n -= s / 2), n
  );
}
function _o(e, t, i, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = e,
    { xAlign: a, yAlign: l } = i,
    c = s + o,
    { topLeft: h, topRight: f, bottomLeft: u, bottomRight: d } = Te(r);
  let g = Ig(t, a);
  const p = Ng(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (g += c)
        : a === "right" && (g -= c)
      : a === "left"
      ? (g -= Math.max(h, u) + s)
      : a === "right" && (g += Math.max(f, d) + s),
    { x: it(g, 0, n.width - t.width), y: it(p, 0, n.height - t.height) }
  );
}
function ri(e, t, i) {
  const n = st(i.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - n.right
    : e.x + n.left;
}
function xo(e) {
  return mt([], Tt(e));
}
function Eg(e, t, i) {
  return Qt(e, { tooltip: t, tooltipItems: i, type: "tooltip" });
}
function bo(e, t) {
  const i = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return i ? e.override(i) : e;
}
const Yr = {
  beforeTitle: St,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        i = t.chart.data.labels,
        n = i ? i.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return i[t.dataIndex];
    }
    return "";
  },
  afterTitle: St,
  beforeBody: St,
  beforeLabel: St,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const i = e.formattedValue;
    return B(i) || (t += i), t;
  },
  labelColor(e) {
    const i = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor,
      borderWidth: i.borderWidth,
      borderDash: i.borderDash,
      borderDashOffset: i.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const i = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: i.pointStyle, rotation: i.rotation };
  },
  afterLabel: St,
  afterBody: St,
  beforeFooter: St,
  footer: St,
  afterFooter: St,
};
function G(e, t, i, n) {
  const s = e[t].call(i, n);
  return typeof s > "u" ? Yr[t].call(i, n) : s;
}
class vn extends At {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const i = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && i.options.animation && n.animations,
      o = new Dr(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Eg(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, i) {
    const { callbacks: n } = i,
      s = G(n, "beforeTitle", this, t),
      o = G(n, "title", this, t),
      r = G(n, "afterTitle", this, t);
    let a = [];
    return (a = mt(a, Tt(s))), (a = mt(a, Tt(o))), (a = mt(a, Tt(r))), a;
  }
  getBeforeBody(t, i) {
    return xo(G(i.callbacks, "beforeBody", this, t));
  }
  getBody(t, i) {
    const { callbacks: n } = i,
      s = [];
    return (
      R(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = bo(n, o);
        mt(r.before, Tt(G(a, "beforeLabel", this, o))),
          mt(r.lines, G(a, "label", this, o)),
          mt(r.after, Tt(G(a, "afterLabel", this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, i) {
    return xo(G(i.callbacks, "afterBody", this, t));
  }
  getFooter(t, i) {
    const { callbacks: n } = i,
      s = G(n, "beforeFooter", this, t),
      o = G(n, "footer", this, t),
      r = G(n, "afterFooter", this, t);
    let a = [];
    return (a = mt(a, Tt(s))), (a = mt(a, Tt(o))), (a = mt(a, Tt(r))), a;
  }
  _createItems(t) {
    const i = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      r = [];
    let a = [],
      l,
      c;
    for (l = 0, c = i.length; l < c; ++l) a.push(Pg(this.chart, i[l]));
    return (
      t.filter && (a = a.filter((h, f, u) => t.filter(h, f, u, n))),
      t.itemSort && (a = a.sort((h, f) => t.itemSort(h, f, n))),
      R(a, (h) => {
        const f = bo(t.callbacks, h);
        s.push(G(f, "labelColor", this, h)),
          o.push(G(f, "labelPointStyle", this, h)),
          r.push(G(f, "labelTextColor", this, h));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, i) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = we[n.position].call(this, s, this._eventPosition);
      (r = this._createItems(n)),
        (this.title = this.getTitle(r, n)),
        (this.beforeBody = this.getBeforeBody(r, n)),
        (this.body = this.getBody(r, n)),
        (this.afterBody = this.getAfterBody(r, n)),
        (this.footer = this.getFooter(r, n));
      const l = (this._size = po(this, n)),
        c = Object.assign({}, a, l),
        h = mo(this.chart, n, c),
        f = _o(n, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: f.x,
          y: f.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: i });
  }
  drawCaret(t, i, n, s) {
    const o = this.getCaretPosition(t, n, s);
    i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, i, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = n,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: f } = Te(a),
      { x: u, y: d } = t,
      { width: g, height: p } = i;
    let m, _, y, v, w, b;
    return (
      o === "center"
        ? ((w = d + p / 2),
          s === "left"
            ? ((m = u), (_ = m - r), (v = w + r), (b = w - r))
            : ((m = u + g), (_ = m + r), (v = w - r), (b = w + r)),
          (y = m))
        : (s === "left"
            ? (_ = u + Math.max(l, h) + r)
            : s === "right"
            ? (_ = u + g - Math.max(c, f) - r)
            : (_ = this.caretX),
          o === "top"
            ? ((v = d), (w = v - r), (m = _ - r), (y = _ + r))
            : ((v = d + p), (w = v + r), (m = _ + r), (y = _ - r)),
          (b = v)),
      { x1: m, x2: _, x3: y, y1: v, y2: w, y3: b }
    );
  }
  drawTitle(t, i, n) {
    const s = this.title,
      o = s.length;
    let r, a, l;
    if (o) {
      const c = ne(n.rtl, this.x, this.width);
      for (
        t.x = ri(this, n.titleAlign, n),
          i.textAlign = c.textAlign(n.titleAlign),
          i.textBaseline = "middle",
          r = U(n.titleFont),
          a = n.titleSpacing,
          i.fillStyle = n.titleColor,
          i.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        i.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, i, n, s, o) {
    const r = this.labelColors[n],
      a = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      h = U(o.bodyFont),
      f = ri(this, "left", o),
      u = s.x(f),
      d = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      g = i.y + d;
    if (o.usePointStyle) {
      const p = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        m = s.leftForLtr(u, c) + c / 2,
        _ = g + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        pn(t, p, m, _),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        pn(t, p, m, _);
    } else {
      (t.lineWidth = N(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const p = s.leftForLtr(u, c),
        m = s.leftForLtr(s.xPlus(u, 1), c - 2),
        _ = Te(r.borderRadius);
      Object.values(_).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          mn(t, { x: p, y: g, w: c, h: l, radius: _ }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          mn(t, { x: m, y: g + 1, w: c - 2, h: l - 2, radius: _ }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(p, g, c, l),
          t.strokeRect(p, g, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, i, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = n,
      f = U(n.bodyFont);
    let u = f.lineHeight,
      d = 0;
    const g = ne(n.rtl, this.x, this.width),
      p = function (k) {
        i.fillText(k, g.x(t.x + d), t.y + u / 2), (t.y += u + o);
      },
      m = g.textAlign(r);
    let _, y, v, w, b, M, S;
    for (
      i.textAlign = r,
        i.textBaseline = "middle",
        i.font = f.string,
        t.x = ri(this, m, n),
        i.fillStyle = n.bodyColor,
        R(this.beforeBody, p),
        d = a && m !== "right" ? (r === "center" ? c / 2 + h : c + 2 + h) : 0,
        w = 0,
        M = s.length;
      w < M;
      ++w
    ) {
      for (
        _ = s[w],
          y = this.labelTextColors[w],
          i.fillStyle = y,
          R(_.before, p),
          v = _.lines,
          a &&
            v.length &&
            (this._drawColorBox(i, t, w, g, n),
            (u = Math.max(f.lineHeight, l))),
          b = 0,
          S = v.length;
        b < S;
        ++b
      )
        p(v[b]), (u = f.lineHeight);
      R(_.after, p);
    }
    (d = 0), (u = f.lineHeight), R(this.afterBody, p), (t.y -= o);
  }
  drawFooter(t, i, n) {
    const s = this.footer,
      o = s.length;
    let r, a;
    if (o) {
      const l = ne(n.rtl, this.x, this.width);
      for (
        t.x = ri(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          i.textAlign = l.textAlign(n.footerAlign),
          i.textBaseline = "middle",
          r = U(n.footerFont),
          i.fillStyle = n.footerColor,
          i.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        i.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + n.footerSpacing);
    }
  }
  drawBackground(t, i, n, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: h } = n,
      {
        topLeft: f,
        topRight: u,
        bottomLeft: d,
        bottomRight: g,
      } = Te(s.cornerRadius);
    (i.fillStyle = s.backgroundColor),
      (i.strokeStyle = s.borderColor),
      (i.lineWidth = s.borderWidth),
      i.beginPath(),
      i.moveTo(a + f, l),
      r === "top" && this.drawCaret(t, i, n, s),
      i.lineTo(a + c - u, l),
      i.quadraticCurveTo(a + c, l, a + c, l + u),
      r === "center" && o === "right" && this.drawCaret(t, i, n, s),
      i.lineTo(a + c, l + h - g),
      i.quadraticCurveTo(a + c, l + h, a + c - g, l + h),
      r === "bottom" && this.drawCaret(t, i, n, s),
      i.lineTo(a + d, l + h),
      i.quadraticCurveTo(a, l + h, a, l + h - d),
      r === "center" && o === "left" && this.drawCaret(t, i, n, s),
      i.lineTo(a, l + f),
      i.quadraticCurveTo(a, l, a + f, l),
      i.closePath(),
      i.fill(),
      s.borderWidth > 0 && i.stroke();
  }
  _updateAnimationTarget(t) {
    const i = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const r = we[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = po(this, t)),
        l = Object.assign({}, r, this._size),
        c = mo(i, t, l),
        h = _o(t, l, c, i);
      (s._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const i = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(i);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const r = st(i.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    i.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, i),
      kr(t, i.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, i),
      this.drawBody(o, t, i),
      this.drawFooter(o, t, i),
      Mr(t, i.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, i) {
    const n = this._active,
      s = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !ki(n, s),
      r = this._positionChanged(s, i);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = i),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, i, n = !0) {
    if (i && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, i, n),
      a = this._positionChanged(r, t),
      l = i || !ki(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, i))),
      l
    );
  }
  _getActiveElements(t, i, n, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s)
      return i.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, i) {
    const { caretX: n, caretY: s, options: o } = this,
      r = we[o.position].call(this, t, i);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
L(vn, "positioners", we);
var Rg = {
  id: "tooltip",
  _element: vn,
  positioners: we,
  afterInit(e, t, i) {
    i && (e.tooltip = new vn({ chart: e, options: i }));
  },
  beforeUpdate(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  reset(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const i = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", i);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const i = t.replay;
      e.tooltip.handleEvent(t.event, i, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Yr,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const Fg = (e, t, i, n) => (
  typeof t == "string"
    ? ((i = e.push(t) - 1), n.unshift({ index: i, label: t }))
    : isNaN(t) && (i = null),
  i
);
function zg(e, t, i, n) {
  const s = e.indexOf(t);
  if (s === -1) return Fg(e, t, i, n);
  const o = e.lastIndexOf(t);
  return s !== o ? i : s;
}
const Bg = (e, t) => (e === null ? null : it(Math.round(e), 0, t));
function yo(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class wn extends ce {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const i = this._addedLabels;
    if (i.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of i) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, i) {
    if (B(t)) return null;
    const n = this.getLabels();
    return (
      (i =
        isFinite(i) && n[i] === t ? i : zg(n, t, I(i, t), this._addedLabels)),
      Bg(i, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: i } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (n = 0), i || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      i = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && i === o.length - 1 ? o : o.slice(t, i + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0));
    for (let r = t; r <= i; r++) s.push({ value: r });
    return s;
  }
  getLabelForValue(t) {
    return yo.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
L(wn, "id", "category"), L(wn, "defaults", { ticks: { callback: yo } });
function $g(e, t) {
  const i = [],
    {
      bounds: s,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: f,
      includeBounds: u,
    } = e,
    d = o || 1,
    g = h - 1,
    { min: p, max: m } = t,
    _ = !B(r),
    y = !B(a),
    v = !B(c),
    w = (m - p) / (f + 1);
  let b = bs((m - p) / g / d) * d,
    M,
    S,
    k,
    T;
  if (b < 1e-14 && !_ && !y) return [{ value: p }, { value: m }];
  (T = Math.ceil(m / b) - Math.floor(p / b)),
    T > g && (b = bs((T * b) / g / d) * d),
    B(l) || ((M = Math.pow(10, l)), (b = Math.ceil(b * M) / M)),
    s === "ticks"
      ? ((S = Math.floor(p / b) * b), (k = Math.ceil(m / b) * b))
      : ((S = p), (k = m)),
    _ && y && o && cf((a - r) / o, b / 1e3)
      ? ((T = Math.round(Math.min((a - r) / b, h))),
        (b = (a - r) / T),
        (S = r),
        (k = a))
      : v
      ? ((S = _ ? r : S), (k = y ? a : k), (T = c - 1), (b = (k - S) / T))
      : ((T = (k - S) / b),
        Me(T, Math.round(T), b / 1e3)
          ? (T = Math.round(T))
          : (T = Math.ceil(T)));
  const A = Math.max(ys(b), ys(S));
  (M = Math.pow(10, B(l) ? A : l)),
    (S = Math.round(S * M) / M),
    (k = Math.round(k * M) / M);
  let D = 0;
  for (
    _ &&
    (u && S !== r
      ? (i.push({ value: r }),
        S < r && D++,
        Me(Math.round((S + D * b) * M) / M, r, vo(r, w, e)) && D++)
      : S < r && D++);
    D < T;
    ++D
  ) {
    const P = Math.round((S + D * b) * M) / M;
    if (y && P > a) break;
    i.push({ value: P });
  }
  return (
    y && u && k !== a
      ? i.length && Me(i[i.length - 1].value, a, vo(a, w, e))
        ? (i[i.length - 1].value = a)
        : i.push({ value: a })
      : (!y || k === a) && i.push({ value: k }),
    i
  );
}
function vo(e, t, { horizontal: i, minRotation: n }) {
  const s = Ut(n),
    o = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
    r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class jg extends ce {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, i) {
    return B(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: i, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => (s = i ? s : l),
      a = (l) => (o = n ? o : l);
    if (t) {
      const l = re(s),
        c = re(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: i, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (i = i || 11)),
      i && (s = Math.min(i, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      i = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: i.precision,
        step: i.stepSize,
        count: i.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: i.minRotation || 0,
        includeBounds: i.includeBounds !== !1,
      },
      o = this._range || this,
      r = $g(s, o);
    return (
      t.bounds === "ticks" && hf(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let i = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - i) / Math.max(t.length - 1, 1) / 2;
      (i -= s), (n += s);
    }
    (this._startValue = i), (this._endValue = n), (this._valueRange = n - i);
  }
  getLabelForValue(t) {
    return dr(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class kn extends jg {
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    (this.min = X(t) ? t : 0),
      (this.max = X(i) ? i : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      i = t ? this.width : this.height,
      n = Ut(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
L(kn, "id", "linear"),
  L(kn, "defaults", { ticks: { callback: pr.formatters.numeric } });
const zi = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Q = Object.keys(zi);
function wo(e, t) {
  return e - t;
}
function ko(e, t) {
  if (B(t)) return null;
  const i = e._adapter,
    { parser: n, round: s, isoWeekday: o } = e._parseOpts;
  let r = t;
  return (
    typeof n == "function" && (r = n(r)),
    X(r) || (r = typeof n == "string" ? i.parse(r, n) : i.parse(r)),
    r === null
      ? null
      : (s &&
          (r =
            s === "week" && (Re(o) || o === !0)
              ? i.startOf(r, "isoWeek", o)
              : i.startOf(r, s)),
        +r)
  );
}
function Mo(e, t, i, n) {
  const s = Q.length;
  for (let o = Q.indexOf(e); o < s - 1; ++o) {
    const r = zi[Q[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((i - t) / (a * r.size)) <= n) return Q[o];
  }
  return Q[s - 1];
}
function Hg(e, t, i, n, s) {
  for (let o = Q.length - 1; o >= Q.indexOf(i); o--) {
    const r = Q[o];
    if (zi[r].common && e._adapter.diff(s, n, r) >= t - 1) return r;
  }
  return Q[i ? Q.indexOf(i) : 0];
}
function Wg(e) {
  for (let t = Q.indexOf(e) + 1, i = Q.length; t < i; ++t)
    if (zi[Q[t]].common) return Q[t];
}
function So(e, t, i) {
  if (!i) e[t] = !0;
  else if (i.length) {
    const { lo: n, hi: s } = Nn(i, t),
      o = i[n] >= t ? i[n] : i[s];
    e[o] = !0;
  }
}
function Vg(e, t, i, n) {
  const s = e._adapter,
    o = +s.startOf(t[0].value, n),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n))
    (l = i[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function Co(e, t, i) {
  const n = [],
    s = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (s[a] = r), n.push({ value: a, major: !1 });
  return o === 0 || !i ? n : Vg(e, n, s, i);
}
class Ai extends ce {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, i = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new Ru._date(t.adapters.date));
    s.init(i),
      ke(n.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: n.parser,
        round: n.round,
        isoWeekday: n.isoWeekday,
      }),
      super.init(t),
      (this._normalized = i.normalized);
  }
  parse(t, i) {
    return t === void 0 ? null : ko(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      i = this._adapter,
      n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (s = X(s) && !isNaN(s) ? s : +i.startOf(Date.now(), n)),
      (o = X(o) && !isNaN(o) ? o : +i.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let i = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return t.length && ((i = t[0]), (n = t[t.length - 1])), { min: i, max: n };
  }
  buildTicks() {
    const t = this.options,
      i = t.time,
      n = t.ticks,
      s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = this.max,
      a = mf(s, o, r);
    return (
      (this._unit =
        i.unit ||
        (n.autoSkip
          ? Mo(i.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : Hg(this, a.length, i.minUnit, this.min, this.max))),
      (this._majorUnit =
        !n.major.enabled || this._unit === "year" ? void 0 : Wg(this._unit)),
      this.initOffsets(s),
      t.reverse && a.reverse(),
      Co(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let i = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (i = 1 - s)
        : (i = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (n = o)
        : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (i = it(i, 0, r)),
      (n = it(n, 0, r)),
      (this._offsets = { start: i, end: n, factor: 1 / (i + 1 + n) });
  }
  _generate() {
    const t = this._adapter,
      i = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || Mo(o.minUnit, i, n, this._getLabelCapacity(i)),
      a = I(s.ticks.stepSize, 1),
      l = r === "week" ? o.isoWeekday : !1,
      c = Re(l) || l === !0,
      h = {};
    let f = i,
      u,
      d;
    if (
      (c && (f = +t.startOf(f, "isoWeek", l)),
      (f = +t.startOf(f, c ? "day" : r)),
      t.diff(n, i, r) > 1e5 * a)
    )
      throw new Error(
        i + " and " + n + " are too far apart with stepSize of " + a + " " + r
      );
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = f, d = 0; u < n; u = +t.add(u, a, r), d++) So(h, u, g);
    return (
      (u === n || s.bounds === "ticks" || d === 1) && So(h, u, g),
      Object.keys(h)
        .sort(wo)
        .map((p) => +p)
    );
  }
  getLabelForValue(t) {
    const i = this._adapter,
      n = this.options.time;
    return n.tooltipFormat
      ? i.format(t, n.tooltipFormat)
      : i.format(t, n.displayFormats.datetime);
  }
  format(t, i) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      r = i || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, i, n, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return F(r, [t, i, n], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && a[l],
      f = c && a[c],
      u = n[i],
      d = c && f && u && u.major;
    return this._adapter.format(t, s || (d ? f : h));
  }
  generateTickLabels(t) {
    let i, n, s;
    for (i = 0, n = t.length; i < n; ++i)
      (s = t[i]), (s.label = this._tickFormatFunction(s.value, i, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const i = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((i.start + n) * i.factor);
  }
  getValueForPixel(t) {
    const i = this._offsets,
      n = this.getDecimalForPixel(t) / i.factor - i.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const i = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = Ut(this.isHorizontal() ? i.maxRotation : i.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: n * o + a * r, h: n * r + a * o };
  }
  _getLabelCapacity(t) {
    const i = this.options.time,
      n = i.displayFormats,
      s = n[i.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, Co(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      i,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (i = 0, n = s.length; i < n; ++i)
      t = t.concat(s[i].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let i, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (i = 0, n = s.length; i < n; ++i) t.push(ko(this, s[i]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return xf(t.sort(wo));
  }
}
L(Ai, "id", "time"),
  L(Ai, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function ai(e, t, i) {
  let n = 0,
    s = e.length - 1,
    o,
    r,
    a,
    l;
  i
    ? (t >= e[n].pos && t <= e[s].pos && ({ lo: n, hi: s } = Xt(e, "pos", t)),
      ({ pos: o, time: a } = e[n]),
      ({ pos: r, time: l } = e[s]))
    : (t >= e[n].time &&
        t <= e[s].time &&
        ({ lo: n, hi: s } = Xt(e, "time", t)),
      ({ time: o, pos: a } = e[n]),
      ({ time: r, pos: l } = e[s]));
  const c = r - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class To extends Ai {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      i = (this._table = this.buildLookupTable(t));
    (this._minPos = ai(i, this.min)),
      (this._tableRange = ai(i, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: i, max: n } = this,
      s = [],
      o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      (c = t[r]), c >= i && c <= n && s.push(c);
    if (s.length < 2)
      return [
        { time: i, pos: 0 },
        { time: n, pos: 1 },
      ];
    for (r = 0, a = s.length; r < a; ++r)
      (h = s[r + 1]),
        (l = s[r - 1]),
        (c = s[r]),
        Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      i = this.max;
    let n = super.getDataTimestamps();
    return (
      (!n.includes(t) || !n.length) && n.splice(0, 0, t),
      (!n.includes(i) || n.length === 1) && n.push(i),
      n.sort((s, o) => s - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const i = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      i.length && n.length
        ? (t = this.normalize(i.concat(n)))
        : (t = i.length ? i : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (ai(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const i = this._offsets,
      n = this.getDecimalForPixel(t) / i.factor - i.end;
    return ai(this._table, n * this._tableRange + this._minPos, !0);
  }
}
L(To, "id", "timeseries"), L(To, "defaults", Ai.defaults);
const Ur = "label";
function Do(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Yg(e, t) {
  const i = e.options;
  i && t && Object.assign(i, t);
}
function Xr(e, t) {
  e.labels = t;
}
function qr(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ur;
  const n = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((r) => r[i] === s[i]);
    return !o || !s.data || n.includes(o)
      ? { ...s }
      : (n.push(o), Object.assign(o, s), o);
  });
}
function Ug(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ur;
  const i = { labels: [], datasets: [] };
  return Xr(i, e.labels), qr(i, e.datasets, t), i;
}
function Xg(e, t) {
  const {
      height: i = 150,
      width: n = 300,
      redraw: s = !1,
      datasetIdKey: o,
      type: r,
      data: a,
      options: l,
      plugins: c = [],
      fallbackContent: h,
      updateMode: f,
      ...u
    } = e,
    d = K.useRef(null),
    g = K.useRef(),
    p = () => {
      d.current &&
        ((g.current = new Fi(d.current, {
          type: r,
          data: Ug(a, o),
          options: l && { ...l },
          plugins: c,
        })),
        Do(t, g.current));
    },
    m = () => {
      Do(t, null), g.current && (g.current.destroy(), (g.current = null));
    };
  return (
    K.useEffect(() => {
      !s && g.current && l && Yg(g.current, l);
    }, [s, l]),
    K.useEffect(() => {
      !s && g.current && Xr(g.current.config.data, a.labels);
    }, [s, a.labels]),
    K.useEffect(() => {
      !s && g.current && a.datasets && qr(g.current.config.data, a.datasets, o);
    }, [s, a.datasets]),
    K.useEffect(() => {
      g.current && (s ? (m(), setTimeout(p)) : g.current.update(f));
    }, [s, l, a.labels, a.datasets, f]),
    K.useEffect(() => {
      g.current && (m(), setTimeout(p));
    }, [r]),
    K.useEffect(() => (p(), () => m()), []),
    Ao.createElement(
      "canvas",
      Object.assign({ ref: d, role: "img", height: i, width: n }, u),
      h
    )
  );
}
const qg = K.forwardRef(Xg);
function Kg(e, t) {
  return (
    Fi.register(t),
    K.forwardRef((i, n) =>
      Ao.createElement(qg, Object.assign({}, i, { ref: n, type: e }))
    )
  );
}
const Gg = Kg("line", ui);
function Zg(e, t, i) {
  let n, s, o;
  const r = t.right - t.left,
    a = t.bottom - t.top;
  return (
    (!o || n !== r || s !== a) &&
      ((n = r),
      (s = a),
      (o = e.createLinearGradient(0, t.bottom, 0, t.top)),
      o.addColorStop(0, `rgba(${i}, 0)`),
      o.addColorStop(0.5, `rgba(${i}, 0.1)`),
      o.addColorStop(1, `rgba(${i}, 0.3)`)),
    o
  );
}
function Qg(e, t) {
  const i = Math.max(...e),
    n = Math.min(...e);
  return (i - n) / t;
}
Fi.register(wn, kn, pi, Et, Dg, Rg, Cg, yg);
const Jg = ({ ticksCb: e, stepSize: t }) => ({
    responsive: !0,
    maintainAspectRatio: !0,
    animation: !0,
    animationDuration: 400,
    scales: {
      y: {
        ticks: {
          layout: {},
          callback:
            e ||
            function (i) {
              return Math.ceil(Number(i)).toFixed(2);
            },
          padding: 20,
          stepSize: t,
          beginAtZero: !0,
        },
        grid: { display: !0, color: "#313131", type: "dotted", dash: [5, 5] },
        border: { display: !0, dash: [5, 5] },
      },
      x: {
        border: { display: !1 },
        ticks: { padding: 10, beginAtZero: !0, color: "#525253" },
        grid: { display: !1 },
      },
    },
    plugins: { legend: { display: !1 } },
  }),
  tp = ({ color: e, labels: t, label: i, yData: n }) => ({
    labels: t,
    datasets: [
      {
        label: i,
        data: n,
        borderColor: `rgba(${e}, 1)`,
        lineTension: 0.5,
        fill: !0,
        pointBackgroundColor: "#fff",
        pointHoverBorderWidth: 5,
        pointHoverRadius: 8,
        backgroundColor: (s) => {
          const o = s.chart,
            { ctx: r, chartArea: a } = o;
          if (a) return Zg(r, a, e);
        },
      },
    ],
  }),
  li = ({
    aspectRatio: e,
    color: t,
    labels: i,
    yData: n,
    ticksCb: s,
    stepCount: o = 4,
  }) => {
    const r = tp({ color: t, labels: i, yData: n }),
      a = Qg(n, o),
      l = Jg({ ticksCb: s, stepSize: a });
    return x.jsx("div", {
      style: { marginLeft: "-20px" },
      children: x.jsx(Gg, { options: { ...e, ...l }, data: { ...r } }),
    });
  },
  Po = ({ title: e, header: t, children: i, listHeaderClassName: n = "" }) => {
    const [s, o, r] = t;
    return x.jsxs("div", {
      className: "listBoxWrapper",
      children: [
        x.jsx("div", { className: "listBoxWrapper_title", children: e }),
        x.jsxs("div", {
          className: Zr("listBoxWrapper_header", { [n]: n }),
          children: [
            x.jsx("div", { children: s }),
            x.jsx("div", { children: o }),
            x.jsx("div", { children: r }),
          ],
        }),
        x.jsx("div", { className: "listBox_listWrapper", children: i }),
      ],
    });
  },
  ep = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };
function ip(e) {
  return ep[e];
}
const np = () => {
  const t = Oo().clone().subtract(0, "days"),
    i = [];
  for (let n = 0; n < 9; n++) i.push(t.clone()), t.subtract(1, "month");
  return i.map((n) => n.format("D MMM")).reverse();
};
function sp(e) {
  const t = new Date(e),
    i = new Date().getTimezoneOffset();
  return new Date(t.getTime() - i * 6e4);
}
const op = np(),
  hp = () => {
    var o, r, a, l;
    Qr(!1);
    const { t: e } = Jr(),
      [t, i] = K.useState({
        total_cpu: 90,
        current_cpu: 10,
        total_bandwidth: 80,
        current_bandwidth: 20,
      }),
      [n, s] = K.useState({
        token_holders: [],
        current_cpu: "438.60",
        current_bandwidth: "32473.31",
        active_nodes: 1280,
        total_bandwidth: 3571e3,
        total_cpu: "22862.25",
        total_users: 57374,
        total_whitelabel_partners: 8358,
        total_value_locked: 1899520,
        services: [],
        cpu_graph: [],
        bandwidth_graph: [],
        server_time: new Date(),
        user_growth_chart: [],
      });
    return (
      K.useEffect(() => {
        const c = () => {
          ta.getNewInfo()
            .then((f) => {
              var g, p, m, _, y;
              s(f.data);
              const u = parseFloat(
                  (
                    (((g = f == null ? void 0 : f.data) == null
                      ? void 0
                      : g.current_cpu) /
                      Number(
                        (p = f == null ? void 0 : f.data) == null
                          ? void 0
                          : p.total_cpu
                      )) *
                    100
                  ).toFixed(2)
                ),
                d = parseFloat(
                  (
                    (((m = f == null ? void 0 : f.data) == null
                      ? void 0
                      : m.current_bandwidth) /
                      Number(
                        (_ = f == null ? void 0 : f.data) == null
                          ? void 0
                          : _.total_bandwidth
                      )) *
                    100
                  ).toFixed(2)
                );
              i({
                current_cpu: u,
                total_cpu: 100 - u,
                total_bandwidth: 100 - d,
                current_bandwidth: d,
              }),
                console.log((y = f.data) == null ? void 0 : y.token_holders);
            })
            .catch((f) => {
              console.log(f);
            });
        };
        c();
        const h = setInterval(c, 2e4);
        return () => clearInterval(h);
      }, []),
      x.jsxs("div", {
        children: [
          x.jsx("div", {
            className: "dashboardInfoLine",
            children: x.jsxs("div", {
              className: "row",
              children: [
                x.jsx("div", {
                  "data-aos": "fade-up",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsx("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex align-items-center",
                    children: x.jsxs("div", {
                      className: "dashboardInfoLine_testBox",
                      children: [
                        x.jsx("span", {
                          className: "dashboardInfoLine_subTitle",
                          children: e("TotalValueLocked"),
                        }),
                        x.jsxs("div", {
                          className: "dashboardInfoLine_title",
                          children: [
                            (o = n == null ? void 0 : 0) ==
                            null
                              ? void 0
                              : o.toLocaleString(),
                            " $",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "50",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsx("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex align-items-center",
                    children: x.jsxs("div", {
                      className: "dashboardInfoLine_testBox",
                      children: [
                        x.jsx("span", {
                          className: "dashboardInfoLine_subTitle",
                          children: e("TotalCPU"),
                        }),
                        x.jsxs("div", {
                          className:
                            " d-flex align-items-center d-flex align-items-center ",
                          children: [
                            x.jsxs("div", {
                              className: "dashboardInfoLine_title",
                              children: [
                                parseFloat(
                                  n == null ? void 0 : 0
                                ).toLocaleString(),
                                " Ghz",
                              ],
                            }),
                            x.jsxs("div", {
                              className:
                                "dashboardInfoLine_tooltip dashboardInfoLine_tooltip-blue",
                              children: [0, "% Free"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                  className: "col-md-3 col-6 dashboardInfoLine-colMobile   ",
                  children: x.jsx("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex align-items-center",
                    children: x.jsxs("div", {
                      className: "dashboardInfoLine_testBox",
                      children: [
                        x.jsx("span", {
                          className: "dashboardInfoLine_subTitle",
                          children: e("BandwidthCapacity"),
                        }),
                        x.jsxs("div", {
                          className:
                            " d-flex align-items-center d-flex align-items-center ",
                          children: [
                            x.jsxs("div", {
                              className: "dashboardInfoLine_title",
                              children: [
                                (
                                  (n == null ? void 0 : 0) / 1e3
                                ).toLocaleString(),
                                " Gbps",
                              ],
                            }),
                            x.jsxs("div", {
                              className:
                                "dashboardInfoLine_tooltip dashboardInfoLine_tooltip-yellow",
                              children: [
                                0,
                                "% Free",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "150",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsxs("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex justify-content-between align-items-center",
                    children: [
                      x.jsxs("div", {
                        className: "dashboardInfoLine_testBox",
                        children: [
                          x.jsx("span", {
                            className: "dashboardInfoLine_subTitle",
                            children: e("TotalUsers"),
                          }),
                          x.jsx("div", {
                            className:
                              " d-flex align-items-center d-flex align-items-center ",
                            children: x.jsx("div", {
                              className: "dashboardInfoLine_title",
                              children:
                                n == null
                                  ? void 0
                                  : 0,
                            }),
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        className: "d-none d-md-block",
                        children: x.jsx("img", {
                          src: "/icons/smile.svg",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "200",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsx("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex align-items-center",
                    children: x.jsxs("div", {
                      className: "dashboardInfoLine_testBox",
                      children: [
                        x.jsx("span", {
                          className: "dashboardInfoLine_subTitle",
                          children: e("ActiveNodes"),
                        }),
                        x.jsx("div", {
                          className:
                            " d-flex align-items-center d-flex align-items-center ",
                          children: x.jsx("div", {
                            className: "dashboardInfoLine_title",
                            children:
                              (r = n == null ? void 0 : 0) == null
                                ? void 0
                                : r.toLocaleString(),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "250",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsxs("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex justify-content-between align-items-center",
                    children: [
                      x.jsxs("div", {
                        className: "dashboardInfoLine_testBox",
                        children: [
                          x.jsx("span", {
                            className: "dashboardInfoLine_subTitle",
                            children: e("CurrentCPU"),
                          }),
                          x.jsx("div", {
                            className:
                              " d-flex align-items-center d-flex align-items-center ",
                            children: x.jsxs("div", {
                              className: "dashboardInfoLine_title",
                              children: [
                                parseFloat(
                                  n == null ? void 0 : 0
                                ).toLocaleString(),
                                " Ghz",
                              ],
                            }),
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        className: "d-none d-md-block",
                        children: x.jsx(fs, { percentage: 0 }),
                      }),
                    ],
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "300",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsxs("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex justify-content-between align-items-center",
                    children: [
                      x.jsxs("div", {
                        className: "dashboardInfoLine_testBox",
                        children: [
                          x.jsx("span", {
                            className: "dashboardInfoLine_subTitle",
                            children: e("CurrentBandwidth"),
                          }),
                          x.jsx("div", {
                            className:
                              " d-flex align-items-center d-flex align-items-center ",
                            children: x.jsxs("div", {
                              className: "dashboardInfoLine_title",
                              children: [
                                (
                                  parseFloat(
                                    n == null ? void 0 : 0
                                  ) / 1e3
                                ).toLocaleString(),
                                " ",
                                "Gbps",
                              ],
                            }),
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        className: "d-none d-md-block",
                        children: x.jsx(fs, {
                          color: "orange",
                          percentage: 0,
                        }),
                      }),
                    ],
                  }),
                }),
                x.jsx("div", {
                  "data-aos": "fade-up",
                  "data-aos-delay": "350",
                  className:
                    "col-md-3 col-6 dashboardInfoLine-colMobile mobilepading  ",
                  children: x.jsxs("div", {
                    className:
                      "dashboardInfoLine_card w-100 d-flex justify-content-between align-items-center",
                    children: [
                      x.jsxs("div", {
                        className: "dashboardInfoLine_testBox",
                        children: [
                          x.jsx("span", {
                            className: "dashboardInfoLine_subTitle",
                            children: e("whitelabelPartners"),
                          }),
                          x.jsxs("div", {
                            className:
                              " d-flex align-items-center d-flex align-items-center ",
                            children: [
                              x.jsx("div", {
                                className: "dashboardInfoLine_title",
                                children:
                                  n == null
                                    ? void 0
                                    : 0,
                              }),
                              x.jsxs("div", {
                                className:
                                  "dashboardInfoLine_tooltip dashboardInfoLine_tooltip-green",
                                children: [
                                  x.jsx("img", {
                                    src: "/icons/increase.svg",
                                    alt: "",
                                  }),
                                  "0%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        className: "d-none d-md-block",
                        children: x.jsx("img", {
                          src: "/icons/icon2.svg",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          x.jsxs("div", {
            className: "row",
            children: [
              x.jsx("div", {
                "data-aos": "zoom-in-right",
                className: "col-md-6",
                children: x.jsx(Po, {
                  title: e("TopHolders"),
                  header: ["#", e("WalletAddress"), e("NodeOwnership")],
                  children: x.jsx("div", {
                    className: "listBox_listWrapper",
                    children:
                      (a = n == null ? void 0 : n.token_holders) != null &&
                      a.length
                        ? n == null
                          ? void 0
                          : n.token_holders.map((c, h) =>
                              x.jsxs("div", {
                                className: "listBox",
                                children: [
                                  x.jsx("div", {
                                    className: "listBox_order",
                                    children:
                                      h === 0
                                        ? x.jsx("img", {
                                            src: "/icons/reward1.svg",
                                            alt: "",
                                          })
                                        : h === 1
                                        ? x.jsx("img", {
                                            src: "/icons/reward2.svg",
                                            alt: "",
                                          })
                                        : h === 2
                                        ? x.jsx("img", {
                                            src: "/icons/reward3.svg",
                                            alt: "",
                                          })
                                        : h + 1,
                                  }),
                                  x.jsx("div", {
                                    children: x.jsx("div", {
                                      className: "listBox_date",
                                      children: c.address,
                                    }),
                                  }),
                                  x.jsxs("div", {
                                    className: " d-flex align-items-center ",
                                    children: [
                                      x.jsx("div", {
                                        className: "listBox_amount text-right",
                                        children: c.amount,
                                      }),
                                      x.jsxs("div", {
                                        className: "listBox_label",
                                        children: [c.percentage, "%"],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            )
                        : x.jsx("div", {
                            className: "mt-5",
                            children: x.jsx(Un, {}),
                          }),
                  }),
                }),
              }),
              x.jsx("div", {
                "data-aos": "zoom-in-left",
                className: "col-md-6",
                children: x.jsx(Po, {
                  title: e("LastDeployed"),
                  header: [e("Service"), e("DateDeployed"), e("User")],
                  listHeaderClassName: "services",
                  children: x.jsx("div", {
                    className: "listBox_listWrapper",
                    children:
                      (l = n == null ? void 0 : n.token_holders) != null &&
                      l.length
                        ? n == null
                          ? void 0
                          : n.services.map((c, h) =>
                              x.jsxs(
                                "div",
                                {
                                  className: "listBox",
                                  children: [
                                    x.jsx("div", {
                                      className:
                                        "listBox-txt listBox_firstField",
                                      children: e("EncryptedNetwork"),
                                    }),
                                    x.jsx("div", {
                                      className: "listBox_midleField",
                                      children: x.jsx("div", {
                                        className: "listBox_date",
                                        children: Oo(sp(c.update_date)).format(
                                          "MMM DD, YYYY, h:mmA"
                                        ),
                                      }),
                                    }),
                                    x.jsx("div", {
                                      className:
                                        " d-flex align-items-center listBox_lastField",
                                      children: x.jsx("div", {
                                        className: "listBox_amount text-right",
                                        children: c == null ? void 0 : c.user,
                                      }),
                                    }),
                                  ],
                                },
                                h
                              )
                            )
                        : x.jsx("div", {
                            className: "mt-5",
                            children: x.jsx(Un, {}),
                          }),
                  }),
                }),
              }),
            ],
          }),
          x.jsxs("div", {
            className: "row",
            children: [
              x.jsx("div", {
                "data-aos": "fade-up",
                className: "col-md-6",
                children: x.jsxs("div", {
                  className: "LineChartCard",
                  children: [
                    x.jsx("div", {
                      className: "LineChartCard_title",
                      children: e("Monthlyload"),
                    }),
                    x.jsx(
                      li,
                      {
                        yData: n.cpu_graph.map((c) => c.value),
                        labels: n.cpu_graph.map((c) => c.created_at_formatted),
                        color: "0, 165, 159",
                        ticksCb: (c) => `${Math.floor(c)} Ghz`,
                        stepCount: 3,
                      },
                      2
                    ),
                  ],
                }),
              }),
              x.jsx("div", {
                "data-aos": "fade-up",
                className: "col-md-6",
                children: x.jsxs("div", {
                  className: "LineChartCard",
                  children: [
                    x.jsx("div", {
                      className: "LineChartCard_title",
                      children: e("MonthlyTraffic"),
                    }),
                    x.jsx(
                      li,
                      {
                        yData: n.bandwidth_graph.map((c) => c.value),
                        labels: n.bandwidth_graph.map(
                          (c) => c.created_at_formatted
                        ),
                        color: "241, 150, 58",
                        ticksCb: (c) => `${c.toFixed(2)} Gpbs`,
                      },
                      1
                    ),
                  ],
                }),
              }),
              x.jsx("div", {
                "data-aos": "fade-up",
                className: "col-md-12",
                children: x.jsxs("div", {
                  className: "LineChartCard",
                  children: [
                    x.jsxs("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        x.jsx("div", {
                          className: "LineChartCard_title",
                          children: e("UserGrowth"),
                        }),
                        x.jsxs("div", {
                          className: "d-none d-md-block LineChartCard_legend",
                          children: [
                            x.jsx("div", {
                              style: { color: "rgb(56, 127, 233)" },
                              className: "LineChartCard_sum",
                              children:
                                n == null
                                  ? void 0
                                  : 0,
                            }),
                            x.jsx("div", {
                              className: "LineChartCard_label",
                              children: e("TotalUsers"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    x.jsx(li, {
                      yData: n.user_growth_chart
                        .filter((c) => c.year >= 2024)
                        .map((c) => c.count),
                      labels: n.user_growth_chart
                        .filter((c) => c.year >= 2024)
                        .map((c) => c.year + "/" + ip(c.month.toLowerCase())),
                      color: "56, 127, 233",
                      aspectRatio:
                        (window == null ? void 0 : window.innerWidth) > 800
                          ? { aspectRatio: 4 / 1 }
                          : null,
                    }),
                  ],
                }),
              }),
              x.jsx("div", {
                "data-aos": "fade-up",
                className: "col-md-12",
                children: x.jsxs("div", {
                  className: "LineChartCard",
                  children: [
                    x.jsxs("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        x.jsx("div", {
                          className: "LineChartCard_title",
                          children: e("WhitelabelGrowth"),
                        }),
                        x.jsxs("div", {
                          className: "d-none d-md-block LineChartCard_legend",
                          children: [
                            x.jsx("div", {
                              style: { color: "rgb(138, 50, 228)" },
                              className: "LineChartCard_sum",
                              children:
                                n == null
                                  ? void 0
                                  : 0,
                            }),
                            x.jsx("div", {
                              className: "LineChartCard_label",
                              children: e("TotalPartners"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    x.jsx(li, {
                      yData: [
                        5740,
                        5964,
                        6678,
                        6946,
                        7840,
                        7900,
                        8024,
                        8100,
                        (n == null ? void 0 : n.total_whitelabel_partners) ||
                          8358,
                      ],
                      labels: op,
                      color: "138, 50, 228",
                      aspectRatio:
                        (window == null ? void 0 : window.innerWidth) > 800
                          ? { aspectRatio: 4 / 1 }
                          : null,
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
export { hp as default, np as getDinamicDate };
