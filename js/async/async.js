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

