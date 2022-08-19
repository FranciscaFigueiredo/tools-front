import { SearchContainer, SearchIcon, SearchInput } from "./style";

export default function Search() {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder="Buscar ferramenta"
                required
                // value=
                // onChange={(event) => setSearch(event.target.value)}
            />
        </SearchContainer>
    );
}
