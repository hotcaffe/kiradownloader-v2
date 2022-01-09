const {app, BrowserWindow} = require('electron')

function createWindows(){
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    // win.loadFile('index.html')
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindows()
})