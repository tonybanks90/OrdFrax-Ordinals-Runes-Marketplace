import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./index.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import InscribePage from "./pages/Inscribepage";
import Marketplace from "./pages/Marketplacepage";
import Runeshop from "./components/Runeshop";
import Ordinalshop from "./components/Ordinalshop";
import CollectionPage from "./pages/CollectionPage";
import OrdinalDetailPage from "./components/OrdinalDetailPage"; // Import the OrdinalDetailPage
import RuneDetailPage from "./components/RuneDetailPage";
import Rune from "./pages/Rune";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/inscribe",
    element: <InscribePage />,
  },
  {
    path: "/marketplace/runeshop/:name", // Define dynamic route for rune details
    element: <Rune />,
  },
  {
    path: "/collections",
    element: <CollectionPage />,
    children: [
      {
        path: ":id",
        element: <OrdinalDetailPage />, // Nested route for collection details
      },
    ],
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
    children: [
      {
        path: "runeshop",
        element: <Runeshop />,
        children: [
          {
            path: ":name",
            element: <RuneDetailPage />, // Route for individual rune details
          },
        ],
      },
      {
        path: "ordinalshop",
        element: <Ordinalshop />,
      },
    ],
  },
  {
    path: "/ordinals/:id", // Route for ordinal detail
    element: <OrdinalDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
