var updateTrophyDes = function () {
    document.getElementById("submittrophydescription").value = document.getElementById("trophydesfield").value;
};

var updateTrophyAssigned = function () {
	document.getElementById("submittrophyassigned").value = $("#trophyassigned option:selected").val();
};

var updateAwardDetails = function() {
	document.getElementById("submitaward").value = document.getElementById("awarddetails").value;
};

//set defaults
document.getElementById("submittrophydescription").value = document.getElementById("trophydesfield").value;
document.getElementById("submittrophyassigned").value = "default";
document.getElementById("submitaward").value = "Trophy Awarded";