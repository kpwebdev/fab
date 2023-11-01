import { createContext, useReducer } from "react";
import Color from "color";

export const ProfileContext = createContext();

const profileTemplates = [
  {
    id: 1,
    name: "template-1",
    colors: {
      bodyTextColor: "#031B4B",
      themeColor: "#031B4B",
      metaBandBgColor: "#031B4B",
      metaRoleTextColor: "#FFFFFF",
      metaUserNameColor: "#FFDC60",
      metaFullNameColor: "#FFFFFF",
      grayTextColor: "#858585",
    },
  },
  {
    id: 2,
    name: "template-2",
    colors: {
      bodyTextColor: "#292930",
      themeColor: "#D35345",
      metaBandBgColor: "#D35345",
      metaRoleTextColor: "#FFFFFF",
      metaUserNameColor: "#FFFFFF",
      metaFullNameColor: "#FFFFFF",
      grayTextColor: "#858585",
    },
  },
  {
    id: 3,
    name: "template-3",
    colors: {
      bodyTextColor: "#292930",
      themeColor: "#535DA5",
      metaBandBgColor: "#535DA5",
      metaRoleTextColor: "#FFFFFF",
      metaUserNameColor: "#FFFFFF",
      metaFullNameColor: "#FFFFFF",
      grayTextColor: "#858585",
    },
  },
];

const INITIAL_PROFILE_ = {
  profileTemplate: profileTemplates[0],
};

export const PROFILE_ACTION_TYPES = {
  UPDATE_PROFILE_TEMPLATE: "UPDATE_PROFILE_TEMPLATE",
};

const profileReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_ACTION_TYPES.UPDATE_PROFILE_TEMPLATE:
      const newProfile = profileTemplates.find(
        (template) => template.name === payload
      );
      if (newProfile) {
        return { ...state, profileTemplate: newProfile };
      } else {
        throw new Error(`${payload} is not a valid profile template name`);
      }
    default:
      throw new Error(`${type} is not a valid type in profileReducer.`);
  }
};

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, INITIAL_PROFILE_);
  const value = { ...state, profileTemplates, dispatch };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
