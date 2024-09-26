import React, { useState, useEffect } from 'react';
import './chatbot.css';
import axios from 'axios';

const Chatbot = () => {
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('chatbot-sessions')) || [];
    setSessions(savedSessions);
    if (savedSessions.length > 0) {
      loadSession(savedSessions[0].sessionId);
    } else {
      startNewSession();
    }
  }, []);

  const startNewSession = async () => {
    try {
      console.log('Starting new session...');
      const response = await axios.post('http://localhost:3004/api/sessions', { sessionId: `session-${Date.now()}` });
      const newSession = response.data;
      console.log('New session created:', newSession);
      const updatedSessions = [newSession, ...sessions];
      setSessions(updatedSessions);
      setCurrentSessionId(newSession.sessionId);
      setMessages([]);
      localStorage.setItem('chatbot-sessions', JSON.stringify(updatedSessions));
    } catch (error) {
      console.error('Error creating a new session:', error);
    }
  };

  const loadSession = async (sessionId) => {
    try {
      console.log(`Loading session ${sessionId}...`);
      const response = await axios.get(`http://localhost:3004/api/sessions/${sessionId}`);
      const session = response.data;
      console.log('Loaded session:', session);
      setCurrentSessionId(sessionId);
      setMessages(session.messages);
    } catch (error) {
      console.error('Error loading the session:', error);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { text: input, user: 'user', timestamp: new Date() };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput('');
      setLoading(true);

      try {
        console.log('Sending message to backend...');
        const result = await axios.post('', { query: input, sessionId: currentSessionId });

        setTimeout(() => {
          const botMessage = { text: result.data.answer, user: 'bot', timestamp: new Date() };
          const updatedMessagesWithBot = [...updatedMessages, botMessage];
          setMessages(updatedMessagesWithBot);
          updateSessionMessages(currentSessionId, updatedMessagesWithBot);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error querying the backend:', error);
        const errorMessage = { text: 'Error querying the backend. Please check the console for more details.', user: 'bot', timestamp: new Date() };
        const updatedMessagesWithError = [...updatedMessages, errorMessage];
        setMessages(updatedMessagesWithError);
        updateSessionMessages(currentSessionId, updatedMessagesWithError);
        setLoading(false);
      }
    }
  };

  const updateSessionMessages = async (sessionId, updatedMessages) => {
    const updatedSessions = sessions.map(session =>
      session.sessionId === sessionId ? { ...session, messages: updatedMessages } : session
    );
    setSessions(updatedSessions);
    localStorage.setItem('chatbot-sessions', JSON.stringify(updatedSessions));
  
    try {
      console.log(`Updating session ${sessionId}...`);
      await axios.put(`http://localhost:3004/api/sessions/${sessionId}`, { messages: updatedMessages });
    } catch (error) {
      console.error('Error updating the session:', error);
    }
  };
  //mongodb://localhost:27017/
  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <aside className="chatbot-sidebar">
          <button className="new-session-button" onClick={startNewSession}>New Session</button>
          <ul className="session-list">
            {sessions.map((session, index) => (
              <li
                key={index}
                className={`session-item ${session.sessionId === currentSessionId ? 'active' : ''}`}
                onClick={() => loadSession(session.sessionId)}
              >
                {session.sessionId}
              </li>
            ))}
          </ul>
        </aside>
        <main className="chatbot-main">
          <header className="chatbot-header">
            <h2>Chatbot</h2>
          </header>
          <div className="chat-window">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.user}`}>
                  <span className="message-text">{message.text}</span>
                  <span className="message-timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
                </div>
              ))}
              {loading && (
                <div className="chat-message bot">
                  <span className="message-text">Bot is typing...</span>
                </div>
              )}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={loading}
              />
              <button onClick={handleSend} disabled={loading}>Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chatbot;
