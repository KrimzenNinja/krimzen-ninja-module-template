before(function() {
    const chai = require('chai');

    global.chai = chai;
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
});
