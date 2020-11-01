"use strict";

// JavaScript in synchronous.
// synchronous : 정해진 순서에 맞게 실행되는것
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log("1");
setTimeout(function () {
  // 타임아웃이라는 핸들러를 지정해주고 지정한 시간이 지나면 정한 콜백함수를 호출하는것
  console.log("2"); // 전달하는 함수를 실행해줘(callback)라고 하므로 callback함수라고 함
}, 1000); // asynchronous 비동기 적인 실행방법
console.log("3");

// two types of callback

// Synchronous callback
function printImmediately(print) {
  print();
} // hoisting되어서 맨 위로 올라가고
printImmediately(() => console.log("hello")); //실행

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} //hoisting 맨 위로
printWithDelay(() => console.log("async callback"), 2000); //실행

// 콜백함수들을 계속 묶고 부르면 콜백지옥이 생성된다.
// Callback Hell example
// 사용자의 데이터를 서버에서 받아오는 클래스
class UserStorage {
  //두가지 api
  loginUser(id, password, onSuccess, onError) {
    //사용자가 로그인 하는것 아이디, 비번 받아서 성공하면 onSuccess, 아니면 onError callback을 불러줌
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    //사용자의 데이터를 받아서 역할들을 서버에 다시 요청해서 정보받아오는거
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// 브라우저 api중 하나인 prompt이용, 데이터를 받아옴
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

//가독성이 너무 떨어짐, 에러가 발생하거나 디버깅을 해야해도 어려움, 체인이 계속 길어지기 때문, 유지보수도 어려움
