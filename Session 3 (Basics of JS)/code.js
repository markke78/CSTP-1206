// 1. Write a function to find the sum of the elements inside the array
const sumOfArray = nums => console.log(nums.reduce((a, b)=> a + b));

const arr1 = [1, 2, 3, 4, 5];
sumOfArray(arr1);
// 2. Using a function for loop print all even numbers up to n (parameter in function);

const evenNum = n =>{
    for (let i = 0; i < n + 1; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}

evenNum(20);

// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"
const checkY = letters => {

    for (let i of letters.toLowerCase()) {
        if ( i === "y"){
            console.log("Yes");
            break;
        }
    }
}

checkY("CreaYzY");

// 4. Write a function to find the factorial of a given number n

const factorial = n => {
    if(n < 0){
      return "Factorial cannot be negtive number";
    }else if (n <= 0){
        return 1;
    }else{
      return (n * factorial(n-1));
    }
  }
     
console.log(factorial(5));


// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F



const gradeCheck = (subA, subB, subC, subD) => {
    const gradeArr = []; 
    gradeArr.push(subA, subB, subC, subD);
    avgGrade = gradeArr.reduce((a, b) => (a + b)) / gradeArr.length;
    if (avgGrade < 50) {
        console.log("F");
    }else if (avgGrade < 70){
        console.log("C");
    }else if (avgGrade < 90){
        console.log("B");
    }else{
        console.log("A");
    }

}

const java = 90;
const math = 88;
const python = 92;
const database = 95;

gradeCheck(java, math, python, database);

// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******

const starPinter1 = n => {
    let starts = "";
    for (let i = 0; i < n; i++){
        console.log(starts += "*");
    }
}

starPinter1(7);

// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *

const starPinter2 = n => {
    let starts = "";
    for (let i = 0; i < n; i++){
        console.log(starts += "*");
    }
    for (let i = 0; i < n; i++){
        console.log(starts.slice(i, -1));
    }
}

starPinter2(7);

// 8. Write a function to reverse a string
const reverseStr = aStr => console.log(aStr.split("").reverse().join(""));


reverseStr("werfg");