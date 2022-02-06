import styled from 'styled-components'

const FormaterToolWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 210px;
    border-radius: 5px 5px 0px 0px;
    user-select: none;

    div.input-file{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 340px;
        height: 50px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        border-radius: 5px 5px 0px 0px;
        background-color: ${props => props.theme.color.text_color};
        color: ${props => props.theme.color.text_disabled};
        font-size: 14 px;
        transition: background 0.3s, color 0.2s;
        cursor: pointer;

        span{
            width: 320px;
            overflow-x: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }

        svg{
            font-size: 30px;
        }

        &.disabled{
            pointer-events: none;
            color: ${props => props.theme.color.option_button};
            font-weight: bold;
        }

        &:hover{
            background-color: rgba(255, 255, 255, 0.85);
            color: ${props => props.theme.color.active_button};
        }
    }

    div.dropdown-btn{
        text-transform: uppercase;
    }

    div.active{
        height: 135px !important;
        div.dropdown-input{
            text-transform: uppercase;
            display: flex !important;
        }
        div.dropdown-btn{
            p{
                color: ${props=>props.theme.color.text_extra};
                font-weight: bold;
            }
        }
        div.separator{
            /* height: 5px; */
            background-color: ${props => props.theme.color.active_button} !important;
        }
    }

    div.selected{
        div.dropdown-btn{
            p{
                color: ${props=>props.theme.color.active_button};
                font-weight: bold;
            }
        }
        div.separator{
            background-color: ${props => props.theme.color.active_button} !important;
        }
    }

    div.disabled{
        div.separator{
            background-color: ${props => props.theme.color.text_disabled} !important;
        }
        div.dropdown-btn{
            pointer-events: none;
            p{
                color: ${props => props.theme.color.text_disabled};
            }
        }
    }

    div.dropdown{
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        width: 340px;
        height: 30px;
        background-color: ${props => props.theme.color.deactivated_button};
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
        transition: height 0.5s;



        div.separator{
            width: 340px;
            padding: 2.5px 0px;
            background-color: ${props => props.theme.color.text_disabled};
            transition: background-color 0.5s;
        }

        div.dropdown-btn{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 25px;
            margin-bottom: 1px;
            font-size: 10px;
            color: ${props => props.theme.color.text_disabled};
            transition: height 1s;
            cursor: pointer;
            &:hover{
                color: ${props => props.theme.color.text_extra};
            }

            p, svg{
                transition: color 0.2s;
            }
            
            svg{
                font-size: 18px;
                padding: 0px 10px;
            }

            div{
                width: 38px;
                height: 100%;
            }


        }

        div.dropdown-input{
            ::-webkit-scrollbar{
                width: 1px;
            }
            ::-webkit-scrollbar-thumb{
                background-color: ${props => props.theme.color.active_button};
            }
            display: none;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 125px;
            overflow-y: scroll;
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 0;
                padding: 10px 0px;
                font-size: 12px;
                font-weight: bold;
                border-top: 1px solid rgba(0, 0, 0, 0.25);
                color: ${props => props.theme.color.text_disabled};
                transition: color 0.4s;
                &:hover{
                    color: ${props => props.theme.color.active_button};
                    cursor: pointer;
                }
            }
        }

    }
`

export {FormaterToolWrapper}