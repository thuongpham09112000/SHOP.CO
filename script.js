const nav_shop = document.getElementById('nav-shop');
const shop_expanse = document.getElementById('shop-expand');
const header = document.getElementsByTagName('header')[0];
const banner = document.getElementById('banner');
const main_header = document.getElementsByClassName('main-header')[0];
const isHovering = nav_shop.getAttribute('aria-expanded') === 'false';

function handle_Shop_hover(isHovering) {
    if (isHovering) {
        nav_shop.setAttribute('aria-expanded', 'true');
        shop_expanse.style.display = 'flex';
    } else {
        nav_shop.setAttribute('aria-expanded', 'false');
        shop_expanse.style.display = 'none';
    }
}


nav_shop.addEventListener('mouseover', function () {
    handle_Shop_hover(true);
});

nav_shop.addEventListener('mouseout', function () {
    handle_Shop_hover(false);
});

shop_expanse.addEventListener('mouseover', function () {
    handle_Shop_hover(true);
});

shop_expanse.addEventListener('mouseout', function () {
    handle_Shop_hover(false);
});

document.addEventListener("touchstart", function (event) {
    const touchTarget = event.target;
    if (touchTarget.closest("#nav-shop") || touchTarget.closest("#shop-expand")) {
        handle_Shop_hover(true)
    } else {
        handle_Shop_hover(false);
    }
});

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
console.log(screenWidth);
console.log(screenHeight);


function setShopExpansePosition() {
    const rect_nav_shop = nav_shop.getBoundingClientRect();
    const rect_header = header.getBoundingClientRect();
    const rect_banner = banner.getBoundingClientRect();
    const rect_shop_expanse = shop_expanse.getBoundingClientRect();
    const rect_main_header = main_header.getBoundingClientRect();

    console.log(rect_nav_shop.left);
    console.log(rect_shop_expanse.left);


    shop_expanse.style.position = 'absolute';
    shop_expanse.style.transform = `translateY(${rect_banner.y - (rect_nav_shop.y + rect_nav_shop.height)}px)`;
    shop_expanse.style.left = `${rect_main_header.left - rect_nav_shop.left}px`;

    // console.log(rect_shop_expanse.width);

}

setShopExpansePosition();

window.addEventListener("resize", function () {
    setShopExpansePosition();
});





