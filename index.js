const number = document.querySelectorAll("#num");
const operator = document.querySelectorAll("#operator");
const display = document.querySelector("#display");
console.log(number);
console.log(operator);
console.dir(display);
for (let num of number) {
  num.addEventListener("click", function () {
    console.log("Number button pressed");
    // console.log(`Number ${num.innerHTML}`);
    // console.log(typeof num.innerHTML);
    // num.innerHTML is a string
    // display.innerHTML=12
    if (display.innerHTML == "0") {
      display.innerHTML = "";
    }
    display.innerHTML += num.innerHTML;
  });
}
for (let opt of operator) {
  opt.addEventListener("click", function () {
    console.log("Operator button pressed");
  });
}

display.addEventListener("click", function () {
  console.log("display clicked");
  console.log(typeof display.innerHTML);
});
