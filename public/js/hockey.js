import { MY_API_KEY_HOCKEY } from "/public/js/config.js";

fetch("https://ice-hockey-data.p.rapidapi.com/match/list/live?date=12%2F01%2F2021", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ice-hockey-data.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY_HOCKEY
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);

    document.getElementById('awayHoc').innerHTML = response[0].awayTeam.name;
	document.getElementById('awayHocCurrent').innerHTML = response[0].awayTeam.score.current;

	document.getElementById('homeHoc').innerHTML = response[0].homeTeam.name;
	document.getElementById('homeHocCurrent').innerHTML = response[0].homeTeam.score.current;

    document.getElementById('awayHoc1').innerHTML = response[0].awayTeam.name;
	document.getElementById('awayHocCurrent1').innerHTML = response[0].awayTeam.score.current;

	document.getElementById('homeHoc1').innerHTML = response[0].homeTeam.name;
	document.getElementById('homeHocCurrent1').innerHTML = response[0].homeTeam.score.current;


})
.catch(err => {
	console.error(err);
});