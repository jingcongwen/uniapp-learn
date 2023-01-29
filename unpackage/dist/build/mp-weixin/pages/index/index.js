(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    "2d4e": function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return u
      })), n.d(e, "c", (function () {
        return a
      })), n.d(e, "a", (function () {}));
      var u = function () {
          var t = this.$createElement;
          this._self._c
        },
        a = []
    },
    8032: function (t, e, n) {
      "use strict";
      (function (t, e) {
        var u = n("4ea4");
        n("a030");
        u(n("66fd"));
        var a = u(n("b6d0"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("bc2e")["default"], n("543d")["createPage"])
    },
    "93eb": function (t, e, n) {},
    afe5: function (t, e, n) {
      "use strict";
      var u = n("93eb"),
        a = n.n(u);
      a.a
    },
    b317: function (t, e, n) {
      "use strict";
      (function (t) {
        var u = n("4ea4");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = u(n("2eee")),
          c = u(n("c973")),
          r = {
            data: function () {
              return {
                list: ""
              }
            },
            created: function () {},
            onLoad: function () {
              this.get()
            },
            methods: {
              get: function () {
                var e = this;
                return (0, c.default)(a.default.mark((function n() {
                  return a.default.wrap((function (n) {
                    while (1) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.request({
                          url: "https://zj.v.api.aa1.cn/api/bk/?num=5&type=json",
                          method: "GET",
                          success: function (t) {
                            e.list = t.data.content
                          }
                        });
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              }
            }
          };
        e.default = r
      }).call(this, n("543d")["default"])
    },
    b6d0: function (t, e, n) {
      "use strict";
      n.r(e);
      var u = n("2d4e"),
        a = n("c9db");
      for (var c in a)["default"].indexOf(c) < 0 && function (t) {
        n.d(e, t, (function () {
          return a[t]
        }))
      }(c);
      n("afe5");
      var r = n("f0c5"),
        i = Object(r["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], void 0);
      e["default"] = i.exports
    },
    c9db: function (t, e, n) {
      "use strict";
      n.r(e);
      var u = n("b317"),
        a = n.n(u);
      for (var c in u)["default"].indexOf(c) < 0 && function (t) {
        n.d(e, t, (function () {
          return u[t]
        }))
      }(c);
      e["default"] = a.a
    }
  },
  [
    ["8032", "common/runtime", "common/vendor"]
  ]
]);