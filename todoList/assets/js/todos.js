// CHECK OFF TODOS BY CLICKING
$("ul").on("click", "li", function() {
  $(this).toggleClass('completed');
});

// CLICK ON X TO DELETE TO DO ITEMS
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// CREATE TO DO ON ENTER
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // GRABBING NEW TO DO TEXT FROM INPUT
    var todoText = $(this).val();
    $(this).val("");
    // CREAT A NEW LI AND ADD TO UL
    $("ul").append("<li><span><i class='fas fa-trash-alt'></span></i> " + todoText + "</li>")
  }
});

// HIDE INPUT WITH PLUS ICON CLICK
$("#plus").click(function() {
  $("input[type='text']").fadeToggle();
});