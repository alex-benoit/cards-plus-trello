function checkOnBoard() {
  if (window.location.href.includes('trello.com/b/')) {
    return true
  } else {
    return false
  }
}

function calculateCardCount() {
  if (checkOnBoard()) {
    var numberCards = document.querySelectorAll('.list-card').length;
    var counterElement = document.getElementById('total-cards')
    if (counterElement == null) {
      document.querySelector('.board-header-btns.mod-left').insertAdjacentHTML('beforeend', '<div id="total-cards">Total Cards: <span id="total-cards-count">' + numberCards + '</span></div>')
    } else {
      document.getElementById('total-cards-count').innerText = numberCards;
    }
  }
}

setInterval(calculateCardCount, 750);
