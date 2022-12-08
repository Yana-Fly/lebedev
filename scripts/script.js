new WOW({
    animateClass: 'animate__animated',
}).init();

let menu = document.getElementById('menu');
let mobilecornerTittle = document.getElementById('mobilecorner-tittle');
let mobilecornerText = document.getElementById('mobilecorner-text');
let mobilecorner = document.getElementById('mobilecorner');
let popupExcursion = document.getElementById('popup-excursion');

document.getElementById('burger').onclick = function () {
    menu.style.display = 'block';
}

document.getElementById('menu-close').onclick = function () {
    menu.style.display = 'none';
}

document.getElementById('watch').onclick = function () {
    document.getElementById('house-unit-else').style.display = 'block';
    document.getElementById('watch').style.display = 'none';
}

$('.close-menu').click(function (){
        menu.style.display = 'none';
})

$('.popup-gallery').each(function () {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            tCounter: ''

        }
    });
});


document.getElementById('btn-carcass').onclick = function () {
    mobilecornerTittle.innerHTML = 'Неразрывный каркас';
    mobilecornerText.innerHTML = 'Монтаж стен этажей внутри дома и по всему периметру выполняется единым массивом.';
    document.getElementById('technology-button-small').style.background = 'rgb(252, 237, 203)';
    document.getElementById('technology-button-big').style.borderColor = 'rgb(252, 237, 203)';
}

document.getElementById('btn-raskos').onclick = function () {
    mobilecornerTittle.innerHTML = 'Диагональный раскос';
    mobilecornerText.innerHTML = 'Система диагональных раскосов позволяет создать оптимальный вентиляционный зазор для\n' +
        '                        капитальных\n' +
        '                        стен и наружной отделки';
    mobilecorner.style.left = '40px';
    document.getElementById('btn-raskos-small').style.background = 'rgb(252, 237, 203)';
    document.getElementById('btn-raskos-big').style.borderColor = 'rgb(252, 237, 203)';
}

document.getElementById('btn-nodes').onclick = function () {
    mobilecornerTittle.innerHTML = 'Сборка силовых узлов';
    mobilecornerText.innerHTML = 'Основные силовые узлы наших домов оцинкованы, что позволяет быть уверенными в исключительной прочности и долговечности конструкции';
    mobilecorner.style.left = '100px';
    document.getElementById('btn-nodes-small').style.background = 'rgb(252, 237, 203)';
    document.getElementById('btn-nodes-big').style.borderColor = 'rgb(252, 237, 203)';
}


document.getElementById('btn-wind').onclick = function () {
    mobilecornerTittle.innerHTML = 'Плитная ветрозащита';
    mobilecornerText.innerHTML = 'Используемая влагостойкая ветрозащитная плита обеспечивает дополнительную шумоизоляцию стен';
    mobilecorner.style.left = '180px';
    document.getElementById('btn-wind-small').style.background = 'rgb(252, 237, 203)';
    document.getElementById('btn-wind-big').style.borderColor = 'rgb(252, 237, 203)';
}

document.getElementById('btn-windows').onclick = function () {
    mobilecornerTittle.innerHTML = '5 камерные окна';
    mobilecornerText.innerHTML = 'Обеспечивает исключительную сохранность тепла в доме';
    mobilecorner.style.left = '180px';
    document.getElementById('btn-windows-small').style.background = 'rgb(252, 237, 203)';
    document.getElementById('btn-windows-big').style.borderColor = 'rgb(252, 237, 203)';
}


$('.center').slick({
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    dots: true,
    slidesToShow: 3,
    speed: 100,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

let phone = $('#phone');
phone.inputmask({"mask": "+7(999) 999-9999"});
$('#consultation-btn').click(function () {
    let name = $('#name');
    let agree = $('#agree');
    let hasError = false;
    let approval = $('#approval');

    $('.error-input').hide();
    approval.hide();


    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css("border-color", "red");
    } else {
        name.css("border-color", "white");
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css("border-color", "red");
    } else {
        phone.css("border-color", "white");
    }
    if (!agree.prop('checked')) {
        approval.show();
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val(), agree: agree.checked}
        })
            .done(function (msg) {
                console.log(msg);
                if (msg.success) {
                    $('.input-block').css('display', 'none');
                    $('#consultation-btn').css('display', 'none');
                    $('.agree').css('display', 'none');
                    $('.input-block-2').css('display', 'none');
                    $('.form-thanks').css('display', 'block');
                } else {
                    alert('Спасибо, мы свяжемся с вами в ближайшее время!')
                }
            });
    }

})


document.getElementById('consultation-btn-popup').onclick = function () {
    popupExcursion.style.display = 'block';
}

document.getElementById('popup-close').onclick = function () {
    popupExcursion.style.display = 'none';
}


let phonePopup = $('#phone-popup');
phonePopup.inputmask({"mask": "+7(999) 999-9999"});
$('#sign-up').click(function () {
    let namePopup = $('#name-popup');
    let phonePopup = $('#phone-popup');
    let agreePopup = $('#agree-popup');
    let hasError = false;
    let approvalPopup = $('#approval-popup');

    $('.error-input-popup').hide();
    approvalPopup.hide();


    if (!namePopup.val()) {
        namePopup.next().show();
        hasError = true;
        namePopup.css("border-color", "red");
    } else {
        namePopup.css("border-color", "white");
    }
    if (!phonePopup.val()) {
        phonePopup.next().show();
        hasError = true;
        phonePopup.css("border-color", "red");
    } else {
        phonePopup.css("border-color", "white");
    }
    if (!agreePopup.prop('checked')) {
        approvalPopup.show();
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: namePopup.val(), phone: phonePopup.val(), agree: agreePopup.checked}
        })
            .done(function (msg) {
                console.log(msg);
                if (msg.success) {
                    alert('Спасибо, мы свяжемся с вами в ближайшее время!')
                } else {
                    $('.input-block-popup').css('display', 'none');
                    $('#sign-up').css('display', 'none');
                    $('.agree-popup').css('display', 'none');
                    $('.input-block-2-popup').css('display', 'none');
                    $('.form-thanks-popup').css('display', 'block');
                }
            });
    }

})


