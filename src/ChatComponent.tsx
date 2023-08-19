// src/ChatComponent.tsx

import React from 'react';
import ChatWidget from './ChatWidget';
import ChatProvider from './contexts/ChatContext';
import getConfig from './config';
import { ConfigContext } from './contexts/ConfigContext';

type ChatProps = {
    position?: string,
    backgroundColor?: string,
    textColor?: string,
    serverUrl?: string,
    iconPath?: string,
}

const ChatComponent: React.FC<ChatProps> = (props) => {
    const config = getConfig(props.serverUrl || '');
    return (
        <ConfigContext.Provider value={config}>
          <ChatProvider>
              <ChatWidget
                  position={'bottom-right'}
                  backgroundColor={props.backgroundColor || '#1A202C'}
                  textColor={props.textColor || '#fff'}
              />
          </ChatProvider>  
        </ConfigContext.Provider>
    );
}

export default ChatComponent;
