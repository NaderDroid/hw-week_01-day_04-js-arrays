
const summation = function (n) {
    let sum = 0;
    for (let i =1; i<=n; i++) {
        sum = sum+i;

    }
    return sum;
};

console.log(summation(10));


////////////////////////////////////////////////////////////////////////////////////////
// Problem 2 is next

const summationEven = function (n) {

    let sum = 0;
    for (let i = 0; i<= n; i+=2) {
        sum = sum+i;
    }
    return sum;
};

console.log(summationEven(10));


////////////////////////////////////////////////////////////////////////////////////////

// Problem 3 is next

const avg = function (arr) {
    let sum = 0;

    for (let i=0; i < arr.length; i++) {
        sum = sum+arr[i];
    }
    return sum / arr.length;
};

console.log(avg([8,2,2,4]));



////////////////////////////////////////////////////////////////////////////////////////

// Problem 5 is next

const add = function (arr) {

    return arr.join('-');
};
console.log(add([1,2,3,4]));


////////////////////////////////////////////////////////////////////////////////////////

// Problem 6 is next

const upAndDown = function (num) {

    for (let i =1; i<=num; i++) {

        console.log(i);

    }
    for (let j =num-1; j>=1; j--) {

        console.log(j);
    }
};

console.log(upAndDown(3));



////////////////////////////////////////////////////////////////////////////////////////

// Problem 8 is next, also applicable to problem 7


let arr = ['Elon' , 'Bezos' , 'Jassy' , 'Gross' ];


const letterFinder = function (letter) {
    let res = [];
    for (let i =0; i<arr.length; i++) {
        let comparable = arr[i].toLowerCase();
        if (comparable.includes(letter)) {
            res.push(comparable);
        }
    }
    return res;
};

console.log(letterFinder('e'));



////////////////////////////////////////////////////////////////////////////////////////

// Problem 9 is next


const longestWord = function (sentence) {

    let arr = [];
    arr = sentence.split(" ");
    let longest = " ";
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length  > longest.length) {
            longest = arr[i];
        }

    }
    return longest;
};
console.log(longestWord('out of this gibberish asynchronous should print out'));



////////////////////////////////////////////////////////////////////////////////////////

// Problem 10 is next

const largestNumber = function (num) {

    let arr  = num;
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest && arr[i]%2 === 0 ) {
            largest = arr[i];
        }

    }
    return largest;
};
console.log(largestNumber([1,2,3,10,4,7,0]));
