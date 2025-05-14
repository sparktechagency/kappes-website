import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = ({ orientation = "vertical" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Fresh Painting",
      avatar: "/assets/chat/man1.png",
      lastMessage: "Hello, How are you?",
      isOnline: true,
      unread: false,
    },
    {
      id: 2,
      name: "Peak",
      avatar: "/assets/chat/man2.jpg",
      lastMessage: "Here are some of very cute ill...",
      isOnline: true,
      unread: false,
    },
    {
      id: 3,
      name: "Peak",
      avatar: "/assets/chat/woman1.png",
      lastMessage: "Use tools like Trello, Asana...",
      isOnline: true,
      unread: false,
    },
    {
      id: 4,
      name: "Peak",
      avatar: "/assets/chat/woman2.png",
      lastMessage: "Regularly review and improve ...",
      isOnline: true,
      unread: false,
    },
    {
      id: 5,
      name: "Peak",
      avatar: "/api/placeholder/40/40",
      lastMessage: "Sure, I can help with that. L...",
      isOnline: true,
      unread: false,
    },
  ];

  return (
    <div
      className={`bg-white h-full flex ${
        orientation === "horizontal" ? "flex-col overflow-x-auto" : "flex-col"
      }`}
    >
      {/* Search Bar */}
      <div
        className={`p-4 ${
          orientation === "horizontal" ? "min-w-[260px]" : "w-full"
        }`}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for ..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Conversation List */}
      {orientation === "horizontal" ? (
        <div className="flex overflow-x-auto px-2 space-x-4 pb-4">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              className="flex flex-col items-center min-w-[80px] cursor-pointer"
            >
              <div className="relative">
                {chat.initials ? (
                  <Avatar className="h-12 w-12 mb-1 bg-gray-200">
                    <span className="text-sm font-medium">{chat.initials}</span>
                  </Avatar>
                ) : (
                  <Avatar className="h-12 w-12 mb-1">
                    <img src={chat.avatar} alt={chat.name} />
                  </Avatar>
                )}
                {chat.isOnline && (
                  <span className="absolute bottom-1 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <span className="text-xs font-medium truncate w-full text-center">
                {chat.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="relative flex-shrink-0">
                  {chat.initials ? (
                    <Avatar className="h-10 w-10 bg-gray-200">
                      <span className="text-sm font-medium">
                        {chat.initials}
                      </span>
                    </Avatar>
                  ) : (
                    <Avatar className="h-10 w-10">
                      <img src={chat.avatar} alt={chat.name} />
                    </Avatar>
                  )}
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium">{chat.name}</h4>
                  <p className="text-xs text-gray-500 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default Sidebar;
