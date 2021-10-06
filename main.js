"use strict";

let arr = [];
let arr2 = [];

const put_Number = function (num) {
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
};

const put_Number2 = function (num) {
  for (let i = 0; i < num; i++) {
    arr2.push(Math.floor(Math.random() * num));
  }
};

put_Number(10000);
put_Number2(10000);

// console.log(arr);
// console.log(arr2);
let Begin = Date.now();
const arrSort = arr.sort((a, b) => a - b);
console.log(arrSort);
let End = Date.now();
let Total = End - Begin;
console.log(Total);
