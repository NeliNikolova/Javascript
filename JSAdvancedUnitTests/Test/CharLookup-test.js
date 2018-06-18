let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let lookupChar = require('./CharLookup').lookupChar;


describe('lookupChar',function () {
    it('with a non string first parameter should return undefined',function () {
        expect(lookupChar(13,0)).to.equal(undefined,'The function did not return a correct result!');
    })
    it('with a non number second parameter should return undefined',function () {
        expect(lookupChar("stamat","pesho")).to.equal(undefined,'The function did not return a correct result!');
    })
    it('with a floating-point number second parameter should return undefined',function () {
        expect(lookupChar("pesho",3.14)).to.equal(undefined,'The function did not return a correct result!');
    })
    it('with a incorrect second parameter should return undefined',function () {
        expect(lookupChar("pesho",13)).to.equal("Incorrect index",'The function did not return a correct result!');
    })
    it('with a negative second parameter should return undefined',function () {
        expect(lookupChar("pesho",-1)).to.equal("Incorrect index",'The function did not return a correct result!');
    })
    it('with index equal to string length should return undefined',function () {
        expect(lookupChar("pesho",5)).to.equal("Incorrect index",'The function did not return a correct result!');
    })
    it('with correct data will return correct result',function () {
        expect(lookupChar("pesho",0)).to.equal("p",'The function did not return a correct result!');
    })
    it('with correct data will return correct result',function () {
        expect(lookupChar("pesho",3)).to.equal("h",'The function did not return a correct result!');
    })
})