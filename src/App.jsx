import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import { SharedHome, Home, Services, About } from "./routes";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
