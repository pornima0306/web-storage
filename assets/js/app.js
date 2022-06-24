let cl=console.log;

const pdata=document.getElementById("sessionstorage");
const ldata =document.getElementById("localStorage");

let person ={
    name: "Pornima",
    email: "pornima@gmail.com",
    canDrive: "yes"
}
sessionStorage.setItem('savePerson', JSON.stringify(person));
let getPerson = JSON.parse(sessionStorage.getItem('savePerson'));
cl(getPerson)

pdata.innerHTML = getPerson.name;



let empInfo ={
    fname:"Vinayak",
    lname:"Waghmare",
    empId:"123"
}

localStorage.setItem('saveEmp',JSON.stringify(empInfo));
let emp =JSON.parse(localStorage.getItem('saveEmp'));
cl(emp)

ldata.innerHTML = emp.empId;