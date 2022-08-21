import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100vw;
    min-height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    position: relative;
`;

const ContentContainer = styled.main`
    width: 100vw;
    min-height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 16rem auto;

    position: relative;
`;


export {
    PageContainer,
    ContentContainer,
};
