// Q2. In this program, receive the points scored by the XXX team in the football league matches
// as input is array of points XXX along with the number of wins of this season in the output.
// XXX plays 30 games in the Premier League,
// so you will be given the points of this team in 30 items of a array.

 //For each game, the XXX team scored zero points, one or three points.
 // A loss results in zero points, a draw results in one point,
 // and a win results in three points for this team.

// Input sample: 
// [3,3,3,3,3,1,0,0,0,0,1,3,1,3,1,3,1,0,0,1,3,3,1,0,0,1,3,3,1,0];
// output 
// 45

//-------------Global variables-----------------
// //inputs
// const seasonScores = [3,3,3,3,3,1,0,0,0,0,1,3,1,3,1,3,1,0,0,1,3,3,1,0,0,1,3,3,1,0]; 

// //outputs
// let seasonStats = [];
// //-------------Sequence-----------------

// seasonStats = getSeasonStats(seasonScores);
// console.log(seasonStats);

//-------------Functions-----------------

function getSeasonStats(scores){

    const stats = [0,0];

    for (const val of scores) {

        if(val == 0){// skip if 0

            continue;
        }

        if(val == 3){// get wins
    
            stats[1]++; 
    
        }

        stats[0] += val; 

    }
    return stats;
}