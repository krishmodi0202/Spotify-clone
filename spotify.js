console.log("Welcome to spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Ishq", filepath: "1.mp3",coverPath: "1.jpg"},
    {songName: "Ishq-2", filepath: "song/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Ishq-3", filepath: "song/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Ishq-4", filepath: "song/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Ishq-5", filepath: "song/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Ishq-6", filepath: "song/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Ishq-7", filepath: "song/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Ishq-8", filepath: "song/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Ishq-9", filepath: "song/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "Ishq-10", filepath: "song/10.mp3",coverPath: "covers/10.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementByTagName("img")[0].src=songs[i].coverpath;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value * audioElement.duration/100;

})