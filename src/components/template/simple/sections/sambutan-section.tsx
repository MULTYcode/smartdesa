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
    <section className="py-16">
      <div className="container mx-auto px-4">
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
              <div className="mt-4">
                  <RichTextContent
                    content={data.wellcome}
                    className="px-4 py-4 md:px-16"
                  />
                </div>
                }
              {activeTab === "program" && 
              <div className="mt-4">
                <RichTextContent
                  content={data.program}
                  className="px-4 py-4 md:px-16"
                />
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
