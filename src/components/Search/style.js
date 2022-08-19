import { GrSearch } from "react-icons/gr";
import styled from "styled-components";

const SearchContainer = styled.div`
    width: 20vw;
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
`;

const SearchInput = styled.input`
    width: 20vw;
    height: 50px;

    color: #3b4b56;
    font-size: 18px;
    font-weight: 300;

    padding: 0 0.8rem 0 3rem;

    background-color: transparent;
    border-radius: 6px;

    outline: 0;

    z-index: 100;

    &::placeholder {
        color: #3b4b56;
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
