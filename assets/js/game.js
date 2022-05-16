var playerName = prompt("Name your bot!");
var playerHealth = 100;
var playerAttack = 10;
var playerCash = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Garp";
var enemyHealth = 50
var enemyAttack = 12

var fight = alert("Fight! To the DEATH")

// i have to take away playerAttack from enemyHealth somehow
// then log that it worked
// then subtract enemyAttack from playerHealth
// log again

console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "HP remaining");

enemyHealth = enemyHealth - playerAttack;

playerHealth = playerHealth - enemyAttack;

console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "HP remaining");

// health check


var stillStanding = playerName + " is still standing!"
if (playerHealth > 0 ) {
    console.log(stillStanding);
}

var dead = playerName + " is DEAD :("
var botAttacked = playerName + " still has " + playerHealth + "HP left. You can do this!"
if (playerName <= 0) {
    console.log(dead)
} else {
    alert(botAttacked)
}

var enemyFelled = playerName + " has defeated " + enemyName
var enemyStands = enemyName + " still has " + enemyHealth + "HP left. Keep going!"
if (enemyHealth <=0 ) {
    console.log(enemyFelled);
} else {
    alert(enemyStands)
}

var promptFight = prompt("Fight or Skip? Enter Fight or Skip to choose");

// bro this is a doozie

// if fight
var babiedOut = playerName + " has choses to skip the fight!"
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    //remove health
    enemyHealth = enemyHealth - playerAttack
    console.log(botAttacked);

    //enemy health
    if (enemyHealth <=0) {
        alert(enemyFelled);
    } else {
        alert(enemyStands);
    }

    //player health
    if (playerHealth <=0) {
        alert(dead)
    } else {
        alert(botAttacked);
    }

} else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    alert(babiedOut)
} else {
    alert("choose again!")
}


