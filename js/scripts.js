$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["exclamation", "adverb", "noun", "adjective"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $(this).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();

  });
});
