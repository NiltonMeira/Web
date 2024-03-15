const btn_next = document.getElementById("proximo");
const btn_previous = document.getElementById("anterior");
const btn_play = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");


let capitulo = 1
let tocando = false;

btn_next.addEventListener("click", (e) => {
    capitulo+=1;

    if(capitulo>10){
        capitulo = 1
    }
    
    document.getElementById("capitulo").innerHTML = "Cápitulo " + capitulo;
    audio.setAttribute('src', `./src/books/${capitulo}.mp3`)
})

btn_previous.addEventListener("click", (e) => {
    capitulo-=1;

    if(capitulo <= 0){
        capitulo = 10
    }
    
    document.getElementById("capitulo").innerHTML = "Cápitulo " + capitulo;
    audio.setAttribute('src', `./src/books/${capitulo}.mp3`)
})

btn_play.addEventListener("click", (e) => {    

    if(audio.paused)
    {
        audio.play();
    }
    else 
    {
        audio.pause();
    } 


})