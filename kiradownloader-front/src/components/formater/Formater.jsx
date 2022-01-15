import {useContext} from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import FormaterTool from './FormaterTool'
import {AiFillPicture} from 'react-icons/ai'
import LaunchButton from '../default/LaunchButton'

export default function(){
    const {globals} = useContext(GlobalContext)

    return(
        <Container tool="formater" block={globals.block}>
          <FormaterTool block={globals.block}/>
          <LaunchButton block={globals.block}>
            <AiFillPicture/>
          </LaunchButton>
        </Container>
    )
}