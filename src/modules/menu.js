const loadMenu = () => {
    const menuCont = document.createElement("div");
    menuCont.classList.add("menu-cont");
    const menuDesc = document.createElement("p");
    menuDesc.classList.add("menu-desc");
    menuDesc.textContent = "aslflnsdlfnlsnadflalsdflsdfsldfslfsldfsldflsdflsdfnlsdfsdlf" 
    + "asdwqioeroitfnsdd,nsldkfnlasdsfjnwenrlwejrlwjrlwrjwlernsd,mfsnd,fns,fsnfsdfn,msdf"
    + "kjlsfjlsdjflsdjflksdjfwierqwendsdnf,dfn,sn,fsdf"; 
    menuCont.appendChild(menuDesc);
    menuCont.style.display = "flex";
    return menuCont;
    
}

export default loadMenu;