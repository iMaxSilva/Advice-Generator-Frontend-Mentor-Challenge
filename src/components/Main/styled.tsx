import styled from 'styled-components';

export const Card = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 10px;
    margin: auto;
    transform: translate(0%, 100%);
    background-color: #313A49;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

   

    button {
        background-color:#4BD898;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        color: black;
        position: absolute;
        top: 90%;
        
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
        margin-bottom: 60px;
        width: 70%;
        border-color: #8d8f8e42;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 80%;

    div {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: fa;
        
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