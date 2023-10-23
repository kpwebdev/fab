import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
// context
import AuthContextProvider from "./contexts/AuthProvider.context.jsx";
import { AuthContext } from "./contexts/AuthProvider.context.jsx";
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
  PhysicalCard,
  CardTemplates,
  CustomizeCard,
  CustomizeCardTemplate,
  DigitalProfile,
  ProfileTemplates,
  CustomizeProfile,
  AgencySharedLayout,
  AgencyHome,
  ServicesSharedLayout,
  Service,
  PortfoliosSharedLayout,
  Portfolio,
  ServicesIndex,
} from "./routes";

const queryClient = new QueryClient();

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
        index: true,
        element: <Navigate replace to="/nfc/dashboard/my-profile" />,
      },
      {
        path: "my-profile",
        element: <MyProfileSharedLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="general" />,
          },
          {
            path: "general",
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
                element: <Navigate to="cards" />,
              },
              {
                path: "cards",
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
            element: <Navigate to="self" />,
          },
          {
            path: "self",
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
  { path: "/nfc/creation/physical-card", element: <PhysicalCard /> },
  { path: "/nfc/creation/physical-card/templates", element: <CardTemplates /> },
  { path: "/nfc/creation/physical-card/customize", element: <CustomizeCard /> },
  {
    path: "/nfc/creation/physical-card/customize-template",
    element: <CustomizeCardTemplate />,
  },
  { path: "/nfc/creation/digital-profile", element: <DigitalProfile /> },
  {
    path: "/nfc/creation/digital-profile/template",
    element: <ProfileTemplates />,
  },
  {
    path: "/nfc/creation/digital-profile/customize",
    element: <CustomizeProfile />,
  },
  {
    path: "/fab-digital-agency",
    element: <AgencySharedLayout />,
    children: [
      {
        index: true,
        element: <AgencyHome />,
      },
      {
        path: "services",
        element: <ServicesSharedLayout />,
        children: [
          { index: true, element: <ServicesIndex /> },
          { path: ":id", element: <Service /> },
        ],
      },
      {
        path: "portfolios",
        element: <PortfoliosSharedLayout />,
        children: [
          {
            index: true,
            element: (
              <Navigate to="/fab-digital-agency/portfolios/social-media-marketing" />
            ),
          },
          { path: ":id", element: <Portfolio /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
