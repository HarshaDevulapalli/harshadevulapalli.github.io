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
					
					// Update display to current value
					$(this).siblings('.value').text(ui.value);

					// Get current total
					var total = 0;

					sliders.not(this).each(function() {
						total += $(this).slider("option", "value");
					});
					
					total += ui.value;

					var delta = availableTotal - total;
					
					// Update each slider
					sliders.not(this).each(function() {
						var t = $(this),
							value = t.slider("option", "value");

						var new_value = value + (delta/9);
						
						if (new_value < 0 || ui.value == 100) 
							new_value = 0;
						if (new_value > 100) 
							new_value = 100;

						t.siblings('.value').text(new_value);
						t.slider('value', new_value);
					});
					calculateResults();
				}
			});
		});

	});
});
