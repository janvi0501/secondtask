const form = document.getElementById('form');
var row = null;


function submitForm(){
    validation();
    var dataEntered = retriveData();
    console.log(dataEntered);
    var readData = readDataFromLocalStroage(dataEntered);
    console.log(readData);
    if(row == null){
      insert(readData);
      msg.innerHTML = "Data Inserted!";
    }
    else{
      update();
      msg.innerHTML = "Data Updated!";
    }
    resetForm();

}

function validation(){

    var name = document.getElementById("name").value;
    var validName=/^[A-Za-z]+$/;

    console.log(name);
    if (name==null || name==""){  
        alert("Please enter your name");  
        // name.focus();
        return false; 
    }
    else if(name.match(validName)){
        return true;
    }


    var email = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    console.log(email);
    if(email.match(validRegex)){
        // return true;
    }
    else if(email == ""){
        alert("Please enter your email"); 
        return false;
    }
    else{
        alert("Please enter your vaild email");
    }


    var phoneNumber = document.getElementById("phoneNumber").value;

    console.log(phoneNumber);
    if(phoneNumber == null || phoneNumber == "" || phoneNumber.length!=10){
        alert("Please enter your vaild number");
       // phoneNumber.focus();
        return false;
    }
    
    var date = document.getElementById("birthday").value;
    console.log(date);

    var time = document.getElementById("time").value;
    console.log(time);

    // var color = document.getElementById("color").value;
    // console.log(color);

    // var paymentMethod = document.getElementById("paymentMethod").value;
    // console.log(paymentMethod);

    // var age = document.getElementById("age").value;
    // console.log(age);

    // var checkbox = document.getElementById("checkbox").value;
    // console.log(checkbox);

    // var photo = document.getElementById("photo").value;
    // console.log(photo);

}   

function retriveData(){
    console.log("color");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var date = document.getElementById("birthday").value;
    var time = document.getElementById("time").value;
    var color = document.getElementById("color").value;
    var paymentMethod = document.getElementsByClassName("paymentmethod").value;
    var age = document.getElementById("age").value;
    var checkbox = document.getElementById("checkbox").value;
    var photo = document.getElementById("file").value;


    var arr = [name, email, phoneNumber, date, time, color, paymentMethod, age, checkbox, photo];
    return arr;

}


function readDataFromLocalStroage(dataEntered){
    localStorage.setItem("Name", dataEntered[0]);
    localStorage.setItem("Email", dataEntered[1]);
    localStorage.setItem("Number", dataEntered[2]);
    localStorage.setItem("Birthday", dataEntered[3]);
    localStorage.setItem("Time", dataEntered[4]);
    localStorage.setItem("Color", dataEntered[5]);
    localStorage.setItem("payment", dataEntered[6]);
    localStorage.setItem("Age", dataEntered[7]);
    localStorage.setItem("Checkbox", dataEntered[8]);
    localStorage.setItem("File", dataEntered[9]);

    
    /** Get data from local-storage */
    var name1 = localStorage.getItem("Name");
    var email2 = localStorage.getItem("Email");
    var number3 = localStorage.getItem("Number");
    var birthday4 = localStorage.getItem("Birthday");
    var time5 = localStorage.getItem("Time");
    var color6 = localStorage.getItem("Color");
    var paymentMethod7 = localStorage.getItem("Payment");
    var age8 = localStorage.getItem("Age");
    var checkbox9 = localStorage.getItem("Checkbox");
    var file10 = localStorage.getItem("File");

    var arr = [name1, email2, number3, birthday4, time5, color6, paymentMethod7, age8, checkbox9, file10];
    return arr;
}

// insert 
function insert(readData){
    console.log("datainsert")
    var table = document.getElementById("data_insert").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);
    cell7 = row.insertCell(6);
    cell8 = row.insertCell(7);
    cell9 = row.insertCell(8);
    cell10 = row.insertCell(9);
    cell11 = row.insertCell(10);


    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = readData[3];
    cell5.innerHTML = readData[4];
    cell6.innerHTML = readData[5];
    cell7.innerHTML = readData[6];
    cell8.innerHTML = readData[7];
    cell9.innerHTML = readData[8];
    cell10.innerHTML = readData[9];

    cell11.innerHTML = `<button onclick = "edit(this)" class="btn btn-danger">Edit</button>
                        <button onclick = "onDelete(this)" class="btn btn-primary">Delete</button>`;
}


// edit
function edit(td){
    row = td.parentElement.parentElement;

    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("phoneNumber").value = row.cells[2].innerHTML;
    document.getElementById("birthday").value = row.cells[3].innerHTML;
    document.getElementById("time").value = row.cells[4].innerHTML;
    document.getElementById("color").value = row.cells[5].innerHTML;
    document.getElementsByClassName("paymentmethod").value = row.cells[6].innerHTML;
    document.getElementById("age").value = row.cells[7].innerHTML;
    document.getElementById("checkbox").value = row.cells[8].innerHTML;
    document.getElementById("file").value = row.cells[9].innerHTML;
}

// update
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("email").value;
    row.cells[2].innerHTML = document.getElementById("phoneNumber").value; 
    row.cells[3].innerHTML = document.getElementById("birthday").value ;
    row.cells[4].innerHTML = document.getElementById("time").value;
    row.cells[5].innerHTML = document.getElementById("color").value;
    row.cells[6].innerHTML = document.getElementsByClassName("paymentmethod").value;
    row.cells[7].innerHTML = document.getElementById("age").value;
    row.cells[8].innerHTML = document.getElementById("checkbox").value ;
    row.cells[9].innerHTML = document.getElementById("file").value ;

    row = null;
}

// delete
function onDelete(td) {
    // console.log("deletedata")
    var confrom = confirm('Are you sure?')
    if(confrom == true){
      row = td.parentElement.parentElement;
      document.getElementById("data_insert").deleteRow(row.rowIndex);
    }
    msg.innerHTML = "Data Deleted!";    
}

// reset
function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("time").value = "";
    document.getElementById("color").value = "";
    document.getElementsByClassName("paymentmethod").value = "";
    document.getElementById("age").value = "";
    document.getElementById("checkbox").value = "";
    document.getElementById("file").value = "";
}
