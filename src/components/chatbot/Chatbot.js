import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    // Handle sending the user's message to the chatbot here and update the state.
    setMessages([...messages, { text: input, type: 'user' }]);
    setInput('');
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type a message..."
          className="w-full border p-2 rounded"
        />
      </form>
    </div>
  );
};

export default Chatbot;
