/* var a = document.querySelector("#kunal");
var b = document.querySelector(" #kunal img");
a.addEventListener("mousemove", function (details) {
  b.style.left = details.x + "px";
  b.style.top = details.y + "px";
});
a.addEventListener("mouseenter", function (details) {
  b.style.opacity = 1;
});
a.addEventListener("mouseleave", function (details) {
  b.style.opacity = 0;
}); */

var k = document.querySelectorAll("#kunal");
k.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (kk) {
    val.childNodes[3].style.left = kk.x + "px";
    val.childNodes[3].style.top = kk.y + "px";
  });
});
