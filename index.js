require('dotenv').config()
const {app, Tray} = require('electron');
const axios = require('axios');
const path = require('path')
const url = `${process.env.HUE_IP}/api/${process.env.HUE_USER}/lights/2/state`;

let trayIcon;

app.on('ready', function() {
  
  if(process.platform === 'darwin') app.dock.hide();

  const iconOn = 'images/on.png';
  const iconPathOn = path.join(__dirname, iconOn);
  

  trayIcon = new Tray(iconPathOn);

  trayIcon.on('click', (event) => {
      axios.put(url, {"on":true})
      .then(res => {
        console.log('Light ON: ',res.status);
      }).catch(err => {
        console.log('error', err);
      }) 
  });

  trayIcon.on('double-click', (event) => {
      axios.put(url, {"on":false})
      .then(res => {
        console.log('Light OFF: ',res.status);
      }).catch(err => {
        console.log('error', err);
      }) 
  });
});