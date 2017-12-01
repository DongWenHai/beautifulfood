$(function(){

	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#home','../index/index.html');
	clickEventHref('#user','../user/user.html');
	clickEventHref('#eat','../cookcircle/cookcircle.html');
	clickEventHref('#gosearchcircle','../searchcircle/searchcircle.html');
});