const images1 = [
"https://picsum.photos/600/400?1",
"https://picsum.photos/600/400?3",
"https://picsum.photos/600/400?5"
];

const images2 = [
"https://picsum.photos/600/400?2",
"https://picsum.photos/600/400?4",
"https://picsum.photos/600/400?6"
];

let i = 0;

setInterval(()=>{

i = (i+1) % images1.length;

document.getElementById("img1").style.opacity=0;
document.getElementById("img2").style.opacity=0;

setTimeout(()=>{

document.getElementById("img1").src = images1[i];
document.getElementById("img2").src = images2[i];

document.getElementById("img1").style.opacity=1;
document.getElementById("img2").style.opacity=1;

},500)

},4000)
