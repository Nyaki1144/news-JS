(() => {
    'use strict';
    var n,
        e = {
            669: (n, e, t) => {
                t.d(e, { Z: () => i });
                var r = t(352),
                    o = t.n(r)()(function (n) {
                        return n[1];
                    });
                o.push([
                    n.id,
                    ".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",
                    '',
                ]);
                const i = o;
            },
            501: (n, e, t) => {
                t.d(e, { Z: () => i });
                var r = t(352),
                    o = t.n(r)()(function (n) {
                        return n[1];
                    });
                o.push([
                    n.id,
                    ".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",
                    '',
                ]);
                const i = o;
            },
            767: (n, e, t) => {
                t.d(e, { Z: () => p });
                var r = t(352),
                    o = t.n(r),
                    i = t(393),
                    a = t.n(i),
                    s = t(153),
                    c = t(147),
                    u = o()(function (n) {
                        return n[1];
                    }),
                    l = a()(s),
                    d = a()(c);
                u.push([
                    n.id,
                    "body {\n    color: #fff;\n    background: #182044;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n    text-align: center;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n\n.github {\n    width: 100px;\n    height: 100px;\n    background: url(" +
                        l +
                        ') no-repeat center;\n    background-size: 60%;\n    /* background: center no-repeat #eee 35%; */\n}\n\n.school {\n    width: 100px;\n    height: 100px;\n    background: url(' +
                        d +
                        ') no-repeat center;\n    background-size: 100%;\n    /* background: center no-repeat #eee 35%; */\n}\n\n.wrapper {\n    width: 600px;\n    margin: 0 auto;\n    padding-top: 50px;\n}\n\n.links {\n    display: flex;\n\n    justify-content: space-around;\n    align-items: center;\n    align-content: center;\n}\nform {\n    display: flex;\n    width: 100%;\n    margin: 0 auto;\n}\n\ninput {\n    width: 50%;\n    margin: 0 auto;\n    height: 64px;\n    padding-left: 10px;\n    border: 2px solid #7ba7ab;\n    border-radius: 5px;\n    outline: none;\n    background: #f9f0da;\n    color: #9e9c9c;\n    font-size: 24px;\n    text-align: center;\n}\ninput::placeholder {\n    color: fff;\n    font-size: 24px;\n    text-align: center;\n}\n\n@media screen and (min-width: 426px) and (max-width: 767px) {\n    input {\n        height: 48px;\n        font-size: 18px;\n    }\n    input::placeholder {\n        font-size: 18px;\n    }\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n    input {\n        width: 75%;\n        height: 48px;\n        font-size: 24px;\n    }\n    input::placeholder {\n        font-size: 18px;\n    }\n}\n',
                    '',
                ]);
                const p = u;
            },
            352: (n) => {
                n.exports = function (n) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var t = n(e);
                                return e[2] ? '@media '.concat(e[2], ' {').concat(t, '}') : t;
                            }).join('');
                        }),
                        (e.i = function (n, t, r) {
                            'string' == typeof n && (n = [[null, n, '']]);
                            var o = {};
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var a = this[i][0];
                                    null != a && (o[a] = !0);
                                }
                            for (var s = 0; s < n.length; s++) {
                                var c = [].concat(n[s]);
                                (r && o[c[0]]) ||
                                    (t && (c[2] ? (c[2] = ''.concat(t, ' and ').concat(c[2])) : (c[2] = t)), e.push(c));
                            }
                        }),
                        e
                    );
                };
            },
            393: (n) => {
                n.exports = function (n, e) {
                    return (
                        e || (e = {}),
                        'string' != typeof (n = n && n.__esModule ? n.default : n)
                            ? n
                            : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                              e.hash && (n += e.hash),
                              /["'() \t\n]/.test(n) || e.needQuotes
                                  ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                                  : n)
                    );
                };
            },
            242: (n, e, t) => {
                t.r(e), t.d(e, { default: () => a });
                var r = t(379),
                    o = t.n(r),
                    i = t(669);
                o()(i.Z, { insert: 'head', singleton: !1 });
                const a = i.Z.locals || {};
            },
            595: (n, e, t) => {
                t.r(e), t.d(e, { default: () => a });
                var r = t(379),
                    o = t.n(r),
                    i = t(501);
                o()(i.Z, { insert: 'head', singleton: !1 });
                const a = i.Z.locals || {};
            },
            427: (n, e, t) => {
                t.r(e), t.d(e, { default: () => a });
                var r = t(379),
                    o = t.n(r),
                    i = t(767);
                o()(i.Z, { insert: 'head', singleton: !1 });
                const a = i.Z.locals || {};
            },
            379: (n, e, t) => {
                var r,
                    o = (function () {
                        var n = {};
                        return function (e) {
                            if (void 0 === n[e]) {
                                var t = document.querySelector(e);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                    try {
                                        t = t.contentDocument.head;
                                    } catch (n) {
                                        t = null;
                                    }
                                n[e] = t;
                            }
                            return n[e];
                        };
                    })(),
                    i = [];
                function a(n) {
                    for (var e = -1, t = 0; t < i.length; t++)
                        if (i[t].identifier === n) {
                            e = t;
                            break;
                        }
                    return e;
                }
                function s(n, e) {
                    for (var t = {}, r = [], o = 0; o < n.length; o++) {
                        var s = n[o],
                            c = e.base ? s[0] + e.base : s[0],
                            u = t[c] || 0,
                            l = ''.concat(c, ' ').concat(u);
                        t[c] = u + 1;
                        var d = a(l),
                            p = { css: s[1], media: s[2], sourceMap: s[3] };
                        -1 !== d
                            ? (i[d].references++, i[d].updater(p))
                            : i.push({ identifier: l, updater: m(p, e), references: 1 }),
                            r.push(l);
                    }
                    return r;
                }
                function c(n) {
                    var e = document.createElement('style'),
                        r = n.attributes || {};
                    if (void 0 === r.nonce) {
                        var i = t.nc;
                        i && (r.nonce = i);
                    }
                    if (
                        (Object.keys(r).forEach(function (n) {
                            e.setAttribute(n, r[n]);
                        }),
                        'function' == typeof n.insert)
                    )
                        n.insert(e);
                    else {
                        var a = o(n.insert || 'head');
                        if (!a)
                            throw new Error(
                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                            );
                        a.appendChild(e);
                    }
                    return e;
                }
                var u,
                    l =
                        ((u = []),
                        function (n, e) {
                            return (u[n] = e), u.filter(Boolean).join('\n');
                        });
                function d(n, e, t, r) {
                    var o = t ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
                    if (n.styleSheet) n.styleSheet.cssText = l(e, o);
                    else {
                        var i = document.createTextNode(o),
                            a = n.childNodes;
                        a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
                    }
                }
                function p(n, e, t) {
                    var r = t.css,
                        o = t.media,
                        i = t.sourceMap;
                    if (
                        (o ? n.setAttribute('media', o) : n.removeAttribute('media'),
                        i &&
                            'undefined' != typeof btoa &&
                            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                                ' */'
                            )),
                        n.styleSheet)
                    )
                        n.styleSheet.cssText = r;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(r));
                    }
                }
                var f = null,
                    h = 0;
                function m(n, e) {
                    var t, r, o;
                    if (e.singleton) {
                        var i = h++;
                        (t = f || (f = c(e))), (r = d.bind(null, t, i, !1)), (o = d.bind(null, t, i, !0));
                    } else
                        (t = c(e)),
                            (r = p.bind(null, t, e)),
                            (o = function () {
                                !(function (n) {
                                    if (null === n.parentNode) return !1;
                                    n.parentNode.removeChild(n);
                                })(t);
                            });
                    return (
                        r(n),
                        function (e) {
                            if (e) {
                                if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                                r((n = e));
                            } else o();
                        }
                    );
                }
                n.exports = function (n, e) {
                    (e = e || {}).singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton =
                            (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                    var t = s((n = n || []), e);
                    return function (n) {
                        if (((n = n || []), '[object Array]' === Object.prototype.toString.call(n))) {
                            for (var r = 0; r < t.length; r++) {
                                var o = a(t[r]);
                                i[o].references--;
                            }
                            for (var c = s(n, e), u = 0; u < t.length; u++) {
                                var l = a(t[u]);
                                0 === i[l].references && (i[l].updater(), i.splice(l, 1));
                            }
                            t = c;
                        }
                    };
                };
            },
            717: (n, e, t) => {
                Object.defineProperty(e, '__esModule', { value: !0 });
                var r = t(842),
                    o = t(527),
                    i = (function () {
                        function n() {
                            (this.controller = new r.default()), (this.view = new o.AppView());
                        }
                        return (
                            (n.prototype.start = function () {
                                var n,
                                    e = this;
                                null ===
                                    (n =
                                        null === document || void 0 === document
                                            ? void 0
                                            : document.querySelector('.sources')) ||
                                    void 0 === n ||
                                    n.addEventListener('click', function (n) {
                                        return e.controller.getNews(n, function (n) {
                                            e.view.drawNews(n);
                                        });
                                    }),
                                    this.controller.getSources(function (n) {
                                        return e.view.drawSources(n);
                                    });
                            }),
                            n
                        );
                    })();
                e.default = i;
            },
            853: function (n, e, t) {
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (n, e) {
                            return (
                                (r =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (n, e) {
                                            n.__proto__ = e;
                                        }) ||
                                    function (n, e) {
                                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                                    }),
                                r(n, e)
                            );
                        }),
                        function (n, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Class extends value ' + String(e) + ' is not a constructor or null'
                                );
                            function t() {
                                this.constructor = n;
                            }
                            r(n, e),
                                (n.prototype = null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 });
                var i = (function (n) {
                    function e() {
                        return (
                            n.call(this, 'https://nodenews.herokuapp.com/', {
                                apiKey: '1e9785b25ebb49c4be26ca0ae54480c1',
                            }) || this
                        );
                    }
                    return o(e, n), e;
                })(t(24).default);
                e.default = i;
            },
            842: function (n, e, t) {
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (n, e) {
                            return (
                                (r =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (n, e) {
                                            n.__proto__ = e;
                                        }) ||
                                    function (n, e) {
                                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                                    }),
                                r(n, e)
                            );
                        }),
                        function (n, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Class extends value ' + String(e) + ' is not a constructor or null'
                                );
                            function t() {
                                this.constructor = n;
                            }
                            r(n, e),
                                (n.prototype = null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 });
                var i = (function (n) {
                    function e() {
                        return (null !== n && n.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, n),
                        (e.prototype.getSources = function (e) {
                            n.prototype.getResp.call(this, { endpoint: 'sources' }, e);
                        }),
                        (e.prototype.getNews = function (e, t) {
                            for (var r = e.target, o = e.currentTarget; r !== o; ) {
                                if (r.classList.contains('source__item')) {
                                    if (null !== r.getAttribute('data-source-id')) {
                                        var i = r.getAttribute('data-source-id');
                                        i &&
                                            o.getAttribute('data-source') !== i &&
                                            (o.setAttribute('data-source', i),
                                            n.prototype.getResp.call(
                                                this,
                                                { endpoint: 'everything', options: { sources: i } },
                                                t
                                            ));
                                    }
                                    return;
                                }
                                r = r.parentNode;
                            }
                        }),
                        e
                    );
                })(t(853).default);
                e.default = i;
            },
            24: function (n, e) {
                var t =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (t =
                                Object.assign ||
                                function (n) {
                                    for (var e, t = 1, r = arguments.length; t < r; t++)
                                        for (var o in (e = arguments[t]))
                                            Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                    return n;
                                }),
                            t.apply(this, arguments)
                        );
                    };
                Object.defineProperty(e, '__esModule', { value: !0 });
                var r = (function () {
                    function n(n, e) {
                        (this.baseLink = n), (this.options = e);
                    }
                    return (
                        (n.prototype.getResp = function (n, e) {
                            var t = n.endpoint,
                                r = n.options,
                                o = void 0 === r ? {} : r;
                            void 0 === e &&
                                (e = function () {
                                    console.error('No callback for GET response');
                                }),
                                o && this.load('GET', t, e, o);
                        }),
                        (n.prototype.errorHandler = function (n) {
                            if (!n.ok)
                                throw (
                                    ((401 !== n.status && 404 !== n.status) ||
                                        console.log(
                                            'Sorry, but there is '.concat(n.status, ' error: ').concat(n.statusText)
                                        ),
                                    Error(n.statusText))
                                );
                            return n;
                        }),
                        (n.prototype.makeUrl = function (n, e) {
                            var r = t(t({}, this.options), n),
                                o = ''.concat(this.baseLink).concat(e, '?');
                            return (
                                Object.keys(r).forEach(function (n) {
                                    o += ''.concat(n, '=').concat(r[n], '&');
                                }),
                                o.slice(0, -1)
                            );
                        }),
                        (n.prototype.load = function (n, e, t, r) {
                            fetch(this.makeUrl(r, e), { method: n })
                                .then(this.errorHandler)
                                .then(function (n) {
                                    return n.json();
                                })
                                .then(function (n) {
                                    return t(n);
                                })
                                .catch(function (n) {
                                    return console.error(n);
                                });
                        }),
                        n
                    );
                })();
                e.default = r;
            },
            527: (n, e, t) => {
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.AppView = void 0);
                var r = t(798),
                    o = t(53),
                    i = (function () {
                        function n() {
                            (this.news = new r.default()), (this.sources = new o.default());
                        }
                        return (
                            (n.prototype.drawNews = function (n) {
                                if ('ok' === n.status) {
                                    var e = (null == n ? void 0 : n.articles) || [];
                                    this.news.draw(e);
                                }
                            }),
                            (n.prototype.drawSources = function (n) {
                                if ('ok' === n.status) {
                                    var e = (null == n ? void 0 : n.sources) || [];
                                    this.sources.draw(e);
                                }
                            }),
                            n
                        );
                    })();
                (e.AppView = i), (e.default = i);
            },
            798: (n, e, t) => {
                Object.defineProperty(e, '__esModule', { value: !0 }), t(242);
                var r = (function () {
                    function n() {}
                    return (
                        (n.prototype.draw = function (n) {
                            var e =
                                    n.length >= 10
                                        ? n.filter(function (n, e) {
                                              return e < 10;
                                          })
                                        : n,
                                t = document.createDocumentFragment(),
                                r = document.querySelector('#newsItemTemp');
                            e.forEach(function (n, e) {
                                var o = r.content.cloneNode(!0);
                                if (e % 2) {
                                    var i = o.querySelector('.news__article');
                                    null == i || i.classList.add('alt');
                                }
                                (o.querySelector('.news__meta-photo').style.backgroundImage = 'url('.concat(
                                    n.urlToImage || 'img/news_placeholder.jpg',
                                    ')'
                                )),
                                    (o.querySelector('.news__meta-author').textContent = n.author || n.source.name),
                                    (o.querySelector('.news__meta-date').textContent = n.publishedAt
                                        .slice(0, 10)
                                        .split('-')
                                        .reverse()
                                        .join('-')),
                                    (o.querySelector('.news__description-title').textContent = n.title),
                                    (o.querySelector('.news__description-source').textContent = n.source.name),
                                    (o.querySelector('.news__description-content').textContent = n.description),
                                    o.querySelector('.news__read-more a').setAttribute('href', n.url),
                                    t.append(o);
                            });
                            var o = document.querySelector('.news');
                            (o.innerHTML = ''), o.appendChild(t);
                        }),
                        n
                    );
                })();
                e.default = r;
            },
            53: (n, e, t) => {
                Object.defineProperty(e, '__esModule', { value: !0 }), t(595);
                var r = document.querySelector('#inputName'),
                    o = (function () {
                        function n() {}
                        return (
                            (n.prototype.draw = function (n) {
                                var e = document.createDocumentFragment(),
                                    t = document.querySelector('#sourceItemTemp');
                                if (r) {
                                    var o = ' ';
                                    r.addEventListener('input', function () {
                                        '' !== (o = this.value)
                                            ? n.forEach(function (n) {
                                                  if (-1 !== n.name.search(o)) {
                                                      var r = t.content.cloneNode(!0),
                                                          i = r.querySelector('.source__item-name');
                                                      i && (i.textContent = n.name);
                                                      var a = r.querySelector('.source__item');
                                                      null == a || a.setAttribute('data-source-id', n.id || ''),
                                                          e.append(r);
                                                  }
                                              })
                                            : n.forEach(function () {
                                                  document
                                                      .querySelector('.source__item')
                                                      .classList.remove('.source__item');
                                              });
                                        var r = document.querySelector('.sources');
                                        r && ((r.innerHTML = ''), r.append(e));
                                    });
                                }
                            }),
                            n
                        );
                    })();
                e.default = o;
            },
            153: (n, e, t) => {
                n.exports = t.p + 'asset/5de0643bf1bbf77878ff.png';
            },
            147: (n, e, t) => {
                n.exports = t.p + 'asset/1766f2cf130af649670c.png';
            },
        },
        t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = (t[n] = { id: n, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = (n) => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return r.d(e, { a: e }), e;
    }),
        (r.d = (n, e) => {
            for (var t in e) r.o(e, t) && !r.o(n, t) && Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (n) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
        (r.r = (n) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(n, '__esModule', { value: !0 });
        }),
        (() => {
            var n;
            r.g.importScripts && (n = r.g.location + '');
            var e = r.g.document;
            if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
                var t = e.getElementsByTagName('script');
                t.length && (n = t[t.length - 1].src);
            }
            if (!n) throw new Error('Automatic publicPath is not supported in this browser');
            (n = n
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (r.p = n);
        })(),
        (r.nc = void 0),
        (n = r(717)),
        r(427),
        new n.default().start();
})();
