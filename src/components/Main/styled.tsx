import styled from 'styled-components';


export const MainApp = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background-color: #313A49;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width:500px) {
        height: 300px;
        width: 90vw;
    }

   

    button {
        background-color:#4BD898;
        padding: 13px;
        border-radius: 100%;
        color: black;
        position: relative;
        top: 30px;
        
        :hover{
            svg {
                fill: #fff;
                transition: all 0.8s;
            }

            box-shadow: 0px 0px 20px 5px #4BD898;
            transition: all 0.8s;            
        }
    }

    hr {
        width: 70%;
        border-color: #8d8f8e42;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 80%;

    div {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h1 {
            font-size: 0.965rem;
            color: #4BD898;
        }

        h2 {
            text-align: center;
            color: #fff;
        }
    }
`