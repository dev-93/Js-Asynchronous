"use strict";

// 자바스크립트는 동기적 언어
// 호이스팅이 된 이후로, 순서에 맞춰서 동기적으로 실행
// 호이스팅은 var, function declaration 자동으로 선언이 제일 위로 올라가는 것
// 호이스팅이 된 이후로, 자동으로 실행이 된다.
// callback함수 전달해준 함수를 나중에 불러줘라는 개념

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 자바스크립트 엔진은 제일 위부터 아래로 실행
// setTimeout은 브라우저 API니까 브라우저에게 callback 실행해달라고 요청
// 지금 당장 실행하지 않고, 1초가 지나고 함수 불러줘

// 콜백은 비동기일때만 쓰는것이 아니다.

// 1. 동기적 콜백
function printImmediately(print) {
    print();
}

printImmediately(() => console.log("hello"));

// 2. 비동기적 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// 자바스크립트의 선언?이 호이스팅 된다.

// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "taenam" && password === "123") ||
                (id === "nami" && password === "1234")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "taenam") {
                onSuccess({ name: "taenam", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
);
