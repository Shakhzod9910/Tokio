(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset >50){
            header.classList.add('header__active');
        }
        else{
            header.classList.remove('header__active');
        }

    };


 }());

//Burger

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuClose = document.querySelector('.header__nav-closed');
    const menuLinks  = document.querySelectorAll('.nav__link');
    burgerItem.addEventListener('click',()=>{
        menu.classList.add('nav__active');
    });

    menuClose.addEventListener('click',()=>{
        menu.classList.remove('nav__active');
    });

    if(window.innerWidth < 768){
        for (let i = 0; i < menuLinks.length; i += 1){
            menuLinks[i].addEventListener('click',() => {
                menu.classList.remove('nav__active');
            });
        }

    }

}());



(function () {
    const smoothScroll = function (targetEl, duration){
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosittion = target.getBoundingClientRect().top - headerElHeight;
        let startPossition = window.pageYOffset;
        let startTime = null;



        const ease = function(t,b,c,d){
            t/=d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t-2) - 1) + b;
        };

        const animation = function(currentTime){
            if(startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPossition, targetPosittion, duration);
            window.scrollTo(0, run);

            if(timeElapsed < duration) requestAnimationFrame(animation);

        };
        requestAnimationFrame(animation);


    };

    const scrollTo = function() {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function() {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    }

    scrollTo();





}());


