// import { useNavigation } from '@/hooks/useNavigation'
import useSetting from '@/hooks/useSettings';
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaThreads, FaTiktok, FaYoutube, FaQuestion } from "react-icons/fa6";
import React from 'react'

export default function Sosmed() {

    const { data: setting } = useSetting(`footer-${process.env.NEXT_PUBLIC_VILLAGE_ID}`, {});

    const renderSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case "facebook":
            return <FaFacebook className="h-4 w-4" />
            case "twitter":
            return <FaXTwitter className="h-4 w-4" />
            case "instagram":
            return <FaInstagram className="h-4 w-4" />
            case "youtube":
            return <FaYoutube className="h-4 w-4" />
            case "linkedin":
            return <FaLinkedin className="h-4 w-4" />
            case "threads":
            return <FaThreads className="h-4 w-4" />
            case "tiktok":
            return <FaTiktok className="h-4 w-4" />
            default:
            return <FaQuestion className="h-4 w-4" />
        }
    }

    return (
        <div className="flex items-center space-x-3">
            {
                setting?.value?.socialMedia ? Object.entries(setting?.value?.socialMedia).map(([platform, data]) => (
                    <a
                        key={platform}
                        href={data && typeof data === 'object' && data !== null && 'profileUrl' in data ? (data as { profileUrl: string }).profileUrl : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {renderSocialIcon(platform.toLowerCase())}
                    </a>
                )) : <p className="text-black text-center text-md dark:text-gray-400">[Sosial Media belum di atur]</p>
            }
        </div>
    )
}