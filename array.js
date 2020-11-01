"use strict";

// 자료구조 : object를 묶어놓는것 - 동일한 타입의 object만 담을 수 있음
// but js는 dynamically typed language라 다양한 타입의 데이터를 담을 수 있음 근데 이런 방법은 좋지 않음

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("딸기", "레몬");
console.log(fruits);

// shift: remove an item fromo the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "사과", "수박"); //지운 자리에 사과, 수박 추가
console.log(fruits);
fruits.splice(1, 0, "사과", "수박"); //처음에 설정한 자리에 사과, 수박 추가, 지우는걸 0으로 했으니 지우지 않음
console.log(fruits);

//combine two arrays
const fruits2 = ["자몽", "배"];
const newFruits = fruits.concat(fruits2); //fruits1뒤에 fruits2 연결
console.log(newFruits);

// 5. Searching
// find the index
// console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("코코넛")); // 해당하는게 없으므로 -1이 출력됨

//includes
console.log(fruits.includes("수박"));
console.log(fruits.includes("코코넛"));

// lastIndexOf
// console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과")); // indexOf는 조건에 제일 처음것을 반환
console.log(fruits.lastIndexOf("사과")); // lastIndexOf는 조건에 제일 마지막 것을 반환
