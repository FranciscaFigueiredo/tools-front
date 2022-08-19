import Search from '../Search';
import { HeaderContainer, Logo, LogoIcon, Title } from './style';

export default function Header() {
    return (
        <HeaderContainer>
            <Search />
            <Logo>
                <LogoIcon />
                <Title>Tools</Title>
            </Logo>
        </HeaderContainer>
    );
}
