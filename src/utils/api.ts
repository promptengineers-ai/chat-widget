import { ConfigType } from '../contexts/ConfigContext';
import { 
  constructUserMessageDiv, 
  readStreamResponse,
} from './chat';

/**----------------------------------------------------------
 * Send a message to the server and get a response
 * ----------------------------------------------------------
 * @returns 
 */
 export function sendOpenAiChatMessage(
  config: ConfigType,
  payload: {
    model: string,
    temperature: number,
    messages: {role: string, content: string}[],
  },
  cb: (streamMessages: {role: string, content: string}[]) => void
) {
  // Add the user's message to the messages array
	let userMessageDiv = constructUserMessageDiv(payload.messages);

  // Add the message div to the chatbox
  let chatbox = document.getElementById('chatbox') as HTMLDivElement;
	chatbox.appendChild(userMessageDiv);

  fetch(`${config?.api.SERVER_URL}/chat/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      messages: payload.messages,
      model: payload.model,
      temperature: payload.temperature,
    }),
  }).then(response => {
    console.log('Server Response:', response);
    readStreamResponse(response, payload.messages, chatbox, cb);   
  });
}

/**----------------------------------------------------------
 * Send a message to the server and get a response
 * ----------------------------------------------------------
 * @returns 
 */
 export function sendOpenAiFunctionChatMessage(
  config: ConfigType,
  payload: {
    model: string,
    temperature: number,
    messages: {role: string, content: string}[],
    functions: string[],
  },
  cb: (streamMessages: {role: string, content: string}[]) => void
) {
  // Add the user's message to the messages array
	let userMessageDiv = constructUserMessageDiv(payload.messages);

  // Add the message div to the chatbox
  let chatbox = document.getElementById('chatbox') as HTMLDivElement;
	chatbox.appendChild(userMessageDiv);

  fetch(`${config?.api.SERVER_URL}/chat/stream/functions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      messages: payload.messages,
      model: payload.model,
      temperature: payload.temperature,
      functions: payload.functions,
    }),
  }).then(response => {
    console.log('Server Response:', response);
    readStreamResponse(response, payload.messages, chatbox, cb);   
  });
}