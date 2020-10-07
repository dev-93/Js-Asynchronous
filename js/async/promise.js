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
    })
    .finally(() => console.log("finally"));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num));

// 4.Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });

const getFri = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch((error) => {
        return "🍗";
    })
    .then(getFri)
    .then(console.log)
    .catch(console.log);
