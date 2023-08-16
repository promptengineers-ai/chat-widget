import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  VStack,
  Flex,
  Text,
  useColorModeValue,
  ChakraProvider,
  FormControl
} from '@chakra-ui/react';
import { SiOpenai } from 'react-icons/si';

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

  const bgColor = useColorModeValue(backgroundColor, "#1A202C");
  const color = useColorModeValue(textColor, "#E2E8F0");

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded]);

  return (
    <ChakraProvider>
      <Flex
        direction="column"
        position="fixed"
        bottom={position.includes('bottom') ? 4 : 'auto'}
        top={position.includes('top') ? 4 : 'auto'}
        right={position.includes('right') ? 4 : 'auto'}
        left={position.includes('left') ? 4 : 'auto'}
        bgColor={bgColor}
        color={color}
        fontFamily={fontFamily}
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
        maxW="350px"
        zIndex="modal"
      >
        {isExpanded ? (
          <VStack spacing={3} p={4} w="full">
            <Flex w="full" justifyContent="flex-end">
              <Button variant="ghost" onClick={handleClick} p={1} color="white">
                <CloseIcon />
              </Button>
            </Flex>
            <Box
              flex="1"
              w="full"
              overflowY="auto"
              maxHeight="490px"
              borderColor={color}
              borderWidth="1px"
              ref={chatWindowRef}
            >
              {messages.map((message, index) => (
                <Box
                  key={index}
                  p={2}
                  m={2}
                  bgColor={message.sender === 'user' ? bgColor : 'purple.500'}
                  borderRadius="md"
                >
                  <Text>{message.text}</Text>
                  <Text fontSize="xs" textAlign={message.sender === 'user' ? 'left' : 'right'}>
                    {message.timestamp}
                  </Text>
                </Box>
              ))}
            </Box>
            <FormControl as="form" onSubmit={handleSendMessage} display="flex" w="full" mt={2}>
              <Input
                flex="1"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                borderRadius="md"
                mr={2}
                ref={inputRef}
              />
              <Button type="submit" colorScheme="teal">
                Send
              </Button>
            </FormControl>
          </VStack>
        ) : (
          <Box p={2} onClick={handleClick}>
            <SiOpenai size="30px" />
          </Box>
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default ChatWidget;
