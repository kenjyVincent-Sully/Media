import styled from "styled-components";
import Devices from "@helper/Devices";
import { placeholder, searchBarColor } from "@styles/colors";

const Search = styled.input`   
    border: none;
    border-radius: 10px;
    background: none;
    width: 100%;
    color:  ${placeholder} ;
    outline: none ;
    
    &::placeholder{
        color: ${placeholder};
    }

    @media ${Devices.tablet} {
        margin-top: 0;
        width: auto;
        padding: 7px 28px 7px 7px;
    }
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 2px;
    border-radius: 10px;
    background: ${searchBarColor};
    margin-top: 25px;

    @media ${Devices.tablet} {
    margin-top: 0;
    
    }

`;

const ButtonSearch = styled.button`
    width: 40px;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Esearchicon%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Artboard' transform='translate(-148.000000, -154.000000)' fill='%232586FA' fill-rule='nonzero'%3E%3Cpath d='M163.392097,161.708207 C163.392097,157.452888 159.93921,154 155.683891,154 C151.428571,154 148,157.452888 148,161.708207 C148,165.963526 151.452888,169.416413 155.708207,169.416413 C157.653495,169.416413 159.428571,168.68693 160.790274,167.495441 L164.43769,171.142857 L165.118541,170.462006 L161.471125,166.81459 C162.662614,165.428571 163.392097,163.653495 163.392097,161.708207 Z M155.708207,168.419453 C151.987842,168.419453 148.972644,165.404255 148.972644,161.683891 C148.972644,157.963526 151.987842,154.948328 155.708207,154.948328 C159.428571,154.948328 162.443769,157.963526 162.443769,161.683891 C162.419453,165.404255 159.404255,168.419453 155.708207,168.419453 Z' id='searchicon'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat center; 
    cursor: pointer;
    opacity: 0.7;
    height: 30px;
`;

const Container = styled.div`    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 29px;
    
`;


const Item = styled.div`
    width: 145px;
`;


const Suggestions = styled.div`    
    position: absolute;
    z-index: 2;
    background: #17253b;

    ul{
        padding: 17px;
        margin: 0;
    }
    li{
        list-style: none;
    }
`
export { Search, Form, Suggestions, Container, Item, ButtonSearch };