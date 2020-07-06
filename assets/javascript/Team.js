class Team {  //this is your blueprint.
// 'constructor' is a special function name.

    constructor(name, sponsor, logo){
        // this = {}
        this.name = name   // creating a 'property' on 'this' instance. which we are assigning to the value 'name'.
        this.shots = 0     //"this instance", or 'THIS particular TEAM/state'
        this.goals = 0     //these are your 'instances' for each new team created.
        // this.randomShot = Math.floor(Math.random()* 10)
        
        
        // return this
    }

    shoots () {   // 'shoots' method. // setter. it 'sets' the shots.
        return this.shots += 1
    }

    getGoals() {
        return this.goals // returns 'goal's' value
    }

    scoresGoal () {
        return this.goals += 1

    }

    checkForGoal () {  // getter. it gets a thing.
        // 0.133333232256 * 2 === 0.26
        // 0.601 * 2 === 1.202
        const isGoal = (Math.random() * 2 ) > 1
        // Math.floor(Math.random() * 2 ) > 1 // math.floor makes it an integer between 0 and 1 
        if (isGoal){
            this.scoresGoal()  // calls for scoresGoal 'method'
        }
        return isGoal
    }

    reset () {
        this.shots = 0
        this.goals = 0
    }
// //---------+
// sayHi () {
//     console.log('hi!')
// }


}

// 'new' invokes the class 'constructor'
// const team1 = new Team("Discombobulated")  //initial creation.
// const team2 = new Team("The EveryBuddies")
// const team3 = new Team("FanTasty")

// team1.shots += 1
// team1.goals += 1

// team2.shots += 1
// team2.goals += 0

// team3.shots += 3
// team3.goals += 1
//////////////////////////////////////
// //------+
// //EXAMPLE USAGE
// const aTeam = new Team()
// aTeam.sayHi()