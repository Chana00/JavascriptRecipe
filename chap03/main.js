/*
 * chap03 데이터 다루기
 */

const arr1 = [
  { id: 1, name: "곰" },
  { id: 2, name: "여우" },
];
console.log(arr1);

const arr2 = new Array("곰", "여우");
const arr2_2 = new Array(10);
arr2_2[0] = "곰";

console.log(arr1.length);

console.log("047. 배열 요소 다루기------------");
//배열 요소 데이터 처리

const arr47_1 = ["딸기", "귤", "사과"];

// 1. forEach : map(), filter() 등의 반환값을 그대로 처리 가능
arr47_1.forEach((value, i) => {
  console.log(i, value);
});

[1, 2, 3, 4, 5, 6, 7, 8]
  .filter((value) => value % 2 === 0)
  .forEach((value) => {
    console.log(value);
  });

// 2. for
// 배열의 루프 처리 중 요소의 인덱스가 불필요할 때 사용
for (value of arr47_1) {
  console.log(value);
}

const arrayLength = arr47_1.length;
for (i = 0; i < arrayLength; i++) {
  console.log("for i문 : " + arr47_1[i]);
}

console.log("050. 배열 요소 추가------------");
const arr3 = ["사과", "귤"];
arr3.unshift("바나나"); // 바나나를 배열 첫 위치에 추가
arr3.push("딸기"); //딸기를 배열 마지막에 추가
console.log(arr3);

arr3.shift(); // 배열 첫 위치의 요소 삭제
arr3.pop(); //배열 마지막 위치의 요소 삭제
console.log(arr3);

console.log("051. 배열 요소 변환------------");
const arr4 = ["사과", "귤"];

arr4.splice(1, 0, "바나나"); // 인덱스 1의 위치에서 0개 요소 삭제하고 바나나 추가
console.log(arr4);

arr4.splice(1, 1, "딸기", "오렌지"); // 인덱스 1의 위치에서 0개 요소 삭제하고 바나나 추가
console.log(arr4);

console.log("053. 배열 결합------------");
const arr5 = ["곰", "사자"];
const arr5_2 = ["여우"];
const arr5_concat = arr5.concat(arr5_2); //concat을 이용한 결합
console.log(arr5_concat);

console.log(arr5);
console.log([...arr5]);

const arr5_rest = [...arr5, ...arr5_2]; // 스프레드 연산자를 사용한 결합
console.log(arr5_rest);

console.log("054. 배열 결합하여 문자열 만들기------------");
const arr54 = [2, 4, 10];
console.log(arr54.join()); //결합하여 문자열로 출력
console.log(arr54.join(" "));

console.log("055. 배열 요소 검색------------");
["사과", "바나나", "귤"].indexOf("바나나"); //1
[0, 2, 3, 4, 3, 2, 0].lastIndexOf(3); //4

["사과", "바나나", "귤"].includes("바나나"); // true
[0, 2, 3, 4, 3, 2, 0].includes(6); // false

console.log("056. 조건을 만족하는 배열 요소 가져오기------------");
// 유저 정보가 담긴 배열에서 ID를 기준으로 정보를 가져오고 싶을 때
const arr6 = ["사과", "바나나", "귤", "곰", "사자"];
const target = arr6.find((e) => e === "사자"); // 요소 검색
console.log(target);

const targetIndex = arr6.findIndex((e) => e === "곰");
console.log(targetIndex);

console.log("057. 배열 역순 정렬 ( reverse )------------");
const arr7 = [1, 3, 5];
arr7.reverse();
console.log(arr7);

console.log("058. 배열 정렬 지정( sort )------------");
const arr8 = [1, 2, 3, 4, 3, 5, 1];
arr8.sort((a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
});
console.log(arr8);
// 반환값 < 0  => a , b 순서로 정렬
// 반환값 = 0  => 변화X
// 반환값 > 0  => b , a 순서로 정렬
//sort() 안에 비교함수 생략시 유니코드 순서대로 정렬 -> 기대하는 결과가 나오지 않으니 유의

console.log("060. 배열 요소 알파벳순 정렬------------");
const arr9 = ["grape", "Orange", "apple"];
arr9.sort();
console.log(arr9);

arr9.sort((a, b) => a.localeCompare(b)); // 대소문자 구분없는 문자열 비교정렬
console.log(arr9);

console.log("061. 배열 요소 추출하여 새 배열 만들기 map------------");
const idList = [4, 10, 20];
const userIdList = idList.map((value) => `userId_${value}`);
console.log(userIdList);
//forEach와 비슷하지만 map은 반환값이 존재한다

console.log(
  "062. 조건 만족하는 배열요소 추출하여 새 배열 만들기 filter------------"
);
const arr10 = [10, 20, 30, 40].filter((value) => value >= 30);
console.log(arr10);

console.log("063. 배열요소 하나로 정리------------");
//배열 요소를 계산하여 하나의 값으로 만들고 싶을 때
const priceList = [100, 500, 900];
const sum = priceList.reduce((pre, cur) => {
  // reduce : 요소(좌->우)를 처리하여 하나의 값 생성
  return pre + cur;
});
console.log(sum);
//reduceRight : 요소(우->좌)

console.log("064. 유사 배열 객체를 배열로 변환 ( ... ) ------------");
const myString = "안녕하세요";
console.log([...myString]);
//Array.from(myString) 으로도 가능

console.log("065. 객체 분할 대입(할당) ------------");
let a, b, c;
[a, b, c] = [1, 2, 3];
console.log(a, b, c);

console.log("066. 배열 섞기(셔플) ------------");
//게임에서 요소의 값을 섞을 때
const arr11 = [1, 2, 3, 4, 5];
const arrLen = arr11.length;

//피셔 예이츠 알고리즘
for (i = arrLen - 1; i >= 0; i--) {
  const randomI = Math.floor(Math.random() * (i + 1));
  [arr11[i], arr11[randomI]] = [arr11[randomI], arr11[i]];
}
console.log(arr11);

console.log("067. 다양한 데이터 타입을 가진 객체 사용 ------------");
//다양한 데이터를 하나의 객체로 만들기
//연관 배열을 사용하고 싶을 때
const person = {
  id: 1,
  name: "거북이",
  age: 28,
};
console.log(person);

console.log("068. 객체 선언 수정 확인하기 ------------");
const object = {}; // 빈 객체
const person2 = {
  id: 1,
  name: "거북이",
  age: 28,
};
console.log(person2.id);
console.log(person2["name"]);

person.id = 2;
person["name"] = "사자"; //key를 사용한 데이터 불러오고 변경하기
console.log(person.id);
console.log(person["name"]);

const res = {
  result: true,
  list: [
    {
      id: 1,
      name: "호랑이",
      age: 26,
    },
    {
      id: 2,
      name: "사자",
      age: 32,
    },
  ],
  method1: () => {
    console.log("메소드 실행");
  },
};

console.log(res.list[1].age);
res.method1();

console.log("069. 객체 복사 ------------");
const copyRes1 = Object.assign({}, res); //assign을 이용한 객체 복사 방법. 얕은복사
console.log(copyRes1);

const copyRes2 = { ...res }; // 객체의 각 요소를 분할 대입을 통한 복사
console.log(copyRes2);

console.log("070. 객체 속성확인 property ------------");
console.log(res.hasOwnProperty("list")); // 데이터 유무 확인 : boolean = true
console.log(res.hasOwnProperty("id")); // false
console.log("list" in res); // true
console.log(res.result != null); // true

console.log(Object.keys(res)); //키의 배열
console.log(Object.values(res)); // 각 데이터 배열
console.log(Object.entries(res)); // 속성의 배열

console.log("071. 객체 요소 분할 대입(비구조화 할당) ------------");
//객체의 데이터를 정리하여 대입, 일부 데이터를 추출하여 사용
const userData1 = {
  id: 1,
  name: "사자",
  age: 26,
};

const { id, age, name, address } = userData1;
//객체에서 같은 이름의 키 데이터를 추출하여 변수에 대입하는 분할 대입법. 순서는 상관X

console.log(id, name, age, address);
//존재하지 않는 키는 undefined 반환

const { name: myName } = userData1;
console.log(myName);
//별도 이름 지정

console.log("072. 객체 수정 제한 ------------");
const obj1 = { id: 10, name: "사자" };
obj1.id = 12;
obj1.address = "서울";
console.log(obj1);

// 속성 추가 삭제 변경제한 -> obj1.freeze()
//배열도 제한 가능

("use strict"); // 오류 검사 설정, ES5 추가기능. 보통 스크립트의 시작 부분에 표기

const obj2 = { ...obj1 };
Object.freeze(obj2);

obj2.id = 15;
obj2.address = "부산";
console.log(obj2);

console.log(Object.isFrozen(obj2)); //frozen 상태인지 확인
