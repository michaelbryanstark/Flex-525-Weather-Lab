//   const url = "http://api.openweathermap.org/data/2.5/weather?zip=11217,us&appid=ca3c23b7a51bffb90c2bde67910a836d"
  
//   $.ajax({
//     url: url,
//   }).then(
//     (data) => {
//       console.log(data);
//     },
//     (error) => {
//       console.log("bad request", error);
//     }
//   );

  async function getWeatherData(e) {
	e.preventDefault();

	const userInput = $('input[type="text"]').val();
	const apiKey = "ca3c23b7a51bffb90c2bde67910a836d";
	const url = `http://api.openweathermap.org/data/2.5/weather?zip=${userInput},us&units=imperial&appid=${apiKey}`;

	const response = await fetch(url);
	const data = await response.json();

	$("#name").html(data.name);
	$("#temp").html(data.main.temp);
	$("#humidity").html(data.main.humidity);
    $("#timezone").html(data.timezone);
    $("#rain").html(data.weather[0].main);
}

$("form").on("submit", getWeatherData);