import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const tl = gsap.timeline();

tl.fromTo(
  ".header__nav",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4 }
);

tl.fromTo(
  ".header__image_text-top",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.4 }
);

tl.fromTo(
  ".header__image_text-botton",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.4 }
);

tl.fromTo(
  ".header__text",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.4 }
);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.fromTo(
  ".story__title",
  { y: -100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".story",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

const storyWrapperItems = document.querySelectorAll(".story__wrapper_item");

storyWrapperItems.forEach((storyWrapperItem) => {
  gsap.fromTo(
    storyWrapperItem,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: storyWrapperItem,
        scrub: true,
        start: "top center",
        end: "bottom center",
        once: true,
      },
    }
  );
});

if (window.matchMedia("(max-width: 1024px)").matches) {
  gsap.fromTo(
    ".gallery__title",
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".gallery",
        scrub: true,
        start: "top center",
        end: "10% center",
        once: true,
      },
    }
  );
} else {
  gsap.fromTo(
    ".gallery__title",
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".gallery",
        scrub: true,
        start: "top center",
        end: "center center",
        once: true,
      },
    }
  );
}

gsap.fromTo(
  ".gallery__row",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".gallery",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".type__top_image",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type__wrapper_top",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".type__top_text",
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type__wrapper_top",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".type__bottom_image",
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type__wrapper_bottom",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".type__bottom_text",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type__wrapper_bottom",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".celebrate__title",
  { y: -100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".celebrate",
      scrub: true,
      start: "top center",
      end: "20% center",
      once: true,
    },
  }
);

const celebrateRowItems = document.querySelectorAll(".celebrate__row_item");

celebrateRowItems.forEach((celebrateRowItem) => {
  gsap.fromTo(
    celebrateRowItem,
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: celebrateRowItem,
        scrub: true,
        start: "top center",
        end: "center center",
        once: true,
      },
    }
  );
});

gsap.fromTo(
  ".footer",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".footer",
      scrub: true,
      start: "-10% center",
      end: "10% center",
      once: true,
    },
  }
);
