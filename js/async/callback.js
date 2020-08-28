"use strict";

// 자바스크립트는 동기적 언어
// 호이스팅이 된 이후로, 순서에 맞춰서 동기적으로 실행
// 호이스팅은 var, function declaration 자동으로 선언이 제일 위로 올라가는 것
// 호이스팅이 된 이후로, 자동으로 실행이 된다.
// callback함수 전달해준 함수를 나중에 불러줘라는 개념

console.log("1");
setTimeout(function () {
    console.log("2");
}, 1000);
console.log("3");

// 자바스크립트 엔진은 제일 위부터 아래로 실행
// setTimeout은 브라우저 API니까 브라우저에게 callback 실행해달라고 요청
