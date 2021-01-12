(window.webpackJsonp = window.webpackJsonp || []).push([
    ['csslint'],
    {
        3099: function (e, t, r) {
            /*!
CSSLint v1.0.4
Copyright (c) 2016 Nicole Sullivan and Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
            var i = r('e66c'),
                n = r('8dc8'),
                s = (function () {
                    'use strict';
                    var e = [],
                        t = [],
                        r = /\/\*\s*csslint([^\*]*)\*\//,
                        a = new n.util.EventTarget();
                    return (
                        (a.version = '1.0.4'),
                        (a.addRule = function (t) {
                            e.push(t), (e[t.id] = t);
                        }),
                        (a.clearRules = function () {
                            e = [];
                        }),
                        (a.getRules = function () {
                            return [].concat(e).sort(function (e, t) {
                                return e.id > t.id ? 1 : 0;
                            });
                        }),
                        (a.getRuleset = function () {
                            for (var t = {}, r = 0, i = e.length; r < i; ) t[e[r++].id] = 1;
                            return t;
                        }),
                        (a.addFormatter = function (e) {
                            t[e.id] = e;
                        }),
                        (a.getFormatter = function (e) {
                            return t[e];
                        }),
                        (a.format = function (e, t, r, i) {
                            var n = this.getFormatter(r),
                                s = null;
                            return (
                                n &&
                                    ((s = n.startFormat()),
                                    (s += n.formatResults(e, t, i || {})),
                                    (s += n.endFormat())),
                                s
                            );
                        }),
                        (a.hasFormat = function (e) {
                            return t.hasOwnProperty(e);
                        }),
                        (a.verify = function (t, a) {
                            var l,
                                d,
                                u,
                                c = 0,
                                p = {},
                                f = [],
                                m = new n.css.Parser({ starHack: !0, ieFilters: !0, underscoreHack: !0, strict: !1 });
                            (d = t.replace(/\n\r?/g, '$split$').split('$split$')),
                                s.Util.forEach(d, function (e, t) {
                                    var r = e && e.match(/\/\*[ \t]*csslint[ \t]+allow:[ \t]*([^\*]*)\*\//i),
                                        i = r && r[1],
                                        n = {};
                                    i &&
                                        (i
                                            .toLowerCase()
                                            .split(',')
                                            .forEach(function (e) {
                                                n[e.trim()] = !0;
                                            }),
                                        Object.keys(n).length > 0 && (p[t + 1] = n));
                                });
                            var h = null,
                                g = null;
                            for (c in (s.Util.forEach(d, function (e, t) {
                                null === h && e.match(/\/\*[ \t]*csslint[ \t]+ignore:start[ \t]*\*\//i) && (h = t),
                                    e.match(/\/\*[ \t]*csslint[ \t]+ignore:end[ \t]*\*\//i) && (g = t),
                                    null !== h && null !== g && (f.push([h, g]), (h = g = null));
                            }),
                            null !== h && f.push([h, d.length]),
                            a || (a = this.getRuleset()),
                            r.test(t) &&
                                (a = (function (e, t) {
                                    var i,
                                        n = e && e.match(r),
                                        s = n && n[1];
                                    return (
                                        s &&
                                            ((i = { true: 2, '': 1, false: 0, 2: 2, 1: 1, 0: 0 }),
                                            s
                                                .toLowerCase()
                                                .split(',')
                                                .forEach(function (e) {
                                                    var r = e.split(':'),
                                                        n = r[0] || '',
                                                        s = r[1] || '';
                                                    t[n.trim()] = i[s.trim()];
                                                })),
                                        t
                                    );
                                })(t, (a = i(a)))),
                            (l = new o(d, a, p, f)),
                            (a.errors = 2),
                            a))
                                a.hasOwnProperty(c) && a[c] && e[c] && e[c].init(m, l);
                            try {
                                m.parse(t);
                            } catch (e) {
                                l.error('Fatal error, cannot continue: ' + e.message, e.line, e.col, {});
                            }
                            return (
                                (u = {
                                    messages: l.messages,
                                    stats: l.stats,
                                    ruleset: l.ruleset,
                                    allow: l.allow,
                                    ignore: l.ignore,
                                }).messages.sort(function (e, t) {
                                    return e.rollup && !t.rollup ? 1 : !e.rollup && t.rollup ? -1 : e.line - t.line;
                                }),
                                u
                            );
                        }),
                        a
                    );
                })();
            function o(e, t, r, i) {
                'use strict';
                (this.messages = []),
                    (this.stats = []),
                    (this.lines = e),
                    (this.ruleset = t),
                    (this.allow = r),
                    this.allow || (this.allow = {}),
                    (this.ignore = i),
                    this.ignore || (this.ignore = []);
            }
            (o.prototype = {
                constructor: o,
                error: function (e, t, r, i) {
                    'use strict';
                    this.messages.push({
                        type: 'error',
                        line: t,
                        col: r,
                        message: e,
                        evidence: this.lines[t - 1],
                        rule: i || {},
                    });
                },
                warn: function (e, t, r, i) {
                    'use strict';
                    this.report(e, t, r, i);
                },
                report: function (e, t, r, i) {
                    'use strict';
                    if (!this.allow.hasOwnProperty(t) || !this.allow[t].hasOwnProperty(i.id)) {
                        var n = !1;
                        s.Util.forEach(this.ignore, function (e) {
                            e[0] <= t && t <= e[1] && (n = !0);
                        }),
                            n ||
                                this.messages.push({
                                    type: 2 === this.ruleset[i.id] ? 'error' : 'warning',
                                    line: t,
                                    col: r,
                                    message: e,
                                    evidence: this.lines[t - 1],
                                    rule: i,
                                });
                    }
                },
                info: function (e, t, r, i) {
                    'use strict';
                    this.messages.push({
                        type: 'info',
                        line: t,
                        col: r,
                        message: e,
                        evidence: this.lines[t - 1],
                        rule: i,
                    });
                },
                rollupError: function (e, t) {
                    'use strict';
                    this.messages.push({ type: 'error', rollup: !0, message: e, rule: t });
                },
                rollupWarn: function (e, t) {
                    'use strict';
                    this.messages.push({ type: 'warning', rollup: !0, message: e, rule: t });
                },
                stat: function (e, t) {
                    'use strict';
                    this.stats[e] = t;
                },
            }),
                (s._Reporter = o),
                (s.Util = {
                    mix: function (e, t) {
                        'use strict';
                        var r;
                        for (r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                        return r;
                    },
                    indexOf: function (e, t) {
                        'use strict';
                        if (e.indexOf) return e.indexOf(t);
                        for (var r = 0, i = e.length; r < i; r++) if (e[r] === t) return r;
                        return -1;
                    },
                    forEach: function (e, t) {
                        'use strict';
                        if (e.forEach) return e.forEach(t);
                        for (var r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                    },
                }),
                s.addRule({
                    id: 'adjoining-classes',
                    name: 'Disallow adjoining classes',
                    desc: "Don't use adjoining classes.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-adjoining-classes',
                    browsers: 'IE6',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (i) {
                            var n,
                                s,
                                o,
                                a,
                                l,
                                d,
                                u = i.selectors;
                            for (a = 0; a < u.length; a++)
                                for (n = u[a], l = 0; l < n.parts.length; l++)
                                    if ((s = n.parts[l]).type === e.SELECTOR_PART_TYPE)
                                        for (o = 0, d = 0; d < s.modifiers.length; d++)
                                            'class' === s.modifiers[d].type && o++,
                                                o > 1 && t.report('Adjoining classes: ' + u[a].text, s.line, s.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'box-model',
                    name: 'Beware of broken box size',
                    desc: "Don't use width or height when using padding or border.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this,
                            n = {
                                border: 1,
                                'border-left': 1,
                                'border-right': 1,
                                padding: 1,
                                'padding-left': 1,
                                'padding-right': 1,
                            },
                            s = {
                                border: 1,
                                'border-bottom': 1,
                                'border-top': 1,
                                padding: 1,
                                'padding-bottom': 1,
                                'padding-top': 1,
                            },
                            o = !1;
                        function a() {
                            (r = {}), (o = !1);
                        }
                        function l() {
                            var e, a;
                            if (!o) {
                                if (r.height)
                                    for (e in s)
                                        s.hasOwnProperty(e) &&
                                            r[e] &&
                                            ((a = r[e].value),
                                            ('padding' === e && 2 === a.parts.length && 0 === a.parts[0].value) ||
                                                t.report(
                                                    'Using height with ' +
                                                        e +
                                                        ' can sometimes make elements larger than you expect.',
                                                    r[e].line,
                                                    r[e].col,
                                                    i
                                                ));
                                if (r.width)
                                    for (e in n)
                                        n.hasOwnProperty(e) &&
                                            r[e] &&
                                            ((a = r[e].value),
                                            ('padding' === e && 2 === a.parts.length && 0 === a.parts[1].value) ||
                                                t.report(
                                                    'Using width with ' +
                                                        e +
                                                        ' can sometimes make elements larger than you expect.',
                                                    r[e].line,
                                                    r[e].col,
                                                    i
                                                ));
                            }
                        }
                        e.addListener('startrule', a),
                            e.addListener('startfontface', a),
                            e.addListener('startpage', a),
                            e.addListener('startpagemargin', a),
                            e.addListener('startkeyframerule', a),
                            e.addListener('startviewport', a),
                            e.addListener('property', function (e) {
                                var t = e.property.text.toLowerCase();
                                s[t] || n[t]
                                    ? /^0\S*$/.test(e.value) ||
                                      ('border' === t && 'none' === e.value.toString()) ||
                                      (r[t] = { line: e.property.line, col: e.property.col, value: e.value })
                                    : /^(width|height)/i.test(t) && /^(length|percentage)/.test(e.value.parts[0].type)
                                    ? (r[t] = 1)
                                    : 'box-sizing' === t && (o = !0);
                            }),
                            e.addListener('endrule', l),
                            e.addListener('endfontface', l),
                            e.addListener('endpage', l),
                            e.addListener('endpagemargin', l),
                            e.addListener('endkeyframerule', l),
                            e.addListener('endviewport', l);
                    },
                }),
                s.addRule({
                    id: 'box-sizing',
                    name: 'Disallow use of box-sizing',
                    desc: "The box-sizing properties isn't supported in IE6 and IE7.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-box-sizing',
                    browsers: 'IE6, IE7',
                    tags: ['Compatibility'],
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('property', function (e) {
                            'box-sizing' === e.property.text.toLowerCase() &&
                                t.report("The box-sizing property isn't supported in IE6 and IE7.", e.line, e.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'bulletproof-font-face',
                    name: 'Use the bulletproof @font-face syntax',
                    desc:
                        "Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).",
                    url: 'https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n = this,
                            s = !1,
                            o = !0,
                            a = !1;
                        e.addListener('startfontface', function () {
                            s = !0;
                        }),
                            e.addListener('property', function (e) {
                                if (s) {
                                    var t = e.property.toString().toLowerCase(),
                                        n = e.value.toString();
                                    if (((r = e.line), (i = e.col), 'src' === t)) {
                                        var l = /^\s?url\(['"].+\.eot\?.*['"]\)\s*format\(['"]embedded-opentype['"]\).*$/i;
                                        !n.match(l) && o ? ((a = !0), (o = !1)) : n.match(l) && !o && (a = !1);
                                    }
                                }
                            }),
                            e.addListener('endfontface', function () {
                                (s = !1),
                                    a &&
                                        t.report(
                                            "@font-face declaration doesn't follow the fontspring bulletproof syntax.",
                                            r,
                                            i,
                                            n
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'compatible-vendor-prefixes',
                    name: 'Require compatible vendor prefixes',
                    desc: 'Include all compatible vendor prefixes to reach a wider range of users.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-compatible-vendor-prefixes',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n,
                            o,
                            a,
                            l,
                            d,
                            u = this,
                            c = !1,
                            p = Array.prototype.push,
                            f = [];
                        for (n in (r = {
                            animation: 'webkit',
                            'animation-delay': 'webkit',
                            'animation-direction': 'webkit',
                            'animation-duration': 'webkit',
                            'animation-fill-mode': 'webkit',
                            'animation-iteration-count': 'webkit',
                            'animation-name': 'webkit',
                            'animation-play-state': 'webkit',
                            'animation-timing-function': 'webkit',
                            appearance: 'webkit moz',
                            'border-end': 'webkit moz',
                            'border-end-color': 'webkit moz',
                            'border-end-style': 'webkit moz',
                            'border-end-width': 'webkit moz',
                            'border-image': 'webkit moz o',
                            'border-radius': 'webkit',
                            'border-start': 'webkit moz',
                            'border-start-color': 'webkit moz',
                            'border-start-style': 'webkit moz',
                            'border-start-width': 'webkit moz',
                            'box-align': 'webkit moz ms',
                            'box-direction': 'webkit moz ms',
                            'box-flex': 'webkit moz ms',
                            'box-lines': 'webkit ms',
                            'box-ordinal-group': 'webkit moz ms',
                            'box-orient': 'webkit moz ms',
                            'box-pack': 'webkit moz ms',
                            'box-sizing': '',
                            'box-shadow': '',
                            'column-count': 'webkit moz ms',
                            'column-gap': 'webkit moz ms',
                            'column-rule': 'webkit moz ms',
                            'column-rule-color': 'webkit moz ms',
                            'column-rule-style': 'webkit moz ms',
                            'column-rule-width': 'webkit moz ms',
                            'column-width': 'webkit moz ms',
                            hyphens: 'epub moz',
                            'line-break': 'webkit ms',
                            'margin-end': 'webkit moz',
                            'margin-start': 'webkit moz',
                            'marquee-speed': 'webkit wap',
                            'marquee-style': 'webkit wap',
                            'padding-end': 'webkit moz',
                            'padding-start': 'webkit moz',
                            'tab-size': 'moz o',
                            'text-size-adjust': 'webkit ms',
                            transform: 'webkit ms',
                            'transform-origin': 'webkit ms',
                            transition: '',
                            'transition-delay': '',
                            'transition-duration': '',
                            'transition-property': '',
                            'transition-timing-function': '',
                            'user-modify': 'webkit moz',
                            'user-select': 'webkit moz ms',
                            'word-break': 'epub ms',
                            'writing-mode': 'epub ms',
                        }))
                            if (r.hasOwnProperty(n)) {
                                for (o = [], l = 0, d = (a = r[n].split(' ')).length; l < d; l++)
                                    o.push('-' + a[l] + '-' + n);
                                (r[n] = o), p.apply(f, o);
                            }
                        e.addListener('startrule', function () {
                            i = [];
                        }),
                            e.addListener('startkeyframes', function (e) {
                                c = e.prefix || !0;
                            }),
                            e.addListener('endkeyframes', function () {
                                c = !1;
                            }),
                            e.addListener('property', function (e) {
                                var t = e.property;
                                s.Util.indexOf(f, t.text) > -1 &&
                                    ((c && 'string' == typeof c && 0 === t.text.indexOf('-' + c + '-')) || i.push(t));
                            }),
                            e.addListener('endrule', function () {
                                if (i.length) {
                                    var e,
                                        n,
                                        o,
                                        a,
                                        l,
                                        d,
                                        c,
                                        p,
                                        f,
                                        m,
                                        h = {};
                                    for (e = 0, n = i.length; e < n; e++)
                                        for (a in ((o = i[e]), r))
                                            r.hasOwnProperty(a) &&
                                                ((l = r[a]),
                                                s.Util.indexOf(l, o.text) > -1 &&
                                                    (h[a] || (h[a] = { full: l.slice(0), actual: [], actualNodes: [] }),
                                                    -1 === s.Util.indexOf(h[a].actual, o.text) &&
                                                        (h[a].actual.push(o.text), h[a].actualNodes.push(o))));
                                    for (a in h)
                                        if (
                                            h.hasOwnProperty(a) &&
                                            ((c = (d = h[a]).full), (p = d.actual), c.length > p.length)
                                        )
                                            for (e = 0, n = c.length; e < n; e++)
                                                (f = c[e]),
                                                    -1 === s.Util.indexOf(p, f) &&
                                                        ((m =
                                                            1 === p.length
                                                                ? p[0]
                                                                : 2 === p.length
                                                                ? p.join(' and ')
                                                                : p.join(', ')),
                                                        t.report(
                                                            'The property ' +
                                                                f +
                                                                ' is compatible with ' +
                                                                m +
                                                                ' and should be included as well.',
                                                            d.actualNodes[0].line,
                                                            d.actualNodes[0].col,
                                                            u
                                                        ));
                                }
                            });
                    },
                }),
                s.addRule({
                    id: 'display-property-grouping',
                    name: 'Require properties appropriate for display',
                    desc: "Certain properties shouldn't be used with certain display property values.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this,
                            n = {
                                display: 1,
                                float: 'none',
                                height: 1,
                                width: 1,
                                margin: 1,
                                'margin-left': 1,
                                'margin-right': 1,
                                'margin-bottom': 1,
                                'margin-top': 1,
                                padding: 1,
                                'padding-left': 1,
                                'padding-right': 1,
                                'padding-bottom': 1,
                                'padding-top': 1,
                                'vertical-align': 1,
                            };
                        function s(e, s, o) {
                            r[e] &&
                                (('string' == typeof n[e] && r[e].value.toLowerCase() === n[e]) ||
                                    t.report(
                                        o || e + " can't be used with display: " + s + '.',
                                        r[e].line,
                                        r[e].col,
                                        i
                                    ));
                        }
                        function o() {
                            r = {};
                        }
                        function a() {
                            var e = r.display ? r.display.value : null;
                            if (e)
                                switch (e) {
                                    case 'inline':
                                        s('height', e),
                                            s('width', e),
                                            s('margin', e),
                                            s('margin-top', e),
                                            s('margin-bottom', e),
                                            s(
                                                'float',
                                                e,
                                                'display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).'
                                            );
                                        break;
                                    case 'block':
                                        s('vertical-align', e);
                                        break;
                                    case 'inline-block':
                                        s('float', e);
                                        break;
                                    default:
                                        0 === e.indexOf('table-') &&
                                            (s('margin', e),
                                            s('margin-left', e),
                                            s('margin-right', e),
                                            s('margin-top', e),
                                            s('margin-bottom', e),
                                            s('float', e));
                                }
                        }
                        e.addListener('startrule', o),
                            e.addListener('startfontface', o),
                            e.addListener('startkeyframerule', o),
                            e.addListener('startpagemargin', o),
                            e.addListener('startpage', o),
                            e.addListener('startviewport', o),
                            e.addListener('property', function (e) {
                                var t = e.property.text.toLowerCase();
                                n[t] && (r[t] = { value: e.value.text, line: e.property.line, col: e.property.col });
                            }),
                            e.addListener('endrule', a),
                            e.addListener('endfontface', a),
                            e.addListener('endkeyframerule', a),
                            e.addListener('endpagemargin', a),
                            e.addListener('endpage', a),
                            e.addListener('endviewport', a);
                    },
                }),
                s.addRule({
                    id: 'duplicate-background-images',
                    name: 'Disallow duplicate background images',
                    desc: 'Every background-image should be unique. Use a common class for e.g. sprites.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = {};
                        e.addListener('property', function (e) {
                            var n,
                                s,
                                o = e.property.text,
                                a = e.value;
                            if (o.match(/background/i))
                                for (n = 0, s = a.parts.length; n < s; n++)
                                    'uri' === a.parts[n].type &&
                                        (void 0 === i[a.parts[n].uri]
                                            ? (i[a.parts[n].uri] = e)
                                            : t.report(
                                                  "Background image '" +
                                                      a.parts[n].uri +
                                                      "' was used multiple times, first declared at line " +
                                                      i[a.parts[n].uri].line +
                                                      ', col ' +
                                                      i[a.parts[n].uri].col +
                                                      '.',
                                                  e.line,
                                                  e.col,
                                                  r
                                              ));
                        });
                    },
                }),
                s.addRule({
                    id: 'duplicate-properties',
                    name: 'Disallow duplicate properties',
                    desc: 'Duplicate properties must appear one after the other.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n = this;
                        function s() {
                            r = {};
                        }
                        e.addListener('startrule', s),
                            e.addListener('startfontface', s),
                            e.addListener('startpage', s),
                            e.addListener('startpagemargin', s),
                            e.addListener('startkeyframerule', s),
                            e.addListener('startviewport', s),
                            e.addListener('property', function (e) {
                                var s = e.property.text.toLowerCase();
                                !r[s] ||
                                    (i === s && r[s] !== e.value.text) ||
                                    t.report("Duplicate property '" + e.property + "' found.", e.line, e.col, n),
                                    (r[s] = e.value.text),
                                    (i = s);
                            });
                    },
                }),
                s.addRule({
                    id: 'empty-rules',
                    name: 'Disallow empty rules',
                    desc: 'Rules without any properties specified should be removed.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('startrule', function () {
                            i = 0;
                        }),
                            e.addListener('property', function () {
                                i++;
                            }),
                            e.addListener('endrule', function (e) {
                                var n = e.selectors;
                                0 === i && t.report('Rule is empty.', n[0].line, n[0].col, r);
                            });
                    },
                }),
                s.addRule({
                    id: 'errors',
                    name: 'Parsing Errors',
                    desc: 'This rule looks for recoverable syntax errors.',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('error', function (e) {
                            t.error(e.message, e.line, e.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'fallback-colors',
                    name: 'Require fallback colors',
                    desc: "For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-fallback-colors',
                    browsers: 'IE6,IE7,IE8',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this,
                            n = {
                                color: 1,
                                background: 1,
                                'border-color': 1,
                                'border-top-color': 1,
                                'border-right-color': 1,
                                'border-bottom-color': 1,
                                'border-left-color': 1,
                                border: 1,
                                'border-top': 1,
                                'border-right': 1,
                                'border-bottom': 1,
                                'border-left': 1,
                                'background-color': 1,
                            };
                        function s() {
                            r = null;
                        }
                        e.addListener('startrule', s),
                            e.addListener('startfontface', s),
                            e.addListener('startpage', s),
                            e.addListener('startpagemargin', s),
                            e.addListener('startkeyframerule', s),
                            e.addListener('startviewport', s),
                            e.addListener('property', function (e) {
                                var s = e.property.text.toLowerCase(),
                                    o = e.value.parts,
                                    a = 0,
                                    l = '',
                                    d = o.length;
                                if (n[s])
                                    for (; a < d; )
                                        'color' === o[a].type &&
                                            ('alpha' in o[a] || 'hue' in o[a]
                                                ? (/([^\)]+)\(/.test(o[a]) && (l = RegExp.$1.toUpperCase()),
                                                  (r &&
                                                      r.property.text.toLowerCase() === s &&
                                                      'compat' === r.colorType) ||
                                                      t.report(
                                                          'Fallback ' +
                                                              s +
                                                              ' (hex or RGB) should precede ' +
                                                              l +
                                                              ' ' +
                                                              s +
                                                              '.',
                                                          e.line,
                                                          e.col,
                                                          i
                                                      ))
                                                : (e.colorType = 'compat')),
                                            a++;
                                r = e;
                            });
                    },
                }),
                s.addRule({
                    id: 'floats',
                    name: 'Disallow too many floats',
                    desc: 'This rule tests if the float property is used too many times',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('property', function (e) {
                            'float' === e.property.text.toLowerCase() && 'none' !== e.value.text.toLowerCase() && i++;
                        }),
                            e.addListener('endstylesheet', function () {
                                t.stat('floats', i),
                                    i >= 10 &&
                                        t.rollupWarn(
                                            'Too many floats (' +
                                                i +
                                                "), you're probably using them for layout. Consider using a grid system instead.",
                                            r
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'font-faces',
                    name: "Don't use too many web fonts",
                    desc: 'Too many different web fonts in the same stylesheet.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-web-fonts',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('startfontface', function () {
                            i++;
                        }),
                            e.addListener('endstylesheet', function () {
                                i > 5 && t.rollupWarn('Too many @font-face declarations (' + i + ').', r);
                            });
                    },
                }),
                s.addRule({
                    id: 'font-sizes',
                    name: 'Disallow too many font sizes',
                    desc: 'Checks the number of font-size declarations.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('property', function (e) {
                            'font-size' === e.property.toString() && i++;
                        }),
                            e.addListener('endstylesheet', function () {
                                t.stat('font-sizes', i),
                                    i >= 10 &&
                                        t.rollupWarn(
                                            'Too many font-size declarations (' + i + '), abstraction needed.',
                                            r
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'gradients',
                    name: 'Require all gradient definitions',
                    desc: 'When using a vendor-prefixed gradient, make sure to use them all.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this;
                        e.addListener('startrule', function () {
                            r = { moz: 0, webkit: 0, oldWebkit: 0, o: 0 };
                        }),
                            e.addListener('property', function (e) {
                                /\-(moz|o|webkit)(?:\-(?:linear|radial))\-gradient/i.test(e.value)
                                    ? (r[RegExp.$1] = 1)
                                    : /\-webkit\-gradient/i.test(e.value) && (r.oldWebkit = 1);
                            }),
                            e.addListener('endrule', function (e) {
                                var n = [];
                                r.moz || n.push('Firefox 3.6+'),
                                    r.webkit || n.push('Webkit (Safari 5+, Chrome)'),
                                    r.oldWebkit || n.push('Old Webkit (Safari 4+, Chrome)'),
                                    r.o || n.push('Opera 11.1+'),
                                    n.length &&
                                        n.length < 4 &&
                                        t.report(
                                            'Missing vendor-prefixed CSS gradients for ' + n.join(', ') + '.',
                                            e.selectors[0].line,
                                            e.selectors[0].col,
                                            i
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'ids',
                    name: 'Disallow IDs in selectors',
                    desc: 'Selectors should not contain IDs.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (i) {
                            var n,
                                s,
                                o,
                                a,
                                l,
                                d,
                                u = i.selectors;
                            for (a = 0; a < u.length; a++) {
                                for (n = u[a], o = 0, l = 0; l < n.parts.length; l++)
                                    if ((s = n.parts[l]).type === e.SELECTOR_PART_TYPE)
                                        for (d = 0; d < s.modifiers.length; d++) 'id' === s.modifiers[d].type && o++;
                                1 === o
                                    ? t.report("Don't use IDs in selectors.", n.line, n.col, r)
                                    : o > 1 && t.report(o + ' IDs in the selector, really?', n.line, n.col, r);
                            }
                        });
                    },
                }),
                s.addRule({
                    id: 'import-ie-limit',
                    name: '@import limit on IE6-IE9',
                    desc: 'IE6-9 supports up to 31 @import per stylesheet',
                    browsers: 'IE6, IE7, IE8, IE9',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('startpage', function () {
                            i = 0;
                        }),
                            e.addListener('import', function () {
                                i++;
                            }),
                            e.addListener('endstylesheet', function () {
                                i > 31 &&
                                    t.rollupError(
                                        'Too many @import rules (' +
                                            i +
                                            '). IE6-9 supports up to 31 import per stylesheet.',
                                        r
                                    );
                            });
                    },
                }),
                s.addRule({
                    id: 'import',
                    name: 'Disallow @import',
                    desc: "Don't use @import, use <link> instead.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-%40import',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('import', function (e) {
                            t.report('@import prevents parallel downloads, use <link> instead.', e.line, e.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'important',
                    name: 'Disallow !important',
                    desc: 'Be careful when using !important declaration',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-%21important',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('property', function (e) {
                            !0 === e.important && (i++, t.report('Use of !important', e.line, e.col, r));
                        }),
                            e.addListener('endstylesheet', function () {
                                t.stat('important', i),
                                    i >= 10 &&
                                        t.rollupWarn(
                                            'Too many !important declarations (' +
                                                i +
                                                '), try to use less than 10 to avoid specificity issues.',
                                            r
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'known-properties',
                    name: 'Require use of known properties',
                    desc: 'Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-use-of-known-properties',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('property', function (e) {
                            e.invalid && t.report(e.invalid.message, e.line, e.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'order-alphabetical',
                    name: 'Alphabetical order',
                    desc: 'Assure properties are in alphabetical order',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this,
                            n = function () {
                                r = [];
                            },
                            s = function (e) {
                                r.join(',') !== r.sort().join(',') &&
                                    t.report(
                                        "Rule doesn't have all its properties in alphabetical order.",
                                        e.line,
                                        e.col,
                                        i
                                    );
                            };
                        e.addListener('startrule', n),
                            e.addListener('startfontface', n),
                            e.addListener('startpage', n),
                            e.addListener('startpagemargin', n),
                            e.addListener('startkeyframerule', n),
                            e.addListener('startviewport', n),
                            e.addListener('property', function (e) {
                                var t = e.property.text.toLowerCase().replace(/^-.*?-/, '');
                                r.push(t);
                            }),
                            e.addListener('endrule', s),
                            e.addListener('endfontface', s),
                            e.addListener('endpage', s),
                            e.addListener('endpagemargin', s),
                            e.addListener('endkeyframerule', s),
                            e.addListener('endviewport', s);
                    },
                }),
                s.addRule({
                    id: 'outline-none',
                    name: 'Disallow outline: none',
                    desc: 'Use of outline: none or outline: 0 should be limited to :focus rules.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-outline%3Anone',
                    browsers: 'All',
                    tags: ['Accessibility'],
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i = this;
                        function n(e) {
                            r = e.selectors
                                ? { line: e.line, col: e.col, selectors: e.selectors, propCount: 0, outline: !1 }
                                : null;
                        }
                        function s() {
                            r &&
                                r.outline &&
                                (-1 === r.selectors.toString().toLowerCase().indexOf(':focus')
                                    ? t.report('Outlines should only be modified using :focus.', r.line, r.col, i)
                                    : 1 === r.propCount &&
                                      t.report(
                                          "Outlines shouldn't be hidden unless other visual changes are made.",
                                          r.line,
                                          r.col,
                                          i
                                      ));
                        }
                        e.addListener('startrule', n),
                            e.addListener('startfontface', n),
                            e.addListener('startpage', n),
                            e.addListener('startpagemargin', n),
                            e.addListener('startkeyframerule', n),
                            e.addListener('startviewport', n),
                            e.addListener('property', function (e) {
                                var t = e.property.text.toLowerCase(),
                                    i = e.value;
                                r &&
                                    (r.propCount++,
                                    'outline' !== t ||
                                        ('none' !== i.toString() && '0' !== i.toString()) ||
                                        (r.outline = !0));
                            }),
                            e.addListener('endrule', s),
                            e.addListener('endfontface', s),
                            e.addListener('endpage', s),
                            e.addListener('endpagemargin', s),
                            e.addListener('endkeyframerule', s),
                            e.addListener('endviewport', s);
                    },
                }),
                s.addRule({
                    id: 'overqualified-elements',
                    name: 'Disallow overqualified elements',
                    desc: "Don't use classes or IDs with elements (a.foo or a#foo).",
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = {};
                        e.addListener('startrule', function (n) {
                            var s,
                                o,
                                a,
                                l,
                                d,
                                u,
                                c = n.selectors;
                            for (l = 0; l < c.length; l++)
                                for (s = c[l], d = 0; d < s.parts.length; d++)
                                    if ((o = s.parts[d]).type === e.SELECTOR_PART_TYPE)
                                        for (u = 0; u < o.modifiers.length; u++)
                                            (a = o.modifiers[u]),
                                                o.elementName && 'id' === a.type
                                                    ? t.report(
                                                          'Element (' +
                                                              o +
                                                              ') is overqualified, just use ' +
                                                              a +
                                                              ' without element name.',
                                                          o.line,
                                                          o.col,
                                                          r
                                                      )
                                                    : 'class' === a.type &&
                                                      (i[a] || (i[a] = []), i[a].push({ modifier: a, part: o }));
                        }),
                            e.addListener('endstylesheet', function () {
                                var e;
                                for (e in i)
                                    i.hasOwnProperty(e) &&
                                        1 === i[e].length &&
                                        i[e][0].part.elementName &&
                                        t.report(
                                            'Element (' +
                                                i[e][0].part +
                                                ') is overqualified, just use ' +
                                                i[e][0].modifier +
                                                ' without element name.',
                                            i[e][0].part.line,
                                            i[e][0].part.col,
                                            r
                                        );
                            });
                    },
                }),
                s.addRule({
                    id: 'qualified-headings',
                    name: 'Disallow qualified headings',
                    desc: 'Headings should not be qualified (namespaced).',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (i) {
                            var n,
                                s,
                                o,
                                a,
                                l = i.selectors;
                            for (o = 0; o < l.length; o++)
                                for (n = l[o], a = 0; a < n.parts.length; a++)
                                    (s = n.parts[a]).type === e.SELECTOR_PART_TYPE &&
                                        s.elementName &&
                                        /h[1-6]/.test(s.elementName.toString()) &&
                                        a > 0 &&
                                        t.report(
                                            'Heading (' + s.elementName + ') should not be qualified.',
                                            s.line,
                                            s.col,
                                            r
                                        );
                        });
                    },
                }),
                s.addRule({
                    id: 'regex-selectors',
                    name: 'Disallow selectors that look like regexs',
                    desc: 'Selectors that look like regular expressions are slow and should be avoided.',
                    url:
                        'https://github.com/CSSLint/csslint/wiki/Disallow-selectors-that-look-like-regular-expressions',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (i) {
                            var n,
                                s,
                                o,
                                a,
                                l,
                                d,
                                u = i.selectors;
                            for (a = 0; a < u.length; a++)
                                for (n = u[a], l = 0; l < n.parts.length; l++)
                                    if ((s = n.parts[l]).type === e.SELECTOR_PART_TYPE)
                                        for (d = 0; d < s.modifiers.length; d++)
                                            'attribute' === (o = s.modifiers[d]).type &&
                                                /([~\|\^\$\*]=)/.test(o) &&
                                                t.report(
                                                    'Attribute selectors with ' + RegExp.$1 + ' are slow!',
                                                    o.line,
                                                    o.col,
                                                    r
                                                );
                        });
                    },
                }),
                s.addRule({
                    id: 'rules-count',
                    name: 'Rules Count',
                    desc: 'Track how many rules there are.',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = 0;
                        e.addListener('startrule', function () {
                            r++;
                        }),
                            e.addListener('endstylesheet', function () {
                                t.stat('rule-count', r);
                            });
                    },
                }),
                s.addRule({
                    id: 'selector-max-approaching',
                    name: 'Warn when approaching the 4095 selector limit for IE',
                    desc: 'Will warn when selector count is >= 3800 selectors.',
                    browsers: 'IE',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('startrule', function (e) {
                            i += e.selectors.length;
                        }),
                            e.addListener('endstylesheet', function () {
                                i >= 3800 &&
                                    t.report(
                                        'You have ' +
                                            i +
                                            ' selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.',
                                        0,
                                        0,
                                        r
                                    );
                            });
                    },
                }),
                s.addRule({
                    id: 'selector-max',
                    name: 'Error when past the 4095 selector limit for IE',
                    desc: 'Will error when selector count is > 4095.',
                    browsers: 'IE',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = 0;
                        e.addListener('startrule', function (e) {
                            i += e.selectors.length;
                        }),
                            e.addListener('endstylesheet', function () {
                                i > 4095 &&
                                    t.report(
                                        'You have ' +
                                            i +
                                            ' selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.',
                                        0,
                                        0,
                                        r
                                    );
                            });
                    },
                }),
                s.addRule({
                    id: 'selector-newline',
                    name: 'Disallow new-line characters in selectors',
                    desc:
                        'New-line characters in selectors are usually a forgotten comma and not a descendant combinator.',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (e) {
                            var i,
                                n,
                                s,
                                o,
                                a,
                                l,
                                d,
                                u,
                                c,
                                p,
                                f,
                                m = e.selectors;
                            for (i = 0, n = m.length; i < n; i++)
                                for (o = 0, l = (s = m[i]).parts.length; o < l; o++)
                                    for (a = o + 1; a < l; a++)
                                        (d = s.parts[o]),
                                            (u = s.parts[a]),
                                            (c = d.type),
                                            (p = d.line),
                                            (f = u.line),
                                            'descendant' === c &&
                                                f > p &&
                                                t.report(
                                                    'newline character found in selector (forgot a comma?)',
                                                    p,
                                                    m[i].parts[0].col,
                                                    r
                                                );
                        });
                    },
                }),
                s.addRule({
                    id: 'shorthand',
                    name: 'Require shorthand properties',
                    desc: 'Use shorthand properties where possible.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n,
                            s,
                            o = this,
                            a = {},
                            l = {
                                margin: ['margin-top', 'margin-bottom', 'margin-left', 'margin-right'],
                                padding: ['padding-top', 'padding-bottom', 'padding-left', 'padding-right'],
                            };
                        for (r in l) if (l.hasOwnProperty(r)) for (i = 0, n = l[r].length; i < n; i++) a[l[r][i]] = r;
                        function d() {
                            s = {};
                        }
                        function u(e) {
                            var r, i, n, a;
                            for (r in l)
                                if (l.hasOwnProperty(r)) {
                                    for (a = 0, i = 0, n = l[r].length; i < n; i++) a += s[l[r][i]] ? 1 : 0;
                                    a === l[r].length &&
                                        t.report(
                                            'The properties ' + l[r].join(', ') + ' can be replaced by ' + r + '.',
                                            e.line,
                                            e.col,
                                            o
                                        );
                                }
                        }
                        e.addListener('startrule', d),
                            e.addListener('startfontface', d),
                            e.addListener('property', function (e) {
                                var t = e.property.toString().toLowerCase();
                                a[t] && (s[t] = 1);
                            }),
                            e.addListener('endrule', u),
                            e.addListener('endfontface', u);
                    },
                }),
                s.addRule({
                    id: 'star-property-hack',
                    name: 'Disallow properties with a star prefix',
                    desc: 'Checks for the star property hack (targets IE6/7)',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-star-hack',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('property', function (e) {
                            '*' === e.property.hack &&
                                t.report('Property with star prefix found.', e.property.line, e.property.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'text-indent',
                    name: 'Disallow negative text-indent',
                    desc: 'Checks for text indent less than -99px',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n = this;
                        function s() {
                            (r = !1), (i = 'inherit');
                        }
                        function o() {
                            r &&
                                'ltr' !== i &&
                                t.report(
                                    "Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.",
                                    r.line,
                                    r.col,
                                    n
                                );
                        }
                        e.addListener('startrule', s),
                            e.addListener('startfontface', s),
                            e.addListener('property', function (e) {
                                var t = e.property.toString().toLowerCase(),
                                    n = e.value;
                                'text-indent' === t && n.parts[0].value < -99
                                    ? (r = e.property)
                                    : 'direction' === t && 'ltr' === n.toString() && (i = 'ltr');
                            }),
                            e.addListener('endrule', o),
                            e.addListener('endfontface', o);
                    },
                }),
                s.addRule({
                    id: 'underscore-property-hack',
                    name: 'Disallow properties with an underscore prefix',
                    desc: 'Checks for the underscore property hack (targets IE6)',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-underscore-hack',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('property', function (e) {
                            '_' === e.property.hack &&
                                t.report('Property with underscore prefix found.', e.property.line, e.property.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'unique-headings',
                    name: 'Headings should only be defined once',
                    desc: 'Headings should be defined only once.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this,
                            i = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };
                        e.addListener('startrule', function (e) {
                            var n,
                                s,
                                o,
                                a,
                                l,
                                d = e.selectors;
                            for (a = 0; a < d.length; a++)
                                if (
                                    (s = (n = d[a]).parts[n.parts.length - 1]).elementName &&
                                    /(h[1-6])/i.test(s.elementName.toString())
                                ) {
                                    for (l = 0; l < s.modifiers.length; l++)
                                        if ('pseudo' === s.modifiers[l].type) {
                                            o = !0;
                                            break;
                                        }
                                    o ||
                                        (i[RegExp.$1]++,
                                        i[RegExp.$1] > 1 &&
                                            t.report(
                                                'Heading (' + s.elementName + ') has already been defined.',
                                                s.line,
                                                s.col,
                                                r
                                            ));
                                }
                        }),
                            e.addListener('endstylesheet', function () {
                                var e,
                                    n = [];
                                for (e in i) i.hasOwnProperty(e) && i[e] > 1 && n.push(i[e] + ' ' + e + 's');
                                n.length &&
                                    t.rollupWarn('You have ' + n.join(', ') + ' defined in this stylesheet.', r);
                            });
                    },
                }),
                s.addRule({
                    id: 'universal-selector',
                    name: 'Disallow universal selector',
                    desc: 'The universal selector (*) is known to be slow.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (e) {
                            var i,
                                n,
                                s,
                                o = e.selectors;
                            for (s = 0; s < o.length; s++)
                                '*' === (n = (i = o[s]).parts[i.parts.length - 1]).elementName &&
                                    t.report(r.desc, n.line, n.col, r);
                        });
                    },
                }),
                s.addRule({
                    id: 'unqualified-attributes',
                    name: 'Disallow unqualified attribute selectors',
                    desc: 'Unqualified attribute selectors are known to be slow.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('startrule', function (i) {
                            var n,
                                s,
                                o,
                                a,
                                l,
                                d = i.selectors,
                                u = !1;
                            for (a = 0; a < d.length; a++)
                                if ((s = (n = d[a]).parts[n.parts.length - 1]).type === e.SELECTOR_PART_TYPE) {
                                    for (l = 0; l < s.modifiers.length; l++)
                                        if ('class' === (o = s.modifiers[l]).type || 'id' === o.type) {
                                            u = !0;
                                            break;
                                        }
                                    if (!u)
                                        for (l = 0; l < s.modifiers.length; l++)
                                            'attribute' !== (o = s.modifiers[l]).type ||
                                                (s.elementName && '*' !== s.elementName) ||
                                                t.report(r.desc, s.line, s.col, r);
                                }
                        });
                    },
                }),
                s.addRule({
                    id: 'vendor-prefix',
                    name: 'Require standard property with vendor prefix',
                    desc: 'When using a vendor-prefixed property, make sure to include the standard one.',
                    url: 'https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r,
                            i,
                            n = this,
                            s = {
                                '-webkit-border-radius': 'border-radius',
                                '-webkit-border-top-left-radius': 'border-top-left-radius',
                                '-webkit-border-top-right-radius': 'border-top-right-radius',
                                '-webkit-border-bottom-left-radius': 'border-bottom-left-radius',
                                '-webkit-border-bottom-right-radius': 'border-bottom-right-radius',
                                '-o-border-radius': 'border-radius',
                                '-o-border-top-left-radius': 'border-top-left-radius',
                                '-o-border-top-right-radius': 'border-top-right-radius',
                                '-o-border-bottom-left-radius': 'border-bottom-left-radius',
                                '-o-border-bottom-right-radius': 'border-bottom-right-radius',
                                '-moz-border-radius': 'border-radius',
                                '-moz-border-radius-topleft': 'border-top-left-radius',
                                '-moz-border-radius-topright': 'border-top-right-radius',
                                '-moz-border-radius-bottomleft': 'border-bottom-left-radius',
                                '-moz-border-radius-bottomright': 'border-bottom-right-radius',
                                '-moz-column-count': 'column-count',
                                '-webkit-column-count': 'column-count',
                                '-moz-column-gap': 'column-gap',
                                '-webkit-column-gap': 'column-gap',
                                '-moz-column-rule': 'column-rule',
                                '-webkit-column-rule': 'column-rule',
                                '-moz-column-rule-style': 'column-rule-style',
                                '-webkit-column-rule-style': 'column-rule-style',
                                '-moz-column-rule-color': 'column-rule-color',
                                '-webkit-column-rule-color': 'column-rule-color',
                                '-moz-column-rule-width': 'column-rule-width',
                                '-webkit-column-rule-width': 'column-rule-width',
                                '-moz-column-width': 'column-width',
                                '-webkit-column-width': 'column-width',
                                '-webkit-column-span': 'column-span',
                                '-webkit-columns': 'columns',
                                '-moz-box-shadow': 'box-shadow',
                                '-webkit-box-shadow': 'box-shadow',
                                '-moz-transform': 'transform',
                                '-webkit-transform': 'transform',
                                '-o-transform': 'transform',
                                '-ms-transform': 'transform',
                                '-moz-transform-origin': 'transform-origin',
                                '-webkit-transform-origin': 'transform-origin',
                                '-o-transform-origin': 'transform-origin',
                                '-ms-transform-origin': 'transform-origin',
                                '-moz-box-sizing': 'box-sizing',
                                '-webkit-box-sizing': 'box-sizing',
                            };
                        function o() {
                            (r = {}), (i = 1);
                        }
                        function a() {
                            var e,
                                i,
                                o,
                                a,
                                l,
                                d = [];
                            for (e in r) s[e] && d.push({ actual: e, needed: s[e] });
                            for (i = 0, o = d.length; i < o; i++)
                                (a = d[i].needed),
                                    (l = d[i].actual),
                                    r[a]
                                        ? r[a][0].pos < r[l][0].pos &&
                                          t.report(
                                              "Standard property '" +
                                                  a +
                                                  "' should come after vendor-prefixed property '" +
                                                  l +
                                                  "'.",
                                              r[l][0].name.line,
                                              r[l][0].name.col,
                                              n
                                          )
                                        : t.report(
                                              "Missing standard property '" + a + "' to go along with '" + l + "'.",
                                              r[l][0].name.line,
                                              r[l][0].name.col,
                                              n
                                          );
                        }
                        e.addListener('startrule', o),
                            e.addListener('startfontface', o),
                            e.addListener('startpage', o),
                            e.addListener('startpagemargin', o),
                            e.addListener('startkeyframerule', o),
                            e.addListener('startviewport', o),
                            e.addListener('property', function (e) {
                                var t = e.property.text.toLowerCase();
                                r[t] || (r[t] = []), r[t].push({ name: e.property, value: e.value, pos: i++ });
                            }),
                            e.addListener('endrule', a),
                            e.addListener('endfontface', a),
                            e.addListener('endpage', a),
                            e.addListener('endpagemargin', a),
                            e.addListener('endkeyframerule', a),
                            e.addListener('endviewport', a);
                    },
                }),
                s.addRule({
                    id: 'zero-units',
                    name: 'Disallow units for 0 values',
                    desc: "You don't need to specify units when a value is 0.",
                    url: 'https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values',
                    browsers: 'All',
                    init: function (e, t) {
                        'use strict';
                        var r = this;
                        e.addListener('property', function (e) {
                            for (var i = e.value.parts, n = 0, s = i.length; n < s; )
                                (!i[n].units && 'percentage' !== i[n].type) ||
                                    0 !== i[n].value ||
                                    'time' === i[n].type ||
                                    t.report("Values of 0 shouldn't have units specified.", i[n].line, i[n].col, r),
                                    n++;
                        });
                    },
                }),
                (function () {
                    'use strict';
                    var e = function (e) {
                        return e && e.constructor === String
                            ? e.replace(/["&><]/g, function (e) {
                                  switch (e) {
                                      case '"':
                                          return '&quot;';
                                      case '&':
                                          return '&amp;';
                                      case '<':
                                          return '&lt;';
                                      case '>':
                                          return '&gt;';
                                  }
                              })
                            : '';
                    };
                    s.addFormatter({
                        id: 'checkstyle-xml',
                        name: 'Checkstyle XML format',
                        startFormat: function () {
                            return '<?xml version="1.0" encoding="utf-8"?><checkstyle>';
                        },
                        endFormat: function () {
                            return '</checkstyle>';
                        },
                        readError: function (t, r) {
                            return (
                                '<file name="' +
                                e(t) +
                                '"><error line="0" column="0" severty="error" message="' +
                                e(r) +
                                '"></error></file>'
                            );
                        },
                        formatResults: function (t, r) {
                            var i = t.messages,
                                n = [];
                            return (
                                i.length > 0 &&
                                    (n.push('<file name="' + r + '">'),
                                    s.Util.forEach(i, function (t) {
                                        var r;
                                        t.rollup ||
                                            n.push(
                                                '<error line="' +
                                                    t.line +
                                                    '" column="' +
                                                    t.col +
                                                    '" severity="' +
                                                    t.type +
                                                    '" message="' +
                                                    e(t.message) +
                                                    '" source="' +
                                                    (((r = t.rule) && 'name' in r
                                                        ? 'net.csslint.' + r.name.replace(/\s/g, '')
                                                        : '') +
                                                        '"/>')
                                            );
                                    }),
                                    n.push('</file>')),
                                n.join('')
                            );
                        },
                    });
                })(),
                s.addFormatter({
                    id: 'compact',
                    name: "Compact, 'porcelain' format",
                    startFormat: function () {
                        'use strict';
                        return '';
                    },
                    endFormat: function () {
                        'use strict';
                        return '';
                    },
                    formatResults: function (e, t, r) {
                        'use strict';
                        var i = e.messages,
                            n = '';
                        r = r || {};
                        var o = function (e) {
                            return e.charAt(0).toUpperCase() + e.slice(1);
                        };
                        return 0 === i.length
                            ? r.quiet
                                ? ''
                                : t + ': Lint Free!'
                            : (s.Util.forEach(i, function (e) {
                                  e.rollup
                                      ? (n += t + ': ' + o(e.type) + ' - ' + e.message + ' (' + e.rule.id + ')\n')
                                      : (n +=
                                            t +
                                            ': line ' +
                                            e.line +
                                            ', col ' +
                                            e.col +
                                            ', ' +
                                            o(e.type) +
                                            ' - ' +
                                            e.message +
                                            ' (' +
                                            e.rule.id +
                                            ')\n');
                              }),
                              n);
                    },
                }),
                s.addFormatter({
                    id: 'csslint-xml',
                    name: 'CSSLint XML format',
                    startFormat: function () {
                        'use strict';
                        return '<?xml version="1.0" encoding="utf-8"?><csslint>';
                    },
                    endFormat: function () {
                        'use strict';
                        return '</csslint>';
                    },
                    formatResults: function (e, t) {
                        'use strict';
                        var r = e.messages,
                            i = [],
                            n = function (e) {
                                return e && e.constructor === String
                                    ? e
                                          .replace(/"/g, "'")
                                          .replace(/&/g, '&amp;')
                                          .replace(/</g, '&lt;')
                                          .replace(/>/g, '&gt;')
                                    : '';
                            };
                        return (
                            r.length > 0 &&
                                (i.push('<file name="' + t + '">'),
                                s.Util.forEach(r, function (e) {
                                    e.rollup
                                        ? i.push(
                                              '<issue severity="' +
                                                  e.type +
                                                  '" reason="' +
                                                  n(e.message) +
                                                  '" evidence="' +
                                                  n(e.evidence) +
                                                  '"/>'
                                          )
                                        : i.push(
                                              '<issue line="' +
                                                  e.line +
                                                  '" char="' +
                                                  e.col +
                                                  '" severity="' +
                                                  e.type +
                                                  '" reason="' +
                                                  n(e.message) +
                                                  '" evidence="' +
                                                  n(e.evidence) +
                                                  '"/>'
                                          );
                                }),
                                i.push('</file>')),
                            i.join('')
                        );
                    },
                }),
                s.addFormatter({
                    id: 'json',
                    name: 'JSON',
                    startFormat: function () {
                        'use strict';
                        return (this.json = []), '';
                    },
                    endFormat: function () {
                        'use strict';
                        var e = '';
                        return (
                            this.json.length > 0 &&
                                (e = 1 === this.json.length ? JSON.stringify(this.json[0]) : JSON.stringify(this.json)),
                            e
                        );
                    },
                    formatResults: function (e, t, r) {
                        'use strict';
                        return (
                            (e.messages.length > 0 || !r.quiet) &&
                                this.json.push({ filename: t, messages: e.messages, stats: e.stats }),
                            ''
                        );
                    },
                }),
                s.addFormatter({
                    id: 'junit-xml',
                    name: 'JUNIT XML format',
                    startFormat: function () {
                        'use strict';
                        return '<?xml version="1.0" encoding="utf-8"?><testsuites>';
                    },
                    endFormat: function () {
                        'use strict';
                        return '</testsuites>';
                    },
                    formatResults: function (e, t) {
                        'use strict';
                        var r = e.messages,
                            i = [],
                            n = { error: 0, failure: 0 },
                            s = function (e) {
                                return e && e.constructor === String
                                    ? e.replace(/"/g, "'").replace(/</g, '&lt;').replace(/>/g, '&gt;')
                                    : '';
                            };
                        return (
                            r.length > 0 &&
                                (r.forEach(function (e) {
                                    var t,
                                        r = 'warning' === e.type ? 'error' : e.type;
                                    e.rollup ||
                                        (i.push(
                                            '<testcase time="0" name="' +
                                                (((t = e.rule) && 'name' in t
                                                    ? 'net.csslint.' + t.name.replace(/\s/g, '')
                                                    : '') +
                                                    '">')
                                        ),
                                        i.push(
                                            '<' +
                                                r +
                                                ' message="' +
                                                s(e.message) +
                                                '"><![CDATA[' +
                                                e.line +
                                                ':' +
                                                e.col +
                                                ':' +
                                                s(e.evidence) +
                                                ']]></' +
                                                r +
                                                '>'
                                        ),
                                        i.push('</testcase>'),
                                        (n[r] += 1));
                                }),
                                i.unshift(
                                    '<testsuite time="0" tests="' +
                                        r.length +
                                        '" skipped="0" errors="' +
                                        n.error +
                                        '" failures="' +
                                        n.failure +
                                        '" package="net.csslint" name="' +
                                        t +
                                        '">'
                                ),
                                i.push('</testsuite>')),
                            i.join('')
                        );
                    },
                }),
                s.addFormatter({
                    id: 'lint-xml',
                    name: 'Lint XML format',
                    startFormat: function () {
                        'use strict';
                        return '<?xml version="1.0" encoding="utf-8"?><lint>';
                    },
                    endFormat: function () {
                        'use strict';
                        return '</lint>';
                    },
                    formatResults: function (e, t) {
                        'use strict';
                        var r = e.messages,
                            i = [],
                            n = function (e) {
                                return e && e.constructor === String
                                    ? e
                                          .replace(/"/g, "'")
                                          .replace(/&/g, '&amp;')
                                          .replace(/</g, '&lt;')
                                          .replace(/>/g, '&gt;')
                                    : '';
                            };
                        return (
                            r.length > 0 &&
                                (i.push('<file name="' + t + '">'),
                                s.Util.forEach(r, function (e) {
                                    if (e.rollup)
                                        i.push(
                                            '<issue severity="' +
                                                e.type +
                                                '" reason="' +
                                                n(e.message) +
                                                '" evidence="' +
                                                n(e.evidence) +
                                                '"/>'
                                        );
                                    else {
                                        var t = '';
                                        e.rule && e.rule.id && (t = 'rule="' + n(e.rule.id) + '" '),
                                            i.push(
                                                '<issue ' +
                                                    t +
                                                    'line="' +
                                                    e.line +
                                                    '" char="' +
                                                    e.col +
                                                    '" severity="' +
                                                    e.type +
                                                    '" reason="' +
                                                    n(e.message) +
                                                    '" evidence="' +
                                                    n(e.evidence) +
                                                    '"/>'
                                            );
                                    }
                                }),
                                i.push('</file>')),
                            i.join('')
                        );
                    },
                }),
                s.addFormatter({
                    id: 'text',
                    name: 'Plain Text',
                    startFormat: function () {
                        'use strict';
                        return '';
                    },
                    endFormat: function () {
                        'use strict';
                        return '';
                    },
                    formatResults: function (e, t, r) {
                        'use strict';
                        var i = e.messages,
                            n = '';
                        if (((r = r || {}), 0 === i.length))
                            return r.quiet ? '' : '\n\ncsslint: No errors in ' + t + '.';
                        (n = '\n\ncsslint: There '),
                            1 === i.length ? (n += 'is 1 problem') : (n += 'are ' + i.length + ' problems'),
                            (n += ' in ' + t + '.');
                        var o = t.lastIndexOf('/'),
                            a = t;
                        return (
                            -1 === o && (o = t.lastIndexOf('\\')),
                            o > -1 && (a = t.substring(o + 1)),
                            s.Util.forEach(i, function (e, t) {
                                (n = n + '\n\n' + a),
                                    e.rollup
                                        ? ((n += '\n' + (t + 1) + ': ' + e.type), (n += '\n' + e.message))
                                        : ((n +=
                                              '\n' + (t + 1) + ': ' + e.type + ' at line ' + e.line + ', col ' + e.col),
                                          (n += '\n' + e.message),
                                          (n += '\n' + e.evidence));
                            }),
                            n
                        );
                    },
                }),
                (t.CSSLint = s);
        },
    },
]);