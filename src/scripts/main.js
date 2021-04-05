/* eslint-disable */
'use strict';
 let i = 1;
 for(let li of gallery__carousel.querySelectorAll('.gallery__carousel-image')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0;font-size:0">${i}</span>`);
   i++;
 }

 let width = 305;
 let count = 3;

 let list = gallery__carousel.querySelector('.gallery__carousel-images');
 let listElems = gallery__carousel.querySelectorAll('.gallery__carousel-image');

 let position = 0;

 gallery__carousel.querySelector('.gallery__button-prev').onclick = function() {

   position += width * count;

   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };

 gallery__carousel.querySelector('.gallery__button-next').onclick = function() {

   position -= width * count;

   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 };

