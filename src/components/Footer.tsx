import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      {/* Social Links Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* X (Twitter) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full p-3 transition"
            aria-label="Visit our Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
          {/* Telegram */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full p-3 transition"
            aria-label="Join us on Telegram"
          >
            <FaTelegramPlane className="text-xl" />
          </a>
          {/* Discord */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full p-3 transition"
            aria-label="Join our Discord"
          >
            <FaDiscord className="text-xl" />
          </a>
        </div>

        {/* Links Section */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <nav>
            <ul className="flex flex-col md:flex-row gap-4">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-8 text-center text-gray-400">
        <p className="text-sm font-light">
          Build fully onchain on Internet Computer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
