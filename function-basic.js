"use strict";

// 함수 선언
function doSomething() {
  //함수를 인자로 줌 -> 함수 자체가 전달이됨
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// 함수 호출
doSomething();

//함수의 두가지 종류 return하는 함수 vs 아닌 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

//함수를
