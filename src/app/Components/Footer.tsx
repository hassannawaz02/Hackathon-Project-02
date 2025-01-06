import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Image from "next/image";
import NewsLetter from "./News-Letter";

export default function Footer() {
  return (
    <footer className="bg-color1 text-black">
      <NewsLetter/>
      <div className="w-full bg-colo1 p-8 md:p-12">
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold">SHOP.CO</h2>
              <p className="mb-6 text-text1">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-text1">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-text1">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-text1">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-text1">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">COMPANY</h3>
              <ul className="space-y-2 text-text1">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">HELP</h3>
              <ul className="space-y-2 text-text1">
                <li>
                  <a href="#" className="hover:text-white">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">RESOURCES</h3>
              <ul className="space-y-2 text-text1">
                <li>
                  <a href="#" className="hover:text-white">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 py-8 md:flex-row">
            <p className="text-sm text-text1">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex gap-2">
              <Image
                src="/footerImages/1.png"
                alt="Visa"
                className="h-8"
                width={46}
                height={30}
              />
              <Image
                src="/footerImages/2.png"
                alt="Mastercard"
                className="h-8"
                width={46}
                height={30}
              />
              <Image
                src="/footerImages/3.png"
                alt="PayPal"
                className="h-8"
                width={46}
                height={30}
              />
              <Image
                src="/footerImages/4.png"
                alt="Apple Pay"
                className="h-8"
                width={46}
                height={30}
              />
              <Image
                src="/footerImages/5.png"
                alt="Google Pay"
                className="h-8"
                width={46}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
