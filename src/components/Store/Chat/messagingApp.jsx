"use client";
import { useState, useEffect } from "react";

import ChatBox from "./ChatBox";
import Sidebar from "./chatSidebar";

const MessagingApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample users/conversations
  const [users] = useState([
    {
      id: 1,
      name: "Dawn Teague",
      avatar: "/assets/chat/woman1.png",
      lastMessage: "Got it. I'll investigate and update you shortly.",
      isOnline: true,
      lastSeen: "2 hr",
    },
    {
      id: 2,
      name: "Fresh Painting",
      avatar: "/assets/chat/man1.png",
      lastMessage: "Hello, How are you?",
      isOnline: true,
      lastSeen: "Online",
    },
    {
      id: 3,
      name: "Peak Designer",
      avatar: "/assets/chat/man2.jpg",
      lastMessage: "Here are some of very cute ill...",
      isOnline: true,
      lastSeen: "5 min",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      avatar: "/assets/chat/woman2.png",
      lastMessage: "Use tools like Trello, Asana...",
      isOnline: false,
      lastSeen: "1 hr",
    },
  ]);

  // Chat messages for each user
  const [chatMessages, setChatMessages] = useState({
    1: [
      {
        id: 1,
        sender: "You",
        content:
          "Hi can you add the new search feature by Friday? Details are in the #features channel. Thanks!",
        avatar: "/api/placeholder/30/30",
        isUser: true,
        timestamp: "10:11 AM",
      },
      {
        id: 2,
        sender: "Dawn Teague",
        content: "Sure, starting on it today. Will update you on the progress",
        avatar: "/assets/chat/woman1.png",
        isUser: false,
        timestamp: "10:12 AM",
      },
      {
        id: 3,
        sender: "Dawn Teague",
        content: "Got it. I'll investigate and update you shortly.",
        avatar: "/assets/chat/woman1.png",
        isUser: false,
        timestamp: "10:15 AM",
      },
    ],
    2: [
      {
        id: 1,
        sender: "Fresh Painting",
        content: "Hello, How are you?",
        avatar: "/assets/chat/man1.png",
        isUser: false,
        timestamp: "9:30 AM",
      },
    ],
    3: [
      {
        id: 1,
        sender: "Peak Designer",
        content:
          "Here are some of very cute illustrations I've been working on",
        avatar: "/assets/chat/man2.jpg",
        isUser: false,
        timestamp: "8:45 AM",
        images: ["/api/placeholder/150/100", "/api/placeholder/150/100"],
        moreImages: 2,
      },
    ],
  });

  // Select first user by default
  useEffect(() => {
    if (!selectedChat && users.length > 0) {
      setSelectedChat(users[0]);
    }
  }, [users, selectedChat]);

  const handleUserSelect = (user) => {
    setSelectedChat(user);
  };

  const handleSendMessage = (chatId, message) => {
    setChatMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), message],
    }));
  };

  const currentMessages = selectedChat
    ? chatMessages[selectedChat.id] || []
    : [];

  return (
    <div className="flex flex-col md:flex-row border w-full h-[100vh] bg-gray-50 lg:px-32 ">
      {/* Mobile Sidebar (Horizontal on top) */}
      <div className="md:hidden w-full border-b max-h-48">
        <Sidebar
          users={users}
          selectedChat={selectedChat}
          onUserSelect={handleUserSelect}
          orientation="horizontal"
        />
      </div>

      {/* Desktop Sidebar (Vertical) */}
      <div className="hidden md:block w-80 border-r">
        <Sidebar
          users={users}
          selectedChat={selectedChat}
          onUserSelect={handleUserSelect}
          orientation="vertical"
        />
      </div>

      {/* Chat Area */}
      <ChatBox
        selectedChat={selectedChat}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagingApp;
