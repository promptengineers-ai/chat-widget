import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './ChatWidget';
import ChatProvider from './contexts/ChatContext';

const container = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(container);

// Render the component.
root.render(
    <ChatProvider>
        <ChatWidget
            position="bottom-right"
            backgroundColor="#1A202C"
            textColor="#fff"
        />
    </ChatProvider>
);