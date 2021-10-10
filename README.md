# spotify-api

#### A lightweight, minimalist library to use the Spotify API ####

The goal of this library is to create an easy-to-use, friendly and lightweight environment to use the Spotify API while creating your own server routes.

[![Only 2 Kb](https://badge-size.herokuapp.com/louislspn/wp-webpack-theme/master/bundler/webpack.dev.js)](https://github.com/Naereen/StrapDown.js/blob/master/bundler/webpack.dev.js)
[![GitHub version](https://badge.fury.io/gh/louislspn%2Fwp-webpack-theme.svg)](https://github.com/louislspn/wp-webpack-theme)
[![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/louislspn/wp-webpack-theme.svg)](https://GitHub.com/louislspn/wp-webpack-theme/graphs/contributors/)

## Table of Contents

1. [Introduction](#1-introduction)
2. [Installation](#2-installation)
3. [Configuration](#3-configuration)
4. [Run server](#4-run-server)
4. [Contributing](#5-contributing)
5. [Credits](#6-credits)

## 1. Introduction

This library allows you to make server-sided requests to the Spotify API using an authorization code and access token.
It will handle access token and refresh token generation for you.

Make sure to have all the requirements bellow before using this library : 

- node.js
- npm
- a Spotify API application ([documentation](https://developer.spotify.com/documentation/web-api/quick-start/))
- a Spotify authorization code ([documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow))

## 2. Installation

### Download

- Download the [ZIP folder of the project](https://github.com/louislspn/spotify-api/archive/refs/heads/main.zip).
- Unzip it
- Open a terminal in the folder
- [Install dependencies](#install-dependencies)

### Clone

If you prefere to clone the Github repository, go head and do so
```
cd [path/to/your/folder]
```
```
gh repo clone louislspn/spotify-api
```

### Install dependencies

In the freshly installed theme folder run the command below :
```
npm install
```

## 3. Configuration

To be able to make requests using this library, you will have to store your API informations (client_id, client_secret, redirect_uri and code).

Create a JSON file named ```creds.json``` in the ```utils``` folder

```json
{
  "client_id": "",
  "client_secret": "",
  "redirect_uri": "",
  "code": ""
}
```

Complete the JSON file with your informations. You can find them on your Spotify dashboard [here](https://developer.spotify.com/dashboard/applications).

The ```code```can be retrieved following [those steps](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow).

## 4. Run server

Once you have created and filled the JSON file, you can run your local server with the command ```npm run start```.

It will start an express server on ```localhost:4000``` where you can create routes and requests.

## 5. Contributing

This library is open source, feel free to pull request any modification or improvement. You can change the request function to match your need as the current function is a pretty basic one.

## 6. Credits

2021 © [LSPN.FR](https://lspn.fr)

