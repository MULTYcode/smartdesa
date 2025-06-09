import { Outfit } from 'next/font/google';
import './globals.css';

<<<<<<< HEAD
// import { SidebarProvider } from '@/context/SidebarContext';
// import { ThemeProvider } from '@/context/ThemeContext';
import ClientProviders from './client-provider';
=======
import { SidebarProvider } from '@/context/SidebarContext';
// import { ThemeProvider } from '@/context/ThemeContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
>>>>>>> a9e8a8c (update)

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
<<<<<<< HEAD
        {/* <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
         */}
          <ClientProviders>
            {children}
          </ClientProviders>
=======
        <QueryClientProvider client={queryClient}>
          {/* <ThemeProvider> */}
            <SidebarProvider>
              {children}
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </SidebarProvider>
          {/* </ThemeProvider> */}
        </QueryClientProvider>
>>>>>>> a9e8a8c (update)
      </body>
    </html>
  );
}