const button = document.getElementById("click")
const firstName1 = document.querySelector("#fname")
const email = document.querySelector("#email")
const studentId = document.querySelector("#sid")
let counter = 0;
const newTable = document.createElement("table");
newTable.setAttribute("id", "table-1")

const toGetForm = () =>{
    localStorage.setItem("data0", firstName1.value);
    localStorage.setItem("data1", email.value);
    localStorage.setItem("data2", studentId.value);
    localStorage.setItem("th0", "First Name");
    localStorage.setItem("th1", "Email");
    localStorage.setItem("th2", "Student id");
    let tableDataLength = 3;
 


    if (counter == 0){

        const thead = document.createElement("thead");
    
        for (let i = 0; i < tableDataLength; i++) {        
            const th = document.createElement("th");
            th.textContent = localStorage.getItem("th"+i);
            thead.appendChild(th);
        }
        newTable.appendChild(thead)

    }


    const tr = document.createElement("tr");

    let tdClass= counter % 2 === 0 ? "even" : "odd"
    counter++;

    for (let i = 0; i < tableDataLength; i++) {        
        const td = document.createElement("td");
        td.textContent = localStorage.getItem("data"+i);
        td.classList.add(tdClass);
        tr.appendChild(td);
    }
    newTable.appendChild(tr);
    

const newTableContainer = document.querySelector("#newTableContainer");

newTableContainer.appendChild(newTable);
}

