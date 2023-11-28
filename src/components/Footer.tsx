import React from "react";
import Logo from "./Logo";
import {
  FaInstagram,
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const socials = [
    {
      name: "instagram",
      link: "https://www.instagram.com/retro-boosting",
      icon: (
        <FaInstagram
          key="instagram social"
          className="text-2xl"
          aria-label="instagram social"
        />
      ),
    },
    {
      name: "twitch",
      link: "https://www.twitch.tv/retro-boosting",
      icon: (
        <FaTwitch
          key="twitch social"
          className="text-2xl"
          aria-label="twitch social"
        />
      ),
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/@retro-boosting",
      icon: (
        <FaYoutube
          key="youtube social"
          className="text-2xl"
          aria-label="youtube social"
        />
      ),
    },
    {
      name: "twitter",
      link: "https://www.twitter.com/retro-boosting",
      icon: (
        <FaTwitter
          key="twitter social"
          className="text-2xl"
          aria-label="twitter social"
        />
      ),
    },
    {
      name: "discord",
      link: "https://discord.gg/TEMP_DISCORD",
      icon: (
        <FaDiscord
          key="discord social"
          className="text-2xl"
          aria-label="discord social"
        />
      ),
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/@retro-boosting",
      icon: (
        <FaTiktok
          key="tiktok social"
          className="text-2xl"
          aria-label="tiktok social"
        />
      ),
    },
  ];

  const nav = [
    {
      label: "boosting",
      href: "/boosting",
    },
    {
      label: "coaching",
      href: "/coaching",
    },
    {
      label: "our team",
      href: "/team",
    },
  ];

  return (
    <footer className="bg-black w-full py-10 flex flex-col items-center justify-center text-white space-y-7">
      <Logo />
      <div className="flex space-x-5 items-center text-center justify-center">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            className="flex items-center justify-center text-center hover:opacity-80"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <div className="w-4/5 lg:w-1/3 mx-auto">
        <hr className="border-primary border-2" />
      </div>
      <ul className="w-4/5 lg:w-1/3 flex justify-center uppercase font-medium items-center text-center mx-auto relative space-x-5">
        {nav.map((link, idx) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="font-medium text-center space-y-3">
        <div className="flex space-x-5">
          <Link href="/terms" className="hover:underline">
            Terms of User
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <p>&copy; 2023 RB</p>
      </div>
    </footer>
  );
}

export default Footer;
