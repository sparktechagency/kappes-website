// middleware/chatMiddleware.js
import { receiveMessage, setTyping } from "@/features/chatSlice";

let messageInterval = null;
let responseTimeout = null;

const demoMessages = [
  "Hi! Do you have any questions about this product?",
  "We have a special discount available today!",
  "Is there anything specific you'd like to know about the quality?",
  "We can offer free shipping if you're interested!",
  "This item is very popular - only a few left in stock!",
  "Would you like to see similar products?",
  "I can help you with size recommendations!",
  "We have a 30-day return policy for your peace of mind.",
  "The material is high quality and very durable.",
  "Many customers love this product - it has great reviews!",
  "Would you like to know about our return policy?",
  "I'm here if you need any assistance!",
];

const sellerResponses = [
  "Thank you for your message! I'll get back to you shortly.",
  "That's a great question! Let me check that for you.",
  "I understand your concern. Here's what I can tell you...",
  "Absolutely! I'd be happy to help with that.",
  "Good point! Many customers ask about this.",
  "I appreciate your interest in our product!",
  "Let me provide you with more details about that.",
  "That's definitely something we can help you with!",
];

export const chatMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState().chat;

  switch (action.type) {
    case "chat/openChat":
      // Start sending demo messages periodically
      if (messageInterval) clearInterval(messageInterval);

      messageInterval = setInterval(() => {
        const currentState = store.getState().chat;

        // Only send demo messages if chat is still active and seller exists
        if (currentState.currentSeller && Math.random() < 0.3) {
          // 30% chance
          const randomMessage =
            demoMessages[Math.floor(Math.random() * demoMessages.length)];
          store.dispatch(
            receiveMessage({
              text: randomMessage,
              sellerId: currentState.currentSeller.id,
            })
          );
        }
      }, 15000); // Every 15 seconds
      break;

    case "chat/closeChat":
      // Clear intervals when chat is closed
      if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
      }
      if (responseTimeout) {
        clearTimeout(responseTimeout);
        responseTimeout = null;
      }
      break;

    case "chat/sendMessage":
      // Simulate seller typing and response
      if (responseTimeout) clearTimeout(responseTimeout);

      // Show typing indicator
      store.dispatch(setTyping(true));

      responseTimeout = setTimeout(() => {
        store.dispatch(setTyping(false));

        // Send automated response
        const randomResponse =
          sellerResponses[Math.floor(Math.random() * sellerResponses.length)];
        const currentState = store.getState().chat;

        if (currentState.currentSeller) {
          store.dispatch(
            receiveMessage({
              text: randomResponse,
              sellerId: currentState.currentSeller.id,
            })
          );
        }
      }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
      break;

    default:
      break;
  }

  return result;
};

// Cleanup function for when component unmounts or app closes
export const cleanupChatMiddleware = () => {
  if (messageInterval) {
    clearInterval(messageInterval);
    messageInterval = null;
  }
  if (responseTimeout) {
    clearTimeout(responseTimeout);
    responseTimeout = null;
  }
};
