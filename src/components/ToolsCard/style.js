import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import ReactPaginate from 'react-paginate';

const ToolsContent = styled.div`
    width: 90vw;

    text-align: center;
    display: grid;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 35vw 35vw;
    gap: 20px;

    margin: 0 auto;

    @media (min-width: 600px) {
        grid-template-columns: 25vw 25vw 25vw;
    }
`;

const ToolsContainer = styled.div`
    width: 35vw ;
    height: 35vw;

    color: ${(props) => (props.color ? props.color : '#333333')};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => (props.color ? props.color : 'transparent')};
    border-radius: ${(props) => (props.radius ? props.radius : '16px')};

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
        width: ${(props) => (props.width ? props.width : '15vw')};
        height: ${(props) => (props.width ? props.width : '15vw')};

        margin: 20px;
    }
`;

const ToolIcon = styled.img`
    max-width: 25vw;
    max-height: 25vw;

    border-radius: 50%;

    object-fit: cover;

    @media (min-width: 600px) {
        width: 15vw;
        height: 15vw;
    }

    @media (min-width: 1000px) {
        width: ${(props) => (props.width ? props.width : '10vw')};;
        height: ${(props) => (props.width ? props.width : '10vw')};;
    }
`;

const ToolName = styled.h3`
    max-width: 30vw;

    font-size: 0.8rem;

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

const ToolNameDescription = styled.h3`
    font-size: 1.5rem;

    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;

    margin: 20px 0;

    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

const BackArrow = styled(BsFillArrowLeftCircleFill)`
    color: #4baae1;
    font-size: 2rem;

    margin: 10px;

    cursor: pointer;

    &:disabled {
        background-color: gray;
    }
`;

const NextArrow = styled(BsArrowRightCircleFill)`
    color: #4baae1;
    font-size: 2rem;

    margin: 10px;

    cursor: pointer;

    &:disabled {
        background-color: gray;
    }
`;

const Pagination = styled(ReactPaginate)`
    all: unset;
    max-width: 60vw;

    align-self: flex-end;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 20px 15vw 0 auto;

    li {
        all: unset;
        cursor: pointer;

        margin: 10px;
    }
`;

export {
    ToolsContent,
    ToolsContainer,
    ToolIcon,
    ToolName,
    ToolNameDescription,
    BackArrow,
    NextArrow,
    Pagination,
};
