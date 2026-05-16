"use client";

import { useState, useEffect, MouseEvent, ChangeEvent, FC, SVGProps, useRef, JSX } from "react";

// ===== TYPES & INTERFACES =====
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface DropdownItem {
  name: string;
  desc: string;
  icon: FC<IconProps>;
}

interface NavItem {
  label: string;
  href: string;
  icon: FC<IconProps>;
  dropdown: DropdownItem[];
}

interface HeroSlide {
  tagline: string;
  image: string;
}

// ===== ICONS COMPONENTS =====
const PaintIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const HomeIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const DropIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const PaletteIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const ToolsIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronDownIcon: FC<IconProps> = (props) => (
  <svg className={`w-3 h-3 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRightIcon: FC<IconProps> = (props) => (
  <svg className={`w-4 h-4 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const MenuIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon: FC<IconProps> = (props) => (
  <svg className={`w-5 h-5 ${props.className || ""}`} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ShieldIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SparklesIcon: FC<IconProps> = (props) => (
  <svg className={`w-6 h-6 ${props.className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Icons = {
  Paint: PaintIcon,
  Home: HomeIcon,
  Drop: DropIcon,
  Palette: PaletteIcon,
  Tools: ToolsIcon,
  ChevronDown: ChevronDownIcon,
  ChevronRight: ChevronRightIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  Star: StarIcon,
  Shield: ShieldIcon,
  Sparkles: SparklesIcon,
};

// ===== NAV DATA WITH ICONS & DESCRIPTIONS =====
const NAV_ITEMS: NavItem[] = [
  {
    label: "PRODUCTS",
    href: "#",
    icon: Icons.Paint,
    dropdown: [
      { name: "Interior Paints", desc: "Rich, washable finishes for every room", icon: Icons.Home },
      { name: "Exterior Paints", desc: "Weather-proof protection for exteriors", icon: Icons.Shield },
      { name: "Wood Coatings", desc: "Enhance & protect wooden surfaces", icon: Icons.Paint },
      { name: "Waterproofing", desc: "Advanced damp & leak solutions", icon: Icons.Drop },
      { name: "Metal Paints", desc: "Rust-resistant coatings for metals", icon: Icons.Tools },
    ],
  },
  {
    label: "NXTGEN SERVICES",
    href: "#",
    icon: Icons.Sparkles,
    dropdown: [
      { name: "Home Painting", desc: "Professional end-to-end painting service", icon: Icons.Home },
      { name: "Texture Design", desc: "Custom artistic wall textures", icon: Icons.Palette },
      { name: "Waterproofing", desc: "Expert waterproofing consultation", icon: Icons.Drop },
      { name: "Consultation", desc: "Free expert color & finish advice", icon: Icons.Star },
    ],
  },
  {
    label: "WALL PAINT",
    href: "#",
    icon: Icons.Palette,
    dropdown: [
      { name: "Luxury Paints", desc: "Premium finishes with superior durability", icon: Icons.Star },
      { name: "Premium Finish", desc: "Silky smooth elegant wall finishes", icon: Icons.Sparkles },
      { name: "Designer Series", desc: "Exclusive artistic & textured collections", icon: Icons.Palette },
      { name: "Matte Finish", desc: "Modern non-reflective sophisticated look", icon: Icons.Home },
    ],
  },
  {
    label: "COLOURS",
    href: "#",
    icon: Icons.Palette,
    dropdown: [
      { name: "Popular Colours", desc: "Trending shades loved by homeowners", icon: Icons.Star },
      { name: "Trending Shades", desc: "Latest color forecasts & inspirations", icon: Icons.Sparkles },
      { name: "Colour Palette", desc: "Explore 1000+ curated color options", icon: Icons.Palette },
      { name: "Texture Shades", desc: "Colors designed for textured finishes", icon: Icons.Paint },
    ],
  },
  {
    label: "TOOLS",
    href: "#",
    icon: Icons.Tools,
    dropdown: [
      { name: "Paint Calculator", desc: "Estimate paint quantity & cost instantly", icon: Icons.Tools },
      { name: "Store Locator", desc: "Find nearest Nerolac dealer or store", icon: Icons.Home },
      { name: "Visualizer", desc: "Preview colors on your walls virtually", icon: Icons.Sparkles },
      { name: "Shade Card", desc: "Browse digital color shade cards", icon: Icons.Palette },
    ],
  },
];

const HERO_SLIDES: HeroSlide[] = [
  {
    tagline: "PAINTING AASAAN.\nBADHAYE GHAR KI SHAAN",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1800&auto=format&fit=crop",
  },
  {
    tagline: "TRANSFORM YOUR\nHOME BEAUTIFULLY",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop",
  },
  {
    tagline: "MODERN TEXTURES\nFOR MODERN HOMES",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800&auto=format&fit=crop",
  },
  {
    tagline: "PREMIUM WALL\nFINISHES & COLOURS",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",
  },
];

// ===== DROPDOWN CARD COMPONENT =====
interface DropdownCardProps {
  item: DropdownItem;
  isMobile?: boolean;
}

const DropdownCard: FC<DropdownCardProps> = ({ item, isMobile = false }) => {
  const Icon = item.icon;
  return (
    <div className={`group/card ${isMobile ? "p-4" : "p-4"} rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#f5a623]/50 hover:shadow-lg hover:shadow-[#f5a623]/10 transition-all duration-300`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#cf102d] to-[#e01c5a] flex items-center justify-center text-white shadow-md group-hover/card:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-[#1a2f5a] text-[14px] leading-tight group-hover/card:text-[#f5a623] transition-colors">
            {item.name}
          </h4>
          <p className="text-[12px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
          <div className="flex items-center gap-1 mt-2 text-[#f5a623] text-[11px] font-semibold opacity-0 group-hover/card:opacity-100 transition-opacity">
            <span>Explore</span>
            <Icons.ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== MOBILE DROPDOWN PANEL =====
interface MobileDropdownPanelProps {
  item: NavItem;
}

const MobileDropdownPanel: FC<MobileDropdownPanelProps> = ({ item }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const Icon = item.icon;

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-4 px-5 text-left"
        aria-expanded={expanded}
        aria-controls={`mobile-dropdown-${item.label}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#cf102d] to-[#e01c5a] flex items-center justify-center text-white">
            <Icon />
          </div>
          <span className="font-bold text-[#1a2f5a] text-[15px]">{item.label}</span>
        </div>
        <span className={`transform transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
          <Icons.ChevronDown />
        </span>
      </button>
      
      <div 
        id={`mobile-dropdown-${item.label}`}
        className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pb-4 space-y-3">
          {item.dropdown.map((sub, idx) => {
            const SubIcon = sub.icon;
            return (
              <a
                key={idx}
                href="#"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff5df] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-[#1a2f5a] group-hover:bg-[#f5a623] group-hover:text-white transition-colors">
                  <SubIcon />
                </div>
                <div>
                  <p className="font-medium text-[#1a2f5a] text-[14px]">{sub.name}</p>
                  <p className="text-[12px] text-gray-500">{sub.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function NerolacPage(): JSX.Element {
  const [slide, setSlide] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>('left');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setSlide((prev: number) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (label: string, index: number) => {
    setActiveDropdown(label);
    
    // Calculate if dropdown should be right-aligned
    const totalItems = NAV_ITEMS.length;
    const isRightSide = index >= totalItems - 2; // Last 2 items
    setDropdownPosition(isRightSide ? 'right' : 'left');
  };

  const currentSlide: HeroSlide = HERO_SLIDES[slide];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#cf102d] px-2 py-1 text-[10px] font-bold text-white rounded">
              KANSAI
            </div>
            <h1 className="text-[24px] font-black tracking-[4px] text-[#1a2f5a]">
              NEROLAC
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={navRef}>
            {NAV_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(item.label, index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1.5 px-3 xl:px-4 py-6 text-[11px] xl:text-[12px] font-bold tracking-wide text-[#1a2f5a] hover:text-[#f5a623] transition-colors"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    <span className="hidden xl:inline">{item.label}</span>
                    <span className="xl:hidden"><Icon /></span>
                    <Icons.ChevronDown />
                  </button>

                  {/* Mega Dropdown - Large Cards */}
                  <div className={`absolute top-full transform transition-all duration-300 ${
                    dropdownPosition === 'right' ? 'right-0' : 'left-0'
                  } ${
                    activeDropdown === item.label 
                      ? "opacity-100 translate-y-0 visible" 
                      : "opacity-0 translate-y-3 invisible pointer-events-none"
                  }`}>
                    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-gray-200/50 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px]">
                      {/* Header */}
                      <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cf102d] to-[#e01c5a] flex items-center justify-center text-white">
                          <Icon />
                        </div>
                        <div>
                          <h3 className="font-black text-[#1a2f5a] text-[16px]">{item.label}</h3>
                          <p className="text-[12px] text-gray-500">Explore our {item.label.toLowerCase()}</p>
                        </div>
                      </div>
                      
                      {/* Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.dropdown.map((sub, idx) => (
                          <DropdownCard key={idx} item={sub} />
                        ))}
                      </div>
                      
                      {/* Footer CTA */}
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-[12px] text-gray-500">Need help? <a href="#" className="text-[#f5a623] font-semibold hover:underline">Talk to experts</a></p>
                        <button className="flex items-center gap-1 text-[12px] font-bold text-[#cf102d] hover:text-[#e01c5a] transition-colors">
                          View All <Icons.ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 xl:px-5 py-2.5 text-[12px] xl:text-[13px] font-bold text-[#1a2f5a] hover:text-[#f5a623] transition-colors">
              Login
            </button>
            <button className="rounded-full bg-[#e01c5a] px-4 xl:px-6 py-2.5 text-[12px] xl:text-[13px] font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-[#e01c5a]/30">
              Get Quote
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-4 pb-6 space-y-2 bg-gray-50 border-t border-gray-100">
            {/* Mobile Nav Items */}
            {NAV_ITEMS.map((item, idx) => (
              <MobileDropdownPanel key={idx} item={item} />
            ))}
            
            {/* Mobile CTAs */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
              <button className="w-full py-3 rounded-xl bg-[#e01c5a] text-white font-bold text-[15px] shadow-lg shadow-[#e01c5a]/30">
                Get Free Quote
              </button>
              <button className="w-full py-3 rounded-xl border-2 border-[#1a2f5a] text-[#1a2f5a] font-bold text-[15px] hover:bg-[#1a2f5a] hover:text-white transition-colors">
                Contact Us
              </button>
              <button className="w-full py-3 rounded-xl text-[#1a2f5a] font-semibold text-[14px] hover:bg-gray-100 transition-colors">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[520px] w-full md:h-[650px]">
        {/* Full Width Image */}
        <img
          src={currentSlide.image}
          alt="Hero slider"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-[650px]">
              <h1 className="whitespace-pre-line text-[34px] font-extrabold leading-[1.1] text-white md:text-[58px] drop-shadow-lg">
                {currentSlide.tagline}
              </h1>

              <p className="mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/95 md:text-[18px] drop-shadow">
                Premium home painting solutions with modern textures,
                waterproofing and beautiful finishes for your dream home.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#e01c5a] px-7 py-3.5 text-[14px] font-bold text-white transition hover:scale-105 shadow-lg shadow-[#e01c5a]/40">
                  Explore Services
                </button>

                <button className="rounded-full border-2 border-white px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-white hover:text-[#1a2f5a]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={() => setSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-[#1a2f5a]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-[#1a2f5a]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === slide ? "w-10 bg-white shadow-lg" : "w-2.5 bg-white/70 hover:bg-white/90"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === slide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 text-white/90 text-[13px] font-medium">
          <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
            {String(slide + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </section>
    </div>
  );
}