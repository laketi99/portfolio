import React, { useState } from 'react';

const Chatbot = () => {
  const [chatMessages, setChatMessages] = useState([
    "Chatbot: How can I help you with Kean University or its professors?",
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // To control visibility of the chatbot
  const [loading, setLoading] = useState(false); // For showing loading status

  // Function to send message to the API
  const handleSend = async () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, `You: ${inputMessage}`]);

      // Set loading to true while waiting for API response
      setLoading(true);

      // Call the API and get a response
      const response = await getChatbotResponse(inputMessage);

      // Add the API's response to the chat messages
      setChatMessages((prevMessages) => [...prevMessages, `Chatbot: ${response}`]);

      // Clear the input and loading status
      setInputMessage("");
      setLoading(false);
    }
  };

  // Function to call GPT-3 API
  const getChatbotResponse = async (message) => {
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Access the key from environment variables

    const apiURL = "https://api.openai.com/v1/completions";
    const data = {
      model: "text-davinci-003", // You can use other GPT models like GPT-4 depending on your access
      prompt: message,
      max_tokens: 100, // Limit the response length
      temperature: 0.5, // Adjust creativity level
    };

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("API response error: ", response.statusText);
        return "Sorry, there was an issue fetching the response. Please try again later.";
      }

      const json = await response.json();
      console.log("API response data:", json); // Log the response data for debugging
      return json.choices[0].text.trim();
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "I'm sorry, there was an issue getting the response.";
    }
  };

  return (
    <div>
      {/* Button to toggle chatbot visibility */}
      <button 
        onClick={() => setIsChatbotVisible(!isChatbotVisible)} 
        style={{
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          padding: '10px 20px',
          backgroundColor: '#0288d1', 
          color: '#fff', 
          borderRadius: '5px', 
          border: 'none', 
          cursor: 'pointer'
        }}
      >
        {isChatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>

      {/* Conditional rendering of chatbot */}
      {isChatbotVisible && (
        <div className="chatbot-container">
          <div className="chat-window">
            {chatMessages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
            {loading && <p>Chatbot is typing...</p>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question..."
              style={{ color: '#000' }} // Ensure text is visible
              disabled={loading} // Disable input while waiting for API response
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
