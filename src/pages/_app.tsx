import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormProvider } from "@/context/FormContext";
import { SessionProvider, getSession } from "next-auth/react";
import { Rosario } from "next/font/google";
import { api } from "@/utils/api";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const queryClient = new QueryClient();
const globalFont = Rosario({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={globalFont.className}>
          <FormProvider>
            <Topbar />
            <Component {...pageProps} />
            <Footer />
          </FormProvider>
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default api.withTRPC(MyApp);
