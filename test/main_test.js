// Test suite
// a suite is a collection of tests that tests similar functions or similar parts of the codebase

var expect = require('chai').expect;

describe('Mocha', ()=>{
    // Test spec (unit test)
    it('should run our tests using npm', ()=>{
        expect(true).to.be.ok;
    });
})