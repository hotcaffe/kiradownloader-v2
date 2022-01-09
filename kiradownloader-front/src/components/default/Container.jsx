import react from 'react'
import LoadingBar from './LoadingBar'
import SideMenu from './SideMenu'
import {ContainerWrapper} from './styledWrappers'

export default function({children}){
    return(
        <ContainerWrapper>
            <header>@kiraDownloader v2</header>
            <main>
                <aside>
                    <SideMenu/>
                </aside>
                <main className="content">
                    <div className="tool">
                        {children[0]}
                    </div>
                    <div className="executeButton">
                        {children[1]}
                    </div>
                </main>
                <aside/>
            </main>
            <footer>
                <LoadingBar percentage={30}/>
            </footer>
        </ContainerWrapper>
    )
}