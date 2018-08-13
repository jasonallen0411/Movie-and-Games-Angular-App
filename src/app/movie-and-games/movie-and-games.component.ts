import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-movie-and-games',
  templateUrl: './movie-and-games.component.html',
  styleUrls: ['./movie-and-games.component.css']
})
export class MovieAndGamesComponent implements OnInit {

	onOff = false;

	toggleOnOff(){
		this.onOff = !this.onOff;
	}

	moviePoster:string = "";
	movieTitle:string = "";
	movieYear:string = "";
	movieRated:string = "";
	movieReleased:string = "";
	movieRuntime:string = "";
	movieGenre:string = "";
	movieDirector:string = "";
	movieActors:string = "";

	gameCover:string = "";
	gameTitle:string = "";
	gameDate:string = "";
	gameStoryline:string = "";





	searchMoviesAndGames(M){
	let url = "http://www.omdbapi.com/?apikey=7ad73765&t=" + M;
	this.http.get(url).toPromise().then( data => {
		this.moviePoster = data.Poster;
		this.movieTitle = data.Title;
		this.movieYear = data.Year;
		this.movieRated = data.Rated;
		this.movieReleased = data.Released;
		this.movieRuntime = data.Runtime;
		this.movieGenre = data.Genre;
		this.movieDirector = data.Director;
		this.movieActors = data.Actors;
		this.searchGames(M);
		});	

	}

	searchGames(G){
	let headers = new HttpHeaders()
	.set('Accept', 'application/json')
    .set('user-key', 'af22551cc9cf9b6043350d9251ed1487')
    .set('Access-Control-Allow-Origin', '*');

	let url = 'https://api-endpoint.igdb.com/games/?search=' + G + '&fields=name,first_release_date,storyline,cover';
	this.http.get(url,{ headers: headers }).toPromise().then( result => {
		this.gameCover = result[0].cover.url
		this.gameTitle = result[0].name;
		let d = new Date(result[0].first_release_date);
			d = d.toLocaleDateString();
		this.gameDate = d;
		this.gameStoryline = result[0].storyline;
		});
	}
	

	constructor(private http: HttpClient) { }

	ngOnInit() {
  }

}




// --Game App Stuff --

// $("#gameSearchInput").keypress(function(e) {
//     var keycode = (e.keyCode ? e.keyCode : e.which);
//     if (keycode == '13') {
//       $.ajax({
// 		type: 'GET',
// 		url: 'https://api-endpoint.igdb.com/games/?search=' + $("#gameSearchInput").val() + '&fields=name,first_release_date,storyline,cover',
// 		headers: {
// 			'user-key': 'af22551cc9cf9b6043350d9251ed1487',
// 			'Accept': 'application/json'
// 				}
// 		}).done(function(response){
// 			let d = new Date(response[0].first_release_date);
// 			d = d.toLocaleDateString();
// 			console.log(response);
// 			$("#gameArea").html("");
// 			$("#gameArea").append('<div class="gameStuff">' + '<img height="300px" width="300px" src="https:' + response[0].cover.url + '"><div class="gameThings"<br> <span>Game Title: </span>' + response[0].name + '<br> <span>Original Release Date: </span>' + d + '<br> <span>Storyline: </span>' + response[0].storyline + '</div></div>');
// 			$("#movieArea").html("");
// 		});
// 		let tl = new TimelineMax();
// 	tl.from($("#gameArea"), 2, {opacity: 0});
// 	tl.to($("#gameArea"), 2, {opacity: 1});
//     }
// });





