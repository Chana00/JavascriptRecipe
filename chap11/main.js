/*
 * chap08 HTML 요소
 */
function log(message) {
  console.log(message);
}

console.log("192. 이미지 작업 -----------");
const imgA = document.querySelector("#imgA");
const imgB = document.querySelector("#imgB");

imgA.onload = () => {
  imgA.classList.remove("loading");
  log("이미지 로딩 완료");
};

imgA.src = "images/photo_a.jpg";
imgA.classList.add("loading");

log("193.로딩지연 -----------");
let imgBsrc;
const btn = document.querySelector(".btn");

window.addEventListener("DOMContentLoaded", () => {
  imgBsrc = imgB.dataset.src;
  imgB.removeAttribute("src");
});

btn.addEventListener("click", () => {
  imgB.src = imgBsrc;
});

log("196. 사운드 사용 -----------");
//은 404p
//409p Web Audio API 사용
