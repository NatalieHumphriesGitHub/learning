const team = {
    _players: [
      {firstName: 'Kai', lastName: 'Humphries', age: 38},
      {firstName: 'Natalie', lastName: 'Humphries', age: 36},
      {firstName: 'Elliot', lastName: 'Steel', age: 25}
      ],
    _games: [
      {opponent: 'Rangers', teamPoints: 25, opponentPoints: 21},
      {opponent: 'Newcastle', teamPoints: 30, opponentPoints: 9},
      {opponent: 'Arsenal', teamPoints: 36, opponentPoints: 16},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (newFirstName, newLastName, NewAge) {
      //using a new variable to create an object that we then use to add to the array
      let player = { 
  //matching the arguments to the properties of the object
  firstName: newFirstName, lastName: newLastName, age: NewAge 
      };
      //we use the players get method instead of the properties to get the player array and then push the player variable to the array
      this.players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76)
  //printing to the console using the get method (it doesn't need brackets because it's not a function)
  console.log(team.players);
  
  team.addGame('Titans', 100, 98)
  
  console.log(team.games)