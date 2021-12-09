import { MY_API_KEY_FOOTBALL } from "/public/js/config.js";


fetch("https://football-data1.p.rapidapi.com/match/list/live?date=06%2F10%2F2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "football-data1.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY_FOOTBALL
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);

    document.getElementById('awayFoot').innerHTML = response[0].awayTeam.name;
	document.getElementById('awayFootCurrent').innerHTML = response[0].awayTeam.score.current;

	document.getElementById('homeFoot').innerHTML = response[0].homeTeam.name;
	document.getElementById('homeFootCurrent').innerHTML = response[0].homeTeam.score.current;


})
.catch(err => {
	console.error(err);
});