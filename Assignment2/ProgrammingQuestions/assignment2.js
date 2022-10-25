let student = [
{
name: "Daniel",
email: "daniel@gmail.com",
marks: [80, 60, 50, 70, 95]
},
{
name: "Mark",
email: "mark@gmail.com",
marks: [99, 40, 84, 72, 60]
},
{
name: "Stacy",
email: "stacy@gmail.com",
marks: [8, 30, 11, 0, 20]
},
{
name: "Geri",
email: "geri@gmail.com",
marks: [100, 99, 95, 85, 99]
}
];

function studentWithHighestMarks(array) {
    const nameSum ={};
    array.map((student) => {
        return nameSum[student.name] = student.marks.reduce((a, b) => a + b);
      });

    const  maxValue= Math.max(...Object.values(nameSum));
    const  maxName= Object.keys(nameSum).filter((x)=>nameSum[x] === maxValue)[0];
    return `${maxName} has highest mark that is ${maxValue}.`;
}

console.log(studentWithHighestMarks(student));



function missingNumber(array, n) {
    const sumArr = array.reduce((a, b) => a + b, 0);
    let sumNum = (n+1)*n/2;

    if (sumArr === sumNum){
        return 0;
    }else{
        for(let i of array){
        sumNum -= i;
        }
        return sumNum;
    }
    


    



    const missing=[];
    for (let i = 0; i < n; i++) {
        if (array.indexOf(i) === -1) {
            missing.push(i);
        }
    }
    return missing;
}

const arr = [3,5,2,1,0,4];
let n = Math.max(...arr);
console.log(missingNumber(arr, n));




    // const sumNum = (n+1)*n/2;

    // console.log(sumNum);
