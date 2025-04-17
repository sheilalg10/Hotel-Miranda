function hamburguerMenu() {
    const hamburguer = document.getElementById("hamburguerMenu");
    const dropdown = document.getElementById("dropdown");
    const ham__span = document.getElementsByClassName("header__div__hamburguer__span");

    hamburguer.addEventListener("click", () =>{
        if(dropdown.className === "dropdown"){
            dropdown.className = "dropdown display";
        }
    })
}

export default hamburguerMenu;