import { useContext} from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import LoadingBar from './LoadingBar'
import SideMenu from './SideMenu'
import { dark, light } from '../../themes'
import { ContainerWrapper } from './styledWrappers'
import { FiMoon } from 'react-icons/fi'
import Header from './Header'
import SearchPath from './SearchPath'

export default function ({ children, tool, loadingPercentage }) {
    const { globals, setGlobals } = useContext(GlobalContext)

    function changeTheme() {
        if (globals.theme.title == 'dark') {
            localStorage.setItem('kiradownloader_theme', 'light')
            setGlobals({ ...globals, theme: light })
        } else {
            localStorage.setItem('kiradownloader_theme', 'dark')
            setGlobals({ ...globals, theme: dark })
        }
    }

    return (
        <ContainerWrapper>
            <Header />
            <main>
                <aside>
                    <SideMenu tool={tool} disabled={globals.block ? true : false} />
                </aside>
                <main className="content">
                    <div className="tool">
                        {children[0]}
                    </div>
                    <div className="executeButton">
                        {children[1]}
                    </div>
                </main>
                <aside className="right-side">
                    <div className="theme-button">
                        <FiMoon onClick={e => changeTheme()} />
                    </div>
                    <div className="search-path">
                        <SearchPath/>
                    </div>
                    <div/>
                </aside>
            </main>
            <footer>
                <LoadingBar percentage={loadingPercentage || 0} />
            </footer>
        </ContainerWrapper>
    )
}