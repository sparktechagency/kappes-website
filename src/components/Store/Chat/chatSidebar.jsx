"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = ({
  users,
  selectedChat,
  onUserSelect,
  orientation = "vertical",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`bg-white h-full flex ${
        orientation === "horizontal" ? "flex-col overflow-x-auto" : "flex-col"
      }`}
    >
      {/* Search Bar */}
      <div
        className={`p-4 flex-shrink-0 ${
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

      {/* Conversation List with Max Height and Scroll */}
      {orientation === "horizontal" ? (
        <div className="flex overflow-x-auto px-2 space-x-4 pb-4 max-h-32 ">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`flex flex-col items-center min-w-[80px] cursor-pointer p-2 rounded-lg transition-colors ${
                selectedChat?.id === user.id
                  ? "bg-red-50 border border-red-200"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => onUserSelect(user)}
            >
              <div className="relative">
                <Avatar className="h-12 w-12 mb-1">
                  <img src={user.avatar} alt={user.name} />
                </Avatar>
                {user.isOnline && (
                  <span className="absolute bottom-1 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <span className="text-xs font-medium truncate w-full text-center">
                {user.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 overflow-auto bg-red-200 ">
          <ScrollArea className="h-[calc(100vh-200px)] max-h-[900px]">
            <div className="space-y-1 p-2">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat?.id === user.id
                      ? "bg-red-50 border border-red-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => onUserSelect(user)}
                >
                  <div className="relative flex-shrink-0">
                    <Avatar className="h-10 w-10">
                      <img src={user.avatar} alt={user.name} />
                    </Avatar>
                    {user.isOnline && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium">{user.name}</h4>
                    <p className="text-xs text-gray-500 truncate">
                      {user.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
