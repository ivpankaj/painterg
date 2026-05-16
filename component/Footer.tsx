"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const serviceLinks = [
  "Interior Painting",
  "Exterior Painting",
  "Texture Painting",
  "Commercial Painting",
  "Waterproofing",
  "Wall Putty & Polish",
  "Office Painting",
  "Luxury Wall Finishes",
];

const cityLinks = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Faridabad",
  "Ghaziabad",
  "Greater Noida",
  "South Delhi",
  "Dwarka",
];

const supportLinks = [
  "Free Site Visit",
  "Colour Consultation",
  "Get Free Quote",
  "Book Painting Service",
  "Customer Support",
  "Project Assistance",
  "Professional Painters",
];

const companyLinks = [
  "About Painterg",
  "Why Choose Us",
  "Painting Process",
  "Testimonials",
  "Our Projects",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2FA084] px-3 sm:px-5 py-5">
      <div className="mx-auto max-w-[1450px] rounded-[12px] bg-[#EEEEEE] px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        {/* Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 border-b border-gray-300 pb-10">
          {/* Left */}
          <div className="max-w-[520px]">
            {/* Logo */}
            <div>
              <h2 className="text-[34px] font-black tracking-[2px] text-[#1E293B]">
                PAINTERG
              </h2>

              <p className="text-[12px] font-bold tracking-[2px] text-[#2FA084] uppercase mt-1">
                PREMIUM PAINTING SERVICES
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-[15px] leading-[1.9] text-[#475569]">
              Painterg provides premium interior painting, exterior painting,
              texture wall finishes, waterproofing and commercial painting
              services across Delhi NCR with professional painters, modern
              equipment and luxury wall finishes.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-4">
              <div>
                <p className="text-[13px] text-[#475569] font-medium">
                  Call Us
                </p>

                <a
                  href="tel:+917048976431"
                  className="text-[16px] font-bold text-[#1E293B]"
                >
                  +91 7048976431
                </a>
              </div>

              <div>
                <p className="text-[13px] text-[#475569] font-medium">
                  Email
                </p>

                <a
                  href="mailto:contact@roshanenterprises.org"
                  className="text-[15px] font-bold text-[#1E293B]"
                >
                  contact@roshanenterprises.org
                </a>
              </div>

              <div>
                <p className="text-[13px] text-[#475569] font-medium">
                  Service Areas
                </p>

                <p className="text-[15px] font-bold text-[#1E293B]">
                  Delhi NCR, Gurugram, Noida & Nearby Cities
                </p>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full lg:w-auto">
            {/* Services */}
            <div>
              <h2 className="text-[20px] font-black text-[#1E293B] mb-5">
                Services
              </h2>

              <ul className="space-y-3">
                {serviceLinks.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-[#475569] hover:text-[#2FA084] transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h2 className="text-[20px] font-black text-[#1E293B] mb-5">
                Cities
              </h2>

              <ul className="space-y-3">
                {cityLinks.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-[#475569] hover:text-[#2FA084] transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-[20px] font-black text-[#1E293B] mb-5">
                Support
              </h2>

              <ul className="space-y-3">
                {supportLinks.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-[#475569] hover:text-[#2FA084] transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-[20px] font-black text-[#1E293B] mb-5">
                Company
              </h2>

              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-[#475569] hover:text-[#2FA084] transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+917048976431"
              className="h-[56px] px-8 rounded-[8px] bg-[#1E293B] hover:bg-[#2FA084] text-[15px] font-bold text-white flex items-center justify-center transition-colors"
            >
              Call Now
            </a>

            <a
              href="mailto:contact@roshanenterprises.org"
              className="h-[56px] px-8 rounded-[8px] border-2 border-[#1E293B] text-[15px] font-bold text-[#1E293B] flex items-center justify-center hover:bg-[#1E293B] hover:text-white transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              <FaFacebookF key="facebook" />,
              <FaInstagram key="instagram" />,
              <FaYoutube key="youtube" />,
              <FaWhatsapp key="whatsapp" />,
            ].map((icon, index) => (
              <button
                key={index}
                className="w-[54px] h-[54px] rounded-[8px] bg-[#1E293B] hover:bg-[#2FA084] flex items-center justify-center text-white text-[20px] transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-[14px] text-[#475569] font-medium">
            © 2026 Painterg. All Rights Reserved. Premium Painting Services in
            Delhi NCR.
          </p>
        </div>
      </div>
    </footer>
  );
}