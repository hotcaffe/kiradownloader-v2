const cp = require('child_process')
const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const video = path.join(__dirname, 'output', 'video.mp4')
const audio = path.join(__dirname, 'output', 'audio.mp3')
const output = path.join(__dirname, 'output', 'output.mp4')
const ffmpeg = path.join(__dirname, '../', 'node_modules', 'ffmpeg-static')

module.exports = {
    async dlVideo(url, itag, progressCb, callback){
        ytdl(url, {
            quality: itag 
        }).on('data', (data) => {
            if(progressCb){
                progressCb(data.length)
            }
        })
        .pipe(fs.createWriteStream(video)).on('finish', () => {
            if(callback){
                callback()
            }
        })
    },
    async dlAudio(url, itag, progressCb, callback){
        ytdl(url, {
            quality: itag
        }).on('data', (data) => {
            if(progressCb){
                progressCb(data.length)
            }
        })
        .pipe(fs.createWriteStream(audio)).on('finish', () => {
            if(callback){
                callback()
            }
        })
    },
    async mergeStreams(callback){
        cp.exec(`ffmpeg -i "${video}" -i "${audio}" -c copy "${output}" -y`, {
            cwd: ffmpeg
        }, (err) => {
            if(callback){
                callback(err)
            }
        })
    },
    async info(url, quality){
        const videoFilter = quality === 'high' ? 'highestvideo' : 'lowestvideo'
        const audioFilter = quality === 'high' ? 'highestaudio' : 'lowestaudio'

        const info = await ytdl.getInfo(url)
        const video = ytdl.chooseFormat(info.formats, {quality: videoFilter})
        const audio= ytdl.chooseFormat(info.formats, {quality: audioFilter})
        const videoLength = parseInt(video.contentLength) || 0
        const audioLength = parseInt(audio.contentLength) || 0

        return [video.itag, audio.itag, videoLength, audioLength]
    },
    async removeTempFiles(type, userPath){
        if(type == 'audio'){
            fs.copyFileSync(audio, path.join(userPath, 'audio.mp3'))
            fs.unlinkSync(audio)
        }else if(type == 'video'){
            fs.copyFileSync(video, path.join(userPath, 'video.mp4'))
            fs.unlinkSync(video)
        }else{
            fs.unlinkSync(audio)
            fs.unlinkSync(video)
            fs.copyFileSync(output, path.join(userPath, 'output.mp4'))
            fs.unlinkSync(output)
        }
    }
}