const text_max = 500;
$("#count_message").html("0 / " + text_max);

$("#yourMessage").keyup(function () {
  const text_length = $("#yourMessage").val().length;
  $("#count_message").html(text_length + " / " + text_max);
});
