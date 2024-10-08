"use client";
import React from "react";
import ThemesSearch from "./themes-search";
import { getAllThemes, getThemesFromSearch, ZenTheme } from "@/lib/themes";
import ThemeCard from "./theme-card";
import { Button } from "./ui/button";

export default function MarketplacePage({ themes }: {themes:ZenTheme[]}) {
  const [searchInput, setSearchInput] = React.useState("");
  const [tags, setTags] = React.useState<string[]>(["all"]);

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center h-full">
      <div className="mx-auto w-full text-center border-b pt-48 pb-24 mb-12 bg-surface dark:bg-[#121212]">
        <div className="w-full lg:w-1/2 xl:w-1/2 mx-auto px-2 lg:px-none">
          <h1 className="text-4xl lg:text-7xl font-bold">Themes Store</h1>
          <ThemesSearch input={searchInput} setInput={setSearchInput} tags={tags} setTags={setTags} />
        </div>
      </div>
      <div className="px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-10 w-full lg:w-1/2 xl:w-2/3 2xl:w-3/4">
        {getThemesFromSearch(themes, searchInput, tags).map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </div>
    </div>
  );
}
