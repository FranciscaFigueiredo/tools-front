import { GrSearch } from 'react-icons/gr';
import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 70vw;
    height: 50px;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-radius: 6px;
    border: 2px solid #a8b8c0;

    position: relative;

    &:hover {
        border: 2px solid #0ea7ff;
    }

    @media (min-width: 600px) {
        width: 50vw;
    }

    @media (min-width: 1000px) {
        width: 20vw;
    }
`;

const SearchInput = styled.input`
    width: 90vw;
    height: 50px;

    color: #3b4b56;
    font-size: 1rem;
    font-weight: 300;


    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 0 0.8rem 0 4rem;

    background-color: transparent;
    border-radius: 6px;

    outline: 0;

    z-index: 100;

    &::placeholder {
        color: #3b4b56;
    }

    @media (min-width: 600px) {
        width: 50vw;
    }

    @media (min-width: 1000px) {
        width: 20vw;

        padding: 0 0.8rem 0 3rem;
    }
`;

const SearchIcon = styled(GrSearch)`
    color: #4BAAE1;
    font-size: 1.5rem;
    font-weight: bold;

    text-align: center;

    position: absolute;
    top: calc(50% - (1.5rem / 2));
    left: 0.5rem;
`;

export {
    SearchContainer,
    SearchInput,
    SearchIcon
};
