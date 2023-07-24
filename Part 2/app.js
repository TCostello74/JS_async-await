async function drawCard(deckId) {
    let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let data = await response.json();
    let card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  }
  
  async function drawTwoCards() {
    let response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let data = await response.json();
    let deckId = data.deck_id;
  
    await drawCard(deckId);
    await drawCard(deckId);
  }
  
  async function createDeckAndDrawCard() {
    let response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let data = await response.json();
    let deckId = data.deck_id;
  
    document.getElementById('drawCard').addEventListener('click', () => drawCard(deckId));
  }
  
  drawTwoCards();
  createDeckAndDrawCard();
  