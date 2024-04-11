$(window).on('load', function(){
	$("#loading").delay(1500).fadeOut('slow'); // ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#loading_box").delay(1200).fadeOut('slow', function(){
		$('.js-fade').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).delay(3300).addClass('scroll');
			}
		});
	}); // ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
});

$(window).scroll(function (){
	$('.js-fade').each(function(){
		var pos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > pos - windowHeight + 100){
			$(this).addClass('scroll');
		}
	});
});
