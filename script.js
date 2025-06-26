let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let play = document.querySelector(".play");
let page2 = document.querySelector(".page2");
let video = document.querySelector(".page2 video");
let explore = document.querySelector(".explore");
let page4 = document.querySelectorAll(".page4div video")
body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

page2.addEventListener("mouseenter", (e) => {
  cursor.style.display = "none";
  play.style.display = "flex";
});

page2.addEventListener("mousemove", (e) => {
  play.style.left = e.clientX + "px";
  play.style.top = e.clientY + "px";
});

page2.addEventListener("mouseleave", (e) => {
  cursor.style.display = "block";
  play.style.display = "none";
});

let pbtn = 1;
play.addEventListener("click", () => {
  if (pbtn == 1) {
    play.innerHTML = "<i class='ri-pause-line'></i>";
    play.style.backgroundColor = "#dadada";
    video.play();
    pbtn = 0;
  } else {
    play.innerHTML = "<i class='ri-arrow-right-s-fill'></i>";
    play.style.backgroundColor = "black";
    play.style.color = "white";
    video.pause();
    pbtn = 1;
  }
});

page4.forEach((vdo)=>{

   vdo.addEventListener("mouseenter",(e)=>{

  explore.style.display="flex";
    explore.style.left = e.clientX +"px";
   explore.style.top = e.clientY+"px";
   vdo.play();

   })
    vdo.addEventListener("mouseleave",(e)=>{
  explore.style.display="none";
      
   vdo.pause();

   })
})



let tl = gsap.timeline();

tl.from("nav", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl.from(
  ".homesec h1",
  {
    y: 20,
    opacity: 0,
    stagger: 0.3,
  },
  "move"
);

tl.from(
  ".homesec .box video",
  {
    y: 20,
    opacity: 0,
  },
  "move"
);


tl.from(".page4box",{
  y:20,
  opacity:0,
  duration: 0.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".page4",
    scrub:1,
    start:"top 40%",
    end: "bottom 60%"
  }
})


