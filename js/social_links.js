$(document).ready(function (){
	var text = "#NovemBERT is upon us. Watch the countdown here:"; //Text of tweet
	var urlShare = "http://novmembert.com"; //URL to share on both Facebook and Twitter
	var hashtags = ["WPS","ARKvsFLA"]; //Hashtags array
	var fbImage = "http://novembert.com/min_images/novembert_card.png"; //Full URL for facebook share image
	$(".tweet-link").attr("href","https://twitter.com/intent/tweet?text="+ encodeURIComponent(text) +"&url="+ encodeURIComponent(urlShare) +"&hashtags="+ encodeURIComponent(hashtags) +""); //Tweet Link
	$(".fb-link").attr("href","javascript:share('"+ urlShare +"', 'Fb Share', 'Facebook share popup', '"+ fbImage +"', 520, 350)"); //Fb Link
});
function share(url, title, descr, image, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    var app_id = "1600385656930377";
    window.open('https://www.facebook.com/dialog/share?href=' + url + '&app_id=' + app_id, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}