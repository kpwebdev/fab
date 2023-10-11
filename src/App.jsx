import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import {
  SharedHome,
  Home,
  Services,
  About,
  NfcHomeSharedLayout,
  NfcHome,
  AuthenticationSharedLayout,
  Login,
  SignUp,
  NfcDashboardSharedLayout,
  MyProfileSharedLayout,
  General,
  Organization,
  Progress,
  MyFabSharedLayout,
  MyFabCards,
  MyFabProfiles,
  ContactsSharedLayout,
  Contacts,
  ContactAdd,
  ContactEdit,
  Shop,
  OrdersSharedLayout,
  Self,
  Customer,
  Settings,
  SettingList,
  Notification,
  AppLanguage,
  HelpAndSupport,
  ChangeAccount,
  DeleteAccount,
  Logout,
  SendFeedback,
  ReportBug,
} from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedHome />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/nfc",
    element: <NfcHomeSharedLayout />,
    children: [
      {
        index: true,
        element: <NfcHome />,
      },
    ],
  },
  {
    path: "/nfc/authentication",
    element: <AuthenticationSharedLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      { path: "switch-account", element: <ChangeAccount /> },
    ],
  },
  {
    path: "/nfc/dashboard",
    element: <NfcDashboardSharedLayout />,
    children: [
      {
        path: "my-profile",
        element: <MyProfileSharedLayout />,
        children: [
          {
            index: true,
            element: <General />,
          },
          {
            path: "organization",
            element: <Organization />,
          },
          {
            path: "progress",
            element: <Progress />,
          },
          {
            path: "my-fab",
            element: <MyFabSharedLayout />,
            children: [
              {
                index: true,
                element: <MyFabCards />,
              },
              {
                path: "profiles",
                element: <MyFabProfiles />,
              },
            ],
          },
        ],
      },
      {
        path: "contacts",
        element: <ContactsSharedLayout />,
        children: [
          {
            index: true,
            element: <Contacts />,
          },
          {
            path: "add",
            element: <ContactAdd />,
          },
          {
            path: "edit",
            element: <ContactEdit />,
          },
        ],
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "orders",
        element: <OrdersSharedLayout />,
        children: [
          {
            index: true,
            element: <Self />,
          },
          {
            path: "customer",
            element: <Customer />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          { index: true, element: <SettingList /> },
          { path: "notification", element: <Notification /> },
          { path: "app-language", element: <AppLanguage /> },
          { path: "help-and-support", element: <HelpAndSupport /> },
          { path: "delete-account", element: <DeleteAccount /> },
          { path: "logout", element: <Logout /> },
          { path: "send-feedback", element: <SendFeedback /> },
          { path: "report-bug", element: <ReportBug /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
