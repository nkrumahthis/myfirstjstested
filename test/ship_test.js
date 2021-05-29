var expect = require('chai').expect;

// describe("name of function being tested", function(){// the test})

describe('checkForShip', function(){
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    // it('desired behaviour', function that wraps specs, expectations and logic together)
    it('should correctly report no ship at a given player-s coordinate', function(){
        let player = {
            ships:[
                {
                    locations:[[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9,9])).to.be.false;
    })

    it('should correctly report a ship located at coordinate', function(){
        let player = {
            ships:[
                {
                    locations:[[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [0,0])).to.be.true;
    })
});