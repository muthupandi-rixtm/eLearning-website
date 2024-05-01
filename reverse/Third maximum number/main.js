function reverseButton() {
  let value1 = document.getElementById("rev").value;
  let reversed = value1.trim().split(" ").reverse();
  let final = reversed.reduce((acc, cV, index, array) => {
    if (cV !== "") {
      acc += cV + " ";
    }
    return acc;
  }, "");
  document.getElementById("para").innerHTML = final.trim();
  // console.log(reversed);
}
function thirdMaxNumber() {
  arr = [10, 10, 20, 30];
  arr1 = [...new Set(arr)].sort((a, b) => {
    return a - b;
  });
  console.log(
    arr1[arr1.length - 3] !== undefined
      ? arr1[arr1.length - 3]
      : arr1[arr1.length - 1]
  );
}
