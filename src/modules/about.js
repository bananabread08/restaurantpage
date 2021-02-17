const loadAbout = () => {
    const aboutCont = document.createElement("div");
    aboutCont.classList.add("about-cont");
    const aboutDesc = document.createElement("p");
    aboutDesc.classList.add("about-desc");
    aboutDesc.textContent = "asdfsdsgdflktpqopwems,dmf,msdnasdnljjslfjlerorotppsdfkfgljldfjglkd"
    + "rlwejrlwjrlwrjwlernsd,mfsnd,fns,fsnfsdfn,msdf"
    + "kjlsfjlsdjflsdjflksdjfwierqwendsdnf,dfn,sn,fsdf"; 
    aboutCont.appendChild(aboutDesc);
    aboutCont.style.display = "flex";
    return aboutCont;
    
}

export default loadAbout;