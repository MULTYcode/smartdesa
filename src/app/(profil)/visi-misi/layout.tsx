import Providers from "@/features/profil/provider/provider";

export default function ProfilLayout({ children }: { children: React.ReactNode }) {
    return (
      <Providers>
        {children}
      </Providers>
    );
  }