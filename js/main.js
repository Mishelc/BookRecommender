$(document).ready(function(){
	/*
	var options = {

		list: {
			match: {
				enabled: true
			},
			maxNumberOfElements: 6,

			showAnimation: {
				type: "slide",
				time: 300
			},
			hideAnimation: {
				type: "slide",
				time: 300
			}
		},

		theme: "round"

	};

	$("#round").easyAutocomplete(options);
	*/
 	/*
	$.getJSON("top-books.json", function(data){
		var html = '';
		
		
		$.each(data, function(key, value){
			html += '<div class="sugerencia">'+
						'<img src= '+ value.imagen+'>'+
						'<div class="libro">'+value.title+'</div>'+
						'<div class="autor">'+value.autor+'</div>'+
					'</div>';
		});
		$(".top-content").append(html);
	});
	*/
 /*
	$.ajax({
	    url: 'file:///C:/Users/Mishel/Desktop/BookRecommender/top-books.json',
	    type:"POST",
	    dataType: 'json',
	      error: function(){
	        console.log('JSON FAILED for data');
	      },
	    success:function(results){
	  
	      var html = '';

	      	results.forEach(function(element) {
	      		html += '<div class="sugerencia">'+
						'<img src= '+ element.imagen+'>'+
						'<div class="libro">'+element.title+'</div>'+
						'<div class="autor">'+element.autor+'</div>'+
					'</div>';
	      	}); // end of forEach
	      	$(".top-content").append(html);
	    }  // end of success fn
	   }); // end of Ajax call
	   */
});