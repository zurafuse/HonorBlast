var updateQuestName = function () {
    document.getElementById("submitquestname").value = document.getElementById("questfield").value;
};

var updateQuestDes = function () {
    document.getElementById("submitquestdescription").value = document.getElementById("questdesfield").value;
};

var updateQuestAssigned = function () {
    document.getElementById("studentid").value = $("#questassigned option:selected").val();
};

var updateQuestPrizes = function () {
    document.getElementById("submitquestprizes").value = document.getElementById("questprizefield").value;
};

//set defaults
document.getElementById("submitquestname").value = document.getElementById("questfield").value;
document.getElementById("submitquestdescription").value = document.getElementById("questdesfield").value;
document.getElementById("submitquestprizes").value = document.getElementById("questprizefield").value;
document.getElementById("studentid").value = $("#questassigned option:selected").val();