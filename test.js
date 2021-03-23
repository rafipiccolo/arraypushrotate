let arraypushrotate = require('./index.js');
let assert = require('assert');

describe('arraypushrotate', function () {
    let array = [];

    it('should push and not remove', function () {
        let res = arraypushrotate(array, 'test1', 2);
        assert.equal(res, null);
        assert.deepEqual(array, ['test1']);
    });

    it('should push and not remove', function () {
        let res = arraypushrotate(array, 'test2', 2);
        assert.equal(res, null);
        assert.deepEqual(array, ['test1', 'test2']);
    });

    it('should push and remove', function () {
        let res = arraypushrotate(array, 'test3', 2);
        assert.equal(res, 'test1');
        assert.deepEqual(array, ['test2', 'test3']);
    });
});
