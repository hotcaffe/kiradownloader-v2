import { UpdateWrapper } from "./updateWrapper"
import icon from '../../icon.png'
import { useState } from "react"

export default function () {
    const [status, setStatus] = useState()

    window.api.on.waitUpdate('update', (event, progress) => {
        if(progress){
            setStatus(progress)
        }
    })


    return (
        <UpdateWrapper>
            <div className="header"/>
            <div className="logo">
                <img src={icon} alt="kiradownloader-logo" />
            </div>
            <div className="update-status">
                <p>{status}</p>
            </div>
        </UpdateWrapper>
    )
}