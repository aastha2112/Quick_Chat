// src/store.js

import { legacy_createStore } from "redux";

// Action Types
const SET_MESSAGES = "SET_MESSAGES";
const ADD_MESSAGE = "ADD_MESSAGE";

// Initial State
const initialState = {
  messages: [],
};

// Action Creators
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

// Reducer
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

// Create Store
const store = legacy_createStore(messagesReducer);

export default store;
