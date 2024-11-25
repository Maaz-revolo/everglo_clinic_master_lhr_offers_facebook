!(function (t) {
  "use strict";
  t.fn.countUp = function (e) {
    var n = t.extend({ time: 2e3, delay: 10 }, e);
    return this.each(function () {
      var e = t(this),
        u = n,
        a = function () {
          e.data("counterupTo") || e.data("counterupTo", e.text());
          var t =
              parseInt(e.data("counter-time")) > 0
                ? parseInt(e.data("counter-time"))
                : u.time,
            n =
              parseInt(e.data("counter-delay")) > 0
                ? parseInt(e.data("counter-delay"))
                : u.delay,
            a = t / n,
            r = e.data("counterupTo"),
            o = [r],
            c = /[0-9]+,[0-9]+/.test(r);
          (r = r.replace(/,/g, "")), /^[0-9]+$/.test(r);
          for (
            var d = /^[0-9]+\.[0-9]+$/.test(r),
              i = d ? (r.split(".")[1] || []).length : 0,
              f = a;
            f >= 1;
            f--
          ) {
            var p = parseInt(Math.round((r / a) * f));
            if ((d && (p = parseFloat((r / a) * f).toFixed(i)), c))
              for (; /(\d+)(\d{3})/.test(p.toString()); )
                p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            o.unshift(p);
          }
          e.data("counterup-nums", o), e.text("0");
          var s = function () {
            e.text(e.data("counterup-nums").shift()),
              e.data("counterup-nums").length
                ? setTimeout(e.data("counterup-func"), n)
                : (delete e.data("counterup-nums"),
                  e.data("counterup-nums", null),
                  e.data("counterup-func", null));
          };
          e.data("counterup-func", s), setTimeout(e.data("counterup-func"), n);
        };
      e.waypoint(a, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);
