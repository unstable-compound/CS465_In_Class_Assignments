function reverseDigits() {
  const fun = () => {
    var x = document.getElementById("myNumber").value;
    var s = x.toString();
    //split into array, reverse array, join back to string
    var split = s.split("");
    var reverseArray = split.reverse();
    var join = reverseArray.join("");

    let reverseDigit = parseInt(join);
    console.log(reverseDigit);
  };
  return fun;
}
