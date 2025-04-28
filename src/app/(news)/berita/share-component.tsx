"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Link, Share2, MessageCircleMore } from "lucide-react";

export default function ShareArticle() {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const fullUrl = `${baseUrl}${pathname}`;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <Share2 className="w-5 h-5" /> Bagikan Artikel:
      </h3>
      <div className="flex flex-wrap gap-4">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(fullUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          <MessageCircleMore className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Facebook className="w-4 h-4" />
          Facebook
        </a>

        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          <Link className="w-4 h-4" />
          {copied ? "Tersalin!" : "Salin Link"}
        </button>
      </div>
    </div>
  );
}
