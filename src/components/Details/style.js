import styled from 'styled-components';

const DetailContent = styled.div`
    width: 50vw;
    min-height: 20vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f0f8ff;
    border-radius: 16px;
    border: 3px solid #4baae1;

    padding: 20px;

    box-sizing: content-box;

    position: fixed;
    top: 30vh;
    left: 25vw;

    z-index: 100000;
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
    min-height: 20vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ToolAccessButton = styled.button`
    width: 10vw;
    min-height: 3vw;

    color: #f0f8ff;
    font-size: 1rem;
    font-weight: bold;

    background-color: #4baae1;
    border-radius: 16px;

    margin: 10px;

    cursor: pointer;
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
