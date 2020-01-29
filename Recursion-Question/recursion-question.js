// Alice and Bob are playing a game using a bunch of coins.The players pick several coins out of the bunch in turn. Each time a player is allowed to pick 1, 2, or 4 coins, and the player that gets the last coin is the winner. Given the number of coins and the names of the two players, you are required to write a program to calculate all the possible ways that the game can play out.

const NUM_CAN_PICK = [1, 2, 4];

const coinGame = (numCoins, players) => {
	const currentPlayer = players[0];
	const possibilities = [];
	NUM_CAN_PICK.forEach(numCoinsToPick => {
		if (numCoins === numCoinsToPick) {
			possibilities.push([[numCoins, currentPlayer]]);
		}
	});
	return possibilities;
};

console.log(coinGame(5, ['alice', 'bob']));

/*
  [
    [
      [1, "alice"],
      [1, "bob"],
      [1, "alice"],
      [1, "bob"],
      [1, "alice"]
    ],
    [
      [1, "alice"],
      [1, "bob"],
      [1, "alice"],
      [1, "bob"],
    ],
    ...
  ]
*/
