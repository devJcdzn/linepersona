import { Twitter, Instagram, Linkedin } from "lucide-react";
import { LogoInkPfp } from "./ui/logo-inkpfp";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <LogoInkPfp />
            <p className="text-gray-600 max-w-md mt-2">
              Minimal avatars for maximum impact. Transform your profile picture
              into a professional, minimalist avatar that stands out across all
              platforms.
            </p>
          </div>

          {/* Links */}
          {/* <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div> */}

          {/* Support */}
          {/* <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-zinc-900 transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 inkpfp. All rights reserved.
          </p>

          {/* <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-zinc-900 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-zinc-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-zinc-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
