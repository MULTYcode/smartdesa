// import { Outfit } from 'next/font/google';
// import './globals.css';

// import { SidebarProvider } from '@/context/SidebarContext';
// import { ThemeProvider } from '@/context/ThemeContext';

// const outfit = Outfit({
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${outfit.className} dark:bg-gray-900`}>
//         <ThemeProvider>
//           <SidebarProvider>{children}</SidebarProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

"use client"

import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const outfit = Outfit({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <SidebarProvider>
              {children}
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </SidebarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
