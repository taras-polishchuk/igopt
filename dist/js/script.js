$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>'
    });


  function initMap() {
    var pos = {lat: 55.748013, lng: 37.627229};
    var opt = {
        center: {lat: 55.748013, lng: 37.640229},
        zoom: 15,
    };

    var myMap = new google.maps.Map(document.getElementById("map"), opt);

    var image = new google.maps.MarkerImage(
        'icons/marker.png',
        new google.maps.Size(130, 130), //размер изображения иконки в пикселях
        new google.maps.Point(0, 0), //позиционирование иконки
        new google.maps.Point(0, 0) //центр иконки
    );

    var marker = new google.maps.Marker ({
        position: pos,
        map: myMap,
        title: "Наш офис",
        icon: image
    });

    var info = new google.maps.InfoWindow({
        content: '<div class="map__content"><h2 class="map__title">г. Москва</h2><div class="map__directions">ул. Садовническая, дом 5, офис 4-6 <br>700 от м. Новокузнецкая <br>Тел: +7 (926) 423 01 00 <br></div><a href="" class="map__email">info@glopt.ru</a></div>'
    });
    
    marker.addListener("click", function() {
        info.open(map, marker);
    });
  }
  
  $('.form').validate({
      rules: {  
          name: "required",
          phone: "required",
          email: {
              required: true,
              email: true
          }
        },
        messages: {
            name: "Введите свое имя",
            phone: "Введите свой номер",
            email: {
                required: "Введите свою почту",
                email: "Неправильный адрес почты"
            }
        }
    });
    $('#questions form').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Введите свое имя",
            phone: "Введите свой номер",
            email: {
                required: "Введите свою почту",
                email: "Неправильный адрес почты"
            }
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.nav__items'),
        menuItem = document.querySelectorAll('.nav_item'),
        hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__items_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('nav__items_active');
            })
        })
    })



    $('input[name=phone]').mask("+7 (999) 999-99-99");
});
      