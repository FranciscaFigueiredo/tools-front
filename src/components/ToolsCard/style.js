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

    color: ${(props) => (props.color ? props.color : '#ffffff')};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 3;

    margin: 20px;

    background-color: ${(props) => (props.color ? props.color : '#c9e1ff')};
    border-radius: 16px;

    box-shadow: 0 0 10px 1px ${(props) => (props.color ? props.color : 'rgba(0, 0, 0, 0.15)')};

    position: relative;

    cursor: pointer;

    h3 {
        filter: invert(80%)
    }

    &:hover {
        box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.15);
        transition-property: opacity 0.05;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out
    }

    @media (min-width: 600px) {
        width: 20vw;
        height: 20vw;
    }

    @media (min-width: 1000px) {
        width: 15vw;
        height: 15vw;
    }
`;

const ToolIcon = styled.img`
    width: 25vw;
    height: 25vw;

    border-radius: 50%;

    object-fit: cover;

    @media (min-width: 600px) {
        width: 15vw;
        height: 15vw;
    }

    @media (min-width: 1000px) {
        width: 10vw;
        height: 10vw;
    }
`;

const ToolName = styled.h3`
    max-width: 40vw;

    font-size: 1rem;

    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;

    margin: 5px 0;

    @media (min-width: 670px) {
        max-width: 15vw;

        font-size: 1rem;
    }

    @media (min-width: 1000px) {
        max-width: 13vw;
        
        font-size: 1.5rem;
    }
`;

export {
    ToolsContent,
    ToolsContainer,
    ToolIcon,
    ToolName,
};
