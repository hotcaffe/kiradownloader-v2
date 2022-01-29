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
        },
        downloadVideo(data){
            ipcRenderer.send('download-video', data)
        },
        downloadAudio(data){
            ipcRenderer.send('download-audio', data)
        },
        downloadCancel(data){
            ipcRenderer.send('download-cancel', data)
        }
    },
    on: {
        waitProgress(event, callback){
            ipcRenderer.on('download-progress', callback)
        }
    }
})