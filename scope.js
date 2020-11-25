//scope : variable이 존재하는가 아닌가(variable이 정의가 되었나 아닌가)
if (true) {
  const hello = "hi"; //헬로는 여기 {}안에서만 존재함
  console.log(hello);
}
// console.log(hello); //여기선 hello가 정의되지 않음
// const 말고 var로는 위에 것들이 실행이 됨 그래서 var를 사용하면 안됨
// let, const는 block scope이다()

//global scope은 무엇이든 접근할 수 있음

const h = "hello";

function a() {
  console.log(h);
}

a();
// variable은 큰곳에서 작은곳으로 접근이 가능하다.

function a() {
  const b = "b";
  function c() {
    const d = "d";
    function e() {
      const nn = "nn"; //이렇게 하면 함수 e는 변수 d, b, 에 접근할 수 있음, 그러나 함수 d, b는 변수 nn에 접근할 수 없음
    }
  }
}

//let은 이러한 scope를 피하기 위해서 사용됨
let Hello;
if (true) {
  hello = "hello";
}

console.log(hello);
