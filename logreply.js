var http = require('http'), urlParser = require('url'), util = require('util');

function openUrl(requestURL) {
    var printText = 'Opening ' + requestURL.host + requestURL.path;
    var req = http.request(requestURL, function (res) {
        if (res.statusCode == 301 || res.statusCode == 302) {
            printText += '...redirected';
            util.puts(printText);
            return openUrl(urlParser.parse(res.headers.location));
        }

        if(res.statusCode === 200){
            printText += '...ok'
        } else {
            printText += '...' + res.statusCode
        }

        util.puts(printText);

        return res;
    });

    req.on('error', function (e) {
        printText += '...' + e.message;
        util.error(printText);
    });

    req.end();
}

var requestURLs= [
    {host: 'photos.independent.ie', path: '/json/galleryapi/1.0/getGallery?gallery_id=1361350048624&api_image_width=135'},
    {host: 'reshad.galleries.newscred.com', path: '/galleries'}
];

requestURLs.map(function(requestURL){
    openUrl(requestURL);
});
