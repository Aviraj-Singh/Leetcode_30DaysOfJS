// 1. Add Two Promises

var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
    .then(([val1, val2]) => val1 + val2);
};

// 2. Sleep

async function sleep(millis) {
    await new Promise(resolve=> setTimeout(resolve, millis));
}

// 3. Timeout Cancellation
var cancellable = function(fn, args, t) {
    let timeoutId;
    let cancelled = false;

    const cancelFn = () => {
        if (!cancelled) {
            clearTimeout(timeoutId);
            cancelled = true;
        }
    };

    timeoutId = setTimeout(() => {
        if (!cancelled) {
            const result = {
                time: t,
                returned: fn(...args)
            };
            console.log(JSON.stringify([result]));
            cancelFn();
        }
    }, t);

    return cancelFn;
};

// 4. Timeout Cancellation

var cancellable = function(fn, args, t) {
    let intervalId;
    let currentTime = 0;
    let results = [];

    const executeFn = () => {
        const result = {
            time: currentTime,
            returned: fn(...args)
        };
        results.push(result);
        currentTime += t;
    };

    executeFn();

    intervalId = setInterval(executeFn, t);

    const cancelFn = () => {
        clearInterval(intervalId);
        console.log(JSON.stringify(results));
    };

    return cancelFn;

};

// 5. Timeout Cancellation