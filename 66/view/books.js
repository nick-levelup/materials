define([
		'handlebars',
		'jquery',

		'templates/books'
	], function (
		Handlebars,
		$,

		booksTpl
	) {
	
	function renderBooks (data) {
		$('.js-books').html(Handlebars.compile(booksTpl)(data));
	}

	return {
		renderBooks: renderBooks
	}
});