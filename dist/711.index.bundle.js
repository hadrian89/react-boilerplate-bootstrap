"use strict";
(self.webpackChunkinterview = self.webpackChunkinterview || []).push([
  [711],
  {
    711: (e, t, n) => {
      n.r(t), n.d(t, { default: () => g });
      var o = n(540),
        s = n(468),
        r = n(527),
        c = n(429);
      function i(e, t = "expected a function, instead received " + typeof e) {
        if ("function" != typeof e) throw new TypeError(t);
      }
      var l = (e) => (Array.isArray(e) ? e : [e]);
      function a(e) {
        const t = Array.isArray(e[0]) ? e[0] : e;
        return (
          (function (
            e,
            t = "expected all items to be functions, instead received the following types: ",
          ) {
            if (!e.every((e) => "function" == typeof e)) {
              const n = e
                .map((e) =>
                  "function" == typeof e
                    ? `function ${e.name || "unnamed"}()`
                    : typeof e,
                )
                .join(", ");
              throw new TypeError(`${t}[${n}]`);
            }
          })(
            t,
            "createSelector expects all input-selectors to be functions, but received the following types: ",
          ),
          t
        );
      }
      Symbol(), Object.getPrototypeOf({});
      var u =
        "undefined" != typeof WeakRef
          ? WeakRef
          : class {
              constructor(e) {
                this.value = e;
              }
              deref() {
                return this.value;
              }
            };
      function p(e, t = {}) {
        let n = { s: 0, v: void 0, o: null, p: null };
        const { resultEqualityCheck: o } = t;
        let s,
          r = 0;
        function c() {
          let t = n;
          const { length: c } = arguments;
          for (let e = 0, n = c; e < n; e++) {
            const n = arguments[e];
            if (
              "function" == typeof n ||
              ("object" == typeof n && null !== n)
            ) {
              let e = t.o;
              null === e && (t.o = e = new WeakMap());
              const o = e.get(n);
              void 0 === o
                ? ((t = { s: 0, v: void 0, o: null, p: null }), e.set(n, t))
                : (t = o);
            } else {
              let e = t.p;
              null === e && (t.p = e = new Map());
              const o = e.get(n);
              void 0 === o
                ? ((t = { s: 0, v: void 0, o: null, p: null }), e.set(n, t))
                : (t = o);
            }
          }
          const i = t;
          let l;
          if (1 === t.s) l = t.v;
          else if (((l = e.apply(null, arguments)), r++, o)) {
            const e = s?.deref?.() ?? s;
            null != e && o(e, l) && ((l = e), 0 !== r && r--);
            s =
              ("object" == typeof l && null !== l) || "function" == typeof l
                ? new u(l)
                : l;
          }
          return (i.s = 1), (i.v = l), l;
        }
        return (
          (c.clearCache = () => {
            (n = { s: 0, v: void 0, o: null, p: null }), c.resetResultsCount();
          }),
          (c.resultsCount = () => r),
          (c.resetResultsCount = () => {
            r = 0;
          }),
          c
        );
      }
      function f(e, ...t) {
        const n =
            "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
          o = (...e) => {
            let t,
              o = 0,
              s = 0,
              r = {},
              c = e.pop();
            "object" == typeof c && ((r = c), (c = e.pop())),
              i(
                c,
                `createSelector expects an output function after the inputs, but received: [${typeof c}]`,
              );
            const u = { ...n, ...r },
              {
                memoize: f,
                memoizeOptions: d = [],
                argsMemoize: m = p,
                argsMemoizeOptions: y = [],
                devModeChecks: v = {},
              } = u,
              b = l(d),
              h = l(y),
              j = a(e),
              g = f(
                function () {
                  return o++, c.apply(null, arguments);
                },
                ...b,
              );
            const w = m(
              function () {
                s++;
                const e = (function (e, t) {
                  const n = [],
                    { length: o } = e;
                  for (let s = 0; s < o; s++) n.push(e[s].apply(null, t));
                  return n;
                })(j, arguments);
                return (t = g.apply(null, e)), t;
              },
              ...h,
            );
            return Object.assign(w, {
              resultFunc: c,
              memoizedResultFunc: g,
              dependencies: j,
              dependencyRecomputations: () => s,
              resetDependencyRecomputations: () => {
                s = 0;
              },
              lastResult: () => t,
              recomputations: () => o,
              resetRecomputations: () => {
                o = 0;
              },
              memoize: f,
              argsMemoize: m,
            });
          };
        return Object.assign(o, { withTypes: () => o }), o;
      }
      var d = f(p),
        m = Object.assign(
          (e, t = d) => {
            !(function (
              e,
              t = "expected an object, instead received " + typeof e,
            ) {
              if ("object" != typeof e) throw new TypeError(t);
            })(
              e,
              "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
                typeof e,
            );
            const n = Object.keys(e);
            return t(
              n.map((t) => e[t]),
              (...e) => e.reduce((e, t, o) => ((e[n[o]] = t), e), {}),
            );
          },
          { withTypes: () => m },
        );
      const y = d(
        (e) => e.todo.tasks,
        (e, t) => t,
        (e, t) => e.filter((e) => e.name.includes(t)),
      );
      var v = n(848);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                j(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function j(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != typeof o) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof t ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      const g = function () {
        const e = (0, s.wA)(),
          t = (0, s.d4)((e) => e.todo),
          n = sessionStorage.getItem("tasks")
            ? JSON.parse(sessionStorage.getItem("tasks"))
            : [],
          [i, l] = (0, o.useState)(n),
          [a, u] = (0, o.useState)(""),
          p = (0, s.d4)((e) => y(e, t.filter));
        console.log(p, "todoList"),
          (0, o.useEffect)(() => {
            n.length > 0 && e((0, c.eW)(n));
          }, []);
        const f = (t, n) => {
            l(t),
              sessionStorage.setItem("tasks", JSON.stringify(t)),
              "add" == n && u(""),
              e((0, c.eW)(t));
          },
          d = () => {
            if ("" !== a) {
              const e = new Date().getTime(),
                t = [...i, { id: e, name: a, status: !0 }];
              f(t, "add");
            }
          };
        return (0, v.jsxs)("div", {
          className: "TaskList",
          children: [
            (0, v.jsx)(r.N_, { to: -1, children: "Back" }),
            (0, v.jsxs)("div", {
              className: "row",
              children: [
                (0, v.jsx)("h2", { children: "Task List" }),
                (0, v.jsx)("div", {
                  className: "col col-md-6",
                  children: (0, v.jsx)("form", {
                    onSubmit: (e) => {
                      e.preventDefault(), d();
                    },
                    children: (0, v.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, v.jsx)("div", {
                          className: "col  col-sm-8 col-md-8",
                          children: (0, v.jsx)("input", {
                            name: "task",
                            className: "filter form-control",
                            value: a,
                            onChange: (e) => {
                              u(e.target.value);
                            },
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "col  col-sm-4 col-md-4",
                          children: (0, v.jsx)("button", {
                            type: "submit",
                            className: "btn btn-secondary",
                            onClick: d,
                            children: "Add task",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, v.jsx)("div", { className: "col col-md-2 text-right" }),
                (0, v.jsx)("div", {
                  className: "col col-md-4 text-right",
                  children: (0, v.jsx)("input", {
                    name: "filter",
                    className: "filter form-control",
                    placeholder: "Filter...",
                    onChange: (t) => e((0, c._9)(t.target.value)),
                  }),
                }),
              ],
            }),
            (0, v.jsx)("ul", {
              className: "listing",
              children:
                p &&
                p.map((e) =>
                  (0, v.jsxs)(
                    "li",
                    {
                      children: [
                        (0, v.jsx)("input", {
                          type: "checkbox",
                          checked: !e.status,
                          onChange: (t) =>
                            ((e, t) => {
                              const n = i.map((n) =>
                                n.id === t
                                  ? h(
                                      h({}, n),
                                      {},
                                      { status: !e.target.checked },
                                    )
                                  : n,
                              );
                              f(n);
                            })(t, e.id),
                        }),
                        " ",
                        (0, v.jsx)("b", {
                          className: !e.status && "taskdone",
                          children: e.name,
                        }),
                        (0, v.jsx)("button", {
                          className: "btn btn-primary deletebutton",
                          onClick: () =>
                            ((e) => {
                              const t = i.filter((t) => t.id !== e);
                              f(t);
                            })(e.id),
                          children: "Delete",
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
            }),
          ],
        });
      };
    },
  },
]);
