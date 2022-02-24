const {app, BrowserWindow, ipcMain} = require('electron')
const {autoUpdater} = require('electron-updater')
const path = require('path')
const {windowIPC} = require('./IPC_listeners/frame_main')
const {downloaderIPC} = require('./IPC_listeners/download_main')
const {formaterIPC} = require('./IPC_listeners/formater_main')

function createUpdateWindow(){
    const updateWin = new BrowserWindow({
        width: 250,
        height: 250,
        backgroundColor: '#888888',
        title: 'Checking for new updates!',
        icon: 'icon.png',
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
            devTools: !app.isPackaged
        }

    })

    updateWin.once('ready-to-show', () => {
        updateWin.webContents.send('update', 'Checking for updates!')
        autoUpdater.checkForUpdatesAndNotify()
    })
    updateWin.loadFile('kiradownloader-front/build/index.html')

    autoUpdater.setFeedURL({
        provider: 'github',
        repo: 'kiradownloader-v2',
        owner: 'hotcaffe',
        private: false
    })

    autoUpdater.on('update-not-available', () => {
        createWindow()
        updateWin.close()
    })

    autoUpdater.on('download-progress', (progress) => {
        updateWin.webContents.send('update', `Downloading new version: [${progress.transferred} B / ${progress.total} B] - ${(progress.percent).toFixed(2)}%`)
    })
    
    autoUpdater.on('update-downloaded', () => {
        updateWin.webContents.send('update', 'Finished downloading!')
        createWindow()
        autoUpdater.quitAndInstall()
    })

    autoUpdater.on('error', (err) => {
        updateWin.webContents.send('update', `Error during the update: ${err}`)
    })
}

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#888888',
        title: 'kiraDownloader v2',
        titleBarStyle: 'hidden',
        icon: 'icon.png',
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
            devTools: !app.isPackaged
        }
        
    })

    win.once('ready-to-show', () => {
        win.webContents.send('finish-updating')
    })

    app.isPackaged ? win.loadFile('kiradownloader-front/build/index.html') : win.loadURL('http://localhost:3000');

    windowIPC(win)
    downloaderIPC(win)
    formaterIPC(win)
}

app.disableHardwareAcceleration()


app.whenReady().then(() => {
    app.isPackaged ? createUpdateWindow() : createWindow()
})
