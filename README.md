---
title: Spotify endpoint
keywords: 
last_updated: November 15, 2019
tags: []
summary: "Detailed description of the API of the Spotify endpoint."
---

## Overview

Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the 
Spotify Data Catalogue. 

Before integrating Spotify endpoint, you’ll need to register a new application under your 
[Spotify Dashboard](https://developer.spotify.com/dashboard/login).

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.spotify.get('/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37');
```

However you probably want to use the shortcuts:

```js
var res = app.endpoints.spotify.albums.get({ids: ['41MnTivkwTO3UUJ8DrqEJJ', '6JWc4iAiJ9FjyK0B59ABb4', '6UXCm6bOO4gFlDQZV5yL37']}); 
```

These shortcuts are based on the [Spotify REST API](https://developer.spotify.com/documentation/web-api/reference/).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

First you will need to setup an account in Spotify. Then you will be able to configure the endpoint you will
need to generate an application under your [Spotify Dashboard](https://developer.spotify.com/dashboard/login).
You can find more information about that in [Spotify App Settings](https://developer.spotify.com/documentation/general/guides/app-settings/).

### Client Id

This is the client ID, which is needed in order to generate the application token.

### Client Secret

This is the client secret, which is needed in order to generate the application token.





## Javascript API

The user token will be automatically attach in each request when is used Spotify endpoint. When use shortcuts or directly the API request.

```js
var res = app.endpoints.spotify.get('/v1/albums?ids=...');
```

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way. Sign request automatically.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the 
[Spotify API](https://developer.spotify.com/documentation/web-api/reference/) like this:

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint.

These shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/v1/albums` 
  it is converted to `app.endpoints.spotify.albums.get()`. As you can see the version is removed. 
- **If they have dashes, we should convert them to camel case**: `~/v1/me/player/recently-played'` is converted to 
  `app.endpoints.spotify.me.player.recentlyPlayed.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`. For example `GET ~/albums/:id` will become `app.endpoints.spotify.albums.get(id)`. 
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `post`
  - `PUT`: `put`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method.
- **Query parameters are sent in the last param as JSON**: if the method accepts more parameters or it allows to send a query parameters, 
   that will be sent in the last parameter in case of GET or DELETE. In case to method POST and PUT it is going to be before the body. 
   For example the method  `PUT ~/v1/playlists/{playlist_id}/tracks`  will become 
   `app.endpoints.spotify.playlists.tracks.put(playlistId, {...query parameters...}, {...params to update...})`
- **Body are sent in the last param as JSON**: if the method accepts more parameters or it allows to send a body, 
   that will be sent in the last parameter. For example the method `PUT ~/v1/playlists/{playlist_id}/tracks`  will become 
   `app.endpoints.spotify.playlists.tracks.put(playlistId, null, {...params to update...})`
  
Here are some URLs of the REST API and their corresponding shortcut:

```js
// GET ~/v1/search?q=tania%20bowra&type=artist
var res = app.endpoints.spotify.search.get({q: 'tania bowra', type: 'artist'});

// GET ~/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37
var res = app.endpoints.spotify.albums.get({ids: ['41MnTivkwTO3UUJ8DrqEJJ', '6JWc4iAiJ9FjyK0B59ABb4', '6UXCm6bOO4gFlDQZV5yL37']}); 

// PUT ~/v1/playlists/6Df19VKaShrdWrAnHinwVO
var res = app.endpoints.spotify.plalist.put(null, {name:"My New Playlist Title", public: true});
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.


