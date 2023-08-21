const number = document.querySelectorAll("#num");
const operator = document.querySelectorAll("#operator");
const display = document.querySelector("#display");
let op;
let n1;
let n2;

// console.log(number);
// console.log(operator);
// console.dir(display);

for (let num of number) {
  num.addEventListener("click", function () {
    // console.log("Number button pressed");
    // console.log(`Number ${num.innerHTML}`);
    // console.log(typeof num.innerHTML);
    // num.innerHTML is a string
    // display.innerHTML=12
    if (display.innerHTML === "0") {
      display.innerHTML = "";
    }
    display.innerHTML += num.innerHTML;
  });
}

for (let opt of operator) {
  opt.addEventListener("click", function () {
    // console.log("Operator button pressed");
    // console.log(opt.dataset.action);
    const action = opt.dataset.action;
    // console.log(typeof action);

    if (action === "allclear") {
      display.innerHTML = "0";
      n1 = 0;
      n2 = 0;
    }
    if (action === "decimal") {
      display.innerHTML += ".";
    }
    if (
      action === "add" ||
      action === "sub" ||
      action === "mul" ||
      action === "div"
    ) {
      op = action;
      // console.log(op);
      n1 = Number.parseFloat(display.innerHTML);
      display.innerHTML = "";
    }
    if (action === "equals") {
      // console.log(n1);
      n2 = Number.parseFloat(display.innerHTML);
      // console.log(n2);
      if (op === "add") {
        display.innerHTML = n1 + n2;
      } else if (op === "sub") {
        display.innerHTML = n1 - n2;
      } else if (op === "mul") {
        display.innerHTML = n1 * n2;
      } else {
        display.innerHTML = n1 / n2;
      }
    }
    if ((action = "delete")) {
      //delete functionality in calculator for deleting one number
    }
  });
}

// display.addEventListener("click", function () {
//   console.log("display clicked");
//   console.log(typeof display.innerHTML);
// });
