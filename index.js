module.exports = function (array, data, maxsize) {
    var res = null;
    array.push(data);
    if (array.length > maxsize)
        res = array.shift();
    return res;
};
