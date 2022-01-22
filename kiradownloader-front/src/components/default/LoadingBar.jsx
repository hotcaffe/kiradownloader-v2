import { LoadingBarWrapper } from './styledWrappers'

export default function({percentage}){
    return(
        <LoadingBarWrapper width={percentage}>
            <p>{percentage || ''}{parseFloat(percentage) ? '%' : ''}</p>
            <div className="loading">
                <div className="loadingProgress"/>
            </div>
        </LoadingBarWrapper>
    )
}