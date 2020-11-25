console.log(typeof "12324"); //typeof는 거의 모든 primitive type에서 작동함
console.log(typeof null); // null의 타입은 object라고 나오는데 실은 이거 버그임
//이러한 버그들은 instanceof를 통해서 사용하면 되는데 instanceof는 primitive type에서 작동하지 않음, object, array에서 작동함
console.log([] instanceof Array); //true
console.log({} instanceof Array); //false
console.log({} instanceof Object); //true
console.log("" instanceof String); //false
