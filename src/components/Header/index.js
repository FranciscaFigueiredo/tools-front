import Search from '../Search';
import { HeaderContainer, HeaderContent, Logo, LogoIcon, Title } from './style';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <LogoIcon />
                    <Title>Tools</Title>
                </Logo>
                <Search />
            </HeaderContent>
        </HeaderContainer>
    );
}
