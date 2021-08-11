console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cardsPerHand) {
  if (typeof players !== 'object' || (players.length > 52 || players.length < 2)) {
    console.log('Invalid amount of players');
  } else if (typeof cardsPerHand !== 'number' || (cardsPerHand > Math.round(52 / players.length) || cardsPerHand < 1)) {
    console.log('Invalid amount of cards');
  } else {
    var people = {};
    for (var i = 0; i < players.length; i++) {
      people[players[i]] = {};
    }
    var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    var values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var deckOfCards = [];
    var counter = 0;
    for (var cards = 0; cards < ranks.length; cards++) {
      var newCard = {
        rank: ranks[cards],
        suits: suits[counter],
        value: values[cards]
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
    var winningScore = 0;
    var winner = null;
    var tie = [];
    for (var person in people) {
      people[person].hand = shuffledDeck.slice(0, cardsPerHand);
      shuffledDeck.splice(0, cardsPerHand);
      people[person].score = 0;
      for (var d = 0; d < people[person].hand.length; d++) {
        people[person].score += people[person].hand[d].value;
      }
      if (people[person].score > winningScore) {
        winningScore = people[person].score;
        winner = person;
        tie = [];
        tie.push(person);
      } else if (people[person].score === winningScore) {
        tie.push(person);
      }
    }
    if (tie.length > 1) {
      var tieStatement = 'There was a tie between';
      for (var tiedPerson = 0; tiedPerson < tie.length; tiedPerson++) {
        tieStatement += ' ' + tie[tiedPerson];
        if (tiedPerson + 2 === tie.length && tie.length > 2) {
          tieStatement += ', and';
        } else if (tiedPerson + 2 === tie.length && tie.length === 2) {
          tieStatement += ' and';
        } else if (tiedPerson + 1 !== tie.length) {
          tieStatement += ',';
        }
      }
      tieStatement += '!';
      console.log(tieStatement);
      cardGame(tie, cardsPerHand);
    } else {
      console.log(`The winner is ${winner}!`);
    }
  }
}

cardGame(['Kyle', 'Chad', 'Tyler', 'Lord Farquad'], 2);
cardGame(['Anthony', 'Justin'], 4);
cardGame(['Timmy', 'Bob', 'Joe'], 8);
cardGame([], 2);
cardGame(['Kyle', 'Chad'], 0);
cardGame(['Kyle', 'Chad', 'Tyler', 'Lord Farquad'], 17);
