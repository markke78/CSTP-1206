//REST Operator

function multiply(num1, num2) {
    return num1 * num2;
}

function multiplywithRest(...nums) {
    let total = -1;
    for (let i = 0; i < nums.length; i++) {
        total = total * nums[i];

    }
    return total;
}


function sumWithRest(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];

    }
    return total;
}

let finalMultipledValue = multiplywithRest(1, 2, 3, 4);

let finalSumValue = sumWithRest(1, 2, 3, 4);
console.log(finalMultipledValue);
console.log(finalSumValue);
// let total = sumWithRest(...sum);
function averageSum(type,...typeList) {
    let total = 0;
    for (let i = 0; i < typeList.length; i++) {
        total = total + typeList[i];

    }
    let average = total/typeList.length;
    console.log(`The average of ${type} is ${average}`);
}

averageSum("numbers",1,2,3,4,5,6,7,8,9,10);

//Spread Operator*************

let array1 = [1, 2, 3, 4];

let array2 = [5, 6, 7];

let combineArrayWithConcat = array1.concat(array2);

let combineArrayWithSpread = [...array1, ...array2];

console.log(combineArrayWithConcat);
console.log(combineArrayWithSpread);


let student = {
    name: "John",
    age: 25,
    email: "john@gmail.com"
}

let studentWithVCCCollege = {
  ...student,
  college: "VCC",
  name: "Mike"
}

console.log(studentWithVCCCollege);

//Destructuring*************

let movieObject = {
  title: "The Dark Knight",
  actor: "Christian Bale",
  actress: "Heath Ledger",
}

//Extract values from object

let titleMovie = movieObject.title;

let titleMoive2 = movieObject["title"];

let {title, actor = "Dwayne Johnson"} = movieObject;

let {age = 40} = movieObject;
console.log(title, actor, age);
