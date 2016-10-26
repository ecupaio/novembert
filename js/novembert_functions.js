$(document).ready(function(){
	//Countdown Clock
	var now = new Date();
    var electionDay = new Date("Tue Nov 8 2016 03:00:00 GMT-0400 (EDT)");
    var daysTil = (electionDay - now) / 1000 / 60 / 60 / 24;
    var eDay = Math.ceil(daysTil)
    console.log(daysTil);
    console.log(eDay);
    $('#days').text(eDay);
});