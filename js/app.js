$(document).ready(function(){
// Obtener todas las imágenes
var firstPicture = $('img:first');
var secondPicture = $('img').first().next();
var thirdPicture = $('img').first().next().next();
var fourthPicture = $('img').first().next().next().next();
var fifthPicture = $('img').first().next().next().next().next();
var sixthPicture = $('img').last().prev().prev();
var seventhPicture = $('img').last().prev();
var eighthPicture = $('img').last();
// Obtener todos los íconos de círculos
var firstCircle = $('i').first().next();
var secondCircle = $('i').first().next().next();
var thirdCircle = $('i').first().next().next().next();
var fourthCircle = $('i').last().prev().prev().prev().prev();
var fifthCircle = $('i').last().prev().prev().prev();
var sixthCircle = $('i').last().prev().prev();
// Obtener los íconos de círculos por grupos
var firstFourCircles = $(firstCircle).nextUntil(sixthCircle);
// Agregar evento con función anónima
$(firstCircle).click( function showPicture() {
  $(firstPicture).show();
  $(secondPicture).hide();
  $(thirdPicture).hide();
  $(fourthPicture).hide();
  $(fifthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  //agregar evento para pintar círculo
  $(event.target).css({
    'backgroundColor':'#2ab7a9',
    'borderRadius':'10px',
    // 'boxShadow':'35px'
  });

});
$(secondCircle).click( function showPicture(event) {
  $(firstPicture).hide();
  $(thirdPicture).hide();
  $(fourthPicture).hide();
  $(fifthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  $(secondPicture).show();
  $(event.target).css({
    'backgroundColor':'#2ab7a9',
    'borderRadius':'10px'
  });
});
$(thirdCircle).click( function showPicture() {
  $(firstPicture).hide();
  $(secondPicture).hide();
  $(fourthPicture).hide();
  $(fifthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  $(thirdPicture).show();
  $(event.target).css({
    'backgroundColor':'#2ab7a9',
    'borderRadius':'10px'
  });
});
$(fourthCircle).click( function showPicture() {
  $(firstPicture).hide();
  $(secondPicture).hide();
  $(thirdPicture).hide();
  $(fifthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  $(fourthPicture).show();
  $(event.target).css({
    'backgroundColor':'#2ab7a9',
    'borderRadius':'10px'
  });
});
$(fifthCircle).click( function showPicture() {
  $(firstPicture).hide();
  $(secondPicture).hide();
  $(thirdPicture).hide();
  $(fourthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  $(fifthPicture).show();
  $(event.target).css({
    'backgroundColor':'#2ab7a9',
    'borderRadius':'10px'
  });
});
// Cierre de función general
});
