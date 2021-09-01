document.addEventListener('DOMContentLoaded', function() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
   
    
    const btnToTop = $('.back-to-top')
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const headerHeight = $('.header').clientHeight;
    var playScrolls = Array.from($$('.play-on-scroll'));

    var lastPosition = window.scrollY;

    $$('.menu__link').forEach(btnTopMenu => {
        btnTopMenu.onclick = (e) => { 
            $('.menu__link--active').classList.remove('menu__link--active')
            e.target.classList.add('menu__link--active')
        } 
    })
    
    btnToTop.addEventListener('click', function() {
        btnToTop.classList.add("invisible")
        window.scrollTo(0,0);
    } )

    window.onscroll = function() {
        animationStart();
    };

    function animationStart() {

        // btn back_to_top: hide/show
        if (lastPosition > 100)
            btnToTop.classList.remove("invisible");
        else
            btnToTop.classList.add("invisible");
        lastPosition = window.scrollY;    

        // scroll;
        playScrolls.forEach( playScroll =>  {    
                const posTop = playScroll.offsetTop;
                const posBottom = posTop + playScroll.clientHeight; 
                
                if ( (posTop - lastPosition >= windowHeight) || (lastPosition + headerHeight + 10 > posBottom) ) {
                    playScroll.classList.remove('start')
                }
                 
                else
                    playScroll.classList.add('start')

        }) 
    }


})