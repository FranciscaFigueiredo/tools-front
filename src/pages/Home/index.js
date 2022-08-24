import { useContext } from 'react';

import ToolContext from '../../contexts/ToolContext';

import Details from '../../components/Details';
import Header from '../../components/Header';
import ToolsCard from '../../components/ToolsCard';

import { ContentContainer, PageContainer } from '../../styles/ContainerStyle';

export default function Home() {
    const { toolInfo } = useContext(ToolContext);

    return (
        <PageContainer>
            <Header  />
            <ContentContainer>
                <ToolsCard  />
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
