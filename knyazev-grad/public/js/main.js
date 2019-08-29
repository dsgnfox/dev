// Карта
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 7,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark([55.661574, 37.573856], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_pin.png',
            // Размеры метки.
            iconImageSize: [76, 106],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })
    myMap.geoObjects.add(myPlacemark);
    // отлючение скролла. можно врубить на мобильнике
    // myMap.behaviors.disable('scrollZoom');
});

// Табы
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


//моб меню
$('.mmenu').click( function() {
    $('.modal-mmenu').toggle();
    $(this).addClass('mmenu--active');
});
$('.modal-mmenu__bg').click( function() {
    $('.modal-mmenu').hide();
    $('.mmenu').removeClass('mmenu--active');
});
