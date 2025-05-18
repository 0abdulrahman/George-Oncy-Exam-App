import NextAuthProvider from "./_components/next-auth.provider";
import ReactQueryProvider from "./_components/react-query.provider";
import { ThemeProvider } from "./_components/theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["dark", "light"]} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
