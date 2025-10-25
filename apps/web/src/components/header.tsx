"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ycbLogo from "@/assets/YCB.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Check page types
  const isHomePage = pathname === "/";
  const isNetworkPage = pathname === "/network";
  const isAboutPage = pathname === "/about";
  const isEditionsPage = pathname === "/editions";
  const isFeaturedPage = pathname === "/featured";
  const isContactPage = pathname === "/contact";
  const isApplyPage = pathname === "/apply";

  // Legal pages that should always have navy header and no highlighting
  const isLegalPage =
    pathname.startsWith("/privacy-notice") ||
    pathname.startsWith("/terms-of-use") ||
    pathname.startsWith("/code-of-conduct") ||
    pathname.startsWith("/safeguarding-policy") ||
    pathname.startsWith("/refund-policy") ||
    pathname.startsWith("/how-to-apply") ||
    pathname.startsWith("/tentative-calendar");

  // Pages that should always have navy header
  const shouldAlwaysBeNavy =
    isNetworkPage ||
    isAboutPage ||
    isLegalPage ||
    isEditionsPage ||
    isFeaturedPage ||
    isContactPage ||
    isApplyPage;

  React.useEffect(() => {
    // If we're on pages that should always have navy background
    if (shouldAlwaysBeNavy) {
      setIsScrolled(true);
      return;
    }

    // Only use intersection observer on home page
    if (!isHomePage) {
      setIsScrolled(false); // Reset to transparent for other pages
      return;
    }

    // Home page logic - observe the start of the "Impact across India" section
    const impactSentinel = document.querySelector("#impact-sentinel");
    if (!impactSentinel) {
      // If sentinel not found, default to transparent
      setIsScrolled(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Turn header navy when the Impact section enters the viewport
        setIsScrolled(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // matches header height for precise trigger
      }
    );

    observer.observe(impactSentinel);

    // Fallback: also listen to scroll to handle cases where IntersectionObserver
    // may behave differently across environments (or during rapid resizes).
    const onScroll = () => {
      const rect = (impactSentinel as HTMLElement).getBoundingClientRect();
      // If the top of the Impact section passes the header, switch to navy
      const headerHeight = 80; // keep in sync with header height
      setIsScrolled(rect.top <= headerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once to sync initial state
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHomePage, shouldAlwaysBeNavy]);

  type LinkConfig = {
    to: string;
    label: string;
    isRoute: boolean;
  };

  const links: LinkConfig[] = [
    { to: "/", label: "Home", isRoute: true },
    { to: "/about", label: "About YCB", isRoute: true },
    { to: "/network", label: "Our Network", isRoute: true },
    { to: "/editions", label: "Previous Editions", isRoute: false },
    { to: "/featured", label: "Featured", isRoute: false },
    { to: "/contact", label: "Contact", isRoute: true },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-soft-dark shadow-lg"
            : "border-white/10 border-b bg-black/20 backdrop-blur-lg backdrop-saturate-150"
        }`}
      >
        <div className="flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="relative z-70 flex h-full items-center justify-center overflow-hidden">
            <Link
              className="smooth-hover mt-3 flex items-center justify-center hover:scale-105"
              href="/"
            >
              <Image
                alt="YCB Logo"
                className="h-24 w-auto object-contain lg:h-28 xl:h-32"
                height={96}
                priority
                src={ycbLogo}
                width={288}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden md:block">
            <nav className="flex items-center gap-4 text-lg lg:gap-6 xl:gap-8">
              {links.map(({ to, label, isRoute }) => {
                // Don't highlight any navigation items when on legal pages
                const isActive =
                  !isLegalPage &&
                  (pathname === to || (to !== "/" && pathname.startsWith(to)));

                if (isRoute) {
                  return (
                    <Link
                      className={`link-hover group relative font-bold text-[12px] leading-[18px] lg:text-[13px] lg:leading-[20px] xl:text-[15px] xl:leading-[24.32px] ${
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                      href={to as any}
                      key={to}
                    >
                      {label}
                      {isActive && (
                        <div className="-bottom-1 absolute h-0.5 w-full bg-[gold] transition-all duration-300" />
                      )}
                      {!isActive && (
                        <div className="-bottom-1 absolute h-0.5 w-0 bg-[gold] transition-all duration-300 group-hover:w-full" />
                      )}
                    </Link>
                  );
                }
                return (
                  <a
                    className={`link-hover group relative font-bold text-[12px] leading-[18px] lg:text-[13px] lg:leading-[20px] xl:text-[15px] xl:leading-[24.32px] ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                    href={to}
                    key={to}
                  >
                    {label}
                    {isActive && (
                      <div className="-bottom-1 absolute h-0.5 w-full bg-[gold] transition-all duration-300" />
                    )}
                    {!isActive && (
                      <div className="-bottom-1 absolute h-0.5 w-0 bg-[gold] transition-all duration-300 group-hover:w-full" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Desktop Apply Button and Profile - Hidden on mobile */}
          <div className="hidden h-full items-center gap-2 md:flex lg:gap-3">
            <Button
              asChild
              className="btn-primary-hover hover:-translate-y-0.5 bg-white px-3 py-1.5 font-bold text-[#1a365d] text-xs transition-all duration-300 hover:bg-white/90 hover:shadow-lg lg:px-4 lg:py-2 lg:text-sm xl:px-6 xl:text-base"
            >
              <Link href="/how-to-apply">How to Apply</Link>
            </Button>

            <Button
              asChild
              className="smooth-hover bg-[gold] px-3 py-1.5 font-bold text-[#1a365d] text-xs transition-all duration-300 hover:scale-105 hover:bg-[gold]/90 lg:px-4 lg:py-2 lg:text-sm xl:px-6 xl:text-base"
            >
              <a href="https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">Apply</a>
            </Button>
          </div>

          {/* Mobile Profile Button and Hamburger Menu */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Apply Button */}
            <Button
              asChild
              className="smooth-hover bg-[gold] px-3 py-1.5 font-bold text-[#1a365d] text-xs transition-all duration-300 hover:scale-105 hover:bg-[gold]/90"
            >
              <a href="https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">Apply</a>
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-60 w-80 transform bg-soft-dark transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6">
          {/* Logo Section at Top */}
          <div className="flex h-20 items-center py-4">
            <Link
              className="smooth-hover flex items-center hover:scale-105"
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                alt="YCB Logo"
                className="h-16 w-auto object-contain"
                height={64}
                priority
                src={ycbLogo}
                width={192}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-center">
            {links.map(({ to, label, isRoute }) => {
              const isActive =
                pathname === to || (to !== "/" && pathname.startsWith(to));

              if (isRoute) {
                return (
                  <Link
                    className={`font-semibold text-xl transition-colors ${
                      isActive ? "text-[gold]" : "text-white hover:text-[gold]"
                    }`}
                    href={to as any}
                    key={to}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              }
              return (
                <a
                  className={`font-semibold text-xl transition-colors ${
                    isActive ? "text-[gold]" : "text-white hover:text-[gold]"
                  }`}
                  href={to}
                  key={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="mt-8 space-y-4 text-center">
            <Button
              asChild
              className="w-full bg-white font-bold text-[#1a365d] hover:bg-white/90"
            >
              <Link
                href="/how-to-apply"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Apply
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <button
          aria-label="Close mobile menu"
          className="fixed inset-0 z-55 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          type="button"
        />
      )}
    </>
  );
}
