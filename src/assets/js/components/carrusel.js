'use strict';

const Carrusel = () =>{
  console.log("Entro al carrusel");
  const principal = $('<div class="cont_carousel"></div>');
  const divVisible = $('<div class="owl-carousel owl-theme carousel"></div>');
  const divImg_1 = $('<div class="item"><div class="cont_img"><img class="img-responsive" src="assets/img/'+state.dataNews[10].img+'" alt=""></div>'+
                    '<div class="text-news_carousel"><h3>'+state.dataNews[10].title+'</h3></div></div>');
  const divImg_2 = $('<div class="item"><div class="cont_img"><img class="img-responsive" src="assets/img/'+state.dataNews[11].img+'" alt=""></div>'+
                    '<div class="text-news_carousel"><h3>'+state.dataNews[11].title+'</h3></div></div>');
  const divImg_3 = $('<div class="item"><div class="cont_img"><img class="img-responsive" src="assets/img/'+state.dataNews[12].img+'" alt=""></div>'+
                    '<div class="text-news_carousel"><h3>'+state.dataNews[12].title+'</h3></div></div>');
  const divImg_4 = $('<div class="item"><div class="cont_img"><img class="img-responsive" src="assets/img/'+state.dataNews[13].img+'" alt=""></div>'+
                    '<div class="text-news_carousel"><h3>'+state.dataNews[13].title+'</h3></div></div>');
  divVisible.append(divImg_1);
  divVisible.append(divImg_2);
  divVisible.append(divImg_3);
  divVisible.append(divImg_4);
  principal.append(divVisible);
  return principal;
}
const espacio = () =>{
  const principal = $('<div class="espacio"></div>');
  return principal;
}
