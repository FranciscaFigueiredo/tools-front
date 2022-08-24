import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';
import { ToolProvider } from './contexts/ToolContext';
import { ToolsHistoricProvider } from './contexts/ToolsHistoricContext';
import { ToolListProvider } from './contexts/ToolsListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ToolProvider>
            <ToolsHistoricProvider>
                <SearchProvider>
                    <ToolListProvider>
                        <App />
                    </ToolListProvider>
                </SearchProvider>
            </ToolsHistoricProvider>
        </ToolProvider>
    </React.StrictMode>
);
