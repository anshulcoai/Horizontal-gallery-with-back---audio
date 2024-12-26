let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) =>  {
    evt.preventDefault();
    scrollContainer.style.scrollBehavior ="auto";
    scrollContainer.scrollLeft += evt.deltaY;
});

nextbtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
});

a1=document.getElementById("aud")
function playAudio()
{
  a1.play();
}

function pauseAudio()
{
    a1.pause();
}