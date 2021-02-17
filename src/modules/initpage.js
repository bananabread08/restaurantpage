const initpage = (() => {
    //get selectors
    const topNav = document.createElement("div");
    const headerCont = document.createElement("header");
    const restoName = document.createElement("h1");
    const buttonCont = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const aboutBtn = document.createElement("button");
    const footer = document.createElement("footer");

    topNav.classList.add("top-nav");

    restoName.textContent = "Manam";
    restoName.classList.add("resto-name");

    buttonCont.classList.add("button-cont");

    homeBtn.innerText = "Home";
    homeBtn.classList.add("nav-buttons");
    homeBtn.setAttribute("id", "home");

    menuBtn.innerText = "Menu";
    menuBtn.classList.add("nav-buttons");
    menuBtn.setAttribute("id", "menu");

    aboutBtn.innerText = "About";
    aboutBtn.classList.add("nav-buttons");
    aboutBtn.setAttribute("id", "about");

    footer.textContent = "Developed by bananabread08";
    footer.classList.add("footer");

    const loadPage = () => {
        const content = document.querySelector("#content");

        headerCont.appendChild(restoName);
        buttonCont.appendChild(homeBtn);
        buttonCont.appendChild(menuBtn);
        buttonCont.appendChild(aboutBtn);

        topNav.appendChild(headerCont);
        topNav.appendChild(buttonCont);

        content.appendChild(topNav);
        content.appendChild(footer); 
    }

    return {loadPage};
})();


export default initpage;