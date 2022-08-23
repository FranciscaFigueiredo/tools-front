import styled from 'styled-components';

const DetailContent = styled.div`
    max-width: 80vw;
    min-height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f0f8ff;
    border-radius: 16px;
    border: 3px solid #4baae1;

    padding: 20px;

    box-sizing: content-box;

    position: fixed;
    top: calc(50vh - 25%);
    left: 3vw;

    z-index: 100000;

    @media (min-width: 600px) {
        width: 80vw;
        min-height: 30vh;

        top: calc(30vh - 10%);
        left: 8vw;
    }

    @media (min-width: 1000px) {
        width: 50vw;
        min-height: 20vh;

        top: calc(30vh - 15%);
        left: calc(42.5vw - 20%);
    }
`;

const ToolContent = styled.div`
    width: 100%;
    min-height: 20%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ToolDetail = styled.div`
    width: 50%;
    min-height: 20vw;
    max-height: 45vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        min-height: 15vw;
        max-height: 20vw;
    }

    @media (min-width: 1000px) {
        min-height: 10vw;
        max-height: 15vw;
    }
`;

const ToolAccessButton = styled.button`
    width: 20vw;
    min-height: 10vw;

    color: #f0f8ff;
    font-size: 1.2rem;
    font-weight: bold;

    background-color: #4baae1;
    border-radius: 16px;

    margin: 10px;

    cursor: pointer;

    &:disabled {
        background-color: gray;
    }

    @media (max-width: 400px) {
        width: 25vw;

        font-size: 1rem;
    }

    @media (min-width: 600px) {
        width: 15vw;
        min-height: 5vw;
    }

    @media (min-width: 1000px) {
        width: 10vw;
        min-height: 3vw;
    }
`;

const LastViewedToolsContent = styled.div`
    width: 100%;
    min-height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px;
`;

const ToolDetailContainer = styled.div`
    width: 25vw ;
    height: 25vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => (props.color ? props.color : 'transparent')};
    border-radius: 50%;

    box-shadow: 0 0 10px 1px ${(props) => (props.color ? props.color : 'rgba(0, 0, 0, 0.15)')};

    cursor: pointer;

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
        width: ${(props) => (props.type === 'viewed' ? '10vw' : '15vw')};
        height: ${(props) => (props.type === 'viewed' ? '10vw' : '15vw')};

        margin: ${(props) => (props.type === 'viewed' ? '10px' : '20px')};
    }
`;

const ToolDetailIcon = styled.img`
    width: 20vw;
    height: 20vw;

    border-radius: 50%;

    object-fit: cover;

    @media (min-width: 600px) {
        width: 15vw;
        height: 15vw;
    }

    @media (min-width: 1000px) {
        width: ${(props) => (props.type === 'viewed' ? '5vw' : '10vw')};;
        height: ${(props) => (props.type === 'viewed' ? '5vw' : '10vw')};;
    }
`;

export {
    DetailContent,
    ToolContent,
    ToolDetail,
    ToolAccessButton,
    LastViewedToolsContent,
    ToolDetailContainer,
    ToolDetailIcon,
};
