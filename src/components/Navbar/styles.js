import styled, {css} from "styled-components";

export const NavbarStyle = styled.nav `
    background:rgba(76,76,76,0.8);
    color:#fff;
    display:flex;
    justify-content:space-between;
    padding:2px 20px;
    position:fixed;
    width:100%;
    box-sizing:border-box;
    backdrop-filter:blur(20px);
`

export const Img = styled.div `
    height: 30px;
    width: 30px;
    padding: 5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    ${props => css`
        background-image: url(${props.imagen});
    `};
`

// export const Input = styled.input `
//     width: 60%;
//     height: 22px;
//     outline: none;
//     align-self: center;
//     border-radius: 30px;
// `