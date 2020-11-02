// async, await은 promise를 더 간결하고 간결, 동기적으로 실행되도록 보이게끔 만들어주는 장치임
// promise를 체인할수 있는데 계속해서 promise를 체인하면 복잡해보이는데
// async, await를 사용하면 동기식으로 코드를 순서대로 작성하는것처럼 작성할 수 있음
// 이렇게 기존에 존재하던 api를 좀 더 편하게 만들어주는 것을 syntactic sugar라고 함

// async & await
// clear style of using promise

// 1. async
// function fetchUser() {
//   // do network request in 10 secs.....
//   return "ellie";
// }

// const user = fetchUser(); //이런식으로 작성하면 동기적으로 작성해서 한줄한줄씩 전면작업을 해서 시간이 오래걸림
// //따라서 오래걸리는 작업들은 비동기적으로 처리해줘야함
// console.log(user);

// promise를 함수안에 작성하지 않아도 async를 함수앞에 적어놓으면 자동으로 함수안에 있는 코드블럭들이 promise로 변환됨 여기서 반환값은 resolve가 아니라 return으로 작성, async가 resolve로 만들어주나봄
async function fetchUser() {
  //do network request in 10 secs.....
  return "ellie";
  //resolve, reject로 완료해줘야함 안그러면 계속 pending상태로 남아있음
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); //3초 있다가 사과 리턴
  return "사과";
}

async function getBanana() {
  await delay(1000); //3초있다가 바나나 리턴
  return "바나나";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   }); -> callback hell
// }

//async를 이용하여 이렇게 바꿀수 있음
async function pickFruits() {
  const applePromise = getApple(); // delay 1초가 걸리고
  const bananaPromise = getBanana(); // delya 1초가 걸리고
  const apple = await applePromise; // 얘는 apllePromise가 1초 걸리는걸 기다리고 실행
  const banana = await bananaPromise; // 얘는 bananaPromise가 1초 걸리는걸 기다리고 실행함
  return `${apple} + ${banana}`;
} //좋은 코드는 아님

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //프로미스배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받고 모아주는 기능임
    .then((fruits) => fruits.join(" + ")); // all작업을 끝내면 그 데이터를 join
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); //얘는 배열중에 가장 빨리 작업이 끝나는 애들 받아서 리턴함
}

pickOnlyOne().then(console.log);
