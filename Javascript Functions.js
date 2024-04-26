//-------FUNCTIONS---------------------

//1. Write a JavaScript function to calculate the area of a rectangle given its length and width.

let rectangle = (length, width) => {
    return length * width;
}

//2. Create a function that takes an array of numbers as input and returns the sum of all the numbers.

let sumArray = (a) => {
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

//3. Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards).

//already solved convert the number to string

//4. Write a JavaScript function to find the maximum and minimum elements in an array of numbers.

let minMax = (a) => {
    if(a.length == 0) return 'Empty array';
    let min = a[0];
    let max = a[0];
    for(let i = 0; i < a.length; i++) {
        if(a[i] > max) {
            max = a[i]
        }
        if(a[i] < min) {
            min = a[i]
        }
    }
    // return an object that contains the minimum and maximum
    return {
        minimum: min,
        maximum: max
    }
}

//5. Develop a function that takes a string as input and returns the reverse of the string.

let reverse = (str) => {
    let revStr = '';
    for(let i = str.length - 1; i <= 0; i++) {
        revStr += str[i];
    }
    return revStr;
}

//6. Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.

//already solved

//7. Implement a function that takes two numbers as input and returns the greatest common divisor (GCD).

let gcd = (a, b) => {
    //suppose a < b, then gcd(a, b) = gcd(a, r) where r is the remainder when b is divided by a, i.e. b = qa + r
    //if either of a or b is equal to 0, then gcd is the non-zero number
    if(a == 0) return b;
    if(b == 0) return a;
    let r;
    if(a < b) {
        r = b % a;
        return gcd(a, r);//this is a function that calls itself. Such functions are called recursive functions. You can ignore this problem for this exam.
    } else {
        r = a % b;
        return gcd(b, r); 
    }
}

//8. Write a JavaScript function to output the reverse of a string.
//same as question number 5

//9. Create a function that takes an array of integers and returns a new array with only the unique values.

let unique = (a) => {
    //we create a new empty array and read elements from a and put it in new array if it is not already in the new array
    let newA = [];
    for(let i = 0; i < a.length; i++) {
        //check if a[i] is already in newA or not
        let isPresent = false;
        for(let j = 0; j < newA.length; j++) {
            if(a[i] == newA[j]) {
                isPresent = true;
                break;//exit the loop
            }
        }
        if(!isPresent) {
            newA.push(a[i]);
        }
    }
    return newA;
}

//10. Develop a function that takes a sentence as input and returns the number of words in the sentence.

let words = (sentence) => {
    //assume for now that the sentence only contains single space to separate words.
    let wds = [];
    //loop to read characters from the sentence
    let newWord = '';
    let i = 0;
    while(i < sentence.length) {
        if(sentence[i] == ' ' || sentence[i] == '.') {
            //put the found word in wds array
            wds.push(newWord);
            //reset the newWord
            newWord = '';
        } else {
            newWord += sentence[i];//read characters to form the word
        }
        i++;//move to the next character
    }
    return wds;
}
console.log(words("This is a new sentence."))