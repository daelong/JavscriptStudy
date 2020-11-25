let a = 50;
let b = a; //b에는 a의 값(value)인 50이 들어가있음

a = 10; //여기서 a의 값을 변경해줘도 b의 값에는 영향을 주지 않음 왜냐면 이미 위에서 b에 값이 들어갔기 때문

console.log(b); //이건 50이 나옴

const sexy = ["kimchi", "potato"]; //sexy가 배열의 주소를 가리킴(배열을 참조)
const pretty = sexy; //pretty에는 sexy가 가리키는 주소가 들어가있음

sexy.push("hello"); //여기서 sexy가 가르키는 값이 바뀌어도 주소가 바뀌는 것이 아니기 때문에
pretty.push("lalalal");

console.log(pretty); //pretty가 가리키는 주소값이 바뀌지 않았기 때문에 sexy가 변화해도 그 내용이 그대로 같이 출력되게됨
//이런게 바로 참조(reference)하는 것임 배열을 참조,
console.log(sexy);
