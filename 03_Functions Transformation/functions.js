// 1. Function Composition

var compose = function(functions) {

    return function(x) {
        // for (let func of functions.reverse()){
        //     x=func(x);
        // }
        // return x;
        return functions.reduceRight(function func(acc, curr){
            return curr(acc);
        }, x)
    }
};

// 2. Return Length of Arguments Passed

var argumentsLength = function(...args) {
    return args.length;
};

// 3. Allow One Function Call

var once = function(fn) {
    let called = false; 
    return function(...args){
        if (!called){
            called = true;
            return fn.apply(this, args) // return fn(...args)
        }
    }
};

// 4. Memoize

function memoize(fn) {
    const cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in cache){
            return cache[key]
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}
