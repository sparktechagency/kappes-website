"use client";
import { useState } from "react";
import { MoreVertical, Send, Image, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./chatSidebar";

const MessagingApp = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: 1,
      time: "Today, 10:15 AM",
      messages: [
        {
          sender: "Dawn Teague",
          content: "Got it. I'll investigate and update you shortly.",
          avatar: "/assets/chat/woman1.png",
          isUser: false,
        },
      ],
    },
    {
      id: 2,
      time: "Today, 10:11 AM",
      messages: [
        {
          sender: "You",
          content:
            "Hi can you add the new search feature by Friday? Details are in the #features channel. Thanks!",
          avatar: "/assets/chat/man1.png",
          isUser: true,
        },
      ],
    },
    {
      id: 3,
      time: "Today, 10:12 AM",
      messages: [
        {
          sender: "Dawn Teague",
          content:
            "Sure, starting on it today. Will update you on the progress",
          avatar: "/assets/chat/woman1.png",
          isUser: false,
        },
      ],
    },
    {
      id: 4,
      time: "Today, 02:39 PM",
      messages: [
        {
          sender: "You",
          content:
            "Hi Shopia, there's a problem with the mobile view on the homepage. Images aren't scaling right. Can someone check?",
          avatar: "/api/placeholder/30/30",
          isUser: true,
          images: ["/api/placeholder/150/100", "/api/placeholder/150/100"],
          moreImages: 2,
        },
      ],
    },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      id: conversations.length + 1,
      time:
        "Today, " +
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      messages: [
        {
          sender: "You",
          content: inputMessage,
          avatar: "/api/placeholder/30/30",
          isUser: true,
        },
      ],
    };

    setConversations([...conversations, newMessage]);
    setInputMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row border w-full overflow-y-auto bg-gray-50">
      {/* Mobile Sidebar (Horizontal on top) */}
      <div className="md:hidden w-full border-b">
        <Sidebar orientation="horizontal" />
      </div>

      {/* Desktop Sidebar (Vertical) */}
      <div className="hidden md:block w-80 border-r">
        <Sidebar orientation="vertical" />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <img
                src="/assets/chat/man1.png"
                width={1000}
                height={1000}
                alt="Dawn Teague"
              />
            </Avatar>
            <div>
              <h3 className="font-medium">Dawn Teague</h3>
              <p className="text-xs text-gray-500">Last seen 2 hr</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            {conversations.map((convo) => (
              <div key={convo.id} className="space-y-2">
                <div className="text-center">
                  <span className="text-xs text-gray-500">{convo.time}</span>
                </div>

                {convo.messages.map((msg, index) => (
                  <div
                    key={index}
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
                                <div
                                  key={i}
                                  className="rounded-lg overflow-hidden"
                                >
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
                          <span className="bg-green-500 h-2 w-2 rounded-full mr-1"></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Image className="h-5 w-5 text-gray-500" />
            </Button>

            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type something ..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
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
    </div>
  );
};

export default MessagingApp;
