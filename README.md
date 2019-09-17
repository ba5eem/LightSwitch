# LightSwitch

[![ELECTRON](https://img.shields.io/badge/ELECTRON--blue.svg)](https://electronjs.org/)

* Electron Menu Tray App - Simple timezone for remote workers

## Getting Started - Deploy to run permanently - MacOs

```js
npm install electron-packager --save-dev
npm install electron-packager -g
npm install --save-dev electron

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=images/icon.icns --prune=true --out=release-builds
```

* Once Complete - you now have a Mac App to see Mainland US timezones
