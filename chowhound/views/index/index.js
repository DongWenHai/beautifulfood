$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};

	clickEventHref('#login',"../login/login.html");
	clickEventHref("#register",'../register/register.html');
	clickEventHref('#eat','../cookcircle/cookcircle.html');
	clickEventHref('#city','../city/city.html');
	clickEventHref('#insvideo','../interestvideo/interestvideo.html');
	clickEventHref('#user','../user/user.html');
	clickEventHref('#gocookbook','../cookbook/cookbook.html');
	clickEventHref('#gocookdetail','../cookdetail/cookdetail.html');
	clickEventHref('#search','../searchfoods/searchfoods.html');
	
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true, 
	    autoplay: 2000,
	    autoplayDisableOnInteraction : false,
	    //分页器
	    pagination: '.swiper-pagination',
	   
	})

	
});