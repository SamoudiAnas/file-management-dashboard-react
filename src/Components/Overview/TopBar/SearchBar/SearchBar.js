import styled from "styled-components";
import SearchIcon from '../../../Icons/search.svg';


export const SearchContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 2rem ;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
`;

export const SearchInputIcon = styled.img`
    width: 25px;
    height:25px;
    margin: 0 10px;
`;

export const SearchInput = styled.input`
    width: 15rem;
    font-family: 'Poppins',sans-serif;
    border: transparent;

    &::placeholder{
        color: #bbb;
        font-family: 'Poppins',sans-serif;
        font-size: 1em;
        font-weight: 400;
    }

    &:focus{
        outline: none !important;
        color: #bbb;
        font-family: 'Poppins',sans-serif;
    }


`;


const SearchBar =()=>{
    return(
        <SearchContainer>
            <SearchInputIcon src={SearchIcon} />
            <SearchInput type="text" placeholder="Search for files" />
        </SearchContainer>
    );
};



export default SearchBar;