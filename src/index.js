import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToolProvider } from './contexts/ToolContext';
import { ToolsHistoricProvider } from './contexts/ToolsHistoricContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ToolProvider>
            <ToolsHistoricProvider>
                <App />
            </ToolsHistoricProvider>
        </ToolProvider>
    </React.StrictMode>
);
