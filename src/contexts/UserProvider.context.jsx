import React, { createContext, useReducer } from "react";

const USER_ACTIONS = {
  UPDATE_SOCIAL_MEDIA: "UPDATE_SOCIAL_MEDIA",
  UPDATE_USER_DETAILS: "UPDATE_USER_DETAILS",
  UPDATE_COMPANY_DETAILS: "UPDATE_COMPANY_DETAILS",
  UPDATE_STATUS: "UPDATE_STATUS",
  ADD_CONTACT: "ADD_CONTACT",
  EDIT_CONTACT: "EDIT_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  FAVOURITE_CONTACT: "FAVOURITE_CONTACT",
};

const USER_INITIAL_VALUE = {
  bannerImage: bannerImage,
  profilePic: profilePic,
  userName: "iamarora",
  fullName: "Chetna Arora",
  companyName: "Fab Digital Marketing Agency",
  role: "Digital Marketing Strategist",
  website: "fabtap.com",
  contact: "6492746289",
  socialMedia: [
    {
      title: "Instagram",
      href: "#instagram",
      Icon: IconInstagram,
    },
    {
      title: "LinkedIn",
      href: "#linkedIn",
      Icon: IconLinkedin,
    },
    {
      title: "Pinterest",
      href: "#pinterest",
      Icon: IconPinterest,
    },
    {
      title: "Tiktok",
      href: "#tiktok",
      Icon: IconTiktok,
    },
    {
      title: "YouTube",
      href: "#youtube",
      Icon: IconYoutube,
    },
  ],
  status: [
    { title: "Total Taps", num: 2102 },
    { title: "Total Contacts", num: 2000 },
  ],
  companyDetails: {
    companyBanner: bannerImage,
    companyLogo: fabLogo,
    companyHeading: "Fab",
    companySubheading: "Digital Agency",
    companyName: "Fab Digital Agency",
    jobRole: "Marketing Expert",
    companySize: "Solo",
  },
  contacts: [
    {
      favorite: false,
      profilePic: "",
      name: "John Store",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Emily Smith",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Jasmine Hart",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Rose Goldy",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Kevin White",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Keshav G",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
  ],
  orders: {
    self: [
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardBlue,
            creatorName: "Creator Name",
            cardName: "Ocean Blue NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardYellow,
            creatorName: "Creator Name",
            cardName: "Sun Yellow NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
    ],
    customer: [
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardBlue,
            creatorName: "Creator Name",
            cardName: "Ocean Blue NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardYellow,
            creatorName: "Creator Name",
            cardName: "Sun Yellow NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
    ],
  },
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.UPDATE_SOCIAL_MEDIA:
      return null;
    case USER_ACTIONS.UPDATE_USER_DETAILS:
      return null;
    case USER_ACTIONS.UPDATE_COMPANY_DETAILS:
      return null;
    case USER_ACTIONS.UPDATE_STATUS:
      return null;
    case USER_ACTIONS.ADD_CONTACT:
      return null;
    case USER_ACTIONS.EDIT_CONTACT:
      return null;
    case USER_ACTIONS.DELETE_CONTACT:
      return null;
    case USER_ACTIONS.FAVOURITE_CONTACT:
      return null;
    default:
      throw new Error(`${type} is not a valid action type inside user reducer`);
  }
};

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_VALUE);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

const userData = {
  bannerImage: bannerImage,
  profilePic: profilePic,
  userName: "iamarora",
  fullName: "Chetna Arora",
  companyName: "Fab Digital Marketing Agency",
  role: "Digital Marketing Strategist",
  website: "fabtap.com",
  contact: "6492746289",
  socialMedia: [
    {
      title: "Instagram",
      href: "#instagram",
      Icon: IconInstagram,
    },
    {
      title: "LinkedIn",
      href: "#linkedIn",
      Icon: IconLinkedin,
    },
    {
      title: "Pinterest",
      href: "#pinterest",
      Icon: IconPinterest,
    },
    {
      title: "Tiktok",
      href: "#tiktok",
      Icon: IconTiktok,
    },
    {
      title: "YouTube",
      href: "#youtube",
      Icon: IconYoutube,
    },
  ],
  status: [
    { title: "Total Taps", num: 2102 },
    { title: "Total Contacts", num: 2000 },
  ],
  companyDetails: {
    companyBanner: bannerImage,
    companyLogo: fabLogo,
    companyHeading: "Fab",
    companySubheading: "Digital Agency",
    companyName: "Fab Digital Agency",
    jobRole: "Marketing Expert",
    companySize: "Solo",
  },
  contacts: [
    {
      favorite: false,
      profilePic: "",
      name: "John Store",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Emily Smith",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Jasmine Hart",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Rose Goldy",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Kevin White",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
    {
      favorite: false,
      profilePic: "",
      name: "Keshav G",
      mobileNum: "+91 8549632175",
      emailId: "sample@gmail.com",
    },
  ],
  orders: {
    self: [
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardBlue,
            creatorName: "Creator Name",
            cardName: "Ocean Blue NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardYellow,
            creatorName: "Creator Name",
            cardName: "Sun Yellow NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
    ],
    customer: [
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardBlue,
            creatorName: "Creator Name",
            cardName: "Ocean Blue NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
      {
        orderPlacedAt: new Date(2023, 7, 27),
        totalPrice: 2000,
        shipToAddress: "No. 7, sample address",
        orderId: 366824369,
        cards: [
          {
            CardImg: OrderCardYellow,
            creatorName: "Creator Name",
            cardName: "Sun Yellow NFC",
            isPersonalized: true,
            qty: 1,
          },
        ],
      },
    ],
  },
};
