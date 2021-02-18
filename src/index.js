import initpage from './modules/initpage';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';

initpage.loadPage(); //load initial page
initpage.tabCont.appendChild(loadHome());

const tabBtns = document.querySelectorAll("button");
tabBtns.forEach(button => { //button events
    button.addEventListener("click", function(e){
        showThisTab(e);
    });
});

const clearOtherTabs = () => { //delete other tabs
    while(initpage.tabCont.hasChildNodes()){
        initpage.tabCont.removeChild(initpage.tabCont.firstChild);
    }
}

const showThisTab = (e) =>{
    switch(e.target.id){
        case "home":
            clearOtherTabs();
            initpage.tabCont.appendChild(loadHome());
            break;
        case "menu":
            clearOtherTabs();
            initpage.tabCont.appendChild(loadMenu());
            break;
        case "about":
            clearOtherTabs();
            initpage.tabCont.appendChild(loadAbout());
    }
}



