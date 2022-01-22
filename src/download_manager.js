const cp = require('child_process')
const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')


const video = path.join(__dirname, 'output', 'video.mp4')
const audio = path.join(__dirname, 'output', 'audio.mp3')
const output = path.join(__dirname, 'output', 'output.mp4')
const ffmpeg = path.join(__dirname, '../', 'node_modules', 'ffmpeg-static')

const userPath = path.join('F:/FFOutput/output.mp4')

function removeTempFiles(){
    fs.unlinkSync(audio)
    fs.unlinkSync(video)
    fs.copyFileSync(output, userPath)
    fs.unlinkSync(output)
}


module.exports = {
    async dlVideo(url, itag, progressCb, callback){
        ytdl(url, {
            quality: itag 
        }).on('response', (res) => {
            if(progressCb){
                progressCb(res)
            }
        }).pipe(fs.createWriteStream(video)).on('finish', () => {
            if(callback){
                callback()
            }
        })
    },
    async dlAudio(url, itag, callback){
        ytdl(url, {
            quality: itag
        }).pipe(fs.createWriteStream(audio)).on('finish', () => {
            if(callback){
                callback()
            }
        })
    },
    async mergeStreams(event, callback){
        event.reply('download-progress', 'Merging Files!')
        cp.exec(`ffmpeg -i "${video}" -i "${audio}" -c copy "${output}" -y`, {
            cwd: ffmpeg
        }, (err) => {
            event.reply('download-progress', 'Removing temporary files!')
            removeTempFiles()
            event.reply('download-progress', 'DONE!')
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
    
        return [video.itag, audio.itag]
    },
}