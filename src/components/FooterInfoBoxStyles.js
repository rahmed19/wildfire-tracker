import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100;

`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -100;
`
export const ModalWrapper = styled.div`
    // width: 800px;
    // height: 600px;
    width: 95vw;
    max-width: calc(100% - 600px);
    height: 90vh;
    max-height: calc(100% - 300px);
    min-width: 200px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: white;
    color: black;
    display: grid;
    grid-template-rows: repeat(1, 250px); 
    position: relative;
    z-index: -100;
    border-radius: 10px;
    z-index: -100;

    @media (max-width: 1200px){
        min-height: 600px;
        min-width: 380px;
        display: flex;
        flex-direction: rows:
    }

`
export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: black;
    z-index: -100;
    object-fit: cover;
    object-position: bottom;
    
    @media (max-width: 1200px){
        display: none;
    }

`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.3;
    color: #141414;
    z-index: -100;
    word-wrap: break-word;
    overflow: hidden;
    margin: 0 auto;

    h1 {
       
       font-size: 4rem;
       text-decoration: bold;
       margin-top: -10px;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
        margin-left: 70px;
        margin-right: 70px;
    }

    h2 {
        margin: 1rem;
        font-weight: 800;
    }

    h2 a: link, a:visited, a:hover, a:active {
        color: black;
        
    }

    @media (max-width: 1200px){
        h1 {
            font-family: Raleway;
            font-size: 3rem;
            margin-top: 0;
         }
     
         p {
             margin-left: 50px;
             margin-right: 50px;
             font-size: .9rem;
             font-weight: 400;
         }
     
         h2 {
             margin: 1rem;
         }
        overflow: hidden;
    }


`

export const CloseModal = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: -100;
    color: white;
    @media (max-width: 1200px){
        color: black;
    }
`