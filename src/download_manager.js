const {app} = require('electron')
const cp = require('child_process')
const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const appPath = app.getAppPath()

const video = path.join(appPath, 'src', 'output', 'video.mp4').replace('app.asar', 'app.asar.unpacked')
const audio = path.join(appPath, 'src', 'output', 'audio.mp3').replace('app.asar', 'app.asar.unpacked')
const output = path.join(appPath, 'src', 'output', 'output.mp4').replace('app.asar', 'app.asar.unpacked')
const ffmpeg = path.join(appPath, 'node_modules', 'ffmpeg-static').replace('app.asar', 'app.asar.unpacked')


module.exports = {
    async dlVideo(url, itag, progressCb, callback) {
        const readable = ytdl(url, {
            quality: itag
        })
        readable.on('data', (data) => {
            if (progressCb) {
                progressCb(data.length, readable)
            }
        })
        const writable = readable.pipe(fs.createWriteStream(video)).on('drain', () => {
            if (readable.destroyed) {
                writable.destroy()
                readable.end()
                writable.end()
            }
        }).on('finish', () => {
            if (callback) {
                if (writable.destroyed) {
                    callback('aborted')
                } else {
                    callback()
                }
            }
        })
    },
    async dlAudio(url, itag, progressCb, callback) {
        const readable = ytdl(url, {
            quality: itag
        })
        readable.on('data', (data) => {
            if (progressCb) {
                progressCb(data.length, readable)
            }
        })
        const writable = readable.pipe(fs.createWriteStream(audio)).on('drain', () => {
            if (readable.destroyed) {
                writable.destroy()
                readable.end()
                writable.end()
            }
        }).on('finish', () => {
            if (callback) {
                if (writable.destroyed) {
                    callback('aborted')
                } else {
                    callback()
                }
            }
        })
    },
    async mergeStreams(aborted, callback) {
        const abortController = new AbortController()
        if(aborted){
            abortController.abort()
        }
        cp.exec(`ffmpeg -i "${video}" -i "${audio}" -c copy "${output}" -y`, {
            cwd: ffmpeg,
            signal: abortController.signal
        }, (err) => {
            if (callback) {
                callback()
            }
        })
    },
    async info(url, quality) {
        const videoFilter = quality === 'high' ? 'highestvideo' : 'lowestvideo'
        const audioFilter = quality === 'high' ? 'highestaudio' : 'lowestaudio'

        const info = await ytdl.getInfo(url)
        const video = ytdl.chooseFormat(info.formats, { quality: videoFilter })
        const audio = ytdl.chooseFormat(info.formats, { quality: audioFilter })
        const videoLength = parseInt(video.contentLength) || 0
        const audioLength = parseInt(audio.contentLength) || 0

        return [video.itag, audio.itag, videoLength, audioLength]
    },
    async removeTempFiles(type, userPath) {
        const timestamp = Date.now()
        
        if (type == 'audio') {
            fs.copyFileSync(audio, path.join(userPath, `audio-${timestamp}.mp3`))
            fs.unlinkSync(audio)
        } else if (type == 'video') {
            fs.copyFileSync(video, path.join(userPath, `video-${timestamp}.mp4`))
            fs.unlinkSync(video)
        } else if (type == 'both') {
            fs.unlinkSync(audio)
            fs.unlinkSync(video)
            fs.copyFileSync(output, path.join(userPath, `output-${timestamp}.mp4`))
            fs.unlinkSync(output)
        } else {
            if (fs.existsSync(audio)) fs.unlinkSync(audio)
            if (fs.existsSync(video)) fs.unlinkSync(video)
            if (fs.existsSync(output)) fs.unlinkSync(output)
        }
    }
}