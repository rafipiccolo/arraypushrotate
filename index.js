'use strict';

module.exports = function (array, data, maxsize) {
    array.push(data);

    if (array.length > maxsize) return array.shift();

    return null;
};
