console.log(6 + true); //true값이 1이라 6+1해서 7로 나옴
console.log(7 + "true"); // 이렇게하면 number가 되는게 아니라 string으로 나옴(loaded operator)
console.log(76 + 1 + "true"); // 77이라 나옴 76+1을 먼저 한것
console.log(25 - "1"); // 이러면 24가 나옴
console.log("" == true); // 텅빈 string은 제로바이트이고 그걸 0으로 반환해서 false가 나옴
// == 를 사용하면 type conversion이 일어남, ===을 사용하면 type conversion이 일어나지않음
