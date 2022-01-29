const { ipcMain } = require('electron')
const path = require('path')
const { dlAudio, dlVideo, mergeStreams, info, removeTempFiles } = require('../src/download_manager')

function downloadProgress(event, actualLength, totalLength) {
    const progress = parseInt((actualLength / totalLength) * 100)
    if (progress > 100 || !progress) {
        event.reply('download-progress', 'Getting audio track!') //used when the youtube didn't return the audio stream length.
    } else {
        event.reply('download-progress', progress)
    }
}



module.exports = {
    downloaderIPC(win) {
        let abortStream = false

        ipcMain.on('download-content', async (event, data) => {
            const [videoITAG, audioITAG, videoLength, audioLength] = await info(data.url, data.quality)

            const totalLength = videoLength + audioLength
            const userPath = data.path
            let actualLength = 0

            dlVideo(data.url, videoITAG, (size, stream) => {
                if (abortStream) {
                    stream.destroy()
                    abortStream = false
                    return 0
                }
                actualLength = actualLength + size
                downloadProgress(event, actualLength, totalLength)
            }, (aborted) => {
                if (aborted) {
                    event.reply('download-progress', 'Aborted')
                    removeTempFiles('all')
                } else {
                    dlAudio(data.url, audioITAG, (size, stream) => {
                        if (abortStream) {
                            stream.destroy()
                            abortStream = false
                            return 0
                        }
                        actualLength = actualLength + size
                        downloadProgress(event, actualLength, totalLength)
                    }, (aborted) => {
                        if (aborted) {
                            event.reply('download-progress', 'Aborted')
                            removeTempFiles('all')
                        } else {
                            event.reply('download-progress', 'Merging Files!')
                            mergeStreams(() => {
                                event.reply('download-progress', 'Removing temporary files!')
                                removeTempFiles('both', userPath)
                                event.reply('download-progress', 'Done!')
                            })
                        }
                    })
                }
            })
        })
        ipcMain.on('download-video', async (event, data) => {
            const [videoITAG, audioITAG, videoLength, audioLength] = await info(data.url, data.quality)
            const userPath = data.path
            let actualLength = 0

            dlVideo(data.url, videoITAG, (size, stream) => {
                if (abortStream) {
                    stream.destroy()
                    abortStream = false
                    return 0
                }
                actualLength = actualLength + size
                downloadProgress(event, actualLength, videoLength)
            }, (aborted) => {
                if (aborted) {
                    event.reply('download-progress', 'Aborted')
                    removeTempFiles('all')
                } else {
                    event.reply('download-progress', 'Removing temporary files!')
                    removeTempFiles('video', userPath)
                    event.reply('download-progress', 'Done!')
                }
            })
        })
        ipcMain.on('download-audio', async (event, data) => {
            const [videoITAG, audioITAG, videoLength, audioLength] = await info(data.url, data.quality)
            const userPath = data.path
            let actualLength = 0

            dlAudio(data.url, audioITAG, (size, stream) => {
                if (abortStream) {
                    stream.destroy()
                    abortStream = false
                    return 0
                }
                actualLength = actualLength + size
                downloadProgress(event, actualLength, audioLength)
            }, (aborted) => {
                if (aborted) {
                    event.reply('download-progress', 'Aborted')
                    removeTempFiles('all')
                } else {
                    event.reply('download-progress', 'Removing temporary files!')
                    removeTempFiles('audio', userPath)
                    event.reply('download-progress', 'Done!')
                }
            })
        })
        ipcMain.on('download-cancel', async (event, data) => {
            abortStream = true
        })
    }
}



