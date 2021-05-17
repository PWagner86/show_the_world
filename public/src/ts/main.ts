const navBtn = document.querySelector(".nav-icon") as HTMLDivElement;
const navIcon = document.querySelector(".nav-icon i") as HTMLElement;
const nav = document.querySelector("nav") as HTMLElement;
let active: boolean = false

navBtn.addEventListener("click", () => {
    if(!active){
        nav.style.display = "flex";
        navBtn.style.background = "#2B293E";
        navIcon.style.color = "#D68D3C"
        active = true;
    }else{
        nav.style.display = "none";
        navBtn.style.background = "#D68D3C";
        navIcon.style.color = "#2B293E";
        active = false;
    }
})