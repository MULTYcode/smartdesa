import RichTextContent from "@/components/common/RichTextContent"
import { useState } from "react";

interface WellcomeSectionProps {
  data: {
    wellcome:string,
    program:string
  }
}

export function SambutanSection({ data }: WellcomeSectionProps) {
  const [activeTab, setActiveTab] = useState("kata sambutan");

  return (
    <section className="py-16 flex justify-center">
      <div className="w-full px-6 sm:px-0 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl ">
        <div className="items-center">
          <div>
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveTab("kata sambutan")}
                className={`py-2 px-4 text-sm font-medium border-b-2 ${
                  activeTab === "kata sambutan"
                    ? "text-green-600 border-green-600"
                    : "text-gray-600 border-transparent hover:border-green-600"
                }`}
              >
                Kata Sambutan
              </button>
              <button
                onClick={() => setActiveTab("program")}
                className={`py-2 px-4 text-sm font-medium border-b-2 ${
                  activeTab === "program"
                    ? "text-green-600 border-green-600"
                    : "text-gray-600 border-transparent hover:border-green-600"
                }`}
              >
                Program
              </button>
            </div>
            <div className="mt-4">
              {activeTab === "kata sambutan" && 
              <div className="mt-4 min-h-52 flex items-center justify-center">
                  <RichTextContent
                    content={data.wellcome}
                  />
                </div>
                }
              {activeTab === "program" && 
              <div className="mt-4 min-h-52 flex items-center justify-center">
                <RichTextContent
                  content={data.program}
                />
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
