"use client";

import {
  useState,
  useEffect,
  FC,
  SVGProps,
  useRef,
  JSX,
} from "react";

// ===== TYPES =====
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface DropdownItem {
  name: string;
  desc: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown: DropdownItem[];
}

interface HeroSlide {
  tagline: string;
  image: string;
}

// ===== SIMPLE ICONS =====
const ChevronDownIcon: FC<IconProps> = (props) => (
  <svg
    className={`w-3 h-3 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon: FC<IconProps> = (props) => (
  <svg
    className={`w-6 h-6 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon: FC<IconProps> = (props) => (
  <svg
    className={`w-6 h-6 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Icons = {
  ChevronDown: ChevronDownIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
};

// ===== NAV ITEMS =====
const NAV_ITEMS: NavItem[] = [
  {
    label: "SERVICES",
    href: "#",
    dropdown: [
      {
        name: "Interior Painting",
        desc: "Premium wall painting services",
      },
      {
        name: "Exterior Painting",
        desc: "Weatherproof exterior painting",
      },
      {
        name: "Texture Painting",
        desc: "Luxury texture wall finishes",
      },
      {
        name: "Commercial Painting",
        desc: "Professional office painting",
      },
    ],
  },
  {
    label: "CITIES",
    href: "#",
    dropdown: [
      {
        name: "Delhi",
        desc: "Painting services in Delhi",
      },
      {
        name: "Gurugram",
        desc: "Professional painters in Gurugram",
      },
      {
        name: "Noida",
        desc: "Modern painting services in Noida",
      },
      {
        name: "Faridabad",
        desc: "Trusted wall painting experts",
      },
    ],
  },
  {
    label: "WHY PAINTERG",
    href: "#",
    dropdown: [
      {
        name: "Verified Painters",
        desc: "Experienced painting team",
      },
      {
        name: "Affordable Pricing",
        desc: "Competitive pricing for projects",
      },
      {
        name: "Premium Materials",
        desc: "Top quality paints & finishes",
      },
    ],
  },
  {
    label: "CONTACT",
    href: "#",
    dropdown: [
      {
        name: "Call Us",
        desc: "+91 7048976431",
      },
      {
        name: "Email",
        desc: "contact@roshanenterprises.org",
      },
    ],
  },
];

// ===== HERO SLIDES =====
const HERO_SLIDES: HeroSlide[] = [
  {
    tagline: "PROFESSIONAL\nPAINTING SERVICES\nIN DELHI NCR",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop",
  },
  {
    tagline: "MODERN INTERIOR\n& EXTERIOR\nPAINTING",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800&auto=format&fit=crop",
  },
  {
    tagline: "LUXURY TEXTURE\nWALL FINISHES",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",
  },
];

// ===== DROPDOWN CARD =====
interface DropdownCardProps {
  item: DropdownItem;
}

const DropdownCard: FC<DropdownCardProps> = ({ item }) => {
  return (
    <div className="p-4 rounded-[8px] border border-gray-300 transition-colors hover:bg-[#2FA084] text-black hover:text-white cursor-pointer">
      <h4 className="font-bold text-[14px] leading-tight">
        {item.name}
      </h4>

      <p className="text-[12px] mt-2 leading-relaxed opacity-80">
        {item.desc}
      </p>
    </div>
  );
};

// ===== MOBILE DROPDOWN =====
interface MobileDropdownPanelProps {
  item: NavItem;
}

const MobileDropdownPanel: FC<MobileDropdownPanelProps> = ({ item }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-4 px-5 text-left"
      >
        <span className="font-bold text-[#1E293B] text-[15px]">
          {item.label}
        </span>

        <span
          className={`${expanded ? "rotate-180" : ""} transition-colors`}
        >
          <Icons.ChevronDown />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-colors ${
          expanded
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-4 space-y-3">
          {item.dropdown.map((sub, idx) => (
            <a
              key={idx}
              href="#"
              className="block p-3 rounded-[8px]  hover:bg-[#2FA084] hover:text-white text-black transition-colors"
            >
              <p className="font-semibold text-[14px]">
                {sub.name}
              </p>

              <p className="text-[12px] opacity-80 mt-1">
                {sub.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function PaintergPage(): JSX.Element {
  const [slide, setSlide] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState<boolean>(false);

  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[slide];

  return (
    <div className="w-full overflow-hidden bg-[#EEEEEE]">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#EEEEEE]">
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between px-4 lg:px-6">
          {/* LOGO */}
          <div>
            <h1 className="text-[26px] font-black tracking-[2px] text-[#1E293B]">
              PAINTERG
            </h1>

            <p className="text-[10px] font-bold tracking-[2px] text-[#2FA084] uppercase">
              DELHI NCR PAINTING SERVICES
            </p>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="hidden lg:flex items-center gap-1"
            ref={navRef}
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() =>
                  setActiveDropdown(item.label)
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
              >
                <button className="flex items-center gap-1 px-5 py-6 text-[13px] font-bold text-[#1E293B] hover:text-[#2FA084] transition-colors">
                  {item.label}
                  <Icons.ChevronDown />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`absolute top-full left-0 transition-colors ${
                    activeDropdown === item.label
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="w-[420px] bg-white border border-gray-200 p-5 rounded-[10px] shadow-lg">
                    <div className="grid grid-cols-2 gap-3">
                      {item.dropdown.map((sub, idx) => (
                        <DropdownCard key={idx} item={sub} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917048976431"
              className="px-5 py-3 text-[13px] font-bold text-[#1E293B]"
            >
              +91 7048976431
            </a>

            <button className="px-7 py-3 rounded-[8px] bg-[#1E293B] hover:bg-[#2FA084] text-[13px] font-bold text-white transition-colors">
              Get Free Quote
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="lg:hidden p-2 text-[#1E293B]"
          >
            {mobileMenuOpen ? (
              <Icons.Close />
            ) : (
              <Icons.Menu />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden ${
            mobileMenuOpen
              ? "max-h-[90vh] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-200">
            {NAV_ITEMS.map((item, idx) => (
              <MobileDropdownPanel key={idx} item={item} />
            ))}

            <div className="p-5 space-y-3">
              <button className="w-full py-3 rounded-[8px] bg-[#1E293B] hover:bg-[#2FA084] text-white font-bold transition-colors">
                Get Free Quote
              </button>

              <a
                href="tel:+917048976431"
                className="flex items-center justify-center w-full py-3 rounded-[8px] border-2 border-[#1E293B] text-[#1E293B] font-bold hover:bg-[#1E293B] hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative h-[520px] md:h-[650px]">
        <img
          src={currentSlide.image}
          alt="Painterg Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1E293B]/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-[700px]">
              <h1 className="whitespace-pre-line text-[36px] md:text-[64px] font-black leading-[1.1] text-white">
                {currentSlide.tagline}
              </h1>

              <p className="mt-6 max-w-[620px] text-[15px] md:text-[18px] leading-[1.9] text-white/90">
                Painterg provides premium interior painting,
                exterior painting, waterproofing and luxury
                texture wall finishes across Delhi NCR with
                professional painters and modern equipment.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-[8px] bg-[#2FA084] hover:bg-[#1E293B] text-[14px] font-bold text-white transition-colors">
                  Explore Services
                </button>

                <a
                  href="tel:+917048976431"
                  className="px-8 py-4 rounded-[8px] border-2 border-white text-[14px] font-bold text-white hover:bg-white hover:text-[#1E293B] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-3 transition-colors ${
                i === slide
                  ? "w-10 bg-[#2FA084]"
                  : "w-3 bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}