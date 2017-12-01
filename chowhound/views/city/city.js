$(function(){
	function clickEventHref(id,addhref){
		$(id).click(function(){
			window.location.href = addhref;
		});
	};

	clickEventHref('#goindex',"../index/index.html");


	var cityPicker = new HzwCityPicker({
        data: data,
        target: 'cityChoice',
        valType: 'k-v',
        hideCityInput: {
            name: 'city',
            id: 'city'
        },
        hideProvinceInput: {
            name: 'province',
            id: 'province'
        },
        callback:function(){
            $('#address').text($('#cityChoice').val());
        }
    });

    cityPicker.init();

    $('#cityChoice').blur(function(){
        $('#address').text($('#cityChoice').val());
    });
	
});