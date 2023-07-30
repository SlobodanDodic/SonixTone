import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function IsAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return "Loading...";
    }

    if (status === "unauthenticated" || !session) {
      router.push("/");
    }

    return <Component {...props!} />;
  };
}

export default IsAuth;
