import styled from 'styled-components'

const ContainerWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 600px;
    color: ${props => props.theme.color.text_color};
    background-color: ${props => props.theme.color.background};
    user-select: none;
    transition: background 0.2s;

    main{
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 570px;
        width: 100%;
        justify-content: space-between;

        aside{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 90px;
            height: 100%;
            &.right-side{
                display: flex;
                align-items: flex-end;
                height: 100%;
                div{
                    height: 25%;
                }
                div.theme-button{
                    width: 60px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    svg{
                        margin-top: 20px;
                        width: 26px;
                        height: 26px;
                        color: ${props => props.theme.color.text_disabled};
                        transition: background 0.5s, color 0.5s, box-shadow 0.5s;
                        border-radius: 5px;
                        padding: 5px;
                        &:hover{
                            color: ${props => props.theme.color.text_extra};
                            background-color: ${props => props.theme.color.deactivated_button};
                            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
                            cursor: pointer;
                        }
                    }
                }
                div.search-path{
                    display: flex;
                    align-items: center;
                    height: 50%;
                }
            }
        }

        main.content{
            display: flex;
            flex-direction: column;
            width: 380px;
            height: 260px;
            
            div.tool{
                display: flex;
                justify-content: center;
                height: 210px;
                width: 100%;
            }
            div.executeButton{
                display: flex;
                justify-content: center;
                height: 50px;
                svg{
                    width: 24px;
                }
            }
        }

    }
    footer{
        height: 30px;
    }
`

const LaunchButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.color.active_button};
    color: ${props => props.theme.color.text_color};
    transition: background-color 0.2s;
    user-select: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &.block{
        background-color: ${props => props.theme.color.option_button} !important;
    }
    &:hover{
        background-color: ${props => props.theme.color.loading_background} !important;
    }
    svg{
        width: 30px;
        height: 30px;
    }
    path{
        stroke: ${props => props.theme.color.text_color};
    }
`

const SideMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0 20px 20px 0;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 100px;
        background-color: ${props => props.theme.color.deactivated_button};
        cursor: pointer;
        pointer-events: ${props => props.disabled ? 'none' : ''};

        &.downloaderNavigator{
            border-radius: 0 20px 0 0;
        }

        &.formaterNavigator{
            border-radius: 0 0 20px 0;
        }
        &.selected{
            background-color: ${props => props.theme.color.active_button};
            svg{
                color: ${props => props.theme.color.text_color} !important;
            }
            svg path {
                stroke: ${props => props.theme.color.text_color} !important;
            }
        }

        svg{
            color: ${props => props.theme.color.text_disabled};
            width: 25px;
            height: 25px;
            path{
                stroke: ${props => props.theme.color.text_disabled};
            }
        }
    }
`

const LoadingBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 30px;
    p{
        height: 12px;
        margin: 4px;
        font-size: 10px;
        color: ${props => props.theme.color.text_extra}
    }
    div.loading{
        width: 100%;
        height: 10px;
        background-color: ${props => props.theme.color.loading_background};
        .loadingProgress{
            width: ${props => `${props.width}%`};
            height: 100%;
            background-color: ${props => props.theme.color.loading_bar};
        }
    }
`

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    font-size: 10px;
    background-color: ${props => props.theme.color.headers};
    color: ${props => props.theme.color.text_disabled};
    -webkit-app-region: drag;
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50px;
        height: 20px;
        -webkit-app-region: no-drag;
    }
    svg{
        font-size: 18px;
        padding: 1px 3px;
        cursor: pointer;
        &.minimize-btn{
            &:hover{
                background-color: rgba(0, 0, 0, 0.25);
                color: ${props => props.theme.color.text_extra};
            }
        }
        &.close-btn{
            &:hover{
                background-color: ${props => props.theme.color.close_color};
                color: ${props => props.theme.color.text_color};
            }
        }
    }
`

const SearchPathWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px !important;
    width: 60px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0 0 20px;
    background-color: ${props => props.theme.color.deactivated_button};
    transition: background 0.2s, width 0.5s;
    cursor: pointer;
    svg{
        width: 25px;
        height: 25px;
        color: ${props => props.theme.color.text_disabled};
    }
    &:hover{
        svg{
            color: ${props => props.theme.color.text_color};
        }
        background-color: ${props => props.theme.color.active_button};
        width: 90px !important;
    }
`

export { ContainerWrapper, LaunchButtonWrapper, SideMenuWrapper, LoadingBarWrapper, HeaderWrapper, SearchPathWrapper}