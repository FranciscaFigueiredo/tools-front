import styled from 'styled-components';
import { GrTools } from 'react-icons/gr'

const HeaderContainer = styled.div`
    width: 100vw;
    height: 15rem;

    background-color: #D8E9FB;
    border-radius: 0% 0% 100% 100% / 0% 73% 31% 100%;

    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    @media (min-width: 1000px) {
        height: 10rem;
    }
`;

const HeaderContent = styled.div`
    width: 100vw;
    height: 12rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    text-align: center;

    

    margin: 0 auto;

    @media (min-width: 1000px) {
        flex-direction: row;

        height: 10rem;
    }
`;

const LogoIcon = styled(GrTools)`
    color: #333333;

    font-size: 3rem;
    font-weight: bold;
    text-align: center;

    cursor: pointer;

    &:hover {
        font-size: 4rem;
        transition-property: font-size left top;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out
    }
`;

const Title = styled.h1`
    color: #4BAAE1;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

    text-align: center;
    text-align: center;
    
    &:hover {
        font-size: 4rem;
        transition-property: font-size left top;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out
    }

    cursor: pointer;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export {
    HeaderContainer,
    HeaderContent,
    LogoIcon,
    Title,
    Logo,
};
