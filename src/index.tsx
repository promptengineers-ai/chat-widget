import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
// import './tailwind.css';
import ChatWidget from './ChatWidget';

// Create a root.
const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container); 

// Render the component.
root.render(
    <ChatWidget
        apiKey="your-api-key"
        position="bottom-right"
        backgroundColor="#1A202C"
        textColor="#fff"
        fontFamily="Courier, monospace"
    />
);
