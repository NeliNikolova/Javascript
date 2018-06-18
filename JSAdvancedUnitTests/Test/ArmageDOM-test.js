let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $=require('jquery');
let nuke = require('./ArmageDOM').nuke;
describe('nuke',function(){
    beforeEach(function () {
    document.body.innerHTML = `<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>`
})
    it('test invalid and valid selector ',function(){
        let firstSelector=$('.nested');
        let secondSelector=2;
        let oldValue=$('#target').html();
        nuke(firstSelector,secondSelector);
        expect($('#target').html()).to.be.equal(oldValue,"Invalid function!")
    })
    it('should not remove with duplicate selectors ',function(){
        let firstSelector=$('.nested');
        let oldValue=$('#target').html();
        nuke(firstSelector,firstSelector);
        expect($('#target').html()).to.be.equal(oldValue,"Invalid function!")
    })
    it('should not remove with valid selectors ',function(){
        let firstSelector=$('.nested')
        let secondSelector=$('.inside')
        let oldValue=$('#target').html();
        nuke(firstSelector,secondSelector);
        expect($('#target').html()).to.be.equal(oldValue,"Invalid function!")
    })
    it('should remove with valid selectors ',function(){
        let firstSelector=$('.nested')
        let secondSelector=$('.target')
        let oldValue=$('#target').html();
        nuke(firstSelector,secondSelector);
        expect($('#target').html()).to.not.equal(oldValue,"Invalid function!")
    })

})



