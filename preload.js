const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
    send: {
        closeWindow(message){
            ipcRenderer.send('close-window', message)
        },
        minimizeWindow(message){
            ipcRenderer.send('minimize-window', message)
        },
        openDirectory(message){
            ipcRenderer.send('open-directory-search', message)
        },
        openFile(message){
            ipcRenderer.send('open-file-search', message)
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
    format: {
        formatMedia(data){
            ipcRenderer.send('format-content', data)
        },
        formatCancel(data){
            ipcRenderer.send('format-cancel', data)
        }
    },
    on: {
        waitDownloadProgress(event, callback){
            ipcRenderer.on('download-progress', callback)
        },
        waitFormatProgress(event, callback){
            ipcRenderer.on('format-progress', callback)
        },
        waitSearchPath(event, callback){
            ipcRenderer.on('folder-path', callback)
        },
        waitFilePath(event, callback){
            ipcRenderer.on('file-path', callback)
        },
        waitUpdate(event, callback){
            ipcRenderer.on('update', callback)
        },
        finishUpdating(event, callback){
            ipcRenderer.on('finish-updating', callback)
        }
    }
})