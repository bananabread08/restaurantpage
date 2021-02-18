const menuItem = (name, image, description, price) => {
    return { name, image, description, price };
  }
  
    let menu = [];
    const sisig = menuItem("Sisig", "assets/sisig.jpg", "Fried chopped pork with pig ears and liver", "PHP 500");
    const palabok = menuItem("Crispy Palabok", "assets/palabok.jpg", "Crispy Rice Noodles topped with shrimp and smoked fish flakes", "PHP 400");
    const adobo = menuItem("Chicken & Pork Adobo", "assets/adobo.jpg", "Chicken & Pork glazed with special soy sauce mix", "PHP 450");
    const sinigang = menuItem("Sinigang", "assets/sinigang.jpg", "Hot sour soup prepared with tamarind plus various meats", "PHP 500");
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