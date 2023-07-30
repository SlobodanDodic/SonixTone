"use client";
import { useFormState } from "@/context/FormContext";
import { Brand } from "@/components/AddGuitar/steps/Brand";
import { Details } from "@/components/AddGuitar/steps/Details";
import { Preview } from "@/components/AddGuitar/steps/Preview";
// Auth
import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <Brand />;
    case 2:
      return <Details />;
    case 3:
      return <Preview />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center p-4 text-gray-600">
      <div className="absolute left-1/2 top-0 -z-20 hidden h-full w-screen max-w-xl -translate-x-1/2 transform justify-center bg-gradient-to-b from-transparent via-red-900 to-transparent sm:flex" />
      <div className="absolute left-1/2 top-0 -z-10 hidden h-full w-screen max-w-[574px] -translate-x-1/2 transform justify-center bg-white sm:flex" />
      <div className="flex w-full max-w-xl items-center justify-center">
        <ActiveStepFormComponent />
      </div>
    </main>
  );
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   return useAuth(ctx, ({ session }: any) => {
//     return {
//       props: { session },
//     };
//   });
// }

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const { session } = await useAuth(ctx);
//   return {
//     props: { session },
//   };
// }

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
