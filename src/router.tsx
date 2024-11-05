import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Component } from "react";
import BasicTransitionsPage from "./pages/BasicTransitionsPage.tsx";
import InteractiveAnimationsPage from "./pages/InteractiveAnimationsPage.tsx";
import ScrollAnimationsPage from "./pages/ScrollAnimationsPage.tsx";


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
        path: "spring-animations",
        element: <span>Spring Animations</span>,
      },
      {
        path: "chain-animations",
        element: <span>Chain Animations</span>,
      },
      {
        path: "use-cases",
        element: <span>Use Cases</span>,
      },
    ],
  },
]);


export default class Router extends Component {
  
  render() {
    return <RouterProvider router={router} />;
  }
}

