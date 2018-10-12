function changeBackground(selected){
var bac = document.getElementById("mainbody");
bac.style.backgroundColor = selected.value;
}
function CallFunction() {

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    if(firstName == "" || secondName == ""){
      alert("Please enter correct name");
    }     
    alert("The details entered were registered");
}
