//  Author: Vaibhav Arora 

"use strict";
$(document).ready(() => {
  $("#tabs").tabs({
    active: 0,
    classes: {
      // "ui-tabs": "highlight",
      "ui-tabs-nav": "booking-hotel-nav",
      "ui-tabs-tab": "booking-hotel-nav-item",
      "ui-tabs-active": "booking-hotel-nav-item-active",
      "ui-tabs-anchor": "booking-hotel-nav-item-anchor",
    },
  });

  $(".custom-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});