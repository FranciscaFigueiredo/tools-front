import { useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';
import { SearchContainer, SearchIcon, SearchInput } from './style';

export default function Search() {
    const { searchInfo, handleChange } = useContext(SearchContext)
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder="Buscar ferramenta"
                required
                value={searchInfo}
                onChange={(event) => handleChange(event.target.value)}
            />
        </SearchContainer>
    );
}
