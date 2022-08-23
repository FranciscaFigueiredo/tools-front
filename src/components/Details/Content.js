import { ToolIcon, ToolName, ToolsContainer, ToolsContent } from '../ToolsCard/style';
import { DetailContent, ToolAccessButton, ToolDetail } from './style';

export default function Content({ name, color, icon, link }) {
    return (
        <DetailContent onClick={() => null}>
            <ToolsContent>
                <ToolsContainer color={ color }>
                    <ToolIcon src={ icon } />
                </ToolsContainer>
                <ToolDetail>
                    <ToolName>{ name }</ToolName>
                    <ToolAccessButton onClick={ ()=> window.open(link, '_blank') }>Acessar</ToolAccessButton>
                </ToolDetail>
            </ToolsContent>
        </DetailContent>
    );
}
