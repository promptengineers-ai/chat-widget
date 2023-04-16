import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

ReactDOM.render(
    <MyComponent
        apiKey="your-api-key"
        position="bottom-right"
        backgroundColor="#3498db"
        textColor="#fff"
    />,
    document.getElementById('app')
);
