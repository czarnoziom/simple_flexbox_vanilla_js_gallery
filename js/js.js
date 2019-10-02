// $( document ).ready(function() {
//   $(".tile")
// });


//CLOSING GALLERY EXPANDED WINDOW
$("#closeGallery").click(function () {
  $("#expandWindow").addClass("hidden");
});

//EXPANDING IMG FUNCTION
var index;
let tilesArray = document.querySelectorAll(".tile h3");

tilesArray.forEach(function (elem) {
  elem.addEventListener("click", function () {
    $("#expandWindow").removeClass("hidden");
    var x = ($(this).attr('id').substring(1, 3));
    var y = ($(this).attr('id').substring(4, 7));
    index = $(".tile h3").index(this);
    $("#imgContainer").css('background-image', 'url("img/gallery/' + x + '/' + y + '.webp")');
  });
});

//CLICKING NEXT BUTTON
$("#nextImage").click(function () {
  index += 1;
  if (index >= tilesArray.length-1){
    index = 0;
  } else{
    index=index;
  }
  var a = $(tilesArray[index]).attr('id').substring(1, 3);
  var b = $(tilesArray[index]).attr('id').substring(4, 7);
  $("#imgContainer").css('background-image', 'url("img/gallery/' + a + '/' + b + '.webp")');
});

//CLICKING NEXT BUTTON
$("#prevImage").click(function () {
  index -= 1;
  if (index < 0){
    index = tilesArray.length-1;
  } else{
    index=index;
  }
  var a = $(tilesArray[index]).attr('id').substring(1, 3);
  var b = $(tilesArray[index]).attr('id').substring(4, 7);
  $("#imgContainer").css('background-image', 'url("img/gallery/' + a + '/' + b + '.webp")');
});

