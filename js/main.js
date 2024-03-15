hamburger.onclick = function () {
  document.getElementById("hamburger").style = "display: none;";
  document.getElementById("cls").style = "display: block;";
  document.getElementById("burger-open").style = "display: block;";
};

cls.onclick = function () {
  document.getElementById("cls").style = "display: none;";
  document.getElementById("hamburger").style = "display: block;";
  document.getElementById("burger-open").style = "display: none;";
};

function someFunc() {
  var w = window.innerWidth;
  if (w > 991) {
    document.getElementById("cls").style = "display: none;";
    document.getElementById("hamburger").style = "display: none;";
    document.getElementById("burger-open").style = "display: none;";
  }
  if (
    w < 992 &&
    document.getElementById("cls").style.display == "none" &&
    document.getElementById("hamburger").style.display == "none"
  ) {
    document.getElementById("cls").style = "display: none;";
    document.getElementById("hamburger").style = "display: block;";
    document.getElementById("burger-open").style = "display: none;";
  }
}

// Выполняем заново при изменении размера окна
window.addEventListener("resize", function () {
  someFunc();
});


