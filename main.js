const { app, BrowserWindow } = require('electron')
const {platform} = require("process");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        //minWidth: 360,
        maxWidth: 680,
        height: 500,
        //minHeight: 500,
        //backgroundColor: "#00ffffff",
        transparent: true,
        frame: false,
        vibrancy: "menu",
        titleBarStyle: 'hiddenInset',
        show: true,
        webPreferences: {
            nativeWindowOpen: true,
        },
        title: "CLINQ 2.0",
        icon: "icon.png",
    })

    win.loadFile('index.html')
}

let mainWindow = null;

app.whenReady().then(() => {
    mainWindow = createWindow();
});
