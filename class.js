"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor - 데이터를 전달 받는 역할
  constructor(name, age) {
    //fields - Person.name, Person.age에 constructor에서 받은 데이터를 입력
    //여기서 Person은 나중에 생성될 object의 이름 즉 아래의 ellie.name, ellie.age
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// Create object
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get으로 값을 return
  get age() {
    return this._age;
  }
  //set으로 값을 설정함 그래서 value를 매개변수로 받아야함
  set age(value) {
    this._age = value < 0 ? 0 : value; // get과 set에 _age라고 한 이유는 constructor랑 같아지면 콜스택이 무한반복됨
  }
}

const user1 = new User("Steve", "job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Ref

class Experiment {
  //constructor를 쓰지않고 바로 정의하면 public,  #을 붙이면 private로 됨 but아직 최신 브라우저에서 지원안함 babel써야함
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding"; //static은 오브젝트마다 할당되는게 아니라 클래스 자체에 붙어있는것
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

console.log(Article.publisher);
Article.printPublisher(); // 클래스 자체에 붙어있어서 클래스 이름을 이용해서 불러내야함
//타입 스크립트에 많이 쓰임

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("hi");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
