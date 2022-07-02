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
    
`;
const ContainerFilter = styled(Container)`
    justify-content:flex-start;
`;

const Item = styled.div`
    width: 140px;
`;
const Year = styled.p`
    color: ${secondaryTextColor};
`;

export { Select, Img, Container, Item, Year, FilterSelect, LabelSelect, ContainerFilter };