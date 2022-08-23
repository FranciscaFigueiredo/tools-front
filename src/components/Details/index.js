import { useContext } from 'react';
import ToolContext from '../../contexts/ToolContext';
import ModalBlur from '../ModalBlurBackground';
import Content from './Content';

export default function Details({ appId, name, color, icon, link }) {
    const { handleChange } = useContext(ToolContext);

    return (
        <>
            <ModalBlur />
            <Content
                name={ name }
                color={ color }
                icon={ icon }
                link={ link }
            />
        </>
    );
}
