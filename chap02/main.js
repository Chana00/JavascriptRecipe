/*
 * chap02. 판별, 수 ,문자
 */

console.log("020. 진위여부-----------");
//브라우저 버전따라 알림창 띄울때
// 입력 항목에 따라 확인 버튼 무효화
const userName = "제이";
const userNameNull = "";

if (userName) {
  console.log(userName);
}
if (userNameNull) console.log(userNameNull);
else if (!userNameNull) console.log("NULL");

const flg = "JavaScript".includes("J");
if (flg) console.log("J가 포함되어 있습니다");

console.log("021. 숫자 다루기-----------");
console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

console.log("022. 어림계산-----------");
//화면크기를 정수로 조절할 때
console.log(Math.round(6.24)); // 반올림
console.log(Math.floor(6.24)); // 버림
console.log(Math.ceil(6.24)); // 올림
console.log(Math.trunc(6.24)); // 정수만 반환

console.log("022-2-----------");
console.log(Math.round(7.8)); // 반올림
console.log(Math.floor(7.8)); // 버림
console.log(Math.ceil(7.8)); // 올림
console.log(Math.trunc(7.8)); // 정수만 반환

console.log("022-3-----------");
console.log(Math.round(-7.49)); // 음수 올림처리
console.log(Math.round(-7.5)); // 음수 올림처리
console.log(Math.round(-7.51)); // 음수 내림처리

console.log("023. 랜덤수-----------");
//임의의 확률로 작업처리
// 애니메이션에 임의의 값 부여
console.log(Math.round(Math.random() * 10 + 5));

console.log("024. 수학 계산 함수-----------");
console.log(Math.abs(-10)); //절댓값
console.log(Math.pow(2, 10)); //2의 10제곱
console.log(Math.sign(2)); // 2가 양수이므로 1, 값의 부호 계산
console.log(Math.sign(-2)); // 음수이므로 -1 , 0이면 0
console.log(Math.sqrt(16)); // 제곱근 계산 - 16의 제곱근 = 4
console.log(Math.log(Math.E)); // 자연로그 계산 - 자연로그 e는 1
//지수함수 계산하는  Math.exp도 존재

console.log("025. 삼각 함수-----------");
console.log(Math.PI); //원주율
console.log(Math.cos((90 * Math.PI) / 180)); // cos 90
console.log(Math.sin((90 * Math.PI) / 180)); // sin 90
console.log(Math.tan((45 * Math.PI) / 180)); // tan 45
console.log(Math.acos(1)); // 역함수 sin 1 = 0
//console.log(Math.atan2(y,x)); // y,x 좌표가 이루는 각도

console.log("026. 문자열 다루기-----------");
console.log("웹디자인".length); //글자수
console.log("✎".length);
console.log(Array.from("✎").length);

const trmstr1 = "            공 백        \n";
console.log(trmstr1);
console.log(trmstr1.trim()); //공백제거

const myStr = "JavaScript를 배우자";
console.log(myStr.indexOf("JavaScript"));
console.log(myStr.indexOf("를"));
console.log(myStr.lastIndexOf("a")); //문자열 종료 인덱스
console.log(myStr.indexOf("j")); //대소문자 구분
console.log(myStr.indexOf("javaScript", 4)); //지정 위치부터 검색

console.log("030. 문자열 검색------------");
const myStr2 = "JavaScript를 배우자";
console.log(myStr2.includes("JavaScript")); // 문자열 포함 여부 확인
console.log(myStr2.startsWith("배우자")); // 시작 문자열이 인수와 같은지 확인
console.log(myStr2.endsWith("배우자")); // 끝문자열 확인

console.log("031. 문자열에서 문자 추출------------");
//지정한 위치의 문자 추출
"JavaScript".charAt(3); // a
"JavaScript".charAt(); // 인수 생략시 0인덱스 위치

console.log("032. 문자열 다루기 위치지정 & 변환------------");
//지정 범위 내 & 지정 위치 이후 문자열 추출 사용
"JavaScript".slice(0, 4); //Java
"JavaScript".slice(0); //문자열 마지막까지 추출
"JavaScript".substring(0, 4);
"JavaScript".substring(0);
//sliec는 음의 정수도 사용 가능, substring은 음수를 0으로 간주하기 때문에 불가능
"나의 마우스".slice(-2); // 뒤에서부터 문자열 추출, 시작인덱스 -1, '우'부터 반환
console.log("나의 마우스".slice(-2));

"JavaScript".substr(4, 6); //시작 위치4 부터 6개의 문자 추출 = Script

const imgName = "image1.png";
imgName.replace("1.png", "2.png");
console.log(imgName);
console.log(imgName.replace("1.png", "2.png"));

let phoneNum = "010-2134-5678";
console.log(phoneNum.replace("-", ""));
console.log(phoneNum.replace(/-/g, "")); //정규표현식 을 통한 의도한 작업
// g옵션 : 문자열 전체 일치 검색

//split - URL의 해시 데이터를 가져올 때, 공백 기준 문자열을 나눌 때
console.log(phoneNum.split("-"));

console.log("036. 문자열 합치기------------");
const country = "대한민국";
const states = "서울";
console.log(country + states);
console.log(`${country}${states}`);

console.log("037. 문자열 대소문자------------");
"JavaScript".toLowerCase(); // javascript
"JavaScript".toUpperCase(); // JAVASCRIPT

//039. 정규표현식 - 088p 확인
console.log("040. 정규표현식 검색------------");
console.log(/J/.test("JavsScript")); //JavaScript에 J가 포함되는가? true

console.log(/^iP/.test("iPhone")); //시작문자가 iP인지 여부

console.log("041. 소숫점 자릿수 지정하기------------");
(0.33333).toFixed(2); // 0.33 (문자열)

(123.5678).toFixed(1); // 123.6 근사치로 변환

(2.4).toFixed(4); // 2.4000

(0.33333).toPrecision(2); // 0.33 = 정밀도 2

(123.456).toPrecision(3); // 123 = 정밀도 3

console.log("042. 문자열 길이 맞추기------------"); //10 미만 숫자 앞에 0을 붙여 두자리 형식을 만들고 싶을 때
console.log("5".padStart(2, "0")); // 05
console.log("ff".padEnd(6, "0")); // ff0000
console.log("ff".padStart(6)); //     ff

console.log("043. URI 이스케이프 처리------------");
//URL 한글 인코딩, SNS 한글 인코딩 후 URL로 변환
encodeURI("http://example.com/귀여운 고양이 페이지.html");
encodeURIComponent("http://example.com/귀여운 고양이 페이지.html"); //처리를 실행하는 문자 종류가 더 많음

decodeURI();
decoudeURIComponent();
