// ==========================================
// Project Aurora Love Ultimate v2.0
// ==========================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const cat = document.getElementById("cat");

let noCount = 0;
let yesSize = 20;

const messages = [

"Really? 🥺",

"Are you sure? 😿",

"Think again 💔",

"Please... ❤️",

"I'll cry 😭",

"Don't leave me 🥹",

"Last Chance 💖",

"You can't escape 😆",

"I'm too cute 😺",

"Okay...You Win ❤️"

];

const gifs = [

"https://media.tenor.com/IieVUsqoYCwAAAAi/peachcat-cat.gif",

"https://media.tenor.com/LrSL7XDKVbgAAAAi/peachcat-cat-love.gif",

"https://media.tenor.com/Fm7x4K0D4wUAAAAi/cat.gif",

"https://media.tenor.com/JjL4J8M1B9UAAAAi/peach-goma.gif"

];

// ===============================
// YES
// ===============================

yesBtn.addEventListener("click",()=>{

title.innerHTML="น่ารักจังงง!! ❤️";

subtitle.innerHTML="You made my day!";

cat.src=gifs[1];

document.body.style.background="#ff4f9d";

});

// ===============================
// NO
// ===============================

noBtn.addEventListener("click",()=>{

noCount++;

if(noCount<=messages.length){

noBtn.innerHTML=messages[noCount-1];

}

yesSize+=10;

yesBtn.style.fontSize=yesSize+"px";

yesBtn.style.padding=
(15+noCount*3)+"px "+
(35+noCount*8)+"px";

noBtn.style.transform=
`scale(${1-noCount*0.05})`;

document.body.style.transition="1s";

document.body.style.filter=
`brightness(${1-noCount*0.03})`;

if(noCount>=3){

cat.src=gifs[2];

}

if(noCount>=6){

cat.src=gifs[3];

}

if(noCount>=7){

const x=Math.random()*(window.innerWidth-200);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

if(noCount>=10){

yesBtn.style.position="fixed";

yesBtn.style.left="50%";

yesBtn.style.top="50%";

yesBtn.style.transform="translate(-50%,-50%)";

yesBtn.style.fontSize="70px";

yesBtn.style.padding="50px 100px";

}

});