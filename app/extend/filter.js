'use strict';

const moment = require('moment');
const NUM_1000 = 1000;
const NUM_2 = 2;

exports.relativeTime = (time) => {
    moment(new Date(time * NUM_1000)).fromNow();
};

exports.domain = (url) => url && url.split('/')[NUM_2];
