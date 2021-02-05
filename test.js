'use strict';

var arraypushrotate = require('./index.js');
var assert = require('assert');

describe('arraypushrotate', function () {
    var array = [];

    it('should push and not remove', function () {
        var res = arraypushrotate(array, 'test1', 2);
        assert.equal(res, null);
        assert.deepEqual(array, ['test1']);
    });

    it('should push and not remove', function () {
        var res = arraypushrotate(array, 'test2', 2);
        assert.equal(res, null);
        assert.deepEqual(array, ['test1', 'test2']);
    });

    it('should push and remove', function () {
        var res = arraypushrotate(array, 'test3', 2);
        assert.equal(res, 'test1');
        assert.deepEqual(array, ['test2', 'test3']);
    });
});
