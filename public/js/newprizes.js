var updatePrizeName = function () {
    document.getElementById("submitprizename").value = document.getElementById("prizefield").value;
};

var updatePrizeDes = function () {
    document.getElementById("submitprizedescription").value = document.getElementById("prizedesfield").value;
};

var updateCost = function () {
    document.getElementById("submitcost").value = document.getElementById("costfield").value;
};


//set defaults
document.getElementById("submitprizename").value = document.getElementById("prizefield").value;
document.getElementById("submitprizedescription").value = document.getElementById("prizedesfield").value;
document.getElementById("submitcost").value = document.getElementById("costfield").value;