const menu = document.querySelector(".hamburger-lines"),
    modalBtn = document.querySelectorAll(".modal-btn")

menu.addEventListener("click",()=>{
    if(!menu.classList.contains("nav-active")){
        menu.classList.add("nav-active");
    }else{
        menu.classList.remove("nav-active");
    }
});


modalBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if(!document.body.classList.contains("modal-active")){
            document.body.classList.add("modal-active");
        }else{
            document.body.classList.remove("modal-active");
        }
    });
});

