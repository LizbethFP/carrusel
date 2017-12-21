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
var fourthCircle = $('i').last().prev();
var fifthCircle= $('i').last();
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
});
$(secondCircle).click( function showPicture() {
  $(firstPicture).hide();
  $(thirdPicture).hide();
  $(fourthPicture).hide();
  $(fifthPicture).hide();
  $(sixthPicture).hide();
  $(seventhPicture).hide();
  $(eighthPicture).hide();
  $(secondPicture).show();
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
});
// Cierre de función general
});
