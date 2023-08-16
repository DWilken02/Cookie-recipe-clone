window.onload = function() {
  let button = document.querySelector("#button-dark");
  button.onclick = function() {
    console.log("CLICK!!!");
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  let lightButton = document.querySelector("#button-light");
  lightButton.onclick = function() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
  let largeButton = document.querySelector("#button-large");
  largeButton.onclick = function() {
    let body = document.querySelector("body");
    body.style.fontSize = "20px";
  }
  let smallButton = document.querySelector("#button-small");
  smallButton.onclick = function() {
    let body = document.querySelector("body");
    body.style.fontSize = "10px";
  }
}