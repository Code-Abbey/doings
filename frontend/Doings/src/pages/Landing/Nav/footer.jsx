import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-4 px-6 md:px-8 lg:px-12 py-14">
      <div className=" mx-auto border-t border-gray-200 ">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row mb-4 justify-between pt-8">
          {/* Logo and Description */}
          <div className="col-span-1 pb-4">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Doings</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplify task management and team collaboration.
            </p>
          </div>

          {/* Product Column */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between ">
          <p className="text-gray-500 text-sm">
            CCL2 Project by Abiodun Michael ADEFUSI cc241033
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/abiodun.adefusi"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/Code_Abbey"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/code_abbey/"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
