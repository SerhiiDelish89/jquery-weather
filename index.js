var WEATHER_API_KEY = "0cf69d7b51047b5bd691266f2e26e463";

var form = $("#form");
var city = $("#cities").val();

function request() {
  $.ajax({
    type: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$(
      "#cities"
    ).val()}&units=metric&appid=${WEATHER_API_KEY}`,
    success: function (data) {
      console.log("change", data);

      $("#temp").empty().append(data.main.temp);
      $("#feels").empty().append(data.main.feels_like);
      $("#name").empty().append(data.name);
      $("#description").empty().append(data.weather[0].description);
      $("#humidity").empty().append(data.main.humidity);
      $("#icon")
        .empty()
        .append(
          "<img src='http://openweathermap.org/img/w/" +
            data.weather[0].icon +
            ".png' alt='Icon depicting current weather.' width='35' height='35'>"
        );
    },
  });
}

request();

$(function () {
  form.on("change", function (event) {
    event.preventDefault();

    request();
  });
});

$(function () {
  form.on("submit", function (event) {
    event.preventDefault();

    request();
  });
});
