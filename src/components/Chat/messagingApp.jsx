"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openChat, closeChat } from "../../features/chatSlice";

import Sidebar from "./chatSidebar";
import ChatBox from "./chatBox";

const MessagingApp = () => {
  const dispatch = useDispatch();
  const { currentSeller, isChatOpen } = useSelector((state) => state.chat);
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample users/conversations - in a real app, this would come from an API
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

  // Sync selectedChat with Redux currentSeller
  useEffect(() => {
    if (currentSeller) {
      setSelectedChat(currentSeller);
    } else if (!selectedChat && users.length > 0) {
      setSelectedChat(users[0]);
    }
  }, [currentSeller, users, selectedChat]);

  const handleUserSelect = (user) => {
    setSelectedChat(user);
    // Open chat with selected user in Redux
    dispatch(
      openChat({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        isOnline: user.isOnline,
        lastSeen: user.lastSeen,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row border w-full h-[85vh] bg-gray-50 lg:px-32">
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
      <ChatBox selectedChat={selectedChat} />
    </div>
  );
};

export default MessagingApp;
