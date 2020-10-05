"use strict";

// promise는 js의 내장된 객체
// 비동기적 operation을 위한

// State: pending -> fulfiled or rejected

// 1. producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    console.log("doing something ...");
    setTimeout(() => {
        resolve("taenam");
    }, 2000);
});
