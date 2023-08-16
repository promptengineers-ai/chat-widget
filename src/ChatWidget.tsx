import React, { useEffect, useRef, useState } from 'react';
import './ChatWidget.css';
import { SiOpenai } from 'react-icons/si';
import ChatProvider, { useChatContext } from './contexts/ChatContext';

interface ChatWidgetProps {
  apiKey: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center-bottom' | 'center-top';
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  apiKey,
  position = 'bottom-right',
  backgroundColor = '#f0f0f0',
  textColor = '#000',
  fontFamily = 'sans-serif',
}) => {
  const { 
    messages, 
    setMessages, 
    sendChatPayload, 
    chatPayload, 
    setChatPayload,
    userInputRef,
    chatboxRef
  } = useChatContext();
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const componentStyle = {
    backgroundColor,
    fontFamily,
    color: textColor,
    borderRadius: '10px',
  };

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);

  return (
    <div className={`my-component ${position} ${isExpanded ? 'expanded' : ''}`} style={componentStyle}>
      {isExpanded ? (
        <div style={{ width: "100%" }}>
          <div>
            <button onClick={handleClick} style={{ position: 'absolute', right: 0, top: 0 }}>
              x
            </button>
          </div>
          <div id="chatbox" className="chat-window" style={{ overflowY: 'auto', maxHeight: '490px' }} ref={chatWindowRef}>
          </div>
          <form style={{ display: 'flex', marginTop: '8px' }}>
            <input
              type="text"
              value={chatPayload.query}
              onChange={(e) => setChatPayload({...chatPayload, query: e.target.value})}
              placeholder="Type your message..."
              style={{ flexGrow: 1, marginRight: '8px', borderRadius: '5px', padding: '5px' }}
              ref={userInputRef}
            />
            <button 
              onClick={(e) => {
                e.preventDefault();
                sendChatPayload();
              }}
              type="submit" 
              style={{ borderRadius: '5px', padding: '5px' }}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <SiOpenai size={'30px'} onClick={handleClick} />
      )}
    </div>
  );
};

export default ChatWidget;
