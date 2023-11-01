import {
  useEffect,
  useState,
  createContext,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
import { createAction } from "./helper-functions";
import { APIContext } from "./APIProvider.context";

export const GoogleFontsContext = createContext();

const generateWeightNumber = (weight) => {
  switch (weight) {
    case "Thin":
      return "100";
    case "Extra Light":
      return "200";
    case "Light":
      return "300";
    case "Regular":
      return "400";
    case "Medium":
      return "500";
    case "Semi Bold":
      return "600";
    case "Bold":
      return "700";
    case "Extra Bold":
      return "800";
    case "Black":
      return "900";
    case "Extra Black":
      return "950";
    default:
      return weight;
  }
};

const generateWeightName = (weight) => {
  switch (weight.toLowerCase()) {
    case "100":
      return "Thin";
    case "200":
      return "Extra Light";
    case "300":
      return "Light";
    case "400":
    case "regular":
      return "Regular";
    case "500":
      return "Medium";
    case "600":
      return "Semi Bold";
    case "700":
      return "Bold";
    case "800":
      return "Extra Bold";
    case "900":
      return "Black";
    case "950":
      return "Extra Black";
    default:
      return weight;
  }
};

const INITIAL_VALUE_GOOGLE_FONTS = {
  googleFonts: [],
};

const GOOGLE_FONTS_ACTION_TYPES = {
  GET_GOOGLE_FONTS: "GET_GOOGLE_FONTS",
};

const googleFontsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GOOGLE_FONTS_ACTION_TYPES.GET_GOOGLE_FONTS:
      return { ...state, googleFonts: payload };
  }
};

const GoogleFontsProvider = ({ children }) => {
  const { googleFontsAPI } = useContext(APIContext);
  const [state, dispatch] = useReducer(
    googleFontsReducer,
    INITIAL_VALUE_GOOGLE_FONTS
  );

  const loadGoogleFonts = (fontFamilyArr) => {
    // fontFamilyArr.forEach((fontFamily) => {
    //   const googleFontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
    //   const currentlyAvailableLinkTag = document.querySelector(
    //     `#google-font-${fontFamily}`
    //   );
    //   if (!currentlyAvailableLinkTag) {
    //     const link = document.createElement("link");
    //     link.rel = "stylesheet";
    //     link.id = `google-font-${fontFamily}`;
    //     link.href = googleFontUrl;
    //     document.head.append(link);
    //   }
    // });
    fontFamilyArr.forEach((fontFamilyName) => {
      const font = state.googleFonts.find(
        (font) => font.family === fontFamilyName
      );
      const apiUrl = [];
      apiUrl.push("https://fonts.googleapis.com/css?family=");
      apiUrl.push(font.family.replace(/ /g, "+"));
      // if (contains("italic", font.variants)) {
      if (font.variants.includes("italic")) {
        apiUrl.push(":");
        apiUrl.push("italic");
      }
      // if (contains("greek", font.subsets)) {
      if (font.subsets.includes("greek")) {
        apiUrl.push("&subset=");
        apiUrl.push("greek");
      }
      const url = apiUrl.join("");
      const linkId = fontFamilyName.toLowerCase().replace(/ /g, "-");
      const currentlyAvailableLinkTag = document.querySelector(
        `#google-font-${linkId}`
      );
      if (!currentlyAvailableLinkTag) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.id = `google-font-${linkId}`;
        link.href = url;
        document.head.append(link);
      }
    });
  };

  const getFontWeights = (fontFamily) => {
    const foundFontFamily = state.googleFonts.find(
      (font) => font.family === fontFamily
    );
    if (foundFontFamily) {
      const fontWeights = foundFontFamily.variants
        .filter((weight) => weight === "regular" || !weight.includes("i"))
        .map((weight) => ({
          weightName: generateWeightName(weight),
          weightNum: generateWeightNumber(generateWeightName(weight)),
        }));

      return fontWeights;
    } else {
      throw new Error(`Couldn't find the ${fontFamily}`);
    }
  };

  useEffect(() => {
    const fetchGoogleFonts = async () => {
      const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsAPI}`;
      const {
        data: { items },
      } = await axios(url);
      const action = createAction(
        GOOGLE_FONTS_ACTION_TYPES.GET_GOOGLE_FONTS,
        items
      );
      dispatch(action);
    };

    fetchGoogleFonts();
  }, []);

  const value = {
    ...state,
    dispatch,
    loadGoogleFonts,
    getFontWeights,
  };

  return (
    <GoogleFontsContext.Provider value={value}>
      {children}
    </GoogleFontsContext.Provider>
  );
};

export default GoogleFontsProvider;
