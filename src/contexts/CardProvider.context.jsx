import React, { createContext, useReducer } from "react";
import { v4 as generateId } from "uuid";
import luxuryCollectionAestheticDark from "../assets/luxury-collection-aesthetic-dark.png";
import luxuryCollectionAestheticDull from "../assets/luxury-collection-aesthetic-dull.png";
import luxuryCollectionBlack from "../assets/luxury-collection-black.png";
import designedCollectionBlack from "../assets/designed-collection-black.svg?react";
import designedCollectionBlue from "../assets/designed-collection-blue.svg?react";
import designedCollectionWhite from "../assets/designed-collection-white.svg?react";
import gradientCollectionDark from "../assets/gradient-collection-dark.png";
import gradientCollectionFlorescent from "../assets/gradient-collection-florescent.png";
import gradientCollectionPurple from "../assets/gradient-collection-purple.png";
import limitedEditionBlue from "../assets/limited-edition-blue.png";
import limitedEditionTripleBlue from "../assets/limited-edition-triple-blue.png";
import limitedEditionVantablack from "../assets/limited-edition-vantablack.png";
import fabLogLightGrey from "../assets/fab-log-light-grey.png";
import fabLogoBlack from "../assets/fab-logo-black.png";
import fabLogoBlue from "../assets/fab-logo-blue.png";
import fabLogWhite from "../assets/fab-log-white.png";
import fabLogDarkGrey from "../assets/fab-log-dark-grey.png";
import fabLogWhiteYellow from "../assets/fab-log-white-yellow.png";

const cardTemplates = [
  {
    id: generateId(),
    orientation: "landscape",
    name: "Custom",
    category: "Custom Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: "",
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#1A59B2",
      frontHasBgGradient: false,
      frontBgGradientStart: "#000",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "#000",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "Weber Outdoors",
      frontTextColor: "#ffffff",
      frontTextOpacity: "100",
      frontFontSize: "20",
      frontFontFamily: "Dancing Script",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#ffffff",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "#2C2E2A",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Person",
      backPersonTextColor: "#ffffff",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20",
      backPersonFontFamily: "Poppins",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Role",
      backRoleTextColor: "#ffffff",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Poppins",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#ffffff",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Matte black",
    category: "Luxury Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: luxuryCollectionAestheticDull,
    hasPaid: false,
    isBestSeller: true,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#2C2E2A",
      frontHasBgGradient: false,
      frontBgGradientStart: "#000",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "#000",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "Weber Outdoors",
      frontTextColor: "#383939",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Dancing Script",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#383939",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogDarkGrey,
    },
    backSettings: {
      backBgColor: "#2C2E2A",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Person",
      backPersonTextColor: "#383939",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Poppins",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Role",
      backRoleTextColor: "#383939",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Poppins",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#383939",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Aesthetic dark grey",
    category: "Luxury Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: luxuryCollectionAestheticDark,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#2E2E2E",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "Weber Outdoors",
      frontTextColor: "#393939",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Dancing Script",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#393939",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogDarkGrey,
    },
    backSettings: {
      backBgColor: "#2E2E2E",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Person",
      backPersonTextColor: "#393939",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Poppins",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Role",
      backRoleTextColor: "#393939",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Poppins",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#393939",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Aesthetic dull grey",
    category: "Luxury Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: luxuryCollectionBlack,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#D2D5D3",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "Weber Outdoors",
      frontTextColor: "#F1F1F1",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Dancing Script",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#F1F1F1",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogLightGrey,
    },
    backSettings: {
      backBgColor: "#D2D5D3",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Person",
      backPersonTextColor: "#F1F1F1",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Poppins",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Text",
      backRoleTextColor: "#F1F1F1",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Poppins",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#F1F1F1",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Matte Black 2",
    category: "Designed Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: designedCollectionBlack,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#1E1E1E",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "Grace Interiora",
      frontTextColor: "#C39E75",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Molle",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#C39E75",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhiteYellow,
    },
    backSettings: {
      backBgColor: "#1E1E1E",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Rose Goldy",
      backPersonTextColor: "#C39E75",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Interior Designer",
      backRoleTextColor: "#C39E75",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#C39E75",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Dark Blue",
    category: "Designed Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: designedCollectionBlue,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#134B93",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "MARRO'S WINGS",
      frontTextColor: "#FFFCF8",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Koulen",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#FFFCF8",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "#1E1E1E",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Mark Solomon",
      backPersonTextColor: "#FFFCF8",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Real Estate Broker",
      backRoleTextColor: "#FFFCF8",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#FFFCF8",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Pure White",
    category: "Designed Collections",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: designedCollectionWhite,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#134B93",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "FASHION FOR ALL",
      frontTextColor: "#FFFCF8",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Koulen",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#FFFCF8",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogoBlue,
    },
    backSettings: {
      backBgColor: "#1E1E1E",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "Sarah Mathew",
      backPersonTextColor: "#FFFCF8",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "Owner | Designer",
      backRoleTextColor: "#FFFCF8",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#FFFCF8",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Purple - Yellow Gradient",
    category: "Gradient Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: gradientCollectionPurple,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "",
      frontHasBgGradient: true,
      frontBgGradientStart: "#CFACD2",
      frontBgGradientCenter: "#C07CB3",
      frontBgGradientEnd: "#F6C391",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#FDFDFB",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Inter",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#FDFDFB",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "",
      backHasBgGradient: true,
      backBgGradientStart: "#CFACD2",
      backBgGradientCenter: "#C07CB3",
      backBgGradientEnd: "#F6C391",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#FDFDFB",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#FDFDFB",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#000",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Florescent Gradient",
    category: "Gradient Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: gradientCollectionFlorescent,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "",
      frontHasBgGradient: true,
      frontBgGradientStart: "#A9E1AF",
      frontBgGradientCenter: "#EACEEE",
      frontBgGradientEnd: "#D6FEFE",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#FFFFFF",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Inter",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#000",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "",
      backHasBgGradient: true,
      backBgGradientStart: "#D6FEFE",
      backBgGradientCenter: "#EACEEE",
      backBgGradientEnd: "#A9E1AF",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#FFFFFF",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#FFFFFF",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#000",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Dark Gradient",
    category: "Gradient Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: gradientCollectionFlorescent,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "",
      frontHasBgGradient: true,
      frontBgGradientStart: "#F9BC54",
      frontBgGradientCenter: "#E73E8E",
      frontBgGradientEnd: "#2D50A2",
      frontBgGradientDirection: "45",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#000",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Inter",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#000",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogoBlack,
    },
    backSettings: {
      backBgColor: "",
      backHasBgGradient: true,
      backBgGradientStart: "#F9BC54",
      backBgGradientCenter: "#E73E8E",
      backBgGradientEnd: "#2D50A2",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#000",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#000",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#000",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Vantablack NFC",
    category: "Limited Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: limitedEditionVantablack,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "#010101",
      frontHasBgGradient: false,
      frontBgGradientStart: "",
      frontBgGradientCenter: "#000",
      frontBgGradientEnd: "",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#D2AE7B",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Koulen",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#D2AE7B",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhiteYellow,
    },
    backSettings: {
      backBgColor: "#010101",
      backHasBgGradient: false,
      backBgGradientStart: "#000",
      backBgGradientCenter: "#000",
      backBgGradientEnd: "#000",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#D2AE7B",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#D2AE7B",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#D2AE7B",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Blue - Purple Gradient",
    category: "Limited Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: limitedEditionBlue,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "",
      frontHasBgGradient: true,
      frontBgGradientStart: "#5EA5D4",
      frontBgGradientCenter: "#3F5BA5",
      frontBgGradientEnd: "#765DA6",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#FDFDFB",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Koulen",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#FDFDFB",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "",
      backHasBgGradient: true,
      backBgGradientStart: "#5EA5D4",
      backBgGradientCenter: "#3F5BA5",
      backBgGradientEnd: "#765DA6",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#FDFDFB",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#FDFDFB",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#000",
      backElementOpacity: "100",
    },
  },
  {
    id: generateId(),
    orientation: "landscape",
    name: "Triple blue Gradient",
    category: "Limited Edition",
    description: "Customise: card design & digital profile",
    price: 2000,
    status: "under-creation",
    thumbnail: limitedEditionTripleBlue,
    hasPaid: false,
    isBestSeller: false,
    cardImageFront: "",
    cardImageBack: "",
    frontSettings: {
      frontBgColor: "",
      frontHasBgGradient: true,
      frontBgGradientStart: "#A8CAE5",
      frontBgGradientCenter: "#E7B0D0",
      frontBgGradientEnd: "#3C74B9",
      frontBgGradientDirection: "90",
      frontBgOpacity: "100",
      frontBgImageFile: "",
      frontBgImage: "",
      frontText: "",
      frontTextColor: "#FDFDFB",
      frontTextOpacity: "100",
      frontFontSize: "20px",
      frontFontFamily: "Koulen",
      frontFontWeight: 400,
      frontIsItalic: true,
      frontIsUnderline: false,
      frontHasElementQrcode: false,
      frontHasElementNFC: false,
      frontElementColor: "#FDFDFB",
      frontElementOpacity: "100",
      frontLogoImageFile: "",
      frontLogoImage: fabLogWhite,
    },
    backSettings: {
      backBgColor: "#1E1E1E",
      backHasBgGradient: true,
      backBgGradientStart: "#A8CAE5",
      backBgGradientCenter: "#E7B0D0",
      backBgGradientEnd: "#3C74B9",
      backBgGradientDirection: "90",
      backBgOpacity: "100",
      backBgImageFile: "",
      backBgImage: "",
      backPersonText: "JOHN DOE",
      backPersonTextColor: "#FDFDFB",
      backPersonTextOpacity: "100",
      backPersonFontSize: "20px",
      backPersonFontFamily: "Inter",
      backPersonFontWeight: 400,
      backIsPersonItalic: false,
      backIsPersonUnderline: false,
      backRoleText: "",
      backRoleTextColor: "#FDFDFB",
      backRoleTextOpacity: "100",
      backRoleFontSize: "20px",
      backRoleFontFamily: "Inter",
      backRoleFontWeight: 400,
      backIsRoleItalic: false,
      backIsRoleUnderline: false,
      backHasElementQrcode: true,
      backHasElementNFC: true,
      backElementColor: "#000",
      backElementOpacity: "100",
    },
  },
];

export const CardContext = createContext();

export const CARD_ACTION_TYPES = {
  UPDATE_ORIENTATION: "UPDATE_ORIENTATION",
  UPDATE_CARD_TEMPLATE: "UPDATE_CARD_TEMPLATE",
  UPDATE_CARD: "UPDATE_CARD",
  UPDATE_QR_CODE: "UPDATE_QR_CODE",
};

const cardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_ACTION_TYPES.UPDATE_ORIENTATION:
      return { ...state, orientation: payload };
    case CARD_ACTION_TYPES.UPDATE_CARD_TEMPLATE:
      console.log("cardName in cardReducer", payload);
      const foundTemplate = cardTemplates.find((card) => card.name === payload);
      console.log("found template", foundTemplate);
      if (foundTemplate) {
        return { ...state, ...foundTemplate };
      } else {
        throw new Error(`Couldn't find the template: ${payload}`);
      }
      break;
    case CARD_ACTION_TYPES.UPDATE_CARD:
      return { ...state, ...payload };
    default:
      throw new Error(`${type} is not a valid action in cardReducer`);
  }
};

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, cardTemplates[0]);
  console.log("current status of card state", state);
  const value = { ...state, dispatch };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;
