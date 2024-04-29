function reverseButton() {
  let value1 = document.getElementById("rev").value;
  let reversed = value1.split(" ").reverse().join(" ");
  document.getElementById("para").innerHTML = reversed;
  console.log(reversed);
}
