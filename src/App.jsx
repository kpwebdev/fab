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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
