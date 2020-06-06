// gsap.from(".test", 1, { y: 100 });
// window.onload(() => {
// });

document.addEventListener(
  "DOMContentLoaded",
  () => {
    var tabButtons = document.querySelectorAll(".switch button");
    // tabButtons.map(btn=>btn.addEventListener(""))
    var tabBtn1 = tabButtons[0];
    var tabBtn2 = tabButtons[1];

    tabBtn1.onclick = () => {
      if (tabBtn1.classList.contains("active")) return;
      tabBtn1.classList.add("active");
      tabBtn2.classList.remove("active");
    };
    tabBtn2.onclick = () => {
      if (tabBtn2.classList.contains("active")) return;
      tabBtn2.classList.add("active");
      tabBtn1.classList.remove("active");
    };
  },
  false
);
