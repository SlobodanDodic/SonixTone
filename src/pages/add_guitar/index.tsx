"use client";
import { useFormState } from "@/context/FormContext";
import { Brand } from "@/components/AddGuitar/Brand/Brand";
import { Detail } from "@/components/AddGuitar/Detail/Detail";
import { Preview } from "@/components/AddGuitar/Preview/Preview";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <Brand />;
    case 2:
      return <Detail />;
    case 3:
      return <Preview />;
    default:
      return null;
  }
}

export default function AddGuitar() {
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

// Redirect not logged-in user:
import { type GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "@/server/auth";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
