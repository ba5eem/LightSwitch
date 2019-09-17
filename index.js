const path = require('path')
const moment = require('moment');
const { app, Menu, Tray } = require('electron');

const iconOn = 'blank.png';
const iconPathOn = path.join(__dirname, iconOn);

let tray = null

app.on('ready', () => {

  tray = new Tray(iconPathOn)
  const contextMenu = Menu.buildFromTemplate([
      { label: 'HI', type: 'radio', checked: true },
      { label: 'MN', type: 'radio' },
    ])

  tray.setContextMenu(contextMenu)

  setInterval(() => {
    let HI = 'HI '+ moment().utcOffset("-10:00").format('h:mm');
    let MN = 'MN '+ moment().utcOffset("-4:00").format('h:mm');
    tray.setTitle(contextMenu.items[0].checked ? HI : MN);
  }, 1000)


})