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
import File from "./components/File";
import Text from "./components/Text";
import layout from "./components/Layout";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/about",
    element: (
    <Layout>
      <HomePage />,
    </Layout>
    ),
  },
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/inscribe",
    element: <InscribePage />,
    children: [
      {
        index: true, // Default route for /inscribe
        element: <File />, // File will be displayed by default
      },
      {
        path: "file",
        element: <File />,
      },
      {
        path: "text",
        element: <Text />,
      },
    ],
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
        index: true, // This will render Runeshop by default when accessing /marketplace
        element: <Runeshop />,
      },
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
