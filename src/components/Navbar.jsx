import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderKanban,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "AboutUs", href: "/about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Contact", href: "#contact", icon: Phone },
];

export function Navbar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}
