/*
 * chap10 animations 요소
 */
function log(message) {
  console.log(message);
}
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", handleClick);

function handleClick() {
  const e = document.querySelector(".target");

  log("Transiton 확인 클릭");
  log(e.classList.contains("state-show"));
  if (e.classList.contains("state-show") === false) {
    e.classList.add("state-show");
  } else {
    e.classList.remove("state-show");
  }
}

// CSS Transition 이벤트
document.querySelector(".target").addEventListener("transitionend", (event) => {
  document.querySelector(".log").innerHTML =
    "transitionend 발생 : " + new Date().toLocaleTimeString();
});

//원본 폴더를 찾아보기(css 파일이 다름)