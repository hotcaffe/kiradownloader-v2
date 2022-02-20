import styled from "styled-components";


const UpdateWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 250px;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text_disabled};

    div.header{
        width: 100%;
        height: 5%;
        -webkit-app-region: drag;
        background-color: ${props => props.theme.color.disabled_button};
    }

    div.logo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 55%;
        img{
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            width: 80px;
            height: 80px;
            object-fit: contain;
        }
    }

    div.update-status{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35%;
        text-align: center;
        p{
            ::-webkit-scrollbar{
                width: 2px;
            }
            ::-webkit-scrollbar-thumb{
                background-color: ${props => props.theme.color.text_disabled};
            }
            padding: 0px 5px;
            overflow-wrap: break-word;
            overflow-y: scroll;
            height: 90%;
            width: 80%;
        }
    }
`

export {UpdateWrapper}