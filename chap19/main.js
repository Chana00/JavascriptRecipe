/*
 * chap19 심화
 */
function log(message) {
  console.log(message);
}

log("274. iterator -----------");
function* myGenerator() {
  yield "사자";
  yield "호랑이";
  yield "여우";
}

const myIter = myGenerator();

log(myIter.next().value);
log(myIter.next().value);
log(myIter.next().done);
log(myIter.next().value);
log(myIter.next().value);
log(myIter.next().done);

log("275. 심볼 -----------");
const sym1 = Symbol();
const sym2 = Symbol("기린");
const sym3 = Symbol("41");

log(sym1, sym2, sym3);
log(sym2);
log(sym3);

//276. 프로토타입, 독자메소드 추가 572p

log("277. 맵 -----------");
const memberList = new Map();
memberList.set(20, "사자");
memberList.set(50, "호랑이");
memberList.set(120, "사슴");

log(memberList.get(20));
log(memberList.get(50));
log(memberList.get(120));
/**
 * has
 * delete : 키의 값 삭제
 * clear : 키와 값 모두 삭제
 * keys : 키의 반복자 객체
 * values : 값의 반복자 객체
 * entries : 키와 값 배열의 반복자 객ㅊ
 * forEach : 세트에 대한 처리 실행
 * (속성) 맵.size : 세트수
 *
 */

log("278. 데이터 Set -----------");
//중복없는 유저 ID 배열을 사용하고 싶을 때
/**
 * .add()
 * .has()
 * .delete()
 * .values()
 * .forEach(콜백)
 * (속성) .size
 */
const userIdList = new Set();
userIdList.add(20);
userIdList.add(50);
userIdList.add(500);
log(userIdList.has(50));

const userIdList2 = new Set([20, 50, 111]);
const valueList = userIdList2.values();
for (let value of valueList) log(value);
