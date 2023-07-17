import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Rosario } from "next/font/google";
import "@/styles/globals.css";

const globalFont = Rosario({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <div className={globalFont.className}>
        <Topbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
