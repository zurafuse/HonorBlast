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

var completeQuest = function () {
    document.getElementById("questcomplete").value = "true";
    document.getElementById("submitquestprizes").value = document.getElementById("questprizefield").value;
    document.getElementById("submitquestdescription").value = document.getElementById("questdesfield").value;
    document.getElementById("submitquestname").value = document.getElementById("questfield").value;
    $("#control-content").empty();
    $("#control-content").append('<div class="container-fluid"><h2>Are you sure you want to mark this quest as complete? Enter username and password to confirm. Otherwise, leave this page.</h2></div>');
};



//set defaults
document.getElementById("submitquestname").value = "default";
document.getElementById("submitquestdescription").value = "default";
document.getElementById("submitquestprizes").value = "default";