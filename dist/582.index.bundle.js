(self.webpackChunkinterview = self.webpackChunkinterview || []).push([
  [582],
  {
    582: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => l });
      var s = r(540),
        n = r(551),
        a = r(527),
        i = r(556),
        o = r(468),
        c = r(735),
        p = r(848);
      function u() {
        const e = (0, o.wA)(),
          { data: t } = (0, o.d4)((e) => e.user),
          [r, i] = (0, s.useState)(""),
          u = (0, s.useContext)(n.A),
          [l, d] = (0, s.useState)(!1),
          [h, f] = (0, s.useState)([]);
        (0, s.useEffect)(() => {
          e((0, c.Fd)());
        }, []),
          (0, s.useEffect)(() => {
            t && f(t), d(!1);
          }, [t]);
        return (0, p.jsxs)("div", {
          className: "UserList",
          children: [
            (0, p.jsx)(a.N_, { to: -1, children: "Back" }),
            (0, p.jsx)("h2", { children: "User List" }),
            l && (0, p.jsx)("h3", { children: "Loading..." }),
            !l &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsxs)("h1", {
                    children: ["Username context: ", u.user],
                  }),
                  (0, p.jsx)("input", {
                    type: "text",
                    value: r,
                    onChange: (e) => {
                      i(e.target.value);
                    },
                  }),
                  (0, p.jsx)("button", {
                    onClick: () => u.updateUser(r),
                    children: "Update user",
                  }),
                  (0, p.jsx)("ul", {
                    className: "listing",
                    children:
                      h &&
                      h.map((e) =>
                        (0, p.jsx)(
                          "li",
                          {
                            children: (0, p.jsx)(a.N_, {
                              to: "/user/".concat(e.id),
                              children: e.name,
                            }),
                          },
                          e.id,
                        ),
                      ),
                  }),
                ],
              }),
          ],
        });
      }
      u.prototype = {
        users: i.PropTypes.arrayOf(
          i.PropTypes.shape({
            id: i.PropTypes.string.required,
            name: i.PropTypes.string.required,
          }),
        ).isRequired,
      };
      const l = u;
    },
    694: (e, t, r) => {
      "use strict";
      var s = r(925);
      function n() {}
      function a() {}
      (a.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, r, n, a, i) {
            if (i !== s) {
              var o = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: n,
          };
          return (r.PropTypes = r), r;
        });
    },
    556: (e, t, r) => {
      e.exports = r(694)();
    },
    925: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  },
]);
