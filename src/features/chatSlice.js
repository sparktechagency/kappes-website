// features/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatOpen: false,
  isMinimized: false,
  messages: [],
  unreadCount: 0,
  currentSeller: null,
  isTyping: false,
  isPinned: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat: (state, action) => {
      const sellerInfo = action.payload;
      state.currentSeller = sellerInfo;
      state.isChatOpen = true;
      state.isMinimized = false;
      state.isPinned = true;

      // Initialize with welcome message if no messages exist
      if (state.messages.length === 0) {
        const welcomeMessage = {
          id: Date.now(),
          text: `Hello! I'm here to help you with any questions about our products. How can I assist you today?`,
          sender: "seller",
          sellerId: sellerInfo.id,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isRead: false,
        };
        state.messages.push(welcomeMessage);
        state.unreadCount = 1;
      }

      // Mark all messages as read when opening chat
      state.messages.forEach((msg) => {
        if (!msg.isRead) {
          msg.isRead = true;
        }
      });
      state.unreadCount = 0;
    },

    closeChat: (state) => {
      state.isChatOpen = false;
      state.unreadCount = 0;
    },

    minimizeChat: (state) => {
      state.isMinimized = true;
    },

    maximizeChat: (state) => {
      state.isMinimized = false;
      // Mark messages as read when maximizing
      state.messages.forEach((msg) => {
        if (!msg.isRead) {
          msg.isRead = true;
        }
      });
      state.unreadCount = 0;
    },

    pinChat: (state, action) => {
      state.isPinned = action.payload;
    },

    sendMessage: (state, action) => {
      const messageText = action.payload;
      const userMessage = {
        id: Date.now(),
        text: messageText,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isRead: true,
      };
      state.messages.push(userMessage);
    },

    receiveMessage: (state, action) => {
      const { text, sellerId } = action.payload;
      const sellerMessage = {
        id: Date.now(),
        text,
        sender: "seller",
        sellerId,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isRead: state.isChatOpen && !state.isMinimized,
      };

      state.messages.push(sellerMessage);

      // Only increment unread count if chat is closed or minimized
      if (!state.isChatOpen || state.isMinimized) {
        state.unreadCount += 1;
      }
    },

    setTyping: (state, action) => {
      state.isTyping = action.payload;
    },

    clearChat: (state) => {
      state.messages = [];
      state.unreadCount = 0;
      state.currentSeller = null;
    },

    markAllAsRead: (state) => {
      state.messages.forEach((msg) => {
        msg.isRead = true;
      });
      state.unreadCount = 0;
    },
  },
});

export const {
  openChat,
  closeChat,
  minimizeChat,
  maximizeChat,
  sendMessage,
  receiveMessage,
  setTyping,
  clearChat,
  markAllAsRead,
  pinChat,
} = chatSlice.actions;

export default chatSlice.reducer;
