import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine 
       height= "100vh"
       projectID="45d5c73d-aff7-453e-b746-d2dfaa9ec587"
       userName="Shiyas"
       userSecret="123123"
       renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} /> }
    />
  );
}

export default App;
