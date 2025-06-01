"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";

const Sidebar = ({
  users,
  selectedChat,
  onUserSelect,
  orientation = "vertical",
}) => {
  const { unreadCount, currentSeller } = useSelector((state) => state.chat);
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
          <input
            placeholder="Search for ..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Unread Message Indicator */}
      {unreadCount > 0 && (
        <div className="px-4 py-2 bg-red-50 border-l-4 border-red-500">
          <p className="text-sm text-red-700 font-medium">
            {unreadCount} new message{unreadCount > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Conversation List */}
      {orientation === "horizontal" ? (
        <div className="flex overflow-x-auto px-2 space-x-4 pb-4 max-h-32">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`flex flex-col items-center min-w-[80px] cursor-pointer p-2 rounded-lg transition-colors relative ${
                selectedChat?.id === user.id
                  ? "bg-red-50 border border-red-200"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => onUserSelect(user)}
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full mb-1"
                />
                {user.isOnline && (
                  <span className="absolute bottom-1 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <span className="text-xs font-medium truncate w-full text-center">
                {user.name}
              </span>

              {/* Unread indicator for current seller */}
              {currentSeller?.id === user.id && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="space-y-1 p-2">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors relative ${
                    selectedChat?.id === user.id
                      ? "bg-red-50 border border-red-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => onUserSelect(user)}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-10 w-10 rounded-full"
                    />
                    {user.isOnline && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium truncate">
                        {user.name}
                      </h4>
                      {currentSeller?.id === user.id && unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-2 flex-shrink-0">
                          {unreadCount > 9 ? "9+" : unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {user.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
