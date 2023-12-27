import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`p-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
      <div
        className={`py-1 px-2 rounded ${
          message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;

