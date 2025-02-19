import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  FaChevronDown,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

// Social Media Links
const socialIcons = [
  { icon: <FaFacebookF />, link: "#", label: "Facebook" },
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaPinterest />, link: "#", label: "Pinterest" },
  { icon: <FaYoutube />, link: "#", label: "YouTube" },
];

// Footer Links
const footerSections = {
  "COOL STUFF": [
    "Accessories",
    "Hats & Caps",
    "Clothing",
    "New Arrivals",
    "Skateboards",
    "Eyewear",
    "UM Steals",
    "Instagram",
    "Shop",
    "Blog",
    "Streetwear",
    "Hub",
    "About Us",
    "Offers",
  ],
  "BORING STUFF": [
    "Terms & Conditions",
    "Privacy Policy",
    "Shipping Info",
    "Returns & Exchanges",
    "FAQ",
    "Customer Service",
    "Careers",
  ],
};

// Reusable Disclosure Component (Mobile Menu)
const DisclosureList = ({ title, items }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button
          className="w-full flex justify-between items-center py-2 focus:outline-none"
          aria-expanded={open}
        >
          <span className="font-medium">{title}</span>
          <FaChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </Disclosure.Button>
        <Disclosure.Panel className="text-white px-4">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="list-none">
                <a
                  href="#"
                  className="hover:underline focus:ring-2 focus:ring-white px-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

// Reusable Social Media Links Component
const SocialLinks = () => (
  <div className="flex justify-start gap-4 mt-4">
    {socialIcons.map(({ icon, link, label }, index) => (
      <a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 w-10 h-10 rounded-full border-white flex items-center justify-center hover:scale-110 transition-transform"
        aria-label={`Follow us on ${label}`}
      >
        <span className="text-white text-lg">{icon}</span>
      </a>
    ))}
  </div>
);

// Small Screen Footer
const Footer_HomePage_sm = () => (
  <nav
    aria-label="Footer Navigation"
    className="bg-black text-white p-4 w-full"
  >
    {Object.entries(footerSections).map(([title, items], index) => (
      <div key={index} className="mb-4">
        <DisclosureList title={title} items={items} />
      </div>
    ))}
    <div className="mt-4">
      <p className="text-xl font-medium">Reach Out to Us</p>
      <div className="flex items-center gap-2 mt-2">
        <IoMdMail className="text-xl" aria-hidden="true" />
        <p className="text-lg">
          <a
            href="mailto:hello@gmail.com"
            className="hover:underline focus:ring-2 focus:ring-white"
          >
            hello@gmail.com
          </a>
        </p>
      </div>
      <p className="mt-4">Follow us on social media</p>
      <SocialLinks />
    </div>
  </nav>
);

// Large Screen Footer
const Footer_HomePage_lg = () => (
  <footer
    className="bg-black text-white p-6 w-full flex flex-wrap justify-between lg:justify-around"
    role="contentinfo"
  >
    {Object.entries(footerSections).map(([title, items], index) => (
      <div key={index}>
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <ul className="space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="list-none">
              <a
                href="#"
                className="hover:underline focus:ring-2 focus:ring-white px-1"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {/* Contact & Social Media Section */}
    <div>
      <h2 className="font-semibold text-lg mb-2">Reach Out to Us</h2>
      <div className="flex items-center gap-2">
        <IoMdMail className="text-xl" aria-hidden="true" />
        <p className="text-lg">
          <a
            href="mailto:hello@gmail.com"
            className="hover:underline focus:ring-2 focus:ring-white"
          >
            hello@gmail.com
          </a>
        </p>
      </div>
      <h2 className="font-semibold text-lg mt-4">Follow Us</h2>
      <SocialLinks />
    </div>
  </footer>
);

// Main Footer Component
export default function Footer_HomePage() {
  return (
    <div className="min-h-[400px]">
      <div className="lg:hidden">
        <Footer_HomePage_sm />
      </div>
      <div className="hidden lg:flex">
        <Footer_HomePage_lg />
      </div>
    </div>
  );
}
