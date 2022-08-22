const menu = document.getElementById("menuBtn");
const close = document.getElementById("closeBtn");
const menuVisible = document.getElementById("tab-view");

function openMenu() {
    menu.style.display = 'none';
    close.style.display = 'block';
    menuVisible.style.display = 'block';
    console.log("Menu Open");
}

function closeMenu() {
    close.style.display = 'none';
    menu.style.display = 'block';
    menuVisible.style.display = 'none';
    console.log("Close Open");
}