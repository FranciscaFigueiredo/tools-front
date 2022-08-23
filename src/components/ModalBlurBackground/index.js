import { useContext } from 'react';
import ToolContext from '../../contexts/ToolContext';
import { BlurBackground } from './style';

export default function ModalBlur({ appId, name, color, icon, link }) {
    const { handleChange } = useContext(ToolContext);

    return (
        <BlurBackground onClick={() => {
            handleChange({
                appId: null,
                name: null,
                color: null,
                icon: null,
                link: null,
            });
        }} />
    );
}
