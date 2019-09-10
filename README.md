# Description

Push data in an array and automatically remove first value when limit is reached

# Install

Go into a node project and type the following :

    $> npm install arraypushrotate

# Exemple

    var arraypushrotate = require('arraypushrotate');

    var array = [1, 2, 3, 4]
    arraypushrotate(array, 5, 4);

    console.log(array); // display : [2, 3, 4, 5]

# Run

    $> node test.js
