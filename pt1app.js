$(function () {
    console.log("Let's get ready to party with jQuery!");
});

$('article img').addClass('image-center');

$('article p').last().remove();

$('#title').css("font-size", Math.floor(Math.random() * 100));

$('ol').append('<li>Polka Dot Tea Cup</li>');

$('aside').empty().append('<p>Sorry for the List.</p>');

$('input').css('background-color')

$('.form-control').on('keyup', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

  $('img').on('click',function(e){
    $(e.target).remove();
  })