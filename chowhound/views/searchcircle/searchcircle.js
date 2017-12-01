$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#backcookcircle','../cookcircle/cookcircle.html');
	clickEventHref('#gocreatpost','../creatpost/creatpost.html');
});