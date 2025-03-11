import { legacy_createStore as createStore } from "redux";

const initialState = {
  messages: JSON.parse(localStorage.getItem("chatHistory")) || [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const updatedMessages = [...state.messages, action.payload];
      localStorage.setItem("chatHistory", JSON.stringify(updatedMessages));
      return { ...state, messages: updatedMessages };

    default:
      return state;
  }
};

export const store = createStore(chatReducer);
