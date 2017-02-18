var numberCards = $('.list-card-title').length
$('.board-header-btns.mod-left').append('<a id="total-cards" class="board-header-btn" href="#" title="Total Cards">Total Cards: ' + numberCards + '</a>')

$('#total-cards').click(function() {
  var numberCards = $('.list-card-title').length
  $(this).text('Total Cards: ' + numberCards)
});
