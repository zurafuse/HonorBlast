$("svg").attr("class", "img-responsive");
$("svg").attr("viewBox", "0 0 600 600");
$("svg").attr("width", "100%");
$("svg").attr("height", "100%");

var deleteEntry = function(item){
	$("#control-content").empty();
	$("#control-content").append('<div class="container-fluid"><h2>Are you sure you want to delete this ' + item + ' from the database? This action cannot be undone. Enter username and password to confirm. Otherwise, leave this page.</h2></div>');
	document.getElementById("submitdelete").value = true;
};