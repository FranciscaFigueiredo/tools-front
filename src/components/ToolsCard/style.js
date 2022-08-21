import styled from 'styled-components';

const ToolsContent = styled.div`
    width: 90vw;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const ToolsContainer = styled.div`
    width: 45vw;
    height: 45vw;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 20px;

    background-color: #c9e1ff;
    border-radius: 6px;
    border: 2px solid #a8b8c0;

    position: relative;

    cursor: pointer;

    &:hover {
        width: 50vw;
        height: 50vw;
        transition-property: width height left top;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;

        border: 2px solid #0ea7ff;
    }

    @media (min-width: 600px) {
        width: 20vw;
        height: 20vw;
    }

    @media (min-width: 1000px) {
        width: 15vw;
        height: 15vw;

        &:hover {
            width: 20vw;
            height: 20vw;
        }
    }
`;

const ToolIcon = styled.img`
    width: 25vw;
    height: 25vw;

    border-radius: 50%;

    object-fit: cover;

    @media (min-width: 600px) {
        width: 15vw;
    }

    @media (min-width: 1000px) {
        width: 10vw;
        height: 10vw;
    }
`;

const ToolName = styled.h3`
    font-size: 1.5rem;

    /* @media (min-width: 600px) {
        width: 50vw;
    }

    @media (min-width: 1000px) {
        width: 10vw;
        height: 10vw;
    } */
`;

export {
    ToolsContent,
    ToolsContainer,
    ToolIcon,
    ToolName,
};
