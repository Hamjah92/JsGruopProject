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