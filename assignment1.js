function operation(arrA, arrB, op) {
  let ans_arr = [];
  switch (op) {
    case "AND":
      for (i in arrA) {
        if (arrB.includes(arrA[i])) ans_arr.push(arrA[i]);
      }
      return ans_arr;

    case "MINUS":
      for (i in arrA) {
        if (arrB.includes(arrA[i])) continue;
        ans_arr.push(arrA[i]);
      }
      return ans_arr;

    case "OR":
      for (i in arrB) {
        if (!arrA.includes(arrB[i])) ans_arr.push(arrB[i]);
      }
      return arrA.concat(ans_arr);
  }
}
let a = [...new Set([1, 3, 5, 10])];
let b = [...new Set([2, 4, 5, 6])];
let or_arr = operation(a, b, "OR");
let and_arr = operation(a, b, "AND");
let minus_arr = operation(a, b, "MINUS");
console.log(`OR: ${or_arr}\nAND: ${and_arr}\nMINUS: ${minus_arr}`);
let another_arr = operation(b, a, "MINUS");
let nother_arr = operation(a, b, "MINUS");
console.log(another_arr.concat(nother_arr)); //Bonus1
