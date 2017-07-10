const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    container.append(Header());
    container.append(NavBar());
    container.append(Principal());
    container.append(Row1());
    container.append(Mundo())
    container.append(Row2());
    container.append(RowLG());
    container.append(Tecnologia());
    container.append(Row3());
    container.append(Educacion());
    container.append(Row4());
    container.append(Carrusel());
    container.append(espacio());
    root.append(container);
}

const state = {
    dataNews: null,
    imag: null,
    informacion: null,
    descripcion: null
};

$(_ => {
 $.get("api/news/", function(data, status){
    state.dataNews=data;
    console.log(data);
    const root = $('.root');
    render(root);
    $('.owl-carousel').owlCarousel({
        rtl:false,
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
    });
 });
});
