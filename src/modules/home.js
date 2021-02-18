const loadHome = () => {
    const homeCont = document.createElement("div");
    homeCont.classList.add("home-cont");
    const homeDesc = document.createElement("p");
    homeDesc.classList.add("home-desc");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML= `<img src="assets/logo.png">`;
    homeDesc.innerHTML = `<strong>Manam Comfort Filipino</strong> pays homage to classic
    all-time Filipino favorites by elevating these into modern gustatory masterpieces. 
    <br>Named <strong>“The No. 1 Sisig in Manila”</strong> for two consecutive years by Spot.ph, Metro Manila's top online publication.
    Indulge to Pinoy culinary treasures, served with a mix of classic and modern twist.`
    homeCont.appendChild(homeDesc);
    homeCont.appendChild(logo);
    homeCont.style.display = "flex";
    homeCont.style.flexDirection = "column";
    return homeCont;
    
}

export default loadHome;