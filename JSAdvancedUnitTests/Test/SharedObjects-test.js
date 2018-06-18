let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $=require('jquery');
document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;
let sharedObject = require('./SharedObjects').sharedObject;
describe('shareObject',function () {
    describe('initial data',function () {
        it('initial name should be null',function () {
            expect(sharedObject.name).to.be.null;
        })
        it('initial income should be null',function () {
            expect(sharedObject.income).to.be.null;
        })
    })
    describe('changeName',function () {
        it('name should not be empty string', function () {
            sharedObject.name = "pesho"
            let newName = $('#name');
            newName = " ";
            expect(sharedObject.name).to.equal("pesho");
        })
        it('if name is not empty string', function () {
            sharedObject.changeName("nikola");
            expect(sharedObject.name).to.equal("nikola");
            expect($('#name').val()).to.equal('nikola');
        })
    })
})