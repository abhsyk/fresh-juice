// banner
const swiper = new Swiper('.myswiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

// logo
TweenMax.from('.logo', 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

// menu
TweenMax.from(
  '.navbar-menu-link',
  1,
  {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  },
  0.08
);

// search
TweenMax.from('.navbar-search', 1, {
  delay: 0.5,
  opacity: 0,
  ease: Expo.easeInOut,
});

// account
TweenMax.from('.navbar-account', 1, {
  delay: 0.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

// cart
TweenMax.from('.navbar-cart', 1, {
  delay: 0.7,
  opacity: 0,
  ease: Expo.easeInOut,
});

// banner
TweenMax.from('.banner-img-wrapper', 1, {
  delay: 1.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// tagline
TweenMax.from('.banner-tagline', 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// title
TweenMax.from('.banner-title', 1, {
  delay: 0.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// pages
TweenMax.from('.banner-pages', 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// more
TweenMax.from('.banner-more', 1, {
  delay: 1.15,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// description
TweenMax.from('.banner-description', 1, {
  delay: 1.25,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// arrows
TweenMax.from('.slide-btns', 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});
