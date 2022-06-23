let myScrabbleTiles = [];

function addObjects(tile, score) {
    // console.log('In addObjects function');
    let tileObjects = {};
    tileObjects.tile = tile;
    tileObjects.score = score;

    myScrabbleTiles.push(tileObjects);
    return myScrabbleTiles;
} // End addObjects function

addObjects('N', 1); // This will add the values into the myScrabbleTiles array
addObjects('K', 5);
addObjects('Z', 10);
addObjects('X', 8);
addObjects('D', 2);
addObjects('A', 1);

// console.log(myScrabbleTiles);

function testAnswers(array) {
    let topScoreArray = [];
    let lowScoreArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].score > 5) {
            topScoreArray.push(array[i]);
        } else {
            lowScoreArray.push(array[i]);
        }
    }
    console.log('Top Scores:', topScoreArray);
    console.log('Low Scores:', lowScoreArray);
    let highScore = 29;
    // return highScore;
}
