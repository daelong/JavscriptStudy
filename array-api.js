// Q1. make a string out of a array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(" ");
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
  const result = array.reverse(); //배열 자체를 변화시킨다.
  console.log(result);
  console.log(array);
}
