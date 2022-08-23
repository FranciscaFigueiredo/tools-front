import styled from 'styled-components';

const DetailContent = styled.div`
    max-width: 85vw;
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
    top: calc(50vh - 50%);
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
    }
`;

const ToolContent = styled.div`
    width: 100%;
    min-height: 50%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ToolDetail = styled.div`
    width: 50%;
    max-height: 45vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        height: 20vw;
    }

    @media (min-width: 1000px) {
        height: 15vw;
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

export {
    DetailContent,
    ToolContent,
    ToolDetail,
    ToolAccessButton,
    LastViewedToolsContent,
};
