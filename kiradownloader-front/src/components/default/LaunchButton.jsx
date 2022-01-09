import react from 'react'
import {LaunchButtonWrapper} from './styledWrappers'

export default function({children}){
    return (
        <LaunchButtonWrapper>
            {children}
        </LaunchButtonWrapper>
    )
}
