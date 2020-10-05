"use strict";

// promise는 js의 내장된 객체
// 비동기적 operation을 위한

// State: pending -> fulfiled or rejected

// 1. producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    console.log("doing something ...");
    setTimeout(() => {
        // resolve("taenam");
        reject(new Error("no network"));
    }, 2000);
});

// 2. Consumers: then catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
