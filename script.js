let tooltip = document.querySelector(".tooltip");
let tooltiptext = document.querySelector(".tooltiptext");

tooltip.addEventListener("click", function () {
  tooltip.classList.toggle("active");
  tooltiptext.classList.toggle("active");
});
