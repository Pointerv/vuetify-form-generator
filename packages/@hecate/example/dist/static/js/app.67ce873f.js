!(function (e) {
    function t(t) {
        for (var a, n, o = t[0], l = t[1], p = t[2], d = 0, u = []; d < o.length; d++)
            (n = o[d]), Object.prototype.hasOwnProperty.call(i, n) && i[n] && u.push(i[n][0]), (i[n] = 0);
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (c && c(t); u.length; ) u.shift()();
        return r.push.apply(r, p || []), s();
    }
    function s() {
        for (var e, t = 0; t < r.length; t++) {
            for (var s = r[t], a = !0, o = 1; o < s.length; o++) {
                var l = s[o];
                0 !== i[l] && (a = !1);
            }
            a && (r.splice(t--, 1), (e = n((n.s = s[0]))));
        }
        return e;
    }
    var a = {},
        i = { app: 0 },
        r = [];
    function n(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = e),
        (n.c = a),
        (n.d = function (e, t, s) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (n.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (n.r(s),
                Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    n.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = '/vuetify-form-generator/');
    var o = (window.webpackJsonp = window.webpackJsonp || []),
        l = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var p = 0; p < o.length; p++) t(o[p]);
    var c = l;
    r.push([
        0,
        'vuetify',
        'codemirror',
        'moment',
        'htmlhint',
        'jshint',
        'shortid',
        'jsonlint',
        'babel-polyfill',
        'vee-validate',
        'csslint',
        'localforage',
        'lodash',
        'sweetalert2',
        'vue-router',
        'vue',
        'vuedraggable',
        'core-js',
        'parserlib',
        'mdi-js',
        'vendors',
    ]),
        s();
})({
    0: function (e, t, s) {
        e.exports = s('56d7');
    },
    '041d': function (e, t, s) {
        'use strict';
        s('2f59');
    },
    '0654': function (e, t, s) {
        'use strict';
        s('9183');
    },
    '0e87': function (e, t, s) {
        'use strict';
        const a = {};
        t.a = a;
        const i = (e) => Object.keys(e || {}).map((t) => ({ ...e[t], key: t }));
        a.prepareFullSchema = (e, t) => {
            const s = JSON.parse(JSON.stringify(e));
            return (
                s.pattern && (s.patternRegexp = new RegExp(s.pattern)),
                Array.isArray(s.type) &&
                    ((s.nullable = s.type.includes('null')),
                    (s.type = s.type.find((e) => 'null' !== e)),
                    s.nullable && s.enum && (s.enum = s.enum.filter((e) => null !== e))),
                'object' !== s.type ||
                    ((s.properties = JSON.parse(JSON.stringify(i(s.properties)))),
                    (s.required = s.required || []),
                    (s.dependencies = s.dependencies || {}),
                    s.dependencies &&
                        Object.keys(s.dependencies).forEach((e) => {
                            const a = s.dependencies[e];
                            if (!t) return;
                            const r = ((e, t) => {
                                const s = t.split('.');
                                for (let t = 0; t < s.length && ![null, void 0].includes(e); t++) e = e[s[t]];
                                return e;
                            })(t, e);
                            [null, void 0, !1].includes(r) ||
                                (Array.isArray(r) && 0 === r.length) ||
                                ('object' == typeof r && 0 === Object.keys(r).length) ||
                                ((s.required = s.required.concat(a.required || [])),
                                (s.properties = s.properties.concat(i(a.properties))),
                                a.oneOf && (s.oneOf = (s.oneOf || []).concat(a.oneOf)),
                                a.allOf && (s.allOf = (s.allOf || []).concat(a.allOf)));
                        })),
                s
            );
        };
    },
    '108d': function (e, t, s) {
        'use strict';
        s.d(t, 'a', function () {
            return a;
        });
        const a = (e, t, s, a) => {
            const i = [];
            if (
                (s && i.push((e) => (null != e && '' !== e) || t.messages.required),
                'array' === e.type && void 0 !== e.minItems)
            ) {
                const s = t.messages.minItems.replace('{minItems}', e.minItems.toLocaleString(t.locale));
                i.push((t) => !t || t.length >= e.minItems || s);
            }
            if ('array' === e.type && void 0 !== e.maxItems) {
                const s = t.messages.maxItems.replace('{maxItems}', e.maxItems.toLocaleString(t.locale));
                i.push((t) => !t || t.length <= e.maxItems || s);
            }
            if ('string' === e.type && void 0 !== e.minLength) {
                const s = t.messages.minLength.replace('{minLength}', e.minLength.toLocaleString(t.locale));
                i.push((t) => null == t || t.length >= e.minLength || s);
            }
            if ('string' === e.type && void 0 !== e.maxLength) {
                const s = t.messages.maxLength.replace('{maxLength}', e.maxLength.toLocaleString(t.locale));
                i.push((t) => null == t || t.length <= e.maxLength || s);
            }
            if ('string' === e.type && void 0 !== e.patternRegexp) {
                const s = t.messages.pattern.replace('{pattern}', e.pattern);
                i.push((t) => null == t || !!t.match(e.patternRegexp) || s);
            }
            if (['number', 'integer'].includes(e.type) && void 0 !== e.maximum) {
                const s = t.messages.maximum.replace('{maximum}', e.maximum.toLocaleString(t.locale));
                i.push((t) => null == t || t <= e.maximum || s);
            }
            if (['number', 'integer'].includes(e.type) && void 0 !== e.minimum) {
                const s = t.messages.minimum.replace('{minimum}', e.minimum.toLocaleString(t.locale));
                i.push((t) => null == t || t >= e.minimum || s);
            }
            e.enum && i.push((t) => null == t || !!e.enum.find((e) => JSON.stringify(e) === JSON.stringify(t)) || ''),
                'array' === e.type &&
                    e.items.enum &&
                    i.push(
                        (t) =>
                            null == t ||
                            !t.find((t) => !e.items.enum.find((e) => JSON.stringify(e) === JSON.stringify(t))) ||
                            ''
                    ),
                a && 'array' !== e.type && i.push((t) => null == t || !!e.oneOf.find((e) => e.const === t) || ''),
                a &&
                    'array' === e.type &&
                    i.push((t) => null == t || !t.find((t) => !e.items.oneOf.find((e) => e.const === t)) || '');
            const r = (e['x-ruless'] || []).map((e) => {
                if ('string' == typeof e) {
                    const s = t.rules && t.rules[e];
                    return s || console.error(`rule ${e} is referenced but not define in options`), s;
                }
                if ('function' == typeof e) return e;
            });
            return i.concat(r);
        };
    },
    '206c': function (e, t, s) {
        'use strict';
        (function (e) {
            var a = s('5595'),
                i = s('f4f5');
            t.a = {
                name: 'HAssemblyRenderder',
                mixins: [i.e, i.g, i.b, i.a, i.f, i.d, i.c, i.h, i.i],
                inject: ['theme'],
                props: {
                    value: { required: !0 },
                    schema: { type: Object, required: !0 },
                    options: { type: Object },
                    modelRoot: { type: Object },
                    modelKey: { type: [String, Number], default: 'root' },
                    parentKey: { type: String, default: '' },
                    required: { type: Boolean, default: !1 },
                    sectionDepth: { type: Number, default: 0 },
                },
                data: () => ({ ready: !1, loading: !1 }),
                computed: {
                    fullOptions() {
                        const t = ('undefined' != typeof window && window) || (void 0 !== e && e) || {},
                            s = Object.assign({}, a.a, this.options || {}, this.resolvedSchema['x-options'] || {});
                        (s.markdown =
                            s.markdown ||
                            (t.markdownit && ((e) => t.markdownit(s.markdownit).render(e))) ||
                            ((e) => e)),
                            (s.httpLib = s.httpLib || this.axios || this.$http || this.$axios || t.axios);
                        const i = (this.$vuetify.icons && this.$vuetify.icons.iconfont) || 'mdi';
                        return (
                            (s.icons = { ...a.d[i], ...s.icons }),
                            (s.messages = { ...(a.f[s.locale] || a.f.en), ...s.messages }),
                            (s.formats = { ...a.b, ...s.formats }),
                            s.deleteReadOnly && (s.hideReadOnly = !0),
                            s
                        );
                    },
                    resolvedSchema() {
                        return 'root' === this.modelKey
                            ? a.e.resolve(this.schema, { '~$locale~': (this.options && this.options.locale) || 'en' })
                            : this.schema;
                    },
                    fullSchema() {
                        return a.g.prepareFullSchema(this.resolvedSchema, this.value);
                    },
                    htmlDescription() {
                        return this.fullSchema && this.fullSchema.description
                            ? this.fullOptions.markdown(this.fullSchema.description)
                            : null;
                    },
                    fullKey() {
                        return (this.parentKey + this.modelKey).replace('root.', '');
                    },
                    label() {
                        return this.fullSchema.title || ('string' == typeof this.modelKey ? this.modelKey : '');
                    },
                    display() {
                        return 'root' === this.modelKey && this.fullOptions.rootDisplay
                            ? this.fullOptions.rootDisplay
                            : this.fullSchema['x-display'];
                    },
                    customTag() {
                        return this.fullSchema['x-tag'];
                    },
                    rules() {
                        return Object(a.c)(this.fullSchema, this.fullOptions, this.required, this.isOneOfSelect);
                    },
                    disabled() {
                        return this.fullOptions.disableAll || this.fullSchema.readOnly;
                    },
                    slotName() {
                        return this.fullSchema['x-display'] && this.fullSchema['x-display'].startsWith('custom-')
                            ? this.fullSchema['x-display']
                            : this.fullKey;
                    },
                    slotParams() {
                        return {
                            value: this.value,
                            modelKey: this.modelKey,
                            schema: this.schema,
                            fullKey: this.fullKey,
                            fullSchema: this.fullSchema,
                            label: this.label,
                            disabled: this.disabled,
                            required: this.required,
                            rules: this.rules,
                            options: this.fullOptions,
                            htmlDescription: this.htmlDescription,
                            on: {
                                input: (e) => this.input(e instanceof Event ? e.target.value : e),
                                change: (e) => this.change(e),
                            },
                        };
                    },
                    dashKey() {
                        return this.fullKey.replace(/\./g, '-');
                    },
                    commonFieldProps() {
                        return {
                            value: this.value,
                            inputValue: this.value,
                            label: this.label,
                            name: this.fullKey,
                            id: this.fullOptions.idPrefix + this.dashKey,
                            disabled: this.disabled,
                            rules: this.rules,
                            required: this.required,
                            ...this.fullOptions.fieldProps,
                            ...this.fullSchema['x-props'],
                        };
                    },
                    propertyClass() {
                        return `vjsf-property vjsf-property-${this.dashKey} pa-0 ${this.fullSchema['x-class'] || ''}`;
                    },
                    xSlots() {
                        return { ...this.fullSchema['x-slots'] };
                    },
                    formattedValue() {
                        return (
                            this.value &&
                            this.fullSchema.format &&
                            this.fullOptions.formats[this.fullSchema.format] &&
                            this.fullOptions.formats[this.fullSchema.format](this.value, this.fullOptions.locale)
                        );
                    },
                },
                watch: {
                    fullSchema: {
                        handler() {
                            this.fullSchema &&
                                JSON.stringify(this.fullSchema) !== this.lastFullSchema &&
                                ((this.lastFullSchema = JSON.stringify(this.fullSchema)),
                                this.initFromSchema(),
                                this.fixProperties(),
                                (this.ready = !0));
                        },
                        immediate: !0,
                    },
                },
                render(e) {
                    if (
                        !this.fullSchema ||
                        void 0 !== this.fullSchema.const ||
                        'hidden' === this.display ||
                        (this.fullSchema.readOnly && this.fullOptions.hideReadOnly)
                    )
                        return;
                    const t = [];
                    if (
                        (this.$scopedSlots.before
                            ? t.push(this.$scopedSlots.before(this.slotParams))
                            : this.$slots.before
                            ? this.$slots.before.forEach((e) => t.push(e))
                            : this.xSlots.before &&
                              t.push(
                                  e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.before) } })
                              ),
                        this.$scopedSlots.default)
                    )
                        t.push(this.$scopedSlots.default(this.slotParams));
                    else if (
                        this.fullSchema['x-display'] &&
                        this.fullSchema['x-display'] &&
                        this.$scopedSlots[this.fullSchema['x-display']]
                    )
                        t.push(this.$scopedSlots[this.fullSchema['x-display']](this.slotParams));
                    else {
                        (
                            this.renderDateProp(e) ||
                            this.renderSelectProp(e) ||
                            this.renderFileProp(e) ||
                            this.renderSimpleProp(e) ||
                            this.renderObjectContainer(e) ||
                            []
                        ).forEach((e) => t.push(e));
                    }
                    this.$scopedSlots.after
                        ? t.push(this.$scopedSlots.after(this.slotParams))
                        : this.$slots.after
                        ? this.$slots.after.forEach((e) => t.push(e))
                        : this.xSlots.after &&
                          t.push(e('div', { domProps: { innerHTML: this.fullOptions.markdown(this.xSlots.after) } }));
                    const s = { ...this.fullOptions.fieldColProps };
                    return (
                        this.fullSchema['x-cols'] && (s.cols = this.fullSchema['x-cols']),
                        e('v-col', { props: s, class: this.propertyClass, style: this.fullSchema['x-style'] || '' }, t)
                    );
                },
                methods: {
                    renderPropSlots(e) {
                        const t = [];
                        return (
                            Object.keys(this.xSlots).forEach((s) => {
                                t.push(
                                    e('div', {
                                        slot: s,
                                        domProps: { innerHTML: this.fullOptions.markdown(this.xSlots[s]) },
                                    })
                                );
                            }),
                            Object.keys(this.$slots).forEach((s) => {
                                t.push(e('template', { slot: s }, this.$slots[s]));
                            }),
                            t
                        );
                    },
                    change() {
                        this.$emit('change', this.value);
                    },
                    input(e) {
                        null == e || '' === e ? this.$emit('input', void 0) : this.$emit('input', e);
                    },
                    defaultValue: (e) =>
                        'object' !== e.type || e['x-fromUrl'] || e['x-fromData'] || e.enum
                            ? 'array' === e.type
                                ? []
                                : 'v-range-slider' === e.tag
                                ? [0, 10]
                                : null
                            : {},
                    fixProperties() {
                        if ('object' !== this.fullSchema.type) return;
                        !(
                            (this.fullSchema.properties && this.fullSchema.properties.length) ||
                            (Object.keys(this.subModels).length &&
                                !this.fullSchema['x-fromData'] &&
                                !this.fullSchema['x-fromUrl'])
                        ) ||
                            ((this.fullOptions.removeAdditionalProperties ||
                                !1 === this.fullSchema.additionalProperties) &&
                                this.value &&
                                Object.keys(this.value).forEach((e) => {
                                    (this.fullSchema.properties || []).find((t) => t.key === e) ||
                                        this.$delete(this.value, e);
                                }),
                            Object.keys(this.subModels).forEach((e) => {
                                Object.keys(this.subModels[e]).forEach((t) => {
                                    this.value[t] !== this.subModels[e][t] &&
                                        this.$set(this.value, t, this.subModels[e][t]);
                                });
                            }));
                    },
                    initFromSchema() {
                        if (
                            ((this.initiallyDefined = void 0 !== this.value && null !== this.value),
                            'array' === this.fullSchema.type &&
                                (this.initiallyDefined = !(!this.value || !this.value.length)),
                            'object' === this.fullSchema.type &&
                                (this.initiallyDefined = !(!this.value || !Object.keys(this.value).length)),
                            this.fullSchema.readOnly && this.fullOptions.deleteReadOnly)
                        )
                            return this.input(void 0);
                        let e = this.value;
                        'object' === this.fullSchema.type &&
                            [void 0, null].includes(e) &&
                            !this.isSelectProp &&
                            (e = {}),
                            void 0 !== this.fullSchema.const && (e = this.fullSchema.const),
                            this.initSelectProp(e),
                            this.initObjectContainer(e),
                            'array' === this.fullSchema.type && (e = e.filter((e) => ![void 0, null].includes(e))),
                            this.input(e);
                    },
                },
            };
        }.call(this, s('b8a8')));
    },
    '21b6': function (e, t, s) {
        'use strict';
        s('795b');
    },
    2981: function (e, t, s) {
        var a = {
            './af': 'f826',
            './af.js': 'f826',
            './ar': '0fa2',
            './ar-dz': '8ec6',
            './ar-dz.js': '8ec6',
            './ar-kw': '36f4',
            './ar-kw.js': '36f4',
            './ar-ly': '0e86',
            './ar-ly.js': '0e86',
            './ar-ma': '3d3d',
            './ar-ma.js': '3d3d',
            './ar-sa': 'cfe1',
            './ar-sa.js': 'cfe1',
            './ar-tn': '0608',
            './ar-tn.js': '0608',
            './ar.js': '0fa2',
            './az': '9cec',
            './az.js': '9cec',
            './be': '609d',
            './be.js': '609d',
            './bg': '3f4f',
            './bg.js': '3f4f',
            './bm': '43e9',
            './bm.js': '43e9',
            './bn': 'd345',
            './bn-bd': '3037',
            './bn-bd.js': '3037',
            './bn.js': 'd345',
            './bo': 'fe43',
            './bo.js': 'fe43',
            './br': '927d',
            './br.js': '927d',
            './bs': '1808',
            './bs.js': '1808',
            './ca': '2a24',
            './ca.js': '2a24',
            './cs': '8bb4',
            './cs.js': '8bb4',
            './cv': '1788',
            './cv.js': '1788',
            './cy': '8cb6',
            './cy.js': '8cb6',
            './da': '9fca',
            './da.js': '9fca',
            './de': '3f20',
            './de-at': 'a8f1',
            './de-at.js': 'a8f1',
            './de-ch': '2b68',
            './de-ch.js': '2b68',
            './de.js': '3f20',
            './dv': '6a7c',
            './dv.js': '6a7c',
            './el': '7f03',
            './el.js': '7f03',
            './en-au': 'e33b',
            './en-au.js': 'e33b',
            './en-ca': '563d',
            './en-ca.js': '563d',
            './en-gb': '6e59',
            './en-gb.js': '6e59',
            './en-ie': 'a02d',
            './en-ie.js': 'a02d',
            './en-il': '2dd2',
            './en-il.js': '2dd2',
            './en-in': 'b674',
            './en-in.js': 'b674',
            './en-nz': '2e16',
            './en-nz.js': '2e16',
            './en-sg': '49e7',
            './en-sg.js': '49e7',
            './eo': '3645',
            './eo.js': '3645',
            './es': '8669',
            './es-do': '1ef1',
            './es-do.js': '1ef1',
            './es-mx': 'aa4f',
            './es-mx.js': 'aa4f',
            './es-us': '2adb',
            './es-us.js': '2adb',
            './es.js': '8669',
            './et': '7672',
            './et.js': '7672',
            './eu': '666c',
            './eu.js': '666c',
            './fa': '691e',
            './fa.js': '691e',
            './fi': 'b486',
            './fi.js': 'b486',
            './fil': 'e425',
            './fil.js': 'e425',
            './fo': '60e4',
            './fo.js': '60e4',
            './fr': 'bc2c',
            './fr-ca': '028a',
            './fr-ca.js': '028a',
            './fr-ch': 'de9b',
            './fr-ch.js': 'de9b',
            './fr.js': 'bc2c',
            './fy': 'de08',
            './fy.js': 'de08',
            './ga': 'c134',
            './ga.js': 'c134',
            './gd': '680a',
            './gd.js': '680a',
            './gl': '3a5c',
            './gl.js': '3a5c',
            './gom-deva': '3ab2',
            './gom-deva.js': '3ab2',
            './gom-latn': '9bbd',
            './gom-latn.js': '9bbd',
            './gu': '3123',
            './gu.js': '3123',
            './he': 'a3bb',
            './he.js': 'a3bb',
            './hi': '74d5',
            './hi.js': '74d5',
            './hr': '3d1a',
            './hr.js': '3d1a',
            './hu': '8930',
            './hu.js': '8930',
            './hy-am': '5368',
            './hy-am.js': '5368',
            './id': '4d1d',
            './id.js': '4d1d',
            './is': 'd8c2',
            './is.js': 'd8c2',
            './it': 'b571',
            './it-ch': '26a2',
            './it-ch.js': '26a2',
            './it.js': 'b571',
            './ja': 'f409',
            './ja.js': 'f409',
            './jv': '24ca',
            './jv.js': '24ca',
            './ka': '57b4',
            './ka.js': '57b4',
            './kk': '7af1',
            './kk.js': '7af1',
            './km': '368b',
            './km.js': '368b',
            './kn': 'c931',
            './kn.js': 'c931',
            './ko': '8472',
            './ko.js': '8472',
            './ku': '41c3',
            './ku.js': '41c3',
            './ky': '7229',
            './ky.js': '7229',
            './lb': 'febd',
            './lb.js': 'febd',
            './lo': 'b36b',
            './lo.js': 'b36b',
            './lt': '2654',
            './lt.js': '2654',
            './lv': '6e31',
            './lv.js': '6e31',
            './me': 'f72d',
            './me.js': 'f72d',
            './mi': '2bcd',
            './mi.js': '2bcd',
            './mk': 'c0de',
            './mk.js': 'c0de',
            './ml': 'e75d',
            './ml.js': 'e75d',
            './mn': 'b37a',
            './mn.js': 'b37a',
            './mr': 'a76b',
            './mr.js': 'a76b',
            './ms': '2bf0',
            './ms-my': '2b02',
            './ms-my.js': '2b02',
            './ms.js': '2bf0',
            './mt': 'e717',
            './mt.js': 'e717',
            './my': 'e2e2',
            './my.js': 'e2e2',
            './nb': 'bdfc',
            './nb.js': 'bdfc',
            './ne': '75c0',
            './ne.js': '75c0',
            './nl': '3e8e',
            './nl-be': 'de3b',
            './nl-be.js': 'de3b',
            './nl.js': '3e8e',
            './nn': '90a3',
            './nn.js': '90a3',
            './oc-lnc': '8195',
            './oc-lnc.js': '8195',
            './pa-in': 'bf7a',
            './pa-in.js': 'bf7a',
            './pl': '210f',
            './pl.js': '210f',
            './pt': '12e3',
            './pt-br': '294f',
            './pt-br.js': '294f',
            './pt.js': '12e3',
            './ro': '7a04',
            './ro.js': '7a04',
            './ru': '75cb',
            './ru.js': '75cb',
            './sd': 'f957',
            './sd.js': 'f957',
            './se': '4169',
            './se.js': '4169',
            './si': '951b9',
            './si.js': '951b9',
            './sk': '1c1d',
            './sk.js': '1c1d',
            './sl': 'eb2c',
            './sl.js': 'eb2c',
            './sq': '7c7d',
            './sq.js': '7c7d',
            './sr': '5f14',
            './sr-cyrl': '20a0',
            './sr-cyrl.js': '20a0',
            './sr.js': '5f14',
            './ss': '3a89',
            './ss.js': '3a89',
            './sv': '87ac',
            './sv.js': '87ac',
            './sw': '91c3',
            './sw.js': '91c3',
            './ta': '41cd',
            './ta.js': '41cd',
            './te': '5a49',
            './te.js': '5a49',
            './tet': '0e56',
            './tet.js': '0e56',
            './tg': '2495',
            './tg.js': '2495',
            './th': 'db96',
            './th.js': 'db96',
            './tk': '593b',
            './tk.js': '593b',
            './tl-ph': 'b593',
            './tl-ph.js': 'b593',
            './tlh': '04f0',
            './tlh.js': '04f0',
            './tr': 'd11d',
            './tr.js': 'd11d',
            './tzl': '6da8',
            './tzl.js': '6da8',
            './tzm': '11af',
            './tzm-latn': '2eac',
            './tzm-latn.js': '2eac',
            './tzm.js': '11af',
            './ug-cn': 'f551',
            './ug-cn.js': 'f551',
            './uk': '89a5',
            './uk.js': '89a5',
            './ur': 'faa7',
            './ur.js': 'faa7',
            './uz': 'c23b',
            './uz-latn': 'd399',
            './uz-latn.js': 'd399',
            './uz.js': 'c23b',
            './vi': '6811',
            './vi.js': '6811',
            './x-pseudo': '52a9',
            './x-pseudo.js': '52a9',
            './yo': 'f28c',
            './yo.js': 'f28c',
            './zh-cn': '39cf',
            './zh-cn.js': '39cf',
            './zh-hk': '25ad',
            './zh-hk.js': '25ad',
            './zh-mo': '1689',
            './zh-mo.js': '1689',
            './zh-tw': '2dba',
            './zh-tw.js': '2dba',
        };
        function i(e) {
            var t = r(e);
            return s(t);
        }
        function r(e) {
            if (!s.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            return a[e];
        }
        (i.keys = function () {
            return Object.keys(a);
        }),
            (i.resolve = r),
            (e.exports = i),
            (i.id = '2981');
    },
    '2f59': function (e, t, s) {},
    '2f7e': function (e, t, s) {
        'use strict';
        s('9366');
    },
    '433f': function (e, t) {
        String.prototype.format = function (e) {
            var t = function (e, t) {
                return (
                    (t = 'object' == typeof t ? t : Array.prototype.slice.call(arguments, 1)),
                    e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, s) {
                        return '{{' == e ? '{' : '}}' == e ? '}' : t[s];
                    })
                );
            };
            return t(this, (e = 'object' == typeof e ? e : Array.prototype.slice.call(arguments, 0)));
        };
    },
    '493b': function (e, t, s) {},
    5595: function (e, t, s) {
        'use strict';
        s.d(t, 'e', function () {
            return r;
        }),
            s.d(t, 'g', function () {
                return n.a;
            }),
            s.d(t, 'a', function () {
                return o;
            }),
            s.d(t, 'd', function () {
                return c;
            }),
            s.d(t, 'f', function () {
                return l;
            }),
            s.d(t, 'b', function () {
                return p;
            }),
            s.d(t, 'c', function () {
                return d.a;
            });
        var a = s('c92a');
        const i = {
            cache: {},
            extendtoken: '$extend',
            reftoken: '$ref',
            pathtoken: '#',
            debug: !1,
            clone: function (e) {
                var t, s;
                if (null === e || 'object' != typeof e || 'function' == typeof e) return e;
                for (t in ((s = e.constructor()), e)) s[t] = i.clone(e[t]);
                return s;
            },
            findIds: function (e, t) {
                var s, a, r, n;
                for (a in ((s = !1), (r = {}), e))
                    (n = e[a]),
                        null != e.id && (s = e.id),
                        s && 'id' !== a && (r[a] = n),
                        'object' == typeof n && i.findIds(n, t);
                if (s) return (t[s] = r), r;
            },
            get_json_pointer: function (e, t, s) {
                var r, n;
                (r = e
                    .replace(/\\\//, '#SLASH#')
                    .replace(/\//g, '.')
                    .replace(/#SLASH#/, '/')),
                    Object.keys(s).forEach((e) => {
                        r = r.replace(e, s[e]);
                    }),
                    '.' === (r = r.replace(new RegExp('^' + i.pathtoken), ''))[0] && (r = r.substr(1, r.length - 1));
                try {
                    i.debug && console.log("evaluating '" + r + "'"), (n = a.getter(r)(t));
                } catch (e) {
                    console.error(e), (n = '');
                }
                return n;
            },
            replace: function (e, t, s, a) {
                var r, n, o, l, p, c;
                for (r in ((p = []), e))
                    (c = e[r]),
                        i.debug && 'string' == typeof n && console.log('checking ' + r),
                        null != c && null != c[i.reftoken]
                            ? ((n = c[i.reftoken]),
                              i.debug && 'string' == typeof n && console.log('checking ' + r + ' -> ' + n),
                              Object.keys(c).length > 1 &&
                                  console.error(
                                      "json-ref-lite error: object '" +
                                          r +
                                          "' contains reference as well as other properties..ignoring properties"
                                  ),
                              Array.isArray(n)
                                  ? (n = i.replace(n, t, s, a))
                                  : null != t[n]
                                  ? (e[r] = t[n])
                                  : String(n).match(new RegExp('^' + i.pathtoken)) &&
                                    (i.debug && console.log('checking ' + n + ' pathtoken'),
                                    (e[r] = i.get_json_pointer(n, s, a))),
                              null != (null != (o = e[r]) ? o.length : void 0) &&
                              0 === (null != (l = e[r]) ? l.length : void 0) &&
                              i.debug
                                  ? p.push(console.log(n + ' reference not found'))
                                  : p.push(void 0))
                            : 'object' == typeof c
                            ? p.push(i.replace(c, t, s, a))
                            : p.push(void 0);
                return p;
            },
            extend: function (e, t) {
                var s, a, r, n, o, l;
                if ('object' == typeof e) {
                    for (s in ((r = []), e)) {
                        if (((l = e[s]), s === i.extendtoken && null != l[i.reftoken])) {
                            for (n in ((a = i.get_json_pointer(l[i.reftoken], e, t)), l))
                                (o = l[n]), n !== i.reftoken && (a[n] = o);
                            delete e[s];
                        }
                        'object' == typeof l ? r.push((l = i.extend(l))) : r.push(void 0);
                    }
                    return r;
                }
            },
            resolve: function (e, t) {
                var s;
                return (
                    (s = {}),
                    i.findIds(e, s),
                    i.debug && Object.keys(s).length && console.dir(s),
                    i.replace(e, s, e, t),
                    e
                );
            },
            evaluate: function (e, t, s) {
                var a, r, n;
                for (a in (null == s && (s = i.evaluateStr), (r = i.clone(e))))
                    'string' == typeof (n = r[a]) && (e[a] = s(n, t)),
                        'object' == typeof n && (e[a] = i.evaluate(n, t));
                return e;
            },
            evaluateStr: function (e, t) {
                if ('string' != typeof e) return e;
                if ('{' !== e[0] || '}' !== e[e.length - 1])
                    return e.replace(/(\{)(.*?)(\})/g, function (e, s, r) {
                        var n;
                        if (((n = ''), null == t || null == r)) return n;
                        if (null != t[r] && 'function' == typeof t[r]) n = t[r]();
                        else if (null != t[r]) n = t[r];
                        else {
                            try {
                                (r = r.replace(new RegExp('^' + i.pathtoken + '/'), '').replace(/\//g, '.')),
                                    (n = a.getter(r)(t));
                            } catch (e) {
                                (err = e), (n = '');
                            }
                            null == n && (n = '');
                        }
                        return i.evaluateStr(n, t), n;
                    });
                try {
                    return a.getter(e.replace(/^{/, '').replace(/}$/, ''))(t);
                } catch (e) {
                    return null;
                }
            },
        };
        var r = i,
            n = s('0e87');
        const o = {
                locale: 'en',
                rootDisplay: '',
                objectContainerClass: '',
                sectionsClass: 'pl-2 pt-2',
                sectionsTitlesClasses: ['title', 'subtitle-1', 'subtitle-2'],
                childrenClass: 'pr-2',
                fieldProps: {},
                fieldColProps: { cols: 12 },
                textFieldProps: {},
                textareaProps: { filled: !0 },
                numberProps: {},
                sliderProps: {},
                checkboxProps: {},
                switchProps: {},
                comboboxProps: {},
                selectProps: {},
                fileInputProps: {},
                radioGroupProps: {},
                radioItemProps: {},
                tabsProps: { grow: !0 },
                expansionPanelsProps: { mandatory: !0 },
                dialogProps: { maxWidth: 500 },
                dialogCardProps: {},
                colorPickerProps: {},
                timePickerProps: {},
                datePickerProps: { scrollable: !0 },
                arrayItemCardProps: { tile: !0 },
                arrayItemColProps: { cols: 12 },
                removeAdditionalProperties: !0,
                disableAll: !1,
                hideReadOnly: !1,
                deleteReadOnly: !1,
                filesAsDataUrl: !1,
                hideTooltips: !1,
                disableSorting: !1,
                context: {},
                rules: {},
                initialValidation: 'defined',
                idPrefix: '',
                markdownit: {},
            },
            l = {
                en: {
                    required: 'This information is required',
                    noData: 'No matching value found',
                    search: 'Search...',
                    minimum: 'Value must be more than {minimum}',
                    maximum: 'Value must be less than {maximum}',
                    minLength: '{minLength} characters minimum',
                    maxLength: '{maxLength} characters maximum',
                    minItems: 'No less than {minItems} items',
                    maxItems: 'No more than {maxItems} items',
                    pattern: 'The expected pattern is not satisfied',
                },
                fr: {
                    required: 'Cette information est obligatoire',
                    noData: 'Aucun élément correspondant',
                    search: 'Recherchez...',
                    minimum: 'La valeur doit être supérieure à {minimum}',
                    maximum: 'La valeur doit être inférieure à {maximum}',
                    minLength: '{minLength} caractères minimum',
                    maxLength: '{maxLength} caractères maximum',
                    minItems: 'Au moins {minItems} éléments',
                    maxItems: 'Au plus {maxItems} éléments',
                    pattern: "Le format attendu n'est pas respecté",
                },
                es: {
                    required: 'Esta información es requerida',
                    noData: 'No se encontraron valores coincidentes',
                    search: 'Buscar...',
                    minimum: 'El valor debe ser mayor que {minimum}',
                    maximum: 'El valor debe ser inferior a {maximum}',
                    minLength: '{minLength} caracteres mínimo',
                    maxLength: '{maxLength} caractères máximo',
                    minItems: 'Al menos {minItems} articulos',
                    maxItems: 'Hasta {maxItems} articulos',
                    pattern: 'El formato esperado no se respeta',
                },
                de: {
                    required: 'Diese Informationen sind erforderlich',
                    noData: 'Keine passenden Artikel',
                    search: 'Suche...',
                    minimum: 'Der Wert muss größer als {minimum} sein',
                    maximum: 'Der Wert muss kleiner als {maximum} sein',
                    minLength: 'Mindestens {minLength} Zeichen',
                    maxLength: 'Maximal {maxLength} Zeichen',
                    minItems: 'Mindestens {minItems} Elemente',
                    maxItems: 'Bis zu {maxItems} Artikel',
                    pattern: 'Das erwartete Format wird nicht eingehalten',
                },
                ar: {
                    required: 'هذه المعلومة مطلوبة',
                    noData: 'لم يتم العثور على قيمة',
                    search: 'جاري البحث...',
                    minimum: '{minimum} القيمة يجب أن تكون أكبر من',
                    maximum: '{maximum} القيمة يجب أن تكون أقل من',
                    minLength: '{minLength} الحد الأدنى للحروف المطلوبة هو',
                    maxLength: '{maxLength} الحد الأقصى للحروف المطلوبة هو',
                    minItems: 'قطع {minItems} لا يمكن اختيار أقل من ',
                    maxItems: 'قطع {maxItems} لا يمكن اختيار أكثر من ',
                    pattern: 'لا يوجد تشابه مع النموذج المطلوب',
                },
                tr: {
                    required: 'Zorunlu alan',
                    noData: 'Bilgi yok',
                    search: 'Arıyor...',
                    minimum: 'Değer {minimum} dan büyük olmalı',
                    maximum: 'Değer {maximum} dan küçük olmalı',
                    minLength: '{minLength} asgari karakter sayısı',
                    maxLength: '{maxLength} azami  karakter sayısı',
                    minItems: 'En az seçenek sayısı {minItems}',
                    maxItems: 'En çok seçenek sayısı {maxItems}',
                    pattern: 'İstenilen paten tutmuyor',
                },
                nl: {
                    required: 'Deze informatie is vereist',
                    noData: 'Geen overeenkomstig resultaat gevonden',
                    search: 'Zoeken...',
                    minimum: 'Waarde moet meer zijn dan {minimum}',
                    maximum: 'Waarde moet minder zijn dan {maximum}',
                    minLength: 'Minimaal {minLength} tekens',
                    maxLength: 'Maximaal {maxLength} tekens',
                    minItems: 'Minimaal {minItems} antwoorden',
                    maxItems: 'Maximaal {maxItems} antwoorden',
                    pattern: 'Invoer voldoet niet aan verwachte patroon',
                },
            },
            p = {
                time: (e, t) => {
                    const s = new Date(`${new Date().toISOString().split('T')[0]}T${e}`);
                    return new Date(s.getTime() + 6e4 * s.getTimezoneOffset()).toLocaleTimeString(t);
                },
                date: (e, t) => {
                    const s = new Date(e);
                    return new Date(s.getTime() + 6e4 * s.getTimezoneOffset()).toLocaleDateString(t);
                },
                'date-time': (e, t) => new Date(e).toLocaleString(t),
            },
            c = {
                mdi: {
                    calendar: 'mdi-calendar',
                    clock: 'mdi-clock',
                    info: 'mdi-information',
                    add: 'mdi-plus',
                    edit: 'mdi-pencil',
                    delete: 'mdi-delete',
                },
                md: { calendar: 'event', clock: 'clock', info: 'info', add: 'add', edit: 'create', delete: 'delete' },
                fa: {
                    calendar: 'fa-calendar',
                    clock: 'fa-clock',
                    info: 'fa-info',
                    add: 'fa-plus',
                    edit: 'fa-edit',
                    delete: 'fa-trash',
                },
            };
        var d = s('108d');
    },
    '56d7': function (e, t, s) {
        'use strict';
        s.r(t);
        var a = {};
        s.r(a),
            s.d(a, 'notify', function () {
                return P;
            }),
            s.d(a, 'swal', function () {
                return O;
            }),
            s.d(a, 'moment', function () {
                return y.a;
            }),
            s.d(a, 'storage', function () {
                return T;
            }),
            s.d(a, 'storageSync', function () {
                return j;
            }),
            s.d(a, 'lodash', function () {
                return k;
            }),
            s.d(a, 'shortid', function () {
                return I.a;
            }),
            s.d(a, 'tools', function () {
                return V;
            });
        var i = {};
        s.r(i),
            s.d(i, 'en', function () {
                return _;
            }),
            s.d(i, 'zh', function () {
                return H;
            });
        var r = {};
        s.r(r),
            s.d(r, 'json2html', function () {
                return A;
            });
        var n = {};
        s.r(n),
            s.d(n, 'getDrawingCanvas', function () {
                return N;
            }),
            s.d(n, 'saveDrawingCanvas', function () {
                return R;
            }),
            s.d(n, 'getDrawingCanvasForm', function () {
                return M;
            }),
            s.d(n, 'saveDrawingCanvasForm', function () {
                return B;
            });
        var o = {};
        s.r(o),
            s.d(o, 'generate', function () {
                return G;
            }),
            s.d(o, 'clone', function () {
                return J;
            }),
            s.d(o, 'getSchema', function () {
                return Y;
            }),
            s.d(o, 'getAttributes', function () {
                return X;
            });
        var l = {};
        s.r(l),
            s.d(l, 'toTag', function () {
                return ee;
            }),
            s.d(l, 'toData', function () {
                return te;
            }),
            s.d(l, 'toCompleteSchema', function () {
                return se;
            });
        var p = {};
        s.r(p),
            s.d(p, 'create', function () {
                return ie;
            });
        s('8e67');
        var c = s('8c1e'),
            d = { name: 'App', data: () => ({}) },
            u = s('b41a'),
            h = s('eb4c'),
            m = s.n(h),
            f = s('d0d2'),
            b = Object(u.a)(
                d,
                function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t('v-app', { attrs: { id: 'app' } }, [t('router-view')], 1);
                },
                [],
                !1,
                null,
                null,
                null
            ),
            g = b.exports;
        m()(b, { VApp: f.a });
        var v = s('951b'),
            x = (s('493b'), s('433f'), s('203d')),
            y = s.n(x),
            k = s('b2f5'),
            S = s('3c21'),
            I = s.n(S),
            w = s('262f');
        const O = s.n(w).a,
            P = {
                information: (e, t) =>
                    O.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 }),
                info(e) {
                    this.information(e, 'info');
                },
                error(e) {
                    this.information(e, 'error');
                },
                warning(e) {
                    this.information(e, 'warning');
                },
                success(e) {
                    this.information(e, 'success');
                },
                question(e) {
                    this.information(e, 'question');
                },
            };
        var C = s('118d'),
            $ = s.n(C);
        const T = {
                getItem: (e) =>
                    new Promise((t, s) => {
                        $.a
                            .getItem(e)
                            .then((e) => {
                                t(e);
                            })
                            .catch((e) => {
                                s(e);
                            });
                    }),
                setItem: (e, t) =>
                    new Promise((s, a) => {
                        $.a
                            .setItem(e, t)
                            .then((e) => {
                                s(e);
                            })
                            .catch((e) => {
                                a(e);
                            });
                    }),
                removeItem: (e) =>
                    new Promise((t, s) => {
                        $.a
                            .removeItem(e)
                            .then(() => {
                                t();
                            })
                            .catch((e) => {
                                s(e);
                            });
                    }),
                clear: () =>
                    new Promise((e, t) => {
                        $.a
                            .clear()
                            .then(() => {
                                e();
                            })
                            .catch((e) => {
                                t(e);
                            });
                    }),
                length: () =>
                    new Promise((e, t) => {
                        $.a
                            .length()
                            .then((t) => {
                                e(t);
                            })
                            .catch((e) => {
                                t(e);
                            });
                    }),
                key: (e) =>
                    new Promise((t, s) => {
                        $.a
                            .key(e)
                            .then((e) => {
                                t(e);
                            })
                            .catch((e) => {
                                s(e);
                            });
                    }),
                keys: () =>
                    new Promise((e, t) => {
                        $.a
                            .keys()
                            .then((t) => {
                                e(t);
                            })
                            .catch((e) => {
                                t(e);
                            });
                    }),
                iterate: () =>
                    new Promise((e, t) => {
                        $.a
                            .iterate((t, s, a) => {
                                e([t, s, a]);
                            })
                            .then((t) => {
                                e(t);
                            })
                            .catch((e) => {
                                t(e);
                            });
                    }),
                setDriver: (e) =>
                    new Promise((t, s) => {
                        t($.a.setDriver(e));
                    }),
                config: (e) =>
                    new Promise((t, s) => {
                        t($.a.config(e));
                    }),
                createInstance: (e) =>
                    new Promise((t, s) => {
                        t($.a.createInstance(e));
                    }),
            },
            j = {
                setObject(e, t) {
                    localStorage.setItem(e, JSON.stringify(t));
                },
                getObject(e) {
                    let t = localStorage.getItem(e);
                    return t ? JSON.parse(t) : null;
                },
                setItem(e, t) {
                    localStorage.setItem(e, t);
                },
                getItem: (e) => localStorage.getItem(e),
                removeItem(e) {
                    localStorage.removeItem(e);
                },
                clear() {
                    localStorage.clear();
                },
                isExist: (e) => !(!e || !(e in localStorage)),
            };
        var V = {
            array: {
                groupBy(e, t) {
                    const s = {};
                    return (
                        e.forEach(function (e) {
                            const a = t(e);
                            (s[a] = s[a] || []), s[a].push(e);
                        }),
                        Object.keys(s).map(function (e) {
                            return s[e];
                        })
                    );
                },
                sort: (e, t) =>
                    e.sort(function (e, s) {
                        var a = e[t],
                            i = s[t];
                        return a < i ? -1 : a > i ? 1 : 0;
                    }),
                find: (e, t, s) => e.find((e) => e[s] === t[s]),
                remove(e, t, s) {
                    const a = e.findIndex((e) => e[s] === t[s]);
                    return e.splice(a, 1), e;
                },
            },
            object: {
                isEmpty(e) {
                    if (e) {
                        let t = Object.keys(e);
                        return !(t && t.length > 0);
                    }
                    return !0;
                },
            },
        };
        y.a.locale('zh-cn');
        var H = {
            $vuetify: {
                badge: '徽章',
                close: '关闭',
                dataIterator: { noResultsText: '没有符合条件的结果', loadingText: '加载中……' },
                dataTable: {
                    itemsPerPageText: '每页数目：',
                    ariaLabel: {
                        sortDescending: '：降序排列。',
                        sortAscending: '：升序排列。',
                        sortNone: '：未排序。',
                        activateNone: '点击以移除排序。',
                        activateDescending: '点击以降序排列。',
                        activateAscending: '点击以升序排列。',
                    },
                    sortBy: '排序方式',
                },
                dataFooter: {
                    itemsPerPageText: '每页数目：',
                    itemsPerPageAll: '全部',
                    nextPage: '下一页',
                    prevPage: '上一页',
                    firstPage: '首页',
                    lastPage: '尾页',
                    pageText: '{0}-{1} 共 {2}',
                },
                datePicker: {
                    itemsSelected: '已选择 {0}',
                    nextMonthAriaLabel: '下个月',
                    nextYearAriaLabel: '明年',
                    prevMonthAriaLabel: '前一个月',
                    prevYearAriaLabel: '前一年',
                },
                noDataText: '没有数据',
                carousel: { prev: '上一张', next: '下一张', ariaLabel: { delimiter: 'Carousel slide {0} of {1}' } },
                calendar: { moreEvents: '还有 {0} 项' },
                fileInput: { counter: '{0} 个文件', counterSize: '{0} 个文件（共 {1}）' },
                timePicker: { am: 'AM', pm: 'PM' },
                pagination: {
                    ariaLabel: {
                        wrapper: '分页导航',
                        next: '下一页',
                        previous: '上一页',
                        page: '转到页面 {0}',
                        currentPage: '当前页 {0}',
                    },
                },
            },
        };
        var _ = {
            $vuetify: {
                badge: 'Badge',
                close: 'Close',
                dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
                dataTable: {
                    itemsPerPageText: 'Rows per page:',
                    ariaLabel: {
                        sortDescending: 'Sorted descending.',
                        sortAscending: 'Sorted ascending.',
                        sortNone: 'Not sorted.',
                        activateNone: 'Activate to remove sorting.',
                        activateDescending: 'Activate to sort descending.',
                        activateAscending: 'Activate to sort ascending.',
                    },
                    sortBy: 'Sort by',
                },
                dataFooter: {
                    itemsPerPageText: 'Items per page:',
                    itemsPerPageAll: 'All',
                    nextPage: 'Next page',
                    prevPage: 'Previous page',
                    firstPage: 'First page',
                    lastPage: 'Last page',
                    pageText: '{0}-{1} of {2}',
                },
                datePicker: {
                    itemsSelected: '{0} selected',
                    nextMonthAriaLabel: 'Next month',
                    nextYearAriaLabel: 'Next year',
                    prevMonthAriaLabel: 'Previous month',
                    prevYearAriaLabel: 'Previous year',
                },
                noDataText: 'No data available',
                carousel: {
                    prev: 'Previous visual',
                    next: 'Next visual',
                    ariaLabel: { delimiter: 'Carousel slide {0} of {1}' },
                },
                calendar: { moreEvents: '{0} more' },
                fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
                timePicker: { am: 'AM', pm: 'PM' },
                pagination: {
                    ariaLabel: {
                        wrapper: 'Pagination Navigation',
                        next: 'Next page',
                        previous: 'Previous page',
                        page: 'Goto Page {0}',
                        currentPage: 'Current Page, Page {0}',
                    },
                },
            },
        };
        class D {
            static get selfCloseTags() {
                return [
                    'area',
                    'base',
                    'br',
                    'col',
                    'embed',
                    'hr',
                    'img',
                    'input',
                    'link',
                    'meta',
                    'param',
                    'source',
                    'track',
                    'wbr',
                    'command',
                    'keygen',
                    'menuitem',
                ];
            }
            static build(e) {
                if (!e || !e.tag) return '';
                const t = L.attributes(e);
                if (L.isSelfCloseTag(e)) return `<${e.tag} ${t}/>`;
                const s = L.children(e);
                return `<${e.tag} ${t}>${s}</${e.tag}>`;
            }
            static unbuild(e) {
                if (!e) return {};
                const t = document.createElement('html');
                t.innerHTML = e;
                const s = t.querySelector('body');
                if (!s) return {};
                const [a] = s.children;
                return a ? E.node2json(a) : {};
            }
        }
        class L {
            static attributes(e) {
                if (!e.attributes) return '';
                let t = '';
                const s = Object.keys(e.attributes);
                for (const a in s) ({}.hasOwnProperty.call(s, a) && (t += ` ${s[a]}="${e.attributes[s[a]]}"`));
                return t;
            }
            static children(e) {
                if (!e.children) return '';
                let t = '';
                for (const s in e.children)
                    ({}.hasOwnProperty.call(e.children, s) &&
                        ('object' == typeof e.children[s] ? (t += D.build(e.children[s])) : (t += e.children[s])));
                return t;
            }
            static isSelfCloseTag(e) {
                return D.selfCloseTags.indexOf(e.tag) > -1;
            }
        }
        class E {
            static attributes(e) {
                const t = {},
                    s = Object.keys(e.attributes);
                for (const a in s)
                    if ({}.hasOwnProperty.call(s, a)) {
                        const i = s[a],
                            r = e.attributes[i];
                        t[r.name] = r.value;
                    }
                return t;
            }
            static children(e) {
                const t = [];
                for (const s in e.childNodes)
                    e.childNodes[s].nodeType === Node.ELEMENT_NODE && t.push(E.node2json(e.childNodes[s])),
                        e.childNodes[s].nodeType === Node.TEXT_NODE && t.push(e.childNodes[s].textContent);
                return t;
            }
            static node2json(e) {
                return { tag: e.tagName.toLowerCase(), attributes: E.attributes(e), children: E.children(e) };
            }
        }
        const A = D,
            F = { toJson: (e) => (e ? JSON.parse(e) : null), toInt: (e) => (e ? parseInt(e, 10) : 100) };
        function N() {
            if ('1.1' !== a.storageSync.getItem('DRAWING_CANVAS_VERSION'))
                return a.storageSync.setItem('DRAWING_CANVAS_VERSION', '1.1'), R([]), null;
            const e = a.storageSync.getItem('DRAWING_CANVAS');
            return F.toJson(e);
        }
        function R(e) {
            a.storageSync.setItem('DRAWING_CANVAS', JSON.stringify(e));
        }
        function M() {
            const e = a.storageSync.getItem('DRAWING_CANVAS_FORM');
            return F.toJson(e);
        }
        function B(e) {
            a.storageSync.setItem('DRAWING_CANVAS_FORM', JSON.stringify(e));
        }
        var z = {
            TEXT_FIELD: {
                index: 'TEXT_FIELD',
                schema: {
                    type: 'string',
                    title: '单行文本',
                    tag: 'v-text-field',
                    'x-props': { 'loader-height': 2, outlined: !0, type: 'text' },
                    'x-rules': '',
                },
            },
            TEXT_AREA: {
                index: 'TEXT_AREA',
                schema: {
                    type: 'string',
                    title: '多行文本',
                    tag: 'v-textarea',
                    'x-props': { 'loader-height': 2, outlined: !0, 'row-height': 24, rows: 2, type: 'text' },
                    'x-display': 'textarea',
                    'x-rules': '',
                },
            },
            SLIDER: {
                index: 'SLIDER',
                schema: {
                    type: 'integer',
                    title: '滑块',
                    tag: 'v-slider',
                    'x-props': { 'loader-height': 2, min: 0, max: 100, step: 1, 'thumb-size': 32, 'tick-size': 2 },
                    'x-display': 'slider',
                },
            },
            RANGE_SLIDER: {
                index: 'RANGE_SLIDER',
                schema: {
                    type: 'integer',
                    title: '范围滑块',
                    tag: 'v-range-slider',
                    'x-props': { 'loader-height': 2, min: 0, max: 100, step: 1, 'thumb-size': 32, 'tick-size': 2 },
                    'x-display': 'range-slider',
                },
            },
            CHECKBOX: {
                index: 'CHECKBOX',
                schema: { type: 'boolean', title: '复选框', tag: 'v-checkbox', 'x-props': {} },
            },
            SWITCHS: {
                index: 'SWITCHS',
                schema: { type: 'boolean', title: '开关', tag: 'v-switch', 'x-display': 'switch', 'x-props': {} },
            },
            DATE_PICKER: {
                index: 'DATE_PICKER',
                schema: {
                    type: 'string',
                    title: '日期选择',
                    tag: 'v-date-picker',
                    format: 'date',
                    'x-props': { 'first-day-of-week': 0, locale: 'zh-cn', type: 'date' },
                },
            },
            TIME_PICKER: {
                index: 'TIME_PICKER',
                schema: { type: 'string', title: '时间选择', tag: 'v-time-picker', format: 'time', 'x-props': {} },
            },
            SELECT_SINGLE: {
                index: 'SELECT_SINGLE',
                schema: {
                    type: 'string',
                    title: '单项下拉',
                    tag: 'v-select',
                    'x-props': { 'no-data-text': '没有可用选项', outlined: !0 },
                    enum: ['value 1', 'value 2'],
                },
            },
            COMBOBOX: {
                index: 'COMBOBOX',
                schema: {
                    type: 'array',
                    title: '组合框',
                    tag: 'v-combobox',
                    'x-props': { 'no-data-text': '没有可用选项', outlined: !0 },
                    items: { type: 'string' },
                },
            },
            SELECT_MULTIPLE: {
                index: 'SELECT_MULTIPLE',
                schema: {
                    type: 'array',
                    title: '多项下拉',
                    tag: 'v-select',
                    'x-display': 'icon',
                    'x-props': {},
                    items: {
                        type: 'string',
                        oneOf: [
                            { const: 'value1', title: 'Value 1' },
                            { const: 'value2', title: 'Value 2' },
                        ],
                    },
                },
            },
            COLOR_PICKER: {
                index: 'COLOR_PICKER',
                schema: {
                    type: 'string',
                    title: '颜色选择',
                    tag: 'v-color-picker',
                    format: 'hexcolor',
                    'x-props': { outlined: !0, 'hide-details': !0 },
                },
            },
            RADIO: {
                index: 'RADIO',
                schema: {
                    type: 'string',
                    title: '单选框组',
                    tag: 'v-radio-group',
                    'x-display': 'radio',
                    'x-props': {},
                    enum: ['value 1', 'value 2'],
                },
            },
            FILE_INPUT: {
                index: 'FILE_INPUT',
                schema: {
                    type: 'string',
                    title: '上传',
                    tag: 'v-file-input',
                    contentMediaType: 'image/png',
                    writeOnly: !0,
                    'x-props': {},
                },
            },
        };
        const q = [
                {
                    title: '输入型组件',
                    list: [
                        {
                            configs: {
                                title: z.TEXT_FIELD.schema.title,
                                icon: 'mdi-form-textbox',
                                name: 'TextField',
                                document: 'https://vuetifyjs.com/zh-Hans/components/text-fields/',
                                schema: z.TEXT_FIELD.index,
                            },
                        },
                        {
                            configs: {
                                title: z.TEXT_AREA.schema.title,
                                icon: 'mdi-form-textarea',
                                name: 'TextArea',
                                document: 'https://vuetifyjs.com/zh-Hans/components/textareas/',
                                schema: z.TEXT_AREA.index,
                            },
                        },
                    ],
                },
                {
                    title: '选择型组件',
                    list: [
                        {
                            configs: {
                                title: z.SLIDER.schema.title,
                                icon: 'mdi-tune-variant',
                                name: 'Slider',
                                document: 'https://vuetifyjs.com/zh-Hans/components/sliders/',
                                schema: z.SLIDER.index,
                            },
                        },
                        {
                            configs: {
                                title: z.RANGE_SLIDER.schema.title,
                                icon: 'mdi-valve-closed',
                                name: 'Range_Slider',
                                document: 'https://vuetifyjs.com/zh-Hans/components/sliders/',
                                schema: z.RANGE_SLIDER.index,
                            },
                        },
                        {
                            configs: {
                                title: z.CHECKBOX.schema.title,
                                icon: 'mdi-checkbox-marked',
                                name: 'Checkbox',
                                document: 'https://vuetifyjs.com/zh-Hans/components/checkboxes/',
                                schema: z.CHECKBOX.index,
                            },
                        },
                        {
                            configs: {
                                title: z.SWITCHS.schema.title,
                                icon: 'mdi-toggle-switch',
                                name: 'Switch',
                                document: 'https://vuetifyjs.com/zh-Hans/components/switches/',
                                schema: z.SWITCHS.index,
                            },
                        },
                        {
                            configs: {
                                title: z.DATE_PICKER.schema.title,
                                icon: 'mdi-calendar',
                                name: 'Date',
                                document: 'https://vuetifyjs.com/zh-Hans/components/date-pickers/',
                                schema: z.DATE_PICKER.index,
                            },
                        },
                        {
                            configs: {
                                title: z.TIME_PICKER.schema.title,
                                icon: 'mdi-clock-outline',
                                name: 'Time',
                                document: 'https://vuetifyjs.com/zh-Hans/components/time-pickers/',
                                schema: z.TIME_PICKER.index,
                            },
                        },
                        {
                            configs: {
                                title: z.SELECT_SINGLE.schema.title,
                                icon: 'mdi-form-dropdown',
                                name: 'Select',
                                document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
                                schema: z.SELECT_SINGLE.index,
                            },
                        },
                        {
                            configs: {
                                title: z.COMBOBOX.schema.title,
                                icon: 'mdi-vector-difference-ab',
                                name: 'Combobox',
                                document: 'https://vuetifyjs.com/zh-Hans/components/combobox/',
                                schema: z.COMBOBOX.index,
                            },
                        },
                        {
                            configs: {
                                title: z.RADIO.schema.title,
                                icon: 'mdi-checkbox-marked-circle',
                                name: 'Select',
                                document: 'https://vuetifyjs.com/zh-Hans/components/selection-controls/',
                                schema: z.RADIO.index,
                            },
                        },
                        {
                            configs: {
                                title: z.COLOR_PICKER.schema.title,
                                icon: 'mdi-calendar',
                                name: 'Select',
                                document: 'https://vuetifyjs.com/zh-Hans/components/color-pickers/',
                                schema: z.COLOR_PICKER.index,
                            },
                        },
                        {
                            configs: {
                                title: z.FILE_INPUT.schema.title,
                                icon: 'mdi-calendar',
                                name: 'Select',
                                document: 'https://vuetifyjs.com/zh-Hans/components/file-inputs/',
                                schema: z.FILE_INPUT.index,
                            },
                        },
                    ],
                },
                { title: '布局型组件', list: [] },
            ],
            K = {
                formRef: 'FormRef',
                formModel: 'formData',
                requestContentType: 'application/json',
                requestMethods: 'get',
                requestUrl: '',
                responseParam: 'data',
            };
        var W = {
            annotations: {
                xprops: 'x-props',
                xslots: 'x-slots',
                xrules: 'x-rules',
                xdisplay: 'x-display',
                xclass: 'x-class',
                xstyle: 'x-style',
                xoptions: 'x-options',
                xfromUrl: 'x-fromUrl',
                xfromData: 'x-fromData',
                xitemKey: 'x-itemKey',
                xitemTitle: 'x-itemTitle',
                xitemIcon: 'x-itemIcon',
            },
            tags: {
                AlignContent: 'align-content',
                AllowOverflow: 'allow-overflow',
                AutoSelectFirst: 'auto-select-first',
                AmpmInTitle: 'ampm-in-title',
                AppendIcon: 'append-icon',
                AppendOuterIcon: 'append-outer-icon',
                AutoGrow: 'auto-grow',
                BackgroundColor: 'background-color',
                CacheItems: 'cache-items',
                ClearIcon: 'clear-icon',
                DeletableChips: 'deletable-chips',
                DisableLookup: 'disable-lookup',
                FalseValue: 'false-value',
                FirstDayOfWeek: 'first-day-of-week',
                FullWidth: 'full-width',
                HeaderColor: 'header-color',
                HideDetails: 'hide-details',
                HideNoData: 'hide-no-data',
                HideSelected: 'hide-selected',
                IndeterminateIcon: 'indeterminate-icon',
                InverseLabel: 'inverse-label',
                ItemColor: 'item-color',
                ItemDisabled: 'item-disabled',
                ItemText: 'item-text',
                ItemValue: 'item-value',
                LazyValidation: 'lazy-validation',
                LoaderHeight: 'loader-height',
                LocaleFirstDayOfYear: 'locale-first-day-of-year',
                MenuProps: 'menu-props',
                NextIcon: 'next-icon',
                NextMonthAriaLabel: 'next-month-aria-label',
                NextYearAriaLabel: 'next-year-aria-label',
                NoDataText: 'no-data-text',
                NoGutters: 'no-gutters',
                NoFilter: 'no-filter',
                NoResize: 'no-resize',
                NoTitle: 'no-title',
                OffIcon: 'off-icon',
                OnIcon: 'on-icon',
                OpenOnClear: 'open-on-clear',
                PersistentHint: 'persistent-hint',
                PickerDate: 'picker-date',
                PrependIcon: 'prepend-icon',
                PrependInnerIcon: 'prepend-inner-icon',
                PrevIcon: 'prev-icon',
                PrevMonthAriaLabel: 'prev-month-aria-label',
                PrevYearAriaLabel: 'prev-year-aria-label',
                ReturnObject: 'return-object',
                RowHeight: 'row-height',
                SelectedItemsText: 'selected-items-text',
                ShowCurrent: 'show-current',
                ShowWeek: 'show-week',
                SingleLine: 'single-line',
                SmallChips: 'small-chips',
                SoloInverted: 'solo-inverted',
                ThumbColor: 'thumb-color',
                ThumbLabel: 'thumb-label',
                ThumbSize: 'thumb-size',
                TickSize: 'tick-size',
                TrackColor: 'track-color',
                TrackFillCcolor: 'track-fill-color',
                TrueValue: 'true-value',
                UseSeconds: 'use-seconds',
                ValidateOnBlur: 'validate-on-blur',
                YearIcon: 'year-icon',
            },
            class: { switch: 'mt-0 pt-0' },
            items: {
                contentType: [
                    { value: 'application/json', text: 'application/json（默认）' },
                    { value: 'application/x-www-form-urlencoded', text: 'application/x-www-form-urlencoded' },
                    { value: 'multipart/form-data', text: 'multipart/form-data' },
                    { value: 'text/xml', text: 'text/xml' },
                ],
                requestType: [
                    { value: 'get', text: 'GET' },
                    { value: 'post', text: 'POST' },
                    { value: 'put', text: 'PUT' },
                    { value: 'delete', text: 'DELETE' },
                    { value: 'head', text: 'HEAD' },
                    { value: 'patch', text: 'PATCH' },
                    { value: 'options', text: 'OPTIONS' },
                ],
                inputType: [
                    { value: 'text', text: '文字输入模式（默认）' },
                    { value: 'password', text: '密码模式' },
                    { value: 'number', text: '数字模式' },
                    { value: 'color', text: '选择颜色模式' },
                    { value: 'datetime-local', text: '选择日期时间模式' },
                    { value: 'time', text: '选择时间模式' },
                    { value: 'date', text: '选择日期模式' },
                    { value: 'week', text: '选择周模式' },
                    { value: 'month', text: '选择月模式' },
                ],
                dateType: [
                    { value: 'date', text: '日期模式（默认）' },
                    { value: 'month', text: '月模式' },
                ],
                timeType: [
                    { value: 'ampm', text: 'ampm（默认）' },
                    { value: '24hr', text: '24hr' },
                ],
            },
        };
        function U(e, t, s, i) {
            let r = { configs: {}, type: 'object', properties: {} };
            const n = t + '_' + a.shortid.generate();
            return (
                (r.configs.formId = n),
                (r.configs.renderKey = +new Date()),
                (r.configs.name = t),
                (r.configs.document = s),
                (r.configs.panel = i),
                (r.properties[n] = a.lodash.cloneDeep(e)),
                r
            );
        }
        function G(e) {
            return U(z[e.configs.schema].schema, e.configs.name, e.configs.document, z[e.configs.schema].index);
        }
        function J(e) {
            return U(Y(e, e.configs.formId), e.configs.name, e.configs.document, e.configs.panel);
        }
        function Y(e, t) {
            if (t) return e.properties[t];
            {
                let t = e.configs.formId;
                return e.properties[t];
            }
        }
        function X(e) {
            return !a.lodash.isEmpty(e) && a.lodash.has(e, W.annotations.xprops) ? e[W.annotations.xprops] : {};
        }
        function Z(e, t, s, a = !1) {
            let i = {};
            return (
                (i.tag = t.tag),
                (i.attributes = {}),
                (i.attributes['v-model'] = e.configs.formId),
                (i.attributes.label = t.title),
                a && ((i.attributes[':error-messages'] = 'errors'), (i.attributes.required = !0)),
                Object.assign(i.attributes, s),
                i
            );
        }
        function Q(e) {
            if (!a.lodash.isEmpty(e)) {
                let t = o.getSchema(e),
                    s = o.getAttributes(t),
                    i = {},
                    n = t['x-rules'];
                n
                    ? ((i.tag = 'validation-provider'),
                      (i.attributes = { 'v-slot': '{ errors }', name: e.configs.formId, rules: n }),
                      (i.children = [Z(e, t, s, !0)]))
                    : (i = Z(e, t, s));
                let l = r.json2html.build(i);
                return a.lodash.replace(l, /="true"/g, '');
            }
            return null;
        }
        function ee(e) {
            let t = a.lodash.map(e, Q);
            return a.lodash.isEmpty(t) ? '' : a.lodash.join(t, '\n' + '\t'.repeat(10));
        }
        function te(e) {
            let t = {};
            return (
                a.lodash.isEmpty(e) ||
                    e.map((e, s, a) => {
                        let i = e.configs.formId,
                            r = o.getSchema(e);
                        t[i] = (function (e) {
                            if (!e) return null;
                            switch (e.toLowerCase()) {
                                case 'string':
                                    return '';
                                case 'array':
                                    return [];
                                case 'object':
                                    return {};
                                case 'number':
                                    return 0;
                                case 'boolean':
                                    return !1;
                                default:
                                    return null;
                            }
                        })(r.type);
                    }),
                t
            );
        }
        function se(e) {
            const t = { type: 'object', properties: {} };
            return a.lodash.isEmpty(e)
                ? {}
                : (e.map((e, s, a) => {
                      let i = e.configs.formId,
                          r = o.getSchema(e);
                      t.properties[i] = r;
                  }),
                  t);
        }
        function ae(e) {
            return `<v-container fluid>\n        <v-row>\n            <v-col>\n                <v-card>\n                    <validation-observer ref="observer">\n                        <v-form ref="form">\n                            ${e}\n                        </v-form>\n                    </validation-observer>\n                </v-card>\n            </v-col>\n        </v-row>\n    </v-container>`;
        }
        function ie(e) {
            let t = ee(e),
                s = te(e);
            return {
                code: (function (e, t) {
                    return `<template>\n    ${ae(
                        e
                    )}\n</template>\n\n<script>\nexport default {\n    data: () => ({\n        ${t}\n    }),\n};\n<\/script>`;
                })(
                    t,
                    (function (e) {
                        let t = JSON.stringify(e);
                        (t = t.replace('{', '')), (t = t.replace('}', ''));
                        let s = new RegExp(',', 'g');
                        return (t = t.replace(s, ',\n' + '\t'.repeat(3))), t;
                    })(s)
                ),
                template: ae(t),
                data: s,
            };
        }
        var re = s('6fad'),
            ne = {
                name: 'HButton',
                props: {
                    btnClass: String,
                    color: String,
                    icon: Boolean,
                    iconName: String,
                    tooltip: String,
                    text: String,
                },
                methods: {
                    handleClick() {
                        this.$emit('click');
                    },
                },
            },
            oe = s('bc77'),
            le = s('c241'),
            pe = s('539d'),
            ce = Object(u.a)(
                ne,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-tooltip',
                        {
                            attrs: { bottom: '' },
                            scopedSlots: e._u([
                                {
                                    key: 'activator',
                                    fn: function (t) {
                                        var a = t.on;
                                        return [
                                            e.icon
                                                ? s(
                                                      'v-btn',
                                                      e._g(
                                                          {
                                                              attrs: { color: e.color, icon: e.icon },
                                                              on: {
                                                                  click: function (t) {
                                                                      return e.handleClick();
                                                                  },
                                                              },
                                                          },
                                                          a
                                                      ),
                                                      [s('v-icon', [e._v(e._s(e.iconName))])],
                                                      1
                                                  )
                                                : s(
                                                      'v-btn',
                                                      e._g(
                                                          {
                                                              attrs: { color: e.color },
                                                              on: {
                                                                  click: function (t) {
                                                                      return e.handleClick();
                                                                  },
                                                              },
                                                          },
                                                          a
                                                      ),
                                                      [e._v(' ' + e._s(e.text) + ' ')]
                                                  ),
                                        ];
                                    },
                                },
                            ]),
                        },
                        [s('span', [e._v(e._s(e.tooltip))])]
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            de = ce.exports;
        m()(ce, { VBtn: oe.a, VIcon: le.a, VTooltip: pe.a }),
            (de.install = function (e) {
                e.component(de.name, de);
            }),
            null != typeof window && window.Vue && de.install(window.Vue);
        var ue = {
                name: 'HCanvasContainer',
                components: { HButton: de },
                created() {},
                data: () => ({}),
                methods: {
                    empty() {
                        this.$emit('empty');
                    },
                },
            },
            he = s('6fc4'),
            me = s('3134'),
            fe = s('aa8c'),
            be = s('a4fc'),
            ge = s('5033'),
            ve = Object(u.a)(
                ue,
                function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t(
                        'v-container',
                        [
                            t(
                                'v-row',
                                [
                                    t(
                                        'v-col',
                                        { staticClass: 'canvas-body' },
                                        [
                                            t(
                                                'v-card',
                                                { staticClass: 'ml-1 mr-1' },
                                                [
                                                    t(
                                                        'v-toolbar',
                                                        { attrs: { dense: '', flat: '' } },
                                                        [
                                                            t('h-button', {
                                                                attrs: {
                                                                    icon: '',
                                                                    'icon-name': 'mdi-delete-empty',
                                                                    tooltip: '清空',
                                                                },
                                                                on: { click: this.empty },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                    this._t('default'),
                                                ],
                                                2
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            xe = ve.exports;
        m()(ve, { VCard: he.a, VCol: me.a, VContainer: fe.a, VRow: be.a, VToolbar: ge.a });
        var ye = s('206c').a,
            ke = Object(u.a)(ye, void 0, void 0, !1, null, null, null).exports,
            Se = s('b4bc'),
            Ie = s('c7b8'),
            we = s('5621'),
            Oe = s('fa36'),
            Pe = s('01b6'),
            Ce = s('948e'),
            $e = s('5020'),
            Te = s('d551'),
            je = s('3467'),
            Ve = s('7c01'),
            He = s('f7fa'),
            _e = s('d05f'),
            De = s('345a'),
            Le = s('f2b0'),
            Ee = s('ed3c'),
            Ae = s('4a21'),
            Fe = s('4b39'),
            Ne = s('fc9f'),
            Re = s('d81f'),
            Me = s('ae04'),
            Be = s('fb67'),
            ze = s('f03a'),
            qe = s('c5c2'),
            Ke = s('18a7'),
            We = s('ba84'),
            Ue = s('40ab'),
            Ge = s('ca40'),
            Je = s('f2e1'),
            Ye = s('333b'),
            Xe = s('81fa'),
            Ze = s('228e'),
            Qe = {
                name: 'HFormRenderer',
                components: {
                    VAvatar: Se.a,
                    VAutocomplete: Ie.a,
                    VBtn: oe.a,
                    VCard: he.a,
                    VCardActions: we.a,
                    VCardText: we.b,
                    VCardTitle: we.c,
                    VCheckbox: Oe.a,
                    VChip: Pe.a,
                    VColorPicker: Ce.a,
                    VCombobox: $e.a,
                    VContainer: fe.a,
                    VDatePicker: Te.a,
                    VDialog: je.a,
                    VExpansionPanels: Ve.a,
                    VExpansionPanel: He.a,
                    VExpansionPanelHeader: _e.a,
                    VExpansionPanelContent: De.a,
                    VCol: me.a,
                    VFileInput: Le.a,
                    VIcon: le.a,
                    VInput: Ee.a,
                    VRow: be.a,
                    VListItemContent: Ae.a,
                    VListItemTitle: Ae.c,
                    VMenu: Fe.a,
                    VRadio: Ne.a,
                    VRadioGroup: Re.a,
                    VRangeSlider: Me.a,
                    VSelect: Be.a,
                    VSlider: ze.a,
                    VSpacer: qe.a,
                    VSubheader: Ke.a,
                    VSwitch: We.a,
                    VTabs: Ue.a,
                    VTab: Ge.a,
                    VTabItem: Je.a,
                    VTextarea: Ye.a,
                    VTextField: Xe.a,
                    VTimePicker: Ze.a,
                    VTooltip: pe.a,
                },
                mixins: [ke],
            },
            et = Object(u.a)(Qe, void 0, void 0, !1, null, null, null).exports;
        (et.install = function (e) {
            e.component(et.name, et);
        }),
            null != typeof window && window.Vue && et.install(window.Vue);
        var tt = {
                name: 'HDraggableItem',
                components: { HFormRenderer: et },
                props: { schema: { type: Object, default: () => {} }, selectedItemId: [String, Number] },
                computed: {
                    isHover: () =>
                        function (e) {
                            return e ? 12 : 0;
                        },
                },
                data: () => ({ model: {}, isSelected: !1 }),
                watch: {
                    selectedItemId: {
                        handler(e, t) {
                            this.isSelected = this.schema.configs.renderKey === e;
                        },
                        immediate: !0,
                    },
                },
                methods: {
                    canvasItemSelect() {
                        (this.isSelected = !0), this.$emit('select', this.schema);
                    },
                    canvasItemCopy() {
                        this.$emit('copy', this.schema);
                    },
                    canvasItemDelete() {
                        this.$emit('delete', this.schema.configs.formId);
                    },
                },
            },
            st = s('61d9'),
            at = s('7db6'),
            it = s('e4a7'),
            rt = Object(u.a)(
                tt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s('v-hover', {
                        scopedSlots: e._u([
                            {
                                key: 'default',
                                fn: function (t) {
                                    var a = t.hover;
                                    return [
                                        s(
                                            'v-card',
                                            {
                                                class: [
                                                    'ma-2',
                                                    e.isSelected && !a ? 'canvas-item-selected' : 'canvas-item-body',
                                                ],
                                                attrs: { elevation: a ? 12 : 2, dense: '' },
                                                on: { click: e.canvasItemSelect },
                                            },
                                            [
                                                s(
                                                    'v-list-item',
                                                    [
                                                        s(
                                                            'v-list-item-content',
                                                            [
                                                                s('h-form-renderer', {
                                                                    attrs: { schema: e.schema },
                                                                    model: {
                                                                        value: e.model,
                                                                        callback: function (t) {
                                                                            e.model = t;
                                                                        },
                                                                        expression: 'model',
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                        e.isSelected
                                                            ? s(
                                                                  'v-list-item-action',
                                                                  { staticClass: 'justify-start' },
                                                                  [
                                                                      s(
                                                                          'v-btn',
                                                                          {
                                                                              attrs: { 'x-small': '', icon: '' },
                                                                              on: {
                                                                                  click: function (t) {
                                                                                      return (
                                                                                          t.stopPropagation(),
                                                                                          e.canvasItemCopy(t)
                                                                                      );
                                                                                  },
                                                                              },
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'v-icon',
                                                                                  { attrs: { color: 'primary' } },
                                                                                  [e._v('mdi-content-duplicate')]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                      s(
                                                                          'v-btn',
                                                                          {
                                                                              attrs: { 'x-small': '', icon: '' },
                                                                              on: {
                                                                                  click: function (t) {
                                                                                      return (
                                                                                          t.stopPropagation(),
                                                                                          e.canvasItemDelete(t)
                                                                                      );
                                                                                  },
                                                                              },
                                                                          },
                                                                          [
                                                                              s(
                                                                                  'v-icon',
                                                                                  { attrs: { color: 'error' } },
                                                                                  [e._v('mdi-close-box')]
                                                                              ),
                                                                          ],
                                                                          1
                                                                      ),
                                                                  ],
                                                                  1
                                                              )
                                                            : e._e(),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                    ];
                                },
                            },
                        ]),
                    });
                },
                [],
                !1,
                null,
                null,
                null
            ),
            nt = rt.exports;
        m()(rt, {
            VBtn: oe.a,
            VCard: he.a,
            VHover: st.a,
            VIcon: le.a,
            VListItem: at.a,
            VListItemAction: it.a,
            VListItemContent: Ae.a,
        });
        var ot = {
                name: 'HExpansionPanel',
                props: { index: { type: String, required: !0 }, header: { type: String, required: !0 } },
            },
            lt = s('1add'),
            pt = Object(u.a)(
                ot,
                function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t(
                        'v-expansion-panel',
                        { key: this.index },
                        [
                            t('v-expansion-panel-header', [this._v(this._s(this.header))]),
                            t(
                                'v-expansion-panel-content',
                                [t('v-list', { staticClass: 'ml-1 mr-1' }, [this._t('default')], 2)],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            ct = pt.exports;
        m()(pt, { VExpansionPanel: He.a, VExpansionPanelContent: De.a, VExpansionPanelHeader: _e.a, VList: lt.a });
        var dt = { name: 'HPanelTooltip', props: { content: { type: String, default: '' } } },
            ut = Object(u.a)(
                dt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return e.content
                        ? s(
                              'v-list-item-action',
                              [
                                  s(
                                      'v-tooltip',
                                      {
                                          attrs: { left: '', 'max-width': '200px' },
                                          scopedSlots: e._u(
                                              [
                                                  {
                                                      key: 'activator',
                                                      fn: function (t) {
                                                          var a = t.on,
                                                              i = t.attrs;
                                                          return [
                                                              s(
                                                                  'v-icon',
                                                                  e._g(
                                                                      e._b(
                                                                          {
                                                                              attrs: {
                                                                                  color: 'grey lighten-1',
                                                                                  dark: '',
                                                                              },
                                                                          },
                                                                          'v-icon',
                                                                          i,
                                                                          !1
                                                                      ),
                                                                      a
                                                                  ),
                                                                  [e._v('mdi-information')]
                                                              ),
                                                          ];
                                                      },
                                                  },
                                              ],
                                              null,
                                              !1,
                                              36085519
                                          ),
                                      },
                                      [s('span', [e._v(e._s(e.content))])]
                                  ),
                              ],
                              1
                          )
                        : e._e();
                },
                [],
                !1,
                null,
                null,
                null
            ),
            ht = ut.exports;
        m()(ut, { VIcon: le.a, VListItemAction: it.a, VTooltip: pe.a });
        var mt = {
                name: 'HPanelArray',
                components: { HPanelTooltip: ht },
                props: {
                    value: { type: Array, default: () => [] },
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                },
                data: () => ({ selectedValues: [] }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.selectedValues = e;
                        },
                        immediate: !0,
                    },
                    selectedValues: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            ft = Object(u.a)(
                mt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-combobox', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            items: e.selectedValues,
                                            label: e.label,
                                            disabled: e.disabled,
                                            chips: '',
                                            clearable: '',
                                            dense: '',
                                            'deletable-chips': '',
                                            'hide-no-data': '',
                                            'hide-details': '',
                                            multiple: '',
                                            outlined: '',
                                            'small-chips': '',
                                        },
                                        model: {
                                            value: e.selectedValues,
                                            callback: function (t) {
                                                e.selectedValues = t;
                                            },
                                            expression: 'selectedValues',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            bt = ft.exports;
        m()(ft, { VCombobox: $e.a, VListItem: at.a, VListItemContent: Ae.a });
        var gt = {
                name: 'HPanelColor',
                components: { HPanelTooltip: ht },
                props: {
                    value: { type: String, default: '#ffffff' },
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                },
                data: () => ({ color: '' }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.color = e;
                        },
                        immediate: !0,
                    },
                    color: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            vt =
                (s('2f7e'),
                Object(u.a)(
                    gt,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s(
                            'v-list-item',
                            { staticClass: 'pa-1', attrs: { dense: '' } },
                            [
                                s(
                                    'v-list-item-content',
                                    [
                                        s('v-text-field', {
                                            attrs: {
                                                label: e.label,
                                                disabled: e.disabled,
                                                outlined: '',
                                                dense: '',
                                                'hide-details': '',
                                                type: 'color',
                                            },
                                            model: {
                                                value: e.color,
                                                callback: function (t) {
                                                    e.color = t;
                                                },
                                                expression: 'color',
                                            },
                                        }),
                                    ],
                                    1
                                ),
                                s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                )),
            xt = vt.exports;
        m()(vt, { VListItem: at.a, VListItemContent: Ae.a, VTextField: Xe.a });
        var yt = s('87b6'),
            kt = {
                name: 'HIconList',
                props: {
                    value: String,
                    dense: { type: Boolean, default: !1 },
                    disabled: { type: Boolean, default: !1 },
                    itemHeight: { type: Number, default: 40 },
                },
                data: () => ({ isSelected: !1, icons: [], menu: !1, search: '' }),
                computed: {
                    filteredIcons() {
                        return this.icons.length && this.search
                            ? this.search
                                ? this.isSelected
                                    ? []
                                    : this.icons.filter((e) => e.toLowerCase().match(this.search.toLowerCase()))
                                : this.icons
                            : [];
                    },
                },
                watch: {
                    value: {
                        handler(e, t) {
                            e && a.lodash.startsWith(e, 'mdi-') ? (this.search = e.substring(4)) : (this.search = e);
                        },
                        immediate: !0,
                    },
                    search: {
                        handler(e, t) {
                            this.filteredIcons.length > 0 && !this.menu
                                ? (this.menu = !0)
                                : this.filteredIcons.length || (this.menu = !1),
                                e && !a.lodash.startsWith(e, 'mdi-')
                                    ? this.$emit('input', 'mdi-' + e)
                                    : this.$emit('input', e);
                        },
                    },
                },
                mounted() {
                    this.icons = Object.keys(yt).map((e) => a.lodash.kebabCase(e));
                },
                methods: {
                    select(e) {
                        (this.search = e.substring(4)), (this.isSelected = !0);
                    },
                    reset() {
                        (this.menu = !1), (this.isSelected = !1), (this.search = '');
                    },
                },
            },
            St = s('7d2d'),
            It = s('293e'),
            wt = Object(u.a)(
                kt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-menu',
                        {
                            attrs: {
                                bottom: '',
                                'close-on-content-click': '',
                                'open-on-click': e.filteredIcons.length > 0,
                                'offset-y': '',
                                rounded: 'b-xl',
                            },
                            scopedSlots: e._u([
                                {
                                    key: 'activator',
                                    fn: function (t) {
                                        var a = t.on,
                                            i = t.attrs;
                                        return [
                                            s(
                                                'v-text-field',
                                                e._g(
                                                    e._b(
                                                        {
                                                            attrs: {
                                                                dense: e.dense,
                                                                loading: !e.icons,
                                                                disabled: e.disabled,
                                                                'hide-details': '',
                                                                clearable: '',
                                                                outlined: '',
                                                                placeholder: '搜索图标 (e.g. account)',
                                                            },
                                                            on: { 'click:clear': e.reset },
                                                            scopedSlots: e._u(
                                                                [
                                                                    {
                                                                        key: 'prepend-inner',
                                                                        fn: function () {
                                                                            return [
                                                                                e.isSelected
                                                                                    ? s(
                                                                                          'v-icon',
                                                                                          {
                                                                                              attrs: {
                                                                                                  color: 'primary',
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                              e._v(
                                                                                                  ' mdi-' +
                                                                                                      e._s(e.search) +
                                                                                                      ' '
                                                                                              ),
                                                                                          ]
                                                                                      )
                                                                                    : e._e(),
                                                                                s(
                                                                                    'code',
                                                                                    { staticClass: 'mx-1 py-1' },
                                                                                    [e._v('mdi-')]
                                                                                ),
                                                                            ];
                                                                        },
                                                                        proxy: !0,
                                                                    },
                                                                ],
                                                                null,
                                                                !0
                                                            ),
                                                            model: {
                                                                value: e.search,
                                                                callback: function (t) {
                                                                    e.search = t;
                                                                },
                                                                expression: 'search',
                                                            },
                                                        },
                                                        'v-text-field',
                                                        i,
                                                        !1
                                                    ),
                                                    a
                                                )
                                            ),
                                        ];
                                    },
                                },
                            ]),
                            model: {
                                value: e.menu,
                                callback: function (t) {
                                    e.menu = t;
                                },
                                expression: 'menu',
                            },
                        },
                        [
                            s(
                                'v-list',
                                {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.filteredIcons.length > 0,
                                            expression: 'filteredIcons.length > 0',
                                        },
                                    ],
                                },
                                [
                                    s('v-virtual-scroll', {
                                        attrs: {
                                            items: e.filteredIcons,
                                            'item-height': e.itemHeight,
                                            height: Math.min(e.filteredIcons.length * e.itemHeight, 300),
                                        },
                                        scopedSlots: e._u([
                                            {
                                                key: 'default',
                                                fn: function (t) {
                                                    var a = t.item;
                                                    return [
                                                        s(
                                                            'v-list-item',
                                                            {
                                                                key: a,
                                                                attrs: { dense: e.dense },
                                                                on: {
                                                                    click: function (t) {
                                                                        return t.stopPropagation(), e.select(a);
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                s(
                                                                    'v-list-item-icon',
                                                                    [
                                                                        s('v-icon', {
                                                                            staticClass: 'mr-2',
                                                                            attrs: { color: 'primary' },
                                                                            domProps: { textContent: e._s(a) },
                                                                        }),
                                                                    ],
                                                                    1
                                                                ),
                                                                s(
                                                                    'v-list-item-content',
                                                                    [
                                                                        s('v-list-item-title', {
                                                                            domProps: {
                                                                                textContent: e._s(a.substring(4)),
                                                                            },
                                                                        }),
                                                                    ],
                                                                    1
                                                                ),
                                                                s(
                                                                    'v-btn',
                                                                    {
                                                                        attrs: { icon: '' },
                                                                        on: {
                                                                            click: function (t) {
                                                                                return t.stopPropagation(), e.select(a);
                                                                            },
                                                                        },
                                                                    },
                                                                    [
                                                                        s('v-icon', { attrs: { size: '20' } }, [
                                                                            e._v(' mdi-content-copy '),
                                                                        ]),
                                                                    ],
                                                                    1
                                                                ),
                                                            ],
                                                            1
                                                        ),
                                                    ];
                                                },
                                            },
                                        ]),
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Ot = wt.exports;
        m()(wt, {
            VBtn: oe.a,
            VIcon: le.a,
            VList: lt.a,
            VListItem: at.a,
            VListItemContent: Ae.a,
            VListItemIcon: St.a,
            VListItemTitle: Ae.c,
            VMenu: Fe.a,
            VTextField: Xe.a,
            VVirtualScroll: It.a,
        }),
            (Ot.install = function (e) {
                e.component(Ot.name, Ot);
            }),
            null != typeof window && window.Vue && Ot.install(window.Vue);
        var Pt = {
                name: 'HPanelIcon',
                components: { HIconList: Ot },
                props: {
                    value: { type: String },
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                },
                data: () => ({ icon: '' }),
                watch: {
                    value: {
                        handler(e, t) {
                            e && (this.icon = e);
                        },
                    },
                    icon: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            Ct = Object(u.a)(
                Pt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0 ml-1', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    e.label ? s('v-list-item-title', [e._v(e._s(e.label))]) : e._e(),
                                    s('h-icon-list', {
                                        attrs: { dense: '', disabled: e.disabled },
                                        model: {
                                            value: e.icon,
                                            callback: function (t) {
                                                e.icon = t;
                                            },
                                            expression: 'icon',
                                        },
                                    }),
                                ],
                                1
                            ),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      i = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      class: [e.label ? 'pt-3' : ''],
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  i,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v(' mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      1551774888
                                                  ),
                                              },
                                              [s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            $t = Ct.exports;
        m()(Ct, {
            VIcon: le.a,
            VListItem: at.a,
            VListItemAction: it.a,
            VListItemContent: Ae.a,
            VListItemTitle: Ae.c,
            VTooltip: pe.a,
        });
        var Tt = {
                name: 'HPanelNumber',
                components: { HPanelTooltip: ht },
                props: {
                    value: [Number, String],
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                    min: { type: [Number, String], default: 0 },
                    max: { type: [Number, String], default: 100 },
                    step: { type: [Number, String], default: 1 },
                },
                data: () => ({ numberValue: null }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.numberValue = e;
                        },
                        immediate: !0,
                    },
                    numberValue: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            jt = Object(u.a)(
                Tt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-text-field', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            min: e.min,
                                            max: e.max,
                                            step: e.step,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            type: 'number',
                                        },
                                        model: {
                                            value: e.numberValue,
                                            callback: function (t) {
                                                e.numberValue = t;
                                            },
                                            expression: 'numberValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Vt = jt.exports;
        m()(jt, { VListItem: at.a, VListItemContent: Ae.a, VTextField: Xe.a });
        var Ht = {
                name: 'HPanelSelect',
                components: { HPanelTooltip: ht },
                props: {
                    value: { required: !0 },
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                    items: { type: Array, default: () => [] },
                },
                data: () => ({ selectedValue: '' }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.selectedValue = e;
                        },
                        immediate: !0,
                    },
                    selectedValue: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            _t = Object(u.a)(
                Ht,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-select', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            items: e.items,
                                            label: e.label,
                                            disabled: e.disabled,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            clearable: '',
                                            'no-data-text': '空',
                                        },
                                        model: {
                                            value: e.selectedValue,
                                            callback: function (t) {
                                                e.selectedValue = t;
                                            },
                                            expression: 'selectedValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Dt = _t.exports;
        m()(_t, { VListItem: at.a, VListItemContent: Ae.a, VSelect: Be.a });
        var Lt = {
                name: 'HPanelSwitch',
                components: { HPanelTooltip: ht },
                props: {
                    value: Boolean,
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                    trueValue: { type: [String, Boolean, Array, Object], default: !0 },
                    falseValue: { type: [String, Boolean, Array, Object], default: !1 },
                },
                data: () => ({ checkedValue: !1 }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.checkedValue = e;
                        },
                        immediate: !0,
                    },
                    checkedValue: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            Et = Object(u.a)(
                Lt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-switch', {
                                        staticClass: 'mt-0 ml-2 pt-0',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            'true-value': e.trueValue,
                                            'false-value': e.falseValue,
                                            dense: '',
                                            inset: '',
                                            'hide-details': '',
                                        },
                                        model: {
                                            value: e.checkedValue,
                                            callback: function (t) {
                                                e.checkedValue = t;
                                            },
                                            expression: 'checkedValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            At = Et.exports;
        m()(Et, { VListItem: at.a, VListItemContent: Ae.a, VSwitch: We.a });
        var Ft = {
                name: 'HCombineBooleanInput',
                components: { HPanelTooltip: ht },
                props: {
                    value: [Boolean, String],
                    label: String,
                    tooltip: String,
                    disabled: { type: Boolean, default: !1 },
                    trueValue: { type: [String, Boolean, Array, Object], default: !0 },
                    falseValue: { type: [String, Boolean, Array, Object], default: !1 },
                },
                data: () => ({ content: null, isSwitch: !1 }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.content = e;
                        },
                    },
                    content: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            Nt = Object(u.a)(
                Ft,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    e.isSwitch
                                        ? s('v-switch', {
                                              staticClass: 'mt-0 ml-2 pt-0',
                                              attrs: {
                                                  value: e.content,
                                                  label: e.label,
                                                  disabled: e.disabled,
                                                  'true-value': e.trueValue,
                                                  'false-value': e.falseValue,
                                                  dense: '',
                                                  inset: '',
                                                  'hide-details': '',
                                              },
                                          })
                                        : s('v-text-field', {
                                              staticClass: 'ml-1 pr-2',
                                              attrs: {
                                                  value: e.content,
                                                  label: e.label,
                                                  disabled: e.disabled,
                                                  outlined: '',
                                                  dense: '',
                                                  'hide-details': '',
                                                  clearable: '',
                                              },
                                          }),
                                ],
                                1
                            ),
                            s(
                                'v-list-item-icon',
                                { staticClass: 'align-self-center' },
                                [
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { left: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            i = t.attrs;
                                                        return [
                                                            s(
                                                                'v-icon',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            on: {
                                                                                click: function (t) {
                                                                                    e.isSwitch = !e.isSwitch;
                                                                                },
                                                                            },
                                                                        },
                                                                        'v-icon',
                                                                        i,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [
                                                                    e._v(
                                                                        e._s(
                                                                            e.isSwitch
                                                                                ? 'mdi-form-textbox'
                                                                                : 'mdi-toggle-switch'
                                                                        )
                                                                    ),
                                                                ]
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [s('span', [e._v(e._s(e.isSwitch ? '切换为文本输入' : '切换为滑块输入'))])]
                                    ),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { staticClass: 'mr-1', attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Rt = Nt.exports;
        m()(Nt, {
            VIcon: le.a,
            VListItem: at.a,
            VListItemContent: Ae.a,
            VListItemIcon: St.a,
            VSwitch: We.a,
            VTextField: Xe.a,
            VTooltip: pe.a,
        });
        var Mt = {
                name: 'HPanelTextField',
                components: { HPanelTooltip: ht },
                props: { value: String, label: String, tooltip: String, disabled: { type: Boolean, default: !1 } },
                data: () => ({ inputValue: '' }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.inputValue = e;
                        },
                        immediate: !0,
                    },
                    inputValue: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                },
            },
            Bt = Object(u.a)(
                Mt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                [
                                    s('v-text-field', {
                                        staticClass: 'ml-1 pr-2',
                                        attrs: {
                                            label: e.label,
                                            disabled: e.disabled,
                                            outlined: '',
                                            dense: '',
                                            'hide-details': '',
                                            clearable: '',
                                        },
                                        model: {
                                            value: e.inputValue,
                                            callback: function (t) {
                                                e.inputValue = t;
                                            },
                                            expression: 'inputValue',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-panel-tooltip', { attrs: { content: e.tooltip } }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            zt = Bt.exports;
        m()(Bt, { VListItem: at.a, VListItemContent: Ae.a, VTextField: Xe.a });
        var qt = {
                name: 'HCheckboxPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            Kt = Object(u.a)(
                qt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'False Value : 设置假值',
                                            tooltip: '设置Checkbox未被勾选时的值',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.FalseValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FalseValue, t);
                                            },
                                            expression: 'properties[constants.tags.FalseValue]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'True Value : 设置真值', tooltip: '设置Checkbox被勾选时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrueValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrueValue, t);
                                            },
                                            expression: 'properties[constants.tags.TrueValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Off Icon', tooltip: '未被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OffIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OffIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OffIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'On Icon', tooltip: '被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OnIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OnIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OnIcon]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Indeterminate : 不确定状态',
                                            tooltip: '为复选框设置不确定状态',
                                        },
                                        model: {
                                            value: e.properties.indeterminate,
                                            callback: function (t) {
                                                e.$set(e.properties, 'indeterminate', t);
                                            },
                                            expression: 'properties.indeterminate',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Indeterminate Icon',
                                            tooltip: '处于不确定状态时使用的图标',
                                            disabled: !e.properties.indeterminate,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.IndeterminateIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.IndeterminateIcon, t);
                                            },
                                            expression: 'properties[constants.tags.IndeterminateIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Wt = Kt.exports;
        m()(Kt, { VExpansionPanels: Ve.a });
        var Ut = {
                name: 'HComboBoxPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelArray: bt,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                    isNumberType() {
                        return 'number' === this.properties.type;
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            Gt = Object(u.a)(
                Ut,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Allow Over flow', tooltip: '允许菜单溢出屏幕' },
                                        model: {
                                            value: e.properties[e.constants.tags.AllowOverflow],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AllowOverflow, t);
                                            },
                                            expression: 'properties[constants.tags.AllowOverflow]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Chips : 纸片显示',
                                            tooltip: '改变一个已选择项为小纸片（chips）的显示方式',
                                        },
                                        model: {
                                            value: e.properties.chips,
                                            callback: function (t) {
                                                e.$set(e.properties, 'chips', t);
                                            },
                                            expression: 'properties.chips',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Deletable Chips',
                                            tooltip: '添加一个去除图标的到选定的小纸片（chips）',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.DeletableChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DeletableChips, t);
                                            },
                                            expression: 'properties[constants.tags.DeletableChips]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Small Chips : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SmallChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SmallChips, t);
                                            },
                                            expression: 'properties[constants.tags.SmallChips]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Selected', tooltip: '不要在选择菜单中显示已选择的项' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideSelected],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideSelected, t);
                                            },
                                            expression: 'properties[constants.tags.HideSelected]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'No Data Text', tooltip: '当没有数据时显示的文本' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoDataText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoDataText, t);
                                            },
                                            expression: 'properties[constants.tags.NoDataText]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Select First', tooltip: '搜索时，总是选中第一个选项' },
                                        model: {
                                            value: e.properties[e.constants.tags.AutoSelectFirst],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AutoSelectFirst, t);
                                            },
                                            expression: 'properties[constants.tags.AutoSelectFirst]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    s('h-panel-array', {
                                        attrs: {
                                            label: 'Delimiters',
                                            tooltip:
                                                '接受将在键入时触发新标记的字符串数组。不替换正常的 Tab 和 Enter keys。',
                                        },
                                        model: {
                                            value: e.properties.delimiters,
                                            callback: function (t) {
                                                e.$set(e.properties, 'delimiters', t);
                                            },
                                            expression: 'properties.delimiters',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Cache Items',
                                            tooltip: '保留已经通过 items 属性的项在本地的唯一副本',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.CacheItems],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.CacheItems, t);
                                            },
                                            expression: 'properties[constants.tags.CacheItems]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disable Lookup', tooltip: '禁用键盘查询' },
                                        model: {
                                            value: e.properties[e.constants.tags.DisableLookup],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DisableLookup, t);
                                            },
                                            expression: 'properties[constants.tags.DisableLookup]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Eager',
                                            tooltip:
                                                '将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的。',
                                        },
                                        model: {
                                            value: e.properties.eager,
                                            callback: function (t) {
                                                e.$set(e.properties, 'eager', t);
                                            },
                                            expression: 'properties.eager',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Hide No Data',
                                            tooltip:
                                                '当没有要显示的选项时，隐藏菜单。用于防止在异步获取结果之前打开菜单。也有打开菜单的效果，当“ items 数组改变，如果还没有打开。',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.HideNoData],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideNoData, t);
                                            },
                                            expression: 'properties[constants.tags.HideNoData]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'NoFilter',
                                            tooltip: '搜索时不要应用过滤。在过滤服务器端数据时非常有用',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.NoFilter],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoFilter, t);
                                            },
                                            expression: 'properties[constants.tags.NoFilter]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Return Object',
                                            tooltip: '将选择器的行为更改为直接返回对象，而不是 item-value 指定的值',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ReturnObject],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ReturnObject, t);
                                            },
                                            expression: 'properties[constants.tags.ReturnObject]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: { label: 'Item Color : Item颜色', tooltip: '设置选中项目的颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemColor, t);
                                            },
                                            expression: 'properties[constants.tags.ItemColor]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Disabled', tooltip: '禁用 items 的属性值' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemDisabled],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemDisabled, t);
                                            },
                                            expression: 'properties[constants.tags.ItemDisabled]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Text', tooltip: "设置items'属性的文本值" },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemText, t);
                                            },
                                            expression: 'properties[constants.tags.ItemText]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Item Value',
                                            tooltip:
                                                '设置 items 的值的属性 - 必须是 primitive。支持点符号。注意： 目前不支持 v-combobox GitHub问题',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemValue, t);
                                            },
                                            expression: 'properties[constants.tags.ItemValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Open On Clear',
                                            tooltip:
                                                '当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.OpenOnClear],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OpenOnClear, t);
                                            },
                                            expression: 'properties[constants.tags.OpenOnClear]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.constants.items.inputType,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Jt = Gt.exports;
        m()(Gt, { VExpansionPanels: Ve.a });
        var Yt = {
                name: 'HDatePickerPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            Xt = Object(u.a)(
                Yt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Elevation : 阴影',
                                            min: '0',
                                            max: '24',
                                            tooltip: '组件的海拔可接受 0 到 24 之间的值。',
                                            disabled: e.properties.flat,
                                        },
                                        model: {
                                            value: e.properties.elevation,
                                            callback: function (t) {
                                                e.$set(e.properties, 'elevation', t);
                                            },
                                            expression: 'properties.elevation',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除添加到元素的标高（阴影）' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Landscape : 水平方向', tooltip: '水平方向选择器' },
                                        model: {
                                            value: e.properties.landscape,
                                            callback: function (t) {
                                                e.$set(e.properties, 'landscape', t);
                                            },
                                            expression: 'properties.landscape',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Title', tooltip: '隐藏选择器标题' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoTitle, t);
                                            },
                                            expression: 'properties[constants.tags.NoTitle]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Width : 选择器宽度',
                                            min: '1',
                                            max: '1024',
                                            step: '2',
                                            tooltip: '选择器宽度',
                                        },
                                        model: {
                                            value: e.properties.width,
                                            callback: function (t) {
                                                e.$set(e.properties, 'width', t);
                                            },
                                            expression: 'properties.width',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Selected Items Text : 所选日期文本',
                                            tooltip:
                                                '使用 multiple 属性时用于翻译所选日期数的文本。 也可以在 Internationalization 中进行全局定制',
                                            disabled: !e.properties.multiple,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SelectedItemsText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SelectedItemsText, t);
                                            },
                                            expression: 'properties[constants.tags.SelectedItemsText]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Range', tooltip: '允许选择日期范围' },
                                        model: {
                                            value: e.properties.range,
                                            callback: function (t) {
                                                e.$set(e.properties, 'range', t);
                                            },
                                            expression: 'properties.range',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reactive', tooltip: '自动更改 月份/年份 时更新选择器模型' },
                                        model: {
                                            value: e.properties.reactive,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reactive', t);
                                            },
                                            expression: 'properties.reactive',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Scrollable : 滚动',
                                            tooltip: '允许通过鼠标滚动更改显示的月份',
                                        },
                                        model: {
                                            value: e.properties.scrollable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'scrollable', t);
                                            },
                                            expression: 'properties.scrollable',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: { label: 'Prev Icon', tooltip: '设置上一个 月/年 按钮的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrevIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Next Icon', tooltip: '设置下一个 月/年 按钮的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextIcon, t);
                                            },
                                            expression: 'properties[constants.tags.NextIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Year Icon', tooltip: '设置年份选择按钮中的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.YearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.YearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.YearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'First Day Of Week : 周的起始天',
                                            min: '0',
                                            max: '6',
                                            tooltip: '设置一周的第一天，从周日的 0 开始。',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.FirstDayOfWeek],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FirstDayOfWeek, t);
                                            },
                                            expression: 'properties[constants.tags.FirstDayOfWeek]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Locale First Day Of Year',
                                            min: '0',
                                            max: '6',
                                            tooltip:
                                                '设置决定一年中第一周的日期，从 0 开始，星期日。对于 ISO 8601，应该是 4。',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LocaleFirstDayOfYear],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LocaleFirstDayOfYear, t);
                                            },
                                            expression: 'properties[constants.tags.LocaleFirstDayOfYear]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Max', tooltip: '允许的最大 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Min', tooltip: '允许的最小 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Picker Date', tooltip: '显示 年/月' },
                                        model: {
                                            value: e.properties[e.constants.tags.PickerDate],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PickerDate, t);
                                            },
                                            expression: 'properties[constants.tags.PickerDate]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prev Month Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevMonthAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevMonthAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.PrevMonthAriaLabel]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prev Year Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.PrevYearAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrevYearAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.PrevYearAriaLabel]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Next Month Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextMonthAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextMonthAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.NextMonthAriaLabel]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Next Year Aria Label' },
                                        model: {
                                            value: e.properties[e.constants.tags.NextYearAriaLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NextYearAriaLabel, t);
                                            },
                                            expression: 'properties[constants.tags.NextYearAriaLabel]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Show Current : 显示为当前日期',
                                            tooltip:
                                                '切换当前 日期/月份 大纲的可见性或将提供的 日期/月份 显示为当前日期',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ShowCurrent],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ShowCurrent, t);
                                            },
                                            expression: 'properties[constants.tags.ShowCurrent]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Show Week : 显示星期',
                                            tooltip: '切换日历正文中星期几的可见性',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ShowWeek],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ShowWeek, t);
                                            },
                                            expression: 'properties[constants.tags.ShowWeek]',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.constants.items.dateType,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Header Color : 标题颜色',
                                            tooltip:
                                                '定义标题颜色。如果未指定，将使用由 color 属性或默认选择器颜色定义的颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.HeaderColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HeaderColor, t);
                                            },
                                            expression: 'properties[constants.tags.HeaderColor]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Zt = Xt.exports;
        m()(Xt, { VExpansionPanels: Ve.a });
        var Qt = {
                name: 'HFormPanel',
                components: { HExpansionPanel: ct, HPanelSelect: Dt, HPanelTextField: zt },
                props: { schema: { type: Object, default: () => {} } },
                data: () => ({ constants: W, formSettings: {} }),
                watch: {
                    schema: {
                        handler(e, t) {
                            this.formSettings = e;
                        },
                        immediate: !0,
                    },
                },
            },
            es = Object(u.a)(
                Qt,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'request', header: '请求' } },
                                [
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Content Type: 输入类型',
                                            tooltip: '设置不同的Content Type类型',
                                            items: e.constants.items.contentType,
                                        },
                                        model: {
                                            value: e.formSettings.contentType,
                                            callback: function (t) {
                                                e.$set(e.formSettings, 'contentType', t);
                                            },
                                            expression: 'formSettings.contentType',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Content Type: 输入类型',
                                            tooltip: '设置不同的Content Type类型',
                                            items: e.constants.items.requestType,
                                        },
                                        model: {
                                            value: e.formSettings.requestMethods,
                                            callback: function (t) {
                                                e.$set(e.formSettings, 'requestMethods', t);
                                            },
                                            expression: 'formSettings.requestMethods',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: '请求地址', tooltip: '发送请求的Url地址' },
                                        model: {
                                            value: e.formSettings.requestUrl,
                                            callback: function (t) {
                                                e.$set(e.formSettings, 'requestUrl', t);
                                            },
                                            expression: 'formSettings.requestUrl',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: '响应参数',
                                            tooltip: '指定从请求响应结果中获取值的参数，例如 data',
                                        },
                                        model: {
                                            value: e.formSettings.responseParam,
                                            callback: function (t) {
                                                e.$set(e.formSettings, 'responseParam', t);
                                            },
                                            expression: 'formSettings.responseParam',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            ts = es.exports;
        m()(es, { VExpansionPanels: Ve.a });
        var ss = {
                name: 'HRangeSliderPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelArray: bt,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSwitch: At,
                    HPanelSwitchTextField: Rt,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            as = Object(u.a)(
                ss,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Inverse Label : 反转标签位置',
                                            tooltip: '使用 rtl 反转标签位置',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.InverseLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.InverseLabel, t);
                                            },
                                            expression: 'properties[constants.tags.InverseLabel]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Vertical : 垂直', tooltip: '将滑块方向切换为垂直方向' },
                                        model: {
                                            value: e.properties.vertical,
                                            callback: function (t) {
                                                e.$set(e.properties, 'vertical', t);
                                            },
                                            expression: 'properties.vertical',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'thumb', header: '缩略图标签' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Thumb Color : 缩略图颜色',
                                            tooltip: '设置缩略图和缩略图标签颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbColor, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbColor]',
                                        },
                                    }),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Thumb Label : 缩略图标签',
                                            tooltip:
                                                "显示缩略图标签。如果 true，使用滑块时将显示缩略图标签。如果设置为 'always' ，它总是显示缩略图标签",
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbLabel, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbLabel]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Thumb Size : 缩略图大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbSize, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'tick', header: '刻度线' } },
                                [
                                    s('h-panel-array', {
                                        attrs: { label: 'Tick Labels : 刻度线标签', tooltip: '按回车添加多个标签' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickLabels],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickLabels, t);
                                            },
                                            expression: 'properties[constants.tags.TickLabels]',
                                        },
                                    }),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Ticks : 刻度线',
                                            tooltip:
                                                "显示刻度线。如果 true，使用滑块时将显示刻度线。如果设置为 'always' ，它总是显示刻度线。",
                                        },
                                        model: {
                                            value: e.properties.ticks,
                                            callback: function (t) {
                                                e.$set(e.properties, 'ticks', t);
                                            },
                                            expression: 'properties.ticks',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Tick Size : 刻度线大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickSize, t);
                                            },
                                            expression: 'properties[constants.tags.TickSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: { label: 'Track Color : 轨道颜色', tooltip: '设置滑块轨道颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Track Fill Color : 轨道填充颜色',
                                            tooltip: '设置滑块轨道填充颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackFillColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackFillColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackFillColor]',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            is = as.exports;
        m()(as, { VExpansionPanels: Ve.a });
        var rs = {
                name: 'HSingleSelectPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                    isNumberType() {
                        return 'number' === this.properties.type;
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            ns = Object(u.a)(
                rs,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Chips : 纸片显示',
                                            tooltip: '改变一个已选择项为小纸片（chips）的显示方式',
                                        },
                                        model: {
                                            value: e.properties.chips,
                                            callback: function (t) {
                                                e.$set(e.properties, 'chips', t);
                                            },
                                            expression: 'properties.chips',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Deletable Chips',
                                            tooltip: '添加一个去除图标的到选定的小纸片（chips）',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.DeletableChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DeletableChips, t);
                                            },
                                            expression: 'properties[constants.tags.DeletableChips]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Small Chips : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SmallChips],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SmallChips, t);
                                            },
                                            expression: 'properties[constants.tags.SmallChips]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Selected', tooltip: '不要在选择菜单中显示已选择的项' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideSelected],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideSelected, t);
                                            },
                                            expression: 'properties[constants.tags.HideSelected]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'No Data Text', tooltip: '当没有数据时显示的文本' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoDataText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoDataText, t);
                                            },
                                            expression: 'properties[constants.tags.NoDataText]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Cache Items',
                                            tooltip: '保留已经通过 items 属性的项在本地的唯一副本',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.CacheItems],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.CacheItems, t);
                                            },
                                            expression: 'properties[constants.tags.CacheItems]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disable Lookup', tooltip: '禁用键盘查询' },
                                        model: {
                                            value: e.properties[e.constants.tags.DisableLookup],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.DisableLookup, t);
                                            },
                                            expression: 'properties[constants.tags.DisableLookup]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Eager',
                                            tooltip:
                                                '将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的。',
                                        },
                                        model: {
                                            value: e.properties.eager,
                                            callback: function (t) {
                                                e.$set(e.properties, 'eager', t);
                                            },
                                            expression: 'properties.eager',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Return Object',
                                            tooltip: '将选择器的行为更改为直接返回对象，而不是 item-value 指定的值',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ReturnObject],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ReturnObject, t);
                                            },
                                            expression: 'properties[constants.tags.ReturnObject]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: { label: 'Item Color : Item颜色', tooltip: '设置选中项目的颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemColor, t);
                                            },
                                            expression: 'properties[constants.tags.ItemColor]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Disabled', tooltip: '禁用 items 的属性值' },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemDisabled],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemDisabled, t);
                                            },
                                            expression: 'properties[constants.tags.ItemDisabled]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Item Text', tooltip: "设置items'属性的文本值" },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemText],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemText, t);
                                            },
                                            expression: 'properties[constants.tags.ItemText]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Item Value',
                                            tooltip:
                                                '设置 items 的值的属性 - 必须是 primitive。支持点符号。注意： 目前不支持 v-combobox GitHub问题',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ItemValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ItemValue, t);
                                            },
                                            expression: 'properties[constants.tags.ItemValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Open On Clear',
                                            tooltip:
                                                '当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.OpenOnClear],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OpenOnClear, t);
                                            },
                                            expression: 'properties[constants.tags.OpenOnClear]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.constants.items.inputType,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            os = ns.exports;
        m()(ns, { VExpansionPanels: Ve.a });
        var ls = {
                name: 'HSliderPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelArray: bt,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSwitch: At,
                    HPanelSwitchTextField: Rt,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            ps = Object(u.a)(
                ls,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Inverse Label : 反转标签位置',
                                            tooltip: '使用 rtl 反转标签位置',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.InverseLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.InverseLabel, t);
                                            },
                                            expression: 'properties[constants.tags.InverseLabel]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Vertical : 垂直', tooltip: '将滑块方向切换为垂直方向' },
                                        model: {
                                            value: e.properties.vertical,
                                            callback: function (t) {
                                                e.$set(e.properties, 'vertical', t);
                                            },
                                            expression: 'properties.vertical',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'thumb', header: '缩略图标签' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Thumb Color : 缩略图颜色',
                                            tooltip: '设置缩略图和缩略图标签颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbColor, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbColor]',
                                        },
                                    }),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Thumb Label : 缩略图标签',
                                            tooltip:
                                                "显示缩略图标签。如果 true，使用滑块时将显示缩略图标签。如果设置为 'always' ，它总是显示缩略图标签",
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbLabel],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbLabel, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbLabel]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Thumb Size : 缩略图大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.ThumbSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ThumbSize, t);
                                            },
                                            expression: 'properties[constants.tags.ThumbSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'tick', header: '刻度线' } },
                                [
                                    s('h-panel-array', {
                                        attrs: { label: 'Tick Labels : 刻度线标签', tooltip: '按回车添加多个标签' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickLabels],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickLabels, t);
                                            },
                                            expression: 'properties[constants.tags.TickLabels]',
                                        },
                                    }),
                                    s('h-panel-switch-text-field', {
                                        attrs: {
                                            label: 'Ticks : 刻度线',
                                            tooltip:
                                                "显示刻度线。如果 true，使用滑块时将显示刻度线。如果设置为 'always' ，它总是显示刻度线。",
                                        },
                                        model: {
                                            value: e.properties.ticks,
                                            callback: function (t) {
                                                e.$set(e.properties, 'ticks', t);
                                            },
                                            expression: 'properties.ticks',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Tick Size : 刻度线大小', min: '1', max: '100', step: '1' },
                                        model: {
                                            value: e.properties[e.constants.tags.TickSize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TickSize, t);
                                            },
                                            expression: 'properties[constants.tags.TickSize]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: { label: 'Track Color : 轨道颜色', tooltip: '设置滑块轨道颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Track Fill Color : 轨道填充颜色',
                                            tooltip: '设置滑块轨道填充颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.TrackFillColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrackFillColor, t);
                                            },
                                            expression: 'properties[constants.tags.TrackFillColor]',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            cs = ps.exports;
        m()(ps, { VExpansionPanels: Ve.a });
        var ds = {
                name: 'HSwitchPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            us = Object(u.a)(
                ds,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除组件的阴影。' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Inset : 扩展', tooltip: '扩展 v-switch 开关以包含缩略图' },
                                        model: {
                                            value: e.properties.inset,
                                            callback: function (t) {
                                                e.$set(e.properties, 'inset', t);
                                            },
                                            expression: 'properties.inset',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Multiple : 多选', tooltip: '将预期模型更改为数组' },
                                        model: {
                                            value: e.properties.multiple,
                                            callback: function (t) {
                                                e.$set(e.properties, 'multiple', t);
                                            },
                                            expression: 'properties.multiple',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'False Value : 设置假值', tooltip: '设置Switch关闭时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.FalseValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FalseValue, t);
                                            },
                                            expression: 'properties[constants.tags.FalseValue]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'True Value : 设置真值', tooltip: '设置Switch开启时的值' },
                                        model: {
                                            value: e.properties[e.constants.tags.TrueValue],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.TrueValue, t);
                                            },
                                            expression: 'properties[constants.tags.TrueValue]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'Off Icon', tooltip: '未被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OffIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OffIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OffIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: { label: 'On Icon', tooltip: '被勾选时使用的图标' },
                                        model: {
                                            value: e.properties[e.constants.tags.OnIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.OnIcon, t);
                                            },
                                            expression: 'properties[constants.tags.OnIcon]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: {
                                            label: 'Indeterminate : 不确定状态',
                                            tooltip: '为复选框设置不确定状态',
                                        },
                                        model: {
                                            value: e.properties.indeterminate,
                                            callback: function (t) {
                                                e.$set(e.properties, 'indeterminate', t);
                                            },
                                            expression: 'properties.indeterminate',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Indeterminate Icon',
                                            tooltip: '处于不确定状态时使用的图标',
                                            disabled: !e.properties.indeterminate,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.IndeterminateIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.IndeterminateIcon, t);
                                            },
                                            expression: 'properties[constants.tags.IndeterminateIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            hs = us.exports;
        m()(us, { VExpansionPanels: Ve.a });
        var ms = {
                name: 'HPanelBetween',
                props: { value: String, label: String, tooltip: String, disabled: { type: Boolean, default: !1 } },
                data: () => ({ valid: !0, betweenParam: '', min: '', max: '' }),
                computed: {
                    minRule() {
                        const e = this;
                        return [
                            function (t) {
                                if (t) {
                                    let s = parseInt(t);
                                    return s < 0
                                        ? 'min参数的值必须要大于等于0'
                                        : !e.max || !(s >= parseInt(e.max)) || 'min值必须小于max值';
                                }
                                return '请设置min参数的值';
                            },
                        ];
                    },
                    maxRule() {
                        const e = this;
                        return [
                            function (t) {
                                if (t) {
                                    let s = parseInt(t);
                                    return s <= 0
                                        ? 'max参数的值必须要大于0'
                                        : e.min && s <= parseInt(e.min)
                                        ? 'max值必须大于min值'
                                        : ((e.valid = !0), !0);
                                }
                                return '请设置max参数的值';
                            },
                        ];
                    },
                },
                watch: {
                    value: {
                        handler(e, t) {
                            (this.betweenParam = e), this.setParamValue(this.betweenParam);
                        },
                        immediate: !0,
                    },
                    betweenParam: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                    min: {
                        handler(e, t) {
                            this.betweenParam = e + ',' + this.max;
                        },
                    },
                    max: {
                        handler(e, t) {
                            this.betweenParam = this.min + ',' + e;
                        },
                    },
                },
                methods: {
                    validate() {
                        this.$refs.form.validate();
                    },
                    reset() {
                        this.$refs.form.reset();
                    },
                    setParamValue(e) {
                        if (e && -1 != e.search(',')) {
                            let t = this.$lib.lodash.split(e, ',');
                            t && ((this.min = t[0]), (this.max = t[1]));
                        }
                    },
                },
            },
            fs = s('d82e'),
            bs = Object(u.a)(
                ms,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-list-item',
                        { staticClass: 'pa-0', attrs: { dense: '' } },
                        [
                            s(
                                'v-list-item-content',
                                { staticClass: 'pb-0' },
                                [
                                    s(
                                        'v-form',
                                        {
                                            ref: 'form',
                                            model: {
                                                value: e.valid,
                                                callback: function (t) {
                                                    e.valid = t;
                                                },
                                                expression: 'valid',
                                            },
                                        },
                                        [
                                            s('v-text-field', {
                                                staticClass: 'ml-1 mb-0 pr-2',
                                                attrs: {
                                                    label: 'Min',
                                                    disabled: e.disabled,
                                                    rules: e.minRule,
                                                    placeholder: '请输入min值',
                                                    type: 'number',
                                                    outlined: '',
                                                    dense: '',
                                                    clearable: '',
                                                    required: '',
                                                    min: '0',
                                                },
                                                model: {
                                                    value: e.min,
                                                    callback: function (t) {
                                                        e.min = t;
                                                    },
                                                    expression: 'min',
                                                },
                                            }),
                                            s('v-text-field', {
                                                staticClass: 'ml-1 mb-0 pr-2',
                                                attrs: {
                                                    label: 'Max',
                                                    disabled: e.disabled,
                                                    rules: e.maxRule,
                                                    placeholder: '请输入Max值',
                                                    type: 'number',
                                                    outlined: '',
                                                    dense: '',
                                                    clearable: '',
                                                    required: '',
                                                },
                                                model: {
                                                    value: e.max,
                                                    callback: function (t) {
                                                        e.max = t;
                                                    },
                                                    expression: 'max',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            e.tooltip
                                ? s(
                                      'v-list-item-action',
                                      [
                                          s(
                                              'v-tooltip',
                                              {
                                                  attrs: { left: '', 'max-width': '200px' },
                                                  scopedSlots: e._u(
                                                      [
                                                          {
                                                              key: 'activator',
                                                              fn: function (t) {
                                                                  var a = t.on,
                                                                      i = t.attrs;
                                                                  return [
                                                                      s(
                                                                          'v-icon',
                                                                          e._g(
                                                                              e._b(
                                                                                  {
                                                                                      attrs: {
                                                                                          color: 'grey lighten-1',
                                                                                          dark: '',
                                                                                      },
                                                                                  },
                                                                                  'v-icon',
                                                                                  i,
                                                                                  !1
                                                                              ),
                                                                              a
                                                                          ),
                                                                          [e._v('mdi-information')]
                                                                      ),
                                                                  ];
                                                              },
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      36085519
                                                  ),
                                              },
                                              [s('span', [e._v(e._s(e.tooltip))])]
                                          ),
                                      ],
                                      1
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            gs = bs.exports;
        m()(bs, {
            VForm: fs.a,
            VIcon: le.a,
            VListItem: at.a,
            VListItemAction: it.a,
            VListItemContent: Ae.a,
            VTextField: Xe.a,
            VTooltip: pe.a,
        });
        var vs = {
                name: 'HRuleExpansionPanel',
                components: { HExpansionPanel: ct, HPanelBetween: gs },
                props: { value: { type: String, default: '' } },
                data: () => ({
                    expressions: '',
                    ruleItems: [],
                    ruleParamSettingPanel: '',
                    ruleParam: '',
                    selectedItems: [],
                    selectedRule: {},
                }),
                watch: {
                    value: {
                        handler(e, t) {
                            e && this.readExpressions(e);
                        },
                        immediate: !0,
                    },
                    expressions: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                    selectedRule: {
                        handler(e, t) {
                            e
                                ? this.changeRuleSettingPanel(e.type)
                                : ((this.ruleParamSettingPanel = ''), (this.ruleParam = ''));
                        },
                    },
                    selectedItems: {
                        handler(e, t) {
                            this.expressions = this.constructExpression(e);
                        },
                    },
                },
                computed: {
                    isButtonDisabled() {
                        return !!this.$lib.lodash.isEmpty(this.selectedRule);
                    },
                },
                created() {
                    this.initRuleItems();
                },
                methods: {
                    initRuleItems() {
                        this.$lib.lodash.isEmpty(this.ruleItems) && (this.ruleItems = this.$rules);
                    },
                    changeRuleSettingPanel(e) {
                        let t = '',
                            s = '';
                        switch (e) {
                            case 'between':
                                (t = 'HPanelBetween'), (s = this.readSelectedItemParam(e));
                                break;
                            default:
                                (t = ''), (s = '');
                        }
                        (this.ruleParamSettingPanel = t), (this.ruleParam = s);
                    },
                    findRuleItemByType(e) {
                        return this.$lib.lodash.find(this.ruleItems, function (t) {
                            return t.type === e;
                        });
                    },
                    changeRuleItemStatus(e, t = !0) {
                        this.findRuleItemByType(e.type).disabled = t;
                    },
                    pushSelectedItem(e) {
                        e && !e.disabled && (this.selectedItems.push(e), this.changeRuleItemStatus(e, !0));
                    },
                    removeSelectedItem(e) {
                        (this.selectedItems = this.$lib.lodash.remove(this.selectedItems, function (t) {
                            return t.type !== e.type;
                        })),
                            this.changeRuleItemStatus(e, !1),
                            (this.selectedRule = {});
                    },
                    parseExpression(e) {
                        let t = {};
                        if (e)
                            if (-1 != e.search(':')) {
                                let s = this.$lib.lodash.split(e, ':');
                                s && ((t.type = s[0]), (t.param = s[1]));
                            } else (t.type = e), (t.param = '');
                        return t;
                    },
                    addSelectedItemBySelector() {
                        let e = this.readSelectedRule();
                        this.pushSelectedItem(e);
                    },
                    addSelectedItemByExpression(e) {
                        let t = this.parseExpression(e),
                            s = this.findRuleItemByType(t.type);
                        t.param && (s.param = t.param), this.pushSelectedItem(s);
                    },
                    readExpressions(e) {
                        if (e)
                            if (-1 !== e.indexOf('|')) {
                                let t = this.$lib.lodash.split(e, '|');
                                for (let e of t) this.addSelectedItemByExpression(e);
                            } else this.addSelectedItemByExpression(e);
                    },
                    readSelectedItemParam(e) {
                        let t = this.$lib.lodash.find(this.selectedItems, function (t) {
                            return t.type === e;
                        });
                        return t && t.param ? t.param : '';
                    },
                    readSelectedRule() {
                        if (this.$lib.lodash.isEmpty(this.selectedRule)) return '';
                        {
                            let e = Object.assign({}, this.selectedRule);
                            return this.ruleParam && (e.param = this.ruleParam), e;
                        }
                    },
                    addRule() {
                        this.ruleParamSettingPanel
                            ? (this.$refs.rulePanel.validate(),
                              this.$refs.rulePanel.valid && this.addSelectedItemBySelector())
                            : this.addSelectedItemBySelector();
                    },
                    constructExpression(e) {
                        if (e && e.length > 0) {
                            return e.map((e) => (e.param ? e.type + ':' + e.param : e.type)).join('|');
                        }
                    },
                },
            },
            xs = s('2177'),
            ys = s('c66f'),
            ks = s('751a'),
            Ss = Object(u.a)(
                vs,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'h-expansion-panel',
                        { attrs: { index: 'rules', header: '校验' } },
                        [
                            s('v-subheader', [e._v('已配置规则')]),
                            s(
                                'v-list-item-group',
                                { staticClass: 'mb-1', attrs: { color: 'primary' } },
                                e._l(e.selectedItems, function (t, a) {
                                    return s(
                                        'v-list-item',
                                        { key: a, staticClass: 'pl-2 pr-2', attrs: { dense: '' } },
                                        [
                                            s(
                                                'v-list-item-avatar',
                                                { attrs: { size: '28' } },
                                                [
                                                    s(
                                                        'v-icon',
                                                        {
                                                            staticClass: 'error lighten-1 white--text',
                                                            attrs: { small: '' },
                                                            on: {
                                                                click: function (s) {
                                                                    return e.removeSelectedItem(t);
                                                                },
                                                            },
                                                        },
                                                        [e._v('mdi-delete-alert')]
                                                    ),
                                                ],
                                                1
                                            ),
                                            s(
                                                'v-list-item-content',
                                                [
                                                    s('v-list-item-title', { domProps: { textContent: e._s(t.name) } }),
                                                    s('v-list-item-subtitle', {
                                                        domProps: { textContent: e._s(t.message) },
                                                    }),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    );
                                }),
                                1
                            ),
                            s('v-divider'),
                            s(
                                'v-list-item',
                                { attrs: { dense: '' } },
                                [
                                    s(
                                        'v-list-item-content',
                                        [
                                            s(
                                                'v-row',
                                                [
                                                    s(
                                                        'v-col',
                                                        [
                                                            s('v-select', {
                                                                staticClass: 'ml-1 pr-2',
                                                                attrs: {
                                                                    items: e.ruleItems,
                                                                    'item-value': 'type',
                                                                    'item-text': 'name',
                                                                    label: '规则',
                                                                    outlined: '',
                                                                    dense: '',
                                                                    clearable: '',
                                                                    'return-object': '',
                                                                    'no-data-text': '空',
                                                                },
                                                                model: {
                                                                    value: e.selectedRule,
                                                                    callback: function (t) {
                                                                        e.selectedRule = t;
                                                                    },
                                                                    expression: 'selectedRule',
                                                                },
                                                            }),
                                                            s(e.ruleParamSettingPanel, {
                                                                ref: 'rulePanel',
                                                                tag: 'component',
                                                                model: {
                                                                    value: e.ruleParam,
                                                                    callback: function (t) {
                                                                        e.ruleParam = t;
                                                                    },
                                                                    expression: 'ruleParam',
                                                                },
                                                            }),
                                                            s(
                                                                'v-btn',
                                                                {
                                                                    staticClass: 'ml-1',
                                                                    attrs: {
                                                                        color: 'primary',
                                                                        small: '',
                                                                        disabled: e.isButtonDisabled,
                                                                    },
                                                                    on: { click: e.addRule },
                                                                },
                                                                [e._v('添加')]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Is = Ss.exports;
        m()(Ss, {
            VBtn: oe.a,
            VCol: me.a,
            VDivider: xs.a,
            VIcon: le.a,
            VListItem: at.a,
            VListItemAvatar: ys.a,
            VListItemContent: Ae.a,
            VListItemGroup: ks.a,
            VListItemSubtitle: Ae.b,
            VListItemTitle: Ae.c,
            VRow: be.a,
            VSelect: Be.a,
            VSubheader: Ke.a,
        });
        var ws = {
                name: 'HTextAreaPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                    HRuleExpansionPanel: Is,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                    rules: {
                        get: function () {
                            return this.dataObject[this.constants.annotations.xrules];
                        },
                        set: function (e) {
                            this.dataObject[this.constants.annotations.xrules] = e;
                        },
                    },
                    isNumberType() {
                        return 'number' === this.properties.type;
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            Os = Object(u.a)(
                ws,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Grow : 自动增长', tooltip: '根据文本数量自动增长文本' },
                                        model: {
                                            value: e.properties[e.constants.tags.AutoGrow],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AutoGrow, t);
                                            },
                                            expression: 'properties[constants.tags.AutoGrow]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Row Height : 每行的高度值',
                                            min: '1',
                                            disabled: !e.properties[e.constants.tags.AutoGrow],
                                            tooltip: '每行的高度值。 需要使用 auto-grow 属性',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.RowHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.RowHeight, t);
                                            },
                                            expression: 'properties[constants.tags.RowHeight]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Rows : 默认行数',
                                            min: '1',
                                            tooltip: 'Textarea默认显示的行数',
                                        },
                                        model: {
                                            value: e.properties.rows,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rows', t);
                                            },
                                            expression: 'properties.rows',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Resize : 移除调整大小的句柄' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoResize],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoResize, t);
                                            },
                                            expression: 'properties[constants.tags.NoResize]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-rule-expansion-panel', {
                                model: {
                                    value: e.rules,
                                    callback: function (t) {
                                        e.rules = t;
                                    },
                                    expression: 'rules',
                                },
                            }),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.constants.items.inputType,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Ps = Os.exports;
        m()(Os, { VExpansionPanels: Ve.a });
        var Cs = {
                name: 'HTextFieldPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelIcon: $t,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                    HRuleExpansionPanel: Is,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                    rules: {
                        get: function () {
                            return this.dataObject[this.constants.annotations.xrules];
                        },
                        set: function (e) {
                            this.dataObject[this.constants.annotations.xrules] = e;
                        },
                    },
                    isNumberType() {
                        return 'number' === this.properties.type;
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            $s = Object(u.a)(
                Cs,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dense : 紧凑显示' },
                                        model: {
                                            value: e.properties.dense,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dense', t);
                                            },
                                            expression: 'properties.dense',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Filled : 使用填充样式',
                                            disabled: e.properties.outlined || e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.filled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'filled', t);
                                            },
                                            expression: 'properties.filled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Flat : 移除阴影',
                                            tooltip: '当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）',
                                        },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Hide Details : 隐藏细节区域' },
                                        model: {
                                            value: e.properties[e.constants.tags.HideDetails],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HideDetails, t);
                                            },
                                            expression: 'properties[constants.tags.HideDetails]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Outlined : 显示轮廓' },
                                        model: {
                                            value: e.properties.outlined,
                                            callback: function (t) {
                                                e.$set(e.properties, 'outlined', t);
                                            },
                                            expression: 'properties.outlined',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        class: e.constants.class.switch,
                                        attrs: {
                                            label: 'Rounded : 椭圆边框',
                                            disabled:
                                                !e.properties.filled && !e.properties.outlined && !e.properties.solo,
                                            dense: '',
                                            tooltip: '向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项',
                                        },
                                        model: {
                                            value: e.properties.rounded,
                                            callback: function (t) {
                                                e.$set(e.properties, 'rounded', t);
                                            },
                                            expression: 'properties.rounded',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Shaped : 圆角边框',
                                            tooltip:
                                                '如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用',
                                            disabled:
                                                !e.properties.outlined && !e.properties.filled && !e.properties.solo,
                                        },
                                        model: {
                                            value: e.properties.shaped,
                                            callback: function (t) {
                                                e.$set(e.properties, 'shaped', t);
                                            },
                                            expression: 'properties.shaped',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Single Line : 标题不移动',
                                            tooltip: '标签在 focus/dirty 上不移动',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SingleLine],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SingleLine, t);
                                            },
                                            expression: 'properties[constants.tags.SingleLine]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Solo : 凸起样式', disabled: e.properties.filled },
                                        model: {
                                            value: e.properties.solo,
                                            callback: function (t) {
                                                e.$set(e.properties, 'solo', t);
                                            },
                                            expression: 'properties.solo',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Solo Inverted : 单反',
                                            tooltip: '减少元素的不透明度，知道获得焦点',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.SoloInverted],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.SoloInverted, t);
                                            },
                                            expression: 'properties[constants.tags.SoloInverted]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: { label: 'Height : 设置高度', min: '1' },
                                        model: {
                                            value: e.properties.height,
                                            callback: function (t) {
                                                e.$set(e.properties, 'height', t);
                                            },
                                            expression: 'properties.height',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Auto Focus : 启用自动聚焦' },
                                        model: {
                                            value: e.properties.autofocus,
                                            callback: function (t) {
                                                e.$set(e.properties, 'autofocus', t);
                                            },
                                            expression: 'properties.autofocus',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Loading : 加载状态',
                                            tooltip:
                                                '显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。',
                                        },
                                        model: {
                                            value: e.properties.loading,
                                            callback: function (t) {
                                                e.$set(e.properties, 'loading', t);
                                            },
                                            expression: 'properties.loading',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Loader Height : 加载器高度',
                                            min: '1',
                                            disabled: !e.properties.loading,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.LoaderHeight],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.LoaderHeight, t);
                                            },
                                            expression: 'properties[constants.tags.LoaderHeight]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Reverse : 反转输入方向' },
                                        model: {
                                            value: e.properties.reverse,
                                            callback: function (t) {
                                                e.$set(e.properties, 'reverse', t);
                                            },
                                            expression: 'properties.reverse',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Validate On Blur : 延迟验证',
                                            tooltip: '延迟验证直到失去焦点的事件被触发',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ValidateOnBlur],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ValidateOnBlur, t);
                                            },
                                            expression: 'properties[constants.tags.ValidateOnBlur]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s('h-rule-expansion-panel', {
                                model: {
                                    value: e.rules,
                                    callback: function (t) {
                                        e.rules = t;
                                    },
                                    expression: 'rules',
                                },
                            }),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'icon', header: '图标' } },
                                [
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Icon',
                                            tooltip: '在组件上附加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Append Outer Icon',
                                            tooltip: '在组件的外部添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AppendOuterIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AppendOuterIcon, t);
                                            },
                                            expression: 'properties[constants.tags.AppendOuterIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Icon',
                                            tooltip: '在组件前添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependIcon]',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Prepend Inner Icon',
                                            tooltip: '在组件的输入中添加一个图标，使用与 v-icon 相同的语法',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PrependInnerIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PrependInnerIcon, t);
                                            },
                                            expression: 'properties[constants.tags.PrependInnerIcon]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Clearable : 显示清除按钮' },
                                        model: {
                                            value: e.properties.clearable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'clearable', t);
                                            },
                                            expression: 'properties.clearable',
                                        },
                                    }),
                                    s('h-panel-icon', {
                                        attrs: {
                                            label: 'Clear Icon',
                                            tooltip: '当使用 clearable 且有输入值时应用',
                                            disabled: !e.properties.clearable,
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.ClearIcon],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.ClearIcon, t);
                                            },
                                            expression: 'properties[constants.tags.ClearIcon]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Persistent Hint : 强制显示提示',
                                            tooltip: '强制提示总是可见的',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.PersistentHint],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.PersistentHint, t);
                                            },
                                            expression: 'properties[constants.tags.PersistentHint]',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Hint : 提示文本' },
                                        model: {
                                            value: e.properties.hint,
                                            callback: function (t) {
                                                e.$set(e.properties, 'hint', t);
                                            },
                                            expression: 'properties.hint',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'PlaceHolder : 占位符文本' },
                                        model: {
                                            value: e.properties.placeHolder,
                                            callback: function (t) {
                                                e.$set(e.properties, 'placeHolder', t);
                                            },
                                            expression: 'properties.placeHolder',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Prefix : 前缀文本' },
                                        model: {
                                            value: e.properties.prefix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'prefix', t);
                                            },
                                            expression: 'properties.prefix',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Suffix : 后缀文本' },
                                        model: {
                                            value: e.properties.suffix,
                                            callback: function (t) {
                                                e.$set(e.properties, 'suffix', t);
                                            },
                                            expression: 'properties.suffix',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Type: 输入类型',
                                            tooltip: '设置不同的输入类型',
                                            items: e.constants.items.inputType,
                                        },
                                        model: {
                                            value: e.properties.type,
                                            callback: function (t) {
                                                e.$set(e.properties, 'type', t);
                                            },
                                            expression: 'properties.type',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Min : 数字类型最小值',
                                            min: '0',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Max : 数字类型最大值',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Step : 数字类型步长',
                                            min: '1',
                                            disabled: !e.isNumberType,
                                            tooltip: '当Type属性为‘数字类型’时可用',
                                        },
                                        model: {
                                            value: e.properties.step,
                                            callback: function (t) {
                                                e.$set(e.properties, 'step', t);
                                            },
                                            expression: 'properties.step',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: { label: 'Background Color : 背景颜色', tooltip: '输入框背景颜色' },
                                        model: {
                                            value: e.properties[e.constants.tags.BackgroundColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.BackgroundColor, t);
                                            },
                                            expression: 'properties[constants.tags.BackgroundColor]',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Ts = $s.exports;
        m()($s, { VExpansionPanels: Ve.a });
        var js = {
                name: 'HTimePickerPanel',
                components: {
                    HExpansionPanel: ct,
                    HPanelColor: xt,
                    HPanelNumber: Vt,
                    HPanelSelect: Dt,
                    HPanelSwitch: At,
                    HPanelTextField: zt,
                },
                props: { element: { type: Object, default: () => {} } },
                data: () => ({ constants: W, dataObject: {} }),
                computed: {
                    properties() {
                        return this.dataObject[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    element: {
                        handler(e, t) {
                            this.dataObject = e;
                        },
                        immediate: !0,
                    },
                },
            },
            Vs = Object(u.a)(
                js,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-expansion-panels',
                        { staticClass: 'mb-4', attrs: { focusable: '', mandatory: '' } },
                        [
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'appearance', header: '外观' } },
                                [
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Elevation : 阴影',
                                            min: '0',
                                            max: '24',
                                            tooltip: '组件的海拔可接受 0 到 24 之间的值。',
                                            disabled: e.properties.flat,
                                        },
                                        model: {
                                            value: e.properties.elevation,
                                            callback: function (t) {
                                                e.$set(e.properties, 'elevation', t);
                                            },
                                            expression: 'properties.elevation',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Flat : 移除阴影', tooltip: '移除添加到元素的标高（阴影）' },
                                        model: {
                                            value: e.properties.flat,
                                            callback: function (t) {
                                                e.$set(e.properties, 'flat', t);
                                            },
                                            expression: 'properties.flat',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Full Width : 全宽度', tooltip: '指定输入类型为全宽度' },
                                        model: {
                                            value: e.properties[e.constants.tags.FullWidth],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.FullWidth, t);
                                            },
                                            expression: 'properties[constants.tags.FullWidth]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Landscape : 水平方向', tooltip: '水平方向选择器' },
                                        model: {
                                            value: e.properties.landscape,
                                            callback: function (t) {
                                                e.$set(e.properties, 'landscape', t);
                                            },
                                            expression: 'properties.landscape',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'No Title', tooltip: '隐藏选择器标题' },
                                        model: {
                                            value: e.properties[e.constants.tags.NoTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.NoTitle, t);
                                            },
                                            expression: 'properties[constants.tags.NoTitle]',
                                        },
                                    }),
                                    s('h-panel-number', {
                                        attrs: {
                                            label: 'Width : 选择器宽度',
                                            min: '1',
                                            max: '1024',
                                            step: '2',
                                            tooltip: '选择器宽度',
                                        },
                                        model: {
                                            value: e.properties.width,
                                            callback: function (t) {
                                                e.$set(e.properties, 'width', t);
                                            },
                                            expression: 'properties.width',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'control', header: '控制' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: { label: 'Disabled : 禁用输入' },
                                        model: {
                                            value: e.properties.disabled,
                                            callback: function (t) {
                                                e.$set(e.properties, 'disabled', t);
                                            },
                                            expression: 'properties.disabled',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Readonly : 只读状态' },
                                        model: {
                                            value: e.properties.readonly,
                                            callback: function (t) {
                                                e.$set(e.properties, 'readonly', t);
                                            },
                                            expression: 'properties.readonly',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Scrollable : 滚动',
                                            tooltip: '允许通过鼠标滚动更改显示的月份',
                                        },
                                        model: {
                                            value: e.properties.scrollable,
                                            callback: function (t) {
                                                e.$set(e.properties, 'scrollable', t);
                                            },
                                            expression: 'properties.scrollable',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'content', header: '内容' } },
                                [
                                    s('h-panel-switch', {
                                        attrs: {
                                            label: 'Ampm In Title',
                                            tooltip: '将 AM/PM 开关放置在标题中，不在时钟附近',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.AmpmInTitle],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.AmpmInTitle, t);
                                            },
                                            expression: 'properties[constants.tags.AmpmInTitle]',
                                        },
                                    }),
                                    s('h-panel-select', {
                                        attrs: {
                                            label: 'Format',
                                            tooltip: '定义在选择器中显示的时间格式。可用的选项是 ampm 和 24hr',
                                            items: e.constants.items.timeType,
                                        },
                                        model: {
                                            value: e.properties.format,
                                            callback: function (t) {
                                                e.$set(e.properties, 'format', t);
                                            },
                                            expression: 'properties.format',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Max', tooltip: '允许的最大 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.max,
                                            callback: function (t) {
                                                e.$set(e.properties, 'max', t);
                                            },
                                            expression: 'properties.max',
                                        },
                                    }),
                                    s('h-panel-text-field', {
                                        attrs: { label: 'Min', tooltip: '允许的最小 日期/月份（ISO 8601格式）' },
                                        model: {
                                            value: e.properties.min,
                                            callback: function (t) {
                                                e.$set(e.properties, 'min', t);
                                            },
                                            expression: 'properties.min',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Use Seconds', tooltip: '切换选择器中秒的使用' },
                                        model: {
                                            value: e.properties[e.constants.tags.UseSeconds],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.UseSeconds, t);
                                            },
                                            expression: 'properties[constants.tags.UseSeconds]',
                                        },
                                    }),
                                ],
                                1
                            ),
                            s(
                                'h-expansion-panel',
                                { attrs: { index: 'color', header: '色彩' } },
                                [
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Color : 颜色',
                                            tooltip:
                                                '将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表',
                                        },
                                        model: {
                                            value: e.properties.color,
                                            callback: function (t) {
                                                e.$set(e.properties, 'color', t);
                                            },
                                            expression: 'properties.color',
                                        },
                                    }),
                                    s('h-panel-color', {
                                        attrs: {
                                            label: 'Header Color : 标题颜色',
                                            tooltip:
                                                '定义标题颜色。如果未指定，将使用由 color 属性或默认选择器颜色定义的颜色',
                                        },
                                        model: {
                                            value: e.properties[e.constants.tags.HeaderColor],
                                            callback: function (t) {
                                                e.$set(e.properties, e.constants.tags.HeaderColor, t);
                                            },
                                            expression: 'properties[constants.tags.HeaderColor]',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Dark : 使用深色主题' },
                                        model: {
                                            value: e.properties.dark,
                                            callback: function (t) {
                                                e.$set(e.properties, 'dark', t);
                                            },
                                            expression: 'properties.dark',
                                        },
                                    }),
                                    s('h-panel-switch', {
                                        attrs: { label: 'Light : 使用浅色主题' },
                                        model: {
                                            value: e.properties.light,
                                            callback: function (t) {
                                                e.$set(e.properties, 'light', t);
                                            },
                                            expression: 'properties.light',
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Hs = Vs.exports;
        m()(Vs, { VExpansionPanels: Ve.a });
        var _s = {
                name: 'HPropertyPanel',
                components: {
                    TEXT_FIELD: Ts,
                    TEXT_AREA: Ps,
                    SLIDER: cs,
                    RANGE_SLIDER: is,
                    CHECKBOX: Wt,
                    SWITCHS: hs,
                    DATE_PICKER: Zt,
                    TIME_PICKER: Hs,
                    SELECT_SINGLE: os,
                    COMBOBOX: Jt,
                    HFormPanel: ts,
                },
                props: {
                    selectedItem: { type: Object, default: () => {} },
                    formSchema: { type: Object, default: () => {} },
                },
                data: () => ({
                    constants: W,
                    tab: null,
                    tabs: [
                        { key: 'element', name: '组件属性' },
                        { key: 'form', name: '表单属性' },
                    ],
                    schema: {},
                    formSettings: {},
                }),
                computed: {
                    currentPanel() {
                        return this.schema.configs.panel;
                    },
                    originalFormId() {
                        return this.schema.configs.formId;
                    },
                    element() {
                        return this.schema.properties[this.originalFormId];
                    },
                    properties() {
                        return this.element[this.constants.annotations.xprops];
                    },
                },
                watch: {
                    selectedItem: {
                        handler(e, t) {
                            this.schema = e;
                        },
                        immediate: !0,
                    },
                    formSchema: {
                        handler(e, t) {
                            this.formSettings = e;
                        },
                        immediate: !0,
                    },
                },
                methods: {
                    editFormId(e) {
                        const t = this.originalFormId;
                        e &&
                            t &&
                            e !== t &&
                            (this.$set(this.schema.properties, e, this.element),
                            this.$set(this.schema.configs, 'formId', e),
                            delete this.schema.properties[t]);
                    },
                    editId(e) {
                        e ? this.$set(this.properties, 'id', e) : delete this.properties.id;
                    },
                    editLabel(e) {
                        e && (this.$set(this.properties, 'label', e), this.$set(this.element, 'title', e));
                    },
                },
            },
            Ds = (s('041d'), s('b4b9')),
            Ls = Object(u.a)(
                _s,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-card',
                        [
                            s(
                                'v-tabs',
                                {
                                    attrs: { 'background-color': 'transparent', grow: '' },
                                    model: {
                                        value: e.tab,
                                        callback: function (t) {
                                            e.tab = t;
                                        },
                                        expression: 'tab',
                                    },
                                },
                                [
                                    s(
                                        'v-tab',
                                        { key: e.tabs[0].key },
                                        [
                                            e._v(' ' + e._s(e.tabs[0].name) + ' '),
                                            s(
                                                'v-tooltip',
                                                {
                                                    attrs: { bottom: '' },
                                                    scopedSlots: e._u([
                                                        {
                                                            key: 'activator',
                                                            fn: function (t) {
                                                                var a = t.on,
                                                                    i = t.attrs;
                                                                return [
                                                                    s(
                                                                        'v-btn',
                                                                        e._g(
                                                                            e._b(
                                                                                {
                                                                                    staticClass: 'ml-5',
                                                                                    attrs: {
                                                                                        icon: '',
                                                                                        tag: 'a',
                                                                                        target: '_blank',
                                                                                        href: e.schema.configs
                                                                                            ? e.schema.configs.document
                                                                                            : '#',
                                                                                    },
                                                                                },
                                                                                'v-btn',
                                                                                i,
                                                                                !1
                                                                            ),
                                                                            a
                                                                        ),
                                                                        [s('v-icon', [e._v('mdi-file-replace')])],
                                                                        1
                                                                    ),
                                                                ];
                                                            },
                                                        },
                                                    ]),
                                                },
                                                [s('span', [e._v('点击查看文档')])]
                                            ),
                                        ],
                                        1
                                    ),
                                    s('v-tab', { key: e.tabs[1].key }, [e._v(' ' + e._s(e.tabs[1].name) + ' ')]),
                                ],
                                1
                            ),
                            s(
                                'v-tabs-items',
                                {
                                    model: {
                                        value: e.tab,
                                        callback: function (t) {
                                            e.tab = t;
                                        },
                                        expression: 'tab',
                                    },
                                },
                                [
                                    s(
                                        'v-tab-item',
                                        { key: e.tabs[0].key },
                                        [
                                            s(
                                                'v-container',
                                                { staticClass: 'pb-0', attrs: { fluid: '' } },
                                                [
                                                    s(
                                                        'v-row',
                                                        [
                                                            s(
                                                                'v-col',
                                                                { staticClass: 'pb-0' },
                                                                [
                                                                    e.schema.configs
                                                                        ? s(
                                                                              'v-card',
                                                                              { attrs: { flat: '' } },
                                                                              [
                                                                                  s('v-text-field', {
                                                                                      attrs: {
                                                                                          value: e.originalFormId,
                                                                                          label: '字段名',
                                                                                          dense: '',
                                                                                          outlined: '',
                                                                                          placeholder:
                                                                                              '请输入字段名（v-model）',
                                                                                      },
                                                                                      on: { input: e.editFormId },
                                                                                  }),
                                                                                  s('v-text-field', {
                                                                                      attrs: {
                                                                                          value: e.element.title,
                                                                                          label: '标签',
                                                                                          clearable: '',
                                                                                          dense: '',
                                                                                          outlined: '',
                                                                                          placeholder: '请输入标签',
                                                                                      },
                                                                                      on: { input: e.editLabel },
                                                                                  }),
                                                                                  s('v-text-field', {
                                                                                      attrs: {
                                                                                          value: e.properties.id,
                                                                                          label: 'ID',
                                                                                          clearable: '',
                                                                                          dense: '',
                                                                                          outlined: '',
                                                                                          placeholder:
                                                                                              '请输入元素ID（id）',
                                                                                      },
                                                                                      on: { input: e.editId },
                                                                                  }),
                                                                                  s('v-divider', {
                                                                                      staticClass: 'mb-3',
                                                                                  }),
                                                                                  s(e.currentPanel, {
                                                                                      tag: 'component',
                                                                                      attrs: { element: e.element },
                                                                                  }),
                                                                              ],
                                                                              1
                                                                          )
                                                                        : e._e(),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                    s(
                                        'v-tab-item',
                                        { key: e.tabs[1].key },
                                        [
                                            s(
                                                'v-container',
                                                { staticClass: 'pb-0', attrs: { fluid: '' } },
                                                [
                                                    s(
                                                        'v-row',
                                                        [
                                                            s(
                                                                'v-col',
                                                                { staticClass: 'pb-0' },
                                                                [
                                                                    s(
                                                                        'v-card',
                                                                        { attrs: { flat: '' } },
                                                                        [
                                                                            s('v-text-field', {
                                                                                attrs: {
                                                                                    outlined: '',
                                                                                    dense: '',
                                                                                    label: '表单名',
                                                                                    placeholder: '请输入表单名（ref）',
                                                                                },
                                                                                model: {
                                                                                    value: e.formSettings.formRef,
                                                                                    callback: function (t) {
                                                                                        e.$set(
                                                                                            e.formSettings,
                                                                                            'formRef',
                                                                                            t
                                                                                        );
                                                                                    },
                                                                                    expression: 'formSettings.formRef',
                                                                                },
                                                                            }),
                                                                            s('v-text-field', {
                                                                                attrs: {
                                                                                    outlined: '',
                                                                                    dense: '',
                                                                                    label: '表单模型',
                                                                                    placeholder: '请输入数据模型',
                                                                                },
                                                                                model: {
                                                                                    value: e.formSettings.formModel,
                                                                                    callback: function (t) {
                                                                                        e.$set(
                                                                                            e.formSettings,
                                                                                            'formModel',
                                                                                            t
                                                                                        );
                                                                                    },
                                                                                    expression:
                                                                                        'formSettings.formModel',
                                                                                },
                                                                            }),
                                                                            s('v-divider'),
                                                                            s('h-form-panel', {
                                                                                attrs: { schema: e.formSettings },
                                                                            }),
                                                                        ],
                                                                        1
                                                                    ),
                                                                ],
                                                                1
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                '0f988868',
                null
            ),
            Es = Ls.exports;
        m()(Ls, {
            VBtn: oe.a,
            VCard: he.a,
            VCol: me.a,
            VContainer: fe.a,
            VDivider: xs.a,
            VIcon: le.a,
            VRow: be.a,
            VTab: Ge.a,
            VTabItem: Je.a,
            VTabs: Ue.a,
            VTabsItems: Ds.a,
            VTextField: Xe.a,
            VTooltip: pe.a,
        });
        var As = {
                name: 'HFormModeler',
                components: { HCanvasContainer: xe, HDraggableItem: nt, HPropertyPanel: Es },
                props: { height: { type: String, default: '100vh' } },
                data: () => ({
                    components: q,
                    formSettings: K,
                    drawingCanvas: [],
                    drawingCanvasForm: {},
                    selectedCanvasItemId: '',
                    selectedCanvasItemData: {},
                    saveDrawingCanvasDebounce: Object(re.a)(340, n.saveDrawingCanvas),
                    saveDrawingCanvasFormDebounce: Object(re.a)(340, n.saveDrawingCanvasForm),
                }),
                watch: {
                    drawingCanvas: {
                        handler(e, t) {
                            console.info('[HFG] Save Canvas Data to local storage!'), this.saveDrawingCanvasDebounce(e);
                        },
                        deep: !0,
                    },
                    drawingCanvasForm: {
                        handler(e, t) {
                            console.info('[HFG] Save Form Data to local storage!'),
                                this.saveDrawingCanvasFormDebounce(e);
                        },
                        deep: !0,
                        immediate: !0,
                    },
                },
                created() {
                    this.initModeler();
                },
                mounted() {
                    let e = n.getDrawingCanvas();
                    Array.isArray(e) &&
                        e.length > 0 &&
                        ((this.drawingCanvas = e), this.selectCanvasItem(this.drawingCanvas[0]));
                    let t = n.getDrawingCanvasForm();
                    this.$lib.lodash.isEmpty(t)
                        ? (this.drawingCanvasForm = this.$lib.lodash.cloneDeep(this.formSettings))
                        : (this.drawingCanvasForm = t);
                },
                methods: {
                    initModeler() {
                        0 !== this.drawingCanvas.length && (this.selectedCanvasItemData = this.drawingCanvas[0]);
                    },
                    changeDrawingCanvas(e) {
                        this.drawingCanvas.push(e), this.selectCanvasItem(e);
                    },
                    addComponent(e) {
                        const t = o.generate(e);
                        this.changeDrawingCanvas(t);
                    },
                    onChange(e) {},
                    selectCanvasItem(e) {
                        (this.selectedCanvasItemData = e), (this.selectedCanvasItemId = e.configs.renderKey);
                    },
                    copyCanvasItem(e) {
                        const t = o.clone(e);
                        this.changeDrawingCanvas(t);
                    },
                    deleteCanvasItem(e) {
                        let t = this.$lib.lodash.remove(this.drawingCanvas, (t) => t.configs.formId !== e);
                        this.$nextTick(() => {
                            this.drawingCanvas = t;
                            const e = this.drawingCanvas.length;
                            e && this.selectCanvasItem(this.drawingCanvas[e - 1]);
                        });
                    },
                    emptyCanvas() {
                        this.drawingCanvas = [];
                    },
                },
            },
            Fs = (s('0654'), s('6106')),
            Ns = s('6657'),
            Rs = Object(u.a)(
                As,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-app',
                        { attrs: { id: 'modeler' } },
                        [
                            s('v-navigation-drawer', { attrs: { app: '', clipped: '', 'hide-overlay': '' } }, [
                                s(
                                    'div',
                                    { staticClass: 'components-list' },
                                    e._l(e.components, function (t, a) {
                                        return s(
                                            'div',
                                            { key: a },
                                            [
                                                s(
                                                    'div',
                                                    { staticClass: 'components-title' },
                                                    [
                                                        s('v-icon', [e._v('mdi-puzzle-outline')]),
                                                        e._v(' ' + e._s(t.title) + ' '),
                                                    ],
                                                    1
                                                ),
                                                s(
                                                    'draggable',
                                                    {
                                                        staticClass: 'components-draggable',
                                                        attrs: {
                                                            list: t.list,
                                                            group: { name: 'componentsGroup', pull: 'clone', put: !1 },
                                                            clone: e.addComponent,
                                                            draggable: '.components-item',
                                                            sort: !1,
                                                        },
                                                    },
                                                    e._l(t.list, function (t, a) {
                                                        return s(
                                                            'div',
                                                            {
                                                                key: a,
                                                                staticClass: 'components-item',
                                                                on: {
                                                                    click: function (s) {
                                                                        return e.addComponent(t);
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                s(
                                                                    'div',
                                                                    { staticClass: 'components-body' },
                                                                    [
                                                                        s(
                                                                            'v-icon',
                                                                            {
                                                                                staticClass: 'mr-1',
                                                                                attrs: { small: '' },
                                                                            },
                                                                            [e._v(e._s(t.configs.icon))]
                                                                        ),
                                                                        e._v(' ' + e._s(t.configs.title) + ' '),
                                                                    ],
                                                                    1
                                                                ),
                                                            ]
                                                        );
                                                    }),
                                                    0
                                                ),
                                                s('v-divider'),
                                            ],
                                            1
                                        );
                                    }),
                                    0
                                ),
                            ]),
                            s(
                                'v-main',
                                { staticClass: 'pa-0', attrs: { app: '' } },
                                [
                                    s(
                                        'h-canvas-container',
                                        { on: { empty: e.emptyCanvas } },
                                        [
                                            s(
                                                'validation-observer',
                                                { ref: 'observer' },
                                                [
                                                    s(
                                                        'v-form',
                                                        [
                                                            e.drawingCanvas.length > 0
                                                                ? s(
                                                                      'draggable',
                                                                      {
                                                                          attrs: {
                                                                              list: e.drawingCanvas,
                                                                              animation: 300,
                                                                              group: 'componentsGroup',
                                                                          },
                                                                          on: {
                                                                              change: e.onChange,
                                                                              start: function (t) {
                                                                                  e.drag = !0;
                                                                              },
                                                                              end: function (t) {
                                                                                  e.drag = !1;
                                                                              },
                                                                          },
                                                                      },
                                                                      e._l(e.drawingCanvas, function (t) {
                                                                          return s('h-draggable-item', {
                                                                              key: t.renderKey,
                                                                              ref: 'canvas',
                                                                              refInFor: !0,
                                                                              attrs: {
                                                                                  schema: t,
                                                                                  'selected-item-id':
                                                                                      e.selectedCanvasItemId,
                                                                              },
                                                                              on: {
                                                                                  select: e.selectCanvasItem,
                                                                                  copy: e.copyCanvasItem,
                                                                                  delete: e.deleteCanvasItem,
                                                                              },
                                                                          });
                                                                      }),
                                                                      1
                                                                  )
                                                                : s(
                                                                      'draggable',
                                                                      {
                                                                          attrs: {
                                                                              animation: 300,
                                                                              group: 'componentsGroup',
                                                                          },
                                                                      },
                                                                      [
                                                                          s(
                                                                              'v-row',
                                                                              [
                                                                                  s(
                                                                                      'v-col',
                                                                                      { attrs: { cols: '12' } },
                                                                                      [
                                                                                          s(
                                                                                              'v-row',
                                                                                              {
                                                                                                  attrs: {
                                                                                                      align: 'center',
                                                                                                      justify: 'center',
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  s(
                                                                                                      'v-card',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'ma-12',
                                                                                                          attrs: {
                                                                                                              height:
                                                                                                                  '100',
                                                                                                              width:
                                                                                                                  '600',
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s(
                                                                                                              'v-card-text',
                                                                                                              {
                                                                                                                  staticClass:
                                                                                                                      'text-center title',
                                                                                                              },
                                                                                                              [
                                                                                                                  e._v(
                                                                                                                      '从左侧拖入或点选组件进行表单设计'
                                                                                                                  ),
                                                                                                              ]
                                                                                                          ),
                                                                                                      ],
                                                                                                      1
                                                                                                  ),
                                                                                              ],
                                                                                              1
                                                                                          ),
                                                                                      ],
                                                                                      1
                                                                                  ),
                                                                              ],
                                                                              1
                                                                          ),
                                                                      ],
                                                                      1
                                                                  ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            s(
                                'v-navigation-drawer',
                                { attrs: { clipped: '', app: '', 'hide-overlay': '', right: '', width: '360px' } },
                                [
                                    s('h-property-panel', {
                                        attrs: {
                                            'selected-item': e.selectedCanvasItemData,
                                            'form-schema': e.drawingCanvasForm,
                                        },
                                    }),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Ms = Rs.exports;
        m()(Rs, {
            VApp: f.a,
            VCard: he.a,
            VCardText: we.b,
            VCol: me.a,
            VDivider: xs.a,
            VForm: fs.a,
            VIcon: le.a,
            VMain: Fs.a,
            VNavigationDrawer: Ns.a,
            VRow: be.a,
        });
        var Bs = s('2b97'),
            zs =
                (s('30e1'),
                s('04ec'),
                s('81c2'),
                s('53b3'),
                s('f54e'),
                s('c140'),
                s('9cb9'),
                s('932c'),
                s('62f0'),
                s('158b'),
                s('4f7d'),
                s('f6a3'),
                s('deb2'),
                s('018a'),
                s('a16b'),
                s('aa49'),
                s('988f'),
                s('9e57'),
                s('3682'),
                s('45a5'),
                s('8d54'),
                s('dca5'),
                s('4198'),
                s('3f64'),
                s('4d06'),
                s('32b2'),
                s('0a98'),
                s('ea53'),
                s('2c44'),
                s('a319'),
                s('aa12'),
                s('2968'),
                s('dd6c'),
                s('6a25'),
                s('fa09'),
                s('769e'),
                s('fdeb'),
                s('3460'),
                s('228f'),
                s('1e52'),
                s('4784'),
                s('e3bd'),
                s('bf8f'),
                s('accd'),
                s('757c'),
                s('c36f'),
                s('8c85'),
                s('6cca'),
                s('0bff'),
                s('dbff'),
                s('f8e1'),
                s('5980'),
                s('b844'),
                s('5be6'),
                s('59d2'),
                s('f01f'),
                s('e89e'),
                s('177f'),
                {
                    name: 'HCodeMirror',
                    components: { codemirror: Bs.codemirror },
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
                            return s('5895')('./' + e + '.css'), e;
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
                                highlightSelectionMatches: {
                                    minChars: 2,
                                    style: 'matchhighlight',
                                    trim: !0,
                                    showToken: !1,
                                },
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
                }),
            qs =
                (s('d1c9'),
                Object(u.a)(
                    zs,
                    function () {
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
                    [],
                    !1,
                    null,
                    null,
                    null
                ).exports),
            Ks = s('44c1'),
            Ws = s('3099'),
            Us = s.n(Ws),
            Gs = s('bf92');
        (window.JSHINT = Ks.JSHINT),
            (window.CSSLint = Us.a),
            (window.jsonlint = Gs.parser),
            (qs.install = function (e) {
                e.component(qs.name, qs);
            }),
            null != typeof window && window.Vue && qs.install(window.Vue);
        var Js = {
                name: 'HFormCodeDrawer',
                components: { HCodeMirror: qs },
                props: { value: { type: Boolean, default: !1 }, source: { type: String, default: '' } },
                data: () => ({ drawer: !1, code: '' }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.drawer = e;
                        },
                        immediate: !0,
                    },
                    drawer: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                    source: {
                        handler(e, t) {
                            this.code = e;
                        },
                        immediate: !0,
                    },
                },
                methods: {},
            },
            Ys = s('f670'),
            Xs = Object(u.a)(
                Js,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-navigation-drawer',
                        {
                            attrs: { fixed: '', temporary: '', 'hide-overlay': '', bottom: '', width: '100%' },
                            model: {
                                value: e.drawer,
                                callback: function (t) {
                                    e.drawer = t;
                                },
                                expression: 'drawer',
                            },
                        },
                        [
                            s(
                                'v-toolbar',
                                { staticClass: 'blue darken-3', attrs: { dark: '', dense: '' } },
                                [
                                    s(
                                        'v-btn',
                                        {
                                            attrs: { icon: '', dark: '' },
                                            on: {
                                                click: function (t) {
                                                    e.drawer = !1;
                                                },
                                            },
                                        },
                                        [s('v-icon', [e._v('mdi-close-box')])],
                                        1
                                    ),
                                    s('v-toolbar-title', [e._v('查看Vue代码')]),
                                    s('v-spacer'),
                                    s(
                                        'v-toolbar-items',
                                        [
                                            s(
                                                'v-btn',
                                                {
                                                    attrs: { dark: '', text: '' },
                                                    on: {
                                                        click: function (t) {
                                                            e.drawer = !1;
                                                        },
                                                    },
                                                },
                                                [e._v('Save')]
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            s('h-code-mirror', {
                                attrs: { mode: 'vue', 'read-only': '' },
                                model: {
                                    value: e.code,
                                    callback: function (t) {
                                        e.code = t;
                                    },
                                    expression: 'code',
                                },
                            }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            Zs = Xs.exports;
        m()(Xs, {
            VBtn: oe.a,
            VIcon: le.a,
            VNavigationDrawer: Ns.a,
            VSpacer: qe.a,
            VToolbar: ge.a,
            VToolbarItems: Ys.a,
            VToolbarTitle: Ys.b,
        });
        var Qs = s('423b'),
            ea = {
                name: 'HFormRuntime',
                components: { ValidationObserver: Qs.a, HFormRenderer: et },
                props: {
                    schema: { type: Object, default: () => {} },
                    title: { type: String, default: '动态表单' },
                    formSchema: { type: Object, default: () => {} },
                },
                data: () => ({ model: {}, showMessage: !1, messageType: 'success', message: '' }),
                computed: {
                    httpLibrary() {
                        return this.axios || this.$http;
                    },
                },
                mounted() {},
                methods: {
                    saveOrUpdate() {
                        this.$refs.observer.validate().then((e) => {
                            e &&
                                (this.httpLibrary
                                    ? this.httpLibrary(this.createRequestObject()).then(function (e) {
                                          e && '200' === e.status
                                              ? ((this.showMessage = !0),
                                                (this.messageType = 'success'),
                                                (this.message = '保存成功！'))
                                              : ((this.showMessage = !0),
                                                (this.messageType = 'error'),
                                                (this.message = '保存失败！'));
                                      })
                                    : ((this.showMessage = !0),
                                      (this.messageType = 'warning'),
                                      (this.message = '无法找到请求发送组件！')));
                        });
                    },
                    clear() {
                        (this.model = {}), this.$refs.form.reset(), this.$refs.observer.reset();
                    },
                    createRequestObject() {
                        let e = {};
                        return (
                            (e.methods = this.formSchema.requestMethods),
                            (e.url = this.formSchema.requestUrl),
                            (e.headers = { 'Content-type': this.formSchema.requestContentType }),
                            (e.data = this.model),
                            e
                        );
                    },
                },
            },
            ta = s('a5be'),
            sa = Object(u.a)(
                ea,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-card',
                        { staticClass: 'pa-2' },
                        [
                            s(
                                'v-toolbar',
                                { attrs: { flat: '' } },
                                [
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on;
                                                        return [
                                                            s(
                                                                'v-icon',
                                                                e._g(
                                                                    {
                                                                        staticClass: 'mr-2',
                                                                        attrs: { tile: '', color: 'teal', large: '' },
                                                                    },
                                                                    a
                                                                ),
                                                                [e._v('mdi-clipboard-edit')]
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [s('span', [e._v('返回')])]
                                    ),
                                    s('v-toolbar-title', { staticClass: 'pl-0 font-weight-light' }, [
                                        e._v(e._s(e.title)),
                                    ]),
                                ],
                                1
                            ),
                            s('v-divider', { staticClass: 'mb-2' }),
                            e.showMessage
                                ? s('v-alert', { attrs: { type: e.messageType } }, [e._v(' ' + e._s(e.message) + ' ')])
                                : e._e(),
                            s(
                                'v-row',
                                [
                                    s(
                                        'v-col',
                                        [
                                            s(
                                                'ValidationObserver',
                                                { ref: 'observer' },
                                                [
                                                    s(
                                                        'v-form',
                                                        { ref: 'form' },
                                                        [
                                                            s('h-form-renderer', {
                                                                attrs: { schema: e.schema },
                                                                model: {
                                                                    value: e.model,
                                                                    callback: function (t) {
                                                                        e.model = t;
                                                                    },
                                                                    expression: 'model',
                                                                },
                                                            }),
                                                            s(
                                                                'v-btn',
                                                                {
                                                                    staticClass: 'mr-4',
                                                                    attrs: { color: 'primary' },
                                                                    on: { click: e.saveOrUpdate },
                                                                },
                                                                [e._v('保存')]
                                                            ),
                                                            s(
                                                                'v-btn',
                                                                {
                                                                    staticClass: 'mr-4',
                                                                    attrs: { color: 'warning' },
                                                                    on: { click: e.clear },
                                                                },
                                                                [e._v('重置')]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            aa = sa.exports;
        m()(sa, {
            VAlert: ta.a,
            VBtn: oe.a,
            VCard: he.a,
            VCol: me.a,
            VDivider: xs.a,
            VForm: fs.a,
            VIcon: le.a,
            VRow: be.a,
            VToolbar: ge.a,
            VToolbarTitle: Ys.b,
            VTooltip: pe.a,
        }),
            (aa.install = function (e) {
                e.component(aa.name, aa);
            }),
            null != typeof window && window.Vue && aa.install(window.Vue);
        var ia = {
                name: 'HFormPreviewDrawer',
                components: { HCodeMirror: qs, HFormRuntime: aa },
                props: {
                    value: { type: Boolean, default: !1 },
                    source: { type: String, default: '' },
                    formConfigs: { type: Object, default: () => {} },
                },
                data: () => ({ drawer: !1, schema: {}, model: {}, config: '', formSchema: {} }),
                watch: {
                    value: {
                        handler(e, t) {
                            this.drawer = e;
                        },
                        immediate: !0,
                    },
                    drawer: {
                        handler(e, t) {
                            this.$emit('input', e);
                        },
                    },
                    source: {
                        handler(e, t) {
                            e && ((this.schema = JSON.parse(e)), (this.config = e));
                        },
                        immediate: !0,
                    },
                    formConfigs: {
                        handler(e, t) {
                            e && (this.formSchema = e);
                        },
                        immediate: !0,
                    },
                },
            },
            ra =
                (s('21b6'),
                Object(u.a)(
                    ia,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s(
                            'v-navigation-drawer',
                            {
                                attrs: { fixed: '', temporary: '', 'hide-overlay': '', bottom: '', width: '100%' },
                                model: {
                                    value: e.drawer,
                                    callback: function (t) {
                                        e.drawer = t;
                                    },
                                    expression: 'drawer',
                                },
                            },
                            [
                                s(
                                    'v-toolbar',
                                    { staticClass: 'blue darken-3', attrs: { dark: '', dense: '' } },
                                    [
                                        s(
                                            'v-btn',
                                            {
                                                attrs: { icon: '', dark: '' },
                                                on: {
                                                    click: function (t) {
                                                        e.drawer = !1;
                                                    },
                                                },
                                            },
                                            [s('v-icon', [e._v('mdi-close-box')])],
                                            1
                                        ),
                                        s('v-toolbar-title', [e._v('表单预览')]),
                                        s('v-spacer'),
                                        s(
                                            'v-toolbar-items',
                                            [
                                                s(
                                                    'v-btn',
                                                    {
                                                        attrs: { dark: '', text: '' },
                                                        on: {
                                                            click: function (t) {
                                                                e.drawer = !1;
                                                            },
                                                        },
                                                    },
                                                    [e._v('Save')]
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                                s(
                                    'v-card',
                                    { staticClass: 'mt-3' },
                                    [
                                        s(
                                            'v-row',
                                            [
                                                s(
                                                    'v-col',
                                                    { staticClass: 'pa-0', attrs: { cols: '12', md: '6' } },
                                                    [
                                                        s(
                                                            'v-card',
                                                            { attrs: { flat: '' } },
                                                            [
                                                                s('h-code-mirror', {
                                                                    attrs: { 'read-only': '' },
                                                                    model: {
                                                                        value: e.config,
                                                                        callback: function (t) {
                                                                            e.config = t;
                                                                        },
                                                                        expression: 'config',
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                s(
                                                    'v-col',
                                                    { attrs: { cols: '12', md: '6' } },
                                                    [
                                                        s('h-form-runtime', {
                                                            staticClass: 'mr-3',
                                                            attrs: { schema: e.schema, 'form-schema': e.formSchema },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                )),
            na = ra.exports;
        m()(ra, {
            VBtn: oe.a,
            VCard: he.a,
            VCol: me.a,
            VIcon: le.a,
            VNavigationDrawer: Ns.a,
            VRow: be.a,
            VSpacer: qe.a,
            VToolbar: ge.a,
            VToolbarItems: Ys.a,
            VToolbarTitle: Ys.b,
        });
        var oa = {
                name: 'HFormGenerator',
                components: { HFormModeler: Ms, HFormCodeDrawer: Zs, HFormPreviewDrawer: na },
                data: () => ({
                    windowWidth: document.documentElement.clientWidth,
                    windowHeight: document.documentElement.clientHeight,
                    codeDrawer: !1,
                    formDrawer: !1,
                    sourceCode: '',
                    schemaObject: '',
                    formConfigObject: {},
                }),
                computed: {
                    contentHeight() {
                        return this.windowHeight - 48 + 'px';
                    },
                    canvas() {
                        return this.$refs.modeler.drawingCanvas;
                    },
                    canvasForm() {
                        return this.$refs.modeler.drawingCanvasForm;
                    },
                },
                mounted() {
                    window.onresize = () =>
                        (() => {
                            (window.fullHeight = document.documentElement.clientHeight),
                                (window.fullWidth = document.documentElement.clientWidth),
                                (this.windowHeight = window.fullHeight),
                                (this.windowWidth = window.fullWidth);
                        })();
                },
                methods: {
                    codePreview() {
                        let e = p.create(this.canvas);
                        e && (this.sourceCode = e.code), (this.codeDrawer = !0);
                    },
                    formPreview() {
                        let e = l.toCompleteSchema(this.canvas);
                        e && (this.schemaObject = JSON.stringify(e, null, '\t')),
                            this.canvasForm && (this.formConfigObject = this.canvasForm),
                            (this.formDrawer = !0);
                    },
                },
            },
            la = s('7e6a'),
            pa = Object(u.a)(
                oa,
                function () {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        'v-app',
                        { attrs: { id: 'generator' } },
                        [
                            s(
                                'v-app-bar',
                                {
                                    attrs: {
                                        dense: '',
                                        'clipped-left': '',
                                        'clipped-right': '',
                                        app: '',
                                        color: 'blue darken-3',
                                        dark: '',
                                    },
                                },
                                [
                                    s(
                                        'v-btn',
                                        { attrs: { large: '', icon: '' } },
                                        [s('v-icon', [e._v('mdi-volleyball')])],
                                        1
                                    ),
                                    s('v-toolbar-title', [e._v('Vuetify Form Generator')]),
                                    s('v-spacer'),
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            i = t.attrs;
                                                        return [
                                                            s(
                                                                'v-btn',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            attrs: { large: '', dark: '', icon: '' },
                                                                            on: { click: e.formPreview },
                                                                        },
                                                                        'v-btn',
                                                                        i,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [s('v-icon', [e._v('mdi-code-braces')])],
                                                                1
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [s('span', [e._v('表单预览')])]
                                    ),
                                    s(
                                        'v-tooltip',
                                        {
                                            attrs: { bottom: '' },
                                            scopedSlots: e._u([
                                                {
                                                    key: 'activator',
                                                    fn: function (t) {
                                                        var a = t.on,
                                                            i = t.attrs;
                                                        return [
                                                            s(
                                                                'v-btn',
                                                                e._g(
                                                                    e._b(
                                                                        {
                                                                            attrs: { large: '', dark: '', icon: '' },
                                                                            on: { click: e.codePreview },
                                                                        },
                                                                        'v-btn',
                                                                        i,
                                                                        !1
                                                                    ),
                                                                    a
                                                                ),
                                                                [s('v-icon', [e._v('mdi-play-box-multiple-outline')])],
                                                                1
                                                            ),
                                                        ];
                                                    },
                                                },
                                            ]),
                                        },
                                        [s('span', [e._v('查看代码')])]
                                    ),
                                ],
                                1
                            ),
                            s(
                                'v-main',
                                [s('h-form-modeler', { ref: 'modeler', attrs: { height: e.contentHeight } })],
                                1
                            ),
                            s('h-form-code-drawer', {
                                attrs: { source: e.sourceCode },
                                model: {
                                    value: e.codeDrawer,
                                    callback: function (t) {
                                        e.codeDrawer = t;
                                    },
                                    expression: 'codeDrawer',
                                },
                            }),
                            s('h-form-preview-drawer', {
                                attrs: { source: e.schemaObject, 'form-configs': e.formConfigObject },
                                model: {
                                    value: e.formDrawer,
                                    callback: function (t) {
                                        e.formDrawer = t;
                                    },
                                    expression: 'formDrawer',
                                },
                            }),
                        ],
                        1
                    );
                },
                [],
                !1,
                null,
                null,
                null
            ),
            ca = pa.exports;
        m()(pa, {
            VApp: f.a,
            VAppBar: la.a,
            VBtn: oe.a,
            VIcon: le.a,
            VMain: Fs.a,
            VSpacer: qe.a,
            VToolbarTitle: Ys.b,
            VTooltip: pe.a,
        }),
            (ca.install = function (e) {
                e.component(ca.name, ca);
            }),
            null != typeof window && window.Vue && ca.install(window.Vue);
        var da = { components: { HFormGenerator: ca } },
            ua = Object(u.a)(
                da,
                function () {
                    var e = this.$createElement;
                    return (this._self._c || e)('h-form-generator');
                },
                [],
                !1,
                null,
                null,
                null
            ).exports;
        c.a.use(v.a);
        const ha = [{ path: '/', name: 'Home', component: ua }];
        var ma = new v.a({ routes: ha }),
            fa = s('ac7e'),
            ba = s('b0e8');
        c.a.use(fa.a), c.a.use(ba.a);
        const { en: ga, zh: va } = i,
            xa = new ba.a({ locale: 'zh', messages: { zh: va, en: ga } });
        var ya = new fa.a({ lang: { t: (e, ...t) => xa.t(e, t) } }),
            ka = s('1f45');
        const Sa = {
                code: 'zh_CN',
                messages: {
                    alpha: '{_field_} 只能包含字母',
                    alpha_dash: '{_field_} 只能包含字母数字字符、破折号和下划线',
                    alpha_num: '{_field_}只能包含字母数字字符',
                    alpha_spaces: '{_field_}只能包含字母字符和空格',
                    between: '{_field_}必须在{min}与{max}之间',
                    confirmed: '{_field_}不能和{target}匹配',
                    digits: '{_field_}必须是数字，且精确到{length}位数',
                    dimensions: '{_field_}必须在{width}像素与{height}像素之间',
                    email: '{_field_} 不是一个有效的邮箱地址',
                    excluded: '{_field_}不是一个有效值',
                    ext: '{_field_}不是一个有效的文件',
                    image: '{_field_}不是一张有效的图片',
                    oneOf: '{_field_}不是一个有效值',
                    integer: '{_field_}必须是整数',
                    length: '{_field_}长度必须为{length}',
                    max: '{_field_}不能超过{length}个字符',
                    max_value: '{_field_}必须小于或等于{max}',
                    mimes: '{_field_}不是一个有效的文件类型',
                    min: '{_field_}必须至少有{length}个字符',
                    min_value: '{_field_}必须大于或等于{min}',
                    numeric: '{_field_}只能包含数字字符',
                    regex: '{_field_}格式无效',
                    required: '{_field_} 不能为空',
                    required_if: '{_field_} 是必须的',
                    size: '{_field_}必须小于{size}KB',
                    double: '{_field_}字段必须为有效的小数',
                },
            },
            Ia = ['dimensions', 'oneOf', 'required_if'];
        Object(Qs.e)('eager');
        const wa = [];
        Object.keys(ka).forEach((e) => {
            if (!Ia.includes(e)) {
                let t = Sa.messages[e];
                Object(Qs.c)(e, { ...ka[e], message: t }),
                    wa.push({ name: a.lodash.startCase(e), type: e, message: t });
            }
        }),
            Object(Qs.d)('zh_CN', Sa);
        var Oa = {
                install(e, t) {
                    (e.prototype.$lib = a),
                        (e.prototype.$rules = wa),
                        e.component('ValidationProvider', Qs.b),
                        e.component('ValidationObserver', Qs.a);
                },
            },
            Pa = (s('79d0'), s('8b9f'), s('0c69')),
            Ca = s.n(Pa);
        (c.a.config.productionTip = !1),
            c.a.use(Oa),
            c.a.component('draggable', Ca.a),
            new c.a({ router: ma, vuetify: ya, render: (e) => e(g) }).$mount('#app');
    },
    5895: function (e, t, s) {
        var a = {
            './3024-day.css': '783a',
            './3024-night.css': '1745',
            './abcdef.css': '7fb9',
            './ambiance-mobile.css': '2070',
            './ambiance.css': '3790',
            './ayu-dark.css': 'ac41',
            './ayu-mirage.css': '0ecf',
            './base16-dark.css': '526d',
            './base16-light.css': 'fb34',
            './bespin.css': '5643',
            './blackboard.css': 'a6c2',
            './cobalt.css': '5176',
            './colorforth.css': '83b9',
            './darcula.css': 'cee5',
            './dracula.css': '9b8d',
            './duotone-dark.css': 'ff31',
            './duotone-light.css': 'f987',
            './eclipse.css': '2884',
            './elegant.css': '7ea4',
            './erlang-dark.css': 'eede',
            './gruvbox-dark.css': '34b6',
            './hopscotch.css': '5223',
            './icecoder.css': '8684',
            './idea.css': '40bb',
            './isotope.css': '24c3',
            './lesser-dark.css': '810b',
            './liquibyte.css': 'c6a3',
            './lucario.css': '7490',
            './material-darker.css': '04ec',
            './material-ocean.css': '13fc',
            './material-palenight.css': 'ea43',
            './material.css': '67c7',
            './mbo.css': '0fcf',
            './mdn-like.css': '7e53',
            './midnight.css': 'd178',
            './monokai.css': '02db',
            './moxer.css': '6214',
            './neat.css': '5581',
            './neo.css': '31e2',
            './night.css': '7a59',
            './nord.css': 'b6ac',
            './oceanic-next.css': '89ee',
            './panda-syntax.css': '2666',
            './paraiso-dark.css': 'c661',
            './paraiso-light.css': '0317',
            './pastel-on-dark.css': '4b03',
            './railscasts.css': 'fa04',
            './rubyblue.css': '88ad',
            './seti.css': '6dbe',
            './shadowfox.css': '77f8',
            './solarized.css': 'acb9',
            './ssms.css': '27fa',
            './the-matrix.css': '44fa',
            './tomorrow-night-bright.css': '29f4',
            './tomorrow-night-eighties.css': 'fb38',
            './ttcn.css': 'd2aa',
            './twilight.css': '0f3e',
            './vibrant-ink.css': '4e4e',
            './xq-dark.css': 'f0c0',
            './xq-light.css': 'c474',
            './yeti.css': 'b871',
            './yonce.css': 'b817',
            './zenburn.css': '26c7',
        };
        function i(e) {
            var t = r(e);
            return s(t);
        }
        function r(e) {
            if (!s.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            return a[e];
        }
        (i.keys = function () {
            return Object.keys(a);
        }),
            (i.resolve = r),
            (e.exports = i),
            (i.id = '5895');
    },
    '795b': function (e, t, s) {},
    9183: function (e, t, s) {},
    9366: function (e, t, s) {},
    9729: function (e, t, s) {},
    d1c9: function (e, t, s) {
        'use strict';
        s('9729');
    },
    f4f5: function (e, t, s) {
        'use strict';
        s.d(t, 'e', function () {
            return a;
        }),
            s.d(t, 'b', function () {
                return o;
            }),
            s.d(t, 'g', function () {
                return l;
            }),
            s.d(t, 'd', function () {
                return c;
            }),
            s.d(t, 'a', function () {
                return d;
            }),
            s.d(t, 'f', function () {
                return g;
            }),
            s.d(t, 'c', function () {
                return v;
            }),
            s.d(t, 'h', function () {
                return x;
            }),
            s.d(t, 'i', function () {
                return y;
            });
        var a = {
            data: () => ({ currentOneOf: null, currentTab: null, showCurrentOneOf: !0, subModels: {} }),
            computed: {
                subSchemas() {
                    return this.fullSchema.oneOf || this.fullSchema.anyOf;
                },
                subSchemasConstProp() {
                    if (!this.subSchemas) return;
                    const e = this.subSchemas[0].properties,
                        t = Object.keys(e).find((t) => !!e[t].const);
                    return t
                        ? { ...e[t], key: t, htmlDescription: this.fullOptions.markdown(e[t].description || '') }
                        : void 0;
                },
                subSchemasRequired() {
                    return (
                        !(!this.subSchemas || !this.subSchemasConstProp) &&
                        (!!this.fullSchema.oneOf ||
                            !!(
                                this.fullSchema.anyOf &&
                                this.fullSchema.required &&
                                this.fullSchema.required.find((e) => e === this.oneOfConstProp.key)
                            ) ||
                            void 0)
                    );
                },
                subSchemasRules() {
                    const e = [];
                    return (
                        this.subSchemasRequired &&
                            e.push((e) => (null != e && '' !== e) || this.fullOptions.messages.required),
                        e
                    );
                },
            },
            watch: {
                currentOneOf(e, t) {
                    (this.showCurrentOneOf = !1),
                        this.$nextTick(() => {
                            (this.showCurrentOneOf = !0),
                                this.currentOneOf
                                    ? this.fixProperties()
                                    : this.$set(this.subModels, 'currentOneOf', {}),
                                this.input(this.value),
                                this.$emit('change', this.value);
                        });
                },
                subModels: {
                    handler() {
                        this.fixProperties();
                    },
                    deep: !0,
                },
            },
            methods: {
                isSection: (e) =>
                    (e.properties || e.allOf || Array.isArray(e.items)) &&
                    e.title &&
                    !e['x-fromUrl'] &&
                    !e['x-fromData'] &&
                    !e.contentMediaType &&
                    'file' !== e['x-display'],
                initObjectContainer(e) {
                    'object' === this.fullSchema.type &&
                        (this.fullSchema.allOf &&
                            this.fullSchema.allOf.forEach((t, s) => {
                                this.$set(this.subModels, 'allOf-' + s, JSON.parse(JSON.stringify(e)));
                            }),
                        (this.currentOneOf = null),
                        this.subSchemas &&
                            !this.currentOneOf &&
                            this.subSchemasConstProp &&
                            (e && e[this.subSchemasConstProp.key]
                                ? (this.currentOneOf = this.subSchemas.find(
                                      (t) =>
                                          t.properties[this.subSchemasConstProp.key].const ===
                                          e[this.subSchemasConstProp.key]
                                  ))
                                : this.fullSchema.default &&
                                  (this.currentOneOf = this.subSchemas.find(
                                      (e) =>
                                          e.properties[this.subSchemasConstProp.key].const ===
                                          this.fullSchema.default[this.subSchemasConstProp.key]
                                  ))),
                        this.currentOneOf
                            ? this.$set(this.subModels, 'currentOneOf', JSON.parse(JSON.stringify(e)))
                            : this.$set(this.subModels, 'currentOneOf', {}));
                },
                renderSection(e, t, s, a) {
                    if (!a) return;
                    const i = s || t.key;
                    return 'hidden' === t['x-display'] || (t.readOnly && this.fullOptions.hideReadOnly)
                        ? [a]
                        : 'expansion-panels' === this.display
                        ? [
                              e('v-expansion-panel', [
                                  e(
                                      'v-expansion-panel-header',
                                      {
                                          class: {
                                              'error--text':
                                                  this.childrenInputs[i] &&
                                                  this.childrenInputs[i].hasValidatedChildError,
                                          },
                                      },
                                      [t.title]
                                  ),
                                  e('v-expansion-panel-content', { props: { eager: !0 } }, [a]),
                              ]),
                          ]
                        : 'tabs' === this.display
                        ? [
                              e('v-tab', { props: { href: `#tab-${this.fullOptions.idPrefix}${this.dashKey}-${i}` } }, [
                                  e(
                                      'span',
                                      {
                                          class: {
                                              'error--text':
                                                  this.childrenInputs[i] &&
                                                  this.childrenInputs[i].hasValidatedChildError,
                                          },
                                      },
                                      [t.title]
                                  ),
                              ]),
                              e(
                                  'v-tab-item',
                                  {
                                      props: {
                                          value: `tab-${this.fullOptions.idPrefix}${this.dashKey}-${i}`,
                                          eager: !0,
                                      },
                                  },
                                  [e('v-card', { props: { tile: !0, flat: !0 } }, [e('v-card-text', [a])])]
                              ),
                          ]
                        : [
                              e('v-row', { class: 'ma-0 ' + this.fullOptions.sectionsClass }, [
                                  e(
                                      'span',
                                      {
                                          class:
                                              'py-2 ' +
                                              (this.fullOptions.sectionsTitlesClasses[this.sectionDepth] ||
                                                  this.fullOptions.sectionsTitlesClasses[
                                                      this.fullOptions.sectionsTitlesClasses.length - 1
                                                  ]),
                                      },
                                      [t.title + ' ']
                                  ),
                                  a,
                              ]),
                          ];
                },
                renderChildProp(e, t, s, a, i) {
                    const r = s ? this.subModels : this.value,
                        n = s || t.key;
                    let o = r[n];
                    return (
                        void 0 === o &&
                            ((o = this.defaultValue(t)),
                            void 0 !== t.default && (o = JSON.parse(JSON.stringify(t.default))),
                            null != o && (this.$set(r, n, o), this.input(this.value))),
                        e('h-form-renderer', {
                            props: {
                                schema: { readOnly: this.fullSchema.readOnly, ...t },
                                value: o,
                                modelRoot: this.modelRoot || this.value,
                                modelKey: n,
                                parentKey: this.fullKey + '.',
                                options: this.fullOptions,
                                sectionDepth: a,
                            },
                            on: {
                                error: (e) => this.$emit('error', e),
                                input: (e) => {
                                    void 0 === e
                                        ? Array.isArray(r) && parseInt(n) < r.length - 1
                                            ? this.$set(r, n, e)
                                            : this.$delete(r, n)
                                        : this.$set(r, n, e),
                                        this.$emit('input', this.value);
                                },
                                change: (e) => this.$emit('change', this.value),
                            },
                        })
                    );
                },
                renderObjectContainer(e) {
                    if ('object' !== this.fullSchema.type && !Array.isArray(this.fullSchema.items)) return;
                    if (((this.isObjectContainer = !0), [void 0, null].includes(this.value))) return [];
                    const t = [];
                    let s = [];
                    if (
                        (this.fullSchema.properties &&
                            this.fullSchema.properties.forEach((a) => {
                                if (this.isSection(a)) {
                                    const t = this.renderChildProp(e, a, null, this.sectionDepth + 1);
                                    s = s.concat(this.renderSection(e, a, null, t));
                                } else t.push(this.renderChildProp(e, a, null, this.sectionDepth));
                            }),
                        Array.isArray(this.fullSchema.items) &&
                            this.fullSchema.items.forEach((a, i) => {
                                const r = { ...a, key: '' + i },
                                    n =
                                        this.value.length > i ||
                                        (this.fullSchema.minItems && this.fullSchema.minItems > i);
                                if (this.isSection(a)) {
                                    const t = this.renderChildProp(e, r, null, this.sectionDepth + 1, n);
                                    s = s.concat(this.renderSection(e, r, null, t));
                                } else t.push(this.renderChildProp(e, r, null, this.sectionDepth, n));
                            }),
                        this.fullSchema.allOf &&
                            this.fullSchema.allOf.forEach((a, i) => {
                                const r = { ...a, type: 'object', key: '' + i };
                                if (this.isSection(a)) {
                                    const t = this.renderChildProp(e, r, 'allOf-' + i, this.sectionDepth + 1);
                                    s = s.concat(this.renderSection(e, r, 'allOf-' + i, t));
                                } else t.push(this.renderChildProp(e, r, 'allOf-' + i, this.sectionDepth));
                            }),
                        'expansion-panels' === this.display && s.length)
                    ) {
                        const t = { ...this.fullOptions.expansionPanelsProps, ...this.fullSchema['x-props'] };
                        s = [e('v-expansion-panels', { props: t }, s)];
                    }
                    if ('tabs' === this.display && s.length) {
                        const t = { ...this.fullOptions.tabsProps, ...this.fullSchema['x-props'] };
                        this.currentTab &&
                            this.childrenInputs[this.currentTab] &&
                            this.childrenInputs[this.currentTab].hasValidatedChildError &&
                            (t.sliderColor = 'error'),
                            (s = [
                                e(
                                    'v-tabs',
                                    {
                                        props: t,
                                        on: {
                                            change: (e) => {
                                                this.currentTab = e.split('-').pop();
                                            },
                                        },
                                    },
                                    s
                                ),
                            ]);
                    }
                    if (this.subSchemas && this.subSchemas.length) {
                        const s = {
                                ...this.commonFieldProps,
                                value: this.currentOneOf,
                                label:
                                    (this.subSchemasConstProp && this.subSchemasConstProp.title) ||
                                    this.fullSchema.title,
                                items: this.subSchemas.filter(
                                    (e) => e.properties && e.properties[this.subSchemasConstProp.key]
                                ),
                                required: this.subSchemasRequired,
                                clearable: !this.subSchemasRequired,
                                itemValue: (e) => e.properties[this.subSchemasConstProp.key].const,
                                itemText: 'title',
                                rules: this.subSchemasRules,
                                returnObject: !0,
                            },
                            a = {
                                input: (e) => {
                                    this.currentOneOf = e;
                                },
                            };
                        t.push(e('v-select', { props: s, on: a }, [this.renderTooltip(e, 'append-outer')])),
                            this.currentOneOf &&
                                this.showCurrentOneOf &&
                                t.push(
                                    this.renderChildProp(
                                        e,
                                        { ...this.currentOneOf, type: 'object', title: null },
                                        'currentOneOf',
                                        this.sectionDepth + 1
                                    )
                                );
                    }
                    return [
                        e(
                            'v-row',
                            { class: 'ma-0 ' + this.fullOptions.objectContainerClass },
                            [
                                this.fullSchema.description &&
                                    e('v-col', {
                                        props: { cols: 12 },
                                        class: { 'pa-0': !0 },
                                        domProps: { innerHTML: this.htmlDescription },
                                    }),
                            ]
                                .concat(t)
                                .concat(s)
                        ),
                    ];
                },
            },
        };
        const i = (e) => {
                const t = '' + e;
                return 1 === t.length ? '0' + t : t;
            },
            r = (e) => {
                const t = new Date(),
                    s = e[0].split('-');
                t.setFullYear(Number(s[0])), t.setMonth(Number(s[1]) - 1), t.setDate(Number(s[2]));
                const a = e[1].split(':');
                return (
                    t.setHours(Number(a[0] || '00')),
                    t.setMinutes(Number(a[1] || '00')),
                    t.setSeconds(0),
                    ((e) => {
                        const t = e.getTimezoneOffset(),
                            s = `${i(parseInt(Math.abs(t / 60)))}:${i(Math.abs(t % 60))}`;
                        let a;
                        return (
                            (a = t < 0 ? '+' + s : t > 0 ? '-' + s : 'Z'),
                            `${e.getFullYear()}-${i(e.getMonth() + 1)}-${i(e.getDate())}T${i(e.getHours())}:${i(
                                e.getMinutes()
                            )}:${i(e.getSeconds())}${a}`
                        );
                    })(t)
                );
            },
            n = (e) => e + ':00Z';
        var o = {
                data: () => ({ dateProp: { tab: 'tab-date', menu: !1, parts: [null, null], lastValue: null } }),
                methods: {
                    renderDateProp(e) {
                        if (
                            'string' !== this.fullSchema.type ||
                            !['date', 'date-time', 'time'].includes(this.fullSchema.format)
                        )
                            return;
                        let t,
                            s = this.fullOptions.icons.calendar;
                        if ('time' === this.fullSchema.format)
                            (t = e('v-time-picker', {
                                props: {
                                    value: ((o = this.value), o ? o.slice(0, 5) : ''),
                                    ...this.fullSchema['x-props'],
                                },
                                on: { input: (e) => this.input(n(e)), change: (e) => this.change(n(e)) },
                            })),
                                (s = this.fullOptions.icons.clock);
                        else if ('date' === this.fullSchema.format)
                            t = e('v-date-picker', {
                                props: { value: this.value, ...this.fullSchema['x-props'] },
                                on: {
                                    input: (e) => {
                                        this.input(e), (this.dateProp.menu = !1);
                                    },
                                    change: (e) => this.change(e),
                                },
                            });
                        else {
                            this.value !== this.dateProp.lastValue &&
                                (this.dateProp.parts = [
                                    `${(a = new Date(this.value)).getFullYear()}-${i(a.getMonth() + 1)}-${i(
                                        a.getDate()
                                    )}`,
                                    `${i(a.getHours())}:${i(a.getMinutes())}`,
                                ]),
                                (this.dateProp.lastValue = this.value);
                            const s = () => {
                                    if (this.dateProp.parts[1]) {
                                        const e = r(this.dateProp.parts);
                                        this.input(e), this.change(e);
                                    }
                                },
                                n = [
                                    e('v-tab', { props: { href: '#tab-date' } }, [
                                        e('v-icon', [this.fullOptions.icons.calendar]),
                                    ]),
                                    e('v-tab', { props: { href: '#tab-time', disabled: !this.dateProp.parts[0] } }, [
                                        e('v-icon', [this.fullOptions.icons.clock]),
                                    ]),
                                    e('v-tab-item', { props: { value: 'tab-date' } }, [
                                        e('v-date-picker', {
                                            props: {
                                                ...this.fullOptions.datePickerProps,
                                                locale: this.fullOptions.locale,
                                                value: this.dateProp.parts[0],
                                            },
                                            on: {
                                                input: (e) => {
                                                    (this.dateProp.parts[0] = e), (this.dateProp.tab = 'tab-time'), s();
                                                },
                                            },
                                        }),
                                    ]),
                                    e('v-tab-item', { props: { value: 'tab-time' } }, [
                                        e('v-time-picker', {
                                            props: {
                                                ...this.fullOptions.timePickerProps,
                                                locale: this.fullOptions.locale,
                                                value: this.dateProp.parts[1],
                                            },
                                            on: {
                                                input: (e) => {
                                                    (this.dateProp.parts[1] = e), s();
                                                },
                                            },
                                        }),
                                    ]),
                                ];
                            t = e(
                                'v-tabs',
                                {
                                    props: { grow: !0, value: this.dateProp.tab },
                                    on: {
                                        input: (e) => {
                                            this.dateProp.tab = e;
                                        },
                                    },
                                    class: 'vjsf-date-time',
                                },
                                n
                            );
                        }
                        var a, o;
                        const l = {};
                        return (
                            (l.activator = ({ on: t }) =>
                                e(
                                    'v-text-field',
                                    {
                                        props: {
                                            ...this.commonFieldProps,
                                            value: this.formattedValue,
                                            clearable: !this.required,
                                            readonly: !0,
                                            prependIcon: s,
                                        },
                                        on: { ...t, input: (e) => this.input(e), change: (e) => this.change(e) },
                                    },
                                    [this.renderTooltip(e, 'append-outer')]
                                )),
                            [
                                e(
                                    'v-menu',
                                    {
                                        scopedSlots: l,
                                        props: {
                                            value: this.dateProp.menu,
                                            disabled: this.disabled,
                                            closeOnContentClick: !1,
                                            nudgeRight: 40,
                                            transition: 'scale-transition',
                                            offsetY: !0,
                                            fullWidth: !0,
                                            minWidth: '290px',
                                        },
                                        on: {
                                            input: (e) => {
                                                (this.dateProp.menu = e), (this.dateProp.tab = 'tab-date');
                                            },
                                        },
                                    },
                                    [t]
                                ),
                            ]
                        );
                    },
                },
            },
            l =
                (s('108d'),
                s('0e87'),
                {
                    computed: {
                        isSimpleProp() {
                            return (
                                'string' === this.fullSchema.type ||
                                ['number', 'integer'].includes(this.fullSchema.type) ||
                                'boolean' === this.fullSchema.type ||
                                ('array' === this.fullSchema.type &&
                                    ['string', 'number', 'integer'].includes(this.fullSchema.items.type))
                            );
                        },
                    },
                    methods: {
                        renderSimpleProp(e) {
                            if (!this.isSimpleProp) return;
                            const t = { ...this.commonFieldProps },
                                s = [],
                                a = {},
                                i = { input: (e) => this.input(e), change: (e) => this.change(e) };
                            if (
                                (['number', 'integer'].includes(this.fullSchema.type) &&
                                    (i.input = (e) => {
                                        this.input(
                                            'integer' === this.fullSchema.type ? parseInt(e, 10) : parseFloat(e)
                                        );
                                    }),
                                'boolean' === this.fullSchema.type &&
                                    (i.change = (e) => {
                                        this.input(e || !1), this.change(e || !1);
                                    }),
                                'array' === this.fullSchema.type &&
                                    ['string', 'number', 'integer'].includes(this.fullSchema.items.type) &&
                                    'string' !== this.fullSchema.items.type &&
                                    ((t.type = 'number'),
                                    (i.input = (e) => {
                                        const t = e
                                            .map((e) =>
                                                'integer' === this.fullSchema.items.type
                                                    ? parseInt(e, 10)
                                                    : parseFloat(e)
                                            )
                                            .filter((e) => !isNaN(e));
                                        this.input(t);
                                    })),
                                this.htmlDescription)
                            ) {
                                let t = 'append-outer';
                                s.push(this.renderTooltip(e, t));
                            }
                            let r = this.fullSchema['x-rules'];
                            return r
                                ? [
                                      e('validation-provider', {
                                          props: { name: t.label, rules: r },
                                          scopedSlots: {
                                              default: ({ errors: r }) =>
                                                  e(
                                                      this.fullSchema.tag,
                                                      {
                                                          props: { ...t, required: !0, 'error-messages': r },
                                                          on: i,
                                                          scopedSlots: a,
                                                      },
                                                      s
                                                  ),
                                          },
                                      }),
                                  ]
                                : [e(this.fullSchema.tag, { props: t, on: i, scopedSlots: a }, s)];
                        },
                    },
                });
        const p = async (e, t, s) => {
            let a = e;
            if (
                (console.log(t.properties),
                'string' === t.type || (t.properties.data && 'string' === t.properties.data.type))
            ) {
                const t = await ((e) =>
                    new Promise((t) => {
                        const s = new FileReader();
                        (s.onload = () => t(s.result)), s.readAsDataURL(e);
                    }))(e);
                a = s ? t : t.split(';base64,')[1];
            }
            return 'string' === t.type
                ? a
                : {
                      name: e.name,
                      lastModified: new Date(e.lastModified).toISOString(),
                      size: e.size,
                      type: e.type,
                      data: a,
                  };
        };
        var c = {
                computed: {
                    isFileProp() {
                        return (
                            !(
                                'string' !== this.fullSchema.type ||
                                (!this.fullSchema.contentMediaType && 'file' !== this.display)
                            ) ||
                            !(
                                'array' !== this.fullSchema.type ||
                                !this.fullSchema.items ||
                                'string' !== this.fullSchema.items.type ||
                                (!this.fullSchema.items.contentMediaType &&
                                    'file' !== this.display &&
                                    'file' !== this.fullSchema.items['x-display'])
                            ) ||
                            !(
                                'object' !== this.fullSchema.type ||
                                (!this.fullSchema.contentMediaType && 'file' !== this.display)
                            ) ||
                            !(
                                'array' !== this.fullSchema.type ||
                                !this.fullSchema.items ||
                                'object' !== this.fullSchema.items.type ||
                                (!this.fullSchema.items.contentMediaType &&
                                    'file' !== this.display &&
                                    'file' !== this.fullSchema.items['x-display'])
                            )
                        );
                    },
                },
                created() {
                    this.isFileProp &&
                        !this.fullSchema.writeOnly &&
                        console.warn(
                            'File property should always be used with writeOnly attribute. Files are uploaded but not read in existing data.'
                        );
                },
                methods: {
                    renderFileProp(e) {
                        if (!this.isFileProp) return;
                        const t = { ...this.commonFieldProps, ...this.fullOptions.fileInputProps };
                        delete t.value;
                        const s = {};
                        this.fullSchema.contentMediaType && (s.accept = this.fullSchema.contentMediaType),
                            this.fullSchema.items &&
                                this.fullSchema.items.contentMediaType &&
                                (s.accept = this.fullSchema.items.contentMediaType),
                            'array' === this.fullSchema.type && (s.multiple = !0);
                        const a = [...this.renderPropSlots(e)],
                            i = {
                                change: async (e) => {
                                    if ('array' === this.fullSchema.type) {
                                        const t = await Promise.all(
                                            e.map((e) => p(e, this.fullSchema.items, this.fullOptions.filesAsDataUrl))
                                        );
                                        this.input(t), this.change(t);
                                    } else {
                                        const t = await p(e, this.resolvedSchema, this.fullOptions.filesAsDataUrl);
                                        this.input(t), this.change(t);
                                    }
                                },
                            };
                        return (
                            this.htmlDescription && a.push(this.renderTooltip(e, 'append-outer')),
                            [e('v-file-input', { props: t, attrs: s, on: i }, a)]
                        );
                    },
                },
            },
            d = {
                computed: {
                    isColorProp() {
                        return (
                            'string' === this.fullSchema.type &&
                            ('hexcolor' === this.fullSchema.format || 'color-picker' === this.display)
                        );
                    },
                },
                methods: {
                    renderColorProp(e) {
                        if (!this.isColorProp) return;
                        const t = [this.renderTooltip(e, 'append')];
                        return (
                            t.push(
                                e('v-menu', {
                                    props: {
                                        closeOnContentClick: !1,
                                        closeOneClick: !0,
                                        direction: 'bottom',
                                        offsetY: !0,
                                    },
                                    scopedSlots: {
                                        activator: ({ on: t }) =>
                                            e('div', {
                                                on: t,
                                                style: `background-color: ${this.value};margin-left: 10px;`,
                                                class: this.value
                                                    ? 'color-picker-trigger'
                                                    : 'color-picker-trigger color-picker-trigger-empty',
                                            }),
                                        default: () =>
                                            e('v-color-picker', {
                                                props: {
                                                    flat: !0,
                                                    ...this.fullOptions.colorPickerProps,
                                                    ...this.fullSchema['x-props'],
                                                    value: this.value || '',
                                                },
                                                on: {
                                                    input: (e) => {
                                                        console.log(e), this.input(e), this.change(e);
                                                    },
                                                },
                                            }),
                                    },
                                })
                            ),
                            [
                                e(
                                    'v-input',
                                    {
                                        props: {
                                            name: this.fullKey,
                                            label: this.label,
                                            required: this.required,
                                            rules: this.rules,
                                            disabled: this.disabled,
                                            ...this.fullOptions.fieldProps,
                                        },
                                    },
                                    t
                                ),
                            ]
                        );
                    },
                },
            };
        const u = {};
        var h = u;
        u.getSelectItems = (e, t, s, a) => {
            const i = [];
            if (e)
                if (
                    ('object' === t.type && t.properties && Object.keys(t.properties).length) ||
                    ('array' === t.type &&
                        t.items &&
                        'object' === t.items.type &&
                        t.items.properties &&
                        Object.keys(t.items.properties).length)
                ) {
                    const s = t.properties ? t.properties.map((e) => e.key) : Object.keys(t.items.properties);
                    e.forEach((e) => {
                        const t = {};
                        s.forEach((s) => {
                            void 0 !== e[s] && (t[s] = e[s]);
                        }),
                            i.push(t);
                    });
                } else
                    e.forEach((e) => {
                        if ('object' == typeof e) i.push(e);
                        else {
                            const t = { [s]: e };
                            a && (t[a] = e), i.push(t);
                        }
                    });
            else;
            return i;
        };
        const m = (e, t, s) => {
            if ([null, void 0].includes(e)) return !1;
            if ([null, void 0].includes(t)) return !1;
            return JSON.stringify(e[s]) === JSON.stringify(t[s]);
        };
        (u.fillSelectItems = (e, t, s, a, i) => {
            if (t)
                if ('array' === e.type)
                    t.map((e) => e)
                        .reverse()
                        .forEach((e) => {
                            const t = i ? e : { [a]: e };
                            s.find((e) => m(e, t, a)) || s.push(t);
                        });
                else {
                    const e = i ? t : { [a]: t };
                    s.find((t) => m(t, e, a)) || s.push(e);
                }
        }),
            (u.fillList = (e, t, s, a) => {
                if (t)
                    return s.length
                        ? (s.forEach((e) => {
                              t.find((t) => m(e, t, a)) || t.push(e);
                          }),
                          t.forEach((e, i) => {
                              s.find((t) => m(t, e, a)) || (t[i] = null);
                          }),
                          t.filter((e) => !!e))
                        : [];
            });
        const f = s('e5cc'),
            b = s('02d5');
        var g = {
                data: () => ({ rawSelectItems: null, selectItems: null, q: '', fromUrlParams: {} }),
                computed: {
                    isSelectProp() {
                        return (
                            'list' !== this.display &&
                            (!!this.fullSchema.enum ||
                                !(
                                    'array' !== this.fullSchema.type ||
                                    !this.fullSchema.items ||
                                    !this.fullSchema.items.enum
                                ) ||
                                !!this.oneOfSelect ||
                                !!this.fromUrl ||
                                !!this.fromData)
                        );
                    },
                    oneOfSelect() {
                        return (
                            !(
                                'array' !== this.fullSchema.type ||
                                !['string', 'integer', 'number'].includes(this.fullSchema.items.type) ||
                                !this.fullSchema.items.oneOf
                            ) ||
                            !(!['string', 'integer', 'number'].includes(this.fullSchema.type) || !this.fullSchema.oneOf)
                        );
                    },
                    fromUrl() {
                        return this.fullSchema['x-fromUrl'];
                    },
                    fromUrlWithQuery() {
                        return !(!this.fullSchema['x-fromUrl'] || -1 === this.fullSchema['x-fromUrl'].indexOf('{q}'));
                    },
                    fromUrlKeys() {
                        return this.fullSchema['x-fromUrl']
                            ? f(this.fullSchema['x-fromUrl'], /\{(.*?)\}/g)
                                  .toArray()
                                  .filter((e) => 'q' !== e)
                            : null;
                    },
                    fromData() {
                        return this.fullSchema['x-fromData'];
                    },
                    itemKey() {
                        return this.fullSchema['x-itemKey'] || 'key';
                    },
                    itemTitle() {
                        return this.fullSchema['x-itemTitle'] || 'title';
                    },
                    itemIcon() {
                        return this.fullSchema['x-itemIcon'] || ('icon' === this.display ? this.itemKey : null);
                    },
                    returnObject() {
                        return (
                            'object' === this.fullSchema.type ||
                            (this.fullSchema.items && 'object' === this.fullSchema.items.type)
                        );
                    },
                },
                watch: {
                    q() {
                        (this.value && this.value[this.itemTitle] === this.q) || this.fetchSelectItems();
                    },
                    rawSelectItems: {
                        handler() {
                            this.updateSelectItems();
                        },
                        immediate: !0,
                    },
                },
                methods: {
                    initSelectProp(e) {
                        this.fromUrlWithQuery && e && void 0 !== e[this.itemTitle] && (this.q = e[this.itemTitle]),
                            this.fromUrl && this.fetchSelectItems(),
                            (('array' === this.fullSchema.type && this.fullSchema.items.enum) ||
                                this.fullSchema.enum) &&
                                (this.rawSelectItems =
                                    'array' === this.fullSchema.type
                                        ? this.fullSchema.items.enum
                                        : this.fullSchema.enum),
                            this.oneOfSelect &&
                                (this.rawSelectItems = ('array' === this.fullSchema.type
                                    ? this.fullSchema.items
                                    : this.fullSchema
                                ).oneOf.map((e) => ({
                                    ...e,
                                    [this.itemKey]: e.const || (e.enum && e.enum[0]),
                                    [this.itemTitle]: e.title,
                                })));
                        const t = this.modelRoot ? 'modelRoot.' : 'value.';
                        this.fullSchema['x-fromData'] &&
                            this.$watch(
                                t + this.fullSchema['x-fromData'],
                                (e) => {
                                    this.rawSelectItems = e;
                                },
                                { immediate: !0 }
                            ),
                            this.fromUrlKeys &&
                                this.fromUrlKeys.forEach((e) => {
                                    e.startsWith('context.')
                                        ? this.$watch(
                                              'options.' + e,
                                              (t) => {
                                                  (this.fromUrlParams[e] = t), this.fetchSelectItems();
                                              },
                                              { immediate: !0 }
                                          )
                                        : this.$watch(
                                              t + e,
                                              (t) => {
                                                  (this.fromUrlParams[e] = t), this.fetchSelectItems();
                                              },
                                              { immediate: !0 }
                                          );
                                });
                    },
                    fetchSelectItems() {
                        if (!this.fullOptions.httpLib)
                            return (
                                console.error('No http lib found to perform ajax request'),
                                this.$emit('error', 'No http lib found to perform ajax request')
                            );
                        (this.debouncedFetch =
                            this.debouncedFetch ||
                            b(() => {
                                let e = this.fullSchema['x-fromUrl'].replace('{q}', this.q || '');
                                for (const t of this.fromUrlKeys) {
                                    if (void 0 === this.fromUrlParams[t]) return;
                                    e = e.replace(`{${t}}`, this.fromUrlParams[t]);
                                }
                                (this.loading = !0),
                                    this.fullOptions.httpLib
                                        .get(e)
                                        .then((t) => {
                                            const s = t.data || t.body,
                                                a = this.fullSchema['x-itemsProp']
                                                    ? s[this.fullSchema['x-itemsProp']]
                                                    : s;
                                            if (!Array.isArray(a))
                                                throw new Error(`Result of http fetch ${e} is not an array`);
                                            (this.rawSelectItems = a), (this.loading = !1);
                                        })
                                        .catch((e) => {
                                            console.error(e), this.$emit('error', e.message), (this.loading = !1);
                                        });
                            }, 250)),
                            this.debouncedFetch();
                    },
                    updateSelectItems() {
                        const e = h.getSelectItems(this.rawSelectItems, this.fullSchema, this.itemKey, this.itemIcon);
                        'list' === this.display && this.input(h.fillList(this.fullSchema, this.value, e, this.itemKey)),
                            h.fillSelectItems(this.fullSchema, this.value, e, this.itemKey, this.returnObject),
                            JSON.stringify(e) !== JSON.stringify(this.selectItems) && (this.selectItems = e);
                    },
                    renderSelectIcon(e, t) {
                        if (!this.itemIcon) return;
                        const s = t[this.itemIcon];
                        if (!s) return;
                        let a = e('v-icon', null, s);
                        return (
                            s.startsWith('http://') || s.startsWith('https://')
                                ? (a = e('img', { domProps: { src: s }, style: 'height:100%;width:100%;' }))
                                : (s.startsWith('<?xml') || s.startsWith('<svg')) &&
                                  (a = e('div', { domProps: { innerHTML: s } })),
                            e('v-avatar', { props: { tile: !0, size: 20 }, class: 'mr-2' }, [a])
                        );
                    },
                    renderSelectItem(e, t) {
                        return e('v-list-item-content', [e('v-list-item-title', t[this.itemTitle] || t[this.itemKey])]);
                    },
                    renderSelectionControlItem(e, t) {
                        const s = {
                                change: (e) => {
                                    this.input(e), this.$emit('change', e);
                                },
                            },
                            a = {
                                label: t[this.itemTitle] || t[this.itemKey],
                                value: t[this.itemKey],
                                inputValue: this.value,
                                multiple: 'array' === this.fullSchema.type,
                                hideDetails: !0,
                            };
                        return e('v-' + this.display, { props: a, on: s, class: 'pb-1' });
                    },
                    renderSelectionControlGroup(e) {
                        const t = {
                                change: (e) => {
                                    this.input(e), this.change(e);
                                },
                            },
                            s = { ...this.commonFieldProps, multiple: 'array' === this.fullSchema.type, label: null },
                            a = e(
                                'legend',
                                {
                                    class: `v-label theme--${this.theme.isDark ? 'dark' : 'light'} ${
                                        this.hasError ? 'error--text' : ''
                                    }`,
                                },
                                this.commonFieldProps.label
                            ),
                            i = this.selectItems.map((t) => this.renderSelectionControlItem(e, t));
                        return [
                            e(
                                'v-input',
                                {
                                    props: s,
                                    on: t,
                                    class:
                                        'v-input--selection-controls v-input--radio-group v-input--radio-group--column',
                                },
                                [
                                    e('div', { class: 'v-input--radio-group__input' }, [a, ...i]),
                                    this.renderTooltip(e, 'append'),
                                ]
                            ),
                        ];
                    },
                    renderRadioItem(e, t) {
                        const s = t[this.itemTitle] || t[this.itemKey],
                            a = t[this.itemKey];
                        return e('v-radio', { props: { ...this.fullOptions.radioItemProps, label: s, value: a } });
                    },
                    renderRadioGroup(e) {
                        const t = { ...this.commonFieldProps, ...this.fullOptions.radioGroupProps };
                        return [
                            e(
                                'v-radio-group',
                                {
                                    props: t,
                                    on: {
                                        change: (e) => {
                                            this.input(e), this.change(e);
                                        },
                                    },
                                },
                                [
                                    ...this.selectItems.map((t) => this.renderRadioItem(e, t)),
                                    this.renderTooltip(e, 'append'),
                                ]
                            ),
                        ];
                    },
                    renderSelectProp(e) {
                        if (!this.isSelectProp) return;
                        if ('radio' === this.display) {
                            if ('array' !== this.fullSchema.type) return this.renderRadioGroup(e);
                            console.error('radio display is not available for arrays, use checkbox or switch');
                        }
                        if (['checkbox', 'switch'].includes(this.display)) return this.renderSelectionControlGroup(e);
                        const t = { input: (e) => this.input(e), change: (e) => this.change(e) },
                            s = {
                                selection: (t) => {
                                    let s = t.item[this.itemTitle] || t.item[this.itemKey];
                                    return (
                                        'array' === this.fullSchema.type &&
                                            t.index !== this.value.length - 1 &&
                                            (s += ',&nbsp;'),
                                        e(
                                            'div',
                                            {
                                                class: {
                                                    'v-select__selection': !0,
                                                    'v-select__selection--comma': !0,
                                                    'v-select__selection--disabled': this.disabled,
                                                },
                                            },
                                            [
                                                this.renderSelectIcon(e, t.item),
                                                e('span', { domProps: { innerHTML: s }, class: 'mt-1' }),
                                            ]
                                        )
                                    );
                                },
                                item: (t) => [this.renderSelectIcon(e, t.item), this.renderSelectItem(e, t.item)],
                            },
                            a = [...this.renderPropSlots(e)];
                        this.htmlDescription && a.push(this.renderTooltip(e, 'append-outer'));
                        let i = 'v-select';
                        const r = {
                            ...this.commonFieldProps,
                            ...this.fullOptions.selectProps,
                            clearable: !this.required,
                            multiple: 'array' === this.fullSchema.type,
                            itemValue: this.itemKey,
                            items: this.selectItems,
                            returnObject: this.returnObject,
                        };
                        return (
                            (this.fromUrlWithQuery || (this.rawSelectItems && this.rawSelectItems.length > 20)) &&
                                ((i = 'v-autocomplete'),
                                (r.noDataText = this.fullOptions.messages.noData),
                                (r.placeholder = this.fullOptions.messages.search),
                                this.fromUrlWithQuery
                                    ? ((r.filter = () => !0),
                                      (r.searchInput = this.q),
                                      (t['update:search-input'] = (e) => {
                                          this.q = e;
                                      }))
                                    : (r.filter = (e, t) =>
                                          (e[this.itemTitle] || e[this.itemKey])
                                              .toLowerCase()
                                              .includes(t.toLowerCase()))),
                            (i = this.customTag ? this.customTag : i),
                            [e(i, { props: r, on: t, scopedSlots: s }, a)]
                        );
                    },
                },
            },
            v = {
                data: () => ({ editabledArrayProp: { currentDialog: null, editItem: null, editedItems: {} } }),
                computed: {
                    isEditableArray() {
                        if (
                            'array' === this.fullSchema.type &&
                            this.fullSchema.items &&
                            'object' === this.fullSchema.items.type
                        )
                            return !0;
                    },
                    readonlyItemSchema() {
                        if (!this.fullSchema.items) return;
                        const e = JSON.parse(JSON.stringify(this.fullSchema.items));
                        return (
                            (e.readOnly = !0),
                            this.itemTitle &&
                                (e.properties &&
                                    e.properties[this.itemTitle] &&
                                    (e.properties[this.itemTitle]['x-display'] = 'hidden'),
                                e.oneOf &&
                                    e.oneOf.forEach((e) => {
                                        e.properties[this.itemTitle] &&
                                            (e.properties[this.itemTitle]['x-display'] = 'hidden');
                                    }),
                                this.fullSchema.items.allOf &&
                                    e.allOf.forEach((e) => {
                                        e.properties[this.itemTitle] &&
                                            (e.properties[this.itemTitle]['x-display'] = 'hidden');
                                    })),
                            e
                        );
                    },
                },
                watch: {},
                methods: {
                    renderArrayItemModal(e, t, s) {
                        const a = -1 === s;
                        let i;
                        this.editabledArrayProp.currentDialog === s &&
                            (this.fullOptions.idPrefix.endsWith('--dialog--') ||
                                (this.fullOptions.idPrefix = this.fullOptions.idPrefix + '--dialog--'),
                            (i = e(
                                'v-jsf',
                                {
                                    props: {
                                        schema: this.fullSchema.items,
                                        value: this.editabledArrayProp.editItem,
                                        modelRoot: this.modelRoot || this.value,
                                        modelKey: s,
                                        parentKey: this.fullKey + '.',
                                        options: this.fullOptions,
                                        sectionDepth: this.sectionDepth + 1,
                                        separateValidation: !0,
                                    },
                                    scopedSlots: this.childScopedSlots(this.fullSchema.key),
                                    on: {
                                        error: (e) => this.$emit('error', e),
                                        input: (e) => {
                                            this.editabledArrayProp.editItem = e;
                                        },
                                    },
                                },
                                this.childSlots(e, this.fullSchema.key)
                            )));
                        const r = {
                                activator: () =>
                                    e(
                                        'v-btn',
                                        {
                                            on: {
                                                click: () => {
                                                    (this.editabledArrayProp.editItem = JSON.parse(JSON.stringify(t))),
                                                        (this.editabledArrayProp.currentDialog = s);
                                                },
                                            },
                                            attrs: {
                                                id:
                                                    this.fullOptions.idPrefix +
                                                    this.dashKey +
                                                    '-' +
                                                    (a ? '-add' : s + '--edit') +
                                                    '-button',
                                            },
                                            class: { 'vjsf-array-add-button': !0, 'ml-3': a },
                                            props: { icon: !a, fab: a, small: a, color: 'primary' },
                                        },
                                        [e('v-icon', a ? this.fullOptions.icons.add : this.fullOptions.icons.edit)]
                                    ),
                            },
                            n = () => {
                                i.componentInstance.resetValidation(), (this.editabledArrayProp.currentDialog = null);
                            };
                        return e(
                            'v-dialog',
                            {
                                props: {
                                    ...this.fullOptions.dialogProps,
                                    value: this.editabledArrayProp.currentDialog === s,
                                    closeOnContentClick: !1,
                                },
                                scopedSlots: r,
                                on: { 'click:outside': n },
                            },
                            [
                                e('v-card', { props: this.fullOptions.dialogCardProps }, [
                                    e('v-card-title', this.itemTitle && t[this.itemTitle]),
                                    e('v-card-text', [i]),
                                    e('v-card-actions', [
                                        e('v-spacer'),
                                        e(
                                            'v-btn',
                                            {
                                                props: { text: !0 },
                                                on: { click: n },
                                                attrs: {
                                                    id:
                                                        this.fullOptions.idPrefix +
                                                        this.dashKey +
                                                        '--dialog-cancel-button',
                                                },
                                                class: { 'vjsf-array-dialog-cancel-button': !0 },
                                            },
                                            'cancel'
                                        ),
                                        e(
                                            'v-btn',
                                            {
                                                props: { color: 'primary' },
                                                on: {
                                                    click: () => {
                                                        i.componentInstance.validate(!0) &&
                                                            (a
                                                                ? ((this.editabledArrayProp.editedItems[
                                                                      this.value.length
                                                                  ] = !0),
                                                                  this.value.push(this.editabledArrayProp.editItem))
                                                                : ((this.editabledArrayProp.editedItems[s] = !0),
                                                                  this.$set(
                                                                      this.value,
                                                                      s,
                                                                      this.editabledArrayProp.editItem
                                                                  ),
                                                                  this.$nextTick(() =>
                                                                      this.$refs['roItem-' + s].initFromSchema()
                                                                  )),
                                                            this.input(this.value),
                                                            this.$emit('change', this.value),
                                                            (this.shouldValidate = !0),
                                                            (this.editabledArrayProp.currentDialog = null));
                                                    },
                                                },
                                                attrs: {
                                                    id: this.fullOptions.idPrefix + this.dashKey + '--dialog-ok-button',
                                                },
                                                class: { 'vjsf-array-dialog-ok-button': !0 },
                                            },
                                            'ok'
                                        ),
                                    ]),
                                ]),
                            ]
                        );
                    },
                    renderArrayItemRO(e, t, s) {
                        return e('v-jsf', {
                            props: {
                                schema: this.readonlyItemSchema,
                                value: JSON.parse(JSON.stringify(t)),
                                modelRoot: this.modelRoot || this.value,
                                modelKey: s,
                                parentKey: this.fullKey + '.',
                                options: {
                                    ...this.fullOptions,
                                    hideReadOnly: !1,
                                    fieldProps: { ...this.fullOptions.fieldProps, dense: !0 },
                                },
                                sectionDepth: this.sectionDepth + 1,
                                separateValidation: !0,
                            },
                            ref: 'roItem-' + s,
                            on: {
                                input: (e) => {
                                    this.editabledArrayProp.editedItems[s] || this.$set(this.value, s, e);
                                },
                            },
                        });
                    },
                    renderEditableArray(e) {
                        if (!this.isEditableArray) return;
                        const t = [];
                        this.disabled ||
                            this.fromUrl ||
                            this.fullSchema.fromData ||
                            t.push(
                                this.renderArrayItemModal(
                                    e,
                                    this.fullSchema.items.default || this.defaultValue(this.fullSchema.items),
                                    -1
                                )
                            );
                        const s = e(
                            'v-input',
                            {
                                class: 'mt-2 pr-1',
                                props: {
                                    label: this.label,
                                    rules: this.rules,
                                    value: this.value,
                                    validateOnBlur: !this.shouldValidate,
                                    hideDetails: !this.hasError,
                                },
                            },
                            t
                        );
                        let a;
                        if (this.value && this.value.length) {
                            const t = this.value
                                .filter((e) => !!e)
                                .map((t, a) =>
                                    e('v-col', { props: this.fullOptions.arrayItemColProps }, [
                                        e('v-card', { props: this.fullOptions.arrayItemCardProps }, [
                                            e(
                                                'v-card-title',
                                                { props: { primaryTitle: !0 } },
                                                this.itemTitle && t[this.itemTitle]
                                            ),
                                            e('v-card-text', { class: 'pb-0' }, [this.renderArrayItemRO(e, t, a)]),
                                            e('v-card-actions', [
                                                e('v-spacer'),
                                                !this.disabled && this.renderArrayItemModal(e, t, a),
                                                !this.disabled &&
                                                    !this.fromUrl &&
                                                    !this.fullSchema.fromData &&
                                                    e(
                                                        'v-btn',
                                                        {
                                                            props: { icon: !0, color: 'warning' },
                                                            attrs: {
                                                                id:
                                                                    this.fullOptions.idPrefix +
                                                                    this.dashKey +
                                                                    '-' +
                                                                    a +
                                                                    '--delete-button',
                                                            },
                                                            class: { 'vjsf-array-delete-button': !0 },
                                                            on: {
                                                                click: () => {
                                                                    const e = this.value.filter((e) => e !== t);
                                                                    this.input(e),
                                                                        this.$emit('change', e),
                                                                        (this.shouldValidate = !0),
                                                                        s.componentInstance.validate();
                                                                },
                                                            },
                                                        },
                                                        [e('v-icon', this.fullOptions.icons.delete)]
                                                    ),
                                            ]),
                                        ]),
                                    ])
                                );
                            a = e(
                                'v-row',
                                {
                                    props: { gridListMd: !0 },
                                    class: 'pt-0 px-2 ' + this.fullOptions.objectContainerClass,
                                },
                                this.fullOptions.disableSorting
                                    ? t
                                    : [
                                          e(
                                              'draggable',
                                              {
                                                  props: { value: this.value },
                                                  class: 'row',
                                                  style: 'cursor: move;',
                                                  on: {
                                                      input: (e) => {
                                                          this.input(e),
                                                              this.$emit('change', e),
                                                              (this.shouldValidate = !0),
                                                              this.$nextTick(() => {
                                                                  for (let t = 0; t < e.length; t++)
                                                                      this.$refs['roItem-' + t].initFromSchema();
                                                              });
                                                      },
                                                  },
                                              },
                                              t
                                          ),
                                      ]
                            );
                        }
                        return [s, a];
                    },
                },
            },
            x = {
                data: () => ({ tooltip: { show: !1, maxWidth: 200 } }),
                mounted() {
                    this.htmlDescription &&
                        this.$el &&
                        this.$el.getBoundingClientRect &&
                        (this.tooltip.maxWidth = this.$el.getBoundingClientRect().left - 80);
                },
                methods: {
                    renderTooltip(e, t) {
                        if (this.htmlDescription && !this.fullOptions.hideTooltips)
                            return e(
                                'v-tooltip',
                                {
                                    slot: t,
                                    props: {
                                        value: this.tooltip.show,
                                        left: !0,
                                        openOnHover: !1,
                                        openOnClick: !1,
                                        contentClass: 'vjsf-tooltip',
                                    },
                                    scopedSlots: {
                                        activator: () =>
                                            e(
                                                'v-btn',
                                                {
                                                    on: {
                                                        click: () => {
                                                            this.tooltip.show = !this.tooltip.show;
                                                        },
                                                    },
                                                    props: { icon: !0 },
                                                    style: 'pointer-events: auto',
                                                },
                                                [e('v-icon', {}, this.fullOptions.icons.info)]
                                            ),
                                    },
                                },
                                [
                                    e('div', {
                                        style: `max-width: ${this.tooltip.maxWidth}px`,
                                        domProps: { innerHTML: this.htmlDescription },
                                    }),
                                ]
                            );
                    },
                },
            },
            y = {
                inject: ['form'],
                provide() {
                    return { form: { register: this.register, unregister: this.unregister } };
                },
                props: { separateValidation: { type: Boolean, default: !1 } },
                data: () => ({ inputs: [], validated: !1, shouldValidate: !1 }),
                computed: {
                    childrenInputs() {
                        return this.inputs.reduce((e, t, s) => ((e[t.modelKey || s] = t), e), {});
                    },
                    hasError() {
                        return !!this.inputs.find((e) => e.hasError) || !!this.containerError;
                    },
                    hasValidatedChildError() {
                        return !!this.inputs.find(
                            (e) => e.hasValidatedChildError || (e.hasError && (e.validated || e.shouldValidate))
                        );
                    },
                },
                created() {
                    this.separateValidation || (this.form && this.form.register(this));
                },
                mounted() {
                    const e = this.fullOptions.initialValidation;
                    'all' !== e || this.modelRoot || this.validate(!0),
                        'defined' === e && this.initiallyDefined && !this.isObjectContainer && this.validate(!0);
                },
                beforeDestroy() {
                    this.separateValidation || (this.form && this.form.unregister(this));
                },
                methods: {
                    register(e) {
                        this.inputs.push(e);
                    },
                    unregister(e) {
                        this.inputs = this.inputs.filter((t) => t._uid !== e._uid);
                    },
                    validate(e) {
                        return (this.validated = !0), 0 === this.inputs.filter((t) => !t.validate(e)).length;
                    },
                    reset() {
                        this.inputs.forEach((e) => e.reset());
                    },
                    resetValidation() {
                        (this.shouldValidate = !1),
                            (this.validated = !1),
                            this.inputs.forEach((e) => e.resetValidation());
                    },
                },
            };
    },
});
