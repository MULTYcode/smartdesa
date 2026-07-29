"use client";

import RichTextContent from "@/components/common/RichTextContent";
import { DynamicSectionData } from "@/types/DynamicSection";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SambutanSectionProps {
  sections: DynamicSectionData[];
  isLoading?: boolean;
}

export function SambutanSection({ sections, isLoading }: SambutanSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isPaused, setIsPaused] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    if (sections.length > 0 && !activeTab) {
      setActiveTab(sections[0].config.id);
    }
  }, [sections, activeTab]);

  // Auto-slide interval 6 detik dengan pause saat hover / touch / focus
  useEffect(() => {
    if (sections.length <= 1 || isPaused || !activeTab) return;

    const interval = setInterval(() => {
      const currentIndex = sections.findIndex((s) => s.config.id === activeTab);
      const nextIndex = (currentIndex + 1) % sections.length;
      setActiveTab(sections[nextIndex].config.id);
    }, 6000);

    return () => clearInterval(interval);
  }, [sections, activeTab, isPaused]);

  // Auto-scroll tab aktif di layar mobile saat slide berpindah
  useEffect(() => {
    if (activeTab && tabRefs.current[activeTab] && tabContainerRef.current) {
      const activeEl = tabRefs.current[activeTab];
      const container = tabContainerRef.current;
      if (activeEl && container) {
        const elLeft = activeEl.offsetLeft;
        const elWidth = activeEl.offsetWidth;
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;

        if (elLeft < containerScrollLeft || elLeft + elWidth > containerScrollLeft + containerWidth) {
          container.scrollTo({
            left: elLeft - containerWidth / 2 + elWidth / 2,
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeTab]);

  if (isLoading) {
    return (
      <section className="py-16 flex justify-center">
        <div className="w-full px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="animate-pulse">
            <div className="flex space-x-4 border-b mb-4">
              <div className="h-8 w-32 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-200 rounded" />
            </div>
            <div className="min-h-52 bg-gray-100 rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (sections.length === 0) {
    return null;
  }

  const activeSection = sections.find((s) => s.config.id === activeTab) || sections[0];
  const rawContent = activeSection?.content?.trim() || "";
  const cleanText = rawContent.replace(/<[^>]*>/g, "").trim();
  const hasContent = cleanText.length > 0 || /<img|<iframe|<video/i.test(rawContent);

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section
      className="py-16 flex justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={handleTouchEnd}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="w-full px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="items-center">
          <div>
            <div
              ref={tabContainerRef}
              className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-2 border-b pb-2 scrollbar-hide scroll-smooth"
            >
              {sections.map((section) => (
                <button
                  key={section.config.id}
                  ref={(el) => { tabRefs.current[section.config.id] = el; }}
                  onClick={() => setActiveTab(section.config.id)}
                  className={`py-2 px-4 text-sm font-medium whitespace-nowrap rounded-t-lg transition-colors flex-shrink-0 ${
                    activeTab === section.config.id
                      ? "text-green-600 bg-green-50 border-b-2 border-green-600"
                      : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                  }`}
                >
                  {section.config.title}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <div className="w-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex flex-col"
                  >
                    {hasContent ? (
                      <RichTextContent content={rawContent} />
                    ) : (
                      <div className="w-full flex-1 flex items-center justify-center min-h-[200px] sm:min-h-[240px] text-gray-400 dark:text-gray-500 text-sm font-medium italic border border-dashed border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 p-6 text-center select-none">
                        Informasi tidak tersedia.
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
