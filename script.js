

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
console.log(response);
  });

  $(".gifs").html("<img src=" + queryURL + ">");
