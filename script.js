// ==============================
// PLAY BUTTON
// ==============================

const playBtn = document.querySelector(".playBtn");

if (playBtn) {
    playBtn.addEventListener("click", function () {
        alert("🎮 Welcome to JISANBD9999!");
    });
}


// ==============================
// DEPOSIT BUTTON SCROLL
// ==============================

const depositBtn = document.querySelector(".depositBtn");

if (depositBtn) {
    depositBtn.addEventListener("click", function () {
        document.querySelector("#deposit").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ==============================
// DEPOSIT FORM
// ==============================

const depositSubmit = document.querySelector(".submitDeposit");

if (depositSubmit) {

    depositSubmit.addEventListener("click", function () {

        const amount = document.querySelector("#deposit input[type='number']").value;
        const trx = document.querySelector("#deposit input[type='text']").value;

        if (amount === "" || trx === "") {

            alert("❌ Please fill all Deposit information.");

            return;

        }

        alert("✅ Deposit Request Submitted Successfully!");

    });

}


// ==============================
// WITHDRAW FORM
// ==============================

const withdrawSubmit = document.querySelector(".submitWithdraw");

if (withdrawSubmit) {

    withdrawSubmit.addEventListener("click", function () {

        const amount = document.querySelector("#withdraw input[type='number']").value;
        const number = document.querySelector("#withdraw input[type='text']").value;

        if (amount === "" || number === "") {

            alert("❌ Please fill all Withdraw information.");

            return;

        }

        alert("✅ Withdraw Request Submitted Successfully!");

    });

}


// ==============================
// GAME BUTTON
// ==============================

const gameButtons = document.querySelectorAll(".card button");

gameButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("🎮 Game Coming Soon!");

    });

});


// ==============================
// HEADER SHADOW
// ==============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 0 25px #00ff66";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==============================
// PAGE LOADED
// ==============================

window.onload = function(){

    console.log("JISANBD9999 Loaded Successfully 🚀");

};
