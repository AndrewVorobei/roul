// DOES NOT WORK

// function countdown() {
//   var d = parseInt(document.getElementById("mins").innerHTML),
//     c = parseInt(document.getElementById("hsecs").innerHTML);
//   0 != d && 0 == c
//     ? ((nmins = d - 1), (nsecs = 59))
//     : 0 != d || 0 != c
//     ? ((nmins = d), (nsecs = c - 1))
//     : 0 == d && 0 == c && ((nmins = d), (nsecs = c)),
//     (document.getElementById("mins").innerHTML = nmins),
//     (document.getElementById("hsecs").innerHTML = nsecs),
//     nsecs < 10 && (nsecs = "0" + nsecs),
//     (document.getElementById("secs").innerHTML = nsecs);
// }
// setInterval("countdown()", 1000);
function dater(a) {
  var d = new Date();
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  $(a).html(
    day[d.getDay()] +
      ", " +
      d.getDate() +
      ". " +
      m[d.getMonth()] +
      " " +
      d.getFullYear() +
      "."
  );
  return false;
}
function checkZero(a) {
  return a < 10 ? "0" + a : a;
}
function timer(a, b) {
  var min = checkZero(Math.round((a - 30) / 60));
  var sec = checkZero(a % 60);
  $(b).html(min + " minutes and " + sec + " seconds");
  var t = setInterval(function () {
    a--;
    min = checkZero(Math.round((a - 30) / 60));
    sec = checkZero(a % 60);
    $(b).html(min + " minutes and " + sec + " seconds");
    if (a == 0) {
      clearInterval(t);
    }
  }, 1000);
  return false;
}
$(document).ready(function () {
  timer(240, ".timer");
  dater(".date");
  $(document).on("click", ".fb-load-more button", function () {
    $(this).fadeOut(300, function () {
      $(".fb-load-more .fb-loader").css({ display: "block" });
    });
  });
  $(document).on("click", ".q button", function () {
    var $this = $(this);
    if ($this.parent().next().hasClass("q")) {
      $this.parent().fadeOut(250, function () {
        $(this).next().fadeIn(250);
      });
    } else {
      $(".questions").fadeOut(250, function () {
        $(".loading").fadeIn(250, function () {
          setTimeout(function () {
            $("ul li:first-child").fadeIn(200);
          }, 950);
          setTimeout(function () {
            $("ul li:nth-child(2)").fadeIn(200);
          }, 1900);
          setTimeout(function () {
            $("ul li:last-child").fadeIn(200);
          }, 3100);
          setTimeout(function () {
            $(".loading").fadeOut(250, function () {
              $(".final").fadeIn(250, function () {
                $("html, body").animate(
                  { scrollTop: $(".final").offset().top - 90 },
                  500
                );
                timer(120, ".new-timer");
              });
            });
          }, 4600);
        });
      });
    }
  });
  $(document).on("click", ".fb-like", function () {
    var _this = $(this);
    var x =
      _this.next().next().html() == ""
        ? 0
        : parseInt(_this.next().next().html());
    if (_this.hasClass("selected")) {
      _this.removeClass("selected").html("Like");
      _this.next().next().html(--x);
      if (x == 0) _this.next().next().addClass("fb-hide-like");
    } else {
      _this.addClass("selected").html("Unlike");
      _this.next().next().html(++x);
      if (_this.next().next().hasClass("fb-hide-like"))
        _this.next().next().removeClass("fb-hide-like");
    }
  });
  (function increment() {
    setTimeout(function () {
      var elem = $(".fb-comment:visible").length;
      $(".fb-comment:visible").each(function (i) {
        if (i == getRandomInt(0, elem)) {
          var value = $(this).find(".fb-total-likes").html();
          value = parseInt(++value);
          $(this)
            .find(".fb-total-likes")
            .removeClass("fb-hide-like")
            .html(value);
        }
      });
      increment();
    }, getRandomInt(500, 2200));
  })();
  loadCom("#fb5", 1200);
  loadCom("#fb6", 2500);
  loadCom("#fb7", 3500);
  loadCom("#fb8", 6500);
  loadCom("#fb9", 9000);
  loadCom("#fb10", 14000);
  loadCom("#fb11", 18500);
  loadCom("#fb12", 23750);
  loadCom("#fb13", 28000);
  loadCom("#fb14", 33000);
  loadCom("#fb15", 38500);
  loadCom("#fb16", 42500);
  loadCom("#fb17", 48000);
  loadCom("#fb18", 52250);
  loadCom("#fb19", 57000);
  loadCom("#fb20", 60000);
});
function spin() {
  switch (count) {
    case 1:
      (dWheel.className = "spinAround"),
        setTimeout(function () {
          alert("Sorry.\n\nPlease try again. We give you ONE more chance!");
        }, 6800);
      break;
    case 2:
      (dWheel.className = "spinAround2"),
        setTimeout(function () {
          dWheel.className = dWheel.className + " transparent";
        }, 6800),
        setTimeout(function () {
          (device.style.display = "block"),
            (device.style.left =
              whCon.offsetWidth / 2 - device.offsetWidth / 2 + "px"),
            (device.style.top = conMid - device.offsetHeight / 2 + "px");
        }, 7000),
        setTimeout(function () {
          (first.innerHTML =
            "<div class='loadingImg'><div class='loadingInner'></div></div>"),
            setTimeout(function () {
              first.parentNode.removeChild(first),
                (second.style.display = "block"),
                con.insertBefore(second, con.firstChild);
            }, 1500);
        }, 9000);
  }
  count++;
}
function gotoUrl(b) {
  (PreventExitPop = !1), (window.location.href = clickUrl);
}
var clickUrl = "http://topfinancestory.online?_lp=1&_token=",
  mydate = new Date(),
  year = mydate.getFullYear(),
  month = mydate.getMonth(),
  day = mydate.getDate(),
  weekday = mydate.getDay(),
  montharray = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  weekdayarray = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  count = 1,
  conMid,
  headline = document.getElementById("headline"),
  topDate = document.getElementById("topDate"),
  today = document.getElementById("today"),
  con = document.getElementById("content"),
  whCon = document.getElementById("wheelCon"),
  dWheel = document.getElementById("wheel"),
  button = document.getElementById("pressButton"),
  device = document.getElementById("devMockup"),
  first = document.getElementById("questions"),
  second = document.getElementById("final");
// (topDate.innerHTML = day + " " + montharray[month] + " " + year),
//   (today.innerHTML = weekdayarray[weekday]);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function loadCom(a, b) {
  setTimeout(function () {
    $(a).fadeIn(250);
  }, b);
}
var PreventExitPop = true;
function ExitPop() {
  if (PreventExitPop != false) {
    return "Are you sure you want to leave the page?\n\nThe offer is limited! If you close this window, your chance of winning a prize will be given to someone else!";
  }
}

window.onbeforeunload = ExitPop;
