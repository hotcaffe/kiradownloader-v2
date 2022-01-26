import { useContext } from 'react'
import DownloadContext from '../../contexts/DownloadContext'
import { OptionButtonWrapper } from './downloaderWrappers'

export default function({children, radioValue, group, status, disabled, onClick}){
    const {downloadData} = useContext(DownloadContext)

    function buttonIsChecked(){
        if(downloadData && (radioValue == downloadData.media || radioValue == downloadData.quality)){
            return true
        }else{
            return false
        }
    }

    return(
        <OptionButtonWrapper onClick={onClick}>
            <input type="radio" name={group} id={radioValue} value={radioValue} defaultChecked = {buttonIsChecked() ? true : false} disabled={disabled ? true : false}/>
            <label htmlFor={radioValue} className={status}>
                {children}
            </label>
        </OptionButtonWrapper>
    )
}