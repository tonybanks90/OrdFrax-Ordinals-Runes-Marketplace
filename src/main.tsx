import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion
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
import Layout from "./components/Layout";

// Page transition animation configuration
const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

// Dark mode component
const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={handleDarkModeToggle}
      className="absolute top-2 right-2 bg-gray-300 dark:bg-gray-600 p-2 rounded-lg text-black dark:text-white"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

const router = createBrowserRouter([
  {
    path: "/about",
    element: (
      <Layout>
        <motion.div
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <HomePage />
        </motion.div>
      </Layout>
    ),
  },
  {
    path: "/",
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <AboutPage />
      </motion.div>
    ),
  },
  {
    path: "/inscribe",
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <InscribePage />
      </motion.div>
    ),
    children: [
      {
        index: true, // Default route for /inscribe
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <File />
          </motion.div>
        ),
      },
      {
        path: "file",
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <File />
          </motion.div>
        ),
      },
      {
        path: "text",
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Text />
          </motion.div>
        ),
      },
    ],
  },
  {
    path: "/marketplace/runeshop/:name", // Define dynamic route for rune details
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <Rune />
      </motion.div>
    ),
  },
  {
    path: "/collections",
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <CollectionPage />
      </motion.div>
    ),
    children: [
      {
        path: ":id",
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <OrdinalDetailPage />
          </motion.div>
        ),
      },
    ],
  },
  {
    path: "/marketplace",
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <Marketplace />
      </motion.div>
    ),
    children: [
      {
        index: true, // This will render Runeshop by default when accessing /marketplace
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Runeshop />
          </motion.div>
        ),
      },
      {
        path: "runeshop",
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Runeshop />
          </motion.div>
        ),
        children: [
          {
            path: ":name",
            element: (
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={pageTransition.transition}
              >
                <RuneDetailPage />
              </motion.div>
            ),
          },
        ],
      },
      {
        path: "ordinalshop",
        element: (
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Ordinalshop />
          </motion.div>
        ),
      },
    ],
  },
  {
    path: "/ordinals/:id", // Route for ordinal detail
    element: (
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <OrdinalDetailPage />
      </motion.div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <DarkModeToggle /> {/* Dark mode toggle button */}
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </NextUIProvider>
  </React.StrictMode>
);
