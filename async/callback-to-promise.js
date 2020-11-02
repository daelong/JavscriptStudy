"use strict";

class UserStorage {
  //두가지 api
  loginUser(id, password) {
    //사용자가 로그인 하는것 아이디, 비번 받아서 성공하면 onSuccess, 아니면 onError callback을 불러줌
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    //사용자의 데이터를 받아서 역할들을 서버에 다시 요청해서 정보받아오는거
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// 브라우저 api중 하나인 prompt이용, 데이터를 받아옴
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role}`)
//   .catch(console.log());

async function checkUser() {
  try {
    const loginId = await userStorage.loginUser(id, password);
    const check = await userStorage.getRoles(loginId);
    alert(`Hello ${check.name}, you have a ${check.role}`);
  } catch (e) {
    console.log(e);
  }
}

checkUser();
