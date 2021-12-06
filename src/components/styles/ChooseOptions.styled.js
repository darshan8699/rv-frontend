import styled from 'styled-components'

export const Product = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > h5 {
        margin: 0;
        margin-bottom: 10px; 
    }

    & > .image {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.51) 0%, rgba(196, 196, 196, 0) 100%);
        position: relative;
        z-index: 99;
        width: 100px;
        height: 100px
        & > img {
            z-index: 98;
            position: absolute;
            top: 0;
            left: 0;
        }
        }

    & > .default {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const Expander = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #C4C4C4;
    border: 1px solid #9B9B9B;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
`

export const Add = styled.div`
    background-color: #C4C4C4;
    border-radius: 5px;
    width: 50px;
    max-width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    font-size: 30px;
    font-weight: 500;
    margin-left: 30px;
`