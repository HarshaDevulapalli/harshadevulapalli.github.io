var sliderValues = [10,10,10,10,10,10,10,10,10,10];
$(document).ready(function () {
	$(window).load(function(){
		  
		var sliders = $("#sliders .slider");
		var availableTotal = 100;

		sliders.each(function() {
			calculateResults();
			var init_value = parseInt($(this).text());

			$(this).siblings('.value').text(init_value);

			$(this).empty().slider({
				value: init_value,
				min: 0,
				max: availableTotal,
				range: "max",
				step: 2,
				animate: 0,
				slide: function(event, ui) {
					
					$(this).siblings('.value').text(ui.value);

					var total = 100;

					var currentSliderNo = parseInt(ui.handle.parentNode.parentNode.dataset.sliderno);
					var totalValueBeforeThisSlider = 0;
					sliders.not(this).each(function() {
						var currentValue = $(this).slider("option", "value");
						var sliderNo = parseInt(this.parentNode.dataset.sliderno);
						if (sliderNo < currentSliderNo) {
							totalValueBeforeThisSlider=totalValueBeforeThisSlider+currentValue;
						}
					});

					var delta = 100 - (ui.value + totalValueBeforeThisSlider);
					
					if (ui.value + totalValueBeforeThisSlider > 100) {
						var index = 0;
						sliders.each(function(){
							var t = $(this);
							t.slider('value',window.sliderValues[index]);
							t.siblings('.value').text(window.sliderValues[index]);
							index++;
						});
						ui.value = window.sliderValues[currentSliderNo-1];
						return false;
					} else {
						var new_value = Math.round( (delta/(10-currentSliderNo)) * 10 ) / 10;
						sliders.not(this).each(function() {
							var t = $(this);
							if (parseInt(this.parentNode.dataset.sliderno) > currentSliderNo){
								t.slider('value',new_value);
								t.siblings('.value').text(new_value)
							}
						});

						window.sliderValues = [parseFloat($("#p1").text()),
											   parseFloat($("#p2").text()),
											   parseFloat($("#p3").text()),
											   parseFloat($("#p4").text()),
											   parseFloat($("#p5").text()),
											   parseFloat($("#p6").text()),
											   parseFloat($("#p7").text()),
											   parseFloat($("#p8").text()),
											   parseFloat($("#p9").text()),
											   parseFloat($("#p9").text())];
					}
					
					calculateResults();
				}
			});
		});

	});
});
