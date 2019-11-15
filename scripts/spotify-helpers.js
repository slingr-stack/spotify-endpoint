//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is generated with spotify/gen/gen-spotify-helpers.js    //
//                                                                      //
//            Fri Nov 15 2019 16:33:15 GMT-0300 (-03)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"albums.get": {
		"0": "/v1/albums",
		"1": "/v1/albums/:id"
	},
	"albums.tracks.get": {
		"1": "/v1/albums/:id/tracks"
	},
	"artists.get": {
		"0": "/v1/artists",
		"1": "/v1/artists/:id"
	},
	"artists.albums.get": {
		"1": "/v1/artists/:id/albums"
	},
	"artists.topTracks.get": {
		"1": "/v1/artists/:id/top-tracks"
	},
	"artists.relatedArtists.get": {
		"1": "/v1/artists/:id/related-artists"
	},
	"browse.categories.get": {
		"0": "/v1/browse/categories",
		"1": "/v1/browse/categories/:category_id"
	},
	"browse.categories.playlists.get": {
		"1": "/v1/browse/categories/:category_id/playlists"
	},
	"browse.featuredPlaylists.get": {
		"0": "/v1/browse/featured-playlists"
	},
	"browse.newReleases.get": {
		"0": "/v1/browse/new-releases"
	},
	"recommendations.get": {
		"0": "/v1/recommendations"
	},
	"me.following.contains.get": {
		"0": "/v1/me/following/contains"
	},
	"playlists.followers.contains.get": {
		"1": "/v1/playlists/:playlist_id/followers/contains"
	},
	"me.following.put": {
		"0": "/v1/me/following"
	},
	"playlists.followers.put": {
		"1": "/v1/playlists/:playlist_id/followers"
	},
	"me.following.get": {
		"0": "/v1/me/following"
	},
	"me.following.delete": {
		"0": "/v1/me/following"
	},
	"playlists.followers.delete": {
		"1": "/v1/playlists/:playlist_id/followers"
	},
	"me.albums.contains.get": {
		"0": "/v1/me/albums/contains"
	},
	"me.tracks.contains.get": {
		"0": "/v1/me/tracks/contains"
	},
	"me.albums.get": {
		"0": "/v1/me/albums"
	},
	"me.tracks.get": {
		"0": "/v1/me/tracks"
	},
	"me.albums.delete": {
		"0": "/v1/me/albums"
	},
	"me.tracks.delete": {
		"0": "/v1/me/tracks"
	},
	"me.albums.put": {
		"0": "/v1/me/albums"
	},
	"me.tracks.put": {
		"0": "/v1/me/tracks"
	},
	"me.top.get": {
		"1": "/v1/me/top/:type"
	},
	"me.player.devices.get": {
		"0": "/v1/me/player/devices"
	},
	"me.player.get": {
		"0": "/v1/me/player"
	},
	"me.player.recentlyPlayed.get": {
		"0": "/v1/me/player/recently-played"
	},
	"me.player.currentlyPlaying.get": {
		"0": "/v1/me/player/currently-playing"
	},
	"me.player.pause.put": {
		"0": "/v1/me/player/pause"
	},
	"me.player.seek.put": {
		"0": "/v1/me/player/seek"
	},
	"me.player.repeat.put": {
		"0": "/v1/me/player/repeat"
	},
	"me.player.volume.put": {
		"0": "/v1/me/player/volume"
	},
	"me.player.next.post": {
		"0": "/v1/me/player/next"
	},
	"me.player.previous.post": {
		"0": "/v1/me/player/previous"
	},
	"me.player.play.put": {
		"0": "/v1/me/player/play"
	},
	"me.player.shuffle.put": {
		"0": "/v1/me/player/shuffle"
	},
	"me.player.put": {
		"0": "/v1/me/player"
	},
	"playlists.tracks.post": {
		"1": "/v1/playlists/:playlist_id/tracks"
	},
	"playlists.put": {
		"1": "/v1/playlists/:playlist_id"
	},
	"users.playlists.post": {
		"1": "/v1/users/:user_id/playlists"
	},
	"me.playlists.get": {
		"0": "/v1/me/playlists"
	},
	"users.playlists.get": {
		"1": "/v1/users/:user_id/playlists"
	},
	"playlists.images.get": {
		"1": "/v1/playlists/:playlist_id/images"
	},
	"playlists.get": {
		"1": "/v1/playlists/:playlist_id"
	},
	"playlists.tracks.get": {
		"1": "/v1/playlists/:playlist_id/tracks"
	},
	"playlists.tracks.delete": {
		"1": "/v1/playlists/:playlist_id/tracks"
	},
	"playlists.tracks.put": {
		"1": "/v1/playlists/:playlist_id/tracks"
	},
	"playlists.images.put": {
		"1": "/v1/playlists/:playlist_id/images"
	},
	"search.get": {
		"0": "/v1/search"
	},
	"audioAnalysis.get": {
		"1": "/v1/audio-analysis/:id"
	},
	"audioFeatures.get": {
		"0": "/v1/audio-features",
		"1": "/v1/audio-features/:id"
	},
	"tracks.get": {
		"0": "/v1/tracks",
		"1": "/v1/tracks/:id"
	},
	"me.get": {
		"0": "/v1/me"
	},
	"users.get": {
		"1": "/v1/users/:user_id"
	}
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

endpoint.albums = {};
endpoint.albums.get = function() {
	var obj = urlsData['albums.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.albums.tracks = {};
endpoint.albums.tracks.get = function() {
	var obj = urlsData['albums.tracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.artists = {};
endpoint.artists.get = function() {
	var obj = urlsData['artists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.artists.albums = {};
endpoint.artists.albums.get = function() {
	var obj = urlsData['artists.albums.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.artists.topTracks = {};
endpoint.artists.topTracks.get = function() {
	var obj = urlsData['artists.topTracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.artists.relatedArtists = {};
endpoint.artists.relatedArtists.get = function() {
	var obj = urlsData['artists.relatedArtists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.browse = {};
endpoint.browse.categories = {};
endpoint.browse.categories.get = function() {
	var obj = urlsData['browse.categories.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.browse.categories.playlists = {};
endpoint.browse.categories.playlists.get = function() {
	var obj = urlsData['browse.categories.playlists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.browse.featuredPlaylists = {};
endpoint.browse.featuredPlaylists.get = function() {
	var obj = urlsData['browse.featuredPlaylists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.browse.newReleases = {};
endpoint.browse.newReleases.get = function() {
	var obj = urlsData['browse.newReleases.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.recommendations = {};
endpoint.recommendations.get = function() {
	var obj = urlsData['recommendations.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me = {};
endpoint.me.following = {};
endpoint.me.following.contains = {};
endpoint.me.following.contains.get = function() {
	var obj = urlsData['me.following.contains.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.playlists = {};
endpoint.playlists.followers = {};
endpoint.playlists.followers.contains = {};
endpoint.playlists.followers.contains.get = function() {
	var obj = urlsData['playlists.followers.contains.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.following.put = function() {
	var obj = urlsData['me.following.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.playlists.followers.put = function() {
	var obj = urlsData['playlists.followers.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.following.get = function() {
	var obj = urlsData['me.following.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.following.delete = function() {
	var obj = urlsData['me.following.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.delete(url);
};

endpoint.playlists.followers.delete = function() {
	var obj = urlsData['playlists.followers.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.delete(url);
};

endpoint.me.albums = {};
endpoint.me.albums.contains = {};
endpoint.me.albums.contains.get = function() {
	var obj = urlsData['me.albums.contains.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.tracks = {};
endpoint.me.tracks.contains = {};
endpoint.me.tracks.contains.get = function() {
	var obj = urlsData['me.tracks.contains.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.albums.get = function() {
	var obj = urlsData['me.albums.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.tracks.get = function() {
	var obj = urlsData['me.tracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.albums.delete = function() {
	var obj = urlsData['me.albums.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.delete(url);
};

endpoint.me.tracks.delete = function() {
	var obj = urlsData['me.tracks.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.delete(url);
};

endpoint.me.albums.put = function() {
	var obj = urlsData['me.albums.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.tracks.put = function() {
	var obj = urlsData['me.tracks.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.top = {};
endpoint.me.top.get = function() {
	var obj = urlsData['me.top.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.player = {};
endpoint.me.player.devices = {};
endpoint.me.player.devices.get = function() {
	var obj = urlsData['me.player.devices.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.player.get = function() {
	var obj = urlsData['me.player.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.player.recentlyPlayed = {};
endpoint.me.player.recentlyPlayed.get = function() {
	var obj = urlsData['me.player.recentlyPlayed.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.player.currentlyPlaying = {};
endpoint.me.player.currentlyPlaying.get = function() {
	var obj = urlsData['me.player.currentlyPlaying.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.player.pause = {};
endpoint.me.player.pause.put = function() {
	var obj = urlsData['me.player.pause.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.seek = {};
endpoint.me.player.seek.put = function() {
	var obj = urlsData['me.player.seek.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.repeat = {};
endpoint.me.player.repeat.put = function() {
	var obj = urlsData['me.player.repeat.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.volume = {};
endpoint.me.player.volume.put = function() {
	var obj = urlsData['me.player.volume.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.next = {};
endpoint.me.player.next.post = function() {
	var obj = urlsData['me.player.next.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.post(url);
};

endpoint.me.player.previous = {};
endpoint.me.player.previous.post = function() {
	var obj = urlsData['me.player.previous.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.post(url);
};

endpoint.me.player.play = {};
endpoint.me.player.play.put = function() {
	var obj = urlsData['me.player.play.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.shuffle = {};
endpoint.me.player.shuffle.put = function() {
	var obj = urlsData['me.player.shuffle.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.me.player.put = function() {
	var obj = urlsData['me.player.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.playlists.tracks = {};
endpoint.playlists.tracks.post = function() {
	var obj = urlsData['playlists.tracks.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.post(url);
};

endpoint.playlists.put = function() {
	var obj = urlsData['playlists.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.users = {};
endpoint.users.playlists = {};
endpoint.users.playlists.post = function() {
	var obj = urlsData['users.playlists.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.post(url);
};

endpoint.me.playlists = {};
endpoint.me.playlists.get = function() {
	var obj = urlsData['me.playlists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.users.playlists.get = function() {
	var obj = urlsData['users.playlists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.playlists.images = {};
endpoint.playlists.images.get = function() {
	var obj = urlsData['playlists.images.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.playlists.get = function() {
	var obj = urlsData['playlists.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.playlists.tracks.get = function() {
	var obj = urlsData['playlists.tracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.playlists.tracks.delete = function() {
	var obj = urlsData['playlists.tracks.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.delete(url);
};

endpoint.playlists.tracks.put = function() {
	var obj = urlsData['playlists.tracks.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.playlists.images.put = function() {
	var obj = urlsData['playlists.images.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.put(url);
};

endpoint.search = {};
endpoint.search.get = function() {
	var obj = urlsData['search.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.audioAnalysis = {};
endpoint.audioAnalysis.get = function() {
	var obj = urlsData['audioAnalysis.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.audioFeatures = {};
endpoint.audioFeatures.get = function() {
	var obj = urlsData['audioFeatures.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.tracks = {};
endpoint.tracks.get = function() {
	var obj = urlsData['tracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.me.get = function() {
	var obj = urlsData['me.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

endpoint.users.get = function() {
	var obj = urlsData['users.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.pathParams, true);
	return endpoint.get(url);
};

