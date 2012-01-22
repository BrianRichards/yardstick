
var Yardstick = {
	options: {
		fidelity: "sketch",
		labelLocation: "top"
	},
	
	initialize: function(options){
		$.extend(Yardstick.options, options);
		
		Yardstick.resolveFidelity();
		
		Yardstick.setupLabels();
		
		if (Yardstick.options.fidelity === "sketch"){
			//wrap input controls for border image
			Yardstick.wrapInputControls();
		}
	},
	
	resolveFidelity: function(){
		var _body = $("body");
		if (_body.hasClass("ysFidelity_sketch")){
			Yardstick.options.fidelity = "sketch";
		} else if (_body.hasClass("ysFidelity_lofi")){
			Yardstick.options.fidelity = "lofi";
		} else {
			//TODO: Change to override
			_body.addClass("ysFidelity_" + Yardstick.options.fidelity);
		}
	},
	
	setupLabels: function(){
		$("input[data-ysLabel], select[data-ysLabel], textarea[data-ysLabel]").each(function(idx){
			var labelLoc = "ysLabel" + Yardstick.options.labelLocation;
			if ($(this).data("yslabelloc") !== undefined ){
				labelLoc = "ysLabel" + $(this).data("yslabelloc");
			}
			var labelText = $(this).data("yslabel");
			var inputId = $(this).attr("id");
			$(this).wrap("<div class='ysFormField' />").parent("div").prepend("<label for='"+inputId+"' class='"+labelLoc+"'>"+labelText+"</label>");
			
		});
	},
	
	wrapInputControls: function(){
		$("input[type='text'],input[type='search']").each(function(idx){
			if (!$(this).hasClass("ysNoStyle")){
				$(this).wrap("<span class='ysBorderedInput' />");
			}
		});
	}
	
};



