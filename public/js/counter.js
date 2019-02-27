var updateCoins = function(){
	coincount = document.getElementById("coincount").value;
	document.getElementById("submitcoins").value = document.getElementById("coincount").value;	
};

var updateHealth = function(){
	heartcount = document.getElementById("heartcount").value;
	document.getElementById("submithp").value = document.getElementById("heartcount").value;	
};

var updateStars = function(){
	starcount = document.getElementById("starcount").value;
	document.getElementById("submitstars").value = document.getElementById("starcount").value;	
};

var updateXP = function(){
	xpcount = document.getElementById("xpcount").value;
	document.getElementById("submitxp").value = document.getElementById("xpcount").value;	
};

var updateName = function(){
	document.getElementById("submitname").value = document.getElementById("namefield").value;
};

var updateUser = function(){
	document.getElementById("submituser").value = document.getElementById("nicknamefield").value;
};

var updateRank = function(){
	document.getElementById("submitrank").value = document.getElementById("rankfield").value;	
};

//set defaults
	document.getElementById("submitcoins").value = "default";
	document.getElementById("submithp").value = "default";	
	document.getElementById("submitstars").value = "default";
	document.getElementById("submitxp").value = "default";
	document.getElementById("submitname").value = "default";
	document.getElementById("submituser").value = "default";
	document.getElementById("submitrank").value = "default";

//stars
var starcount = document.getElementById("starcount").value;
var starcountEl = document.getElementById("starcount");
function starplus(){
	starcount++;
	starcountEl.value = starcount;
	document.getElementById("submitstars").value = document.getElementById("starcount").value;
}
function starminus(){
	if (starcount > 0) {
		starcount--;
		starcountEl.value = starcount;
	}  
	document.getElementById("submitstars").value = document.getElementById("starcount").value;
}


//HP
var heartcount = document.getElementById("heartcount").value;
var heartcountEl = document.getElementById("heartcount");
function heartplus(){
	if (heartcount < 100) {
		heartcount++;
		heartcountEl.value = heartcount;
	}
	document.getElementById("submithp").value = document.getElementById("heartcount").value;
}
function heartminus(){
	if (heartcount > 0) {
		heartcount--;
		heartcountEl.value = heartcount;
	} 
	document.getElementById("submithp").value = document.getElementById("heartcount").value;	
}

//coins
var coincount = document.getElementById("coincount").value;
var coincountEl = document.getElementById("coincount");
function coinplus(){
	coincount++;
	coincountEl.value = coincount;
	document.getElementById("submitcoins").value = document.getElementById("coincount").value;
}
function coinminus(){
	if (coincount > 0) {
		coincount--;
		coincountEl.value = coincount;
	}
	document.getElementById("submitcoins").value = document.getElementById("coincount").value;
}

//XP
var xpcount = document.getElementById("xpcount").value;
var xpcountEl = document.getElementById("xpcount");
function xpplus(){
	xpcount--;
	xpcount++;
	xpcount+=10;
	xpcountEl.value = xpcount;
	document.getElementById("submitxp").value = document.getElementById("xpcount").value;
}
function xpminus(){
	if (xpcount > 0) {
		xpcount-=10;
		xpcountEl.value = xpcount;
	} 
	document.getElementById("submitxp").value = document.getElementById("xpcount").value;
}

