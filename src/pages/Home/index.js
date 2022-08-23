import { useContext, useEffect } from 'react';
import { useState } from 'react';
import Details from '../../components/Details';
import Header from '../../components/Header';
import ModalBlur from '../../components/ModalBlurBackground';
import ToolsCard from '../../components/ToolsCard';
import ToolContext from '../../contexts/ToolContext';
import { ContentContainer, PageContainer } from '../../styles/ContainerStyle';

export default function Home() {
    const [search, setSearch] = useState(null);

    const { toolInfo } = useContext(ToolContext);

    useEffect(() => {}, [search]);

    return (
        <PageContainer>
            <Header search={ search } setSearch={ setSearch } />
            <ContentContainer>
                <ToolsCard search={ search } setSearch={ setSearch } />
            </ContentContainer>
            {
                toolInfo?.name ?
                    <Details
                        appId={ toolInfo.appId }
                        name={ toolInfo.name }
                        color={ toolInfo.color }
                        icon={ toolInfo.icon }
                        link={ toolInfo.link }
                    />
                    : ''
            }
        </PageContainer>
    );
}
