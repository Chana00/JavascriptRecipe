/*
 * chap04 데이터 심화
 */

console.log("076. 객체 타입 확인-----------");
console.log(typeof true);
console.log(typeof null);
console.log(typeof 10);

console.log("077. 객체 인스턴스 확인-----------");
//데이터 종류에 따라 처리를 구분하고 싶을 때
const today = new Date();
console.log(today instanceof Date); //데이터가 객체의 인스턴스인지 확인하는 연산자
console.log(today instanceof Array);

function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`현재 ${argument.toLocaleDateString()} 입니다.`);
  } else {
    console.log("적절한 데이터 타입이 아닙니다");
  }
}

const myArr = [1, 2, 3];
showCurrentDate(today);
showCurrentDate(myArr);

console.log("078. 데이터 타입 변환-----------");
const res = 100 + Number("200");
console.log(res);

Boolean(1); // true, boolean 타입으로 변환
Boolean(0); // false

String(345); // "345", string 타입으로 변환
Number("99"); // 99 , number 타입으로 변환
Number("사자"); // NaN
Number(true); // 1

console.log("080. undefined와 Null-----------");
/**
 * 두개 모두 원시타입, Undefined는 데이터가 정해지지 않은 상태
 * 개발자가 의도하여 사용X, 브라우저에서 정의되지 않은 데이터를 다룰 때 사용
 * Null : 데이터 없음으 표시하고 싶을 때 사용
 */
