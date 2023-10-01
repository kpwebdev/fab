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
  MyFab,
  ContactsSharedLayout,
  Shop,
  OrdersSharedLayout,
  Self,
  Customer,
  Settings,
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
            element: <MyFab />,
          },
        ],
      },
      {
        path: "contacts",
        element: <ContactsSharedLayout />,
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
            element: <Self />,
          },
        ],
      },
      {
        path: "settings",
        element: <MyProfileSharedLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
