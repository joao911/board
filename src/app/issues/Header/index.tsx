"use client";

import { Input } from "@/components/Input";
import { authClient } from "@/lib/auth-client";
import { LoaderIcon, LogInIcon } from "lucide-react";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();

  async function handleSigIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  }

  async function handleSigOut() {
    await authClient.signOut();
  }

  return (
    <div className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl"> Product RoadMap</h1>
        <p className="text-sm text-navy-100">
          Follow the development progress of our product
        </p>
      </div>
      <div className="flex items-center gap-4">
        {isPending ? (
          <div className="cursor-pointer size-8 rounded-full bg-navy-700 border-navy-500 flex items-center justify-center">
            <LoaderIcon className="size-3.5 text-navy-200 animate-spin" />
          </div>
        ) : session?.user ? (
          <button
            onClick={handleSigOut}
            type="button"
            className="size-8 rounded-full overflow-hidden"
          >
            <img
              src={session.user.image ?? ""}
              alt={session.user.name ?? ""}
              className="size-8 rounded-full cursor-pointer"
            />
          </button>
        ) : (
          <button
            onClick={handleSigIn}
            type="button"
            className="cursor-pointer size-8 rounded-full bg-navy-700 border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150"
          >
            <LogInIcon className="size-3.5 text-navy-200" />
          </button>
        )}
      </div>
    </div>
  );
}
