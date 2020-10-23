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
    await delay(1000);
    return '🍎'
}

async function getBanana() {
    await delay(1000);
    return '🍌'
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);