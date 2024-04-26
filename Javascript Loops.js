//-----CONDITIONAL STATEMENTS- Loops------

//1. Write a JavaScript program that prints numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Create a function that calculates the factorial of a given number using a for loop.

let factorial = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//3. Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.

let sum = (n) => {
    let i = 1;
    let s = 0;
    while(i <= n) {
        s = s + i;
        i++; // make sure to increment the counter
    }
    return s;
}

//4. Write a program that prints the multiplication table of a given number using a for loop.

let mult = (n) => {
    let table = [];
    for(let i = 1; i <= 10; i++) {
        table.push(n * i);
    }
    return table;
}

//5. Develop a function that checks if a given number is prime using a for loop.

let prime = (n) => {
    //simple algorithm that checks divisibility by every number till the square of the number is less than n
    
    for(let i = 2; i * i < n; i++) {
        if( n * i == 0) {
            return 'Not prime';
        }
    }
    // if the above loop did not return, then the number was not divisible by any number, hence must be prime.
    return 'Prime';
}

//6. Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.

let fib = (n) => {
    // Fibonacci sequence is 1, 1, 2, 3, 4, ...
    // that is, next number is sum of previous two numbers
    let seq = [];// initialize
    if(n == 0) seq = [];
    if(n == 1) seq = [1];
    if(n == 2) seq = [1, 1];
    let i = 2;
    while(i < n) {
        seq.push(seq[i - 2] + seq[i - 1]);
        i++;
    }
    return seq;
}

//7. Implement a function to find the largest element in an array using a for loop.

let max = (a) => {
    //if array is empty
    if(a.length == 0) {
        return 'No Largest Number'
    }
    let largest = a[0];//set largest to first number
    for(let i = 1; i < a.length; i++) {
        if(a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
}

//8. Write a program that counts the number of vowels in a given string using a for loop.

let vowels = (str) => {
    let n = 0;
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u': {
                n++;
                break;
            }
        }
    }
    return n;
}

//9. Create a JavaScript function that calculates the sum of digits of a given number using a while loop.

let nDigits = (num) => {
    let nStr = num + '';// convert number to string
    let sum = 0;
    for(let i = 0; i < nStr.length; i++) {
        sum = sum + Number(nStr[i]);
    }
    return sum;
}

//10. Implement a program that checks if a given string is a palindrome using a for loop.

let palindrome = (str) => {
    //reverse the string and check the given str and the reversed string are equal
    let revStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    if(str == revStr) {
        return true
    } else return false;
}
