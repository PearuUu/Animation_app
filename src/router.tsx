import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import BasicTransitionsPage from "./pages/BasicTransitionsPage.tsx";
import InteractiveAnimationsPage from "./pages/InteractiveAnimationsPage.tsx";
import ScrollAnimationsPage from "./pages/ScrollAnimationsPage.tsx";
import ChainAnmationsPage from "./pages/ChainAnmationsPage.tsx";
import UseCasesPage from "./pages/UseCasesPage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/basic-transitions" replace />,
      },
      {
        path: "basic-transitions",
        element: <BasicTransitionsPage />,
      },
      {
        path: "gestures-interactions",
        element: <InteractiveAnimationsPage />,
      },
      {
        path: "scroll-animations",
        element: <ScrollAnimationsPage />,
      },
      {
        path: "chain-animations",
        element: <ChainAnmationsPage />,
      },
      {
        path: "use-cases",
        element: <UseCasesPage />,
      },
    ],
  },
]);


const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

