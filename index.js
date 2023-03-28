var WEATHER_API_KEY = "0cf69d7b51047b5bd691266f2e26e463";

var form = $("#form");
var city = $("#cities").val();



$(function(){
    form.on("submit", function(event){
        event.preventDefault();

       
    })
})
$.ajax({
    type: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$(
      "#cities"
    ).val()}&units=metric&appid=${WEATHER_API_KEY}`,
    success: function (data) {
      console.log(data);

      
    },
  });