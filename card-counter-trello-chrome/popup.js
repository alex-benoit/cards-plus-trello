document.addEventListener('DOMContentLoaded', function() {
  const boardCardCounterToggle = document.getElementById('boardCardCounterToggle');
  const listCardCounterToggle = document.getElementById('listCardCounterToggle');
  const cardIdentifierToggle = document.getElementById('cardIdentifierToggle');

  chrome.storage.sync.get({
    boardCardCounterEnabled: true,
    listCardCounterEnabled: true,
    cardIdentifierEnabled: true
  }, function(data) {
    boardCardCounterToggle.checked = data.boardCardCounterEnabled;
    listCardCounterToggle.checked = data.listCardCounterEnabled;
    cardIdentifierToggle.checked = data.cardIdentifierEnabled;
  });

  boardCardCounterToggle.addEventListener('change', () => chrome.storage.sync.set({ 'boardCardCounterEnabled': boardCardCounterToggle.checked }));
  listCardCounterToggle.addEventListener('change', () => chrome.storage.sync.set({ 'listCardCounterEnabled': listCardCounterToggle.checked }));
  cardIdentifierToggle.addEventListener('change', () => chrome.storage.sync.set({ 'cardIdentifierEnabled': cardIdentifierToggle.checked }));
});
