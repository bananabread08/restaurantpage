const loadHome = () => {
    const homeCont = document.createElement("div");
    homeCont.classList.add("home-cont");
    const homeDesc = document.createElement("p");
    homeDesc.classList.add("home-desc");
    homeDesc.textContent = "Manam Comfort Filipino pays homage to classic"
    + " all-time Filipino favorites by elevating these into modern gustatory masterpieces."
    + " Named “The No. 1 Sisig in Manila” for two consecutive years by Spot.ph, Metro Manila's top online publication."
    + " Indulge to Pinoy culinary treasures, served with a mix of classic and modern twist."
    homeCont.appendChild(homeDesc);
    homeCont.style.display = "flex";
    return homeCont;
    
}

export default loadHome;