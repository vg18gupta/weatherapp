const OAuth = require('oauth');
const appInfo =  require('./credentials');
const header = {
    "X-Yahoo-App-Id": appInfo.appId
};
const request = new OAuth.OAuth(
    null,
    null,
    appInfo.cKey,
    appInfo.cSecret,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

module.exports = request;