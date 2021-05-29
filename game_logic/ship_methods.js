function checkForShip(player, coordinates){

    var shipPresent;

    for(const ship of player.ships){

        shipPresent = ship.locations.filter(function(actualCoordinate){
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1])
        })[0];

        if (shipPresent) return true
    }

    return false

}

function damageShip(ship, coordinates){
    ship.damage.push(coordinates)
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;