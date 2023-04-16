import React from 'react';
import ReactDOM from 'react-dom';
import ChatWidget from './ChatWidget';

ReactDOM.render(
    <ChatWidget
        apiKey="your-api-key"
        position="bottom-right"
        backgroundColor="#3498db"
        textColor="#fff"
    />,
    document.getElementById('app')
);
