$(function() {
  $("#append-here").hide();

  var blanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  $("#grocery-list").submit(function(event) {

    event.preventDefault();
    var groceryList = blanks.map(function(blank) {
      return $("#input" + blank).val();
    });
    $("#grocery-input").hide();
    $("#append-here").show();

    groceryList.sort();
    groceryList.forEach(function(each) {
      if (each !== "") {

        $("#append-here").append("<li>" + each.toUpperCase() + "</li>")
      }
    });

  });

  $("#note-form").submit(function(event) {
    event.preventDefault();

    var comment = "";
    comment = $("#notes").val();
    commentArray = comment.split(" ");
    var newCommentArray = [];
    commentArray.forEach(function(each) {
      if (each && each.length >= 3){
        newCommentArray.push(each);
      } else {

      }
    });
    newCommentArray.reverse();
    var newCommentString = newCommentArray.join(" ");
    $("#note-section").text(newCommentString);
    $("#grocery-output").show();
    $("#note-form").hide();
   console.log(newCommentString);
  });


});
