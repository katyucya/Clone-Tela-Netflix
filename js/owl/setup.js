$('.owl-carousel').owlCarousel({
    loop:true,  // efeito de loop, roda de forma infinita
    margin:10,
    nav:false,  // botões de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})