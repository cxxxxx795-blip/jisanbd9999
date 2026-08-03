document.querySelector(".playBtn").onclick=function(){

alert("Welcome To JISANBD9999");

}

document.querySelector(".box button").onclick=function(){

let amount=document.querySelector('input[type="number"]').value;

let trx=document.querySelector('input[type="text"]').value;

if(amount=="" || trx==""){

alert("সব তথ্য পূরণ করুন");

}else{

alert("Deposit Request Submitted");

}

}
