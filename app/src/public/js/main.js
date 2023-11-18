"use strict";

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

const drip_clickcb = (recipe) => {
    console.log(recipe);
    const req = {
        "recipe": recipe,
    };
    console.log(req);
    fetch("/drip", {
        method: "POST", // *GET, POST, PUT, DELETE 등
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });

}