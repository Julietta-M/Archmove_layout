'use strict';
 /* этот код помечает картинки, для удобства разработки */
 let i = 1;
 for(let li of gallery__carousel.querySelectorAll('.gallery__carousel-image')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0;font-size:0">${i}</span>`);
   i++;
 }

 /* конфигурация */
 let width = 305; // ширина картинки
 let count = 3; // видимое количество изображений

 let list = gallery__carousel.querySelector('.gallery__carousel-images');
 let listElems = gallery__carousel.querySelectorAll('.gallery__carousel-image');

 let position = 0; // положение ленты прокрутки

 gallery__carousel.querySelector('.gallery__button-prev').onclick = function() {
   // сдвиг влево
   position += width * count;
   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };

 gallery__carousel.querySelector('.gallery__button-next').onclick = function() {
   // сдвиг вправо
   position -= width * count;
   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 };
