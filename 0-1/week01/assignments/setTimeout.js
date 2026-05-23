let i = new Date().getTime();

setTimeout(() => {
    let j = new Date().getTime();
    console.log(`The time difference is ${j - i} milliseconds`)
}, 2000);