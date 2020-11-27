import e from 'moment';
import * as t from 'lodash';
import r from 'shortid';
import n from 'sweetalert2';
import o from '@babel/runtime-corejs3/core-js/json/stringify';
import a from '@babel/runtime-corejs3/core-js/instance/keys';
import i from '@babel/runtime-corejs3/core-js/promise';
import c from 'localforage';
import s from '@babel/runtime-corejs3/core-js/instance/splice';
import u from '@babel/runtime-corejs3/core-js/instance/find-index';
import l from '@babel/runtime-corejs3/core-js/instance/find';
import f from '@babel/runtime-corejs3/core-js/instance/sort';
import m from '@babel/runtime-corejs3/core-js/object/keys';
import g from '@babel/runtime-corejs3/core-js/instance/map';
import p from '@babel/runtime-corejs3/core-js/instance/for-each';
import 'core-js/modules/es.function.name';
import d from '@babel/runtime-corejs3/core-js/instance/index-of';
import b from '@babel/runtime-corejs3/helpers/esm/typeof';
import v from '@babel/runtime-corejs3/helpers/esm/slicedToArray';
import h from '@babel/runtime-corejs3/core-js/instance/concat';
import j from '@babel/runtime-corejs3/helpers/esm/classCallCheck';
import y from '@babel/runtime-corejs3/helpers/esm/createClass';
require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.string.replace');
var P = require('@babel/runtime-corejs3/core-js/instance/slice'),
    x = require('@babel/runtime-corejs3/helpers/typeof');
String.prototype.format = function (e) {
    var t = function (e, t) {
        return (
            (t = 'object' === x(t) ? t : P(Array.prototype).call(arguments, 1)),
            e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, r) {
                return '{{' == e ? '{' : '}}' == e ? '}' : t[r];
            })
        );
    };
    return t(this, (e = 'object' === x(e) ? e : P(Array.prototype).call(arguments, 0)));
};
var w = n,
    N = {
        information: function (e, t) {
            return w.fire({ position: 'top', title: e, icon: t, timer: 2e3, showConfirmButton: !1 });
        },
        info: function (e) {
            this.information(e, 'info');
        },
        error: function (e) {
            this.information(e, 'error');
        },
        warning: function (e) {
            this.information(e, 'warning');
        },
        success: function (e) {
            this.information(e, 'success');
        },
        question: function (e) {
            this.information(e, 'question');
        },
    },
    T = {
        getItem: function (e) {
            return new i(function (t, r) {
                c.getItem(e)
                    .then(function (e) {
                        t(e);
                    })
                    .catch(function (e) {
                        r(e);
                    });
            });
        },
        setItem: function (e, t) {
            return new i(function (r, n) {
                c.setItem(e, t)
                    .then(function (e) {
                        r(e);
                    })
                    .catch(function (e) {
                        n(e);
                    });
            });
        },
        removeItem: function (e) {
            return new i(function (t, r) {
                c.removeItem(e)
                    .then(function () {
                        t();
                    })
                    .catch(function (e) {
                        r(e);
                    });
            });
        },
        clear: function () {
            return new i(function (e, t) {
                c.clear()
                    .then(function () {
                        e();
                    })
                    .catch(function (e) {
                        t(e);
                    });
            });
        },
        length: function () {
            return new i(function (e, t) {
                c.length()
                    .then(function (t) {
                        e(t);
                    })
                    .catch(function (e) {
                        t(e);
                    });
            });
        },
        key: function (e) {
            return new i(function (t, r) {
                c.key(e)
                    .then(function (e) {
                        t(e);
                    })
                    .catch(function (e) {
                        r(e);
                    });
            });
        },
        keys: function () {
            return new i(function (e, t) {
                a(c)
                    .call(c)
                    .then(function (t) {
                        e(t);
                    })
                    .catch(function (e) {
                        t(e);
                    });
            });
        },
        iterate: function () {
            return new i(function (e, t) {
                c.iterate(function (t, r, n) {
                    e([t, r, n]);
                })
                    .then(function (t) {
                        e(t);
                    })
                    .catch(function (e) {
                        t(e);
                    });
            });
        },
        setDriver: function (e) {
            return new i(function (t, r) {
                t(c.setDriver(e));
            });
        },
        config: function (e) {
            return new i(function (t, r) {
                t(c.config(e));
            });
        },
        createInstance: function (e) {
            return new i(function (t, r) {
                t(c.createInstance(e));
            });
        },
    },
    A = {
        setObject: function (e, t) {
            localStorage.setItem(e, o(t));
        },
        getObject: function (e) {
            var t = localStorage.getItem(e);
            return t ? JSON.parse(t) : null;
        },
        setItem: function (e, t) {
            localStorage.setItem(e, t);
        },
        getItem: function (e) {
            return localStorage.getItem(e);
        },
        removeItem: function (e) {
            localStorage.removeItem(e);
        },
        clear: function () {
            localStorage.clear();
        },
        isExist: function (e) {
            return !(!e || !(e in localStorage));
        },
    },
    k = {
        array: {
            groupBy: function (e, t) {
                var r,
                    n = {};
                return (
                    p(e).call(e, function (e) {
                        var r = t(e);
                        (n[r] = n[r] || []), n[r].push(e);
                    }),
                    g((r = m(n))).call(r, function (e) {
                        return n[e];
                    })
                );
            },
            sort: function (e, t) {
                return f(e).call(e, function (e, r) {
                    var n = e[t],
                        o = r[t];
                    return n < o ? -1 : n > o ? 1 : 0;
                });
            },
            find: function (e, t, r) {
                return l(e).call(e, function (e) {
                    return e[r] === t[r];
                });
            },
            remove: function (e, t, r) {
                var n = u(e).call(e, function (e) {
                    return e[r] === t[r];
                });
                return s(e).call(e, n, 1), e;
            },
        },
        object: {
            isEmpty: function (e) {
                if (e) {
                    var t = m(e);
                    return !(t && t.length > 0);
                }
                return !0;
            },
        },
    };
e.locale('zh-cn');
var I = Object.freeze({
        __proto__: null,
        notify: N,
        swal: w,
        moment: e,
        storage: T,
        storageSync: A,
        lodash: t,
        shortid: r,
        tools: k,
    }),
    S = Object.freeze({
        __proto__: null,
        en: {
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
        },
        zh: {
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
        },
    }),
    L = (function () {
        function e() {
            j(this, e);
        }
        return (
            y(e, null, [
                {
                    key: 'build',
                    value: function (e) {
                        var t, r, n;
                        if (!e || !e.tag) return '';
                        var o,
                            a = C.attributes(e);
                        if (C.isSelfCloseTag(e)) return h((o = '<'.concat(e.tag, ' '))).call(o, a, '/>');
                        var i = C.children(e);
                        return h((t = h((r = h((n = '<'.concat(e.tag, ' '))).call(n, a, '>'))).call(r, i, '</'))).call(
                            t,
                            e.tag,
                            '>'
                        );
                    },
                },
                {
                    key: 'unbuild',
                    value: function (e) {
                        if (!e) return {};
                        var t = document.createElement('html');
                        t.innerHTML = e;
                        var r = t.querySelector('body');
                        if (!r) return {};
                        var n = v(r.children, 1)[0];
                        return n ? _.node2json(n) : {};
                    },
                },
                {
                    key: 'selfCloseTags',
                    get: function () {
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
                    },
                },
            ]),
            e
        );
    })(),
    C = (function () {
        function e() {
            j(this, e);
        }
        return (
            y(e, null, [
                {
                    key: 'attributes',
                    value: function (e) {
                        if (!e.attributes) return '';
                        var t = '',
                            r = m(e.attributes);
                        for (var n in r) {
                            var o;
                            if ({}.hasOwnProperty.call(r, n))
                                t += h((o = ' '.concat(r[n], '="'))).call(o, e.attributes[r[n]], '"');
                        }
                        return t;
                    },
                },
                {
                    key: 'children',
                    value: function (e) {
                        if (!e.children) return '';
                        var t = '';
                        for (var r in e.children)
                            ({}.hasOwnProperty.call(e.children, r) &&
                                ('object' == b(e.children[r]) ? (t += L.build(e.children[r])) : (t += e.children[r])));
                        return t;
                    },
                },
                {
                    key: 'isSelfCloseTag',
                    value: function (e) {
                        var t;
                        return d((t = L.selfCloseTags)).call(t, e.tag) > -1;
                    },
                },
            ]),
            e
        );
    })(),
    _ = (function () {
        function e() {
            j(this, e);
        }
        return (
            y(e, null, [
                {
                    key: 'attributes',
                    value: function (e) {
                        var t = {},
                            r = m(e.attributes);
                        for (var n in r)
                            if ({}.hasOwnProperty.call(r, n)) {
                                var o = r[n],
                                    a = e.attributes[o];
                                t[a.name] = a.value;
                            }
                        return t;
                    },
                },
                {
                    key: 'children',
                    value: function (t) {
                        var r = [];
                        for (var n in t.childNodes)
                            t.childNodes[n].nodeType === Node.ELEMENT_NODE && r.push(e.node2json(t.childNodes[n])),
                                t.childNodes[n].nodeType === Node.TEXT_NODE && r.push(t.childNodes[n].textContent);
                        return r;
                    },
                },
                {
                    key: 'node2json',
                    value: function (t) {
                        return { tag: t.tagName.toLowerCase(), attributes: e.attributes(t), children: e.children(t) };
                    },
                },
            ]),
            e
        );
    })(),
    E = L,
    O = Object.freeze({ __proto__: null, json2html: E });
export { O as convertor, I as lib, S as locales };
