import { useEffect, useState } from "react";
import { Router } from "next/router";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormProvider } from "@/context/FormContext";
import { SessionProvider } from "next-auth/react";
import { api } from "@/utils/api";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Spinner from "@/components/Spinner";

const queryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <FormProvider>
              <Topbar />
              <Component {...pageProps} />
              <Footer />
            </FormProvider>
          </SessionProvider>
        </QueryClientProvider>
      )}
    </>
  );
};

export default api.withTRPC(MyApp);
