import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import LoadingBar from './LoadingBar'
import SideMenu from './SideMenu'
import {dark, light} from '../../themes'
import {ContainerWrapper} from './styledWrappers'
import {FiMoon} from 'react-icons/fi'
import Header from './Header'

export default function({children, tool, loadingPercentage}){
    const {globals, setGlobals} = useContext(GlobalContext)

    function changeTheme(){
        if(globals.theme.title == 'dark'){
            setGlobals({...globals, theme: light})
        }else{
            setGlobals({...globals, theme: dark})
        }
    }

    return(
        <ContainerWrapper>
            <Header/>
            <main>
                <aside>
                    <SideMenu tool={tool} disabled={globals.block ? true : false}/>
                </aside>
                <main className="content">
                    <div className="tool">
                        {children[0]}
                    </div>
                    <div className="executeButton">
                        {children[1]}
                    </div>
                </main>
                <aside className="theme-btn">
                    <div>
                        <FiMoon onClick={e => changeTheme()}/>
                    </div>
                </aside>
            </main>
            <footer>
                <LoadingBar percentage={loadingPercentage}/>
            </footer>
        </ContainerWrapper>
    )
}