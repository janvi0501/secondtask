const form = document.getElementById('form').value;

var student = document.getElementById("student");
var students = document.getElementById("students");

student.onclick = function() {
    // console.log(student);
     
    students.style.display = students.style.display === "block" ? "none" : "block";
    //return false;
}

function submitForm(){
    validation();
    var dataEntered = retriveData();
    console.log(dataEntered);
    var readdata = readDataFromLocalStroage(dataEntered);
}

function validation(){
   
    var text = document.getElementById("text").value;
    
    console.log(text)
    if(text==null || text==""){  
        alert("Text can't be blank"); 
    }else if(text.length < 3){
        alert("Username require min 3 character");
    return false;     
    }

    var email = document.getElementById('email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    console.log(email);
    if(email.match(mailformat)){
        //return false;
    }else if(email == ""){
        alert("Please enter your email"); 
        return false;
    }
    else{
        alert("Please enter your vaild email");
    }

    var phonenumber = document.getElementById('phonenumber').value;

    console.log(phonenumber);
    if(phonenumber == null || phonenumber == "" || phonenumber.length!=10){
        alert("Please enter valid number");
        return false;
    }

    // var date = document.getElementById('date').value;
    // console.log(date);

    // var time = document.getElementById("time").value;
    // console.log(time);

    // var fcolor = document.getElementById("fcolor").value;
    // console.log(fcolor);

    // var paymethod = document.getElementById("pay_method").value;
    // console.log(paymethod);

    // var age = document.getElementById("age").value;
    // console.log(age);

// var text = localStorage.setItem("text", text);
// var email = localStorage.setItem("email", email);



}



function retriveData(){
    var text = document.getElementById("text").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phonenumber").value;
    var birthdate = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var fcolor = document.getElementById("fcolor").value;
    var paymethod = document.getElementById("pay_method").value;
    var age = document.getElementById("age").value;
    var checkoption = document.getElementById("check_opt").value;
    var photo = document.getElementById("up_pic").value;

    var arr = [text , email, number, birthdate, time, fcolor, paymethod, age, checkoption, photo];
    return arr;
    
}

function readDataFromLocalStroage(dataEntered){
    localStorage.setItem("Text", dataEntered[0]);
    localStorage.setItem("Email", dataEntered[1]);
    localStorage.setItem("Number", dataEntered[2]);
    localStorage.setItem("Birthday", dataEntered[3]);
    localStorage.setItem("Time", dataEntered[4]);
    localStorage.setItem("Color", dataEntered[5]);
    localStorage.setItem("Payment", dataEntered[6]);
    localStorage.setItem("Age", dataEntered[7]);
    localStorage.setItem("Check Option", dataEntered[8]);
    localStorage.setItem("Photo", dataEntered[9]);

    /** Get data from local-storage */
    var name1 = localStorage.getItem("Name");
    var email2 = localStorage.getItem("Email");
    var number3 = localStorage.getItem("Number");
    var birthday4 = localStorage.getItem("Birthday");
    var time5 = localStorage.getItem("Time");
    var color5 = localStorage.getItem("Color");
    var payment1 = localStorage.getItem("Payment");
    var age1 = localStorage.getItem("Age");
    var checkoption1 = localStorage.getItem("Check Option");
    var photo1 = localStorage.getItem("Photo");


    var arr = [name1, email2, number3, birthday4, time5, color5, payment1, age1, checkoption1, photo1];
    return arr;
}