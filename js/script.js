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
    $("#highTemp").html(data.main.temp_max);
    $("#minTemp").html(data.main.temp_min);
    $("#rain").html(data.weather[0].main);

    if (data.weather[0].main === "Clear") {
        console.log("happy face")
        return showImage;
    }else {
        console.log("sad face");
    }
}

$("form").on("submit", getWeatherData);

function showImage() {
    const img = document.createElement('div');
    document.body.appendChild(img)
    img.innerHTML = "<img src='sun_jpg_jpg-3.jpeg></img>";
}