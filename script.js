function pageLoad()
{
	getTime();
	focusSearch();
	fillOutStats();
	var timer = setInterval(updateClock, 1000);
}
function getTime()
{
	var d = new Date(),
		h = (d.getHours()<10?'0':'') + d.getHours(),
		m = (d.getMinutes()<10?'0':'') + d.getMinutes();
	var pmString = " AM";
	if(h > 11) { h = h - 12; pmString = " PM"; }
	if(h == 0) { h = 12 };
	document.getElementById("time").innerHTML = h + ':' + m + pmString;
	document.getElementById("statbox").innerHTML = "Page served at <span class='accented'>" + h + ":" + m + pmString + "</span>";
}
function focusSearch()
{
	document.getElementById("search").focus();
}
function checkEnter(e)
{
	if(e.keyCode == 13)
	{
		var searchBox = document.getElementById("search");
		var searchValue = searchBox.value;
		var encodedSearch = encodeURI(searchValue);
		var ddgUrl = "https://www.google.com/search?q=" + encodedSearch;
		window.location.href = ddgUrl;
	}
}
function fillOutStats()
{
	var stats = document.getElementById("statbox");
//	stats.innerHTML += " from <span class='accented'>" + window.location.href.split(":///")[1].split("index.html")[0].replace("%20", " ") + "</span>";
}
function updateClock()
{
	var d = new Date(),
		h = (d.getHours()<10?'0':'') + d.getHours(),
		m = (d.getMinutes()<10?'0':'') + d.getMinutes();
	var pmString = " AM";
	if(h > 11) { h = h - 12; pmString = " PM"; }
	if(h == 0) { h = 12 };
	document.getElementById("time").innerHTML = h + ":" + m + pmString;
}
