const electron = require('electron');
const fs = require('fs');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

function createWindow () {
    var args = process.argv.slice(2);
    if(args.length > 0){
        fs.readFile(args[0], 'utf8', function (err, data) {
            if (err){
                global.environmentConfiguration = undefined;
                return;
            }
            global.environmentConfiguration = JSON.parse(data);
        });
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL('file://'+__dirname+'/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);