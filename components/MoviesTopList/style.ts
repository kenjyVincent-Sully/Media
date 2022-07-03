import styled from 'styled-components';
import { secondaryTextColor, labelColor } from "@styles/colors";

const Select = styled.select`
    background: transparent;
    border-radius: 10px;
    padding: 5px;
    color: ${secondaryTextColor};
    outline: navajowhite;
    border: 0.45px solid ${secondaryTextColor};
    margin: 5px 10px;
`;

const FilterSelect = styled(Select)`
    width:80px;
`;

const Img = styled.img`
    border-radius: 10%;
    width: 100%;
`;

const LabelSelect = styled.label`
    color: ${labelColor};
    font-size: 14px;
`;

const Container = styled.div`    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 29px;
`;

const ContainerFilter = styled(Container)`
    justify-content:flex-start;
`;

const WrapFilter = styled.div`
    display: flex;
    align-items: center;

    .Dropdown-control{
        min-width: 100px ;
    }
`;

const Item = styled.div`
    width: 145px;
    /* margin: 0 auto; */
`;


const TitleMovie = styled.p`
    font-size: 0.75rem;
`;

const Year = styled.p`
    color: ${secondaryTextColor};
    font-size: 0.75rem;
`;

export {
    Select, Img, Container, Item, Year,
    FilterSelect, LabelSelect, ContainerFilter, TitleMovie,
    WrapFilter
};