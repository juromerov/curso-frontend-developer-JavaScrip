const menuEmail = document.querySelector(".navbar-email");
const menuRayaMobil = document.querySelector(".menu");
const navbarShopinCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideProductDetail = document.querySelector(".product-detail");



// menuEmail.addEventListener("click", toggleDestopMenu);
// menuRayaMobil.addEventListener("click", toggleMobileMenu);
// navbarShopinCart.addEventListener("click", toggleAsideProductDetail);



menuEmail.addEventListener("click", showDestopMenu);
menuRayaMobil.addEventListener("click", showMobileMenu);
navbarShopinCart.addEventListener("click", showAsideProductDetail);


function showDestopMenu(){
    asideProductDetail.classList.add("inactive")
    desktopMenu.classList.toggle("inactive");
}

function showMobileMenu(){
    asideProductDetail.classList.add("inactive");
   mobileMenu.classList.toggle("inactive");
}

function showAsideProductDetail(){
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    asideProductDetail.classList.toggle("inactive");
 }