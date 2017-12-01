$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};
	clickEventHref('#gocookmune','../cookmune/cookmune.html');
	clickEventHref('#gocreatcircle','../creatcircle/creatcircle.html');
	clickEventHref('#golovefoods','../lovefoods/lovefoods.html');
	clickEventHref('#gouserinfor','../userinfor/userinfor.html');
	clickEventHref('#touserinfor','../userinfor/userinfor.html');

	clickEventHref('#home','../index/index.html');
	clickEventHref('#eat','../cookcircle/cookcircle.html');
	clickEventHref('#insvideo','../interestvideo/interestvideo.html');
});