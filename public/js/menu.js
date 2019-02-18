var menu = false;
//Toggle the Menu Button

var showMenu = function(){
	menu = true;
	$(".nav-bar-mobile").css("display", "block");
	$(".menu-icon-img").attr("src", "images/hide-menu-icon.png");	
};

var hideMenu = function(){
	menu = false;
	$(".nav-bar-mobile").css("display", "none");	
	$(".menu-icon-img").attr("src", "images/menu-icon.png");	
}

$(".menu-icon").click("click", function(){
	if (menu == false)
	{
		showMenu();
	}
	else
	{
		hideMenu();
	}
});

