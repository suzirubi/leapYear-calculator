var leapYear = function(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

$(document).ready(function() {

  $("form#leapYear").submit(function(event) {

    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $("#showYear").text(year);

    if(!leapYear(year)) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();

    event.preventDefault();
  });
});
