import styled, {css} from "styled-components";

export const DivCarro = styled.div `
    position: relative;
    padding-top: 5px;
`

export const Button = styled.button `
    border:none;
    background-color:#fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    ${props => css`
        background-image: url(${props.imagen});
    `};
    filter: saturate(0%);
    height: 30px;
    width: 45px;
    border-radius:5px;
    color:#000;
    padding: 10px 15px;
    cursor: pointer;
`

export const DivLista = styled.div `
    border-radius:5px;
    box-shadow: 0 0 15px rgba(0,0,0,0,0.4);
    background-color:#fff;
    color:#000;
    width:400px;
    position: absolute;
    right:0px;
    padding: 10px;
    top:52px;
`

export const Ul = styled.ul `
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`

export const Li = styled.li `
    border-bottom: 1px solid #7f7f7f;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
    padding-bottom: 5px;
`

export const Img = styled.img `
    height: 25px;
`

export const ButtonDelete = styled.button `
    border:none;
    background-color:#fb0207;
    border-radius:50%;
    color:#fff;
    font-size:0.5em;
    padding: 2px, 5px;
    cursor: pointer;
    height:18px;
`