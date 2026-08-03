// ==========================
// JISANBD9999 Script
// ==========================

// PLAY BUTTON

const playBtn = document.querySelector(".playBtn");

playBtn.addEventListener("click", () => {

    alert("🎮 Welcome To JISANBD9999\n\nGood Luck & Have Fun!");

});


// DEPOSIT

const depositBtn = document.querySelector(".box button");

depositBtn.addEventListener("click", () => {

    const amount = document.querySelector('input[type="number"]').value.trim();

    const trx = document.querySelector('input[type="text"]').value.trim();

    if(amount === "" || trx === ""){

        alert("⚠️ সব তথ্য পূরণ করুন!");

        return;

    }

    if(Number(amount) < 100){

        alert("❌ Minimum Deposit 100 TK");

        return;

    }

    alert(

`✅ Deposit Request Submitted

Amount : ${amount} TK

TRX ID : ${trx}

Please Wait For Confirmation.`

);

    document.querySelector('input[type="number"]').value="";

    document.querySelector('input[type="text"]').value="";

});


// CARD EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        alert("🎮 Game Loading...");

    });

});


// SCROLL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.box,.aboutBox div").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});


// DIGITAL CLOCK

function updateClock(){

const now = new Date();

const time = now.toLocaleTimeString();

document.title = "🟢 " + time + " | JISANBD9999";

}

setInterval(updateClock,1000);


// WELCOME MESSAGE

setTimeout(()=>{

console.log("Welcome To JISANBD9999");

},1000);
