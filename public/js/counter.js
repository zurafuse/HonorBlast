var updateFields = function(){
	starcount = document.getElementById("starcount").value;
	heartcount = document.getElementById("heartcount").value;
	coincount = document.getElementById("coincount").value;
	xpcount = document.getElementById("xpcount").value;
	
	document.getElementById("submitcoins").value = document.getElementById("coincount").value;;
	document.getElementById("submitxp").value = document.getElementById("xpcount").value;;
	document.getElementById("submithp").value = document.getElementById("heartcount").value;;
	document.getElementById("submitstars").value = document.getElementById("starcount").value;;	
	
};

//stars
var starcount = document.getElementById("starcount").value;
var starcountEl = document.getElementById("starcount");
function starplus(){
	starcount++;
	starcountEl.value = starcount;
}
function starminus(){
	if (starcount > 0) {
		starcount--;
		starcountEl.value = starcount;
	}  
}


//HP
var heartcount = document.getElementById("heartcount").value;
var heartcountEl = document.getElementById("heartcount");
function heartplus(){
	if (heartcount < 100) {
		heartcount++;
		heartcountEl.value = heartcount;
	}
}
function heartminus(){
	if (heartcount > 0) {
		heartcount--;
		heartcountEl.value = heartcount;
	}  
}

//coins
var coincount = document.getElementById("coincount").value;
var coincountEl = document.getElementById("coincount");
function coinplus(){
	coincount++;
	coincountEl.value = coincount;
}
function coinminus(){
	if (coincount > 0) {
		coincount--;
		coincountEl.value = coincount;
	}
}

//XP
var xpcount = document.getElementById("xpcount").value;
var xpcountEl = document.getElementById("xpcount");
function xpplus(){
	xpcount--;
	xpcount++;
	xpcount+=10;
	xpcountEl.value = xpcount;
}
function xpminus(){
	if (xpcount > 0) {
		xpcount-=10;
		xpcountEl.value = xpcount;
	}  
}

