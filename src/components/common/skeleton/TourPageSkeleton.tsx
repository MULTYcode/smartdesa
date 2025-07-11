// components/common/skeletons/TourPageSkeleton.tsx

import React from "react";
import { CardSkeleton } from "./CardSkeleton";
export default function TourPageSkeleton() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 sm:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <CardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
