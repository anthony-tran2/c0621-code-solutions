console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cardsPerHand) {
  if (typeof players !== 'object' || (players.length > 4 || players.length < 2)) {
    console.log('Invalid amount of players');
  } else if (typeof cardsPerHand !== 'number' || (cardsPerHand > Math.round(52 / players.length) || cardsPerHand < 1)) {
    console.log('Invalid amount of cards');
  } else {
    var people = [];
    for (var i = 0; i < players.length; i++) {
      var newPlayer = {
        name: players[i],
        hand: []
      };
      people.push(newPlayer);
    }
    var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var deckOfCards = [];
    var counter = 0;
    for (var cards = 0; cards < ranks.length; cards++) {
      var newCard = {
        rank: ranks[cards],
        suits: suits[counter]
      };
      deckOfCards.push(newCard);
      if (counter === 3) {
        counter = 0;
      } else {
        cards--;
        counter++;
      }
    }
    var shuffledDeck = [];
    while (deckOfCards.length !== 0) {
      var randomCard = Math.floor(Math.random() * (deckOfCards.length - 1));
      shuffledDeck.push(deckOfCards[randomCard]);
      deckOfCards.splice(randomCard, 1);
    }
  }
}

cardGame(['Kyle', 'Man'], 2);
