/*
 * chap06 브라우저
 */
function log(message) {
  console.log(message);
}

setTimeout(timer1, 500);
function timer1() {
  log("Hi, timer1!");
}

setTimeout(() => {
  log("Hi, 화살표함수");
}, 1000);

let count = 1;
const intervalID = setInterval(() => {
  if (count >= 3) clearInterval(intervalID);

  log("Hi, 나 반복 " + new Date().toLocaleTimeString() + " " + count);
  count++;
}, 1500);

setTimeout(() => {
  console.log("225. promise 병렬처리(all) -----------");
  // 배열 작성
  const arrFunc = [];
  for (let i = 0; i < 5; i++) {
    const func = (resolve) => {
      console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString());
      // 0~2초 지연
      const delayMsec = 2000 * Math.random();

      // 지연 처리
      setTimeout(() => {
        console.log(`처리 ${i} 완료`, new Date().toLocaleTimeString());
        resolve();
      }, delayMsec);
    };
    // 배열 저장
    arrFunc.push(func);
  }

  console.log(arrFunc);

  // 함수를 포함한 배열을 Promise 배열로 변환
  const arrPromise = arrFunc.map((func) => new Promise(func));

  console.log(arrPromise);

  // 병렬 처리 실행
  Promise.all(arrPromise).then(() => {
    console.log("모든 작업이 완료되었습니다.");
  });
}, 5000);

start();

async function start() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("226. await async -----------");
      console.log("첫번째 Promise", new Date().toLocaleTimeString());
      resolve();
    }, 7000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("두번째 Promise", new Date().toLocaleTimeString());
      resolve();
    }, 2000);
  });
}
