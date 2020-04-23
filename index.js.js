const request = require("request");
var url = 'https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0'
request(url, (err, response, json) => {
    if (!err) {
        var obj = JSON.parse(json);
        for (var i = 0; i < 200; i++) {
            console.log((obj['chart'][i]['share']['subject'])+" "+(obj['chart'][i]['share']['href']))
        }
    }
})