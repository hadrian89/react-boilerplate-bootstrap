"use strict";
(self.webpackChunkinterview = self.webpackChunkinterview || []).push([
  [636],
  {
    636: (e, n, r) => {
      r.r(n), r.d(n, { default: () => d });
      var c = r(540);
      var l,
        t = r(581),
        i = r(848);
      const s = t.Ay.button(
        l ||
          ((o = [
            "\n  background: ",
            " ;\n  border-radius: 3px;\n  border: none;\n  color: white;\n  padding: 10px;\n",
          ]),
          a || (a = o.slice(0)),
          (l = Object.freeze(
            Object.defineProperties(o, { raw: { value: Object.freeze(a) } }),
          ))),
        (e) => (e.primary ? "blue" : "palevioletred"),
      );
      var o, a;
      function d() {
        const [e, n] = (0, c.useState)(0),
          [r, l] = (0, c.useState)(""),
          { count: t, increment: o } = (function () {
            const [e, n] = (0, c.useState)(0);
            return {
              count: e,
              increment: () => {
                n(e + 1);
              },
            };
          })(),
          a = (0, c.useCallback)(() => {
            l("clicked");
          }, [r, l]);
        return (0, i.jsxs)("div", {
          className: "App",
          children: [
            (0, i.jsx)("h1", { children: "Demo Memo Callback" }),
            (0, i.jsx)(s, {
              onClick: () => n(e + 1),
              children: "Increment count",
            }),
            (0, i.jsxs)("p", { children: ["Count: ", e] }),
            (0, i.jsxs)("p", { children: ["value: ", r] }),
            (0, i.jsxs)("p", { children: ["incre: ", t] }),
            (0, i.jsx)(s, { onClick: o, children: "Hooks count" }),
            (0, i.jsx)(u, { handleCallback: a }),
          ],
        });
      }
      const u = c.memo((e) => {
        let { handleCallback: n } = e;
        for (let e = 0; e < 1e9; e++);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("h3", { children: "Slow Compoent" }),
            (0, i.jsx)(s, { onClick: n, primary: !0, children: " Click me" }),
          ],
        });
      });
    },
  },
]);
