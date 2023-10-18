/*
 * chap08 HTML 요소
 */
function log(message) {
  console.log(message);
}

//document.querySelector(셀렉터명)
//셀렉터명: #ID, .class, :nth-child(번호) 등
//document.getElementById(아이디) -> #id를 넣은것과 동일
//document.getSelectorAll(셀렉터명) -> 일치하는 요소 모두 가져오기, 배열로 반환(NodeList)
//document.getElementsByClassName(클래스명) -> 클래스명 일치요소 모두 가져오기 . 은 넣지 않는다, forEach 사용 불가능

console.log("140. <html> <body> 요소 읽어오기 -----------");
log(document.documentElement); // 문서의 루트요소 지정
//document.body 요소를 가져온다
//document.footer

console.log("142. 부모요소에 자식요소 추가 -----------");
const container = document.querySelector(".container");
const inBox = document.querySelector(".innerBox");
const inBox2 = document.querySelector(".innerBox2");
const myBox = document.querySelector("#myBox");
const myBox2 = document.querySelector("#myBox2");
const myBox3 = document.querySelector("#myBox3");

const myBox4 = document.querySelector("#myBox4");
const myBox5 = document.querySelector("#myBox5");

const aNaver = document.querySelector("#aNaver");

// 3초 후 .container 요소의 끝에 #myBox 요소를 추가, 부모요소 기준으로 자식노드 추가
setTimeout(() => {
  container.appendChild(myBox);
}, 3000);

setTimeout(() => {
  container.insertBefore(myBox2, container.firstElementChild); // container 요소의 제일 앞에 삽입
}, 4000);

setTimeout(() => {
  container.insertBefore(myBox3, inBox); // container 요소의 myBox 앞에 요소 삽입
}, 5000);
//모달 윈도우창을 화면에 추가하고 싶을 때 사용

console.log("144. 요소 앞뒤에 다른요소 추가 -----------");
setTimeout(() => {
  inBox2.before(myBox4); // container 요소의 myBox 앞에 요소 삽입
}, 6000);
setTimeout(() => {
  inBox2.after(myBox5); // container 요소의 myBox 앞에 요소 삽입
}, 7000);

console.log("145. 코드 요소 추가 삭제 복사 등-----------");
// 부모요소.insertAdjacentHTML(삽입위치, 문자열)
// 삽입위치) beforebegin : 부모요소 바로앞
// afterbegin // 부모요소 제일앞
// beforeend // 제일 뒤
// afterend // 바로뒤
// 부모노드.removeChild(자식노드) :부모노드에서 자식요소 제거 : 반환은 제거된 요소
// 노드.remove() : 자신 제거
// 노드.cloneNode(진릿값) : true시 자식 노드도 복제. 화면에 표시하고 싶으면 appendChild 이용
// 부모노드.replaceChild(새노드, 교체대상노드) : 부모노드의 자식노드 교체
// 변경대상노드.replaceWith(새노드) : 대상노드를 새노드로 교체
// 요소.classList.add(클래스1, 클래스2 ..)  클래스추가
// 요소.classList.remove(클래스1, 클래스2...) 제거
// 요소.classList.contains(클래스) : 존재여부 확인
// 요소.classList.toggle(클래스) : 설정된 클래스 추가/제거

/**
 * 속성
 * 노드.textContent : 노드 내 텍스트. 속성
 * 요소.innerHTML : 요소내부 HTML 문자열
 * 요소.outerHTML : 요소 HTML. 자신도 대상이 될 수 있다
 * 요소.setAttribute(속성, 값) : 요소 속성 설정
 * 요소.getAttribute(속) : 속성 가져오기
 * 요소.hasAttribute(속) : 속성 존재여부 확인 / 진릿값
 * 요소.style.속성 : 스타일값
 * getComputedStyle(요소).속성 : 스타일값 가져오기
 */

console.log("148. 요소 생성 -----------");
document
  .querySelector("#create-modal-button")
  .addEventListener("click", displayModalWindow);
function displayModalWindow() {
  // 모달 윈도우 창 생성
  const modalElement = document.createElement("div");
  // modal 클래스 부여
  modalElement.classList.add("modal");

  // 모달 윈도우 내부 요소 생성
  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `
      <p>모달 윈도우 내용 </p>
      <div style="margin: 10px; border-style: solid;">안녕하세용</div>
    `;
  // 모달 윈도우 내부 요소 배치
  modalElement.appendChild(innerElement);
  // body 요소에 모달 윈도우 배치
  document.body.appendChild(modalElement);

  // 내부 요소 클릭 시 모달 윈도우 삭제 처리
  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

/** 모달 윈도우 닫기  */
function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}

log(myBox4.textContent);
log(inBox.innerHTML);
//Attribute
log(aNaver.getAttribute("href"));
aNaver.setAttribute("target", "_blank");
aNaver.forEach((element) => {
  //a 태그에 target 속성이 없으면 return
  if (element.hasAttribute("target") === false) {
    return;
  }

  // target이 _blank 속성이 아니면 return
  if (element.getAttribute("target") !== "_blank") {
    return;
  }

  // rel 속성에 noopener 설정
  element.setAttribute("rel", "noopener");
});
