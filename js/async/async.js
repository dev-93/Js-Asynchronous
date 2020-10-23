// async && await

// 1. async

async function fetchUser() {
    // return new Promise((resolve, reject) => {
        // resolve ('taenam');
    // });
    return 'taenam';
}

const user = fetchUser();
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎'
}

async function getBanana() {
    await delay(1000);
    return '🍌'
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // Promise를 만들면 바로 코드가 실행이 된다
    // 병렬적으로 코드 실행 가능
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);