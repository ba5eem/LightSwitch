# LightSwitch

[![ELECTRON](https://img.shields.io/badge/ELECTRON--blue.svg)](https://electronjs.org/) [![PhilipsHue](https://img.shields.io/badge/PhilipsHue-IOT-green.svg)](https://www2.meethue.com/en-us)

* Electron Menu Tray App - Simple on/off for your Philips Hue Light

## Demo UI Screenshot:
<img src="./img.png" width="450"/>

## Getting Started - Testing:

```js
git clone git@github.com:ba5eem/LightSwitch.git
cd LightSwitch
npm install -g electron
npm install
```

```js
touch .env
```

Following required in the env file:

```js
HUE_IP=http://192.168.?.?
HUE_USER=username
PORT=9000
```

```js
electron .
```

## Getting Started - Deploy to run permanently - MacOs

```js
npm install electron-packager --save-dev
npm install electron-packager -g
npm install --save-dev electron

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=images/icon.icns --prune=true --out=release-builds
```

* Once Complete - you now have a Mac App to control your lights - AWESOME!


* This APP was inspired from a recent AT&T IoT Hackathon.
* At first I wrote a cli to turn my light on/off, but I wanted to go a step further to make it more readily accessible.
