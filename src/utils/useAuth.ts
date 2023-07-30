import { getSession } from "next-auth/react";
import { type GetServerSidePropsContext } from "next/types";

export const useAuth = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return ({ session });
}
// import { getSession } from "next-auth/react";
// import { type Session } from "next-auth";
// import { type GetServerSidePropsContext } from "next/types";


// export const useAuth = async (
//   ctx: {
//     req: GetServerSidePropsContext["req"];
//     res: GetServerSidePropsContext["res"];
//   }
// ): Promise<{ session: Session }> => {
//   const session = await getSession(ctx);

//   if (!session) {
//     return {
//       session: null,
//     };
//   }

//   return {
//     session,
//   };
// };
