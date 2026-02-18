"use client";

import { Input } from "@/components/Input";
import { authClient } from "@/lib/auth-client";
import { LoaderIcon, LogInIcon, SearchIcon } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      shallow: false,
    }),
  );

  function handleSearchUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value, {
      limitUrlUpdates: e.target.value !== "" ? debounce(500) : undefined,
    });
  }

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
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-navy-200 pointer-events-none" />
          <Input
            value={search}
            onChange={handleSearchUpdate}
            placeholder="Search for features"
            className="w-67.5 pl-8"
          />
        </div>
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
