import Search from '../Search';
import { HeaderContainer, HeaderContent, Logo, LogoIcon, Title } from './style';

export default function Header({ search, setSearch }) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <LogoIcon />
                    <Title>Tools</Title>
                </Logo>
                <Search search={ search } setSearch={ setSearch } />
            </HeaderContent>
        </HeaderContainer>
    );
}
