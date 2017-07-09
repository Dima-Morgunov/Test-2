
// выпадающее меню
$(document).ready(function() {
  $(".toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".main-menu").slideToggle();
  return false;
});
});

// параметры библиотеки слайдера
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText: ["<img src='img/baner-left.png'>","<img src='img/baner-rigth.png'>"],
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false
        },
        768:{
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
// подсвечивания в блока с заглавием при наведении на кнопку 
price1.onmouseover = function(){price_tittle1.style.backgroundColor ='#49cbcd'};
price1.onmouseout = function(){price_tittle1.style.backgroundColor =''};

price2.onmouseover = function(){price_tittle2.style.backgroundColor ='#49cbcd'};
price2.onmouseout = function(){price_tittle2.style.backgroundColor =''};

price3.onmouseover = function(){price_tittle3.style.backgroundColor ='#49cbcd'};
price3.onmouseout = function(){price_tittle3.style.backgroundColor =''};

// фиксированое меню
$(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.header-wrap').addClass('header-fixed');
      } else {
          $('.header-wrap').removeClass('header-fixed');
      }
});

// ajax запрос
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
