const loadAbout = () => {
    const aboutCont = document.createElement("div");
    aboutCont.classList.add("about-cont");
    const aboutDesc = document.createElement("p");
    aboutDesc.classList.add("about-desc");
    aboutDesc.innerHTML = `
    <h2>Location & Store Hours</h2>
    <p>Ayala Malls Manila Bay, 2nd Floor</p>
    <p>Trinoma 2nd Floor, Fountain Area</p>
    <p>10 am - 8pm, Mondays to Thursdays</p>
    <h2> Social Media <h2>
    <p class="icons"><img src="assets/fbicon.png">: manamFB </p>
    <p class="icons"><img src="assets/twticon.png">: @manamPH </p>`
    aboutCont.appendChild(aboutDesc);
    aboutCont.style.display = "flex";
    return aboutCont;
    
}

export default loadAbout;