"use client";
import { useState, useEffect, useRef } from "react";
import { MoreVertical, Send, Image, Smile } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBox = ({ selectedChat, messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChat]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      sender: "You",
      content: inputMessage,
      avatar: "/api/placeholder/30/30",
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    onSendMessage(selectedChat.id, newMessage);
    setInputMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
    <div className="flex-1 flex flex-col h-full overflow-hidden ">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white flex-shrink-0">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <img src={selectedChat.avatar} alt={selectedChat.name} />
          </Avatar>
          <div>
            <h3 className="font-medium">{selectedChat.name}</h3>
            <p className="text-xs text-gray-500">
              {selectedChat.isOnline
                ? "Online"
                : `Last seen ${selectedChat.lastSeen}`}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-2">
              <div
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[75%]">
                  {!msg.isUser && (
                    <div className="flex items-center mb-1 space-x-2">
                      <Avatar className="h-6 w-6">
                        <img src={msg.avatar} alt={msg.sender} />
                      </Avatar>
                      <span className="text-xs text-gray-500">
                        {msg.timestamp}
                      </span>
                    </div>
                  )}

                  <div className="relative group">
                    <div
                      className={`p-3 rounded-lg ${
                        msg.isUser
                          ? "bg-red-700 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{msg.content}</p>

                      {/* Images */}
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

                  {msg.isUser && (
                    <div className="flex justify-end items-center mt-1">
                      <span className="text-xs text-gray-500 mr-2">
                        {msg.timestamp}
                      </span>
                      <span className="bg-green-500 h-2 w-2 rounded-full"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t bg-white flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Image className="h-5 w-5 text-gray-500" />
          </Button>

          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type something ..."
            className="flex-1"
            onKeyDown={handleKeyDown}
          />

          <Button variant="ghost" size="icon">
            <Smile className="h-5 w-5 text-gray-500" />
          </Button>

          <Button
            onClick={handleSendMessage}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full h-9 w-9 flex items-center justify-center p-0"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
