$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#backhome','../index/index.html');
});