//json에서 데이터 받아오기
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

//loadItems로 받아온 json 데이터를 map을 사용하여innerHTML으로 HTML에 넣어줌
function displayItems(items) {
  const container = document.querySelector(".items"); //.items 클래스를 container라는 상수로 만들어줌
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

//displayItems에서 innerHTMl에  데이터를 넣어주기 알맞게 데이터를 string으로 변환
function createHTMLString(item) {
  return `
    <li class="item">
        <img class="item_thumbnail" src="${item.image}" alt="${item.type}">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
  //이벤트 처리하는 함수 -> on으로 시작
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (key == null || value == null) {
    return;
  }
  const filtered = items.filter((item) => item[key] === value); //key는 type이니까 item의 type이 value랑 같은거만 출력
  console.log(filtered);
  displayItems(filtered);
}

function setEventListners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".button_box"); // 하나하나 이벤트를 넣어주기보단 컨테이너에 넣어줘서 한군데에서 이벤트를 핸들링 할 수 있게 함
  logo.addEventListener("click", () => displayItems(items)); //로고 누르면 전체 다 보여줘야하니 displayItems 사용
  buttons.addEventListener("click", (event) => onButtonClick(event, items)); //버튼이 클릭되면 이벤트가 발생할 수 있도록
}

//main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListners(items);
  })
  .catch(console.log);
