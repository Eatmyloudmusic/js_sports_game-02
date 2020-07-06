const team1 = new Team("Discombobulated")  //initial creation.
const team2 = new Team("The EveryBuddies")



const audioGoal = new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Basketball%20Swish-4011-Free-Loops.com.mp3");

const audioBuzzer = new Audio("http://thebeautybrains.com/wp-content/uploads/podcast/soundfx/shotclockhorn.wav");
const team1ShotsTakenElement = document.getElementById("teamone-numshots")

const team1GoalsElement = document.getElementById("teamone-numgoals")
const team1Button = document.querySelector("#teamone-shoot-button");


team1Button.addEventListener("click", function () {  // function expression.
    console.log ("Team one shot taken");

    // team1.shots += 1
    // team1.shoots() // 'shoots' method.
    const shotsTaken = team1.shoots()

    //  Math.floor(Math.random() * 2 ) > 0 

    team1ShotsTakenElement.innerText = shotsTaken
    // document.getElementById("teamone-numshots").innerText++;
    if (team1.checkForGoal()) {
        // document.getElementById("teamone-numgoals").innerHTML++;
        team1GoalsElement.innerHTML = team1.getGoals();
        audioGoal.play();  // part of the 'view'.(user interface.)
    } 
})

const twoShots = document.querySelector("#teamtwo-shoot-button");
twoShots.addEventListener("click", function Random() {
    console.log ("Team two shot taken");
    document.getElementById("teamtwo-numshots").innerText++;
    if (Math.floor(Math.random() * 2 ) > 0 ) {
        document.getElementById("teamtwo-numgoals").innerText++;
        audioGoal.play();
    }
})

const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function () {
    console.log ("Game Reset");

    team1.reset()  // asking class.reset to play.
    team2.reset()
    
    audioBuzzer.play();
    document.getElementById("num-resets").innerText++;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})


