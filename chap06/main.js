/*
 * chap06 브라우저
 */

// 버튼 클릭 시 작업 094. ~ 096.
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");

const res = document.querySelector(".res");

btn1.addEventListener("click", (event) => {
  // 알림창 표시
  alert("안녕하세요! \n좋은 하루 보내세요.");
});

btn2.addEventListener("click", (event) => {
  //확인창
  const isYes = confirm("확인창입니다!");

  res.innerHTML = isYes;
});

btn3.addEventListener("click", (event) => {
  //프롬프트, 문자 입력받기
  const text = prompt(
    "내용 / 오늘의 날씨는 어떤가요?",
    "입력초깃값 / 여기에 입력"
  );
  res.innerHTML = text;
});

//097. 윈도우 브라우저 사이즈 확인

const winW = window.innerWidth;
const winH = window.innerHeight;
console.log(winW, winH);

console.log("098. 디바이스 화소 확인하기 -----------");
const dpr = window.devicePixelRatio; // 화소 비율의 값
console.log(dpr);

console.log("100. 터치 디바이스 사용 확인 -----------");
//데스크탑과 모바일 브라우저 처리 구분
//window.ontouchstart : 함수 / 터치 기능 시작 이벤트, 터치 이벤트를 감시ㅏ는 핸들러
//navigator.pointerEnabled : 진릿값 / 포인트 사용 가능 여부
//navigator.maxTouchPoints : 숫자 / 포인터 최대치
const isSupported = !!(
  (
    "ontouchstart" in window || // iOS & 안드로이드
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
  ) // 윈도우즈용 터치 디바이스의 확인
);
console.log(isSupported);

console.log("101. a태그 외 페이지 이동 -----------");
console.log(location.href);
btn4.addEventListener("click", (event) => {
  location.href = "http://www.naver.com";
});

console.log("102. 페이지 리로드 -----------");
//location.reload();
//location.reload(true);  // 브라우저 캐시르 무시하고 새로고침 실행

console.log("103. 페이지이동(앞 뒤) -----------");
// history.back();
// history.forward();
// history.go(-1); // 뒤로가기와 동일

console.log("104. 해시#처리 -----------");
// 딥링크 구현 / 해시값 따라 처리구분
location.hash = "app";
const hash = location.hash;
console.log(hash);
//해시 변경 확인 : hashchange, 213p

console.log("105. 새 윈도우 창 열기 -----------");

btn5.addEventListener("click", (e) => {
  const win = window.open("http://www.google.com");
  win.focus(); //a태그의 target=_blank 속성과 비슷하다
});

console.log("107. 스크롤 -----------");
const x = window.scrollX;
const y = window.scrollY;

console.log("스크롤 크기 : ", x, y);
btn6.addEventListener("click", (event) => {
  window.scrollTo(0, 300);
});

console.log("109. 110. 타이틀 & 포커스 -----------");
document.title = "타이틀입니다";

window.addEventListener("focus", () => {
  document.querySelector("#foc").innerHTML = "포커스 상태";
});

window.addEventListener("blur", () => {
  document.querySelector("#foc").innerHTML = "포커스를 벗어난 상태";
});

///111. 전체 화면 표시 222p

console.log("112. 온라인/오프라인 대응하기 -----------");
// 접속 상태 확인
const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log("온라인 상태입니다.");
} else {
  console.log("오프라인 상태입니다.");
}

// 온라인 상태가 되면 실행되는 이벤트
window.addEventListener("online", () => {
  console.log("온라인 상태입니다.");
});

// 오프라인 상태가 되면 실행되는 이벤트
window.addEventListener("offline", () => {
  console.log("️오프라인 상태입니다.");
});
