// When the document is ready, execute the function:
$(document).ready(function () {
  $(".filter-button").click(function () {
    const value = $(this).attr("data-filter");

    // If the value is 'all', show all elements with class 'filter'
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }

    // Remove the 'active' class from all elements with class 'filter-button' and add it to the clicked element
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
  });
});

// 
$(window).on("scroll", function () {
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  $(".row").each(function (index) {
    var $elem = $(this);
    var elemTop = $elem.offset().top;
    if (elemTop < docViewBottom) {
      $elem.addClass(
        index % 2 != 0
          ? "animate__fadeInBottomRight"
          : "animate__fadeInBottomLeft"
      );
    }
  });
});

$("#overlay").addClass("animatedHeader");
let arr = ["website-background", "back1", "back2"];
let i = 1;
setInterval(() => {
  document.querySelector(
    "#homeHeader"
  ).style.backgroundImage = `url('./assets/img/${arr[i]}.jpg')`;
  i++;
  if (i == 3) i = 0;
}, 3000);

