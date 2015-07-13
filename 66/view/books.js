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

	function bind () {
		$('.js-books').on('click', '.js-del', deleteBookEvent);
	}

	function deleteBookEvent () {
		var me = this;
		
		require(['collections/books'], function (getBooks) {
			var book = getBooks().get($(me).closest('li').data('id'))

		    book.destroy({
		      success: function () {
		        renderBooks(getBooks().toJSON())
		      }
		    });	
		})
	}

	bind();


  // // DELETE BOOK
  // $('.js-books').on('click', '.js-del', function () {
  //   var book = books.get($(this).closest('li').data('id'))

  //   book.destroy({
  //     // success: function () {
  //     // },
  //     error: function () {
  //       loadData(books.toJSON())
  //     }
  //   });
  // });


  // // ADD BOOK
  // $('.js-form').on('submit', function (event) {
  //   event.preventDefault();

  //   var $form = $(this),
  //       data = {};

  //   _.each($form.serializeArray(), function (item) {
  //     data[item.name] = item.value;
  //   });

  //   books.add(data).save();
  // });

  // // editing
  // $('.js-books').on('click', '.js-save', function () {
  //   var book = books.get($(this).closest('li').data('id'))

  //   book.set('title', $(this).prev().val());

  //   book.save();
  // });


	return {
		renderBooks: renderBooks
	}
});