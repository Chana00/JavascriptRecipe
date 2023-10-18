//04.로그출력
console.log("test");
//05 계산
console.log(2 ** 3); // 제곱
console.log(402 % 5); // 2

//06 변수let 상수const
let myname = "제이"; //변수
let letName = "렛";
let undeName;
const constName = "사자"; //상수
//constName = "호랑이"; -> 이건 불가능함
console.log("-----------");

let newName = myname + letName;
console.log(newName);
console.log(undeName);

console.log("비교값-----------");

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);

const arr3 = arr2;
console.log(arr2 == arr3);

console.log(10 == "10");
console.log(10 === "10");

console.log("011. 함수-----------");
function myFunc() {
  console.log("함수입니덩");
  return 100;
}

let res = myFunc();
console.log(res);

const myFunc2 = (a) => a + 2;
let res2 = myFunc2(2);
console.log(res2);

console.log("013. 함수의 초깃값 설정-----------");
const calcFunc = (price, tax = 0.08) => price + price * tax;
const res013_1 = calcFunc(100);
console.log(res013_1);
const res013_2 = calcFunc(100, 0.1);
console.log(res013_2);

console.log("014. 파라미터 함수-----------");

//나머지 파라미터 ...
function calcSum(...prices) {
  let res014_1 = 0;
  for (const value of prices) {
    res014_1 += value;
  }
  return res014_1;
}

const res014_2 = calcSum(2, 10);
const res014_3 = calcSum(5, 21, 2);
console.log(res014_2, res014_3);

console.log("015. 조건문 if-----------");
const myPrice = 100;
if (myPrice >= 50) {
  console.log("50이상");
} else if (myPrice >= 10) {
  console.log("10이상");
} else {
  console.log("10 미만");
}

console.log("016. 조건문 switch-----------");
const myFruit = "귤";

switch (myFruit) {
  case "사과":
    console.log("사과입니다");
    break;
  case "배":
    console.log("배입니다");
    break;
  case "귤":
    console.log("귤입니다");
    break;
  case "없음":
  default:
    console.log("없음 입니다");
}

console.log("017. 반복문 for-----------");

for (i = 0; i < 7; i++) {
  if (i >= 5) continue;
  console.log(i);
}

console.log("018. 반복문 while-----------");

let myNum = 0;
while (myNum < 10) {
  console.log(myNum);
  myNum += 2;
}
