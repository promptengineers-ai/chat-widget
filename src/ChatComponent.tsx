// src/ChatComponent.tsx

import React from 'react';
import ChatWidget from './ChatWidget';
import ChatProvider from './contexts/ChatContext';

type ChatProps = {
    position?: string,
    backgroundColor?: string,
    textColor?: string,
}

const ChatComponent: React.FC<ChatProps> = (props) => {
    return (
        <ChatProvider>
            <ChatWidget
                position={'bottom-right'}
                backgroundColor={props.backgroundColor || '#1A202C'}
                textColor={props.textColor || '#fff'}
            />
        </ChatProvider>
    );
}

export default ChatComponent;
