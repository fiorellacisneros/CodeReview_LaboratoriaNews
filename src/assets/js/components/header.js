
const Header = () =>{
  const top = $('<div class="hidden-xs center height-header"></div>');
  const img = $('<img class="img-auto" src="assets/img/logoicon.png" alt="">');
  top.append(img);
  return top;
}

const NavBar = () =>{
  const navbarlarge = $('<nav class="navbar navbar-default"></nav>');
  const container = $('<div class="container-fluid"></div>');
  const barHeader = $('<div class="navbar-header"></div>');
    const button = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>');
    const span = $('<span class="sr-only">Toggle navigation</span>');
    const span1 = $('<span class="icon-bar"></span>');
    const span2 = $('<span class="icon-bar"></span>');
    const span3 = $('<span class="icon-bar"></span>');
  const logoXs = $('<div class="navbar-brand visible-xs" href="#"></div>');
    const imagen = $('<img src="assets/img/logoicon.png" alt="">');
  const collapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
    const ul = $('<ul class="nav navbar-nav"></ul>');
    const li1 = $('<li><a href="#">Lo Último <span class="sr-only">(current)</span></a></li>');
    const li2 = $('<li><a href="#">Opinión</a></li>');
    const li3 = $('<li><a href="#">Cultura</a></li>');
    const li4 = $('<li><a href="#">Perú</a></li>');
    const li5 = $('<li><a href="#">Tecnología</a></li>');
    const li6 = $('<li><a href="#">Mundo</a></li>');
    const li7 = $('<li><a href="#">Economía</a></li>');
    const li8 = $('<li><a href="#">LifeStyle</a></li>');
    const li9 = $('<li><a href="#">Deporte</a></li>');
  navbarlarge.append(container);
  container.append(barHeader);
  barHeader.append(button);
  button.append(span);
  button.append(span1);
  button.append(span2);
  button.append(span3);
  barHeader.append(logoXs);
  logoXs.append(imagen);
  container.append(collapse);
  collapse.append(ul);
  ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9);
  return navbarlarge;
}

const Principal = () =>{
  const principal = $('<div class="principal"></div>');
  const divVisible = $('<div class="visible-xs"></div>');
  const h2 = $('<h2>LO ÚLTIMO</h2>');
  const hr = $('<hr>');
  const imagen = $('<img class="img-auto" src="assets/img/'+state.dataNews[0].img+'" alt="">');
  const textoNew = $('<div class="text-news"></div>');
  const h1 = $('<h1>'+state.dataNews[0].title+'</h1>');
  const p = $('<p class="descripcion hidden-xs">'+state.dataNews[0].brief+'</p>');

  principal.append(divVisible);
  divVisible.append(h2, hr);
  principal.append(imagen);
  principal.append(textoNew);
  textoNew.append(h1, p);
  return principal;
}

const Row1 = () =>{
  const row = $('<div class="row"></div>');
  const column = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');
  const imagen = $('<img src="assets/img/'+state.dataNews[1].img+'" alt="">')
  const boxPlomo = $('<div class="info-plomo"></div>');
  const h2 = $('<p>'+state.dataNews[1].title+'</p>');
  const column2 = $('<div class="newsmedia medianew col-xs-12 col-md-3 col-lg-3"></div>');
  const column21 = $('<div class="medio-sm"></div>');
  const imag21 = $('<img src="assets/img/'+state.dataNews[2].img+'" alt="">')
  const column22 = $('<div class="info-plomo medio-sm"></div>');
  const text22 = $('<p>'+state.dataNews[2].title+'</p>');
  const column3 = $('<div class="newsmedia medianew col-xs-12 col-md-3 col-lg-3"></div>');
  const column31 = $('<div class="medio-sm"></div>');
  const imag31 = $('<img src="assets/img/'+state.dataNews[3].img+'" alt="">')
  const column32 = $('<div class="info-plomo medio-sm"></div>');
  const text32 = $('<p>'+state.dataNews[3].title+'</p>');

  row.append(column);
  column.append(imagen);
  column.append(boxPlomo);
  boxPlomo.append(h2);
  row.append(column2);
  column2.append(column21);
  column21.append(imag21);
  column2.append(column22);
  column22.append(text22);

  row.append(column3);
  column3.append(column31);
  column31.append(imag31);
  column3.append(column32);
  column32.append(text32);

  return row;
}

const Mundo = () =>{
  const principal = $('<div class="principal"></div>');
  const h2 = $('<h2>MUNDO</h2>');
  const hr = $('<hr>');

  principal.append(h2, hr);
  return principal;
}

const Row2 = () =>{
  const row = $('<div class="row"></div>');
  const columnLeft = $('<div class="col-xs-12 col-md-3 col-lg-3"></div>');
  const columnL1 = $('<div class="completoDiv"></div>');
    const imagL1 = $('<img src="assets/img/'+state.dataNews[4].img+'" alt="">')
  const columnL2 = $('<div class="info-plomo completoDiv"></div>');
    const textL2 = $('<p>'+state.dataNews[4].title+'</p>');
    row.append(columnLeft);
    columnLeft.append(columnL1);
    columnL1.append(imagL1);
    columnLeft.append(columnL2);
    columnL2.append(textL2);

  const columnCenter = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');

    const columnA = $('<div class="completo-sm"></div>');
    const columnA1 = $('<div class="completoDiv"></div>');
      const imagA1 = $('<img src="assets/img/'+state.dataNews[5].img+'" alt="">')
    const columnA2 = $('<div class="info-plomo completoDiv"></div>');
      const textA2 = $('<p>'+state.dataNews[5].title+'</p>');

      row.append(columnCenter);
      columnCenter.append(columnA)
      columnA.append(columnA1);
      columnA1.append(imagA1);
      columnA.append(columnA2);
      columnA2.append(textA2);

    const columnB = $('<div class="hidden-xs medioDiv"></div>');
    const columnB1 = $('<div class="completoDiv"></div>');
      const imagB1 = $('<img src="assets/img/'+state.dataNews[6].img+'" alt="">')
    const columnB2 = $('<div class="info-plomo completoDiv"></div>');
      const textB2 = $('<p>'+state.dataNews[6].title+'</p>');

      columnCenter.append(columnB)
      columnB.append(columnB1);
      columnB1.append(imagB1);
      columnB.append(columnB2);
      columnB2.append(textB2);

    const columnC = $('<div class="height-medio completoDiv"></div>');
    const columnC1 = $('<div class="medioDiv"></div>');
      const imagC1 = $('<img src="assets/img/'+state.dataNews[9].img+'" alt="">')
    const columnC2 = $('<div class="info-plomo medioDiv"></div>');
      const textC2 = $('<p>'+state.dataNews[9].title+'</p>');

      columnCenter.append(columnC)
      columnC.append(columnC1);
      columnC1.append(imagC1);
      columnC.append(columnC2);
      columnC2.append(textC2);

    const columnD = $('<div class="height-medio completoDiv"></div>');
    const columnD1 = $('<div class="medioDiv"></div>');
      const imagD1 = $('<img src="assets/img/'+state.dataNews[8].img+'" alt="">')
    const columnD2 = $('<div class="info-plomo medioDiv"></div>');
      const textD2 = $('<p>'+state.dataNews[8].title+'</p>');

      columnCenter.append(columnD)
      columnD.append(columnD1);
      columnD1.append(imagD1);
      columnD.append(columnD2);
      columnD2.append(textD2);

  const columnRight = $('<div class="hidden-xs col-md-3 col-lg-3"></div>');
  const columnR1 = $('<div class="completoDiv"></div>');
    const imagR1 = $('<img src="assets/img/'+state.dataNews[7].img+'" alt="">')
  const columnR2 = $('<div class="info-plomo completoDiv"></div>');
    const textR2 = $('<p>'+state.dataNews[7].title+'</p>');

    row.append(columnRight);
    columnRight.append(columnR1);
    columnR1.append(imagR1);
    columnRight.append(columnR2);
    columnR2.append(textR2);

  return row;
}

const RowLG =()=>{
    const row = $('<div class="hidden-xs row"></div>');
    const column = $('<div class="col-xs-12 col-md-3 col-lg-3"></div>');
    const columnL1 = $('<div class="completoDiv"></div>');
    const imagL1 = $('<img src="assets/img/'+state.dataNews[10].img+'" alt="">')
    const columnL2 = $('<div class="info-plomo completoDiv"></div>');
    const textL2 = $('<p>'+state.dataNews[10].title+'</p>');
    row.append(column);
    column.append(columnL1);
    columnL1.append(imagL1);
    column.append(columnL2);
    columnL2.append(textL2);

    const columnB = $('<div class="col-xs-12 col-md-3 col-lg-3"></div>');
    const columnBL1 = $('<div class="completoDiv"></div>');
    const imagBL1 = $('<img src="assets/img/'+state.dataNews[11].img+'" alt="">')
    const columnBL2 = $('<div class="info-plomo completoDiv"></div>');
    const textBL2 = $('<p>'+state.dataNews[11].title+'</p>');
    row.append(columnB);
    columnB.append(columnBL1);
    columnBL1.append(imagBL1);
    columnB.append(columnBL2);
    columnBL2.append(textBL2);

    const columnC = $('<div class="col-xs-12 col-md-3 col-lg-3"></div>');
    const columnCL1 = $('<div class="completoDiv"></div>');
    const imagCL1 = $('<img src="assets/img/'+state.dataNews[12].img+'" alt="">')
    const columnCL2 = $('<div class="info-plomo completoDiv"></div>');
    const textCL2 = $('<p>'+state.dataNews[12].title+'</p>');
    row.append(columnC);
    columnC.append(columnCL1);
    columnCL1.append(imagCL1);
    columnC.append(columnCL2);
    columnCL2.append(textCL2);

    const columnD = $('<div class="col-xs-12 col-md-3 col-lg-3"></div>');
    const columnDL1 = $('<div class="completoDiv"></div>');
    const imagDL1 = $('<img src="assets/img/'+state.dataNews[13].img+'" alt="">')
    const columnDL2 = $('<div class="info-plomo completoDiv"></div>');
    const textDL2 = $('<p>'+state.dataNews[13].title+'</p>');
    row.append(columnD);
    columnD.append(columnDL1);
    columnDL1.append(imagDL1);
    columnD.append(columnDL2);
    columnDL2.append(textDL2);

    return row;
}

const Tecnologia = () =>{
  const principal = $('<div class="principal"></div>');
  const h2 = $('<h2>TECNOLOGIA</h2>');
  const hr = $('<hr>');

  principal.append(h2, hr);
  return principal;
}

const Row3 =() => {
  const row = $('<div class="row"></div>');
  const columnLeft = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');
  const columnL1 = $('<div class="completoDiv"></div>');
    const imagL1 = $('<img src="assets/img/'+state.dataNews[14].img+'" alt="">')
  const columnL2 = $('<div class="info-plomo completoDiv"></div>');
    const textL2 = $('<p>'+state.dataNews[14].title+'</p>');
    row.append(columnLeft);
    columnLeft.append(columnL1);
    columnL1.append(imagL1);
    columnLeft.append(columnL2);
    columnL2.append(textL2);

  const columnCenter = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');

    const columnA = $('<div class="hidden-xs completo-sm"></div>');
    const columnA1 = $('<div class="completoDiv"></div>');
      const imagA1 = $('<img src="assets/img/'+state.dataNews[16].img+'" alt="">')
    const columnA2 = $('<div class="info-plomo completoDiv"></div>');
      const textA2 = $('<p>'+state.dataNews[16].title+'</p>');

      row.append(columnCenter);
      columnCenter.append(columnA)
      columnA.append(columnA1);
      columnA1.append(imagA1);
      columnA.append(columnA2);
      columnA2.append(textA2);

    const columnB = $('<div class="hidden-xs medioDiv"></div>');
    const columnB1 = $('<div class="completoDiv"></div>');
      const imagB1 = $('<img src="assets/img/'+state.dataNews[16].img+'" alt="">')
    const columnB2 = $('<div class="info-plomo completoDiv"></div>');
      const textB2 = $('<p>'+state.dataNews[16].title+'</p>');

      columnCenter.append(columnB)
      columnB.append(columnB1);
      columnB1.append(imagB1);
      columnB.append(columnB2);
      columnB2.append(textB2);

    const columnC = $('<div class="height-medio completoDiv"></div>');
    const columnC1 = $('<div class="medioDiv"></div>');
      const imagC1 = $('<img src="assets/img/'+state.dataNews[17].img+'" alt="">')
    const columnC2 = $('<div class="info-plomo medioDiv"></div>');
      const textC2 = $('<p>'+state.dataNews[17].title+'</p>');

      columnCenter.append(columnC)
      columnC.append(columnC1);
      columnC1.append(imagC1);
      columnC.append(columnC2);
      columnC2.append(textC2);

    const columnD = $('<div class="height-medio completoDiv"></div>');
    const columnD1 = $('<div class="medioDiv"></div>');
      const imagD1 = $('<img src="assets/img/'+state.dataNews[18].img+'" alt="">')
    const columnD2 = $('<div class="info-plomo medioDiv"></div>');
      const textD2 = $('<p>'+state.dataNews[18].title+'</p>');

      columnCenter.append(columnD)
      columnD.append(columnD1);
      columnD1.append(imagD1);
      columnD.append(columnD2);
      columnD2.append(textD2);
  return row;
}

const Educacion = () =>{
  const principal = $('<div class="principal"></div>');
  const h2 = $('<h2>EDUCACION</h2>');
  const hr = $('<hr>');

  principal.append(h2, hr);
  return principal;
}

const Row4 =() =>{
  const row = $('<div class="row"></div>');
  const columnCenter = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');

    const columnA = $('<div class="completo-sm"></div>');
    const columnA1 = $('<div class="completoDiv"></div>');
      const imagA1 = $('<img src="assets/img/'+state.dataNews[19].img+'" alt="">')
    const columnA2 = $('<div class="info-plomo completoDiv"></div>');
      const textA2 = $('<p>'+state.dataNews[19].title+'</p>');

      row.append(columnCenter);
      columnCenter.append(columnA)
      columnA.append(columnA1);
      columnA1.append(imagA1);
      columnA.append(columnA2);
      columnA2.append(textA2);

    const columnB = $('<div class="completo-sm"></div>');
    const columnB1 = $('<div class="completoDiv"></div>');
      const imagB1 = $('<img src="assets/img/'+state.dataNews[20].img+'" alt="">')
    const columnB2 = $('<div class="info-plomo completoDiv"></div>');
      const textB2 = $('<p>'+state.dataNews[20].title+'</p>');

      columnCenter.append(columnB)
      columnB.append(columnB1);
      columnB1.append(imagB1);
      columnB.append(columnB2);
      columnB2.append(textB2);

    const columnD = $('<div class="height-medio completoDiv"></div>');
    const columnD1 = $('<div class="medioDiv"></div>');
      const imagD1 = $('<img src="assets/img/'+state.dataNews[21].img+'" alt="">')
    const columnD2 = $('<div class="info-plomo medioDiv"></div>');
      const textD2 = $('<p>'+state.dataNews[21].title+'</p>');

      columnCenter.append(columnD)
      columnD.append(columnD1);
      columnD1.append(imagD1);
      columnD.append(columnD2);
      columnD2.append(textD2);

      const columnM = $('<div class="col-xs-12 col-md-6 col-lg-6"></div>');

        const columnBA = $('<div class="hidden-xs completo-sm"></div>');
        const columnBA1 = $('<div class="completoDiv"></div>');
          const imagBA1 = $('<img src="assets/img/'+state.dataNews[22].img+'" alt="">')
        const columnBA2 = $('<div class="info-plomo completoDiv"></div>');
          const textBA2 = $('<p>'+state.dataNews[22].title+'</p>');

          row.append(columnM);
          columnM.append(columnBA)
          columnBA.append(columnBA1);
          columnBA1.append(imagBA1);
          columnBA.append(columnBA2);
          columnBA2.append(textBA2);

        const columnBB = $('<div class="hidden-xs completo-sm"></div>');
        const columnBB1 = $('<div class="completoDiv"></div>');
          const imagBB1 = $('<img src="assets/img/'+state.dataNews[23].img+'" alt="">')
        const columnBB2 = $('<div class="info-plomo completoDiv"></div>');
          const textBB2 = $('<p>'+state.dataNews[23].title+'</p>');

          columnM.append(columnBB)
          columnBB.append(columnBB1);
          columnBB1.append(imagBB1);
          columnBB.append(columnBB2);
          columnBB2.append(textBB2);

        const columnBD = $('<div class="height-medio completoDiv"></div>');
        const columnBD1 = $('<div class="medioDiv"></div>');
          const imagBD1 = $('<img src="assets/img/'+state.dataNews[23].img+'" alt="">')
        const columnBD2 = $('<div class="info-plomo medioDiv"></div>');
          const textBD2 = $('<p>'+state.dataNews[23].title+'</p>');

          columnM.append(columnBD)
          columnBD.append(columnBD1);
          columnBD1.append(imagBD1);
          columnBD.append(columnBD2);
          columnBD2.append(textBD2);

          return row;
}
