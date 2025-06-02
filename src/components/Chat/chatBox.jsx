"use client";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoreVertical, Send, Image, Smile, Minimize2, X } from "lucide-react";
import {
  sendMessage,
  closeChat,
  minimizeChat,
  markAllAsRead,
} from "../../features/chatSlice";

const ChatBox = ({ selectedChat }) => {
  const dispatch = useDispatch();
  const { messages, isTyping, isChatOpen, isMinimized, unreadCount } =
    useSelector((state) => state.chat);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mark messages as read when chat is visible and not minimized
    if (isChatOpen && !isMinimized && unreadCount > 0) {
      dispatch(markAllAsRead());
    }
  }, [isChatOpen, isMinimized, unreadCount, dispatch]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" || !selectedChat) return;

    dispatch(sendMessage(inputMessage.trim()));
    setInputMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCloseChat = () => {
    dispatch(closeChat());
  };

  const handleMinimizeChat = () => {
    dispatch(minimizeChat());
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Select a conversation
          </h3>
          <p className="text-gray-500">
            Choose a conversation from the sidebar to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white flex-shrink-0">
        <div className="flex items-center">
          <div className="relative flex-shrink-0">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            {selectedChat.isOnline && (
              <span className="absolute bottom-0 right-2 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
            )}
          </div>
          <div>
            <h3 className="font-medium">{selectedChat.name}</h3>
            <p className="text-xs text-gray-500">
              {isTyping ? (
                <span className="text-blue-500">Typing...</span>
              ) : selectedChat.isOnline ? (
                "Online"
              ) : (
                `Last seen ${selectedChat.lastSeen}`
              )}
            </p>
          </div>
        </div>

        {/* Header Actions */}
        {/* <div className="flex items-center space-x-2">
          <button
            onClick={handleMinimizeChat}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Minimize2 className="h-4 w-4 text-gray-500" />
          </button>
          <button
            onClick={handleCloseChat}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div> */}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-2">
              <div
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[75%]">
                  {msg.sender !== "user" && (
                    <div className="flex items-center mb-1 space-x-2">
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="text-xs text-gray-500">
                        {msg.timestamp}
                      </span>
                    </div>
                  )}

                  <div className="relative group">
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-red-700 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Images (if any) */}
                      {msg.images && (
                        <div className="mt-2 flex space-x-2">
                          {msg.images.map((img, i) => (
                            <div key={i} className="rounded-lg overflow-hidden">
                              <img
                                src={img}
                                alt={`Attachment ${i + 1}`}
                                className="h-20 w-auto"
                              />
                            </div>
                          ))}
                          {msg.moreImages && (
                            <div className="h-20 w-20 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="font-semibold">
                                +{msg.moreImages}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>

                  {msg.sender === "user" && (
                    <div className="flex justify-end items-center mt-1">
                      <span className="text-xs text-gray-500 mr-2">
                        {msg.timestamp}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          msg.isRead ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[75%]">
                <div className="flex items-center mb-1 space-x-2">
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-xs text-gray-500">Typing...</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-white flex-shrink-0">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Image className="h-5 w-5 text-gray-500" />
          </button>

          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type something ..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            onKeyDown={handleKeyDown}
          />

          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Smile className="h-5 w-5 text-gray-500" />
          </button>

          <button
            onClick={handleSendMessage}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full h-9 w-9 flex items-center justify-center p-0 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
