// ==========================
// PLAY BUTTON
// ==========================

const playBtn = document.querySelector(".playBtn");

if(playBtn){

playBtn.onclick = function(){

alert("🎮 Welcome to JISANBD9999");

};

}

// ==========================
// DEPOSIT BUTTON
// ==========================

const depositBtn = document.querySelector(".depositBtn");

if(depositBtn){

depositBtn.onclick = function(){

document.getElementById("deposit").scrollIntoView({

behavior:"smooth"

});

};

}

// ==========================
// SUBMIT DEPOSIT
// ==========================

const submitBtn = document.querySelector(".depositBox button");

if(submitBtn){

submitBtn.onclick = function(){

const amount = document.querySelector('input[type="number"]').value;

const trx = document.querySelector('input[type="text"]').value;

if(amount==="" || trx===""){

alert("❌ Please fill in all information.");

return;

}

alert(
"✅ Deposit Request Submitted!\n\nAmount: "+amount+
"\nTransaction ID: "+trx
);

};

}

// ==========================
// GAME BUTTONS
// ==========================

const gameButtons = document.querySelectorAll(".card button");

gameButtons.forEach(function(btn){

btn.onclick = function(){

alert("🎮 Game will be available soon!");

};

});

// ==========================
// HEADER SHADOW
// ==========================

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow="0 0 25px rgba(0,255,102,.35)";

}else{

header.style.boxShadow="none";

}

});
