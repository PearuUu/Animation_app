import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Component } from "react";
import BasicTransitionsPage from "./pages/BasicTransitionsPage.tsx";
import InteractiveAnimationsPage from "./pages/InteractiveAnimationsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        element: <span>Scroll Animations</span>,
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

