import { MY_API_KEY_SOCCER } from "/public/js/config.js";

fetch("https://soccer-data.p.rapidapi.com/match/list/live?date=29%2F01%2F2021", {
	"method": "GET",
	"headers": {
		'Content-Type': 'application/JSON',
		"x-rapidapi-host": "soccer-data.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY_SOCCER
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);

document.getElementById('awayteamName1').innerHTML = response[0].awayTeam.name;
document.getElementById('awaycurrentScore1').innerHTML = response[0].awayTeam.score.current;

document.getElementById('hometeamName1').innerHTML = response[0].homeTeam.name;
document.getElementById('homecurrentScore1').innerHTML = response[0].homeTeam.score.current;

document.getElementById('awayteamName2').innerHTML = response[1].awayTeam.name;
document.getElementById('awaycurrentScore2').innerHTML = response[1].awayTeam.score.current;

document.getElementById('hometeamName2').innerHTML = response[1].homeTeam.name;
document.getElementById('homecurrentScore2').innerHTML = response[1].homeTeam.score.current;

document.getElementById('awayteamName3').innerHTML = response[2].awayTeam.name;
document.getElementById('awaycurrentScore3').innerHTML = response[2].awayTeam.score.current;

document.getElementById('hometeamName3').innerHTML = response[2].homeTeam.name;
document.getElementById('homecurrentScore3').innerHTML = response[2].homeTeam.score.current;

document.getElementById('awayteamName4').innerHTML = response[3].awayTeam.name;
document.getElementById('awaycurrentScore4').innerHTML = response[3].awayTeam.score.current;

document.getElementById('hometeamName4').innerHTML = response[3].homeTeam.name;
document.getElementById('homecurrentScore4').innerHTML = response[3].homeTeam.score.current;

})
.catch(err => {
	console.error(err);
});




