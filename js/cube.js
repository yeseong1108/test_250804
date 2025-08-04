// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
// 태그명이 article인 요소를 찾아서 저장
const article = document.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter",e=>{
        //article 에 마우스를 올리면 부모인 #circle의 animation-play-state 값을 "paused로 변경"
        circle.style.animationPlayState="paused";
    });
    el.addEventListener("mouseleave",e=>{
        //article 에 마우스를 올리면 부모인 #circle의 animation-play-state 값을 "running로 변경"
        circle.style.animationPlayState="running";
    });
}