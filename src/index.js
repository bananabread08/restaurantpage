import initpage from './modules/initpage';

initpage.loadPage();
const tabBtns = document.querySelectorAll("button");
tabBtns.forEach(button => {
    button.addEventListener("click", function(e){
        showThisTab(e);
    });
});

const showThisTab = (e) =>{
    switch(e.target.id){
        case "home":
            console.log("Home"); //loadHome();
            break;
        case "menu":
            console.log("Menu"); //loadMenu();
            break;
        case "about":
            console.log("About"); //loadAbout();
    }
}



