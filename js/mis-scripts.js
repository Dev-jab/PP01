// Service Worker
if ('serviceWorker' in navigator) {
	console.log('Puedes usar serviceWorker en tu navegador');
	navigator.serviceWorker.register('./js/sw.js')
						   .then(res => console.log('serviceWorker cargado correctamente', res))
						   .catch(err => console.log('serviceWorker no se ha podido registrar', err))

  }else{
    console.log('NO PUEDES usar serviceWorker en tu navegador');
  }

$(function () {


    /*-----------------------------------------------------------
    1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {

        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');

    });

    /*-----------------------------------------------------------
     2. INICIANDO SWIPER
     -------------------------------------------------------------*/
    var swiper = new Swiper('#animacion', {

        /*Botones de navegación */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /*Botones de paginación */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
           autoplay: {
             delay: 3000,            
           },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

    });


    /*-----------------------------------------------------------
    3. INICIANDO "stickit.js"
     -------------------------------------------------------------*/
    $('#menu-navegacion').stickit({
        className:'menu-fijo'        
    });

    /*-----------------------------------------------------------
     4. INICIANDO "page-scroll-to-id"
     -------------------------------------------------------------*/

    $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass:'active'
    });



})