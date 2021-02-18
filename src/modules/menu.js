const menuItem = (name, image, description, price) => {
    return { name, image, description, price };
  }
  
    let menu = [];
    const sisig = menuItem("Sisig", "assets/sisig.jpg", "", "PHP 500 / $10");
    const palabok = menuItem("Crispy Palabok", "assets/palabok.jpg", "", "PHP 400 / $8");
    const adobo = menuItem("Chicken & Pork Adobo", "assets/adobo.jpg", "", "PHP 450 / $9");
    const sinigang = menuItem("Sinigang", "assets/sinigang.jpg", "", "PHP 500 / $10");
    menu.push(sisig, palabok, adobo, sinigang);



const loadMenu = () => {
    const menuCont = document.createElement("div");
    menuCont.classList.add("menu-cont");
    const menuDesc = document.createElement("p");
    menuDesc.classList.add("menu-desc");
    menuDesc.innerHTML = `
    <table>
        <tr>
        <td>${menu[0].name}</td>
        <td><img src="${menu[0].image}"></td>
        <td>${menu[0].description}</td>
        <td>${menu[0].price}</td>
        </tr>
        <tr>
        <td>${menu[1].name}</td>
        <td><img src="${menu[1].image}"></td>
        <td>${menu[1].description}</td>
        <td>${menu[1].price}</td>
        </tr>
        <tr>
        <td>${menu[2].name}</td>
        <td><img src="${menu[2].image}"></td>
        <td>${menu[2].description}</td>
        <td>${menu[2].price}</td>
        </tr>
        <tr>
        <td>${menu[3].name}</td>
        <td><img src="${menu[3].image}"></td>
        <td>${menu[3].description}</td>
        <td>${menu[3].price}</td>
        </tr>
    </table>`
    menuCont.appendChild(menuDesc);
    menuCont.style.display = "flex";
    return menuCont;
}

export default loadMenu;