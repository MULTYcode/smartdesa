import LightboxImage from "@/features/infografis/component/Lightbox";
import useInfografis from "@/features/infografis/hooks/useInfografies";
import { Infografis } from "@/features/infografis/types/type";
import Image from "next/image";
import { useState } from "react";

export function InfografisSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const { data: infografis, isLoading: isInfografisLoading, isFetching: isInfografisFetching } = useInfografis({"search": searchValue, "page_size": 4});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
  
  return (
      <section id="article" className="py-16 bg-gray-50">
        <div className="px-6 sm:px-12 ">
          <div className="flex justify-between items-center mb-12">
            <div className="relative w-full col-span-6">
                <input id="search-dropdown"value={searchValue} onChange={handleChange} className="block py-3 px-5 pe-12 w-full rounded-sm text-sm text-gray-900 bg-gray-100 placeholder:text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari infografis ..." />
                <span className="absolute top-0 end-0 py-3 px-5 sm:ms-4 text-sm font-medium h-full text-white focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
               {isInfografisLoading || isInfografisFetching && (!infografis || infografis.length === 0) ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <div
                        key={index}
                        className="flex flex-col py-3 animate-pulse bg-gray-50 hover:bg-gray-100"
                        >
                        <dd className="h-6 bg-gray-200 rounded w-3/4 mb-2"></dd>
                        <dt className="h-4 bg-gray-200 rounded w-1/2"></dt>
                        </div>
                    ))
                    ) : !isInfografisFetching && (!infografis || infografis.length === 0) ? (
                    <div className="flex flex-col col-span-1 md:col-span-4 xl:col-span-4 items-center justify-center py-12">
                        <p className="text-black dark:text-gray-400 text-center">Tidak ada infografis</p>
                    </div>
                    ) : (
                    <>
                        {
                            infografis.map((infografis: Infografis , index:number) => (
                                <div className="" key={infografis.slug} onClick={() => {setIsOpen(true); setCurrentIndex(index)}}>
                                  <div className="relative shadow-sm col-span-1 md:col-span-4 xl:col-span-4 bg-white min-h-full p-1 group border-2 border-white hover:border-green-600 rounded-2xl transition duration-300 ease-in-out ">
                                    <div className="relative flex justify-center overflow-hidden w-full rounded-t-2xl shadow-lg">
                                      <div className="relative flex justify-center overflow-hidden w-full group rounded-t-2xl">
                                        <Image
                                            className="h-full w-full min-w-full object-cover"
                                            src={infografis.link?.startsWith("https:/") ?  infografis.link : '/images/not-fuound-image.jpg'}
                                            alt="Tour Banner"
                                            width={500}
                                            height={300}
                                            style={{
                                              width: "auto",
                                              height: "50vh"
                                            }}
                                          />
                                      </div>
                                    </div>
                                    <div className="p-3 md:p-6  text-black bg-white rounded-b-2xl">
                                        <h5 className="text-md font-bold mb-2 leading-tight line-clamp-2">
                                          {infografis.title}
                                        </h5>
                                    </div>
                                  </div>
                                </div>
                            ))
                        }
                        <LightboxImage data={infografis} isOpen={isOpen} currentIndex={currentIndex} setIsOpen={setIsOpen} />
                    </>
                )}
          </div>
        </div>
      </section> 
  )
}
