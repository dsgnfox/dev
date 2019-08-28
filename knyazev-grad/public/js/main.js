// Карта
function initMap() {
    var coordinates = {lat: 55.8013825, lng: 37.6040856},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}

// Табы
$('ul.tabs-btns').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabs').find('.tabs-content__tab').removeClass('active')
        .eq($(this).index())
        .addClass('active');
})