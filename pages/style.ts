import styled from 'styled-components';
import Devices from "@helper/Devices";
import { secondaryTextColor, labelColor } from "@styles/colors";

const Img = styled.img`
    width: 300px;
    height: 100%;
    border-radius: 10%;
    box-shadow: 0px 2px 5px rgb(0 0 0 / 44%);
    min-height: 230px;
`;


const Container = styled.div`    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media ${Devices.mobileL} {
        margin-right: 20px;
    }
`;

const ContentImg = styled.div`
    margin: 15px;
    min-width: 150px;
    height: 100%;
    cursor: pointer;`

const ContainerText = styled.div`
    flex: 1;
    position: relative;
`;

const Head = styled(Container)`
    display: flex;
    flex-direction: row;
    flex: 3;
`;

const TitleMovie = styled.p`
    font-size: 1.4rem;
    flex: 1;
    flex-wrap: wrap;
`;

const Paraph = styled(TitleMovie)`
    font-size: 1rem;
`;


const Vote = styled.p`
     font-size: 1.4rem;
`;



export {
    Img, Container, ContainerText, Vote, TitleMovie,
    ContentImg, Head, Paraph
};