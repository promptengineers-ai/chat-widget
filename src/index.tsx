import ReactDOM from 'react-dom/client';
import ChatComponent from './ChatComponent';

const container = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(container);

// Render the component.
root.render(
    <ChatComponent
        serverUrl='http://localhost:8000'
    />
);

export { default as ChatComponent } from './ChatComponent';
