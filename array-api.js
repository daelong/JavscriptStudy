// Q1. make a string out of a array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "사과, 키위, 바나나, 사과";
  const result = fruits.split(","); // 구분자 필수
  console.log(result);
  console.log(result[0]);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //배열 자체를 변화시킨다<div className=""></div>
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArr = array.slice(2);
  console.log(newArr);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
console.log(students);
// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90); //배열의 각각에 접근하는걸 student로 접근하고 각각의 score중 90점인 것을 리턴
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. maek an array containing only the students'scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score); //map은 배열에 들어있는 요소 하나하나를 함수를 거쳐서 다른것으로 변환해주는것
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); //배열의 요소중에서 콜백함수가 리턴이 트루가 되는애가 하나라도 있는지 없는지를 확인해준다.
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); //배열에 있는 모든 요소들이 조건을 충족해야 true가 리턴이 된다.
  console.log(result2);
}

// Q9. compute student's average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduce는 배열 하나하나를 돌면서 값을 누적할때 사용하는 것, 즉, 하나하나 돌면서 previous랑 current로 전체 배열을 하나씩 탐색함 previous는 이전에 return 했던 값이다. current은 배열에 다음차례 ,0은 prev의 첫번째 값으로 0부터 배열 전체를 돎
  console.log(result / students.length);
  //reduceRight는 기능은 같은 순서가 역순 맨 마지막부터 시작
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) //map에서 student를 score로 바꿔주었으므로 filter에서 score로 사용함
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 앞뒤 애드을 계산해서 -가 나오면 그대로, +가 나오면 순서 바꿈 그렇게 끝까지 비교
    // 반대 순서로 하고싶으면 (a, b) => b-a로 계산하면 댐
    .join();
  console.log(result);
}
