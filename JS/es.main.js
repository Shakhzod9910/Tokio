"use strict";

(function () {
  var header = document.querySelector(".header");

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
})(); //Burger

(function () {
  var burgerItem = document.querySelector(".burger");
  var menu = document.querySelector(".nav");
  var menuClose = document.querySelector(".header__nav-closed");
  burgerItem.addEventListener("click", function () {
    menu.classList.add("nav__active");
  });
  menuClose.addEventListener("click", function () {
    menu.classList.remove("nav__active");
  });
})();

(function () {
  var smoothScroll = function smoothScroll(targetEl, duration) {
    var headerElHeight = document.querySelector(".header").clientHeight;
    var target = document.querySelector(targetEl);
    var targetPosittion = target.getBoundingClientRect().top - headerElHeight;
    var startPossition = window.pageYOffset;
    var startTime = null;

    var ease = function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPossition, targetPosittion, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll(".js-scroll");
    links.forEach(function (each) {
      each.addEventListener("click", function () {
        var currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };

  scrollTo();
})();
