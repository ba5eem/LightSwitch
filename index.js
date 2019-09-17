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
      { label: 'DC', type: 'radio' },
      { label: 'OR', type: 'radio' },
      { label: 'Quit', click: () => { app.quit(); } }
    ])

  tray.setContextMenu(contextMenu)

  setInterval(() => {
    let obj = {
      HI: 'HI '+ moment().utcOffset("-10:00").format('h:mm'),
      MN: 'MN '+ moment().utcOffset("-05:00").format('h:mm'),
      DC: 'DC '+ moment().utcOffset("-04:00").format('h:mm'),
      OR: 'OR '+ moment().utcOffset("-07:00").format('h:mm')
    }
    let checked = contextMenu.items.filter(e => {
      return e.checked === true
    })
    tray.setTitle(obj[`${checked[0].label}`]);
  }, 1000)




})