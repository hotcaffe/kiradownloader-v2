const {app} = require('electron')
const cp = require('child_process')
const path = require('path')

const appPath = app.getAppPath()
const ffmpeg = path.join(appPath, 'node_modules', 'ffmpeg-static').replace('app.asar', 'app.asar.unpacked')

const regLoad = RegExp('(\\w*time*\\w)+(=)+[0-9]+(:)+[0-9]+(:)+[0-9]+', 'g')
const regDuration = RegExp('(\\w*Duration*\\w)+(: )+[0-9]+(:)+[0-9]+(:)+[0-9]+', 'g')


let duration = 0

function calcTime(str) {
    const load = regLoad.exec(str)
    if (load) {
        const fullLoad = load[0].slice(5)
        const hours = parseInt(fullLoad.slice(0, 2))
        const minutes = parseInt(fullLoad.slice(3, 5))
        const seconds = parseInt(fullLoad.slice(6, 8))
        const convertedTime = (((hours * 60) + (minutes)) * 60) + seconds
        return convertedTime
    }
    return 0
}

function calcDuration(str) {
    const duration = regDuration.exec(str)
    if (duration) {
        const fullDuration = duration[0].slice(10)
        const hours = parseInt(fullDuration.slice(0, 2))
        const minutes = parseInt(fullDuration.slice(3, 5))
        const seconds = parseInt(fullDuration.slice(6, 8))
        const convertedTime = (((hours * 60) + (minutes)) * 60) + seconds
        return convertedTime
    }
    return 0
}

module.exports = {
    async formatMedia(media, filePath, cb) {
        const abortController = new AbortController()
        const ffmpegCommand = `ffmpeg -i "${media}" -qscale:v 0 "${filePath}" -y`

        const child = cp.exec(ffmpegCommand, {
            cwd: ffmpeg,
            signal: abortController.signal
        })

        child.stderr.on('data', (data) => {
            const timer = parseInt(calcTime(data))
            const percentage = ((timer / duration) * 100).toFixed(0)
            if (duration === 0) {
                duration = parseInt(calcDuration(data))
            }
            if (timer && duration) {
                cb(percentage, child)
            }
        })

        child.on('close', (code) => {
            abortController.abort()
            duration = 0
            cb('Done!')
        })

    }
}