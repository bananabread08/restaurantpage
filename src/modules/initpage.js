const initpage = (() => {
    //get global selectors
    const content = document.querySelector("#content");
    const topNav = document.createElement("div");
    const tabCont = document.createElement("div");
    const footer = document.createElement("footer");

    topNav.classList.add("top-nav");
    tabCont.classList.add("tab-cont");
    footer.innerHTML = `
    <div>Developed by bananabread08</div>
    <div>This is a mock-up page</div>
    <div><a href="https://github.com/bananabread08">Github</a>`;
    footer.classList.add("footer");

    const createHeader = () => { //create Header
        const headerCont = document.createElement("header");
        const restoName = document.createElement("h1");
        restoName.textContent = "Manam";
        restoName.classList.add("resto-name");
        headerCont.appendChild(restoName);
        topNav.appendChild(headerCont);
    }

    const createBtns = () => { //create Buttons
        const buttonCont = document.createElement("div");
        const homeBtn = document.createElement("button");
        const menuBtn = document.createElement("button");
        const aboutBtn = document.createElement("button");
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

        buttonCont.appendChild(homeBtn);
        buttonCont.appendChild(menuBtn);
        buttonCont.appendChild(aboutBtn);

        topNav.appendChild(buttonCont);
    }

    const loadPage = () => {
        createHeader();
        createBtns();
        content.appendChild(topNav);
        content.appendChild(tabCont);
        content.appendChild(footer); 
    }

    return {loadPage, tabCont};
})();

export default initpage;