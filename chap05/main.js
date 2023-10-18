/*
 * chap05 날짜와 시간
 */
const date = new Date();

console.log("082. 날짜 다루기 -----------");
const year = date.getFullYear();
const month = date.getMonth() + 1; //month의 return값은 0부터이므로 +1
const day = date.getDate(); // 일 가져오기
const daylist = ["일", "월", "화", "수", "목", "금", "토"];
const label = daylist[date.getDay()]; // 요일 가져오기 0~6, getDate와 getDay는 다르므로 헷갈리지 않기
let hour, min, sec;
hours = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();
console.log(year, month, day);
console.log(hours, min, sec);

let meridiem, hour2;
if (hour < 12) {
  meridiem = "am";
  hour2 = hours;
} else {
  meridiem = "pm";
  hour2 = hours - 12;
}
console.log(meridiem, hour2, min, sec);

console.log("083. 현재 시간과 날짜 가져오기 -----------");
const locale = date.toLocaleString();
const localeDate = date.toLocaleDateString();
const localeTime = date.toLocaleTimeString();
console.log(locale);
console.log(localeDate);
console.log(localeTime);

console.log("084. 날짜/문자열 타임스탬프 확인 -----------");
const num1 = Date.parse("2022/07/20"); //1970 01 01 00시부터 현재까지의 경과시간. 단위는 밀리초
const numNow = Date.now();
console.log(num1, numNow);

console.log("085. 날짜 설정 -----------");
const date1 = new Date("2020/12/28 20:01:10");
const date2 = new Date("Mon Dec 28 2020 20:01:10");
const date3 = new Date(2020, 12, 28, 20, 1, 10);
const date4 = new Date(1528801270000);
// date.setMonth~ 등 setXXX()의 형태로 메소드를 통해 설정할 수도 있다

console.log("085. 날짜 계산 -----------");
const newDate = new Date("2020/06/01");
newDate.setMonth(newDate.getMonth() - 1); // 1개월 전
console.log(newDate.toLocaleDateString());

newDate.setDate(newDate.getDate() + 60); // 60일 후
console.log(newDate.toLocaleDateString());

const dateA = new Date("2020/06/01");
const dateB = new Date("2020/05/01");
const diffMSec = dateA.getTime() - dateB.getTime();
const diffDate = diffMSec / (24 * 60 * 60 * 1000);
const diffHour = diffMSec / (60 * 60 * 1000);
const diffMin = diffMSec / (60 * 1000);
console.log(`날짜의 차이는 ${diffDate}일/${diffHour}시간/${diffMin}분 입니다`);

console.log("086. 경과시간 확인 + 카운트다운 -----------");
const oldTime = Date.now(); //현재 시간을 밀리초로 가져온다
const totalTime = 5000; //5초
const timerId = setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;
  const remainMSec = totalTime - diff;

  //초단위 변환
  const sec = Math.floor(diff / 1000);

  console.log(sec + "초 경과");
  if (remainMSec <= 0) {
    console.log("작업을 종료합니다");
    clearInterval(timerId);
  }
});
