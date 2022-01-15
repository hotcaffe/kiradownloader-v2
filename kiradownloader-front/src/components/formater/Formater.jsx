import react from 'react'
import Container from '../default/Container'
import FormaterTool from './FormaterTool'
import {AiFillPicture} from 'react-icons/ai'
import LaunchButton from '../default/LaunchButton'

export default function(){
    return(
        <Container tool="formater">
          <FormaterTool/>
          <LaunchButton>
            <AiFillPicture/>
          </LaunchButton>
        </Container>
    )
}