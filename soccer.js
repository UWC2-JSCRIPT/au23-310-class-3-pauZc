
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
const getTotalPoints = function(scoreBoard){
  const scores = scoreBoard.split('')
  let total = 0
  scores.forEach(score => {
    switch (score) {
      case 'w':
        total += RESULT_VALUES.w
        break;
      case 'd':
        total += RESULT_VALUES.d
        break;
    }
  });
  return total;
}


// Check getTotalPoints
console.log(`Your total score is ${getTotalPoints('wwdl')}`); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = (... teams) =>{
  teams.forEach((team)=>{
    team.total = getTotalPoints(team.results)
    console.log(`Team ${team.name}: ${team.total}`)
  })
  teams.sort((a, b) => b.total - a.total)
  console.log(...teams)
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' },
  { name: 'Chicago Fire', results: 'wlww' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4