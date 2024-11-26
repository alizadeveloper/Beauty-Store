"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/" className="text-2xl font-bold text-pink-600">
              Glow & Grace
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-pink-600 transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-2 right-2 bg-pink-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
