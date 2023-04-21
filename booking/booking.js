//  Author: Vaibhav Arora

"use strict";
$(document).ready(() => {
  $("#destination").focus();

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

//  Java Script Code

const nodeSelector = (selector) => document.querySelector(selector);

function setDateProp() {
  const allDateEle = document.querySelectorAll(".date-setter");
  for (let i = 0; i < allDateEle.length; i++) {
    allDateEle[i].addEventListener("focus", function (evt) {
      evt.target.type = "date";
      evt.target.setAttribute("min", new Date().toJSON().slice(0, 10));
    });

    allDateEle[i].addEventListener("blur", function (evt) {
      if (evt.target.value == "") {
        evt.target.type = "text";
      }
    });
  }
}

function setErrorMsg(id, msg) {
  nodeSelector(id).nextElementSibling.innerHTML = msg;
}

function hotelFormValidty() {
  const destinationVal = nodeSelector("#destination").value.trim();
  const checkInDate = nodeSelector("#checkIn").value.trim();
  const checkOutDate = nodeSelector("#checkOut").value.trim();
  const roomVal = nodeSelector("#room").value.trim();

  let isValid = true;

  if (!destinationVal) {
    setErrorMsg("#destination", "Please enter a destination.");
    isValid = false;
  } else {
    setErrorMsg("#destination", "");
  }
  if (!checkInDate) {
    setErrorMsg("#checkIn", "Enter a destination.");
    isValid = false;
  } else {
    setErrorMsg("#checkIn", "");
  }
  if (!checkOutDate) {
    setErrorMsg("#checkOut", "Enter check out date.");
    isValid = false;
  } else {
    setErrorMsg("#checkOut", "");
  }
  if (!roomVal) {
    setErrorMsg("#room", "Enter number of room.");
    isValid = false;
  } else {
    setErrorMsg("#room", "");
  }

  return isValid;
}
function flightFormValidty() {
  const flyingForm = nodeSelector("#flyingForm").value.trim();
  const flyingTo = nodeSelector("#flyingTo").value.trim();
  const flightDate = nodeSelector("#flightDate").value.trim();
  const passengers = nodeSelector("#passengers").value.trim();

  let isValid = true;

  if (!flyingForm) {
    setErrorMsg("#flyingForm", "Please enter a airport.");
    isValid = false;
  } else {
    setErrorMsg("#flyingForm", "");
  }
  if (!flyingTo) {
    setErrorMsg("#flyingTo", "Please enter a airport.");
    isValid = false;
  } else {
    setErrorMsg("#flyingTo", "");
  }
  if (!flightDate) {
    setErrorMsg("#flightDate", "Enter flight date.");
    isValid = false;
  } else {
    setErrorMsg("#flightDate", "");
  }
  if (!passengers) {
    setErrorMsg("#passengers", "Enter number of passengers.");
    isValid = false;
  } else {
    setErrorMsg("#passengers", "");
  }

  return isValid;
}
function activityFormValidty() {
  const activity = nodeSelector("#activity").value.trim();
  let isValid = true;
  if (!activity) {
    setErrorMsg("#activity", "Enter activity.");
    isValid = false;
  } else {
    console.log(" :>> ");
    setErrorMsg("#activity", "");
  }
  return isValid;
}

function onSubmitForm(evt, id) {
  let isValid = true;

  switch (id) {
    case "hotel":
      isValid = hotelFormValidty();
      break;

    case "flight":
      isValid = flightFormValidty();
      break;

    case "activity":
      isValid = activityFormValidty();
      break;
  }
  console.log("isValid :>> ", isValid);
  evt.preventDefault();
  if (isValid) {
    document.location.href = "../gallery.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setDateProp();
  nodeSelector("#hotel-form-submit").addEventListener("click", (evt) =>
    onSubmitForm(evt, "hotel")
  );
  nodeSelector("#flight-form-submit").addEventListener("click", (evt) =>
    onSubmitForm(evt, "flight")
  );
  nodeSelector("#activity-form-submit").addEventListener("click", (evt) =>
    onSubmitForm(evt, "activity")
  );
});
