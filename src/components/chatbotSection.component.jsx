import React from "react";
import ChatWithUs from "../assets/chat-withus-btn.svg?react";
import ChatBot from "react-simple-chatbot";
import { useState } from "react";

const ChatbotSection = ({ steps }) => {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="t-fixed t-bottom-f-16 t-right-f-16 t-z-20">
      {/* close button */}
      {showChat ? (
        <>
          <ChatBot steps={steps} />
          <button
            className="t-text-f-l t-bg-f-primary-30 t-text-f-primary-98 t-w-f-32 t-h-f-32 t-flex t-justify-center t-items-center t-rounded-full t-absolute -t-top-f-32 t-right-0 hover:t-bg-opacity-50"
            onClick={() => setShowChat(false)}
          >
            &times;
          </button>
        </>
      ) : (
        <button onClick={() => setShowChat(true)}>
          <ChatWithUs />
        </button>
      )}
    </div>
  );
};

export default ChatbotSection;
