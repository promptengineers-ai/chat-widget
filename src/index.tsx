import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './tailwind.css';
import ChatWidget from './ChatWidget';

ReactDOM.render(
    <ChatWidget
        apiKey="your-api-key"
        position="bottom-right"
        backgroundColor="#1A202C"
        textColor="#fff"
        fontFamily="Courier, monospace"
    />,
    document.getElementById('app')
);
