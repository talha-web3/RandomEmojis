const buttonElem=document.getElementById('button');
const svgElem=document.getElementById('rocket');
const emojiNameElem=document.getElementById('emoji-name');

buttonElem.addEventListener('mouseenter', (event)=>{
    event.target.firstChild.style.fill='white';
})
buttonElem.addEventListener('mouseleave', (event)=>{
    event.target.firstChild.style.fill='#20826C';
})

buttonElem.addEventListener('click', (event)=>{
    const randomNum=Math.floor(Math.random() * emojis.length);
    const randomEmoji=emojis[randomNum];

    buttonElem.innerHTML=`
        <p class="emoji">${randomEmoji.character}</p>`;

    emojiNameElem.innerText=`${randomEmoji.unicodeName}`;
    
})

let emojis=[];

async function getEmoji(){
    const response= await fetch('https://emoji-api.com/emojis?access_key=e8d6ad036d9bbfdfdbedf26d4e7d4dedc930594e');
    const data=await response.json();

    for(let i=0; i<1500; i++){
        emojis.push({
            character: data[i].character,
            unicodeName: data[i].unicodeName
        })
    }
}

getEmoji();