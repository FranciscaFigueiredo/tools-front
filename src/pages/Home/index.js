import Header from '../../components/Header';
import ToolsCard from '../../components/ToolsCard';
import { ContentContainer, PageContainer } from '../../styles/ContainerStyle';

export default function Home() {
    return (
        <PageContainer>
            <Header />
            <ContentContainer>
                <ToolsCard />
            </ContentContainer>
        </PageContainer>
    );
}
