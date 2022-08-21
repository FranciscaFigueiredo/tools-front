import { ToolIcon, ToolName, ToolsContainer } from './style';

export default function Box({ appId, name, color, icon, link }) {
    console.log({ appId, name, color, icon, link });
    return (
        <ToolsContainer color={ color }>
            <ToolIcon src={ icon } />
            <ToolName>{ name }</ToolName>
        </ToolsContainer>
    );
}
