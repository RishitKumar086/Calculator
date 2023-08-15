const number = document.querySelectorAll("#num");
for (let num of number) {
  num.addEventListener("click", function () {
    console.log("Number button pressed");
  });
}
