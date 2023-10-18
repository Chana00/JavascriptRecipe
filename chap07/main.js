/*
 * chap07 이벤트처리
 */
function log(message) {
  console.log(message);
}

console.log("114. 이벤트 추가 -----------");
const btn1 = document.querySelector(".btn1");
const option = {
  once: true,
};

btn1.addEventListener("click", onClickBtn);
/*
 *
 *   btn1.addEventListener("click", onClickBtn, option); // 옵션을 줄 수도 있다. capture, once, passive
 *   btn1.removeEventListener("click", onClickBtn, option); // 이벤트 삭제
 *
 * 이벤트 목록
 * --마우스&화면
 * click
 * mousedown  // 마우스 버튼을 누르는 시점
 * mouseup // 버튼을 떼는 시점
 * mousemove // 움직이는 시점
 * mouseenter // 포인팅 디바이스가 요소의 위치에 있을 때
 * mouseleave // 포인팅 디바이스가 요소를 벗어날 때
 * scroll // 스크롤 작업 실행시
 * selectstart // 텍스트 선택 시점
 * visibilitychange // 브라우저 탭 상태가 변경되는 시점(백그라운드화)
 *  ㄴ document.visibilityState - visible / hidden
 * resize // 브라우저 윈도우 창의 사이즈 변환 시점
 * -- 드래그 요소
 * dragstart : 끌어오기 시작
 * drag : 드래그 중
 * dragend : 드래그 완료 시점
 *
 * -- 드래그 완료
 * dragenter : 드래그 중인 포인터가 요소 위치로 이동한 시점
 * dragover : 드래그 ㅜㅈㅇ인 포인터가 요소 위치에 있는 시점
 * dragleave : 드래그중인 포인터가 요소에서 벗어난 시점
 * drop : 요소 드롭 시점
 *
 * -- 화면터치(스마트폰)
 * touchstart : 터치 시작 시점
 * touchmove : 터치 포인트를 움직이는 시점
 * touchend : 터치 종료 시점
 *
 * --키보드입력
 * keydown // 키를 누르는 시점
 * keyup // 누른 키를 떼는 시점
 * keypress // 문자 키가 눌러진 시점. alt키,enter 등을 입력할 때는 작동 X
 *
 */

/**
 * 이벤트 속성
 * event.clientX  // 브라우저 좌측 상단 기준 X좌표
 * event.clientY
 * event.offsetX Y  // 요소 좌측 상단 기준
 * event.pageX Y  // 페이지, 스크론 분량의 정보 포함
 * event.screenX Y // 디바이스의 좌측 위 기준
 * event.changedTouches //  터치 정보 배열( 마우스 움직임 따라 작업 처리, 터치 반응 요소 작업)
 * ㄴ 터치정보.clientX Y, offset, page, screen 속성 사용 가능
 *
 * --키보드이벤트.속성
 * event.key : 눌러진 키의 값 : 문자열
 * code : 눌러진 버튼의 코드 : 문자열
 * altKey : 키 값 확인(alt 키 여부)
 * ctrlKey : ctrl키 여부
 * shiftKey : shift키 여부
 * metaKey : meta키 여부
 * repeat : 현재 키의 눌러진 상태 확인 / boolean
 * isComposing : 입력중 상태 확인
 * KeyCode : 눌러진 키의 아스키코드 값 : 숫자
 * 입력된 키 확인은 키코드값을 사용
 *
 * event.dataTransfer.files : 드롭한 파일 정보
 */

function onClickBtn(e) {
  console.log("클릭 이벤트 발생!");
  console.log(e);
  console.log(e.target);
}

document.querySelector(".box").addEventListener("mouseenter", () => {
  log(".box 요소 위치에 마우스가 있음");
});

console.log("117. 페이지 로드시 이벤트 사용 -----------");
// DOM 요소 액세스 타이밍에 맞춰 작업 처리
// 이미지 로딩 완료 후 작업 처리할 때
window.addEventListener("DOMContentLoaded", () => {
  const boxNum = document.querySelectorAll(".box").length;
  console.log(`박스의 개수 : ${boxNum}`);
}); // 제일 아래 나온다

//그냥 load 이벤트는 페이지 내 모든 리소스의 로딩이 완료된 후 발생
// DOMContentLoaded보다 시점이 느리다

console.log("120. 마우스 오버 이벤트(이벤트 버블링) -----------");
//부모 요소까지 이벤트 전달
//자식 요소에서 발생한 이벤트가 부모 요소 이벤트 리스너도 함께 실행
document.querySelector(".box2").addEventListener("mouseover", () => {
  log(".box 요소 위치에 마우스가 있음");
});

document.querySelector(".inner").addEventListener("mouseover", () => {
  log(".inner 요소 위치에 마우스가 있음");
});

console.log("124. 텍스트 선택 이벤트 처리 -----------");
const paragraph = document.querySelector(".para");
paragraph.addEventListener("selectstart", () => {
  console.log("텍스트가 선택되었습니다");
});

console.log("131. 사이즈 벗어난 화면 처리 -----------");
const mediaQueryList = matchMedia("(min-width: 500px)");
log(mediaQueryList);
log(mediaQueryList.matches); // 윈도우 창의 크기가 500px 이상이면 true

console.log("132. 이벤트 작동 설정 -----------");
const boxEle = document.querySelector(".box3");
boxEle.addEventListener("click", () => {
  boxEle.innerHTML = "클릭 이벤트 발생";
});

setTimeout(() => {
  boxEle.dispatchEvent(new Event("click")); // 1초후 클릭 이벤트 실행
}, 1000);

console.log("133. 기본이벤트 작동 해지 설정 -----------");
//이벤트.preventDefault() : 이벤트 작동 해지

console.log("134. 드래그 앤 드롭기능 -----------");
