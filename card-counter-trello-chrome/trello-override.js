function updateBoardCardCounter(enabled) {
  const badgesContainer = document.querySelector('.board-header-btns');
  if (!badgesContainer) return;

  const boardBadgeCounter = badgesContainer.querySelector('.board-badge-counter');

  if (enabled) {
    const totalBoardCardsCount = document.querySelectorAll('[data-testid="list-card"]').length;
    if (!boardBadgeCounter) {
      badgesContainer.insertAdjacentHTML('afterbegin', `<div class="board-badge-counter">Total cards: ${totalBoardCardsCount}</div>`);
    } else {
      boardBadgeCounter.innerText = `Total cards: ${totalBoardCardsCount}`;
    }
  } else if (boardBadgeCounter) {
    boardBadgeCounter.remove();
  }
}

function updateListBadgeCounter(listElement, enabled) {
  const listHeader = listElement.querySelector('[data-testid="list-header"]');
  const listBadgeCounter = listElement.querySelector('.list-badge-counter');

  if (enabled) {
    const listCardCount = listElement.querySelectorAll('[data-testid="list-card"]').length;
    if (!listBadgeCounter) {
      listHeader.children[0].insertAdjacentHTML('afterend', `<div class="list-badge-counter">${listCardCount}</div>`);
    } else {
      listBadgeCounter.innerText = listCardCount;
    }
  } else if (listBadgeCounter) {
    listBadgeCounter.remove();
  }
}

function createCardIdentifier(trelloCardElement, enabled) {
  const cardIdentifierElement = trelloCardElement.querySelector('.card-identifier');

  if (enabled) {
    if (!cardIdentifierElement) {
      const cardIdentifier = trelloCardElement.dataset.cardId;
      trelloCardElement.insertAdjacentHTML('beforeend', `<div class="card-identifier">#${cardIdentifier.slice(-3)}</div>`);
      trelloCardElement.dataset.idDisplayed = '1';
    }
  } else if (cardIdentifierElement) {
    cardIdentifierElement.remove();
    delete trelloCardElement.dataset.idDisplayed;
  }
}

function updateCardIdentifiers(enabled) {
  document.querySelectorAll('[data-testid="trello-card"]').forEach((trelloCardElement) => {
    createCardIdentifier(trelloCardElement, enabled);
  });
}


function updateData() {
  chrome.storage.sync.get({
    boardCardCounterEnabled: true,
    listCardCounterEnabled: true,
    cardIdentifierEnabled: true
  }, function(data) {
    updateBoardCardCounter(data.boardCardCounterEnabled);
    document.querySelectorAll('[data-testid="list"]').forEach((listElement) => {
      updateListBadgeCounter(listElement, data.listCardCounterEnabled);
    });
    updateCardIdentifiers(data.cardIdentifierEnabled);
  });
}

setInterval(updateData, 1250);
