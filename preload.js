const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
    send: {
        closeWindow(message){
            ipcRenderer.send('close-window', message)
        },
        minimizeWindow(message){
            ipcRenderer.send('minimize-window', message)
        }
    },
    download: {
        downloadContent(data){
            ipcRenderer.send('download-content', data)
        }
    },
    on: {
        waitProgress(event, callback){
            ipcRenderer.on('download-progress', callback)
        }
    }
})