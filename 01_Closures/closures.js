// 1. Create Hello World

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

// 2. Counter

var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

// 3. To be or not to be

var expect = function(val) {
    return {
    toBe: function(otherVal) {
      if (val !== otherVal) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function(otherVal) {
      if (val === otherVal) {
        throw new Error("Equal");
      }
      return true;
    }
  };
};

// 4. Counter II

var createCounter = function(init) {
    let num = init;
    return{
    increment: function() {
        return ++num;
    },
    decrement: function() {
        return --num;
    },
    reset: function() {
        num = init;
        return num;
    },
    }
};