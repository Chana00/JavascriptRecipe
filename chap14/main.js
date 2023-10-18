/*
 * chap14 데이터송수신
 */
function log(message) {
  console.log(message);
}

console.log("226. JSON -----------");

const jsonString = `{"students" : 40, "grade" : 4, "name" : "C반" }`;
const mydata = { a: 1000, b: "안녕하세요" };

const resData = JSON.parse(jsonString); // JSON 문자열을 객체로 변환
const resJson = JSON.stringify(mydata); // 객체를 JSON 문자열로 변환
const resJson2 = JSON.stringify(mydata, null, " "); //공백, 줄바꿈 넣어줌
//JSON.stringify(obj, replacer, space) : 일부 데이터만 JSON 문자열로 변환가능, 471p

log(resData);
log(resData.students);
log(resData.grade);

log(resJson);
log(resJson2);

console.log("233. fetch()로 텍스트 데이터 읽어오기 -----------");
const btn = document.querySelector(".btn"); // 버튼 요소 가져오기
btn.addEventListener("click", () => {
  // 버튼 클릭 시
  async function load() {
    const data = await fetch("sample.txt"); // ①
    const text = await data.text(); // ②
    console.log(text); // ③
    // 텍스트 출력
    document.querySelector("#log").innerHTML = text;
  }

  load();
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  // 버튼 클릭 시
  async function load() {
    // 파일 읽어오기
    const data = await fetch("sample.json"); // json 파일을  fetch로 읽어온다
    // JSON으로 해석
    const obj = await data.json(); // data.json()을 붙인다
    console.log(obj); // 결과: {name: "A학교", classes: Array(2)}
    // 텍스트 출력
    document.querySelector("#log").innerHTML = JSON.stringify(obj, null, "  ");
  }

  load();
});
//xml 데이터 읽어오기는 p476
//이미지 데이터 처리 읽어오기는 p478
//데이터 보내기는 480p

console.log("233. XMLHttpRequest()로 텍스트 데이터 읽어오기 -----------");
const btn3 = document.querySelector(".btn3"); // 버튼 요소 가져오기
btn3.addEventListener("click", () => {
  // 버튼 클릭 시
  // XHR 생성
  const req = new XMLHttpRequest();
  // 불러오기 완료 후 이벤트
  req.addEventListener("load", (event) => {
    // response 가져오기
    const text = event.target.responseText;

    // 텍스트 출력
    document.querySelector("#log").innerHTML = text;
  });
  // 파일 지정
  req.open("GET", "./sample.txt");
  // 가져오기 시작
  req.send();
});
//취소 & 진행상황 = 486p
