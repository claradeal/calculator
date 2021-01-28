// $(document).ready(function () {
//   console.log("ready!");
// });

let arr = [];
let sub = [];

// Add button press to array
$(".targetx").click(function () {
  // arr.push($(this).text().trim());
  arr.push($(this).val().trim());

  let press = arr.slice(arr.length - 1, arr.length);
  //   If the +/- (for now, -1) button is pressed arr is multiplied by -1 and display sign changes
  if (press == "-1") {
    arr.splice(arr.length - 1, 0, "*");
    let arrSpan = $("span").text().trim();
    $("span").empty();
    $("span").append("-");
    $("span").append(arrSpan);
  }

  // Do not allow first element to be an operator
  let firstElem = arr.slice(0, 1);
  if (
    firstElem == "/" ||
    firstElem == "+" ||
    firstElem == "-" ||
    // firstElem == "*" ||  //
    (firstElem == "*" && arr.length == "1")
  ) {
    arr.pop();
    $("span").empty();
  } else {
    // console.log("first element is not an operator");
  }

  // Function to check array sub for "."
  let period = sub.some((value) => {
    return value == ".";
  });

  // Don't allow a second "." after the last operator in the array or span
  // Upon operator press empty span and save span contents to array sub
  if (press == "." && period == true) {
    arr.pop();
  } else if (
    press == "/" ||
    press == "+" ||
    press == "-" ||
    press == "*" ||
    press == ""
  ) {
    sub = [];
    let subSpan = $("span").text().trim();
    $("span").empty();
  } else if (press == "-1") {
  } else {
    $("span").append($(this).text().trim());
  }
  sub.push($(this).text().trim());

  // Do not allow two consecutive ".", "+", "/", and/or "-"
  let elem = arr[arr.length - 1];
  let prevElem = arr[arr.length - 2];
  let prevPrevElem = arr[arr.length - 3];
  if (
    (prevElem === "." ||
      prevElem === "/" ||
      prevElem === "+" ||
      prevElem === "-") &&
    (elem === "." || elem === "/" || elem === "+" || elem === "-")
  ) {
    arr.pop();
  }
  //  Do not allow three consecutive "*"
  else if (prevPrevElem === "*" && prevElem === "*" && elem === "*") {
    arr.pop();
  } else {
    // console.log("no if");
  }
});

$(".targete").click(function (event) {
  // Do not allow last element in arr to be an operator or a period
  let lastElem = arr[arr.length - 1];
  if (
    lastElem === "." ||
    lastElem === "/" ||
    lastElem === "+" ||
    lastElem === "-" ||
    lastElem === "*"
  ) {
    arr.pop();
  }
  // Perform calculations
  let answerOne = eval(arr.join(""));
  $("span").text(answerOne);
  arr = [];
});

$(".targetc").click(function () {
  // $(".targetc").css("color", "red");
  $("span").text("");
  arr = [];
});