import styled from 'styled-components';

const BlurBackground = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(16, 4, 28, 0.6);

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    cursor: pointer;
`;

export {
    BlurBackground,
};
