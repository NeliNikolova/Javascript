let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let mathEnforcer = require('./MathEnforcer').mathEnforcer;
describe('mathEnforcer',function () {
    describe('addFive',function () {
        it('with a  string  parameter should return undefined',function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined,'The function did not return a correct result!');
        })
        it('with a floating-point parameter should return correct result',function () {
            expect(mathEnforcer.addFive(3.14)).closeTo(8.14,0.01);
        })
        it('with a negative parameter should return correct result',function () {
            expect(mathEnforcer.addFive(-1)).to.equal(4,'The function did not return a correct result!');
        })
        it('with a positive parameter should return correct result',function () {
            expect(mathEnforcer.addFive(5)).to.equal(10,'The function did not return a correct result!');
        })
    })


    describe('subtractTen',function () {
        it('with a  string  parameter should return undefined',function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined,'The function did not return a correct result!');
        })
        it('with a floating-point parameter should return correct result',function () {
            expect(mathEnforcer.subtractTen(13.14)).closeTo(3.14,0.01);
        })
        it('with a negative parameter should return correct result',function () {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11,'The function did not return a correct result!');
        })
        it('with a positive parameter should return correct result',function () {
            expect(mathEnforcer.subtractTen(13)).to.equal(3,'The function did not return a correct result!');
        })
        it('with a positive parameter should return correct result',function () {
            expect(mathEnforcer.subtractTen(8)).to.equal(-2,'The function did not return a correct result!');
        })
    })

    describe('sum',function () {
        it('with a first string  parameter and number second parameter should return undefined',function () {
            expect(mathEnforcer.sum('pesho',13)).to.equal(undefined,'The function did not return a correct result!');
        })
        it('with a second string  parameter and number first parameter should return undefined',function () {
            expect(mathEnforcer.sum(13,'pesho')).to.equal(undefined,'The function did not return a correct result!');
        })
        it('with a second string  parameter and string first parameter should return undefined',function () {
            expect(mathEnforcer.sum('pesho','pesho')).to.equal(undefined,'The function did not return a correct result!');
        })
        it('with a floating-point first parameter should return correct result',function () {
            expect(mathEnforcer.sum(13.14,1)).closeTo(14.14,0.01);
        })
        it('with a floating-point second parameter should return correct result',function () {
            expect(mathEnforcer.sum(1,13.14)).closeTo(14.14,0.01);
        })
        it('with a floating-point  parameters should return correct result',function () {
            expect(mathEnforcer.sum(13.14,13.14)).closeTo(26.28,0.01);
        })
        it('with a first negative parameter should return correct result',function () {
            expect(mathEnforcer.sum(-1,12)).to.equal(11,'The function did not return a correct result!');
        })
        it('with a second negative parameter should return correct result',function () {
            expect(mathEnforcer.sum(12,-1)).to.equal(11,'The function did not return a correct result!');
        })
        it('with a  negative parameters should return correct result',function () {
            expect(mathEnforcer.sum(-12,-1)).to.equal(-13,'The function did not return a correct result!');
        })
        it('with a positive parameters should return correct result',function () {
            expect(mathEnforcer.sum(13,5)).to.equal(18,'The function did not return a correct result!');
        })
        it('with a positive parameter should return correct result',function () {
            expect(mathEnforcer.sum(8,7)).to.equal(15,'The function did not return a correct result!');
        })
    })

})