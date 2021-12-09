import { MY_API_KEY_BASKETBALL } from "/public/js/config.js";


fetch("https://basketball-data.p.rapidapi.com/match/list/live?date=29%2F01%2F2021", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "basketball-data.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY_BASKETBALL
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);


    document.getElementById('awayBask').innerHTML = response[0].awayTeam.name;
	document.getElementById('awayBaskCurrent').innerHTML = response[0].awayTeam.score.current;

	document.getElementById('homeBask').innerHTML = response[0].homeTeam.name;
	document.getElementById('homeBaskCurrent').innerHTML = response[0].homeTeam.score.current;

    document.getElementById('awayBask1').innerHTML = response[1].awayTeam.name;
	document.getElementById('awayBaskCurrent1').innerHTML = response[1].awayTeam.score.current;

	document.getElementById('homeBask1').innerHTML = response[1].homeTeam.name;
	document.getElementById('homeBaskCurrent1').innerHTML = response[1].homeTeam.score.current;


})
.catch(err => {
	console.error(err);
});