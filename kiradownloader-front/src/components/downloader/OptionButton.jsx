import react from 'react'
import { OptionButtonWrapper } from './downloaderWrappers'

export default function({children, radioValue, group, status}){
    return(
        <OptionButtonWrapper>
            <input type="radio" name={group} id={radioValue} value={radioValue} defaultChecked disabled={status == "disabled" ? true : false}/>
            <label htmlFor={radioValue} className={status}>
                {children}
            </label>
        </OptionButtonWrapper>
    )
}