function predict(){

let alcohol=parseFloat(document.getElementById("alcohol").value);
let ph=parseFloat(document.getElementById("ph").value);
let sulphates=parseFloat(document.getElementById("sulphates").value);

if(alcohol>=10 && ph>=3 && sulphates>=0.5){
document.getElementById("result").innerHTML="🍷 Good Quality Wine";
}
else{
document.getElementById("result").innerHTML="🍷 Average Quality Wine";
}

}
