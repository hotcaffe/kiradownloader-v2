import react from 'react'
import { LoadingBarWrapper } from './styledWrappers'

export default function({percentage}){
    return(
        <LoadingBarWrapper width={percentage}>
            <p>{percentage}%</p>
            <div className="loading">
                <div className="loadingProgress"/>
            </div>
        </LoadingBarWrapper>
    )
}