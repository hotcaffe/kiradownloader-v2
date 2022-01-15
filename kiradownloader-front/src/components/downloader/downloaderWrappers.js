import styled from 'styled-components'

const OptionButtonWrapper = styled.div`
    input{
        opacity: 0;
        position: fixed;
        width: 0;
    }
    input:checked + label{
        background-color: ${props => props.theme.color.option_button} !important;
        color: ${props => props.theme.color.text_color} !important;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25) !important;
    }
    input:disabled + label{
        background-color: ${props => props.theme.color.disabled_button};
        color: ${props => props.theme.color.text_disabled};
        box-shadow: none;
        input{
            display: none;
        }
        cursor: default;
        &:hover{
            background-color: ${props => props.theme.color.disabled_button};
            color: ${props => props.theme.color.text_disabled};
        }
    }
    label{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100px;
        height: 30px;
        font-size: 15px;
        background-color: ${props => props.theme.color.unselected_button};
        color: ${props => props.theme.color.text_disabled};
        font-weight: bold;
        user-select: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: background 0.2s, color 0.2s;
        cursor: pointer;
        svg{
            font-size: 22px;
        }
        &:hover{
            background-color: ${props => props.theme.color.option_button};
            color: ${props => props.theme.color.text_color};
        }
    }
`

const DownloaderToolWrapper = styled.div`
    width: 100%;
    height: 100%;
    input.inputLink{
        width: 360px;
        height: 35px;
        padding: 0px 10px;
        margin-bottom: 20px;
        border: none;
        border-bottom: 5px solid #FFF;
        outline: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: height 0.2s, border 0.2s;
        &:focus{
            border-bottom: 5px solid ${props => props.theme.color.active_button};
        }
        &:disabled{
            pointer-events: none;
            background-color: ${props => props.theme.color.text_color};
            border-bottom: 5px solid ${props => props.theme.color.active_button};
        }
    }
    div.options{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.formatOptions, .qualityOptions{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 380px;
        height: 30px;
        margin-bottom: 10px;
        div{
            margin: 0px 10px;
        }
    }
    span{
        width: 380px;
        height: 5px;
        background-color: orange;
    }
`


export { OptionButtonWrapper, DownloaderToolWrapper }