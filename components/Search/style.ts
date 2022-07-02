import styled from "styled-components";
import Devices from "@helper/Devices";
import { placeholder } from "@styles/colors";

const Search = styled.input`   
    border: none;
    border-radius: 10px;
    background: #21314a;
    padding: 7px;
    margin-top: 10px;
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
const Label = styled.label`
    position: relative;
    &::before{
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("./img/searchicon.svg") center / contain no-repeat ;
        padding-left:30px;
    }
`

const Suggestions = styled.div`    
    position: absolute;
    z-index: 2;
    background: #17253b;
`
export { Search, Label, Suggestions };