const react = document.getElementById("react")
const vue = document.getElementById("vue")
const responsive = document.getElementById("responsive")
const reactTab = document.getElementById("reactTab")
const vueTab = document.getElementById("vueTab")
const responsiveTab = document.getElementById("responsiveTab")

function reactTabfun() {
    responsiveTab.classList.remove("active");
    vueTab.classList.remove("active");
    reactTab.classList.add("active")
    responsive.classList.remove("visible");
    vue.classList.remove("visible");
    react.classList.add("visible")
}

function vueTabfun() {
    reactTab.classList.remove("active");
    responsiveTab.classList.remove("active");
    vueTab.classList.add("active")
    react.classList.remove("visible");
    responsive.classList.remove("visible");
    vue.classList.add("visible")
}

function responsiveTabfun() {
    reactTab.classList.remove("active");
    vueTab.classList.remove("active");
    responsiveTab.classList.add("active")
    react.classList.remove("visible");
    vue.classList.remove("visible");
    responsive.classList.add("visible")
}