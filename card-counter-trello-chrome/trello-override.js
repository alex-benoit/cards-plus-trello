function calculateCardCount() {
  var numberCards = $('.list-card').size();
  if ($('#total-cards').size() > 0) {
    $('#total-cards-count').text(numberCards);
  } else {
    $('.board-header-btns.mod-left').append('<div id="total-cards">Total Cards: <span id="total-cards-count">' + numberCards + '</span></div>');
  }
}

setInterval(calculateCardCount, 800);
