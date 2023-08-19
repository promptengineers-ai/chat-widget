import { useContext, createContext, useState, useRef, useEffect } from "react";
import { sendOpenAiFunctionChatMessage } from '../utils/api';

export interface IContextProvider {
  children: React.ReactNode;
}

export type ChatContextType = {
  chatboxRef: React.MutableRefObject<null>;
  userInputRef: React.MutableRefObject<HTMLInputElement | null>;
  messages: { role: string; content: string }[];
  setMessages: (messages: { role: string; content: string }[]) => void;
  sendChatPayload: () => void;
  chatPayload: {
    systemMessage: string;
    query: string;
    temperature: number;
    model: string;
    vectorstore: string;
    functions: string[];
  };
  setChatPayload: (payload: any) => void;
  resetMessages: () => void; // This seems to be missing from your type but used in the Provider
  handleChatboxClick: (e: MouseEvent) => void;
};

const defaultChatContextValue: ChatContextType = {
  chatboxRef: { current: null },
  userInputRef: { current: null },
  messages: [],
  setMessages: () => {},
  sendChatPayload: () => {},
  chatPayload: { systemMessage: '', query: '', temperature: 0, model: '', vectorstore: '', functions: [] },
  setChatPayload: () => {},
  resetMessages: () => {}, // Default value
  handleChatboxClick: () => {}, // Default value
};

const ChatContext = createContext(defaultChatContextValue);
export default function ChatProvider({ children }: IContextProvider) {
  const chatboxRef = useRef(null);
  const userInputRef = useRef<HTMLInputElement | null>(null);
  const [chatPayload, setChatPayload] = useState({
    systemMessage: 'You are a helpful assistant.',
    query: '',
    temperature: 0,
    model: 'gpt-3.5-turbo-16k',
    vectorstore: '',
    functions: [
      "get_word_length"
    ]
  });
  const [messages, setMessages] = useState([
    {role: 'system', content: ''},
  ]);

  function resetMessages() {
    setMessages([
      {role: 'system', content: ''},
    ]);  
  };

  function handleChatboxClick(e: MouseEvent) {
    console.log('Chatbox button clicked');
    if ((e.target as HTMLElement).closest('.copy-btn')) {
      console.log('Copy button clicked');
      // 2. Get the code content
      const preElement = (e.target as HTMLElement).closest('pre');
      const codeContent = preElement?.querySelector('code')?.innerText || '';
      console.log(codeContent)
      // 3. Use Clipboard API to copy
      navigator.clipboard.writeText(codeContent).then(() => {
        // Optional: Show a toast or feedback to user saying "Copied to clipboard!"
        alert('Copied to clipboard!');
        return;
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }

    if ((e.target as HTMLElement).closest('.delete-btn')) {
      const chatbox = document.getElementById('chatbox') as HTMLElement;
      const messageDiv = (e.target as HTMLElement).closest('.message') as HTMLElement;
      const allMessages = Array.from(chatbox.children);
      const messageIndex = allMessages.indexOf(messageDiv);

      // Create a copy of the current messages
      const updatedMessages = [...messages];
      let lastElement = updatedMessages[messageIndex + 1];
      setChatPayload({...chatPayload, query: lastElement.content});

      // Remove elements from the array
      allMessages.splice(messageIndex);
      updatedMessages.splice(messageIndex+1); // Includes a system message
      setMessages(updatedMessages);

      // Remove corresponding DOM elements
      while (chatbox.children.length > messageIndex) {
        chatbox.removeChild(chatbox.lastChild!);
      }
    }
  }

  async function updateCallback(streamMessages: {role: string, content: string}[]): Promise<void> {
    setMessages(streamMessages);
    // setLoading(false);
    setChatPayload({...chatPayload, query: '' });
    userInputRef.current?.focus();
  }

  function sendChatPayload() {
    if (!chatPayload.query) {
      alert('Please enter a message first.');
      return;
    }

    // Create a copy of the current messages
    const updatedMessages = [...messages];

    // Append the user's message to the conversation
    updatedMessages[0].content = localStorage.getItem('systemMessage') || chatPayload.systemMessage;
    updatedMessages.push({role: 'user', content: chatPayload.query});

    // Construct the payload
    const model = localStorage.getItem('model') || chatPayload.model;
    const temperature = parseFloat(localStorage.getItem('temperature') || '') || chatPayload.temperature;
    const payload = {
      model,
      temperature,
      messages: updatedMessages,
    }

    sendOpenAiFunctionChatMessage({
      ...payload,
      functions: chatPayload.functions
    }, updateCallback);
  }

  
  useEffect(() => {
    // 1. Add an event listener on the chatbox
    const chatbox = document.getElementById('chatbox');
    chatbox?.addEventListener('click', handleChatboxClick);
    
    userInputRef.current?.focus();

    // Cleanup event listener
    return () => {
      chatbox?.removeEventListener('click', handleChatboxClick);
    };
  }, [messages, userInputRef]);

  return (
    <ChatContext.Provider
      value={{
        chatboxRef,
        userInputRef,
        messages,
        setMessages,
        resetMessages,
        chatPayload,
        setChatPayload,
        sendChatPayload,
        handleChatboxClick,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext(): any {
  return useContext(ChatContext);
}