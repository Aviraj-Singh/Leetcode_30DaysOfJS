// 1. Apply Transform Over Each Element in Array

var map = function(arr, fn) {
    let newArr = [];
    arr.forEach(function(...item) {
        newArr.push(fn(...item));
    })
    return newArr;
};

// 2. Filter Elements from Array

var filter = function(arr, fn) {
    let newArr = []
    arr.forEach((item, index)=>{
        if (fn(item, index)){
            newArr.push(item)
        }
    });
    return newArr;
};

// 3. Array Reduce Transformation

var reduce = function(nums, fn, init) {
    if (nums.length===0){
        return init
    } else{
        nums.forEach((item)=>{
            init=fn(init,item)
        })
        return init
    }
};