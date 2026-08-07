// ==========================
// PLAY BUTTON
// ==========================

const playBtn = document.querySelector(".playBtn");

if (playBtn) {

    playBtn.addEventListener("click", function () {

        alert("🎮 Welcome to JISANBD9999!");

    });

}


// ==========================
// DEPOSIT BUTTON
// ==========================

const depositBtn = document.querySelector(".depositBtn");

if (depositBtn) {

    depositBtn.addEventListener("click", function () {

        document.getElementById("deposit").scrollIntoView({

            behavior: "smooth"

        });

    });

}
// ==========================
// DEPOSIT FORM
// ==========================

const submitBtn = document.querySelector(".submitBtn");

if (submitBtn) {

    submitBtn.addEventListener("click", function () {

        const amount = document.querySelector('input[type="number"]').value.trim();

        const trx = document.querySelector('input[type="text"]').value.trim();

        if (amount === "" || trx === "") {

            alert("❌ Please enter Amount and Transaction ID.");

            return;

        }

        alert(
            "✅ Deposit Request Submitted!\n\n" +
            "Amount: " + amount + " TK\n" +
            "Transaction ID: " + trx
        );

    });

}


// ==========================
// GAME BUTTONS
// ==========================

const gameButtons = document.querySelectorAll(".card button");

gameButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("🎮 Game Coming Soon!");

    });

});


// ==========================
// HEADER EFFECT
// ==========================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 0 20px rgba(0,255,102,.5)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==========================
// PAGE LOADED
// ==========================

window.onload = function(){

    console.log("JISANBD9999 Loaded Successfully");

};
