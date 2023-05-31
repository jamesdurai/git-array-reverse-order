var numElements = prompt("Input the number of elements to store in the array:");
var array = [];

for (var i = 0; i < numElements; i++) {
  var value = prompt("Input element - " + i + " :");
  array.push(value);
}

document.write("The values stored into the array are: " + array.join(" "));
document.write(" <br> ")
document.write("The values stored into the array in reverse are: " + array.reverse().join(" "));