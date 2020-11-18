import 'vuetify/lib';
import { codemirror as e } from 'vue-codemirror';
import 'script-loader!jsonlint';
import t from 'htmlhint';
import { JSHINT as n } from 'jshint';
import r from 'csslint';
import { parser as i } from 'jsonlint';
'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self;
function o(e, t, n) {
    return (
        e(
            (n = {
                path: t,
                exports: {},
                require: function (e, t) {
                    return (function () {
                        throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
                    })(null == t && n.path);
                },
            }),
            n.exports
        ),
        n.exports
    );
}
var a = o(function (e, t) {
    e.exports = (function () {
        var e = navigator.userAgent,
            t = navigator.platform,
            n = /gecko\/\d/i.test(e),
            r = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e),
            a = r || i || o,
            l = a && (r ? document.documentMode || 6 : +(o || i)[1]),
            s = !o && /WebKit\//.test(e),
            c = s && /Qt\/\d+\.\d+/.test(e),
            u = !o && /Chrome\//.test(e),
            d = /Opera\//.test(e),
            f = /Apple Computer/.test(navigator.vendor),
            p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            h = /PhantomJS/.test(e),
            m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
            g = /Android/.test(e),
            v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            y = m || /Mac/.test(t),
            b = /\bCrOS\b/.test(e),
            x = /win/i.test(t),
            k = d && e.match(/Version\/(\d*\.\d*)/);
        k && (k = Number(k[1])), k && k >= 15 && ((d = !1), (s = !0));
        var w = y && (c || (d && (null == k || k < 12.11))),
            C = n || (a && l >= 9);
        function S(e) {
            return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var M,
            T = function (e, t) {
                var n = e.className,
                    r = S(t).exec(n);
                if (r) {
                    var i = n.slice(r.index + r[0].length);
                    e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
                }
            };
        function L(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
            return e;
        }
        function A(e, t) {
            return L(e).appendChild(t);
        }
        function _(e, t, n, r) {
            var i = document.createElement(e);
            if ((n && (i.className = n), r && (i.style.cssText = r), 'string' == typeof t))
                i.appendChild(document.createTextNode(t));
            else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i;
        }
        function O(e, t, n, r) {
            var i = _(e, t, n, r);
            return i.setAttribute('role', 'presentation'), i;
        }
        function E(e, t) {
            if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
            do {
                if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
            } while ((t = t.parentNode));
        }
        function z() {
            var e;
            try {
                e = document.activeElement;
            } catch (t) {
                e = document.body || null;
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
            return e;
        }
        function P(e, t) {
            var n = e.className;
            S(t).test(n) || (e.className += (n ? ' ' : '') + t);
        }
        function F(e, t) {
            for (var n = e.split(' '), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += ' ' + n[r]);
            return t;
        }
        M = document.createRange
            ? function (e, t, n, r) {
                  var i = document.createRange();
                  return i.setEnd(r || e, n), i.setStart(e, t), i;
              }
            : function (e, t, n) {
                  var r = document.body.createTextRange();
                  try {
                      r.moveToElementText(e.parentNode);
                  } catch (e) {
                      return r;
                  }
                  return r.collapse(!0), r.moveEnd('character', n), r.moveStart('character', t), r;
              };
        var N = function (e) {
            e.select();
        };
        function D(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
                return e.apply(null, t);
            };
        }
        function j(e, t, n) {
            for (var r in (t || (t = {}), e))
                !e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
            return t;
        }
        function H(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, a = i || 0; ; ) {
                var l = e.indexOf('\t', o);
                if (l < 0 || l >= t) return a + (t - o);
                (a += l - o), (a += n - (a % n)), (o = l + 1);
            }
        }
        m
            ? (N = function (e) {
                  (e.selectionStart = 0), (e.selectionEnd = e.value.length);
              })
            : a &&
              (N = function (e) {
                  try {
                      e.select();
                  } catch (e) {}
              });
        var I = function () {
            (this.id = null), (this.f = null), (this.time = 0), (this.handler = D(this.onTimeout, this));
        };
        function q(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
            return -1;
        }
        (I.prototype.onTimeout = function (e) {
            (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }),
            (I.prototype.set = function (e, t) {
                this.f = t;
                var n = +new Date() + e;
                (!this.id || n < this.time) &&
                    (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
            });
        var W = 50,
            R = {
                toString: function () {
                    return 'CodeMirror.Pass';
                },
            },
            B = { scroll: !1 },
            $ = { origin: '*mouse' },
            U = { origin: '+move' };
        function V(e, t, n) {
            for (var r = 0, i = 0; ; ) {
                var o = e.indexOf('\t', r);
                -1 == o && (o = e.length);
                var a = o - r;
                if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
                if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
            }
        }
        var G = [''];
        function K(e) {
            for (; G.length <= e; ) G.push(X(G) + ' ');
            return G[e];
        }
        function X(e) {
            return e[e.length - 1];
        }
        function Q(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n;
        }
        function Y(e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
            e.splice(r, 0, t);
        }
        function Z() {}
        function J(e, t) {
            var n;
            return Object.create ? (n = Object.create(e)) : ((Z.prototype = e), (n = new Z())), t && j(t, n), n;
        }
        var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function te(e) {
            return /\w/.test(e) || (e > '' && (e.toUpperCase() != e.toLowerCase() || ee.test(e)));
        }
        function ne(e, t) {
            return t ? !!(t.source.indexOf('\\w') > -1 && te(e)) || t.test(e) : te(e);
        }
        function re(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0;
        }
        var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function oe(e) {
            return e.charCodeAt(0) >= 768 && ie.test(e);
        }
        function ae(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && oe(e.charAt(t)); ) t += n;
            return t;
        }
        function le(e, t, n) {
            for (var r = t > n ? -1 : 1; ; ) {
                if (t == n) return t;
                var i = (t + n) / 2,
                    o = r < 0 ? Math.ceil(i) : Math.floor(i);
                if (o == t) return e(o) ? t : n;
                e(o) ? (n = o) : (t = o + r);
            }
        }
        function se(e, t, n, r) {
            if (!e) return r(t, n, 'ltr', 0);
            for (var i = !1, o = 0; o < e.length; ++o) {
                var a = e[o];
                ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                    (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? 'rtl' : 'ltr', o), (i = !0));
            }
            i || r(t, n, 'ltr');
        }
        var ce = null;
        function ue(e, t, n) {
            var r;
            ce = null;
            for (var i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.from < t && o.to > t) return i;
                o.to == t && (o.from != o.to && 'before' == n ? (r = i) : (ce = i)),
                    o.from == t && (o.from != o.to && 'before' != n ? (r = i) : (ce = i));
            }
            return null != r ? r : ce;
        }
        var de = (function () {
            var e =
                    'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
                t =
                    'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
            function n(n) {
                return n <= 247
                    ? e.charAt(n)
                    : 1424 <= n && n <= 1524
                    ? 'R'
                    : 1536 <= n && n <= 1785
                    ? t.charAt(n - 1536)
                    : 1774 <= n && n <= 2220
                    ? 'r'
                    : 8192 <= n && n <= 8203
                    ? 'w'
                    : 8204 == n
                    ? 'b'
                    : 'L';
            }
            var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                o = /[LRr]/,
                a = /[Lb1n]/,
                l = /[1n]/;
            function s(e, t, n) {
                (this.level = e), (this.from = t), (this.to = n);
            }
            return function (e, t) {
                var c = 'ltr' == t ? 'L' : 'R';
                if (0 == e.length || ('ltr' == t && !r.test(e))) return !1;
                for (var u = e.length, d = [], f = 0; f < u; ++f) d.push(n(e.charCodeAt(f)));
                for (var p = 0, h = c; p < u; ++p) {
                    var m = d[p];
                    'm' == m ? (d[p] = h) : (h = m);
                }
                for (var g = 0, v = c; g < u; ++g) {
                    var y = d[g];
                    '1' == y && 'r' == v ? (d[g] = 'n') : o.test(y) && ((v = y), 'r' == y && (d[g] = 'R'));
                }
                for (var b = 1, x = d[0]; b < u - 1; ++b) {
                    var k = d[b];
                    '+' == k && '1' == x && '1' == d[b + 1]
                        ? (d[b] = '1')
                        : ',' != k || x != d[b + 1] || ('1' != x && 'n' != x) || (d[b] = x),
                        (x = k);
                }
                for (var w = 0; w < u; ++w) {
                    var C = d[w];
                    if (',' == C) d[w] = 'N';
                    else if ('%' == C) {
                        var S = void 0;
                        for (S = w + 1; S < u && '%' == d[S]; ++S);
                        for (var M = (w && '!' == d[w - 1]) || (S < u && '1' == d[S]) ? '1' : 'N', T = w; T < S; ++T)
                            d[T] = M;
                        w = S - 1;
                    }
                }
                for (var L = 0, A = c; L < u; ++L) {
                    var _ = d[L];
                    'L' == A && '1' == _ ? (d[L] = 'L') : o.test(_) && (A = _);
                }
                for (var O = 0; O < u; ++O)
                    if (i.test(d[O])) {
                        var E = void 0;
                        for (E = O + 1; E < u && i.test(d[E]); ++E);
                        for (
                            var z = 'L' == (O ? d[O - 1] : c),
                                P = z == ('L' == (E < u ? d[E] : c)) ? (z ? 'L' : 'R') : c,
                                F = O;
                            F < E;
                            ++F
                        )
                            d[F] = P;
                        O = E - 1;
                    }
                for (var N, D = [], j = 0; j < u; )
                    if (a.test(d[j])) {
                        var H = j;
                        for (++j; j < u && a.test(d[j]); ++j);
                        D.push(new s(0, H, j));
                    } else {
                        var I = j,
                            q = D.length,
                            W = 'rtl' == t ? 1 : 0;
                        for (++j; j < u && 'L' != d[j]; ++j);
                        for (var R = I; R < j; )
                            if (l.test(d[R])) {
                                I < R && (D.splice(q, 0, new s(1, I, R)), (q += W));
                                var B = R;
                                for (++R; R < j && l.test(d[R]); ++R);
                                D.splice(q, 0, new s(2, B, R)), (q += W), (I = R);
                            } else ++R;
                        I < j && D.splice(q, 0, new s(1, I, j));
                    }
                return (
                    'ltr' == t &&
                        (1 == D[0].level &&
                            (N = e.match(/^\s+/)) &&
                            ((D[0].from = N[0].length), D.unshift(new s(0, 0, N[0].length))),
                        1 == X(D).level &&
                            (N = e.match(/\s+$/)) &&
                            ((X(D).to -= N[0].length), D.push(new s(0, u - N[0].length, u)))),
                    'rtl' == t ? D.reverse() : D
                );
            };
        })();
        function fe(e, t) {
            var n = e.order;
            return null == n && (n = e.order = de(e.text, t)), n;
        }
        var pe = [],
            he = function (e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1);
                else if (e.attachEvent) e.attachEvent('on' + t, n);
                else {
                    var r = e._handlers || (e._handlers = {});
                    r[t] = (r[t] || pe).concat(n);
                }
            };
        function me(e, t) {
            return (e._handlers && e._handlers[t]) || pe;
        }
        function ge(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) e.detachEvent('on' + t, n);
            else {
                var r = e._handlers,
                    i = r && r[t];
                if (i) {
                    var o = q(i, n);
                    o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
                }
            }
        }
        function ve(e, t) {
            var n = me(e, t);
            if (n.length)
                for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r);
        }
        function ye(e, t, n) {
            return (
                'string' == typeof t &&
                    (t = {
                        type: t,
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                        },
                    }),
                ve(e, n || t.type, e, t),
                Se(t) || t.codemirrorIgnore
            );
        }
        function be(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
                for (
                    var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0;
                    r < t.length;
                    ++r
                )
                    -1 == q(n, t[r]) && n.push(t[r]);
        }
        function xe(e, t) {
            return me(e, t).length > 0;
        }
        function ke(e) {
            (e.prototype.on = function (e, t) {
                he(this, e, t);
            }),
                (e.prototype.off = function (e, t) {
                    ge(this, e, t);
                });
        }
        function we(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function Ce(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function Se(e) {
            return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
        }
        function Me(e) {
            we(e), Ce(e);
        }
        function Te(e) {
            return e.target || e.srcElement;
        }
        function Le(e) {
            var t = e.which;
            return (
                null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
                y && e.ctrlKey && 1 == t && (t = 3),
                t
            );
        }
        var Ae,
            _e,
            Oe = (function () {
                if (a && l < 9) return !1;
                var e = _('div');
                return 'draggable' in e || 'dragDrop' in e;
            })();
        function Ee(e) {
            if (null == Ae) {
                var t = _('span', '​');
                A(e, _('span', [t, document.createTextNode('x')])),
                    0 != e.firstChild.offsetHeight && (Ae = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
            }
            var n = Ae ? _('span', '​') : _('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px');
            return n.setAttribute('cm-text', ''), n;
        }
        function ze(e) {
            if (null != _e) return _e;
            var t = A(e, document.createTextNode('AخA')),
                n = M(t, 0, 1).getBoundingClientRect(),
                r = M(t, 1, 2).getBoundingClientRect();
            return L(e), !(!n || n.left == n.right) && (_e = r.right - n.right < 3);
        }
        var Pe,
            Fe =
                3 != '\n\nb'.split(/\n/).length
                    ? function (e) {
                          for (var t = 0, n = [], r = e.length; t <= r; ) {
                              var i = e.indexOf('\n', t);
                              -1 == i && (i = e.length);
                              var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                                  a = o.indexOf('\r');
                              -1 != a ? (n.push(o.slice(0, a)), (t += a + 1)) : (n.push(o), (t = i + 1));
                          }
                          return n;
                      }
                    : function (e) {
                          return e.split(/\r\n?|\n/);
                      },
            Ne = window.getSelection
                ? function (e) {
                      try {
                          return e.selectionStart != e.selectionEnd;
                      } catch (e) {
                          return !1;
                      }
                  }
                : function (e) {
                      var t;
                      try {
                          t = e.ownerDocument.selection.createRange();
                      } catch (e) {}
                      return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints('StartToEnd', t);
                  },
            De = 'oncopy' in (Pe = _('div')) || (Pe.setAttribute('oncopy', 'return;'), 'function' == typeof Pe.oncopy),
            je = null;
        function He(e) {
            if (null != je) return je;
            var t = A(e, _('span', 'x')),
                n = t.getBoundingClientRect(),
                r = M(t, 0, 1).getBoundingClientRect();
            return (je = Math.abs(n.left - r.left) > 1);
        }
        var Ie = {},
            qe = {};
        function We(e, t) {
            arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (Ie[e] = t);
        }
        function Re(e, t) {
            qe[e] = t;
        }
        function Be(e) {
            if ('string' == typeof e && qe.hasOwnProperty(e)) e = qe[e];
            else if (e && 'string' == typeof e.name && qe.hasOwnProperty(e.name)) {
                var t = qe[e.name];
                'string' == typeof t && (t = { name: t }), ((e = J(t, e)).name = t.name);
            } else {
                if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Be('application/xml');
                if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Be('application/json');
            }
            return 'string' == typeof e ? { name: e } : e || { name: 'null' };
        }
        function $e(e, t) {
            t = Be(t);
            var n = Ie[t.name];
            if (!n) return $e(e, 'text/plain');
            var r = n(e, t);
            if (Ue.hasOwnProperty(t.name)) {
                var i = Ue[t.name];
                for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
            }
            if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps))
                for (var a in t.modeProps) r[a] = t.modeProps[a];
            return r;
        }
        var Ue = {};
        function Ve(e, t) {
            j(t, Ue.hasOwnProperty(e) ? Ue[e] : (Ue[e] = {}));
        }
        function Ge(e, t) {
            if (!0 === t) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
                var i = t[r];
                i instanceof Array && (i = i.concat([])), (n[r] = i);
            }
            return n;
        }
        function Ke(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
            return n || { mode: e, state: t };
        }
        function Xe(e, t, n) {
            return !e.startState || e.startState(t, n);
        }
        var Qe = function (e, t, n) {
            (this.pos = this.start = 0),
                (this.string = e),
                (this.tabSize = t || 8),
                (this.lastColumnPos = this.lastColumnValue = 0),
                (this.lineStart = 0),
                (this.lineOracle = n);
        };
        function Ye(e, t) {
            if ((t -= e.first) < 0 || t >= e.size)
                throw new Error('There is no line ' + (t + e.first) + ' in the document.');
            for (var n = e; !n.lines; )
                for (var r = 0; ; ++r) {
                    var i = n.children[r],
                        o = i.chunkSize();
                    if (t < o) {
                        n = i;
                        break;
                    }
                    t -= o;
                }
            return n.lines[t];
        }
        function Ze(e, t, n) {
            var r = [],
                i = t.line;
            return (
                e.iter(t.line, n.line + 1, function (e) {
                    var o = e.text;
                    i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
                }),
                r
            );
        }
        function Je(e, t, n) {
            var r = [];
            return (
                e.iter(t, n, function (e) {
                    r.push(e.text);
                }),
                r
            );
        }
        function et(e, t) {
            var n = t - e.height;
            if (n) for (var r = e; r; r = r.parent) r.height += n;
        }
        function tt(e) {
            if (null == e.parent) return null;
            for (var t = e.parent, n = q(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
            return n + t.first;
        }
        function nt(e, t) {
            var n = e.first;
            e: do {
                for (var r = 0; r < e.children.length; ++r) {
                    var i = e.children[r],
                        o = i.height;
                    if (t < o) {
                        e = i;
                        continue e;
                    }
                    (t -= o), (n += i.chunkSize());
                }
                return n;
            } while (!e.lines);
            for (var a = 0; a < e.lines.length; ++a) {
                var l = e.lines[a].height;
                if (t < l) break;
                t -= l;
            }
            return n + a;
        }
        function rt(e, t) {
            return t >= e.first && t < e.first + e.size;
        }
        function it(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function ot(e, t, n) {
            if ((void 0 === n && (n = null), !(this instanceof ot))) return new ot(e, t, n);
            (this.line = e), (this.ch = t), (this.sticky = n);
        }
        function at(e, t) {
            return e.line - t.line || e.ch - t.ch;
        }
        function lt(e, t) {
            return e.sticky == t.sticky && 0 == at(e, t);
        }
        function st(e) {
            return ot(e.line, e.ch);
        }
        function ct(e, t) {
            return at(e, t) < 0 ? t : e;
        }
        function ut(e, t) {
            return at(e, t) < 0 ? e : t;
        }
        function dt(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function ft(e, t) {
            if (t.line < e.first) return ot(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n ? ot(n, Ye(e, n).text.length) : pt(t, Ye(e, t.line).text.length);
        }
        function pt(e, t) {
            var n = e.ch;
            return null == n || n > t ? ot(e.line, t) : n < 0 ? ot(e.line, 0) : e;
        }
        function ht(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = ft(e, t[r]);
            return n;
        }
        (Qe.prototype.eol = function () {
            return this.pos >= this.string.length;
        }),
            (Qe.prototype.sol = function () {
                return this.pos == this.lineStart;
            }),
            (Qe.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0;
            }),
            (Qe.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++);
            }),
            (Qe.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos);
                if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
            }),
            (Qe.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e); );
                return this.pos > t;
            }),
            (Qe.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
                return this.pos > e;
            }),
            (Qe.prototype.skipToEnd = function () {
                this.pos = this.string.length;
            }),
            (Qe.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos);
                if (t > -1) return (this.pos = t), !0;
            }),
            (Qe.prototype.backUp = function (e) {
                this.pos -= e;
            }),
            (Qe.prototype.column = function () {
                return (
                    this.lastColumnPos < this.start &&
                        ((this.lastColumnValue = H(
                            this.string,
                            this.start,
                            this.tabSize,
                            this.lastColumnPos,
                            this.lastColumnValue
                        )),
                        (this.lastColumnPos = this.start)),
                    this.lastColumnValue - (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0)
                );
            }),
            (Qe.prototype.indentation = function () {
                return (
                    H(this.string, null, this.tabSize) -
                    (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0)
                );
            }),
            (Qe.prototype.match = function (e, t, n) {
                if ('string' != typeof e) {
                    var r = this.string.slice(this.pos).match(e);
                    return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
                }
                var i = function (e) {
                    return n ? e.toLowerCase() : e;
                };
                if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
            }),
            (Qe.prototype.current = function () {
                return this.string.slice(this.start, this.pos);
            }),
            (Qe.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e;
                try {
                    return t();
                } finally {
                    this.lineStart -= e;
                }
            }),
            (Qe.prototype.lookAhead = function (e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e);
            }),
            (Qe.prototype.baseToken = function () {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos);
            });
        var mt = function (e, t) {
                (this.state = e), (this.lookAhead = t);
            },
            gt = function (e, t, n, r) {
                (this.state = t),
                    (this.doc = e),
                    (this.line = n),
                    (this.maxLookAhead = r || 0),
                    (this.baseTokens = null),
                    (this.baseTokenPos = 1);
            };
        function vt(e, t, n, r) {
            var i = [e.state.modeGen],
                o = {};
            Tt(
                e,
                t.text,
                e.doc.mode,
                n,
                function (e, t) {
                    return i.push(e, t);
                },
                o,
                r
            );
            for (
                var a = n.state,
                    l = function (r) {
                        n.baseTokens = i;
                        var l = e.state.overlays[r],
                            s = 1,
                            c = 0;
                        (n.state = !0),
                            Tt(
                                e,
                                t.text,
                                l.mode,
                                n,
                                function (e, t) {
                                    for (var n = s; c < e; ) {
                                        var r = i[s];
                                        r > e && i.splice(s, 1, e, i[s + 1], r), (s += 2), (c = Math.min(e, r));
                                    }
                                    if (t)
                                        if (l.opaque) i.splice(n, s - n, e, 'overlay ' + t), (s = n + 2);
                                        else
                                            for (; n < s; n += 2) {
                                                var o = i[n + 1];
                                                i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                                            }
                                },
                                o
                            ),
                            (n.state = a),
                            (n.baseTokens = null),
                            (n.baseTokenPos = 1);
                    },
                    s = 0;
                s < e.state.overlays.length;
                ++s
            )
                l(s);
            return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function yt(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = bt(e, tt(t)),
                    i = t.text.length > e.options.maxHighlightLength && Ge(e.doc.mode, r.state),
                    o = vt(e, t, r);
                i && (r.state = i),
                    (t.stateAfter = r.save(!i)),
                    (t.styles = o.styles),
                    o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
                    n === e.doc.highlightFrontier &&
                        (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
            }
            return t.styles;
        }
        function bt(e, t, n) {
            var r = e.doc,
                i = e.display;
            if (!r.mode.startState) return new gt(r, !0, t);
            var o = Lt(e, t, n),
                a = o > r.first && Ye(r, o - 1).stateAfter,
                l = a ? gt.fromSaved(r, a, o) : new gt(r, Xe(r.mode), o);
            return (
                r.iter(o, t, function (n) {
                    xt(e, n.text, l);
                    var r = l.line;
                    (n.stateAfter = r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? l.save() : null),
                        l.nextLine();
                }),
                n && (r.modeFrontier = l.line),
                l
            );
        }
        function xt(e, t, n, r) {
            var i = e.doc.mode,
                o = new Qe(t, e.options.tabSize, n);
            for (o.start = o.pos = r || 0, '' == t && kt(i, n.state); !o.eol(); ) wt(i, o, n.state), (o.start = o.pos);
        }
        function kt(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
                var n = Ke(e, t);
                return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
            }
        }
        function wt(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = Ke(e, n).mode);
                var o = e.token(t, n);
                if (t.pos > t.start) return o;
            }
            throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        (gt.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e);
            return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }),
            (gt.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null;
                for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
                var t = this.baseTokens[this.baseTokenPos + 1];
                return { type: t && t.replace(/( |^)overlay .*/, ''), size: this.baseTokens[this.baseTokenPos] - e };
            }),
            (gt.prototype.nextLine = function () {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }),
            (gt.fromSaved = function (e, t, n) {
                return t instanceof mt ? new gt(e, Ge(e.mode, t.state), n, t.lookAhead) : new gt(e, Ge(e.mode, t), n);
            }),
            (gt.prototype.save = function (e) {
                var t = !1 !== e ? Ge(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new mt(t, this.maxLookAhead) : t;
            });
        var Ct = function (e, t, n) {
            (this.start = e.start),
                (this.end = e.pos),
                (this.string = e.current()),
                (this.type = t || null),
                (this.state = n);
        };
        function St(e, t, n, r) {
            var i,
                o,
                a = e.doc,
                l = a.mode,
                s = Ye(a, (t = ft(a, t)).line),
                c = bt(e, t.line, n),
                u = new Qe(s.text, e.options.tabSize, c);
            for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
                (u.start = u.pos), (i = wt(l, u, c.state)), r && o.push(new Ct(u, i, Ge(a.mode, c.state)));
            return r ? o : new Ct(u, i, c.state);
        }
        function Mt(e, t) {
            if (e)
                for (;;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var r = n[1] ? 'bgClass' : 'textClass';
                    null == t[r]
                        ? (t[r] = n[2])
                        : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) || (t[r] += ' ' + n[2]);
                }
            return e;
        }
        function Tt(e, t, n, r, i, o, a) {
            var l = n.flattenSpans;
            null == l && (l = e.options.flattenSpans);
            var s,
                c = 0,
                u = null,
                d = new Qe(t, e.options.tabSize, r),
                f = e.options.addModeClass && [null];
            for ('' == t && Mt(kt(n, r.state), o); !d.eol(); ) {
                if (
                    (d.pos > e.options.maxHighlightLength
                        ? ((l = !1), a && xt(e, t, r, d.pos), (d.pos = t.length), (s = null))
                        : (s = Mt(wt(n, d, r.state, f), o)),
                    f)
                ) {
                    var p = f[0].name;
                    p && (s = 'm-' + (s ? p + ' ' + s : p));
                }
                if (!l || u != s) {
                    for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
                    u = s;
                }
                d.start = d.pos;
            }
            for (; c < d.pos; ) {
                var h = Math.min(d.pos, c + 5e3);
                i(h, u), (c = h);
            }
        }
        function Lt(e, t, n) {
            for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
                if (l <= o.first) return o.first;
                var s = Ye(o, l - 1),
                    c = s.stateAfter;
                if (c && (!n || l + (c instanceof mt ? c.lookAhead : 0) <= o.modeFrontier)) return l;
                var u = H(s.text, null, e.options.tabSize);
                (null == i || r > u) && ((i = l - 1), (r = u));
            }
            return i;
        }
        function At(e, t) {
            if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = Ye(e, r).stateAfter;
                    if (i && (!(i instanceof mt) || r + i.lookAhead < t)) {
                        n = r + 1;
                        break;
                    }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, n);
            }
        }
        var _t = !1,
            Ot = !1;
        function Et() {
            _t = !0;
        }
        function zt() {
            Ot = !0;
        }
        function Pt(e, t, n) {
            (this.marker = e), (this.from = t), (this.to = n);
        }
        function Ft(e, t) {
            if (e)
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r.marker == t) return r;
                }
        }
        function Nt(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
            return n;
        }
        function Dt(e, t) {
            (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
        }
        function jt(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                        a = o.marker;
                    if (
                        null == o.from ||
                        (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                        (o.from == t && 'bookmark' == a.type && (!n || !o.marker.insertLeft))
                    ) {
                        var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                        (r || (r = [])).push(new Pt(a, o.from, l ? null : o.to));
                    }
                }
            return r;
        }
        function Ht(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                        a = o.marker;
                    if (
                        null == o.to ||
                        (a.inclusiveRight ? o.to >= t : o.to > t) ||
                        (o.from == t && 'bookmark' == a.type && (!n || o.marker.insertLeft))
                    ) {
                        var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                        (r || (r = [])).push(new Pt(a, l ? null : o.from - t, null == o.to ? null : o.to - t));
                    }
                }
            return r;
        }
        function It(e, t) {
            if (t.full) return null;
            var n = rt(e, t.from.line) && Ye(e, t.from.line).markedSpans,
                r = rt(e, t.to.line) && Ye(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch,
                o = t.to.ch,
                a = 0 == at(t.from, t.to),
                l = jt(n, i, a),
                s = Ht(r, o, a),
                c = 1 == t.text.length,
                u = X(t.text).length + (c ? i : 0);
            if (l)
                for (var d = 0; d < l.length; ++d) {
                    var f = l[d];
                    if (null == f.to) {
                        var p = Ft(s, f.marker);
                        p ? c && (f.to = null == p.to ? null : p.to + u) : (f.to = i);
                    }
                }
            if (s)
                for (var h = 0; h < s.length; ++h) {
                    var m = s[h];
                    null != m.to && (m.to += u),
                        null == m.from
                            ? Ft(l, m.marker) || ((m.from = u), c && (l || (l = [])).push(m))
                            : ((m.from += u), c && (l || (l = [])).push(m));
                }
            l && (l = qt(l)), s && s != l && (s = qt(s));
            var g = [l];
            if (!c) {
                var v,
                    y = t.text.length - 2;
                if (y > 0 && l)
                    for (var b = 0; b < l.length; ++b)
                        null == l[b].to && (v || (v = [])).push(new Pt(l[b].marker, null, null));
                for (var x = 0; x < y; ++x) g.push(v);
                g.push(s);
            }
            return g;
        }
        function qt(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
            }
            return e.length ? e : null;
        }
        function Wt(e, t, n) {
            var r = null;
            if (
                (e.iter(t.line, n.line + 1, function (e) {
                    if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                            var n = e.markedSpans[t].marker;
                            !n.readOnly || (r && -1 != q(r, n)) || (r || (r = [])).push(n);
                        }
                }),
                !r)
            )
                return null;
            for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!(at(c.to, l.from) < 0 || at(c.from, l.to) > 0)) {
                        var u = [s, 1],
                            d = at(c.from, l.from),
                            f = at(c.to, l.to);
                        (d < 0 || (!a.inclusiveLeft && !d)) && u.push({ from: c.from, to: l.from }),
                            (f > 0 || (!a.inclusiveRight && !f)) && u.push({ from: l.to, to: c.to }),
                            i.splice.apply(i, u),
                            (s += u.length - 3);
                    }
                }
            return i;
        }
        function Rt(e) {
            var t = e.markedSpans;
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                e.markedSpans = null;
            }
        }
        function Bt(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                e.markedSpans = t;
            }
        }
        function $t(e) {
            return e.inclusiveLeft ? -1 : 0;
        }
        function Ut(e) {
            return e.inclusiveRight ? 1 : 0;
        }
        function Vt(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n) return n;
            var r = e.find(),
                i = t.find(),
                o = at(r.from, i.from) || $t(e) - $t(t);
            if (o) return -o;
            var a = at(r.to, i.to) || Ut(e) - Ut(t);
            return a || t.id - e.id;
        }
        function Gt(e, t) {
            var n,
                r = Ot && e.markedSpans;
            if (r)
                for (var i = void 0, o = 0; o < r.length; ++o)
                    (i = r[o]).marker.collapsed &&
                        null == (t ? i.from : i.to) &&
                        (!n || Vt(n, i.marker) < 0) &&
                        (n = i.marker);
            return n;
        }
        function Kt(e) {
            return Gt(e, !0);
        }
        function Xt(e) {
            return Gt(e, !1);
        }
        function Qt(e, t) {
            var n,
                r = Ot && e.markedSpans;
            if (r)
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i];
                    o.marker.collapsed &&
                        (null == o.from || o.from < t) &&
                        (null == o.to || o.to > t) &&
                        (!n || Vt(n, o.marker) < 0) &&
                        (n = o.marker);
                }
            return n;
        }
        function Yt(e, t, n, r, i) {
            var o = Ye(e, t),
                a = Ot && o.markedSpans;
            if (a)
                for (var l = 0; l < a.length; ++l) {
                    var s = a[l];
                    if (s.marker.collapsed) {
                        var c = s.marker.find(0),
                            u = at(c.from, n) || $t(s.marker) - $t(i),
                            d = at(c.to, r) || Ut(s.marker) - Ut(i);
                        if (
                            !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                            ((u <= 0 &&
                                (s.marker.inclusiveRight && i.inclusiveLeft ? at(c.to, n) >= 0 : at(c.to, n) > 0)) ||
                                (u >= 0 &&
                                    (s.marker.inclusiveRight && i.inclusiveLeft
                                        ? at(c.from, r) <= 0
                                        : at(c.from, r) < 0)))
                        )
                            return !0;
                    }
                }
        }
        function Zt(e) {
            for (var t; (t = Kt(e)); ) e = t.find(-1, !0).line;
            return e;
        }
        function Jt(e) {
            for (var t; (t = Xt(e)); ) e = t.find(1, !0).line;
            return e;
        }
        function en(e) {
            for (var t, n; (t = Xt(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
            return n;
        }
        function tn(e, t) {
            var n = Ye(e, t),
                r = Zt(n);
            return n == r ? t : tt(r);
        }
        function nn(e, t) {
            if (t > e.lastLine()) return t;
            var n,
                r = Ye(e, t);
            if (!rn(e, r)) return t;
            for (; (n = Xt(r)); ) r = n.find(1, !0).line;
            return tt(r) + 1;
        }
        function rn(e, t) {
            var n = Ot && t.markedSpans;
            if (n)
                for (var r = void 0, i = 0; i < n.length; ++i)
                    if ((r = n[i]).marker.collapsed) {
                        if (null == r.from) return !0;
                        if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && on(e, t, r)) return !0;
                    }
        }
        function on(e, t, n) {
            if (null == n.to) {
                var r = n.marker.find(1, !0);
                return on(e, r.line, Ft(r.line.markedSpans, n.marker));
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                if (
                    (i = t.markedSpans[o]).marker.collapsed &&
                    !i.marker.widgetNode &&
                    i.from == n.to &&
                    (null == i.to || i.to != n.from) &&
                    (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                    on(e, t, i)
                )
                    return !0;
        }
        function an(e) {
            for (var t = 0, n = (e = Zt(e)).parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r];
                if (i == e) break;
                t += i.height;
            }
            for (var o = n.parent; o; o = (n = o).parent)
                for (var a = 0; a < o.children.length; ++a) {
                    var l = o.children[a];
                    if (l == n) break;
                    t += l.height;
                }
            return t;
        }
        function ln(e) {
            if (0 == e.height) return 0;
            for (var t, n = e.text.length, r = e; (t = Kt(r)); ) {
                var i = t.find(0, !0);
                (r = i.from.line), (n += i.from.ch - i.to.ch);
            }
            for (r = e; (t = Xt(r)); ) {
                var o = t.find(0, !0);
                (n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
            }
            return n;
        }
        function sn(e) {
            var t = e.display,
                n = e.doc;
            (t.maxLine = Ye(n, n.first)),
                (t.maxLineLength = ln(t.maxLine)),
                (t.maxLineChanged = !0),
                n.iter(function (e) {
                    var n = ln(e);
                    n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
                });
        }
        var cn = function (e, t, n) {
            (this.text = e), Bt(this, t), (this.height = n ? n(this) : 1);
        };
        function un(e, t, n, r) {
            (e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Rt(e),
                Bt(e, n);
            var i = r ? r(e) : 1;
            i != e.height && et(e, i);
        }
        function dn(e) {
            (e.parent = null), Rt(e);
        }
        (cn.prototype.lineNo = function () {
            return tt(this);
        }),
            ke(cn);
        var fn = {},
            pn = {};
        function hn(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? pn : fn;
            return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function mn(e, t) {
            var n = O('span', null, null, s ? 'padding-right: .1px' : null),
                r = {
                    pre: O('pre', [n], 'CodeMirror-line'),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption('lineWrapping'),
                };
            t.measure = {};
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                var o = i ? t.rest[i - 1] : t.line,
                    a = void 0;
                (r.pos = 0),
                    (r.addToken = vn),
                    ze(e.display.measure) && (a = fe(o, e.doc.direction)) && (r.addToken = bn(r.addToken, a)),
                    (r.map = []),
                    kn(o, r, yt(e, o, t != e.display.externalMeasured && tt(o))),
                    o.styleClasses &&
                        (o.styleClasses.bgClass && (r.bgClass = F(o.styleClasses.bgClass, r.bgClass || '')),
                        o.styleClasses.textClass && (r.textClass = F(o.styleClasses.textClass, r.textClass || ''))),
                    0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Ee(e.display.measure))),
                    0 == i
                        ? ((t.measure.map = r.map), (t.measure.cache = {}))
                        : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                          (t.measure.caches || (t.measure.caches = [])).push({}));
            }
            if (s) {
                var l = r.content.lastChild;
                (/\bcm-tab\b/.test(l.className) || (l.querySelector && l.querySelector('.cm-tab'))) &&
                    (r.content.className = 'cm-tab-wrap-hack');
            }
            return (
                ve(e, 'renderLine', e, t.line, r.pre),
                r.pre.className && (r.textClass = F(r.pre.className, r.textClass || '')),
                r
            );
        }
        function gn(e) {
            var t = _('span', '•', 'cm-invalidchar');
            return (t.title = '\\u' + e.charCodeAt(0).toString(16)), t.setAttribute('aria-label', t.title), t;
        }
        function vn(e, t, n, r, i, o, s) {
            if (t) {
                var c,
                    u = e.splitSpaces ? yn(t, e.trailingSpace) : t,
                    d = e.cm.state.specialChars,
                    f = !1;
                if (d.test(t)) {
                    c = document.createDocumentFragment();
                    for (var p = 0; ; ) {
                        d.lastIndex = p;
                        var h = d.exec(t),
                            m = h ? h.index - p : t.length - p;
                        if (m) {
                            var g = document.createTextNode(u.slice(p, p + m));
                            a && l < 9 ? c.appendChild(_('span', [g])) : c.appendChild(g),
                                e.map.push(e.pos, e.pos + m, g),
                                (e.col += m),
                                (e.pos += m);
                        }
                        if (!h) break;
                        p += m + 1;
                        var v = void 0;
                        if ('\t' == h[0]) {
                            var y = e.cm.options.tabSize,
                                b = y - (e.col % y);
                            (v = c.appendChild(_('span', K(b), 'cm-tab'))).setAttribute('role', 'presentation'),
                                v.setAttribute('cm-text', '\t'),
                                (e.col += b);
                        } else
                            '\r' == h[0] || '\n' == h[0]
                                ? ((v = c.appendChild(
                                      _('span', '\r' == h[0] ? '␍' : '␤', 'cm-invalidchar')
                                  )).setAttribute('cm-text', h[0]),
                                  (e.col += 1))
                                : ((v = e.cm.options.specialCharPlaceholder(h[0])).setAttribute('cm-text', h[0]),
                                  a && l < 9 ? c.appendChild(_('span', [v])) : c.appendChild(v),
                                  (e.col += 1));
                        e.map.push(e.pos, e.pos + 1, v), e.pos++;
                    }
                } else
                    (e.col += t.length),
                        (c = document.createTextNode(u)),
                        e.map.push(e.pos, e.pos + t.length, c),
                        a && l < 9 && (f = !0),
                        (e.pos += t.length);
                if (((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)), n || r || i || f || o || s)) {
                    var x = n || '';
                    r && (x += r), i && (x += i);
                    var k = _('span', [c], x, o);
                    if (s)
                        for (var w in s) s.hasOwnProperty(w) && 'style' != w && 'class' != w && k.setAttribute(w, s[w]);
                    return e.content.appendChild(k);
                }
                e.content.appendChild(c);
            }
        }
        function yn(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = '', i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                ' ' != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = ' '),
                    (r += o),
                    (n = ' ' == o);
            }
            return r;
        }
        function bn(e, t) {
            return function (n, r, i, o, a, l, s) {
                i = i ? i + ' cm-force-border' : 'cm-force-border';
                for (var c = n.pos, u = c + r.length; ; ) {
                    for (var d = void 0, f = 0; f < t.length && !((d = t[f]).to > c && d.from <= c); f++);
                    if (d.to >= u) return e(n, r, i, o, a, l, s);
                    e(n, r.slice(0, d.to - c), i, o, null, l, s), (o = null), (r = r.slice(d.to - c)), (c = d.to);
                }
            };
        }
        function xn(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i),
                !r &&
                    e.cm.display.input.needsContentAttribute &&
                    (i || (i = e.content.appendChild(document.createElement('span'))),
                    i.setAttribute('cm-marker', n.id)),
                i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                (e.pos += t),
                (e.trailingSpace = !1);
        }
        function kn(e, t, n) {
            var r = e.markedSpans,
                i = e.text,
                o = 0;
            if (r)
                for (var a, l, s, c, u, d, f, p = i.length, h = 0, m = 1, g = '', v = 0; ; ) {
                    if (v == h) {
                        (s = c = u = l = ''), (f = null), (d = null), (v = 1 / 0);
                        for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                            var k = r[x],
                                w = k.marker;
                            if ('bookmark' == w.type && k.from == h && w.widgetNode) y.push(w);
                            else if (
                                k.from <= h &&
                                (null == k.to || k.to > h || (w.collapsed && k.to == h && k.from == h))
                            ) {
                                if (
                                    (null != k.to && k.to != h && v > k.to && ((v = k.to), (c = '')),
                                    w.className && (s += ' ' + w.className),
                                    w.css && (l = (l ? l + ';' : '') + w.css),
                                    w.startStyle && k.from == h && (u += ' ' + w.startStyle),
                                    w.endStyle && k.to == v && (b || (b = [])).push(w.endStyle, k.to),
                                    w.title && ((f || (f = {})).title = w.title),
                                    w.attributes)
                                )
                                    for (var C in w.attributes) (f || (f = {}))[C] = w.attributes[C];
                                w.collapsed && (!d || Vt(d.marker, w) < 0) && (d = k);
                            } else k.from > h && v > k.from && (v = k.from);
                        }
                        if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += ' ' + b[S]);
                        if (!d || d.from == h) for (var M = 0; M < y.length; ++M) xn(t, 0, y[M]);
                        if (d && (d.from || 0) == h) {
                            if ((xn(t, (null == d.to ? p + 1 : d.to) - h, d.marker, null == d.from), null == d.to))
                                return;
                            d.to == h && (d = !1);
                        }
                    }
                    if (h >= p) break;
                    for (var T = Math.min(p, v); ; ) {
                        if (g) {
                            var L = h + g.length;
                            if (!d) {
                                var A = L > T ? g.slice(0, T - h) : g;
                                t.addToken(t, A, a ? a + s : s, u, h + A.length == v ? c : '', l, f);
                            }
                            if (L >= T) {
                                (g = g.slice(T - h)), (h = T);
                                break;
                            }
                            (h = L), (u = '');
                        }
                        (g = i.slice(o, (o = n[m++]))), (a = hn(n[m++], t.cm.options));
                    }
                }
            else
                for (var _ = 1; _ < n.length; _ += 2) t.addToken(t, i.slice(o, (o = n[_])), hn(n[_ + 1], t.cm.options));
        }
        function wn(e, t, n) {
            (this.line = t),
                (this.rest = en(t)),
                (this.size = this.rest ? tt(X(this.rest)) - n + 1 : 1),
                (this.node = this.text = null),
                (this.hidden = rn(e, t));
        }
        function Cn(e, t, n) {
            for (var r, i = [], o = t; o < n; o = r) {
                var a = new wn(e.doc, Ye(e.doc, o), o);
                (r = o + a.size), i.push(a);
            }
            return i;
        }
        var Sn = null;
        function Mn(e) {
            Sn ? Sn.ops.push(e) : (e.ownsGroup = Sn = { ops: [e], delayedCallbacks: [] });
        }
        function Tn(e) {
            var t = e.delayedCallbacks,
                n = 0;
            do {
                for (; n < t.length; n++) t[n].call(null);
                for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers)
                        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                            i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                }
            } while (n < t.length);
        }
        function Ln(e, t) {
            var n = e.ownsGroup;
            if (n)
                try {
                    Tn(n);
                } finally {
                    (Sn = null), t(n);
                }
        }
        var An = null;
        function _n(e, t) {
            var n = me(e, t);
            if (n.length) {
                var r,
                    i = Array.prototype.slice.call(arguments, 2);
                Sn ? (r = Sn.delayedCallbacks) : An ? (r = An) : ((r = An = []), setTimeout(On, 0));
                for (
                    var o = function (e) {
                            r.push(function () {
                                return n[e].apply(null, i);
                            });
                        },
                        a = 0;
                    a < n.length;
                    ++a
                )
                    o(a);
            }
        }
        function On() {
            var e = An;
            An = null;
            for (var t = 0; t < e.length; ++t) e[t]();
        }
        function En(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
                var o = t.changes[i];
                'text' == o
                    ? Nn(e, t)
                    : 'gutter' == o
                    ? jn(e, t, n, r)
                    : 'class' == o
                    ? Dn(e, t)
                    : 'widget' == o && Hn(e, t, r);
            }
            t.changes = null;
        }
        function zn(e) {
            return (
                e.node == e.text &&
                    ((e.node = _('div', null, null, 'position: relative')),
                    e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                    e.node.appendChild(e.text),
                    a && l < 8 && (e.node.style.zIndex = 2)),
                e.node
            );
        }
        function Pn(e, t) {
            var n = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
            if ((n && (n += ' CodeMirror-linebackground'), t.background))
                n
                    ? (t.background.className = n)
                    : (t.background.parentNode.removeChild(t.background), (t.background = null));
            else if (n) {
                var r = zn(t);
                (t.background = r.insertBefore(_('div', null, n), r.firstChild)),
                    e.display.input.setUneditable(t.background);
            }
        }
        function Fn(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line
                ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built)
                : mn(e, t);
        }
        function Nn(e, t) {
            var n = t.text.className,
                r = Fn(e, t);
            t.text == t.node && (t.node = r.pre),
                t.text.parentNode.replaceChild(r.pre, t.text),
                (t.text = r.pre),
                r.bgClass != t.bgClass || r.textClass != t.textClass
                    ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), Dn(e, t))
                    : n && (t.text.className = n);
        }
        function Dn(e, t) {
            Pn(e, t),
                t.line.wrapClass ? (zn(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = '');
            var n = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass;
            t.text.className = n || '';
        }
        function jn(e, t, n, r) {
            if (
                (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
                t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
                t.line.gutterClass)
            ) {
                var i = zn(t);
                (t.gutterBackground = _(
                    'div',
                    null,
                    'CodeMirror-gutter-background ' + t.line.gutterClass,
                    'left: ' +
                        (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                        'px; width: ' +
                        r.gutterTotalWidth +
                        'px'
                )),
                    e.display.input.setUneditable(t.gutterBackground),
                    i.insertBefore(t.gutterBackground, t.text);
            }
            var o = t.line.gutterMarkers;
            if (e.options.lineNumbers || o) {
                var a = zn(t),
                    l = (t.gutter = _(
                        'div',
                        null,
                        'CodeMirror-gutter-wrapper',
                        'left: ' + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + 'px'
                    ));
                if (
                    (e.display.input.setUneditable(l),
                    a.insertBefore(l, t.text),
                    t.line.gutterClass && (l.className += ' ' + t.line.gutterClass),
                    !e.options.lineNumbers ||
                        (o && o['CodeMirror-linenumbers']) ||
                        (t.lineNumber = l.appendChild(
                            _(
                                'div',
                                it(e.options, n),
                                'CodeMirror-linenumber CodeMirror-gutter-elt',
                                'left: ' +
                                    r.gutterLeft['CodeMirror-linenumbers'] +
                                    'px; width: ' +
                                    e.display.lineNumInnerWidth +
                                    'px'
                            )
                        )),
                    o)
                )
                    for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                        var c = e.display.gutterSpecs[s].className,
                            u = o.hasOwnProperty(c) && o[c];
                        u &&
                            l.appendChild(
                                _(
                                    'div',
                                    [u],
                                    'CodeMirror-gutter-elt',
                                    'left: ' + r.gutterLeft[c] + 'px; width: ' + r.gutterWidth[c] + 'px'
                                )
                            );
                    }
            }
        }
        function Hn(e, t, n) {
            t.alignable && (t.alignable = null);
            for (var r = S('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0; i; i = o)
                (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
            qn(e, t, n);
        }
        function In(e, t, n, r) {
            var i = Fn(e, t);
            return (
                (t.text = t.node = i.pre),
                i.bgClass && (t.bgClass = i.bgClass),
                i.textClass && (t.textClass = i.textClass),
                Dn(e, t),
                jn(e, t, n, r),
                qn(e, t, r),
                t.node
            );
        }
        function qn(e, t, n) {
            if ((Wn(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) Wn(e, t.rest[r], t, n, !1);
        }
        function Wn(e, t, n, r, i) {
            if (t.widgets)
                for (var o = zn(n), a = 0, l = t.widgets; a < l.length; ++a) {
                    var s = l[a],
                        c = _('div', [s.node], 'CodeMirror-linewidget' + (s.className ? ' ' + s.className : ''));
                    s.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
                        Rn(s, c, n, r),
                        e.display.input.setUneditable(c),
                        i && s.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c),
                        _n(s, 'redraw');
                }
        }
        function Rn(e, t, n, r) {
            if (e.noHScroll) {
                (n.alignable || (n.alignable = [])).push(t);
                var i = r.wrapperWidth;
                (t.style.left = r.fixedPos + 'px'),
                    e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
                    (t.style.width = i + 'px');
            }
            e.coverGutter &&
                ((t.style.zIndex = 5),
                (t.style.position = 'relative'),
                e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
        }
        function Bn(e) {
            if (null != e.height) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!E(document.body, e.node)) {
                var n = 'position: relative;';
                e.coverGutter && (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
                    e.noHScroll && (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
                    A(t.display.measure, _('div', [e.node], null, n));
            }
            return (e.height = e.node.parentNode.offsetHeight);
        }
        function $n(e, t) {
            for (var n = Te(t); n != e.wrapper; n = n.parentNode)
                if (
                    !n ||
                    (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) ||
                    (n.parentNode == e.sizer && n != e.mover)
                )
                    return !0;
        }
        function Un(e) {
            return e.lineSpace.offsetTop;
        }
        function Vn(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Gn(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = A(e.measure, _('pre', 'x', 'CodeMirror-line-like')),
                n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
            return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }
        function Kn(e) {
            return W - e.display.nativeBarWidth;
        }
        function Xn(e) {
            return e.display.scroller.clientWidth - Kn(e) - e.display.barWidth;
        }
        function Qn(e) {
            return e.display.scroller.clientHeight - Kn(e) - e.display.barHeight;
        }
        function Yn(e, t, n) {
            var r = e.options.lineWrapping,
                i = r && Xn(e);
            if (!t.measure.heights || (r && t.measure.width != i)) {
                var o = (t.measure.heights = []);
                if (r) {
                    t.measure.width = i;
                    for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                        var s = a[l],
                            c = a[l + 1];
                        Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - n.top);
                    }
                }
                o.push(n.bottom - n.top);
            }
        }
        function Zn(e, t, n) {
            if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
            for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
            for (var i = 0; i < e.rest.length; i++)
                if (tt(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
        function Jn(e, t) {
            var n = tt((t = Zt(t))),
                r = (e.display.externalMeasured = new wn(e.doc, t, n));
            r.lineN = n;
            var i = (r.built = mn(e, r));
            return (r.text = i.pre), A(e.display.lineMeasure, i.pre), r;
        }
        function er(e, t, n, r) {
            return rr(e, nr(e, t), n, r);
        }
        function tr(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Dr(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }
        function nr(e, t) {
            var n = tt(t),
                r = tr(e, n);
            r && !r.text ? (r = null) : r && r.changes && (En(e, r, n, Er(e)), (e.curOp.forceUpdate = !0)),
                r || (r = Jn(e, t));
            var i = Zn(r, t, n);
            return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
        }
        function rr(e, t, n, r, i) {
            t.before && (n = -1);
            var o,
                a = n + (r || '');
            return (
                t.cache.hasOwnProperty(a)
                    ? (o = t.cache[a])
                    : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                      t.hasHeights || (Yn(e, t.view, t.rect), (t.hasHeights = !0)),
                      (o = sr(e, t, n, r)).bogus || (t.cache[a] = o)),
                { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom }
            );
        }
        var ir,
            or = { left: 0, right: 0, top: 0, bottom: 0 };
        function ar(e, t, n) {
            for (var r, i, o, a, l, s, c = 0; c < e.length; c += 3)
                if (
                    ((l = e[c]),
                    (s = e[c + 1]),
                    t < l
                        ? ((i = 0), (o = 1), (a = 'left'))
                        : t < s
                        ? (o = 1 + (i = t - l))
                        : (c == e.length - 3 || (t == s && e[c + 3] > t)) &&
                          ((i = (o = s - l) - 1), t >= s && (a = 'right')),
                    null != i)
                ) {
                    if (
                        ((r = e[c + 2]),
                        l == s && n == (r.insertLeft ? 'left' : 'right') && (a = n),
                        'left' == n && 0 == i)
                    )
                        for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; ) (r = e[2 + (c -= 3)]), (a = 'left');
                    if ('right' == n && i == s - l)
                        for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; )
                            (r = e[(c += 3) + 2]), (a = 'right');
                    break;
                }
            return { node: r, start: i, end: o, collapse: a, coverStart: l, coverEnd: s };
        }
        function lr(e, t) {
            var n = or;
            if ('left' == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
            return n;
        }
        function sr(e, t, n, r) {
            var i,
                o = ar(t.map, n, r),
                s = o.node,
                c = o.start,
                u = o.end,
                d = o.collapse;
            if (3 == s.nodeType) {
                for (var f = 0; f < 4; f++) {
                    for (; c && oe(t.line.text.charAt(o.coverStart + c)); ) --c;
                    for (; o.coverStart + u < o.coverEnd && oe(t.line.text.charAt(o.coverStart + u)); ) ++u;
                    if (
                        (i =
                            a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart
                                ? s.parentNode.getBoundingClientRect()
                                : lr(M(s, c, u).getClientRects(), r)).left ||
                        i.right ||
                        0 == c
                    )
                        break;
                    (u = c), (c -= 1), (d = 'right');
                }
                a && l < 11 && (i = cr(e.display.measure, i));
            } else {
                var p;
                c > 0 && (d = r = 'right'),
                    (i =
                        e.options.lineWrapping && (p = s.getClientRects()).length > 1
                            ? p['right' == r ? p.length - 1 : 0]
                            : s.getBoundingClientRect());
            }
            if (a && l < 9 && !c && (!i || (!i.left && !i.right))) {
                var h = s.parentNode.getClientRects()[0];
                i = h ? { left: h.left, right: h.left + Or(e.display), top: h.top, bottom: h.bottom } : or;
            }
            for (
                var m = i.top - t.rect.top,
                    g = i.bottom - t.rect.top,
                    v = (m + g) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                b < y.length - 1 && !(v < y[b]);
                b++
            );
            var x = b ? y[b - 1] : 0,
                k = y[b],
                w = {
                    left: ('right' == d ? i.right : i.left) - t.rect.left,
                    right: ('left' == d ? i.left : i.right) - t.rect.left,
                    top: x,
                    bottom: k,
                };
            return (
                i.left || i.right || (w.bogus = !0),
                e.options.singleCursorHeightPerLine || ((w.rtop = m), (w.rbottom = g)),
                w
            );
        }
        function cr(e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !He(e))
                return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
                r = screen.logicalYDPI / screen.deviceYDPI;
            return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r };
        }
        function ur(e) {
            if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
                for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function dr(e) {
            (e.display.externalMeasure = null), L(e.display.lineMeasure);
            for (var t = 0; t < e.display.view.length; t++) ur(e.display.view[t]);
        }
        function fr(e) {
            dr(e),
                (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
                e.options.lineWrapping || (e.display.maxLineChanged = !0),
                (e.display.lineNumChars = null);
        }
        function pr() {
            return u && g
                ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
                : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }
        function hr() {
            return u && g
                ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
                : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }
        function mr(e) {
            var t = 0;
            if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += Bn(e.widgets[n]));
            return t;
        }
        function gr(e, t, n, r, i) {
            if (!i) {
                var o = mr(t);
                (n.top += o), (n.bottom += o);
            }
            if ('line' == r) return n;
            r || (r = 'local');
            var a = an(t);
            if (('local' == r ? (a += Un(e.display)) : (a -= e.display.viewOffset), 'page' == r || 'window' == r)) {
                var l = e.display.lineSpace.getBoundingClientRect();
                a += l.top + ('window' == r ? 0 : hr());
                var s = l.left + ('window' == r ? 0 : pr());
                (n.left += s), (n.right += s);
            }
            return (n.top += a), (n.bottom += a), n;
        }
        function vr(e, t, n) {
            if ('div' == n) return t;
            var r = t.left,
                i = t.top;
            if ('page' == n) (r -= pr()), (i -= hr());
            else if ('local' == n || !n) {
                var o = e.display.sizer.getBoundingClientRect();
                (r += o.left), (i += o.top);
            }
            var a = e.display.lineSpace.getBoundingClientRect();
            return { left: r - a.left, top: i - a.top };
        }
        function yr(e, t, n, r, i) {
            return r || (r = Ye(e.doc, t.line)), gr(e, r, er(e, r, t.ch, i), n);
        }
        function br(e, t, n, r, i, o) {
            function a(t, a) {
                var l = rr(e, i, t, a ? 'right' : 'left', o);
                return a ? (l.left = l.right) : (l.right = l.left), gr(e, r, l, n);
            }
            (r = r || Ye(e.doc, t.line)), i || (i = nr(e, r));
            var l = fe(r, e.doc.direction),
                s = t.ch,
                c = t.sticky;
            if ((s >= r.text.length ? ((s = r.text.length), (c = 'before')) : s <= 0 && ((s = 0), (c = 'after')), !l))
                return a('before' == c ? s - 1 : s, 'before' == c);
            function u(e, t, n) {
                return a(n ? e - 1 : e, (1 == l[t].level) != n);
            }
            var d = ue(l, s, c),
                f = ce,
                p = u(s, d, 'before' == c);
            return null != f && (p.other = u(s, f, 'before' != c)), p;
        }
        function xr(e, t) {
            var n = 0;
            (t = ft(e.doc, t)), e.options.lineWrapping || (n = Or(e.display) * t.ch);
            var r = Ye(e.doc, t.line),
                i = an(r) + Un(e.display);
            return { left: n, right: n, top: i, bottom: i + r.height };
        }
        function kr(e, t, n, r, i) {
            var o = ot(e, t, n);
            return (o.xRel = i), r && (o.outside = r), o;
        }
        function wr(e, t, n) {
            var r = e.doc;
            if ((n += e.display.viewOffset) < 0) return kr(r.first, 0, null, -1, -1);
            var i = nt(r, n),
                o = r.first + r.size - 1;
            if (i > o) return kr(r.first + r.size - 1, Ye(r, o).text.length, null, 1, 1);
            t < 0 && (t = 0);
            for (var a = Ye(r, i); ; ) {
                var l = Tr(e, a, i, t, n),
                    s = Qt(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
                if (!s) return l;
                var c = s.find(1);
                if (c.line == i) return c;
                a = Ye(r, (i = c.line));
            }
        }
        function Cr(e, t, n, r) {
            r -= mr(t);
            var i = t.text.length,
                o = le(
                    function (t) {
                        return rr(e, n, t - 1).bottom <= r;
                    },
                    i,
                    0
                );
            return {
                begin: o,
                end: (i = le(
                    function (t) {
                        return rr(e, n, t).top > r;
                    },
                    o,
                    i
                )),
            };
        }
        function Sr(e, t, n, r) {
            return n || (n = nr(e, t)), Cr(e, t, n, gr(e, t, rr(e, n, r), 'line').top);
        }
        function Mr(e, t, n, r) {
            return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }
        function Tr(e, t, n, r, i) {
            i -= an(t);
            var o = nr(e, t),
                a = mr(t),
                l = 0,
                s = t.text.length,
                c = !0,
                u = fe(t, e.doc.direction);
            if (u) {
                var d = (e.options.lineWrapping ? Ar : Lr)(e, t, n, o, u, r, i);
                (l = (c = 1 != d.level) ? d.from : d.to - 1), (s = c ? d.to : d.from - 1);
            }
            var f,
                p,
                h = null,
                m = null,
                g = le(
                    function (t) {
                        var n = rr(e, o, t);
                        return (
                            (n.top += a),
                            (n.bottom += a),
                            !!Mr(n, r, i, !1) && (n.top <= i && n.left <= r && ((h = t), (m = n)), !0)
                        );
                    },
                    l,
                    s
                ),
                v = !1;
            if (m) {
                var y = r - m.left < m.right - r,
                    b = y == c;
                (g = h + (b ? 0 : 1)), (p = b ? 'after' : 'before'), (f = y ? m.left : m.right);
            } else {
                c || (g != s && g != l) || g++,
                    (p =
                        0 == g
                            ? 'after'
                            : g == t.text.length
                            ? 'before'
                            : rr(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                            ? 'after'
                            : 'before');
                var x = br(e, ot(n, g, p), 'line', t, o);
                (f = x.left), (v = i < x.top ? -1 : i >= x.bottom ? 1 : 0);
            }
            return kr(n, (g = ae(t.text, g, 1)), p, v, r - f);
        }
        function Lr(e, t, n, r, i, o, a) {
            var l = le(
                    function (l) {
                        var s = i[l],
                            c = 1 != s.level;
                        return Mr(br(e, ot(n, c ? s.to : s.from, c ? 'before' : 'after'), 'line', t, r), o, a, !0);
                    },
                    0,
                    i.length - 1
                ),
                s = i[l];
            if (l > 0) {
                var c = 1 != s.level,
                    u = br(e, ot(n, c ? s.from : s.to, c ? 'after' : 'before'), 'line', t, r);
                Mr(u, o, a, !0) && u.top > a && (s = i[l - 1]);
            }
            return s;
        }
        function Ar(e, t, n, r, i, o, a) {
            var l = Cr(e, t, r, a),
                s = l.begin,
                c = l.end;
            /\s/.test(t.text.charAt(c - 1)) && c--;
            for (var u = null, d = null, f = 0; f < i.length; f++) {
                var p = i[f];
                if (!(p.from >= c || p.to <= s)) {
                    var h = rr(e, r, 1 != p.level ? Math.min(c, p.to) - 1 : Math.max(s, p.from)).right,
                        m = h < o ? o - h + 1e9 : h - o;
                    (!u || d > m) && ((u = p), (d = m));
                }
            }
            return (
                u || (u = i[i.length - 1]),
                u.from < s && (u = { from: s, to: u.to, level: u.level }),
                u.to > c && (u = { from: u.from, to: c, level: u.level }),
                u
            );
        }
        function _r(e) {
            if (null != e.cachedTextHeight) return e.cachedTextHeight;
            if (null == ir) {
                ir = _('pre', null, 'CodeMirror-line-like');
                for (var t = 0; t < 49; ++t) ir.appendChild(document.createTextNode('x')), ir.appendChild(_('br'));
                ir.appendChild(document.createTextNode('x'));
            }
            A(e.measure, ir);
            var n = ir.offsetHeight / 50;
            return n > 3 && (e.cachedTextHeight = n), L(e.measure), n || 1;
        }
        function Or(e) {
            if (null != e.cachedCharWidth) return e.cachedCharWidth;
            var t = _('span', 'xxxxxxxxxx'),
                n = _('pre', [t], 'CodeMirror-line-like');
            A(e.measure, n);
            var r = t.getBoundingClientRect(),
                i = (r.right - r.left) / 10;
            return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function Er(e) {
            for (
                var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0;
                o;
                o = o.nextSibling, ++a
            ) {
                var l = e.display.gutterSpecs[a].className;
                (n[l] = o.offsetLeft + o.clientLeft + i), (r[l] = o.clientWidth);
            }
            return {
                fixedPos: zr(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth,
            };
        }
        function zr(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }
        function Pr(e) {
            var t = _r(e.display),
                n = e.options.lineWrapping,
                r = n && Math.max(5, e.display.scroller.clientWidth / Or(e.display) - 3);
            return function (i) {
                if (rn(e.doc, i)) return 0;
                var o = 0;
                if (i.widgets)
                    for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
            };
        }
        function Fr(e) {
            var t = e.doc,
                n = Pr(e);
            t.iter(function (e) {
                var t = n(e);
                t != e.height && et(e, t);
            });
        }
        function Nr(e, t, n, r) {
            var i = e.display;
            if (!n && 'true' == Te(t).getAttribute('cm-not-content')) return null;
            var o,
                a,
                l = i.lineSpace.getBoundingClientRect();
            try {
                (o = t.clientX - l.left), (a = t.clientY - l.top);
            } catch (e) {
                return null;
            }
            var s,
                c = wr(e, o, a);
            if (r && c.xRel > 0 && (s = Ye(e.doc, c.line).text).length == c.ch) {
                var u = H(s, s.length, e.options.tabSize) - s.length;
                c = ot(c.line, Math.max(0, Math.round((o - Gn(e.display).left) / Or(e.display)) - u));
            }
            return c;
        }
        function Dr(e, t) {
            if (t >= e.display.viewTo) return null;
            if ((t -= e.display.viewFrom) < 0) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
        }
        function jr(e, t, n, r) {
            null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
            var i = e.display;
            if (
                (r &&
                    n < i.viewTo &&
                    (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
                    (i.updateLineNumbers = t),
                (e.curOp.viewChanged = !0),
                t >= i.viewTo)
            )
                Ot && tn(e.doc, t) < i.viewTo && Ir(e);
            else if (n <= i.viewFrom)
                Ot && nn(e.doc, n + r) > i.viewFrom ? Ir(e) : ((i.viewFrom += r), (i.viewTo += r));
            else if (t <= i.viewFrom && n >= i.viewTo) Ir(e);
            else if (t <= i.viewFrom) {
                var o = qr(e, n, n + r, 1);
                o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : Ir(e);
            } else if (n >= i.viewTo) {
                var a = qr(e, t, t, -1);
                a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : Ir(e);
            } else {
                var l = qr(e, t, t, -1),
                    s = qr(e, n, n + r, 1);
                l && s
                    ? ((i.view = i.view
                          .slice(0, l.index)
                          .concat(Cn(e, l.lineN, s.lineN))
                          .concat(i.view.slice(s.index))),
                      (i.viewTo += r))
                    : Ir(e);
            }
            var c = i.externalMeasured;
            c && (n < c.lineN ? (c.lineN += r) : t < c.lineN + c.size && (i.externalMeasured = null));
        }
        function Hr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
                i = e.display.externalMeasured;
            if (
                (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
                !(t < r.viewFrom || t >= r.viewTo))
            ) {
                var o = r.view[Dr(e, t)];
                if (null != o.node) {
                    var a = o.changes || (o.changes = []);
                    -1 == q(a, n) && a.push(n);
                }
            }
        }
        function Ir(e) {
            (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
        }
        function qr(e, t, n, r) {
            var i,
                o = Dr(e, t),
                a = e.display.view;
            if (!Ot || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
            for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
            if (l != t) {
                if (r > 0) {
                    if (o == a.length - 1) return null;
                    (i = l + a[o].size - t), o++;
                } else i = l - t;
                (t += i), (n += i);
            }
            for (; tn(e.doc, n) != n; ) {
                if (o == (r < 0 ? 0 : a.length - 1)) return null;
                (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
            }
            return { index: o, lineN: n };
        }
        function Wr(e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
                ? ((r.view = Cn(e, t, n)), (r.viewFrom = t))
                : (r.viewFrom > t
                      ? (r.view = Cn(e, t, r.viewFrom).concat(r.view))
                      : r.viewFrom < t && (r.view = r.view.slice(Dr(e, t))),
                  (r.viewFrom = t),
                  r.viewTo < n
                      ? (r.view = r.view.concat(Cn(e, r.viewTo, n)))
                      : r.viewTo > n && (r.view = r.view.slice(0, Dr(e, n)))),
                (r.viewTo = n);
        }
        function Rr(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                i.hidden || (i.node && !i.changes) || ++n;
            }
            return n;
        }
        function Br(e) {
            e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function $r(e, t) {
            void 0 === t && (t = !0);
            for (
                var n = e.doc,
                    r = {},
                    i = (r.cursors = document.createDocumentFragment()),
                    o = (r.selection = document.createDocumentFragment()),
                    a = 0;
                a < n.sel.ranges.length;
                a++
            )
                if (t || a != n.sel.primIndex) {
                    var l = n.sel.ranges[a];
                    if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                        var s = l.empty();
                        (s || e.options.showCursorWhenSelecting) && Ur(e, l.head, i), s || Gr(e, l, o);
                    }
                }
            return r;
        }
        function Ur(e, t, n) {
            var r = br(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
                i = n.appendChild(_('div', ' ', 'CodeMirror-cursor'));
            if (
                ((i.style.left = r.left + 'px'),
                (i.style.top = r.top + 'px'),
                (i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
                r.other)
            ) {
                var o = n.appendChild(_('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'));
                (o.style.display = ''),
                    (o.style.left = r.other.left + 'px'),
                    (o.style.top = r.other.top + 'px'),
                    (o.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px');
            }
        }
        function Vr(e, t) {
            return e.top - t.top || e.left - t.left;
        }
        function Gr(e, t, n) {
            var r = e.display,
                i = e.doc,
                o = document.createDocumentFragment(),
                a = Gn(e.display),
                l = a.left,
                s = Math.max(r.sizerWidth, Xn(e) - r.sizer.offsetLeft) - a.right,
                c = 'ltr' == i.direction;
            function u(e, t, n, r) {
                t < 0 && (t = 0),
                    (t = Math.round(t)),
                    (r = Math.round(r)),
                    o.appendChild(
                        _(
                            'div',
                            null,
                            'CodeMirror-selected',
                            'position: absolute; left: ' +
                                e +
                                'px;\n                             top: ' +
                                t +
                                'px; width: ' +
                                (null == n ? s - e : n) +
                                'px;\n                             height: ' +
                                (r - t) +
                                'px'
                        )
                    );
            }
            function d(t, n, r) {
                var o,
                    a,
                    d = Ye(i, t),
                    f = d.text.length;
                function p(n, r) {
                    return yr(e, ot(t, n), 'div', d, r);
                }
                function h(t, n, r) {
                    var i = Sr(e, d, null, t),
                        o = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
                    return p('after' == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
                }
                var m = fe(d, i.direction);
                return (
                    se(m, n || 0, null == r ? f : r, function (e, t, i, d) {
                        var g = 'ltr' == i,
                            v = p(e, g ? 'left' : 'right'),
                            y = p(t - 1, g ? 'right' : 'left'),
                            b = null == n && 0 == e,
                            x = null == r && t == f,
                            k = 0 == d,
                            w = !m || d == m.length - 1;
                        if (y.top - v.top <= 3) {
                            var C = (c ? x : b) && w,
                                S = (c ? b : x) && k ? l : (g ? v : y).left,
                                M = C ? s : (g ? y : v).right;
                            u(S, v.top, M - S, v.bottom);
                        } else {
                            var T, L, A, _;
                            g
                                ? ((T = c && b && k ? l : v.left),
                                  (L = c ? s : h(e, i, 'before')),
                                  (A = c ? l : h(t, i, 'after')),
                                  (_ = c && x && w ? s : y.right))
                                : ((T = c ? h(e, i, 'before') : l),
                                  (L = !c && b && k ? s : v.right),
                                  (A = !c && x && w ? l : y.left),
                                  (_ = c ? h(t, i, 'after') : s)),
                                u(T, v.top, L - T, v.bottom),
                                v.bottom < y.top && u(l, v.bottom, null, y.top),
                                u(A, y.top, _ - A, y.bottom);
                        }
                        (!o || Vr(v, o) < 0) && (o = v),
                            Vr(y, o) < 0 && (o = y),
                            (!a || Vr(v, a) < 0) && (a = v),
                            Vr(y, a) < 0 && (a = y);
                    }),
                    { start: o, end: a }
                );
            }
            var f = t.from(),
                p = t.to();
            if (f.line == p.line) d(f.line, f.ch, p.ch);
            else {
                var h = Ye(i, f.line),
                    m = Ye(i, p.line),
                    g = Zt(h) == Zt(m),
                    v = d(f.line, f.ch, g ? h.text.length + 1 : null).end,
                    y = d(p.line, g ? 0 : null, p.ch).start;
                g &&
                    (v.top < y.top - 2
                        ? (u(v.right, v.top, null, v.bottom), u(l, y.top, y.left, y.bottom))
                        : u(v.right, v.top, y.left - v.right, v.bottom)),
                    v.bottom < y.top && u(l, v.bottom, null, y.top);
            }
            n.appendChild(o);
        }
        function Kr(e) {
            if (e.state.focused) {
                var t = e.display;
                clearInterval(t.blinker);
                var n = !0;
                (t.cursorDiv.style.visibility = ''),
                    e.options.cursorBlinkRate > 0
                        ? (t.blinker = setInterval(function () {
                              e.hasFocus() || Zr(e), (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
                          }, e.options.cursorBlinkRate))
                        : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
            }
        }
        function Xr(e) {
            e.state.focused || (e.display.input.focus(), Yr(e));
        }
        function Qr(e) {
            (e.state.delayingBlurEvent = !0),
                setTimeout(function () {
                    e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Zr(e));
                }, 100);
        }
        function Yr(e, t) {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
                'nocursor' != e.options.readOnly &&
                    (e.state.focused ||
                        (ve(e, 'focus', e, t),
                        (e.state.focused = !0),
                        P(e.display.wrapper, 'CodeMirror-focused'),
                        e.curOp ||
                            e.display.selForContextMenu == e.doc.sel ||
                            (e.display.input.reset(),
                            s &&
                                setTimeout(function () {
                                    return e.display.input.reset(!0);
                                }, 20)),
                        e.display.input.receivedFocus()),
                    Kr(e));
        }
        function Zr(e, t) {
            e.state.delayingBlurEvent ||
                (e.state.focused &&
                    (ve(e, 'blur', e, t), (e.state.focused = !1), T(e.display.wrapper, 'CodeMirror-focused')),
                clearInterval(e.display.blinker),
                setTimeout(function () {
                    e.state.focused || (e.display.shift = !1);
                }, 150));
        }
        function Jr(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                var i = t.view[r],
                    o = e.options.lineWrapping,
                    s = void 0,
                    c = 0;
                if (!i.hidden) {
                    if (a && l < 8) {
                        var u = i.node.offsetTop + i.node.offsetHeight;
                        (s = u - n), (n = u);
                    } else {
                        var d = i.node.getBoundingClientRect();
                        (s = d.bottom - d.top),
                            !o &&
                                i.text.firstChild &&
                                (c = i.text.firstChild.getBoundingClientRect().right - d.left - 1);
                    }
                    var f = i.line.height - s;
                    if ((f > 0.005 || f < -0.005) && (et(i.line, s), ei(i.line), i.rest))
                        for (var p = 0; p < i.rest.length; p++) ei(i.rest[p]);
                    if (c > e.display.sizerWidth) {
                        var h = Math.ceil(c / Or(e.display));
                        h > e.display.maxLineLength &&
                            ((e.display.maxLineLength = h),
                            (e.display.maxLine = i.line),
                            (e.display.maxLineChanged = !0));
                    }
                }
            }
        }
        function ei(e) {
            if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t) {
                    var n = e.widgets[t],
                        r = n.node.parentNode;
                    r && (n.height = r.offsetHeight);
                }
        }
        function ti(e, t, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - Un(e));
            var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                o = nt(t, r),
                a = nt(t, i);
            if (n && n.ensure) {
                var l = n.ensure.from.line,
                    s = n.ensure.to.line;
                l < o
                    ? ((o = l), (a = nt(t, an(Ye(t, l)) + e.wrapper.clientHeight)))
                    : Math.min(s, t.lastLine()) >= a && ((o = nt(t, an(Ye(t, s)) - e.wrapper.clientHeight)), (a = s));
            }
            return { from: o, to: Math.max(a, o + 1) };
        }
        function ni(e, t) {
            if (!ye(e, 'scrollCursorIntoView')) {
                var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    i = null;
                if (
                    (t.top + r.top < 0
                        ? (i = !0)
                        : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                    null != i && !h)
                ) {
                    var o = _(
                        'div',
                        '​',
                        null,
                        'position: absolute;\n                         top: ' +
                            (t.top - n.viewOffset - Un(e.display)) +
                            'px;\n                         height: ' +
                            (t.bottom - t.top + Kn(e) + n.barHeight) +
                            'px;\n                         left: ' +
                            t.left +
                            'px; width: ' +
                            Math.max(2, t.right - t.left) +
                            'px;'
                    );
                    e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                }
            }
        }
        function ri(e, t, n, r) {
            var i;
            null == r && (r = 0),
                e.options.lineWrapping ||
                    t != n ||
                    (n =
                        'before' == (t = t.ch ? ot(t.line, 'before' == t.sticky ? t.ch - 1 : t.ch, 'after') : t).sticky
                            ? ot(t.line, t.ch + 1, 'before')
                            : t);
            for (var o = 0; o < 5; o++) {
                var a = !1,
                    l = br(e, t),
                    s = n && n != t ? br(e, n) : l,
                    c = oi(
                        e,
                        (i = {
                            left: Math.min(l.left, s.left),
                            top: Math.min(l.top, s.top) - r,
                            right: Math.max(l.left, s.left),
                            bottom: Math.max(l.bottom, s.bottom) + r,
                        })
                    ),
                    u = e.doc.scrollTop,
                    d = e.doc.scrollLeft;
                if (
                    (null != c.scrollTop && (fi(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                    null != c.scrollLeft && (hi(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                    !a)
                )
                    break;
            }
            return i;
        }
        function ii(e, t) {
            var n = oi(e, t);
            null != n.scrollTop && fi(e, n.scrollTop), null != n.scrollLeft && hi(e, n.scrollLeft);
        }
        function oi(e, t) {
            var n = e.display,
                r = _r(e.display);
            t.top < 0 && (t.top = 0);
            var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                o = Qn(e),
                a = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var l = e.doc.height + Vn(n),
                s = t.top < r,
                c = t.bottom > l - r;
            if (t.top < i) a.scrollTop = s ? 0 : t.top;
            else if (t.bottom > i + o) {
                var u = Math.min(t.top, (c ? l : t.bottom) - o);
                u != i && (a.scrollTop = u);
            }
            var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
                f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - d,
                p = Xn(e) - n.gutters.offsetWidth,
                h = t.right - t.left > p;
            return (
                h && (t.right = t.left + p),
                t.left < 10
                    ? (a.scrollLeft = 0)
                    : t.left < f
                    ? (a.scrollLeft = Math.max(0, t.left + d - (h ? 0 : 10)))
                    : t.right > p + f - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - p),
                a
            );
        }
        function ai(e, t) {
            null != t &&
                (ui(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
        }
        function li(e) {
            ui(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
        }
        function si(e, t, n) {
            (null == t && null == n) || ui(e),
                null != t && (e.curOp.scrollLeft = t),
                null != n && (e.curOp.scrollTop = n);
        }
        function ci(e, t) {
            ui(e), (e.curOp.scrollToPos = t);
        }
        function ui(e) {
            var t = e.curOp.scrollToPos;
            t && ((e.curOp.scrollToPos = null), di(e, xr(e, t.from), xr(e, t.to), t.margin));
        }
        function di(e, t, n, r) {
            var i = oi(e, {
                left: Math.min(t.left, n.left),
                top: Math.min(t.top, n.top) - r,
                right: Math.max(t.right, n.right),
                bottom: Math.max(t.bottom, n.bottom) + r,
            });
            si(e, i.scrollLeft, i.scrollTop);
        }
        function fi(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (n || Bi(e, { top: t }), pi(e, t, !0), n && Bi(e), Ni(e, 100));
        }
        function pi(e, t, n) {
            (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
                (e.display.scroller.scrollTop != t || n) &&
                    ((e.doc.scrollTop = t),
                    e.display.scrollbars.setScrollTop(t),
                    e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }
        function hi(e, t, n, r) {
            (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
                ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) ||
                    ((e.doc.scrollLeft = t),
                    Gi(e),
                    e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                    e.display.scrollbars.setScrollLeft(t));
        }
        function mi(e) {
            var t = e.display,
                n = t.gutters.offsetWidth,
                r = Math.round(e.doc.height + Vn(e.display));
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Kn(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n,
            };
        }
        var gi = function (e, t, n) {
            this.cm = n;
            var r = (this.vert = _('div', [_('div', null, null, 'min-width: 1px')], 'CodeMirror-vscrollbar')),
                i = (this.horiz = _(
                    'div',
                    [_('div', null, null, 'height: 100%; min-height: 1px')],
                    'CodeMirror-hscrollbar'
                ));
            (r.tabIndex = i.tabIndex = -1),
                e(r),
                e(i),
                he(r, 'scroll', function () {
                    r.clientHeight && t(r.scrollTop, 'vertical');
                }),
                he(i, 'scroll', function () {
                    i.clientWidth && t(i.scrollLeft, 'horizontal');
                }),
                (this.checkedZeroWidth = !1),
                a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
        (gi.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
                n = e.scrollHeight > e.clientHeight + 1,
                r = e.nativeBarWidth;
            if (n) {
                (this.vert.style.display = 'block'), (this.vert.style.bottom = t ? r + 'px' : '0');
                var i = e.viewHeight - (t ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
            } else (this.vert.style.display = ''), (this.vert.firstChild.style.height = '0');
            if (t) {
                (this.horiz.style.display = 'block'),
                    (this.horiz.style.right = n ? r + 'px' : '0'),
                    (this.horiz.style.left = e.barLeft + 'px');
                var o = e.viewWidth - e.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
            } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0');
            return (
                !this.checkedZeroWidth &&
                    e.clientHeight > 0 &&
                    (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
                { right: n ? r : 0, bottom: t ? r : 0 }
            );
        }),
            (gi.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                    this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
            }),
            (gi.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e),
                    this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
            }),
            (gi.prototype.zeroWidthHack = function () {
                var e = y && !p ? '12px' : '18px';
                (this.horiz.style.height = this.vert.style.width = e),
                    (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
                    (this.disableHoriz = new I()),
                    (this.disableVert = new I());
            }),
            (gi.prototype.enableZeroWidthBar = function (e, t, n) {
                function r() {
                    var i = e.getBoundingClientRect();
                    ('vert' == n
                        ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                        : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
                        ? (e.style.pointerEvents = 'none')
                        : t.set(1e3, r);
                }
                (e.style.pointerEvents = 'auto'), t.set(1e3, r);
            }),
            (gi.prototype.clear = function () {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert);
            });
        var vi = function () {};
        function yi(e, t) {
            t || (t = mi(e));
            var n = e.display.barWidth,
                r = e.display.barHeight;
            bi(e, t);
            for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
                n != e.display.barWidth && e.options.lineWrapping && Jr(e),
                    bi(e, mi(e)),
                    (n = e.display.barWidth),
                    (r = e.display.barHeight);
        }
        function bi(e, t) {
            var n = e.display,
                r = n.scrollbars.update(t);
            (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
                (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
                (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
                r.right && r.bottom
                    ? ((n.scrollbarFiller.style.display = 'block'),
                      (n.scrollbarFiller.style.height = r.bottom + 'px'),
                      (n.scrollbarFiller.style.width = r.right + 'px'))
                    : (n.scrollbarFiller.style.display = ''),
                r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                    ? ((n.gutterFiller.style.display = 'block'),
                      (n.gutterFiller.style.height = r.bottom + 'px'),
                      (n.gutterFiller.style.width = t.gutterWidth + 'px'))
                    : (n.gutterFiller.style.display = '');
        }
        (vi.prototype.update = function () {
            return { bottom: 0, right: 0 };
        }),
            (vi.prototype.setScrollLeft = function () {}),
            (vi.prototype.setScrollTop = function () {}),
            (vi.prototype.clear = function () {});
        var xi = { native: gi, null: vi };
        function ki(e) {
            e.display.scrollbars &&
                (e.display.scrollbars.clear(),
                e.display.scrollbars.addClass && T(e.display.wrapper, e.display.scrollbars.addClass)),
                (e.display.scrollbars = new xi[e.options.scrollbarStyle](
                    function (t) {
                        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                            he(t, 'mousedown', function () {
                                e.state.focused &&
                                    setTimeout(function () {
                                        return e.display.input.focus();
                                    }, 0);
                            }),
                            t.setAttribute('cm-not-content', 'true');
                    },
                    function (t, n) {
                        'horizontal' == n ? hi(e, t) : fi(e, t);
                    },
                    e
                )),
                e.display.scrollbars.addClass && P(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var wi = 0;
        function Ci(e) {
            (e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: 0,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++wi,
            }),
                Mn(e.curOp);
        }
        function Si(e) {
            var t = e.curOp;
            t &&
                Ln(t, function (e) {
                    for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                    Mi(e);
                });
        }
        function Mi(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) Ti(t[n]);
            for (var r = 0; r < t.length; r++) Li(t[r]);
            for (var i = 0; i < t.length; i++) Ai(t[i]);
            for (var o = 0; o < t.length; o++) _i(t[o]);
            for (var a = 0; a < t.length; a++) Oi(t[a]);
        }
        function Ti(e) {
            var t = e.cm,
                n = t.display;
            Hi(t),
                e.updateMaxLine && sn(t),
                (e.mustUpdate =
                    e.viewChanged ||
                    e.forceUpdate ||
                    null != e.scrollTop ||
                    (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
                    (n.maxLineChanged && t.options.lineWrapping)),
                (e.update =
                    e.mustUpdate &&
                    new ji(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
        }
        function Li(e) {
            e.updatedDisplay = e.mustUpdate && Wi(e.cm, e.update);
        }
        function Ai(e) {
            var t = e.cm,
                n = t.display;
            e.updatedDisplay && Jr(t),
                (e.barMeasure = mi(t)),
                n.maxLineChanged &&
                    !t.options.lineWrapping &&
                    ((e.adjustWidthTo = er(t, n.maxLine, n.maxLine.text.length).left + 3),
                    (t.display.sizerWidth = e.adjustWidthTo),
                    (e.barMeasure.scrollWidth = Math.max(
                        n.scroller.clientWidth,
                        n.sizer.offsetLeft + e.adjustWidthTo + Kn(t) + t.display.barWidth
                    )),
                    (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Xn(t)))),
                (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
        }
        function _i(e) {
            var t = e.cm;
            null != e.adjustWidthTo &&
                ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
                e.maxScrollLeft < t.doc.scrollLeft &&
                    hi(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
                (t.display.maxLineChanged = !1));
            var n = e.focus && e.focus == z();
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
                (e.updatedDisplay || e.startHeight != t.doc.height) && yi(t, e.barMeasure),
                e.updatedDisplay && Vi(t, e.barMeasure),
                e.selectionChanged && Kr(t),
                t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                n && Xr(e.cm);
        }
        function Oi(e) {
            var t = e.cm,
                n = t.display,
                r = t.doc;
            e.updatedDisplay && Ri(t, e.update),
                null == n.wheelStartX ||
                    (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
                    (n.wheelStartX = n.wheelStartY = null),
                null != e.scrollTop && pi(t, e.scrollTop, e.forceScroll),
                null != e.scrollLeft && hi(t, e.scrollLeft, !0, !0),
                e.scrollToPos && ni(t, ri(t, ft(r, e.scrollToPos.from), ft(r, e.scrollToPos.to), e.scrollToPos.margin));
            var i = e.maybeHiddenMarkers,
                o = e.maybeUnhiddenMarkers;
            if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || ve(i[a], 'hide');
            if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length && ve(o[l], 'unhide');
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
                e.changeObjs && ve(t, 'changes', t, e.changeObjs),
                e.update && e.update.finish();
        }
        function Ei(e, t) {
            if (e.curOp) return t();
            Ci(e);
            try {
                return t();
            } finally {
                Si(e);
            }
        }
        function zi(e, t) {
            return function () {
                if (e.curOp) return t.apply(e, arguments);
                Ci(e);
                try {
                    return t.apply(e, arguments);
                } finally {
                    Si(e);
                }
            };
        }
        function Pi(e) {
            return function () {
                if (this.curOp) return e.apply(this, arguments);
                Ci(this);
                try {
                    return e.apply(this, arguments);
                } finally {
                    Si(this);
                }
            };
        }
        function Fi(e) {
            return function () {
                var t = this.cm;
                if (!t || t.curOp) return e.apply(this, arguments);
                Ci(t);
                try {
                    return e.apply(this, arguments);
                } finally {
                    Si(t);
                }
            };
        }
        function Ni(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, D(Di, e));
        }
        function Di(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
                var n = +new Date() + e.options.workTime,
                    r = bt(e, t.highlightFrontier),
                    i = [];
                t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                    if (r.line >= e.display.viewFrom) {
                        var a = o.styles,
                            l = o.text.length > e.options.maxHighlightLength ? Ge(t.mode, r.state) : null,
                            s = vt(e, o, r, !0);
                        l && (r.state = l), (o.styles = s.styles);
                        var c = o.styleClasses,
                            u = s.classes;
                        u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                        for (
                            var d =
                                    !a ||
                                    a.length != o.styles.length ||
                                    (c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass)),
                                f = 0;
                            !d && f < a.length;
                            ++f
                        )
                            d = a[f] != o.styles[f];
                        d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                    } else o.text.length <= e.options.maxHighlightLength && xt(e, o.text, r), (o.stateAfter = r.line % 5 == 0 ? r.save() : null), r.nextLine();
                    if (+new Date() > n) return Ni(e, e.options.workDelay), !0;
                }),
                    (t.highlightFrontier = r.line),
                    (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                    i.length &&
                        Ei(e, function () {
                            for (var t = 0; t < i.length; t++) Hr(e, i[t], 'text');
                        });
            }
        }
        var ji = function (e, t, n) {
            var r = e.display;
            (this.viewport = t),
                (this.visible = ti(r, e.doc, t)),
                (this.editorIsHidden = !r.wrapper.offsetWidth),
                (this.wrapperHeight = r.wrapper.clientHeight),
                (this.wrapperWidth = r.wrapper.clientWidth),
                (this.oldDisplayWidth = Xn(e)),
                (this.force = n),
                (this.dims = Er(e)),
                (this.events = []);
        };
        function Hi(e) {
            var t = e.display;
            !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = Kn(e) + 'px'),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                (t.sizer.style.borderRightWidth = Kn(e) + 'px'),
                (t.scrollbarsClipped = !0));
        }
        function Ii(e) {
            if (e.hasFocus()) return null;
            var t = z();
            if (!t || !E(e.display.lineDiv, t)) return null;
            var n = { activeElt: t };
            if (window.getSelection) {
                var r = window.getSelection();
                r.anchorNode &&
                    r.extend &&
                    E(e.display.lineDiv, r.anchorNode) &&
                    ((n.anchorNode = r.anchorNode),
                    (n.anchorOffset = r.anchorOffset),
                    (n.focusNode = r.focusNode),
                    (n.focusOffset = r.focusOffset));
            }
            return n;
        }
        function qi(e) {
            if (
                e &&
                e.activeElt &&
                e.activeElt != z() &&
                (e.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                    e.anchorNode &&
                    E(document.body, e.anchorNode) &&
                    E(document.body, e.focusNode))
            ) {
                var t = window.getSelection(),
                    n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset),
                    n.collapse(!1),
                    t.removeAllRanges(),
                    t.addRange(n),
                    t.extend(e.focusNode, e.focusOffset);
            }
        }
        function Wi(e, t) {
            var n = e.display,
                r = e.doc;
            if (t.editorIsHidden) return Ir(e), !1;
            if (
                !t.force &&
                t.visible.from >= n.viewFrom &&
                t.visible.to <= n.viewTo &&
                (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
                n.renderedView == n.view &&
                0 == Rr(e)
            )
                return !1;
            Ki(e) && (Ir(e), (t.dims = Er(e)));
            var i = r.first + r.size,
                o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                a = Math.min(i, t.visible.to + e.options.viewportMargin);
            n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
                n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
                Ot && ((o = tn(e.doc, o)), (a = nn(e.doc, a)));
            var l =
                o != n.viewFrom ||
                a != n.viewTo ||
                n.lastWrapHeight != t.wrapperHeight ||
                n.lastWrapWidth != t.wrapperWidth;
            Wr(e, o, a), (n.viewOffset = an(Ye(e.doc, n.viewFrom))), (e.display.mover.style.top = n.viewOffset + 'px');
            var s = Rr(e);
            if (
                !l &&
                0 == s &&
                !t.force &&
                n.renderedView == n.view &&
                (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
            )
                return !1;
            var c = Ii(e);
            return (
                s > 4 && (n.lineDiv.style.display = 'none'),
                $i(e, n.updateLineNumbers, t.dims),
                s > 4 && (n.lineDiv.style.display = ''),
                (n.renderedView = n.view),
                qi(c),
                L(n.cursorDiv),
                L(n.selectionDiv),
                (n.gutters.style.height = n.sizer.style.minHeight = 0),
                l && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), Ni(e, 400)),
                (n.updateLineNumbers = null),
                !0
            );
        }
        function Ri(e, t) {
            for (var n = t.viewport, r = !0; ; r = !1) {
                if (r && e.options.lineWrapping && t.oldDisplayWidth != Xn(e))
                    r && (t.visible = ti(e.display, e.doc, n));
                else if (
                    (n && null != n.top && (n = { top: Math.min(e.doc.height + Vn(e.display) - Qn(e), n.top) }),
                    (t.visible = ti(e.display, e.doc, n)),
                    t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                )
                    break;
                if (!Wi(e, t)) break;
                Jr(e);
                var i = mi(e);
                Br(e), yi(e, i), Vi(e, i), (t.force = !1);
            }
            t.signal(e, 'update', e),
                (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
                    (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
                    (e.display.reportedViewFrom = e.display.viewFrom),
                    (e.display.reportedViewTo = e.display.viewTo));
        }
        function Bi(e, t) {
            var n = new ji(e, t);
            if (Wi(e, n)) {
                Jr(e), Ri(e, n);
                var r = mi(e);
                Br(e), yi(e, r), Vi(e, r), n.finish();
            }
        }
        function $i(e, t, n) {
            var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                a = o.firstChild;
            function l(t) {
                var n = t.nextSibling;
                return (
                    s && y && e.display.currentWheelTarget == t
                        ? (t.style.display = 'none')
                        : t.parentNode.removeChild(t),
                    n
                );
            }
            for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
                var f = c[d];
                if (f.hidden);
                else if (f.node && f.node.parentNode == o) {
                    for (; a != f.node; ) a = l(a);
                    var p = i && null != t && t <= u && f.lineNumber;
                    f.changes && (q(f.changes, 'gutter') > -1 && (p = !1), En(e, f, u, n)),
                        p && (L(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(it(e.options, u)))),
                        (a = f.node.nextSibling);
                } else {
                    var h = In(e, f, u, n);
                    o.insertBefore(h, a);
                }
                u += f.size;
            }
            for (; a; ) a = l(a);
        }
        function Ui(e) {
            var t = e.gutters.offsetWidth;
            e.sizer.style.marginLeft = t + 'px';
        }
        function Vi(e, t) {
            (e.display.sizer.style.minHeight = t.docHeight + 'px'),
                (e.display.heightForcer.style.top = t.docHeight + 'px'),
                (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Kn(e) + 'px');
        }
        function Gi(e) {
            var t = e.display,
                n = t.view;
            if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
                for (
                    var r = zr(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                        i = t.gutters.offsetWidth,
                        o = r + 'px',
                        a = 0;
                    a < n.length;
                    a++
                )
                    if (!n[a].hidden) {
                        e.options.fixedGutter &&
                            (n[a].gutter && (n[a].gutter.style.left = o),
                            n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                        var l = n[a].alignable;
                        if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
                    }
                e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
            }
        }
        function Ki(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
                n = it(e.options, t.first + t.size - 1),
                r = e.display;
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(_('div', [_('div', n)], 'CodeMirror-linenumber CodeMirror-gutter-elt')),
                    o = i.firstChild.offsetWidth,
                    a = i.offsetWidth - o;
                return (
                    (r.lineGutter.style.width = ''),
                    (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1),
                    (r.lineNumWidth = r.lineNumInnerWidth + a),
                    (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
                    (r.lineGutter.style.width = r.lineNumWidth + 'px'),
                    Ui(e.display),
                    !0
                );
            }
            return !1;
        }
        function Xi(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
                var o = e[i],
                    a = null;
                if (('string' != typeof o && ((a = o.style), (o = o.className)), 'CodeMirror-linenumbers' == o)) {
                    if (!t) continue;
                    r = !0;
                }
                n.push({ className: o, style: a });
            }
            return t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }), n;
        }
        function Qi(e) {
            var t = e.gutters,
                n = e.gutterSpecs;
            L(t), (e.lineGutter = null);
            for (var r = 0; r < n.length; ++r) {
                var i = n[r],
                    o = i.className,
                    a = i.style,
                    l = t.appendChild(_('div', null, 'CodeMirror-gutter ' + o));
                a && (l.style.cssText = a),
                    'CodeMirror-linenumbers' == o &&
                        ((e.lineGutter = l), (l.style.width = (e.lineNumWidth || 1) + 'px'));
            }
            (t.style.display = n.length ? '' : 'none'), Ui(e);
        }
        function Yi(e) {
            Qi(e.display), jr(e), Gi(e);
        }
        function Zi(e, t, r, i) {
            var o = this;
            (this.input = r),
                (o.scrollbarFiller = _('div', null, 'CodeMirror-scrollbar-filler')),
                o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
                (o.gutterFiller = _('div', null, 'CodeMirror-gutter-filler')),
                o.gutterFiller.setAttribute('cm-not-content', 'true'),
                (o.lineDiv = O('div', null, 'CodeMirror-code')),
                (o.selectionDiv = _('div', null, null, 'position: relative; z-index: 1')),
                (o.cursorDiv = _('div', null, 'CodeMirror-cursors')),
                (o.measure = _('div', null, 'CodeMirror-measure')),
                (o.lineMeasure = _('div', null, 'CodeMirror-measure')),
                (o.lineSpace = O(
                    'div',
                    [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
                    null,
                    'position: relative; outline: none'
                ));
            var c = O('div', [o.lineSpace], 'CodeMirror-lines');
            (o.mover = _('div', [c], null, 'position: relative')),
                (o.sizer = _('div', [o.mover], 'CodeMirror-sizer')),
                (o.sizerWidth = null),
                (o.heightForcer = _('div', null, null, 'position: absolute; height: ' + W + 'px; width: 1px;')),
                (o.gutters = _('div', null, 'CodeMirror-gutters')),
                (o.lineGutter = null),
                (o.scroller = _('div', [o.sizer, o.heightForcer, o.gutters], 'CodeMirror-scroll')),
                o.scroller.setAttribute('tabIndex', '-1'),
                (o.wrapper = _('div', [o.scrollbarFiller, o.gutterFiller, o.scroller], 'CodeMirror')),
                a && l < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
                s || (n && v) || (o.scroller.draggable = !0),
                e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
                (o.viewFrom = o.viewTo = t.first),
                (o.reportedViewFrom = o.reportedViewTo = t.first),
                (o.view = []),
                (o.renderedView = null),
                (o.externalMeasured = null),
                (o.viewOffset = 0),
                (o.lastWrapHeight = o.lastWrapWidth = 0),
                (o.updateLineNumbers = null),
                (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
                (o.scrollbarsClipped = !1),
                (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
                (o.alignWidgets = !1),
                (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
                (o.maxLine = null),
                (o.maxLineLength = 0),
                (o.maxLineChanged = !1),
                (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
                (o.shift = !1),
                (o.selForContextMenu = null),
                (o.activeTouch = null),
                (o.gutterSpecs = Xi(i.gutters, i.lineNumbers)),
                Qi(o),
                r.init(o);
        }
        (ji.prototype.signal = function (e, t) {
            xe(e, t) && this.events.push(arguments);
        }),
            (ji.prototype.finish = function () {
                for (var e = 0; e < this.events.length; e++) ve.apply(null, this.events[e]);
            });
        var Ji = 0,
            eo = null;
        function to(e) {
            var t = e.wheelDeltaX,
                n = e.wheelDeltaY;
            return (
                null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                null == n && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : null == n && (n = e.wheelDelta),
                { x: t, y: n }
            );
        }
        function no(e) {
            var t = to(e);
            return (t.x *= eo), (t.y *= eo), t;
        }
        function ro(e, t) {
            var r = to(t),
                i = r.x,
                o = r.y,
                a = e.display,
                l = a.scroller,
                c = l.scrollWidth > l.clientWidth,
                u = l.scrollHeight > l.clientHeight;
            if ((i && c) || (o && u)) {
                if (o && y && s)
                    e: for (var f = t.target, p = a.view; f != l; f = f.parentNode)
                        for (var h = 0; h < p.length; h++)
                            if (p[h].node == f) {
                                e.display.currentWheelTarget = f;
                                break e;
                            }
                if (i && !n && !d && null != eo)
                    return (
                        o && u && fi(e, Math.max(0, l.scrollTop + o * eo)),
                        hi(e, Math.max(0, l.scrollLeft + i * eo)),
                        (!o || (o && u)) && we(t),
                        void (a.wheelStartX = null)
                    );
                if (o && null != eo) {
                    var m = o * eo,
                        g = e.doc.scrollTop,
                        v = g + a.wrapper.clientHeight;
                    m < 0 ? (g = Math.max(0, g + m - 50)) : (v = Math.min(e.doc.height, v + m + 50)),
                        Bi(e, { top: g, bottom: v });
                }
                Ji < 20 &&
                    (null == a.wheelStartX
                        ? ((a.wheelStartX = l.scrollLeft),
                          (a.wheelStartY = l.scrollTop),
                          (a.wheelDX = i),
                          (a.wheelDY = o),
                          setTimeout(function () {
                              if (null != a.wheelStartX) {
                                  var e = l.scrollLeft - a.wheelStartX,
                                      t = l.scrollTop - a.wheelStartY,
                                      n = (t && a.wheelDY && t / a.wheelDY) || (e && a.wheelDX && e / a.wheelDX);
                                  (a.wheelStartX = a.wheelStartY = null), n && ((eo = (eo * Ji + n) / (Ji + 1)), ++Ji);
                              }
                          }, 200))
                        : ((a.wheelDX += i), (a.wheelDY += o)));
            }
        }
        a ? (eo = -0.53) : n ? (eo = 15) : u ? (eo = -0.7) : f && (eo = -1 / 3);
        var io = function (e, t) {
            (this.ranges = e), (this.primIndex = t);
        };
        (io.prototype.primary = function () {
            return this.ranges[this.primIndex];
        }),
            (io.prototype.equals = function (e) {
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t],
                        r = e.ranges[t];
                    if (!lt(n.anchor, r.anchor) || !lt(n.head, r.head)) return !1;
                }
                return !0;
            }),
            (io.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++)
                    e[t] = new oo(st(this.ranges[t].anchor), st(this.ranges[t].head));
                return new io(e, this.primIndex);
            }),
            (io.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                return !1;
            }),
            (io.prototype.contains = function (e, t) {
                t || (t = e);
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (at(t, r.from()) >= 0 && at(e, r.to()) <= 0) return n;
                }
                return -1;
            });
        var oo = function (e, t) {
            (this.anchor = e), (this.head = t);
        };
        function ao(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
                i = t[n];
            t.sort(function (e, t) {
                return at(e.from(), t.from());
            }),
                (n = q(t, i));
            for (var o = 1; o < t.length; o++) {
                var a = t[o],
                    l = t[o - 1],
                    s = at(l.to(), a.from());
                if (r && !a.empty() ? s > 0 : s >= 0) {
                    var c = ut(l.from(), a.from()),
                        u = ct(l.to(), a.to()),
                        d = l.empty() ? a.from() == a.head : l.from() == l.head;
                    o <= n && --n, t.splice(--o, 2, new oo(d ? u : c, d ? c : u));
                }
            }
            return new io(t, n);
        }
        function lo(e, t) {
            return new io([new oo(e, t || e)], 0);
        }
        function so(e) {
            return e.text
                ? ot(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0))
                : e.to;
        }
        function co(e, t) {
            if (at(e, t.from) < 0) return e;
            if (at(e, t.to) <= 0) return so(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                r = e.ch;
            return e.line == t.to.line && (r += so(t).ch - t.to.ch), ot(n, r);
        }
        function uo(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var i = e.sel.ranges[r];
                n.push(new oo(co(i.anchor, t), co(i.head, t)));
            }
            return ao(e.cm, n, e.sel.primIndex);
        }
        function fo(e, t, n) {
            return e.line == t.line ? ot(n.line, e.ch - t.ch + n.ch) : ot(n.line + (e.line - t.line), e.ch);
        }
        function po(e, t, n) {
            for (var r = [], i = ot(e.first, 0), o = i, a = 0; a < t.length; a++) {
                var l = t[a],
                    s = fo(l.from, i, o),
                    c = fo(so(l), i, o);
                if (((i = l.to), (o = c), 'around' == n)) {
                    var u = e.sel.ranges[a],
                        d = at(u.head, u.anchor) < 0;
                    r[a] = new oo(d ? c : s, d ? s : c);
                } else r[a] = new oo(s, s);
            }
            return new io(r, e.sel.primIndex);
        }
        function ho(e) {
            (e.doc.mode = $e(e.options, e.doc.modeOption)), mo(e);
        }
        function mo(e) {
            e.doc.iter(function (e) {
                e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
            }),
                (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                Ni(e, 100),
                e.state.modeGen++,
                e.curOp && jr(e);
        }
        function go(e, t) {
            return 0 == t.from.ch && 0 == t.to.ch && '' == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
        }
        function vo(e, t, n, r) {
            function i(e) {
                return n ? n[e] : null;
            }
            function o(e, n, i) {
                un(e, n, i, r), _n(e, 'change', e, t);
            }
            function a(e, t) {
                for (var n = [], o = e; o < t; ++o) n.push(new cn(c[o], i(o), r));
                return n;
            }
            var l = t.from,
                s = t.to,
                c = t.text,
                u = Ye(e, l.line),
                d = Ye(e, s.line),
                f = X(c),
                p = i(c.length - 1),
                h = s.line - l.line;
            if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
            else if (go(e, t)) {
                var m = a(0, c.length - 1);
                o(d, d.text, p), h && e.remove(l.line, h), m.length && e.insert(l.line, m);
            } else if (u == d)
                if (1 == c.length) o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), p);
                else {
                    var g = a(1, c.length - 1);
                    g.push(new cn(f + u.text.slice(s.ch), p, r)),
                        o(u, u.text.slice(0, l.ch) + c[0], i(0)),
                        e.insert(l.line + 1, g);
                }
            else if (1 == c.length)
                o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(l.line + 1, h);
            else {
                o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(d, f + d.text.slice(s.ch), p);
                var v = a(1, c.length - 1);
                h > 1 && e.remove(l.line + 1, h - 1), e.insert(l.line + 1, v);
            }
            _n(e, 'change', e, t);
        }
        function yo(e, t, n) {
            function r(e, i, o) {
                if (e.linked)
                    for (var a = 0; a < e.linked.length; ++a) {
                        var l = e.linked[a];
                        if (l.doc != i) {
                            var s = o && l.sharedHist;
                            (n && !s) || (t(l.doc, s), r(l.doc, e, s));
                        }
                    }
            }
            r(e, null, !0);
        }
        function bo(e, t) {
            if (t.cm) throw new Error('This document is already in use.');
            (e.doc = t),
                (t.cm = e),
                Fr(e),
                ho(e),
                xo(e),
                e.options.lineWrapping || sn(e),
                (e.options.mode = t.modeOption),
                jr(e);
        }
        function xo(e) {
            ('rtl' == e.doc.direction ? P : T)(e.display.lineDiv, 'CodeMirror-rtl');
        }
        function ko(e) {
            Ei(e, function () {
                xo(e), jr(e);
            });
        }
        function wo(e) {
            (this.done = []),
                (this.undone = []),
                (this.undoDepth = 1 / 0),
                (this.lastModTime = this.lastSelTime = 0),
                (this.lastOp = this.lastSelOp = null),
                (this.lastOrigin = this.lastSelOrigin = null),
                (this.generation = this.maxGeneration = e || 1);
        }
        function Co(e, t) {
            var n = { from: st(t.from), to: so(t), text: Ze(e, t.from, t.to) };
            return (
                Oo(e, n, t.from.line, t.to.line + 1),
                yo(
                    e,
                    function (e) {
                        return Oo(e, n, t.from.line, t.to.line + 1);
                    },
                    !0
                ),
                n
            );
        }
        function So(e) {
            for (; e.length && X(e).ranges; ) e.pop();
        }
        function Mo(e, t) {
            return t
                ? (So(e.done), X(e.done))
                : e.done.length && !X(e.done).ranges
                ? X(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                ? (e.done.pop(), X(e.done))
                : void 0;
        }
        function To(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o,
                a,
                l = +new Date();
            if (
                (i.lastOp == r ||
                    (i.lastOrigin == t.origin &&
                        t.origin &&
                        (('+' == t.origin.charAt(0) &&
                            i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                            '*' == t.origin.charAt(0)))) &&
                (o = Mo(i, i.lastOp == r))
            )
                (a = X(o.changes)),
                    0 == at(t.from, t.to) && 0 == at(t.from, a.to) ? (a.to = so(t)) : o.changes.push(Co(e, t));
            else {
                var s = X(i.done);
                for (
                    (s && s.ranges) || _o(e.sel, i.done),
                        o = { changes: [Co(e, t)], generation: i.generation },
                        i.done.push(o);
                    i.done.length > i.undoDepth;

                )
                    i.done.shift(), i.done[0].ranges || i.done.shift();
            }
            i.done.push(n),
                (i.generation = ++i.maxGeneration),
                (i.lastModTime = i.lastSelTime = l),
                (i.lastOp = i.lastSelOp = r),
                (i.lastOrigin = i.lastSelOrigin = t.origin),
                a || ve(e, 'historyAdded');
        }
        function Lo(e, t, n, r) {
            var i = t.charAt(0);
            return (
                '*' == i ||
                ('+' == i &&
                    n.ranges.length == r.ranges.length &&
                    n.somethingSelected() == r.somethingSelected() &&
                    new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
            );
        }
        function Ao(e, t, n, r) {
            var i = e.history,
                o = r && r.origin;
            n == i.lastSelOp ||
            (o &&
                i.lastSelOrigin == o &&
                ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) || Lo(e, o, X(i.done), t)))
                ? (i.done[i.done.length - 1] = t)
                : _o(t, i.done),
                (i.lastSelTime = +new Date()),
                (i.lastSelOrigin = o),
                (i.lastSelOp = n),
                r && !1 !== r.clearRedo && So(i.undone);
        }
        function _o(e, t) {
            var n = X(t);
            (n && n.ranges && n.equals(e)) || t.push(e);
        }
        function Oo(e, t, n, r) {
            var i = t['spans_' + e.id],
                o = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
                n.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = n.markedSpans), ++o;
            });
        }
        function Eo(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n)
                e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? (t.length ? t : null) : e;
        }
        function zo(e, t) {
            var n = t['spans_' + e.id];
            if (!n) return null;
            for (var r = [], i = 0; i < t.text.length; ++i) r.push(Eo(n[i]));
            return r;
        }
        function Po(e, t) {
            var n = zo(e, t),
                r = It(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i],
                    a = r[i];
                if (o && a)
                    e: for (var l = 0; l < a.length; ++l) {
                        for (var s = a[l], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue e;
                        o.push(s);
                    }
                else a && (n[i] = a);
            }
            return n;
        }
        function Fo(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.ranges) r.push(n ? io.prototype.deepCopy.call(o) : o);
                else {
                    var a = o.changes,
                        l = [];
                    r.push({ changes: l });
                    for (var s = 0; s < a.length; ++s) {
                        var c = a[s],
                            u = void 0;
                        if ((l.push({ from: c.from, to: c.to, text: c.text }), t))
                            for (var d in c)
                                (u = d.match(/^spans_(\d+)$/)) &&
                                    q(t, Number(u[1])) > -1 &&
                                    ((X(l)[d] = c[d]), delete c[d]);
                    }
                }
            }
            return r;
        }
        function No(e, t, n, r) {
            if (r) {
                var i = e.anchor;
                if (n) {
                    var o = at(t, i) < 0;
                    o != at(n, i) < 0 ? ((i = t), (t = n)) : o != at(t, n) < 0 && (t = n);
                }
                return new oo(i, t);
            }
            return new oo(n || t, t);
        }
        function Do(e, t, n, r, i) {
            null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
                Ro(e, new io([No(e.sel.primary(), t, n, i)], 0), r);
        }
        function jo(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
                r[o] = No(e.sel.ranges[o], t[o], null, i);
            Ro(e, ao(e.cm, r, e.sel.primIndex), n);
        }
        function Ho(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            (i[t] = n), Ro(e, ao(e.cm, i, e.sel.primIndex), r);
        }
        function Io(e, t, n, r) {
            Ro(e, lo(t, n), r);
        }
        function qo(e, t, n) {
            var r = {
                ranges: t.ranges,
                update: function (t) {
                    this.ranges = [];
                    for (var n = 0; n < t.length; n++) this.ranges[n] = new oo(ft(e, t[n].anchor), ft(e, t[n].head));
                },
                origin: n && n.origin,
            };
            return (
                ve(e, 'beforeSelectionChange', e, r),
                e.cm && ve(e.cm, 'beforeSelectionChange', e.cm, r),
                r.ranges != t.ranges ? ao(e.cm, r.ranges, r.ranges.length - 1) : t
            );
        }
        function Wo(e, t, n) {
            var r = e.history.done,
                i = X(r);
            i && i.ranges ? ((r[r.length - 1] = t), Bo(e, t, n)) : Ro(e, t, n);
        }
        function Ro(e, t, n) {
            Bo(e, t, n), Ao(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }
        function Bo(e, t, n) {
            (xe(e, 'beforeSelectionChange') || (e.cm && xe(e.cm, 'beforeSelectionChange'))) && (t = qo(e, t, n));
            var r = (n && n.bias) || (at(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            $o(e, Vo(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || li(e.cm);
        }
        function $o(e, t) {
            t.equals(e.sel) ||
                ((e.sel = t),
                e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), be(e.cm)),
                _n(e, 'cursorActivity', e));
        }
        function Uo(e) {
            $o(e, Vo(e, e.sel, null, !1));
        }
        function Vo(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
                var a = t.ranges[o],
                    l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                    s = Ko(e, a.anchor, l && l.anchor, n, r),
                    c = Ko(e, a.head, l && l.head, n, r);
                (i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new oo(s, c)));
            }
            return i ? ao(e.cm, i, t.primIndex) : t;
        }
        function Go(e, t, n, r, i) {
            var o = Ye(e, t.line);
            if (o.markedSpans)
                for (var a = 0; a < o.markedSpans.length; ++a) {
                    var l = o.markedSpans[a],
                        s = l.marker,
                        c = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
                        u = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
                    if (
                        (null == l.from || (c ? l.from <= t.ch : l.from < t.ch)) &&
                        (null == l.to || (u ? l.to >= t.ch : l.to > t.ch))
                    ) {
                        if (i && (ve(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --a;
                                continue;
                            }
                            break;
                        }
                        if (!s.atomic) continue;
                        if (n) {
                            var d = s.find(r < 0 ? 1 : -1),
                                f = void 0;
                            if (
                                ((r < 0 ? u : c) && (d = Xo(e, d, -r, d && d.line == t.line ? o : null)),
                                d && d.line == t.line && (f = at(d, n)) && (r < 0 ? f < 0 : f > 0))
                            )
                                return Go(e, d, t, r, i);
                        }
                        var p = s.find(r < 0 ? -1 : 1);
                        return (
                            (r < 0 ? c : u) && (p = Xo(e, p, r, p.line == t.line ? o : null)),
                            p ? Go(e, p, t, r, i) : null
                        );
                    }
                }
            return t;
        }
        function Ko(e, t, n, r, i) {
            var o = r || 1,
                a =
                    Go(e, t, n, o, i) ||
                    (!i && Go(e, t, n, o, !0)) ||
                    Go(e, t, n, -o, i) ||
                    (!i && Go(e, t, n, -o, !0));
            return a || ((e.cantEdit = !0), ot(e.first, 0));
        }
        function Xo(e, t, n, r) {
            return n < 0 && 0 == t.ch
                ? t.line > e.first
                    ? ft(e, ot(t.line - 1))
                    : null
                : n > 0 && t.ch == (r || Ye(e, t.line)).text.length
                ? t.line < e.first + e.size - 1
                    ? ot(t.line + 1, 0)
                    : null
                : new ot(t.line, t.ch + n);
        }
        function Qo(e) {
            e.setSelection(ot(e.firstLine(), 0), ot(e.lastLine()), B);
        }
        function Yo(e, t, n) {
            var r = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function () {
                    return (r.canceled = !0);
                },
            };
            return (
                n &&
                    (r.update = function (t, n, i, o) {
                        t && (r.from = ft(e, t)),
                            n && (r.to = ft(e, n)),
                            i && (r.text = i),
                            void 0 !== o && (r.origin = o);
                    }),
                ve(e, 'beforeChange', e, r),
                e.cm && ve(e.cm, 'beforeChange', e.cm, r),
                r.canceled
                    ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                    : { from: r.from, to: r.to, text: r.text, origin: r.origin }
            );
        }
        function Zo(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp) return zi(e.cm, Zo)(e, t, n);
                if (e.cm.state.suppressEdits) return;
            }
            if (!(xe(e, 'beforeChange') || (e.cm && xe(e.cm, 'beforeChange'))) || (t = Yo(e, t, !0))) {
                var r = _t && !n && Wt(e, t.from, t.to);
                if (r)
                    for (var i = r.length - 1; i >= 0; --i)
                        Jo(e, { from: r[i].from, to: r[i].to, text: i ? [''] : t.text, origin: t.origin });
                else Jo(e, t);
            }
        }
        function Jo(e, t) {
            if (1 != t.text.length || '' != t.text[0] || 0 != at(t.from, t.to)) {
                var n = uo(e, t);
                To(e, t, n, e.cm ? e.cm.curOp.id : NaN), na(e, t, n, It(e, t));
                var r = [];
                yo(e, function (e, n) {
                    n || -1 != q(r, e.history) || (la(e.history, t), r.push(e.history)), na(e, t, null, It(e, t));
                });
            }
        }
        function ea(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!r || n) {
                for (
                    var i,
                        o = e.history,
                        a = e.sel,
                        l = 'undo' == t ? o.done : o.undone,
                        s = 'undo' == t ? o.undone : o.done,
                        c = 0;
                    c < l.length && ((i = l[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
                    c++
                );
                if (c != l.length) {
                    for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                        if (!(i = l.pop()).ranges) {
                            if (r) return void l.push(i);
                            break;
                        }
                        if ((_o(i, s), n && !i.equals(e.sel))) return void Ro(e, i, { clearRedo: !1 });
                        a = i;
                    }
                    var u = [];
                    _o(a, s),
                        s.push({ changes: u, generation: o.generation }),
                        (o.generation = i.generation || ++o.maxGeneration);
                    for (
                        var d = xe(e, 'beforeChange') || (e.cm && xe(e.cm, 'beforeChange')),
                            f = function (n) {
                                var r = i.changes[n];
                                if (((r.origin = t), d && !Yo(e, r, !1))) return (l.length = 0), {};
                                u.push(Co(e, r));
                                var o = n ? uo(e, r) : X(l);
                                na(e, r, o, Po(e, r)), !n && e.cm && e.cm.scrollIntoView({ from: r.from, to: so(r) });
                                var a = [];
                                yo(e, function (e, t) {
                                    t || -1 != q(a, e.history) || (la(e.history, r), a.push(e.history)),
                                        na(e, r, null, Po(e, r));
                                });
                            },
                            p = i.changes.length - 1;
                        p >= 0;
                        --p
                    ) {
                        var h = f(p);
                        if (h) return h.v;
                    }
                }
            }
        }
        function ta(e, t) {
            if (
                0 != t &&
                ((e.first += t),
                (e.sel = new io(
                    Q(e.sel.ranges, function (e) {
                        return new oo(ot(e.anchor.line + t, e.anchor.ch), ot(e.head.line + t, e.head.ch));
                    }),
                    e.sel.primIndex
                )),
                e.cm)
            ) {
                jr(e.cm, e.first, e.first - t, t);
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) Hr(e.cm, r, 'gutter');
            }
        }
        function na(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return zi(e.cm, na)(e, t, n, r);
            if (t.to.line < e.first) ta(e, t.text.length - 1 - (t.to.line - t.from.line));
            else if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var i = t.text.length - 1 - (e.first - t.from.line);
                    ta(e, i),
                        (t = {
                            from: ot(e.first, 0),
                            to: ot(t.to.line + i, t.to.ch),
                            text: [X(t.text)],
                            origin: t.origin,
                        });
                }
                var o = e.lastLine();
                t.to.line > o &&
                    (t = { from: t.from, to: ot(o, Ye(e, o).text.length), text: [t.text[0]], origin: t.origin }),
                    (t.removed = Ze(e, t.from, t.to)),
                    n || (n = uo(e, t)),
                    e.cm ? ra(e.cm, t, r) : vo(e, t, r),
                    Bo(e, n, B),
                    e.cantEdit && Ko(e, ot(e.firstLine(), 0)) && (e.cantEdit = !1);
            }
        }
        function ra(e, t, n) {
            var r = e.doc,
                i = e.display,
                o = t.from,
                a = t.to,
                l = !1,
                s = o.line;
            e.options.lineWrapping ||
                ((s = tt(Zt(Ye(r, o.line)))),
                r.iter(s, a.line + 1, function (e) {
                    if (e == i.maxLine) return (l = !0), !0;
                })),
                r.sel.contains(t.from, t.to) > -1 && be(e),
                vo(r, t, n, Pr(e)),
                e.options.lineWrapping ||
                    (r.iter(s, o.line + t.text.length, function (e) {
                        var t = ln(e);
                        t > i.maxLineLength &&
                            ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (l = !1));
                    }),
                    l && (e.curOp.updateMaxLine = !0)),
                At(r, o.line),
                Ni(e, 400);
            var c = t.text.length - (a.line - o.line) - 1;
            t.full
                ? jr(e)
                : o.line != a.line || 1 != t.text.length || go(e.doc, t)
                ? jr(e, o.line, a.line + 1, c)
                : Hr(e, o.line, 'text');
            var u = xe(e, 'changes'),
                d = xe(e, 'change');
            if (d || u) {
                var f = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
                d && _n(e, 'change', e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
            }
            e.display.selForContextMenu = null;
        }
        function ia(e, t, n, r, i) {
            var o;
            r || (r = n),
                at(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
                'string' == typeof t && (t = e.splitLines(t)),
                Zo(e, { from: n, to: r, text: t, origin: i });
        }
        function oa(e, t, n, r) {
            n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function aa(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                    a = !0;
                if (o.ranges) {
                    o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                    for (var l = 0; l < o.ranges.length; l++)
                        oa(o.ranges[l].anchor, t, n, r), oa(o.ranges[l].head, t, n, r);
                } else {
                    for (var s = 0; s < o.changes.length; ++s) {
                        var c = o.changes[s];
                        if (n < c.from.line)
                            (c.from = ot(c.from.line + r, c.from.ch)), (c.to = ot(c.to.line + r, c.to.ch));
                        else if (t <= c.to.line) {
                            a = !1;
                            break;
                        }
                    }
                    a || (e.splice(0, i + 1), (i = 0));
                }
            }
        }
        function la(e, t) {
            var n = t.from.line,
                r = t.to.line,
                i = t.text.length - (r - n) - 1;
            aa(e.done, n, r, i), aa(e.undone, n, r, i);
        }
        function sa(e, t, n, r) {
            var i = t,
                o = t;
            return (
                'number' == typeof t ? (o = Ye(e, dt(e, t))) : (i = tt(t)),
                null == i ? null : (r(o, i) && e.cm && Hr(e.cm, i, n), o)
            );
        }
        function ca(e) {
            (this.lines = e), (this.parent = null);
            for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
            this.height = t;
        }
        function ua(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                var i = e[r];
                (t += i.chunkSize()), (n += i.height), (i.parent = this);
            }
            (this.size = t), (this.height = n), (this.parent = null);
        }
        (oo.prototype.from = function () {
            return ut(this.anchor, this.head);
        }),
            (oo.prototype.to = function () {
                return ct(this.anchor, this.head);
            }),
            (oo.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
            }),
            (ca.prototype = {
                chunkSize: function () {
                    return this.lines.length;
                },
                removeInner: function (e, t) {
                    for (var n = e, r = e + t; n < r; ++n) {
                        var i = this.lines[n];
                        (this.height -= i.height), dn(i), _n(i, 'delete');
                    }
                    this.lines.splice(e, t);
                },
                collapse: function (e) {
                    e.push.apply(e, this.lines);
                },
                insertInner: function (e, t, n) {
                    (this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                    for (var r = 0; r < t.length; ++r) t[r].parent = this;
                },
                iterN: function (e, t, n) {
                    for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
                },
            }),
            (ua.prototype = {
                chunkSize: function () {
                    return this.size;
                },
                removeInner: function (e, t) {
                    this.size -= t;
                    for (var n = 0; n < this.children.length; ++n) {
                        var r = this.children[n],
                            i = r.chunkSize();
                        if (e < i) {
                            var o = Math.min(t, i - e),
                                a = r.height;
                            if (
                                (r.removeInner(e, o),
                                (this.height -= a - r.height),
                                i == o && (this.children.splice(n--, 1), (r.parent = null)),
                                0 == (t -= o))
                            )
                                break;
                            e = 0;
                        } else e -= i;
                    }
                    if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof ca))) {
                        var l = [];
                        this.collapse(l), (this.children = [new ca(l)]), (this.children[0].parent = this);
                    }
                },
                collapse: function (e) {
                    for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
                },
                insertInner: function (e, t, n) {
                    (this.size += t.length), (this.height += n);
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r],
                            o = i.chunkSize();
                        if (e <= o) {
                            if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                                for (var a = (i.lines.length % 25) + 25, l = a; l < i.lines.length; ) {
                                    var s = new ca(i.lines.slice(l, (l += 25)));
                                    (i.height -= s.height), this.children.splice(++r, 0, s), (s.parent = this);
                                }
                                (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                            }
                            break;
                        }
                        e -= o;
                    }
                },
                maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = new ua(e.children.splice(e.children.length - 5, 5));
                            if (e.parent) {
                                (e.size -= t.size), (e.height -= t.height);
                                var n = q(e.parent.children, e);
                                e.parent.children.splice(n + 1, 0, t);
                            } else {
                                var r = new ua(e.children);
                                (r.parent = e), (e.children = [r, t]), (e = r);
                            }
                            t.parent = e.parent;
                        } while (e.children.length > 10);
                        e.parent.maybeSpill();
                    }
                },
                iterN: function (e, t, n) {
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r],
                            o = i.chunkSize();
                        if (e < o) {
                            var a = Math.min(t, o - e);
                            if (i.iterN(e, a, n)) return !0;
                            if (0 == (t -= a)) break;
                            e = 0;
                        } else e -= o;
                    }
                },
            });
        var da = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            (this.doc = e), (this.node = t);
        };
        function fa(e, t, n) {
            an(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && ai(e, n);
        }
        function pa(e, t, n, r) {
            var i = new da(e, n, r),
                o = e.cm;
            return (
                o && i.noHScroll && (o.display.alignWidgets = !0),
                sa(e, t, 'widget', function (t) {
                    var n = t.widgets || (t.widgets = []);
                    if (
                        (null == i.insertAt
                            ? n.push(i)
                            : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i),
                        (i.line = t),
                        o && !rn(e, t))
                    ) {
                        var r = an(t) < e.scrollTop;
                        et(t, t.height + Bn(i)), r && ai(o, i.height), (o.curOp.forceUpdate = !0);
                    }
                    return !0;
                }),
                o && _n(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : tt(t)),
                i
            );
        }
        (da.prototype.clear = function () {
            var e = this.doc.cm,
                t = this.line.widgets,
                n = this.line,
                r = tt(n);
            if (null != r && t) {
                for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                t.length || (n.widgets = null);
                var o = Bn(this);
                et(n, Math.max(0, n.height - o)),
                    e &&
                        (Ei(e, function () {
                            fa(e, n, -o), Hr(e, r, 'widget');
                        }),
                        _n(e, 'lineWidgetCleared', e, this, r));
            }
        }),
            (da.prototype.changed = function () {
                var e = this,
                    t = this.height,
                    n = this.doc.cm,
                    r = this.line;
                this.height = null;
                var i = Bn(this) - t;
                i &&
                    (rn(this.doc, r) || et(r, r.height + i),
                    n &&
                        Ei(n, function () {
                            (n.curOp.forceUpdate = !0), fa(n, r, i), _n(n, 'lineWidgetChanged', n, e, tt(r));
                        }));
            }),
            ke(da);
        var ha = 0,
            ma = function (e, t) {
                (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++ha);
            };
        function ga(e, t, n, r, i) {
            if (r && r.shared) return ya(e, t, n, r, i);
            if (e.cm && !e.cm.curOp) return zi(e.cm, ga)(e, t, n, r, i);
            var o = new ma(e, i),
                a = at(t, n);
            if ((r && j(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty))) return o;
            if (
                (o.replacedWith &&
                    ((o.collapsed = !0),
                    (o.widgetNode = O('span', [o.replacedWith], 'CodeMirror-widget')),
                    r.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
                    r.insertLeft && (o.widgetNode.insertLeft = !0)),
                o.collapsed)
            ) {
                if (Yt(e, t.line, t, n, o) || (t.line != n.line && Yt(e, n.line, t, n, o)))
                    throw new Error('Inserting collapsed marker partially overlapping an existing one');
                zt();
            }
            o.addToHistory && To(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
            var l,
                s = t.line,
                c = e.cm;
            if (
                (e.iter(s, n.line + 1, function (e) {
                    c && o.collapsed && !c.options.lineWrapping && Zt(e) == c.display.maxLine && (l = !0),
                        o.collapsed && s != t.line && et(e, 0),
                        Dt(e, new Pt(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)),
                        ++s;
                }),
                o.collapsed &&
                    e.iter(t.line, n.line + 1, function (t) {
                        rn(e, t) && et(t, 0);
                    }),
                o.clearOnEnter &&
                    he(o, 'beforeCursorEnter', function () {
                        return o.clear();
                    }),
                o.readOnly && (Et(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                o.collapsed && ((o.id = ++ha), (o.atomic = !0)),
                c)
            ) {
                if ((l && (c.curOp.updateMaxLine = !0), o.collapsed)) jr(c, t.line, n.line + 1);
                else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                    for (var u = t.line; u <= n.line; u++) Hr(c, u, 'text');
                o.atomic && Uo(c.doc), _n(c, 'markerAdded', c, o);
            }
            return o;
        }
        (ma.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                var e = this.doc.cm,
                    t = e && !e.curOp;
                if ((t && Ci(e), xe(this, 'clear'))) {
                    var n = this.find();
                    n && _n(this, 'clear', n.from, n.to);
                }
                for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                    var a = this.lines[o],
                        l = Ft(a.markedSpans, this);
                    e && !this.collapsed
                        ? Hr(e, tt(a), 'text')
                        : e && (null != l.to && (i = tt(a)), null != l.from && (r = tt(a))),
                        (a.markedSpans = Nt(a.markedSpans, l)),
                        null == l.from && this.collapsed && !rn(this.doc, a) && e && et(a, _r(e.display));
                }
                if (e && this.collapsed && !e.options.lineWrapping)
                    for (var s = 0; s < this.lines.length; ++s) {
                        var c = Zt(this.lines[s]),
                            u = ln(c);
                        u > e.display.maxLineLength &&
                            ((e.display.maxLine = c), (e.display.maxLineLength = u), (e.display.maxLineChanged = !0));
                    }
                null != r && e && this.collapsed && jr(e, r, i + 1),
                    (this.lines.length = 0),
                    (this.explicitlyCleared = !0),
                    this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && Uo(e.doc)),
                    e && _n(e, 'markerCleared', e, this, r, i),
                    t && Si(e),
                    this.parent && this.parent.clear();
            }
        }),
            (ma.prototype.find = function (e, t) {
                var n, r;
                null == e && 'bookmark' == this.type && (e = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var o = this.lines[i],
                        a = Ft(o.markedSpans, this);
                    if (null != a.from && ((n = ot(t ? o : tt(o), a.from)), -1 == e)) return n;
                    if (null != a.to && ((r = ot(t ? o : tt(o), a.to)), 1 == e)) return r;
                }
                return n && { from: n, to: r };
            }),
            (ma.prototype.changed = function () {
                var e = this,
                    t = this.find(-1, !0),
                    n = this,
                    r = this.doc.cm;
                t &&
                    r &&
                    Ei(r, function () {
                        var i = t.line,
                            o = tt(t.line),
                            a = tr(r, o);
                        if (
                            (a && (ur(a), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                            (r.curOp.updateMaxLine = !0),
                            !rn(n.doc, i) && null != n.height)
                        ) {
                            var l = n.height;
                            n.height = null;
                            var s = Bn(n) - l;
                            s && et(i, i.height + s);
                        }
                        _n(r, 'markerChanged', r, e);
                    });
            }),
            (ma.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers && -1 != q(t.maybeHiddenMarkers, this)) ||
                        (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
                }
                this.lines.push(e);
            }),
            (ma.prototype.detachLine = function (e) {
                if ((this.lines.splice(q(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
                }
            }),
            ke(ma);
        var va = function (e, t) {
            (this.markers = e), (this.primary = t);
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
        };
        function ya(e, t, n, r, i) {
            (r = j(r)).shared = !1;
            var o = [ga(e, t, n, r, i)],
                a = o[0],
                l = r.widgetNode;
            return (
                yo(e, function (e) {
                    l && (r.widgetNode = l.cloneNode(!0)), o.push(ga(e, ft(e, t), ft(e, n), r, i));
                    for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                    a = X(o);
                }),
                new va(o, a)
            );
        }
        function ba(e) {
            return e.findMarks(ot(e.first, 0), e.clipPos(ot(e.lastLine())), function (e) {
                return e.parent;
            });
        }
        function xa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);
                if (at(o, a)) {
                    var l = ga(e, o, a, r.primary, r.primary.type);
                    r.markers.push(l), (l.parent = r);
                }
            }
        }
        function ka(e) {
            for (
                var t = function (t) {
                        var n = e[t],
                            r = [n.primary.doc];
                        yo(n.primary.doc, function (e) {
                            return r.push(e);
                        });
                        for (var i = 0; i < n.markers.length; i++) {
                            var o = n.markers[i];
                            -1 == q(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
                        }
                    },
                    n = 0;
                n < e.length;
                n++
            )
                t(n);
        }
        (va.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                _n(this, 'clear');
            }
        }),
            (va.prototype.find = function (e, t) {
                return this.primary.find(e, t);
            }),
            ke(va);
        var wa = 0,
            Ca = function (e, t, n, r, i) {
                if (!(this instanceof Ca)) return new Ca(e, t, n, r, i);
                null == n && (n = 0),
                    ua.call(this, [new ca([new cn('', null)])]),
                    (this.first = n),
                    (this.scrollTop = this.scrollLeft = 0),
                    (this.cantEdit = !1),
                    (this.cleanGeneration = 1),
                    (this.modeFrontier = this.highlightFrontier = n);
                var o = ot(n, 0);
                (this.sel = lo(o)),
                    (this.history = new wo(null)),
                    (this.id = ++wa),
                    (this.modeOption = t),
                    (this.lineSep = r),
                    (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
                    (this.extend = !1),
                    'string' == typeof e && (e = this.splitLines(e)),
                    vo(this, { from: o, to: o, text: e }),
                    Ro(this, lo(o), B);
            };
        (Ca.prototype = J(ua.prototype, {
            constructor: Ca,
            iter: function (e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
            },
            insert: function (e, t) {
                for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                this.insertInner(e - this.first, t, n);
            },
            remove: function (e, t) {
                this.removeInner(e - this.first, t);
            },
            getValue: function (e) {
                var t = Je(this, this.first, this.first + this.size);
                return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            setValue: Fi(function (e) {
                var t = ot(this.first, 0),
                    n = this.first + this.size - 1;
                Zo(
                    this,
                    {
                        from: t,
                        to: ot(n, Ye(this, n).text.length),
                        text: this.splitLines(e),
                        origin: 'setValue',
                        full: !0,
                    },
                    !0
                ),
                    this.cm && si(this.cm, 0, 0),
                    Ro(this, lo(t), B);
            }),
            replaceRange: function (e, t, n, r) {
                ia(this, e, (t = ft(this, t)), (n = n ? ft(this, n) : t), r);
            },
            getRange: function (e, t, n) {
                var r = Ze(this, ft(this, e), ft(this, t));
                return !1 === n ? r : r.join(n || this.lineSeparator());
            },
            getLine: function (e) {
                var t = this.getLineHandle(e);
                return t && t.text;
            },
            getLineHandle: function (e) {
                if (rt(this, e)) return Ye(this, e);
            },
            getLineNumber: function (e) {
                return tt(e);
            },
            getLineHandleVisualStart: function (e) {
                return 'number' == typeof e && (e = Ye(this, e)), Zt(e);
            },
            lineCount: function () {
                return this.size;
            },
            firstLine: function () {
                return this.first;
            },
            lastLine: function () {
                return this.first + this.size - 1;
            },
            clipPos: function (e) {
                return ft(this, e);
            },
            getCursor: function (e) {
                var t = this.sel.primary();
                return null == e || 'head' == e
                    ? t.head
                    : 'anchor' == e
                    ? t.anchor
                    : 'end' == e || 'to' == e || !1 === e
                    ? t.to()
                    : t.from();
            },
            listSelections: function () {
                return this.sel.ranges;
            },
            somethingSelected: function () {
                return this.sel.somethingSelected();
            },
            setCursor: Fi(function (e, t, n) {
                Io(this, ft(this, 'number' == typeof e ? ot(e, t || 0) : e), null, n);
            }),
            setSelection: Fi(function (e, t, n) {
                Io(this, ft(this, e), ft(this, t || e), n);
            }),
            extendSelection: Fi(function (e, t, n) {
                Do(this, ft(this, e), t && ft(this, t), n);
            }),
            extendSelections: Fi(function (e, t) {
                jo(this, ht(this, e), t);
            }),
            extendSelectionsBy: Fi(function (e, t) {
                jo(this, ht(this, Q(this.sel.ranges, e)), t);
            }),
            setSelections: Fi(function (e, t, n) {
                if (e.length) {
                    for (var r = [], i = 0; i < e.length; i++)
                        r[i] = new oo(ft(this, e[i].anchor), ft(this, e[i].head));
                    null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Ro(this, ao(this.cm, r, t), n);
                }
            }),
            addSelection: Fi(function (e, t, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new oo(ft(this, e), ft(this, t || e))), Ro(this, ao(this.cm, r, r.length - 1), n);
            }),
            getSelection: function (e) {
                for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = Ze(this, n[r].from(), n[r].to());
                    t = t ? t.concat(i) : i;
                }
                return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            getSelections: function (e) {
                for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = Ze(this, n[r].from(), n[r].to());
                    !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
                }
                return t;
            },
            replaceSelection: function (e, t, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                this.replaceSelections(r, t, n || '+input');
            },
            replaceSelections: Fi(function (e, t, n) {
                for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                    var a = i.ranges[o];
                    r[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n };
                }
                for (var l = t && 'end' != t && po(this, r, t), s = r.length - 1; s >= 0; s--) Zo(this, r[s]);
                l ? Wo(this, l) : this.cm && li(this.cm);
            }),
            undo: Fi(function () {
                ea(this, 'undo');
            }),
            redo: Fi(function () {
                ea(this, 'redo');
            }),
            undoSelection: Fi(function () {
                ea(this, 'undo', !0);
            }),
            redoSelection: Fi(function () {
                ea(this, 'redo', !0);
            }),
            setExtending: function (e) {
                this.extend = e;
            },
            getExtending: function () {
                return this.extend;
            },
            historySize: function () {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                return { undo: t, redo: n };
            },
            clearHistory: function () {
                var e = this;
                (this.history = new wo(this.history.maxGeneration)),
                    yo(
                        this,
                        function (t) {
                            return (t.history = e.history);
                        },
                        !0
                    );
            },
            markClean: function () {
                this.cleanGeneration = this.changeGeneration(!0);
            },
            changeGeneration: function (e) {
                return (
                    e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                    this.history.generation
                );
            },
            isClean: function (e) {
                return this.history.generation == (e || this.cleanGeneration);
            },
            getHistory: function () {
                return { done: Fo(this.history.done), undone: Fo(this.history.undone) };
            },
            setHistory: function (e) {
                var t = (this.history = new wo(this.history.maxGeneration));
                (t.done = Fo(e.done.slice(0), null, !0)), (t.undone = Fo(e.undone.slice(0), null, !0));
            },
            setGutterMarker: Fi(function (e, t, n) {
                return sa(this, e, 'gutter', function (e) {
                    var r = e.gutterMarkers || (e.gutterMarkers = {});
                    return (r[t] = n), !n && re(r) && (e.gutterMarkers = null), !0;
                });
            }),
            clearGutter: Fi(function (e) {
                var t = this;
                this.iter(function (n) {
                    n.gutterMarkers &&
                        n.gutterMarkers[e] &&
                        sa(t, n, 'gutter', function () {
                            return (n.gutterMarkers[e] = null), re(n.gutterMarkers) && (n.gutterMarkers = null), !0;
                        });
                });
            }),
            lineInfo: function (e) {
                var t;
                if ('number' == typeof e) {
                    if (!rt(this, e)) return null;
                    if (((t = e), !(e = Ye(this, e)))) return null;
                } else if (null == (t = tt(e))) return null;
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets,
                };
            },
            addLineClass: Fi(function (e, t, n) {
                return sa(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                    var r =
                        'text' == t
                            ? 'textClass'
                            : 'background' == t
                            ? 'bgClass'
                            : 'gutter' == t
                            ? 'gutterClass'
                            : 'wrapClass';
                    if (e[r]) {
                        if (S(n).test(e[r])) return !1;
                        e[r] += ' ' + n;
                    } else e[r] = n;
                    return !0;
                });
            }),
            removeLineClass: Fi(function (e, t, n) {
                return sa(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                    var r =
                            'text' == t
                                ? 'textClass'
                                : 'background' == t
                                ? 'bgClass'
                                : 'gutter' == t
                                ? 'gutterClass'
                                : 'wrapClass',
                        i = e[r];
                    if (!i) return !1;
                    if (null == n) e[r] = null;
                    else {
                        var o = i.match(S(n));
                        if (!o) return !1;
                        var a = o.index + o[0].length;
                        e[r] = i.slice(0, o.index) + (o.index && a != i.length ? ' ' : '') + i.slice(a) || null;
                    }
                    return !0;
                });
            }),
            addLineWidget: Fi(function (e, t, n) {
                return pa(this, e, t, n);
            }),
            removeLineWidget: function (e) {
                e.clear();
            },
            markText: function (e, t, n) {
                return ga(this, ft(this, e), ft(this, t), n, (n && n.type) || 'range');
            },
            setBookmark: function (e, t) {
                var n = {
                    replacedWith: t && (null == t.nodeType ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents,
                };
                return ga(this, (e = ft(this, e)), e, n, 'bookmark');
            },
            findMarksAt: function (e) {
                var t = [],
                    n = Ye(this, (e = ft(this, e)).line).markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r];
                        (null == i.from || i.from <= e.ch) &&
                            (null == i.to || i.to >= e.ch) &&
                            t.push(i.marker.parent || i.marker);
                    }
                return t;
            },
            findMarks: function (e, t, n) {
                (e = ft(this, e)), (t = ft(this, t));
                var r = [],
                    i = e.line;
                return (
                    this.iter(e.line, t.line + 1, function (o) {
                        var a = o.markedSpans;
                        if (a)
                            for (var l = 0; l < a.length; l++) {
                                var s = a[l];
                                (null != s.to && i == e.line && e.ch >= s.to) ||
                                    (null == s.from && i != e.line) ||
                                    (null != s.from && i == t.line && s.from >= t.ch) ||
                                    (n && !n(s.marker)) ||
                                    r.push(s.marker.parent || s.marker);
                            }
                        ++i;
                    }),
                    r
                );
            },
            getAllMarks: function () {
                var e = [];
                return (
                    this.iter(function (t) {
                        var n = t.markedSpans;
                        if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
                    }),
                    e
                );
            },
            posFromIndex: function (e) {
                var t,
                    n = this.first,
                    r = this.lineSeparator().length;
                return (
                    this.iter(function (i) {
                        var o = i.text.length + r;
                        if (o > e) return (t = e), !0;
                        (e -= o), ++n;
                    }),
                    ft(this, ot(n, t))
                );
            },
            indexFromPos: function (e) {
                var t = (e = ft(this, e)).ch;
                if (e.line < this.first || e.ch < 0) return 0;
                var n = this.lineSeparator().length;
                return (
                    this.iter(this.first, e.line, function (e) {
                        t += e.text.length + n;
                    }),
                    t
                );
            },
            copy: function (e) {
                var t = new Ca(
                    Je(this, this.first, this.first + this.size),
                    this.modeOption,
                    this.first,
                    this.lineSep,
                    this.direction
                );
                return (
                    (t.scrollTop = this.scrollTop),
                    (t.scrollLeft = this.scrollLeft),
                    (t.sel = this.sel),
                    (t.extend = !1),
                    e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
                    t
                );
            },
            linkedDoc: function (e) {
                e || (e = {});
                var t = this.first,
                    n = this.first + this.size;
                null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                var r = new Ca(Je(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                return (
                    e.sharedHist && (r.history = this.history),
                    (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }),
                    (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                    xa(r, ba(this)),
                    r
                );
            },
            unlinkDoc: function (e) {
                if ((e instanceof jl && (e = e.doc), this.linked))
                    for (var t = 0; t < this.linked.length; ++t)
                        if (this.linked[t].doc == e) {
                            this.linked.splice(t, 1), e.unlinkDoc(this), ka(ba(this));
                            break;
                        }
                if (e.history == this.history) {
                    var n = [e.id];
                    yo(
                        e,
                        function (e) {
                            return n.push(e.id);
                        },
                        !0
                    ),
                        (e.history = new wo(null)),
                        (e.history.done = Fo(this.history.done, n)),
                        (e.history.undone = Fo(this.history.undone, n));
                }
            },
            iterLinkedDocs: function (e) {
                yo(this, e);
            },
            getMode: function () {
                return this.mode;
            },
            getEditor: function () {
                return this.cm;
            },
            splitLines: function (e) {
                return this.lineSep ? e.split(this.lineSep) : Fe(e);
            },
            lineSeparator: function () {
                return this.lineSep || '\n';
            },
            setDirection: Fi(function (e) {
                'rtl' != e && (e = 'ltr'),
                    e != this.direction &&
                        ((this.direction = e),
                        this.iter(function (e) {
                            return (e.order = null);
                        }),
                        this.cm && ko(this.cm));
            }),
        })),
            (Ca.prototype.eachLine = Ca.prototype.iter);
        var Sa = 0;
        function Ma(e) {
            var t = this;
            if ((Aa(t), !ye(t, e) && !$n(t.display, e))) {
                we(e), a && (Sa = +new Date());
                var n = Nr(t, e, !0),
                    r = e.dataTransfer.files;
                if (n && !t.isReadOnly())
                    if (r && r.length && window.FileReader && window.File)
                        for (
                            var i = r.length,
                                o = Array(i),
                                l = 0,
                                s = function () {
                                    ++l == i &&
                                        zi(t, function () {
                                            var e = {
                                                from: (n = ft(t.doc, n)),
                                                to: n,
                                                text: t.doc.splitLines(
                                                    o
                                                        .filter(function (e) {
                                                            return null != e;
                                                        })
                                                        .join(t.doc.lineSeparator())
                                                ),
                                                origin: 'paste',
                                            };
                                            Zo(t.doc, e), Wo(t.doc, lo(ft(t.doc, n), ft(t.doc, so(e))));
                                        })();
                                },
                                c = function (e, n) {
                                    if (t.options.allowDropFileTypes && -1 == q(t.options.allowDropFileTypes, e.type))
                                        s();
                                    else {
                                        var r = new FileReader();
                                        (r.onerror = function () {
                                            return s();
                                        }),
                                            (r.onload = function () {
                                                var e = r.result;
                                                /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), s();
                                            }),
                                            r.readAsText(e);
                                    }
                                },
                                u = 0;
                            u < r.length;
                            u++
                        )
                            c(r[u], u);
                    else {
                        if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                            return (
                                t.state.draggingText(e),
                                void setTimeout(function () {
                                    return t.display.input.focus();
                                }, 20)
                            );
                        try {
                            var d = e.dataTransfer.getData('Text');
                            if (d) {
                                var f;
                                if (
                                    (t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()),
                                    Bo(t.doc, lo(n, n)),
                                    f)
                                )
                                    for (var p = 0; p < f.length; ++p) ia(t.doc, '', f[p].anchor, f[p].head, 'drag');
                                t.replaceSelection(d, 'around', 'paste'), t.display.input.focus();
                            }
                        } catch (e) {}
                    }
            }
        }
        function Ta(e, t) {
            if (a && (!e.state.draggingText || +new Date() - Sa < 100)) Me(t);
            else if (
                !ye(e, t) &&
                !$n(e.display, t) &&
                (t.dataTransfer.setData('Text', e.getSelection()),
                (t.dataTransfer.effectAllowed = 'copyMove'),
                t.dataTransfer.setDragImage && !f)
            ) {
                var n = _('img', null, null, 'position: fixed; left: 0; top: 0;');
                (n.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                    d && ((n.width = n.height = 1), e.display.wrapper.appendChild(n), (n._top = n.offsetTop)),
                    t.dataTransfer.setDragImage(n, 0, 0),
                    d && n.parentNode.removeChild(n);
            }
        }
        function La(e, t) {
            var n = Nr(e, t);
            if (n) {
                var r = document.createDocumentFragment();
                Ur(e, n, r),
                    e.display.dragCursor ||
                        ((e.display.dragCursor = _('div', null, 'CodeMirror-cursors CodeMirror-dragcursors')),
                        e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                    A(e.display.dragCursor, r);
            }
        }
        function Aa(e) {
            e.display.dragCursor &&
                (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
        }
        function _a(e) {
            if (document.getElementsByClassName) {
                for (var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0; r < t.length; r++) {
                    var i = t[r].CodeMirror;
                    i && n.push(i);
                }
                n.length &&
                    n[0].operation(function () {
                        for (var t = 0; t < n.length; t++) e(n[t]);
                    });
            }
        }
        var Oa = !1;
        function Ea() {
            Oa || (za(), (Oa = !0));
        }
        function za() {
            var e;
            he(window, 'resize', function () {
                null == e &&
                    (e = setTimeout(function () {
                        (e = null), _a(Pa);
                    }, 100));
            }),
                he(window, 'blur', function () {
                    return _a(Zr);
                });
        }
        function Pa(e) {
            var t = e.display;
            (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
        }
        for (
            var Fa = {
                    3: 'Pause',
                    8: 'Backspace',
                    9: 'Tab',
                    13: 'Enter',
                    16: 'Shift',
                    17: 'Ctrl',
                    18: 'Alt',
                    19: 'Pause',
                    20: 'CapsLock',
                    27: 'Esc',
                    32: 'Space',
                    33: 'PageUp',
                    34: 'PageDown',
                    35: 'End',
                    36: 'Home',
                    37: 'Left',
                    38: 'Up',
                    39: 'Right',
                    40: 'Down',
                    44: 'PrintScrn',
                    45: 'Insert',
                    46: 'Delete',
                    59: ';',
                    61: '=',
                    91: 'Mod',
                    92: 'Mod',
                    93: 'Mod',
                    106: '*',
                    107: '=',
                    109: '-',
                    110: '.',
                    111: '/',
                    145: 'ScrollLock',
                    173: '-',
                    186: ';',
                    187: '=',
                    188: ',',
                    189: '-',
                    190: '.',
                    191: '/',
                    192: '`',
                    219: '[',
                    220: '\\',
                    221: ']',
                    222: "'",
                    224: 'Mod',
                    63232: 'Up',
                    63233: 'Down',
                    63234: 'Left',
                    63235: 'Right',
                    63272: 'Delete',
                    63273: 'Home',
                    63275: 'End',
                    63276: 'PageUp',
                    63277: 'PageDown',
                    63302: 'Insert',
                },
                Na = 0;
            Na < 10;
            Na++
        )
            Fa[Na + 48] = Fa[Na + 96] = String(Na);
        for (var Da = 65; Da <= 90; Da++) Fa[Da] = String.fromCharCode(Da);
        for (var ja = 1; ja <= 12; ja++) Fa[ja + 111] = Fa[ja + 63235] = 'F' + ja;
        var Ha = {};
        function Ia(e) {
            var t,
                n,
                r,
                i,
                o = e.split(/-(?!$)/);
            e = o[o.length - 1];
            for (var a = 0; a < o.length - 1; a++) {
                var l = o[a];
                if (/^(cmd|meta|m)$/i.test(l)) i = !0;
                else if (/^a(lt)?$/i.test(l)) t = !0;
                else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
                else {
                    if (!/^s(hift)?$/i.test(l)) throw new Error('Unrecognized modifier name: ' + l);
                    r = !0;
                }
            }
            return t && (e = 'Alt-' + e), n && (e = 'Ctrl-' + e), i && (e = 'Cmd-' + e), r && (e = 'Shift-' + e), e;
        }
        function qa(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if ('...' == r) {
                        delete e[n];
                        continue;
                    }
                    for (var i = Q(n.split(' '), Ia), o = 0; o < i.length; o++) {
                        var a = void 0,
                            l = void 0;
                        o == i.length - 1
                            ? ((l = i.join(' ')), (a = r))
                            : ((l = i.slice(0, o + 1).join(' ')), (a = '...'));
                        var s = t[l];
                        if (s) {
                            if (s != a) throw new Error('Inconsistent bindings for ' + l);
                        } else t[l] = a;
                    }
                    delete e[n];
                }
            for (var c in t) e[c] = t[c];
            return e;
        }
        function Wa(e, t, n, r) {
            var i = (t = Ua(t)).call ? t.call(e, r) : t[e];
            if (!1 === i) return 'nothing';
            if ('...' === i) return 'multi';
            if (null != i && n(i)) return 'handled';
            if (t.fallthrough) {
                if ('[object Array]' != Object.prototype.toString.call(t.fallthrough))
                    return Wa(e, t.fallthrough, n, r);
                for (var o = 0; o < t.fallthrough.length; o++) {
                    var a = Wa(e, t.fallthrough[o], n, r);
                    if (a) return a;
                }
            }
        }
        function Ra(e) {
            var t = 'string' == typeof e ? e : Fa[e.keyCode];
            return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
        }
        function Ba(e, t, n) {
            var r = e;
            return (
                t.altKey && 'Alt' != r && (e = 'Alt-' + e),
                (w ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
                (w ? t.ctrlKey : t.metaKey) && 'Mod' != r && (e = 'Cmd-' + e),
                !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
                e
            );
        }
        function $a(e, t) {
            if (d && 34 == e.keyCode && e.char) return !1;
            var n = Fa[e.keyCode];
            return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Ba(n, e, t));
        }
        function Ua(e) {
            return 'string' == typeof e ? Ha[e] : e;
        }
        function Va(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var o = t(n[i]); r.length && at(o.from, X(r).to) <= 0; ) {
                    var a = r.pop();
                    if (at(a.from, o.from) < 0) {
                        o.from = a.from;
                        break;
                    }
                }
                r.push(o);
            }
            Ei(e, function () {
                for (var t = r.length - 1; t >= 0; t--) ia(e.doc, '', r[t].from, r[t].to, '+delete');
                li(e);
            });
        }
        function Ga(e, t, n) {
            var r = ae(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r;
        }
        function Ka(e, t, n) {
            var r = Ga(e, t.ch, n);
            return null == r ? null : new ot(t.line, r, n < 0 ? 'after' : 'before');
        }
        function Xa(e, t, n, r, i) {
            if (e) {
                'rtl' == t.doc.direction && (i = -i);
                var o = fe(n, t.doc.direction);
                if (o) {
                    var a,
                        l = i < 0 ? X(o) : o[0],
                        s = i < 0 == (1 == l.level) ? 'after' : 'before';
                    if (l.level > 0 || 'rtl' == t.doc.direction) {
                        var c = nr(t, n);
                        a = i < 0 ? n.text.length - 1 : 0;
                        var u = rr(t, c, a).top;
                        (a = le(
                            function (e) {
                                return rr(t, c, e).top == u;
                            },
                            i < 0 == (1 == l.level) ? l.from : l.to - 1,
                            a
                        )),
                            'before' == s && (a = Ga(n, a, 1));
                    } else a = i < 0 ? l.to : l.from;
                    return new ot(r, a, s);
                }
            }
            return new ot(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
        }
        function Qa(e, t, n, r) {
            var i = fe(t, e.doc.direction);
            if (!i) return Ka(t, n, r);
            n.ch >= t.text.length
                ? ((n.ch = t.text.length), (n.sticky = 'before'))
                : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
            var o = ue(i, n.ch, n.sticky),
                a = i[o];
            if ('ltr' == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch))
                return Ka(t, n, r);
            var l,
                s = function (e, n) {
                    return Ga(t, e instanceof ot ? e.ch : e, n);
                },
                c = function (n) {
                    return e.options.lineWrapping
                        ? ((l = l || nr(e, t)), Sr(e, t, l, n))
                        : { begin: 0, end: t.text.length };
                },
                u = c('before' == n.sticky ? s(n, -1) : n.ch);
            if ('rtl' == e.doc.direction || 1 == a.level) {
                var d = (1 == a.level) == r < 0,
                    f = s(n, d ? 1 : -1);
                if (null != f && (d ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                    var p = d ? 'before' : 'after';
                    return new ot(n.line, f, p);
                }
            }
            var h = function (e, t, r) {
                    for (
                        var o = function (e, t) {
                            return t ? new ot(n.line, s(e, 1), 'before') : new ot(n.line, e, 'after');
                        };
                        e >= 0 && e < i.length;
                        e += t
                    ) {
                        var a = i[e],
                            l = t > 0 == (1 != a.level),
                            c = l ? r.begin : s(r.end, -1);
                        if (a.from <= c && c < a.to) return o(c, l);
                        if (((c = l ? a.from : s(a.to, -1)), r.begin <= c && c < r.end)) return o(c, l);
                    }
                },
                m = h(o + r, r, u);
            if (m) return m;
            var g = r > 0 ? u.end : s(u.begin, -1);
            return null == g || (r > 0 && g == t.text.length) || !(m = h(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m;
        }
        (Ha.basic = {
            Left: 'goCharLeft',
            Right: 'goCharRight',
            Up: 'goLineUp',
            Down: 'goLineDown',
            End: 'goLineEnd',
            Home: 'goLineStartSmart',
            PageUp: 'goPageUp',
            PageDown: 'goPageDown',
            Delete: 'delCharAfter',
            Backspace: 'delCharBefore',
            'Shift-Backspace': 'delCharBefore',
            Tab: 'defaultTab',
            'Shift-Tab': 'indentAuto',
            Enter: 'newlineAndIndent',
            Insert: 'toggleOverwrite',
            Esc: 'singleSelection',
        }),
            (Ha.pcDefault = {
                'Ctrl-A': 'selectAll',
                'Ctrl-D': 'deleteLine',
                'Ctrl-Z': 'undo',
                'Shift-Ctrl-Z': 'redo',
                'Ctrl-Y': 'redo',
                'Ctrl-Home': 'goDocStart',
                'Ctrl-End': 'goDocEnd',
                'Ctrl-Up': 'goLineUp',
                'Ctrl-Down': 'goLineDown',
                'Ctrl-Left': 'goGroupLeft',
                'Ctrl-Right': 'goGroupRight',
                'Alt-Left': 'goLineStart',
                'Alt-Right': 'goLineEnd',
                'Ctrl-Backspace': 'delGroupBefore',
                'Ctrl-Delete': 'delGroupAfter',
                'Ctrl-S': 'save',
                'Ctrl-F': 'find',
                'Ctrl-G': 'findNext',
                'Shift-Ctrl-G': 'findPrev',
                'Shift-Ctrl-F': 'replace',
                'Shift-Ctrl-R': 'replaceAll',
                'Ctrl-[': 'indentLess',
                'Ctrl-]': 'indentMore',
                'Ctrl-U': 'undoSelection',
                'Shift-Ctrl-U': 'redoSelection',
                'Alt-U': 'redoSelection',
                fallthrough: 'basic',
            }),
            (Ha.emacsy = {
                'Ctrl-F': 'goCharRight',
                'Ctrl-B': 'goCharLeft',
                'Ctrl-P': 'goLineUp',
                'Ctrl-N': 'goLineDown',
                'Alt-F': 'goWordRight',
                'Alt-B': 'goWordLeft',
                'Ctrl-A': 'goLineStart',
                'Ctrl-E': 'goLineEnd',
                'Ctrl-V': 'goPageDown',
                'Shift-Ctrl-V': 'goPageUp',
                'Ctrl-D': 'delCharAfter',
                'Ctrl-H': 'delCharBefore',
                'Alt-D': 'delWordAfter',
                'Alt-Backspace': 'delWordBefore',
                'Ctrl-K': 'killLine',
                'Ctrl-T': 'transposeChars',
                'Ctrl-O': 'openLine',
            }),
            (Ha.macDefault = {
                'Cmd-A': 'selectAll',
                'Cmd-D': 'deleteLine',
                'Cmd-Z': 'undo',
                'Shift-Cmd-Z': 'redo',
                'Cmd-Y': 'redo',
                'Cmd-Home': 'goDocStart',
                'Cmd-Up': 'goDocStart',
                'Cmd-End': 'goDocEnd',
                'Cmd-Down': 'goDocEnd',
                'Alt-Left': 'goGroupLeft',
                'Alt-Right': 'goGroupRight',
                'Cmd-Left': 'goLineLeft',
                'Cmd-Right': 'goLineRight',
                'Alt-Backspace': 'delGroupBefore',
                'Ctrl-Alt-Backspace': 'delGroupAfter',
                'Alt-Delete': 'delGroupAfter',
                'Cmd-S': 'save',
                'Cmd-F': 'find',
                'Cmd-G': 'findNext',
                'Shift-Cmd-G': 'findPrev',
                'Cmd-Alt-F': 'replace',
                'Shift-Cmd-Alt-F': 'replaceAll',
                'Cmd-[': 'indentLess',
                'Cmd-]': 'indentMore',
                'Cmd-Backspace': 'delWrappedLineLeft',
                'Cmd-Delete': 'delWrappedLineRight',
                'Cmd-U': 'undoSelection',
                'Shift-Cmd-U': 'redoSelection',
                'Ctrl-Up': 'goDocStart',
                'Ctrl-Down': 'goDocEnd',
                fallthrough: ['basic', 'emacsy'],
            }),
            (Ha.default = y ? Ha.macDefault : Ha.pcDefault);
        var Ya = {
            selectAll: Qo,
            singleSelection: function (e) {
                return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), B);
            },
            killLine: function (e) {
                return Va(e, function (t) {
                    if (t.empty()) {
                        var n = Ye(e.doc, t.head.line).text.length;
                        return t.head.ch == n && t.head.line < e.lastLine()
                            ? { from: t.head, to: ot(t.head.line + 1, 0) }
                            : { from: t.head, to: ot(t.head.line, n) };
                    }
                    return { from: t.from(), to: t.to() };
                });
            },
            deleteLine: function (e) {
                return Va(e, function (t) {
                    return { from: ot(t.from().line, 0), to: ft(e.doc, ot(t.to().line + 1, 0)) };
                });
            },
            delLineLeft: function (e) {
                return Va(e, function (e) {
                    return { from: ot(e.from().line, 0), to: e.from() };
                });
            },
            delWrappedLineLeft: function (e) {
                return Va(e, function (t) {
                    var n = e.charCoords(t.head, 'div').top + 5;
                    return { from: e.coordsChar({ left: 0, top: n }, 'div'), to: t.from() };
                });
            },
            delWrappedLineRight: function (e) {
                return Va(e, function (t) {
                    var n = e.charCoords(t.head, 'div').top + 5,
                        r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
                    return { from: t.from(), to: r };
                });
            },
            undo: function (e) {
                return e.undo();
            },
            redo: function (e) {
                return e.redo();
            },
            undoSelection: function (e) {
                return e.undoSelection();
            },
            redoSelection: function (e) {
                return e.redoSelection();
            },
            goDocStart: function (e) {
                return e.extendSelection(ot(e.firstLine(), 0));
            },
            goDocEnd: function (e) {
                return e.extendSelection(ot(e.lastLine()));
            },
            goLineStart: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return Za(e, t.head.line);
                    },
                    { origin: '+move', bias: 1 }
                );
            },
            goLineStartSmart: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return el(e, t.head);
                    },
                    { origin: '+move', bias: 1 }
                );
            },
            goLineEnd: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return Ja(e, t.head.line);
                    },
                    { origin: '+move', bias: -1 }
                );
            },
            goLineRight: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5;
                    return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
                }, U);
            },
            goLineLeft: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5;
                    return e.coordsChar({ left: 0, top: n }, 'div');
                }, U);
            },
            goLineLeftSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5,
                        r = e.coordsChar({ left: 0, top: n }, 'div');
                    return r.ch < e.getLine(r.line).search(/\S/) ? el(e, t.head) : r;
                }, U);
            },
            goLineUp: function (e) {
                return e.moveV(-1, 'line');
            },
            goLineDown: function (e) {
                return e.moveV(1, 'line');
            },
            goPageUp: function (e) {
                return e.moveV(-1, 'page');
            },
            goPageDown: function (e) {
                return e.moveV(1, 'page');
            },
            goCharLeft: function (e) {
                return e.moveH(-1, 'char');
            },
            goCharRight: function (e) {
                return e.moveH(1, 'char');
            },
            goColumnLeft: function (e) {
                return e.moveH(-1, 'column');
            },
            goColumnRight: function (e) {
                return e.moveH(1, 'column');
            },
            goWordLeft: function (e) {
                return e.moveH(-1, 'word');
            },
            goGroupRight: function (e) {
                return e.moveH(1, 'group');
            },
            goGroupLeft: function (e) {
                return e.moveH(-1, 'group');
            },
            goWordRight: function (e) {
                return e.moveH(1, 'word');
            },
            delCharBefore: function (e) {
                return e.deleteH(-1, 'codepoint');
            },
            delCharAfter: function (e) {
                return e.deleteH(1, 'char');
            },
            delWordBefore: function (e) {
                return e.deleteH(-1, 'word');
            },
            delWordAfter: function (e) {
                return e.deleteH(1, 'word');
            },
            delGroupBefore: function (e) {
                return e.deleteH(-1, 'group');
            },
            delGroupAfter: function (e) {
                return e.deleteH(1, 'group');
            },
            indentAuto: function (e) {
                return e.indentSelection('smart');
            },
            indentMore: function (e) {
                return e.indentSelection('add');
            },
            indentLess: function (e) {
                return e.indentSelection('subtract');
            },
            insertTab: function (e) {
                return e.replaceSelection('\t');
            },
            insertSoftTab: function (e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                    var o = n[i].from(),
                        a = H(e.getLine(o.line), o.ch, r);
                    t.push(K(r - (a % r)));
                }
                e.replaceSelections(t);
            },
            defaultTab: function (e) {
                e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab');
            },
            transposeChars: function (e) {
                return Ei(e, function () {
                    for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                        if (t[r].empty()) {
                            var i = t[r].head,
                                o = Ye(e.doc, i.line).text;
                            if (o)
                                if ((i.ch == o.length && (i = new ot(i.line, i.ch - 1)), i.ch > 0))
                                    (i = new ot(i.line, i.ch + 1)),
                                        e.replaceRange(
                                            o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                                            ot(i.line, i.ch - 2),
                                            i,
                                            '+transpose'
                                        );
                                else if (i.line > e.doc.first) {
                                    var a = Ye(e.doc, i.line - 1).text;
                                    a &&
                                        ((i = new ot(i.line, 1)),
                                        e.replaceRange(
                                            o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
                                            ot(i.line - 1, a.length - 1),
                                            i,
                                            '+transpose'
                                        ));
                                }
                            n.push(new oo(i, i));
                        }
                    e.setSelections(n);
                });
            },
            newlineAndIndent: function (e) {
                return Ei(e, function () {
                    for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                        e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, '+input');
                    t = e.listSelections();
                    for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                    li(e);
                });
            },
            openLine: function (e) {
                return e.replaceSelection('\n', 'start');
            },
            toggleOverwrite: function (e) {
                return e.toggleOverwrite();
            },
        };
        function Za(e, t) {
            var n = Ye(e.doc, t),
                r = Zt(n);
            return r != n && (t = tt(r)), Xa(!0, e, r, t, 1);
        }
        function Ja(e, t) {
            var n = Ye(e.doc, t),
                r = Jt(n);
            return r != n && (t = tt(r)), Xa(!0, e, n, t, -1);
        }
        function el(e, t) {
            var n = Za(e, t.line),
                r = Ye(e.doc, n.line),
                i = fe(r, e.doc.direction);
            if (!i || 0 == i[0].level) {
                var o = Math.max(n.ch, r.text.search(/\S/)),
                    a = t.line == n.line && t.ch <= o && t.ch;
                return ot(n.line, a ? 0 : o, n.sticky);
            }
            return n;
        }
        function tl(e, t, n) {
            if ('string' == typeof t && !(t = Ya[t])) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
                i = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != R);
            } finally {
                (e.display.shift = r), (e.state.suppressEdits = !1);
            }
            return i;
        }
        function nl(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = Wa(t, e.state.keyMaps[r], n, e);
                if (i) return i;
            }
            return (e.options.extraKeys && Wa(t, e.options.extraKeys, n, e)) || Wa(t, e.options.keyMap, n, e);
        }
        var rl = new I();
        function il(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
                if (Ra(t)) return 'handled';
                if (
                    (/\'$/.test(t)
                        ? (e.state.keySeq = null)
                        : rl.set(50, function () {
                              e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                          }),
                    ol(e, i + ' ' + t, n, r))
                )
                    return !0;
            }
            return ol(e, t, n, r);
        }
        function ol(e, t, n, r) {
            var i = nl(e, t, r);
            return (
                'multi' == i && (e.state.keySeq = t),
                'handled' == i && _n(e, 'keyHandled', e, t, n),
                ('handled' != i && 'multi' != i) || (we(n), Kr(e)),
                !!i
            );
        }
        function al(e, t) {
            var n = $a(t, !0);
            return (
                !!n &&
                (t.shiftKey && !e.state.keySeq
                    ? il(e, 'Shift-' + n, t, function (t) {
                          return tl(e, t, !0);
                      }) ||
                      il(e, n, t, function (t) {
                          if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion) return tl(e, t);
                      })
                    : il(e, n, t, function (t) {
                          return tl(e, t);
                      }))
            );
        }
        function ll(e, t, n) {
            return il(e, "'" + n + "'", t, function (t) {
                return tl(e, t, !0);
            });
        }
        var sl = null;
        function cl(e) {
            var t = this;
            if (!((e.target && e.target != t.display.input.getField()) || ((t.curOp.focus = z()), ye(t, e)))) {
                a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
                var r = e.keyCode;
                t.display.shift = 16 == r || e.shiftKey;
                var i = al(t, e);
                d &&
                    ((sl = i ? r : null),
                    i || 88 != r || De || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection('', null, 'cut')),
                    n &&
                        !y &&
                        !i &&
                        46 == r &&
                        e.shiftKey &&
                        !e.ctrlKey &&
                        document.execCommand &&
                        document.execCommand('cut'),
                    18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || ul(t);
            }
        }
        function ul(e) {
            var t = e.display.lineDiv;
            function n(e) {
                (18 != e.keyCode && e.altKey) ||
                    (T(t, 'CodeMirror-crosshair'), ge(document, 'keyup', n), ge(document, 'mouseover', n));
            }
            P(t, 'CodeMirror-crosshair'), he(document, 'keyup', n), he(document, 'mouseover', n);
        }
        function dl(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1), ye(this, e);
        }
        function fl(e) {
            var t = this;
            if (
                !(
                    (e.target && e.target != t.display.input.getField()) ||
                    $n(t.display, e) ||
                    ye(t, e) ||
                    (e.ctrlKey && !e.altKey) ||
                    (y && e.metaKey)
                )
            ) {
                var n = e.keyCode,
                    r = e.charCode;
                if (d && n == sl) return (sl = null), void we(e);
                if (!d || (e.which && !(e.which < 10)) || !al(t, e)) {
                    var i = String.fromCharCode(null == r ? n : r);
                    '\b' != i && (ll(t, e, i) || t.display.input.onKeyPress(e));
                }
            }
        }
        var pl,
            hl,
            ml = 400,
            gl = function (e, t, n) {
                (this.time = e), (this.pos = t), (this.button = n);
            };
        function vl(e, t) {
            var n = +new Date();
            return hl && hl.compare(n, e, t)
                ? ((pl = hl = null), 'triple')
                : pl && pl.compare(n, e, t)
                ? ((hl = new gl(n, e, t)), (pl = null), 'double')
                : ((pl = new gl(n, e, t)), (hl = null), 'single');
        }
        function yl(e) {
            var t = this,
                n = t.display;
            if (!(ye(t, e) || (n.activeTouch && n.input.supportsTouch())))
                if ((n.input.ensurePolled(), (n.shift = e.shiftKey), $n(n, e)))
                    s ||
                        ((n.scroller.draggable = !1),
                        setTimeout(function () {
                            return (n.scroller.draggable = !0);
                        }, 100));
                else if (!Ll(t, e)) {
                    var r = Nr(t, e),
                        i = Le(e),
                        o = r ? vl(r, i) : 'single';
                    window.focus(),
                        1 == i && t.state.selectingText && t.state.selectingText(e),
                        (r && bl(t, i, r, o, e)) ||
                            (1 == i
                                ? r
                                    ? kl(t, r, o, e)
                                    : Te(e) == n.scroller && we(e)
                                : 2 == i
                                ? (r && Do(t.doc, r),
                                  setTimeout(function () {
                                      return n.input.focus();
                                  }, 20))
                                : 3 == i && (C ? t.display.input.onContextMenu(e) : Qr(t)));
                }
        }
        function bl(e, t, n, r, i) {
            var o = 'Click';
            return (
                'double' == r ? (o = 'Double' + o) : 'triple' == r && (o = 'Triple' + o),
                il(e, Ba((o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o), i), i, function (t) {
                    if (('string' == typeof t && (t = Ya[t]), !t)) return !1;
                    var r = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != R);
                    } finally {
                        e.state.suppressEdits = !1;
                    }
                    return r;
                })
            );
        }
        function xl(e, t, n) {
            var r = e.getOption('configureMouse'),
                i = r ? r(e, t, n) : {};
            if (null == i.unit) {
                var o = b ? n.shiftKey && n.metaKey : n.altKey;
                i.unit = o ? 'rectangle' : 'single' == t ? 'char' : 'double' == t ? 'word' : 'line';
            }
            return (
                (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
                null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey),
                null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                i
            );
        }
        function kl(e, t, n, r) {
            a ? setTimeout(D(Xr, e), 0) : (e.curOp.focus = z());
            var i,
                o = xl(e, n, r),
                l = e.doc.sel;
            e.options.dragDrop &&
            Oe &&
            !e.isReadOnly() &&
            'single' == n &&
            (i = l.contains(t)) > -1 &&
            (at((i = l.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
            (at(i.to(), t) > 0 || t.xRel < 0)
                ? wl(e, r, t, o)
                : Sl(e, r, t, o);
        }
        function wl(e, t, n, r) {
            var i = e.display,
                o = !1,
                c = zi(e, function (t) {
                    s && (i.scroller.draggable = !1),
                        (e.state.draggingText = !1),
                        ge(i.wrapper.ownerDocument, 'mouseup', c),
                        ge(i.wrapper.ownerDocument, 'mousemove', u),
                        ge(i.scroller, 'dragstart', d),
                        ge(i.scroller, 'drop', c),
                        o ||
                            (we(t),
                            r.addNew || Do(e.doc, n, null, null, r.extend),
                            (s && !f) || (a && 9 == l)
                                ? setTimeout(function () {
                                      i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
                                  }, 20)
                                : i.input.focus());
                }),
                u = function (e) {
                    o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                },
                d = function () {
                    return (o = !0);
                };
            s && (i.scroller.draggable = !0),
                (e.state.draggingText = c),
                (c.copy = !r.moveOnDrag),
                i.scroller.dragDrop && i.scroller.dragDrop(),
                he(i.wrapper.ownerDocument, 'mouseup', c),
                he(i.wrapper.ownerDocument, 'mousemove', u),
                he(i.scroller, 'dragstart', d),
                he(i.scroller, 'drop', c),
                Qr(e),
                setTimeout(function () {
                    return i.input.focus();
                }, 20);
        }
        function Cl(e, t, n) {
            if ('char' == n) return new oo(t, t);
            if ('word' == n) return e.findWordAt(t);
            if ('line' == n) return new oo(ot(t.line, 0), ft(e.doc, ot(t.line + 1, 0)));
            var r = n(e, t);
            return new oo(r.from, r.to);
        }
        function Sl(e, t, n, r) {
            var i = e.display,
                o = e.doc;
            we(t);
            var a,
                l,
                s = o.sel,
                c = s.ranges;
            if (
                (r.addNew && !r.extend
                    ? ((l = o.sel.contains(n)), (a = l > -1 ? c[l] : new oo(n, n)))
                    : ((a = o.sel.primary()), (l = o.sel.primIndex)),
                'rectangle' == r.unit)
            )
                r.addNew || (a = new oo(n, n)), (n = Nr(e, t, !0, !0)), (l = -1);
            else {
                var u = Cl(e, n, r.unit);
                a = r.extend ? No(a, u.anchor, u.head, r.extend) : u;
            }
            r.addNew
                ? -1 == l
                    ? ((l = c.length), Ro(o, ao(e, c.concat([a]), l), { scroll: !1, origin: '*mouse' }))
                    : c.length > 1 && c[l].empty() && 'char' == r.unit && !r.extend
                    ? (Ro(o, ao(e, c.slice(0, l).concat(c.slice(l + 1)), 0), { scroll: !1, origin: '*mouse' }),
                      (s = o.sel))
                    : Ho(o, l, a, $)
                : ((l = 0), Ro(o, new io([a], 0), $), (s = o.sel));
            var d = n;
            function f(t) {
                if (0 != at(d, t))
                    if (((d = t), 'rectangle' == r.unit)) {
                        for (
                            var i = [],
                                c = e.options.tabSize,
                                u = H(Ye(o, n.line).text, n.ch, c),
                                f = H(Ye(o, t.line).text, t.ch, c),
                                p = Math.min(u, f),
                                h = Math.max(u, f),
                                m = Math.min(n.line, t.line),
                                g = Math.min(e.lastLine(), Math.max(n.line, t.line));
                            m <= g;
                            m++
                        ) {
                            var v = Ye(o, m).text,
                                y = V(v, p, c);
                            p == h
                                ? i.push(new oo(ot(m, y), ot(m, y)))
                                : v.length > y && i.push(new oo(ot(m, y), ot(m, V(v, h, c))));
                        }
                        i.length || i.push(new oo(n, n)),
                            Ro(o, ao(e, s.ranges.slice(0, l).concat(i), l), { origin: '*mouse', scroll: !1 }),
                            e.scrollIntoView(t);
                    } else {
                        var b,
                            x = a,
                            k = Cl(e, t, r.unit),
                            w = x.anchor;
                        at(k.anchor, w) > 0
                            ? ((b = k.head), (w = ut(x.from(), k.anchor)))
                            : ((b = k.anchor), (w = ct(x.to(), k.head)));
                        var C = s.ranges.slice(0);
                        (C[l] = Ml(e, new oo(ft(o, w), b))), Ro(o, ao(e, C, l), $);
                    }
            }
            var p = i.wrapper.getBoundingClientRect(),
                h = 0;
            function m(t) {
                var n = ++h,
                    a = Nr(e, t, !0, 'rectangle' == r.unit);
                if (a)
                    if (0 != at(a, d)) {
                        (e.curOp.focus = z()), f(a);
                        var l = ti(i, o);
                        (a.line >= l.to || a.line < l.from) &&
                            setTimeout(
                                zi(e, function () {
                                    h == n && m(t);
                                }),
                                150
                            );
                    } else {
                        var s = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                        s &&
                            setTimeout(
                                zi(e, function () {
                                    h == n && ((i.scroller.scrollTop += s), m(t));
                                }),
                                50
                            );
                    }
            }
            function g(t) {
                (e.state.selectingText = !1),
                    (h = 1 / 0),
                    t && (we(t), i.input.focus()),
                    ge(i.wrapper.ownerDocument, 'mousemove', v),
                    ge(i.wrapper.ownerDocument, 'mouseup', y),
                    (o.history.lastSelOrigin = null);
            }
            var v = zi(e, function (e) {
                    0 !== e.buttons && Le(e) ? m(e) : g(e);
                }),
                y = zi(e, g);
            (e.state.selectingText = y),
                he(i.wrapper.ownerDocument, 'mousemove', v),
                he(i.wrapper.ownerDocument, 'mouseup', y);
        }
        function Ml(e, t) {
            var n = t.anchor,
                r = t.head,
                i = Ye(e.doc, n.line);
            if (0 == at(n, r) && n.sticky == r.sticky) return t;
            var o = fe(i);
            if (!o) return t;
            var a = ue(o, n.ch, n.sticky),
                l = o[a];
            if (l.from != n.ch && l.to != n.ch) return t;
            var s,
                c = a + ((l.from == n.ch) == (1 != l.level) ? 0 : 1);
            if (0 == c || c == o.length) return t;
            if (r.line != n.line) s = (r.line - n.line) * ('ltr' == e.doc.direction ? 1 : -1) > 0;
            else {
                var u = ue(o, r.ch, r.sticky),
                    d = u - a || (r.ch - n.ch) * (1 == l.level ? -1 : 1);
                s = u == c - 1 || u == c ? d < 0 : d > 0;
            }
            var f = o[c + (s ? -1 : 0)],
                p = s == (1 == f.level),
                h = p ? f.from : f.to,
                m = p ? 'after' : 'before';
            return n.ch == h && n.sticky == m ? t : new oo(new ot(n.line, h, m), r);
        }
        function Tl(e, t, n, r) {
            var i, o;
            if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
            else
                try {
                    (i = t.clientX), (o = t.clientY);
                } catch (e) {
                    return !1;
                }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
            r && we(t);
            var a = e.display,
                l = a.lineDiv.getBoundingClientRect();
            if (o > l.bottom || !xe(e, n)) return Se(t);
            o -= l.top - a.viewOffset;
            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var c = a.gutters.childNodes[s];
                if (c && c.getBoundingClientRect().right >= i)
                    return ve(e, n, e, nt(e.doc, o), e.display.gutterSpecs[s].className, t), Se(t);
            }
        }
        function Ll(e, t) {
            return Tl(e, t, 'gutterClick', !0);
        }
        function Al(e, t) {
            $n(e.display, t) || _l(e, t) || ye(e, t, 'contextmenu') || C || e.display.input.onContextMenu(t);
        }
        function _l(e, t) {
            return !!xe(e, 'gutterContextMenu') && Tl(e, t, 'gutterContextMenu', !1);
        }
        function Ol(e) {
            (e.display.wrapper.className =
                e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
                e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
                fr(e);
        }
        gl.prototype.compare = function (e, t, n) {
            return this.time + ml > e && 0 == at(t, this.pos) && n == this.button;
        };
        var El = {
                toString: function () {
                    return 'CodeMirror.Init';
                },
            },
            zl = {},
            Pl = {};
        function Fl(e) {
            var t = e.optionHandlers;
            function n(n, r, i, o) {
                (e.defaults[n] = r),
                    i &&
                        (t[n] = o
                            ? function (e, t, n) {
                                  n != El && i(e, t, n);
                              }
                            : i);
            }
            (e.defineOption = n),
                (e.Init = El),
                n(
                    'value',
                    '',
                    function (e, t) {
                        return e.setValue(t);
                    },
                    !0
                ),
                n(
                    'mode',
                    null,
                    function (e, t) {
                        (e.doc.modeOption = t), ho(e);
                    },
                    !0
                ),
                n('indentUnit', 2, ho, !0),
                n('indentWithTabs', !1),
                n('smartIndent', !0),
                n(
                    'tabSize',
                    4,
                    function (e) {
                        mo(e), fr(e), jr(e);
                    },
                    !0
                ),
                n('lineSeparator', null, function (e, t) {
                    if (((e.doc.lineSep = t), t)) {
                        var n = [],
                            r = e.doc.first;
                        e.doc.iter(function (e) {
                            for (var i = 0; ; ) {
                                var o = e.text.indexOf(t, i);
                                if (-1 == o) break;
                                (i = o + t.length), n.push(ot(r, o));
                            }
                            r++;
                        });
                        for (var i = n.length - 1; i >= 0; i--) ia(e.doc, t, n[i], ot(n[i].line, n[i].ch + t.length));
                    }
                }),
                n(
                    'specialChars',
                    /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                    function (e, t, n) {
                        (e.state.specialChars = new RegExp(t.source + (t.test('\t') ? '' : '|\t'), 'g')),
                            n != El && e.refresh();
                    }
                ),
                n(
                    'specialCharPlaceholder',
                    gn,
                    function (e) {
                        return e.refresh();
                    },
                    !0
                ),
                n('electricChars', !0),
                n(
                    'inputStyle',
                    v ? 'contenteditable' : 'textarea',
                    function () {
                        throw new Error('inputStyle can not (yet) be changed in a running editor');
                    },
                    !0
                ),
                n(
                    'spellcheck',
                    !1,
                    function (e, t) {
                        return (e.getInputField().spellcheck = t);
                    },
                    !0
                ),
                n(
                    'autocorrect',
                    !1,
                    function (e, t) {
                        return (e.getInputField().autocorrect = t);
                    },
                    !0
                ),
                n(
                    'autocapitalize',
                    !1,
                    function (e, t) {
                        return (e.getInputField().autocapitalize = t);
                    },
                    !0
                ),
                n('rtlMoveVisually', !x),
                n('wholeLineUpdateBefore', !0),
                n(
                    'theme',
                    'default',
                    function (e) {
                        Ol(e), Yi(e);
                    },
                    !0
                ),
                n('keyMap', 'default', function (e, t, n) {
                    var r = Ua(t),
                        i = n != El && Ua(n);
                    i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
                }),
                n('extraKeys', null),
                n('configureMouse', null),
                n('lineWrapping', !1, Dl, !0),
                n(
                    'gutters',
                    [],
                    function (e, t) {
                        (e.display.gutterSpecs = Xi(t, e.options.lineNumbers)), Yi(e);
                    },
                    !0
                ),
                n(
                    'fixedGutter',
                    !0,
                    function (e, t) {
                        (e.display.gutters.style.left = t ? zr(e.display) + 'px' : '0'), e.refresh();
                    },
                    !0
                ),
                n(
                    'coverGutterNextToScrollbar',
                    !1,
                    function (e) {
                        return yi(e);
                    },
                    !0
                ),
                n(
                    'scrollbarStyle',
                    'native',
                    function (e) {
                        ki(e),
                            yi(e),
                            e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                            e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                    },
                    !0
                ),
                n(
                    'lineNumbers',
                    !1,
                    function (e, t) {
                        (e.display.gutterSpecs = Xi(e.options.gutters, t)), Yi(e);
                    },
                    !0
                ),
                n('firstLineNumber', 1, Yi, !0),
                n(
                    'lineNumberFormatter',
                    function (e) {
                        return e;
                    },
                    Yi,
                    !0
                ),
                n('showCursorWhenSelecting', !1, Br, !0),
                n('resetSelectionOnContextMenu', !0),
                n('lineWiseCopyCut', !0),
                n('pasteLinesPerSelection', !0),
                n('selectionsMayTouch', !1),
                n('readOnly', !1, function (e, t) {
                    'nocursor' == t && (Zr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
                }),
                n('screenReaderLabel', null, function (e, t) {
                    (t = '' === t ? null : t), e.display.input.screenReaderLabelChanged(t);
                }),
                n(
                    'disableInput',
                    !1,
                    function (e, t) {
                        t || e.display.input.reset();
                    },
                    !0
                ),
                n('dragDrop', !0, Nl),
                n('allowDropFileTypes', null),
                n('cursorBlinkRate', 530),
                n('cursorScrollMargin', 0),
                n('cursorHeight', 1, Br, !0),
                n('singleCursorHeightPerLine', !0, Br, !0),
                n('workTime', 100),
                n('workDelay', 100),
                n('flattenSpans', !0, mo, !0),
                n('addModeClass', !1, mo, !0),
                n('pollInterval', 100),
                n('undoDepth', 200, function (e, t) {
                    return (e.doc.history.undoDepth = t);
                }),
                n('historyEventDelay', 1250),
                n(
                    'viewportMargin',
                    10,
                    function (e) {
                        return e.refresh();
                    },
                    !0
                ),
                n('maxHighlightLength', 1e4, mo, !0),
                n('moveInputWithCursor', !0, function (e, t) {
                    t || e.display.input.resetPosition();
                }),
                n('tabindex', null, function (e, t) {
                    return (e.display.input.getField().tabIndex = t || '');
                }),
                n('autofocus', null),
                n(
                    'direction',
                    'ltr',
                    function (e, t) {
                        return e.doc.setDirection(t);
                    },
                    !0
                ),
                n('phrases', null);
        }
        function Nl(e, t, n) {
            if (!t != !(n && n != El)) {
                var r = e.display.dragFunctions,
                    i = t ? he : ge;
                i(e.display.scroller, 'dragstart', r.start),
                    i(e.display.scroller, 'dragenter', r.enter),
                    i(e.display.scroller, 'dragover', r.over),
                    i(e.display.scroller, 'dragleave', r.leave),
                    i(e.display.scroller, 'drop', r.drop);
            }
        }
        function Dl(e) {
            e.options.lineWrapping
                ? (P(e.display.wrapper, 'CodeMirror-wrap'),
                  (e.display.sizer.style.minWidth = ''),
                  (e.display.sizerWidth = null))
                : (T(e.display.wrapper, 'CodeMirror-wrap'), sn(e)),
                Fr(e),
                jr(e),
                fr(e),
                setTimeout(function () {
                    return yi(e);
                }, 100);
        }
        function jl(e, t) {
            var n = this;
            if (!(this instanceof jl)) return new jl(e, t);
            (this.options = t = t ? j(t) : {}), j(zl, t, !1);
            var r = t.value;
            'string' == typeof r
                ? (r = new Ca(r, t.mode, null, t.lineSeparator, t.direction))
                : t.mode && (r.modeOption = t.mode),
                (this.doc = r);
            var i = new jl.inputStyles[t.inputStyle](this),
                o = (this.display = new Zi(e, r, i, t));
            for (var c in ((o.wrapper.CodeMirror = this),
            Ol(this),
            t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
            ki(this),
            (this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: -1,
                cutIncoming: -1,
                selectingText: !1,
                draggingText: !1,
                highlight: new I(),
                keySeq: null,
                specialChars: null,
            }),
            t.autofocus && !v && o.input.focus(),
            a &&
                l < 11 &&
                setTimeout(function () {
                    return n.display.input.reset(!0);
                }, 20),
            Hl(this),
            Ea(),
            Ci(this),
            (this.curOp.forceUpdate = !0),
            bo(this, r),
            (t.autofocus && !v) || this.hasFocus()
                ? setTimeout(function () {
                      n.hasFocus() && !n.state.focused && Yr(n);
                  }, 20)
                : Zr(this),
            Pl))
                Pl.hasOwnProperty(c) && Pl[c](this, t[c], El);
            Ki(this), t.finishInit && t.finishInit(this);
            for (var u = 0; u < Il.length; ++u) Il[u](this);
            Si(this),
                s &&
                    t.lineWrapping &&
                    'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
                    (o.lineDiv.style.textRendering = 'auto');
        }
        function Hl(e) {
            var t = e.display;
            he(t.scroller, 'mousedown', zi(e, yl)),
                he(
                    t.scroller,
                    'dblclick',
                    a && l < 11
                        ? zi(e, function (t) {
                              if (!ye(e, t)) {
                                  var n = Nr(e, t);
                                  if (n && !Ll(e, t) && !$n(e.display, t)) {
                                      we(t);
                                      var r = e.findWordAt(n);
                                      Do(e.doc, r.anchor, r.head);
                                  }
                              }
                          })
                        : function (t) {
                              return ye(e, t) || we(t);
                          }
                ),
                he(t.scroller, 'contextmenu', function (t) {
                    return Al(e, t);
                }),
                he(t.input.getField(), 'contextmenu', function (n) {
                    t.scroller.contains(n.target) || Al(e, n);
                });
            var n,
                r = { end: 0 };
            function i() {
                t.activeTouch &&
                    ((n = setTimeout(function () {
                        return (t.activeTouch = null);
                    }, 1e3)),
                    ((r = t.activeTouch).end = +new Date()));
            }
            function o(e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
            }
            function s(e, t) {
                if (null == t.left) return !0;
                var n = t.left - e.left,
                    r = t.top - e.top;
                return n * n + r * r > 400;
            }
            he(t.scroller, 'touchstart', function (i) {
                if (!ye(e, i) && !o(i) && !Ll(e, i)) {
                    t.input.ensurePolled(), clearTimeout(n);
                    var a = +new Date();
                    (t.activeTouch = { start: a, moved: !1, prev: a - r.end <= 300 ? r : null }),
                        1 == i.touches.length &&
                            ((t.activeTouch.left = i.touches[0].pageX), (t.activeTouch.top = i.touches[0].pageY));
                }
            }),
                he(t.scroller, 'touchmove', function () {
                    t.activeTouch && (t.activeTouch.moved = !0);
                }),
                he(t.scroller, 'touchend', function (n) {
                    var r = t.activeTouch;
                    if (r && !$n(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                        var o,
                            a = e.coordsChar(t.activeTouch, 'page');
                        (o =
                            !r.prev || s(r, r.prev)
                                ? new oo(a, a)
                                : !r.prev.prev || s(r, r.prev.prev)
                                ? e.findWordAt(a)
                                : new oo(ot(a.line, 0), ft(e.doc, ot(a.line + 1, 0)))),
                            e.setSelection(o.anchor, o.head),
                            e.focus(),
                            we(n);
                    }
                    i();
                }),
                he(t.scroller, 'touchcancel', i),
                he(t.scroller, 'scroll', function () {
                    t.scroller.clientHeight &&
                        (fi(e, t.scroller.scrollTop), hi(e, t.scroller.scrollLeft, !0), ve(e, 'scroll', e));
                }),
                he(t.scroller, 'mousewheel', function (t) {
                    return ro(e, t);
                }),
                he(t.scroller, 'DOMMouseScroll', function (t) {
                    return ro(e, t);
                }),
                he(t.wrapper, 'scroll', function () {
                    return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
                }),
                (t.dragFunctions = {
                    enter: function (t) {
                        ye(e, t) || Me(t);
                    },
                    over: function (t) {
                        ye(e, t) || (La(e, t), Me(t));
                    },
                    start: function (t) {
                        return Ta(e, t);
                    },
                    drop: zi(e, Ma),
                    leave: function (t) {
                        ye(e, t) || Aa(e);
                    },
                });
            var c = t.input.getField();
            he(c, 'keyup', function (t) {
                return dl.call(e, t);
            }),
                he(c, 'keydown', zi(e, cl)),
                he(c, 'keypress', zi(e, fl)),
                he(c, 'focus', function (t) {
                    return Yr(e, t);
                }),
                he(c, 'blur', function (t) {
                    return Zr(e, t);
                });
        }
        (jl.defaults = zl), (jl.optionHandlers = Pl);
        var Il = [];
        function ql(e, t, n, r) {
            var i,
                o = e.doc;
            null == n && (n = 'add'), 'smart' == n && (o.mode.indent ? (i = bt(e, t).state) : (n = 'prev'));
            var a = e.options.tabSize,
                l = Ye(o, t),
                s = H(l.text, null, a);
            l.stateAfter && (l.stateAfter = null);
            var c,
                u = l.text.match(/^\s*/)[0];
            if (r || /\S/.test(l.text)) {
                if ('smart' == n && ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == R || c > 150)) {
                    if (!r) return;
                    n = 'prev';
                }
            } else (c = 0), (n = 'not');
            'prev' == n
                ? (c = t > o.first ? H(Ye(o, t - 1).text, null, a) : 0)
                : 'add' == n
                ? (c = s + e.options.indentUnit)
                : 'subtract' == n
                ? (c = s - e.options.indentUnit)
                : 'number' == typeof n && (c = s + n),
                (c = Math.max(0, c));
            var d = '',
                f = 0;
            if (e.options.indentWithTabs) for (var p = Math.floor(c / a); p; --p) (f += a), (d += '\t');
            if ((f < c && (d += K(c - f)), d != u))
                return ia(o, d, ot(t, 0), ot(t, u.length), '+input'), (l.stateAfter = null), !0;
            for (var h = 0; h < o.sel.ranges.length; h++) {
                var m = o.sel.ranges[h];
                if (m.head.line == t && m.head.ch < u.length) {
                    var g = ot(t, u.length);
                    Ho(o, h, new oo(g, g));
                    break;
                }
            }
        }
        jl.defineInitHook = function (e) {
            return Il.push(e);
        };
        var Wl = null;
        function Rl(e) {
            Wl = e;
        }
        function Bl(e, t, n, r, i) {
            var o = e.doc;
            (e.display.shift = !1), r || (r = o.sel);
            var a = +new Date() - 200,
                l = 'paste' == i || e.state.pasteIncoming > a,
                s = Fe(t),
                c = null;
            if (l && r.ranges.length > 1)
                if (Wl && Wl.text.join('\n') == t) {
                    if (r.ranges.length % Wl.text.length == 0) {
                        c = [];
                        for (var u = 0; u < Wl.text.length; u++) c.push(o.splitLines(Wl.text[u]));
                    }
                } else
                    s.length == r.ranges.length &&
                        e.options.pasteLinesPerSelection &&
                        (c = Q(s, function (e) {
                            return [e];
                        }));
            for (var d = e.curOp.updateInput, f = r.ranges.length - 1; f >= 0; f--) {
                var p = r.ranges[f],
                    h = p.from(),
                    m = p.to();
                p.empty() &&
                    (n && n > 0
                        ? (h = ot(h.line, h.ch - n))
                        : e.state.overwrite && !l
                        ? (m = ot(m.line, Math.min(Ye(o, m.line).text.length, m.ch + X(s).length)))
                        : l && Wl && Wl.lineWise && Wl.text.join('\n') == s.join('\n') && (h = m = ot(h.line, 0)));
                var g = {
                    from: h,
                    to: m,
                    text: c ? c[f % c.length] : s,
                    origin: i || (l ? 'paste' : e.state.cutIncoming > a ? 'cut' : '+input'),
                };
                Zo(e.doc, g), _n(e, 'inputRead', e, g);
            }
            t && !l && Ul(e, t),
                li(e),
                e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
                (e.curOp.typing = !0),
                (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function $l(e, t) {
            var n = e.clipboardData && e.clipboardData.getData('Text');
            if (n)
                return (
                    e.preventDefault(),
                    t.isReadOnly() ||
                        t.options.disableInput ||
                        Ei(t, function () {
                            return Bl(t, n, 0, null, 'paste');
                        }),
                    !0
                );
        }
        function Ul(e, t) {
            if (e.options.electricChars && e.options.smartIndent)
                for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var i = n.ranges[r];
                    if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
                        var o = e.getModeAt(i.head),
                            a = !1;
                        if (o.electricChars) {
                            for (var l = 0; l < o.electricChars.length; l++)
                                if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                                    a = ql(e, i.head.line, 'smart');
                                    break;
                                }
                        } else
                            o.electricInput &&
                                o.electricInput.test(Ye(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                                (a = ql(e, i.head.line, 'smart'));
                        a && _n(e, 'electricInput', e, i.head.line);
                    }
                }
        }
        function Vl(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var i = e.doc.sel.ranges[r].head.line,
                    o = { anchor: ot(i, 0), head: ot(i + 1, 0) };
                n.push(o), t.push(e.getRange(o.anchor, o.head));
            }
            return { text: t, ranges: n };
        }
        function Gl(e, t, n, r) {
            e.setAttribute('autocorrect', n ? '' : 'off'),
                e.setAttribute('autocapitalize', r ? '' : 'off'),
                e.setAttribute('spellcheck', !!t);
        }
        function Kl() {
            var e = _(
                    'textarea',
                    null,
                    null,
                    'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
                ),
                t = _('div', [e], null, 'overflow: hidden; position: relative; width: 3px; height: 0px;');
            return (
                s ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
                m && (e.style.border = '1px solid black'),
                Gl(e),
                t
            );
        }
        function Xl(e) {
            var t = e.optionHandlers,
                n = (e.helpers = {});
            (e.prototype = {
                constructor: e,
                focus: function () {
                    window.focus(), this.display.input.focus();
                },
                setOption: function (e, n) {
                    var r = this.options,
                        i = r[e];
                    (r[e] == n && 'mode' != e) ||
                        ((r[e] = n),
                        t.hasOwnProperty(e) && zi(this, t[e])(this, n, i),
                        ve(this, 'optionChange', this, e));
                },
                getOption: function (e) {
                    return this.options[e];
                },
                getDoc: function () {
                    return this.doc;
                },
                addKeyMap: function (e, t) {
                    this.state.keyMaps[t ? 'push' : 'unshift'](Ua(e));
                },
                removeKeyMap: function (e) {
                    for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                        if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
                },
                addOverlay: Pi(function (t, n) {
                    var r = t.token ? t : e.getMode(this.options, t);
                    if (r.startState) throw new Error('Overlays may not be stateful.');
                    Y(
                        this.state.overlays,
                        { mode: r, modeSpec: t, opaque: n && n.opaque, priority: (n && n.priority) || 0 },
                        function (e) {
                            return e.priority;
                        }
                    ),
                        this.state.modeGen++,
                        jr(this);
                }),
                removeOverlay: Pi(function (e) {
                    for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                        var r = t[n].modeSpec;
                        if (r == e || ('string' == typeof e && r.name == e))
                            return t.splice(n, 1), this.state.modeGen++, void jr(this);
                    }
                }),
                indentLine: Pi(function (e, t, n) {
                    'string' != typeof t &&
                        'number' != typeof t &&
                        (t = null == t ? (this.options.smartIndent ? 'smart' : 'prev') : t ? 'add' : 'subtract'),
                        rt(this.doc, e) && ql(this, e, t, n);
                }),
                indentSelection: Pi(function (e) {
                    for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.empty())
                            i.head.line > n &&
                                (ql(this, i.head.line, e, !0),
                                (n = i.head.line),
                                r == this.doc.sel.primIndex && li(this));
                        else {
                            var o = i.from(),
                                a = i.to(),
                                l = Math.max(n, o.line);
                            n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                            for (var s = l; s < n; ++s) ql(this, s, e);
                            var c = this.doc.sel.ranges;
                            0 == o.ch &&
                                t.length == c.length &&
                                c[r].from().ch > 0 &&
                                Ho(this.doc, r, new oo(o, c[r].to()), B);
                        }
                    }
                }),
                getTokenAt: function (e, t) {
                    return St(this, e, t);
                },
                getLineTokens: function (e, t) {
                    return St(this, ot(e), t, !0);
                },
                getTokenTypeAt: function (e) {
                    e = ft(this.doc, e);
                    var t,
                        n = yt(this, Ye(this.doc, e.line)),
                        r = 0,
                        i = (n.length - 1) / 2,
                        o = e.ch;
                    if (0 == o) t = n[2];
                    else
                        for (;;) {
                            var a = (r + i) >> 1;
                            if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                            else {
                                if (!(n[2 * a + 1] < o)) {
                                    t = n[2 * a + 2];
                                    break;
                                }
                                r = a + 1;
                            }
                        }
                    var l = t ? t.indexOf('overlay ') : -1;
                    return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
                },
                getModeAt: function (t) {
                    var n = this.doc.mode;
                    return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
                },
                getHelper: function (e, t) {
                    return this.getHelpers(e, t)[0];
                },
                getHelpers: function (e, t) {
                    var r = [];
                    if (!n.hasOwnProperty(t)) return r;
                    var i = n[t],
                        o = this.getModeAt(e);
                    if ('string' == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                    else if (o[t])
                        for (var a = 0; a < o[t].length; a++) {
                            var l = i[o[t][a]];
                            l && r.push(l);
                        }
                    else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                    for (var s = 0; s < i._global.length; s++) {
                        var c = i._global[s];
                        c.pred(o, this) && -1 == q(r, c.val) && r.push(c.val);
                    }
                    return r;
                },
                getStateAfter: function (e, t) {
                    var n = this.doc;
                    return bt(this, (e = dt(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
                },
                cursorCoords: function (e, t) {
                    var n = this.doc.sel.primary();
                    return br(
                        this,
                        null == e ? n.head : 'object' == typeof e ? ft(this.doc, e) : e ? n.from() : n.to(),
                        t || 'page'
                    );
                },
                charCoords: function (e, t) {
                    return yr(this, ft(this.doc, e), t || 'page');
                },
                coordsChar: function (e, t) {
                    return wr(this, (e = vr(this, e, t || 'page')).left, e.top);
                },
                lineAtHeight: function (e, t) {
                    return (
                        (e = vr(this, { top: e, left: 0 }, t || 'page').top), nt(this.doc, e + this.display.viewOffset)
                    );
                },
                heightAtLine: function (e, t, n) {
                    var r,
                        i = !1;
                    if ('number' == typeof e) {
                        var o = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (r = Ye(this.doc, e));
                    } else r = e;
                    return (
                        gr(this, r, { top: 0, left: 0 }, t || 'page', n || i).top + (i ? this.doc.height - an(r) : 0)
                    );
                },
                defaultTextHeight: function () {
                    return _r(this.display);
                },
                defaultCharWidth: function () {
                    return Or(this.display);
                },
                getViewport: function () {
                    return { from: this.display.viewFrom, to: this.display.viewTo };
                },
                addWidget: function (e, t, n, r, i) {
                    var o = this.display,
                        a = (e = br(this, ft(this.doc, e))).bottom,
                        l = e.left;
                    if (
                        ((t.style.position = 'absolute'),
                        t.setAttribute('cm-ignore-events', 'true'),
                        this.display.input.setUneditable(t),
                        o.sizer.appendChild(t),
                        'over' == r)
                    )
                        a = e.top;
                    else if ('above' == r || 'near' == r) {
                        var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                            c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                        ('above' == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight
                            ? (a = e.top - t.offsetHeight)
                            : e.bottom + t.offsetHeight <= s && (a = e.bottom),
                            l + t.offsetWidth > c && (l = c - t.offsetWidth);
                    }
                    (t.style.top = a + 'px'),
                        (t.style.left = t.style.right = ''),
                        'right' == i
                            ? ((l = o.sizer.clientWidth - t.offsetWidth), (t.style.right = '0px'))
                            : ('left' == i ? (l = 0) : 'middle' == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2),
                              (t.style.left = l + 'px')),
                        n && ii(this, { left: l, top: a, right: l + t.offsetWidth, bottom: a + t.offsetHeight });
                },
                triggerOnKeyDown: Pi(cl),
                triggerOnKeyPress: Pi(fl),
                triggerOnKeyUp: dl,
                triggerOnMouseDown: Pi(yl),
                execCommand: function (e) {
                    if (Ya.hasOwnProperty(e)) return Ya[e].call(null, this);
                },
                triggerElectric: Pi(function (e) {
                    Ul(this, e);
                }),
                findPosH: function (e, t, n, r) {
                    var i = 1;
                    t < 0 && ((i = -1), (t = -t));
                    for (var o = ft(this.doc, e), a = 0; a < t && !(o = Ql(this.doc, o, i, n, r)).hitSide; ++a);
                    return o;
                },
                moveH: Pi(function (e, t) {
                    var n = this;
                    this.extendSelectionsBy(function (r) {
                        return n.display.shift || n.doc.extend || r.empty()
                            ? Ql(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                            : e < 0
                            ? r.from()
                            : r.to();
                    }, U);
                }),
                deleteH: Pi(function (e, t) {
                    var n = this.doc.sel,
                        r = this.doc;
                    n.somethingSelected()
                        ? r.replaceSelection('', null, '+delete')
                        : Va(this, function (n) {
                              var i = Ql(r, n.head, e, t, !1);
                              return e < 0 ? { from: i, to: n.head } : { from: n.head, to: i };
                          });
                }),
                findPosV: function (e, t, n, r) {
                    var i = 1,
                        o = r;
                    t < 0 && ((i = -1), (t = -t));
                    for (var a = ft(this.doc, e), l = 0; l < t; ++l) {
                        var s = br(this, a, 'div');
                        if ((null == o ? (o = s.left) : (s.left = o), (a = Yl(this, s, i, n)).hitSide)) break;
                    }
                    return a;
                },
                moveV: Pi(function (e, t) {
                    var n = this,
                        r = this.doc,
                        i = [],
                        o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                    if (
                        (r.extendSelectionsBy(function (a) {
                            if (o) return e < 0 ? a.from() : a.to();
                            var l = br(n, a.head, 'div');
                            null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
                            var s = Yl(n, l, e, t);
                            return 'page' == t && a == r.sel.primary() && ai(n, yr(n, s, 'div').top - l.top), s;
                        }, U),
                        i.length)
                    )
                        for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a];
                }),
                findWordAt: function (e) {
                    var t = Ye(this.doc, e.line).text,
                        n = e.ch,
                        r = e.ch;
                    if (t) {
                        var i = this.getHelper(e, 'wordChars');
                        ('before' != e.sticky && r != t.length) || !n ? ++r : --n;
                        for (
                            var o = t.charAt(n),
                                a = ne(o, i)
                                    ? function (e) {
                                          return ne(e, i);
                                      }
                                    : /\s/.test(o)
                                    ? function (e) {
                                          return /\s/.test(e);
                                      }
                                    : function (e) {
                                          return !/\s/.test(e) && !ne(e);
                                      };
                            n > 0 && a(t.charAt(n - 1));

                        )
                            --n;
                        for (; r < t.length && a(t.charAt(r)); ) ++r;
                    }
                    return new oo(ot(e.line, n), ot(e.line, r));
                },
                toggleOverwrite: function (e) {
                    (null != e && e == this.state.overwrite) ||
                        ((this.state.overwrite = !this.state.overwrite)
                            ? P(this.display.cursorDiv, 'CodeMirror-overwrite')
                            : T(this.display.cursorDiv, 'CodeMirror-overwrite'),
                        ve(this, 'overwriteToggle', this, this.state.overwrite));
                },
                hasFocus: function () {
                    return this.display.input.getField() == z();
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit);
                },
                scrollTo: Pi(function (e, t) {
                    si(this, e, t);
                }),
                getScrollInfo: function () {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - Kn(this) - this.display.barHeight,
                        width: e.scrollWidth - Kn(this) - this.display.barWidth,
                        clientHeight: Qn(this),
                        clientWidth: Xn(this),
                    };
                },
                scrollIntoView: Pi(function (e, t) {
                    null == e
                        ? ((e = { from: this.doc.sel.primary().head, to: null }),
                          null == t && (t = this.options.cursorScrollMargin))
                        : 'number' == typeof e
                        ? (e = { from: ot(e, 0), to: null })
                        : null == e.from && (e = { from: e, to: null }),
                        e.to || (e.to = e.from),
                        (e.margin = t || 0),
                        null != e.from.line ? ci(this, e) : di(this, e.from, e.to, e.margin);
                }),
                setSize: Pi(function (e, t) {
                    var n = this,
                        r = function (e) {
                            return 'number' == typeof e || /^\d+$/.test(String(e)) ? e + 'px' : e;
                        };
                    null != e && (this.display.wrapper.style.width = r(e)),
                        null != t && (this.display.wrapper.style.height = r(t)),
                        this.options.lineWrapping && dr(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function (e) {
                        if (e.widgets)
                            for (var t = 0; t < e.widgets.length; t++)
                                if (e.widgets[t].noHScroll) {
                                    Hr(n, i, 'widget');
                                    break;
                                }
                        ++i;
                    }),
                        (this.curOp.forceUpdate = !0),
                        ve(this, 'refresh', this);
                }),
                operation: function (e) {
                    return Ei(this, e);
                },
                startOperation: function () {
                    return Ci(this);
                },
                endOperation: function () {
                    return Si(this);
                },
                refresh: Pi(function () {
                    var e = this.display.cachedTextHeight;
                    jr(this),
                        (this.curOp.forceUpdate = !0),
                        fr(this),
                        si(this, this.doc.scrollLeft, this.doc.scrollTop),
                        Ui(this.display),
                        (null == e || Math.abs(e - _r(this.display)) > 0.5 || this.options.lineWrapping) && Fr(this),
                        ve(this, 'refresh', this);
                }),
                swapDoc: Pi(function (e) {
                    var t = this.doc;
                    return (
                        (t.cm = null),
                        this.state.selectingText && this.state.selectingText(),
                        bo(this, e),
                        fr(this),
                        this.display.input.reset(),
                        si(this, e.scrollLeft, e.scrollTop),
                        (this.curOp.forceScroll = !0),
                        _n(this, 'swapDoc', this, t),
                        t
                    );
                }),
                phrase: function (e) {
                    var t = this.options.phrases;
                    return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
                },
                getInputField: function () {
                    return this.display.input.getField();
                },
                getWrapperElement: function () {
                    return this.display.wrapper;
                },
                getScrollerElement: function () {
                    return this.display.scroller;
                },
                getGutterElement: function () {
                    return this.display.gutters;
                },
            }),
                ke(e),
                (e.registerHelper = function (t, r, i) {
                    n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), (n[t][r] = i);
                }),
                (e.registerGlobalHelper = function (t, r, i, o) {
                    e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
                });
        }
        function Ql(e, t, n, r, i) {
            var o = t,
                a = n,
                l = Ye(e, t.line),
                s = i && 'rtl' == e.direction ? -n : n;
            function c() {
                var n = t.line + s;
                return !(n < e.first || n >= e.first + e.size) && ((t = new ot(n, t.ch, t.sticky)), (l = Ye(e, n)));
            }
            function u(o) {
                var a;
                if ('codepoint' == r) {
                    var u = l.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
                    a = isNaN(u)
                        ? null
                        : new ot(
                              t.line,
                              Math.max(0, Math.min(l.text.length, t.ch + n * (u >= 55296 && u < 56320 ? 2 : 1))),
                              -n
                          );
                } else a = i ? Qa(e.cm, l, t, n) : Ka(l, t, n);
                if (null == a) {
                    if (o || !c()) return !1;
                    t = Xa(i, e.cm, l, t.line, s);
                } else t = a;
                return !0;
            }
            if ('char' == r || 'codepoint' == r) u();
            else if ('column' == r) u(!0);
            else if ('word' == r || 'group' == r)
                for (
                    var d = null, f = 'group' == r, p = e.cm && e.cm.getHelper(t, 'wordChars'), h = !0;
                    !(n < 0) || u(!h);
                    h = !1
                ) {
                    var m = l.text.charAt(t.ch) || '\n',
                        g = ne(m, p) ? 'w' : f && '\n' == m ? 'n' : !f || /\s/.test(m) ? null : 'p';
                    if ((!f || h || g || (g = 's'), d && d != g)) {
                        n < 0 && ((n = 1), u(), (t.sticky = 'after'));
                        break;
                    }
                    if ((g && (d = g), n > 0 && !u(!h))) break;
                }
            var v = Ko(e, t, o, a, !0);
            return lt(o, v) && (v.hitSide = !0), v;
        }
        function Yl(e, t, n, r) {
            var i,
                o,
                a = e.doc,
                l = t.left;
            if ('page' == r) {
                var s = Math.min(
                        e.display.wrapper.clientHeight,
                        window.innerHeight || document.documentElement.clientHeight
                    ),
                    c = Math.max(s - 0.5 * _r(e.display), 3);
                i = (n > 0 ? t.bottom : t.top) + n * c;
            } else 'line' == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
            for (; (o = wr(e, l, i)).outside; ) {
                if (n < 0 ? i <= 0 : i >= a.height) {
                    o.hitSide = !0;
                    break;
                }
                i += 5 * n;
            }
            return o;
        }
        var Zl = function (e) {
            (this.cm = e),
                (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
                (this.polling = new I()),
                (this.composing = null),
                (this.gracePeriod = !1),
                (this.readDOMTimeout = null);
        };
        function Jl(e, t) {
            var n = tr(e, t.line);
            if (!n || n.hidden) return null;
            var r = Ye(e.doc, t.line),
                i = Zn(n, r, t.line),
                o = fe(r, e.doc.direction),
                a = 'left';
            o && (a = ue(o, t.ch) % 2 ? 'right' : 'left');
            var l = ar(i.map, t.ch, a);
            return (l.offset = 'right' == l.collapse ? l.end : l.start), l;
        }
        function es(e) {
            for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
            return !1;
        }
        function ts(e, t) {
            return t && (e.bad = !0), e;
        }
        function ns(e, t, n, r, i) {
            var o = '',
                a = !1,
                l = e.doc.lineSeparator(),
                s = !1;
            function c(e) {
                return function (t) {
                    return t.id == e;
                };
            }
            function u() {
                a && ((o += l), s && (o += l), (a = s = !1));
            }
            function d(e) {
                e && (u(), (o += e));
            }
            function f(t) {
                if (1 == t.nodeType) {
                    var n = t.getAttribute('cm-text');
                    if (n) return void d(n);
                    var o,
                        p = t.getAttribute('cm-marker');
                    if (p) {
                        var h = e.findMarks(ot(r, 0), ot(i + 1, 0), c(+p));
                        return void (h.length && (o = h[0].find(0)) && d(Ze(e.doc, o.from, o.to).join(l)));
                    }
                    if ('false' == t.getAttribute('contenteditable')) return;
                    var m = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                    if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                    m && u();
                    for (var g = 0; g < t.childNodes.length; g++) f(t.childNodes[g]);
                    /^(pre|p)$/i.test(t.nodeName) && (s = !0), m && (a = !0);
                } else 3 == t.nodeType && d(t.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
            }
            for (; f(t), t != n; ) (t = t.nextSibling), (s = !1);
            return o;
        }
        function rs(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
                if (!(r = e.display.lineDiv.childNodes[n])) return ts(e.clipPos(ot(e.display.viewTo - 1)), !0);
                (t = null), (n = 0);
            } else
                for (r = t; ; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv) return null;
                    if (r.parentNode && r.parentNode == e.display.lineDiv) break;
                }
            for (var i = 0; i < e.display.view.length; i++) {
                var o = e.display.view[i];
                if (o.node == r) return is(o, t, n);
            }
        }
        function is(e, t, n) {
            var r = e.text.firstChild,
                i = !1;
            if (!t || !E(r, t)) return ts(ot(tt(e.line), 0), !0);
            if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
                var o = e.rest ? X(e.rest) : e.line;
                return ts(ot(tt(o), o.text.length), i);
            }
            var a = 3 == t.nodeType ? t : null,
                l = t;
            for (
                a ||
                1 != t.childNodes.length ||
                3 != t.firstChild.nodeType ||
                ((a = t.firstChild), n && (n = a.nodeValue.length));
                l.parentNode != r;

            )
                l = l.parentNode;
            var s = e.measure,
                c = s.maps;
            function u(t, n, r) {
                for (var i = -1; i < (c ? c.length : 0); i++)
                    for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
                        var l = o[a + 2];
                        if (l == t || l == n) {
                            var u = tt(i < 0 ? e.line : e.rest[i]),
                                d = o[a] + r;
                            return (r < 0 || l != t) && (d = o[a + (r ? 1 : 0)]), ot(u, d);
                        }
                    }
            }
            var d = u(a, l, n);
            if (d) return ts(d, i);
            for (var f = l.nextSibling, p = a ? a.nodeValue.length - n : 0; f; f = f.nextSibling) {
                if ((d = u(f, f.firstChild, 0))) return ts(ot(d.line, d.ch - p), i);
                p += f.textContent.length;
            }
            for (var h = l.previousSibling, m = n; h; h = h.previousSibling) {
                if ((d = u(h, h.firstChild, -1))) return ts(ot(d.line, d.ch + m), i);
                m += h.textContent.length;
            }
        }
        (Zl.prototype.init = function (e) {
            var t = this,
                n = this,
                r = n.cm,
                i = (n.div = e.lineDiv);
            function o(e) {
                for (var t = e.target; t; t = t.parentNode) {
                    if (t == i) return !0;
                    if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
                }
                return !1;
            }
            function a(e) {
                if (o(e) && !ye(r, e)) {
                    if (r.somethingSelected())
                        Rl({ lineWise: !1, text: r.getSelections() }),
                            'cut' == e.type && r.replaceSelection('', null, 'cut');
                    else {
                        if (!r.options.lineWiseCopyCut) return;
                        var t = Vl(r);
                        Rl({ lineWise: !0, text: t.text }),
                            'cut' == e.type &&
                                r.operation(function () {
                                    r.setSelections(t.ranges, 0, B), r.replaceSelection('', null, 'cut');
                                });
                    }
                    if (e.clipboardData) {
                        e.clipboardData.clearData();
                        var a = Wl.text.join('\n');
                        if ((e.clipboardData.setData('Text', a), e.clipboardData.getData('Text') == a))
                            return void e.preventDefault();
                    }
                    var l = Kl(),
                        s = l.firstChild;
                    r.display.lineSpace.insertBefore(l, r.display.lineSpace.firstChild), (s.value = Wl.text.join('\n'));
                    var c = document.activeElement;
                    N(s),
                        setTimeout(function () {
                            r.display.lineSpace.removeChild(l), c.focus(), c == i && n.showPrimarySelection();
                        }, 50);
                }
            }
            Gl(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
                he(i, 'paste', function (e) {
                    !o(e) ||
                        ye(r, e) ||
                        $l(e, r) ||
                        (l <= 11 &&
                            setTimeout(
                                zi(r, function () {
                                    return t.updateFromDOM();
                                }),
                                20
                            ));
                }),
                he(i, 'compositionstart', function (e) {
                    t.composing = { data: e.data, done: !1 };
                }),
                he(i, 'compositionupdate', function (e) {
                    t.composing || (t.composing = { data: e.data, done: !1 });
                }),
                he(i, 'compositionend', function (e) {
                    t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
                }),
                he(i, 'touchstart', function () {
                    return n.forceCompositionEnd();
                }),
                he(i, 'input', function () {
                    t.composing || t.readFromDOMSoon();
                }),
                he(i, 'copy', a),
                he(i, 'cut', a);
        }),
            (Zl.prototype.screenReaderLabelChanged = function (e) {
                e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label');
            }),
            (Zl.prototype.prepareSelection = function () {
                var e = $r(this.cm, !1);
                return (e.focus = document.activeElement == this.div), e;
            }),
            (Zl.prototype.showSelection = function (e, t) {
                e &&
                    this.cm.display.view.length &&
                    ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
            }),
            (Zl.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection();
            }),
            (Zl.prototype.showPrimarySelection = function () {
                var e = this.getSelection(),
                    t = this.cm,
                    r = t.doc.sel.primary(),
                    i = r.from(),
                    o = r.to();
                if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom)
                    e.removeAllRanges();
                else {
                    var a = rs(t, e.anchorNode, e.anchorOffset),
                        l = rs(t, e.focusNode, e.focusOffset);
                    if (!a || a.bad || !l || l.bad || 0 != at(ut(a, l), i) || 0 != at(ct(a, l), o)) {
                        var s = t.display.view,
                            c = (i.line >= t.display.viewFrom && Jl(t, i)) || { node: s[0].measure.map[2], offset: 0 },
                            u = o.line < t.display.viewTo && Jl(t, o);
                        if (!u) {
                            var d = s[s.length - 1].measure,
                                f = d.maps ? d.maps[d.maps.length - 1] : d.map;
                            u = { node: f[f.length - 1], offset: f[f.length - 2] - f[f.length - 3] };
                        }
                        if (c && u) {
                            var p,
                                h = e.rangeCount && e.getRangeAt(0);
                            try {
                                p = M(c.node, c.offset, u.offset, u.node);
                            } catch (e) {}
                            p &&
                                (!n && t.state.focused
                                    ? (e.collapse(c.node, c.offset),
                                      p.collapsed || (e.removeAllRanges(), e.addRange(p)))
                                    : (e.removeAllRanges(), e.addRange(p)),
                                h && null == e.anchorNode ? e.addRange(h) : n && this.startGracePeriod()),
                                this.rememberSelection();
                        } else e.removeAllRanges();
                    }
                }
            }),
            (Zl.prototype.startGracePeriod = function () {
                var e = this;
                clearTimeout(this.gracePeriod),
                    (this.gracePeriod = setTimeout(function () {
                        (e.gracePeriod = !1),
                            e.selectionChanged() &&
                                e.cm.operation(function () {
                                    return (e.cm.curOp.selectionChanged = !0);
                                });
                    }, 20));
            }),
            (Zl.prototype.showMultipleSelections = function (e) {
                A(this.cm.display.cursorDiv, e.cursors), A(this.cm.display.selectionDiv, e.selection);
            }),
            (Zl.prototype.rememberSelection = function () {
                var e = this.getSelection();
                (this.lastAnchorNode = e.anchorNode),
                    (this.lastAnchorOffset = e.anchorOffset),
                    (this.lastFocusNode = e.focusNode),
                    (this.lastFocusOffset = e.focusOffset);
            }),
            (Zl.prototype.selectionInEditor = function () {
                var e = this.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return E(this.div, t);
            }),
            (Zl.prototype.focus = function () {
                'nocursor' != this.cm.options.readOnly &&
                    ((this.selectionInEditor() && document.activeElement == this.div) ||
                        this.showSelection(this.prepareSelection(), !0),
                    this.div.focus());
            }),
            (Zl.prototype.blur = function () {
                this.div.blur();
            }),
            (Zl.prototype.getField = function () {
                return this.div;
            }),
            (Zl.prototype.supportsTouch = function () {
                return !0;
            }),
            (Zl.prototype.receivedFocus = function () {
                var e = this;
                function t() {
                    e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
                }
                this.selectionInEditor()
                    ? this.pollSelection()
                    : Ei(this.cm, function () {
                          return (e.cm.curOp.selectionChanged = !0);
                      }),
                    this.polling.set(this.cm.options.pollInterval, t);
            }),
            (Zl.prototype.selectionChanged = function () {
                var e = this.getSelection();
                return (
                    e.anchorNode != this.lastAnchorNode ||
                    e.anchorOffset != this.lastAnchorOffset ||
                    e.focusNode != this.lastFocusNode ||
                    e.focusOffset != this.lastFocusOffset
                );
            }),
            (Zl.prototype.pollSelection = function () {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = this.getSelection(),
                        t = this.cm;
                    if (g && u && this.cm.display.gutterSpecs.length && es(e.anchorNode))
                        return (
                            this.cm.triggerOnKeyDown({ type: 'keydown', keyCode: 8, preventDefault: Math.abs }),
                            this.blur(),
                            void this.focus()
                        );
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = rs(t, e.anchorNode, e.anchorOffset),
                            r = rs(t, e.focusNode, e.focusOffset);
                        n &&
                            r &&
                            Ei(t, function () {
                                Ro(t.doc, lo(n, r), B), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                            });
                    }
                }
            }),
            (Zl.prototype.pollContent = function () {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
                var e,
                    t,
                    n,
                    r = this.cm,
                    i = r.display,
                    o = r.doc.sel.primary(),
                    a = o.from(),
                    l = o.to();
                if (
                    (0 == a.ch && a.line > r.firstLine() && (a = ot(a.line - 1, Ye(r.doc, a.line - 1).length)),
                    l.ch == Ye(r.doc, l.line).text.length && l.line < r.lastLine() && (l = ot(l.line + 1, 0)),
                    a.line < i.viewFrom || l.line > i.viewTo - 1)
                )
                    return !1;
                a.line == i.viewFrom || 0 == (e = Dr(r, a.line))
                    ? ((t = tt(i.view[0].line)), (n = i.view[0].node))
                    : ((t = tt(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
                var s,
                    c,
                    u = Dr(r, l.line);
                if (
                    (u == i.view.length - 1
                        ? ((s = i.viewTo - 1), (c = i.lineDiv.lastChild))
                        : ((s = tt(i.view[u + 1].line) - 1), (c = i.view[u + 1].node.previousSibling)),
                    !n)
                )
                    return !1;
                for (
                    var d = r.doc.splitLines(ns(r, n, c, t, s)),
                        f = Ze(r.doc, ot(t, 0), ot(s, Ye(r.doc, s).text.length));
                    d.length > 1 && f.length > 1;

                )
                    if (X(d) == X(f)) d.pop(), f.pop(), s--;
                    else {
                        if (d[0] != f[0]) break;
                        d.shift(), f.shift(), t++;
                    }
                for (
                    var p = 0, h = 0, m = d[0], g = f[0], v = Math.min(m.length, g.length);
                    p < v && m.charCodeAt(p) == g.charCodeAt(p);

                )
                    ++p;
                for (
                    var y = X(d),
                        b = X(f),
                        x = Math.min(y.length - (1 == d.length ? p : 0), b.length - (1 == f.length ? p : 0));
                    h < x && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);

                )
                    ++h;
                if (1 == d.length && 1 == f.length && t == a.line)
                    for (; p && p > a.ch && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1); )
                        p--, h++;
                (d[d.length - 1] = y.slice(0, y.length - h).replace(/^\u200b+/, '')),
                    (d[0] = d[0].slice(p).replace(/\u200b+$/, ''));
                var k = ot(t, p),
                    w = ot(s, f.length ? X(f).length - h : 0);
                return d.length > 1 || d[0] || at(k, w) ? (ia(r.doc, d, k, w, '+input'), !0) : void 0;
            }),
            (Zl.prototype.ensurePolled = function () {
                this.forceCompositionEnd();
            }),
            (Zl.prototype.reset = function () {
                this.forceCompositionEnd();
            }),
            (Zl.prototype.forceCompositionEnd = function () {
                this.composing &&
                    (clearTimeout(this.readDOMTimeout),
                    (this.composing = null),
                    this.updateFromDOM(),
                    this.div.blur(),
                    this.div.focus());
            }),
            (Zl.prototype.readFromDOMSoon = function () {
                var e = this;
                null == this.readDOMTimeout &&
                    (this.readDOMTimeout = setTimeout(function () {
                        if (((e.readDOMTimeout = null), e.composing)) {
                            if (!e.composing.done) return;
                            e.composing = null;
                        }
                        e.updateFromDOM();
                    }, 80));
            }),
            (Zl.prototype.updateFromDOM = function () {
                var e = this;
                (!this.cm.isReadOnly() && this.pollContent()) ||
                    Ei(this.cm, function () {
                        return jr(e.cm);
                    });
            }),
            (Zl.prototype.setUneditable = function (e) {
                e.contentEditable = 'false';
            }),
            (Zl.prototype.onKeyPress = function (e) {
                0 == e.charCode ||
                    this.composing ||
                    (e.preventDefault(),
                    this.cm.isReadOnly() ||
                        zi(this.cm, Bl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
            }),
            (Zl.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String('nocursor' != e);
            }),
            (Zl.prototype.onContextMenu = function () {}),
            (Zl.prototype.resetPosition = function () {}),
            (Zl.prototype.needsContentAttribute = !0);
        var os = function (e) {
            (this.cm = e),
                (this.prevInput = ''),
                (this.pollingFast = !1),
                (this.polling = new I()),
                (this.hasSelection = !1),
                (this.composing = null);
        };
        function as(e, t) {
            if (
                (((t = t ? j(t) : {}).value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
                null == t.autofocus)
            ) {
                var n = z();
                t.autofocus = n == e || (null != e.getAttribute('autofocus') && n == document.body);
            }
            function r() {
                e.value = l.getValue();
            }
            var i;
            if (e.form && (he(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                    var a = (o.submit = function () {
                        r(), (o.submit = i), o.submit(), (o.submit = a);
                    });
                } catch (e) {}
            }
            (t.finishInit = function (n) {
                (n.save = r),
                    (n.getTextArea = function () {
                        return e;
                    }),
                    (n.toTextArea = function () {
                        (n.toTextArea = isNaN),
                            r(),
                            e.parentNode.removeChild(n.getWrapperElement()),
                            (e.style.display = ''),
                            e.form &&
                                (ge(e.form, 'submit', r),
                                t.leaveSubmitMethodAlone || 'function' != typeof e.form.submit || (e.form.submit = i));
                    });
            }),
                (e.style.display = 'none');
            var l = jl(function (t) {
                return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return l;
        }
        function ls(e) {
            (e.off = ge),
                (e.on = he),
                (e.wheelEventPixels = no),
                (e.Doc = Ca),
                (e.splitLines = Fe),
                (e.countColumn = H),
                (e.findColumn = V),
                (e.isWordChar = te),
                (e.Pass = R),
                (e.signal = ve),
                (e.Line = cn),
                (e.changeEnd = so),
                (e.scrollbarModel = xi),
                (e.Pos = ot),
                (e.cmpPos = at),
                (e.modes = Ie),
                (e.mimeModes = qe),
                (e.resolveMode = Be),
                (e.getMode = $e),
                (e.modeExtensions = Ue),
                (e.extendMode = Ve),
                (e.copyState = Ge),
                (e.startState = Xe),
                (e.innerMode = Ke),
                (e.commands = Ya),
                (e.keyMap = Ha),
                (e.keyName = $a),
                (e.isModifierKey = Ra),
                (e.lookupKey = Wa),
                (e.normalizeKeyMap = qa),
                (e.StringStream = Qe),
                (e.SharedTextMarker = va),
                (e.TextMarker = ma),
                (e.LineWidget = da),
                (e.e_preventDefault = we),
                (e.e_stopPropagation = Ce),
                (e.e_stop = Me),
                (e.addClass = P),
                (e.contains = E),
                (e.rmClass = T),
                (e.keyNames = Fa);
        }
        (os.prototype.init = function (e) {
            var t = this,
                n = this,
                r = this.cm;
            this.createField(e);
            var i = this.textarea;
            function o(e) {
                if (!ye(r, e)) {
                    if (r.somethingSelected()) Rl({ lineWise: !1, text: r.getSelections() });
                    else {
                        if (!r.options.lineWiseCopyCut) return;
                        var t = Vl(r);
                        Rl({ lineWise: !0, text: t.text }),
                            'cut' == e.type
                                ? r.setSelections(t.ranges, null, B)
                                : ((n.prevInput = ''), (i.value = t.text.join('\n')), N(i));
                    }
                    'cut' == e.type && (r.state.cutIncoming = +new Date());
                }
            }
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
                m && (i.style.width = '0px'),
                he(i, 'input', function () {
                    a && l >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
                }),
                he(i, 'paste', function (e) {
                    ye(r, e) || $l(e, r) || ((r.state.pasteIncoming = +new Date()), n.fastPoll());
                }),
                he(i, 'cut', o),
                he(i, 'copy', o),
                he(e.scroller, 'paste', function (t) {
                    if (!$n(e, t) && !ye(r, t)) {
                        if (!i.dispatchEvent) return (r.state.pasteIncoming = +new Date()), void n.focus();
                        var o = new Event('paste');
                        (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
                    }
                }),
                he(e.lineSpace, 'selectstart', function (t) {
                    $n(e, t) || we(t);
                }),
                he(i, 'compositionstart', function () {
                    var e = r.getCursor('from');
                    n.composing && n.composing.range.clear(),
                        (n.composing = {
                            start: e,
                            range: r.markText(e, r.getCursor('to'), { className: 'CodeMirror-composing' }),
                        });
                }),
                he(i, 'compositionend', function () {
                    n.composing && (n.poll(), n.composing.range.clear(), (n.composing = null));
                });
        }),
            (os.prototype.createField = function (e) {
                (this.wrapper = Kl()), (this.textarea = this.wrapper.firstChild);
            }),
            (os.prototype.screenReaderLabelChanged = function (e) {
                e ? this.textarea.setAttribute('aria-label', e) : this.textarea.removeAttribute('aria-label');
            }),
            (os.prototype.prepareSelection = function () {
                var e = this.cm,
                    t = e.display,
                    n = e.doc,
                    r = $r(e);
                if (e.options.moveInputWithCursor) {
                    var i = br(e, n.sel.primary().head, 'div'),
                        o = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    (r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top))),
                        (r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)));
                }
                return r;
            }),
            (os.prototype.showSelection = function (e) {
                var t = this.cm.display;
                A(t.cursorDiv, e.cursors),
                    A(t.selectionDiv, e.selection),
                    null != e.teTop &&
                        ((this.wrapper.style.top = e.teTop + 'px'), (this.wrapper.style.left = e.teLeft + 'px'));
            }),
            (os.prototype.reset = function (e) {
                if (!this.contextMenuPending && !this.composing) {
                    var t = this.cm;
                    if (t.somethingSelected()) {
                        this.prevInput = '';
                        var n = t.getSelection();
                        (this.textarea.value = n),
                            t.state.focused && N(this.textarea),
                            a && l >= 9 && (this.hasSelection = n);
                    } else
                        e || ((this.prevInput = this.textarea.value = ''), a && l >= 9 && (this.hasSelection = null));
                }
            }),
            (os.prototype.getField = function () {
                return this.textarea;
            }),
            (os.prototype.supportsTouch = function () {
                return !1;
            }),
            (os.prototype.focus = function () {
                if ('nocursor' != this.cm.options.readOnly && (!v || z() != this.textarea))
                    try {
                        this.textarea.focus();
                    } catch (e) {}
            }),
            (os.prototype.blur = function () {
                this.textarea.blur();
            }),
            (os.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0;
            }),
            (os.prototype.receivedFocus = function () {
                this.slowPoll();
            }),
            (os.prototype.slowPoll = function () {
                var e = this;
                this.pollingFast ||
                    this.polling.set(this.cm.options.pollInterval, function () {
                        e.poll(), e.cm.state.focused && e.slowPoll();
                    });
            }),
            (os.prototype.fastPoll = function () {
                var e = !1,
                    t = this;
                function n() {
                    t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, n));
                }
                (t.pollingFast = !0), t.polling.set(20, n);
            }),
            (os.prototype.poll = function () {
                var e = this,
                    t = this.cm,
                    n = this.textarea,
                    r = this.prevInput;
                if (
                    this.contextMenuPending ||
                    !t.state.focused ||
                    (Ne(n) && !r && !this.composing) ||
                    t.isReadOnly() ||
                    t.options.disableInput ||
                    t.state.keySeq
                )
                    return !1;
                var i = n.value;
                if (i == r && !t.somethingSelected()) return !1;
                if ((a && l >= 9 && this.hasSelection === i) || (y && /[\uf700-\uf7ff]/.test(i)))
                    return t.display.input.reset(), !1;
                if (t.doc.sel == t.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if ((8203 != o || r || (r = '​'), 8666 == o)) return this.reset(), this.cm.execCommand('undo');
                }
                for (var s = 0, c = Math.min(r.length, i.length); s < c && r.charCodeAt(s) == i.charCodeAt(s); ) ++s;
                return (
                    Ei(t, function () {
                        Bl(t, i.slice(s), r.length - s, null, e.composing ? '*compose' : null),
                            i.length > 1e3 || i.indexOf('\n') > -1 ? (n.value = e.prevInput = '') : (e.prevInput = i),
                            e.composing &&
                                (e.composing.range.clear(),
                                (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                                    className: 'CodeMirror-composing',
                                })));
                    }),
                    !0
                );
            }),
            (os.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1);
            }),
            (os.prototype.onKeyPress = function () {
                a && l >= 9 && (this.hasSelection = null), this.fastPoll();
            }),
            (os.prototype.onContextMenu = function (e) {
                var t = this,
                    n = t.cm,
                    r = n.display,
                    i = t.textarea;
                t.contextMenuPending && t.contextMenuPending();
                var o = Nr(n, e),
                    c = r.scroller.scrollTop;
                if (o && !d) {
                    n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && zi(n, Ro)(n.doc, lo(o), B);
                    var u,
                        f = i.style.cssText,
                        p = t.wrapper.style.cssText,
                        h = t.wrapper.offsetParent.getBoundingClientRect();
                    if (
                        ((t.wrapper.style.cssText = 'position: static'),
                        (i.style.cssText =
                            'position: absolute; width: 30px; height: 30px;\n      top: ' +
                            (e.clientY - h.top - 5) +
                            'px; left: ' +
                            (e.clientX - h.left - 5) +
                            'px;\n      z-index: 1000; background: ' +
                            (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                            ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
                        s && (u = window.scrollY),
                        r.input.focus(),
                        s && window.scrollTo(null, u),
                        r.input.reset(),
                        n.somethingSelected() || (i.value = t.prevInput = ' '),
                        (t.contextMenuPending = v),
                        (r.selForContextMenu = n.doc.sel),
                        clearTimeout(r.detectingSelectAll),
                        a && l >= 9 && g(),
                        C)
                    ) {
                        Me(e);
                        var m = function () {
                            ge(window, 'mouseup', m), setTimeout(v, 20);
                        };
                        he(window, 'mouseup', m);
                    } else setTimeout(v, 50);
                }
                function g() {
                    if (null != i.selectionStart) {
                        var e = n.somethingSelected(),
                            o = '​' + (e ? i.value : '');
                        (i.value = '⇚'),
                            (i.value = o),
                            (t.prevInput = e ? '' : '​'),
                            (i.selectionStart = 1),
                            (i.selectionEnd = o.length),
                            (r.selForContextMenu = n.doc.sel);
                    }
                }
                function v() {
                    if (
                        t.contextMenuPending == v &&
                        ((t.contextMenuPending = !1),
                        (t.wrapper.style.cssText = p),
                        (i.style.cssText = f),
                        a && l < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
                        null != i.selectionStart)
                    ) {
                        (!a || (a && l < 9)) && g();
                        var e = 0,
                            o = function () {
                                r.selForContextMenu == n.doc.sel &&
                                0 == i.selectionStart &&
                                i.selectionEnd > 0 &&
                                '​' == t.prevInput
                                    ? zi(n, Qo)(n)
                                    : e++ < 10
                                    ? (r.detectingSelectAll = setTimeout(o, 500))
                                    : ((r.selForContextMenu = null), r.input.reset());
                            };
                        r.detectingSelectAll = setTimeout(o, 200);
                    }
                }
            }),
            (os.prototype.readOnlyChanged = function (e) {
                e || this.reset(), (this.textarea.disabled = 'nocursor' == e), (this.textarea.readOnly = !!e);
            }),
            (os.prototype.setUneditable = function () {}),
            (os.prototype.needsContentAttribute = !1),
            Fl(jl),
            Xl(jl);
        var ss = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var cs in Ca.prototype)
            Ca.prototype.hasOwnProperty(cs) &&
                q(ss, cs) < 0 &&
                (jl.prototype[cs] = (function (e) {
                    return function () {
                        return e.apply(this.doc, arguments);
                    };
                })(Ca.prototype[cs]));
        return (
            ke(Ca),
            (jl.inputStyles = { textarea: os, contenteditable: Zl }),
            (jl.defineMode = function (e) {
                jl.defaults.mode || 'null' == e || (jl.defaults.mode = e), We.apply(this, arguments);
            }),
            (jl.defineMIME = Re),
            jl.defineMode('null', function () {
                return {
                    token: function (e) {
                        return e.skipToEnd();
                    },
                };
            }),
            jl.defineMIME('text/plain', 'null'),
            (jl.defineExtension = function (e, t) {
                jl.prototype[e] = t;
            }),
            (jl.defineDocExtension = function (e, t) {
                Ca.prototype[e] = t;
            }),
            (jl.fromTextArea = as),
            ls(jl),
            (jl.version = '5.58.2'),
            jl
        );
    })();
});
o(function (e, t) {
    !(function (e) {
        function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
            return t;
        }
        e.defineMode('css', function (t, n) {
            var r = n.inline;
            n.propertyKeywords || (n = e.resolveMode('text/css'));
            var i,
                o,
                a = t.indentUnit,
                l = n.tokenHooks,
                s = n.documentTypes || {},
                c = n.mediaTypes || {},
                u = n.mediaFeatures || {},
                d = n.mediaValueKeywords || {},
                f = n.propertyKeywords || {},
                p = n.nonStandardPropertyKeywords || {},
                h = n.fontProperties || {},
                m = n.counterDescriptors || {},
                g = n.colorKeywords || {},
                v = n.valueKeywords || {},
                y = n.allowNested,
                b = n.lineComment,
                x = !0 === n.supportsAtComponent,
                k = !1 !== t.highlightNonStandardPropertyKeywords;
            function w(e, t) {
                return (i = t), e;
            }
            function C(e, t) {
                var n = e.next();
                if (l[n]) {
                    var r = l[n](e, t);
                    if (!1 !== r) return r;
                }
                return '@' == n
                    ? (e.eatWhile(/[\w\\\-]/), w('def', e.current()))
                    : '=' == n || (('~' == n || '|' == n) && e.eat('='))
                    ? w(null, 'compare')
                    : '"' == n || "'" == n
                    ? ((t.tokenize = S(n)), t.tokenize(e, t))
                    : '#' == n
                    ? (e.eatWhile(/[\w\\\-]/), w('atom', 'hash'))
                    : '!' == n
                    ? (e.match(/^\s*\w*/), w('keyword', 'important'))
                    : /\d/.test(n) || ('.' == n && e.eat(/\d/))
                    ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
                    : '-' !== n
                    ? /[,+>*\/]/.test(n)
                        ? w(null, 'select-op')
                        : '.' == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                        ? w('qualifier', 'qualifier')
                        : /[:;{}\[\]\(\)]/.test(n)
                        ? w(null, n)
                        : e.match(/[\w-.]+(?=\()/)
                        ? (/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase()) && (t.tokenize = M),
                          w('variable callee', 'variable'))
                        : /[\w\\\-]/.test(n)
                        ? (e.eatWhile(/[\w\\\-]/), w('property', 'word'))
                        : w(null, null)
                    : /[\d.]/.test(e.peek())
                    ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
                    : e.match(/^-[\w\\\-]*/)
                    ? (e.eatWhile(/[\w\\\-]/),
                      e.match(/^\s*:/, !1) ? w('variable-2', 'variable-definition') : w('variable-2', 'variable'))
                    : e.match(/^\w+-/)
                    ? w('meta', 'meta')
                    : void 0;
            }
            function S(e) {
                return function (t, n) {
                    for (var r, i = !1; null != (r = t.next()); ) {
                        if (r == e && !i) {
                            ')' == e && t.backUp(1);
                            break;
                        }
                        i = !i && '\\' == r;
                    }
                    return (r == e || (!i && ')' != e)) && (n.tokenize = null), w('string', 'string');
                };
            }
            function M(e, t) {
                return e.next(), e.match(/\s*[\"\')]/, !1) ? (t.tokenize = null) : (t.tokenize = S(')')), w(null, '(');
            }
            function T(e, t, n) {
                (this.type = e), (this.indent = t), (this.prev = n);
            }
            function L(e, t, n, r) {
                return (e.context = new T(n, t.indentation() + (!1 === r ? 0 : a), e.context)), n;
            }
            function A(e) {
                return e.context.prev && (e.context = e.context.prev), e.context.type;
            }
            function _(e, t, n) {
                return z[n.context.type](e, t, n);
            }
            function O(e, t, n, r) {
                for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
                return _(e, t, n);
            }
            function E(e) {
                var t = e.current().toLowerCase();
                o = v.hasOwnProperty(t) ? 'atom' : g.hasOwnProperty(t) ? 'keyword' : 'variable';
            }
            var z = {
                top: function (e, t, n) {
                    if ('{' == e) return L(n, t, 'block');
                    if ('}' == e && n.context.prev) return A(n);
                    if (x && /@component/i.test(e)) return L(n, t, 'atComponentBlock');
                    if (/^@(-moz-)?document$/i.test(e)) return L(n, t, 'documentTypes');
                    if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return L(n, t, 'atBlock');
                    if (/^@(font-face|counter-style)/i.test(e)) return (n.stateArg = e), 'restricted_atBlock_before';
                    if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return 'keyframes';
                    if (e && '@' == e.charAt(0)) return L(n, t, 'at');
                    if ('hash' == e) o = 'builtin';
                    else if ('word' == e) o = 'tag';
                    else {
                        if ('variable-definition' == e) return 'maybeprop';
                        if ('interpolation' == e) return L(n, t, 'interpolation');
                        if (':' == e) return 'pseudo';
                        if (y && '(' == e) return L(n, t, 'parens');
                    }
                    return n.context.type;
                },
                block: function (e, t, n) {
                    if ('word' == e) {
                        var r = t.current().toLowerCase();
                        return f.hasOwnProperty(r)
                            ? ((o = 'property'), 'maybeprop')
                            : p.hasOwnProperty(r)
                            ? ((o = k ? 'string-2' : 'property'), 'maybeprop')
                            : y
                            ? ((o = t.match(/^\s*:(?:\s|$)/, !1) ? 'property' : 'tag'), 'block')
                            : ((o += ' error'), 'maybeprop');
                    }
                    return 'meta' == e
                        ? 'block'
                        : y || ('hash' != e && 'qualifier' != e)
                        ? z.top(e, t, n)
                        : ((o = 'error'), 'block');
                },
                maybeprop: function (e, t, n) {
                    return ':' == e ? L(n, t, 'prop') : _(e, t, n);
                },
                prop: function (e, t, n) {
                    if (';' == e) return A(n);
                    if ('{' == e && y) return L(n, t, 'propBlock');
                    if ('}' == e || '{' == e) return O(e, t, n);
                    if ('(' == e) return L(n, t, 'parens');
                    if ('hash' != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                        if ('word' == e) E(t);
                        else if ('interpolation' == e) return L(n, t, 'interpolation');
                    } else o += ' error';
                    return 'prop';
                },
                propBlock: function (e, t, n) {
                    return '}' == e ? A(n) : 'word' == e ? ((o = 'property'), 'maybeprop') : n.context.type;
                },
                parens: function (e, t, n) {
                    return '{' == e || '}' == e
                        ? O(e, t, n)
                        : ')' == e
                        ? A(n)
                        : '(' == e
                        ? L(n, t, 'parens')
                        : 'interpolation' == e
                        ? L(n, t, 'interpolation')
                        : ('word' == e && E(t), 'parens');
                },
                pseudo: function (e, t, n) {
                    return 'meta' == e ? 'pseudo' : 'word' == e ? ((o = 'variable-3'), n.context.type) : _(e, t, n);
                },
                documentTypes: function (e, t, n) {
                    return 'word' == e && s.hasOwnProperty(t.current())
                        ? ((o = 'tag'), n.context.type)
                        : z.atBlock(e, t, n);
                },
                atBlock: function (e, t, n) {
                    if ('(' == e) return L(n, t, 'atBlock_parens');
                    if ('}' == e || ';' == e) return O(e, t, n);
                    if ('{' == e) return A(n) && L(n, t, y ? 'block' : 'top');
                    if ('interpolation' == e) return L(n, t, 'interpolation');
                    if ('word' == e) {
                        var r = t.current().toLowerCase();
                        o =
                            'only' == r || 'not' == r || 'and' == r || 'or' == r
                                ? 'keyword'
                                : c.hasOwnProperty(r)
                                ? 'attribute'
                                : u.hasOwnProperty(r)
                                ? 'property'
                                : d.hasOwnProperty(r)
                                ? 'keyword'
                                : f.hasOwnProperty(r)
                                ? 'property'
                                : p.hasOwnProperty(r)
                                ? k
                                    ? 'string-2'
                                    : 'property'
                                : v.hasOwnProperty(r)
                                ? 'atom'
                                : g.hasOwnProperty(r)
                                ? 'keyword'
                                : 'error';
                    }
                    return n.context.type;
                },
                atComponentBlock: function (e, t, n) {
                    return '}' == e
                        ? O(e, t, n)
                        : '{' == e
                        ? A(n) && L(n, t, y ? 'block' : 'top', !1)
                        : ('word' == e && (o = 'error'), n.context.type);
                },
                atBlock_parens: function (e, t, n) {
                    return ')' == e ? A(n) : '{' == e || '}' == e ? O(e, t, n, 2) : z.atBlock(e, t, n);
                },
                restricted_atBlock_before: function (e, t, n) {
                    return '{' == e
                        ? L(n, t, 'restricted_atBlock')
                        : 'word' == e && '@counter-style' == n.stateArg
                        ? ((o = 'variable'), 'restricted_atBlock_before')
                        : _(e, t, n);
                },
                restricted_atBlock: function (e, t, n) {
                    return '}' == e
                        ? ((n.stateArg = null), A(n))
                        : 'word' == e
                        ? ((o =
                              ('@font-face' == n.stateArg && !h.hasOwnProperty(t.current().toLowerCase())) ||
                              ('@counter-style' == n.stateArg && !m.hasOwnProperty(t.current().toLowerCase()))
                                  ? 'error'
                                  : 'property'),
                          'maybeprop')
                        : 'restricted_atBlock';
                },
                keyframes: function (e, t, n) {
                    return 'word' == e ? ((o = 'variable'), 'keyframes') : '{' == e ? L(n, t, 'top') : _(e, t, n);
                },
                at: function (e, t, n) {
                    return ';' == e
                        ? A(n)
                        : '{' == e || '}' == e
                        ? O(e, t, n)
                        : ('word' == e ? (o = 'tag') : 'hash' == e && (o = 'builtin'), 'at');
                },
                interpolation: function (e, t, n) {
                    return '}' == e
                        ? A(n)
                        : '{' == e || ';' == e
                        ? O(e, t, n)
                        : ('word' == e ? (o = 'variable') : 'variable' != e && '(' != e && ')' != e && (o = 'error'),
                          'interpolation');
                },
            };
            return {
                startState: function (e) {
                    return {
                        tokenize: null,
                        state: r ? 'block' : 'top',
                        stateArg: null,
                        context: new T(r ? 'block' : 'top', e || 0, null),
                    };
                },
                token: function (e, t) {
                    if (!t.tokenize && e.eatSpace()) return null;
                    var n = (t.tokenize || C)(e, t);
                    return (
                        n && 'object' == typeof n && ((i = n[1]), (n = n[0])),
                        (o = n),
                        'comment' != i && (t.state = z[t.state](i, e, t)),
                        o
                    );
                },
                indent: function (e, t) {
                    var n = e.context,
                        r = t && t.charAt(0),
                        i = n.indent;
                    return (
                        'prop' != n.type || ('}' != r && ')' != r) || (n = n.prev),
                        n.prev &&
                            ('}' != r ||
                            ('block' != n.type &&
                                'top' != n.type &&
                                'interpolation' != n.type &&
                                'restricted_atBlock' != n.type)
                                ? ((')' != r || ('parens' != n.type && 'atBlock_parens' != n.type)) &&
                                      ('{' != r || ('at' != n.type && 'atBlock' != n.type))) ||
                                  (i = Math.max(0, n.indent - a))
                                : (i = (n = n.prev).indent)),
                        i
                    );
                },
                electricChars: '}',
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                blockCommentContinue: ' * ',
                lineComment: b,
                fold: 'brace',
            };
        });
        var n = ['domain', 'regexp', 'url', 'url-prefix'],
            r = t(n),
            i = ['all', 'aural', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'embossed'],
            o = t(i),
            a = [
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'device-width',
                'min-device-width',
                'max-device-width',
                'device-height',
                'min-device-height',
                'max-device-height',
                'aspect-ratio',
                'min-aspect-ratio',
                'max-aspect-ratio',
                'device-aspect-ratio',
                'min-device-aspect-ratio',
                'max-device-aspect-ratio',
                'color',
                'min-color',
                'max-color',
                'color-index',
                'min-color-index',
                'max-color-index',
                'monochrome',
                'min-monochrome',
                'max-monochrome',
                'resolution',
                'min-resolution',
                'max-resolution',
                'scan',
                'grid',
                'orientation',
                'device-pixel-ratio',
                'min-device-pixel-ratio',
                'max-device-pixel-ratio',
                'pointer',
                'any-pointer',
                'hover',
                'any-hover',
                'prefers-color-scheme',
            ],
            l = t(a),
            s = [
                'landscape',
                'portrait',
                'none',
                'coarse',
                'fine',
                'on-demand',
                'hover',
                'interlace',
                'progressive',
                'dark',
                'light',
            ],
            c = t(s),
            u = [
                'align-content',
                'align-items',
                'align-self',
                'alignment-adjust',
                'alignment-baseline',
                'all',
                'anchor-point',
                'animation',
                'animation-delay',
                'animation-direction',
                'animation-duration',
                'animation-fill-mode',
                'animation-iteration-count',
                'animation-name',
                'animation-play-state',
                'animation-timing-function',
                'appearance',
                'azimuth',
                'backdrop-filter',
                'backface-visibility',
                'background',
                'background-attachment',
                'background-blend-mode',
                'background-clip',
                'background-color',
                'background-image',
                'background-origin',
                'background-position',
                'background-position-x',
                'background-position-y',
                'background-repeat',
                'background-size',
                'baseline-shift',
                'binding',
                'bleed',
                'block-size',
                'bookmark-label',
                'bookmark-level',
                'bookmark-state',
                'bookmark-target',
                'border',
                'border-bottom',
                'border-bottom-color',
                'border-bottom-left-radius',
                'border-bottom-right-radius',
                'border-bottom-style',
                'border-bottom-width',
                'border-collapse',
                'border-color',
                'border-image',
                'border-image-outset',
                'border-image-repeat',
                'border-image-slice',
                'border-image-source',
                'border-image-width',
                'border-left',
                'border-left-color',
                'border-left-style',
                'border-left-width',
                'border-radius',
                'border-right',
                'border-right-color',
                'border-right-style',
                'border-right-width',
                'border-spacing',
                'border-style',
                'border-top',
                'border-top-color',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-top-style',
                'border-top-width',
                'border-width',
                'bottom',
                'box-decoration-break',
                'box-shadow',
                'box-sizing',
                'break-after',
                'break-before',
                'break-inside',
                'caption-side',
                'caret-color',
                'clear',
                'clip',
                'color',
                'color-profile',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-color',
                'column-rule-style',
                'column-rule-width',
                'column-span',
                'column-width',
                'columns',
                'contain',
                'content',
                'counter-increment',
                'counter-reset',
                'crop',
                'cue',
                'cue-after',
                'cue-before',
                'cursor',
                'direction',
                'display',
                'dominant-baseline',
                'drop-initial-after-adjust',
                'drop-initial-after-align',
                'drop-initial-before-adjust',
                'drop-initial-before-align',
                'drop-initial-size',
                'drop-initial-value',
                'elevation',
                'empty-cells',
                'fit',
                'fit-position',
                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'float',
                'float-offset',
                'flow-from',
                'flow-into',
                'font',
                'font-family',
                'font-feature-settings',
                'font-kerning',
                'font-language-override',
                'font-optical-sizing',
                'font-size',
                'font-size-adjust',
                'font-stretch',
                'font-style',
                'font-synthesis',
                'font-variant',
                'font-variant-alternates',
                'font-variant-caps',
                'font-variant-east-asian',
                'font-variant-ligatures',
                'font-variant-numeric',
                'font-variant-position',
                'font-variation-settings',
                'font-weight',
                'gap',
                'grid',
                'grid-area',
                'grid-auto-columns',
                'grid-auto-flow',
                'grid-auto-rows',
                'grid-column',
                'grid-column-end',
                'grid-column-gap',
                'grid-column-start',
                'grid-gap',
                'grid-row',
                'grid-row-end',
                'grid-row-gap',
                'grid-row-start',
                'grid-template',
                'grid-template-areas',
                'grid-template-columns',
                'grid-template-rows',
                'hanging-punctuation',
                'height',
                'hyphens',
                'icon',
                'image-orientation',
                'image-rendering',
                'image-resolution',
                'inline-box-align',
                'inset',
                'inset-block',
                'inset-block-end',
                'inset-block-start',
                'inset-inline',
                'inset-inline-end',
                'inset-inline-start',
                'isolation',
                'justify-content',
                'justify-items',
                'justify-self',
                'left',
                'letter-spacing',
                'line-break',
                'line-height',
                'line-height-step',
                'line-stacking',
                'line-stacking-ruby',
                'line-stacking-shift',
                'line-stacking-strategy',
                'list-style',
                'list-style-image',
                'list-style-position',
                'list-style-type',
                'margin',
                'margin-bottom',
                'margin-left',
                'margin-right',
                'margin-top',
                'marks',
                'marquee-direction',
                'marquee-loop',
                'marquee-play-count',
                'marquee-speed',
                'marquee-style',
                'mask-clip',
                'mask-composite',
                'mask-image',
                'mask-mode',
                'mask-origin',
                'mask-position',
                'mask-repeat',
                'mask-size',
                'mask-type',
                'max-block-size',
                'max-height',
                'max-inline-size',
                'max-width',
                'min-block-size',
                'min-height',
                'min-inline-size',
                'min-width',
                'mix-blend-mode',
                'move-to',
                'nav-down',
                'nav-index',
                'nav-left',
                'nav-right',
                'nav-up',
                'object-fit',
                'object-position',
                'offset',
                'offset-anchor',
                'offset-distance',
                'offset-path',
                'offset-position',
                'offset-rotate',
                'opacity',
                'order',
                'orphans',
                'outline',
                'outline-color',
                'outline-offset',
                'outline-style',
                'outline-width',
                'overflow',
                'overflow-style',
                'overflow-wrap',
                'overflow-x',
                'overflow-y',
                'padding',
                'padding-bottom',
                'padding-left',
                'padding-right',
                'padding-top',
                'page',
                'page-break-after',
                'page-break-before',
                'page-break-inside',
                'page-policy',
                'pause',
                'pause-after',
                'pause-before',
                'perspective',
                'perspective-origin',
                'pitch',
                'pitch-range',
                'place-content',
                'place-items',
                'place-self',
                'play-during',
                'position',
                'presentation-level',
                'punctuation-trim',
                'quotes',
                'region-break-after',
                'region-break-before',
                'region-break-inside',
                'region-fragment',
                'rendering-intent',
                'resize',
                'rest',
                'rest-after',
                'rest-before',
                'richness',
                'right',
                'rotate',
                'rotation',
                'rotation-point',
                'row-gap',
                'ruby-align',
                'ruby-overhang',
                'ruby-position',
                'ruby-span',
                'scale',
                'scroll-behavior',
                'scroll-margin',
                'scroll-margin-block',
                'scroll-margin-block-end',
                'scroll-margin-block-start',
                'scroll-margin-bottom',
                'scroll-margin-inline',
                'scroll-margin-inline-end',
                'scroll-margin-inline-start',
                'scroll-margin-left',
                'scroll-margin-right',
                'scroll-margin-top',
                'scroll-padding',
                'scroll-padding-block',
                'scroll-padding-block-end',
                'scroll-padding-block-start',
                'scroll-padding-bottom',
                'scroll-padding-inline',
                'scroll-padding-inline-end',
                'scroll-padding-inline-start',
                'scroll-padding-left',
                'scroll-padding-right',
                'scroll-padding-top',
                'scroll-snap-align',
                'scroll-snap-type',
                'shape-image-threshold',
                'shape-inside',
                'shape-margin',
                'shape-outside',
                'size',
                'speak',
                'speak-as',
                'speak-header',
                'speak-numeral',
                'speak-punctuation',
                'speech-rate',
                'stress',
                'string-set',
                'tab-size',
                'table-layout',
                'target',
                'target-name',
                'target-new',
                'target-position',
                'text-align',
                'text-align-last',
                'text-combine-upright',
                'text-decoration',
                'text-decoration-color',
                'text-decoration-line',
                'text-decoration-skip',
                'text-decoration-skip-ink',
                'text-decoration-style',
                'text-emphasis',
                'text-emphasis-color',
                'text-emphasis-position',
                'text-emphasis-style',
                'text-height',
                'text-indent',
                'text-justify',
                'text-orientation',
                'text-outline',
                'text-overflow',
                'text-rendering',
                'text-shadow',
                'text-size-adjust',
                'text-space-collapse',
                'text-transform',
                'text-underline-position',
                'text-wrap',
                'top',
                'touch-action',
                'transform',
                'transform-origin',
                'transform-style',
                'transition',
                'transition-delay',
                'transition-duration',
                'transition-property',
                'transition-timing-function',
                'translate',
                'unicode-bidi',
                'user-select',
                'vertical-align',
                'visibility',
                'voice-balance',
                'voice-duration',
                'voice-family',
                'voice-pitch',
                'voice-range',
                'voice-rate',
                'voice-stress',
                'voice-volume',
                'volume',
                'white-space',
                'widows',
                'width',
                'will-change',
                'word-break',
                'word-spacing',
                'word-wrap',
                'writing-mode',
                'z-index',
                'clip-path',
                'clip-rule',
                'mask',
                'enable-background',
                'filter',
                'flood-color',
                'flood-opacity',
                'lighting-color',
                'stop-color',
                'stop-opacity',
                'pointer-events',
                'color-interpolation',
                'color-interpolation-filters',
                'color-rendering',
                'fill',
                'fill-opacity',
                'fill-rule',
                'image-rendering',
                'marker',
                'marker-end',
                'marker-mid',
                'marker-start',
                'paint-order',
                'shape-rendering',
                'stroke',
                'stroke-dasharray',
                'stroke-dashoffset',
                'stroke-linecap',
                'stroke-linejoin',
                'stroke-miterlimit',
                'stroke-opacity',
                'stroke-width',
                'text-rendering',
                'baseline-shift',
                'dominant-baseline',
                'glyph-orientation-horizontal',
                'glyph-orientation-vertical',
                'text-anchor',
                'writing-mode',
            ],
            d = t(u),
            f = [
                'border-block',
                'border-block-color',
                'border-block-end',
                'border-block-end-color',
                'border-block-end-style',
                'border-block-end-width',
                'border-block-start',
                'border-block-start-color',
                'border-block-start-style',
                'border-block-start-width',
                'border-block-style',
                'border-block-width',
                'border-inline',
                'border-inline-color',
                'border-inline-end',
                'border-inline-end-color',
                'border-inline-end-style',
                'border-inline-end-width',
                'border-inline-start',
                'border-inline-start-color',
                'border-inline-start-style',
                'border-inline-start-width',
                'border-inline-style',
                'border-inline-width',
                'margin-block',
                'margin-block-end',
                'margin-block-start',
                'margin-inline',
                'margin-inline-end',
                'margin-inline-start',
                'padding-block',
                'padding-block-end',
                'padding-block-start',
                'padding-inline',
                'padding-inline-end',
                'padding-inline-start',
                'scroll-snap-stop',
                'scrollbar-3d-light-color',
                'scrollbar-arrow-color',
                'scrollbar-base-color',
                'scrollbar-dark-shadow-color',
                'scrollbar-face-color',
                'scrollbar-highlight-color',
                'scrollbar-shadow-color',
                'scrollbar-track-color',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'shape-inside',
                'zoom',
            ],
            p = t(f),
            h = t([
                'font-display',
                'font-family',
                'src',
                'unicode-range',
                'font-variant',
                'font-feature-settings',
                'font-stretch',
                'font-weight',
                'font-style',
            ]),
            m = t([
                'additive-symbols',
                'fallback',
                'negative',
                'pad',
                'prefix',
                'range',
                'speak-as',
                'suffix',
                'symbols',
                'system',
            ]),
            g = [
                'aliceblue',
                'antiquewhite',
                'aqua',
                'aquamarine',
                'azure',
                'beige',
                'bisque',
                'black',
                'blanchedalmond',
                'blue',
                'blueviolet',
                'brown',
                'burlywood',
                'cadetblue',
                'chartreuse',
                'chocolate',
                'coral',
                'cornflowerblue',
                'cornsilk',
                'crimson',
                'cyan',
                'darkblue',
                'darkcyan',
                'darkgoldenrod',
                'darkgray',
                'darkgreen',
                'darkkhaki',
                'darkmagenta',
                'darkolivegreen',
                'darkorange',
                'darkorchid',
                'darkred',
                'darksalmon',
                'darkseagreen',
                'darkslateblue',
                'darkslategray',
                'darkturquoise',
                'darkviolet',
                'deeppink',
                'deepskyblue',
                'dimgray',
                'dodgerblue',
                'firebrick',
                'floralwhite',
                'forestgreen',
                'fuchsia',
                'gainsboro',
                'ghostwhite',
                'gold',
                'goldenrod',
                'gray',
                'grey',
                'green',
                'greenyellow',
                'honeydew',
                'hotpink',
                'indianred',
                'indigo',
                'ivory',
                'khaki',
                'lavender',
                'lavenderblush',
                'lawngreen',
                'lemonchiffon',
                'lightblue',
                'lightcoral',
                'lightcyan',
                'lightgoldenrodyellow',
                'lightgray',
                'lightgreen',
                'lightpink',
                'lightsalmon',
                'lightseagreen',
                'lightskyblue',
                'lightslategray',
                'lightsteelblue',
                'lightyellow',
                'lime',
                'limegreen',
                'linen',
                'magenta',
                'maroon',
                'mediumaquamarine',
                'mediumblue',
                'mediumorchid',
                'mediumpurple',
                'mediumseagreen',
                'mediumslateblue',
                'mediumspringgreen',
                'mediumturquoise',
                'mediumvioletred',
                'midnightblue',
                'mintcream',
                'mistyrose',
                'moccasin',
                'navajowhite',
                'navy',
                'oldlace',
                'olive',
                'olivedrab',
                'orange',
                'orangered',
                'orchid',
                'palegoldenrod',
                'palegreen',
                'paleturquoise',
                'palevioletred',
                'papayawhip',
                'peachpuff',
                'peru',
                'pink',
                'plum',
                'powderblue',
                'purple',
                'rebeccapurple',
                'red',
                'rosybrown',
                'royalblue',
                'saddlebrown',
                'salmon',
                'sandybrown',
                'seagreen',
                'seashell',
                'sienna',
                'silver',
                'skyblue',
                'slateblue',
                'slategray',
                'snow',
                'springgreen',
                'steelblue',
                'tan',
                'teal',
                'thistle',
                'tomato',
                'turquoise',
                'violet',
                'wheat',
                'white',
                'whitesmoke',
                'yellow',
                'yellowgreen',
            ],
            v = t(g),
            y = [
                'above',
                'absolute',
                'activeborder',
                'additive',
                'activecaption',
                'afar',
                'after-white-space',
                'ahead',
                'alias',
                'all',
                'all-scroll',
                'alphabetic',
                'alternate',
                'always',
                'amharic',
                'amharic-abegede',
                'antialiased',
                'appworkspace',
                'arabic-indic',
                'armenian',
                'asterisks',
                'attr',
                'auto',
                'auto-flow',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'axis-pan',
                'background',
                'backwards',
                'baseline',
                'below',
                'bidi-override',
                'binary',
                'bengali',
                'blink',
                'block',
                'block-axis',
                'bold',
                'bolder',
                'border',
                'border-box',
                'both',
                'bottom',
                'break',
                'break-all',
                'break-word',
                'bullets',
                'button',
                'button-bevel',
                'buttonface',
                'buttonhighlight',
                'buttonshadow',
                'buttontext',
                'calc',
                'cambodian',
                'capitalize',
                'caps-lock-indicator',
                'caption',
                'captiontext',
                'caret',
                'cell',
                'center',
                'checkbox',
                'circle',
                'cjk-decimal',
                'cjk-earthly-branch',
                'cjk-heavenly-stem',
                'cjk-ideographic',
                'clear',
                'clip',
                'close-quote',
                'col-resize',
                'collapse',
                'color',
                'color-burn',
                'color-dodge',
                'column',
                'column-reverse',
                'compact',
                'condensed',
                'contain',
                'content',
                'contents',
                'content-box',
                'context-menu',
                'continuous',
                'copy',
                'counter',
                'counters',
                'cover',
                'crop',
                'cross',
                'crosshair',
                'currentcolor',
                'cursive',
                'cyclic',
                'darken',
                'dashed',
                'decimal',
                'decimal-leading-zero',
                'default',
                'default-button',
                'dense',
                'destination-atop',
                'destination-in',
                'destination-out',
                'destination-over',
                'devanagari',
                'difference',
                'disc',
                'discard',
                'disclosure-closed',
                'disclosure-open',
                'document',
                'dot-dash',
                'dot-dot-dash',
                'dotted',
                'double',
                'down',
                'e-resize',
                'ease',
                'ease-in',
                'ease-in-out',
                'ease-out',
                'element',
                'ellipse',
                'ellipsis',
                'embed',
                'end',
                'ethiopic',
                'ethiopic-abegede',
                'ethiopic-abegede-am-et',
                'ethiopic-abegede-gez',
                'ethiopic-abegede-ti-er',
                'ethiopic-abegede-ti-et',
                'ethiopic-halehame-aa-er',
                'ethiopic-halehame-aa-et',
                'ethiopic-halehame-am-et',
                'ethiopic-halehame-gez',
                'ethiopic-halehame-om-et',
                'ethiopic-halehame-sid-et',
                'ethiopic-halehame-so-et',
                'ethiopic-halehame-ti-er',
                'ethiopic-halehame-ti-et',
                'ethiopic-halehame-tig',
                'ethiopic-numeric',
                'ew-resize',
                'exclusion',
                'expanded',
                'extends',
                'extra-condensed',
                'extra-expanded',
                'fantasy',
                'fast',
                'fill',
                'fill-box',
                'fixed',
                'flat',
                'flex',
                'flex-end',
                'flex-start',
                'footnotes',
                'forwards',
                'from',
                'geometricPrecision',
                'georgian',
                'graytext',
                'grid',
                'groove',
                'gujarati',
                'gurmukhi',
                'hand',
                'hangul',
                'hangul-consonant',
                'hard-light',
                'hebrew',
                'help',
                'hidden',
                'hide',
                'higher',
                'highlight',
                'highlighttext',
                'hiragana',
                'hiragana-iroha',
                'horizontal',
                'hsl',
                'hsla',
                'hue',
                'icon',
                'ignore',
                'inactiveborder',
                'inactivecaption',
                'inactivecaptiontext',
                'infinite',
                'infobackground',
                'infotext',
                'inherit',
                'initial',
                'inline',
                'inline-axis',
                'inline-block',
                'inline-flex',
                'inline-grid',
                'inline-table',
                'inset',
                'inside',
                'intrinsic',
                'invert',
                'italic',
                'japanese-formal',
                'japanese-informal',
                'justify',
                'kannada',
                'katakana',
                'katakana-iroha',
                'keep-all',
                'khmer',
                'korean-hangul-formal',
                'korean-hanja-formal',
                'korean-hanja-informal',
                'landscape',
                'lao',
                'large',
                'larger',
                'left',
                'level',
                'lighter',
                'lighten',
                'line-through',
                'linear',
                'linear-gradient',
                'lines',
                'list-item',
                'listbox',
                'listitem',
                'local',
                'logical',
                'loud',
                'lower',
                'lower-alpha',
                'lower-armenian',
                'lower-greek',
                'lower-hexadecimal',
                'lower-latin',
                'lower-norwegian',
                'lower-roman',
                'lowercase',
                'ltr',
                'luminosity',
                'malayalam',
                'manipulation',
                'match',
                'matrix',
                'matrix3d',
                'media-controls-background',
                'media-current-time-display',
                'media-fullscreen-button',
                'media-mute-button',
                'media-play-button',
                'media-return-to-realtime-button',
                'media-rewind-button',
                'media-seek-back-button',
                'media-seek-forward-button',
                'media-slider',
                'media-sliderthumb',
                'media-time-remaining-display',
                'media-volume-slider',
                'media-volume-slider-container',
                'media-volume-sliderthumb',
                'medium',
                'menu',
                'menulist',
                'menulist-button',
                'menulist-text',
                'menulist-textfield',
                'menutext',
                'message-box',
                'middle',
                'min-intrinsic',
                'mix',
                'mongolian',
                'monospace',
                'move',
                'multiple',
                'multiple_mask_images',
                'multiply',
                'myanmar',
                'n-resize',
                'narrower',
                'ne-resize',
                'nesw-resize',
                'no-close-quote',
                'no-drop',
                'no-open-quote',
                'no-repeat',
                'none',
                'normal',
                'not-allowed',
                'nowrap',
                'ns-resize',
                'numbers',
                'numeric',
                'nw-resize',
                'nwse-resize',
                'oblique',
                'octal',
                'opacity',
                'open-quote',
                'optimizeLegibility',
                'optimizeSpeed',
                'oriya',
                'oromo',
                'outset',
                'outside',
                'outside-shape',
                'overlay',
                'overline',
                'padding',
                'padding-box',
                'painted',
                'page',
                'paused',
                'persian',
                'perspective',
                'pinch-zoom',
                'plus-darker',
                'plus-lighter',
                'pointer',
                'polygon',
                'portrait',
                'pre',
                'pre-line',
                'pre-wrap',
                'preserve-3d',
                'progress',
                'push-button',
                'radial-gradient',
                'radio',
                'read-only',
                'read-write',
                'read-write-plaintext-only',
                'rectangle',
                'region',
                'relative',
                'repeat',
                'repeating-linear-gradient',
                'repeating-radial-gradient',
                'repeat-x',
                'repeat-y',
                'reset',
                'reverse',
                'rgb',
                'rgba',
                'ridge',
                'right',
                'rotate',
                'rotate3d',
                'rotateX',
                'rotateY',
                'rotateZ',
                'round',
                'row',
                'row-resize',
                'row-reverse',
                'rtl',
                'run-in',
                'running',
                's-resize',
                'sans-serif',
                'saturation',
                'scale',
                'scale3d',
                'scaleX',
                'scaleY',
                'scaleZ',
                'screen',
                'scroll',
                'scrollbar',
                'scroll-position',
                'se-resize',
                'searchfield',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'self-start',
                'self-end',
                'semi-condensed',
                'semi-expanded',
                'separate',
                'serif',
                'show',
                'sidama',
                'simp-chinese-formal',
                'simp-chinese-informal',
                'single',
                'skew',
                'skewX',
                'skewY',
                'skip-white-space',
                'slide',
                'slider-horizontal',
                'slider-vertical',
                'sliderthumb-horizontal',
                'sliderthumb-vertical',
                'slow',
                'small',
                'small-caps',
                'small-caption',
                'smaller',
                'soft-light',
                'solid',
                'somali',
                'source-atop',
                'source-in',
                'source-out',
                'source-over',
                'space',
                'space-around',
                'space-between',
                'space-evenly',
                'spell-out',
                'square',
                'square-button',
                'start',
                'static',
                'status-bar',
                'stretch',
                'stroke',
                'stroke-box',
                'sub',
                'subpixel-antialiased',
                'svg_masks',
                'super',
                'sw-resize',
                'symbolic',
                'symbols',
                'system-ui',
                'table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row',
                'table-row-group',
                'tamil',
                'telugu',
                'text',
                'text-bottom',
                'text-top',
                'textarea',
                'textfield',
                'thai',
                'thick',
                'thin',
                'threeddarkshadow',
                'threedface',
                'threedhighlight',
                'threedlightshadow',
                'threedshadow',
                'tibetan',
                'tigre',
                'tigrinya-er',
                'tigrinya-er-abegede',
                'tigrinya-et',
                'tigrinya-et-abegede',
                'to',
                'top',
                'trad-chinese-formal',
                'trad-chinese-informal',
                'transform',
                'translate',
                'translate3d',
                'translateX',
                'translateY',
                'translateZ',
                'transparent',
                'ultra-condensed',
                'ultra-expanded',
                'underline',
                'unidirectional-pan',
                'unset',
                'up',
                'upper-alpha',
                'upper-armenian',
                'upper-greek',
                'upper-hexadecimal',
                'upper-latin',
                'upper-norwegian',
                'upper-roman',
                'uppercase',
                'urdu',
                'url',
                'var',
                'vertical',
                'vertical-text',
                'view-box',
                'visible',
                'visibleFill',
                'visiblePainted',
                'visibleStroke',
                'visual',
                'w-resize',
                'wait',
                'wave',
                'wider',
                'window',
                'windowframe',
                'windowtext',
                'words',
                'wrap',
                'wrap-reverse',
                'x-large',
                'x-small',
                'xor',
                'xx-large',
                'xx-small',
            ],
            b = t(y),
            x = n.concat(i).concat(a).concat(s).concat(u).concat(f).concat(g).concat(y);
        function k(e, t) {
            for (var n, r = !1; null != (n = e.next()); ) {
                if (r && '/' == n) {
                    t.tokenize = null;
                    break;
                }
                r = '*' == n;
            }
            return ['comment', 'comment'];
        }
        e.registerHelper('hintWords', 'css', x),
            e.defineMIME('text/css', {
                documentTypes: r,
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: p,
                fontProperties: h,
                counterDescriptors: m,
                colorKeywords: v,
                valueKeywords: b,
                tokenHooks: {
                    '/': function (e, t) {
                        return !!e.eat('*') && ((t.tokenize = k), k(e, t));
                    },
                },
                name: 'css',
            }),
            e.defineMIME('text/x-scss', {
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: p,
                colorKeywords: v,
                valueKeywords: b,
                fontProperties: h,
                allowNested: !0,
                lineComment: '//',
                tokenHooks: {
                    '/': function (e, t) {
                        return e.eat('/')
                            ? (e.skipToEnd(), ['comment', 'comment'])
                            : e.eat('*')
                            ? ((t.tokenize = k), k(e, t))
                            : ['operator', 'operator'];
                    },
                    ':': function (e) {
                        return !!e.match(/\s*\{/, !1) && [null, null];
                    },
                    $: function (e) {
                        return (
                            e.match(/^[\w-]+/),
                            e.match(/^\s*:/, !1) ? ['variable-2', 'variable-definition'] : ['variable-2', 'variable']
                        );
                    },
                    '#': function (e) {
                        return !!e.eat('{') && [null, 'interpolation'];
                    },
                },
                name: 'css',
                helperType: 'scss',
            }),
            e.defineMIME('text/x-less', {
                mediaTypes: o,
                mediaFeatures: l,
                mediaValueKeywords: c,
                propertyKeywords: d,
                nonStandardPropertyKeywords: p,
                colorKeywords: v,
                valueKeywords: b,
                fontProperties: h,
                allowNested: !0,
                lineComment: '//',
                tokenHooks: {
                    '/': function (e, t) {
                        return e.eat('/')
                            ? (e.skipToEnd(), ['comment', 'comment'])
                            : e.eat('*')
                            ? ((t.tokenize = k), k(e, t))
                            : ['operator', 'operator'];
                    },
                    '@': function (e) {
                        return e.eat('{')
                            ? [null, 'interpolation']
                            : !e.match(
                                  /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                                  !1
                              ) &&
                                  (e.eatWhile(/[\w\\\-]/),
                                  e.match(/^\s*:/, !1)
                                      ? ['variable-2', 'variable-definition']
                                      : ['variable-2', 'variable']);
                    },
                    '&': function () {
                        return ['atom', 'atom'];
                    },
                },
                name: 'css',
                helperType: 'less',
            }),
            e.defineMIME('text/x-gss', {
                documentTypes: r,
                mediaTypes: o,
                mediaFeatures: l,
                propertyKeywords: d,
                nonStandardPropertyKeywords: p,
                fontProperties: h,
                counterDescriptors: m,
                colorKeywords: v,
                valueKeywords: b,
                supportsAtComponent: !0,
                tokenHooks: {
                    '/': function (e, t) {
                        return !!e.eat('*') && ((t.tokenize = k), k(e, t));
                    },
                },
                name: 'css',
                helperType: 'gss',
            });
    })(a);
}),
    o(function (e, t) {
        !(function (e) {
            function t(e, t) {
                if (!e.hasOwnProperty(t)) throw new Error('Undefined state ' + t + ' in simple mode');
            }
            function n(e, t) {
                if (!e) return /(?:)/;
                var n = '';
                return (
                    e instanceof RegExp ? (e.ignoreCase && (n = 'i'), (e = e.source)) : (e = String(e)),
                    new RegExp((!1 === t ? '' : '^') + '(?:' + e + ')', n)
                );
            }
            function r(e) {
                if (!e) return null;
                if (e.apply) return e;
                if ('string' == typeof e) return e.replace(/\./g, ' ');
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n] && e[n].replace(/\./g, ' '));
                return t;
            }
            function i(e, i) {
                (e.next || e.push) && t(i, e.next || e.push),
                    (this.regex = n(e.regex)),
                    (this.token = r(e.token)),
                    (this.data = e);
            }
            function o(e, t) {
                return function (n, r) {
                    if (r.pending) {
                        var i = r.pending.shift();
                        return 0 == r.pending.length && (r.pending = null), (n.pos += i.text.length), i.token;
                    }
                    if (r.local) {
                        if (r.local.end && n.match(r.local.end)) {
                            var o = r.local.endToken || null;
                            return (r.local = r.localState = null), o;
                        }
                        var a;
                        return (
                            (o = r.local.mode.token(n, r.localState)),
                            r.local.endScan && (a = r.local.endScan.exec(n.current())) && (n.pos = n.start + a.index),
                            o
                        );
                    }
                    for (var s = e[r.state], c = 0; c < s.length; c++) {
                        var u = s[c],
                            d = (!u.data.sol || n.sol()) && n.match(u.regex);
                        if (d) {
                            u.data.next
                                ? (r.state = u.data.next)
                                : u.data.push
                                ? ((r.stack || (r.stack = [])).push(r.state), (r.state = u.data.push))
                                : u.data.pop && r.stack && r.stack.length && (r.state = r.stack.pop()),
                                u.data.mode && l(t, r, u.data.mode, u.token),
                                u.data.indent && r.indent.push(n.indentation() + t.indentUnit),
                                u.data.dedent && r.indent.pop();
                            var f = u.token;
                            if ((f && f.apply && (f = f(d)), d.length > 2 && u.token && 'string' != typeof u.token)) {
                                r.pending = [];
                                for (var p = 2; p < d.length; p++)
                                    d[p] && r.pending.push({ text: d[p], token: u.token[p - 1] });
                                return n.backUp(d[0].length - (d[1] ? d[1].length : 0)), f[0];
                            }
                            return f && f.join ? f[0] : f;
                        }
                    }
                    return n.next(), null;
                };
            }
            function a(e, t) {
                if (e === t) return !0;
                if (!e || 'object' != typeof e || !t || 'object' != typeof t) return !1;
                var n = 0;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        if (!t.hasOwnProperty(r) || !a(e[r], t[r])) return !1;
                        n++;
                    }
                for (var r in t) t.hasOwnProperty(r) && n--;
                return 0 == n;
            }
            function l(t, r, i, o) {
                var l;
                if (i.persistent)
                    for (var s = r.persistentStates; s && !l; s = s.next)
                        (i.spec ? a(i.spec, s.spec) : i.mode == s.mode) && (l = s);
                var c = l ? l.mode : i.mode || e.getMode(t, i.spec),
                    u = l ? l.state : e.startState(c);
                i.persistent &&
                    !l &&
                    (r.persistentStates = { mode: c, spec: i.spec, state: u, next: r.persistentStates }),
                    (r.localState = u),
                    (r.local = {
                        mode: c,
                        end: i.end && n(i.end),
                        endScan: i.end && !1 !== i.forceEnd && n(i.end, !1),
                        endToken: o && o.join ? o[o.length - 1] : o,
                    });
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) if (t[n] === e) return !0;
            }
            function c(t, n) {
                return function (r, i, o) {
                    if (r.local && r.local.mode.indent) return r.local.mode.indent(r.localState, i, o);
                    if (null == r.indent || r.local || (n.dontIndentStates && s(r.state, n.dontIndentStates) > -1))
                        return e.Pass;
                    var a = r.indent.length - 1,
                        l = t[r.state];
                    e: for (;;) {
                        for (var c = 0; c < l.length; c++) {
                            var u = l[c];
                            if (u.data.dedent && !1 !== u.data.dedentIfLineStart) {
                                var d = u.regex.exec(i);
                                if (d && d[0]) {
                                    a--, (u.next || u.push) && (l = t[u.next || u.push]), (i = i.slice(d[0].length));
                                    continue e;
                                }
                            }
                        }
                        break;
                    }
                    return a < 0 ? 0 : r.indent[a];
                };
            }
            (e.defineSimpleMode = function (t, n) {
                e.defineMode(t, function (t) {
                    return e.simpleMode(t, n);
                });
            }),
                (e.simpleMode = function (n, r) {
                    t(r, 'start');
                    var a = {},
                        l = r.meta || {},
                        s = !1;
                    for (var u in r)
                        if (u != l && r.hasOwnProperty(u))
                            for (var d = (a[u] = []), f = r[u], p = 0; p < f.length; p++) {
                                var h = f[p];
                                d.push(new i(h, r)), (h.indent || h.dedent) && (s = !0);
                            }
                    var m = {
                        startState: function () {
                            return {
                                state: 'start',
                                pending: null,
                                local: null,
                                localState: null,
                                indent: s ? [] : null,
                            };
                        },
                        copyState: function (t) {
                            var n = {
                                state: t.state,
                                pending: t.pending,
                                local: t.local,
                                localState: null,
                                indent: t.indent && t.indent.slice(0),
                            };
                            t.localState && (n.localState = e.copyState(t.local.mode, t.localState)),
                                t.stack && (n.stack = t.stack.slice(0));
                            for (var r = t.persistentStates; r; r = r.next)
                                n.persistentStates = {
                                    mode: r.mode,
                                    spec: r.spec,
                                    state: r.state == t.localState ? n.localState : e.copyState(r.mode, r.state),
                                    next: n.persistentStates,
                                };
                            return n;
                        },
                        token: o(a, n),
                        innerMode: function (e) {
                            return e.local && { mode: e.local.mode, state: e.localState };
                        },
                        indent: c(a, l),
                    };
                    if (l) for (var g in l) l.hasOwnProperty(g) && (m[g] = l[g]);
                    return m;
                });
        })(a);
    }),
    o(function (e, t) {
        var n, r, i, o, l, s, c, u, d, f, p;
        (n = a),
            (r = 'from'),
            (i = new RegExp('^(\\s*)\\b(' + r + ')\\b', 'i')),
            (o = ['run', 'cmd', 'entrypoint', 'shell']),
            (l = new RegExp('^(\\s*)(' + o.join('|') + ')(\\s+\\[)', 'i')),
            (s = 'expose'),
            (c = new RegExp('^(\\s*)(' + s + ')(\\s+)', 'i')),
            (u = [
                'arg',
                'from',
                'maintainer',
                'label',
                'env',
                'add',
                'copy',
                'volume',
                'user',
                'workdir',
                'onbuild',
                'stopsignal',
                'healthcheck',
                'shell',
            ]),
            (d = '(' + [r, s].concat(o).concat(u).join('|') + ')'),
            (f = new RegExp('^(\\s*)' + d + '(\\s*)(#.*)?$', 'i')),
            (p = new RegExp('^(\\s*)' + d + '(\\s+)', 'i')),
            n.defineSimpleMode('dockerfile', {
                start: [
                    { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
                    { regex: i, token: [null, 'keyword'], sol: !0, next: 'from' },
                    { regex: f, token: [null, 'keyword', null, 'error'], sol: !0 },
                    { regex: l, token: [null, 'keyword', null], sol: !0, next: 'array' },
                    { regex: c, token: [null, 'keyword', null], sol: !0, next: 'expose' },
                    { regex: p, token: [null, 'keyword', null], sol: !0, next: 'arguments' },
                    { regex: /./, token: null },
                ],
                from: [
                    { regex: /\s*$/, token: null, next: 'start' },
                    { regex: /(\s*)(#.*)$/, token: [null, 'error'], next: 'start' },
                    { regex: /(\s*\S+\s+)(as)/i, token: [null, 'keyword'], next: 'start' },
                    { token: null, next: 'start' },
                ],
                single: [
                    { regex: /(?:[^\\']|\\.)/, token: 'string' },
                    { regex: /'/, token: 'string', pop: !0 },
                ],
                double: [
                    { regex: /(?:[^\\"]|\\.)/, token: 'string' },
                    { regex: /"/, token: 'string', pop: !0 },
                ],
                array: [
                    { regex: /\]/, token: null, next: 'start' },
                    { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
                ],
                expose: [
                    { regex: /\d+$/, token: 'number', next: 'start' },
                    { regex: /[^\d]+$/, token: null, next: 'start' },
                    { regex: /\d+/, token: 'number' },
                    { regex: /[^\d]+/, token: null },
                    { token: null, next: 'start' },
                ],
                arguments: [
                    { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
                    { regex: /"(?:[^\\"]|\\.)*"?$/, token: 'string', next: 'start' },
                    { regex: /"/, token: 'string', push: 'double' },
                    { regex: /'(?:[^\\']|\\.)*'?$/, token: 'string', next: 'start' },
                    { regex: /'/, token: 'string', push: 'single' },
                    { regex: /[^#"']+[\\`]$/, token: null },
                    { regex: /[^#"']+$/, token: null, next: 'start' },
                    { regex: /[^#"']+/, token: null },
                    { token: null, next: 'start' },
                ],
                meta: { lineComment: '#' },
            }),
            n.defineMIME('text/x-dockerfile', 'dockerfile');
    }),
    o(function (e, t) {
        var n, r, i;
        (r = {
            autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0,
            },
            implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0,
            },
            contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0,
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
        }),
            (i = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1,
            }),
            (n = a).defineMode('xml', function (e, t) {
                var o,
                    a,
                    l = e.indentUnit,
                    s = {},
                    c = t.htmlMode ? r : i;
                for (var u in c) s[u] = c[u];
                for (var u in t) s[u] = t[u];
                function d(e, t) {
                    function n(n) {
                        return (t.tokenize = n), n(e, t);
                    }
                    var r = e.next();
                    return '<' == r
                        ? e.eat('!')
                            ? e.eat('[')
                                ? e.match('CDATA[')
                                    ? n(h('atom', ']]>'))
                                    : null
                                : e.match('--')
                                ? n(h('comment', '--\x3e'))
                                : e.match('DOCTYPE', !0, !0)
                                ? (e.eatWhile(/[\w\._\-]/), n(m(1)))
                                : null
                            : e.eat('?')
                            ? (e.eatWhile(/[\w\._\-]/), (t.tokenize = h('meta', '?>')), 'meta')
                            : ((o = e.eat('/') ? 'closeTag' : 'openTag'), (t.tokenize = f), 'tag bracket')
                        : '&' == r
                        ? (
                              e.eat('#')
                                  ? e.eat('x')
                                      ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
                                      : e.eatWhile(/[\d]/) && e.eat(';')
                                  : e.eatWhile(/[\w\.\-:]/) && e.eat(';')
                          )
                            ? 'atom'
                            : 'error'
                        : (e.eatWhile(/[^&<]/), null);
                }
                function f(e, t) {
                    var n = e.next();
                    if ('>' == n || ('/' == n && e.eat('>')))
                        return (t.tokenize = d), (o = '>' == n ? 'endTag' : 'selfcloseTag'), 'tag bracket';
                    if ('=' == n) return (o = 'equals'), null;
                    if ('<' == n) {
                        (t.tokenize = d), (t.state = b), (t.tagName = t.tagStart = null);
                        var r = t.tokenize(e, t);
                        return r ? r + ' tag error' : 'tag error';
                    }
                    return /[\'\"]/.test(n)
                        ? ((t.tokenize = p(n)), (t.stringStartCol = e.column()), t.tokenize(e, t))
                        : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
                }
                function p(e) {
                    var t = function (t, n) {
                        for (; !t.eol(); )
                            if (t.next() == e) {
                                n.tokenize = f;
                                break;
                            }
                        return 'string';
                    };
                    return (t.isInAttribute = !0), t;
                }
                function h(e, t) {
                    return function (n, r) {
                        for (; !n.eol(); ) {
                            if (n.match(t)) {
                                r.tokenize = d;
                                break;
                            }
                            n.next();
                        }
                        return e;
                    };
                }
                function m(e) {
                    return function (t, n) {
                        for (var r; null != (r = t.next()); ) {
                            if ('<' == r) return (n.tokenize = m(e + 1)), n.tokenize(t, n);
                            if ('>' == r) {
                                if (1 == e) {
                                    n.tokenize = d;
                                    break;
                                }
                                return (n.tokenize = m(e - 1)), n.tokenize(t, n);
                            }
                        }
                        return 'meta';
                    };
                }
                function g(e, t, n) {
                    (this.prev = e.context),
                        (this.tagName = t),
                        (this.indent = e.indented),
                        (this.startOfLine = n),
                        (s.doNotIndent.hasOwnProperty(t) || (e.context && e.context.noIndent)) && (this.noIndent = !0);
                }
                function v(e) {
                    e.context && (e.context = e.context.prev);
                }
                function y(e, t) {
                    for (var n; ; ) {
                        if (!e.context) return;
                        if (
                            ((n = e.context.tagName),
                            !s.contextGrabbers.hasOwnProperty(n) || !s.contextGrabbers[n].hasOwnProperty(t))
                        )
                            return;
                        v(e);
                    }
                }
                function b(e, t, n) {
                    return 'openTag' == e ? ((n.tagStart = t.column()), x) : 'closeTag' == e ? k : b;
                }
                function x(e, t, n) {
                    return 'word' == e
                        ? ((n.tagName = t.current()), (a = 'tag'), S)
                        : s.allowMissingTagName && 'endTag' == e
                        ? ((a = 'tag bracket'), S(e, t, n))
                        : ((a = 'error'), x);
                }
                function k(e, t, n) {
                    if ('word' == e) {
                        var r = t.current();
                        return (
                            n.context &&
                                n.context.tagName != r &&
                                s.implicitlyClosed.hasOwnProperty(n.context.tagName) &&
                                v(n),
                            (n.context && n.context.tagName == r) || !1 === s.matchClosing
                                ? ((a = 'tag'), w)
                                : ((a = 'tag error'), C)
                        );
                    }
                    return s.allowMissingTagName && 'endTag' == e
                        ? ((a = 'tag bracket'), w(e, t, n))
                        : ((a = 'error'), C);
                }
                function w(e, t, n) {
                    return 'endTag' != e ? ((a = 'error'), w) : (v(n), b);
                }
                function C(e, t, n) {
                    return (a = 'error'), w(e, t, n);
                }
                function S(e, t, n) {
                    if ('word' == e) return (a = 'attribute'), M;
                    if ('endTag' == e || 'selfcloseTag' == e) {
                        var r = n.tagName,
                            i = n.tagStart;
                        return (
                            (n.tagName = n.tagStart = null),
                            'selfcloseTag' == e || s.autoSelfClosers.hasOwnProperty(r)
                                ? y(n, r)
                                : (y(n, r), (n.context = new g(n, r, i == n.indented))),
                            b
                        );
                    }
                    return (a = 'error'), S;
                }
                function M(e, t, n) {
                    return 'equals' == e ? T : (s.allowMissing || (a = 'error'), S(e, t, n));
                }
                function T(e, t, n) {
                    return 'string' == e
                        ? L
                        : 'word' == e && s.allowUnquoted
                        ? ((a = 'string'), S)
                        : ((a = 'error'), S(e, t, n));
                }
                function L(e, t, n) {
                    return 'string' == e ? L : S(e, t, n);
                }
                return (
                    (d.isInText = !0),
                    {
                        startState: function (e) {
                            var t = {
                                tokenize: d,
                                state: b,
                                indented: e || 0,
                                tagName: null,
                                tagStart: null,
                                context: null,
                            };
                            return null != e && (t.baseIndent = e), t;
                        },
                        token: function (e, t) {
                            if ((!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace())) return null;
                            o = null;
                            var n = t.tokenize(e, t);
                            return (
                                (n || o) &&
                                    'comment' != n &&
                                    ((a = null),
                                    (t.state = t.state(o || n, e, t)),
                                    a && (n = 'error' == a ? n + ' error' : a)),
                                n
                            );
                        },
                        indent: function (e, t, r) {
                            var i = e.context;
                            if (e.tokenize.isInAttribute)
                                return e.tagStart == e.indented ? e.stringStartCol + 1 : e.indented + l;
                            if (i && i.noIndent) return n.Pass;
                            if (e.tokenize != f && e.tokenize != d) return r ? r.match(/^(\s*)/)[0].length : 0;
                            if (e.tagName)
                                return !1 !== s.multilineTagIndentPastTag
                                    ? e.tagStart + e.tagName.length + 2
                                    : e.tagStart + l * (s.multilineTagIndentFactor || 1);
                            if (s.alignCDATA && /<!\[CDATA\[/.test(t)) return 0;
                            var o = t && /^<(\/)?([\w_:\.-]*)/.exec(t);
                            if (o && o[1])
                                for (; i; ) {
                                    if (i.tagName == o[2]) {
                                        i = i.prev;
                                        break;
                                    }
                                    if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                                    i = i.prev;
                                }
                            else if (o)
                                for (; i; ) {
                                    var a = s.contextGrabbers[i.tagName];
                                    if (!a || !a.hasOwnProperty(o[2])) break;
                                    i = i.prev;
                                }
                            for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                            return i ? i.indent + l : e.baseIndent || 0;
                        },
                        electricInput: /<\/[\s\w:]+>$/,
                        blockCommentStart: '\x3c!--',
                        blockCommentEnd: '--\x3e',
                        configuration: s.htmlMode ? 'html' : 'xml',
                        helperType: s.htmlMode ? 'html' : 'xml',
                        skipAttribute: function (e) {
                            e.state == T && (e.state = S);
                        },
                        xmlCurrentTag: function (e) {
                            return e.tagName ? { name: e.tagName, close: 'closeTag' == e.type } : null;
                        },
                        xmlCurrentContext: function (e) {
                            for (var t = [], n = e.context; n; n = n.prev) n.tagName && t.push(n.tagName);
                            return t.reverse();
                        },
                    }
                );
            }),
            n.defineMIME('text/xml', 'xml'),
            n.defineMIME('application/xml', 'xml'),
            n.mimeModes.hasOwnProperty('text/html') || n.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('javascript', function (e, t) {
            var r,
                i,
                o = e.indentUnit,
                a = t.statementIndent,
                l = t.jsonld,
                s = t.json || l,
                c = t.typescript,
                u = t.wordCharacters || /[\w$\xa1-\uffff]/,
                d = (function () {
                    function e(e) {
                        return { type: e, style: 'keyword' };
                    }
                    var t = e('keyword a'),
                        n = e('keyword b'),
                        r = e('keyword c'),
                        i = e('keyword d'),
                        o = e('operator'),
                        a = { type: 'atom', style: 'atom' };
                    return {
                        if: e('if'),
                        while: t,
                        with: t,
                        else: n,
                        do: n,
                        try: n,
                        finally: n,
                        return: i,
                        break: i,
                        continue: i,
                        new: e('new'),
                        delete: r,
                        void: r,
                        throw: r,
                        debugger: e('debugger'),
                        var: e('var'),
                        const: e('var'),
                        let: e('var'),
                        function: e('function'),
                        catch: e('catch'),
                        for: e('for'),
                        switch: e('switch'),
                        case: e('case'),
                        default: e('default'),
                        in: o,
                        typeof: o,
                        instanceof: o,
                        true: a,
                        false: a,
                        null: a,
                        undefined: a,
                        NaN: a,
                        Infinity: a,
                        this: e('this'),
                        class: e('class'),
                        super: e('atom'),
                        yield: r,
                        export: e('export'),
                        import: e('import'),
                        extends: r,
                        await: r,
                    };
                })(),
                f = /[+\-*&%=<>!?|~^@]/,
                p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
            function h(e) {
                for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                    if (!n) {
                        if ('/' == t && !r) return;
                        '[' == t ? (r = !0) : r && ']' == t && (r = !1);
                    }
                    n = !n && '\\' == t;
                }
            }
            function m(e, t, n) {
                return (r = e), (i = n), t;
            }
            function g(e, t) {
                var n = e.next();
                if ('"' == n || "'" == n) return (t.tokenize = v(n)), t.tokenize(e, t);
                if ('.' == n && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return m('number', 'number');
                if ('.' == n && e.match('..')) return m('spread', 'meta');
                if (/[\[\]{}\(\),;\:\.]/.test(n)) return m(n);
                if ('=' == n && e.eat('>')) return m('=>', 'operator');
                if ('0' == n && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return m('number', 'number');
                if (/\d/.test(n))
                    return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), m('number', 'number');
                if ('/' == n)
                    return e.eat('*')
                        ? ((t.tokenize = y), y(e, t))
                        : e.eat('/')
                        ? (e.skipToEnd(), m('comment', 'comment'))
                        : et(e, t, 1)
                        ? (h(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), m('regexp', 'string-2'))
                        : (e.eat('='), m('operator', 'operator', e.current()));
                if ('`' == n) return (t.tokenize = b), b(e, t);
                if ('#' == n && '!' == e.peek()) return e.skipToEnd(), m('meta', 'meta');
                if ('#' == n && e.eatWhile(u)) return m('variable', 'property');
                if (
                    ('<' == n && e.match('!--')) ||
                    ('-' == n && e.match('->') && !/\S/.test(e.string.slice(0, e.start)))
                )
                    return e.skipToEnd(), m('comment', 'comment');
                if (f.test(n))
                    return (
                        ('>' == n && t.lexical && '>' == t.lexical.type) ||
                            (e.eat('=')
                                ? ('!' != n && '=' != n) || e.eat('=')
                                : /[<>*+\-|&?]/.test(n) && (e.eat(n), '>' == n && e.eat(n))),
                        '?' == n && e.eat('.') ? m('.') : m('operator', 'operator', e.current())
                    );
                if (u.test(n)) {
                    e.eatWhile(u);
                    var r = e.current();
                    if ('.' != t.lastType) {
                        if (d.propertyIsEnumerable(r)) {
                            var i = d[r];
                            return m(i.type, i.style, r);
                        }
                        if ('async' == r && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
                            return m('async', 'keyword', r);
                    }
                    return m('variable', 'variable', r);
                }
            }
            function v(e) {
                return function (t, n) {
                    var r,
                        i = !1;
                    if (l && '@' == t.peek() && t.match(p)) return (n.tokenize = g), m('jsonld-keyword', 'meta');
                    for (; null != (r = t.next()) && (r != e || i); ) i = !i && '\\' == r;
                    return i || (n.tokenize = g), m('string', 'string');
                };
            }
            function y(e, t) {
                for (var n, r = !1; (n = e.next()); ) {
                    if ('/' == n && r) {
                        t.tokenize = g;
                        break;
                    }
                    r = '*' == n;
                }
                return m('comment', 'comment');
            }
            function b(e, t) {
                for (var n, r = !1; null != (n = e.next()); ) {
                    if (!r && ('`' == n || ('$' == n && e.eat('{')))) {
                        t.tokenize = g;
                        break;
                    }
                    r = !r && '\\' == n;
                }
                return m('quasi', 'string-2', e.current());
            }
            var x = '([{}])';
            function k(e, t) {
                t.fatArrowAt && (t.fatArrowAt = null);
                var n = e.string.indexOf('=>', e.start);
                if (!(n < 0)) {
                    if (c) {
                        var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                        r && (n = r.index);
                    }
                    for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                        var l = e.string.charAt(a),
                            s = x.indexOf(l);
                        if (s >= 0 && s < 3) {
                            if (!i) {
                                ++a;
                                break;
                            }
                            if (0 == --i) {
                                '(' == l && (o = !0);
                                break;
                            }
                        } else if (s >= 3 && s < 6) ++i;
                        else if (u.test(l)) o = !0;
                        else if (/["'\/`]/.test(l))
                            for (; ; --a) {
                                if (0 == a) return;
                                if (e.string.charAt(a - 1) == l && '\\' != e.string.charAt(a - 2)) {
                                    a--;
                                    break;
                                }
                            }
                        else if (o && !i) {
                            ++a;
                            break;
                        }
                    }
                    o && !i && (t.fatArrowAt = a);
                }
            }
            var w = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, 'jsonld-keyword': !0 };
            function C(e, t, n, r, i, o) {
                (this.indented = e),
                    (this.column = t),
                    (this.type = n),
                    (this.prev = i),
                    (this.info = o),
                    null != r && (this.align = r);
            }
            function S(e, t) {
                for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
            }
            function M(e, t, n, r, i) {
                var o = e.cc;
                for (
                    T.state = e,
                        T.stream = i,
                        T.marked = null,
                        T.cc = o,
                        T.style = t,
                        e.lexical.hasOwnProperty('align') || (e.lexical.align = !0);
                    ;

                )
                    if ((o.length ? o.pop() : s ? $ : R)(n, r)) {
                        for (; o.length && o[o.length - 1].lex; ) o.pop()();
                        return T.marked ? T.marked : 'variable' == n && S(e, r) ? 'variable-2' : t;
                    }
            }
            var T = { state: null, column: null, marked: null, cc: null };
            function L() {
                for (var e = arguments.length - 1; e >= 0; e--) T.cc.push(arguments[e]);
            }
            function A() {
                return L.apply(null, arguments), !0;
            }
            function _(e, t) {
                for (var n = t; n; n = n.next) if (n.name == e) return !0;
                return !1;
            }
            function O(e) {
                var n = T.state;
                if (((T.marked = 'def'), n.context))
                    if ('var' == n.lexical.info && n.context && n.context.block) {
                        var r = E(e, n.context);
                        if (null != r) return void (n.context = r);
                    } else if (!_(e, n.localVars)) return void (n.localVars = new F(e, n.localVars));
                t.globalVars && !_(e, n.globalVars) && (n.globalVars = new F(e, n.globalVars));
            }
            function E(e, t) {
                if (t) {
                    if (t.block) {
                        var n = E(e, t.prev);
                        return n ? (n == t.prev ? t : new P(n, t.vars, !0)) : null;
                    }
                    return _(e, t.vars) ? t : new P(t.prev, new F(e, t.vars), !1);
                }
                return null;
            }
            function z(e) {
                return 'public' == e || 'private' == e || 'protected' == e || 'abstract' == e || 'readonly' == e;
            }
            function P(e, t, n) {
                (this.prev = e), (this.vars = t), (this.block = n);
            }
            function F(e, t) {
                (this.name = e), (this.next = t);
            }
            var N = new F('this', new F('arguments', null));
            function D() {
                (T.state.context = new P(T.state.context, T.state.localVars, !1)), (T.state.localVars = N);
            }
            function j() {
                (T.state.context = new P(T.state.context, T.state.localVars, !0)), (T.state.localVars = null);
            }
            function H() {
                (T.state.localVars = T.state.context.vars), (T.state.context = T.state.context.prev);
            }
            function I(e, t) {
                var n = function () {
                    var n = T.state,
                        r = n.indented;
                    if ('stat' == n.lexical.type) r = n.lexical.indented;
                    else for (var i = n.lexical; i && ')' == i.type && i.align; i = i.prev) r = i.indented;
                    n.lexical = new C(r, T.stream.column(), e, null, n.lexical, t);
                };
                return (n.lex = !0), n;
            }
            function q() {
                var e = T.state;
                e.lexical.prev &&
                    (')' == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
            }
            function W(e) {
                function t(n) {
                    return n == e ? A() : ';' == e || '}' == n || ')' == n || ']' == n ? L() : A(t);
                }
                return t;
            }
            function R(e, t) {
                return 'var' == e
                    ? A(I('vardef', t), Se, W(';'), q)
                    : 'keyword a' == e
                    ? A(I('form'), V, R, q)
                    : 'keyword b' == e
                    ? A(I('form'), R, q)
                    : 'keyword d' == e
                    ? T.stream.match(/^\s*$/, !1)
                        ? A()
                        : A(I('stat'), K, W(';'), q)
                    : 'debugger' == e
                    ? A(W(';'))
                    : '{' == e
                    ? A(I('}'), j, de, q, H)
                    : ';' == e
                    ? A()
                    : 'if' == e
                    ? ('else' == T.state.lexical.info && T.state.cc[T.state.cc.length - 1] == q && T.state.cc.pop()(),
                      A(I('form'), V, R, q, Oe))
                    : 'function' == e
                    ? A(Fe)
                    : 'for' == e
                    ? A(I('form'), Ee, R, q)
                    : 'class' == e || (c && 'interface' == t)
                    ? ((T.marked = 'keyword'), A(I('form', 'class' == e ? e : t), Ie, q))
                    : 'variable' == e
                    ? c && 'declare' == t
                        ? ((T.marked = 'keyword'), A(R))
                        : c && ('module' == t || 'enum' == t || 'type' == t) && T.stream.match(/^\s*\w/, !1)
                        ? ((T.marked = 'keyword'),
                          'enum' == t
                              ? A(Ye)
                              : 'type' == t
                              ? A(De, W('operator'), ge, W(';'))
                              : A(I('form'), Me, W('{'), I('}'), de, q, q))
                        : c && 'namespace' == t
                        ? ((T.marked = 'keyword'), A(I('form'), $, R, q))
                        : c && 'abstract' == t
                        ? ((T.marked = 'keyword'), A(R))
                        : A(I('stat'), ie)
                    : 'switch' == e
                    ? A(I('form'), V, W('{'), I('}', 'switch'), j, de, q, q, H)
                    : 'case' == e
                    ? A($, W(':'))
                    : 'default' == e
                    ? A(W(':'))
                    : 'catch' == e
                    ? A(I('form'), D, B, R, q, H)
                    : 'export' == e
                    ? A(I('stat'), Be, q)
                    : 'import' == e
                    ? A(I('stat'), Ue, q)
                    : 'async' == e
                    ? A(R)
                    : '@' == t
                    ? A($, R)
                    : L(I('stat'), $, W(';'), q);
            }
            function B(e) {
                if ('(' == e) return A(je, W(')'));
            }
            function $(e, t) {
                return G(e, t, !1);
            }
            function U(e, t) {
                return G(e, t, !0);
            }
            function V(e) {
                return '(' != e ? L() : A(I(')'), K, W(')'), q);
            }
            function G(e, t, n) {
                if (T.state.fatArrowAt == T.stream.start) {
                    var r = n ? ee : J;
                    if ('(' == e) return A(D, I(')'), ce(je, ')'), q, W('=>'), r, H);
                    if ('variable' == e) return L(D, Me, W('=>'), r, H);
                }
                var i = n ? Q : X;
                return w.hasOwnProperty(e)
                    ? A(i)
                    : 'function' == e
                    ? A(Fe, i)
                    : 'class' == e || (c && 'interface' == t)
                    ? ((T.marked = 'keyword'), A(I('form'), He, q))
                    : 'keyword c' == e || 'async' == e
                    ? A(n ? U : $)
                    : '(' == e
                    ? A(I(')'), K, W(')'), q, i)
                    : 'operator' == e || 'spread' == e
                    ? A(n ? U : $)
                    : '[' == e
                    ? A(I(']'), Qe, q, i)
                    : '{' == e
                    ? ue(ae, '}', null, i)
                    : 'quasi' == e
                    ? L(Y, i)
                    : 'new' == e
                    ? A(te(n))
                    : 'import' == e
                    ? A($)
                    : A();
            }
            function K(e) {
                return e.match(/[;\}\)\],]/) ? L() : L($);
            }
            function X(e, t) {
                return ',' == e ? A(K) : Q(e, t, !1);
            }
            function Q(e, t, n) {
                var r = 0 == n ? X : Q,
                    i = 0 == n ? $ : U;
                return '=>' == e
                    ? A(D, n ? ee : J, H)
                    : 'operator' == e
                    ? /\+\+|--/.test(t) || (c && '!' == t)
                        ? A(r)
                        : c && '<' == t && T.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                        ? A(I('>'), ce(ge, '>'), q, r)
                        : '?' == t
                        ? A($, W(':'), i)
                        : A(i)
                    : 'quasi' == e
                    ? L(Y, r)
                    : ';' != e
                    ? '(' == e
                        ? ue(U, ')', 'call', r)
                        : '.' == e
                        ? A(oe, r)
                        : '[' == e
                        ? A(I(']'), K, W(']'), q, r)
                        : c && 'as' == t
                        ? ((T.marked = 'keyword'), A(ge, r))
                        : 'regexp' == e
                        ? ((T.state.lastType = T.marked = 'operator'),
                          T.stream.backUp(T.stream.pos - T.stream.start - 1),
                          A(i))
                        : void 0
                    : void 0;
            }
            function Y(e, t) {
                return 'quasi' != e ? L() : '${' != t.slice(t.length - 2) ? A(Y) : A($, Z);
            }
            function Z(e) {
                if ('}' == e) return (T.marked = 'string-2'), (T.state.tokenize = b), A(Y);
            }
            function J(e) {
                return k(T.stream, T.state), L('{' == e ? R : $);
            }
            function ee(e) {
                return k(T.stream, T.state), L('{' == e ? R : U);
            }
            function te(e) {
                return function (t) {
                    return '.' == t ? A(e ? re : ne) : 'variable' == t && c ? A(ke, e ? Q : X) : L(e ? U : $);
                };
            }
            function ne(e, t) {
                if ('target' == t) return (T.marked = 'keyword'), A(X);
            }
            function re(e, t) {
                if ('target' == t) return (T.marked = 'keyword'), A(Q);
            }
            function ie(e) {
                return ':' == e ? A(q, R) : L(X, W(';'), q);
            }
            function oe(e) {
                if ('variable' == e) return (T.marked = 'property'), A();
            }
            function ae(e, t) {
                return 'async' == e
                    ? ((T.marked = 'property'), A(ae))
                    : 'variable' == e || 'keyword' == T.style
                    ? ((T.marked = 'property'),
                      'get' == t || 'set' == t
                          ? A(le)
                          : (c &&
                                T.state.fatArrowAt == T.stream.start &&
                                (n = T.stream.match(/^\s*:\s*/, !1)) &&
                                (T.state.fatArrowAt = T.stream.pos + n[0].length),
                            A(se)))
                    : 'number' == e || 'string' == e
                    ? ((T.marked = l ? 'property' : T.style + ' property'), A(se))
                    : 'jsonld-keyword' == e
                    ? A(se)
                    : c && z(t)
                    ? ((T.marked = 'keyword'), A(ae))
                    : '[' == e
                    ? A($, fe, W(']'), se)
                    : 'spread' == e
                    ? A(U, se)
                    : '*' == t
                    ? ((T.marked = 'keyword'), A(ae))
                    : ':' == e
                    ? L(se)
                    : void 0;
                var n;
            }
            function le(e) {
                return 'variable' != e ? L(se) : ((T.marked = 'property'), A(Fe));
            }
            function se(e) {
                return ':' == e ? A(U) : '(' == e ? L(Fe) : void 0;
            }
            function ce(e, t, n) {
                function r(i, o) {
                    if (n ? n.indexOf(i) > -1 : ',' == i) {
                        var a = T.state.lexical;
                        return (
                            'call' == a.info && (a.pos = (a.pos || 0) + 1),
                            A(function (n, r) {
                                return n == t || r == t ? L() : L(e);
                            }, r)
                        );
                    }
                    return i == t || o == t ? A() : n && n.indexOf(';') > -1 ? L(e) : A(W(t));
                }
                return function (n, i) {
                    return n == t || i == t ? A() : L(e, r);
                };
            }
            function ue(e, t, n) {
                for (var r = 3; r < arguments.length; r++) T.cc.push(arguments[r]);
                return A(I(t, n), ce(e, t), q);
            }
            function de(e) {
                return '}' == e ? A() : L(R, de);
            }
            function fe(e, t) {
                if (c) {
                    if (':' == e) return A(ge);
                    if ('?' == t) return A(fe);
                }
            }
            function pe(e, t) {
                if (c && (':' == e || 'in' == t)) return A(ge);
            }
            function he(e) {
                if (c && ':' == e) return T.stream.match(/^\s*\w+\s+is\b/, !1) ? A($, me, ge) : A(ge);
            }
            function me(e, t) {
                if ('is' == t) return (T.marked = 'keyword'), A();
            }
            function ge(e, t) {
                return 'keyof' == t || 'typeof' == t || 'infer' == t
                    ? ((T.marked = 'keyword'), A('typeof' == t ? U : ge))
                    : 'variable' == e || 'void' == t
                    ? ((T.marked = 'type'), A(xe))
                    : '|' == t || '&' == t
                    ? A(ge)
                    : 'string' == e || 'number' == e || 'atom' == e
                    ? A(xe)
                    : '[' == e
                    ? A(I(']'), ce(ge, ']', ','), q, xe)
                    : '{' == e
                    ? A(I('}'), ce(ye, '}', ',;'), q, xe)
                    : '(' == e
                    ? A(ce(be, ')'), ve, xe)
                    : '<' == e
                    ? A(ce(ge, '>'), ge)
                    : void 0;
            }
            function ve(e) {
                if ('=>' == e) return A(ge);
            }
            function ye(e, t) {
                return 'variable' == e || 'keyword' == T.style
                    ? ((T.marked = 'property'), A(ye))
                    : '?' == t || 'number' == e || 'string' == e
                    ? A(ye)
                    : ':' == e
                    ? A(ge)
                    : '[' == e
                    ? A(W('variable'), pe, W(']'), ye)
                    : '(' == e
                    ? L(Ne, ye)
                    : void 0;
            }
            function be(e, t) {
                return ('variable' == e && T.stream.match(/^\s*[?:]/, !1)) || '?' == t
                    ? A(be)
                    : ':' == e
                    ? A(ge)
                    : 'spread' == e
                    ? A(be)
                    : L(ge);
            }
            function xe(e, t) {
                return '<' == t
                    ? A(I('>'), ce(ge, '>'), q, xe)
                    : '|' == t || '.' == e || '&' == t
                    ? A(ge)
                    : '[' == e
                    ? A(ge, W(']'), xe)
                    : 'extends' == t || 'implements' == t
                    ? ((T.marked = 'keyword'), A(ge))
                    : '?' == t
                    ? A(ge, W(':'), ge)
                    : void 0;
            }
            function ke(e, t) {
                if ('<' == t) return A(I('>'), ce(ge, '>'), q, xe);
            }
            function we() {
                return L(ge, Ce);
            }
            function Ce(e, t) {
                if ('=' == t) return A(ge);
            }
            function Se(e, t) {
                return 'enum' == t ? ((T.marked = 'keyword'), A(Ye)) : L(Me, fe, Ae, _e);
            }
            function Me(e, t) {
                return c && z(t)
                    ? ((T.marked = 'keyword'), A(Me))
                    : 'variable' == e
                    ? (O(t), A())
                    : 'spread' == e
                    ? A(Me)
                    : '[' == e
                    ? ue(Le, ']')
                    : '{' == e
                    ? ue(Te, '}')
                    : void 0;
            }
            function Te(e, t) {
                return 'variable' != e || T.stream.match(/^\s*:/, !1)
                    ? ('variable' == e && (T.marked = 'property'),
                      'spread' == e ? A(Me) : '}' == e ? L() : '[' == e ? A($, W(']'), W(':'), Te) : A(W(':'), Me, Ae))
                    : (O(t), A(Ae));
            }
            function Le() {
                return L(Me, Ae);
            }
            function Ae(e, t) {
                if ('=' == t) return A(U);
            }
            function _e(e) {
                if (',' == e) return A(Se);
            }
            function Oe(e, t) {
                if ('keyword b' == e && 'else' == t) return A(I('form', 'else'), R, q);
            }
            function Ee(e, t) {
                return 'await' == t ? A(Ee) : '(' == e ? A(I(')'), ze, q) : void 0;
            }
            function ze(e) {
                return 'var' == e ? A(Se, Pe) : 'variable' == e ? A(Pe) : L(Pe);
            }
            function Pe(e, t) {
                return ')' == e
                    ? A()
                    : ';' == e
                    ? A(Pe)
                    : 'in' == t || 'of' == t
                    ? ((T.marked = 'keyword'), A($, Pe))
                    : L($, Pe);
            }
            function Fe(e, t) {
                return '*' == t
                    ? ((T.marked = 'keyword'), A(Fe))
                    : 'variable' == e
                    ? (O(t), A(Fe))
                    : '(' == e
                    ? A(D, I(')'), ce(je, ')'), q, he, R, H)
                    : c && '<' == t
                    ? A(I('>'), ce(we, '>'), q, Fe)
                    : void 0;
            }
            function Ne(e, t) {
                return '*' == t
                    ? ((T.marked = 'keyword'), A(Ne))
                    : 'variable' == e
                    ? (O(t), A(Ne))
                    : '(' == e
                    ? A(D, I(')'), ce(je, ')'), q, he, H)
                    : c && '<' == t
                    ? A(I('>'), ce(we, '>'), q, Ne)
                    : void 0;
            }
            function De(e, t) {
                return 'keyword' == e || 'variable' == e
                    ? ((T.marked = 'type'), A(De))
                    : '<' == t
                    ? A(I('>'), ce(we, '>'), q)
                    : void 0;
            }
            function je(e, t) {
                return (
                    '@' == t && A($, je),
                    'spread' == e
                        ? A(je)
                        : c && z(t)
                        ? ((T.marked = 'keyword'), A(je))
                        : c && 'this' == e
                        ? A(fe, Ae)
                        : L(Me, fe, Ae)
                );
            }
            function He(e, t) {
                return 'variable' == e ? Ie(e, t) : qe(e, t);
            }
            function Ie(e, t) {
                if ('variable' == e) return O(t), A(qe);
            }
            function qe(e, t) {
                return '<' == t
                    ? A(I('>'), ce(we, '>'), q, qe)
                    : 'extends' == t || 'implements' == t || (c && ',' == e)
                    ? ('implements' == t && (T.marked = 'keyword'), A(c ? ge : $, qe))
                    : '{' == e
                    ? A(I('}'), We, q)
                    : void 0;
            }
            function We(e, t) {
                return 'async' == e ||
                    ('variable' == e &&
                        ('static' == t || 'get' == t || 'set' == t || (c && z(t))) &&
                        T.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
                    ? ((T.marked = 'keyword'), A(We))
                    : 'variable' == e || 'keyword' == T.style
                    ? ((T.marked = 'property'), A(Re, We))
                    : 'number' == e || 'string' == e
                    ? A(Re, We)
                    : '[' == e
                    ? A($, fe, W(']'), Re, We)
                    : '*' == t
                    ? ((T.marked = 'keyword'), A(We))
                    : c && '(' == e
                    ? L(Ne, We)
                    : ';' == e || ',' == e
                    ? A(We)
                    : '}' == e
                    ? A()
                    : '@' == t
                    ? A($, We)
                    : void 0;
            }
            function Re(e, t) {
                if ('?' == t) return A(Re);
                if (':' == e) return A(ge, Ae);
                if ('=' == t) return A(U);
                var n = T.state.lexical.prev;
                return L(n && 'interface' == n.info ? Ne : Fe);
            }
            function Be(e, t) {
                return '*' == t
                    ? ((T.marked = 'keyword'), A(Xe, W(';')))
                    : 'default' == t
                    ? ((T.marked = 'keyword'), A($, W(';')))
                    : '{' == e
                    ? A(ce($e, '}'), Xe, W(';'))
                    : L(R);
            }
            function $e(e, t) {
                return 'as' == t ? ((T.marked = 'keyword'), A(W('variable'))) : 'variable' == e ? L(U, $e) : void 0;
            }
            function Ue(e) {
                return 'string' == e ? A() : '(' == e ? L($) : L(Ve, Ge, Xe);
            }
            function Ve(e, t) {
                return '{' == e ? ue(Ve, '}') : ('variable' == e && O(t), '*' == t && (T.marked = 'keyword'), A(Ke));
            }
            function Ge(e) {
                if (',' == e) return A(Ve, Ge);
            }
            function Ke(e, t) {
                if ('as' == t) return (T.marked = 'keyword'), A(Ve);
            }
            function Xe(e, t) {
                if ('from' == t) return (T.marked = 'keyword'), A($);
            }
            function Qe(e) {
                return ']' == e ? A() : L(ce(U, ']'));
            }
            function Ye() {
                return L(I('form'), Me, W('{'), I('}'), ce(Ze, '}'), q, q);
            }
            function Ze() {
                return L(Me, Ae);
            }
            function Je(e, t) {
                return 'operator' == e.lastType || ',' == e.lastType || f.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
            }
            function et(e, t, n) {
                return (
                    (t.tokenize == g &&
                        /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                            t.lastType
                        )) ||
                    ('quasi' == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
                );
            }
            return (
                (H.lex = !0),
                (q.lex = !0),
                {
                    startState: function (e) {
                        var n = {
                            tokenize: g,
                            lastType: 'sof',
                            cc: [],
                            lexical: new C((e || 0) - o, 0, 'block', !1),
                            localVars: t.localVars,
                            context: t.localVars && new P(null, null, !1),
                            indented: e || 0,
                        };
                        return t.globalVars && 'object' == typeof t.globalVars && (n.globalVars = t.globalVars), n;
                    },
                    token: function (e, t) {
                        if (
                            (e.sol() &&
                                (t.lexical.hasOwnProperty('align') || (t.lexical.align = !1),
                                (t.indented = e.indentation()),
                                k(e, t)),
                            t.tokenize != y && e.eatSpace())
                        )
                            return null;
                        var n = t.tokenize(e, t);
                        return 'comment' == r
                            ? n
                            : ((t.lastType = 'operator' != r || ('++' != i && '--' != i) ? r : 'incdec'),
                              M(t, n, r, i, e));
                    },
                    indent: function (e, r) {
                        if (e.tokenize == y || e.tokenize == b) return n.Pass;
                        if (e.tokenize != g) return 0;
                        var i,
                            l = r && r.charAt(0),
                            s = e.lexical;
                        if (!/^\s*else\b/.test(r))
                            for (var c = e.cc.length - 1; c >= 0; --c) {
                                var u = e.cc[c];
                                if (u == q) s = s.prev;
                                else if (u != Oe) break;
                            }
                        for (
                            ;
                            ('stat' == s.type || 'form' == s.type) &&
                            ('}' == l ||
                                ((i = e.cc[e.cc.length - 1]) && (i == X || i == Q) && !/^[,\.=+\-*:?[\(]/.test(r)));

                        )
                            s = s.prev;
                        a && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
                        var d = s.type,
                            f = l == d;
                        return 'vardef' == d
                            ? s.indented + ('operator' == e.lastType || ',' == e.lastType ? s.info.length + 1 : 0)
                            : 'form' == d && '{' == l
                            ? s.indented
                            : 'form' == d
                            ? s.indented + o
                            : 'stat' == d
                            ? s.indented + (Je(e, r) ? a || o : 0)
                            : 'switch' != s.info || f || 0 == t.doubleIndentSwitch
                            ? s.align
                                ? s.column + (f ? 0 : 1)
                                : s.indented + (f ? 0 : o)
                            : s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
                    },
                    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                    blockCommentStart: s ? null : '/*',
                    blockCommentEnd: s ? null : '*/',
                    blockCommentContinue: s ? null : ' * ',
                    lineComment: s ? null : '//',
                    fold: 'brace',
                    closeBrackets: '()[]{}\'\'""``',
                    helperType: s ? 'json' : 'javascript',
                    jsonldMode: l,
                    jsonMode: s,
                    expressionAllowed: et,
                    skipExpression: function (e) {
                        var t = e.cc[e.cc.length - 1];
                        (t != $ && t != U) || e.cc.pop();
                    },
                }
            );
        }),
            n.registerHelper('wordChars', 'javascript', /[\w$]/),
            n.defineMIME('text/javascript', 'javascript'),
            n.defineMIME('text/ecmascript', 'javascript'),
            n.defineMIME('application/javascript', 'javascript'),
            n.defineMIME('application/x-javascript', 'javascript'),
            n.defineMIME('application/ecmascript', 'javascript'),
            n.defineMIME('application/json', { name: 'javascript', json: !0 }),
            n.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
            n.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
            n.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
            n.defineMIME('application/typescript', { name: 'javascript', typescript: !0 });
    }),
    o(function (e, t) {
        !(function (e) {
            var t = {
                script: [
                    ['lang', /(javascript|babel)/i, 'javascript'],
                    ['type', /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, 'javascript'],
                    ['type', /./, 'text/plain'],
                    [null, null, 'javascript'],
                ],
                style: [
                    ['lang', /^css$/i, 'css'],
                    ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
                    ['type', /./, 'text/plain'],
                    [null, null, 'css'],
                ],
            };
            function n(e, t, n) {
                var r = e.current(),
                    i = r.search(t);
                return (
                    i > -1
                        ? e.backUp(r.length - i)
                        : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)),
                    n
                );
            }
            var r = {};
            function i(e) {
                var t = r[e];
                return t || (r[e] = new RegExp('\\s+' + e + '\\s*=\\s*(\'|")?([^\'"]+)(\'|")?\\s*'));
            }
            function o(e, t) {
                var n = e.match(i(t));
                return n ? /^\s*(.*?)\s*$/.exec(n[2])[1] : '';
            }
            function a(e, t) {
                return new RegExp((t ? '^' : '') + '</s*' + e + 's*>', 'i');
            }
            function l(e, t) {
                for (var n in e)
                    for (var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1; o >= 0; o--) r.unshift(i[o]);
            }
            function s(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (!r[0] || r[1].test(o(t, r[0]))) return r[2];
                }
            }
            e.defineMode(
                'htmlmixed',
                function (r, i) {
                    var o = e.getMode(r, {
                            name: 'xml',
                            htmlMode: !0,
                            multilineTagIndentFactor: i.multilineTagIndentFactor,
                            multilineTagIndentPastTag: i.multilineTagIndentPastTag,
                        }),
                        c = {},
                        u = i && i.tags,
                        d = i && i.scriptTypes;
                    if ((l(t, c), u && l(u, c), d))
                        for (var f = d.length - 1; f >= 0; f--) c.script.unshift(['type', d[f].matches, d[f].mode]);
                    function p(t, i) {
                        var l,
                            u = o.token(t, i.htmlState),
                            d = /\btag\b/.test(u);
                        if (
                            d &&
                            !/[<>\s\/]/.test(t.current()) &&
                            (l = i.htmlState.tagName && i.htmlState.tagName.toLowerCase()) &&
                            c.hasOwnProperty(l)
                        )
                            i.inTag = l + ' ';
                        else if (i.inTag && d && />$/.test(t.current())) {
                            var f = /^([\S]+) (.*)/.exec(i.inTag);
                            i.inTag = null;
                            var h = '>' == t.current() && s(c[f[1]], f[2]),
                                m = e.getMode(r, h),
                                g = a(f[1], !0),
                                v = a(f[1], !1);
                            (i.token = function (e, t) {
                                return e.match(g, !1)
                                    ? ((t.token = p), (t.localState = t.localMode = null), null)
                                    : n(e, v, t.localMode.token(e, t.localState));
                            }),
                                (i.localMode = m),
                                (i.localState = e.startState(m, o.indent(i.htmlState, '', '')));
                        } else i.inTag && ((i.inTag += t.current()), t.eol() && (i.inTag += ' '));
                        return u;
                    }
                    return {
                        startState: function () {
                            return {
                                token: p,
                                inTag: null,
                                localMode: null,
                                localState: null,
                                htmlState: e.startState(o),
                            };
                        },
                        copyState: function (t) {
                            var n;
                            return (
                                t.localState && (n = e.copyState(t.localMode, t.localState)),
                                {
                                    token: t.token,
                                    inTag: t.inTag,
                                    localMode: t.localMode,
                                    localState: n,
                                    htmlState: e.copyState(o, t.htmlState),
                                }
                            );
                        },
                        token: function (e, t) {
                            return t.token(e, t);
                        },
                        indent: function (t, n, r) {
                            return !t.localMode || /^\s*<\//.test(n)
                                ? o.indent(t.htmlState, n, r)
                                : t.localMode.indent
                                ? t.localMode.indent(t.localState, n, r)
                                : e.Pass;
                        },
                        innerMode: function (e) {
                            return { state: e.localState || e.htmlState, mode: e.localMode || o };
                        },
                    };
                },
                'xml',
                'javascript',
                'css'
            ),
                e.defineMIME('text/html', 'htmlmixed');
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('http', function () {
            function e(e, t) {
                return e.skipToEnd(), (t.cur = a), 'error';
            }
            function t(t, r) {
                return t.match(/^HTTP\/\d\.\d/)
                    ? ((r.cur = n), 'keyword')
                    : t.match(/^[A-Z]+/) && /[ \t]/.test(t.peek())
                    ? ((r.cur = i), 'keyword')
                    : e(t, r);
            }
            function n(t, n) {
                var i = t.match(/^\d+/);
                if (!i) return e(t, n);
                n.cur = r;
                var o = Number(i[0]);
                return o >= 100 && o < 200
                    ? 'positive informational'
                    : o >= 200 && o < 300
                    ? 'positive success'
                    : o >= 300 && o < 400
                    ? 'positive redirect'
                    : o >= 400 && o < 500
                    ? 'negative client-error'
                    : o >= 500 && o < 600
                    ? 'negative server-error'
                    : 'error';
            }
            function r(e, t) {
                return e.skipToEnd(), (t.cur = a), null;
            }
            function i(e, t) {
                return e.eatWhile(/\S/), (t.cur = o), 'string-2';
            }
            function o(t, n) {
                return t.match(/^HTTP\/\d\.\d$/) ? ((n.cur = a), 'keyword') : e(t, n);
            }
            function a(e) {
                return e.sol() && !e.eat(/[ \t]/)
                    ? e.match(/^.*?:/)
                        ? 'atom'
                        : (e.skipToEnd(), 'error')
                    : (e.skipToEnd(), 'string');
            }
            function l(e) {
                return e.skipToEnd(), null;
            }
            return {
                token: function (e, t) {
                    var n = t.cur;
                    return n != a && n != l && e.eatSpace() ? null : n(e, t);
                },
                blankLine: function (e) {
                    e.cur = l;
                },
                startState: function () {
                    return { cur: t };
                },
            };
        }),
            n.defineMIME('message/http', 'http');
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t, n, r) {
                (this.state = e), (this.mode = t), (this.depth = n), (this.prev = r);
            }
            function n(r) {
                return new t(e.copyState(r.mode, r.state), r.mode, r.depth, r.prev && n(r.prev));
            }
            e.defineMode(
                'jsx',
                function (r, i) {
                    var o = e.getMode(r, {
                            name: 'xml',
                            allowMissing: !0,
                            multilineTagIndentPastTag: !1,
                            allowMissingTagName: !0,
                        }),
                        a = e.getMode(r, (i && i.base) || 'javascript');
                    function l(e) {
                        var t = e.tagName;
                        e.tagName = null;
                        var n = o.indent(e, '', '');
                        return (e.tagName = t), n;
                    }
                    function s(e, t) {
                        return t.context.mode == o ? c(e, t, t.context) : u(e, t, t.context);
                    }
                    function c(n, i, c) {
                        if (2 == c.depth) return n.match(/^.*?\*\//) ? (c.depth = 1) : n.skipToEnd(), 'comment';
                        if ('{' == n.peek()) {
                            o.skipAttribute(c.state);
                            var u = l(c.state),
                                d = c.state.context;
                            if (d && n.match(/^[^>]*>\s*$/, !1)) {
                                for (; d.prev && !d.startOfLine; ) d = d.prev;
                                d.startOfLine
                                    ? (u -= r.indentUnit)
                                    : c.prev.state.lexical && (u = c.prev.state.lexical.indented);
                            } else 1 == c.depth && (u += r.indentUnit);
                            return (i.context = new t(e.startState(a, u), a, 0, i.context)), null;
                        }
                        if (1 == c.depth) {
                            if ('<' == n.peek())
                                return (
                                    o.skipAttribute(c.state),
                                    (i.context = new t(e.startState(o, l(c.state)), o, 0, i.context)),
                                    null
                                );
                            if (n.match('//')) return n.skipToEnd(), 'comment';
                            if (n.match('/*')) return (c.depth = 2), s(n, i);
                        }
                        var f,
                            p = o.token(n, c.state),
                            h = n.current();
                        return (
                            /\btag\b/.test(p)
                                ? />$/.test(h)
                                    ? c.state.context
                                        ? (c.depth = 0)
                                        : (i.context = i.context.prev)
                                    : /^</.test(h) && (c.depth = 1)
                                : !p && (f = h.indexOf('{')) > -1 && n.backUp(h.length - f),
                            p
                        );
                    }
                    function u(n, r, i) {
                        if ('<' == n.peek() && a.expressionAllowed(n, i.state))
                            return (
                                a.skipExpression(i.state),
                                (r.context = new t(e.startState(o, a.indent(i.state, '', '')), o, 0, r.context)),
                                null
                            );
                        var l = a.token(n, i.state);
                        if (!l && null != i.depth) {
                            var s = n.current();
                            '{' == s ? i.depth++ : '}' == s && 0 == --i.depth && (r.context = r.context.prev);
                        }
                        return l;
                    }
                    return {
                        startState: function () {
                            return { context: new t(e.startState(a), a) };
                        },
                        copyState: function (e) {
                            return { context: n(e.context) };
                        },
                        token: s,
                        indent: function (e, t, n) {
                            return e.context.mode.indent(e.context.state, t, n);
                        },
                        innerMode: function (e) {
                            return e.context;
                        },
                    };
                },
                'xml',
                'javascript'
            ),
                e.defineMIME('text/jsx', 'jsx'),
                e.defineMIME('text/typescript-jsx', { name: 'jsx', base: { name: 'javascript', typescript: !0 } });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            e.modeInfo = [
                { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
                {
                    name: 'PGP',
                    mimes: [
                        'application/pgp',
                        'application/pgp-encrypted',
                        'application/pgp-keys',
                        'application/pgp-signature',
                    ],
                    mode: 'asciiarmor',
                    ext: ['asc', 'pgp', 'sig'],
                },
                { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
                { name: 'Asterisk', mime: 'text/x-asterisk', mode: 'asterisk', file: /^extensions\.conf$/i },
                { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
                { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
                {
                    name: 'C++',
                    mime: 'text/x-c++src',
                    mode: 'clike',
                    ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
                    alias: ['cpp'],
                },
                { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy'] },
                { name: 'C#', mime: 'text/x-csharp', mode: 'clike', ext: ['cs'], alias: ['csharp', 'cs'] },
                { name: 'Clojure', mime: 'text/x-clojure', mode: 'clojure', ext: ['clj', 'cljc', 'cljx'] },
                { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
                { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
                {
                    name: 'CMake',
                    mime: 'text/x-cmake',
                    mode: 'cmake',
                    ext: ['cmake', 'cmake.in'],
                    file: /^CMakeLists\.txt$/,
                },
                {
                    name: 'CoffeeScript',
                    mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
                    mode: 'coffeescript',
                    ext: ['coffee'],
                    alias: ['coffee', 'coffee-script'],
                },
                {
                    name: 'Common Lisp',
                    mime: 'text/x-common-lisp',
                    mode: 'commonlisp',
                    ext: ['cl', 'lisp', 'el'],
                    alias: ['lisp'],
                },
                { name: 'Cypher', mime: 'application/x-cypher-query', mode: 'cypher', ext: ['cyp', 'cypher'] },
                { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
                { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
                { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
                { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
                { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
                { name: 'Dart', mimes: ['application/dart', 'text/x-dart'], mode: 'dart', ext: ['dart'] },
                { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
                { name: 'Django', mime: 'text/x-django', mode: 'django' },
                { name: 'Dockerfile', mime: 'text/x-dockerfile', mode: 'dockerfile', file: /^Dockerfile$/ },
                { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
                { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
                { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
                { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
                { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
                { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
                { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
                { name: 'Embedded Javascript', mime: 'application/x-ejs', mode: 'htmlembedded', ext: ['ejs'] },
                { name: 'Embedded Ruby', mime: 'application/x-erb', mode: 'htmlembedded', ext: ['erb'] },
                { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
                { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
                { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
                { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
                { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
                { name: 'Fortran', mime: 'text/x-fortran', mode: 'fortran', ext: ['f', 'for', 'f77', 'f90', 'f95'] },
                { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
                { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
                { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
                {
                    name: 'GitHub Flavored Markdown',
                    mime: 'text/x-gfm',
                    mode: 'gfm',
                    file: /^(readme|contributing|history)\.md$/i,
                },
                { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
                {
                    name: 'Groovy',
                    mime: 'text/x-groovy',
                    mode: 'groovy',
                    ext: ['groovy', 'gradle'],
                    file: /^Jenkinsfile$/,
                },
                { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
                { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
                { name: 'Haskell (Literate)', mime: 'text/x-literate-haskell', mode: 'haskell-literate', ext: ['lhs'] },
                { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
                { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
                {
                    name: 'ASP.NET',
                    mime: 'application/x-aspx',
                    mode: 'htmlembedded',
                    ext: ['aspx'],
                    alias: ['asp', 'aspx'],
                },
                {
                    name: 'HTML',
                    mime: 'text/html',
                    mode: 'htmlmixed',
                    ext: ['html', 'htm', 'handlebars', 'hbs'],
                    alias: ['xhtml'],
                },
                { name: 'HTTP', mime: 'message/http', mode: 'http' },
                { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
                { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
                { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
                {
                    name: 'Java Server Pages',
                    mime: 'application/x-jsp',
                    mode: 'htmlembedded',
                    ext: ['jsp'],
                    alias: ['jsp'],
                },
                {
                    name: 'JavaScript',
                    mimes: [
                        'text/javascript',
                        'text/ecmascript',
                        'application/javascript',
                        'application/x-javascript',
                        'application/ecmascript',
                    ],
                    mode: 'javascript',
                    ext: ['js'],
                    alias: ['ecmascript', 'js', 'node'],
                },
                {
                    name: 'JSON',
                    mimes: ['application/json', 'application/x-json'],
                    mode: 'javascript',
                    ext: ['json', 'map'],
                    alias: ['json5'],
                },
                {
                    name: 'JSON-LD',
                    mime: 'application/ld+json',
                    mode: 'javascript',
                    ext: ['jsonld'],
                    alias: ['jsonld'],
                },
                { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
                { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
                { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'] },
                { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
                { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
                { name: 'LiveScript', mime: 'text/x-livescript', mode: 'livescript', ext: ['ls'], alias: ['ls'] },
                { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
                { name: 'Markdown', mime: 'text/x-markdown', mode: 'markdown', ext: ['markdown', 'md', 'mkd'] },
                { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
                { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
                { name: 'Mathematica', mime: 'text/x-mathematica', mode: 'mathematica', ext: ['m', 'nb', 'wl', 'wls'] },
                { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
                { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
                { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
                { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
                { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
                { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
                { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
                {
                    name: 'NTriples',
                    mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
                    mode: 'ntriples',
                    ext: ['nt', 'nq'],
                },
                {
                    name: 'Objective-C',
                    mime: 'text/x-objectivec',
                    mode: 'clike',
                    ext: ['m'],
                    alias: ['objective-c', 'objc'],
                },
                {
                    name: 'Objective-C++',
                    mime: 'text/x-objectivec++',
                    mode: 'clike',
                    ext: ['mm'],
                    alias: ['objective-c++', 'objc++'],
                },
                { name: 'OCaml', mime: 'text/x-ocaml', mode: 'mllike', ext: ['ml', 'mli', 'mll', 'mly'] },
                { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
                { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
                { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
                { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
                { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
                {
                    name: 'PHP',
                    mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
                    mode: 'php',
                    ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
                },
                { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
                {
                    name: 'Plain Text',
                    mime: 'text/plain',
                    mode: 'null',
                    ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
                },
                { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
                { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
                {
                    name: 'PowerShell',
                    mime: 'application/x-powershell',
                    mode: 'powershell',
                    ext: ['ps1', 'psd1', 'psm1'],
                },
                {
                    name: 'Properties files',
                    mime: 'text/x-properties',
                    mode: 'properties',
                    ext: ['properties', 'ini', 'in'],
                    alias: ['ini', 'properties'],
                },
                { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
                {
                    name: 'Python',
                    mime: 'text/x-python',
                    mode: 'python',
                    ext: ['BUILD', 'bzl', 'py', 'pyw'],
                    file: /^(BUCK|BUILD)$/,
                },
                { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
                { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
                { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
                { name: 'reStructuredText', mime: 'text/x-rst', mode: 'rst', ext: ['rst'], alias: ['rst'] },
                { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
                { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
                {
                    name: 'Ruby',
                    mime: 'text/x-ruby',
                    mode: 'ruby',
                    ext: ['rb'],
                    alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
                },
                { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
                { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
                { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
                { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
                { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
                { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
                {
                    name: 'Shell',
                    mimes: ['text/x-sh', 'application/x-sh'],
                    mode: 'shell',
                    ext: ['sh', 'ksh', 'bash'],
                    alias: ['bash', 'sh', 'zsh'],
                    file: /^PKGBUILD$/,
                },
                { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
                { name: 'Slim', mimes: ['text/x-slim', 'application/x-slim'], mode: 'slim', ext: ['slim'] },
                { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
                { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
                { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
                { name: 'SML', mime: 'text/x-sml', mode: 'mllike', ext: ['sml', 'sig', 'fun', 'smackspec'] },
                { name: 'Soy', mime: 'text/x-soy', mode: 'soy', ext: ['soy'], alias: ['closure template'] },
                {
                    name: 'SPARQL',
                    mime: 'application/sparql-query',
                    mode: 'sparql',
                    ext: ['rq', 'sparql'],
                    alias: ['sparul'],
                },
                { name: 'Spreadsheet', mime: 'text/x-spreadsheet', mode: 'spreadsheet', alias: ['excel', 'formula'] },
                { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
                { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
                { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
                { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
                { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
                { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
                { name: 'LaTeX', mime: 'text/x-latex', mode: 'stex', ext: ['text', 'ltx', 'tex'], alias: ['tex'] },
                { name: 'SystemVerilog', mime: 'text/x-systemverilog', mode: 'verilog', ext: ['v', 'sv', 'svh'] },
                { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
                { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
                { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
                { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
                { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
                { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
                {
                    name: 'troff',
                    mime: 'text/troff',
                    mode: 'troff',
                    ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                },
                { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
                { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
                { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
                { name: 'TypeScript', mime: 'application/typescript', mode: 'javascript', ext: ['ts'], alias: ['ts'] },
                { name: 'TypeScript-JSX', mime: 'text/typescript-jsx', mode: 'jsx', ext: ['tsx'], alias: ['tsx'] },
                { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
                { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
                { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
                { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
                { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
                { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
                { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
                { name: 'Vue.js Component', mimes: ['script/x-vue', 'text/x-vue'], mode: 'vue', ext: ['vue'] },
                {
                    name: 'XML',
                    mimes: ['application/xml', 'text/xml'],
                    mode: 'xml',
                    ext: ['xml', 'xsl', 'xsd', 'svg'],
                    alias: ['rss', 'wsdl', 'xsd'],
                },
                { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
                { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
                {
                    name: 'YAML',
                    mimes: ['text/x-yaml', 'text/yaml'],
                    mode: 'yaml',
                    ext: ['yaml', 'yml'],
                    alias: ['yml'],
                },
                { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
                { name: 'mscgen', mime: 'text/x-mscgen', mode: 'mscgen', ext: ['mscgen', 'mscin', 'msc'] },
                { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
                { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
                { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] },
            ];
            for (var t = 0; t < e.modeInfo.length; t++) {
                var n = e.modeInfo[t];
                n.mimes && (n.mime = n.mimes[0]);
            }
            (e.findModeByMIME = function (t) {
                t = t.toLowerCase();
                for (var n = 0; n < e.modeInfo.length; n++) {
                    var r = e.modeInfo[n];
                    if (r.mime == t) return r;
                    if (r.mimes) for (var i = 0; i < r.mimes.length; i++) if (r.mimes[i] == t) return r;
                }
                return /\+xml$/.test(t)
                    ? e.findModeByMIME('application/xml')
                    : /\+json$/.test(t)
                    ? e.findModeByMIME('application/json')
                    : void 0;
            }),
                (e.findModeByExtension = function (t) {
                    t = t.toLowerCase();
                    for (var n = 0; n < e.modeInfo.length; n++) {
                        var r = e.modeInfo[n];
                        if (r.ext) for (var i = 0; i < r.ext.length; i++) if (r.ext[i] == t) return r;
                    }
                }),
                (e.findModeByFileName = function (t) {
                    for (var n = 0; n < e.modeInfo.length; n++) {
                        var r = e.modeInfo[n];
                        if (r.file && r.file.test(t)) return r;
                    }
                    var i = t.lastIndexOf('.'),
                        o = i > -1 && t.substring(i + 1, t.length);
                    if (o) return e.findModeByExtension(o);
                }),
                (e.findModeByName = function (t) {
                    t = t.toLowerCase();
                    for (var n = 0; n < e.modeInfo.length; n++) {
                        var r = e.modeInfo[n];
                        if (r.name.toLowerCase() == t) return r;
                        if (r.alias)
                            for (var i = 0; i < r.alias.length; i++) if (r.alias[i].toLowerCase() == t) return r;
                    }
                });
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode(
            'markdown',
            function (e, t) {
                var r = n.getMode(e, 'text/html'),
                    i = 'null' == r.name;
                function o(t) {
                    if (n.findModeByName) {
                        var r = n.findModeByName(t);
                        r && (t = r.mime || r.mimes[0]);
                    }
                    var i = n.getMode(e, t);
                    return 'null' == i.name ? null : i;
                }
                void 0 === t.highlightFormatting && (t.highlightFormatting = !1),
                    void 0 === t.maxBlockquoteDepth && (t.maxBlockquoteDepth = 0),
                    void 0 === t.taskLists && (t.taskLists = !1),
                    void 0 === t.strikethrough && (t.strikethrough = !1),
                    void 0 === t.emoji && (t.emoji = !1),
                    void 0 === t.fencedCodeBlockHighlighting && (t.fencedCodeBlockHighlighting = !0),
                    void 0 === t.fencedCodeBlockDefaultMode && (t.fencedCodeBlockDefaultMode = 'text/plain'),
                    void 0 === t.xml && (t.xml = !0),
                    void 0 === t.tokenTypeOverrides && (t.tokenTypeOverrides = {});
                var a = {
                    header: 'header',
                    code: 'comment',
                    quote: 'quote',
                    list1: 'variable-2',
                    list2: 'variable-3',
                    list3: 'keyword',
                    hr: 'hr',
                    image: 'image',
                    imageAltText: 'image-alt-text',
                    imageMarker: 'image-marker',
                    formatting: 'formatting',
                    linkInline: 'link',
                    linkEmail: 'link',
                    linkText: 'link',
                    linkHref: 'string',
                    em: 'em',
                    strong: 'strong',
                    strikethrough: 'strikethrough',
                    emoji: 'builtin',
                };
                for (var l in a) a.hasOwnProperty(l) && t.tokenTypeOverrides[l] && (a[l] = t.tokenTypeOverrides[l]);
                var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
                    c = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                    u = /^\[(x| )\](?=\s)/i,
                    d = t.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                    f = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                    p = /^[^#!\[\]*_\\<>` "'(~:]+/,
                    h = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                    m = /^\s*\[[^\]]+?\]:.*$/,
                    g = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                    v = '    ';
                function y(e, t, n) {
                    return (t.f = t.inline = n), n(e, t);
                }
                function b(e, t, n) {
                    return (t.f = t.block = n), n(e, t);
                }
                function x(e) {
                    return !e || !/\S/.test(e.string);
                }
                function k(e) {
                    if (
                        ((e.linkTitle = !1),
                        (e.linkHref = !1),
                        (e.linkText = !1),
                        (e.em = !1),
                        (e.strong = !1),
                        (e.strikethrough = !1),
                        (e.quote = 0),
                        (e.indentedCode = !1),
                        e.f == C)
                    ) {
                        var t = i;
                        if (!t) {
                            var o = n.innerMode(r, e.htmlState);
                            t =
                                'xml' == o.mode.name &&
                                null === o.state.tagStart &&
                                !o.state.context &&
                                o.state.tokenize.isInText;
                        }
                        t && ((e.f = L), (e.block = w), (e.htmlState = null));
                    }
                    return (
                        (e.trailingSpace = 0),
                        (e.trailingSpaceNewLine = !1),
                        (e.prevLine = e.thisLine),
                        (e.thisLine = { stream: null }),
                        null
                    );
                }
                function w(e, r) {
                    var i = e.column() === r.indentation,
                        l = x(r.prevLine.stream),
                        p = r.indentedCode,
                        g = r.prevLine.hr,
                        v = !1 !== r.list,
                        b = (r.listStack[r.listStack.length - 1] || 0) + 3;
                    r.indentedCode = !1;
                    var k = r.indentation;
                    if (null === r.indentationDiff && ((r.indentationDiff = r.indentation), v)) {
                        for (r.list = null; k < r.listStack[r.listStack.length - 1]; )
                            r.listStack.pop(),
                                r.listStack.length
                                    ? (r.indentation = r.listStack[r.listStack.length - 1])
                                    : (r.list = !1);
                        !1 !== r.list && (r.indentationDiff = k - r.listStack[r.listStack.length - 1]);
                    }
                    var w = !(l || g || r.prevLine.header || (v && p) || r.prevLine.fencedCodeEnd),
                        C = (!1 === r.list || g || l) && r.indentation <= b && e.match(s),
                        T = null;
                    if (r.indentationDiff >= 4 && (p || r.prevLine.fencedCodeEnd || r.prevLine.header || l))
                        return e.skipToEnd(), (r.indentedCode = !0), a.code;
                    if (e.eatSpace()) return null;
                    if (i && r.indentation <= b && (T = e.match(d)) && T[1].length <= 6)
                        return (
                            (r.quote = 0),
                            (r.header = T[1].length),
                            (r.thisLine.header = !0),
                            t.highlightFormatting && (r.formatting = 'header'),
                            (r.f = r.inline),
                            M(r)
                        );
                    if (r.indentation <= b && e.eat('>'))
                        return (
                            (r.quote = i ? 1 : r.quote + 1),
                            t.highlightFormatting && (r.formatting = 'quote'),
                            e.eatSpace(),
                            M(r)
                        );
                    if (!C && !r.setext && i && r.indentation <= b && (T = e.match(c))) {
                        var L = T[1] ? 'ol' : 'ul';
                        return (
                            (r.indentation = k + e.current().length),
                            (r.list = !0),
                            (r.quote = 0),
                            r.listStack.push(r.indentation),
                            (r.em = !1),
                            (r.strong = !1),
                            (r.code = !1),
                            (r.strikethrough = !1),
                            t.taskLists && e.match(u, !1) && (r.taskList = !0),
                            (r.f = r.inline),
                            t.highlightFormatting && (r.formatting = ['list', 'list-' + L]),
                            M(r)
                        );
                    }
                    return i && r.indentation <= b && (T = e.match(h, !0))
                        ? ((r.quote = 0),
                          (r.fencedEndRE = new RegExp(T[1] + '+ *$')),
                          (r.localMode = t.fencedCodeBlockHighlighting && o(T[2] || t.fencedCodeBlockDefaultMode)),
                          r.localMode && (r.localState = n.startState(r.localMode)),
                          (r.f = r.block = S),
                          t.highlightFormatting && (r.formatting = 'code-block'),
                          (r.code = -1),
                          M(r))
                        : r.setext ||
                          (!((w && v) || r.quote || !1 !== r.list || r.code || C || m.test(e.string)) &&
                              (T = e.lookAhead(1)) &&
                              (T = T.match(f)))
                        ? (r.setext
                              ? ((r.header = r.setext),
                                (r.setext = 0),
                                e.skipToEnd(),
                                t.highlightFormatting && (r.formatting = 'header'))
                              : ((r.header = '=' == T[0].charAt(0) ? 1 : 2), (r.setext = r.header)),
                          (r.thisLine.header = !0),
                          (r.f = r.inline),
                          M(r))
                        : C
                        ? (e.skipToEnd(), (r.hr = !0), (r.thisLine.hr = !0), a.hr)
                        : '[' === e.peek()
                        ? y(e, r, z)
                        : y(e, r, r.inline);
                }
                function C(e, t) {
                    var o = r.token(e, t.htmlState);
                    if (!i) {
                        var a = n.innerMode(r, t.htmlState);
                        (('xml' == a.mode.name &&
                            null === a.state.tagStart &&
                            !a.state.context &&
                            a.state.tokenize.isInText) ||
                            (t.md_inside && e.current().indexOf('>') > -1)) &&
                            ((t.f = L), (t.block = w), (t.htmlState = null));
                    }
                    return o;
                }
                function S(e, n) {
                    var r,
                        i = n.listStack[n.listStack.length - 1] || 0,
                        o = n.indentation < i,
                        l = i + 3;
                    return n.fencedEndRE && n.indentation <= l && (o || e.match(n.fencedEndRE))
                        ? (t.highlightFormatting && (n.formatting = 'code-block'),
                          o || (r = M(n)),
                          (n.localMode = n.localState = null),
                          (n.block = w),
                          (n.f = L),
                          (n.fencedEndRE = null),
                          (n.code = 0),
                          (n.thisLine.fencedCodeEnd = !0),
                          o ? b(e, n, n.block) : r)
                        : n.localMode
                        ? n.localMode.token(e, n.localState)
                        : (e.skipToEnd(), a.code);
                }
                function M(e) {
                    var n = [];
                    if (e.formatting) {
                        n.push(a.formatting), 'string' == typeof e.formatting && (e.formatting = [e.formatting]);
                        for (var r = 0; r < e.formatting.length; r++)
                            n.push(a.formatting + '-' + e.formatting[r]),
                                'header' === e.formatting[r] &&
                                    n.push(a.formatting + '-' + e.formatting[r] + '-' + e.header),
                                'quote' === e.formatting[r] &&
                                    (!t.maxBlockquoteDepth || t.maxBlockquoteDepth >= e.quote
                                        ? n.push(a.formatting + '-' + e.formatting[r] + '-' + e.quote)
                                        : n.push('error'));
                    }
                    if (e.taskOpen) return n.push('meta'), n.length ? n.join(' ') : null;
                    if (e.taskClosed) return n.push('property'), n.length ? n.join(' ') : null;
                    if (
                        (e.linkHref
                            ? n.push(a.linkHref, 'url')
                            : (e.strong && n.push(a.strong),
                              e.em && n.push(a.em),
                              e.strikethrough && n.push(a.strikethrough),
                              e.emoji && n.push(a.emoji),
                              e.linkText && n.push(a.linkText),
                              e.code && n.push(a.code),
                              e.image && n.push(a.image),
                              e.imageAltText && n.push(a.imageAltText, 'link'),
                              e.imageMarker && n.push(a.imageMarker)),
                        e.header && n.push(a.header, a.header + '-' + e.header),
                        e.quote &&
                            (n.push(a.quote),
                            !t.maxBlockquoteDepth || t.maxBlockquoteDepth >= e.quote
                                ? n.push(a.quote + '-' + e.quote)
                                : n.push(a.quote + '-' + t.maxBlockquoteDepth)),
                        !1 !== e.list)
                    ) {
                        var i = (e.listStack.length - 1) % 3;
                        i ? (1 === i ? n.push(a.list2) : n.push(a.list3)) : n.push(a.list1);
                    }
                    return (
                        e.trailingSpaceNewLine
                            ? n.push('trailing-space-new-line')
                            : e.trailingSpace && n.push('trailing-space-' + (e.trailingSpace % 2 ? 'a' : 'b')),
                        n.length ? n.join(' ') : null
                    );
                }
                function T(e, t) {
                    if (e.match(p, !0)) return M(t);
                }
                function L(e, i) {
                    var o = i.text(e, i);
                    if (void 0 !== o) return o;
                    if (i.list) return (i.list = null), M(i);
                    if (i.taskList)
                        return (
                            ' ' === e.match(u, !0)[1] ? (i.taskOpen = !0) : (i.taskClosed = !0),
                            t.highlightFormatting && (i.formatting = 'task'),
                            (i.taskList = !1),
                            M(i)
                        );
                    if (((i.taskOpen = !1), (i.taskClosed = !1), i.header && e.match(/^#+$/, !0)))
                        return t.highlightFormatting && (i.formatting = 'header'), M(i);
                    var l = e.next();
                    if (i.linkTitle) {
                        i.linkTitle = !1;
                        var s = l;
                        '(' === l && (s = ')');
                        var c =
                            '^\\s*(?:[^' +
                            (s = (s + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1')) +
                            '\\\\]+|\\\\\\\\|\\\\.)' +
                            s;
                        if (e.match(new RegExp(c), !0)) return a.linkHref;
                    }
                    if ('`' === l) {
                        var d = i.formatting;
                        t.highlightFormatting && (i.formatting = 'code'), e.eatWhile('`');
                        var f = e.current().length;
                        if (0 != i.code || (i.quote && 1 != f)) {
                            if (f == i.code) {
                                var p = M(i);
                                return (i.code = 0), p;
                            }
                            return (i.formatting = d), M(i);
                        }
                        return (i.code = f), M(i);
                    }
                    if (i.code) return M(i);
                    if ('\\' === l && (e.next(), t.highlightFormatting)) {
                        var h = M(i),
                            m = a.formatting + '-escape';
                        return h ? h + ' ' + m : m;
                    }
                    if ('!' === l && e.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                        return (
                            (i.imageMarker = !0),
                            (i.image = !0),
                            t.highlightFormatting && (i.formatting = 'image'),
                            M(i)
                        );
                    if ('[' === l && i.imageMarker && e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
                        return (
                            (i.imageMarker = !1),
                            (i.imageAltText = !0),
                            t.highlightFormatting && (i.formatting = 'image'),
                            M(i)
                        );
                    if (']' === l && i.imageAltText) {
                        t.highlightFormatting && (i.formatting = 'image');
                        var h = M(i);
                        return (i.imageAltText = !1), (i.image = !1), (i.inline = i.f = _), h;
                    }
                    if ('[' === l && !i.image)
                        return (
                            (i.linkText && e.match(/^.*?\]/)) ||
                                ((i.linkText = !0), t.highlightFormatting && (i.formatting = 'link')),
                            M(i)
                        );
                    if (']' === l && i.linkText) {
                        t.highlightFormatting && (i.formatting = 'link');
                        var h = M(i);
                        return (i.linkText = !1), (i.inline = i.f = e.match(/\(.*?\)| ?\[.*?\]/, !1) ? _ : L), h;
                    }
                    if ('<' === l && e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1))
                        return (
                            (i.f = i.inline = A),
                            t.highlightFormatting && (i.formatting = 'link'),
                            (h = M(i)) ? (h += ' ') : (h = ''),
                            h + a.linkInline
                        );
                    if ('<' === l && e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1))
                        return (
                            (i.f = i.inline = A),
                            t.highlightFormatting && (i.formatting = 'link'),
                            (h = M(i)) ? (h += ' ') : (h = ''),
                            h + a.linkEmail
                        );
                    if (
                        t.xml &&
                        '<' === l &&
                        e.match(
                            /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                            !1
                        )
                    ) {
                        var v = e.string.indexOf('>', e.pos);
                        if (-1 != v) {
                            var y = e.string.substring(e.start, v);
                            /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(y) && (i.md_inside = !0);
                        }
                        return e.backUp(1), (i.htmlState = n.startState(r)), b(e, i, C);
                    }
                    if (t.xml && '<' === l && e.match(/^\/\w*?>/)) return (i.md_inside = !1), 'tag';
                    if ('*' === l || '_' === l) {
                        for (var x = 1, k = 1 == e.pos ? ' ' : e.string.charAt(e.pos - 2); x < 3 && e.eat(l); ) x++;
                        var w = e.peek() || ' ',
                            S = !/\s/.test(w) && (!g.test(w) || /\s/.test(k) || g.test(k)),
                            T = !/\s/.test(k) && (!g.test(k) || /\s/.test(w) || g.test(w)),
                            O = null,
                            E = null;
                        if (
                            (x % 2 &&
                                (i.em || !S || ('*' !== l && T && !g.test(k))
                                    ? i.em != l || !T || ('*' !== l && S && !g.test(w)) || (O = !1)
                                    : (O = !0)),
                            x > 1 &&
                                (i.strong || !S || ('*' !== l && T && !g.test(k))
                                    ? i.strong != l || !T || ('*' !== l && S && !g.test(w)) || (E = !1)
                                    : (E = !0)),
                            null != E || null != O)
                        )
                            return (
                                t.highlightFormatting &&
                                    (i.formatting = null == O ? 'strong' : null == E ? 'em' : 'strong em'),
                                !0 === O && (i.em = l),
                                !0 === E && (i.strong = l),
                                (p = M(i)),
                                !1 === O && (i.em = !1),
                                !1 === E && (i.strong = !1),
                                p
                            );
                    } else if (' ' === l && (e.eat('*') || e.eat('_'))) {
                        if (' ' === e.peek()) return M(i);
                        e.backUp(1);
                    }
                    if (t.strikethrough)
                        if ('~' === l && e.eatWhile(l)) {
                            if (i.strikethrough)
                                return (
                                    t.highlightFormatting && (i.formatting = 'strikethrough'),
                                    (p = M(i)),
                                    (i.strikethrough = !1),
                                    p
                                );
                            if (e.match(/^[^\s]/, !1))
                                return (
                                    (i.strikethrough = !0),
                                    t.highlightFormatting && (i.formatting = 'strikethrough'),
                                    M(i)
                                );
                        } else if (' ' === l && e.match(/^~~/, !0)) {
                            if (' ' === e.peek()) return M(i);
                            e.backUp(2);
                        }
                    if (t.emoji && ':' === l && e.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
                        (i.emoji = !0), t.highlightFormatting && (i.formatting = 'emoji');
                        var z = M(i);
                        return (i.emoji = !1), z;
                    }
                    return (
                        ' ' === l &&
                            (e.match(/^ +$/, !1)
                                ? i.trailingSpace++
                                : i.trailingSpace && (i.trailingSpaceNewLine = !0)),
                        M(i)
                    );
                }
                function A(e, n) {
                    if ('>' === e.next()) {
                        (n.f = n.inline = L), t.highlightFormatting && (n.formatting = 'link');
                        var r = M(n);
                        return r ? (r += ' ') : (r = ''), r + a.linkInline;
                    }
                    return e.match(/^[^>]+/, !0), a.linkInline;
                }
                function _(e, n) {
                    if (e.eatSpace()) return null;
                    var r = e.next();
                    return '(' === r || '[' === r
                        ? ((n.f = n.inline = E('(' === r ? ')' : ']')),
                          t.highlightFormatting && (n.formatting = 'link-string'),
                          (n.linkHref = !0),
                          M(n))
                        : 'error';
                }
                var O = {
                    ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                    ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
                };
                function E(e) {
                    return function (n, r) {
                        if (n.next() === e) {
                            (r.f = r.inline = L), t.highlightFormatting && (r.formatting = 'link-string');
                            var i = M(r);
                            return (r.linkHref = !1), i;
                        }
                        return n.match(O[e]), (r.linkHref = !0), M(r);
                    };
                }
                function z(e, n) {
                    return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                        ? ((n.f = P),
                          e.next(),
                          t.highlightFormatting && (n.formatting = 'link'),
                          (n.linkText = !0),
                          M(n))
                        : y(e, n, L);
                }
                function P(e, n) {
                    if (e.match(/^\]:/, !0)) {
                        (n.f = n.inline = F), t.highlightFormatting && (n.formatting = 'link');
                        var r = M(n);
                        return (n.linkText = !1), r;
                    }
                    return e.match(/^([^\]\\]|\\.)+/, !0), a.linkText;
                }
                function F(e, t) {
                    return e.eatSpace()
                        ? null
                        : (e.match(/^[^\s]+/, !0),
                          void 0 === e.peek()
                              ? (t.linkTitle = !0)
                              : e.match(
                                    /^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,
                                    !0
                                ),
                          (t.f = t.inline = L),
                          a.linkHref + ' url');
                }
                var N = {
                    startState: function () {
                        return {
                            f: w,
                            prevLine: { stream: null },
                            thisLine: { stream: null },
                            block: w,
                            htmlState: null,
                            indentation: 0,
                            inline: L,
                            text: T,
                            formatting: !1,
                            linkText: !1,
                            linkHref: !1,
                            linkTitle: !1,
                            code: 0,
                            em: !1,
                            strong: !1,
                            header: 0,
                            setext: 0,
                            hr: !1,
                            taskList: !1,
                            list: !1,
                            listStack: [],
                            quote: 0,
                            trailingSpace: 0,
                            trailingSpaceNewLine: !1,
                            strikethrough: !1,
                            emoji: !1,
                            fencedEndRE: null,
                        };
                    },
                    copyState: function (e) {
                        return {
                            f: e.f,
                            prevLine: e.prevLine,
                            thisLine: e.thisLine,
                            block: e.block,
                            htmlState: e.htmlState && n.copyState(r, e.htmlState),
                            indentation: e.indentation,
                            localMode: e.localMode,
                            localState: e.localMode ? n.copyState(e.localMode, e.localState) : null,
                            inline: e.inline,
                            text: e.text,
                            formatting: !1,
                            linkText: e.linkText,
                            linkTitle: e.linkTitle,
                            linkHref: e.linkHref,
                            code: e.code,
                            em: e.em,
                            strong: e.strong,
                            strikethrough: e.strikethrough,
                            emoji: e.emoji,
                            header: e.header,
                            setext: e.setext,
                            hr: e.hr,
                            taskList: e.taskList,
                            list: e.list,
                            listStack: e.listStack.slice(0),
                            quote: e.quote,
                            indentedCode: e.indentedCode,
                            trailingSpace: e.trailingSpace,
                            trailingSpaceNewLine: e.trailingSpaceNewLine,
                            md_inside: e.md_inside,
                            fencedEndRE: e.fencedEndRE,
                        };
                    },
                    token: function (e, t) {
                        if (((t.formatting = !1), e != t.thisLine.stream)) {
                            if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0))) return k(t), null;
                            if (
                                ((t.prevLine = t.thisLine),
                                (t.thisLine = { stream: e }),
                                (t.taskList = !1),
                                (t.trailingSpace = 0),
                                (t.trailingSpaceNewLine = !1),
                                !t.localState && ((t.f = t.block), t.f != C))
                            ) {
                                var n = e.match(/^\s*/, !0)[0].replace(/\t/g, v).length;
                                if (((t.indentation = n), (t.indentationDiff = null), n > 0)) return null;
                            }
                        }
                        return t.f(e, t);
                    },
                    innerMode: function (e) {
                        return e.block == C
                            ? { state: e.htmlState, mode: r }
                            : e.localState
                            ? { state: e.localState, mode: e.localMode }
                            : { state: e, mode: N };
                    },
                    indent: function (e, t, i) {
                        return e.block == C && r.indent
                            ? r.indent(e.htmlState, t, i)
                            : e.localState && e.localMode.indent
                            ? e.localMode.indent(e.localState, t, i)
                            : n.Pass;
                    },
                    blankLine: k,
                    getType: M,
                    blockCommentStart: '\x3c!--',
                    blockCommentEnd: '--\x3e',
                    closeBrackets: '()[]{}\'\'""``',
                    fold: 'markdown',
                };
                return N;
            },
            'xml'
        ),
            n.defineMIME('text/markdown', 'markdown'),
            n.defineMIME('text/x-markdown', 'markdown');
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('powershell', function () {
            function e(e, t) {
                for (
                    var n = void 0 !== (t = t || {}).prefix ? t.prefix : '^',
                        r = void 0 !== t.suffix ? t.suffix : '\\b',
                        i = 0;
                    i < e.length;
                    i++
                )
                    e[i] instanceof RegExp
                        ? (e[i] = e[i].source)
                        : (e[i] = e[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                return new RegExp(n + '(' + e.join('|') + ')' + r, 'i');
            }
            var t = '(?=[^A-Za-z\\d\\-_]|$)',
                n = /[\w\-:]/,
                r = e(
                    [
                        /begin|break|catch|continue|data|default|do|dynamicparam/,
                        /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,
                        /param|process|return|switch|throw|trap|try|until|where|while/,
                    ],
                    { suffix: t }
                ),
                i = /[\[\]{},;`\\\.]|@[({]/,
                o = e(
                    [
                        'f',
                        /b?not/,
                        /[ic]?split/,
                        'join',
                        /is(not)?/,
                        'as',
                        /[ic]?(eq|ne|[gl][te])/,
                        /[ic]?(not)?(like|match|contains)/,
                        /[ic]?replace/,
                        /b?(and|or|xor)/,
                    ],
                    { prefix: '-' }
                ),
                a = e([o, /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/], { suffix: '' }),
                l = /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,
                s = /^[A-Za-z\_][A-Za-z\-\_\d]*\b/,
                c = /[A-Z]:|%|\?/i,
                u = e(
                    [
                        /Add-(Computer|Content|History|Member|PSSnapin|Type)/,
                        /Checkpoint-Computer/,
                        /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,
                        /Compare-Object/,
                        /Complete-Transaction/,
                        /Connect-PSSession/,
                        /ConvertFrom-(Csv|Json|SecureString|StringData)/,
                        /Convert-Path/,
                        /ConvertTo-(Csv|Html|Json|SecureString|Xml)/,
                        /Copy-Item(Property)?/,
                        /Debug-Process/,
                        /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
                        /Disconnect-PSSession/,
                        /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
                        /(Enter|Exit)-PSSession/,
                        /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,
                        /ForEach-Object/,
                        /Format-(Custom|List|Table|Wide)/,
                        new RegExp(
                            'Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)'
                        ),
                        /Group-Object/,
                        /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,
                        /ImportSystemModules/,
                        /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,
                        /Join-Path/,
                        /Limit-EventLog/,
                        /Measure-(Command|Object)/,
                        /Move-Item(Property)?/,
                        new RegExp(
                            'New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)'
                        ),
                        /Out-(Default|File|GridView|Host|Null|Printer|String)/,
                        /Pause/,
                        /(Pop|Push)-Location/,
                        /Read-Host/,
                        /Receive-(Job|PSSession)/,
                        /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,
                        /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,
                        /Rename-(Computer|Item(Property)?)/,
                        /Reset-ComputerMachinePassword/,
                        /Resolve-Path/,
                        /Restart-(Computer|Service)/,
                        /Restore-Computer/,
                        /Resume-(Job|Service)/,
                        /Save-Help/,
                        /Select-(Object|String|Xml)/,
                        /Send-MailMessage/,
                        new RegExp(
                            'Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)'
                        ),
                        /Show-(Command|ControlPanelItem|EventLog)/,
                        /Sort-Object/,
                        /Split-Path/,
                        /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,
                        /Stop-(Computer|Job|Process|Service|Transcript)/,
                        /Suspend-(Job|Service)/,
                        /TabExpansion2/,
                        /Tee-Object/,
                        /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,
                        /Trace-Command/,
                        /Unblock-File/,
                        /Undo-Transaction/,
                        /Unregister-(Event|PSSessionConfiguration)/,
                        /Update-(FormatData|Help|List|TypeData)/,
                        /Use-Transaction/,
                        /Wait-(Event|Job|Process)/,
                        /Where-Object/,
                        /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,
                        /cd|help|mkdir|more|oss|prompt/,
                        /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,
                        /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,
                        /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,
                        /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,
                        /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,
                        /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/,
                    ],
                    { prefix: '', suffix: '' }
                ),
                d = e(
                    [
                        /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,
                        /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,
                        /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,
                        /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,
                        /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,
                        /WarningPreference|WhatIfPreference/,
                        /Event|EventArgs|EventSubscriber|Sender/,
                        /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,
                        /true|false|null/,
                    ],
                    { prefix: '\\$', suffix: '' }
                ),
                f = {
                    keyword: r,
                    number: l,
                    operator: a,
                    builtin: e([c, u, d], { suffix: t }),
                    punctuation: i,
                    identifier: s,
                };
            function p(e, t) {
                var r = t.returnStack[t.returnStack.length - 1];
                if (r && r.shouldReturnFrom(t)) return (t.tokenize = r.tokenize), t.returnStack.pop(), t.tokenize(e, t);
                if (e.eatSpace()) return null;
                if (e.eat('(')) return (t.bracketNesting += 1), 'punctuation';
                if (e.eat(')')) return (t.bracketNesting -= 1), 'punctuation';
                for (var i in f) if (e.match(f[i])) return i;
                var o = e.next();
                if ("'" === o) return h(e, t);
                if ('$' === o) return k(e, t);
                if ('"' === o) return m(e, t);
                if ('<' === o && e.eat('#')) return (t.tokenize = x), x(e, t);
                if ('#' === o) return e.skipToEnd(), 'comment';
                if ('@' === o) {
                    var a = e.eat(/["']/);
                    if (a && e.eol()) return (t.tokenize = C), (t.startQuote = a[0]), C(e, t);
                    if (e.eol()) return 'error';
                    if (e.peek().match(/[({]/)) return 'punctuation';
                    if (e.peek().match(n)) return k(e, t);
                }
                return 'error';
            }
            function h(e, t) {
                for (var n; null != (n = e.peek()); )
                    if ((e.next(), "'" === n && !e.eat("'"))) return (t.tokenize = p), 'string';
                return 'error';
            }
            function m(e, t) {
                for (var n; null != (n = e.peek()); ) {
                    if ('$' === n) return (t.tokenize = g), 'string';
                    if ((e.next(), '`' !== n)) {
                        if ('"' === n && !e.eat('"')) return (t.tokenize = p), 'string';
                    } else e.next();
                }
                return 'error';
            }
            function g(e, t) {
                return b(e, t, m);
            }
            function v(e, t) {
                return (t.tokenize = C), (t.startQuote = '"'), C(e, t);
            }
            function y(e, t) {
                return b(e, t, v);
            }
            function b(e, t, n) {
                if (e.match('$(')) {
                    var r = t.bracketNesting;
                    return (
                        t.returnStack.push({
                            shouldReturnFrom: function (e) {
                                return e.bracketNesting === r;
                            },
                            tokenize: n,
                        }),
                        (t.tokenize = p),
                        (t.bracketNesting += 1),
                        'punctuation'
                    );
                }
                return (
                    e.next(),
                    t.returnStack.push({
                        shouldReturnFrom: function () {
                            return !0;
                        },
                        tokenize: n,
                    }),
                    (t.tokenize = k),
                    t.tokenize(e, t)
                );
            }
            function x(e, t) {
                for (var n, r = !1; null != (n = e.next()); ) {
                    if (r && '>' == n) {
                        t.tokenize = p;
                        break;
                    }
                    r = '#' === n;
                }
                return 'comment';
            }
            function k(e, t) {
                var r = e.peek();
                return e.eat('{')
                    ? ((t.tokenize = w), w(e, t))
                    : null != r && r.match(n)
                    ? (e.eatWhile(n), (t.tokenize = p), 'variable-2')
                    : ((t.tokenize = p), 'error');
            }
            function w(e, t) {
                for (var n; null != (n = e.next()); )
                    if ('}' === n) {
                        t.tokenize = p;
                        break;
                    }
                return 'variable-2';
            }
            function C(e, t) {
                var n = t.startQuote;
                if (e.sol() && e.match(new RegExp(n + '@'))) t.tokenize = p;
                else if ('"' === n)
                    for (; !e.eol(); ) {
                        var r = e.peek();
                        if ('$' === r) return (t.tokenize = y), 'string';
                        e.next(), '`' === r && e.next();
                    }
                else e.skipToEnd();
                return 'string';
            }
            return {
                startState: function () {
                    return { returnStack: [], bracketNesting: 0, tokenize: p };
                },
                token: function (e, t) {
                    return t.tokenize(e, t);
                },
                blockCommentStart: '<#',
                blockCommentEnd: '#>',
                lineComment: '#',
                fold: 'brace',
            };
        }),
            n.defineMIME('application/x-powershell', 'powershell');
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('properties', function () {
            return {
                token: function (e, t) {
                    var n = e.sol() || t.afterSection,
                        r = e.eol();
                    if (
                        ((t.afterSection = !1),
                        n && (t.nextMultiline ? ((t.inMultiline = !0), (t.nextMultiline = !1)) : (t.position = 'def')),
                        r && !t.nextMultiline && ((t.inMultiline = !1), (t.position = 'def')),
                        n)
                    )
                        for (; e.eatSpace(); );
                    var i = e.next();
                    return !n || ('#' !== i && '!' !== i && ';' !== i)
                        ? n && '[' === i
                            ? ((t.afterSection = !0), e.skipTo(']'), e.eat(']'), 'header')
                            : '=' === i || ':' === i
                            ? ((t.position = 'quote'), null)
                            : ('\\' === i && 'quote' === t.position && e.eol() && (t.nextMultiline = !0), t.position)
                        : ((t.position = 'comment'), e.skipToEnd(), 'comment');
                },
                startState: function () {
                    return { position: 'def', nextMultiline: !1, inMultiline: !1, afterSection: !1 };
                },
            };
        }),
            n.defineMIME('text/x-properties', 'properties'),
            n.defineMIME('text/x-ini', 'properties');
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e) {
                return new RegExp('^((' + e.join(')|(') + '))\\b');
            }
            var n = t(['and', 'or', 'not', 'is']),
                r = [
                    'as',
                    'assert',
                    'break',
                    'class',
                    'continue',
                    'def',
                    'del',
                    'elif',
                    'else',
                    'except',
                    'finally',
                    'for',
                    'from',
                    'global',
                    'if',
                    'import',
                    'lambda',
                    'pass',
                    'raise',
                    'return',
                    'try',
                    'while',
                    'with',
                    'yield',
                    'in',
                ],
                i = [
                    'abs',
                    'all',
                    'any',
                    'bin',
                    'bool',
                    'bytearray',
                    'callable',
                    'chr',
                    'classmethod',
                    'compile',
                    'complex',
                    'delattr',
                    'dict',
                    'dir',
                    'divmod',
                    'enumerate',
                    'eval',
                    'filter',
                    'float',
                    'format',
                    'frozenset',
                    'getattr',
                    'globals',
                    'hasattr',
                    'hash',
                    'help',
                    'hex',
                    'id',
                    'input',
                    'int',
                    'isinstance',
                    'issubclass',
                    'iter',
                    'len',
                    'list',
                    'locals',
                    'map',
                    'max',
                    'memoryview',
                    'min',
                    'next',
                    'object',
                    'oct',
                    'open',
                    'ord',
                    'pow',
                    'property',
                    'range',
                    'repr',
                    'reversed',
                    'round',
                    'set',
                    'setattr',
                    'slice',
                    'sorted',
                    'staticmethod',
                    'str',
                    'sum',
                    'super',
                    'tuple',
                    'type',
                    'vars',
                    'zip',
                    '__import__',
                    'NotImplemented',
                    'Ellipsis',
                    '__debug__',
                ];
            function o(e) {
                return e.scopes[e.scopes.length - 1];
            }
            e.registerHelper('hintWords', 'python', r.concat(i)),
                e.defineMode('python', function (a, l) {
                    for (
                        var s = 'error',
                            c = l.delimiters || l.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                            u = [
                                l.singleOperators,
                                l.doubleOperators,
                                l.doubleDelimiters,
                                l.tripleDelimiters,
                                l.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
                            ],
                            d = 0;
                        d < u.length;
                        d++
                    )
                        u[d] || u.splice(d--, 1);
                    var f = l.hangingIndent || a.indentUnit,
                        p = r,
                        h = i;
                    null != l.extra_keywords && (p = p.concat(l.extra_keywords)),
                        null != l.extra_builtins && (h = h.concat(l.extra_builtins));
                    var m = !(l.version && Number(l.version) < 3);
                    if (m) {
                        var g = l.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
                        (p = p.concat(['nonlocal', 'False', 'True', 'None', 'async', 'await'])),
                            (h = h.concat(['ascii', 'bytes', 'exec', 'print']));
                        var v = new RegExp('^(([rbuf]|(br)|(fr))?(\'{3}|"{3}|[\'"]))', 'i');
                    } else (g = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/), (p = p.concat(['exec', 'print'])), (h = h.concat(['apply', 'basestring', 'buffer', 'cmp', 'coerce', 'execfile', 'file', 'intern', 'long', 'raw_input', 'reduce', 'reload', 'unichr', 'unicode', 'xrange', 'False', 'True', 'None'])), (v = new RegExp('^(([rubf]|(ur)|(br))?(\'{3}|"{3}|[\'"]))', 'i'));
                    var y = t(p),
                        b = t(h);
                    function x(e, t) {
                        var n = e.sol() && '\\' != t.lastToken;
                        if ((n && (t.indent = e.indentation()), n && 'py' == o(t).type)) {
                            var r = o(t).offset;
                            if (e.eatSpace()) {
                                var i = e.indentation();
                                return i > r ? S(t) : i < r && T(e, t) && '#' != e.peek() && (t.errorToken = !0), null;
                            }
                            var a = k(e, t);
                            return r > 0 && T(e, t) && (a += ' ' + s), a;
                        }
                        return k(e, t);
                    }
                    function k(e, t, r) {
                        if (e.eatSpace()) return null;
                        if (!r && e.match(/^#.*/)) return 'comment';
                        if (e.match(/^[0-9\.]/, !1)) {
                            var i = !1;
                            if (
                                (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0),
                                e.match(/^[\d_]+\.\d*/) && (i = !0),
                                e.match(/^\.\d+/) && (i = !0),
                                i)
                            )
                                return e.eat(/J/i), 'number';
                            var o = !1;
                            if (
                                (e.match(/^0x[0-9a-f_]+/i) && (o = !0),
                                e.match(/^0b[01_]+/i) && (o = !0),
                                e.match(/^0o[0-7_]+/i) && (o = !0),
                                e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (e.eat(/J/i), (o = !0)),
                                e.match(/^0(?![\dx])/i) && (o = !0),
                                o)
                            )
                                return e.eat(/L/i), 'number';
                        }
                        if (e.match(v))
                            return -1 !== e.current().toLowerCase().indexOf('f')
                                ? ((t.tokenize = w(e.current(), t.tokenize)), t.tokenize(e, t))
                                : ((t.tokenize = C(e.current(), t.tokenize)), t.tokenize(e, t));
                        for (var a = 0; a < u.length; a++) if (e.match(u[a])) return 'operator';
                        return e.match(c)
                            ? 'punctuation'
                            : '.' == t.lastToken && e.match(g)
                            ? 'property'
                            : e.match(y) || e.match(n)
                            ? 'keyword'
                            : e.match(b)
                            ? 'builtin'
                            : e.match(/^(self|cls)\b/)
                            ? 'variable-2'
                            : e.match(g)
                            ? 'def' == t.lastToken || 'class' == t.lastToken
                                ? 'def'
                                : 'variable'
                            : (e.next(), r ? null : s);
                    }
                    function w(e, t) {
                        for (; 'rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0; ) e = e.substr(1);
                        var n = 1 == e.length,
                            r = 'string';
                        function i(e) {
                            return function (t, n) {
                                var r = k(t, n, !0);
                                return (
                                    'punctuation' == r &&
                                        ('{' == t.current()
                                            ? (n.tokenize = i(e + 1))
                                            : '}' == t.current() && (n.tokenize = e > 1 ? i(e - 1) : o)),
                                    r
                                );
                            };
                        }
                        function o(o, a) {
                            for (; !o.eol(); )
                                if ((o.eatWhile(/[^'"\{\}\\]/), o.eat('\\'))) {
                                    if ((o.next(), n && o.eol())) return r;
                                } else {
                                    if (o.match(e)) return (a.tokenize = t), r;
                                    if (o.match('{{')) return r;
                                    if (o.match('{', !1))
                                        return (a.tokenize = i(0)), o.current() ? r : a.tokenize(o, a);
                                    if (o.match('}}')) return r;
                                    if (o.match('}')) return s;
                                    o.eat(/['"]/);
                                }
                            if (n) {
                                if (l.singleLineStringErrors) return s;
                                a.tokenize = t;
                            }
                            return r;
                        }
                        return (o.isString = !0), o;
                    }
                    function C(e, t) {
                        for (; 'rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0; ) e = e.substr(1);
                        var n = 1 == e.length,
                            r = 'string';
                        function i(i, o) {
                            for (; !i.eol(); )
                                if ((i.eatWhile(/[^'"\\]/), i.eat('\\'))) {
                                    if ((i.next(), n && i.eol())) return r;
                                } else {
                                    if (i.match(e)) return (o.tokenize = t), r;
                                    i.eat(/['"]/);
                                }
                            if (n) {
                                if (l.singleLineStringErrors) return s;
                                o.tokenize = t;
                            }
                            return r;
                        }
                        return (i.isString = !0), i;
                    }
                    function S(e) {
                        for (; 'py' != o(e).type; ) e.scopes.pop();
                        e.scopes.push({ offset: o(e).offset + a.indentUnit, type: 'py', align: null });
                    }
                    function M(e, t, n) {
                        var r = e.match(/^([\s\[\{\(]|#.*)*$/, !1) ? null : e.column() + 1;
                        t.scopes.push({ offset: t.indent + f, type: n, align: r });
                    }
                    function T(e, t) {
                        for (var n = e.indentation(); t.scopes.length > 1 && o(t).offset > n; ) {
                            if ('py' != o(t).type) return !0;
                            t.scopes.pop();
                        }
                        return o(t).offset != n;
                    }
                    function L(e, t) {
                        e.sol() && (t.beginningOfLine = !0);
                        var n = t.tokenize(e, t),
                            r = e.current();
                        if (t.beginningOfLine && '@' == r) return e.match(g, !1) ? 'meta' : m ? 'operator' : s;
                        if (
                            (/\S/.test(r) && (t.beginningOfLine = !1),
                            ('variable' != n && 'builtin' != n) || 'meta' != t.lastToken || (n = 'meta'),
                            ('pass' != r && 'return' != r) || (t.dedent += 1),
                            'lambda' == r && (t.lambda = !0),
                            ':' != r || t.lambda || 'py' != o(t).type || S(t),
                            1 == r.length && !/string|comment/.test(n))
                        ) {
                            var i = '[({'.indexOf(r);
                            if ((-1 != i && M(e, t, '])}'.slice(i, i + 1)), -1 != (i = '])}'.indexOf(r)))) {
                                if (o(t).type != r) return s;
                                t.indent = t.scopes.pop().offset - f;
                            }
                        }
                        return (
                            t.dedent > 0 &&
                                e.eol() &&
                                'py' == o(t).type &&
                                (t.scopes.length > 1 && t.scopes.pop(), (t.dedent -= 1)),
                            n
                        );
                    }
                    return {
                        startState: function (e) {
                            return {
                                tokenize: x,
                                scopes: [{ offset: e || 0, type: 'py', align: null }],
                                indent: e || 0,
                                lastToken: null,
                                lambda: !1,
                                dedent: 0,
                            };
                        },
                        token: function (e, t) {
                            var n = t.errorToken;
                            n && (t.errorToken = !1);
                            var r = L(e, t);
                            return (
                                r &&
                                    'comment' != r &&
                                    (t.lastToken = 'keyword' == r || 'punctuation' == r ? e.current() : r),
                                'punctuation' == r && (r = null),
                                e.eol() && t.lambda && (t.lambda = !1),
                                n ? r + ' ' + s : r
                            );
                        },
                        indent: function (t, n) {
                            if (t.tokenize != x) return t.tokenize.isString ? e.Pass : 0;
                            var r = o(t),
                                i = r.type == n.charAt(0);
                            return null != r.align ? r.align - (i ? 1 : 0) : r.offset - (i ? f : 0);
                        },
                        electricInput: /^\s*[\}\]\)]$/,
                        closeBrackets: { triples: '\'"' },
                        lineComment: '#',
                        fold: 'indent',
                    };
                }),
                e.defineMIME('text/x-python', 'python');
            var a = function (e) {
                return e.split(' ');
            };
            e.defineMIME('text/x-cython', {
                name: 'python',
                extra_keywords: a(
                    'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'
                ),
            });
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode(
            'sass',
            function (e) {
                var t = n.mimeModes['text/css'],
                    r = t.propertyKeywords || {},
                    i = t.colorKeywords || {},
                    o = t.valueKeywords || {},
                    a = t.fontProperties || {};
                function l(e) {
                    return new RegExp('^' + e.join('|'));
                }
                var s,
                    c = new RegExp('^' + ['true', 'false', 'null', 'auto'].join('|')),
                    u = l([
                        '\\(',
                        '\\)',
                        '=',
                        '>',
                        '<',
                        '==',
                        '>=',
                        '<=',
                        '\\+',
                        '-',
                        '\\!=',
                        '/',
                        '\\*',
                        '%',
                        'and',
                        'or',
                        'not',
                        ';',
                        '\\{',
                        '\\}',
                        ':',
                    ]),
                    d = /^::?[a-zA-Z_][\w\-]*/;
                function f(e) {
                    return !e.peek() || e.match(/\s+$/, !1);
                }
                function p(e, t) {
                    var n = e.peek();
                    return ')' === n
                        ? (e.next(), (t.tokenizer = b), 'operator')
                        : '(' === n
                        ? (e.next(), e.eatSpace(), 'operator')
                        : "'" === n || '"' === n
                        ? ((t.tokenizer = m(e.next())), 'string')
                        : ((t.tokenizer = m(')', !1)), 'string');
                }
                function h(e, t) {
                    return function (n, r) {
                        return n.sol() && n.indentation() <= e
                            ? ((r.tokenizer = b), b(n, r))
                            : (t && n.skipTo('*/') ? (n.next(), n.next(), (r.tokenizer = b)) : n.skipToEnd(),
                              'comment');
                    };
                }
                function m(e, t) {
                    function n(r, i) {
                        var o = r.next(),
                            a = r.peek(),
                            l = r.string.charAt(r.pos - 2);
                        return ('\\' !== o && a === e) || (o === e && '\\' !== l)
                            ? (o !== e && t && r.next(), f(r) && (i.cursorHalf = 0), (i.tokenizer = b), 'string')
                            : '#' === o && '{' === a
                            ? ((i.tokenizer = g(n)), r.next(), 'operator')
                            : 'string';
                    }
                    return null == t && (t = !0), n;
                }
                function g(e) {
                    return function (t, n) {
                        return '}' === t.peek() ? (t.next(), (n.tokenizer = e), 'operator') : b(t, n);
                    };
                }
                function v(t) {
                    if (0 == t.indentCount) {
                        t.indentCount++;
                        var n = t.scopes[0].offset + e.indentUnit;
                        t.scopes.unshift({ offset: n });
                    }
                }
                function y(e) {
                    1 != e.scopes.length && e.scopes.shift();
                }
                function b(e, t) {
                    var n = e.peek();
                    if (e.match('/*')) return (t.tokenizer = h(e.indentation(), !0)), t.tokenizer(e, t);
                    if (e.match('//')) return (t.tokenizer = h(e.indentation(), !1)), t.tokenizer(e, t);
                    if (e.match('#{')) return (t.tokenizer = g(b)), 'operator';
                    if ('"' === n || "'" === n) return e.next(), (t.tokenizer = m(n)), 'string';
                    if (t.cursorHalf) {
                        if ('#' === n && (e.next(), e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))
                            return f(e) && (t.cursorHalf = 0), 'number';
                        if (e.match(/^-?[0-9\.]+/)) return f(e) && (t.cursorHalf = 0), 'number';
                        if (e.match(/^(px|em|in)\b/)) return f(e) && (t.cursorHalf = 0), 'unit';
                        if (e.match(c)) return f(e) && (t.cursorHalf = 0), 'keyword';
                        if (e.match(/^url/) && '(' === e.peek())
                            return (t.tokenizer = p), f(e) && (t.cursorHalf = 0), 'atom';
                        if ('$' === n) return e.next(), e.eatWhile(/[\w-]/), f(e) && (t.cursorHalf = 0), 'variable-2';
                        if ('!' === n) return e.next(), (t.cursorHalf = 0), e.match(/^[\w]+/) ? 'keyword' : 'operator';
                        if (e.match(u)) return f(e) && (t.cursorHalf = 0), 'operator';
                        if (e.eatWhile(/[\w-]/))
                            return (
                                f(e) && (t.cursorHalf = 0),
                                (s = e.current().toLowerCase()),
                                o.hasOwnProperty(s)
                                    ? 'atom'
                                    : i.hasOwnProperty(s)
                                    ? 'keyword'
                                    : r.hasOwnProperty(s)
                                    ? ((t.prevProp = e.current().toLowerCase()), 'property')
                                    : 'tag'
                            );
                        if (f(e)) return (t.cursorHalf = 0), null;
                    } else {
                        if ('-' === n && e.match(/^-\w+-/)) return 'meta';
                        if ('.' === n) {
                            if ((e.next(), e.match(/^[\w-]+/))) return v(t), 'qualifier';
                            if ('#' === e.peek()) return v(t), 'tag';
                        }
                        if ('#' === n) {
                            if ((e.next(), e.match(/^[\w-]+/))) return v(t), 'builtin';
                            if ('#' === e.peek()) return v(t), 'tag';
                        }
                        if ('$' === n) return e.next(), e.eatWhile(/[\w-]/), 'variable-2';
                        if (e.match(/^-?[0-9\.]+/)) return 'number';
                        if (e.match(/^(px|em|in)\b/)) return 'unit';
                        if (e.match(c)) return 'keyword';
                        if (e.match(/^url/) && '(' === e.peek()) return (t.tokenizer = p), 'atom';
                        if ('=' === n && e.match(/^=[\w-]+/)) return v(t), 'meta';
                        if ('+' === n && e.match(/^\+[\w-]+/)) return 'variable-3';
                        if (
                            ('@' === n && e.match(/@extend/) && (e.match(/\s*[\w]/) || y(t)),
                            e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))
                        )
                            return v(t), 'def';
                        if ('@' === n) return e.next(), e.eatWhile(/[\w-]/), 'def';
                        if (e.eatWhile(/[\w-]/)) {
                            if (e.match(/ *: *[\w-\+\$#!\("']/, !1)) {
                                s = e.current().toLowerCase();
                                var l = t.prevProp + '-' + s;
                                return r.hasOwnProperty(l)
                                    ? 'property'
                                    : r.hasOwnProperty(s)
                                    ? ((t.prevProp = s), 'property')
                                    : a.hasOwnProperty(s)
                                    ? 'property'
                                    : 'tag';
                            }
                            return e.match(/ *:/, !1)
                                ? (v(t), (t.cursorHalf = 1), (t.prevProp = e.current().toLowerCase()), 'property')
                                : (e.match(/ *,/, !1) || v(t), 'tag');
                        }
                        if (':' === n) return e.match(d) ? 'variable-3' : (e.next(), (t.cursorHalf = 1), 'operator');
                    }
                    return e.match(u) ? 'operator' : (e.next(), null);
                }
                function x(t, n) {
                    t.sol() && (n.indentCount = 0);
                    var r = n.tokenizer(t, n),
                        i = t.current();
                    if ((('@return' !== i && '}' !== i) || y(n), null !== r)) {
                        for (
                            var o = t.pos - i.length + e.indentUnit * n.indentCount, a = [], l = 0;
                            l < n.scopes.length;
                            l++
                        ) {
                            var s = n.scopes[l];
                            s.offset <= o && a.push(s);
                        }
                        n.scopes = a;
                    }
                    return r;
                }
                return {
                    startState: function () {
                        return {
                            tokenizer: b,
                            scopes: [{ offset: 0, type: 'sass' }],
                            indentCount: 0,
                            cursorHalf: 0,
                            definedVars: [],
                            definedMixins: [],
                        };
                    },
                    token: function (e, t) {
                        var n = x(e, t);
                        return (t.lastToken = { style: n, content: e.current() }), n;
                    },
                    indent: function (e) {
                        return e.scopes[0].offset;
                    },
                };
            },
            'css'
        ),
            n.defineMIME('text/x-sass', 'sass');
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('shell', function () {
            var e = {};
            function t(t, n) {
                for (var r = 0; r < n.length; r++) e[n[r]] = t;
            }
            var r = ['true', 'false'],
                i = [
                    'if',
                    'then',
                    'do',
                    'else',
                    'elif',
                    'while',
                    'until',
                    'for',
                    'in',
                    'esac',
                    'fi',
                    'fin',
                    'fil',
                    'done',
                    'exit',
                    'set',
                    'unset',
                    'export',
                    'function',
                ],
                o = [
                    'ab',
                    'awk',
                    'bash',
                    'beep',
                    'cat',
                    'cc',
                    'cd',
                    'chown',
                    'chmod',
                    'chroot',
                    'clear',
                    'cp',
                    'curl',
                    'cut',
                    'diff',
                    'echo',
                    'find',
                    'gawk',
                    'gcc',
                    'get',
                    'git',
                    'grep',
                    'hg',
                    'kill',
                    'killall',
                    'ln',
                    'ls',
                    'make',
                    'mkdir',
                    'openssl',
                    'mv',
                    'nc',
                    'nl',
                    'node',
                    'npm',
                    'ping',
                    'ps',
                    'restart',
                    'rm',
                    'rmdir',
                    'sed',
                    'service',
                    'sh',
                    'shopt',
                    'shred',
                    'source',
                    'sort',
                    'sleep',
                    'ssh',
                    'start',
                    'stop',
                    'su',
                    'sudo',
                    'svn',
                    'tee',
                    'telnet',
                    'top',
                    'touch',
                    'vi',
                    'vim',
                    'wall',
                    'wc',
                    'wget',
                    'who',
                    'write',
                    'yes',
                    'zsh',
                ];
            function a(t, n) {
                if (t.eatSpace()) return null;
                var r = t.sol(),
                    i = t.next();
                if ('\\' === i) return t.next(), null;
                if ("'" === i || '"' === i || '`' === i)
                    return n.tokens.unshift(l(i, '`' === i ? 'quote' : 'string')), u(t, n);
                if ('#' === i) return r && t.eat('!') ? (t.skipToEnd(), 'meta') : (t.skipToEnd(), 'comment');
                if ('$' === i) return n.tokens.unshift(c), u(t, n);
                if ('+' === i || '=' === i) return 'operator';
                if ('-' === i) return t.eat('-'), t.eatWhile(/\w/), 'attribute';
                if (/\d/.test(i) && (t.eatWhile(/\d/), t.eol() || !/\w/.test(t.peek()))) return 'number';
                t.eatWhile(/[\w-]/);
                var o = t.current();
                return '=' === t.peek() && /\w+/.test(o) ? 'def' : e.hasOwnProperty(o) ? e[o] : null;
            }
            function l(e, t) {
                var n = '(' == e ? ')' : '{' == e ? '}' : e;
                return function (r, i) {
                    for (var o, a = !1; null != (o = r.next()); ) {
                        if (o === n && !a) {
                            i.tokens.shift();
                            break;
                        }
                        if ('$' === o && !a && "'" !== e && r.peek() != n) {
                            (a = !0), r.backUp(1), i.tokens.unshift(c);
                            break;
                        }
                        if (!a && e !== n && o === e) return i.tokens.unshift(l(e, t)), u(r, i);
                        if (!a && /['"]/.test(o) && !/['"]/.test(e)) {
                            i.tokens.unshift(s(o, 'string')), r.backUp(1);
                            break;
                        }
                        a = !a && '\\' === o;
                    }
                    return t;
                };
            }
            function s(e, t) {
                return function (n, r) {
                    return (r.tokens[0] = l(e, t)), n.next(), u(n, r);
                };
            }
            n.registerHelper('hintWords', 'shell', r.concat(i, o)), t('atom', r), t('keyword', i), t('builtin', o);
            var c = function (e, t) {
                t.tokens.length > 1 && e.eat('$');
                var n = e.next();
                return /['"({]/.test(n)
                    ? ((t.tokens[0] = l(n, '(' == n ? 'quote' : '{' == n ? 'def' : 'string')), u(e, t))
                    : (/\d/.test(n) || e.eatWhile(/\w/), t.tokens.shift(), 'def');
            };
            function u(e, t) {
                return (t.tokens[0] || a)(e, t);
            }
            return {
                startState: function () {
                    return { tokens: [] };
                },
                token: function (e, t) {
                    return u(e, t);
                },
                closeBrackets: '()[]{}\'\'""``',
                lineComment: '#',
                fold: 'brace',
            };
        }),
            n.defineMIME('text/x-sh', 'shell'),
            n.defineMIME('application/x-sh', 'shell');
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e) {
                for (var t; null != (t = e.next()); ) if ('`' == t && !e.eat('`')) return 'variable-2';
                return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? 'variable-2' : null;
            }
            function n(e) {
                for (var t; null != (t = e.next()); ) if ('"' == t && !e.eat('"')) return 'variable-2';
                return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? 'variable-2' : null;
            }
            function r(e) {
                return (
                    e.eat('@') && (e.match(/^session\./), e.match(/^local\./), e.match(/^global\./)),
                    e.eat("'")
                        ? (e.match(/^.*'/), 'variable-2')
                        : e.eat('"')
                        ? (e.match(/^.*"/), 'variable-2')
                        : e.eat('`')
                        ? (e.match(/^.*`/), 'variable-2')
                        : e.match(/^[0-9a-zA-Z$\.\_]+/)
                        ? 'variable-2'
                        : null
                );
            }
            function i(e) {
                return e.eat('N') ? 'atom' : e.match(/^[a-zA-Z.#!?]/) ? 'variable-2' : null;
            }
            e.defineMode('sql', function (t, n) {
                var r = n.client || {},
                    i = n.atoms || { false: !0, true: !0, null: !0 },
                    s = n.builtin || a(l),
                    c = n.keywords || a(o),
                    u = n.operatorChars || /^[*+\-%<>!=&|~^\/]/,
                    d = n.support || {},
                    f = n.hooks || {},
                    p = n.dateSQL || { date: !0, time: !0, timestamp: !0 },
                    h = !1 !== n.backslashStringEscapes,
                    m = n.brackets || /^[\{}\(\)\[\]]/,
                    g = n.punctuation || /^[;.,:]/;
                function v(e, t) {
                    var n = e.next();
                    if (f[n]) {
                        var o = f[n](e, t);
                        if (!1 !== o) return o;
                    }
                    if (
                        d.hexNumber &&
                        (('0' == n && e.match(/^[xX][0-9a-fA-F]+/)) ||
                            (('x' == n || 'X' == n) && e.match(/^'[0-9a-fA-F]+'/)))
                    )
                        return 'number';
                    if (
                        d.binaryNumber &&
                        ((('b' == n || 'B' == n) && e.match(/^'[01]+'/)) || ('0' == n && e.match(/^b[01]+/)))
                    )
                        return 'number';
                    if (n.charCodeAt(0) > 47 && n.charCodeAt(0) < 58)
                        return (
                            e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),
                            d.decimallessFloat && e.match(/^\.(?!\.)/),
                            'number'
                        );
                    if ('?' == n && (e.eatSpace() || e.eol() || e.eat(';'))) return 'variable-3';
                    if ("'" == n || ('"' == n && d.doubleQuote)) return (t.tokenize = y(n)), t.tokenize(e, t);
                    if (
                        ((d.nCharCast && ('n' == n || 'N' == n)) ||
                            (d.charsetCast && '_' == n && e.match(/[a-z][a-z0-9]*/i))) &&
                        ("'" == e.peek() || '"' == e.peek())
                    )
                        return 'keyword';
                    if (
                        d.escapeConstant &&
                        ('e' == n || 'E' == n) &&
                        ("'" == e.peek() || ('"' == e.peek() && d.doubleQuote))
                    )
                        return (
                            (t.tokenize = function (e, t) {
                                return (t.tokenize = y(e.next(), !0))(e, t);
                            }),
                            'keyword'
                        );
                    if (d.commentSlashSlash && '/' == n && e.eat('/')) return e.skipToEnd(), 'comment';
                    if (
                        (d.commentHash && '#' == n) ||
                        ('-' == n && e.eat('-') && (!d.commentSpaceRequired || e.eat(' ')))
                    )
                        return e.skipToEnd(), 'comment';
                    if ('/' == n && e.eat('*')) return (t.tokenize = b(1)), t.tokenize(e, t);
                    if ('.' != n) {
                        if (u.test(n)) return e.eatWhile(u), 'operator';
                        if (m.test(n)) return 'bracket';
                        if (g.test(n)) return e.eatWhile(g), 'punctuation';
                        if (
                            '{' == n &&
                            (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) ||
                                e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))
                        )
                            return 'number';
                        e.eatWhile(/^[_\w\d]/);
                        var a = e.current().toLowerCase();
                        return p.hasOwnProperty(a) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/))
                            ? 'number'
                            : i.hasOwnProperty(a)
                            ? 'atom'
                            : s.hasOwnProperty(a)
                            ? 'builtin'
                            : c.hasOwnProperty(a)
                            ? 'keyword'
                            : r.hasOwnProperty(a)
                            ? 'string-2'
                            : null;
                    }
                    return d.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i)
                        ? 'number'
                        : e.match(/^\.+/)
                        ? null
                        : d.ODBCdotTable && e.match(/^[\w\d_$#]+/)
                        ? 'variable-2'
                        : void 0;
                }
                function y(e, t) {
                    return function (n, r) {
                        for (var i, o = !1; null != (i = n.next()); ) {
                            if (i == e && !o) {
                                r.tokenize = v;
                                break;
                            }
                            o = (h || t) && !o && '\\' == i;
                        }
                        return 'string';
                    };
                }
                function b(e) {
                    return function (t, n) {
                        var r = t.match(/^.*?(\/\*|\*\/)/);
                        return (
                            r
                                ? '/*' == r[1]
                                    ? (n.tokenize = b(e + 1))
                                    : (n.tokenize = e > 1 ? b(e - 1) : v)
                                : t.skipToEnd(),
                            'comment'
                        );
                    };
                }
                function x(e, t, n) {
                    t.context = { prev: t.context, indent: e.indentation(), col: e.column(), type: n };
                }
                function k(e) {
                    (e.indent = e.context.indent), (e.context = e.context.prev);
                }
                return {
                    startState: function () {
                        return { tokenize: v, context: null };
                    },
                    token: function (e, t) {
                        if (
                            (e.sol() && t.context && null == t.context.align && (t.context.align = !1),
                            t.tokenize == v && e.eatSpace())
                        )
                            return null;
                        var n = t.tokenize(e, t);
                        if ('comment' == n) return n;
                        t.context && null == t.context.align && (t.context.align = !0);
                        var r = e.current();
                        return (
                            '(' == r
                                ? x(e, t, ')')
                                : '[' == r
                                ? x(e, t, ']')
                                : t.context && t.context.type == r && k(t),
                            n
                        );
                    },
                    indent: function (n, r) {
                        var i = n.context;
                        if (!i) return e.Pass;
                        var o = r.charAt(0) == i.type;
                        return i.align ? i.col + (o ? 0 : 1) : i.indent + (o ? 0 : t.indentUnit);
                    },
                    blockCommentStart: '/*',
                    blockCommentEnd: '*/',
                    lineComment: d.commentSlashSlash ? '//' : d.commentHash ? '#' : '--',
                    closeBrackets: '()[]{}\'\'""``',
                };
            });
            var o =
                'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ';
            function a(e) {
                for (var t = {}, n = e.split(' '), r = 0; r < n.length; ++r) t[n[r]] = !0;
                return t;
            }
            var l =
                'bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric';
            e.defineMIME('text/x-sql', {
                name: 'sql',
                keywords: a(o + 'begin'),
                builtin: a(l),
                atoms: a('false true null unknown'),
                dateSQL: a('date time timestamp'),
                support: a('ODBCdotTable doubleQuote binaryNumber hexNumber'),
            }),
                e.defineMIME('text/x-mssql', {
                    name: 'sql',
                    client: a(
                        '$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id'
                    ),
                    keywords: a(
                        o +
                            'begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with'
                    ),
                    builtin: a(
                        'bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table '
                    ),
                    atoms: a(
                        'is not null like and or in left right between inner outer join all any some cross unpivot pivot exists'
                    ),
                    operatorChars: /^[*+\-%<>!=^\&|\/]/,
                    brackets: /^[\{}\(\)]/,
                    punctuation: /^[;.,:/]/,
                    backslashStringEscapes: !1,
                    dateSQL: a('date datetimeoffset datetime2 smalldatetime datetime time'),
                    hooks: { '@': r },
                }),
                e.defineMIME('text/x-mysql', {
                    name: 'sql',
                    client: a(
                        'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
                    ),
                    keywords: a(
                        o +
                            'accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
                    ),
                    builtin: a(
                        'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
                    ),
                    atoms: a('false true null unknown'),
                    operatorChars: /^[*+\-%<>!=&|^]/,
                    dateSQL: a('date time timestamp'),
                    support: a(
                        'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
                    ),
                    hooks: { '@': r, '`': t, '\\': i },
                }),
                e.defineMIME('text/x-mariadb', {
                    name: 'sql',
                    client: a(
                        'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
                    ),
                    keywords: a(
                        o +
                            'accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
                    ),
                    builtin: a(
                        'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
                    ),
                    atoms: a('false true null unknown'),
                    operatorChars: /^[*+\-%<>!=&|^]/,
                    dateSQL: a('date time timestamp'),
                    support: a(
                        'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
                    ),
                    hooks: { '@': r, '`': t, '\\': i },
                }),
                e.defineMIME('text/x-sqlite', {
                    name: 'sql',
                    client: a(
                        'auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width'
                    ),
                    keywords: a(
                        o +
                            'abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without'
                    ),
                    builtin: a(
                        'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real'
                    ),
                    atoms: a('null current_date current_time current_timestamp'),
                    operatorChars: /^[*+\-%<>!=&|/~]/,
                    dateSQL: a('date time timestamp datetime'),
                    support: a('decimallessFloat zerolessFloat'),
                    identifierQuote: '"',
                    hooks: { '@': r, ':': r, '?': r, $: r, '"': n, '`': t },
                }),
                e.defineMIME('text/x-cassandra', {
                    name: 'sql',
                    client: {},
                    keywords: a(
                        'add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime'
                    ),
                    builtin: a(
                        'ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint'
                    ),
                    atoms: a('false true infinity NaN'),
                    operatorChars: /^[<>=]/,
                    dateSQL: {},
                    support: a('commentSlashSlash decimallessFloat'),
                    hooks: {},
                }),
                e.defineMIME('text/x-plsql', {
                    name: 'sql',
                    client: a(
                        'appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap'
                    ),
                    keywords: a(
                        'abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work'
                    ),
                    builtin: a(
                        'abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml'
                    ),
                    operatorChars: /^[*\/+\-%<>!=~]/,
                    dateSQL: a('date time timestamp'),
                    support: a('doubleQuote nCharCast zerolessFloat binaryNumber hexNumber'),
                }),
                e.defineMIME('text/x-hive', {
                    name: 'sql',
                    keywords: a(
                        'select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year'
                    ),
                    builtin: a(
                        'bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar'
                    ),
                    atoms: a('false true null unknown'),
                    operatorChars: /^[*+\-%<>!=]/,
                    dateSQL: a('date timestamp'),
                    support: a('ODBCdotTable doubleQuote binaryNumber hexNumber'),
                }),
                e.defineMIME('text/x-pgsql', {
                    name: 'sql',
                    client: a('source'),
                    keywords: a(
                        o +
                            'a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone'
                    ),
                    builtin: a(
                        'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
                    ),
                    atoms: a('false true null unknown'),
                    operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
                    backslashStringEscapes: !1,
                    dateSQL: a('date time timestamp'),
                    support: a(
                        'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant'
                    ),
                }),
                e.defineMIME('text/x-gql', {
                    name: 'sql',
                    keywords: a(
                        'ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where'
                    ),
                    atoms: a('false true'),
                    builtin: a('blob datetime first key __key__ string integer double boolean null'),
                    operatorChars: /^[*+\-%<>!=]/,
                }),
                e.defineMIME('text/x-gpsql', {
                    name: 'sql',
                    client: a('source'),
                    keywords: a(
                        'abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone'
                    ),
                    builtin: a(
                        'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
                    ),
                    atoms: a('false true null unknown'),
                    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                    dateSQL: a('date time timestamp'),
                    support: a(
                        'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast'
                    ),
                }),
                e.defineMIME('text/x-sparksql', {
                    name: 'sql',
                    keywords: a(
                        'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with'
                    ),
                    builtin: a(
                        'tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat'
                    ),
                    atoms: a('false true null'),
                    operatorChars: /^[*\/+\-%<>!=~&|^]/,
                    dateSQL: a('date time timestamp'),
                    support: a('ODBCdotTable doubleQuote zerolessFloat'),
                }),
                e.defineMIME('text/x-esper', {
                    name: 'sql',
                    client: a('source'),
                    keywords: a(
                        'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window'
                    ),
                    builtin: {},
                    atoms: a('false true null'),
                    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                    dateSQL: a('time'),
                    support: a('decimallessFloat zerolessFloat binaryNumber hexNumber'),
                });
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).overlayMode = function (e, t, r) {
            return {
                startState: function () {
                    return {
                        base: n.startState(e),
                        overlay: n.startState(t),
                        basePos: 0,
                        baseCur: null,
                        overlayPos: 0,
                        overlayCur: null,
                        streamSeen: null,
                    };
                },
                copyState: function (r) {
                    return {
                        base: n.copyState(e, r.base),
                        overlay: n.copyState(t, r.overlay),
                        basePos: r.basePos,
                        baseCur: null,
                        overlayPos: r.overlayPos,
                        overlayCur: null,
                    };
                },
                token: function (n, i) {
                    return (
                        (n != i.streamSeen || Math.min(i.basePos, i.overlayPos) < n.start) &&
                            ((i.streamSeen = n), (i.basePos = i.overlayPos = n.start)),
                        n.start == i.basePos && ((i.baseCur = e.token(n, i.base)), (i.basePos = n.pos)),
                        n.start == i.overlayPos &&
                            ((n.pos = n.start), (i.overlayCur = t.token(n, i.overlay)), (i.overlayPos = n.pos)),
                        (n.pos = Math.min(i.basePos, i.overlayPos)),
                        null == i.overlayCur
                            ? i.baseCur
                            : (null != i.baseCur && i.overlay.combineTokens) || (r && null == i.overlay.combineTokens)
                            ? i.baseCur + ' ' + i.overlayCur
                            : i.overlayCur
                    );
                },
                indent:
                    e.indent &&
                    function (t, n, r) {
                        return e.indent(t.base, n, r);
                    },
                electricChars: e.electricChars,
                innerMode: function (t) {
                    return { state: t.base, mode: e };
                },
                blankLine: function (n) {
                    var i, o;
                    return (
                        e.blankLine && (i = e.blankLine(n.base)),
                        t.blankLine && (o = t.blankLine(n.overlay)),
                        null == o ? i : r && null != i ? i + ' ' + o : o
                    );
                },
            };
        };
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('coffeescript', function (e, t) {
            var n = 'error';
            function r(e) {
                return new RegExp('^((' + e.join(')|(') + '))\\b');
            }
            var i = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
                o = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
                a = /^[_A-Za-z$][_A-Za-z$0-9]*/,
                l = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
                s = r(['and', 'or', 'not', 'is', 'isnt', 'in', 'instanceof', 'typeof']),
                c = ['for', 'while', 'loop', 'if', 'unless', 'else', 'switch', 'try', 'catch', 'finally', 'class'],
                u = [
                    'break',
                    'by',
                    'continue',
                    'debugger',
                    'delete',
                    'do',
                    'in',
                    'of',
                    'new',
                    'return',
                    'then',
                    'this',
                    '@',
                    'throw',
                    'when',
                    'until',
                    'extends',
                ],
                d = r(c.concat(u));
            c = r(c);
            var f = /^('{3}|\"{3}|['\"])/,
                p = /^(\/{3}|\/)/,
                h = r(['Infinity', 'NaN', 'undefined', 'null', 'true', 'false', 'on', 'off', 'yes', 'no']);
            function m(e, t) {
                if (e.sol()) {
                    null === t.scope.align && (t.scope.align = !1);
                    var r = t.scope.offset;
                    if (e.eatSpace()) {
                        var c = e.indentation();
                        return c > r && 'coffee' == t.scope.type ? 'indent' : c < r ? 'dedent' : null;
                    }
                    r > 0 && b(e, t);
                }
                if (e.eatSpace()) return null;
                var u = e.peek();
                if (e.match('####')) return e.skipToEnd(), 'comment';
                if (e.match('###')) return (t.tokenize = v), t.tokenize(e, t);
                if ('#' === u) return e.skipToEnd(), 'comment';
                if (e.match(/^-?[0-9\.]/, !1)) {
                    var m = !1;
                    if (
                        (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (m = !0),
                        e.match(/^-?\d+\.\d*/) && (m = !0),
                        e.match(/^-?\.\d+/) && (m = !0),
                        m)
                    )
                        return '.' == e.peek() && e.backUp(1), 'number';
                    var y = !1;
                    if (
                        (e.match(/^-?0x[0-9a-f]+/i) && (y = !0),
                        e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (y = !0),
                        e.match(/^-?0(?![\dx])/i) && (y = !0),
                        y)
                    )
                        return 'number';
                }
                if (e.match(f)) return (t.tokenize = g(e.current(), !1, 'string')), t.tokenize(e, t);
                if (e.match(p)) {
                    if ('/' != e.current() || e.match(/^.*\//, !1))
                        return (t.tokenize = g(e.current(), !0, 'string-2')), t.tokenize(e, t);
                    e.backUp(1);
                }
                return e.match(i) || e.match(s)
                    ? 'operator'
                    : e.match(o)
                    ? 'punctuation'
                    : e.match(h)
                    ? 'atom'
                    : e.match(l) || (t.prop && e.match(a))
                    ? 'property'
                    : e.match(d)
                    ? 'keyword'
                    : e.match(a)
                    ? 'variable'
                    : (e.next(), n);
            }
            function g(e, r, i) {
                return function (o, a) {
                    for (; !o.eol(); )
                        if ((o.eatWhile(/[^'"\/\\]/), o.eat('\\'))) {
                            if ((o.next(), r && o.eol())) return i;
                        } else {
                            if (o.match(e)) return (a.tokenize = m), i;
                            o.eat(/['"\/]/);
                        }
                    return r && (t.singleLineStringErrors ? (i = n) : (a.tokenize = m)), i;
                };
            }
            function v(e, t) {
                for (; !e.eol(); ) {
                    if ((e.eatWhile(/[^#]/), e.match('###'))) {
                        t.tokenize = m;
                        break;
                    }
                    e.eatWhile('#');
                }
                return 'comment';
            }
            function y(t, n, r) {
                r = r || 'coffee';
                for (var i = 0, o = !1, a = null, l = n.scope; l; l = l.prev)
                    if ('coffee' === l.type || '}' == l.type) {
                        i = l.offset + e.indentUnit;
                        break;
                    }
                'coffee' !== r
                    ? ((o = null), (a = t.column() + t.current().length))
                    : n.scope.align && (n.scope.align = !1),
                    (n.scope = { offset: i, type: r, prev: n.scope, align: o, alignOffset: a });
            }
            function b(e, t) {
                if (t.scope.prev) {
                    if ('coffee' === t.scope.type) {
                        for (var n = e.indentation(), r = !1, i = t.scope; i; i = i.prev)
                            if (n === i.offset) {
                                r = !0;
                                break;
                            }
                        if (!r) return !0;
                        for (; t.scope.prev && t.scope.offset !== n; ) t.scope = t.scope.prev;
                        return !1;
                    }
                    return (t.scope = t.scope.prev), !1;
                }
            }
            function x(e, t) {
                var r = t.tokenize(e, t),
                    i = e.current();
                'return' === i && (t.dedent = !0),
                    ((('->' === i || '=>' === i) && e.eol()) || 'indent' === r) && y(e, t);
                var o = '[({'.indexOf(i);
                if (
                    (-1 !== o && y(e, t, '])}'.slice(o, o + 1)),
                    c.exec(i) && y(e, t),
                    'then' == i && b(e, t),
                    'dedent' === r && b(e, t))
                )
                    return n;
                if (-1 !== (o = '])}'.indexOf(i))) {
                    for (; 'coffee' == t.scope.type && t.scope.prev; ) t.scope = t.scope.prev;
                    t.scope.type == i && (t.scope = t.scope.prev);
                }
                return (
                    t.dedent &&
                        e.eol() &&
                        ('coffee' == t.scope.type && t.scope.prev && (t.scope = t.scope.prev), (t.dedent = !1)),
                    r
                );
            }
            return {
                startState: function (e) {
                    return {
                        tokenize: m,
                        scope: { offset: e || 0, type: 'coffee', prev: null, align: !1 },
                        prop: !1,
                        dedent: 0,
                    };
                },
                token: function (e, t) {
                    var n = null === t.scope.align && t.scope;
                    n && e.sol() && (n.align = !1);
                    var r = x(e, t);
                    return (
                        r &&
                            'comment' != r &&
                            (n && (n.align = !0), (t.prop = 'punctuation' == r && '.' == e.current())),
                        r
                    );
                },
                indent: function (e, t) {
                    if (e.tokenize != m) return 0;
                    var n = e.scope,
                        r = t && '])}'.indexOf(t.charAt(0)) > -1;
                    if (r) for (; 'coffee' == n.type && n.prev; ) n = n.prev;
                    var i = r && n.type === t.charAt(0);
                    return n.align ? n.alignOffset - (i ? 1 : 0) : (i ? n.prev : n).offset;
                },
                lineComment: '#',
                fold: 'indent',
            };
        }),
            n.defineMIME('application/vnd.coffeescript', 'coffeescript'),
            n.defineMIME('text/x-coffeescript', 'coffeescript'),
            n.defineMIME('text/coffeescript', 'coffeescript');
    }),
    o(function (e, t) {
        !(function (e) {
            e.defineMode('stylus', function (e) {
                for (
                    var p,
                        h,
                        y,
                        b,
                        x = e.indentUnit,
                        k = '',
                        w = g(t),
                        C = /^(a|b|i|s|col|em)$/i,
                        S = g(o),
                        M = g(a),
                        T = g(c),
                        L = g(s),
                        A = g(n),
                        _ = m(n),
                        O = g(i),
                        E = g(r),
                        z = g(l),
                        P = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,
                        F = m(u),
                        N = g(d),
                        D = new RegExp(/^\-(moz|ms|o|webkit)-/i),
                        j = g(f),
                        H = '',
                        I = {};
                    k.length < x;

                )
                    k += ' ';
                function q(e, t) {
                    if (
                        ((H = e.string.match(
                            /(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/
                        )),
                        (t.context.line.firstWord = H ? H[0].replace(/^\s*/, '') : ''),
                        (t.context.line.indent = e.indentation()),
                        (p = e.peek()),
                        e.match('//'))
                    )
                        return e.skipToEnd(), ['comment', 'comment'];
                    if (e.match('/*')) return (t.tokenize = W), W(e, t);
                    if ('"' == p || "'" == p) return e.next(), (t.tokenize = R(p)), t.tokenize(e, t);
                    if ('@' == p) return e.next(), e.eatWhile(/[\w\\-]/), ['def', e.current()];
                    if ('#' == p) {
                        if ((e.next(), e.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)))
                            return ['atom', 'atom'];
                        if (e.match(/^[a-z][\w-]*/i)) return ['builtin', 'hash'];
                    }
                    return e.match(D)
                        ? ['meta', 'vendor-prefixes']
                        : e.match(/^-?[0-9]?\.?[0-9]/)
                        ? (e.eatWhile(/[a-z%]/i), ['number', 'unit'])
                        : '!' == p
                        ? (e.next(), [e.match(/^(important|optional)/i) ? 'keyword' : 'operator', 'important'])
                        : '.' == p && e.match(/^\.[a-z][\w-]*/i)
                        ? ['qualifier', 'qualifier']
                        : e.match(_)
                        ? ('(' == e.peek() && (t.tokenize = B), ['property', 'word'])
                        : e.match(/^[a-z][\w-]*\(/i)
                        ? (e.backUp(1), ['keyword', 'mixin'])
                        : e.match(/^(\+|-)[a-z][\w-]*\(/i)
                        ? (e.backUp(1), ['keyword', 'block-mixin'])
                        : e.string.match(/^\s*&/) && e.match(/^[-_]+[a-z][\w-]*/)
                        ? ['qualifier', 'qualifier']
                        : e.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)
                        ? (e.backUp(1), ['variable-3', 'reference'])
                        : e.match(/^&{1}\s*$/)
                        ? ['variable-3', 'reference']
                        : e.match(F)
                        ? ['operator', 'operator']
                        : e.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)
                        ? e.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) && !X(e.current())
                            ? (e.match(/\./), ['variable-2', 'variable-name'])
                            : ['variable-2', 'word']
                        : e.match(P)
                        ? ['operator', e.current()]
                        : /[:;,{}\[\]\(\)]/.test(p)
                        ? (e.next(), [null, p])
                        : (e.next(), [null, null]);
                }
                function W(e, t) {
                    for (var n, r = !1; null != (n = e.next()); ) {
                        if (r && '/' == n) {
                            t.tokenize = null;
                            break;
                        }
                        r = '*' == n;
                    }
                    return ['comment', 'comment'];
                }
                function R(e) {
                    return function (t, n) {
                        for (var r, i = !1; null != (r = t.next()); ) {
                            if (r == e && !i) {
                                ')' == e && t.backUp(1);
                                break;
                            }
                            i = !i && '\\' == r;
                        }
                        return (r == e || (!i && ')' != e)) && (n.tokenize = null), ['string', 'string'];
                    };
                }
                function B(e, t) {
                    return (
                        e.next(), e.match(/\s*[\"\')]/, !1) ? (t.tokenize = null) : (t.tokenize = R(')')), [null, '(']
                    );
                }
                function $(e, t, n, r) {
                    (this.type = e),
                        (this.indent = t),
                        (this.prev = n),
                        (this.line = r || { firstWord: '', indent: 0 });
                }
                function U(e, t, n, r) {
                    return (r = r >= 0 ? r : x), (e.context = new $(n, t.indentation() + r, e.context)), n;
                }
                function V(e, t) {
                    var n = e.context.indent - x;
                    return (t = t || !1), (e.context = e.context.prev), t && (e.context.indent = n), e.context.type;
                }
                function G(e, t, n) {
                    return I[n.context.type](e, t, n);
                }
                function K(e, t, n, r) {
                    for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
                    return G(e, t, n);
                }
                function X(e) {
                    return e.toLowerCase() in w;
                }
                function Q(e) {
                    return (e = e.toLowerCase()) in S || e in z;
                }
                function Y(e) {
                    return e.toLowerCase() in N;
                }
                function Z(e) {
                    return e.toLowerCase().match(D);
                }
                function J(e) {
                    var t = e.toLowerCase(),
                        n = 'variable-2';
                    return (
                        X(e)
                            ? (n = 'tag')
                            : Y(e)
                            ? (n = 'block-keyword')
                            : Q(e)
                            ? (n = 'property')
                            : t in T || t in j
                            ? (n = 'atom')
                            : 'return' == t || t in L
                            ? (n = 'keyword')
                            : e.match(/^[A-Z]/) && (n = 'string'),
                        n
                    );
                }
                function ee(e, t) {
                    return (ie(t) && ('{' == e || ']' == e || 'hash' == e || 'qualifier' == e)) || 'block-mixin' == e;
                }
                function te(e, t) {
                    return '{' == e && t.match(/^\s*\$?[\w-]+/i, !1);
                }
                function ne(e, t) {
                    return ':' == e && t.match(/^[a-z-]+/, !1);
                }
                function re(e) {
                    return e.sol() || e.string.match(new RegExp('^\\s*' + v(e.current())));
                }
                function ie(e) {
                    return e.eol() || e.match(/^\s*$/, !1);
                }
                function oe(e) {
                    var t = /^\s*[-_]*[a-z0-9]+[\w-]*/i,
                        n = 'string' == typeof e ? e.match(t) : e.string.match(t);
                    return n ? n[0].replace(/^\s*/, '') : '';
                }
                return (
                    (I.block = function (e, t, n) {
                        if (('comment' == e && re(t)) || (',' == e && ie(t)) || 'mixin' == e)
                            return U(n, t, 'block', 0);
                        if (te(e, t)) return U(n, t, 'interpolation');
                        if (ie(t) && ']' == e && !/^\s*(\.|#|:|\[|\*|&)/.test(t.string) && !X(oe(t)))
                            return U(n, t, 'block', 0);
                        if (ee(e, t)) return U(n, t, 'block');
                        if ('}' == e && ie(t)) return U(n, t, 'block', 0);
                        if ('variable-name' == e)
                            return t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || Y(oe(t))
                                ? U(n, t, 'variableName')
                                : U(n, t, 'variableName', 0);
                        if ('=' == e) return ie(t) || Y(oe(t)) ? U(n, t, 'block') : U(n, t, 'block', 0);
                        if ('*' == e && (ie(t) || t.match(/\s*(,|\.|#|\[|:|{)/, !1)))
                            return (b = 'tag'), U(n, t, 'block');
                        if (ne(e, t)) return U(n, t, 'pseudo');
                        if (/@(font-face|media|supports|(-moz-)?document)/.test(e))
                            return U(n, t, ie(t) ? 'block' : 'atBlock');
                        if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return U(n, t, 'keyframes');
                        if (/@extends?/.test(e)) return U(n, t, 'extend', 0);
                        if (e && '@' == e.charAt(0))
                            return t.indentation() > 0 && Q(t.current().slice(1))
                                ? ((b = 'variable-2'), 'block')
                                : /(@import|@require|@charset)/.test(e)
                                ? U(n, t, 'block', 0)
                                : U(n, t, 'block');
                        if ('reference' == e && ie(t)) return U(n, t, 'block');
                        if ('(' == e) return U(n, t, 'parens');
                        if ('vendor-prefixes' == e) return U(n, t, 'vendorPrefixes');
                        if ('word' == e) {
                            var r = t.current();
                            if ('property' == (b = J(r))) return re(t) ? U(n, t, 'block', 0) : ((b = 'atom'), 'block');
                            if ('tag' == b) {
                                if (/embed|menu|pre|progress|sub|table/.test(r) && Q(oe(t)))
                                    return (b = 'atom'), 'block';
                                if (t.string.match(new RegExp('\\[\\s*' + r + '|' + r + '\\s*\\]')))
                                    return (b = 'atom'), 'block';
                                if (
                                    C.test(r) &&
                                    ((re(t) && t.string.match(/=/)) ||
                                        (!re(t) && !t.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !X(oe(t))))
                                )
                                    return (b = 'variable-2'), Y(oe(t)) ? 'block' : U(n, t, 'block', 0);
                                if (ie(t)) return U(n, t, 'block');
                            }
                            if ('block-keyword' == b)
                                return (b = 'keyword'), t.current(/(if|unless)/) && !re(t) ? 'block' : U(n, t, 'block');
                            if ('return' == r) return U(n, t, 'block', 0);
                            if ('variable-2' == b && t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) return U(n, t, 'block');
                        }
                        return n.context.type;
                    }),
                    (I.parens = function (e, t, n) {
                        if ('(' == e) return U(n, t, 'parens');
                        if (')' == e)
                            return 'parens' == n.context.prev.type
                                ? V(n)
                                : (t.string.match(/^[a-z][\w-]*\(/i) && ie(t)) ||
                                  Y(oe(t)) ||
                                  /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(oe(t)) ||
                                  (!t.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && X(oe(t)))
                                ? U(n, t, 'block')
                                : t.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) ||
                                  t.string.match(/^\s*(\(|\)|[0-9])/) ||
                                  t.string.match(/^\s+[a-z][\w-]*\(/i) ||
                                  t.string.match(/^\s+[\$-]?[a-z]/i)
                                ? U(n, t, 'block', 0)
                                : ie(t)
                                ? U(n, t, 'block')
                                : U(n, t, 'block', 0);
                        if ((e && '@' == e.charAt(0) && Q(t.current().slice(1)) && (b = 'variable-2'), 'word' == e)) {
                            var r = t.current();
                            'tag' == (b = J(r)) && C.test(r) && (b = 'variable-2'),
                                ('property' != b && 'to' != r) || (b = 'atom');
                        }
                        return 'variable-name' == e
                            ? U(n, t, 'variableName')
                            : ne(e, t)
                            ? U(n, t, 'pseudo')
                            : n.context.type;
                    }),
                    (I.vendorPrefixes = function (e, t, n) {
                        return 'word' == e ? ((b = 'property'), U(n, t, 'block', 0)) : V(n);
                    }),
                    (I.pseudo = function (e, t, n) {
                        return Q(oe(t.string))
                            ? K(e, t, n)
                            : (t.match(/^[a-z-]+/), (b = 'variable-3'), ie(t) ? U(n, t, 'block') : V(n));
                    }),
                    (I.atBlock = function (e, t, n) {
                        if ('(' == e) return U(n, t, 'atBlock_parens');
                        if (ee(e, t)) return U(n, t, 'block');
                        if (te(e, t)) return U(n, t, 'interpolation');
                        if ('word' == e) {
                            var r = t.current().toLowerCase();
                            if (
                                'tag' ==
                                    (b = /^(only|not|and|or)$/.test(r)
                                        ? 'keyword'
                                        : A.hasOwnProperty(r)
                                        ? 'tag'
                                        : E.hasOwnProperty(r)
                                        ? 'attribute'
                                        : O.hasOwnProperty(r)
                                        ? 'property'
                                        : M.hasOwnProperty(r)
                                        ? 'string-2'
                                        : J(t.current())) &&
                                ie(t)
                            )
                                return U(n, t, 'block');
                        }
                        return 'operator' == e && /^(not|and|or)$/.test(t.current()) && (b = 'keyword'), n.context.type;
                    }),
                    (I.atBlock_parens = function (e, t, n) {
                        if ('{' == e || '}' == e) return n.context.type;
                        if (')' == e) return ie(t) ? U(n, t, 'block') : U(n, t, 'atBlock');
                        if ('word' == e) {
                            var r = t.current().toLowerCase();
                            return (
                                (b = J(r)),
                                /^(max|min)/.test(r) && (b = 'property'),
                                'tag' == b && (b = C.test(r) ? 'variable-2' : 'atom'),
                                n.context.type
                            );
                        }
                        return I.atBlock(e, t, n);
                    }),
                    (I.keyframes = function (e, t, n) {
                        return '0' == t.indentation() &&
                            (('}' == e && re(t)) || ']' == e || 'hash' == e || 'qualifier' == e || X(t.current()))
                            ? K(e, t, n)
                            : '{' == e
                            ? U(n, t, 'keyframes')
                            : '}' == e
                            ? re(t)
                                ? V(n, !0)
                                : U(n, t, 'keyframes')
                            : 'unit' == e && /^[0-9]+\%$/.test(t.current())
                            ? U(n, t, 'keyframes')
                            : 'word' == e && 'block-keyword' == (b = J(t.current()))
                            ? ((b = 'keyword'), U(n, t, 'keyframes'))
                            : /@(font-face|media|supports|(-moz-)?document)/.test(e)
                            ? U(n, t, ie(t) ? 'block' : 'atBlock')
                            : 'mixin' == e
                            ? U(n, t, 'block', 0)
                            : n.context.type;
                    }),
                    (I.interpolation = function (e, t, n) {
                        return (
                            '{' == e && V(n) && U(n, t, 'block'),
                            '}' == e
                                ? t.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) ||
                                  (t.string.match(/^\s*[a-z]/i) && X(oe(t)))
                                    ? U(n, t, 'block')
                                    : !t.string.match(/^(\{|\s*\&)/) || t.match(/\s*[\w-]/, !1)
                                    ? U(n, t, 'block', 0)
                                    : U(n, t, 'block')
                                : 'variable-name' == e
                                ? U(n, t, 'variableName', 0)
                                : ('word' == e && 'tag' == (b = J(t.current())) && (b = 'atom'), n.context.type)
                        );
                    }),
                    (I.extend = function (e, t, n) {
                        return '[' == e || '=' == e
                            ? 'extend'
                            : ']' == e
                            ? V(n)
                            : 'word' == e
                            ? ((b = J(t.current())), 'extend')
                            : V(n);
                    }),
                    (I.variableName = function (e, t, n) {
                        return 'string' == e || '[' == e || ']' == e || t.current().match(/^(\.|\$)/)
                            ? (t.current().match(/^\.[\w-]+/i) && (b = 'variable-2'), 'variableName')
                            : K(e, t, n);
                    }),
                    {
                        startState: function (e) {
                            return { tokenize: null, state: 'block', context: new $('block', e || 0, null) };
                        },
                        token: function (e, t) {
                            return !t.tokenize && e.eatSpace()
                                ? null
                                : ((h = (t.tokenize || q)(e, t)) && 'object' == typeof h && ((y = h[1]), (h = h[0])),
                                  (b = h),
                                  (t.state = I[t.state](y, e, t)),
                                  b);
                        },
                        indent: function (e, t, n) {
                            var r = e.context,
                                i = t && t.charAt(0),
                                o = r.indent,
                                a = oe(t),
                                l = n.match(/^\s*/)[0].replace(/\t/g, k).length,
                                s = e.context.prev ? e.context.prev.line.firstWord : '',
                                c = e.context.prev ? e.context.prev.line.indent : l;
                            return (
                                r.prev &&
                                (('}' == i && ('block' == r.type || 'atBlock' == r.type || 'keyframes' == r.type)) ||
                                    (')' == i && ('parens' == r.type || 'atBlock_parens' == r.type)) ||
                                    ('{' == i && 'at' == r.type))
                                    ? (o = r.indent - x)
                                    : /(\})/.test(i) ||
                                      (/@|\$|\d/.test(i) ||
                                      /^\{/.test(t) ||
                                      /^\s*\/(\/|\*)/.test(t) ||
                                      /^\s*\/\*/.test(s) ||
                                      /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(t) ||
                                      /^(\+|-)?[a-z][\w-]*\(/i.test(t) ||
                                      /^return/.test(t) ||
                                      Y(a)
                                          ? (o = l)
                                          : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i) || X(a)
                                          ? (o = /\,\s*$/.test(s)
                                                ? c
                                                : /^\s+/.test(n) && (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(s) || X(s))
                                                ? l <= c
                                                    ? c
                                                    : c + x
                                                : l)
                                          : /,\s*$/.test(n) ||
                                            (!Z(a) && !Q(a)) ||
                                            (o = Y(s)
                                                ? l <= c
                                                    ? c
                                                    : c + x
                                                : /^\{/.test(s)
                                                ? l <= c
                                                    ? l
                                                    : c + x
                                                : Z(s) || Q(s)
                                                ? l >= c
                                                    ? c
                                                    : l
                                                : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(s) ||
                                                  /=\s*$/.test(s) ||
                                                  X(s) ||
                                                  /^\$[\w-\.\[\]\'\"]/.test(s)
                                                ? c + x
                                                : l)),
                                o
                            );
                        },
                        electricChars: '}',
                        lineComment: '//',
                        fold: 'indent',
                    }
                );
            });
            var t = [
                    'a',
                    'abbr',
                    'address',
                    'area',
                    'article',
                    'aside',
                    'audio',
                    'b',
                    'base',
                    'bdi',
                    'bdo',
                    'bgsound',
                    'blockquote',
                    'body',
                    'br',
                    'button',
                    'canvas',
                    'caption',
                    'cite',
                    'code',
                    'col',
                    'colgroup',
                    'data',
                    'datalist',
                    'dd',
                    'del',
                    'details',
                    'dfn',
                    'div',
                    'dl',
                    'dt',
                    'em',
                    'embed',
                    'fieldset',
                    'figcaption',
                    'figure',
                    'footer',
                    'form',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'head',
                    'header',
                    'hgroup',
                    'hr',
                    'html',
                    'i',
                    'iframe',
                    'img',
                    'input',
                    'ins',
                    'kbd',
                    'keygen',
                    'label',
                    'legend',
                    'li',
                    'link',
                    'main',
                    'map',
                    'mark',
                    'marquee',
                    'menu',
                    'menuitem',
                    'meta',
                    'meter',
                    'nav',
                    'nobr',
                    'noframes',
                    'noscript',
                    'object',
                    'ol',
                    'optgroup',
                    'option',
                    'output',
                    'p',
                    'param',
                    'pre',
                    'progress',
                    'q',
                    'rp',
                    'rt',
                    'ruby',
                    's',
                    'samp',
                    'script',
                    'section',
                    'select',
                    'small',
                    'source',
                    'span',
                    'strong',
                    'style',
                    'sub',
                    'summary',
                    'sup',
                    'table',
                    'tbody',
                    'td',
                    'textarea',
                    'tfoot',
                    'th',
                    'thead',
                    'time',
                    'tr',
                    'track',
                    'u',
                    'ul',
                    'var',
                    'video',
                ],
                n = ['domain', 'regexp', 'url-prefix', 'url'],
                r = ['all', 'aural', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'embossed'],
                i = [
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                    'device-width',
                    'min-device-width',
                    'max-device-width',
                    'device-height',
                    'min-device-height',
                    'max-device-height',
                    'aspect-ratio',
                    'min-aspect-ratio',
                    'max-aspect-ratio',
                    'device-aspect-ratio',
                    'min-device-aspect-ratio',
                    'max-device-aspect-ratio',
                    'color',
                    'min-color',
                    'max-color',
                    'color-index',
                    'min-color-index',
                    'max-color-index',
                    'monochrome',
                    'min-monochrome',
                    'max-monochrome',
                    'resolution',
                    'min-resolution',
                    'max-resolution',
                    'scan',
                    'grid',
                ],
                o = [
                    'align-content',
                    'align-items',
                    'align-self',
                    'alignment-adjust',
                    'alignment-baseline',
                    'anchor-point',
                    'animation',
                    'animation-delay',
                    'animation-direction',
                    'animation-duration',
                    'animation-fill-mode',
                    'animation-iteration-count',
                    'animation-name',
                    'animation-play-state',
                    'animation-timing-function',
                    'appearance',
                    'azimuth',
                    'backface-visibility',
                    'background',
                    'background-attachment',
                    'background-clip',
                    'background-color',
                    'background-image',
                    'background-origin',
                    'background-position',
                    'background-repeat',
                    'background-size',
                    'baseline-shift',
                    'binding',
                    'bleed',
                    'bookmark-label',
                    'bookmark-level',
                    'bookmark-state',
                    'bookmark-target',
                    'border',
                    'border-bottom',
                    'border-bottom-color',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border-bottom-style',
                    'border-bottom-width',
                    'border-collapse',
                    'border-color',
                    'border-image',
                    'border-image-outset',
                    'border-image-repeat',
                    'border-image-slice',
                    'border-image-source',
                    'border-image-width',
                    'border-left',
                    'border-left-color',
                    'border-left-style',
                    'border-left-width',
                    'border-radius',
                    'border-right',
                    'border-right-color',
                    'border-right-style',
                    'border-right-width',
                    'border-spacing',
                    'border-style',
                    'border-top',
                    'border-top-color',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-top-style',
                    'border-top-width',
                    'border-width',
                    'bottom',
                    'box-decoration-break',
                    'box-shadow',
                    'box-sizing',
                    'break-after',
                    'break-before',
                    'break-inside',
                    'caption-side',
                    'clear',
                    'clip',
                    'color',
                    'color-profile',
                    'column-count',
                    'column-fill',
                    'column-gap',
                    'column-rule',
                    'column-rule-color',
                    'column-rule-style',
                    'column-rule-width',
                    'column-span',
                    'column-width',
                    'columns',
                    'content',
                    'counter-increment',
                    'counter-reset',
                    'crop',
                    'cue',
                    'cue-after',
                    'cue-before',
                    'cursor',
                    'direction',
                    'display',
                    'dominant-baseline',
                    'drop-initial-after-adjust',
                    'drop-initial-after-align',
                    'drop-initial-before-adjust',
                    'drop-initial-before-align',
                    'drop-initial-size',
                    'drop-initial-value',
                    'elevation',
                    'empty-cells',
                    'fit',
                    'fit-position',
                    'flex',
                    'flex-basis',
                    'flex-direction',
                    'flex-flow',
                    'flex-grow',
                    'flex-shrink',
                    'flex-wrap',
                    'float',
                    'float-offset',
                    'flow-from',
                    'flow-into',
                    'font',
                    'font-feature-settings',
                    'font-family',
                    'font-kerning',
                    'font-language-override',
                    'font-size',
                    'font-size-adjust',
                    'font-stretch',
                    'font-style',
                    'font-synthesis',
                    'font-variant',
                    'font-variant-alternates',
                    'font-variant-caps',
                    'font-variant-east-asian',
                    'font-variant-ligatures',
                    'font-variant-numeric',
                    'font-variant-position',
                    'font-weight',
                    'grid',
                    'grid-area',
                    'grid-auto-columns',
                    'grid-auto-flow',
                    'grid-auto-position',
                    'grid-auto-rows',
                    'grid-column',
                    'grid-column-end',
                    'grid-column-start',
                    'grid-row',
                    'grid-row-end',
                    'grid-row-start',
                    'grid-template',
                    'grid-template-areas',
                    'grid-template-columns',
                    'grid-template-rows',
                    'hanging-punctuation',
                    'height',
                    'hyphens',
                    'icon',
                    'image-orientation',
                    'image-rendering',
                    'image-resolution',
                    'inline-box-align',
                    'justify-content',
                    'left',
                    'letter-spacing',
                    'line-break',
                    'line-height',
                    'line-stacking',
                    'line-stacking-ruby',
                    'line-stacking-shift',
                    'line-stacking-strategy',
                    'list-style',
                    'list-style-image',
                    'list-style-position',
                    'list-style-type',
                    'margin',
                    'margin-bottom',
                    'margin-left',
                    'margin-right',
                    'margin-top',
                    'marker-offset',
                    'marks',
                    'marquee-direction',
                    'marquee-loop',
                    'marquee-play-count',
                    'marquee-speed',
                    'marquee-style',
                    'max-height',
                    'max-width',
                    'min-height',
                    'min-width',
                    'move-to',
                    'nav-down',
                    'nav-index',
                    'nav-left',
                    'nav-right',
                    'nav-up',
                    'object-fit',
                    'object-position',
                    'opacity',
                    'order',
                    'orphans',
                    'outline',
                    'outline-color',
                    'outline-offset',
                    'outline-style',
                    'outline-width',
                    'overflow',
                    'overflow-style',
                    'overflow-wrap',
                    'overflow-x',
                    'overflow-y',
                    'padding',
                    'padding-bottom',
                    'padding-left',
                    'padding-right',
                    'padding-top',
                    'page',
                    'page-break-after',
                    'page-break-before',
                    'page-break-inside',
                    'page-policy',
                    'pause',
                    'pause-after',
                    'pause-before',
                    'perspective',
                    'perspective-origin',
                    'pitch',
                    'pitch-range',
                    'play-during',
                    'position',
                    'presentation-level',
                    'punctuation-trim',
                    'quotes',
                    'region-break-after',
                    'region-break-before',
                    'region-break-inside',
                    'region-fragment',
                    'rendering-intent',
                    'resize',
                    'rest',
                    'rest-after',
                    'rest-before',
                    'richness',
                    'right',
                    'rotation',
                    'rotation-point',
                    'ruby-align',
                    'ruby-overhang',
                    'ruby-position',
                    'ruby-span',
                    'shape-image-threshold',
                    'shape-inside',
                    'shape-margin',
                    'shape-outside',
                    'size',
                    'speak',
                    'speak-as',
                    'speak-header',
                    'speak-numeral',
                    'speak-punctuation',
                    'speech-rate',
                    'stress',
                    'string-set',
                    'tab-size',
                    'table-layout',
                    'target',
                    'target-name',
                    'target-new',
                    'target-position',
                    'text-align',
                    'text-align-last',
                    'text-decoration',
                    'text-decoration-color',
                    'text-decoration-line',
                    'text-decoration-skip',
                    'text-decoration-style',
                    'text-emphasis',
                    'text-emphasis-color',
                    'text-emphasis-position',
                    'text-emphasis-style',
                    'text-height',
                    'text-indent',
                    'text-justify',
                    'text-outline',
                    'text-overflow',
                    'text-shadow',
                    'text-size-adjust',
                    'text-space-collapse',
                    'text-transform',
                    'text-underline-position',
                    'text-wrap',
                    'top',
                    'transform',
                    'transform-origin',
                    'transform-style',
                    'transition',
                    'transition-delay',
                    'transition-duration',
                    'transition-property',
                    'transition-timing-function',
                    'unicode-bidi',
                    'vertical-align',
                    'visibility',
                    'voice-balance',
                    'voice-duration',
                    'voice-family',
                    'voice-pitch',
                    'voice-range',
                    'voice-rate',
                    'voice-stress',
                    'voice-volume',
                    'volume',
                    'white-space',
                    'widows',
                    'width',
                    'will-change',
                    'word-break',
                    'word-spacing',
                    'word-wrap',
                    'z-index',
                    'clip-path',
                    'clip-rule',
                    'mask',
                    'enable-background',
                    'filter',
                    'flood-color',
                    'flood-opacity',
                    'lighting-color',
                    'stop-color',
                    'stop-opacity',
                    'pointer-events',
                    'color-interpolation',
                    'color-interpolation-filters',
                    'color-rendering',
                    'fill',
                    'fill-opacity',
                    'fill-rule',
                    'image-rendering',
                    'marker',
                    'marker-end',
                    'marker-mid',
                    'marker-start',
                    'shape-rendering',
                    'stroke',
                    'stroke-dasharray',
                    'stroke-dashoffset',
                    'stroke-linecap',
                    'stroke-linejoin',
                    'stroke-miterlimit',
                    'stroke-opacity',
                    'stroke-width',
                    'text-rendering',
                    'baseline-shift',
                    'dominant-baseline',
                    'glyph-orientation-horizontal',
                    'glyph-orientation-vertical',
                    'text-anchor',
                    'writing-mode',
                    'font-smoothing',
                    'osx-font-smoothing',
                ],
                a = [
                    'scrollbar-arrow-color',
                    'scrollbar-base-color',
                    'scrollbar-dark-shadow-color',
                    'scrollbar-face-color',
                    'scrollbar-highlight-color',
                    'scrollbar-shadow-color',
                    'scrollbar-3d-light-color',
                    'scrollbar-track-color',
                    'shape-inside',
                    'searchfield-cancel-button',
                    'searchfield-decoration',
                    'searchfield-results-button',
                    'searchfield-results-decoration',
                    'zoom',
                ],
                l = [
                    'font-family',
                    'src',
                    'unicode-range',
                    'font-variant',
                    'font-feature-settings',
                    'font-stretch',
                    'font-weight',
                    'font-style',
                ],
                s = [
                    'aliceblue',
                    'antiquewhite',
                    'aqua',
                    'aquamarine',
                    'azure',
                    'beige',
                    'bisque',
                    'black',
                    'blanchedalmond',
                    'blue',
                    'blueviolet',
                    'brown',
                    'burlywood',
                    'cadetblue',
                    'chartreuse',
                    'chocolate',
                    'coral',
                    'cornflowerblue',
                    'cornsilk',
                    'crimson',
                    'cyan',
                    'darkblue',
                    'darkcyan',
                    'darkgoldenrod',
                    'darkgray',
                    'darkgreen',
                    'darkkhaki',
                    'darkmagenta',
                    'darkolivegreen',
                    'darkorange',
                    'darkorchid',
                    'darkred',
                    'darksalmon',
                    'darkseagreen',
                    'darkslateblue',
                    'darkslategray',
                    'darkturquoise',
                    'darkviolet',
                    'deeppink',
                    'deepskyblue',
                    'dimgray',
                    'dodgerblue',
                    'firebrick',
                    'floralwhite',
                    'forestgreen',
                    'fuchsia',
                    'gainsboro',
                    'ghostwhite',
                    'gold',
                    'goldenrod',
                    'gray',
                    'grey',
                    'green',
                    'greenyellow',
                    'honeydew',
                    'hotpink',
                    'indianred',
                    'indigo',
                    'ivory',
                    'khaki',
                    'lavender',
                    'lavenderblush',
                    'lawngreen',
                    'lemonchiffon',
                    'lightblue',
                    'lightcoral',
                    'lightcyan',
                    'lightgoldenrodyellow',
                    'lightgray',
                    'lightgreen',
                    'lightpink',
                    'lightsalmon',
                    'lightseagreen',
                    'lightskyblue',
                    'lightslategray',
                    'lightsteelblue',
                    'lightyellow',
                    'lime',
                    'limegreen',
                    'linen',
                    'magenta',
                    'maroon',
                    'mediumaquamarine',
                    'mediumblue',
                    'mediumorchid',
                    'mediumpurple',
                    'mediumseagreen',
                    'mediumslateblue',
                    'mediumspringgreen',
                    'mediumturquoise',
                    'mediumvioletred',
                    'midnightblue',
                    'mintcream',
                    'mistyrose',
                    'moccasin',
                    'navajowhite',
                    'navy',
                    'oldlace',
                    'olive',
                    'olivedrab',
                    'orange',
                    'orangered',
                    'orchid',
                    'palegoldenrod',
                    'palegreen',
                    'paleturquoise',
                    'palevioletred',
                    'papayawhip',
                    'peachpuff',
                    'peru',
                    'pink',
                    'plum',
                    'powderblue',
                    'purple',
                    'rebeccapurple',
                    'red',
                    'rosybrown',
                    'royalblue',
                    'saddlebrown',
                    'salmon',
                    'sandybrown',
                    'seagreen',
                    'seashell',
                    'sienna',
                    'silver',
                    'skyblue',
                    'slateblue',
                    'slategray',
                    'snow',
                    'springgreen',
                    'steelblue',
                    'tan',
                    'teal',
                    'thistle',
                    'tomato',
                    'turquoise',
                    'violet',
                    'wheat',
                    'white',
                    'whitesmoke',
                    'yellow',
                    'yellowgreen',
                ],
                c = [
                    'above',
                    'absolute',
                    'activeborder',
                    'additive',
                    'activecaption',
                    'afar',
                    'after-white-space',
                    'ahead',
                    'alias',
                    'all',
                    'all-scroll',
                    'alphabetic',
                    'alternate',
                    'always',
                    'amharic',
                    'amharic-abegede',
                    'antialiased',
                    'appworkspace',
                    'arabic-indic',
                    'armenian',
                    'asterisks',
                    'attr',
                    'auto',
                    'avoid',
                    'avoid-column',
                    'avoid-page',
                    'avoid-region',
                    'background',
                    'backwards',
                    'baseline',
                    'below',
                    'bidi-override',
                    'binary',
                    'bengali',
                    'blink',
                    'block',
                    'block-axis',
                    'bold',
                    'bolder',
                    'border',
                    'border-box',
                    'both',
                    'bottom',
                    'break',
                    'break-all',
                    'break-word',
                    'bullets',
                    'button',
                    'button-bevel',
                    'buttonface',
                    'buttonhighlight',
                    'buttonshadow',
                    'buttontext',
                    'calc',
                    'cambodian',
                    'capitalize',
                    'caps-lock-indicator',
                    'caption',
                    'captiontext',
                    'caret',
                    'cell',
                    'center',
                    'checkbox',
                    'circle',
                    'cjk-decimal',
                    'cjk-earthly-branch',
                    'cjk-heavenly-stem',
                    'cjk-ideographic',
                    'clear',
                    'clip',
                    'close-quote',
                    'col-resize',
                    'collapse',
                    'column',
                    'compact',
                    'condensed',
                    'contain',
                    'content',
                    'contents',
                    'content-box',
                    'context-menu',
                    'continuous',
                    'copy',
                    'counter',
                    'counters',
                    'cover',
                    'crop',
                    'cross',
                    'crosshair',
                    'currentcolor',
                    'cursive',
                    'cyclic',
                    'dashed',
                    'decimal',
                    'decimal-leading-zero',
                    'default',
                    'default-button',
                    'destination-atop',
                    'destination-in',
                    'destination-out',
                    'destination-over',
                    'devanagari',
                    'disc',
                    'discard',
                    'disclosure-closed',
                    'disclosure-open',
                    'document',
                    'dot-dash',
                    'dot-dot-dash',
                    'dotted',
                    'double',
                    'down',
                    'e-resize',
                    'ease',
                    'ease-in',
                    'ease-in-out',
                    'ease-out',
                    'element',
                    'ellipse',
                    'ellipsis',
                    'embed',
                    'end',
                    'ethiopic',
                    'ethiopic-abegede',
                    'ethiopic-abegede-am-et',
                    'ethiopic-abegede-gez',
                    'ethiopic-abegede-ti-er',
                    'ethiopic-abegede-ti-et',
                    'ethiopic-halehame-aa-er',
                    'ethiopic-halehame-aa-et',
                    'ethiopic-halehame-am-et',
                    'ethiopic-halehame-gez',
                    'ethiopic-halehame-om-et',
                    'ethiopic-halehame-sid-et',
                    'ethiopic-halehame-so-et',
                    'ethiopic-halehame-ti-er',
                    'ethiopic-halehame-ti-et',
                    'ethiopic-halehame-tig',
                    'ethiopic-numeric',
                    'ew-resize',
                    'expanded',
                    'extends',
                    'extra-condensed',
                    'extra-expanded',
                    'fantasy',
                    'fast',
                    'fill',
                    'fixed',
                    'flat',
                    'flex',
                    'footnotes',
                    'forwards',
                    'from',
                    'geometricPrecision',
                    'georgian',
                    'graytext',
                    'groove',
                    'gujarati',
                    'gurmukhi',
                    'hand',
                    'hangul',
                    'hangul-consonant',
                    'hebrew',
                    'help',
                    'hidden',
                    'hide',
                    'higher',
                    'highlight',
                    'highlighttext',
                    'hiragana',
                    'hiragana-iroha',
                    'horizontal',
                    'hsl',
                    'hsla',
                    'icon',
                    'ignore',
                    'inactiveborder',
                    'inactivecaption',
                    'inactivecaptiontext',
                    'infinite',
                    'infobackground',
                    'infotext',
                    'inherit',
                    'initial',
                    'inline',
                    'inline-axis',
                    'inline-block',
                    'inline-flex',
                    'inline-table',
                    'inset',
                    'inside',
                    'intrinsic',
                    'invert',
                    'italic',
                    'japanese-formal',
                    'japanese-informal',
                    'justify',
                    'kannada',
                    'katakana',
                    'katakana-iroha',
                    'keep-all',
                    'khmer',
                    'korean-hangul-formal',
                    'korean-hanja-formal',
                    'korean-hanja-informal',
                    'landscape',
                    'lao',
                    'large',
                    'larger',
                    'left',
                    'level',
                    'lighter',
                    'line-through',
                    'linear',
                    'linear-gradient',
                    'lines',
                    'list-item',
                    'listbox',
                    'listitem',
                    'local',
                    'logical',
                    'loud',
                    'lower',
                    'lower-alpha',
                    'lower-armenian',
                    'lower-greek',
                    'lower-hexadecimal',
                    'lower-latin',
                    'lower-norwegian',
                    'lower-roman',
                    'lowercase',
                    'ltr',
                    'malayalam',
                    'match',
                    'matrix',
                    'matrix3d',
                    'media-controls-background',
                    'media-current-time-display',
                    'media-fullscreen-button',
                    'media-mute-button',
                    'media-play-button',
                    'media-return-to-realtime-button',
                    'media-rewind-button',
                    'media-seek-back-button',
                    'media-seek-forward-button',
                    'media-slider',
                    'media-sliderthumb',
                    'media-time-remaining-display',
                    'media-volume-slider',
                    'media-volume-slider-container',
                    'media-volume-sliderthumb',
                    'medium',
                    'menu',
                    'menulist',
                    'menulist-button',
                    'menulist-text',
                    'menulist-textfield',
                    'menutext',
                    'message-box',
                    'middle',
                    'min-intrinsic',
                    'mix',
                    'mongolian',
                    'monospace',
                    'move',
                    'multiple',
                    'myanmar',
                    'n-resize',
                    'narrower',
                    'ne-resize',
                    'nesw-resize',
                    'no-close-quote',
                    'no-drop',
                    'no-open-quote',
                    'no-repeat',
                    'none',
                    'normal',
                    'not-allowed',
                    'nowrap',
                    'ns-resize',
                    'numbers',
                    'numeric',
                    'nw-resize',
                    'nwse-resize',
                    'oblique',
                    'octal',
                    'open-quote',
                    'optimizeLegibility',
                    'optimizeSpeed',
                    'oriya',
                    'oromo',
                    'outset',
                    'outside',
                    'outside-shape',
                    'overlay',
                    'overline',
                    'padding',
                    'padding-box',
                    'painted',
                    'page',
                    'paused',
                    'persian',
                    'perspective',
                    'plus-darker',
                    'plus-lighter',
                    'pointer',
                    'polygon',
                    'portrait',
                    'pre',
                    'pre-line',
                    'pre-wrap',
                    'preserve-3d',
                    'progress',
                    'push-button',
                    'radial-gradient',
                    'radio',
                    'read-only',
                    'read-write',
                    'read-write-plaintext-only',
                    'rectangle',
                    'region',
                    'relative',
                    'repeat',
                    'repeating-linear-gradient',
                    'repeating-radial-gradient',
                    'repeat-x',
                    'repeat-y',
                    'reset',
                    'reverse',
                    'rgb',
                    'rgba',
                    'ridge',
                    'right',
                    'rotate',
                    'rotate3d',
                    'rotateX',
                    'rotateY',
                    'rotateZ',
                    'round',
                    'row-resize',
                    'rtl',
                    'run-in',
                    'running',
                    's-resize',
                    'sans-serif',
                    'scale',
                    'scale3d',
                    'scaleX',
                    'scaleY',
                    'scaleZ',
                    'scroll',
                    'scrollbar',
                    'scroll-position',
                    'se-resize',
                    'searchfield',
                    'searchfield-cancel-button',
                    'searchfield-decoration',
                    'searchfield-results-button',
                    'searchfield-results-decoration',
                    'semi-condensed',
                    'semi-expanded',
                    'separate',
                    'serif',
                    'show',
                    'sidama',
                    'simp-chinese-formal',
                    'simp-chinese-informal',
                    'single',
                    'skew',
                    'skewX',
                    'skewY',
                    'skip-white-space',
                    'slide',
                    'slider-horizontal',
                    'slider-vertical',
                    'sliderthumb-horizontal',
                    'sliderthumb-vertical',
                    'slow',
                    'small',
                    'small-caps',
                    'small-caption',
                    'smaller',
                    'solid',
                    'somali',
                    'source-atop',
                    'source-in',
                    'source-out',
                    'source-over',
                    'space',
                    'spell-out',
                    'square',
                    'square-button',
                    'start',
                    'static',
                    'status-bar',
                    'stretch',
                    'stroke',
                    'sub',
                    'subpixel-antialiased',
                    'super',
                    'sw-resize',
                    'symbolic',
                    'symbols',
                    'table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row',
                    'table-row-group',
                    'tamil',
                    'telugu',
                    'text',
                    'text-bottom',
                    'text-top',
                    'textarea',
                    'textfield',
                    'thai',
                    'thick',
                    'thin',
                    'threeddarkshadow',
                    'threedface',
                    'threedhighlight',
                    'threedlightshadow',
                    'threedshadow',
                    'tibetan',
                    'tigre',
                    'tigrinya-er',
                    'tigrinya-er-abegede',
                    'tigrinya-et',
                    'tigrinya-et-abegede',
                    'to',
                    'top',
                    'trad-chinese-formal',
                    'trad-chinese-informal',
                    'translate',
                    'translate3d',
                    'translateX',
                    'translateY',
                    'translateZ',
                    'transparent',
                    'ultra-condensed',
                    'ultra-expanded',
                    'underline',
                    'up',
                    'upper-alpha',
                    'upper-armenian',
                    'upper-greek',
                    'upper-hexadecimal',
                    'upper-latin',
                    'upper-norwegian',
                    'upper-roman',
                    'uppercase',
                    'urdu',
                    'url',
                    'var',
                    'vertical',
                    'vertical-text',
                    'visible',
                    'visibleFill',
                    'visiblePainted',
                    'visibleStroke',
                    'visual',
                    'w-resize',
                    'wait',
                    'wave',
                    'wider',
                    'window',
                    'windowframe',
                    'windowtext',
                    'words',
                    'x-large',
                    'x-small',
                    'xor',
                    'xx-large',
                    'xx-small',
                    'bicubic',
                    'optimizespeed',
                    'grayscale',
                    'row',
                    'row-reverse',
                    'wrap',
                    'wrap-reverse',
                    'column-reverse',
                    'flex-start',
                    'flex-end',
                    'space-between',
                    'space-around',
                    'unset',
                ],
                u = ['in', 'and', 'or', 'not', 'is not', 'is a', 'is', 'isnt', 'defined', 'if unless'],
                d = ['for', 'if', 'else', 'unless', 'from', 'to'],
                f = ['null', 'true', 'false', 'href', 'title', 'type', 'not-allowed', 'readonly', 'disabled'],
                p = [
                    '@font-face',
                    '@keyframes',
                    '@media',
                    '@viewport',
                    '@page',
                    '@host',
                    '@supports',
                    '@block',
                    '@css',
                ],
                h = t.concat(n, r, i, o, a, s, c, l, u, d, f, p);
            function m(e) {
                return (
                    (e = e.sort(function (e, t) {
                        return t > e;
                    })),
                    new RegExp('^((' + e.join(')|(') + '))\\b')
                );
            }
            function g(e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
                return t;
            }
            function v(e) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
            }
            e.registerHelper('hintWords', 'stylus', h), e.defineMIME('text/x-styl', 'stylus');
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode(
            'pug',
            function (e) {
                var t = 'keyword',
                    r = 'meta',
                    i = 'builtin',
                    o = 'qualifier',
                    a = { '{': '}', '(': ')', '[': ']' },
                    l = n.getMode(e, 'javascript');
                function s() {
                    (this.javaScriptLine = !1),
                        (this.javaScriptLineExcludesColon = !1),
                        (this.javaScriptArguments = !1),
                        (this.javaScriptArgumentsDepth = 0),
                        (this.isInterpolating = !1),
                        (this.interpolationNesting = 0),
                        (this.jsState = n.startState(l)),
                        (this.restOfLine = ''),
                        (this.isIncludeFiltered = !1),
                        (this.isEach = !1),
                        (this.lastTag = ''),
                        (this.scriptType = ''),
                        (this.isAttrs = !1),
                        (this.attrsNest = []),
                        (this.inAttributeName = !0),
                        (this.attributeIsType = !1),
                        (this.attrValue = ''),
                        (this.indentOf = 1 / 0),
                        (this.indentToken = ''),
                        (this.innerMode = null),
                        (this.innerState = null),
                        (this.innerModeForLine = !1);
                }
                function c(e, t) {
                    if (
                        (e.sol() && ((t.javaScriptLine = !1), (t.javaScriptLineExcludesColon = !1)), t.javaScriptLine)
                    ) {
                        if (t.javaScriptLineExcludesColon && ':' === e.peek())
                            return (t.javaScriptLine = !1), void (t.javaScriptLineExcludesColon = !1);
                        var n = l.token(e, t.jsState);
                        return e.eol() && (t.javaScriptLine = !1), n || !0;
                    }
                }
                function u(e, t) {
                    if (t.javaScriptArguments)
                        return 0 === t.javaScriptArgumentsDepth && '(' !== e.peek()
                            ? void (t.javaScriptArguments = !1)
                            : ('(' === e.peek()
                                  ? t.javaScriptArgumentsDepth++
                                  : ')' === e.peek() && t.javaScriptArgumentsDepth--,
                              0 === t.javaScriptArgumentsDepth
                                  ? void (t.javaScriptArguments = !1)
                                  : l.token(e, t.jsState) || !0);
                }
                function d(e) {
                    if (e.match(/^yield\b/)) return 'keyword';
                }
                function f(e) {
                    if (e.match(/^(?:doctype) *([^\n]+)?/)) return r;
                }
                function p(e, t) {
                    if (e.match('#{')) return (t.isInterpolating = !0), (t.interpolationNesting = 0), 'punctuation';
                }
                function h(e, t) {
                    if (t.isInterpolating) {
                        if ('}' === e.peek()) {
                            if ((t.interpolationNesting--, t.interpolationNesting < 0))
                                return e.next(), (t.isInterpolating = !1), 'punctuation';
                        } else '{' === e.peek() && t.interpolationNesting++;
                        return l.token(e, t.jsState) || !0;
                    }
                }
                function m(e, n) {
                    if (e.match(/^case\b/)) return (n.javaScriptLine = !0), t;
                }
                function g(e, n) {
                    if (e.match(/^when\b/)) return (n.javaScriptLine = !0), (n.javaScriptLineExcludesColon = !0), t;
                }
                function v(e) {
                    if (e.match(/^default\b/)) return t;
                }
                function y(e, n) {
                    if (e.match(/^extends?\b/)) return (n.restOfLine = 'string'), t;
                }
                function b(e, n) {
                    if (e.match(/^append\b/)) return (n.restOfLine = 'variable'), t;
                }
                function x(e, n) {
                    if (e.match(/^prepend\b/)) return (n.restOfLine = 'variable'), t;
                }
                function k(e, n) {
                    if (e.match(/^block\b *(?:(prepend|append)\b)?/)) return (n.restOfLine = 'variable'), t;
                }
                function w(e, n) {
                    if (e.match(/^include\b/)) return (n.restOfLine = 'string'), t;
                }
                function C(e, n) {
                    if (e.match(/^include:([a-zA-Z0-9\-]+)/, !1) && e.match('include'))
                        return (n.isIncludeFiltered = !0), t;
                }
                function S(e, t) {
                    if (t.isIncludeFiltered) {
                        var n = P(e, t);
                        return (t.isIncludeFiltered = !1), (t.restOfLine = 'string'), n;
                    }
                }
                function M(e, n) {
                    if (e.match(/^mixin\b/)) return (n.javaScriptLine = !0), t;
                }
                function T(e, t) {
                    return e.match(/^\+([-\w]+)/)
                        ? (e.match(/^\( *[-\w]+ *=/, !1) ||
                              ((t.javaScriptArguments = !0), (t.javaScriptArgumentsDepth = 0)),
                          'variable')
                        : e.match(/^\+#{/, !1)
                        ? (e.next(), (t.mixinCallAfter = !0), p(e, t))
                        : void 0;
                }
                function L(e, t) {
                    if (t.mixinCallAfter)
                        return (
                            (t.mixinCallAfter = !1),
                            e.match(/^\( *[-\w]+ *=/, !1) ||
                                ((t.javaScriptArguments = !0), (t.javaScriptArgumentsDepth = 0)),
                            !0
                        );
                }
                function A(e, n) {
                    if (e.match(/^(if|unless|else if|else)\b/)) return (n.javaScriptLine = !0), t;
                }
                function _(e, n) {
                    if (e.match(/^(- *)?(each|for)\b/)) return (n.isEach = !0), t;
                }
                function O(e, n) {
                    if (n.isEach) {
                        if (e.match(/^ in\b/)) return (n.javaScriptLine = !0), (n.isEach = !1), t;
                        if (e.sol() || e.eol()) n.isEach = !1;
                        else if (e.next()) {
                            for (; !e.match(/^ in\b/, !1) && e.next(); );
                            return 'variable';
                        }
                    }
                }
                function E(e, n) {
                    if (e.match(/^while\b/)) return (n.javaScriptLine = !0), t;
                }
                function z(e, t) {
                    var n;
                    if ((n = e.match(/^(\w(?:[-:\w]*\w)?)\/?/)))
                        return (
                            (t.lastTag = n[1].toLowerCase()),
                            'script' === t.lastTag && (t.scriptType = 'application/javascript'),
                            'tag'
                        );
                }
                function P(t, r) {
                    var i;
                    if (t.match(/^:([\w\-]+)/))
                        return (
                            e && e.innerModes && (i = e.innerModes(t.current().substring(1))),
                            i || (i = t.current().substring(1)),
                            'string' == typeof i && (i = n.getMode(e, i)),
                            V(t, r, i),
                            'atom'
                        );
                }
                function F(e, t) {
                    if (e.match(/^(!?=|-)/)) return (t.javaScriptLine = !0), 'punctuation';
                }
                function N(e) {
                    if (e.match(/^#([\w-]+)/)) return i;
                }
                function D(e) {
                    if (e.match(/^\.([\w-]+)/)) return o;
                }
                function j(e, t) {
                    if ('(' == e.peek())
                        return (
                            e.next(),
                            (t.isAttrs = !0),
                            (t.attrsNest = []),
                            (t.inAttributeName = !0),
                            (t.attrValue = ''),
                            (t.attributeIsType = !1),
                            'punctuation'
                        );
                }
                function H(e, t) {
                    if (t.isAttrs) {
                        if (
                            (a[e.peek()] && t.attrsNest.push(a[e.peek()]),
                            t.attrsNest[t.attrsNest.length - 1] === e.peek())
                        )
                            t.attrsNest.pop();
                        else if (e.eat(')')) return (t.isAttrs = !1), 'punctuation';
                        if (t.inAttributeName && e.match(/^[^=,\)!]+/))
                            return (
                                ('=' !== e.peek() && '!' !== e.peek()) ||
                                    ((t.inAttributeName = !1),
                                    (t.jsState = n.startState(l)),
                                    'script' === t.lastTag && 'type' === e.current().trim().toLowerCase()
                                        ? (t.attributeIsType = !0)
                                        : (t.attributeIsType = !1)),
                                'attribute'
                            );
                        var r = l.token(e, t.jsState);
                        if (
                            (t.attributeIsType && 'string' === r && (t.scriptType = e.current().toString()),
                            0 === t.attrsNest.length && ('string' === r || 'variable' === r || 'keyword' === r))
                        )
                            try {
                                return (
                                    Function('', 'var x ' + t.attrValue.replace(/,\s*$/, '').replace(/^!/, '')),
                                    (t.inAttributeName = !0),
                                    (t.attrValue = ''),
                                    e.backUp(e.current().length),
                                    H(e, t)
                                );
                            } catch (e) {}
                        return (t.attrValue += e.current()), r || !0;
                    }
                }
                function I(e, t) {
                    if (e.match(/^&attributes\b/))
                        return (t.javaScriptArguments = !0), (t.javaScriptArgumentsDepth = 0), 'keyword';
                }
                function q(e) {
                    if (e.sol() && e.eatSpace()) return 'indent';
                }
                function W(e, t) {
                    if (e.match(/^ *\/\/(-)?([^\n]*)/))
                        return (t.indentOf = e.indentation()), (t.indentToken = 'comment'), 'comment';
                }
                function R(e) {
                    if (e.match(/^: */)) return 'colon';
                }
                function B(e, t) {
                    return e.match(/^(?:\| ?| )([^\n]+)/)
                        ? 'string'
                        : e.match(/^(<[^\n]*)/, !1)
                        ? (V(e, t, 'htmlmixed'), (t.innerModeForLine = !0), G(e, t, !0))
                        : void 0;
                }
                function $(e, t) {
                    if (e.eat('.')) {
                        var n = null;
                        return (
                            'script' === t.lastTag && -1 != t.scriptType.toLowerCase().indexOf('javascript')
                                ? (n = t.scriptType.toLowerCase().replace(/"|'/g, ''))
                                : 'style' === t.lastTag && (n = 'css'),
                            V(e, t, n),
                            'dot'
                        );
                    }
                }
                function U(e) {
                    return e.next(), null;
                }
                function V(t, r, i) {
                    (i = n.mimeModes[i] || i),
                        (i = (e.innerModes && e.innerModes(i)) || i),
                        (i = n.mimeModes[i] || i),
                        (i = n.getMode(e, i)),
                        (r.indentOf = t.indentation()),
                        i && 'null' !== i.name ? (r.innerMode = i) : (r.indentToken = 'string');
                }
                function G(e, t, r) {
                    if (e.indentation() > t.indentOf || (t.innerModeForLine && !e.sol()) || r)
                        return t.innerMode
                            ? (t.innerState ||
                                  (t.innerState = t.innerMode.startState
                                      ? n.startState(t.innerMode, e.indentation())
                                      : {}),
                              e.hideFirstChars(t.indentOf + 2, function () {
                                  return t.innerMode.token(e, t.innerState) || !0;
                              }))
                            : (e.skipToEnd(), t.indentToken);
                    e.sol() &&
                        ((t.indentOf = 1 / 0), (t.indentToken = null), (t.innerMode = null), (t.innerState = null));
                }
                function K(e, t) {
                    if ((e.sol() && (t.restOfLine = ''), t.restOfLine)) {
                        e.skipToEnd();
                        var n = t.restOfLine;
                        return (t.restOfLine = ''), n;
                    }
                }
                function X() {
                    return new s();
                }
                function Q(e) {
                    return e.copy();
                }
                function Y(e, t) {
                    var n =
                        G(e, t) ||
                        K(e, t) ||
                        h(e, t) ||
                        S(e, t) ||
                        O(e, t) ||
                        H(e, t) ||
                        c(e, t) ||
                        u(e, t) ||
                        L(e, t) ||
                        d(e) ||
                        f(e) ||
                        p(e, t) ||
                        m(e, t) ||
                        g(e, t) ||
                        v(e) ||
                        y(e, t) ||
                        b(e, t) ||
                        x(e, t) ||
                        k(e, t) ||
                        w(e, t) ||
                        C(e, t) ||
                        M(e, t) ||
                        T(e, t) ||
                        A(e, t) ||
                        _(e, t) ||
                        E(e, t) ||
                        z(e, t) ||
                        P(e, t) ||
                        F(e, t) ||
                        N(e) ||
                        D(e) ||
                        j(e, t) ||
                        I(e, t) ||
                        q(e) ||
                        B(e, t) ||
                        W(e, t) ||
                        R(e) ||
                        $(e, t) ||
                        U(e);
                    return !0 === n ? null : n;
                }
                return (
                    (s.prototype.copy = function () {
                        var e = new s();
                        return (
                            (e.javaScriptLine = this.javaScriptLine),
                            (e.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon),
                            (e.javaScriptArguments = this.javaScriptArguments),
                            (e.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth),
                            (e.isInterpolating = this.isInterpolating),
                            (e.interpolationNesting = this.interpolationNesting),
                            (e.jsState = n.copyState(l, this.jsState)),
                            (e.innerMode = this.innerMode),
                            this.innerMode &&
                                this.innerState &&
                                (e.innerState = n.copyState(this.innerMode, this.innerState)),
                            (e.restOfLine = this.restOfLine),
                            (e.isIncludeFiltered = this.isIncludeFiltered),
                            (e.isEach = this.isEach),
                            (e.lastTag = this.lastTag),
                            (e.scriptType = this.scriptType),
                            (e.isAttrs = this.isAttrs),
                            (e.attrsNest = this.attrsNest.slice()),
                            (e.inAttributeName = this.inAttributeName),
                            (e.attributeIsType = this.attributeIsType),
                            (e.attrValue = this.attrValue),
                            (e.indentOf = this.indentOf),
                            (e.indentToken = this.indentToken),
                            (e.innerModeForLine = this.innerModeForLine),
                            e
                        );
                    }),
                    { startState: X, copyState: Q, token: Y }
                );
            },
            'javascript',
            'css',
            'htmlmixed'
        ),
            n.defineMIME('text/x-pug', 'pug'),
            n.defineMIME('text/x-jade', 'pug');
    }),
    o(function (e, t) {
        var n;
        (n = a).multiplexingMode = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            function r(e, t, n, r) {
                if ('string' == typeof t) {
                    var i = e.indexOf(t, n);
                    return r && i > -1 ? i + t.length : i;
                }
                var o = t.exec(n ? e.slice(n) : e);
                return o ? o.index + n + (r ? o[0].length : 0) : -1;
            }
            return {
                startState: function () {
                    return { outer: n.startState(e), innerActive: null, inner: null };
                },
                copyState: function (t) {
                    return {
                        outer: n.copyState(e, t.outer),
                        innerActive: t.innerActive,
                        inner: t.innerActive && n.copyState(t.innerActive.mode, t.inner),
                    };
                },
                token: function (i, o) {
                    if (o.innerActive) {
                        var a = o.innerActive;
                        if (((c = i.string), !a.close && i.sol()))
                            return (o.innerActive = o.inner = null), this.token(i, o);
                        if ((d = a.close ? r(c, a.close, i.pos, a.parseDelimiters) : -1) == i.pos && !a.parseDelimiters)
                            return (
                                i.match(a.close),
                                (o.innerActive = o.inner = null),
                                a.delimStyle && a.delimStyle + ' ' + a.delimStyle + '-close'
                            );
                        d > -1 && (i.string = c.slice(0, d));
                        var l = a.mode.token(i, o.inner);
                        return (
                            d > -1 && (i.string = c),
                            d == i.pos && a.parseDelimiters && (o.innerActive = o.inner = null),
                            a.innerStyle && (l = l ? l + ' ' + a.innerStyle : a.innerStyle),
                            l
                        );
                    }
                    for (var s = 1 / 0, c = i.string, u = 0; u < t.length; ++u) {
                        var d,
                            f = t[u];
                        if ((d = r(c, f.open, i.pos)) == i.pos) {
                            f.parseDelimiters || i.match(f.open), (o.innerActive = f);
                            var p = 0;
                            if (e.indent) {
                                var h = e.indent(o.outer, '', '');
                                h !== n.Pass && (p = h);
                            }
                            return (
                                (o.inner = n.startState(f.mode, p)),
                                f.delimStyle && f.delimStyle + ' ' + f.delimStyle + '-open'
                            );
                        }
                        -1 != d && d < s && (s = d);
                    }
                    s != 1 / 0 && (i.string = c.slice(0, s));
                    var m = e.token(i, o.outer);
                    return s != 1 / 0 && (i.string = c), m;
                },
                indent: function (t, r, i) {
                    var o = t.innerActive ? t.innerActive.mode : e;
                    return o.indent ? o.indent(t.innerActive ? t.inner : t.outer, r, i) : n.Pass;
                },
                blankLine: function (r) {
                    var i = r.innerActive ? r.innerActive.mode : e;
                    if ((i.blankLine && i.blankLine(r.innerActive ? r.inner : r.outer), r.innerActive))
                        '\n' === r.innerActive.close && (r.innerActive = r.inner = null);
                    else
                        for (var o = 0; o < t.length; ++o) {
                            var a = t[o];
                            '\n' === a.open &&
                                ((r.innerActive = a),
                                (r.inner = n.startState(a.mode, i.indent ? i.indent(r.outer, '', '') : 0)));
                        }
                },
                electricChars: e.electricChars,
                innerMode: function (t) {
                    return t.inner ? { state: t.inner, mode: t.innerActive.mode } : { state: t.outer, mode: e };
                },
            };
        };
    }),
    o(function (e, t) {
        var n;
        (n = a).defineSimpleMode('handlebars-tags', {
            start: [
                { regex: /\{\{\{/, push: 'handlebars_raw', token: 'tag' },
                { regex: /\{\{!--/, push: 'dash_comment', token: 'comment' },
                { regex: /\{\{!/, push: 'comment', token: 'comment' },
                { regex: /\{\{/, push: 'handlebars', token: 'tag' },
            ],
            handlebars_raw: [{ regex: /\}\}\}/, pop: !0, token: 'tag' }],
            handlebars: [
                { regex: /\}\}/, pop: !0, token: 'tag' },
                { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
                { regex: /'(?:[^\\']|\\.)*'?/, token: 'string' },
                { regex: />|[#\/]([A-Za-z_]\w*)/, token: 'keyword' },
                { regex: /(?:else|this)\b/, token: 'keyword' },
                { regex: /\d+/i, token: 'number' },
                { regex: /=|~|@|true|false/, token: 'atom' },
                { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: 'variable-2' },
            ],
            dash_comment: [
                { regex: /--\}\}/, pop: !0, token: 'comment' },
                { regex: /./, token: 'comment' },
            ],
            comment: [
                { regex: /\}\}/, pop: !0, token: 'comment' },
                { regex: /./, token: 'comment' },
            ],
            meta: { blockCommentStart: '{{--', blockCommentEnd: '--}}' },
        }),
            n.defineMode('handlebars', function (e, t) {
                var r = n.getMode(e, 'handlebars-tags');
                return t && t.base
                    ? n.multiplexingMode(n.getMode(e, t.base), {
                          open: '{{',
                          close: /\}\}\}?/,
                          mode: r,
                          parseDelimiters: !0,
                      })
                    : r;
            }),
            n.defineMIME('text/x-handlebars-template', 'handlebars');
    }),
    o(function (e, t) {
        var n, r;
        (r = {
            script: [
                ['lang', /coffee(script)?/, 'coffeescript'],
                ['type', /^(?:text|application)\/(?:x-)?coffee(?:script)?$/, 'coffeescript'],
                ['lang', /^babel$/, 'javascript'],
                ['type', /^text\/babel$/, 'javascript'],
                ['type', /^text\/ecmascript-\d+$/, 'javascript'],
            ],
            style: [
                ['lang', /^stylus$/i, 'stylus'],
                ['lang', /^sass$/i, 'sass'],
                ['lang', /^less$/i, 'text/x-less'],
                ['lang', /^scss$/i, 'text/x-scss'],
                ['type', /^(text\/)?(x-)?styl(us)?$/i, 'stylus'],
                ['type', /^text\/sass/i, 'sass'],
                ['type', /^(text\/)?(x-)?scss$/i, 'text/x-scss'],
                ['type', /^(text\/)?(x-)?less$/i, 'text/x-less'],
            ],
            template: [
                ['lang', /^vue-template$/i, 'vue'],
                ['lang', /^pug$/i, 'pug'],
                ['lang', /^handlebars$/i, 'handlebars'],
                ['type', /^(text\/)?(x-)?pug$/i, 'pug'],
                ['type', /^text\/x-handlebars-template$/i, 'handlebars'],
                [null, null, 'vue-template'],
            ],
        }),
            (n = a).defineMode('vue-template', function (e, t) {
                var r = {
                    token: function (e) {
                        if (e.match(/^\{\{.*?\}\}/)) return 'meta mustache';
                        for (; e.next() && !e.match('{{', !1); );
                        return null;
                    },
                };
                return n.overlayMode(n.getMode(e, t.backdrop || 'text/html'), r);
            }),
            n.defineMode(
                'vue',
                function (e) {
                    return n.getMode(e, { name: 'htmlmixed', tags: r });
                },
                'htmlmixed',
                'xml',
                'javascript',
                'coffeescript',
                'css',
                'sass',
                'stylus',
                'pug',
                'handlebars'
            ),
            n.defineMIME('script/x-vue', 'vue'),
            n.defineMIME('text/x-vue', 'vue');
    }),
    o(function (e, t) {
        var n;
        (n = a).defineMode('yaml', function () {
            var e = new RegExp('\\b((' + ['true', 'false', 'on', 'off', 'yes', 'no'].join(')|(') + '))$', 'i');
            return {
                token: function (t, n) {
                    var r = t.peek(),
                        i = n.escaped;
                    if (((n.escaped = !1), '#' == r && (0 == t.pos || /\s/.test(t.string.charAt(t.pos - 1)))))
                        return t.skipToEnd(), 'comment';
                    if (t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return 'string';
                    if (n.literal && t.indentation() > n.keyCol) return t.skipToEnd(), 'string';
                    if ((n.literal && (n.literal = !1), t.sol())) {
                        if (((n.keyCol = 0), (n.pair = !1), (n.pairStart = !1), t.match(/---/))) return 'def';
                        if (t.match(/\.\.\./)) return 'def';
                        if (t.match(/\s*-\s+/)) return 'meta';
                    }
                    if (t.match(/^(\{|\}|\[|\])/))
                        return (
                            '{' == r
                                ? n.inlinePairs++
                                : '}' == r
                                ? n.inlinePairs--
                                : '[' == r
                                ? n.inlineList++
                                : n.inlineList--,
                            'meta'
                        );
                    if (n.inlineList > 0 && !i && ',' == r) return t.next(), 'meta';
                    if (n.inlinePairs > 0 && !i && ',' == r)
                        return (n.keyCol = 0), (n.pair = !1), (n.pairStart = !1), t.next(), 'meta';
                    if (n.pairStart) {
                        if (t.match(/^\s*(\||\>)\s*/)) return (n.literal = !0), 'meta';
                        if (t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) return 'variable-2';
                        if (0 == n.inlinePairs && t.match(/^\s*-?[0-9\.\,]+\s?$/)) return 'number';
                        if (n.inlinePairs > 0 && t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)) return 'number';
                        if (t.match(e)) return 'keyword';
                    }
                    return !n.pair &&
                        t.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)
                        ? ((n.pair = !0), (n.keyCol = t.indentation()), 'atom')
                        : n.pair && t.match(/^:\s*/)
                        ? ((n.pairStart = !0), 'meta')
                        : ((n.pairStart = !1), (n.escaped = '\\' == r), t.next(), null);
                },
                startState: function () {
                    return {
                        pair: !1,
                        pairStart: !1,
                        keyCol: 0,
                        inlinePairs: 0,
                        inlineList: 0,
                        literal: !1,
                        escaped: !1,
                    };
                },
                lineComment: '#',
                fold: 'indent',
            };
        }),
            n.defineMIME('text/x-yaml', 'yaml'),
            n.defineMIME('text/yaml', 'yaml');
    }),
    o(function (e, t) {
        !(function (e) {
            var t = 'CodeMirror-hint',
                n = 'CodeMirror-hint-active';
            function r(e, t) {
                (this.cm = e),
                    (this.options = t),
                    (this.widget = null),
                    (this.debounce = 0),
                    (this.tick = 0),
                    (this.startPos = this.cm.getCursor('start')),
                    (this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length);
                var n = this;
                e.on(
                    'cursorActivity',
                    (this.activityFunc = function () {
                        n.cursorActivity();
                    })
                );
            }
            (e.showHint = function (e, t, n) {
                if (!t) return e.showHint(n);
                n && n.async && (t.async = !0);
                var r = { hint: t };
                if (n) for (var i in n) r[i] = n[i];
                return e.showHint(r);
            }),
                e.defineExtension('showHint', function (t) {
                    t = a(this, this.getCursor('start'), t);
                    var n = this.listSelections();
                    if (!(n.length > 1)) {
                        if (this.somethingSelected()) {
                            if (!t.hint.supportsSelection) return;
                            for (var i = 0; i < n.length; i++) if (n[i].head.line != n[i].anchor.line) return;
                        }
                        this.state.completionActive && this.state.completionActive.close();
                        var o = (this.state.completionActive = new r(this, t));
                        o.options.hint && (e.signal(this, 'startCompletion', this), o.update(!0));
                    }
                }),
                e.defineExtension('closeHint', function () {
                    this.state.completionActive && this.state.completionActive.close();
                });
            var i =
                    window.requestAnimationFrame ||
                    function (e) {
                        return setTimeout(e, 1e3 / 60);
                    },
                o = window.cancelAnimationFrame || clearTimeout;
            function a(e, t, n) {
                var r = e.options.hintOptions,
                    i = {};
                for (var o in h) i[o] = h[o];
                if (r) for (var o in r) void 0 !== r[o] && (i[o] = r[o]);
                if (n) for (var o in n) void 0 !== n[o] && (i[o] = n[o]);
                return i.hint.resolve && (i.hint = i.hint.resolve(e, t)), i;
            }
            function l(e) {
                return 'string' == typeof e ? e : e.text;
            }
            function s(e, t) {
                var n = {
                    Up: function () {
                        t.moveFocus(-1);
                    },
                    Down: function () {
                        t.moveFocus(1);
                    },
                    PageUp: function () {
                        t.moveFocus(1 - t.menuSize(), !0);
                    },
                    PageDown: function () {
                        t.moveFocus(t.menuSize() - 1, !0);
                    },
                    Home: function () {
                        t.setFocus(0);
                    },
                    End: function () {
                        t.setFocus(t.length - 1);
                    },
                    Enter: t.pick,
                    Tab: t.pick,
                    Esc: t.close,
                };
                /Mac/.test(navigator.platform) &&
                    ((n['Ctrl-P'] = function () {
                        t.moveFocus(-1);
                    }),
                    (n['Ctrl-N'] = function () {
                        t.moveFocus(1);
                    }));
                var r = e.options.customKeys,
                    i = r ? {} : n;
                function o(e, r) {
                    var o;
                    (o =
                        'string' != typeof r
                            ? function (e) {
                                  return r(e, t);
                              }
                            : n.hasOwnProperty(r)
                            ? n[r]
                            : r),
                        (i[e] = o);
                }
                if (r) for (var a in r) r.hasOwnProperty(a) && o(a, r[a]);
                var l = e.options.extraKeys;
                if (l) for (var a in l) l.hasOwnProperty(a) && o(a, l[a]);
                return i;
            }
            function c(e, t) {
                for (; t && t != e; ) {
                    if ('LI' === t.nodeName.toUpperCase() && t.parentNode == e) return t;
                    t = t.parentNode;
                }
            }
            function u(r, i) {
                (this.completion = r), (this.data = i), (this.picked = !1);
                var o = this,
                    a = r.cm,
                    u = a.getInputField().ownerDocument,
                    d = u.defaultView || u.parentWindow,
                    f = (this.hints = u.createElement('ul')),
                    p = r.cm.options.theme;
                (f.className = 'CodeMirror-hints ' + p), (this.selectedHint = i.selectedHint || 0);
                for (var h = i.list, m = 0; m < h.length; ++m) {
                    var g = f.appendChild(u.createElement('li')),
                        v = h[m],
                        y = t + (m != this.selectedHint ? '' : ' ' + n);
                    null != v.className && (y = v.className + ' ' + y),
                        (g.className = y),
                        v.render ? v.render(g, i, v) : g.appendChild(u.createTextNode(v.displayText || l(v))),
                        (g.hintId = m);
                }
                var b = r.options.container || u.body,
                    x = a.cursorCoords(r.options.alignWithWord ? i.from : null),
                    k = x.left,
                    w = x.bottom,
                    C = !0,
                    S = 0,
                    M = 0;
                if (b !== u.body) {
                    var T =
                            -1 !== ['absolute', 'relative', 'fixed'].indexOf(d.getComputedStyle(b).position)
                                ? b
                                : b.offsetParent,
                        L = T.getBoundingClientRect(),
                        A = u.body.getBoundingClientRect();
                    (S = L.left - A.left - T.scrollLeft), (M = L.top - A.top - T.scrollTop);
                }
                (f.style.left = k - S + 'px'), (f.style.top = w - M + 'px');
                var _ = d.innerWidth || Math.max(u.body.offsetWidth, u.documentElement.offsetWidth),
                    O = d.innerHeight || Math.max(u.body.offsetHeight, u.documentElement.offsetHeight);
                b.appendChild(f);
                var E = f.getBoundingClientRect(),
                    z = E.bottom - O,
                    P = f.scrollHeight > f.clientHeight + 1,
                    F = a.getScrollInfo();
                if (z > 0) {
                    var N = E.bottom - E.top;
                    if (x.top - (x.bottom - E.top) - N > 0) (f.style.top = (w = x.top - N - M) + 'px'), (C = !1);
                    else if (N > O) {
                        (f.style.height = O - 5 + 'px'), (f.style.top = (w = x.bottom - E.top - M) + 'px');
                        var D = a.getCursor();
                        i.from.ch != D.ch &&
                            ((x = a.cursorCoords(D)),
                            (f.style.left = (k = x.left - S) + 'px'),
                            (E = f.getBoundingClientRect()));
                    }
                }
                var j,
                    H = E.right - _;
                if (
                    (H > 0 &&
                        (E.right - E.left > _ && ((f.style.width = _ - 5 + 'px'), (H -= E.right - E.left - _)),
                        (f.style.left = (k = x.left - H - S) + 'px')),
                    P)
                )
                    for (var I = f.firstChild; I; I = I.nextSibling)
                        I.style.paddingRight = a.display.nativeBarWidth + 'px';
                return (
                    a.addKeyMap(
                        (this.keyMap = s(r, {
                            moveFocus: function (e, t) {
                                o.changeActive(o.selectedHint + e, t);
                            },
                            setFocus: function (e) {
                                o.changeActive(e);
                            },
                            menuSize: function () {
                                return o.screenAmount();
                            },
                            length: h.length,
                            close: function () {
                                r.close();
                            },
                            pick: function () {
                                o.pick();
                            },
                            data: i,
                        }))
                    ),
                    r.options.closeOnUnfocus &&
                        (a.on(
                            'blur',
                            (this.onBlur = function () {
                                j = setTimeout(function () {
                                    r.close();
                                }, 100);
                            })
                        ),
                        a.on(
                            'focus',
                            (this.onFocus = function () {
                                clearTimeout(j);
                            })
                        )),
                    a.on(
                        'scroll',
                        (this.onScroll = function () {
                            var e = a.getScrollInfo(),
                                t = a.getWrapperElement().getBoundingClientRect(),
                                n = w + F.top - e.top,
                                i = n - (d.pageYOffset || (u.documentElement || u.body).scrollTop);
                            if ((C || (i += f.offsetHeight), i <= t.top || i >= t.bottom)) return r.close();
                            (f.style.top = n + 'px'), (f.style.left = k + F.left - e.left + 'px');
                        })
                    ),
                    e.on(f, 'dblclick', function (e) {
                        var t = c(f, e.target || e.srcElement);
                        t && null != t.hintId && (o.changeActive(t.hintId), o.pick());
                    }),
                    e.on(f, 'click', function (e) {
                        var t = c(f, e.target || e.srcElement);
                        t &&
                            null != t.hintId &&
                            (o.changeActive(t.hintId), r.options.completeOnSingleClick && o.pick());
                    }),
                    e.on(f, 'mousedown', function () {
                        setTimeout(function () {
                            a.focus();
                        }, 20);
                    }),
                    this.scrollToActive(),
                    e.signal(i, 'select', h[this.selectedHint], f.childNodes[this.selectedHint]),
                    !0
                );
            }
            function d(e, t) {
                if (!e.somethingSelected()) return t;
                for (var n = [], r = 0; r < t.length; r++) t[r].supportsSelection && n.push(t[r]);
                return n;
            }
            function f(e, t, n, r) {
                if (e.async) e(t, r, n);
                else {
                    var i = e(t, n);
                    i && i.then ? i.then(r) : r(i);
                }
            }
            function p(t, n) {
                var r,
                    i = t.getHelpers(n, 'hint');
                if (i.length) {
                    var o = function (e, t, n) {
                        var r = d(e, i);
                        function o(i) {
                            if (i == r.length) return t(null);
                            f(r[i], e, n, function (e) {
                                e && e.list.length > 0 ? t(e) : o(i + 1);
                            });
                        }
                        o(0);
                    };
                    return (o.async = !0), (o.supportsSelection = !0), o;
                }
                return (r = t.getHelper(t.getCursor(), 'hintWords'))
                    ? function (t) {
                          return e.hint.fromList(t, { words: r });
                      }
                    : e.hint.anyword
                    ? function (t, n) {
                          return e.hint.anyword(t, n);
                      }
                    : function () {};
            }
            (r.prototype = {
                close: function () {
                    this.active() &&
                        ((this.cm.state.completionActive = null),
                        (this.tick = null),
                        this.cm.off('cursorActivity', this.activityFunc),
                        this.widget && this.data && e.signal(this.data, 'close'),
                        this.widget && this.widget.close(),
                        e.signal(this.cm, 'endCompletion', this.cm));
                },
                active: function () {
                    return this.cm.state.completionActive == this;
                },
                pick: function (t, n) {
                    var r = t.list[n],
                        i = this;
                    this.cm.operation(function () {
                        r.hint
                            ? r.hint(i.cm, t, r)
                            : i.cm.replaceRange(l(r), r.from || t.from, r.to || t.to, 'complete'),
                            e.signal(t, 'pick', r),
                            i.cm.scrollIntoView();
                    }),
                        this.close();
                },
                cursorActivity: function () {
                    this.debounce && (o(this.debounce), (this.debounce = 0));
                    var e = this.startPos;
                    this.data && (e = this.data.from);
                    var t = this.cm.getCursor(),
                        n = this.cm.getLine(t.line);
                    if (
                        t.line != this.startPos.line ||
                        n.length - t.ch != this.startLen - this.startPos.ch ||
                        t.ch < e.ch ||
                        this.cm.somethingSelected() ||
                        !t.ch ||
                        this.options.closeCharacters.test(n.charAt(t.ch - 1))
                    )
                        this.close();
                    else {
                        var r = this;
                        (this.debounce = i(function () {
                            r.update();
                        })),
                            this.widget && this.widget.disable();
                    }
                },
                update: function (e) {
                    if (null != this.tick) {
                        var t = this,
                            n = ++this.tick;
                        f(this.options.hint, this.cm, this.options, function (r) {
                            t.tick == n && t.finishUpdate(r, e);
                        });
                    }
                },
                finishUpdate: function (t, n) {
                    this.data && e.signal(this.data, 'update');
                    var r = (this.widget && this.widget.picked) || (n && this.options.completeSingle);
                    this.widget && this.widget.close(),
                        (this.data = t),
                        t &&
                            t.list.length &&
                            (r && 1 == t.list.length
                                ? this.pick(t, 0)
                                : ((this.widget = new u(this, t)), e.signal(t, 'shown')));
                },
            }),
                (u.prototype = {
                    close: function () {
                        if (this.completion.widget == this) {
                            (this.completion.widget = null),
                                this.hints.parentNode.removeChild(this.hints),
                                this.completion.cm.removeKeyMap(this.keyMap);
                            var e = this.completion.cm;
                            this.completion.options.closeOnUnfocus &&
                                (e.off('blur', this.onBlur), e.off('focus', this.onFocus)),
                                e.off('scroll', this.onScroll);
                        }
                    },
                    disable: function () {
                        this.completion.cm.removeKeyMap(this.keyMap);
                        var e = this;
                        (this.keyMap = {
                            Enter: function () {
                                e.picked = !0;
                            },
                        }),
                            this.completion.cm.addKeyMap(this.keyMap);
                    },
                    pick: function () {
                        this.completion.pick(this.data, this.selectedHint);
                    },
                    changeActive: function (t, r) {
                        if (
                            (t >= this.data.list.length
                                ? (t = r ? this.data.list.length - 1 : 0)
                                : t < 0 && (t = r ? 0 : this.data.list.length - 1),
                            this.selectedHint != t)
                        ) {
                            var i = this.hints.childNodes[this.selectedHint];
                            i && (i.className = i.className.replace(' ' + n, '')),
                                ((i = this.hints.childNodes[(this.selectedHint = t)]).className += ' ' + n),
                                this.scrollToActive(),
                                e.signal(this.data, 'select', this.data.list[this.selectedHint], i);
                        }
                    },
                    scrollToActive: function () {
                        var e = this.completion.options.scrollMargin || 0,
                            t = this.hints.childNodes[Math.max(0, this.selectedHint - e)],
                            n = this.hints.childNodes[Math.min(this.data.list.length - 1, this.selectedHint + e)],
                            r = this.hints.firstChild;
                        t.offsetTop < this.hints.scrollTop
                            ? (this.hints.scrollTop = t.offsetTop - r.offsetTop)
                            : n.offsetTop + n.offsetHeight > this.hints.scrollTop + this.hints.clientHeight &&
                              (this.hints.scrollTop =
                                  n.offsetTop + n.offsetHeight - this.hints.clientHeight + r.offsetTop);
                    },
                    screenAmount: function () {
                        return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
                    },
                }),
                e.registerHelper('hint', 'auto', { resolve: p }),
                e.registerHelper('hint', 'fromList', function (t, n) {
                    var r,
                        i = t.getCursor(),
                        o = t.getTokenAt(i),
                        a = e.Pos(i.line, o.start),
                        l = i;
                    o.start < i.ch && /\w/.test(o.string.charAt(i.ch - o.start - 1))
                        ? (r = o.string.substr(0, i.ch - o.start))
                        : ((r = ''), (a = i));
                    for (var s = [], c = 0; c < n.words.length; c++) {
                        var u = n.words[c];
                        u.slice(0, r.length) == r && s.push(u);
                    }
                    if (s.length) return { list: s, from: a, to: l };
                }),
                (e.commands.autocomplete = e.showHint);
            var h = {
                hint: e.hint.auto,
                completeSingle: !0,
                alignWithWord: !0,
                closeCharacters: /[\s()\[\]{};:>,]/,
                closeOnUnfocus: !0,
                completeOnSingleClick: !0,
                container: null,
                customKeys: null,
                extraKeys: null,
            };
            e.defineOption('hintOptions', null);
        })(a);
    }),
    o(function (e, t) {
        var n, r;
        (r = {
            active: 1,
            after: 1,
            before: 1,
            checked: 1,
            default: 1,
            disabled: 1,
            empty: 1,
            enabled: 1,
            'first-child': 1,
            'first-letter': 1,
            'first-line': 1,
            'first-of-type': 1,
            focus: 1,
            hover: 1,
            'in-range': 1,
            indeterminate: 1,
            invalid: 1,
            lang: 1,
            'last-child': 1,
            'last-of-type': 1,
            link: 1,
            not: 1,
            'nth-child': 1,
            'nth-last-child': 1,
            'nth-last-of-type': 1,
            'nth-of-type': 1,
            'only-of-type': 1,
            'only-child': 1,
            optional: 1,
            'out-of-range': 1,
            placeholder: 1,
            'read-only': 1,
            'read-write': 1,
            required: 1,
            root: 1,
            selection: 1,
            target: 1,
            valid: 1,
            visited: 1,
        }),
            (n = a).registerHelper('hint', 'css', function (e) {
                var t = e.getCursor(),
                    i = e.getTokenAt(t),
                    o = n.innerMode(e.getMode(), i.state);
                if ('css' == o.mode.name) {
                    if ('keyword' == i.type && 0 == '!important'.indexOf(i.string))
                        return { list: ['!important'], from: n.Pos(t.line, i.start), to: n.Pos(t.line, i.end) };
                    var a = i.start,
                        l = t.ch,
                        s = i.string.slice(0, l - a);
                    /[^\w$_-]/.test(s) && ((s = ''), (a = l = t.ch));
                    var c = n.resolveMode('text/css'),
                        u = [],
                        d = o.state.state;
                    return (
                        'pseudo' == d || 'variable-3' == i.type
                            ? f(r)
                            : 'block' == d || 'maybeprop' == d
                            ? f(c.propertyKeywords)
                            : 'prop' == d || 'parens' == d || 'at' == d || 'params' == d
                            ? (f(c.valueKeywords), f(c.colorKeywords))
                            : ('media' != d && 'media_parens' != d) || (f(c.mediaTypes), f(c.mediaFeatures)),
                        u.length ? { list: u, from: n.Pos(t.line, a), to: n.Pos(t.line, l) } : void 0
                    );
                }
                function f(e) {
                    for (var t in e) (s && 0 != t.lastIndexOf(s, 0)) || u.push(t);
                }
            });
    }),
    o(function (e, t) {
        !(function (e) {
            var t = e.Pos;
            function n(e, t, n) {
                return n ? e.indexOf(t) >= 0 : 0 == e.lastIndexOf(t, 0);
            }
            function r(r, i) {
                var o = i && i.schemaInfo,
                    a = (i && i.quoteChar) || '"',
                    l = i && i.matchInMiddle;
                if (o) {
                    var s = r.getCursor(),
                        c = r.getTokenAt(s);
                    if (
                        (c.end > s.ch && ((c.end = s.ch), (c.string = c.string.slice(0, s.ch - c.start))),
                        (b = e.innerMode(r.getMode(), c.state)).mode.xmlCurrentTag)
                    ) {
                        var u,
                            d,
                            f = [],
                            p = !1,
                            h = /\btag\b/.test(c.type) && !/>$/.test(c.string),
                            m = h && /^\w/.test(c.string);
                        if (m) {
                            var g = r.getLine(s.line).slice(Math.max(0, c.start - 2), c.start),
                                v = /<\/$/.test(g) ? 'close' : /<$/.test(g) ? 'open' : null;
                            v && (d = c.start - ('close' == v ? 2 : 1));
                        } else h && '<' == c.string ? (v = 'open') : h && '</' == c.string && (v = 'close');
                        var y = b.mode.xmlCurrentTag(b.state);
                        if ((!h && !y) || v) {
                            m && (u = c.string), (p = v);
                            var b,
                                x = b.mode.xmlCurrentContext ? b.mode.xmlCurrentContext(b.state) : [],
                                k = (b = x.length && x[x.length - 1]) && o[b],
                                w = b ? k && k.children : o['!top'];
                            if (w && 'close' != v)
                                for (var C = 0; C < w.length; ++C) (u && !n(w[C], u, l)) || f.push('<' + w[C]);
                            else if ('close' != v)
                                for (var S in o)
                                    !o.hasOwnProperty(S) ||
                                        '!top' == S ||
                                        '!attrs' == S ||
                                        (u && !n(S, u, l)) ||
                                        f.push('<' + S);
                            b && (!u || ('close' == v && n(b, u, l))) && f.push('</' + b + '>');
                        } else {
                            var M = (k = y && o[y.name]) && k.attrs,
                                T = o['!attrs'];
                            if (!M && !T) return;
                            if (M) {
                                if (T) {
                                    var L = {};
                                    for (var A in T) T.hasOwnProperty(A) && (L[A] = T[A]);
                                    for (var A in M) M.hasOwnProperty(A) && (L[A] = M[A]);
                                    M = L;
                                }
                            } else M = T;
                            if ('string' == c.type || '=' == c.string) {
                                var _,
                                    O = (g = r.getRange(
                                        t(s.line, Math.max(0, s.ch - 60)),
                                        t(s.line, 'string' == c.type ? c.start : c.end)
                                    )).match(/([^\s\u00a0=<>\"\']+)=$/);
                                if (!O || !M.hasOwnProperty(O[1]) || !(_ = M[O[1]])) return;
                                if (('function' == typeof _ && (_ = _.call(this, r)), 'string' == c.type)) {
                                    u = c.string;
                                    var E = 0;
                                    /['"]/.test(c.string.charAt(0)) &&
                                        ((a = c.string.charAt(0)), (u = c.string.slice(1)), E++);
                                    var z = c.string.length;
                                    if (
                                        (/['"]/.test(c.string.charAt(z - 1)) &&
                                            ((a = c.string.charAt(z - 1)), (u = c.string.substr(E, z - 2))),
                                        E)
                                    ) {
                                        var P = r.getLine(s.line);
                                        P.length > c.end && P.charAt(c.end) == a && c.end++;
                                    }
                                    p = !0;
                                }
                                function F(e) {
                                    if (e)
                                        for (var t = 0; t < e.length; ++t)
                                            (u && !n(e[t], u, l)) || f.push(a + e[t] + a);
                                    return D();
                                }
                                return _ && _.then ? _.then(F) : F(_);
                            }
                            for (var N in ('attribute' == c.type && ((u = c.string), (p = !0)), M))
                                !M.hasOwnProperty(N) || (u && !n(N, u, l)) || f.push(N);
                        }
                        return D();
                    }
                }
                function D() {
                    return { list: f, from: p ? t(s.line, null == d ? c.start : d) : s, to: p ? t(s.line, c.end) : s };
                }
            }
            e.registerHelper('hint', 'xml', r);
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = 'ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu'.split(
                    ' '
                ),
                n = ['_blank', '_self', '_top', '_parent'],
                r = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
                i = ['get', 'post', 'put', 'delete'],
                o = ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
                a = [
                    'all',
                    'screen',
                    'print',
                    'embossed',
                    'braille',
                    'handheld',
                    'print',
                    'projection',
                    'screen',
                    'tty',
                    'tv',
                    'speech',
                    '3d-glasses',
                    'resolution [>][<][=] [X]',
                    'device-aspect-ratio: X/Y',
                    'orientation:portrait',
                    'orientation:landscape',
                    'device-height: [X]',
                    'device-width: [X]',
                ],
                l = { attrs: {} },
                s = {
                    a: { attrs: { href: null, ping: null, type: null, media: a, target: n, hreflang: t } },
                    abbr: l,
                    acronym: l,
                    address: l,
                    applet: l,
                    area: {
                        attrs: {
                            alt: null,
                            coords: null,
                            href: null,
                            target: null,
                            ping: null,
                            media: a,
                            hreflang: t,
                            type: null,
                            shape: ['default', 'rect', 'circle', 'poly'],
                        },
                    },
                    article: l,
                    aside: l,
                    audio: {
                        attrs: {
                            src: null,
                            mediagroup: null,
                            crossorigin: ['anonymous', 'use-credentials'],
                            preload: ['none', 'metadata', 'auto'],
                            autoplay: ['', 'autoplay'],
                            loop: ['', 'loop'],
                            controls: ['', 'controls'],
                        },
                    },
                    b: l,
                    base: { attrs: { href: null, target: n } },
                    basefont: l,
                    bdi: l,
                    bdo: l,
                    big: l,
                    blockquote: { attrs: { cite: null } },
                    body: l,
                    br: l,
                    button: {
                        attrs: {
                            form: null,
                            formaction: null,
                            name: null,
                            value: null,
                            autofocus: ['', 'autofocus'],
                            disabled: ['', 'autofocus'],
                            formenctype: o,
                            formmethod: i,
                            formnovalidate: ['', 'novalidate'],
                            formtarget: n,
                            type: ['submit', 'reset', 'button'],
                        },
                    },
                    canvas: { attrs: { width: null, height: null } },
                    caption: l,
                    center: l,
                    cite: l,
                    code: l,
                    col: { attrs: { span: null } },
                    colgroup: { attrs: { span: null } },
                    command: {
                        attrs: {
                            type: ['command', 'checkbox', 'radio'],
                            label: null,
                            icon: null,
                            radiogroup: null,
                            command: null,
                            title: null,
                            disabled: ['', 'disabled'],
                            checked: ['', 'checked'],
                        },
                    },
                    data: { attrs: { value: null } },
                    datagrid: { attrs: { disabled: ['', 'disabled'], multiple: ['', 'multiple'] } },
                    datalist: { attrs: { data: null } },
                    dd: l,
                    del: { attrs: { cite: null, datetime: null } },
                    details: { attrs: { open: ['', 'open'] } },
                    dfn: l,
                    dir: l,
                    div: l,
                    dl: l,
                    dt: l,
                    em: l,
                    embed: { attrs: { src: null, type: null, width: null, height: null } },
                    eventsource: { attrs: { src: null } },
                    fieldset: { attrs: { disabled: ['', 'disabled'], form: null, name: null } },
                    figcaption: l,
                    figure: l,
                    font: l,
                    footer: l,
                    form: {
                        attrs: {
                            action: null,
                            name: null,
                            'accept-charset': r,
                            autocomplete: ['on', 'off'],
                            enctype: o,
                            method: i,
                            novalidate: ['', 'novalidate'],
                            target: n,
                        },
                    },
                    frame: l,
                    frameset: l,
                    h1: l,
                    h2: l,
                    h3: l,
                    h4: l,
                    h5: l,
                    h6: l,
                    head: {
                        attrs: {},
                        children: ['title', 'base', 'link', 'style', 'meta', 'script', 'noscript', 'command'],
                    },
                    header: l,
                    hgroup: l,
                    hr: l,
                    html: { attrs: { manifest: null }, children: ['head', 'body'] },
                    i: l,
                    iframe: {
                        attrs: {
                            src: null,
                            srcdoc: null,
                            name: null,
                            width: null,
                            height: null,
                            sandbox: ['allow-top-navigation', 'allow-same-origin', 'allow-forms', 'allow-scripts'],
                            seamless: ['', 'seamless'],
                        },
                    },
                    img: {
                        attrs: {
                            alt: null,
                            src: null,
                            ismap: null,
                            usemap: null,
                            width: null,
                            height: null,
                            crossorigin: ['anonymous', 'use-credentials'],
                        },
                    },
                    input: {
                        attrs: {
                            alt: null,
                            dirname: null,
                            form: null,
                            formaction: null,
                            height: null,
                            list: null,
                            max: null,
                            maxlength: null,
                            min: null,
                            name: null,
                            pattern: null,
                            placeholder: null,
                            size: null,
                            src: null,
                            step: null,
                            value: null,
                            width: null,
                            accept: ['audio/*', 'video/*', 'image/*'],
                            autocomplete: ['on', 'off'],
                            autofocus: ['', 'autofocus'],
                            checked: ['', 'checked'],
                            disabled: ['', 'disabled'],
                            formenctype: o,
                            formmethod: i,
                            formnovalidate: ['', 'novalidate'],
                            formtarget: n,
                            multiple: ['', 'multiple'],
                            readonly: ['', 'readonly'],
                            required: ['', 'required'],
                            type: [
                                'hidden',
                                'text',
                                'search',
                                'tel',
                                'url',
                                'email',
                                'password',
                                'datetime',
                                'date',
                                'month',
                                'week',
                                'time',
                                'datetime-local',
                                'number',
                                'range',
                                'color',
                                'checkbox',
                                'radio',
                                'file',
                                'submit',
                                'image',
                                'reset',
                                'button',
                            ],
                        },
                    },
                    ins: { attrs: { cite: null, datetime: null } },
                    kbd: l,
                    keygen: {
                        attrs: {
                            challenge: null,
                            form: null,
                            name: null,
                            autofocus: ['', 'autofocus'],
                            disabled: ['', 'disabled'],
                            keytype: ['RSA'],
                        },
                    },
                    label: { attrs: { for: null, form: null } },
                    legend: l,
                    li: { attrs: { value: null } },
                    link: {
                        attrs: {
                            href: null,
                            type: null,
                            hreflang: t,
                            media: a,
                            sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
                        },
                    },
                    map: { attrs: { name: null } },
                    mark: l,
                    menu: { attrs: { label: null, type: ['list', 'context', 'toolbar'] } },
                    meta: {
                        attrs: {
                            content: null,
                            charset: r,
                            name: ['viewport', 'application-name', 'author', 'description', 'generator', 'keywords'],
                            'http-equiv': ['content-language', 'content-type', 'default-style', 'refresh'],
                        },
                    },
                    meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
                    nav: l,
                    noframes: l,
                    noscript: l,
                    object: {
                        attrs: {
                            data: null,
                            type: null,
                            name: null,
                            usemap: null,
                            form: null,
                            width: null,
                            height: null,
                            typemustmatch: ['', 'typemustmatch'],
                        },
                    },
                    ol: { attrs: { reversed: ['', 'reversed'], start: null, type: ['1', 'a', 'A', 'i', 'I'] } },
                    optgroup: { attrs: { disabled: ['', 'disabled'], label: null } },
                    option: {
                        attrs: { disabled: ['', 'disabled'], label: null, selected: ['', 'selected'], value: null },
                    },
                    output: { attrs: { for: null, form: null, name: null } },
                    p: l,
                    param: { attrs: { name: null, value: null } },
                    pre: l,
                    progress: { attrs: { value: null, max: null } },
                    q: { attrs: { cite: null } },
                    rp: l,
                    rt: l,
                    ruby: l,
                    s: l,
                    samp: l,
                    script: {
                        attrs: {
                            type: ['text/javascript'],
                            src: null,
                            async: ['', 'async'],
                            defer: ['', 'defer'],
                            charset: r,
                        },
                    },
                    section: l,
                    select: {
                        attrs: {
                            form: null,
                            name: null,
                            size: null,
                            autofocus: ['', 'autofocus'],
                            disabled: ['', 'disabled'],
                            multiple: ['', 'multiple'],
                        },
                    },
                    small: l,
                    source: { attrs: { src: null, type: null, media: null } },
                    span: l,
                    strike: l,
                    strong: l,
                    style: { attrs: { type: ['text/css'], media: a, scoped: null } },
                    sub: l,
                    summary: l,
                    sup: l,
                    table: l,
                    tbody: l,
                    td: { attrs: { colspan: null, rowspan: null, headers: null } },
                    textarea: {
                        attrs: {
                            dirname: null,
                            form: null,
                            maxlength: null,
                            name: null,
                            placeholder: null,
                            rows: null,
                            cols: null,
                            autofocus: ['', 'autofocus'],
                            disabled: ['', 'disabled'],
                            readonly: ['', 'readonly'],
                            required: ['', 'required'],
                            wrap: ['soft', 'hard'],
                        },
                    },
                    tfoot: l,
                    th: {
                        attrs: {
                            colspan: null,
                            rowspan: null,
                            headers: null,
                            scope: ['row', 'col', 'rowgroup', 'colgroup'],
                        },
                    },
                    thead: l,
                    time: { attrs: { datetime: null } },
                    title: l,
                    tr: l,
                    track: {
                        attrs: {
                            src: null,
                            label: null,
                            default: null,
                            kind: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
                            srclang: t,
                        },
                    },
                    tt: l,
                    u: l,
                    ul: l,
                    var: l,
                    video: {
                        attrs: {
                            src: null,
                            poster: null,
                            width: null,
                            height: null,
                            crossorigin: ['anonymous', 'use-credentials'],
                            preload: ['auto', 'metadata', 'none'],
                            autoplay: ['', 'autoplay'],
                            mediagroup: ['movie'],
                            muted: ['', 'muted'],
                            controls: ['', 'controls'],
                        },
                    },
                    wbr: l,
                },
                c = {
                    accesskey: [
                        'a',
                        'b',
                        'c',
                        'd',
                        'e',
                        'f',
                        'g',
                        'h',
                        'i',
                        'j',
                        'k',
                        'l',
                        'm',
                        'n',
                        'o',
                        'p',
                        'q',
                        'r',
                        's',
                        't',
                        'u',
                        'v',
                        'w',
                        'x',
                        'y',
                        'z',
                        '0',
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                    ],
                    class: null,
                    contenteditable: ['true', 'false'],
                    contextmenu: null,
                    dir: ['ltr', 'rtl', 'auto'],
                    draggable: ['true', 'false', 'auto'],
                    dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
                    hidden: ['hidden'],
                    id: null,
                    inert: ['inert'],
                    itemid: null,
                    itemprop: null,
                    itemref: null,
                    itemscope: ['itemscope'],
                    itemtype: null,
                    lang: ['en', 'es'],
                    spellcheck: ['true', 'false'],
                    autocorrect: ['true', 'false'],
                    autocapitalize: ['true', 'false'],
                    style: null,
                    tabindex: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    title: null,
                    translate: ['yes', 'no'],
                    onclick: null,
                    rel: [
                        'stylesheet',
                        'alternate',
                        'author',
                        'bookmark',
                        'help',
                        'license',
                        'next',
                        'nofollow',
                        'noreferrer',
                        'prefetch',
                        'prev',
                        'search',
                        'tag',
                    ],
                };
            function u(e) {
                for (var t in c) c.hasOwnProperty(t) && (e.attrs[t] = c[t]);
            }
            for (var d in (u(l), s)) s.hasOwnProperty(d) && s[d] != l && u(s[d]);
            function f(t, n) {
                var r = { schemaInfo: s };
                if (n) for (var i in n) r[i] = n[i];
                return e.hint.xml(t, r);
            }
            (e.htmlSchema = s), e.registerHelper('hint', 'html', f);
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = e.Pos;
            function n(e, t) {
                for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
            }
            function r(e, t) {
                if (!Array.prototype.indexOf) {
                    for (var n = e.length; n--; ) if (e[n] === t) return !0;
                    return !1;
                }
                return -1 != e.indexOf(t);
            }
            function i(n, r, i, o) {
                var a = n.getCursor(),
                    l = i(n, a);
                if (!/\b(?:string|comment)\b/.test(l.type)) {
                    var s = e.innerMode(n.getMode(), l.state);
                    if ('json' !== s.mode.helperType) {
                        (l.state = s.state),
                            /^[\w$_]*$/.test(l.string)
                                ? l.end > a.ch && ((l.end = a.ch), (l.string = l.string.slice(0, a.ch - l.start)))
                                : (l = {
                                      start: a.ch,
                                      end: a.ch,
                                      string: '',
                                      state: l.state,
                                      type: '.' == l.string ? 'property' : null,
                                  });
                        for (var c = l; 'property' == c.type; ) {
                            if ('.' != (c = i(n, t(a.line, c.start))).string) return;
                            if (((c = i(n, t(a.line, c.start))), !u)) var u = [];
                            u.push(c);
                        }
                        return { list: h(l, u, r, o), from: t(a.line, l.start), to: t(a.line, l.end) };
                    }
                }
            }
            function o(e, t) {
                return i(
                    e,
                    d,
                    function (e, t) {
                        return e.getTokenAt(t);
                    },
                    t
                );
            }
            function a(e, t) {
                var n = e.getTokenAt(t);
                return (
                    t.ch == n.start + 1 && '.' == n.string.charAt(0)
                        ? ((n.end = n.start), (n.string = '.'), (n.type = 'property'))
                        : /^\.[\w$_]*$/.test(n.string) &&
                          ((n.type = 'property'), n.start++, (n.string = n.string.replace(/\./, ''))),
                    n
                );
            }
            function l(e, t) {
                return i(e, f, a, t);
            }
            e.registerHelper('hint', 'javascript', o), e.registerHelper('hint', 'coffeescript', l);
            var s = 'charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search'.split(
                    ' '
                ),
                c = 'length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight '.split(
                    ' '
                ),
                u = 'prototype apply call bind'.split(' '),
                d = 'break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield'.split(
                    ' '
                ),
                f = 'and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes'.split(
                    ' '
                );
            function p(e, t) {
                if (Object.getOwnPropertyNames && Object.getPrototypeOf)
                    for (var n = e; n; n = Object.getPrototypeOf(n)) Object.getOwnPropertyNames(n).forEach(t);
                else for (var r in e) t(r);
            }
            function h(e, t, i, o) {
                var a = [],
                    l = e.string,
                    d = (o && o.globalScope) || window;
                function f(e) {
                    0 != e.lastIndexOf(l, 0) || r(a, e) || a.push(e);
                }
                function h(e) {
                    'string' == typeof e ? n(s, f) : e instanceof Array ? n(c, f) : e instanceof Function && n(u, f),
                        p(e, f);
                }
                if (t && t.length) {
                    var m,
                        g = t.pop();
                    for (
                        g.type && 0 === g.type.indexOf('variable')
                            ? (o && o.additionalContext && (m = o.additionalContext[g.string]),
                              (o && !1 === o.useGlobalScope) || (m = m || d[g.string]))
                            : 'string' == g.type
                            ? (m = '')
                            : 'atom' == g.type
                            ? (m = 1)
                            : 'function' == g.type &&
                              (null == d.jQuery ||
                              ('$' != g.string && 'jQuery' != g.string) ||
                              'function' != typeof d.jQuery
                                  ? null != d._ && '_' == g.string && 'function' == typeof d._ && (m = d._())
                                  : (m = d.jQuery()));
                        null != m && t.length;

                    )
                        m = m[t.pop().string];
                    null != m && h(m);
                } else {
                    for (var v = e.state.localVars; v; v = v.next) f(v.name);
                    for (var y = e.state.context; y; y = y.prev) for (v = y.vars; v; v = v.next) f(v.name);
                    for (v = e.state.globalVars; v; v = v.next) f(v.name);
                    if (o && null != o.additionalContext) for (var b in o.additionalContext) f(b);
                    (o && !1 === o.useGlobalScope) || h(d), n(i, f);
                }
                return a;
            }
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t,
                n,
                r,
                i,
                o = { QUERY_DIV: ';', ALIAS_KEYWORD: 'AS' },
                a = e.Pos,
                l = e.cmpPos;
            function s(e) {
                return '[object Array]' == Object.prototype.toString.call(e);
            }
            function c(t) {
                var n = t.doc.modeOption;
                return 'sql' === n && (n = 'text/x-sql'), e.resolveMode(n).keywords;
            }
            function u(t) {
                var n = t.doc.modeOption;
                return 'sql' === n && (n = 'text/x-sql'), e.resolveMode(n).identifierQuote || '`';
            }
            function d(e) {
                return 'string' == typeof e ? e : e.text;
            }
            function f(e, t) {
                return s(t) && (t = { columns: t }), t.text || (t.text = e), t;
            }
            function p(e) {
                var t = {};
                if (s(e))
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        t[d(r).toUpperCase()] = f(d(r), r);
                    }
                else if (e) for (var i in e) t[i.toUpperCase()] = f(i, e[i]);
                return t;
            }
            function h(e) {
                return t[e.toUpperCase()];
            }
            function m(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t;
            }
            function g(e, t) {
                var n = e.length,
                    r = d(t).substr(0, n);
                return e.toUpperCase() === r.toUpperCase();
            }
            function v(e, t, n, r) {
                if (s(n)) for (var i = 0; i < n.length; i++) g(t, n[i]) && e.push(r(n[i]));
                else
                    for (var o in n)
                        if (n.hasOwnProperty(o)) {
                            var a = n[o];
                            g(
                                t,
                                (a =
                                    a && !0 !== a
                                        ? a.displayText
                                            ? { text: a.text, displayText: a.displayText }
                                            : a.text
                                        : o)
                            ) && e.push(r(a));
                        }
            }
            function y(e) {
                '.' == e.charAt(0) && (e = e.substr(1));
                for (var t = e.split(i + i), n = 0; n < t.length; n++) t[n] = t[n].replace(new RegExp(i, 'g'), '');
                return t.join(i);
            }
            function b(e) {
                for (var t = d(e).split('.'), n = 0; n < t.length; n++)
                    t[n] = i + t[n].replace(new RegExp(i, 'g'), i + i) + i;
                var r = t.join('.');
                return 'string' == typeof e ? r : (((e = m(e)).text = r), e);
            }
            function x(e, r, o, l) {
                for (var s = !1, c = [], u = r.start, d = !0; d; )
                    (d = '.' == r.string.charAt(0)),
                        (s = s || r.string.charAt(0) == i),
                        (u = r.start),
                        c.unshift(y(r.string)),
                        '.' == (r = l.getTokenAt(a(e.line, r.start))).string &&
                            ((d = !0), (r = l.getTokenAt(a(e.line, r.start))));
                var f = c.join('.');
                v(o, f, t, function (e) {
                    return s ? b(e) : e;
                }),
                    v(o, f, n, function (e) {
                        return s ? b(e) : e;
                    }),
                    (f = c.pop());
                var p = c.join('.'),
                    g = !1,
                    x = p;
                if (!h(p)) {
                    var k = p;
                    (p = w(p, l)) !== k && (g = !0);
                }
                var C = h(p);
                return (
                    C && C.columns && (C = C.columns),
                    C &&
                        v(o, f, C, function (e) {
                            var t = p;
                            return (
                                1 == g && (t = x),
                                'string' == typeof e ? (e = t + '.' + e) : ((e = m(e)).text = t + '.' + e.text),
                                s ? b(e) : e
                            );
                        }),
                    u
                );
            }
            function k(e, t) {
                for (var n = e.split(/\s+/), r = 0; r < n.length; r++) n[r] && t(n[r].replace(/[`,;]/g, ''));
            }
            function w(e, t) {
                for (
                    var n = t.doc,
                        r = n.getValue(),
                        i = e.toUpperCase(),
                        s = '',
                        c = '',
                        u = [],
                        d = { start: a(0, 0), end: a(t.lastLine(), t.getLineHandle(t.lastLine()).length) },
                        f = r.indexOf(o.QUERY_DIV);
                    -1 != f;

                )
                    u.push(n.posFromIndex(f)), (f = r.indexOf(o.QUERY_DIV, f + 1));
                u.unshift(a(0, 0)), u.push(a(t.lastLine(), t.getLineHandle(t.lastLine()).text.length));
                for (var p = null, m = t.getCursor(), g = 0; g < u.length; g++) {
                    if ((null == p || l(m, p) > 0) && l(m, u[g]) <= 0) {
                        d = { start: p, end: u[g] };
                        break;
                    }
                    p = u[g];
                }
                if (d.start) {
                    var v = n.getRange(d.start, d.end, !1);
                    for (
                        g = 0;
                        g < v.length &&
                        (k(v[g], function (e) {
                            var t = e.toUpperCase();
                            t === i && h(s) && (c = s), t !== o.ALIAS_KEYWORD && (s = e);
                        }),
                        !c);
                        g++
                    );
                }
                return c;
            }
            e.registerHelper('hint', 'sql', function (e, o) {
                t = p(o && o.tables);
                var l = o && o.defaultTable,
                    s = o && o.disableKeywords;
                (n = l && h(l)),
                    (r = c(e)),
                    (i = u(e)),
                    l && !n && (n = w(l, e)),
                    (n = n || []).columns && (n = n.columns);
                var d,
                    f,
                    m,
                    g = e.getCursor(),
                    y = [],
                    b = e.getTokenAt(g);
                if (
                    (b.end > g.ch && ((b.end = g.ch), (b.string = b.string.slice(0, g.ch - b.start))),
                    b.string.match(/^[.`"'\w@][\w$#]*$/g)
                        ? ((m = b.string), (d = b.start), (f = b.end))
                        : ((d = f = g.ch), (m = '')),
                    '.' == m.charAt(0) || m.charAt(0) == i)
                )
                    d = x(g, b, y, e);
                else {
                    var k = function (e, t) {
                        return 'object' == typeof e ? (e.className = t) : (e = { text: e, className: t }), e;
                    };
                    v(y, m, n, function (e) {
                        return k(e, 'CodeMirror-hint-table CodeMirror-hint-default-table');
                    }),
                        v(y, m, t, function (e) {
                            return k(e, 'CodeMirror-hint-table');
                        }),
                        s ||
                            v(y, m, r, function (e) {
                                return k(e.toUpperCase(), 'CodeMirror-hint-keyword');
                            });
                }
                return { list: y, from: a(g.line, d), to: a(g.line, f) };
            });
        })(a);
    }),
    o(function (e, t) {
        var n, r, i;
        (r = /[\w$]+/),
            (i = 500),
            (n = a).registerHelper('hint', 'anyword', function (e, t) {
                for (
                    var o = (t && t.word) || r,
                        a = (t && t.range) || i,
                        l = e.getCursor(),
                        s = e.getLine(l.line),
                        c = l.ch,
                        u = c;
                    u && o.test(s.charAt(u - 1));

                )
                    --u;
                for (
                    var d = u != c && s.slice(u, c),
                        f = (t && t.list) || [],
                        p = {},
                        h = new RegExp(o.source, 'g'),
                        m = -1;
                    m <= 1;
                    m += 2
                )
                    for (
                        var g = l.line, v = Math.min(Math.max(g + m * a, e.firstLine()), e.lastLine()) + m;
                        g != v;
                        g += m
                    )
                        for (var y, b = e.getLine(g); (y = h.exec(b)); )
                            (g == l.line && y[0] === d) ||
                                (d && 0 != y[0].lastIndexOf(d, 0)) ||
                                Object.prototype.hasOwnProperty.call(p, y[0]) ||
                                ((p[y[0]] = !0), f.push(y[0]));
                return { list: f, from: n.Pos(l.line, u), to: n.Pos(l.line, c) };
            });
    }),
    o(function (e, t) {
        !(function (e) {
            var t = 'CodeMirror-lint-markers';
            function n(t, n, r) {
                var i = document.createElement('div');
                function o(t) {
                    if (!i.parentNode) return e.off(document, 'mousemove', o);
                    (i.style.top = Math.max(0, t.clientY - i.offsetHeight - 5) + 'px'),
                        (i.style.left = t.clientX + 5 + 'px');
                }
                return (
                    (i.className = 'CodeMirror-lint-tooltip cm-s-' + t.options.theme),
                    i.appendChild(r.cloneNode(!0)),
                    t.state.lint.options.selfContain
                        ? t.getWrapperElement().appendChild(i)
                        : document.body.appendChild(i),
                    e.on(document, 'mousemove', o),
                    o(n),
                    null != i.style.opacity && (i.style.opacity = 1),
                    i
                );
            }
            function r(e) {
                e.parentNode && e.parentNode.removeChild(e);
            }
            function i(e) {
                e.parentNode &&
                    (null == e.style.opacity && r(e),
                    (e.style.opacity = 0),
                    setTimeout(function () {
                        r(e);
                    }, 600));
            }
            function o(t, r, o, a) {
                var l = n(t, r, o);
                function s() {
                    e.off(a, 'mouseout', s), l && (i(l), (l = null));
                }
                var c = setInterval(function () {
                    if (l)
                        for (var e = a; ; e = e.parentNode) {
                            if ((e && 11 == e.nodeType && (e = e.host), e == document.body)) return;
                            if (!e) {
                                s();
                                break;
                            }
                        }
                    if (!l) return clearInterval(c);
                }, 400);
                e.on(a, 'mouseout', s);
            }
            function a(e, t, n) {
                (this.marked = []),
                    (this.options = t),
                    (this.timeout = null),
                    (this.hasGutter = n),
                    (this.onMouseOver = function (t) {
                        y(e, t);
                    }),
                    (this.waitingFor = 0);
            }
            function l(e, t) {
                return t instanceof Function ? { getAnnotations: t } : ((t && !0 !== t) || (t = {}), t);
            }
            function s(e) {
                var n = e.state.lint;
                n.hasGutter && e.clearGutter(t);
                for (var r = 0; r < n.marked.length; ++r) n.marked[r].clear();
                n.marked.length = 0;
            }
            function c(t, n, r, i, a) {
                var l = document.createElement('div'),
                    s = l;
                return (
                    (l.className = 'CodeMirror-lint-marker CodeMirror-lint-marker-' + r),
                    i &&
                        ((s = l.appendChild(document.createElement('div'))).className =
                            'CodeMirror-lint-marker CodeMirror-lint-marker-multiple'),
                    0 != a &&
                        e.on(s, 'mouseover', function (e) {
                            o(t, e, n, s);
                        }),
                    l
                );
            }
            function u(e, t) {
                return 'error' == e ? e : t;
            }
            function d(e) {
                for (var t = [], n = 0; n < e.length; ++n) {
                    var r = e[n],
                        i = r.from.line;
                    (t[i] || (t[i] = [])).push(r);
                }
                return t;
            }
            function f(e) {
                var t = e.severity;
                t || (t = 'error');
                var n = document.createElement('div');
                return (
                    (n.className = 'CodeMirror-lint-message CodeMirror-lint-message-' + t),
                    void 0 !== e.messageHTML
                        ? (n.innerHTML = e.messageHTML)
                        : n.appendChild(document.createTextNode(e.message)),
                    n
                );
            }
            function p(t, n, r) {
                var i = t.state.lint,
                    o = ++i.waitingFor;
                function a() {
                    (o = -1), t.off('change', a);
                }
                t.on('change', a),
                    n(
                        t.getValue(),
                        function (n, r) {
                            t.off('change', a),
                                i.waitingFor == o &&
                                    (r && n instanceof e && (n = r),
                                    t.operation(function () {
                                        m(t, n);
                                    }));
                        },
                        r,
                        t
                    );
            }
            function h(t) {
                var n = t.state.lint.options,
                    r = n.options || n,
                    i = n.getAnnotations || t.getHelper(e.Pos(0, 0), 'lint');
                if (i)
                    if (n.async || i.async) p(t, i, r);
                    else {
                        var o = i(t.getValue(), r, t);
                        if (!o) return;
                        o.then
                            ? o.then(function (e) {
                                  t.operation(function () {
                                      m(t, e);
                                  });
                              })
                            : t.operation(function () {
                                  m(t, o);
                              });
                    }
            }
            function m(e, n) {
                s(e);
                for (var r = e.state.lint, i = r.options, o = d(n), a = 0; a < o.length; ++a) {
                    var l = o[a];
                    if (l) {
                        for (
                            var p = null, h = r.hasGutter && document.createDocumentFragment(), m = 0;
                            m < l.length;
                            ++m
                        ) {
                            var g = l[m],
                                v = g.severity;
                            v || (v = 'error'),
                                (p = u(p, v)),
                                i.formatAnnotation && (g = i.formatAnnotation(g)),
                                r.hasGutter && h.appendChild(f(g)),
                                g.to &&
                                    r.marked.push(
                                        e.markText(g.from, g.to, {
                                            className: 'CodeMirror-lint-mark CodeMirror-lint-mark-' + v,
                                            __annotation: g,
                                        })
                                    );
                        }
                        r.hasGutter && e.setGutterMarker(a, t, c(e, h, p, l.length > 1, r.options.tooltips));
                    }
                }
                i.onUpdateLinting && i.onUpdateLinting(n, o, e);
            }
            function g(e) {
                var t = e.state.lint;
                t &&
                    (clearTimeout(t.timeout),
                    (t.timeout = setTimeout(function () {
                        h(e);
                    }, t.options.delay || 500)));
            }
            function v(e, t, n) {
                for (
                    var r = n.target || n.srcElement, i = document.createDocumentFragment(), a = 0;
                    a < t.length;
                    a++
                ) {
                    var l = t[a];
                    i.appendChild(f(l));
                }
                o(e, n, i, r);
            }
            function y(e, t) {
                var n = t.target || t.srcElement;
                if (/\bCodeMirror-lint-mark-/.test(n.className)) {
                    for (
                        var r = n.getBoundingClientRect(),
                            i = (r.left + r.right) / 2,
                            o = (r.top + r.bottom) / 2,
                            a = e.findMarksAt(e.coordsChar({ left: i, top: o }, 'client')),
                            l = [],
                            s = 0;
                        s < a.length;
                        ++s
                    ) {
                        var c = a[s].__annotation;
                        c && l.push(c);
                    }
                    l.length && v(e, l, t);
                }
            }
            e.defineOption('lint', !1, function (n, r, i) {
                if (
                    (i &&
                        i != e.Init &&
                        (s(n),
                        !1 !== n.state.lint.options.lintOnChange && n.off('change', g),
                        e.off(n.getWrapperElement(), 'mouseover', n.state.lint.onMouseOver),
                        clearTimeout(n.state.lint.timeout),
                        delete n.state.lint),
                    r)
                ) {
                    for (var o = n.getOption('gutters'), c = !1, u = 0; u < o.length; ++u) o[u] == t && (c = !0);
                    var d = (n.state.lint = new a(n, l(n, r), c));
                    !1 !== d.options.lintOnChange && n.on('change', g),
                        0 != d.options.tooltips &&
                            'gutter' != d.options.tooltips &&
                            e.on(n.getWrapperElement(), 'mouseover', d.onMouseOver),
                        h(n);
                }
            }),
                e.defineExtension('performLint', function () {
                    this.state.lint && h(this);
                });
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).registerHelper('lint', 'json', function (e) {
            var t = [];
            if (!window.jsonlint)
                return (
                    window.console &&
                        window.console.error('Error: window.jsonlint not defined, CodeMirror JSON linting cannot run.'),
                    t
                );
            var r = window.jsonlint.parser || window.jsonlint;
            r.parseError = function (e, r) {
                var i = r.loc;
                t.push({
                    from: n.Pos(i.first_line - 1, i.first_column),
                    to: n.Pos(i.last_line - 1, i.last_column),
                    message: e,
                });
            };
            try {
                r.parse(e);
            } catch (e) {}
            return t;
        });
    }),
    o(function (e, t) {
        var n;
        (n = a).registerHelper('lint', 'css', function (e, t) {
            var r = [];
            if (!window.CSSLint)
                return (
                    window.console &&
                        window.console.error('Error: window.CSSLint not defined, CodeMirror CSS linting cannot run.'),
                    r
                );
            for (var i = CSSLint.verify(e, t).messages, o = null, a = 0; a < i.length; a++) {
                var l = (o = i[a]).line - 1,
                    s = o.line - 1,
                    c = o.col - 1,
                    u = o.col;
                r.push({ from: n.Pos(l, c), to: n.Pos(s, u), message: o.message, severity: o.type });
            }
            return r;
        });
    }),
    o(function (e, n) {
        var r, i, o;
        (i = t),
            (o = {
                'tagname-lowercase': !0,
                'attr-lowercase': !0,
                'attr-value-double-quotes': !0,
                'doctype-first': !1,
                'tag-pair': !0,
                'spec-char-escape': !0,
                'id-unique': !0,
                'src-not-empty': !0,
                'attr-no-duplication': !0,
            }),
            (r = a).registerHelper('lint', 'html', function (e, t) {
                var n = [];
                if (
                    (i && !i.verify && (i = void 0 !== i.default ? i.default : i.HTMLHint),
                    i || (i = window.HTMLHint),
                    !i)
                )
                    return (
                        window.console &&
                            window.console.error(
                                'Error: HTMLHint not found, not defined on window, or not available through define/require, CodeMirror HTML linting cannot run.'
                            ),
                        n
                    );
                for (var a = i.verify(e, (t && t.rules) || o), l = 0; l < a.length; l++) {
                    var s = a[l],
                        c = s.line - 1,
                        u = s.line - 1,
                        d = s.col - 1,
                        f = s.col;
                    n.push({ from: r.Pos(c, d), to: r.Pos(u, f), message: s.message, severity: s.type });
                }
                return n;
            });
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t) {
                if (!window.JSHINT)
                    return (
                        window.console &&
                            window.console.error(
                                'Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run.'
                            ),
                        []
                    );
                t.indent || (t.indent = 1), JSHINT(e, t, t.globals);
                var r = JSHINT.data().errors,
                    i = [];
                return r && n(r, i), i;
            }
            function n(t, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i) {
                        if (i.line <= 0) {
                            window.console &&
                                window.console.warn('Cannot display JSHint error (invalid line ' + i.line + ')', i);
                            continue;
                        }
                        var o = i.character - 1,
                            a = o + 1;
                        if (i.evidence) {
                            var l = i.evidence.substring(o).search(/.\b/);
                            l > -1 && (a += l);
                        }
                        var s = {
                            message: i.reason,
                            severity: i.code && i.code.startsWith('W') ? 'warning' : 'error',
                            from: e.Pos(i.line - 1, o),
                            to: e.Pos(i.line - 1, a),
                        };
                        n.push(s);
                    }
                }
            }
            e.registerHelper('lint', 'javascript', t);
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).registerHelper('lint', 'yaml', function (e) {
            var t = [];
            if (!window.jsyaml)
                return (
                    window.console &&
                        window.console.error('Error: window.jsyaml not defined, CodeMirror YAML linting cannot run.'),
                    t
                );
            try {
                jsyaml.loadAll(e);
            } catch (e) {
                var r = e.mark,
                    i = r ? n.Pos(r.line, r.column) : n.Pos(0, 0),
                    o = i;
                t.push({ from: i, to: o, message: e.message });
            }
            return t;
        });
    }),
    o(function (e, t) {
        !(function (e) {
            function t(t, r, o, a) {
                if (o && o.call) {
                    var l = o;
                    o = null;
                } else l = i(t, o, 'rangeFinder');
                'number' == typeof r && (r = e.Pos(r, 0));
                var s = i(t, o, 'minFoldSize');
                function c(e) {
                    var n = l(t, r);
                    if (!n || n.to.line - n.from.line < s) return null;
                    for (var i = t.findMarksAt(n.from), o = 0; o < i.length; ++o)
                        if (i[o].__isFold && 'fold' !== a) {
                            if (!e) return null;
                            (n.cleared = !0), i[o].clear();
                        }
                    return n;
                }
                var u = c(!0);
                if (i(t, o, 'scanUp')) for (; !u && r.line > t.firstLine(); ) (r = e.Pos(r.line - 1, 0)), (u = c(!1));
                if (u && !u.cleared && 'unfold' !== a) {
                    var d = n(t, o, u);
                    e.on(d, 'mousedown', function (t) {
                        f.clear(), e.e_preventDefault(t);
                    });
                    var f = t.markText(u.from, u.to, {
                        replacedWith: d,
                        clearOnEnter: i(t, o, 'clearOnEnter'),
                        __isFold: !0,
                    });
                    f.on('clear', function (n, r) {
                        e.signal(t, 'unfold', t, n, r);
                    }),
                        e.signal(t, 'fold', t, u.from, u.to);
                }
            }
            function n(e, t, n) {
                var r = i(e, t, 'widget');
                if (('function' == typeof r && (r = r(n.from, n.to)), 'string' == typeof r)) {
                    var o = document.createTextNode(r);
                    (r = document.createElement('span')).appendChild(o), (r.className = 'CodeMirror-foldmarker');
                } else r && (r = r.cloneNode(!0));
                return r;
            }
            (e.newFoldFunction = function (e, n) {
                return function (r, i) {
                    t(r, i, { rangeFinder: e, widget: n });
                };
            }),
                e.defineExtension('foldCode', function (e, n, r) {
                    t(this, e, n, r);
                }),
                e.defineExtension('isFolded', function (e) {
                    for (var t = this.findMarksAt(e), n = 0; n < t.length; ++n) if (t[n].__isFold) return !0;
                }),
                (e.commands.toggleFold = function (e) {
                    e.foldCode(e.getCursor());
                }),
                (e.commands.fold = function (e) {
                    e.foldCode(e.getCursor(), null, 'fold');
                }),
                (e.commands.unfold = function (e) {
                    e.foldCode(e.getCursor(), null, 'unfold');
                }),
                (e.commands.foldAll = function (t) {
                    t.operation(function () {
                        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++)
                            t.foldCode(e.Pos(n, 0), null, 'fold');
                    });
                }),
                (e.commands.unfoldAll = function (t) {
                    t.operation(function () {
                        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++)
                            t.foldCode(e.Pos(n, 0), null, 'unfold');
                    });
                }),
                e.registerHelper('fold', 'combine', function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return function (t, n) {
                        for (var r = 0; r < e.length; ++r) {
                            var i = e[r](t, n);
                            if (i) return i;
                        }
                    };
                }),
                e.registerHelper('fold', 'auto', function (e, t) {
                    for (var n = e.getHelpers(t, 'fold'), r = 0; r < n.length; r++) {
                        var i = n[r](e, t);
                        if (i) return i;
                    }
                });
            var r = { rangeFinder: e.fold.auto, widget: '↔', minFoldSize: 0, scanUp: !1, clearOnEnter: !0 };
            function i(e, t, n) {
                if (t && void 0 !== t[n]) return t[n];
                var i = e.options.foldOptions;
                return i && void 0 !== i[n] ? i[n] : r[n];
            }
            e.defineOption('foldOptions', null),
                e.defineExtension('foldOption', function (e, t) {
                    return i(this, e, t);
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            e.defineOption('foldGutter', !1, function (t, i, o) {
                o &&
                    o != e.Init &&
                    (t.clearGutter(t.state.foldGutter.options.gutter),
                    (t.state.foldGutter = null),
                    t.off('gutterClick', c),
                    t.off('changes', u),
                    t.off('viewportChange', d),
                    t.off('fold', f),
                    t.off('unfold', f),
                    t.off('swapDoc', u)),
                    i &&
                        ((t.state.foldGutter = new n(r(i))),
                        s(t),
                        t.on('gutterClick', c),
                        t.on('changes', u),
                        t.on('viewportChange', d),
                        t.on('fold', f),
                        t.on('unfold', f),
                        t.on('swapDoc', u));
            });
            var t = e.Pos;
            function n(e) {
                (this.options = e), (this.from = this.to = 0);
            }
            function r(e) {
                return (
                    !0 === e && (e = {}),
                    null == e.gutter && (e.gutter = 'CodeMirror-foldgutter'),
                    null == e.indicatorOpen && (e.indicatorOpen = 'CodeMirror-foldgutter-open'),
                    null == e.indicatorFolded && (e.indicatorFolded = 'CodeMirror-foldgutter-folded'),
                    e
                );
            }
            function i(e, n) {
                for (var r = e.findMarks(t(n, 0), t(n + 1, 0)), i = 0; i < r.length; ++i)
                    if (r[i].__isFold) {
                        var o = r[i].find(-1);
                        if (o && o.line === n) return r[i];
                    }
            }
            function o(e) {
                if ('string' == typeof e) {
                    var t = document.createElement('div');
                    return (t.className = e + ' CodeMirror-guttermarker-subtle'), t;
                }
                return e.cloneNode(!0);
            }
            function a(e, n, r) {
                var a = e.state.foldGutter.options,
                    s = n - 1,
                    c = e.foldOption(a, 'minFoldSize'),
                    u = e.foldOption(a, 'rangeFinder'),
                    d = 'string' == typeof a.indicatorFolded && l(a.indicatorFolded),
                    f = 'string' == typeof a.indicatorOpen && l(a.indicatorOpen);
                e.eachLine(n, r, function (n) {
                    ++s;
                    var r = null,
                        l = n.gutterMarkers;
                    if ((l && (l = l[a.gutter]), i(e, s))) {
                        if (d && l && d.test(l.className)) return;
                        r = o(a.indicatorFolded);
                    } else {
                        var p = t(s, 0),
                            h = u && u(e, p);
                        if (h && h.to.line - h.from.line >= c) {
                            if (f && l && f.test(l.className)) return;
                            r = o(a.indicatorOpen);
                        }
                    }
                    (r || l) && e.setGutterMarker(n, a.gutter, r);
                });
            }
            function l(e) {
                return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
            }
            function s(e) {
                var t = e.getViewport(),
                    n = e.state.foldGutter;
                n &&
                    (e.operation(function () {
                        a(e, t.from, t.to);
                    }),
                    (n.from = t.from),
                    (n.to = t.to));
            }
            function c(e, n, r) {
                var o = e.state.foldGutter;
                if (o) {
                    var a = o.options;
                    if (r == a.gutter) {
                        var l = i(e, n);
                        l ? l.clear() : e.foldCode(t(n, 0), a);
                    }
                }
            }
            function u(e) {
                var t = e.state.foldGutter;
                if (t) {
                    var n = t.options;
                    (t.from = t.to = 0),
                        clearTimeout(t.changeUpdate),
                        (t.changeUpdate = setTimeout(function () {
                            s(e);
                        }, n.foldOnChangeTimeSpan || 600));
                }
            }
            function d(e) {
                var t = e.state.foldGutter;
                if (t) {
                    var n = t.options;
                    clearTimeout(t.changeUpdate),
                        (t.changeUpdate = setTimeout(function () {
                            var n = e.getViewport();
                            t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20
                                ? s(e)
                                : e.operation(function () {
                                      n.from < t.from && (a(e, n.from, t.from), (t.from = n.from)),
                                          n.to > t.to && (a(e, t.to, n.to), (t.to = n.to));
                                  });
                        }, n.updateViewportTimeSpan || 400));
                }
            }
            function f(e, t) {
                var n = e.state.foldGutter;
                if (n) {
                    var r = t.line;
                    r >= n.from && r < n.to && a(e, r, r + 1);
                }
            }
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).registerHelper('fold', 'brace', function (e, t) {
            var r,
                i = t.line,
                o = e.getLine(i);
            function a(a) {
                for (var l = t.ch, s = 0; ; ) {
                    var c = l <= 0 ? -1 : o.lastIndexOf(a, l - 1);
                    if (-1 != c) {
                        if (1 == s && c < t.ch) break;
                        if (((r = e.getTokenTypeAt(n.Pos(i, c + 1))), !/^(comment|string)/.test(r))) return c + 1;
                        l = c - 1;
                    } else {
                        if (1 == s) break;
                        (s = 1), (l = o.length);
                    }
                }
            }
            var l = '{',
                s = '}',
                c = a('{');
            if ((null == c && ((l = '['), (s = ']'), (c = a('['))), null != c)) {
                var u,
                    d,
                    f = 1,
                    p = e.lastLine();
                e: for (var h = i; h <= p; ++h)
                    for (var m = e.getLine(h), g = h == i ? c : 0; ; ) {
                        var v = m.indexOf(l, g),
                            y = m.indexOf(s, g);
                        if ((v < 0 && (v = m.length), y < 0 && (y = m.length), (g = Math.min(v, y)) == m.length)) break;
                        if (e.getTokenTypeAt(n.Pos(h, g + 1)) == r)
                            if (g == v) ++f;
                            else if (!--f) {
                                (u = h), (d = g);
                                break e;
                            }
                        ++g;
                    }
                if (null != u && i != u) return { from: n.Pos(i, c), to: n.Pos(u, d) };
            }
        }),
            n.registerHelper('fold', 'import', function (e, t) {
                function r(t) {
                    if (t < e.firstLine() || t > e.lastLine()) return null;
                    var r = e.getTokenAt(n.Pos(t, 1));
                    if (
                        (/\S/.test(r.string) || (r = e.getTokenAt(n.Pos(t, r.end + 1))),
                        'keyword' != r.type || 'import' != r.string)
                    )
                        return null;
                    for (var i = t, o = Math.min(e.lastLine(), t + 10); i <= o; ++i) {
                        var a = e.getLine(i).indexOf(';');
                        if (-1 != a) return { startCh: r.end, end: n.Pos(i, a) };
                    }
                }
                var i,
                    o = t.line,
                    a = r(o);
                if (!a || r(o - 1) || ((i = r(o - 2)) && i.end.line == o - 1)) return null;
                for (var l = a.end; ; ) {
                    var s = r(l.line + 1);
                    if (null == s) break;
                    l = s.end;
                }
                return { from: e.clipPos(n.Pos(o, a.startCh + 1)), to: l };
            }),
            n.registerHelper('fold', 'include', function (e, t) {
                function r(t) {
                    if (t < e.firstLine() || t > e.lastLine()) return null;
                    var r = e.getTokenAt(n.Pos(t, 1));
                    return (
                        /\S/.test(r.string) || (r = e.getTokenAt(n.Pos(t, r.end + 1))),
                        'meta' == r.type && '#include' == r.string.slice(0, 8) ? r.start + 8 : void 0
                    );
                }
                var i = t.line,
                    o = r(i);
                if (null == o || null != r(i - 1)) return null;
                for (var a = i; null != r(a + 1); ) ++a;
                return { from: n.Pos(i, o + 1), to: e.clipPos(n.Pos(a)) };
            });
    }),
    o(function (e, t) {
        !(function (e) {
            var t = e.Pos;
            function n(e, t) {
                return e.line - t.line || e.ch - t.ch;
            }
            var r =
                    'A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
                i = new RegExp('<(/?)([' + r + '][' + r + '-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)', 'g');
            function o(e, t, n, r) {
                (this.line = t),
                    (this.ch = n),
                    (this.cm = e),
                    (this.text = e.getLine(t)),
                    (this.min = r ? Math.max(r.from, e.firstLine()) : e.firstLine()),
                    (this.max = r ? Math.min(r.to - 1, e.lastLine()) : e.lastLine());
            }
            function a(e, n) {
                var r = e.cm.getTokenTypeAt(t(e.line, n));
                return r && /\btag\b/.test(r);
            }
            function l(e) {
                if (!(e.line >= e.max)) return (e.ch = 0), (e.text = e.cm.getLine(++e.line)), !0;
            }
            function s(e) {
                if (!(e.line <= e.min)) return (e.text = e.cm.getLine(--e.line)), (e.ch = e.text.length), !0;
            }
            function c(e) {
                for (;;) {
                    var t = e.text.indexOf('>', e.ch);
                    if (-1 == t) {
                        if (l(e)) continue;
                        return;
                    }
                    if (a(e, t + 1)) {
                        var n = e.text.lastIndexOf('/', t),
                            r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                        return (e.ch = t + 1), r ? 'selfClose' : 'regular';
                    }
                    e.ch = t + 1;
                }
            }
            function u(e) {
                for (;;) {
                    var t = e.ch ? e.text.lastIndexOf('<', e.ch - 1) : -1;
                    if (-1 == t) {
                        if (s(e)) continue;
                        return;
                    }
                    if (a(e, t + 1)) {
                        (i.lastIndex = t), (e.ch = t);
                        var n = i.exec(e.text);
                        if (n && n.index == t) return n;
                    } else e.ch = t;
                }
            }
            function d(e) {
                for (;;) {
                    i.lastIndex = e.ch;
                    var t = i.exec(e.text);
                    if (!t) {
                        if (l(e)) continue;
                        return;
                    }
                    if (a(e, t.index + 1)) return (e.ch = t.index + t[0].length), t;
                    e.ch = t.index + 1;
                }
            }
            function f(e) {
                for (;;) {
                    var t = e.ch ? e.text.lastIndexOf('>', e.ch - 1) : -1;
                    if (-1 == t) {
                        if (s(e)) continue;
                        return;
                    }
                    if (a(e, t + 1)) {
                        var n = e.text.lastIndexOf('/', t),
                            r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                        return (e.ch = t + 1), r ? 'selfClose' : 'regular';
                    }
                    e.ch = t;
                }
            }
            function p(e, n) {
                for (var r = []; ; ) {
                    var i,
                        o = d(e),
                        a = e.line,
                        l = e.ch - (o ? o[0].length : 0);
                    if (!o || !(i = c(e))) return;
                    if ('selfClose' != i)
                        if (o[1]) {
                            for (var s = r.length - 1; s >= 0; --s)
                                if (r[s] == o[2]) {
                                    r.length = s;
                                    break;
                                }
                            if (s < 0 && (!n || n == o[2])) return { tag: o[2], from: t(a, l), to: t(e.line, e.ch) };
                        } else r.push(o[2]);
                }
            }
            function h(e, n) {
                for (var r = []; ; ) {
                    var i = f(e);
                    if (!i) return;
                    if ('selfClose' != i) {
                        var o = e.line,
                            a = e.ch,
                            l = u(e);
                        if (!l) return;
                        if (l[1]) r.push(l[2]);
                        else {
                            for (var s = r.length - 1; s >= 0; --s)
                                if (r[s] == l[2]) {
                                    r.length = s;
                                    break;
                                }
                            if (s < 0 && (!n || n == l[2])) return { tag: l[2], from: t(e.line, e.ch), to: t(o, a) };
                        }
                    } else u(e);
                }
            }
            e.registerHelper('fold', 'xml', function (e, r) {
                for (var i = new o(e, r.line, 0); ; ) {
                    var a = d(i);
                    if (!a || i.line != r.line) return;
                    var l = c(i);
                    if (!l) return;
                    if (!a[1] && 'selfClose' != l) {
                        var s = t(i.line, i.ch),
                            u = p(i, a[2]);
                        return u && n(u.from, s) > 0 ? { from: s, to: u.from } : null;
                    }
                }
            }),
                (e.findMatchingTag = function (e, r, i) {
                    var a = new o(e, r.line, r.ch, i);
                    if (-1 != a.text.indexOf('>') || -1 != a.text.indexOf('<')) {
                        var l = c(a),
                            s = l && t(a.line, a.ch),
                            d = l && u(a);
                        if (l && d && !(n(a, r) > 0)) {
                            var f = { from: t(a.line, a.ch), to: s, tag: d[2] };
                            return 'selfClose' == l
                                ? { open: f, close: null, at: 'open' }
                                : d[1]
                                ? { open: h(a, d[2]), close: f, at: 'close' }
                                : { open: f, close: p((a = new o(e, s.line, s.ch, i)), d[2]), at: 'open' };
                        }
                    }
                }),
                (e.findEnclosingTag = function (e, t, n, r) {
                    for (var i = new o(e, t.line, t.ch, n); ; ) {
                        var a = h(i, r);
                        if (!a) break;
                        var l = p(new o(e, t.line, t.ch, n), a.tag);
                        if (l) return { open: a, close: l };
                    }
                }),
                (e.scanForClosingTag = function (e, t, n, r) {
                    return p(new o(e, t.line, t.ch, r ? { from: 0, to: r } : null), n);
                });
        })(a);
    }),
    o(function (e, t) {
        var n;
        (n = a).registerGlobalHelper(
            'fold',
            'comment',
            function (e) {
                return e.blockCommentStart && e.blockCommentEnd;
            },
            function (e, t) {
                var r = e.getModeAt(t),
                    i = r.blockCommentStart,
                    o = r.blockCommentEnd;
                if (i && o) {
                    for (var a, l = t.line, s = e.getLine(l), c = t.ch, u = 0; ; ) {
                        var d = c <= 0 ? -1 : s.lastIndexOf(i, c - 1);
                        if (-1 != d) {
                            if (1 == u && d < t.ch) return;
                            if (
                                /comment/.test(e.getTokenTypeAt(n.Pos(l, d + 1))) &&
                                (0 == d ||
                                    s.slice(d - o.length, d) == o ||
                                    !/comment/.test(e.getTokenTypeAt(n.Pos(l, d))))
                            ) {
                                a = d + i.length;
                                break;
                            }
                            c = d - 1;
                        } else {
                            if (1 == u) return;
                            (u = 1), (c = s.length);
                        }
                    }
                    var f,
                        p,
                        h = 1,
                        m = e.lastLine();
                    e: for (var g = l; g <= m; ++g)
                        for (var v = e.getLine(g), y = g == l ? a : 0; ; ) {
                            var b = v.indexOf(i, y),
                                x = v.indexOf(o, y);
                            if ((b < 0 && (b = v.length), x < 0 && (x = v.length), (y = Math.min(b, x)) == v.length))
                                break;
                            if (y == b) ++h;
                            else if (!--h) {
                                (f = g), (p = y);
                                break e;
                            }
                            ++y;
                        }
                    if (null != f && (l != f || p != a)) return { from: n.Pos(l, a), to: n.Pos(f, p) };
                }
            }
        );
    }),
    o(function (e, t) {
        var n;
        (n = a).registerHelper('fold', 'markdown', function (e, t) {
            var r = 100;
            function i(t) {
                var r = e.getTokenTypeAt(n.Pos(t, 0));
                return r && /\bheader\b/.test(r);
            }
            function o(e, t, n) {
                var o = t && t.match(/^#+/);
                return o && i(e)
                    ? o[0].length
                    : (o = n && n.match(/^[=\-]+\s*$/)) && i(e + 1)
                    ? '=' == n[0]
                        ? 1
                        : 2
                    : r;
            }
            var a = e.getLine(t.line),
                l = e.getLine(t.line + 1),
                s = o(t.line, a, l);
            if (s !== r) {
                for (var c = e.lastLine(), u = t.line, d = e.getLine(u + 2); u < c && !(o(u + 1, l, d) <= s); )
                    ++u, (l = d), (d = e.getLine(u + 2));
                return { from: n.Pos(t.line, a.length), to: n.Pos(u, e.getLine(u).length) };
            }
        });
    }),
    o(function (e, t) {
        !(function (e) {
            function t(t, n) {
                var r = t.getLine(n),
                    i = r.search(/\S/);
                return -1 == i || /\bcomment\b/.test(t.getTokenTypeAt(e.Pos(n, i + 1)))
                    ? -1
                    : e.countColumn(r, null, t.getOption('tabSize'));
            }
            e.registerHelper('fold', 'indent', function (n, r) {
                var i = t(n, r.line);
                if (!(i < 0)) {
                    for (var o = null, a = r.line + 1, l = n.lastLine(); a <= l; ++a) {
                        var s = t(n, a);
                        if (-1 == s);
                        else {
                            if (!(s > i)) break;
                            o = a;
                        }
                    }
                    return o
                        ? { from: e.Pos(r.line, n.getLine(r.line).length), to: e.Pos(o, n.getLine(o).length) }
                        : void 0;
                }
            });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = { pairs: '()[]{}\'\'""', closeBefore: ')]}\'":;>', triples: '', explode: '[]{}' },
                n = e.Pos;
            function r(e, n) {
                return 'pairs' == n && 'string' == typeof e ? e : 'object' == typeof e && null != e[n] ? e[n] : t[n];
            }
            e.defineOption('autoCloseBrackets', !1, function (t, n, a) {
                a && a != e.Init && (t.removeKeyMap(i), (t.state.closeBrackets = null)),
                    n && (o(r(n, 'pairs')), (t.state.closeBrackets = n), t.addKeyMap(i));
            });
            var i = { Backspace: s, Enter: c };
            function o(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e.charAt(t),
                        r = "'" + n + "'";
                    i[r] || (i[r] = a(n));
                }
            }
            function a(e) {
                return function (t) {
                    return d(t, e);
                };
            }
            function l(e) {
                var t = e.state.closeBrackets;
                return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t;
            }
            function s(t) {
                var i = l(t);
                if (!i || t.getOption('disableInput')) return e.Pass;
                for (var o = r(i, 'pairs'), a = t.listSelections(), s = 0; s < a.length; s++) {
                    if (!a[s].empty()) return e.Pass;
                    var c = f(t, a[s].head);
                    if (!c || o.indexOf(c) % 2 != 0) return e.Pass;
                }
                for (s = a.length - 1; s >= 0; s--) {
                    var u = a[s].head;
                    t.replaceRange('', n(u.line, u.ch - 1), n(u.line, u.ch + 1), '+delete');
                }
            }
            function c(t) {
                var n = l(t),
                    i = n && r(n, 'explode');
                if (!i || t.getOption('disableInput')) return e.Pass;
                for (var o = t.listSelections(), a = 0; a < o.length; a++) {
                    if (!o[a].empty()) return e.Pass;
                    var s = f(t, o[a].head);
                    if (!s || i.indexOf(s) % 2 != 0) return e.Pass;
                }
                t.operation(function () {
                    var e = t.lineSeparator() || '\n';
                    t.replaceSelection(e + e, null), t.execCommand('goCharLeft'), (o = t.listSelections());
                    for (var n = 0; n < o.length; n++) {
                        var r = o[n].head.line;
                        t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0);
                    }
                });
            }
            function u(t) {
                var r = e.cmpPos(t.anchor, t.head) > 0;
                return {
                    anchor: new n(t.anchor.line, t.anchor.ch + (r ? -1 : 1)),
                    head: new n(t.head.line, t.head.ch + (r ? 1 : -1)),
                };
            }
            function d(t, i) {
                var o = l(t);
                if (!o || t.getOption('disableInput')) return e.Pass;
                var a = r(o, 'pairs'),
                    s = a.indexOf(i);
                if (-1 == s) return e.Pass;
                for (
                    var c,
                        d = r(o, 'closeBefore'),
                        f = r(o, 'triples'),
                        h = a.charAt(s + 1) == i,
                        m = t.listSelections(),
                        g = s % 2 == 0,
                        v = 0;
                    v < m.length;
                    v++
                ) {
                    var y,
                        b = m[v],
                        x = b.head,
                        k = t.getRange(x, n(x.line, x.ch + 1));
                    if (g && !b.empty()) y = 'surround';
                    else if ((!h && g) || k != i)
                        if (h && x.ch > 1 && f.indexOf(i) >= 0 && t.getRange(n(x.line, x.ch - 2), x) == i + i) {
                            if (x.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(x.line, x.ch - 2)))) return e.Pass;
                            y = 'addFour';
                        } else if (h) {
                            var w = 0 == x.ch ? ' ' : t.getRange(n(x.line, x.ch - 1), x);
                            if (e.isWordChar(k) || w == i || e.isWordChar(w)) return e.Pass;
                            y = 'both';
                        } else {
                            if (!g || !(0 === k.length || /\s/.test(k) || d.indexOf(k) > -1)) return e.Pass;
                            y = 'both';
                        }
                    else
                        y =
                            h && p(t, x)
                                ? 'both'
                                : f.indexOf(i) >= 0 && t.getRange(x, n(x.line, x.ch + 3)) == i + i + i
                                ? 'skipThree'
                                : 'skip';
                    if (c) {
                        if (c != y) return e.Pass;
                    } else c = y;
                }
                var C = s % 2 ? a.charAt(s - 1) : i,
                    S = s % 2 ? i : a.charAt(s + 1);
                t.operation(function () {
                    if ('skip' == c) t.execCommand('goCharRight');
                    else if ('skipThree' == c) for (var e = 0; e < 3; e++) t.execCommand('goCharRight');
                    else if ('surround' == c) {
                        var n = t.getSelections();
                        for (e = 0; e < n.length; e++) n[e] = C + n[e] + S;
                        for (t.replaceSelections(n, 'around'), n = t.listSelections().slice(), e = 0; e < n.length; e++)
                            n[e] = u(n[e]);
                        t.setSelections(n);
                    } else
                        'both' == c
                            ? (t.replaceSelection(C + S, null), t.triggerElectric(C + S), t.execCommand('goCharLeft'))
                            : 'addFour' == c &&
                              (t.replaceSelection(C + C + C + C, 'before'), t.execCommand('goCharRight'));
                });
            }
            function f(e, t) {
                var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
                return 2 == r.length ? r : null;
            }
            function p(e, t) {
                var r = e.getTokenAt(n(t.line, t.ch + 1));
                return (
                    /\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
                );
            }
            o(t.pairs + '`');
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            e.defineOption('autoCloseTags', !1, function (t, n, i) {
                if ((i != e.Init && i && t.removeKeyMap('autoCloseTags'), n)) {
                    var a = { name: 'autoCloseTags' };
                    ('object' == typeof n && !1 === n.whenClosing) ||
                        (a["'/'"] = function (e) {
                            return o(e);
                        }),
                        ('object' == typeof n && !1 === n.whenOpening) ||
                            (a["'>'"] = function (e) {
                                return r(e);
                            }),
                        t.addKeyMap(a);
                }
            });
            var t = [
                    'area',
                    'base',
                    'br',
                    'col',
                    'command',
                    'embed',
                    'hr',
                    'img',
                    'input',
                    'keygen',
                    'link',
                    'meta',
                    'param',
                    'source',
                    'track',
                    'wbr',
                ],
                n = [
                    'applet',
                    'blockquote',
                    'body',
                    'button',
                    'div',
                    'dl',
                    'fieldset',
                    'form',
                    'frameset',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'head',
                    'html',
                    'iframe',
                    'layer',
                    'legend',
                    'object',
                    'ol',
                    'p',
                    'select',
                    'table',
                    'ul',
                ];
            function r(r) {
                if (r.getOption('disableInput')) return e.Pass;
                for (var i = r.listSelections(), o = [], s = r.getOption('autoCloseTags'), c = 0; c < i.length; c++) {
                    if (!i[c].empty()) return e.Pass;
                    var u = i[c].head,
                        d = r.getTokenAt(u),
                        f = e.innerMode(r.getMode(), d.state),
                        p = f.state,
                        h = f.mode.xmlCurrentTag && f.mode.xmlCurrentTag(p),
                        m = h && h.name;
                    if (!m) return e.Pass;
                    var g = 'html' == f.mode.configuration,
                        v = ('object' == typeof s && s.dontCloseTags) || (g && t),
                        y = ('object' == typeof s && s.indentTags) || (g && n);
                    d.end > u.ch && (m = m.slice(0, m.length - d.end + u.ch));
                    var b = m.toLowerCase();
                    if (
                        !m ||
                        ('string' == d.type &&
                            (d.end != u.ch ||
                                !/[\"\']/.test(d.string.charAt(d.string.length - 1)) ||
                                1 == d.string.length)) ||
                        ('tag' == d.type && h.close) ||
                        d.string.indexOf('/') == u.ch - d.start - 1 ||
                        (v && a(v, b) > -1) ||
                        l(r, (f.mode.xmlCurrentContext && f.mode.xmlCurrentContext(p)) || [], m, u, !0)
                    )
                        return e.Pass;
                    var x = 'object' == typeof s && s.emptyTags;
                    if (x && a(x, m) > -1) o[c] = { text: '/>', newPos: e.Pos(u.line, u.ch + 2) };
                    else {
                        var k = y && a(y, b) > -1;
                        o[c] = {
                            indent: k,
                            text: '>' + (k ? '\n\n' : '') + '</' + m + '>',
                            newPos: k ? e.Pos(u.line + 1, 0) : e.Pos(u.line, u.ch + 1),
                        };
                    }
                }
                var w = 'object' == typeof s && s.dontIndentOnAutoClose;
                for (c = i.length - 1; c >= 0; c--) {
                    var C = o[c];
                    r.replaceRange(C.text, i[c].head, i[c].anchor, '+insert');
                    var S = r.listSelections().slice(0);
                    (S[c] = { head: C.newPos, anchor: C.newPos }),
                        r.setSelections(S),
                        !w &&
                            C.indent &&
                            (r.indentLine(C.newPos.line, null, !0), r.indentLine(C.newPos.line + 1, null, !0));
                }
            }
            function i(t, n) {
                for (
                    var r = t.listSelections(),
                        i = [],
                        o = n ? '/' : '</',
                        a = t.getOption('autoCloseTags'),
                        s = 'object' == typeof a && a.dontIndentOnSlash,
                        c = 0;
                    c < r.length;
                    c++
                ) {
                    if (!r[c].empty()) return e.Pass;
                    var u = r[c].head,
                        d = t.getTokenAt(u),
                        f = e.innerMode(t.getMode(), d.state),
                        p = f.state;
                    if (n && ('string' == d.type || '<' != d.string.charAt(0) || d.start != u.ch - 1)) return e.Pass;
                    var h,
                        m = 'xml' != f.mode.name && 'htmlmixed' == t.getMode().name;
                    if (m && 'javascript' == f.mode.name) h = o + 'script';
                    else if (m && 'css' == f.mode.name) h = o + 'style';
                    else {
                        var g = f.mode.xmlCurrentContext && f.mode.xmlCurrentContext(p);
                        if (!g || (g.length && l(t, g, g[g.length - 1], u))) return e.Pass;
                        h = o + g[g.length - 1];
                    }
                    '>' != t.getLine(u.line).charAt(d.end) && (h += '>'), (i[c] = h);
                }
                if ((t.replaceSelections(i), (r = t.listSelections()), !s))
                    for (c = 0; c < r.length; c++)
                        (c == r.length - 1 || r[c].head.line < r[c + 1].head.line) && t.indentLine(r[c].head.line);
            }
            function o(t) {
                return t.getOption('disableInput') ? e.Pass : i(t, !0);
            }
            function a(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = 0, r = e.length; n < r; ++n) if (e[n] == t) return n;
                return -1;
            }
            function l(t, n, r, i, o) {
                if (!e.scanForClosingTag) return !1;
                var a = Math.min(t.lastLine() + 1, i.line + 500),
                    l = e.scanForClosingTag(t, i, null, a);
                if (!l || l.tag != r) return !1;
                for (var s = o ? 1 : 0, c = n.length - 1; c >= 0 && n[c] == r; c--) ++s;
                for (i = l.to, c = 1; c < s; c++) {
                    var u = e.scanForClosingTag(t, i, null, a);
                    if (!u || u.tag != r) return !1;
                    i = u.to;
                }
                return !0;
            }
            e.commands.closeTag = function (e) {
                return i(e);
            };
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
                n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
                r = /[*+-]\s/;
            function i(e, n) {
                var r = n.line,
                    i = 0,
                    o = 0,
                    a = t.exec(e.getLine(r)),
                    l = a[1];
                do {
                    var s = r + (i += 1),
                        c = e.getLine(s),
                        u = t.exec(c);
                    if (u) {
                        var d = u[1],
                            f = parseInt(a[3], 10) + i - o,
                            p = parseInt(u[3], 10),
                            h = p;
                        if (l !== d || isNaN(p)) {
                            if (l.length > d.length) return;
                            if (l.length < d.length && 1 === i) return;
                            o += 1;
                        } else
                            f === p && (h = p + 1),
                                f > p && (h = f + 1),
                                e.replaceRange(
                                    c.replace(t, d + h + u[4] + u[5]),
                                    { line: s, ch: 0 },
                                    { line: s, ch: c.length }
                                );
                    }
                } while (u);
            }
            e.commands.newlineAndIndentContinueMarkdownList = function (o) {
                if (o.getOption('disableInput')) return e.Pass;
                for (var a = o.listSelections(), l = [], s = 0; s < a.length; s++) {
                    var c = a[s].head,
                        u = o.getStateAfter(c.line),
                        d = e.innerMode(o.getMode(), u);
                    if ('markdown' !== d.mode.name) return void o.execCommand('newlineAndIndent');
                    var f = !1 !== (u = d.state).list,
                        p = 0 !== u.quote,
                        h = o.getLine(c.line),
                        m = t.exec(h),
                        g = /^\s*$/.test(h.slice(0, c.ch));
                    if (!a[s].empty() || (!f && !p) || !m || g) return void o.execCommand('newlineAndIndent');
                    if (n.test(h)) {
                        var v = p && />\s*$/.test(h),
                            y = !/>\s*$/.test(h);
                        (v || y) && o.replaceRange('', { line: c.line, ch: 0 }, { line: c.line, ch: c.ch + 1 }),
                            (l[s] = '\n');
                    } else {
                        var b = m[1],
                            x = m[5],
                            k = !(r.test(m[2]) || m[2].indexOf('>') >= 0),
                            w = k ? parseInt(m[3], 10) + 1 + m[4] : m[2].replace('x', ' ');
                        (l[s] = '\n' + b + w + x), k && i(o, c);
                    }
                }
                o.replaceSelections(l);
            };
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
                n = e.Pos,
                r = { '(': ')>', ')': '(<', '[': ']>', ']': '[<', '{': '}>', '}': '{<', '<': '>>', '>': '<<' };
            function i(e) {
                return (e && e.bracketRegex) || /[(){}[\]]/;
            }
            function o(e, t, o) {
                var l = e.getLineHandle(t.line),
                    s = t.ch - 1,
                    c = o && o.afterCursor;
                null == c && (c = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
                var u = i(o),
                    d =
                        (!c && s >= 0 && u.test(l.text.charAt(s)) && r[l.text.charAt(s)]) ||
                        (u.test(l.text.charAt(s + 1)) && r[l.text.charAt(++s)]);
                if (!d) return null;
                var f = '>' == d.charAt(1) ? 1 : -1;
                if (o && o.strict && f > 0 != (s == t.ch)) return null;
                var p = e.getTokenTypeAt(n(t.line, s + 1)),
                    h = a(e, n(t.line, s + (f > 0 ? 1 : 0)), f, p || null, o);
                return null == h
                    ? null
                    : { from: n(t.line, s), to: h && h.pos, match: h && h.ch == d.charAt(0), forward: f > 0 };
            }
            function a(e, t, o, a, l) {
                for (
                    var s = (l && l.maxScanLineLength) || 1e4,
                        c = (l && l.maxScanLines) || 1e3,
                        u = [],
                        d = i(l),
                        f = o > 0 ? Math.min(t.line + c, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - c),
                        p = t.line;
                    p != f;
                    p += o
                ) {
                    var h = e.getLine(p);
                    if (h) {
                        var m = o > 0 ? 0 : h.length - 1,
                            g = o > 0 ? h.length : -1;
                        if (!(h.length > s))
                            for (p == t.line && (m = t.ch - (o < 0 ? 1 : 0)); m != g; m += o) {
                                var v = h.charAt(m);
                                if (d.test(v) && (void 0 === a || e.getTokenTypeAt(n(p, m + 1)) == a)) {
                                    var y = r[v];
                                    if (y && ('>' == y.charAt(1)) == o > 0) u.push(v);
                                    else {
                                        if (!u.length) return { pos: n(p, m), ch: v };
                                        u.pop();
                                    }
                                }
                            }
                    }
                }
                return p - o != (o > 0 ? e.lastLine() : e.firstLine()) && null;
            }
            function l(e, r, i) {
                for (
                    var a = e.state.matchBrackets.maxHighlightLineLength || 1e3, l = [], s = e.listSelections(), c = 0;
                    c < s.length;
                    c++
                ) {
                    var u = s[c].empty() && o(e, s[c].head, i);
                    if (u && e.getLine(u.from.line).length <= a) {
                        var d = u.match ? 'CodeMirror-matchingbracket' : 'CodeMirror-nonmatchingbracket';
                        l.push(e.markText(u.from, n(u.from.line, u.from.ch + 1), { className: d })),
                            u.to &&
                                e.getLine(u.to.line).length <= a &&
                                l.push(e.markText(u.to, n(u.to.line, u.to.ch + 1), { className: d }));
                    }
                }
                if (l.length) {
                    t && e.state.focused && e.focus();
                    var f = function () {
                        e.operation(function () {
                            for (var e = 0; e < l.length; e++) l[e].clear();
                        });
                    };
                    if (!r) return f;
                    setTimeout(f, 800);
                }
            }
            function s(e) {
                e.operation(function () {
                    e.state.matchBrackets.currentlyHighlighted &&
                        (e.state.matchBrackets.currentlyHighlighted(),
                        (e.state.matchBrackets.currentlyHighlighted = null)),
                        (e.state.matchBrackets.currentlyHighlighted = l(e, !1, e.state.matchBrackets));
                });
            }
            e.defineOption('matchBrackets', !1, function (t, n, r) {
                function i(e) {
                    e.state.matchBrackets &&
                        e.state.matchBrackets.currentlyHighlighted &&
                        (e.state.matchBrackets.currentlyHighlighted(),
                        (e.state.matchBrackets.currentlyHighlighted = null));
                }
                r && r != e.Init && (t.off('cursorActivity', s), t.off('focus', s), t.off('blur', i), i(t)),
                    n &&
                        ((t.state.matchBrackets = 'object' == typeof n ? n : {}),
                        t.on('cursorActivity', s),
                        t.on('focus', s),
                        t.on('blur', i));
            }),
                e.defineExtension('matchBrackets', function () {
                    l(this, !0);
                }),
                e.defineExtension('findMatchingBracket', function (e, t, n) {
                    return (
                        (n || 'boolean' == typeof t) &&
                            (n ? ((n.strict = t), (t = n)) : (t = t ? { strict: !0 } : null)),
                        o(this, e, t)
                    );
                }),
                e.defineExtension('scanForBracket', function (e, t, n, r) {
                    return a(this, e, t, n, r);
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e) {
                e.state.tagHit && e.state.tagHit.clear(),
                    e.state.tagOther && e.state.tagOther.clear(),
                    (e.state.tagHit = e.state.tagOther = null);
            }
            function n(n) {
                (n.state.failedTagMatch = !1),
                    n.operation(function () {
                        if ((t(n), !n.somethingSelected())) {
                            var r = n.getCursor(),
                                i = n.getViewport();
                            (i.from = Math.min(i.from, r.line)), (i.to = Math.max(r.line + 1, i.to));
                            var o = e.findMatchingTag(n, r, i);
                            if (o) {
                                if (n.state.matchBothTags) {
                                    var a = 'open' == o.at ? o.open : o.close;
                                    a &&
                                        (n.state.tagHit = n.markText(a.from, a.to, {
                                            className: 'CodeMirror-matchingtag',
                                        }));
                                }
                                var l = 'close' == o.at ? o.open : o.close;
                                l
                                    ? (n.state.tagOther = n.markText(l.from, l.to, {
                                          className: 'CodeMirror-matchingtag',
                                      }))
                                    : (n.state.failedTagMatch = !0);
                            }
                        }
                    });
            }
            function r(e) {
                e.state.failedTagMatch && n(e);
            }
            e.defineOption('matchTags', !1, function (i, o, a) {
                a && a != e.Init && (i.off('cursorActivity', n), i.off('viewportChange', r), t(i)),
                    o &&
                        ((i.state.matchBothTags = 'object' == typeof o && o.bothTags),
                        i.on('cursorActivity', n),
                        i.on('viewportChange', r),
                        n(i));
            }),
                (e.commands.toMatchingTag = function (t) {
                    var n = e.findMatchingTag(t, t.getCursor());
                    if (n) {
                        var r = 'close' == n.at ? n.open : n.close;
                        r && t.extendSelection(r.to, r.from);
                    }
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t,
                n,
                r = e.Pos;
            function i(e) {
                var t = e.flags;
                return null != t ? t : (e.ignoreCase ? 'i' : '') + (e.global ? 'g' : '') + (e.multiline ? 'm' : '');
            }
            function o(e, t) {
                for (var n = i(e), r = n, o = 0; o < t.length; o++) -1 == r.indexOf(t.charAt(o)) && (r += t.charAt(o));
                return n == r ? e : new RegExp(e.source, r);
            }
            function a(e) {
                return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
            }
            function l(e, t, n) {
                t = o(t, 'g');
                for (var i = n.line, a = n.ch, l = e.lastLine(); i <= l; i++, a = 0) {
                    t.lastIndex = a;
                    var s = e.getLine(i),
                        c = t.exec(s);
                    if (c) return { from: r(i, c.index), to: r(i, c.index + c[0].length), match: c };
                }
            }
            function s(e, t, n) {
                if (!a(t)) return l(e, t, n);
                t = o(t, 'gm');
                for (var i, s = 1, c = n.line, u = e.lastLine(); c <= u; ) {
                    for (var d = 0; d < s && !(c > u); d++) {
                        var f = e.getLine(c++);
                        i = null == i ? f : i + '\n' + f;
                    }
                    (s *= 2), (t.lastIndex = n.ch);
                    var p = t.exec(i);
                    if (p) {
                        var h = i.slice(0, p.index).split('\n'),
                            m = p[0].split('\n'),
                            g = n.line + h.length - 1,
                            v = h[h.length - 1].length;
                        return {
                            from: r(g, v),
                            to: r(g + m.length - 1, 1 == m.length ? v + m[0].length : m[m.length - 1].length),
                            match: p,
                        };
                    }
                }
            }
            function c(e, t, n) {
                for (var r, i = 0; i <= e.length; ) {
                    t.lastIndex = i;
                    var o = t.exec(e);
                    if (!o) break;
                    var a = o.index + o[0].length;
                    if (a > e.length - n) break;
                    (!r || a > r.index + r[0].length) && (r = o), (i = o.index + 1);
                }
                return r;
            }
            function u(e, t, n) {
                t = o(t, 'g');
                for (var i = n.line, a = n.ch, l = e.firstLine(); i >= l; i--, a = -1) {
                    var s = e.getLine(i),
                        u = c(s, t, a < 0 ? 0 : s.length - a);
                    if (u) return { from: r(i, u.index), to: r(i, u.index + u[0].length), match: u };
                }
            }
            function d(e, t, n) {
                if (!a(t)) return u(e, t, n);
                t = o(t, 'gm');
                for (var i, l = 1, s = e.getLine(n.line).length - n.ch, d = n.line, f = e.firstLine(); d >= f; ) {
                    for (var p = 0; p < l && d >= f; p++) {
                        var h = e.getLine(d--);
                        i = null == i ? h : h + '\n' + i;
                    }
                    l *= 2;
                    var m = c(i, t, s);
                    if (m) {
                        var g = i.slice(0, m.index).split('\n'),
                            v = m[0].split('\n'),
                            y = d + g.length,
                            b = g[g.length - 1].length;
                        return {
                            from: r(y, b),
                            to: r(y + v.length - 1, 1 == v.length ? b + v[0].length : v[v.length - 1].length),
                            match: m,
                        };
                    }
                }
            }
            function f(e, t, n, r) {
                if (e.length == t.length) return n;
                for (var i = 0, o = n + Math.max(0, e.length - t.length); ; ) {
                    if (i == o) return i;
                    var a = (i + o) >> 1,
                        l = r(e.slice(0, a)).length;
                    if (l == n) return a;
                    l > n ? (o = a) : (i = a + 1);
                }
            }
            function p(e, i, o, a) {
                if (!i.length) return null;
                var l = a ? t : n,
                    s = l(i).split(/\r|\n\r?/);
                e: for (var c = o.line, u = o.ch, d = e.lastLine() + 1 - s.length; c <= d; c++, u = 0) {
                    var p = e.getLine(c).slice(u),
                        h = l(p);
                    if (1 == s.length) {
                        var m = h.indexOf(s[0]);
                        if (-1 == m) continue e;
                        return (
                            (o = f(p, h, m, l) + u),
                            { from: r(c, f(p, h, m, l) + u), to: r(c, f(p, h, m + s[0].length, l) + u) }
                        );
                    }
                    var g = h.length - s[0].length;
                    if (h.slice(g) == s[0]) {
                        for (var v = 1; v < s.length - 1; v++) if (l(e.getLine(c + v)) != s[v]) continue e;
                        var y = e.getLine(c + s.length - 1),
                            b = l(y),
                            x = s[s.length - 1];
                        if (b.slice(0, x.length) == x)
                            return { from: r(c, f(p, h, g, l) + u), to: r(c + s.length - 1, f(y, b, x.length, l)) };
                    }
                }
            }
            function h(e, i, o, a) {
                if (!i.length) return null;
                var l = a ? t : n,
                    s = l(i).split(/\r|\n\r?/);
                e: for (var c = o.line, u = o.ch, d = e.firstLine() - 1 + s.length; c >= d; c--, u = -1) {
                    var p = e.getLine(c);
                    u > -1 && (p = p.slice(0, u));
                    var h = l(p);
                    if (1 == s.length) {
                        var m = h.lastIndexOf(s[0]);
                        if (-1 == m) continue e;
                        return { from: r(c, f(p, h, m, l)), to: r(c, f(p, h, m + s[0].length, l)) };
                    }
                    var g = s[s.length - 1];
                    if (h.slice(0, g.length) == g) {
                        var v = 1;
                        for (o = c - s.length + 1; v < s.length - 1; v++) if (l(e.getLine(o + v)) != s[v]) continue e;
                        var y = e.getLine(c + 1 - s.length),
                            b = l(y);
                        if (b.slice(b.length - s[0].length) == s[0])
                            return {
                                from: r(c + 1 - s.length, f(y, b, y.length - s[0].length, l)),
                                to: r(c, f(p, h, g.length, l)),
                            };
                    }
                }
            }
            function m(e, t, n, i) {
                var a;
                (this.atOccurrence = !1),
                    (this.doc = e),
                    (n = n ? e.clipPos(n) : r(0, 0)),
                    (this.pos = { from: n, to: n }),
                    'object' == typeof i ? (a = i.caseFold) : ((a = i), (i = null)),
                    'string' == typeof t
                        ? (null == a && (a = !1),
                          (this.matches = function (n, r) {
                              return (n ? h : p)(e, t, r, a);
                          }))
                        : ((t = o(t, 'gm')),
                          i && !1 === i.multiline
                              ? (this.matches = function (n, r) {
                                    return (n ? u : l)(e, t, r);
                                })
                              : (this.matches = function (n, r) {
                                    return (n ? d : s)(e, t, r);
                                }));
            }
            String.prototype.normalize
                ? ((t = function (e) {
                      return e.normalize('NFD').toLowerCase();
                  }),
                  (n = function (e) {
                      return e.normalize('NFD');
                  }))
                : ((t = function (e) {
                      return e.toLowerCase();
                  }),
                  (n = function (e) {
                      return e;
                  })),
                (m.prototype = {
                    findNext: function () {
                        return this.find(!1);
                    },
                    findPrevious: function () {
                        return this.find(!0);
                    },
                    find: function (t) {
                        for (
                            var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to));
                            n && 0 == e.cmpPos(n.from, n.to);

                        )
                            t
                                ? n.from.ch
                                    ? (n.from = r(n.from.line, n.from.ch - 1))
                                    : (n =
                                          n.from.line == this.doc.firstLine()
                                              ? null
                                              : this.matches(t, this.doc.clipPos(r(n.from.line - 1))))
                                : n.to.ch < this.doc.getLine(n.to.line).length
                                ? (n.to = r(n.to.line, n.to.ch + 1))
                                : (n = n.to.line == this.doc.lastLine() ? null : this.matches(t, r(n.to.line + 1, 0)));
                        if (n) return (this.pos = n), (this.atOccurrence = !0), this.pos.match || !0;
                        var i = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                        return (this.pos = { from: i, to: i }), (this.atOccurrence = !1);
                    },
                    from: function () {
                        if (this.atOccurrence) return this.pos.from;
                    },
                    to: function () {
                        if (this.atOccurrence) return this.pos.to;
                    },
                    replace: function (t, n) {
                        if (this.atOccurrence) {
                            var i = e.splitLines(t);
                            this.doc.replaceRange(i, this.pos.from, this.pos.to, n),
                                (this.pos.to = r(
                                    this.pos.from.line + i.length - 1,
                                    i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0)
                                ));
                        }
                    },
                }),
                e.defineExtension('getSearchCursor', function (e, t, n) {
                    return new m(this.doc, e, t, n);
                }),
                e.defineDocExtension('getSearchCursor', function (e, t, n) {
                    return new m(this, e, t, n);
                }),
                e.defineExtension('selectMatches', function (t, n) {
                    for (
                        var r = [], i = this.getSearchCursor(t, this.getCursor('from'), n);
                        i.findNext() && !(e.cmpPos(i.to(), this.getCursor('to')) > 0);

                    )
                        r.push({ anchor: i.from(), head: i.to() });
                    r.length && this.setSelections(r, 0);
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t) {
                function n(e) {
                    clearTimeout(r.doRedraw),
                        (r.doRedraw = setTimeout(function () {
                            r.redraw();
                        }, e));
                }
                (this.cm = e),
                    (this.options = t),
                    (this.buttonHeight = t.scrollButtonHeight || e.getOption('scrollButtonHeight')),
                    (this.annotations = []),
                    (this.doRedraw = this.doUpdate = null),
                    (this.div = e.getWrapperElement().appendChild(document.createElement('div'))),
                    (this.div.style.cssText = 'position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none'),
                    this.computeScale();
                var r = this;
                e.on(
                    'refresh',
                    (this.resizeHandler = function () {
                        clearTimeout(r.doUpdate),
                            (r.doUpdate = setTimeout(function () {
                                r.computeScale() && n(20);
                            }, 100));
                    })
                ),
                    e.on('markerAdded', this.resizeHandler),
                    e.on('markerCleared', this.resizeHandler),
                    !1 !== t.listenForChanges &&
                        e.on(
                            'changes',
                            (this.changeHandler = function () {
                                n(250);
                            })
                        );
            }
            e.defineExtension('annotateScrollbar', function (e) {
                return 'string' == typeof e && (e = { className: e }), new t(this, e);
            }),
                e.defineOption('scrollButtonHeight', 0),
                (t.prototype.computeScale = function () {
                    var e = this.cm,
                        t =
                            (e.getWrapperElement().clientHeight - e.display.barHeight - 2 * this.buttonHeight) /
                            e.getScrollerElement().scrollHeight;
                    if (t != this.hScale) return (this.hScale = t), !0;
                }),
                (t.prototype.update = function (e) {
                    (this.annotations = e), this.redraw();
                }),
                (t.prototype.redraw = function (e) {
                    !1 !== e && this.computeScale();
                    var t = this.cm,
                        n = this.hScale,
                        r = document.createDocumentFragment(),
                        i = this.annotations,
                        o = t.getOption('lineWrapping'),
                        a = o && 1.5 * t.defaultTextHeight(),
                        l = null,
                        s = null;
                    function c(e, n) {
                        if (l != e.line) {
                            (l = e.line), (s = t.getLineHandle(e.line));
                            var r = t.getLineHandleVisualStart(s);
                            r != s && ((l = t.getLineNumber(r)), (s = r));
                        }
                        return (s.widgets && s.widgets.length) || (o && s.height > a)
                            ? t.charCoords(e, 'local')[n ? 'top' : 'bottom']
                            : t.heightAtLine(s, 'local') + (n ? 0 : s.height);
                    }
                    var u = t.lastLine();
                    if (t.display.barWidth)
                        for (var d, f = 0; f < i.length; f++) {
                            var p = i[f];
                            if (!(p.to.line > u)) {
                                for (
                                    var h = d || c(p.from, !0) * n, m = c(p.to, !1) * n;
                                    f < i.length - 1 &&
                                    !(i[f + 1].to.line > u) &&
                                    !((d = c(i[f + 1].from, !0) * n) > m + 0.9);

                                )
                                    m = c((p = i[++f]).to, !1) * n;
                                if (m != h) {
                                    var g = Math.max(m - h, 3),
                                        v = r.appendChild(document.createElement('div'));
                                    (v.style.cssText =
                                        'position: absolute; right: 0px; width: ' +
                                        Math.max(t.display.barWidth - 1, 2) +
                                        'px; top: ' +
                                        (h + this.buttonHeight) +
                                        'px; height: ' +
                                        g +
                                        'px'),
                                        (v.className = this.options.className),
                                        p.id && v.setAttribute('annotation-id', p.id);
                                }
                            }
                        }
                    (this.div.textContent = ''), this.div.appendChild(r);
                }),
                (t.prototype.clear = function () {
                    this.cm.off('refresh', this.resizeHandler),
                        this.cm.off('markerAdded', this.resizeHandler),
                        this.cm.off('markerCleared', this.resizeHandler),
                        this.changeHandler && this.cm.off('changes', this.changeHandler),
                        this.div.parentNode.removeChild(this.div);
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t, n, r) {
                (this.cm = e), (this.options = r);
                var i = { listenForChanges: !1 };
                for (var o in r) i[o] = r[o];
                i.className || (i.className = 'CodeMirror-search-match'),
                    (this.annotation = e.annotateScrollbar(i)),
                    (this.query = t),
                    (this.caseFold = n),
                    (this.gap = { from: e.firstLine(), to: e.lastLine() + 1 }),
                    (this.matches = []),
                    (this.update = null),
                    this.findMatches(),
                    this.annotation.update(this.matches);
                var a = this;
                e.on(
                    'change',
                    (this.changeHandler = function (e, t) {
                        a.onChange(t);
                    })
                );
            }
            e.defineExtension('showMatchesOnScrollbar', function (e, n, r) {
                return 'string' == typeof r && (r = { className: r }), r || (r = {}), new t(this, e, n, r);
            });
            var n = 1e3;
            function r(e, t, n) {
                return e <= t ? e : Math.max(t, e + n);
            }
            (t.prototype.findMatches = function () {
                if (this.gap) {
                    for (var t = 0; t < this.matches.length && !((o = this.matches[t]).from.line >= this.gap.to); t++)
                        o.to.line >= this.gap.from && this.matches.splice(t--, 1);
                    for (
                        var r = this.cm.getSearchCursor(this.query, e.Pos(this.gap.from, 0), {
                                caseFold: this.caseFold,
                                multiline: this.options.multiline,
                            }),
                            i = (this.options && this.options.maxMatches) || n;
                        r.findNext();

                    ) {
                        var o;
                        if ((o = { from: r.from(), to: r.to() }).from.line >= this.gap.to) break;
                        if ((this.matches.splice(t++, 0, o), this.matches.length > i)) break;
                    }
                    this.gap = null;
                }
            }),
                (t.prototype.onChange = function (t) {
                    var n = t.from.line,
                        i = e.changeEnd(t).line,
                        o = i - t.to.line;
                    if (
                        (this.gap
                            ? ((this.gap.from = Math.min(r(this.gap.from, n, o), t.from.line)),
                              (this.gap.to = Math.max(r(this.gap.to, n, o), t.from.line)))
                            : (this.gap = { from: t.from.line, to: i + 1 }),
                        o)
                    )
                        for (var a = 0; a < this.matches.length; a++) {
                            var l = this.matches[a],
                                s = r(l.from.line, n, o);
                            s != l.from.line && (l.from = e.Pos(s, l.from.ch));
                            var c = r(l.to.line, n, o);
                            c != l.to.line && (l.to = e.Pos(c, l.to.ch));
                        }
                    clearTimeout(this.update);
                    var u = this;
                    this.update = setTimeout(function () {
                        u.updateAfterChange();
                    }, 250);
                }),
                (t.prototype.updateAfterChange = function () {
                    this.findMatches(), this.annotation.update(this.matches);
                }),
                (t.prototype.clear = function () {
                    this.cm.off('change', this.changeHandler), this.annotation.clear();
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = {
                style: 'matchhighlight',
                minChars: 2,
                delay: 100,
                wordsOnly: !1,
                annotateScrollbar: !1,
                showToken: !1,
                trim: !0,
            };
            function n(e) {
                for (var n in ((this.options = {}), t)) this.options[n] = (e && e.hasOwnProperty(n) ? e : t)[n];
                (this.overlay = this.timeout = null), (this.matchesonscroll = null), (this.active = !1);
            }
            function r(e) {
                var t = e.state.matchHighlighter;
                (t.active || e.hasFocus()) && o(e, t);
            }
            function i(e) {
                var t = e.state.matchHighlighter;
                t.active || ((t.active = !0), o(e, t));
            }
            function o(e, t) {
                clearTimeout(t.timeout),
                    (t.timeout = setTimeout(function () {
                        s(e);
                    }, t.options.delay));
            }
            function a(e, t, n, r) {
                var i = e.state.matchHighlighter;
                if ((e.addOverlay((i.overlay = d(t, n, r))), i.options.annotateScrollbar && e.showMatchesOnScrollbar)) {
                    var o = n
                        ? new RegExp(
                              (/\w/.test(t.charAt(0)) ? '\\b' : '') +
                                  t.replace(/[\\\[.+*?(){|^$]/g, '\\$&') +
                                  (/\w/.test(t.charAt(t.length - 1)) ? '\\b' : '')
                          )
                        : t;
                    i.matchesonscroll = e.showMatchesOnScrollbar(o, !1, {
                        className: 'CodeMirror-selection-highlight-scrollbar',
                    });
                }
            }
            function l(e) {
                var t = e.state.matchHighlighter;
                t.overlay &&
                    (e.removeOverlay(t.overlay),
                    (t.overlay = null),
                    t.matchesonscroll && (t.matchesonscroll.clear(), (t.matchesonscroll = null)));
            }
            function s(e) {
                e.operation(function () {
                    var t = e.state.matchHighlighter;
                    if ((l(e), e.somethingSelected() || !t.options.showToken)) {
                        var n = e.getCursor('from'),
                            r = e.getCursor('to');
                        if (n.line == r.line && (!t.options.wordsOnly || c(e, n, r))) {
                            var i = e.getRange(n, r);
                            t.options.trim && (i = i.replace(/^\s+|\s+$/g, '')),
                                i.length >= t.options.minChars && a(e, i, !1, t.options.style);
                        }
                    } else {
                        for (
                            var o = !0 === t.options.showToken ? /[\w$]/ : t.options.showToken,
                                s = e.getCursor(),
                                u = e.getLine(s.line),
                                d = s.ch,
                                f = d;
                            d && o.test(u.charAt(d - 1));

                        )
                            --d;
                        for (; f < u.length && o.test(u.charAt(f)); ) ++f;
                        d < f && a(e, u.slice(d, f), o, t.options.style);
                    }
                });
            }
            function c(e, t, n) {
                if (null !== e.getRange(t, n).match(/^\w+$/)) {
                    if (t.ch > 0) {
                        var r = { line: t.line, ch: t.ch - 1 };
                        if (null === e.getRange(r, t).match(/\W/)) return !1;
                    }
                    return !(
                        n.ch < e.getLine(t.line).length &&
                        ((r = { line: n.line, ch: n.ch + 1 }), null === e.getRange(n, r).match(/\W/))
                    );
                }
                return !1;
            }
            function u(e, t) {
                return !(
                    (e.start && t.test(e.string.charAt(e.start - 1))) ||
                    (e.pos != e.string.length && t.test(e.string.charAt(e.pos)))
                );
            }
            function d(e, t, n) {
                return {
                    token: function (r) {
                        if (r.match(e) && (!t || u(r, t))) return n;
                        r.next(), r.skipTo(e.charAt(0)) || r.skipToEnd();
                    },
                };
            }
            e.defineOption('highlightSelectionMatches', !1, function (t, o, a) {
                if (
                    (a &&
                        a != e.Init &&
                        (l(t),
                        clearTimeout(t.state.matchHighlighter.timeout),
                        (t.state.matchHighlighter = null),
                        t.off('cursorActivity', r),
                        t.off('focus', i)),
                    o)
                ) {
                    var c = (t.state.matchHighlighter = new n(o));
                    t.hasFocus() ? ((c.active = !0), s(t)) : t.on('focus', i), t.on('cursorActivity', r);
                }
            });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(t, n, r) {
                var i,
                    o = t.getWrapperElement();
                return (
                    ((i = o.appendChild(document.createElement('div'))).className = r
                        ? 'CodeMirror-dialog CodeMirror-dialog-bottom'
                        : 'CodeMirror-dialog CodeMirror-dialog-top'),
                    'string' == typeof n ? (i.innerHTML = n) : i.appendChild(n),
                    e.addClass(o, 'dialog-opened'),
                    i
                );
            }
            function n(e, t) {
                e.state.currentNotificationClose && e.state.currentNotificationClose(),
                    (e.state.currentNotificationClose = t);
            }
            e.defineExtension('openDialog', function (r, i, o) {
                o || (o = {}), n(this, null);
                var a = t(this, r, o.bottom),
                    l = !1,
                    s = this;
                function c(t) {
                    if ('string' == typeof t) d.value = t;
                    else {
                        if (l) return;
                        (l = !0),
                            e.rmClass(a.parentNode, 'dialog-opened'),
                            a.parentNode.removeChild(a),
                            s.focus(),
                            o.onClose && o.onClose(a);
                    }
                }
                var u,
                    d = a.getElementsByTagName('input')[0];
                return (
                    d
                        ? (d.focus(),
                          o.value && ((d.value = o.value), !1 !== o.selectValueOnOpen && d.select()),
                          o.onInput &&
                              e.on(d, 'input', function (e) {
                                  o.onInput(e, d.value, c);
                              }),
                          o.onKeyUp &&
                              e.on(d, 'keyup', function (e) {
                                  o.onKeyUp(e, d.value, c);
                              }),
                          e.on(d, 'keydown', function (t) {
                              (o && o.onKeyDown && o.onKeyDown(t, d.value, c)) ||
                                  ((27 == t.keyCode || (!1 !== o.closeOnEnter && 13 == t.keyCode)) &&
                                      (d.blur(), e.e_stop(t), c()),
                                  13 == t.keyCode && i(d.value, t));
                          }),
                          !1 !== o.closeOnBlur &&
                              e.on(a, 'focusout', function (e) {
                                  null !== e.relatedTarget && c();
                              }))
                        : (u = a.getElementsByTagName('button')[0]) &&
                          (e.on(u, 'click', function () {
                              c(), s.focus();
                          }),
                          !1 !== o.closeOnBlur && e.on(u, 'blur', c),
                          u.focus()),
                    c
                );
            }),
                e.defineExtension('openConfirm', function (r, i, o) {
                    n(this, null);
                    var a = t(this, r, o && o.bottom),
                        l = a.getElementsByTagName('button'),
                        s = !1,
                        c = this,
                        u = 1;
                    function d() {
                        s ||
                            ((s = !0),
                            e.rmClass(a.parentNode, 'dialog-opened'),
                            a.parentNode.removeChild(a),
                            c.focus());
                    }
                    l[0].focus();
                    for (var f = 0; f < l.length; ++f) {
                        var p = l[f];
                        !(function (t) {
                            e.on(p, 'click', function (n) {
                                e.e_preventDefault(n), d(), t && t(c);
                            });
                        })(i[f]),
                            e.on(p, 'blur', function () {
                                --u,
                                    setTimeout(function () {
                                        u <= 0 && d();
                                    }, 200);
                            }),
                            e.on(p, 'focus', function () {
                                ++u;
                            });
                    }
                }),
                e.defineExtension('openNotification', function (r, i) {
                    n(this, c);
                    var o,
                        a = t(this, r, i && i.bottom),
                        l = !1,
                        s = i && void 0 !== i.duration ? i.duration : 5e3;
                    function c() {
                        l ||
                            ((l = !0),
                            clearTimeout(o),
                            e.rmClass(a.parentNode, 'dialog-opened'),
                            a.parentNode.removeChild(a));
                    }
                    return (
                        e.on(a, 'click', function (t) {
                            e.e_preventDefault(t), c();
                        }),
                        s && (o = setTimeout(c, s)),
                        c
                    );
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t, n, r, i) {
                e.openDialog ? e.openDialog(t, i, { value: r, selectValueOnOpen: !0 }) : i(prompt(n, r));
            }
            function n(e) {
                return (
                    e.phrase('Jump to line:') +
                    ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                    e.phrase('(Use line:column or scroll% syntax)') +
                    '</span>'
                );
            }
            function r(e, t) {
                var n = Number(t);
                return /^[-+]/.test(t) ? e.getCursor().line + n : n - 1;
            }
            (e.commands.jumpToLine = function (e) {
                var i = e.getCursor();
                t(e, n(e), e.phrase('Jump to line:'), i.line + 1 + ':' + i.ch, function (t) {
                    var n;
                    if (t)
                        if ((n = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(t))) e.setCursor(r(e, n[1]), Number(n[2]));
                        else if ((n = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(t))) {
                            var o = Math.round((e.lineCount() * Number(n[1])) / 100);
                            /^[-+]/.test(n[1]) && (o = i.line + o + 1), e.setCursor(o - 1, i.ch);
                        } else (n = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(t)) && e.setCursor(r(e, n[1]), i.ch);
                });
            }),
                (e.keyMap.default['Alt-G'] = 'jumpToLine');
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e, t) {
                return (
                    'string' == typeof e
                        ? (e = new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), t ? 'gi' : 'g'))
                        : e.global || (e = new RegExp(e.source, e.ignoreCase ? 'gi' : 'g')),
                    {
                        token: function (t) {
                            e.lastIndex = t.pos;
                            var n = e.exec(t.string);
                            if (n && n.index == t.pos) return (t.pos += n[0].length || 1), 'searching';
                            n ? (t.pos = n.index) : t.skipToEnd();
                        },
                    }
                );
            }
            function n() {
                (this.posFrom = this.posTo = this.lastQuery = this.query = null), (this.overlay = null);
            }
            function r(e) {
                return e.state.search || (e.state.search = new n());
            }
            function i(e) {
                return 'string' == typeof e && e == e.toLowerCase();
            }
            function o(e, t, n) {
                return e.getSearchCursor(t, n, { caseFold: i(t), multiline: !0 });
            }
            function a(e, t, n, r, i) {
                e.openDialog(t, r, {
                    value: n,
                    selectValueOnOpen: !0,
                    closeOnEnter: !1,
                    onClose: function () {
                        h(e);
                    },
                    onKeyDown: i,
                });
            }
            function l(e, t, n, r, i) {
                e.openDialog ? e.openDialog(t, i, { value: r, selectValueOnOpen: !0 }) : i(prompt(n, r));
            }
            function s(e, t, n, r) {
                e.openConfirm ? e.openConfirm(t, r) : confirm(n) && r[0]();
            }
            function c(e) {
                return e.replace(/\\([nrt\\])/g, function (e, t) {
                    return 'n' == t ? '\n' : 'r' == t ? '\r' : 't' == t ? '\t' : '\\' == t ? '\\' : e;
                });
            }
            function u(e) {
                var t = e.match(/^\/(.*)\/([a-z]*)$/);
                if (t)
                    try {
                        e = new RegExp(t[1], -1 == t[2].indexOf('i') ? '' : 'i');
                    } catch (e) {}
                else e = c(e);
                return ('string' == typeof e ? '' == e : e.test('')) && (e = /x^/), e;
            }
            function d(e, n, r) {
                (n.queryText = r),
                    (n.query = u(r)),
                    e.removeOverlay(n.overlay, i(n.query)),
                    (n.overlay = t(n.query, i(n.query))),
                    e.addOverlay(n.overlay),
                    e.showMatchesOnScrollbar &&
                        (n.annotate && (n.annotate.clear(), (n.annotate = null)),
                        (n.annotate = e.showMatchesOnScrollbar(n.query, i(n.query))));
            }
            function f(t, n, i, o) {
                var s = r(t);
                if (s.query) return p(t, n);
                var c = t.getSelection() || s.lastQuery;
                if ((c instanceof RegExp && 'x^' == c.source && (c = null), i && t.openDialog)) {
                    var u = null,
                        f = function (n, r) {
                            e.e_stop(r),
                                n &&
                                    (n != s.queryText && (d(t, s, n), (s.posFrom = s.posTo = t.getCursor())),
                                    u && (u.style.opacity = 1),
                                    p(t, r.shiftKey, function (e, n) {
                                        var r;
                                        n.line < 3 &&
                                            document.querySelector &&
                                            (r = t.display.wrapper.querySelector('.CodeMirror-dialog')) &&
                                            r.getBoundingClientRect().bottom - 4 > t.cursorCoords(n, 'window').top &&
                                            ((u = r).style.opacity = 0.4);
                                    }));
                        };
                    a(t, m(t), c, f, function (n, i) {
                        var o = e.keyName(n),
                            a = t.getOption('extraKeys'),
                            l = (a && a[o]) || e.keyMap[t.getOption('keyMap')][o];
                        'findNext' == l || 'findPrev' == l || 'findPersistentNext' == l || 'findPersistentPrev' == l
                            ? (e.e_stop(n), d(t, r(t), i), t.execCommand(l))
                            : ('find' != l && 'findPersistent' != l) || (e.e_stop(n), f(i, n));
                    }),
                        o && c && (d(t, s, c), p(t, n));
                } else
                    l(t, m(t), 'Search for:', c, function (e) {
                        e &&
                            !s.query &&
                            t.operation(function () {
                                d(t, s, e), (s.posFrom = s.posTo = t.getCursor()), p(t, n);
                            });
                    });
            }
            function p(t, n, i) {
                t.operation(function () {
                    var a = r(t),
                        l = o(t, a.query, n ? a.posFrom : a.posTo);
                    (l.find(n) || (l = o(t, a.query, n ? e.Pos(t.lastLine()) : e.Pos(t.firstLine(), 0))).find(n)) &&
                        (t.setSelection(l.from(), l.to()),
                        t.scrollIntoView({ from: l.from(), to: l.to() }, 20),
                        (a.posFrom = l.from()),
                        (a.posTo = l.to()),
                        i && i(l.from(), l.to()));
                });
            }
            function h(e) {
                e.operation(function () {
                    var t = r(e);
                    (t.lastQuery = t.query),
                        t.query &&
                            ((t.query = t.queryText = null),
                            e.removeOverlay(t.overlay),
                            t.annotate && (t.annotate.clear(), (t.annotate = null)));
                });
            }
            function m(e) {
                return (
                    '<span class="CodeMirror-search-label">' +
                    e.phrase('Search:') +
                    '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                    e.phrase('(Use /re/ syntax for regexp search)') +
                    '</span>'
                );
            }
            function g(e) {
                return (
                    ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                    e.phrase('(Use /re/ syntax for regexp search)') +
                    '</span>'
                );
            }
            function v(e) {
                return (
                    '<span class="CodeMirror-search-label">' +
                    e.phrase('With:') +
                    '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'
                );
            }
            function y(e) {
                return (
                    '<span class="CodeMirror-search-label">' +
                    e.phrase('Replace?') +
                    '</span> <button>' +
                    e.phrase('Yes') +
                    '</button> <button>' +
                    e.phrase('No') +
                    '</button> <button>' +
                    e.phrase('All') +
                    '</button> <button>' +
                    e.phrase('Stop') +
                    '</button> '
                );
            }
            function b(e, t, n) {
                e.operation(function () {
                    for (var r = o(e, t); r.findNext(); )
                        if ('string' != typeof t) {
                            var i = e.getRange(r.from(), r.to()).match(t);
                            r.replace(
                                n.replace(/\$(\d)/g, function (e, t) {
                                    return i[t];
                                })
                            );
                        } else r.replace(n);
                });
            }
            function x(e, t) {
                if (!e.getOption('readOnly')) {
                    var n = e.getSelection() || r(e).lastQuery,
                        i =
                            '<span class="CodeMirror-search-label">' +
                            (t ? e.phrase('Replace all:') : e.phrase('Replace:')) +
                            '</span>';
                    l(e, i + g(e), i, n, function (n) {
                        n &&
                            ((n = u(n)),
                            l(e, v(e), e.phrase('Replace with:'), '', function (r) {
                                if (((r = c(r)), t)) b(e, n, r);
                                else {
                                    h(e);
                                    var i = o(e, n, e.getCursor('from')),
                                        a = function () {
                                            var t,
                                                c = i.from();
                                            (!(t = i.findNext()) &&
                                                ((i = o(e, n)),
                                                !(t = i.findNext()) ||
                                                    (c && i.from().line == c.line && i.from().ch == c.ch))) ||
                                                (e.setSelection(i.from(), i.to()),
                                                e.scrollIntoView({ from: i.from(), to: i.to() }),
                                                s(e, y(e), e.phrase('Replace?'), [
                                                    function () {
                                                        l(t);
                                                    },
                                                    a,
                                                    function () {
                                                        b(e, n, r);
                                                    },
                                                ]));
                                        },
                                        l = function (e) {
                                            i.replace(
                                                'string' == typeof n
                                                    ? r
                                                    : r.replace(/\$(\d)/g, function (t, n) {
                                                          return e[n];
                                                      })
                                            ),
                                                a();
                                        };
                                    a();
                                }
                            }));
                    });
                }
            }
            (e.commands.find = function (e) {
                h(e), f(e);
            }),
                (e.commands.findPersistent = function (e) {
                    h(e), f(e, !1, !0);
                }),
                (e.commands.findPersistentNext = function (e) {
                    f(e, !1, !0, !0);
                }),
                (e.commands.findPersistentPrev = function (e) {
                    f(e, !0, !0, !0);
                }),
                (e.commands.findNext = f),
                (e.commands.findPrev = function (e) {
                    f(e, !0);
                }),
                (e.commands.clearSearch = h),
                (e.commands.replace = x),
                (e.commands.replaceAll = function (e) {
                    x(e, !0);
                });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            var t = 'CodeMirror-activeline',
                n = 'CodeMirror-activeline-background',
                r = 'CodeMirror-activeline-gutter';
            function i(e) {
                for (var i = 0; i < e.state.activeLines.length; i++)
                    e.removeLineClass(e.state.activeLines[i], 'wrap', t),
                        e.removeLineClass(e.state.activeLines[i], 'background', n),
                        e.removeLineClass(e.state.activeLines[i], 'gutter', r);
            }
            function o(e, t) {
                if (e.length != t.length) return !1;
                for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
                return !0;
            }
            function a(e, a) {
                for (var l = [], s = 0; s < a.length; s++) {
                    var c = a[s],
                        u = e.getOption('styleActiveLine');
                    if ('object' == typeof u && u.nonEmpty ? c.anchor.line == c.head.line : c.empty()) {
                        var d = e.getLineHandleVisualStart(c.head.line);
                        l[l.length - 1] != d && l.push(d);
                    }
                }
                o(e.state.activeLines, l) ||
                    e.operation(function () {
                        i(e);
                        for (var o = 0; o < l.length; o++)
                            e.addLineClass(l[o], 'wrap', t),
                                e.addLineClass(l[o], 'background', n),
                                e.addLineClass(l[o], 'gutter', r);
                        e.state.activeLines = l;
                    });
            }
            function l(e, t) {
                a(e, t.ranges);
            }
            e.defineOption('styleActiveLine', !1, function (t, n, r) {
                var o = r != e.Init && r;
                n != o &&
                    (o && (t.off('beforeSelectionChange', l), i(t), delete t.state.activeLines),
                    n && ((t.state.activeLines = []), a(t, t.listSelections()), t.on('beforeSelectionChange', l)));
            });
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(e) {
                e.state.markedSelection &&
                    e.operation(function () {
                        c(e);
                    });
            }
            function n(e) {
                e.state.markedSelection &&
                    e.state.markedSelection.length &&
                    e.operation(function () {
                        l(e);
                    });
            }
            e.defineOption('styleSelectedText', !1, function (r, i, o) {
                var a = o && o != e.Init;
                i && !a
                    ? ((r.state.markedSelection = []),
                      (r.state.markedSelectionStyle = 'string' == typeof i ? i : 'CodeMirror-selectedtext'),
                      s(r),
                      r.on('cursorActivity', t),
                      r.on('change', n))
                    : !i &&
                      a &&
                      (r.off('cursorActivity', t),
                      r.off('change', n),
                      l(r),
                      (r.state.markedSelection = r.state.markedSelectionStyle = null));
            });
            var r = 8,
                i = e.Pos,
                o = e.cmpPos;
            function a(e, t, n, a) {
                if (0 != o(t, n))
                    for (var l = e.state.markedSelection, s = e.state.markedSelectionStyle, c = t.line; ; ) {
                        var u = c == t.line ? t : i(c, 0),
                            d = c + r,
                            f = d >= n.line,
                            p = f ? n : i(d, 0),
                            h = e.markText(u, p, { className: s });
                        if ((null == a ? l.push(h) : l.splice(a++, 0, h), f)) break;
                        c = d;
                    }
            }
            function l(e) {
                for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
                t.length = 0;
            }
            function s(e) {
                l(e);
                for (var t = e.listSelections(), n = 0; n < t.length; n++) a(e, t[n].from(), t[n].to());
            }
            function c(e) {
                if (!e.somethingSelected()) return l(e);
                if (e.listSelections().length > 1) return s(e);
                var t = e.getCursor('start'),
                    n = e.getCursor('end'),
                    i = e.state.markedSelection;
                if (!i.length) return a(e, t, n);
                var c = i[0].find(),
                    u = i[i.length - 1].find();
                if (!c || !u || n.line - t.line <= r || o(t, u.to) >= 0 || o(n, c.from) <= 0) return s(e);
                for (; o(t, c.from) > 0; ) i.shift().clear(), (c = i[0].find());
                for (
                    o(t, c.from) < 0 &&
                    (c.to.line - t.line < r ? (i.shift().clear(), a(e, t, c.to, 0)) : a(e, t, c.from, 0));
                    o(n, u.to) < 0;

                )
                    i.pop().clear(), (u = i[i.length - 1].find());
                o(n, u.to) > 0 && (n.line - u.from.line < r ? (i.pop().clear(), a(e, u.from, n)) : a(e, u.to, n));
            }
        })(a);
    }),
    o(function (e, t) {
        !(function (e) {
            function t(t, r) {
                function i() {
                    t.display.wrapper.offsetHeight
                        ? (n(t, r), t.display.lastWrapHeight != t.display.wrapper.clientHeight && t.refresh())
                        : (r.timeout = setTimeout(i, r.delay));
                }
                (r.timeout = setTimeout(i, r.delay)),
                    (r.hurry = function () {
                        clearTimeout(r.timeout), (r.timeout = setTimeout(i, 50));
                    }),
                    e.on(window, 'mouseup', r.hurry),
                    e.on(window, 'keyup', r.hurry);
            }
            function n(t, n) {
                clearTimeout(n.timeout), e.off(window, 'mouseup', n.hurry), e.off(window, 'keyup', n.hurry);
            }
            e.defineOption('autoRefresh', !1, function (e, r) {
                e.state.autoRefresh && (n(e, e.state.autoRefresh), (e.state.autoRefresh = null)),
                    r && 0 == e.display.wrapper.offsetHeight && t(e, (e.state.autoRefresh = { delay: r.delay || 250 }));
            });
        })(a);
    });
function l(e, t, n, r, i, o, a, l, s, c) {
    'boolean' != typeof a && ((s = l), (l = a), (a = !1));
    const u = 'function' == typeof n ? n.options : n;
    let d;
    if (
        (e &&
            e.render &&
            ((u.render = e.render),
            (u.staticRenderFns = e.staticRenderFns),
            (u._compiled = !0),
            i && (u.functional = !0)),
        r && (u._scopeId = r),
        o
            ? ((d = function (e) {
                  (e =
                      e ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                      'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                      (e = __VUE_SSR_CONTEXT__),
                      t && t.call(this, s(e)),
                      e && e._registeredComponents && e._registeredComponents.add(o);
              }),
              (u._ssrRegister = d))
            : t &&
              (d = a
                  ? function (e) {
                        t.call(this, c(e, this.$root.$options.shadowRoot));
                    }
                  : function (e) {
                        t.call(this, l(e));
                    }),
        d)
    )
        if (u.functional) {
            const e = u.render;
            u.render = function (t, n) {
                return d.call(n), e(t, n);
            };
        } else {
            const e = u.beforeCreate;
            u.beforeCreate = e ? [].concat(e, d) : [d];
        }
    return n;
}
const s = l(
    {
        render: function () {
            var e = this,
                t = e.$createElement;
            return (e._self._c || t)('codemirror', {
                ref: 'editor',
                attrs: { options: e.options },
                on: { ready: e.onReady },
                model: {
                    value: e.sourceCode,
                    callback: function (t) {
                        e.sourceCode = t;
                    },
                    expression: 'sourceCode',
                },
            });
        },
        staticRenderFns: [],
    },
    undefined,
    {
        name: 'HCodeMirror',
        components: { codemirror: e },
        props: {
            value: { type: String, default: '', required: !0 },
            theme: { type: String, default: 'default' },
            mode: { type: String, default: 'default' },
            readOnly: { type: Boolean, default: !1 },
        },
        data: () => ({ sourceCode: '' }),
        computed: {
            currentMode() {
                return this.mode && 'default' != this.mode ? this.mode : 'application/json';
            },
            currentTheme() {
                let e = this.theme && 'default' != this.theme ? this.theme : 'material-darker';
                return require('codemirror/theme/' + e + '.css'), e;
            },
            options() {
                return {
                    mode: this.currentMode,
                    theme: this.currentTheme,
                    indentUnit: 4,
                    smartIndent: !1,
                    tabSize: 4,
                    indentWithTabs: !0,
                    extraKeys: { Ctrl: 'autocomplete' },
                    lineWrapping: !0,
                    lineNumbers: !0,
                    gutters: ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                    readOnly: this.readOnly,
                    showCursorWhenSelecting: !0,
                    autofocus: !0,
                    dragDrop: !0,
                    spellcheck: !0,
                    autocorrect: !0,
                    matchBrackets: !0,
                    autoCloseBrackets: !0,
                    matchTags: { bothTags: !0 },
                    autoCloseTags: !0,
                    foldGutter: !0,
                    highlightSelectionMatches: { minChars: 2, style: 'matchhighlight', trim: !0, showToken: !1 },
                    lint: !0,
                    styleSelectedText: !0,
                    styleActiveLine: !0,
                    hintOptions: { completeSingle: !1 },
                };
            },
            currentCodeMirror() {
                return this.$refs.editor.codemirror;
            },
        },
        created() {},
        watch: {
            value: {
                handler(e, t) {
                    this.sourceCode = e;
                },
                immediate: !0,
            },
            sourceCode: {
                handler(e, t) {
                    this.$emit('input', e);
                },
            },
            mode: {
                handler(e, t) {
                    this.resetLint();
                },
            },
        },
        methods: {
            resetLint() {
                this.$refs.editor.codemirror.setOption('lint', !1),
                    this.$nextTick(() => {
                        this.$refs.editor.codemirror.setOption('lint', !0);
                    });
            },
            onReady(e) {
                e.on('keypress', () => {
                    e.showHint({ completeSingle: !1 });
                });
            },
        },
    },
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0
);
(window.JSHINT = n),
    (window.CSSLint = r),
    (window.jsonlint = i),
    (s.install = function (e) {
        e.component(s.name, s);
    }),
    null != typeof window && window.Vue && s.install(window.Vue);
export { s as HCodeMirror };
