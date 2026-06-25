"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import logoUrl from "../../logo.svg";

export function SiteFooter() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-accent" />,
      text: "connect@modulifft.com",
      href: "mailto:connect@modulifft.com",
    },
    {
      icon: <Phone size={18} className="text-accent" />,
      text: "+1 (310) 802-7945",
      href: "tel:+13108027945",
    },
    {
      icon: <MapPin size={18} className="text-accent" />,
      text: "1999 Avenue of the Stars, Los Angeles, CA",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/Modulifft/" },
    { icon: <FaXTwitter size={20} />, label: "X (Twitter)", href: "https://x.com/Modulifft" },
    { icon: <FaPinterest size={20} />, label: "Pinterest", href: "https://www.pinterest.com/Modulifft/" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "https://www.youtube.com/@Modulifft" },
  ];

  return (
    <footer className="glass relative h-fit rounded-3xl overflow-hidden m-4 sm:m-8 border border-white/10 shadow-[0_0_40px_rgba(239,136,173,0.05)]">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="flex items-center">
              <img src={logoUrl} alt="Modulifft Logo" className="h-24 sm:h-28 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Robotics simulation & digital twin intelligence for the world's most ambitious factories.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2 lg:pl-4">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter section */}
          <div className="lg:col-span-4 lg:pr-8">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest updates.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl px-4 py-2.5 text-sm font-bold hover:shadow-[0_4px_20px_-6px_rgba(239,136,173,0.6)] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-3 hidden md:block">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/5 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            &copy; {new Date().getFullYear()} Modulifft. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="hidden lg:flex h-[24rem] -mt-32 -mb-24 items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full h-full">
          <TextHoverEffect text="MODULIFFT" className="z-50" />
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
