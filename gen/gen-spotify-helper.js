var fs = require('fs');

var FILE_NAME = "spotify-helpers.js";
var NAMESPACE = "endpoint.";
var CODE = '';

var urlsData = {};

var API_DESCRIPTOR = [
    {method: 'GET', URL: '/v1/albums/{id}'},
    {method: 'GET', URL: '/v1/albums/{id}/tracks'},
    {method: 'GET', URL: '/v1/albums'},
    {method: 'GET', URL: '/v1/artists/{id}'},
    {method: 'GET', URL: '/v1/artists/{id}/albums'},
    {method: 'GET', URL: '/v1/artists/{id}/top-tracks'},
    {method: 'GET', URL: '/v1/artists/{id}/related-artists'},
    {method: 'GET', URL: '/v1/artists'},
    {method: 'GET', URL: '/v1/browse/categories/{category_id}'},
    {method: 'GET', URL: '/v1/browse/categories/{category_id}/playlists'},
    {method: 'GET', URL: '/v1/browse/categories'},
    {method: 'GET', URL: '/v1/browse/featured-playlists'},
    {method: 'GET', URL: '/v1/browse/new-releases'},
    {method: 'GET', URL: '/v1/recommendations'},
    {method: 'GET', URL: '/v1/me/following/contains'},
    {method: 'GET', URL: '/v1/playlists/{playlist_id}/followers/contains'},
    {method: 'PUT', URL: '/v1/me/following'},
    {method: 'PUT', URL: '/v1/playlists/{playlist_id}/followers'},
    {method: 'GET', URL: '/v1/me/following'},
    {method: 'DELETE', URL: '/v1/me/following'},
    {method: 'DELETE', URL: '/v1/playlists/{playlist_id}/followers'},
    {method: 'GET', URL: '/v1/me/albums/contains'},
    {method: 'GET', URL: '/v1/me/tracks/contains'},
    {method: 'GET', URL: '/v1/me/albums'},
    {method: 'GET', URL: '/v1/me/tracks'},
    {method: 'DELETE', URL: '/v1/me/albums'},
    {method: 'DELETE', URL: '/v1/me/tracks'},
    {method: 'PUT', URL: '/v1/me/albums'},
    {method: 'PUT', URL: '/v1/me/tracks'},
    {method: 'GET', URL: '/v1/me/top/{type}'},
    {method: 'GET', URL: '/v1/me/player/devices'},
    {method: 'GET', URL: '/v1/me/player'},
    {method: 'GET', URL: '/v1/me/player/recently-played'},
    {method: 'GET', URL: '/v1/me/player/currently-playing'},
    {method: 'PUT', URL: '/v1/me/player/pause'},
    {method: 'PUT', URL: '/v1/me/player/seek'},
    {method: 'PUT', URL: '/v1/me/player/repeat'},
    {method: 'PUT', URL: '/v1/me/player/volume'},
    {method: 'POST', URL: '/v1/me/player/next'},
    {method: 'POST', URL: '/v1/me/player/previous'},
    {method: 'PUT', URL: '/v1/me/player/play'},
    {method: 'PUT', URL: '/v1/me/player/shuffle'},
    {method: 'PUT', URL: '/v1/me/player'},
    {method: 'POST', URL: '/v1/playlists/{playlist_id}/tracks'},
    {method: 'PUT', URL: '/v1/playlists/{playlist_id}'},
    {method: 'POST', URL: '/v1/users/{user_id}/playlists'},
    {method: 'GET', URL: '/v1/me/playlists'},
    {method: 'GET', URL: '/v1/users/{user_id}/playlists'},
    {method: 'GET', URL: '/v1/playlists/{playlist_id}/images'},
    {method: 'GET', URL: '/v1/playlists/{playlist_id}'},
    {method: 'GET', URL: '/v1/playlists/{playlist_id}/tracks'},
    {method: 'DELETE', URL: '/v1/playlists/{playlist_id}/tracks'},
    {method: 'PUT', URL: '/v1/playlists/{playlist_id}/tracks'},
    {method: 'PUT', URL: '/v1/playlists/{playlist_id}/tracks'},
    {method: 'PUT', URL: '/v1/playlists/{playlist_id}/images'},
    {method: 'GET', URL: '/v1/search'},
    {method: 'GET', URL: '/v1/audio-analysis/{id}'},
    {method: 'GET', URL: '/v1/audio-features/{id}'},
    {method: 'GET', URL: '/v1/audio-features'},
    {method: 'GET', URL: '/v1/tracks'},
    {method: 'GET', URL: '/v1/tracks/{id}'},
    {method: 'GET', URL: '/v1/me'},
    {method: 'GET', URL: '/v1/users/{user_id}'},
];

var convertUrls = function (url) {

    var convertedUrl = url;

    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');

    return convertedUrl;
};

var camelCase = function (input) {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};

var analyzeParams = function (args) {
    var paramsSize = 0;
    var params = [];
    var pathParams = null;
    var argumentsObj = null;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            paramsSize++;
            params.push(args[i]);
        } else {
            if (!pathParams) {
                pathParams = args[i] ? args[i] : {};
            } else {
                argumentsObj = args[i];
            }
        }
    }
    return {
        paramsSize: paramsSize,
        argumentsObj: argumentsObj,
        params: params,
        pathParams: pathParams
    };
};

var getUrl = function (url, params, args, argsToPath) {

    if (!url) {
        return null;
    }

    if (params.length > 0) {
        var i = 0;
        url = url.replace(/:(\w+)/g, function () {
            return params[i++];
        });
    }

    if (args && argsToPath) {
        var tmp = Object.keys(args).map(function (k) {
            return encodeURIComponent(k) + '=' + args[k];
        }).join('&');

        if (url.split("\?").length > 1) {
            url += '&' + tmp;
        } else {
            url += '?' + tmp;
        }
    }

    return url;
};

var makeEndpointsHelpers = function () {


    for (var i in API_DESCRIPTOR) {

        var objDes = API_DESCRIPTOR[i];

        var numVars = 0;
        var fnNames = [];
        var newPath = '';
        var url = convertUrls(objDes.URL);

        var tmpUrl = url.split("\?")[0];
        var urlParts = tmpUrl.split('/');
        for (var p in urlParts) {
            if (urlParts[p] != "" && urlParts[p] != "v1") {
                if (urlParts[p].substr(0, 1) == ':') {
                    numVars++;
                    newPath += '/%s'
                } else {
                    fnNames.push(urlParts[p]);
                    newPath += '/' + urlParts[p];
                }
            }
        }

        var functionName = camelCase(fnNames.join('.'));
        functionName += "." + objDes.method.toLowerCase();
        if (!urlsData[functionName]) {
            urlsData[functionName] = {};
        }

        urlsData[functionName][numVars] = url;

    }

    var tmpObj = {};
    var tmpCode = '';
    var path = '';

    for (var i in urlsData) {

        path = '';
        var urlPart = i.split("\.");

        for (var j = 0; j < urlPart.length; j++) {

            path += (j == 0) ? urlPart[0] : '.' + urlPart[j];

            if (!tmpObj[path]) {
                tmpObj[path] = {};
                if (j < urlPart.length - 1) {
                    tmpCode += NAMESPACE + path + ' = {};\n';
                } else {

                    var method = urlPart[j];
                    var caller = method;

                    var fn = `function() {
\tvar obj = urlsData['${i}'];
\tvar params = analyzeParams(arguments);
\tvar url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
\treturn endpoint.${caller}(url);
};`;

                    tmpCode += NAMESPACE + path + ' = ' + fn + '\n\n';
                }
            }
        }
    }

    CODE += tmpCode;

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//    This file is generated with spotify/gen/gen-spotify-helpers.js    //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    var HELPERS = 'var analyzeParams = ' + analyzeParams.toString() + ';\n\n';
    HELPERS += 'var getUrl = ' + getUrl.toString() + ';\n\n';
    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\n' + HELPERS + '' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
