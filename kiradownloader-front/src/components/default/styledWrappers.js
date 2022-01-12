import styled from "styled-components"

const ContainerWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 600px;
    color: ${props => props.theme.color.text_color};
    background-color: ${props => props.theme.color.background};
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        font-size: 12px;
        background-color: ${props => props.theme.color.headers};
        color: ${props => props.theme.color.text_extra}
    }
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme.color.loading_background};
    }
    svg{
        width: 30px;
        height: 30px;
    }
`

const SideMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 20px 20px 0;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 100px;
        background-color: ${props => props.theme.color.deactivated_button};
        cursor: pointer;

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

export {ContainerWrapper, LaunchButtonWrapper, SideMenuWrapper, LoadingBarWrapper}