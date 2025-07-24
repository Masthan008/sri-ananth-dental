import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FloatingChatBotProps {
  showServicesNav?: boolean;
}

export const FloatingChatBot = ({ showServicesNav }: FloatingChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isUser: false
      }]);
    }, 1000);

    setInputText("");
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          {/* Navigation to Services Page */}
          {showServicesNav && (
            <div className="p-4 border-b border-gray-200 flex justify-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                onClick={() => { setIsOpen(false); navigate('/services'); }}
              >
                Go to Services
              </button>
            </div>
          )}
          <div className="p-4 bg-blue-500 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with Us</h3>
          </div>
          
          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
