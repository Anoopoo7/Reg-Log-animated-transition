document.querySelector("#right").style.color="black";
document.querySelector("#left").style.color="blue";

document.querySelector("#right").addEventListener("click", function () {
  document.querySelector("forme").style.right = "45px";
  document.querySelector("form").style.right = "-300px";
  document.querySelector("#right").style.color="blue";
  document.querySelector("#left").style.color="black";
});
document.querySelector("#left").addEventListener("click", function () {
  document.querySelector("forme").style.right = "-300px";
  document.querySelector("form").style.right = "45px";
  document.querySelector("#right").style.color="black";
  document.querySelector("#left").style.color="blue";
});
