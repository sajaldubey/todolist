$("ul").on("click", "li" ,function(){
	$(this).toggleClass("check");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var inputText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" +" "+ inputText + "</li>");
	}
});