import { Mail, Phone } from 'lucide-react'
import React from 'react'
import Sosmed from './sosmed'
import useSetting from '@/hooks/useSettings';

export default function Topbar() {
  const { data: setting, isLoading } = useSetting(`footer-${process.env.NEXT_PUBLIC_VILLAGE_ID}`, {});

  const Skeleton = ({ className }: { className: string }) => (
    <div className={`animate-pulse bg-white/20 rounded ${className}`} />
  )

  return (

    isLoading || !setting ? (
      <div className="bg-[#0d6b3f] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Side - Phone & Email */}
          <div className="flex items-center space-x-4 text-sm">
            {/* Phone */}
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full bg-green-800" />
              <Skeleton className="h-4 w-24 bg-green-800" />
            </div>
            {/* Email */}
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full bg-green-800" />
              <Skeleton className="h-4 w-36 bg-green-800" />
            </div>
          </div>

          {/* Right Side - Sosmed icons */}
          <div className="flex space-x-2">
            <Skeleton className="h-5 w-5 rounded-full bg-green-800" />
            <Skeleton className="h-5 w-5 rounded-full bg-green-800" />
            <Skeleton className="h-5 w-5 rounded-full bg-green-800" />
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-[#0d6b3f] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{setting?.value?.contactUs?.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{setting?.value?.contactUs?.email}</span>
            </div>
          </div>
          <Sosmed />
        </div>
      </div>
    )


  )
}