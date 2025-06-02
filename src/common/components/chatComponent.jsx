"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X, Send, Minimize2, Maximize2, MessageCircle } from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  closeChat,
  minimizeChat,
  maximizeChat,
  sendMessage,
  markAllAsRead,
  openChat,
  pinChat,
} from "@/features/chatSlice";

function Chat() {
  const dispatch = useDispatch();
  const {
    isChatOpen,
    isMinimized,
    messages,
    unreadCount,
    currentSeller,
    isTyping,
    isPinned,
  } = useSelector((state) => state.chat);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mark messages as read when chat is opened and maximized
  useEffect(() => {
    if (isChatOpen && !isMinimized && unreadCount > 0) {
      dispatch(markAllAsRead());
    }
  }, [isChatOpen, isMinimized, unreadCount, dispatch]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      dispatch(sendMessage(newMessage));
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleOpenChat = () => {
    const sellerInfo = {
      name: "Peak",
      location: "Canada",
      id: "4545",
    };
    dispatch(openChat(sellerInfo));
  };

  const handleMinimize = () => {
    dispatch(minimizeChat());
  };

  const handleMaximize = () => {
    dispatch(maximizeChat());
  };

  const handleClose = () => {
    dispatch(closeChat());
  };

  const handlePinChat = () => {
    dispatch(pinChat(!isPinned)); // toggle pin state
  };

  // Floating chat bubble when closed but has messages
  if (!isChatOpen && currentSeller) {
    return (
      <div className="fixed bottom-4 right-4 z-50" onClick={handleOpenChat}>
        <div className="relative">
          <Button
            onClick={() => dispatch(maximizeChat())}
            className="w-16 h-16 rounded-full bg-red-700 hover:bg-red-800 shadow-lg"
          >
            <MessageCircle size={24} className="text-white" />
          </Button>

          {/* Unread count badge */}
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {unreadCount > 9 ? "9+" : unreadCount}
            </div>
          )}

          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (!isChatOpen || !currentSeller) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      <div
        className={`bg-white rounded-lg shadow-2xl border ${
          isMinimized ? "w-80 h-16" : "w-80 h-96"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="bg-red-700 text-white p-3 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">
                {currentSeller?.name?.charAt(0) || "P"}
              </span>
            </div>
            <div>
              <p className="font-semibold text-sm">
                {currentSeller?.name || "Peak"}
              </p>
              <p className="text-xs opacity-90">
                {isTyping ? "Typing..." : "Online"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {/* Unread count badge */}
            {unreadCount > 0 && (
              <div className="bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-1">
                {unreadCount > 9 ? "9+" : unreadCount}
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto w-auto text-white hover:bg-red-600"
              onClick={handlePinChat}
            >
              {isPinned ? (
                <BsAppIndicator size={14} className="text-white" />
              ) : (
                <BsAppIndicator size={14} className="text-gray-400" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto w-auto text-white hover:bg-red-600"
              onClick={isMinimized ? handleMaximize : handleMinimize}
            >
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto w-auto text-white hover:bg-red-600"
              onClick={handleClose}
            >
              <X size={14} />
            </Button>
          </div>
        </div>

        {/* Chat Content */}
        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-2 rounded-lg relative ${
                      message.sender === "user"
                        ? "bg-red-700 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-red-100"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                    {/* New message indicator */}
                    {!message.isRead && message.sender === "seller" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[70%] p-2 rounded-lg bg-gray-100 text-gray-800">
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
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-red-700 hover:bg-red-800 px-3"
                  disabled={!newMessage.trim()}
                >
                  <Send size={14} />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Notification dot when minimized and has unread messages */}
      {isMinimized && unreadCount > 0 && (
        <div className="absolute -top-2 -right-2">
          <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
