import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/input-otp/dist/index.mjs
var n = __toESM(require_react(), 1);
var R = __toESM(require_react(), 1);
var Z = __toESM(require_react(), 1);
var ye = Object.defineProperty;
var He = Object.defineProperties;
var De = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty;
var pe = Object.prototype.propertyIsEnumerable;
var fe = (r, s, t) => s in r ? ye(r, s, { enumerable: true, configurable: true, writable: true, value: t }) : r[s] = t;
var Re = (r, s) => {
  for (var t in s || (s = {}))
    me.call(s, t) && fe(r, t, s[t]);
  if (U)
    for (var t of U(s))
      pe.call(s, t) && fe(r, t, s[t]);
  return r;
};
var ge = (r, s) => He(r, De(s));
var ve = (r, s) => {
  var t = {};
  for (var u in r)
    me.call(r, u) && s.indexOf(u) < 0 && (t[u] = r[u]);
  if (r != null && U)
    for (var u of U(r))
      s.indexOf(u) < 0 && pe.call(r, u) && (t[u] = r[u]);
  return t;
};
var be = "^\\d+$";
var Le = "^[a-zA-Z]+$";
var Ge = "^[a-zA-Z0-9]+$";
function Ee(r) {
  let s = setTimeout(r, 0), t = setTimeout(r, 10), u = setTimeout(r, 50);
  return [s, t, u];
}
var Ae = 18;
var ke = "40px";
var Be = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Se({ inputRef: r, pwmAreaRef: s, pushPasswordManagerStrategy: t, isFocused: u }) {
  let h = R.useRef({ done: false, refocused: false }), [A, k] = R.useState(false), [x, X] = R.useState(false), [M, L] = R.useState(false), a = R.useMemo(() => t === "none" ? false : t === "increase-width" && A && x || t === "experimental-no-flickering" && (!M || M && x && A), [M, A, x, t]), B = R.useCallback(() => {
    let d = r.current, v = s.current;
    if (!d || !v || M || t === "none")
      return;
    let b = t === "increase-width" ? d : v, G = b.getBoundingClientRect().left + b.offsetWidth, c = b.getBoundingClientRect().top + b.offsetHeight / 2, W = G - Ae, I = c, f = document.elementFromPoint(W, I);
    if ((document.querySelectorAll(Be).length > 0 || f !== d) && (k(true), L(true), !h.current.refocused && document.activeElement === d)) {
      let F = [d.selectionStart, d.selectionEnd];
      d.blur(), d.focus(), d.setSelectionRange(F[0], F[1]), h.current.refocused = true;
    }
  }, [M, r, t, s]);
  return R.useEffect(() => {
    let d = new IntersectionObserver((v) => {
      let b = v[0];
      X(b.intersectionRatio > 0.99);
    }, { threshold: 1, root: null, rootMargin: "0px" });
    return s.current && d.observe(s.current), () => {
      d.disconnect();
    };
  }, [s]), R.useEffect(() => {
    let d = u || document.activeElement === r.current;
    if (t === "none" || !d)
      return;
    let v = setTimeout(B, 0), b = setTimeout(B, 2e3), G = setTimeout(B, 5e3), c = setTimeout(() => {
      L(true);
    }, 6e3);
    return () => {
      clearTimeout(v), clearTimeout(b), clearTimeout(G), clearTimeout(c);
    };
  }, [r, u, t, B]), { willPushPWMBadge: a, PWM_BADGE_SPACE_WIDTH: ke };
}
function he(r) {
  let s = Z.useRef();
  return Z.useEffect(() => {
    s.current = r;
  }), s.current;
}
var We = n.forwardRef((d, B) => {
  var v = d, { value: r, onChange: s, maxLength: t, textAlign: u = "left", pattern: h = be, inputMode: A = "numeric", onComplete: k, pushPasswordManagerStrategy: x = "increase-width", render: X, containerClassName: M, noScriptCSSFallback: L = Oe } = v, a = ve(v, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "render", "containerClassName", "noScriptCSSFallback"]);
  var ae, ce, ie, le;
  let [b, G] = n.useState(typeof a.defaultValue == "string" ? a.defaultValue : ""), c = r != null ? r : b, W = he(c), I = n.useCallback((e) => {
    s == null || s(e), G(e);
  }, [s]), f = n.useMemo(() => h ? typeof h == "string" ? new RegExp(h) : h : null, [h]), i = n.useRef(null), q = n.useRef(null), F = n.useRef(null), K = n.useRef({ value: c, onChange: I, isIOS: typeof window != "undefined" && ((ae = window == null ? void 0 : window.CSS) == null ? void 0 : ae.supports("-webkit-touch-callout", "none")) }), Y = n.useRef({ prev: [(ce = i.current) == null ? void 0 : ce.selectionStart, (ie = i.current) == null ? void 0 : ie.selectionEnd, (le = i.current) == null ? void 0 : le.selectionDirection] });
  n.useImperativeHandle(B, () => i.current, []), n.useEffect(() => {
    let e = i.current, o = q.current;
    if (!e || !o)
      return;
    K.current.value !== e.value && K.current.onChange(e.value), Y.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection];
    function m() {
      if (document.activeElement !== e) {
        j(null), $(null);
        return;
      }
      let l = e.selectionStart, E = e.selectionEnd, w = e.selectionDirection, y = e.maxLength, H = e.value, S = Y.current.prev, g = -1, T = -1, _;
      if (H.length !== 0 && l !== null && E !== null) {
        let Me = l === E, Ie = l === H.length && H.length < y;
        if (Me && !Ie) {
          let D = l;
          if (D === 0)
            g = 0, T = 1, _ = "forward";
          else if (D === y)
            g = D - 1, T = D, _ = "backward";
          else if (y > 2 && H.length > 2) {
            let Q = 0;
            if (S[0] !== null && S[1] !== null) {
              _ = D < S[1] ? "backward" : "forward";
              let Ce = S[0] === S[1] && S[0] < y;
              _ === "backward" && !Ce && (Q = -1);
            }
            g = Q + D, T = Q + D + 1;
          }
        }
        g !== -1 && T !== -1 && g !== T && i.current.setSelectionRange(g, T, _);
      }
      let ue = g !== -1 ? g : l, de = T !== -1 ? T : E, _e = _ != null ? _ : w;
      j(ue), $(de), Y.current.prev = [ue, de, _e];
    }
    if (document.addEventListener("selectionchange", m, { capture: true }), m(), document.activeElement === e && J(true), !document.getElementById("input-otp-style")) {
      let l = document.createElement("style");
      if (l.id = "input-otp-style", document.head.appendChild(l), l.sheet) {
        let E = "background: transparent !important; text: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        V(l.sheet, "[data-input-otp]::selection { background: transparent !important; }"), V(l.sheet, `[data-input-otp]:autofill { ${E} }`), V(l.sheet, `[data-input-otp]:-webkit-autofill { ${E} }`), V(l.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), V(l.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let p = () => {
      o && o.style.setProperty("--root-height", `${e.clientHeight}px`);
    };
    p();
    let P = new ResizeObserver(p);
    return P.observe(e), () => {
      document.removeEventListener("selectionchange", m, { capture: true }), P.disconnect();
    };
  }, []);
  let [ee, te] = n.useState(false), [N, J] = n.useState(false), [C, j] = n.useState(null), [O, $] = n.useState(null);
  n.useEffect(() => {
    Ee(() => {
      var p, P, l, E;
      (p = i.current) == null || p.dispatchEvent(new Event("input"));
      let e = (P = i.current) == null ? void 0 : P.selectionStart, o = (l = i.current) == null ? void 0 : l.selectionEnd, m = (E = i.current) == null ? void 0 : E.selectionDirection;
      e !== null && o !== null && (j(e), $(o), Y.current.prev = [e, o, m]);
    });
  }, [c, N]), n.useEffect(() => {
    W !== void 0 && c !== W && W.length < t && c.length === t && (k == null || k(c));
  }, [t, k, W, c]);
  let z = Se({ inputRef: i, pwmAreaRef: F, pushPasswordManagerStrategy: x, isFocused: N }), ne = n.useCallback((e) => {
    let o = e.currentTarget.value.slice(0, t);
    if (o.length > 0 && f && !f.test(o)) {
      e.preventDefault();
      return;
    }
    I(o);
  }, [t, I, f]), oe = n.useCallback(() => {
    var e;
    if (i.current) {
      let o = Math.min(i.current.value.length, t - 1), m = i.current.value.length;
      (e = i.current) == null || e.setSelectionRange(o, m), j(o), $(m);
    }
    J(true);
  }, [t]), re = n.useCallback((e) => {
    var S, g;
    let o = i.current;
    if (!K.current.isIOS || !e.clipboardData || !o)
      return;
    let m = e.clipboardData.getData("text/plain");
    e.preventDefault();
    let p = (S = i.current) == null ? void 0 : S.selectionStart, P = (g = i.current) == null ? void 0 : g.selectionEnd, w = (p !== P ? c.slice(0, p) + m + c.slice(P) : c.slice(0, p) + m + c.slice(p)).slice(0, t);
    if (w.length > 0 && f && !f.test(w))
      return;
    o.value = w, I(w);
    let y = Math.min(w.length, t - 1), H = w.length;
    o.setSelectionRange(y, H), j(y), $(H);
  }, [t, I, f, c]), Pe = n.useMemo(() => ({ position: "relative", cursor: a.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [a.disabled]), se = n.useMemo(() => ({ position: "absolute", inset: 0, width: z.willPushPWMBadge ? `calc(100% + ${z.PWM_BADGE_SPACE_WIDTH})` : "100%", height: "100%", display: "flex", textAlign: u, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [z.PWM_BADGE_SPACE_WIDTH, z.willPushPWMBadge, u]), we = n.useMemo(() => n.createElement("input", ge(Re({ autoComplete: a.autoComplete || "one-time-code" }, a), { "data-input-otp": true, "data-input-otp-mss": C, "data-input-otp-mse": O, inputMode: A, pattern: f == null ? void 0 : f.source, style: se, maxLength: t, value: c, ref: i, onPaste: (e) => {
    var o;
    re(e), (o = a.onPaste) == null || o.call(a, e);
  }, onChange: ne, onMouseOver: (e) => {
    var o;
    te(true), (o = a.onMouseOver) == null || o.call(a, e);
  }, onMouseLeave: (e) => {
    var o;
    te(false), (o = a.onMouseLeave) == null || o.call(a, e);
  }, onFocus: (e) => {
    var o;
    oe(), (o = a.onFocus) == null || o.call(a, e);
  }, onBlur: (e) => {
    var o;
    J(false), (o = a.onBlur) == null || o.call(a, e);
  } })), [ne, oe, re, A, se, t, O, C, a, f == null ? void 0 : f.source, c]), Te = n.useMemo(() => X({ slots: Array.from({ length: t }).map((e, o) => {
    let m = N && C !== null && O !== null && (C === O && o === C || o >= C && o < O), p = c[o] !== void 0 ? c[o] : null;
    return { char: p, isActive: m, hasFakeCaret: m && p === null };
  }), isFocused: N, isHovering: !a.disabled && ee }), [N, ee, t, O, C, a.disabled, X, c]);
  return n.createElement(n.Fragment, null, L !== null && n.createElement("noscript", null, n.createElement("style", null, L)), n.createElement("div", { ref: q, "data-input-otp-container": true, style: Pe, className: M }, n.createElement("div", { ref: F, style: { position: "absolute", top: 0, right: `calc(-1 * ${z.PWM_BADGE_SPACE_WIDTH})`, bottom: 0, left: "100%", pointerEvents: "none", userSelect: "none", background: "transparent" } }), Te, n.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, we)));
});
We.displayName = "Input";
function V(r, s) {
  try {
    r.insertRule(s);
  } catch (t) {
    console.error("input-otp could not insert CSS rule:", s);
  }
}
var Oe = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
export {
  We as OTPInput,
  Le as REGEXP_ONLY_CHARS,
  be as REGEXP_ONLY_DIGITS,
  Ge as REGEXP_ONLY_DIGITS_AND_CHARS
};
//# sourceMappingURL=input-otp.js.map
