let fnameElement = document.querySelector('#fname');
let lnameElement = document.querySelector('#lname');
let addressElement = document.querySelector('#address');
let phoneElement = document.querySelector('#phone');
let genderElement = document.querySelector('#gender');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submitButton');
let modal = document.getElementById("mod");
let pan = document.getElementsByClassName("close");

submitButton.onclick = function(){
    modal.style.display = "block";

    let fnameValue = fnameElement.value;
    let lnameValue = lnameElement.value;
    let addressValue = addressElement.value;
    let phoneValue = phoneElement.value;
    let genderValue = genderElement.value;
    let messageValue = messageElement.value;

    document.getElementById("mys").innerHTML = 'Firstname: ' + fnameValue;
    document.getElementById("mys1").innerHTML = 'Lastname: ' + lnameValue;
    document.getElementById("mys2").innerHTML = 'Address: ' + addressValue;
    document.getElementById("mys3").innerHTML = 'Phone number: ' + phoneValue;
    document.getElementById("mys4").innerHTML = 'Gender: ' + genderValue;
    document.getElementById("mys5").innerHTML = 'Message: ' + messageValue;
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
document.getElementById("close").addEventListener("click", function(){
    modal.style.display = "none";
})
// pan.onclick = function(event){
//     if(event.target == pan){
//         modal.style.display = "none";
//     }
// }