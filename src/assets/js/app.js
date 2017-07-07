const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    container.append(Header());
    container.append(NavBar());
    container.append(Principal());
    container.append(Row1());

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
 });
});
