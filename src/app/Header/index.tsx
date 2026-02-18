"use client";

import { Input } from "@/components/Input";
import { LogInIcon, SearchIcon } from "lucide-react";
import { debounce, parseAsString, useQueryState } from "nuqs";

export default function Header() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  function handleSearchUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value, {
      limitUrlUpdates: e.target.value !== "" ? debounce(500) : undefined,
    });
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
        <button
          type="button"
          className="cursor-pointer size-8 rounded-full bg-navy-700 border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150"
        >
          <LogInIcon className="size-3.5 text-navy-200" />
        </button>
      </div>
    </div>
  );
}
