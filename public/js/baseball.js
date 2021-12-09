import { MY_API_KEY_BASEBALL } from "/public/js/config.js";


fetch("https://baseball-data.p.rapidapi.com/match/list/live?date=02%2F11%2F2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "baseball-data.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY_BASEBALL
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);


	document.getElementById('awayTeam').innerHTML = response[0].awayTeam.name;
	document.getElementById('awayCurrent').innerHTML = response[0].awayTeam.score.current;

	document.getElementById('homeTeam').innerHTML = response[0].homeTeam.name;
	document.getElementById('homeCurrent').innerHTML = response[0].homeTeam.score.current;

    
})
.catch(err => {
	console.error(err);
});