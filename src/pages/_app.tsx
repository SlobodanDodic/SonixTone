import { FormProvider } from "@/components/AddGuitar/FormContext";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import { Rosario } from "next/font/google";
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
