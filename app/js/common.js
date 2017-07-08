
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText: ["<img src='img/baner-left.png'>","<img src='img/baner-rigth.png'>"],
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:true
        },
        600:{
            items:1,
            dots:false,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            dots:false,
            loop:false
        }
    }
})
});






// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};
    $(document).ready(function(){
        $('#btn_submit').click(function(){
            // собираем данные с формы
            var user_name    = $('#user_name').val();
            var user_email   = $('#user_email').val();
            var text_comment = $('#text_comment').val();
            // отправляем данные
            $.ajax({
                url: "action.php", // куда отправляем
                type: "post", // метод передачи
                dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "user_email":   user_email,
                        "text_comment": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });