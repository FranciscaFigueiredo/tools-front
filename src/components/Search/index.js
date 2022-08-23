import { SearchContainer, SearchIcon, SearchInput } from './style';

export default function Search({ search, setSearch }) {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder="Buscar ferramenta"
                required
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </SearchContainer>
    );
}
