//  Create a terminal clock (HH:MM:SS)

setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString()
    console.log(time);
}, 1000)

// Keeps printing the time every second.

// clearInterval(intervalId); // stops further execution, instead of break we use this.
