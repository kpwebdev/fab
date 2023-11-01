import { createContext, useEffect, useReducer, useState } from "react";
import { getDocument } from "../utils/firebase/firebase.util";
import { createAction } from "./helper-functions";

export const APIContext = createContext();

const INITIAL_API_VALUE = {
  googleFontsAPI: "",
  stripePriceId: "",
  stripePublishableKey: "",
};

export const API_ACTION_TYPES = {
  UPDATE_API_KEYS: "UPDATE_API_KEYS",
};

const apiReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_ACTION_TYPES.UPDATE_API_KEYS:
      return { ...state, ...payload };
    default:
      throw new Error(`${type} is not a valid type in apiReducer`);
  }
};

const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, INITIAL_API_VALUE);

  useEffect(() => {
    const fetchAPIs = async () => {
      const data = await getDocument("APIs", "system");
      const action = createAction(API_ACTION_TYPES.UPDATE_API_KEYS, data);
      dispatch(action);
    };

    fetchAPIs();
  }, []);

  const value = { ...state, dispatch };

  if (
    !state.googleFontsAPI &&
    !state.stripePriceId &&
    !state.stripePublishableKey
  ) {
    return (
      <div className="t-min-h-screen t-flex t-justify-center t-my-f-24">
        <span className="custom-loader"></span>
      </div>
    );
  }

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

export default APIProvider;
