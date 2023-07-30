import { getSession } from "next-auth/react";

export const useAuth = async (ctx: any, cb: any) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return cb({ session });
}
