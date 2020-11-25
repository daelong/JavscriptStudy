// 자바스크립트 개발자라면 알아야하는 핵심 컨셉 33개 | #1. Call Stack

// call stack : 자바스크립트가 함수 실행을 핸들하는 방법 중 하나
// 자바스크립트가 실행하는 함수들은 스택 위에 올라감

function three() {
  console.log("I love js");
  throw Error("omg im am an error");
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
  //   throw Error("omg im am an error"); //zero -> one -> two -> three -> two -> one -> error
}
zero();
