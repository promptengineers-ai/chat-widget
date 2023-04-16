import React, { useEffect, useRef, useState } from 'react';
import './ChatWidget.css';
import { SiOpenai } from 'react-icons/si';

interface MyComponentProps {
  apiKey: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center-bottom' | 'center-top';
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  apiKey,
  position = 'bottom-right',
  backgroundColor = '#f0f0f0',
  textColor = '#000',
  fontFamily = 'sans-serif',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello. How are you today?', sender: 'bot', timestamp: '11:00' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'user', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'bot', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'user', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'bot', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'user', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'bot', timestamp: '11:01' },
    { text: "Hey! I'm fine. Thanks for asking!", sender: 'user', timestamp: '11:01' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);
    setNewMessage('');
    inputRef.current?.focus();
  };
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
          <div className="chat-window" style={{ overflowY: 'auto', maxHeight: '490px' }} ref={chatWindowRef}>
            {messages.map((message, index) => (
              <div key={index} className={`container ${message.sender === 'user' ? 'darker' : ''}`}>
                <p>{message.text}</p>
                <span className={`time-${message.sender === 'user' ? 'left' : 'right'}`}>{message.timestamp}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', marginTop: '8px' }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ flexGrow: 1, marginRight: '8px', borderRadius: '5px', padding: '5px' }}
              ref={inputRef}
            />
            <button type="submit" style={{ borderRadius: '5px', padding: '5px' }}>
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

export default MyComponent;
