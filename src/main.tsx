import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "basic-transitions",
        element: <span>Basic Transitions</span>
      },
      {
        path: "gestures-interactions",
        element: <span>Gestures & Interactions</span>
      },
      {
        path: "scroll-animations",
        element: <span>Scroll Animations</span>
      },
      {
        path: "spring-animations",
        element: <span>Spring Animations</span>
      },
      {
        path: "chain-animations",
        element: <span>Chain Animations</span>
      },
      {
        path: "use-cases",
        element: <span>Use Cases</span>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
