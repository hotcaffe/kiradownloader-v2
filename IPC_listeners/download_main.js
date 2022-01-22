const {ipcMain} = require('electron')
const {dlAudio, dlVideo, mergeStreams, info} = require('../src/download_manager')

function downloadProgress(event, res){
    let totalSize = res.headers['content-length']
    let accumulatedSize = 0
    let progress = 0
    res.on('data', (data) => {
        accumulatedSize += data.length
        progress = ((accumulatedSize / totalSize) * 100).toFixed(2)
        console.log(progress)
        event.reply('download-progress', progress)
    })
}

module.exports = {
    downloaderIPC(win){
        ipcMain.on('download-content', async (event, data) => {
            const [videoITAG, audioITAG] = await info(data.url, data.quality)

            dlVideo(data.url, videoITAG, (res) => {
                downloadProgress(event, res)
            }, () => {
                dlAudio(data.url, audioITAG, () => {
                    event.reply('download-progress', 'Getting audio track')
                    mergeStreams(event)
                })
            })
        })
        ipcMain.on('download-video', (event, data) => {

        })
        ipcMain.on('download-audio', (event, data) => {

        })
    }
}



