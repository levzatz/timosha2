
let audioSet = document.querySelector("audio");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

/* btn.addEventListener('mouseenter',()=>{
    btn.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;
}); */

for (let i = 0;i<=1000;i++){
    const newBtn=document.createElement("button");
    document.body.append(newBtn);
}

const btn = document.querySelectorAll("button");
btn.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;
        /* let aud = new Audio();
        aud.src=`/${getRandomIntInclusive(1, 5)}.mp3`;
        e.target.style.backgroundImage=`url("/${getRandomIntInclusive(1, 4)}.jpg")`;
        
        
        aud.play(); */
    });
        
});
