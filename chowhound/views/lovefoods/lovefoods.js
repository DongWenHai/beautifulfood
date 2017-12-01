$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#backuser','../user/user.html');
	clickEventHref('#home','../index/index.html');
	clickEventHref('#eat','../cookcircle/cookcircle.html');
	clickEventHref('#insvideo','../cookcircle/cookcircle.html');
});