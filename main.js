const {app, BrowserWindow} = require('electron')

function createWindows(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        titleBarStyle: 'hidden',
        resizable: false,
        frame: false,
        
    })
    // win.loadFile('index.html')
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindows()
})