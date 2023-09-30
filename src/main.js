const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  console.warn("The app is running");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.name = 'myWindowName';

  mainWindow.loadFile('./src/index.html');

  mainWindow.on('closed', function deleteWindow() {
    mainWindow = null;
    console.warn("The app was closed by the user");
  });
}

app.on('ready', createWindow);